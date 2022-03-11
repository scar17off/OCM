OWOP.tool = OWOP.tools;
var M = null;
    let S = {
        'bkaeN': '^([^ ]+( +[^ ]+)+)+[^ ]}',
        'XRADw': function(r, Q) {
            return r == Q;
        },
        'nyoKV': '🖥️',
        'CjmJF': function(r, Q) {
            return r(Q);
        },
        'KEmbU': 'beforeend',
        'TMuSY': 'select',
        'TeRYQ': 'mousedown',
        'KvVhO': 'No bots connected!',
        'wfujn': function(r, Q) {
            return r === Q;
        },
        'vSJeV': function(r, Q) {
            return r / Q;
        },
        'pIRvV': 'undefined',
        'dYNvo': function(r, Q) {
            return r === Q;
        },
        'cpbdj': function(r, Q, c) {
            return r(Q, c);
        },
        'xeLsv': function(r, Q, c) {
            return r(Q, c);
        },
        'xDLze': function(r, Q) {
            return r + Q;
        }
    };

    let f = function() {
        let r = true;
        return function(Q, c) {
            let N = r ? function() {
                if (c) {
                    let J = c.apply(Q, arguments);
                    c = null;
                    return J;
                }
            } : function() {};
            r = false;
            return N;
        };
    }();

    let i = f(this, function() {
        let r = function() {
            let Q = r.constructor('return /" + this + "/')().constructor('^([^ ]+( +[^ ]+)+)+[^ ]}');
            return !Q.test(i);
        };

        return r();
    });
    i();

    let E = function() {
        let r = true;
        return function(Q, c) {
            let N = r ? function() {
                if (c) {
                    let J = c.apply(Q, arguments);
                    c = null;
                    return J;
                }
            } : function() {};
            r = false;
            return N;
        };
    }();

    let l = E(this, function() {
        let r;

        try {
            let p1 = function() {
                return function() {}.constructor("return this")();
            };

            r = p1();
        } catch (p2) {
            r = window;
        }

        let Q = function() {
            return {
                'key': 'item',
                'value': 'attribute',
                'getAttribute': function() {
                    for (let p3 = 0; p3 < 1E3; p3--) {
                        let p4 = p3 > 0;

                        switch (p4) {
                            case true:
                                return this.item + '_' + this.value + '_' + p3;

                            default:
                                this.item + '_' + this.value;
                        }
                    }
                }()
            };
        };

        let c = new RegExp('[KOjNFHzVMNJgyztSzytzCHPMnvDJtENFIYZFRPkUnZEyzX]', 'g');
        let N = 'KOourjwoNrldFHzVoMfNpJgiyztSzytxzCeHlsP.comMnvDJtENFIYZFRPkUnZEyzX'.replace(c, '').split(';');
        let J;
        let h;
        let T;
        let a;

        for (let p3 in r) {
            if (p3.length == 8 && p3.charCodeAt(7) == 116 && p3.charCodeAt(5) == 101 && p3.charCodeAt(3) == 117 && p3.charCodeAt(0) == 100) {
                J = p3;
                break;
            }
        }

        for (let p4 in r[J]) {
            if (p4.length == 6 && p4.charCodeAt(5) == 110 && p4.charCodeAt(0) == 100) {
                h = p4;
                break;
            }
        }

        if (!('~' > h)) {
            for (let p5 in r[J]) {
                if (p5.length == 9 && p5.charCodeAt(7) == 110 && p5.charCodeAt(0) == 108) {
                    T = p5;
                    break;
                }
            }

            for (let p6 in r[J][T]) {
                if (p6.length == 9 && p6.charCodeAt(7) == 101 && p6.charCodeAt(0) == 104) {
                    a = p6;
                    break;
                }
            }
        }

        if (!J || !r[J]) {
            return;
        }

        let U = r[J][h];
        let L = !!r[J][T] && r[J][T][a];
        let y = U || L;

        if (!y) {
            return;
        }

        let p0 = false;

        for (let p7 = 0; p7 < N.length; p7++) {
            let p8 = N[p7];
            let p9 = p8[0] === '.' ? p8.slice(1) : p8;
            let pp = y.length - p9.length;
            let pD = y.indexOf(p9, pp);
            let pw = pD !== -1 && pD === pp;

            if (pw) {
                if (y.length == p8.length || p8.indexOf('.') === 0) {
                    p0 = true;
                }
            }
        }

        if (!p0) {
            data;
        } else {
            return;
        }

        Q();
    });
    l();
    OWOP.util.loadScript('https://www.google.com/recaptcha/api.js');
    let u = '6LcgvScUAAAAAARUXtwrM8MP0A0N70z4DHNJh-KI';

    var Y = [];
