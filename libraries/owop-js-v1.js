function Bucket(rate, time) {
    this.lastCheck = Date.now();
    this.allowance = rate;
    this.rate = rate;
    this.time = time;
    this.infinite = false;
}

Bucket.prototype.canSpend = function(count) {
    if (this.infinite) {
        return true;
    }
    this.allowance += (Date.now() - this.lastCheck) / 1000 * (this.rate / this.time);
    this.lastCheck = Date.now();
    if (this.allowance > this.rate) {
        this.allowance = this.rate;
    }
    if (this.allowance < count) {
        return false;
    }
    this.allowance -= count;
    return true;
};
var OJS = class extends EventEmitter {
    //  Options: "no_log", "ws", "origin", "agent", "index"
    constructor(options) {
        super();
        let init = {};
        let that = this;

        if (!options.ws) options.ws = OWOP.options.serverAddress[0].url;

        if (options.origin) init.origin = options.origin;
        if (options.agent) init.agent = options.agent;
        const OJS = this;

        this.ws = new WebSocket(options.ws, null, init);
        this.ws.binaryType = 'arraybuffer';
        this.RANKS = {
            ADMIN: 3,
            MOD: 2,
            USER: 1,
            NONE: 0
        };
        this.options = {
            isJoined: false,
            canSay: true,
            tickAmount: 30,
            special: 0,
            class: null,
            chunkSize: 16,
            netUpdateSpeed: 20,
            clusterChunkAmount: 64,
            maxWorldNameLength: 24,
            worldBorder: 0xFFFFF,
            chatBucket: [4, 6],
            captchaState: {
                CA_WAITING: 0,
                CA_VERIFYING: 1,
                CA_VERIFIED: 2,
                CA_OK: 3,
                CA_INVALID: 4
            },
            captchaNames: {
                0: "WAITING",
                1: "VERIFYING",
                2: "VERIFIED",
                3: "OK",
                4: "INVALID"
            },
            tools: {
                id: {
                    'cursor': 0,
                    'move': 1,
                    'pipette': 2,
                    'eraser': 3,
                    'zoom': 4,
                    'fill': 5,
                    'paste': 6,
                    'export': 7,
                    'line': 8,
                    'protect': 9
                },
                0: 'cursor',
                1: 'move',
                2: 'pipette',
                3: 'eraser',
                4: 'zoom',
                5: 'fill',
                6: 'paste',
                7: 'export',
                8: 'line',
                9: 'protect'
            },
            misc: {
                worldVerification: OWOP.options.serverAddress[0].proto.misc.worldVerification,
                chatVerification: OWOP.options.serverAddress[0].proto.misc.chatVerification,
                tokenVerification: OWOP.options.serverAddress[0].proto.misc.tokenVerification
            },
            opCode: {
                setId: 0,
                worldUpdate: 1,
                chunkLoad: 2,
                teleport: 3,
                setRank: 4,
                captcha: 5,
                setPQuota: 6,
                chunkProtected: 7
            }
        };
        this.chat = {
            recvModifier: msg => msg,
            sendModifier: msg => msg,
            send: msg => OJS.ws.send(OJS.chat.sendModifier(msg) + OJS.options.misc.chatVerification),
            sendWS: msg => {
                OJS.ws.send(msg)
            },
            firstdata: () => OJS.chat.history[0],
            lastdata: () => OJS.chat.history[OJS.chat.history.length - 1],
            history: []
        };
        this.world = {
            join: (world = "main") => {
                if (OJS.ws.readyState !== 1) OJS.ws = new WebSocket(options.ws, null, init);
                let ints = [];
                world = world.toLowerCase();

                for (let i = 0; i < world.length && i < 24; i++) {
                    let charCode = world.charCodeAt(i);
                    if ((charCode < 123 && charCode > 96) || (charCode < 58 && charCode > 47) || charCode === 95 || charCode === 46) {
                        ints.push(charCode);
                    }
                }
                let array = new ArrayBuffer(ints.length + 2);
                let dv = new DataView(array);
                for (let i = ints.length; i--;) {
                    dv.setUint8(i, ints[i]);
                }
                dv.setUint16(ints.length, OJS.options.misc.worldVerification, true);
                OJS.ws.send(array);
                OJS.utils.log("Joining world: " + world);
                OJS.emit(OJS.events.CONNECT);
                OJS.world.name = world;
                OJS.options.isJoined = true;
                return true;
            },
            leave: () => {
                OJS.ws.close()
            },
            move: (x, y) => {
                if (this.ws.readyState !== 1) return;
                let array = new ArrayBuffer(12);
                let dv = new DataView(array);

                dv.setInt32(0, 16 * x, true);
                dv.setInt32(4, 16 * y, true);
                dv.setUint8(8, OWOP.player.selectedColor[0]);
                dv.setUint8(9, OWOP.player.selectedColor[1]);
                dv.setUint8(10, OWOP.player.selectedColor[2]);
                dv.setUint8(11, OJS.options.tools.id[OWOP.player.tool.id]);
                OJS.ws.send(array);
                OJS.player.x = Math.round(16 * x);
                OJS.player.y = Math.round(16 * y);
            },
            setPixel: async function (x = OJS.player.x, y = OJS.player.y, color = OJS.player.color) {
                let c = OWOP.world.getPixel(x, y);
                //if(isProtected(x, y)) return;
                if (c) if (c[0] === color[0] && c[1] === color[1] && c[2] === color[2]) return;
                OJS.world.move(x, y);
                if (!OJS.utils.bucket.canSpend(1)) return false;
                let array = new ArrayBuffer(11);
                let dv = new DataView(array);

                dv.setInt32(0, x, true);
                dv.setInt32(4, y, true);
                dv.setUint8(8, color[0]);
                dv.setUint8(9, color[1]);
                dv.setUint8(10, color[2]);
                OJS.player.color = [color[0], color[1], color[2]];

                OJS.ws.send(array);
                return true;
            },
            clearChunk: (x = OJS.player.x, y = OJS.player.y) => {
                if (OJS.player.rank >= OJS.RANKS.MOD) {
                    let array = new ArrayBuffer(9);
                    let dv = new DataView(array);
                    dv.setInt32(0, x, true);
                    dv.setInt32(4, y, true);
                    OJS.ws.send(array);
                    return true;
                } else {
                    console.error("[ERROR]: You are not admin!");
                    return false
                }
            },
            setColor: function (rgb) {
                if (typeof rgb !== "object") return OJS.utils.log(`Please use array.`);
                let array = new ArrayBuffer(12);
                let dv = new DataView(array);
                dv.setInt32(0, OJS.player.x, true);
                dv.setInt32(4, OJS.player.y, true);
                dv.setUint8(8, rgb[0]);
                dv.setUint8(9, rgb[1]);
                dv.setUint8(10, rgb[2]);
                dv.setUint8(11, OJS.player.tool);
                OJS.ws.send(array);
                OJS.player.color = [rgb[0], rgb[1], rgb[2]];
            },
            setTool: function (toolId) {
                let array = new ArrayBuffer(12);
                let dv = new DataView(array);
                dv.setInt32(0, OJS.player.x, true);
                dv.setInt32(4, OJS.player.y, true);
                dv.setUint8(8, OJS.player.color[0]);
                dv.setUint8(9, OJS.player.color[1]);
                dv.setUint8(10, OJS.player.color[2]);
                dv.setUint8(11, toolId);
                OJS.ws.send(array);
                OJS.player.tool = toolId;
            },
            protectChunk: function (x, y, newState) {
                if (OJS.player.rank >= OJS.RANKS.MOD) {
                    let array = new ArrayBuffer(10);
                    let dv = new DataView(array);
                    dv.setInt32(0, x, true);
                    dv.setInt32(4, y, true);
                    dv.setUint8(8, newState);
                    OJS.ws.send(array);
                } else {
                    console.error("[ERROR]: No permission.")
                }
            },
            getPixel: OWOP.world.getPixel,
            name: null
        };
        this.player = {
            id: 0,
            rank: 1,
            x: 0,
            y: 0,
            color: [0, 0, 0],
            tool: 1
        };
        this.players = {};
        this.utils = {
            bucket: new Bucket(32, 4),
            log: msg => {
                if (!options.no_log && msg[0] !== "[" && isNaN(parseInt(msg[0]))) console.log(`${options.index ? `(${options.index}) ` : ""}` + `[OWOP.js]: ${msg}`)
            },
            dataHandler: async data => {
                if (typeof data !== "object") return;
                let op = OJS.options.opCode;
                data = new DataView(data);

                switch (data.getUint8(0)) {
                    case op.setId:
                        OJS.player.id = data.getUint32(1);
                        OJS.utils.log(`Joined world ${OJS.world.name}, your ID is: ${data.getUint32(1)}.`);
                        OJS.emit(OJS.events.ID, OJS.player.id);
                        break;
                    case op.worldUpdate:
                        let updated = false;
                        let updates = {};
                        for (let i = data.getUint8(1); i--;) {
                            updated = true;
                            let pid = data.getUint32(2 + i * 16);
                            let pmx = data.getUint32(2 + i * 16 + 4);
                            let pmy = data.getUint32(2 + i * 16 + 8);
                            let pr = data.getUint8(2 + i * 16 + 12);
                            let pg = data.getUint8(2 + i * 16 + 13);
                            let pb = data.getUint8(2 + i * 16 + 14);
                            let ptool = data.getUint8(2 + i * 16 + 15);
                            updates[pid] = {
                            x: pmx,
                            y: pmy,
                            rgb: [pr, pg, pb],
                            tool: OJS.options.tools[ptool]
                        };
                        OJS.players[pid] = {
                            x: updates[pid].x >> 4,
                            y: updates[pid].y >> 4,
                            rgb: updates[pid].rgb,
                            tool: updates[pid].tool
                        };
                    }
                    if (updated) OJS.emit(OJS.events.UPDATE, updates);
                    break;
                case op.setRank:
                    OJS.utils.log(`Got rank ${data.getUint8(1)}`);
                    OJS.player.rank = data.getUint8(1);
                    OJS.emit(OJS.events.RANK, OJS.player.rank);
                    break;
                case op.captcha:
                    console.log(OJS.options.captchaNames[data.getUint8(1)]);
                    switch(data.getUint8(1)) {
                        case OJS.options.captchaState.CA_WAITING:
                            this.options.captcha = true;
                            if(!localStorage.owopcaptcha) OJS.ws.send(OWOP.options.serverAddress[0].proto.misc.tokenVerification + await renderCaptcha())
                            else OJS.ws.send(`CaptchALETMEINPLZ${localStorage.owopcaptcha}`);
                            break;
                        case OJS.options.captchaState.CA_OK:
                            OJS.world.join(OWOP.world.name);
                    };
                    OJS.emit(OJS.events.CAPTCHA);
                    break;
                case op.teleport:
                    let x = data.getInt32(1, !0),
                        y = data.getInt32(5, !0);
                    OJS.emit(OJS.events.TELEPORT, x, y);
                    break;
                case op.setPQuota:
                    let rate = data.getUint16(1, !0),
                        time = data.getUint16(3, !0);
                    OJS.utils.bucket = new Bucket(rate, time);
                    OJS.emit(OJS.events.PQUOTA, rate, time);
                    OJS.utils.log(`Got new PQuota: ${rate}x${time}.`);
                    break;
                }
            }
        };
        this.events = {
            CONNECT: 0,
            data: 1,
            ID: 2,
            RANK: 3,
            DISCONNECT: 4,
            UPDATE: 5,
            TELEPORT: 6,
            CAPTCHA: 7,
            PQUOTA: 8,
            CHUNK: 9
        };

        this.ws.onopen = () => {
            this.emit("open")
        };
        this.ws.onmessage = msg => {
            OJS.utils.dataHandler(msg.data);
            if (typeof msg.data !== "string") return;
            if (msg.data.startsWith('<')) return;
            OJS.utils.log(OJS.chat.recvModifier(msg.data));
            this.emit("data", OJS.chat.recvModifier(msg.data));
        };
        this.ws.onclose = () => {
            this.emit("close")
        };

    };
};
let struct = OJS;
