// ==UserScript==
// @name         MasterBot Client
// @version      1.0.0
// @license      MIT
// @description  Bot client with many functions. Bad optimization, but good UI and code.
// @author       scar17off & bjc
// @released_on  2022.04.01 (1st april 2022)
// =-=-=-=coders & other authors=-=-=-=
// Bot name was suggested by Not Bot (449948380035153920)
// sobakaya helped with UI designing (909443291198664735)
// Desmecito looked for bugs in the code and had early access (924366077155237918)
// Animations was made by Not Bot (449948380035153920)
// @match        *://augustberchelmann.com/owop/*
// @match        *://ourworldofpixels.com/*
// @match        *://yourworldofpixels.glitch.me/*
// @match        *://ourworldofscripts.glitch.me/*
// @match        *://ywoa.glitch.me/*
// @match        *://owoppa.glitch.me/*
// @match        *://owoppa.netlify.app/*
// @icon         https://www.google.com/s2/favicons?domain=ourworldofpixels.com
// @grant        none
// ==/UserScript==

(function(){
	"use strict";

	setTimeout(() => {
		window.history.pushState("object or string", "Title", "/?#main");
		let Master = {};

		function configSys() {
			if(document.getElementById("tabbar") && localStorage.MasterClient){
				Master = JSON.parse(localStorage.MasterClient);
			} else if(!localStorage.MasterClient){
				localStorage.MasterClient = JSON.stringify({
					BotCount: 1,
					ProxyPasswords: "",
					BotNickname: "MASTER-BOT",
					ReconnectTime: 250,
					AutoReconnect: false,
					UsePlayer: false,
					Animation: "Circle",
					Animations: {
			            circle: 0,
			            disk: 1,
			            atom: 2,
			            random: 3,
			            wave: 4,
			            line: 5,
			            hyperbola: 6,
			            ez: 7,
			            botline: 8,
			            x: 9,
			            spiral: 10,
			            cool: 11,
			            disktwo: 12,
			            topbottom: 13,
			            laggy: 14,
			            smallcircle: 15,
			            eight: 16,
			            cool2: 17,
			            tworings: 18,
			            threed: 19,
			            flower: 20,
			            square: 21,
			            infinity: 22,
			            infinity2: 23,
			            default2: 24,
			            trialge: 25,
			            disk3: 26,
			            saturn: 27,
			            storm: 28,
			            disk4: 29
			        },
					SmartAutoReconnect: false,
					WolfMove: false,
					OldMBPaste: false,
					NoVignette: false,
					EraserPattern: "Default",
					AutoNickname: false,
					AutoPassword: false,
					BotsUpdateRate: 1000,
					ConfigUpdateRate: 750,
					Follow: false,
					PaintFollow: false,
					AutoLogin: false,
					AssetPasterPattern: "Default",
					AreaPattern: "Default",
					Patterns: {
						Eraser: ["Default", "TopBottom", "Perfect", "Circle"],
						AssetPaster: ["Default", "LeftUp", "Grid", "Square", "Random"],
						Area: ["Default", "TopBottom", "Random"]
					}
				});
				Master = JSON.parse(localStorage.MasterClient);
			};
			if(!document.getElementById("tabbar")) {
				clearInterval(configSys);
			};
		};
		function abool(arg1) {
			let toret;
			if(arg1 == "on") toret = true;
			if(arg1 == "off") toret = false;
			if(arg1 == "true") toret = true;
			if(arg1 == "false") toret = false;
			if(arg1 == true) toret = true;
			if(arg1 == false) toret = false;
			return toret;
		};
		var cfgint = setInterval(configSys, Master.ConfigUpdateRate);
		let BOTS = [];
		let botlist = [];
		if(!OWOP.tools) OWOP.tools = OWOP.tool;
		var chars = [
            [0b1111111, 0b1000001, 0b1010111, 0b1010100, 0b1010111, 0b1000001, 0b1111111] /*A*/ ,
            [0b1111111, 0b1000001, 0b1010101, 0b1010101, 0b1010101, 0b1001001, 0b1111111] /*B*/ ,
            [0b1111111, 0b1000001, 0b1011101, 0b1010101, 0b1010101, 0b1010101, 0b1110111] /*C*/ ,
            [0b1111111, 0b1000001, 0b1011101, 0b1010101, 0b1011101, 0b1100011, 0b0111110] /*D*/ ,
            [0b1111111, 0b1000001, 0b1010101, 0b1010101, 0b1010101, 0b1011101, 0b1110111] /*E*/ ,
            [0b1111111, 0b1000001, 0b1010111, 0b1010100, 0b1010100, 0b1011100, 0b1110000] /*F*/ ,
            [0b1111111, 0b1000001, 0b1011101, 0b1010101, 0b1010101, 0b1010001, 0b1111111] /*G*/ ,
            [0b1111111, 0b1000001, 0b1110111, 0b0010100, 0b1110111, 0b1000001, 0b1111111] /*H*/ ,
            [0b1111111, 0b1000001, 0b1111111] /*I*/ ,
            [0b1111111, 0b1010001, 0b1011101, 0b1010101, 0b1011101, 0b1000001, 0b1111111] /*J*/ ,
            [0b1111111, 0b1000001, 0b1110111, 0b0110110, 0b1101011, 0b1011101, 0b1110111] /*K*/ ,
            [0b1111111, 0b1000001, 0b1111101, 0b0000101, 0b0000101, 0b0000101, 0b0000111] /*L*/ ,
            [0b1111111, 0b1000001, 0b1011111, 0b1000001, 0b1011111, 0b1000001, 0b1111111] /*M*/ ,
            [0b1111111, 0b1000001, 0b1011111, 0b1000001, 0b1111101, 0b1000001, 0b1111111] /*N*/ ,
            [0b1111111, 0b1000001, 0b1011101, 0b1010101, 0b1011101, 0b1000001, 0b1111111] /*O*/ ,
            [0b1111111, 0b1000001, 0b1010111, 0b1010100, 0b1010100, 0b1000100, 0b1111100] /*P*/ ,
            [0b1111111, 0b1000001, 0b1011101, 0b1010101, 0b1011101, 0b1000011, 0b1111111] /*Q*/ ,
            [0b1111111, 0b1000001, 0b1010111, 0b1010100, 0b1010111, 0b1001001, 0b1111111] /*R*/ ,
            [0b1111111, 0b1000101, 0b1010101, 0b1010101, 0b1010101, 0b1010001, 0b1111111] /*S*/ ,
            [0b1110000, 0b1010000, 0b1011111, 0b1000001, 0b1011111, 0b1010000, 0b1110000] /*T*/ ,
            [0b1111111, 0b1000001, 0b1111101, 0b0000101, 0b1111101, 0b1000001, 0b1111111] /*U*/ ,
            [0b1111100, 0b1000110, 0b1111011, 0b0001101, 0b1111011, 0b1000110, 0b1111100] /*V*/ ,
            [0b1111110, 0b1000011, 0b1111101, 0b0100011, 0b1111101, 0b1000011, 0b1111110] /*W*/ ,
            [0b1110111, 0b1011101, 0b1101011, 0b0110110, 0b1101011, 0b1011101, 0b1110111] /*X*/ ,
            [0b1111000, 0b1001100, 0b1110111, 0b0011001, 0b1110111, 0b1001100, 0b1111000] /*Y*/ ,
            [0b1111111, 0b1010001, 0b1010101, 0b1010101, 0b1010101, 0b1000101, 0b1111111] /*Z*/ ,
        ];
        var NUMS = [
            [0b11111, 0b10001, 0b11111] /*0*/ ,
            [0b01000, 0b11111] /*1*/ ,
            [0b10111, 0b10101, 0b11101] /*2*/ ,
            [0b10101, 0b10101, 0b11111] /*3*/ ,
            [0b11100, 0b00100, 0b11111] /*4*/ ,
            [0b11101, 0b10101, 0b10111] /*5*/ ,
            [0b11111, 0b10101, 0b10111] /*6*/ ,
            [0b10000, 0b10000, 0b11111] /*7*/ ,
            [0b11111, 0b10101, 0b11111] /*8*/ ,
            [0b11101, 0b10101, 0b11111] /*9*/
        ];
        var symbols = {
            "33": [0b11101] /*!*/ ,
            "34": [0b11000, 0b00000, 0b11000] /*"*/ ,
            "35": [0b01010, 0b11111, 0b01010, 0b11111, 0b01010] /*#*/ ,
            "39": [0b11000] /*'*/ ,
            "40": [0b01110, 0b10001] /*(*/ ,
            "41": [0b10001, 0b01110] /*)*/ ,
            "43": [0b00100, 0b01110, 0b00100] /*+*/ ,
            "45": [0b00100, 0b00100, 0b00100] /*-*/ ,
            "46": [0b00001] /*.*/ ,
            "47": [0b00001, 0b00110, 0b11000] /*/*/ ,
            "58": [0b01010] /*:*/ ,
            "61": [0b01010, 0b01010, 0b01010] /*=*/ ,
            "63": [0b10101, 0b01000] /*?*/ ,
            "91": [0b11111, 0b10001] /*[*/ ,
            "93": [0b10001, 0b11111] /*]*/
        };
	    function infinityX(t) {
	        let x = (Math.cos(t*2)-1)/2;
	        if(Math.abs(t*2) % (4*Math.PI) > 2*Math.PI) return -x;
	        else return x;
	    };
	    function infinityY(t) {
	        return Math.sin(t*2) / 2;
	    };
	    function squareX(angle) {
	        let x = Math.sin(angle), y = Math.cos(angle);
	        return x / Math.max(Math.abs(x), Math.abs(y));
	    };
	    function squareY(angle) {
	        let x = Math.sin(angle), y = Math.cos(angle);
	        return y / Math.max(Math.abs(x), Math.abs(y));
	    };
	    function pixColor(img, X, Y, RGB) {
	        var abab = img.getImageData(X, Y, 1, 1).data
	        return [abab[0], abab[1], abab[2]]
	    };
	    function getRandomInt2(max) {
	        return Math.floor(Math.random() * max);
	    };
	    function dist(x, y) {
	        return Math.sqrt(x * x + y * y);
	    };
	    function append(src, onload) {
	        var s = document.createElement('script');
	        s.src = src;
	        s.onload = onload;
	        document.body.appendChild(s);
	    };
	    const proxyJoin = server => {
            let ws = "wss://ws-proxy" + server + ".glitch.me";
            let BotCount = parseFloat(document.getElementById("master-main-content-botcount").value);
            for (let i = 0; i < BotCount; i++) {
                let bot = new OJS.Client({
                    ws: ws + `?ws=${OWOP.options.serverAddress[0].url}`,
                    origin: location.href.split("?#")[0],
                    index: BOTS.length + 1,
                    proxy: server,
                    reconnect: Master.AutoReconnect || false,
					world: location.href.split("#")[1],
					reconnectTime: Master.ReconnectTime || 250,
					nolog: true
                });
                bot.net.ws.onmessage = msg => {
                    if (msg.data.toString().startsWith('You are banned.')) {
                        document.getElementById(`master-proxy-proxystatus-${server}`).innerText = "🔨";
                        //document.getElementById(`proxy-${server}`).style.cssText = "display:none";
                    };
                };
                bot.on("join", () => {
					BOTS.push(bot);
					let device;
                    if(bot.clientOptions.proxy) {device = "📡";} else {device = '🖥️';};
					let color = rgbtohex(bot.player.color[0], bot.player.color[1], bot.player.color[2]);
                    let bottable = document.createElement("tr");
                    bottable.innerHTML = `<td id="master-bots-content-list-bot-${bot.player.id}-index">${bot.clientOptions.index}</td><td id="master-bots-content-list-bot-${bot.player.id}-id">`+bot.player.id+`</td><td id="master-bots-content-list-bot-${bot.player.id}-x">`+bot.player.x+`</td><td id="master-bots-content-list-bot-${bot.player.id}-y">`+bot.player.y+`</td><td id="master-bots-content-list-bot-${bot.player.id}-pq">`+bot.net.bucket.allowance+`</td><td id="master-bots-content-list-bot-${bot.player.id}-color" style="font-size: 20px;color: ${color}" title="${color} | R: ${bot.player.color[0]} G: ${bot.player.color[1]} B: ${bot.player.color[2]}">■</td><td id="master-bots-content-list-bot-${bot.player.id}-device" title="${bot.clientOptions.proxy || ""}">`+device+'</td>'+`<button id="master-bots-content-list-bot-${bot.player.id}-leave">Leave</button>`+'';
                    bottable.id = `master-bots-content-list-bot-${bot.player.id}`;
                    for(let i = 0; i < BOTS.length; i++){ 
				        if(BOTS[i].player.id === bot.player.id) {
			                document.getElementById("master-bots-content-list").appendChild(bottable);
			                document.getElementById(`master-bots-content-list-bot-${bot.player.id}-leave`).addEventListener("click", () => {
			                    bot.net.ws.close();
			                    document.getElementById(`master-bots-content-list-bot-${bot.player.id}`).style.display = "none";;
			                   	for(let i = 0; i < BOTS.length; i++){ 
							        if(BOTS[i].player.id === bot.player.id) {
							            BOTS.splice(i, 1);
							        };
							    };
			                });
				        };
				    };
	                if(bot.clientOptions.proxy) document.getElementById(`master-proxy-content-proxyconns-${bot.options.proxy}`).innerText = parseInt(document.getElementById(`master-proxy-content-proxyconns-${bot.options.proxy}`).innerText) + 1;
                    if(Master.AutoLogin == true){
                        if(localStorage.adminlogin) {
                        	let cmd = "adminlogin";
                        	if(location.host = "ourworldofpixels.com") cmd = "pass";
                            bot.chat.send(`/${cmd} ${localStorage.adminlogin}`);
                        };
                    };
                    if(Master.AutoPassword == true) {
                        if(AutoPassword && JSON.parse(localStorage.worldPasswords)[location.href.split("?#")[0]]) bot.chat.send(`/pass ${JSON.parse(localStorage.worldPasswords)[location.href.split("?#")[0]]}`);
                    };
                    if(Master.AutoNickname == true) {
                        bot.chat.send(`/nickname ${Master.BotNickname}`);
                    };
				});

				bot.on("close", () => {
					for(let i = 0; i < BOTS.length; i++){ 
				        if(BOTS[i].player.id === bot.player.id) {
				        	clearInterval(BOTS[i].interval);
				            BOTS.splice(i, 1);
				        };
				    };
				    if(Master.AutoReconnect == false && Master.SmartAutoReconnect == true) {
				    	bot.world.join(location.href.split("?#")[1]);
				    };
				});
            };
        };
	    let last = 0;
		const getFree = () => {
            let b = BOTS.filter(i => i.net.ws.readyState === 1);
            if(b.length === 0) return -1;
            if(last >= b.length) last = 0;
            return last++;
        };
        let botslen = 7;
        async function writeChar(matrix, x, y) {
            for (var xx = 0; xx < matrix.length; xx++)
                for (var yy = 0; yy < 8; yy += slen)
                    for (var bb = 0; bb < slen; bb++)
                        if((matrix[xx] >> (7 - yy - bb)) & 1 && yy + bb < 8) {
                            const abc = getFree();
                            BOTS[abc].world.setPixel(x + xx, y + yy + bb, OWOP.player.selectedColor, false);
                        };
        };
        async function writeText(str, x, y) {
            if(isNaN(x) || isNaN(y)) return OWOP.chat.local('Invalid Coordinates')
            str = str.toUpperCase();
            var len = str.length,
                ccode, matrix;
            for (var i = 0; i < len; i++) {
                ccode = str.charCodeAt(i);
                if(ccode >= 0x41 && ccode <= 0x5a)
                    matrix = chars[ccode - 65];
                else if(ccode == 0x20) {
                    x += 2;
                    continue;
                } else if(ccode >= 0x30 && ccode <= 0x39)
                    matrix = NUMS[ccode - 0x30];
                else if(symbols[ccode])
                    matrix = symbols[ccode];
                else {
                    continue;
                }
                writeChar(matrix, x, y);
                x += matrix.length + 1;
            }
        };
		function loadScript(url) {
			let xhttpt = new XMLHttpRequest();
			xhttpt.open("GET", url);
			xhttpt.responseType = "text";
			xhttpt.addEventListener("load", function() {
				eval(xhttpt.response);
			});
			xhttpt.send();
		};
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
		        if(!data || typeof x !== "number" || typeof y !== "number") return error("ChunkSystem.setChunk: failed to set chunk (no data or invalid coords).");
		        if(data.constructor.name !== "Array") data = Array.from(data);
		        if(!this.chunks[x]) this.chunks[x] = [];
		        return this.chunks[x][y] = data;
		    };
		    getChunk(x, y, raw) {
		        if(!raw) {
		            x = Math.floor(x / Client.options.chunkSize);
		            y = Math.floor(y / Client.options.chunkSize);
		        };
		        if(!this.chunks[x]) return;
		        return this.chunks[x][y];
		    };
		    removeChunk(x, y) {
		        if(!this.chunks[x]) return;
		        if(!this.chunks[x][y]) return;
		        return this.chunks[x].splice(y, 1);
		    };
		    setPixel(x, y, rgb) {
		        if(!rgb || typeof rgb !== "object" || typeof x !== "number" || typeof y !== "number") return error("ChunkSystem.setPixel: failed to set pixel (no/wrong rgb or invalid coords).");
		        const chunkX = Math.floor(x / Client.options.chunkSize);
		        const chunkY = Math.floor(y / Client.options.chunkSize);
		        if(!this.chunks[chunkX]) return;
		        const chunk = this.chunks[chunkX][chunkY];
		        if(!chunk) return false;
		        const getIbyXY = (x, y, w) => (y * w + x) * 3;
		        const i = getIbyXY(x & Client.options.chunkSize - 1, y & Client.options.chunkSize - 1, Client.options.chunkSize);
		        chunk[i] = rgb[0];
		        chunk[i + 1] = rgb[1];
		        chunk[i + 2] = rgb[2];
		        return true;
		    };
		    getPixel(x, y) {
		        if(typeof x !== "number" || typeof y !== "number") return error("ChunkSystem.getPixel: failed to get pixel (invalid coords).");
		        const chunkX = Math.floor(x / Client.options.chunkSize);
		        const chunkY = Math.floor(y / Client.options.chunkSize);
		        if(!this.chunks[chunkX]) return;
		        const chunk = this.chunks[chunkX][chunkY];
		        const getIbyXY = (x, y, w) => (y * w + x) * 3;
		        const i = getIbyXY(x & Client.options.chunkSize - 1, y & Client.options.chunkSize - 1, Client.options.chunkSize);
		        return [chunk[i], chunk[i + 1], chunk[i + 2]];
		    };
		    protectChunk(x, y) {
		        if(typeof x !== "number" || typeof y !== "number") return error("ChunkSystem.protectChunk: failed to protect chunk (invalid coords).");
		        if(!this.chunkProtected[x]) this.chunkProtected[x] = [];
		        return this.chunkProtected[x][y] = true;
		    }
		    unProtectChunk(x, y) {
		        if(typeof x !== "number" || typeof y !== "number") return error("ChunkSystem.unprotectChunk: failed to unprotect chunk (invalid coords).");
		        if(!this.chunkProtected[x]) return false;
		        this.chunkProtected[x][y] = false;
		        return true;
		    }
		    isProtected(x, y) {
		        if(typeof x !== "number" || typeof y !== "number") return error("ChunkSystem.isProtected: failed to check (invalid coords).");
		        if(!this.chunkProtected[x]) return false;
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
		        if(!options.ws) options.ws = OWOP.options.serverAddress[0].url;
		        if(!options.world) options.world = "main";
		        if(!options.reconnectTime) options.reconnectTime = 2500;
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
		        if(window.document === undefined) {
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
		                if(typeof OJS.player.rank !== "number") return false;
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
		                if(OJS.net.ws.readyState !== 1 || !OJS.net.isWebsocketConnected) return false;
		                let ints = [];
		                world = world.toLowerCase();
		                for (let i = 0; i < world.length && i < 24; i++) {
		                    let charCode = world.charCodeAt(i);
		                    if((charCode < 123 && charCode > 96) || (charCode < 58 && charCode > 47) || charCode === 95 || charCode === 46)
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
		                if(OJS.net.ws.readyState !== 1 || !OJS.net.isWebsocketConnected) return false;
		                OJS.player.x = x;
		                OJS.player.y = y;
		                let x2 = x*16;
		                let y2 = y*16;
		                const dv = new DataView(new ArrayBuffer(12));
		                OJS.player.worldX = x2;
		                OJS.player.worldY = y2;
		                dv.setInt32(0, x2, true);
		                dv.setInt32(4, y2, true);
		                dv.setUint8(8, OWOP.player.selectedColor[0]);
		                dv.setUint8(9, OWOP.player.selectedColor[1]);
		                dv.setUint8(10, OWOP.player.selectedColor[2]);
		                dv.setUint8(11, OJS.player.tool);
		                OJS.net.ws.send(dv.buffer);
		                if(Master.PaintFollow) OJS.world.setPixel(x, y, OWOP.player.selectedColor);
		                if(document.getElementById(`master-bots-content-list-bot-${OJS.player.id}`) && document.getElementById(`master-bots-content-list-bot-${OJS.player.id}-x`) !== Math.round(OJS.player.x).toString() || document.getElementById(`master-bots-content-list-bot-${OJS.player.id}-y`) !== Math.round(OJS.player.y).toString() && OJS.net.ws.readyState === 1) {
                            setTimeout(() => {
                            	document.getElementById(`master-bots-content-list-bot-${OJS.player.id}-x`).innerText = Math.round(OJS.player.x).toString();
                            	document.getElementById(`master-bots-content-list-bot-${OJS.player.id}-y`).innerText = Math.round(OJS.player.y).toString();
                        	}, parseInt(Master.BotsUpdateRate));
                        };
		                return true;
		            },
		            setPixel(x = OJS.player.x, y = OJS.player.y, color = OJS.player.color, move = true) {
		                if(OJS.net.ws.readyState !== 1 || !OJS.net.isWebsocketConnected || OJS.player.rank === OJS.RANK.NONE) return false;
		                if(!OJS.net.bucket.canSpend(1)) return false;
		                const lX = OJS.player.x,
		                    lY = OJS.player.y;
		                if(move) OJS.world.move(x, y);
		                const dv = new DataView(new ArrayBuffer(11));
		                dv.setInt32(0, x, true);
		                dv.setInt32(4, y, true);
		                dv.setUint8(8, color[0]);
		                dv.setUint8(9, color[1]);
		                dv.setUint8(10, color[2]);
		                OJS.player.color = color;
		                OJS.net.ws.send(dv.buffer);
		                if(Master.WolfMove == true) OJS.world.move(lX, lY);
		                return true;
		            },
		            setTool(id = 0) {
		                if(OJS.net.ws.readyState !== 1 || !OJS.net.isWebsocketConnected) return false;
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
		                if(OJS.net.ws.readyState !== 1 || !OJS.net.isWebsocketConnected) return false;
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
		                if(OJS.net.ws.readyState !== 1 || !OJS.net.isWebsocketConnected) return false;
		                if(OJS.player.rank < OJS.RANK.ADMIN && !options.unsafe) return false;
		                const dv = new DataView(new ArrayBuffer(10));
		                dv.setInt32(0, x, true);
		                dv.setInt32(4, y, true);
		                dv.setUint8(8, newState);
		                OJS.net.ws.send(dv.buffer);
		                return true;
		            },
		            clearChunk(x = OJS.player.x, y = OJS.player.y, rgb = OJS.player.color) {
		                if(OJS.player.rank === OJS.RANK.ADMIN || options.unsafe) {
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
		                if(options.simpleChunks) return true;
		                if(OJS.net.ws.readyState !== 1 || !OJS.net.isWebsocketConnected) return false;
		                if(typeof x !== "number" && typeof y !== "number") {
		                    x = OJS.player.x;
		                    y = OJS.player.y;
		                    inaccurate = true;
		                };
		                if(inaccurate) {
		                    x = Math.floor(x / OJS.options.chunkSize);
		                    y = Math.floor(y / OJS.options.chunkSize);
		                };
		                let wb = OJS.options.worldBorder;
		                if(x > wb || y > wb || x < ~wb || y < ~wb) return;
		                let dv = new DataView(new ArrayBuffer(8));
		                dv.setInt32(0, x, true);
		                dv.setInt32(4, y, true);
		                OJS.net.ws.send(dv.buffer);
		                return true;
		            },
		            getPixel(x = OJS.player.x, y = OJS.player.y) {
		                if(options.simpleChunks) return OWOP.world.getPixel(x, y);
		                // It'll return undefined on unknown chunk but it'll request it, so you'll need to getPixel(x, y) again. I suggest you requesting chunks manually and getting them from ChunkSystem.
		                if(!Chunks.getChunk(x, y)) OJS.world.requestChunk(x, y, true);
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
		                if(typeof data !== "object") return error("Client.net.dataHandler: data is not object.");
		                const realData = data;
		                data = new DataView(data);
		                const opcode = data.getUint8(0);
		                switch (opcode) {
		                    case OJS.options.opcode.setId:
		                        {
		                            OJS.emit("id", data.getUint32(1, true));
		                            OJS.player.id = data.getUint32(1, true);
		                            OJS.net.isWorldConnected = true;
		                            if(typeof OJS.player.rank !== "number") OJS.player.rank = OJS.RANK.NONE;
		                            OJS.util.log(`Joined world '${OJS.world.name}' and got id '${data.getUint32(1, true)}'`, "color: #00ff00");
		                            if(options.adminlogin) OJS.chat.send("/adminlogin " + options.adminlogin);
		                            if(options.modlogin) OJS.chat.send("/modlogin " + options.modlogin); // Not working at the moment
		                            if(options.pass) OJS.chat.send("/pass " + options.pass);
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
		                                if(pid === OJS.player.id) continue;
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
		                            if(updated) {
		                                for (let i in updates) {
		                                    if(!OJS.players[i]) OJS.emit("connect", i);
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
		                                    x = data.getInt32(2 + off + j * 11),
		                                    y = data.getInt32(2 + off + j * 11 + 4);
		                                let r = data.getUint8(2 + off + j * 11 + 8),
		                                    g = data.getUint8(2 + off + j * 11 + 9),
		                                    b = data.getUint8(2 + off + j * 11 + 10);
		                                OJS.emit('pixel', x, y, [r, g, b]);
		                                Chunks.setPixel(x, y, [r, g, b]);
		                            }
		                            // Disconnects
		                            //off += data.getUint16(off, true) * 15 + 2;
		                            //for (let k = data.getUint8(off); k--;) {
		                            //    let dpid = data.getUint32(1 + off + k * 4, true);
		                            //    if(OJS.players[dpid]) {
		                            //        OJS.emit("disconnect", OJS.players[dpid]);
		                            //        delete OJS.players[dpid];
		                            //    }
		                            //}
		                            //break;
		                            // disconnects event no needed lol
		                        }
		                    case OJS.options.opcode.chunkLoad:
		                        {
		                            let chunkX = data.getInt32(1, true);
		                            let chunkY = data.getInt32(5, true);
		                            let locked = !!data.getUint8(9);
		                            let u8data = new Uint8Array(realData, 10, realData.byteLength - 10);
		                            let decompressed = OJS.util.decompress(u8data)
		                            Chunks.setChunk(chunkX, chunkY, decompressed);
		                            if(locked) Chunks.protectChunk(chunkX, chunkY);
		                            OJS.emit('chunk', chunkX, chunkY, decompressed, locked);
		                            break;
		                        }
		                    case OJS.options.opcode.teleport:
		                        {
		                            if(!options.teleport) break;
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
		                                    if(options.captchapass) {
		                                        OJS.net.ws.send(OJS.options.misc.tokenVerification + "LETMEINPLZ" + options.captchapass);
		                                        OJS.util.log("Used captchapass.", "color: #00ff00");
		                                    } else if(options.renderCaptcha) this.net.ws.send(OWOP.options.serverAddress[0].proto.misc.tokenVerification + (await renderCaptcha()));
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
		                            if(newState) Chunks.protectChunk(cx, cy);
		                            else Chunks.unProtectChunk(cx, cy);
		                            OJS.emit("chunkProtect", cx, cy, newState);
		                            break;
		                        }
		                }
		            },
		            messageHandler(data) {
		                if(typeof data !== "string") return error("Client.net.messageHandler: data is not string.");
		                if(data.startsWith("You are banned")) {
		                    OJS.util.log("Got ban message.", "color: #ff0000");
		                    OJS.emit("destroy");
		                    OJS.net.isWorldConnected = false;
		                    OJS.net.isWebsocketConnected = false;
		                    return OJS.net.destroyed = true;
		                };
		                if(data.startsWith("DEV")) OJS.util.log("[DEV] " + data.slice(3));
		                if(data.startsWith("<")) return;
		                data = OJS.chat.recvModifier(data);
		                const nick = data.split(":")[0];
		                OJS.emit("message", data);
		                OJS.chat.messages.push(data);
		                if(OJS.chat.messages.length > OJS.options.maxChatBuffer) OJS.chat.messages.shift();
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
		                if(typeof msg.data === "string") OJS.net.messageHandler(msg.data);
		                else if(typeof msg.data === "object") OJS.net.dataHandler(msg.data);
		            };
		            ws.onclose = () => {
		                OJS.emit("close");
		                OJS.util.log("WebSocket disconnected!", "color: #ff0000");
		                OJS.net.isWorldConnected = false;
		                OJS.net.isWebsocketConnected = false;
		                if(options.reconnect && !OJS.net.destroyed) setTimeout(makeSocket, options.reconnectTime);
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
		                if(options.noLog) return;
		                if(options.id) console.log(`[${options.id}] ${msg}`);
		                else if(OJS.player.id) console.log(`%c [${OJS.player.id}] ` + msg[0], msg[1]);
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
		        if(options.unsafe) OJS.util.log("Using 'unsafe' option.", "color: #ffff00");
		        this._events = {};
		    };
		    on(event, fn) {
		        if(!this._events[event]) this._events[event] = [];
		        this._events[event].push(fn);
		    };
		    once(event, fn) {
		        if(!this._events[event]) this._events[event] = [];
		        this._events[event].push([fn]);
		    };
		    emit(event, ...args) {
		        if(!this._events[event]) return;
		        for (let i in this._events[event])
		            if(typeof this._events[event][i] === "function") this._events[event][i](...args);
		            else {
		                this._events[event][i][0](...args);
		                this._events[event].splice(i, 1);
		            }
		    };
		    off(event, fn) {
		        if(!this._events[event]) return;
		        for (let i in this._events[event])
		            if(String(this._events[event][i]) === String(fn)) this._events[event].splice(i, 1);
		    }
		};
		Client.RANK = {
		    ADMIN: 3,
		    MODERATOR: 2,
		    USER: 1,
		    NONE: 0
		};
		Client.options = {
			proxy: null,
			index: null,
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
		if(window.document === undefined) {
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
		        if(this.allowance > this.rate) {
		            this.allowance = this.rate;
		        }
		    };
		    canSpend(count) {
		        if(this.infinite) {
		            return true;
		        }
		        this.update();
		        if(this.allowance < count) {
		            return false;
		        }
		        this.allowance -= count;
		        return true;
		    };
		};
		var OJS = {
		    Client: Client,
		    ChunkSystem: ChunkSystem,
		    Chunks: Chunks,
		    Bucket: Bucket
		};
		window.OJS = {
		    Client: Client,
		    ChunkSystem: ChunkSystem,
		    Chunks: Chunks,
		    Bucket: Bucket
		};
		
		OWOP.camera.teleport = function(x, y) {
		    OWOP.emit(6666695-6666666, x, y);
		};

		let ProxyPasswords = JSON.parse(localStorage.MasterClient).ProxyPasswords.toString().split(",") || [""];
        let allproxy = ProxyPasswords.length;
        let checkingproxy = allproxy;
        let offlineproxy = 0;
        let onlineproxy = 0;
        let bannedproxy = 0;
        let hoursexpproxy = 0;
        const renderCaptcha = () => new Promise(resolve => {
            if (Master.RenderCaptcha = true) {
                OWOP.windowSys.addWindow(new OWOP.windowSys.class.window(`Captcha`, {
                    closeable: true
                }, function(win) {
                    grecaptcha.render(win.addObj(OWOP.util.mkHTML("div", {})), {
                        theme: "dark",
                        sitekey: SITEKEY,
                        callback: function callback(token) {
                            win.close();
                            resolve(token);
                        }
                    });
                }));
            };
        });
		const updateServers = () => {
            const servers = document.getElementById("master-proxy-content-list");
            for (let i in ProxyPasswords) {
                const Proxy = ProxyPasswords[i];
                let proxytable = document.createElement("tr");
                proxytable.id = `master-proxy-${Proxy}`;
                let pbanbtn = `<button style="font-size: smaller;height: 27px;" id="master-proxy-proxyban-${Proxy}">🔨</button>`;
                if(location.host !== "ourworldofpixels.com") pbanbtn = "";
                proxytable.innerHTML = `<td id="master-proxy-${Proxy}"><a href="https://glitch.com/edit/#!/ws-proxy${Proxy}">${Proxy}</a></td><td id="master-proxy-proxystatus-${Proxy}">❓</td><td id="master-proxy-proxyconns-${Proxy}">❓</td><td id="master-proxy-actions-${Proxy}"><button style="font-size: smaller;height: 27px;" id="master-proxy-proxyjoin-${Proxy}">Con</button><button style="font-size: smaller;height: 27px;" id="master-proxy-proxydisconnect-${Proxy}">Disc</button>${pbanbtn}<button style="font-size: smaller;height: 27px;" id="master-proxy-proxydelete-${Proxy}">❌</button></td>`;
                servers.appendChild(proxytable);
                document.getElementById(`master-proxy-proxydelete-${Proxy}`).onclick = () => {
                    delete ProxyPasswords[Proxy];
                    ProxyPasswords = ProxyPasswords.forEach(e => e !== Proxy);
                    document.getElementById(`master-proxy-${Proxy}`).style.display = "none";
                };
                const WSCheck = new WebSocket(`wss://ws-proxy${Proxy}.glitch.me/?ws=WS-STATUS`);
                WSCheck.onopen = () => {
                    onlineproxy += 1;
                    if(checkingproxy !== 0) checkingproxy -= 1;
                    document.getElementById(`master-proxy-proxystatus-${Proxy}`).innerText = "✔️";
                    document.getElementById(`master-proxy-proxyjoin-${Proxy}`).onclick = () => {
                        proxyJoin(Proxy);
                    };
                    document.getElementById(`master-proxy-proxydisconnect-${Proxy}`).onclick = () => {
                        for(let i in BOTS){
                            if(BOTS[i].options.proxy == Proxy){
                                BOTS[i].ws.close();
                                BOTS[i].slice();
                            };
                        };
                    };
                    if(location.host == "ourworldofpixels.com") { // thx dimden xd
                    	document.getElementById(`master-proxy-proxyban-${Proxy}`).onclick = () => {
	                    	for(let i = 0; i < 7; i++) proxyJoin(Proxy);
	                    };
	            	};
                    WSCheck.send("WS-STATUS");
                };
                WSCheck.onmessage = msg => {
                    document.getElementById(`master-proxy-proxyconns-${Proxy}`).innerText = parseInt(msg.data.split(",")[1]) - 1;
                    WSCheck.close();
                };
                WSCheck.onerror = () => {
                    if(onlineproxy !== 0) onlineproxy -= 1;
                    checkingproxy -= 1;
                    offlineproxy += 1;
                    document.getElementById(`master-proxy-proxystatus-${Proxy}`).innerText = "❌";
                };
            };
        };
		if(location.host == "ourworldofpixels.com") {
			var api = {};
			api.update = function() {
			    return fetch('https://ourworldofpixels.com/api')
				.then(raw => {
				    return raw.json()
				})
				.then(json => {
				    api.banned = json.banned;
				    api.captchaEnabled = json.captchaEnabled;
				    api.maxConnectionsPerIp = json.maxConnectionsPerIp;
				    api.motd = json.motd;
				    api.numSelfBans = json.numSelfBans;
				    api.totalConnections = json.totalConnections;
				    api.uptime = json.uptime;
				    api.users = json.users;
				    api.yourConns = json.yourConns;
				    api.yourIp = json.yourIp;
				    return api.json = json;
				});
			};
			
			api.disconnect = function() {
			    return fetch('https://ourworldofpixels.com/api/disconnectme')
			        .then(raw => {
			            return raw.json()
			        })
			        .then(json => {
			            return api.hadEffect = json.hadEffect
			        });
			};
			api.update();
			setInterval(api.update, 1300);
		};

		var mbclient;

		OWOP.windowSys.addWindow(new OWOP.windowSys.class.window(" ", {
			closeable: false
		}, function(win) {
			let elem = document.createElement("div");

			setTimeout(() => {
				document.getElementById("toole-container").insertAdjacentHTML(`beforeend`, `<button id="master-uitoggle"><div>UI</div></button>`);
				document.getElementById("master-uitoggle").addEventListener("click", () => {
					let ui = [document.getElementById("tabbar"), document.getElementById("master-hr-tabbar"), document.getElementById("content"), mbclient];
					for(let i in ui) {
						ui[i].hidden = obool(ui[i].hidden);
					};
				});
			}, 650);
			elem.innerHTML = `
<div id="tabbar">
	<button style="background-color: #3b3b3b;" id="master-tabbar-main">Main</button>
	<button id="master-tabbar-bots">Bots</button>
	<button id="master-tabbar-proxy">Proxy</button>
	<button id="master-tabbar-settings">Settings</button>
</div>
<hr id="master-hr-tabbar">
<div id="content">
	<div id="master-main-content">
		<form id="master-main-content-section-connection">
			<fieldset>
				<legend class="master-text">Connection</legend>
				<input type="number" id="master-main-content-botcount" style="width: 140px; border: solid 1px;background-color: #343434; color: #919191; user-select: none;" placeholder="Count" value="" title="Number of bots to connect."></input>
				<button id="master-main-content-connect">Connect</button>
				<button id="master-main-content-disconnect">Disconnect</button>
				<br>
				<label id="master-main-content-info">0 bots, 0.000 chunks</label>
			</fieldset>
		</form>
		<form id="master-main-content-section-patterns">
            <fieldset>
                <legend class="master-text">Pattern Menu</legend>
                <div><label class="master-text">Asset Paster Pattern</label>
                    <select style="width: 100px; font-size: 13px; border: solid 1px; background-color: #343434; color: #919191;" id="master-main-content-assetpasterpattern">
                        <option>Default</option>
                        <option>Left - Up</option>
                        <option>Grid</option>
                        <option>Square</option>
                        <option>Random</option>
                        <option>Chunks</option>
                        <option>Text - Chunks</option>
                    </select>
                </div>
                <div><label class="master-text">Bot Area Pattern</label>
                    <select style="width: 100px; font-size: 13px; border: solid 1px; background-color: #343434; color: #919191;" id="master-main-content-areapattern">
                        <option>Default</option>
                        <option>Top - Bottom</option>
                        <option>Random</option>
                        <option>Chunks</option>
                    </select>
                </div>
                <div><label class="master-text">Chunker Pattern</label>
                    <select style="width: 100px; font-size: 13px; border: solid 1px; background-color: #343434; color: #919191;" id="master-main-content-eraserpattern">
                        <option>Default</option>
                        <option>Top - Bottom</option>
                        <option>Perfect</option>
                        <option>Circle</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
            	<legend class="master-text">Utils</legend>
            	<div><input id="master-main-content-message" style="width: 140px; border: solid 1px;background-color: #343434; color: #919191; user-select: none;" placeholder="Message"></input><button id="master-main-content-send">Send</button></div>
            	<div><input type="checkbox" id="master-main-content-oldpaste"></input><label class="master-text">Old MiniBot paste</label></div>
            	<div><input type="checkbox" id="master-main-content-wolfmove"></input><label class="master-text">Wolf move</label></div>
            	<div><input type="checkbox" id="master-main-content-useplayer"></input><label class="master-text">Use player</label></div>
            	<div><input type="checkbox" id="master-main-content-autoreconnect"></input><label class="master-text">AutoReconnect</label></div>
            	<div><input type="checkbox" id="master-main-content-smartautoreconnect"></input><label class="master-text">Smart AutoReconnect</label></div>
            	<div><input type="checkbox" id="master-main-content-autologin"></input><label class="master-text">AutoLogin</label></div>
            	<div><input type="checkbox" id="master-main-content-autonickname"></input><label class="master-text">AutoNickname</label></div>
            	<div><input type="checkbox" id="master-main-content-autopassword"></input><label class="master-text">AutoPassword</label></div>
        	</fieldset>
        </form>
        <form id="master-main-content-section-movement">
        	<fieldset>
        		<legend class="master-text">Bot movement</legend>
        		<select style="width: 100px; font-size: 13px; border: solid 1px; background-color: #343434; color: #919191;" id="master-main-content-followlist">
                    <option>Circle</option>
                    <option>Disk</option>
                    <option>Atom</option>
                    <option>Random</option>
                    <option>Wave</option>
                    <option>Right-Left</option>
                    <option>Hyperbola</option>
                    <option>BotLine</option>
                    <option>X</option>
                    <option>Spiral</option>
                    <option>Cool</option>
                    <option>Disk 2</option>
                    <option>Top-Bottom</option>
                    <option>Laggy</option>
                    <option>Small Circle</option>
                    <option>8</option>
                    <option>Cool 2</option>
                    <option>3D</option>
                    <option>Flower</option>
                    <option>Infinity</option>
                    <option>Infinity 2</option>
                    <option>Square</option>
                    <option>Default 2</option>
                    <option>Disk 3</option>
                    <option>Saturn</option>
                    <option>Triagle</option>
                    <option>Storm</option>
                    <option>Disk 4</option>
                    <option>Nazi</option>
                </select>
                <div><input type="checkbox" id="master-main-content-followenabler" name="followenabler"></input><label id="master-main-content-followlabel">Follow</label></div>
                <div><input type="checkbox" id="master-main-content-paintfollowenabler" name="paintfollowenabler"></input><label id="master-main-content-paintfollowlabel">Paint Follow</label></div>
        	</fieldset>
        </form>
	</div>
	<div id="master-bots-content" hidden>
		<table id="master-bots-content-list">
            <tr id="master-bots-content-tr">
                <th id="master-bots-content-index">Index</th>
                <th id="master-bots-content-id">ID</th>
                <th id="master-bots-content-x">X</th>
                <th id="master-bots-content-y">Y</th>
                <th id="master-bots-content-pq">PQuota</th>
                <th id="master-bots-content-color">Color</th>
                <th id="master-bots-content-ws">WS</th>
            </tr>
        </table>
	</div>
	<div id="master-proxy-content" hidden>
		<form>
	        <fieldset>
	            <div>
	            	<input id="master-proxy-content-addproxy" placeholder="xxxx-yyyy" title="Enter your proxy here." style="width: 60px; height: 14px; border: solid 1px;background-color: #292929; color: #919191; user-select: none;"></input>
	            	<button id="master-proxy-content-add">➕</button>
	            	<button id="master-proxy-content-refresh">🔄</button>
	            	<button id="master-proxy-content-delall">Delall</button>
	            	<button id="master-proxy-content-conall">Conall</button>
	        		<br>
	            	<label id="master-proxy-content-allproxy">📡: ${allproxy}</label>
	            	<label style="color: lightgreen;">✔️</label><label class="master-text" id="master-proxy-content-onlineproxy">:${onlineproxy}</label>
	            	<label id="master-proxy-content-offlineproxy">❌: ${offlineproxy}</label>
	            	<br>
	            	<label id="master-proxy-content-checkingproxy">❓: ${checkingproxy}</label>
	            	<label id="master-proxy-content-bannedproxy">🔨: ${bannedproxy}</label>
	            	<label id="master-proxy-content-expiredproxy">⌚: ${hoursexpproxy}</label>
	            </div>
	        </fieldset>
	    </form>
		<table id="master-proxy-content-list">
            <tr id="master-proxy-content-tr">
                <th id="master-proxy-content-proxy">Proxy</th>
                <th id="master-proxy-content-status">Status</th>
                <th id="master-proxy-content-connections">Cons</th>
                <th id="master-proxy-content-connections">Actions</th>
            </tr>
        </table>
	</div>
	<div id="master-settings-content" hidden>
		<form>
			<fieldset>
				<legend class="master-text">Bots</legend>
				<input id="master-settings-content-proxies" style="width: 140px; border: solid 1px;background-color: #343434; color: #919191; user-select: none;" placeholder="ProxyPasswords" title="ProxyPasswords"></input>
				<input id="master-settings-content-reconnecttime" style="margin-left: 30px;width: 140px; border: solid 1px;background-color: #343434; color: #919191; user-select: none;" placeholder="ReconnectTime" title="ReconnectTime"></input>
				<input id="master-settings-content-botnickname" style="margin-top: 5px;width: 140px; border: solid 1px;background-color: #343434; color: #919191; user-select: none;" placeholder="Bot Nickname" title="Used in AutoNickname."></input>
				<input id="master-settings-content-configrupdrate" style="margin-left: 30px;margin-top: 5px;width: 140px; border: solid 1px;background-color: #343434; color: #919191; user-select: none;" placeholder="Config UpdateRate" title="Config UpdateRate"></input>
				<input id="master-settings-content-botsupdrate" style="margin-top: 5px;width: 140px; border: solid 1px;background-color: #343434; color: #919191; user-select: none;" placeholder="Bots UpdateRate" title="Bots UpdateRate"></input>
			</fieldset>
			<fieldset>
				<legend class="master-text">UI</legend>
				<div><input type="checkbox" id="master-settings-content-nohelpbtn"></input><label class="master-text">No help button</label></div>
				<div><input type="checkbox" id="master-settings-content-noarcbtn"></input><label id="noarc" class="master-text">No arc launcher</label></div>
				<div><input type="checkbox" id="master-settings-content-novignette"></input><label class="master-text">No vignette</label></div>
				<div>
					<label class="master-text">Toolset: </label>
					<select style="width: 100px; font-size: 13px; border: solid 1px; background-color: #343434; color: #919191;" id="master-settings-content-toolset">
	                    <option>Default</option>
	                    <option>ScaledBot</option>
	                    <option>Modded Minibot</option>
	                    <option>Polybius</option>
	                    <option>Modern</option>
	                    <option>Christmas</option>
	                    <option>Helloween</option>
	                    <option>Bop It</option>
	                    <option>Red</option>
	                </select>
				</div>
			</fieldset>
			<fieldset>
				<legend class="master-text">Addons</legend>
				<select style="width: 268px; font-size: 13px; border: solid 1px; background-color: #343434; color: #919191;" id="master-settings-content-addonlist">
	                <option>Player List</option>
	            </select>
	            <button id="master-settings-content-loadaddon">Load</button>
			</fieldset>
		</form>
	</div>
</div>
<style>
	a:-webkit-any-link {
	    color: #878787;
	    cursor: pointer;
	}
	th[id^="master-proxy"], td[id^="master-proxy"] {
	    font-family: Verdana,sans-serif;
	    font-size: 12px;
	    padding: 2px;
	    text-align: center;
	    border-color: #323232;
	    border-width: 2px;
	    border-style: double;
	    width: 110px;
	    border-right-style: none;
	    inline-size: auto;
	}
	th[id^="master-bots-content"], td[id^="master-bots-content"] {
	    font-family: Verdana,sans-serif;
	    font-size: 12px;
	    padding: 2px;
	    text-align: center;
	    border-color: #323232;
	    border-width: 2px;
	    border-style: double;
	    width: 110px;
	    border-right-style: none;
	}
	tr[id^="master-"]:first-child {
	    font-family: Verdana,sans-serif;
	    font-size: 12px;
	    text-align: center;
	    background-color: rgba(0, 0, 0, 0.5);
	}
	tr[id^="master-"]:nth-child(odd) {
	    font-family: Verdana,sans-serif;
	    font-size: 12px;
	    background-color: rgba(0, 0, 0, 0.1);
	}
	table[id^="master-"] {
	    border-collapse: collapse;
	    border: 0px solid #000;
	    color: #969696;
	    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
	    padding: 2px;
	}
	fieldset {
	    display: block;
	    margin-inline-start: 2px;
	    margin-inline-end: 2px;
	    padding-block-start: 0.35em;
	    padding-inline-start: 0.75em;
	    padding-inline-end: 0.75em;
	    padding-block-end: 0.625em;
	    min-inline-size: min-content;
	    border-width: 1px;
	    border-style: groove;
	    border-image: initial;
	    border-color: rgba(115, 115, 115, 1);
	}
	.master-text {
		color: #969696;
		cursor: default;
	}
	.section {
	    width: 160px;
	    background-color: #2f2f2f;
	    padding: 5px;
	}
	.wincontainer {
	    overflow: auto;
	    min-width: 100%;
	    height: 100%;
	    margin: 0 -5px -5px -5px;
	    background-color: #292929;
	    border: 5px #00000000 solid;
	    border-width: 5px;
	    -o-border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 11 repeat;
	    border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 11 repeat;
	}
	#windows > div, .winframe {
	    position: absolute;
	    pointer-events: initial;
	    background-color: #121212;
	    border: 11px #2d2d2d solid;
	    border-width: 11px;
	    -o-border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 11 repeat;
	    border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 11 repeat;
	    border-image-outset: 1px;
	}
	button[id^="master-"] {
	    border: 6px #444444 outset;
	    -o-border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 11 repeat;
	    border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 11 repeat;
	    background-color: #535353;
	    transition: -webkit-filter 0.125s;
	    transition: filter 0.125s;
	    transition: filter 0.125s, -webkit-filter 0.125s;
	    color: #969696;
	}
	button[id^="master-tabbar-"] {
	    border: 6px #444444 outset;
	    -o-border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 11 repeat;
	    border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 11 repeat;
	    background-color: #535353;
	    transition: -webkit-filter 0.125s;
	    transition: filter 0.125s;
	    transition: filter 0.125s, -webkit-filter 0.125s;
	    color: #969696;
	    padding: initial;
	    vertical-align: super;
	    border-bottom-width: thin;
	}
	#master-hr-tabbar {
		margin-top: auto;
		border-color: rgb(21, 21, 21);
	}
	#master-hr {
		border-color: rgb(80, 0, 146);
	}
	button[id^="tool-"] {
	    border: 6px #444444 outset;
	    -o-border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 11 repeat;
	    border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 11 repeat;
	    background-color: #535353;
	    transition: -webkit-filter 0.125s;
	    transition: filter 0.125s;
	    transition: filter 0.125s, -webkit-filter 0.125s;
	}
	span[id^="master-"], label[id^="master-"] {
		color: #969696;
	}
	span {
	  	color: #969696;
	}
	#help {
	  	text-align: center;
	  	background-color: #9e9e9e;
	}
	input[type="range"] {
	  	font-weight: 100;
	  	font-style: normal;
	  	background-color: #616161;
	}
	button[id^="tool-"]:not(.selected) > div {
	    background-image: url("https://github.com/scar17off/OCM/blob/main/packages/masterbot/toolsets/default.png?raw=true") !important;
	    background-color: rgba(69, 69, 69, 1);
	}
</style>
`;

			win.addObj(elem);

			setTimeout(() => {
				document.getElementById("master-main-content-botcount").value = Master.BotCount;
				document.getElementById("master-settings-content-proxies").value = ProxyPasswords;
				document.getElementById("master-settings-content-reconnecttime").value = Master.ReconnectTime.toString();
				document.getElementById("master-settings-content-configrupdrate").value = Master.ConfigUpdateRate.toString();
				document.getElementById("master-settings-content-botsupdrate").value = Master.BotsUpdateRate.toString();
				document.getElementById("master-settings-content-botnickname").value = Master.BotNickname;
				// Load config.
				function press(a){
					document.getElementById(a).click();
				};
				function select(a, b){
					document.getElementById(a).value = b;
				};
				if(Master.OldMBPaste) press("master-main-content-oldpaste");
				if(Master.WolfMove) press("master-main-content-wolfmove");
				if(Master.UsePlayer) press("master-main-content-useplayer");
				if(Master.AutoReconnect) press("master-main-content-autoreconnect");
				if(Master.SmartAutoReconnect) press("master-main-content-smartautoreconnect");
				if(Master.AutoLogin) press("master-main-content-autologin");
				if(Master.AutoNickname) press("master-main-content-autonickname");
				if(Master.AutoPassword) press("master-main-content-autopassword");
				if(Master.PaintFollow) press("master-main-content-paintfollowenabler");
				if(Master.NoHelp) press("master-settings-content-nohelpbtn");
				if(Master.NoArc) press("master-settings-content-noarcbtn");
				if(Master.NoVignette) press("master-settings-content-novignette");
			}, 850)

			setInterval(() => {
				let info = document.getElementById("master-main-content-info");
				let o = 0;
                for (let i in BOTS) {
                    o += BOTS[i].net.bucket.allowance;
                };
                let botcount = BOTS.filter(BOT => BOT.net.ws.readyState === 1).length;
                let botchunks = (o / 256).toFixed(3);

				info.innerText = botcount+" bots, "+botchunks+" chunks.";
			}, 250);

			setInterval(() => {
                document.getElementById("master-proxy-content-onlineproxy").innerText = `: ${onlineproxy}`;
                document.getElementById("master-proxy-content-offlineproxy").innerText = `❌: ${offlineproxy}`;
                document.getElementById("master-proxy-content-checkingproxy").innerText = `❓: ${checkingproxy}`;
                document.getElementById("master-proxy-content-bannedproxy").innerText = `🔨: ${bannedproxy}`;
                document.getElementById("master-proxy-content-expiredproxy").innerText = `⌚: ${hoursexpproxy}`;
            }, 1350);

            setInterval(() => {
            	for(let i in ProxyPasswords) {
					let Proxy = ProxyPasswords[i];

					if(document.getElementById(`master-proxy-proxyconns-${Proxy}`).innerText == "NaN") {
						document.getElementById(`master-proxy-proxystatus-${Proxy}`).innerText = "⌚";
						document.getElementById(`master-proxy-proxyconns-${Proxy}`).innerText = "❌";
						hoursexpproxy += 1;
						if(onlineproxy !== 0) onlineproxy -= 1;
					};
				};
            }, 5000);
			let currentWindow = win.container;
			currentWindow.style.height = "570px";
			currentWindow.style.width = "360px";
			mbclient = currentWindow;
		}).move(68, 32));
		// Scripts
		function obool(arg1) {
			let toret;
		    if(arg1 == true) toret = false;
		    if(arg1 == false) toret = true;
		    if(arg1 == "on") toret = "off";
		    if(arg1 == "off") toret = "on";
		    return toret;
		};
		function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        };
		function rgbtohex(r, g, b) {
            return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        };
        if(ProxyPasswords !== "" || Master.ProxyPasswords !== "") updateServers();
        let pixel, over = 0, newX = 0, newY = 0;
        function drawRectbrush(x, y, w, h, color) {
            if(isNaN(x) || isNaN(y) || isNaN(w) || isNaN(h)) {
                return;
            }
            color = color || OWOP.player.selectedColor;
            let Y, X, i;
            for (Y = 0; Y < h; Y++) {
                for (X = 0; X < w; X += BOTS.length) {
                    for (i = 0; i < BOTS.length; i++) {
                        if(X + i < w) {
                            over = 0;
                            newX = X + i;
                            newY = Y;
                            pixel = OWOP.world.getPixel(x + newX, y + newY);
                            if(pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2]) {
                                let abc = getFree();
                                BOTS[abc].world.setPixel(x + newX, y + newY, color);
                            } else continue;
                        };
                    };
                };
            };
        };
        let folint;
		let PI2 = 3 * Math.PI,
		    FOLLOWADD = PI2 / 45,
		    f = 0,
		    x, y,
		    offset = 0,
		    state = 1, a = 0
		let spiral = {
		    step: 0,
		    PI2: 2 * Math.PI,
		    speed: ()=>((2 * Math.PI) / 30 / BOTS.length),
		    radius: (i) => i * 3
		}, angle, radius121 = 0;
        document.getElementById("master-main-content-followenabler").onchange = () => {
        	let follow = document.getElementById("master-main-content-followenabler").checked;
        	Master.Follow = follow;
			localStorage.MasterClient = JSON.stringify(Master);
			if(follow == true){
				folint = setInterval(() => {
                        let pos = {
                            x: OWOP.mouse.tileX,
                            y: OWOP.mouse.tileY
                        }, i = BOTS/*.filter(b => b.net.ws.readyState === 1)*/.length;
                        while(i--) {
                        	if (!BOTS[i]) return;
                        	if (BOTS[i].net.ws.readyState !== 1) return;
                            if (Master.Animation == "hyperbola") {
                                x = pos.x + Math.tan(2 * Math.PI * 2 / BOTS.length * i + f * BOTS.length);
                                y = pos.y + 1 / Math.tan(2 * Math.PI * 2 / BOTS.length * i + f * BOTS.length);
                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "line") {
                                x = pos.x + (Math.cos(2 * Math.PI * 2 ** BOTS.length * i + f) * BOTS.length);
                                y = pos.y + (Math.sin(2 * Math.PI * 2 / BOTS.length * i + f) * BOTS.length);
                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "wave") {
                                x = pos.x + (Math.cos(2 * Math.PI / BOTS.length * i + f) * BOTS.length);
                                y = pos.y + (Math.sin(2 * Math.PI * 2 / BOTS.length * i + f) * BOTS.length);
                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "random") {
                                x = pos.x + (Math.cos(2 * Math.PI * 2 / BOTS.length - i + f) * BOTS.length);
                                y = pos.y + (Math.sin(2 * Math.PI * 2 / BOTS.length * i + f) * BOTS.length);
                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "atom") {
                                if (i >= BOTS.length / 2) {
                                    x = pos.x + (Math.cos(2 * Math.PI * 2 / BOTS.length * i + f) * BOTS.length / 2),
                                        y = pos.y + (Math.sin(2 * Math.PI * 2 / BOTS.length * i + f + 2) * BOTS.length / 2);
                                    BOTS[i].world.move(x, y);
                                } else {
                                    x = pos.x + (Math.cos(2 * Math.PI * 2 / BOTS.length * i + f + 2) * BOTS.length / 2);
                                    y = pos.y + (Math.sin(2 * Math.PI * 2 / BOTS.length * i + f) * BOTS.length / 2);
                                    BOTS[i].world.move(x, y);
                                }
                            } else if (Master.Animation == "circle") {
                                x = pos.x + (Math.cos(2 * Math.PI * 2 / BOTS.length * i + f) * BOTS.length);
                                y = pos.y + (Math.sin(2 * Math.PI * 2 / BOTS.length * i + f) * BOTS.length);
                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "disk") {
                                x = pos.x + (Math.cos(2 * Math.PI * 2 / BOTS.length * i + f * 2) * BOTS.length);
                                y = pos.y + (Math.sin(2 * Math.PI * 2 / BOTS.length * i + f) * BOTS.length);
                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "botline") {
                                x = pos.x + i * 2;
                                y = pos.y;
                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "x") {
                                let r = 2 * Math.PI * 2 / BOTS.length * i + f;
                                if (i % 2 == 0) {
                                    let s = Math.sin(r);
                                    y = pos.y + (Math.cos(r) * 3 + 15 * s);
                                    x = pos.x + (s * 15 + 3 * s);
                                } else {
                                    let c = Math.cos(r)
                                    x = pos.x + (c * 8 + 9 * c);
                                    y = pos.y + (Math.sin(r) * 3 + -15 * c);
                                }
                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "spiral") {
                                let speed = spiral.speed();
                                let radius = spiral.radius(i);

                                x = Math.cos(Math.PI / BOTS.length * i + spiral.step) * radius;
                                y = Math.sin(Math.PI / BOTS.length * i + spiral.step) * radius;
                                x += pos.x
                                y += pos.y

                                BOTS[i].world.move(x, y);

                                spiral.step += speed;
                                spiral.step %= spiral.PI2;
                            } else if (Master.Animation == "cool") {
                                x = pos.x + Math.cos(((Math.PI * 2 / BOTS.length) * i) + offset) * (radius * 16);
                                y = pos.y + Math.sin(((Math.PI * 2 / BOTS.length) * i) + offset) * (radius * 16);

                                offset += ((Math.PI * 2) / 100) / BOTS.length;

                                if (state === 1) {
                                    radius -= 0.01;
                                    if (radius <= 0.1) state = 2;
                                } else {
                                    radius += 0.01;
                                    if (radius >= BOTS.length * 0.1) state = 1
                                }
                                if (offset > Math.PI * 2) offset = 0;

                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "disktwo") {
                                x = pos.x + (Math.cos(2 * Math.PI * 2 / 4.09 * i + f * 2) * 4.09);
                                y = pos.y + (Math.sin(2 * Math.PI * 2 / 4.09 * i + f) * 4.09);
                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "topbottom") {
                                x = pos.x + (Math.sin(2 * Math.PI * 2 / BOTS.length * i + f) * BOTS.length);
                                y = pos.y + (Math.cos(2 * Math.PI * 2 ** BOTS.length * i + f) * BOTS.length);
                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "laggy") {
                                if (i >= BOTS.length / 2) {
                                    x = pos.x + (Math.cos(2 * Math.PI * 2 / 3.5 * i + f) * 3.5 / 2),
                                        y = pos.y + (Math.sin(2 * Math.PI * 2 / 3.5 * i + f + 2) * 3.5 / 2);
                                    BOTS[i].world.move(x, y);
                                } else {
                                    x = pos.x + (Math.cos(2 * Math.PI * 2 / 4.05 * i + f + 2) * 4.0909 / 2);
                                    y = pos.y + (Math.sin(2 * Math.PI * 2 / 4.05 * i + f) * 4.09 / 2);
                                    BOTS[i].world.move(x, y);
                                }
                            } else if (Master.Animation == "smallcircle") {
                                x = pos.x + (Math.cos(2 * Math.PI * 2 / 4.35 * i + f) * 4.35);
                                y = pos.y + (Math.sin(2 * Math.PI * 2 / 4.35 * i + f) * 4.35);
                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "eight") {
                                x = pos.x + (Math.sin(10 * Math.PI / BOTS.length * i * f) * BOTS.length / 1.768);
                                y = pos.y + (Math.cos(5 * Math.PI / BOTS.length * i * f) * BOTS.length / 1.768);
                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "cool2") {
                                if (i >= BOTS.length / 2) {
                                    x = pos.x + (Math.cos(8 * Math.PI * 2 / BOTS.length + 5 * i + f) * BOTS.length / 4),
                                        y = pos.y + (Math.sin(8 * Math.PI * 2 / BOTS.length + 5 * i + f + 10) * BOTS.length / 4);
                                    BOTS[i].world.move(x, y);
                                } else {
                                    x = pos.x + (Math.cos(1.1 * Math.PI * 2 / BOTS.length + 5 * i + f + 10) * BOTS.length / 4);
                                    y = pos.y + (Math.sin(1.1 * Math.PI * 2 / BOTS.length + 5 * i + f) * BOTS.length / 4);
                                    BOTS[i].world.move(x, y);
                                }
                            } else if (Master.Animation == "threed") {
                                if (i >= BOTS.length / 2) {
                                    y = pos.y + Math.cos(2 * Math.PI / BOTS * i + f) * 40;
                                    x = pos.x + Math.sin(2 * Math.PI * 2 / BOTS * i + f) * 40;
                                    BOTS[i].world.move(x, y);
                                } else {
                                    x = pos.x + (Math.cos(2 * Math.PI * 4 / 4.09 * i + f * 2.5) * 9); // 4.09, 4.09
                                    y = pos.y + (Math.sin(2 * Math.PI * 2 / 4.09 * i + f) * 9); // 4.09, 4.09
                                    BOTS[i].world.move(x, y);
                                }
                            } else if (Master.Animation == "flower") {
                                if (state === 1) {
                                    radius121 -= 0.1;
                                    localStorage.buxxed_followint - 1;
                                    if (radius121 <= 1) {
                                        state = 2
                                    }
                                } else {
                                    radius121 += 0.2;
                                    localStorage.buxxed_followint + 2;
                                    if (radius121 >= 10) {
                                        state = 1
                                    }
                                }
                                if (state == 2) {
                                    x = pos.x + (Math.cos(2 * Math.PI * 2 / BOTS.length * i + f) * radius121);
                                    y = pos.y + (Math.sin(2 * Math.PI * 2 / BOTS.length * i + f) * radius121);
                                } else {
                                    x = pos.x + (Math.cos(2 * Math.PI * 2 / BOTS.length * i - f) * radius121);
                                    y = pos.y + (Math.sin(2 * Math.PI * 2 / BOTS.length * i - f) * radius121);
                                }
                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "square") {
                                a = spiral.PI2 / BOTS[i].length * i + f;
                                x = pos.x + squareX(f / 40 * i + f) * BOTS.length / 1.285;
                                y = pos.y + squareY(f / 40 * i + f) * BOTS.length / 1.285;

                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "infinity") {
                                a = spiral.PI2 / BOTS[i].length * i + f;
                                x = pos.x + infinityX(f / 20 * i + f) * 40;
                                y = pos.y + infinityY(f / 20 * i + f) * 40;

                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "infinity2") {
                                a = spiral.PI2 / BOTS[i].length * i + f;
                                x = pos.x + infinityX(f / 20 * i + f) * 40;
                                y = pos.y + infinityY(f / 20 * i + f) * 40;
                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "default2") {
                                let x1;
                                let y1;
                                let x;
                                let y;
                                if (i >= BOTS.length / 2) {
                                    x1 = pos.x + (Math.cos(2 * Math.PI * 2 / (BOTS.length / 2) * i) * (BOTS.length / 2));
                                    y1 = pos.y + (Math.sin(2 * Math.PI * 2 / (BOTS.length / 2) * i) * (BOTS.length / 2));
                                    x = x1 + (Math.cos(2 * Math.PI * 2 / 4 * i + f) * 4);
                                    y = y1 + (Math.sin(2 * Math.PI * 2 / 4 * i + f) * 4);
                                    BOTS[i].world.move(x, y);
                                } else {
                                    x = pos.x + (Math.cos(2 * Math.PI * 2 / (BOTS.length / 2) * i) * (BOTS.length / 2));
                                    y = pos.y + (Math.sin(2 * Math.PI * 2 / (BOTS.length / 2) * i) * (BOTS.length / 2));
                                    BOTS[i].world.move(x, y);
                                }
                            } else if (Master.Animation == "saturn") {
                                let t = 2 * Math.PI * 2 / BOTS.length * i + f1;
                                if (i <= BOTS.length / 2) {
                                    let x = pos.x + (Math.cos(t + 2) * BOTS.length / (BOTS.length / 10))
                                    let y = pos.y + (Math.sin(t) * BOTS.length / (BOTS.length / 10));
                                    BOTS[i].world.move(x, y);
                                } else {
                                    let x = pos.x + (Math.cos(t) * BOTS.length / (BOTS.length / 10))
                                    let y = pos.y + (Math.sin(t) * BOTS.length / (BOTS.length / 10));
                                    BOTS[i].world.move(x, y);
                                }
                            } else if (Master.Animation == "disk3") {
                                let t = Math.PI * 2 / BOTS.length * i + f;
                                let t1 = Math.PI / BOTS.length * i + f;
                                x = pos.x + (2 * Math.sin(t) + Math.sin(2 * t1)) * BOTS.length / 2;
                                y = pos.y + (2 * Math.cos(t) - Math.cos(2 * t1)) * BOTS.length / 2;
                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "triagle") {
                                let t = Math.PI * 2 / BOTS.length * i + f;
                                x = pos.x + (2 * Math.sin(t) + Math.sin(2 * (t))) * BOTS.length / 2;
                                y = pos.y + (2 * Math.cos(t) - Math.cos(2 * (t))) * BOTS.length / 2;
                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "storm") {
                                let t = Math.PI * 2 / BOTS.length * i - f;
                                let t1 = Math.PI * 3 / BOTS.length * i + f;
                                x1 = pos.x + (Math.cos(2 * t) * BOTS.length);
                                y1 = pos.y + (Math.sin(2 * t) * BOTS.length);
                                x = x1 + (Math.cos(3 * t) * BOTS.length);
                                y = y1 + (Math.sin(3 * t) * BOTS.length);
                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "disk4") {
                                y = pos.y + 40 * Math.cos(angle + f);
                                x = pos.x + 40 * Math.sin(angle);
                                BOTS[i].world.move(x, y);
                            } else if (Master.Animation == "nazi") {
                                let t = Math.PI * 2 / BOTS.length * i + f;
							    if(i == 1){
							      	x = pos.x + 5;
							      	y = pos.y + 1;
							    }else if(i == 2) {
							      	x = pos.x + 4;
							      	y = pos.y + 1;
							    }else if(i == 3) {
							      	x = pos.x + 3;
							      	y = pos.y + 1;
							    }else if(i == 4) {
							      	x = pos.x + 3;
							      	y = pos.y + 2;
							    }else if(i == 5) {
							        x = pos.x + 3;
							        y = pos.y + 3;
							    }else if(i == 6) {
							        x = pos.x + 3;
							        y = pos.y + 4;
							    }else if(i == 7) {
							        x = pos.x + 3;
							        y = pos.y + 5;
							    }else if(i == 8) {
							        x = pos.x + 1;
							        y = pos.y + 1;
							    }else if(i == 9) {
							        x = pos.x + 1;
							        y = pos.y + 2;
							    }else if(i == 10) {
							        x = pos.x + 1;
							        y = pos.y + 3;
							    }else if(i == 11) {
							        x = pos.x + 2;
							        y = pos.y + 3;
							    }else if(i == 12) {
							        x = pos.x + 4;
							        y = pos.y + 3;
							    }else if(i == 13) {
							        x = pos.x + 5;
							        y = pos.y + 3;
							    }else if(i == 14) {
							        x = pos.x + 5;
							        y = pos.y + 4;
							    }else if(i == 15) {
							        x = pos.x + 5;
							        y = pos.y + 5;
							    }else if(i == 16) {
							        x = pos.x + 1;
							        y = pos.y + 5;
							    }else if(i == 17) {
							        x = pos.x + 2;
							        y = pos.y + 5;
							    }else if(i == 18) {
							        x = pos.x + 3;
							        y = pos.y + 5;
							    }else{
							    	let t = Math.PI * 2 / (BOTS.length - 18) * (i-18) + f;
							    	x = pos.x + 3 + (Math.cos(t) * ((BOTS.length - 18) * 1));
							    	y = pos.y + 3 + (Math.sin(t) * ((BOTS.length - 18) * 1));
							    	BOTS[i].world.move(x, y);
							    }
                            }
                        };
                        if(Master.Animation == "infinity") {
                            FOLLOWADD = PI2 / 100;
                            f = (f + FOLLOWADD);
                        } else if(Master.Animation == "infinity2") {
                            FOLLOWADD = PI2 / 95;
                            f = (f + FOLLOWADD);
                        } else if(Master.Animation == "eight") {
                            FOLLOWADD = PI2 / 500;
                            f = (f + FOLLOWADD) % PI2;
                        } else {
                            FOLLOWADD = PI2 / 45;
                            f = (f + FOLLOWADD) % PI2;
                        }
                    }, 79);
                } else {
                    clearInterval(folint);
                };
        };
        document.getElementById("master-main-content-paintfollowenabler").onchange = () => {
        	Master.PaintFollow = document.getElementById("master-main-content-paintfollowenabler").checked;
			localStorage.MasterClient = JSON.stringify(Master);
        };
        document.getElementById("master-proxy-content-refresh").addEventListener("click", () => {
        	for(let i in Master.ProxyPasswords.split(",")) {
        		document.getElementById("master-proxy-"+Master.ProxyPasswords[i]).style.display = "none";
        	};
        	updateServers();
        });
        document.getElementById("master-proxy-content-add").addEventListener("click", () => {
        	let pr = document.getElementById("master-proxy-content-addproxy").value;
        	Master.ProxyPasswords += ","+pr;
        	localStorage.MasterClient = JSON.stringify(Master);
        });
        document.getElementById("master-proxy-content-delall").addEventListener("click", () => {
        	Master.ProxyPasswords = [];
        	localStorage.MasterClient = JSON.stringify(Master);
        	updateServers();
        });
		document.getElementById("master-main-content-botcount").onchange = () => {
			Master.BotCount = parseInt(document.getElementById("master-main-content-botcount").value);
			localStorage.MasterClient = JSON.stringify(Master);
		};
		document.getElementById("master-settings-content-loadaddon").addEventListener("click", () => {
			let xhttpt = new XMLHttpRequest();
			xhttpt.open("GET", `https://raw.githubusercontent.com/scar17off/OCM/main/packages/masterbot/addons/${document.getElementById("master-settings-content-addonlist").innerText.toString().replace(" ", "-").toLowerCase()}.js`);
			xhttpt.responseType = "text";
			xhttpt.addEventListener("load", function() {
				eval(xhttpt.response);
			});
			xhttpt.send();
		});
		document.getElementById("master-main-content-connect").addEventListener("click", () => {
			for(let connected = 0; connected < Master.BotCount; connected++){
				let bot = new OJS.Client({
					origin: location.href.split("?#")[0],
					ws: OWOP.options.serverAddress[0].url,
					reconnect: Master.AutoReconnect || false,
					world: location.href.split("#")[1],
					reconnectTime: Master.ReconnectTime || 250,
					index: botlist.length + 1
				});

				botlist.push(bot);

				bot.on("join", () => {
					BOTS.push(bot);
					let device;
                    if(bot.clientOptions.proxy) {device = "📡";} else {device = '🖥️';};
					let color = rgbtohex(bot.player.color[0], bot.player.color[1], bot.player.color[2]);
                    let bottable = document.createElement("tr");
                    bottable.innerHTML = `<td id="master-bots-content-list-bot-${bot.player.id}-index">${bot.clientOptions.index}</td><td id="master-bots-content-list-bot-${bot.player.id}-id">`+bot.player.id+`</td><td id="master-bots-content-list-bot-${bot.player.id}-x">`+bot.player.x+`</td><td id="master-bots-content-list-bot-${bot.player.id}-y">`+bot.player.y+`</td><td id="master-bots-content-list-bot-${bot.player.id}-pq">`+bot.net.bucket.allowance+`</td><td id="master-bots-content-list-bot-${bot.player.id}-color" style="font-size: 20px;color: ${color}" title="${color} | R: ${bot.player.color[0]} G: ${bot.player.color[1]} B: ${bot.player.color[2]}">■</td><td id="master-bots-content-list-bot-${bot.player.id}-device" title="${bot.clientOptions.proxy || ""}">`+device+'</td>'+`<button id="master-bots-content-list-bot-${bot.player.id}-leave">❌</button>`+'';
                    bottable.id = `master-bots-content-list-bot-${bot.player.id}`;
                    for(let i = 0; i < BOTS.length; i++){ 
				        if(BOTS[i].player.id === bot.player.id) {
			                document.getElementById("master-bots-content-list").appendChild(bottable);
			                document.getElementById(`master-bots-content-list-bot-${bot.player.id}-leave`).addEventListener("click", () => {
			                    bot.net.ws.close();
			                    document.getElementById(`master-bots-content-list-bot-${bot.player.id}`).style.display = "none";;
			                   	for(let i = 0; i < BOTS.length; i++){ 
							        if(BOTS[i].player.id === bot.player.id) {
							            BOTS.splice(i, 1);
							        };
							    };
			                });
				        };
				    };
	                if(bot.options.proxy) document.getElementById(`master-proxy-content-proxyconns-${bot.options.proxy}`).innerText = parseInt(document.getElementById(`master-proxy-content-proxyconns-${bot.options.proxy}`).innerText) + 1;
                    if(Master.AutoLogin == true){
                        if(localStorage.adminlogin) {
                        	let cmd = "adminlogin";
                        	let adminlogin = localStorage.adminlogin || "How_Did_Danix_Get_The_Adminlogin?";
                        	if(location.host = "ourworldofpixels.com") cmd = "pass";
                            bot.chat.send(`/${cmd} ${adminlogin}`);
                        };
                    };
                    if(Master.AutoPassword == true) {
                        if(AutoPassword && JSON.parse(localStorage.worldPasswords)[location.href.split("?#")[0]]) bot.chat.send(`/pass ${JSON.parse(localStorage.worldPasswords)[location.href.split("?#")[0]]}`);
                    };
                    if(Master.AutoNickname == true) {
                        bot.chat.send(`/nickname ${Master.BotNickname}`);
                    };
				});

				bot.on("close", () => {
					for(let i = 0; i < BOTS.length; i++){ 
				        if(BOTS[i].player.id === bot.player.id) {
				        	clearInterval(BOTS[i].interval);
				            BOTS.splice(i, 1);
				        };
				    };
				    if(Master.AutoReconnect == false && Master.SmartAutoReconnect == true) {
				    	bot.world.join(location.href.split("?#")[1]);
				    };
				});
			};
		});
		document.getElementById("master-main-content-send").addEventListener("click", () => {
			for(let i in BOTS) BOTS[i].chat.send(document.getElementById("master-main-content-message").value);
		});
		document.getElementById("master-main-content-followlist").onchange = () => {
			let val = document.getElementById("master-main-content-followlist").value;
            if (val === "Circle") Master.Animation = "circle";
            else if (val === "Disk") Master.Animation = "disk";
            else if (val === "Atom") Master.Animation = "atom";
            else if (val === "Random") Master.Animation = "random";
            else if (val === "Wave") Master.Animation = "wave";
            else if (val === "Right-Left") Master.Animation = "line";
            else if (val === "Hyperbola") Master.Animation = "hyperbola";
            else if (val === "BotLine") Master.Animation = "botline";
            else if (val === "X") Master.Animation = "x";
            else if (val === "Spiral") Master.Animation = "spiral";
            else if (val === "Cool") Master.Animation = "cool";
            else if (val === "Disk 2") Master.Animation = "disktwo";
            else if (val === "Top-Bottom") Master.Animation = "topbottom";
            else if (val === "Laggy") Master.Animation = "laggy";
            else if (val === "Small Circle") Master.Animation = "smallcircle";
            else if (val === "8") Master.Animation = "eight";
            else if (val === "Cool 2") Master.Animation = "cool2";
            else if (val === "3D") Master.Animation = "threed";
            else if (val === "Flower") Master.Animation = "flower";
            else if (val === "Infinity") Master.Animation = "infinity";
            else if (val === "Infinity 2") Master.Animation = "infinity2";
            else if (val === "Square") Master.Animation = "square";
            else if (val === "Default 2") Master.Animation = "default2";
            else if (val === "Disk 3") Master.Animation = "disk3";
            else if (val === "Triagle") Master.Animation = "triagle";
            else if (val === "Saturn") Master.Animation = "saturn";
            else if (val === "Storm") Master.Animation = "storm";
            else if (val === "Disk 4") Master.Animation = "disk4";
            else if (val === "Nazi") Master.Animation = "nazi";
			localStorage.MasterClient = JSON.stringify(Master);
		};
		document.getElementById("master-main-content-eraserpattern").onchange = () => {
            let val = document.getElementById("master-main-content-eraserpattern").value;
            if(val === "Default") Master.EraserPattern = val.replace(" - ", "");
            if(val === "Top - Bottom") Master.EraserPattern = val.replace(" - ", "");
            if(val === "Perfect") Master.EraserPattern = val.replace(" - ", "");
            if(val === "Circle") Master.EraserPattern = val.replace(" - ", "");
			Master.EraserPattern = val.replace(" - ", "");
			localStorage.MasterClient = JSON.stringify(Master);
        };
        document.getElementById("master-main-content-areapattern").onchange = () => {
            let val = document.getElementById("master-main-content-areapattern").value;
            if(val === "Default") Master.AreaPattern = val.replace(" - ", "");
            if(val === "Top - Bottom") Master.AreaPattern = val.replace(" - ", "");
            if(val === "Random") Master.AreaPattern = val.replace(" - ", "");
			Master.AreaPattern = val.replace(" - ", "");
			localStorage.MasterClient = JSON.stringify(Master);
        };
        document.getElementById("master-main-content-assetpasterpattern").onchange = () => {
            let val = document.getElementById("master-main-content-assetpasterpattern").value;
            if(val == "Default") Master.AssetPasterPattern = val.replace(" - ", "");
            if(val == "Left - Up") Master.AssetPasterPattern = val.replace(" - ", "");
            if(val == "Grid") Master.AssetPasterPattern = val.replace(" - ", "");
            if(val == "Square") Master.AssetPasterPattern = val.replace(" - ", "");
            if(val == "Random") Master.AssetPasterPattern = val.replace(" - ", "");
			Master.AssetPasterPattern = val.replace(" - ", "");
			localStorage.MasterClient = JSON.stringify(Master);
        };
		document.getElementById("master-main-content-disconnect").addEventListener("click", () => {
			for(let i in BOTS) {
				if(BOTS[i].net.ws.readyState === 1) {
					BOTS[i].net.ws.close();
					document.getElementById(`master-bots-content-list-bot-${BOTS[i].player.id}`).style.display = "none";
				};
			};
			BOTS = [];
		});
		document.getElementById("master-settings-content-nohelpbtn").onchange = () => {
			let vis = document.getElementById("master-settings-content-nohelpbtn").checked;

			if(vis == true) document.getElementById("help-button").style.visibility = "hidden";
			if(vis == false) document.getElementById("help-button").style.visibility = "visible";
			Master.NoHelp = document.getElementById("master-settings-content-nohelpbtn").checked;
			localStorage.MasterClient = JSON.stringify(Master);
		};
		document.getElementById("master-settings-content-noarcbtn").onchange = () => {
			let vis = document.getElementById("master-settings-content-noarcbtn").checked;

			try {
				if(vis == true) document.getElementById("launcher").style.visibility = "hidden";
				if(vis == false) document.getElementById("launcher").style.visibility = "visible";
			} catch {};
			Master.NoArc = document.getElementById("master-settings-content-noarcbtn").checked;
			localStorage.MasterClient = JSON.stringify(Master);
		};
		document.getElementById("master-main-content-autologin").onchange = () => {
			Master.AutoLogin = document.getElementById("master-main-content-autologin").checked;
			localStorage.MasterClient = JSON.stringify(Master);
		};
		document.getElementById("master-settings-content-novignette").onchange = () => {
			let vis = document.getElementById("master-settings-content-novignette").checked;

			if(vis == true) document.getElementById("palette-bg").style.visibility = "hidden";
			if(vis == false) document.getElementById("palette-bg").style.visibility = "visible";
			Master.NoVignette = document.getElementById("master-settings-content-novignette").checked;
			localStorage.MasterClient = JSON.stringify(Master);
		};
		document.getElementById("master-main-content-autopassword").onchange = () => {
			Master.AutoPassword = document.getElementById("master-main-content-autopassword").checked;
			localStorage.MasterClient = JSON.stringify(Master);
		};
		document.getElementById("master-main-content-autonickname").onchange = () => {
			Master.AutoNickname = document.getElementById("master-main-content-autonickname").checked;
			localStorage.MasterClient = JSON.stringify(Master);
		};
		document.getElementById("master-main-content-useplayer").onchange = () => {
			Master.UsePlayer = document.getElementById("master-main-content-useplayer").checked;
			localStorage.MasterClient = JSON.stringify(Master);
		};
		document.getElementById("master-settings-content-proxies").onchange = () => {
			Master.ProxyPasswords = document.getElementById("master-settings-content-proxies").value;
			localStorage.MasterClient = JSON.stringify(Master);
		};
		document.getElementById("master-settings-content-reconnecttime").onchange = () => {
			Master.ReconnectTime = document.getElementById("master-settings-content-reconnecttime").value;
			localStorage.MasterClient = JSON.stringify(Master);
		};
		document.getElementById("master-settings-content-toolset").onchange = () => {
			document.getElementById("toole-container").insertAdjacentHTML("beforeend", `
				<style>
					button[id^="tool-"]:not(.selected) > div {
					    background-image: url("https://github.com/scar17off/OCM/blob/main/packages/masterbot/toolsets/${document.getElementById("master-settings-content-toolset").value.toString().toLowerCase().replace(" ", "-")}.png?raw=true") !important;
					    background-color: rgba(69, 69, 69, 1);
					}
				</style>
			`);
		};
		document.getElementById("master-settings-content-botnickname").onchange = () => {
			Master.BotNickname = document.getElementById("master-settings-content-botnickname").value;
			localStorage.MasterClient = JSON.stringify(Master);
		};
		document.getElementById("master-settings-content-configrupdrate").onchange = () => {
			Master.ConfigUpdateRate = document.getElementById("master-settings-content-configrupdrate").value;
			localStorage.MasterClient = JSON.stringify(Master);
		};
		document.getElementById("master-settings-content-botsupdrate").onchange = () => {
			Master.ConfigUpdateRate = document.getElementById("master-settings-content-botsupdrate").value;
			localStorage.MasterClient = JSON.stringify(Master);
		};
		document.getElementById("master-main-content-smartautoreconnect").onchange = () => {
			Master.SmartAutoReconnect = document.getElementById("master-main-content-smartautoreconnect").checked;
			localStorage.MasterClient = JSON.stringify(Master);
		};
		document.getElementById("master-main-content-autoreconnect").onchange = () => {
			Master.AutoReconnect = document.getElementById("master-main-content-autoreconnect").checked;
			localStorage.MasterClient = JSON.stringify(Master);
		};
		document.getElementById("master-tabbar-main").addEventListener("click", () => {
			document.getElementById("master-main-content").hidden = true;
			document.getElementById("master-bots-content").hidden = true;
			document.getElementById("master-proxy-content").hidden = true;
			document.getElementById("master-settings-content").hidden = true;

			document.getElementById("master-main-content").hidden = false;

			document.getElementById("master-tabbar-main").style["background-color"] = "#3b3b3b";
			document.getElementById("master-tabbar-bots").style["background-color"] = "#535353";
			document.getElementById("master-tabbar-proxy").style["background-color"] = "#535353";
			document.getElementById("master-tabbar-settings").style["background-color"] = "#535353";
		});
		document.getElementById("master-tabbar-bots").addEventListener("click", () => {
			document.getElementById("master-main-content").hidden = true;
			document.getElementById("master-bots-content").hidden = true;
			document.getElementById("master-proxy-content").hidden = true;
			document.getElementById("master-settings-content").hidden = true;

			document.getElementById("master-bots-content").hidden = false;
			document.getElementById("master-tabbar-bots").style["background-color"] = "#3b3b3b";
			document.getElementById("master-tabbar-main").style["background-color"] = "#535353";
			document.getElementById("master-tabbar-proxy").style["background-color"] = "#535353";
			document.getElementById("master-tabbar-settings").style["background-color"] = "#535353";
		});
		document.getElementById("master-tabbar-proxy").addEventListener("click", () => {
			document.getElementById("master-main-content").hidden = true;
			document.getElementById("master-bots-content").hidden = true;
			document.getElementById("master-proxy-content").hidden = true;
			document.getElementById("master-settings-content").hidden = true;

			document.getElementById("master-proxy-content").hidden = false;
			document.getElementById("master-tabbar-proxy").style["background-color"] = "#3b3b3b";
			document.getElementById("master-tabbar-bots").style["background-color"] = "#535353";
			document.getElementById("master-tabbar-main").style["background-color"] = "#535353";
			document.getElementById("master-tabbar-settings").style["background-color"] = "#535353";
		});
		document.getElementById("master-tabbar-settings").addEventListener("click", () => {
			document.getElementById("master-main-content").hidden = true;
			document.getElementById("master-bots-content").hidden = true;
			document.getElementById("master-proxy-content").hidden = true;
			document.getElementById("master-settings-content").hidden = true;

			document.getElementById("master-settings-content").hidden = false;
			document.getElementById("master-tabbar-settings").style["background-color"] = "#3b3b3b";
			document.getElementById("master-tabbar-bots").style["background-color"] = "#535353";
			document.getElementById("master-tabbar-proxy").style["background-color"] = "#535353";
			document.getElementById("master-tabbar-main").style["background-color"] = "#535353";
		});
		// Tools
		let LastChunk = Date.now();
		let lastChunk;
		OWOP.world.protection = {
            intervals: {},
            pixels: {}
        };
		OWOP.tools.addToolObject(new OWOP.tools.class("Master Protection 16", OWOP.cursors.shield, OWOP.fx.player.RECT_SELECT_ALIGNED(16), OWOP.RANK.USER, tool => {
            tool.setFxRenderer((fx, ctx) => {
                const X = fx.extra.player.x,
                    Y = fx.extra.player.y,
                    cX = (16 * Math.floor(X / 256) - OWOP.camera.x) * OWOP.camera.zoom,
                    cY = (16 * Math.floor(Y / 256) - OWOP.camera.y) * OWOP.camera.zoom,
                    tX = fx.extra.player.tileX,
                    tY = fx.extra.player.tileY,
                    chunk = OWOP.world.protection.pixels[`${tX},${tY}`];
                ctx.globalAlpha = .5;
                ctx.fillStyle = chunk ? "#00FF00" : "#FF0000";
                ctx.fillRect(cX, cY, 16 * OWOP.camera.zoom, 16 * OWOP.camera.zoom);
                return true;
            });
            tool.setEvent("mousedown mousemove", fx => {
                const X = Math.floor(OWOP.mouse.tileX / OWOP.options.serverAddress[0].proto.chunkSize) * 16,
                    Y = Math.floor(OWOP.mouse.tileY / OWOP.options.serverAddress[0].proto.chunkSize) * 16,
                    chunk = OWOP.world.protection.pixels[`${X},${Y}`];
                switch (fx.buttons) {
                    case 1:
                        if(chunk) return false;
                        for (let y = 0; y < 16; y++)
                            for (let x = 0; x < 16; x++) {
                                OWOP.world.protection.pixels[`${X + x},${Y + y}`] = OWOP.world.getPixel(X + x, Y + y);
                                OWOP.world.protection.intervals[`${X + x},${Y + y}`] = setInterval(() => {
                                    if(!OWOP.world.setPixel(X + x, Y + y, OWOP.world.protection.pixels[`${X + x},${Y + y}`])) {
                                        let abc = getFree();
                                        if(BOTS[abc].net.bucket.allowance >= 1) BOTS[abc].world.setPixel(X + x, Y + y, OWOP.world.protection.pixels[`${X + x},${Y + y}`][3]);
                                    }
                                }, 1);
                            }
                        return true;
                        break;
                    case 2:
                        if(!chunk) return false;
                        for (let y = 0; y < 16; y++)
                            for (let x = 0; x < 16; x++) {
                                clearInterval(OWOP.world.protection.intervals[`${X + x},${Y + y}`]);
                                delete OWOP.world.protection.intervals[`${X + x},${Y + y}`];
                                delete OWOP.world.protection.pixels[`${X + x},${Y + y}`];
                            }
                        break;
                }
            });
        }));
		OWOP.tools.addToolObject(new OWOP.tools.class('Master Chunker', OWOP.cursors.erase, OWOP.fx.player.RECT_SELECT_ALIGNED(16), false, function(tool) {
            let queue = [];
            let pix = 16;
            let index = 0;
            let chunkStack = [];
            if(Master.EraserPattern == "Circle"){
	            for (let x = 0; x < 16; x++) {
	                for (let y = 0; y < 16; y++) {
	                    chunkStack.push([x, y]);
	                }
	            }
	            chunkStack.sort((a, b) => dist(a[0] - 8, a[1] - 8) - dist(b[0] - 8, b[1] - 8));
	            if(mouse.buttons != 0) {
	                if(mouse.buttons || mouse.buttons == 2) {
	                    if(Date.now() - LastChunk < 100) return;
	                    LastChunk = Date.now();
	                    for (let i = 0; i < BOTS.length; i++) BOTS[i].options.busy = true;
	                    let color = mouse.buttons === 1 ? OWOP.player.selectedColor : [255, 255, 255];
	                    let mose = mouse.buttons;
	                    let chunkx = Math.floor(OWOP.mouse.tileX / pix) * pix;
	                    let chunky = Math.floor(OWOP.mouse.tileY / pix) * pix;
	                    let armor = pix * pix;
	                    if(BOTS.length === 0) return OWOP.chat.local("No bots connected!");
	                    let chunkStack1 = chunkStack;
	                    for (let x = 0; x < pix; x++) {
	                	        for (let y = 0; y < pix; y++) {
	                	            let abc = getFree();
	                	            if(Master.OldMBPaste == false) {
	                	            BOTS[abc].net.bucket.canSpend(0);
	                	            if(BOTS[abc].net.bucket.allowance <= 1) {
	                	                y--
	                	            } else {
	                	                mose === 1 ? index = 0 : index = chunkStack.length - 1;
	                	                let tpix = chunkStack1.splice(index, 1)[0];
	                	                BOTS[abc].world.setPixel(chunkx + tpix[0], chunky + tpix[1], color);
	                	                if(Master.UsePlayer) OWOP.world.setPixel(chunkx + tpix[0], chunky + tpix[1], color);
	                	            };
	                	        };
	                	    };
	                	}
	            }};
			} else {
	            const eq = (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
	            const eq2 = function eq(a, b) {
	                return a && b && a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
	            };
	
	            function clearChunk(chunkX, chunkY) {
	                for (let y = 0; y < 16; ++y) {
	                    for (let x = 0; x < 16; ++x) {
	                        let pos = [chunkX * 16 + x, chunkY * 16 + y];
	                        if((!eq(OWOP.world.getPixel(...pos), [255, 255, 255])) && (queue.filter(i => eq(i, pos)).length < 1)) {
	                            queue.unshift(pos);
	                        };
	                    };
	                };
	            };
	            tool.setEvent('mousedown mousemove', function(mouse, event) {
	                if(mouse.buttons === 1) {
	                    if(Master.EraserPattern === Master.Patterns.Eraser["Top - Bottom"]) {
	                        let brushercolor = OWOP.player.selectedColor;
	                        let antx = Math.floor(OWOP.mouse.tileX / 16);
	                        let anty = Math.floor(OWOP.mouse.tileY / 16);
	                        let verx = antx * 16;
	                        let very = anty * 16;
	                        drawRectbrush(verx, very, 16, 16, brushercolor)
	                    } else if(Master.EraserPattern === "Default") {
	                        if(Date.now() - LastChunk < 100) return;
	                        LastChunk = Date.now();
	                        for (let i = 0; i < BOTS.length; i++) BOTS[i].options.busy = true;
	                        let color = mouse.buttons === 1 ? OWOP.player.selectedColor : [255, 255, 255];
	                        let chunkx = Math.floor(OWOP.mouse.tileX / pix) * pix;
	                        let chunky = Math.floor(OWOP.mouse.tileY / pix) * pix;
	                        let armor = pix * pix;
	                        //console.log(armor)
	                        for (let x = 0; x < pix; x++) {
	                            for (let y = 0; y < pix; y++) {
	                                const abc = getFree();
	                                BOTS[abc].world.setPixel(chunkx + x, chunky + y, color);
	                            	if(Master.UsePlayer) OWOP.world.setPixel(chunkx + x, chunky + y, color);
	                            };
	                        }
	                    } else if(Master.EraserPattern === "Perfect") {
	                        if(Date.now() - LastChunk < 100) return;
	                        LastChunk = Date.now();
	                        for (let i = 0; i < BOTS.length; i++) BOTS[i].options.busy = true;
	                        let color = mouse.buttons === 1 ? OWOP.player.selectedColor : [255, 255, 255];
	                        let chunkx = Math.floor(OWOP.mouse.tileX / pix) * pix;
	                        let chunky = Math.floor(OWOP.mouse.tileY / pix) * pix;
	                        let armor = pix * pix;
	                        for (let y = 0; y < pix; ++y) {
	                            for (let x = 0; x < pix; ++x) {
	                                let abc = getFree();
	                                BOTS[abc].net.bucket.canSpend(0)
	                                if(BOTS[abc].net.bucket.allowance >= 1){
	                                    if((!eq2(OWOP.world.getPixel(chunkx + x, chunky + y), color))) {
	                                        BOTS[abc].world.setPixel(chunkx + x, chunky + y, color);
	                            			if(Master.UsePlayer) OWOP.world.setPixel(chunkx + x, chunky + y, color);
	                                    };
	                                } else {
	                                    x--
	                                };
	                            };
	                        };
	                    };
	                };
	            });
	        };
        }));
	}, 4001);
})();