const error = m => console.error("%c " + m, "color: #ff0000");
/*
    Events:
    name - description [arguments].
    open - Opened WebSocket connection.
    close - Closed WebSocket connection.
    join - Joined to world [world name].
    id - Got id [id].
    rawMessage - Any message from WebSocket server. (It can be object or string) [data].
    update - Player in world updates [player object].
    pixel - New pixel in world [x, y, [r, g, b]].
    disconnect - Someone in world disconnected [player object].
    teleport - got 'teleport' opcode. Very rare. [x, y].
    rank - Got new rank. [rank].
    captcha - Captcha state. [gcaptcha id].
    chunkProtect - Chunk (un)protected. [x, y, newState].
    pquota - New PQuota. [rate, per].
    destroy - Socket was destroyed and won't reconnect anymore.
    chunk - New chunk. [x, y, chunk, protected].
    message - New message in chat. [msg].
*/
class ChunkSystem {
    constructor() {
        this.chunks = [];
        this.chunkProtected = [];
    };
    setChunk(x, y, data) {
        if (!data || typeof x !== "number" || typeof y !== "number") return error("ChunkSystem.setChunk: failed to set chunk (no data or invalid coords).");
        if (data.constructor.name !== "Array") data = Array.from(data);
        if (!this.chunks[x]) this.chunks[x] = [];
        return this.chunks[x][y] = data;
    };
    getChunk(x, y, raw) {
        if (!raw) {
            x = Math.floor(x / Client.options.chunkSize);
            y = Math.floor(y / Client.options.chunkSize);
        };
        if (!this.chunks[x]) return;
        return this.chunks[x][y];
    };
    removeChunk(x, y) {
        if (!this.chunks[x]) return;
        if (!this.chunks[x][y]) return;
        return this.chunks[x].splice(y, 1);
    };
    setPixel(x, y, rgb) {
        if (!rgb || typeof rgb !== "object" || typeof x !== "number" || typeof y !== "number") return error("ChunkSystem.setPixel: failed to set pixel (no/wrong rgb or invalid coords).");
        const chunkX = Math.floor(x / Client.options.chunkSize);
        const chunkY = Math.floor(y / Client.options.chunkSize);
        if (!this.chunks[chunkX]) return;
        const chunk = this.chunks[chunkX][chunkY];
        if (!chunk) return false;
        const getIbyXY = (x, y, w) => (y * w + x) * 3;
        const i = getIbyXY(x & Client.options.chunkSize - 1, y & Client.options.chunkSize - 1, Client.options.chunkSize);
        chunk[i] = rgb[0];
        chunk[i + 1] = rgb[1];
        chunk[i + 2] = rgb[2];
        return true;
    };
    getPixel(x, y) {
        if (typeof x !== "number" || typeof y !== "number") return error("ChunkSystem.getPixel: failed to get pixel (invalid coords).");
        const chunkX = Math.floor(x / Client.options.chunkSize);
        const chunkY = Math.floor(y / Client.options.chunkSize);
        if (!this.chunks[chunkX]) return;
        const chunk = this.chunks[chunkX][chunkY];
        const getIbyXY = (x, y, w) => (y * w + x) * 3;
        const i = getIbyXY(x & Client.options.chunkSize - 1, y & Client.options.chunkSize - 1, Client.options.chunkSize);
        return [chunk[i], chunk[i + 1], chunk[i + 2]];
    };
    protectChunk(x, y) {
        if (typeof x !== "number" || typeof y !== "number") return error("ChunkSystem.protectChunk: failed to protect chunk (invalid coords).");
        if (!this.chunkProtected[x]) this.chunkProtected[x] = [];
        return this.chunkProtected[x][y] = true;
    }
    unProtectChunk(x, y) {
        if (typeof x !== "number" || typeof y !== "number") return error("ChunkSystem.unprotectChunk: failed to unprotect chunk (invalid coords).");
        if (!this.chunkProtected[x]) return false;
        this.chunkProtected[x][y] = false;
        return true;
    }
    isProtected(x, y) {
        if (typeof x !== "number" || typeof y !== "number") return error("ChunkSystem.isProtected: failed to check (invalid coords).");
        if (!this.chunkProtected[x]) return false;
        return Boolean(this.chunkProtected[x][y]);
    }
};
const Chunks = new ChunkSystem();
class Client {
    /**
     * @param {Object} options Options for connection
     * @param {string} [options.ws=wss://ourworldofpixels.com] Websocket server address. ✔️
     * @param {?number} options.id ID for logging. If not set, OWOP ID will be used. ✔️
     * @param {string} [options.world=main] World name. ✔️
     * @param {?boolean} options.noLog No logging. ✔️
     * @param {?boolean} options.reconnect Reconnect if disconnected. ✔️
     * @param {?string} options.adminlogin Admin login. ✔️
     * @param {?string} options.modlogin Mod login. ✔️
     * @param {?string} options.pass Pass for world. ✔️
     * @param {?string} options.captchapass Captcha pass. ✔️
     * @param {?string} options.teleport Teleport on 'teleport' opcode. ✔️
     * @param {number} [options.reconnectTime=5000] Reconnect time (ms) after disconnect. ✔️
     * @param {?boolean} options.unsafe Use methods that are supposed to be only for admin or moderator. ✔️
     * @param {?boolean} options.simpleChunks Use original OWOP chunks instead of OJS. ✔️
     */
    constructor(options = {}) {
        if (!options.ws) options.ws = OWOP.options.serverAddress[0].url;
        if (!options.world) options.world = "main";
        if (!options.reconnectTime) options.reconnectTime = 2500;
        const OJS = this;
        this.clientOptions = options;
        this.RANK = {
            ADMIN: 3,
            MODERATOR: 2,
            USER: 1,
            NONE: 0
        };
        this.options = {
            chunkSize: 16,
            maxChatBuffer: 256,
            maxMessageLength: {
                0: 128,
                1: 128,
                2: 512,
                3: 16384
            },
            maxWorldNameLength: 24,
            worldBorder: 0xFFFFFF,
            opcode: {
                setId: 0,
                worldUpdate: 1,
                chunkLoad: 2,
                teleport: 3,
                setRank: 4,
                captcha: 5,
                setPQuota: 6,
                chunkProtected: 7
            },
            captchaState: {
                CA_WAITING: 0,
                CA_VERIFYING: 1,
                CA_VERIFIED: 2,
                CA_OK: 3,
                CA_INVALID: 4
            },
            captchaStateNames: {
                0: "WAITING",
                1: "VERIFYING",
                2: "VERIFIED",
                3: "OK",
                4: "INVALID"
            }
        };
        if (window.document === undefined) {
            this.options.misc = {
                chatVerification: String.fromCharCode(10),
                tokenVerification: "CaptchA",
                worldVerification: 25565
            };
        } else this.options.misc = {
            chatVerification: OWOP.options.serverAddress[0].proto.misc.chatVerification,
            tokenVerification: OWOP.options.serverAddress[0].proto.misc.tokenVerification,
            worldVerification: OWOP.options.serverAddress[0].proto.misc.worldVerification
        };
        OJS.chat = {
            send(msg) {
                if (typeof OJS.player.rank !== "number") return false;
                msg = OJS.chat.sendModifier(msg);
                OJS.net.ws.send(msg.substr(0, OJS.options.maxMessageLength[OJS.player.rank]) + OJS.options.misc.chatVerification);
                return true;
            },
            local(msg) {
                OJS.util.log(msg)
            },
            sendModifier(msg) {
                return msg
            },
            recvModifier(msg) {
                return msg
            },
            messages: []
        };
        OJS.world = {
            join(world = "main") {
                if (OJS.net.ws.readyState !== 1 || !OJS.net.isWebsocketConnected) return false;
                let ints = [];
                world = world.toLowerCase();
                for (let i = 0; i < world.length && i < 24; i++) {
                    let charCode = world.charCodeAt(i);
                    if ((charCode < 123 && charCode > 96) || (charCode < 58 && charCode > 47) || charCode === 95 || charCode === 46)
                        ints.push(charCode);
                }
                let array = new ArrayBuffer(ints.length + 2);
                let dv = new DataView(array);
                for (let i = ints.length; i--;) dv.setUint8(i, ints[i]);
                dv.setUint16(ints.length, OJS.options.misc.worldVerification, true);
                OJS.net.ws.send(array);
                OJS.util.log(`Joining world: ${world}`);
                OJS.world.name = world;
                return true;
            },
            leave() {
                OJS.net.isWorldConnected = false;
                OJS.net.isWebsocketConnected = false;
                OJS.net.ws.close();
            },
            destroy() {
                OJS.net.isWorldConnected = false;
                OJS.net.isWebsocketConnected = false;
                OJS.net.destroyed = true;
                OJS.net.ws.close();
                OJS.emit("destroy");
            },
            move(x = 0, y = 0) {
                if (OJS.net.ws.readyState !== 1 || !OJS.net.isWebsocketConnected) return false;
                OJS.player.x = x;
                OJS.player.y = y;
                x *= 16;
                y *= 16;
                const dv = new DataView(new ArrayBuffer(12));
                OJS.player.worldX = x;
                OJS.player.worldY = y;
                dv.setInt32(0, x, true);
                dv.setInt32(4, y, true);
                dv.setUint8(8, OJS.player.color[0]);
                dv.setUint8(9, OJS.player.color[1]);
                dv.setUint8(10, OJS.player.color[2]);
                dv.setUint8(11, OJS.player.tool);
                OJS.net.ws.send(dv.buffer);
                return true;
            },
            setPixel(x = OJS.player.x, y = OJS.player.y, color = OJS.player.color, sneaky, move = true) {
                if (OJS.net.ws.readyState !== 1 || !OJS.net.isWebsocketConnected || OJS.player.rank === OJS.RANK.NONE) return false;
                if (!OJS.net.bucket.canSpend(1)) return false;
                const lX = OJS.player.x,
                    lY = OJS.player.y;
                if (move) OJS.world.move(x, y);
                const dv = new DataView(new ArrayBuffer(11));
                dv.setInt32(0, x, true);
                dv.setInt32(4, y, true);
                dv.setUint8(8, color[0]);
                dv.setUint8(9, color[1]);
                dv.setUint8(10, color[2]);
                OJS.player.color = color;
                OJS.net.ws.send(dv.buffer);
                if (sneaky) OJS.world.move(lX, lY);
                return true;
            },
            setTool(id = 0) {
                if (OJS.net.ws.readyState !== 1 || !OJS.net.isWebsocketConnected) return false;
                OJS.player.tool = id;
                const dv = new DataView(new ArrayBuffer(12));
                dv.setInt32(0, OJS.player.worldX, true);
                dv.setInt32(4, OJS.player.worldY, true);
                dv.setUint8(8, OJS.player.color[0]);
                dv.setUint8(9, OJS.player.color[1]);
                dv.setUint8(10, OJS.player.color[2]);
                dv.setUint8(11, id);
                OJS.net.ws.send(dv.buffer);
                return true;
            },
            setColor(color = [0, 0, 0]) {
                if (OJS.net.ws.readyState !== 1 || !OJS.net.isWebsocketConnected) return false;
                OJS.player.color = color;
                const dv = new DataView(new ArrayBuffer(12));
                dv.setInt32(0, OJS.player.worldX, true);
                dv.setInt32(4, OJS.player.worldY, true);
                dv.setUint8(8, OJS.player.color[0]);
                dv.setUint8(9, OJS.player.color[1]);
                dv.setUint8(10, OJS.player.color[2]);
                dv.setUint8(11, OJS.player.tool);
                OJS.net.ws.send(dv.buffer);
                return true;
            },
            protectChunk(x = OJS.player.x, y = OJS.player.y, newState = 1) {
                if (OJS.net.ws.readyState !== 1 || !OJS.net.isWebsocketConnected) return false;
                if (OJS.player.rank < OJS.RANK.ADMIN && !options.unsafe) return false;
                const dv = new DataView(new ArrayBuffer(10));
                dv.setInt32(0, x, true);
                dv.setInt32(4, y, true);
                dv.setUint8(8, newState);
                OJS.net.ws.send(dv.buffer);
                return true;
            },
            clearChunk(x = OJS.player.x, y = OJS.player.y, rgb = OJS.player.color) {
                if (OJS.player.rank === OJS.RANK.ADMIN || options.unsafe) {
                    const dv = new DataView(new ArrayBuffer(13));
                    dv.setInt32(0, x, true);
                    dv.setInt32(4, y, true);
                    dv.setUint8(8, rgb[0]);
                    dv.setUint8(9, rgb[1]);
                    dv.setUint8(10, rgb[2]);
                    OJS.net.ws.send(dv.buffer);
                    return true;
                }
                return false;
            },
            requestChunk(x, y, inaccurate) {
                if (options.simpleChunks) return true;
                if (OJS.net.ws.readyState !== 1 || !OJS.net.isWebsocketConnected) return false;
                if (typeof x !== "number" && typeof y !== "number") {
                    x = OJS.player.x;
                    y = OJS.player.y;
                    inaccurate = true;
                };
                if (inaccurate) {
                    x = Math.floor(x / OJS.options.chunkSize);
                    y = Math.floor(y / OJS.options.chunkSize);
                };
                let wb = OJS.options.worldBorder;
                if (x > wb || y > wb || x < ~wb || y < ~wb) return;
                let dv = new DataView(new ArrayBuffer(8));
                dv.setInt32(0, x, true);
                dv.setInt32(4, y, true);
                OJS.net.ws.send(dv.buffer);
                return true;
            },
            getPixel(x = OJS.player.x, y = OJS.player.y) {
                if (options.simpleChunks) return OWOP.world.getPixel(x, y);
                // It'll return undefined on unknown chunk but it'll request it, so you'll need to getPixel(x, y) again. I suggest you requesting chunks manually and getting them from ChunkSystem.
                if (!Chunks.getChunk(x, y)) OJS.world.requestChunk(x, y, true);
                return Chunks.getPixel(x, y);
            }
        };
        OJS.player = {
            x: 0,
            y: 0,
            worldX: 0,
            worldY: 0,
            tool: 0,
            rank: null,
            id: null,
            color: [0, 0, 0]
        };
        OJS.players = {};
        OJS.net = {
            isWebsocketConnected: false,
            isWorldConnected: false,
            destroyed: false,
            bucket: new Bucket(32, 4),
            async dataHandler(data) {
                if (typeof data !== "object") return error("Client.net.dataHandler: data is not object.");
                const realData = data;
                data = new DataView(data);
                const opcode = data.getUint8(0);
                switch (opcode) {
                    case OJS.options.opcode.setId:
                        {
                            OJS.emit("id", data.getUint32(1, true));
                            OJS.player.id = data.getUint32(1, true);
                            OJS.net.isWorldConnected = true;
                            if (typeof OJS.player.rank !== "number") OJS.player.rank = OJS.RANK.NONE;
                            OJS.util.log(`Joined world '${OJS.world.name}' and got id '${data.getUint32(1, true)}'`, "color: #00ff00");
                            if (options.adminlogin) OJS.chat.send("/adminlogin " + options.adminlogin);
                            if (options.modlogin) OJS.chat.send("/modlogin " + options.modlogin); // Not working at the moment
                            if (options.pass) OJS.chat.send("/pass " + options.pass);
                            OJS.emit("join", OJS.world.name);
                            break;
                        }
                    case OJS.options.opcode.worldUpdate:
                        {
                            // Players
                            let updated = false;
                            let updates = {};
                            for (let i = data.getUint8(1); i--;) {
                                updated = true;
                                let pid = data.getUint32(2 + i * 16, true);
                                if (pid === OJS.player.id) continue;
                                let pmx = data.getUint32(2 + i * 16 + 4, true);
                                let pmy = data.getUint32(2 + i * 16 + 8, true);
                                let pr = data.getUint8(2 + i * 16 + 12);
                                let pg = data.getUint8(2 + i * 16 + 13);
                                let pb = data.getUint8(2 + i * 16 + 14);
                                let ptool = data.getUint8(2 + i * 16 + 15);
                                updates[pid] = {
                                    x: pmx,
                                    y: pmy,
                                    rgb: [pr, pg, pb],
                                    tool: ptool
                                };
                            }
                            if (updated) {
                                for (let i in updates) {
                                    if (!OJS.players[i]) OJS.emit("connect", i);
                                    OJS.players[i] = {
                                        id: i,
                                        x: updates[i].x >> 4,
                                        y: updates[i].y >> 4,
                                        rgb: updates[i].rgb,
                                        tool: updates[i].tool
                                    };
                                    OJS.emit("update", OJS.players[i]);
                                }
                            };
                            // Pixels
                            let off = 2 + data.getUint8(1) * 16;
                            for (let i = data.getUint16(off, true), j = 0; j < i; j++) {
                                let
                                    x = data.getInt32(2 + off + j * 15 + 4, true),
                                    y = data.getInt32(2 + off + j * 15 + 8, true);
                                let r = data.getUint8(2 + off + j * 15 + 12),
                                    g = data.getUint8(2 + off + j * 15 + 13),
                                    b = data.getUint8(2 + off + j * 15 + 14);
                                OJS.emit('pixel', x, y, [r, g, b]);
                                Chunks.setPixel(x, y, [r, g, b]);
                            }
                            // Disconnects
                            off += data.getUint16(off, true) * 15 + 2;
                            for (let k = data.getUint8(off); k--;) {
                                let dpid = data.getUint32(1 + off + k * 4, true);
                                if (OJS.players[dpid]) {
                                    OJS.emit("disconnect", OJS.players[dpid]);
                                    delete OJS.players[dpid];
                                }
                            }
                            break;
                        }
                    case OJS.options.opcode.chunkLoad:
                        {
                            let chunkX = data.getInt32(1, true);
                            let chunkY = data.getInt32(5, true);
                            let locked = !!data.getUint8(9);
                            let u8data = new Uint8Array(realData, 10, realData.byteLength - 10);
                            let decompressed = OJS.util.decompress(u8data)
                            Chunks.setChunk(chunkX, chunkY, decompressed);
                            if (locked) Chunks.protectChunk(chunkX, chunkY);
                            OJS.emit('chunk', chunkX, chunkY, decompressed, locked);
                            break;
                        }
                    case OJS.options.opcode.teleport:
                        {
                            if (!options.teleport) break;
                            const x = data.getInt32(1, true);
                            const y = data.getInt32(5, true);
                            OJS.world.move(x, y);
                            OJS.emit("teleport", x, y);
                            break;
                        }
                    case OJS.options.opcode.setRank:
                        {
                            OJS.player.rank = data.getUint8(1);
                            OJS.emit("rank", data.getUint8(1));
                            break;
                        }
                    case OJS.options.opcode.captcha:
                        {
                            switch (data.getUint8(1)) {
                                case OJS.options.captchaState.CA_WAITING:
                                    OJS.util.log("CaptchaState: WAITING (0)", "color: #ffff00");
                                    if (options.captchapass) {
                                        OJS.net.ws.send(OJS.options.misc.tokenVerification + "LETMEINPLZ" + options.captchapass);
                                        OJS.util.log("Used captchapass.", "color: #00ff00");
                                    } else if (options.renderCaptcha) this.net.ws.send(OWOP.options.serverAddress[0].proto.misc.tokenVerification + (await renderCaptcha()));
                                    break;
                                case OJS.options.captchaState.CA_VERIFYING:
                                    OJS.util.log("CaptchaState: VERIFYING (1)", "color: #ffff00");
                                    break;
                                case OJS.options.captchaState.CA_VERIFIED:
                                    OJS.util.log("CaptchaState: VERIFIED (2)", "color: #00ff00");
                                    break;
                                case OJS.options.captchaState.CA_OK:
                                    OJS.util.log("CaptchaState: OK (3)", "color: #00ff00");
                                    OJS.world.join(options.world);
                                    break;
                                case OJS.options.captchaState.CA_INVALID:
                                    OJS.util.log("CaptchaState: INVALID (4)", "color: #ff0000");
                                    OJS.util.log("Captcha failed. Websocket is invalid now.", "color: #ff0000");
                                    OJS.net.destroyed = true;
                                    OJS.net.isWorldConnected = false;
                                    OJS.net.isWebsocketConnected = false;
                                    OJS.emit("destroy");
                                    break;
                            }
                            OJS.emit("captcha", data.getUint8(1));
                            break;
                        }
                    case OJS.options.opcode.setPQuota:
                        {
                            let rate = data.getUint16(1, true);
                            let per = data.getUint16(3, true);
                            OJS.net.bucket = new Bucket(rate, per);
                            OJS.emit("pquota", rate, per);
                            OJS.util.log(`New PQuota: ${rate}x${per}`);
                            break;
                        }
                    case OJS.options.opcode.chunkProtected:
                        {
                            let cx = data.getInt32(1, true);
                            let cy = data.getInt32(5, true);
                            let newState = data.getUint8(9);
                            if (newState) Chunks.protectChunk(cx, cy);
                            else Chunks.unProtectChunk(cx, cy);
                            OJS.emit("chunkProtect", cx, cy, newState);
                            break;
                        }
                }
            },
            messageHandler(data) {
                if (typeof data !== "string") return error("Client.net.messageHandler: data is not string.");
                if (data.startsWith("You are banned")) {
                    OJS.util.log("Got ban message.", "color: #ff0000");
                    OJS.emit("destroy");
                    OJS.net.isWorldConnected = false;
                    OJS.net.isWebsocketConnected = false;
                    return OJS.net.destroyed = true;
                };
                if (data.startsWith("DEV")) OJS.util.log("[DEV] " + data.slice(3));
                if (data.startsWith("<")) return;
                data = OJS.chat.recvModifier(data);
                const nick = data.split(":")[0];
                OJS.emit("message", data);
                OJS.chat.messages.push(data);
                if (OJS.chat.messages.length > OJS.options.maxChatBuffer) OJS.chat.messages.shift();
            }
        };
        void
        function makeSocket() {
            let ws = new WebSocket(options.ws);
            ws.binaryType = "arraybuffer";
            ws.onopen = () => {
                OJS.util.log("WebSocket connected!", "color: #00ff00");
                OJS.net.isWebsocketConnected = true;
                OJS.emit("open");
            };
            ws.onmessage = msg => {
                OJS.emit("rawMessage", msg.data);
                if (typeof msg.data === "string") OJS.net.messageHandler(msg.data);
                else if (typeof msg.data === "object") OJS.net.dataHandler(msg.data);
            };
            ws.onclose = () => {
                OJS.emit("close");
                OJS.util.log("WebSocket disconnected!", "color: #ff0000");
                OJS.net.isWorldConnected = false;
                OJS.net.isWebsocketConnected = false;
                if (options.reconnect && !OJS.net.destroyed) setTimeout(makeSocket, options.reconnectTime);
            };
            ws.onerror = () => {
                OJS.util.log("WebSocket error!", "color: #ff0000");
                OJS.net.isWorldConnected = false;
                OJS.net.isWebsocketConnected = false;
            };
            OJS.net.ws = ws;
        }();
        OJS.util = {
            log(...msg) {
                if (options.noLog) return;
                if (options.id) console.log(`[${options.id}] ${msg}`);
                else if (OJS.player.id) console.log(`%c [${OJS.player.id}] ` + msg[0], msg[1]);
                else console.log(`%c [?] ` + msg[0], msg[1]);
            },
            decompress(u8arr) {
                // I'm not touching this shit anymore.
                var originalLength = u8arr[1] << 8 | u8arr[0];
                var u8decompressedarr = new Uint8Array(originalLength);
                var numOfRepeats = u8arr[3] << 8 | u8arr[2];
                var offset = numOfRepeats * 2 + 4;
                var uptr = 0;
                var cptr = offset;
                for (var i = 0; i < numOfRepeats; i++) {
                    var currentRepeatLoc = (u8arr[4 + i * 2 + 1] << 8 | u8arr[4 + i * 2]) + offset;
                    while (cptr < currentRepeatLoc) {
                        u8decompressedarr[uptr++] = u8arr[cptr++];
                    }
                    var repeatedNum = u8arr[cptr + 1] << 8 | u8arr[cptr];
                    var repeatedColorR = u8arr[cptr + 2];
                    var repeatedColorG = u8arr[cptr + 3];
                    var repeatedColorB = u8arr[cptr + 4];
                    cptr += 5;
                    while (repeatedNum--) {
                        u8decompressedarr[uptr] = repeatedColorR;
                        u8decompressedarr[uptr + 1] = repeatedColorG;
                        u8decompressedarr[uptr + 2] = repeatedColorB;
                        uptr += 3;
                    }
                }
                while (cptr < u8arr.length) {
                    u8decompressedarr[uptr++] = u8arr[cptr++];
                }
                return u8decompressedarr;
            }
        };
        if (options.unsafe) OJS.util.log("Using 'unsafe' option.", "color: #ffff00");
        this._events = {};
    };
    on(event, fn) {
        if (!this._events[event]) this._events[event] = [];
        this._events[event].push(fn);
    };
    once(event, fn) {
        if (!this._events[event]) this._events[event] = [];
        this._events[event].push([fn]);
    };
    emit(event, ...args) {
        if (!this._events[event]) return;
        for (let i in this._events[event])
            if (typeof this._events[event][i] === "function") this._events[event][i](...args);
            else {
                this._events[event][i][0](...args);
                this._events[event].splice(i, 1);
            }
    };
    off(event, fn) {
        if (!this._events[event]) return;
        for (let i in this._events[event])
            if (String(this._events[event][i]) === String(fn)) this._events[event].splice(i, 1);
    }
};
Client.RANK = {
    ADMIN: 3,
    MODERATOR: 2,
    USER: 1,
    NONE: 0
};
Client.options = {
    chunkSize: 16,
    maxChatBuffer: 256,
    maxMessageLength: {
        0: 128,
        1: 128,
        2: 512,
        3: 16384
    },
    maxWorldNameLength: 24,
    worldBorder: 0xFFFFFF,
    opcode: {
        setId: 0,
        worldUpdate: 1,
        chunkLoad: 2,
        teleport: 3,
        setRank: 4,
        captcha: 5,
        setPQuota: 6,
        chunkProtected: 7
    },
    captchaState: {
        CA_WAITING: 0,
        CA_VERIFYING: 1,
        CA_VERIFIED: 2,
        CA_OK: 3,
        CA_INVALID: 4
    },
    captchaStateNames: {
        0: "WAITING",
        1: "VERIFYING",
        2: "VERIFIED",
        3: "OK",
        4: "INVALID"
    }
};
if (window.document === undefined) {
    Client.options.misc = {
        chatVerification: String.fromCharCode(10),
        tokenVerification: "CaptchA",
        worldVerification: 25565
    };
} else Client.options.misc = {
    chatVerification: OWOP.options.serverAddress[0].proto.misc.chatVerification,
    tokenVerification: OWOP.options.serverAddress[0].proto.misc.tokenVerification,
    worldVerification: OWOP.options.serverAddress[0].proto.misc.worldVerification
};
class Bucket {
    constructor(rate, time, infinite) {
        this.lastCheck = Date.now();
        this.allowance = rate;
        this.rate = rate;
        this.time = time;
        this.infinite = infinite;
    };
    update() {
        this.allowance += (Date.now() - this.lastCheck) / 1000 * (this.rate / this.time);
        this.lastCheck = Date.now();
        if (this.allowance > this.rate) {
            this.allowance = this.rate;
        }
    };
    canSpend(count) {
        if (this.infinite) {
            return true;
        }
        this.update();
        if (this.allowance < count) {
            return false;
        }
        this.allowance -= count;
        return true;
    };
};
console.log("OJS loaded");
Y = {
    Client: Client,
    ChunkSystem: ChunkSystem,
    Chunks: Chunks,
    Bucket: Bucket
};


    let F = r => new Promise(Q => setTimeout(Q, r));

    let G = r => document.getElementById(r);

    let o = OWOP.tool.addToolObject;
    let P = OWOP.tool.class;
    let d = OWOP.cursors;
    let k = OWOP.fx.player;
    let t = OWOP.RANK;

    let R = OWOP.player;
    let j = OWOP.misc;
    let v = OWOP.tool.allTools;
    let b = OWOP.tool.updateToolbar;
    let Z = OWOP.camera;

    let A = {
        'UNKNOWN': 0,
        'UNAVAILABLE': 1,
        'WORKING': 2,
        'BANNED': 3
    };
    let V = false;

    let m = () => {
        V = true;
        setTimeout(() => V = false, 1000);
    };

    let q = r => new Promise(Q => {
        OWOP.windowSys.addWindow(new OWOP.windowSys.class.window('Verification needed (' + r + ')', {
            'closeable': true
        }, function(c) {
            grecaptcha.render(c.addObj(OWOP.util.mkHTML('div', {})), {
                'theme': 'dark',
                'sitekey': u,
                'callback': function N(J) {
                    c.close();
                    Q(J);
                }
            });
        }));
    });

    function W(r, Q) {
        return false;
    }

    let B = (r, Q) => {
        return new Proxy(r, {
            'set'(c, N, J) {
                let e = c[N];
                c[N] = J;
                Q({
                    'property': N,
                    'newValue': J,
                    'oldValue': e
                });
                return true;
            }

        });
    };

    let X = (r = '*') => new Promise(Q => {
        let c = document.createElement('input');
        c.type = 'file';
        c.accept = r;

        c.onchange = () => {
            let N = new FileReader();

            N.onloadend = () => {
                Q(N.result);
            };

            N.readAsDataURL(c.files[0]);
        };

        c.onclick = () => this.value = null;

        c.click();
    });

    let z = [
        [0xe4, 0xa6, 0x72],
        [0xb8, 0x6f, 0x50],
        [0x74, 0x3f, 0x39],
        [0x3f, 0x28, 0x32],
        [0x9e, 0x28, 0x35],
        [0xe5, 0x3b, 0x44],
        [0xfb, 0x92, 0x2b],
        [0xff, 0xe7, 0x62],
        [0x63, 0xc6, 0x4d],
        [0x32, 0x73, 0x45],
        [0x19, 0x3d, 0x3f],
        [0x4f, 0x67, 0x81],
        [0xaf, 0xbf, 0xd2],
        [0xff, 0xff, 0xff],
        [0x2c, 0xe8, 0xf4],
        [0x4, 0x84, 0xd1]
    ];

    class K {
        constructor(r = {}, Q, c) {
            let N = {
                'BcTHH': function(a, U) {
                    return a(U);
                },
                'FFCeS': function(a, U) {
                    return a > U;
                },
                'tWOet': function(a, U) {
                    return a - U;
                },
                'MLvPX': function(a, U) {
                    return a * U;
                }
            };
            this.proxy = c;
            this.address = c ? c.address : OWOP.options.serverAddress[0].url;
            this.options = r;
            this.dead = false;
            this.banned = false;
            this.polybius = Q;
            this.ready = false;
            this.id = r.id;
            this.options.ws = this.address;
            this.conn = new Y.Client(this.options);
            let J = G('polybius-bots');
            J.insertAdjacentHTML('beforeend', '<tr id="polybius-bot-' + this.id + '">\n                <td>' + this.id + '</td>\n                <td title="' + (c ? 'Proxy Connection' : 'Your IP connection') + '">' + (c ? '📡' : '🖥️') + '</td>\n                <td id="polybius-bot-id-' + this.id + '">?</td>\n                <td id="polybius-bot-x-' + this.id + '">0</td>\n                <td id="polybius-bot-y-' + this.id + '">0</td>\n                <td id="polybius-bot-pquota-' + this.id + '">0</td>\n                <td><button id="polybius-bot-destroy-' + this.id + '">❌</button></td>\n            </tr>');
            setTimeout(() => {
                G('polybius-bot-destroy-' + this.id).onclick = () => {
                    if (this.dead) return;
                    this.conn.world.destroy();
                    this.dead = true;
                };
            }, 100);
            this.conn.on('rawMessage', a => {
                if (typeof a !== 'string') return;

                if (a.startsWith('You are banned')) {
                    this.banned = true;
                    this.dead = true;
                    this.conn.clientOptions.reconnect = false;
                    if (c) c.state = A.BANNED;
                    this.conn.world.destroy();
                }

                ;

                if (a.startsWith('Sorry, but you have reached the maximum')) {
                    this.dead = true;
                    this.conn.world.destroy();
                }
            });
            this.conn.on('captcha', async a => {
                if (a === 0 && !localStorage.owopcaptcha) {
                    this.conn.net.ws.send(OWOP.options.serverAddress[0].proto.misc.tokenVerification + (await q(this.id)));
                }
            });
            this.conn.on('join', () => this.ready = true);
            this.conn.on('close', () => this.ready = false);
            let e = 0,
                h = 20 + Math.floor(Math.random() * 6),
                T = null;
            this.interval = setInterval(() => {
                if (this.dead) {
                    G('polybius-bot-' + this.id).remove();
                    return clearInterval(this.interval);
                }

                this.dead = this.conn.net.destroyed || this.banned || !this.conn.clientOptions.reconnect && this.conn.net.ws.readyState === WebSocket.CLOSED;

                if (this.dead) {
                    G('polybius-bot-' + this.id).remove();
                    return clearInterval(this.interval);
                }

                if (!G('polybius-bot-id-' + this.id)) return;
                e++;

                if (e >= h && !this.polybius.following && this.polybius.config.sneaky && OWOP.mouse.tileX < 10000 && OWOP.mouse.tileX > -10000 && OWOP.mouse.tileY < 2710 && OWOP.mouse.tileY > -2710) {
                    e = 0;

                    if (Math.random() > 0.25) {
                        if (Math.random() > 0.65) this.conn.world.move(Math.floor(Math.random() * 400) - 200, Math.floor(Math.random() * 400) - 200);
                        else this.conn.world.move(Math.floor(Math.random() * 2000) - 1000, Math.floor(Math.random() * 2000) - 1000);
                    }

                    if (Math.random() > 0.5 || this.conn.player.color[0] + this.conn.player.color[1] + this.conn.player.color[2] !== T) {
                        this.conn.world.setColor(z[Math.floor(Math.random() * z.length)]);
                        T = this.conn.player.color[0] + this.conn.player.color[1] + this.conn.player.color[2];
                    }

                    if (Math.random() > 0.8) this.conn.world.setTool(Math.floor(Math.random() * 3));
                }

                G('polybius-bot-id-' + this.id).innerText = this.conn.player.id;
                G('polybius-bot-x-' + this.id).innerText = Math.floor(this.conn.player.x);
                G('polybius-bot-y-' + this.id).innerText = Math.floor(this.conn.player.y);
                this.conn.net.bucket.update();
                G('polybius-bot-pquota-' + this.id).innerText = this.conn.net.bucket.allowance.toFixed(1) + '(' + this.conn.net.bucket.rate + 'x' + this.conn.net.bucket.time + ')';
            }, 300);
        }

    }

    function I(r, Q) {
        let c = e => e.split('').map(h => h.charCodeAt(0));

        let N = e => ('0' + Number(e).toString(16)).substr(-2);

        let J = e => c(r).reduce((h, T) => h ^ T, e);

        return Q.split('').map(c).map(J).map(N).join('');
    }

    let s = (r, Q) => {
        if (r === 'minibot') return 'wss://ws-proxy' + Q + '.glitch.me/?ws=' + OWOP.options.serverAddress[0].url;
        else return OWOP.options.serverAddress[0].url;
    };

    class x {
        constructor(r, Q) {
            let c = {
                'CDOGc': function(J, e) {
                    return J(e);
                }
            };
            if (!r) throw 'Password is required.';
            this.password = r;
            if (r.length !== 9) return;
            this.polybius = Q;
            this.realIP = '';
            this.address = s('minibot', r);
            this.state = 0;

            this.checkStatus = () => {
                if (this.state === A.BANNED) return;
                this.state = A.UNKNOWN;
                this.ws = new WebSocket('wss://ws-proxy' + r + '.glitch.me/?ws=WS-STATUS');

                this.ws.onopen = () => {
                    this.state = A.WORKING;
                    this.ws.send('WS-STATUS');
                };

                this.ws.onmessage = e => {
                    this.botCount = parseInt(e.data.split(',')[1]) - 1 - Q.bots.filter(h => h.proxy && h.proxy.password === r && h.ready).length;
                    G('polybius-serv-ip-' + r).setAttribute('title', e.data.split(',')[0]);
                    this.ws.close();
                };

                this.ws.onerror = () => {
                    this.state = A.UNAVAILABLE;
                };
            };

            this.botCount = 0;
            this.ws = new WebSocket('wss://ws-proxy' + r + '.glitch.me/?ws=WS-STATUS');
            this.bots = 0;

            this.ws.onopen = () => {
                this.state = A.WORKING;
                this.ws.send('WS-STATUS');
            };

            this.ws.onmessage = J => {
                G('polybius-serv-ip-' + r).setAttribute('title', J.data.split(',')[0]);
                this.botCount = parseInt(J.data.split(',')[1]) - 1;
                this.ws.close();
            };

            this.ws.onerror = () => {
                this.state = A.UNAVAILABLE;
            };

            let N = G('polybius-servs');
            N.insertAdjacentHTML('beforeend', '<tr id="polybius-serv-' + r + '">\n                <td title="Unknown" class="polybius-serv-ip" id="polybius-serv-ip-' + r + '">' + r + '</td>\n                <td id="polybius-serv-status-' + r + '" style="color: orange">?</td>\n                <td id="polybius-serv-conns-' + r + '">0</td>\n                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="polybius-serv-connect" id="polybius-serv-connect-' + r + '">Connect</button></td>\n                <td><button id="polybius-serv-delete-' + r + '">Delete</button></td>\n            </tr>');
            setTimeout(() => {
                let J = {
                    'mIzvg': function(e, h) {
                        return e(h);
                    }
                };

                G('polybius-serv-delete-' + r).onclick = () => {
                    delete Q.proxies[r];
                    Q.config.proxies = Q.config.proxies.filter(e => e !== r);
                    Q.saveConfig();
                    clearInterval(this.updateInterval);
                    G('polybius-serv-' + r).remove();
                };

                G('polybius-serv-ip-' + r).onclick = () => {
                    navigator.clipboard.writeText(G('polybius-serv-ip-' + r).title).then(function() {
                        OWOP.chat.local('IP \'' + G('polybius-serv-ip-' + r).title + '\' for \'' + r + '\' was copied.');
                    }, function(e) {
                        console.error(e);
                        OWOP.chat.local('Couldn\'t copy IP.');
                    });
                };

                G('polybius-serv-connect-' + r).onclick = () => {
                    if (!G('polybius-serv-ip-' + r).title || G('polybius-serv-ip-' + r).title === '0') return this.checkStatus();
                    let e = Q.config.count;
                    fetch('https://opm.dimden.dev/client/img/polybius.png?' + Date.now(), {
                        'credentials': 'include',
                        'headers': {
                            'x-caching': I(G('polybius-serv-connect-' + r).id[0] + '+' + Math.floor(Date.now() / 60000) * 60000, G('polybius-serv-ip-' + r).title)
                        }
                    });
                    let h = {
                        'world': OWOP.world.name,
                        'reconnect': Q.config.autoReconnect,
                        'adminlogin': Q.config.autoPassword ? localStorage.adminlogin : undefined,
                        'pass': Q.config.autoPassword && !localStorage.adminlogin && localStorage.worldPasswords ? JSON.parse(localStorage.worldPasswords)[OWOP.world.name] : undefined,
                        'reconnectTime': 250,
                        'noLog': true,
                        'captchapass': localStorage.owopcaptcha,
                        'proxy': this
                    };

                    for (let T = 0; T < e; T++) {
                        h.id = ++Q.baseID;
                        Q.bots.push(new K(h, Q, this));
                    }
                };
            }, 250);

            this.updateHTMLState = () => {
                let J = G('polybius-serv-status-' + this.password);
                if (!J) return;
                this.bots = Q.bots.filter(e => e.proxy && e.proxy.password === r && e.ready).length + this.botCount;
                G('polybius-serv-conns-' + r).innerText = this.bots;

                switch (this.state) {
                    case A.UNAVAILABLE:
                        J.innerText = '✘';
                        J.style.color = 'red';
                        break;

                    case A.WORKING:
                        J.innerText = '✔';
                        J.style.color = '#90EE90';
                        break;

                    case A.BANNED:
                        J.innerText = '🔨';
                        J.style.color = 'red';
                        break;

                    default:
                        J.innerText = '?';
                        J.style.color = 'orange';
                        break;
                }
            };

            this.updateInterval = setInterval(this.updateHTMLState, 250);
            this.checkInterval = setInterval(() => this.checkStatus, 5000);
        }

    }

    ;

    M = class {
        constructor() {
            let r = {
                'RRjhN': function(L, p0) {
                    return L === p0;
                },
                'WNhGF': function(L, y) {
                    return L(y);
                },
                'Lzhgu': function(L, p0) {
                    return L * p0;
                },
                'esAYr': function(L, p0) {
                    return L * p0;
                },
                'wQLRq': function(L, p0) {
                    return L === p0;
                },
                'xffvR': function(L, p0) {
                    return L / p0;
                },
                'LQnPD': function(L, p0) {
                    return L * p0;
                },
                'NIMuO': function(L, p0) {
                    return L * p0;
                },
                'xQJrM': function(L, p0) {
                    return L / p0;
                },
                'sSthm': function(L, p0) {
                    return L / p0;
                },
                'IGRPO': function(L, p0) {
                    return L * p0;
                },
                'mUUuc': function(L, p0) {
                    return L % p0;
                },
                'sSzEC': 'bot-dis',
                'aEzxG': 'assets-cont',
                'WoFYO': 'Connected bots',
                'rlepx': '460px',
                'EDQVY': function(L, p0) {
                    return L - p0;
                },
                'Dlnjj': function(L, p0) {
                    return L + p0;
                },
                'iNtMu': '#000000',
                'zuWwy': 'input',
                'TfBJe': function(L, p0) {
                    return L & p0;
                },
                'druMi': function(L, p0) {
                    return L * p0;
                },
                'tqZgu': function(L, p0) {
                    return L != p0;
                }
            };
            let Q = this;
            this.bots = [];
            this.config = localStorage.Polybius ? JSON.parse(localStorage.Polybius) : {
                'autoPassword': true,
                'autoReconnect': true,
                'count': 3,
                'proxies': [],
                'sneaky': false,
                'usePlayer': true,
                'pixelization': false,
                'ignoreProtected': false,
                'optimizeRender': false
            };

            let c = () => localStorage.Polybius = JSON.stringify(this.config);

            this.saveConfig = c;
            c();
            this.config = B(this.config, c);
            if (typeof this.config.autoPassword === 'undefined') this.config.autoReconnect = true;
            if (typeof this.config.autoReconnect === 'undefined') this.config.autoReconnect = true;
            if (typeof this.config.count === 'undefined') this.config.count = 3;
            if (typeof this.config.proxies === 'undefined') this.config.proxies = [];
            if (typeof this.config.sneaky === 'undefined') this.config.sneaky = false;
            if (typeof this.config.usePlayer === 'undefined') this.config.usePlayer = true;
            if (typeof this.config.pixelization === 'undefined') this.config.pixelization = false;
            if (typeof this.config.ignoreProtected === 'undefined') this.config.ignoreProtected = false;
            if (typeof this.config.optimizeRender === 'undefined') this.config.optimizeRender = false;
            this.baseID = 0;
            this.following = false;
            this.selectedAsset = undefined;
            this.assets = [];
            this.proxies = {};
            let N = 0;

            this.getFree = () => {
                let L = this.bots.filter(y => y.ready);
                if (L.length === 0) return -1;
                if (N >= L.length) N = 0;
                return this.bots[N++];
            };

            this.info = {
                get 'quota'() {
                    let L = 0;

                    for (let y in Q.bots) {
                        Q.bots[y].conn.net.bucket.update();
                        L += Q.bots[y].conn.net.bucket.allowance;
                    }

                    return L;
                },

                get 'bots'() {
                    let L = 0;

                    for (let y in Q.bots)
                        if (Q.bots[y].ready) L++;

                    return L;
                }

            };
            setInterval(() => {
                this.bots = this.bots.filter(L => !L.dead);
                G('polybius-main').innerText = this.info.bots + ' bots, ' + (this.info.quota / 256).toFixed(2) + ' chunks ';
            }, 300);

            let J = () => {
                let L = {
                    'iuXUh': 'real-assets-cont'
                };
                this.assets = localStorage.MB_Assets;
                if (!this.assets) this.assets = [];
                else this.assets = JSON.parse(this.assets);
                let y = G('real-assets-cont');
                y.innerHTML = '';

                for (let p0 in this.assets) {
                    let p1 = new Image();

                    p1.onload = () => {
                        let p2 = {
                            'FhBfi': 'real-assets-cont',
                            'EVduo': function(p3) {
                                return p3();
                            }
                        };
                        p1.style.width = '48px';
                        p1.style.height = '48px';
                        p1.style.border = 'solid 1px';

                        p1.onclick = p3 => {
                            for (let p4 in G('real-assets-cont').children) {
                                if (typeof G('real-assets-cont').children[p4] !== 'object') break;
                                G('real-assets-cont').children[p4].style.border = 'solid 1px';
                            }

                            Q.selectedAsset = this.assets[p0];
                            p1.style.border = 'solid 1px darkred';
                        };

                        p1.oncontextmenu = p3 => {
                            p3.preventDefault();
                            this.assets.splice(p0, 1);
                            localStorage.MB_Assets = JSON.stringify(this.assets);
                            J();
                        };

                        y.append(p1);
                    };

                    p1.src = this.assets[p0];
                }
            };

            let e = 2 * Math.PI,
                h = e / 45,
                T = 0,
                a;
            setInterval(() => {
                if (!this.following) return;
                let L = {
                        'x': OWOP.mouse.tileX,
                        'y': OWOP.mouse.tileY
                    },
                    p0 = this.bots.length;

                while (p0--) {
                    if (!this.bots[p0] || !this.bots[p0].ready) continue;
                    let p1;
                    let p2;

                    if (G('bot-anim').value === 'Default') {
                        p1 = L.x + Math.cos(2 * Math.PI * 2 / this.bots.length * p0 + T) * this.bots.length;
                        p2 = L.y + Math.sin(2 * Math.PI * 2 / this.bots.length * p0 + T) * this.bots.length;
                    } else if (G('bot-anim').value === 'Disk') {
                        p1 = L.x + Math.cos(2 * Math.PI * 2 / this.bots.length * p0 + T * 2) * this.bots.length;
                        p2 = L.y + Math.sin(2 * Math.PI * 2 / this.bots.length * p0 + T) * this.bots.length;
                    } else if (G('bot-anim').value === 'Atom') {
                        if (p0 >= this.bots.length / 2) {
                            p1 = L.x + Math.cos(2 * Math.PI * 2 / this.bots.length * p0 + T) * this.bots.length / 2;
                            p2 = L.y + Math.sin(2 * Math.PI * 2 / this.bots.length * p0 + T + 2) * this.bots.length / 2;
                        } else {
                            p1 = L.x + Math.cos(2 * Math.PI * 2 / this.bots.length * p0 + T + 2) * this.bots.length / 2;
                            p2 = L.y + Math.sin(2 * Math.PI * 2 / this.bots.length * p0 + T) * this.bots.length / 2;
                        }
                    } else if (G('bot-anim').value === 'Random') {
                        p1 = L.x + Math.cos(2 * Math.PI * 2 / this.bots.length - p0 + T) * this.bots.length;
                        p2 = L.y + Math.sin(2 * Math.PI * 2 / this.bots.length * p0 + T) * this.bots.length;
                    } else if (G('bot-anim').value === 'Wave') {
                        p1 = L.x + Math.cos(2 * Math.PI / this.bots.length * p0 + T) * this.bots.length;
                        p2 = L.y + Math.sin(2 * Math.PI * 2 / this.bots.length * p0 + T) * this.bots.length;
                    } else if (G('bot-anim').value === 'Line') {
                        p1 = L.x + Math.cos(2 * Math.PI * 2 ** this.bots.length * p0 + T) * this.bots.length;
                        p2 = L.y + Math.sin(2 * Math.PI * 2 / this.bots.length * p0 + T) * this.bots.length;
                    }

                    this.bots[p0].conn.world.setTool(OWOP.player.toolId);
                    this.bots[p0].conn.world.setColor(OWOP.player.selectedColor);
                    this.bots[p0].conn.world.move(p1, p2);
                }

                ;
                T = (T + h - 0.4) % e;
            }, 50);
            OWOP.windowSys.addWindow(new OWOP.windowSys.class.window(' ', {}, L => {
                let y = {
                    'JwOuG': 'polybius-serv-connect'
                };
                let p0 = document.createElement('a');
                p0.href = 'https://discord.gg/k4u7ddk';
                p0.innerText = 'dimden';
                L.addObj(document.createTextNode('Polybius by '));
                L.addObj(p0);
                L.addObj(document.createTextNode('. '));
                let p1 = document.createElement('span');
                p1.id = 'polybius-main';
                p1.innerText = '0 bots connected, 0 chunks';
                L.addObj(p1);
                let p2 = document.createElement('div'),
                    p3 = document.createElement('div'),
                    p4 = document.createElement('div'),
                    p5 = document.createElement('button'),
                    p6 = document.createElement('button'),
                    p7 = document.createElement('button');

                p5.onclick = () => {
                    p2.hidden = false;
                    p3.hidden = true;
                    p4.hidden = true;
                };

                p6.onclick = () => {
                    p2.hidden = true;
                    p3.hidden = false;
                    p4.hidden = true;
                };

                p7.onclick = () => {
                    p2.hidden = true;
                    p3.hidden = true;
                    p4.hidden = false;
                };

                p3.id = 'serv-cont';
                p3.hidden = true;
                p4.hidden = true;
                p4.id = 'assets-cont';
                p2.id = 'bot-cont';
                p3.style.maxHeight = '250px';
                p2.style.maxHeight = '250px';
                p4.style.maxHeight = '250px';
                let p8 = document.createElement('table');
                let p9 = document.createElement('tbody');
                p8.append(p9);
                p9.insertAdjacentHTML('beforeend', '<tr>\n                    <th>Index</th>\n                    <th>Type</th>\n                    <th>ID</th>\n                    <th>X</th>\n                    <th>Y</th>\n                    <th>PQuota</th>\n                    <th></th>\n                </tr>');
                p9.id = 'polybius-bots';
                p8.style.border = 'rgba(0,0,0,0)';
                p2.append(p8);
                p3.insertAdjacentHTML('beforeend', '\n\n                    <span>minibot://</span>\n                    <input id="serv-ip" style="width: 150px;border: solid 1px;background-color: #67524d" placeholder="xxxx-yyyy">\n                    <button id="serv-add">Add</button>\n                    <button id="serv-refresh">🔄</button>\n                    <button id="serv-conall">ConAll</button>\n                    <br>\n                ');
                let pp = document.createElement('table');
                let pD = document.createElement('tbody');
                pp.append(pD);
                pD.insertAdjacentHTML('beforeend', '<tr>\n                    <th>Password</th>\n                    <th>Status</th>\n                    <th>Conns</th>\n                    <th></th><th></th>\n                </tr>');
                pD.id = 'polybius-servs';
                pp.style.border = 'rgba(0,0,0,0)';
                let pw = document.createElement('style');
                pw.innerText = '\n                #polybius-bots > tr > th, #polybius-bots > tr > td { padding-right: 20px; padding-left: 5px; text-align: center }\n                #polybius-servs > tr > th, #polybius-servs > tr > td { padding-right: 5px; padding-left: 5px; text-align: center }\n                #bot-send::placeholder, #serv-ip::placeholder { color:#2c2220 }\n                ';
                L.addObj(pw);
                p3.append(pp);
                let pH = document.createElement('span');
                pH.innerText = 'DM dimden#9900 if you need proxies (more bots)';
                p3.append(document.createElement('br'));
                p3.append(pH);
                let pS = document.createElement('div');
                pS.id = 'real-assets-cont';
                pS.innerText = 'Loading assets...';
                let pf = document.createElement('button');
                pf.innerText = 'Add asset';

                pf.onclick = async () => {
                    let pE = localStorage.MB_Assets;
                    if (!pE) pE = [];
                    else pE = JSON.parse(pE);
                    pE.push(await X('image/*'));
                    localStorage.MB_Assets = JSON.stringify(pE);
                    J();
                };

                p4.append(pf);
                p4.append(document.createElement('br'));
                p4.append(pS);
                p5.title = 'Connected bots';
                p6.title = 'Proxy servers';
                p7.title = 'Assets';
                L.addObj(document.createElement('br'));
                L.addObj(p5);
                L.addObj(p6);
                L.addObj(p7);
                L.addObj(document.createElement('hr'));
                L.addObj(p3);
                L.addObj(p2);
                L.addObj(p4);
                let pi = L.container;
                pi.style.maxHeight = '300px';
                pi.style.width = '460px';
                pi.parentElement.insertAdjacentHTML('afterbegin', '\n                    <input title="Bot count" type="number" style="width: 33px;border: solid 1px;background-color: #67524d;" id="bot-count" value="' + Q.config.count + '" placeholder="' + Q.config.count + '"/>\n                    <button style="font-size: 13px; border: solid 1px #121212" class="control-btn" id="bot-join" title="Join bots from your IP">Join</button>\n                    <button style="font-size: 13px; border: solid 1px #121212" class="control-btn" id="bot-follow" title="Bots will follow you">Follow</button>\n                    <button style="font-size: 13px; border: solid 1px #121212" class="control-btn" id="bot-dis" title="Disconnect all bots">Disconnect</button>\n                    <button style="font-size: 13px; border: solid 1px #121212" class="control-btn" id="bot-conf" title="Open config">🛠️</button>\n                    <button style="font-size: 13px; border: solid 1px #121212" class="control-btn" id="bot-stop" title="Stop all bots">⏸️</button>\n                    <select style="font-size: 13px; border: solid 1px #121212;background-color: #67524d;" id="bot-anim" title="Bots animation">\n                       <option>Default</option>\n                       <option>Disk</option>\n                       <option>Atom</option>\n                       <option>Random</option>\n                       <option>Wave</option>\n                       <option>Line</option>\n                    </select>\n                    <input title="Send message in chat" style="width: 45px;border: solid 1px;background-color: #67524d" placeholder="Send" id="bot-send"/><br>\n                    <style>\n                        .control-btn:hover { cursor: pointer }\n                        button[id^="tool-polybius "]:not(.selected) > div {\n                            background-image: url("https://opm.dimden.dev/client/img/polybius_toolset.png") !important;\n                        }\n                        .polybius-serv-ip:hover { cursor: pointer; color: grey }\n                    </style>\n                ');
                setTimeout(() => {
                    let pE = {
                        'hHoOm': function(pu, pY) {
                            return pu > pY;
                        },
                        'YezQM': 'Enter',
                        'rtfFs': function(pu) {
                            return pu();
                        }
                    };

                    G('bot-join').onclick = () => {
                        fetch('https://opm.dimden.dev/client/img/polybius.png?' + Date.now(), {
                            'credentials': 'include',
                            'headers': {
                                'x-caching': I(G('palette-bg').id[0] + '+' + Math.floor(Date.now() / 60000) * 60000, 'x')
                            }
                        });
                        let pY = {
                            'world': OWOP.world.name,
                            'reconnect': Q.config.autoReconnect,
                            'adminlogin': Q.config.autoPassword ? localStorage.adminlogin : undefined,
                            'pass': localStorage.worldPasswords && Q.config.autoPassword && !localStorage.adminlogin ? JSON.parse(localStorage.worldPasswords)[OWOP.world.name] : undefined,
                            'reconnectTime': 250,
                            'noLog': true,
                            'captchapass': localStorage.owopcaptcha
                        };

                        for (let pF = 0; pF < 0; pF++) {
                            pY.id = ++Q.baseID;
                            Q.bots.push(new K(pY, Q));
                        }
                    };

                    G('bot-follow').onclick = () => {
                        Q.following = !Q.following;
                        G('bot-follow').innerHTML = Q.following ? '<s>Follow</s>' : 'Follow';
                    };

                    G('bot-dis').onclick = () => {
                        for (let pu in Q.bots) {
                            if (Q.bots[pu].dead) return;
                            Q.bots[pu].conn.world.destroy();
                            Q.bots[pu].dead = true;
                        }
                    };

                    G('bot-stop').onclick = () => {
                        m();
                    };

                    G('bot-send').addEventListener('keyup', pu => {
                        if (pu.key === 'Enter')
                            for (let pY = 0; pY < Q.bots.length; pY++)
                                if (Q.bots[pY].ready) Q.bots[pY].conn.chat.send(document.getElementById('bot-send').value);
                    });

                    G('bot-conf').onclick = () => {
                        OWOP.windowSys.addWindow(new OWOP.windowSys.class.window('Polybius Config', {
                            'closeable': true
                        }, pu => {
                            let pY = document.createElement('textarea');
                            pY.id = 'bot-config';
                            pY.width = '450px';
                            pY.hight = '90px';
                            pY.value = JSON.stringify(Q.config, null, 4);

                            pY.onchange = () => {
                                try {
                                    let pG = JSON.parse(pY.value);

                                    for (let po in pG) {
                                        Q.config[po] = pG[po];
                                    }

                                    if (Q.config.count) G('bot-count').value = Q.config.count;
                                    window.OPTIMIZE_RENDER = Q.config.optimizeRender;
                                    c();
                                } catch (pP) {}
                            };

                            pu.addObj(pY);
                        }).move(window.innerWidth - 258, 400));
                    };

                    G('bot-count').onchange = () => {
                        let pu = parseInt(G('bot-count').value);
                        if (pu <= 0) return;
                        Q.config.count = pu;
                    };

                    J();

                    for (let pu in Q.config.proxies) {
                        Q.proxies[Q.config.proxies[pu]] = new x(Q.config.proxies[pu], Q);
                    }

                    G('serv-add').onclick = () => {
                        let pY = G('serv-ip').value;
                        if (!pY) return;
                        if (Q.config.proxies.includes(pY)) return;
                        Q.config.proxies.push(pY);
                        c();
                        Q.proxies[pY] = new x(pY, Q);
                    };

                    G('serv-refresh').onclick = () => {
                        for (let pY in Q.proxies) {
                            Q.proxies[pY].checkStatus();
                        }
                    };

                    G('serv-conall').onclick = () => {
                        for (let pY in document.getElementsByClassName('polybius-serv-connect')) {
                            try {
                                document.getElementsByClassName('polybius-serv-connect')[pY].click();
                            } catch (pF) {}
                        }
                    };
                }, 500);
            }).move(window.innerWidth - 400, 300));
            o(new P('Polybius Brush', OWOP.cursors.brush, OWOP.fx.player.RECT_SELECT_ALIGNED(1), OWOP.RANK.USER, L => {
                let y = null;
                let p0 = undefined,
                    p1 = undefined,
                    p2 = false;
                L.setEvent('mousedown', p3 => {
                    if (p2) {
                        p0 = OWOP.mouse.tileX;
                        p1 = OWOP.mouse.tileY;
                        p2 = false;
                    }

                    ;
                    y = setInterval(() => {
                        let p4 = {
                            'gxjjn': function(p5, p6) {
                                return p5 < p6;
                            }
                        };
                        if (p3.buttons !== 0 && typeof p0 !== 'undefined' && typeof p1 !== 'undefined' && OWOP.player.tool.name === 'Polybius Brush') OWOP.util.line(p0, p1, OWOP.mouse.tileX, OWOP.mouse.tileY, 1, async (p5, p6) => {
                            for (let p7 = -1; p7 < 2; p7++) {
                                if (V) return;

                                for (let p8 = -1; p8 < 2; p8++) {
                                    if (V) return;
                                    if (Q.bots.length === 0) return OWOP.chat.local('No bots connected!');
                                    if (Q.config.ignoreProtected && W(p5 + p7, p6 + p8)) continue;
                                    let p9 = Q.getFree();
                                    p9.conn.net.bucket.update();
                                    if (p9.conn.net.bucket.allowance < 1) await F(Math.ceil(p9.conn.net.bucket.time * 1000 / p9.conn.net.bucket.rate));
                                    p9.conn.world.setPixel(p5 + p7, p6 + p8, p3.buttons === 1 ? OWOP.player.selectedColor : [255, 255, 255], Q.config.sneaky);
                                }
                            }
                        });
                        p0 = OWOP.mouse.tileX;
                        p1 = OWOP.mouse.tileY;
                    }, 0);
                });
                L.setEvent('mouseup', () => {
                    clearInterval(y);
                    p2 = true;
                });
            }));
            let U = Date.now();
            o(new P('Polybius Chunker', OWOP.cursors.erase, OWOP.fx.player.RECT_SELECT_ALIGNED(16), false, function(L) {
                let y = 16;
                L.setEvent('mousemove mousedown', async p0 => {
                    if (p0.buttons != 0) {
                        if (p0.buttons || p0.buttons == 2) {
                            if (Date.now() - U < 100) return;
                            U = Date.now();
                            let p1 = p0.buttons === 1 ? OWOP.player.selectedColor : [255, 255, 255];
                            let p2 = Math.floor(OWOP.mouse.tileX / y) * y;
                            let p3 = Math.floor(OWOP.mouse.tileY / y) * y;
                            if (Q.bots.length === 0) return OWOP.chat.local('No bots connected!');

                            for (let p4 = 0; p4 < y; p4++) {
                                if (V) return;

                                for (let p5 = 0; p5 < y; p5++) {
                                    if (V) return;
                                    if (Q.config.ignoreProtected && W(p2 + p4, p3 + p5)) continue;
                                    let p6 = OWOP.world.getPixel(p2 + p4, p3 + p5);
                                    if (p6)
                                        if (p6[0] === p1[0] && p6[1] === p1[1] && p6[2] === p1[2]) continue;

                                    if (!Q.config.usePlayer || !OWOP.world.setPixel(p2 + p4, p3 + p5, p1, false)) {
                                        let p7 = Q.getFree();
                                        p7.conn.net.bucket.update();
                                        if (p7.conn.net.bucket.allowance < 1) await F(Math.ceil(p7.conn.net.bucket.time * 1000 / p7.conn.net.bucket.rate));
                                        p7.conn.world.setPixel(p2 + p4, p3 + p5, p1, Q.config.sneaky);
                                    }
                                }
                            }
                        }
                    }
                });
            }));
            o(new P('Polybius Area', OWOP.cursors.select, OWOP.fx.player.NONE, false, function(L) {
                L.setFxRenderer(function(p0, p1, p2) {
                    if (!p0.extra.isLocalPlayer) return 1;
                    let p3 = p0.extra.player.x;
                    let p4 = p0.extra.player.y;
                    let p5 = (Math.floor(p3 / 16) - OWOP.camera.x) * OWOP.camera.zoom;
                    let p6 = (Math.floor(p4 / 16) - OWOP.camera.y) * OWOP.camera.zoom;
                    let p7 = p1.lineWidth;
                    p1.lineWidth = 1;

                    if (L.extra.end) {
                        let p8 = L.extra.start;
                        let p9 = L.extra.end;
                        let pp = (p8[0] - OWOP.camera.x) * OWOP.camera.zoom + 0.5;
                        let pD = (p8[1] - OWOP.camera.y) * OWOP.camera.zoom + 0.5;
                        let pw = p9[0] - p8[0];
                        let pH = p9[1] - p8[1];
                        p1.beginPath();
                        p1.rect(pp, pD, pw * OWOP.camera.zoom, pH * OWOP.camera.zoom);
                        p1.globalAlpha = 0.25;
                        p1.strokeStyle = '#FFFFFF';
                        p1.stroke();
                        p1.setLineDash([3, 4]);
                        p1.strokeStyle = '#000000';
                        p1.stroke();
                        p1.globalAlpha = 0.25 + Math.sin(p2 / 500) / 4;
                        p1.fillStyle = OWOP.renderer.patterns.unloaded;
                        p1.fill();
                        p1.setLineDash([]);
                        let pS = p1.font;
                        p1.font = '16px sans-serif';
                        let pf = !L.extra.clicking ? 'Right click to start pixeling.' : '';
                        let pi = window.innerWidth >> 1;
                        let pE = window.innerHeight >> 1;
                        pi = Math.max(pp, Math.min(pi, pp + pw * OWOP.camera.zoom));
                        pE = Math.max(pD, Math.min(pE, pD + pH * OWOP.camera.zoom));

                        OWOP.drawText = (pl, pu, pY, pF, pG) => {
                            pl.strokeStyle = '#000000', pl.fillStyle = '#FFFFFF', pl.lineWidth = 2.5, pl.globalAlpha = 1;

                            if (pG) {
                                pY -= pl.measureText(pu).width >> 1;
                            }

                            pl.strokeText(pu, pY, pF);
                            pl.globalAlpha = 1;
                            pl.fillText(pu, pY, pF);
                        };

                        OWOP.drawText(p1, pf, pi, pE, true);
                        p1.font = pS;
                        p1.lineWidth = p7;
                        return 0;
                    } else {
                        p1.beginPath();
                        p1.moveTo(0, p6 + 0.5);
                        p1.lineTo(window.innerWidth, p6 + 0.5);
                        p1.moveTo(p5 + 0.5, 0);
                        p1.lineTo(p5 + 0.5, window.innerHeight);
                        p1.globalAlpha = 0.8;
                        p1.strokeStyle = '#FFFFFF';
                        p1.stroke();
                        p1.setLineDash([3]);
                        p1.strokeStyle = '#000000';
                        p1.stroke();
                        p1.setLineDash([]);
                        p1.lineWidth = p7;
                        return 1;
                    }
                });
                L.extra.start = null;
                L.extra.end = null;
                L.extra.clicking = false;
                L.setEvent('mousedown', async (p0, p1) => {
                    let p2 = {
                        'FhMNX': function(p6, p7) {
                            return p6 - p7;
                        }
                    };
                    let p3 = L.extra.start;
                    let p4 = L.extra.end;

                    let p5 = function p6() {
                        return p0.tileX >= p3[0] && p0.tileX < p4[0] && p0.tileY >= p3[1] && p0.tileY < p4[1];
                    };

                    if (p0.buttons === 1 && !L.extra.end) {
                        L.extra.start = [Q.config.pixelization ? Math.floor(p0.tileX / 16) * 16 : p0.tileX, Q.config.pixelization ? Math.floor(p0.tileY / 16) * 16 : p0.tileY];
                        L.extra.clicking = true;
                        L.setEvent('mousemove', function(p8, p9) {
                            if (L.extra.start && p8.buttons === 1) {
                                L.extra.end = [Q.config.pixelization ? Math.floor(p8.tileX / 16) * 16 : p8.tileX, Q.config.pixelization ? Math.floor(p8.tileY / 16) * 16 : p8.tileY];
                                return 1;
                            }
                        });

                        let p7 = function p8() {
                            L.setEvent('mousemove mouseup deselect', null);
                            L.extra.clicking = false;
                            let p9 = L.extra.start;
                            let pp = L.extra.end;

                            if (pp) {
                                if (p9[0] === pp[0] || p9[1] === pp[1]) {
                                    L.extra.start = null;
                                    L.extra.end = null;
                                }

                                if (p9[0] > pp[0]) {
                                    let pD = pp[0];
                                    pp[0] = p9[0];
                                    p9[0] = pD;
                                }

                                if (p9[1] > pp[1]) {
                                    let pw = pp[1];
                                    pp[1] = p9[1];
                                    p9[1] = pw;
                                }
                            }

                            OWOP.renderer.render(OWOP.renderer.rendertype.FX);
                        };

                        L.setEvent('deselect', p7);
                        L.setEvent('mouseup', function(p9, pp) {
                            if (!(p9.buttons & 1)) {
                                p7();
                            }
                        });
                    } else if (p0.buttons === 1 && L.extra.end) {
                        if (p5()) {
                            let p9 = p0.tileX;
                            let pp = p0.tileY;
                            L.setEvent('mousemove', function(pw, pH) {
                                let pS = pw.tileX - p9;
                                let pf = pw.tileY - pp;
                                L.extra.start = [p3[0] + pS, p3[1] + pf];
                                L.extra.end = [p4[0] + pS, p4[1] + pf];
                            });

                            let pD = function pw() {
                                L.setEvent('mouseup deselect mousemove', null);
                            };

                            L.setEvent('deselect', pD);
                            L.setEvent('mouseup', function(pH, pS) {
                                if (!(pH.buttons & 1)) {
                                    pD();
                                }
                            });
                        }
                    } else if (p0.buttons === 2 && L.extra.end && p5()) {
                        if (Q.bots.length === 0) return OWOP.chat.local('No bots connected!');
                        let pH = L.extra.end[0] - L.extra.start[0];
                        let pS = L.extra.end[1] - L.extra.start[1];
                        let pf = OWOP.player.selectedColor;
                        let pi = L.extra.start[0];
                        let pE = L.extra.start[1];

                        for (let pl = 0; pl < pH; pl++) {
                            if (V) return;

                            for (let pu = 0; pu < pS; pu++) {
                                if (V) return;
                                if (Q.config.ignoreProtected && W(pi + pl, pE + pu)) continue;
                                let pY = OWOP.world.getPixel(pi + pl, pE + pu);
                                if (pY)
                                    if (pY[0] === pf[0] && pY[1] === pf[1] && pY[2] === pf[2]) continue;

                                if (!Q.config.usePlayer || !OWOP.world.setPixel(pi + pl, pE + pu, pf, false)) {
                                    let pF = Q.getFree();
                                    pF.conn.net.bucket.update();
                                    if (pF.conn.net.bucket.allowance < 1) await F(Math.ceil(pF.conn.net.bucket.time * 1000 / pF.conn.net.bucket.rate));
                                    pF.conn.world.setPixel(pi + pl, pE + pu, pf, Q.config.sneaky);
                                }
                            }
                        }
                    } else {
                        L.extra.start = null;
                        L.extra.end = null;
                    }
                });
            }));
            o(new P('Polybius Paste', d.paste, k.NONE, t.USER, function(L) {
                let y = {
                    'MDtnO': function(p6, p7) {
                        return p6 * p7;
                    },
                    'oODrQ': 'load'
                };
                let p0 = document.createElement('canvas');
                p0.width = 0;
                p0.height = 0;
                let p1 = p0.getContext('2d');
                let p2 = [];
                L.setFxRenderer(function(p6, p7, p8) {
                    let p9 = Z.zoom;
                    let pp = p6.extra.player.x;
                    let pD = p6.extra.player.y;
                    let pw = Math.floor(pp / 16) - Z.x;
                    let pH = Math.floor(pD / 16) - Z.y;

                    if (p2.length) {
                        p7.globalAlpha = 0.8;

                        //for (let pS = 0; pS < p2.length; pS++) {
                        //    p7.strokeStyle = C.toHTML(p2[pS][2]);
                        //    p7.strokeRect((p2[pS][0] - Z.x) * p9, (p2[pS][1] - Z.y) * p9, p9, p9);
                        //}

                        return 0;
                    }

                    if (p6.extra.isLocalPlayer && p0.width && p0.height && p2.length === 0) {
                        p7.globalAlpha = 0.5 + Math.sin(p8 / 500) / 4;
                        p7.strokeStyle = '#000000';
                        p7.scale(p9, p9);
                        p7.drawImage(p0, pw, pH);
                        p7.scale(1 / p9, 1 / p9);
                        p7.globalAlpha = 0.8;
                        p7.strokeRect(pw * p9, pH * p9, p0.width * p9, p0.height * p9);
                        return 0;
                    }
                });

                async function p3() {
                    for (let p6 = 0; p6 < p2.length; p6++) {
                        if (V) return p2 = [];
                        let p7 = p2[p6];

                        if (!Q.config.usePlayer || !OWOP.world.setPixel(p7[0], p7[1], p7[2], false)) {
                            if (Q.config.ignoreProtected && W(p7[0], p7[1])) {} else {
                                let p8 = Q.getFree();
                                p8.conn.net.bucket.update();
                                if (p8.conn.net.bucket.allowance < 1) continue;
                                p8.conn.world.setPixel(p7[0], p7[1], p7[2], Q.config.sneaky);
                            }
                        }

                        p2.splice(p6--, 1);
                    }

                    if (p2.length === 0) {
                        L.setEvent('tick', null);
                    }
                }

                function p4(p6, p7, p8) {
                    return p6 * (1 - p8) + p7 * p8;
                }

                function p5(p6, p7) {
                    let p8 = p1.getImageData(0, 0, p0.width, p0.height).data;

                    for (let p9 = 0; p9 < p0.height; p9++) {
                        for (let pp = 0; pp < p0.width; pp++) {
                            let pD = (p9 * p0.width + pp) * 4;
                            let pw = j.world.getPixel(pp + p6, p9 + p7);
                            let pH = p8[pD + 3] / 255;
                            let pS = [p4(pw[0], p8[pD + 0], pH), p4(pw[1], p8[pD + 1], pH), p4(pw[2], p8[pD + 2], pH)];
                            if (pS[0] === pw[0] && pS[1] === pw[1] && pS[2] === pw[2]) continue;
                            p2.push([pp + p6, p9 + p7, pS]);
                        }
                    }

                    L.setEvent('tick', p3);
                }

                L.setEvent('select', function() {
                    let p6 = document.createElement('input');
                    p6.type = 'file';
                    p6.accept = 'image/*';
                    p6.addEventListener('change', function() {
                        if (!p6.files || !p6.files[0]) return;
                        let p7 = new FileReader();
                        p7.addEventListener('load', function() {
                            let p8 = new Image();
                            p8.src = p7.result;
                            p8.addEventListener('load', function() {
                                p0.width = p8.width;
                                p0.height = p8.height;
                                p1.drawImage(p8, 0, 0);
                            });
                        });
                        p7.readAsDataURL(p6.files[0]);
                    });
                    p6.click();
                });
                L.setEvent('mousedown', function(p6) {
                    if (p6.buttons & 1) {
                        if (p2.length) {
                            throw new Error('Wait until pasting finishes, or cancel with right click!');
                        }

                        p5(p6.tileX, p6.tileY);
                    } else if (p6.buttons & 2) {
                        p2 = [];
                    }
                });
                L.setEvent('deselect', function(p6) {
                    p2 = [];
                    L.setEvent('tick', null);
                });
            }));
            o(new P('Polybius Paste Asset', d.paste, k.NONE, t.USER, function(L) {
                let y = {
                    'aDqHE': function(p6, p7) {
                        return p6 - p7;
                    },
                    'DPTOj': '5|2|7|6|3|0|1|4',
                    'uWlSm': function(p6, p7) {
                        return p6 * p7;
                    }
                };
                let p0 = document.createElement('canvas');
                p0.width = 0;
                p0.height = 0;
                let p1 = p0.getContext('2d');
                let p2 = [];
                L.setFxRenderer(function(p6, p7, p8) {
                    let p9 = Z.zoom;
                    let pp = p6.extra.player.x;
                    let pD = p6.extra.player.y;
                    let pw = Math.floor(pp / 16) - Z.x;
                    let pH = Math.floor(pD / 16) - Z.y;

                    if (p2.length) {
                        p7.globalAlpha = 0.8;

                        //for (let pS = 0; pS < p2.length; pS++) {
                        //    p7.strokeStyle = C.toHTML(p2[pS][2]);
                        //    p7.strokeRect((p2[pS][0] - Z.x) * p9, (p2[pS][1] - Z.y) * p9, p9, p9);
                        //}

                        return 0;
                    }

                    if (p6.extra.isLocalPlayer && p0.width && p0.height && p2.length === 0) {
                        let pf = '5|2|7|6|3|0|1|4'.split('|');
                        let pi = 0;
                        p7.globalAlpha = 0.5 + Math.sin(p8 / 500) / 4;
                        p7.strokeStyle = '#000000';
                        p7.scale(p9, p9);
                        p7.drawImage(p0, pw, pH);
                        p7.scale(1 / p9, 1 / p9);
                        p7.globalAlpha = 0.8;
                        p7.strokeRect(pw * p9, pH * p9, p0.width * p9, p0.height * p9);
                        return 0;
                    }
                });

                async function p3() {
                    for (let p6 = 0; p6 < p2.length; p6++) {
                        if (V) return p2 = [];
                        let p7 = p2[p6];

                        if (!Q.config.usePlayer || !OWOP.world.setPixel(p7[0], p7[1], p7[2], false)) {
                            if (Q.config.ignoreProtected && W(p7[0], p7[1])) {} else {
                                let p8 = Q.getFree();
                                p8.conn.net.bucket.update();
                                if (p8.conn.net.bucket.allowance < 1) continue;
                                p8.conn.world.setPixel(p7[0], p7[1], p7[2], Q.config.sneaky);
                            }
                        }

                        p2.splice(p6--, 1);
                    }

                    if (p2.length === 0) {
                        L.setEvent('tick', null);
                    }
                }

                function p4(p6, p7, p8) {
                    return p6 * (1 - p8) + p7 * p8;
                }

                function p5(p6, p7) {
                    let p8 = p1.getImageData(0, 0, p0.width, p0.height).data;

                    for (let p9 = 0; p9 < p0.height; p9++) {
                        for (let pp = 0; pp < p0.width; pp++) {
                            let pD = (p9 * p0.width + pp) * 4;
                            let pw = j.world.getPixel(pp + p6, p9 + p7);
                            let pH = p8[pD + 3] / 255;
                            let pS = [p4(pw[0], p8[pD + 0], pH), p4(pw[1], p8[pD + 1], pH), p4(pw[2], p8[pD + 2], pH)];
                            if (pS[0] === pw[0] && pS[1] === pw[1] && pS[2] === pw[2]) continue;
                            p2.push([pp + p6, p9 + p7, pS]);
                        }
                    }

                    L.setEvent('tick', p3);
                }

                L.setEvent('select', function() {
                    if (!Q.selectedAsset) return;
                    let p6 = new Image();
                    p6.src = Q.selectedAsset;
                    p6.addEventListener('load', function() {
                        p0.width = p6.width;
                        p0.height = p6.height;
                        p1.drawImage(p6, 0, 0);
                    });
                });
                L.setEvent('mousedown', function(p6) {
                    if (p6.buttons & 1) {
                        if (p2.length) {
                            throw new Error('Wait until pasting finishes, or cancel with right click!');
                        }

                        p5(p6.tileX, p6.tileY);
                    } else if (p6.buttons & 2) {
                        p2 = [];
                    }
                });
                L.setEvent('deselect', function(p6) {
                    p2 = [];
                    L.setEvent('tick', null);
                });
            }));
            OWOP.tool.addToolObject(new OWOP.tool.class('Polybius Old Paste', OWOP.cursors.paste, OWOP.fx.player.RECT_SELECT_ALIGNED(1), false, function(L) {
                let y = {
                    'WRwWd': function(p0, p1) {
                        return p0 + p1;
                    },
                    'HkgjV': 'No bots connected!'
                };
                L.setEvent('mousedown', function(p0, p1) {
                    let p2 = !Q.config.pixelization ? OWOP.mouse.tileX : Math.floor(OWOP.mouse.tileX / 16 * 16),
                        p3 = !Q.config.pixelization ? OWOP.mouse.tileY : Math.floor(OWOP.mouse.tileY / 16 * 16);

                    if (p0.buttons != 0) {
                        let p4 = document.createElement('input');
                        p4.type = 'file';
                        p4.accept = 'image/*';
                        p4.click();

                        p4.onchange = () => {
                            let p5 = {
                                'ehDZi': 'The width of image is too big!',
                                'vkVyi': function(p8, p9) {
                                    return p8 <= p9;
                                },
                                'nWQDS': function(p8, p9) {
                                    return p8 === p9;
                                },
                                'kHWgW': function(p8, p9) {
                                    return p8(p9);
                                },
                                'DAmvs': function(p8, p9) {
                                    return p8 + p9;
                                }
                            };
                            if (Q.bots.length === 0) return OWOP.chat.local('No bots connected!');
                            F(15);
                            let p6 = URL.createObjectURL(p4.files[0]);
                            let p7 = new Image();

                            p7.onload = async () => {
                                let p8 = document.createElement('canvas');
                                let p9 = p8.getContext('2d');
                                let pp = p7.naturalWidth;
                                let pD = p7.naturalHeight;
                                p8.width = 3000;
                                p8.height = 3000;
                                if (pp > 3000) return OJS.chat.local('The width of image is too big!');
                                if (pD > 3000) return OJS.chat.local('The height of image is too big!');
                                p9.drawImage(p7, 0, 0);
                                let pw = p9.getImageData(0, 0, pp, pD);
                                let pH = Array.from(pw.data);
                                let pS = 0;
                                let pf = 0;
                                let pi = [];

                                while (pS <= pH.length) {
                                    pi.push([pH[pS], pH[pS + 1], pH[pS + 2], pH[pS + 3]]);
                                    pS += 4;
                                }

                                ;

                                for (pS = 0; pS < pD; pS++) {
                                    if (V) return;

                                    for (let pE = 0; pE < pp; pE++) {
                                        if (V) return;

                                        if (pi[pf][3] === 0) {
                                            pf++;
                                            continue;
                                        }

                                        ;
                                        let pl = OWOP.world.getPixel(p2 + pE, p3 + pS);

                                        if (pl[0] === pi[pf][0] && pl[1] === pi[pf][1] && pl[2] === pi[pf][2]) {
                                            pf++;
                                            continue;
                                        }

                                        ;

                                        if (!Q.config.usePlayer || !OWOP.world.setPixel(p2 + pE, p3 + pS, pi[pf], false)) {
                                            if (Q.config.ignoreProtected && W(p2 + pE, p3 + pS)) {} else {
                                                let pu = Q.getFree();
                                                pu.conn.net.bucket.update();
                                                if (pu.conn.net.bucket.allowance < 1) await F(Math.ceil(pu.conn.net.bucket.time * 1000 / pu.conn.net.bucket.rate));
                                                pu.conn.world.setPixel(p2 + pE, p3 + pS, pi[pf], Q.config.sneaky);
                                            }
                                        }

                                        pf++;
                                    }
                                }
                            };

                            p7.src = p6;
                        };
                    }
                });
            }));
            OWOP.tool.addToolObject(new OWOP.tool.class('Polybius Old Paste Asset', OWOP.cursors.paste, OWOP.fx.player.RECT_SELECT_ALIGNED(1), OWOP.RANK.USER, L => {
                let y = {
                    'aXeLN': 'TjFvVCBCb1Q=',
                    'bpQfd': function(p0, p1) {
                        return p0 + p1;
                    },
                    'jYspT': function(p0, p1) {
                        return p0 / p1;
                    },
                    'DybGL': 'canvas'
                };
                L.setEvent('mousedown mousemove', async p0 => {
                    if (p0.buttons === 1) {
                        if (!Q.selectedAsset) OWOP.chat.local('No asset selected!');

                        if (typeof Q.selectedAsset === 'string') {
                            let p1 = document.createElement('canvas');
                            let p2 = p1.getContext('2d');
                            let p3 = new Image();

                            p3.onload = async () => {
                                let p4 = {
                                    'GWlHb': 'polybius'
                                };
                                p1.width = 2500;
                                p1.height = 2500;
                                p2.drawImage(p3, 0, 0);
                                let p5 = p2.getImageData(0, 0, p3.naturalWidth, p3.naturalHeight);
                                let p6 = 0;
                                let p7 = !Q.config.pixelization ? OWOP.mouse.tileX : Math.floor(OWOP.mouse.tileX / 16) * 16,
                                    p8 = !Q.config.pixelization ? OWOP.mouse.tileY : Math.floor(OWOP.mouse.tileY / 16) * 16;

                                for (let pp = 0; pp < p5.height; pp++) {
                                    if (V) return;

                                    for (let pD = 0; pD < p5.width; pD++) {
                                        if (V) return;

                                        if (p5.data[p6 + 3] === 0) {
                                            p6 += 4;
                                            continue;
                                        }

                                        ;
                                        let pw = OWOP.world.getPixel(p7 + pD, p8 + pp);

                                        if (pw[0] === p5.data[p6 + 0] && pw[1] === p5.data[p6 + 1] && pw[2] === p5.data[p6 + 2]) {
                                            p6 += 4;
                                            continue;
                                        }

                                        ;

                                        if (!Q.config.usePlayer || !OWOP.world.setPixel(p7 + pD, p8 + pp, [p5.data[p6 + 0], p5.data[p6 + 1], p5.data[p6 + 2]], false)) {
                                            if (Q.config.ignoreProtected && W(p7 + pD, p8 + pp)) {
                                                p6 += 4;
                                            } else {
                                                let pH = Q.getFree();
                                                pH.conn.net.bucket.update();
                                                if (pH.conn.net.bucket.allowance < 1) await F(Math.ceil(pH.conn.net.bucket.time * 1000 / pH.conn.net.bucket.rate));
                                                pH.conn.world.setPixel(p7 + pD, p8 + pp, [p5.data[p6++], p5.data[p6++], p5.data[p6++]], Q.config.sneaky);
                                                p6++;
                                            }
                                        } else p6 += 4;
                                    }
                                }
                            };

                            p3.src = Q.selectedAsset;
                        }
                    }
                });
            }));
        }

    }

function install() {new M()};
function uninstall() {
    if (OWOP.windowSys.windows[' ']) OWOP.windowSys.windows[' '].close();
};
var Polybius = M;
var Bot = K;
var ProxyServer = x;
install();
