// ==UserScript==
// @name         copy bot
// @version      1.9 public
// @description  another shit bot with cool features.
// @authors      nab. aka NoT_BoT
// @match        *.ourworldofpixels.com/*
// @grant        none
// @license      lol, some one realy need it shit
// @namespace https://greasyfork.org/users/228105
// ==/UserScript==
/*
OWOP text tool, fonts by JPDLD, ru letters by nab
*/
function install() {
    try{
        if(OPM) {
        alert('Uninstall OPM bruh. Удали OPM!')
        }
    } catch {
    }
    if (!OWOP.tool) {
        OWOP.tool = OWOP.tools;
    };
    if (!OWOP.tools) {
        OWOP.tools = OWOP.tool;
    };
    var ol = document.getElementById("toole-container")
    ol.style.maxWidth = '80px';
    let Players;
let pix = 16;
let unpixel_color = [0,0,0]
    //nab try to create his bots. lol its werd bott copy ;-;
    let ProxyPasswords = [];
    let serv_cont;
    let stop121 = false;
    let gaePastBut;
    let gaePast = false;
    let gaePast1 = ' gaePast Off';
    let joinButtonProx;
    let Paster = 0;
    let pastTextarea;
    let gag121 = true;
    let BotsAmount;
    let following;
    let bots = [];
    let bot = {};
    let followe;
    const Networking = OWOP.net;
    let isBrowser = typeof window !== "undefined";
    let OWOPUnlocked = (() => {
        if (typeof OWOP === "undefined") return false;
        return typeof OWOP.require !== "undefined";
    })();

    var BOJS = {};

    function append(src, onload) {
        var s = document.createElement('script');
        s.src = src;
        s.onload = onload;
        document.body.appendChild(s);
    };

    function loadScript(src, onload) {
        var s = document.createElement('script');
        s.src = src;
        s.onload = onload;
        document.body.appendChild(s);
    };

    append("https://raw.githack.com/Olical/EventEmitter/master/EventEmitter.min.js", () => {
        if (OWOPUnlocked) {
            EventEmitter = OWOP.require("events");
        } else if (isBrowser) {
            ! function(e) {
                "use strict";

                function t() {}

                function n(e, t) {
                    for (var n = e.length; n--;)
                        if (e[n].listener === t) return n;
                    return -1
                }

                function r(e) {
                    return function() {
                        return this[e].apply(this, arguments)
                    }
                }

                function i(e) {
                    return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && i(e.listener)
                }
                var s = t.prototype,
                    o = e.EventEmitter;
                s.getListeners = function(e) {
                    var t, n, r = this._getEvents();
                    if (e instanceof RegExp) {
                        t = {};
                        for (n in r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n])
                    } else t = r[e] || (r[e] = []);
                    return t
                }, s.flattenListeners = function(e) {
                    var t, n = [];
                    for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
                    return n
                }, s.getListenersAsObject = function(e) {
                    var t, n = this.getListeners(e);
                    return n instanceof Array && (t = {}, t[e] = n), t || n
                }, s.addListener = function(e, t) {
                    if (!i(t)) throw new TypeError("listener must be a function");
                    var r, s = this.getListenersAsObject(e),
                        o = "object" == typeof t;
                    for (r in s) s.hasOwnProperty(r) && -1 === n(s[r], t) && s[r].push(o ? t : {
                        listener: t,
                        once: !1
                    });
                    return this
                }, s.on = r("addListener"), s.addOnceListener = function(e, t) {
                    return this.addListener(e, {
                        listener: t,
                        once: !0
                    })
                }, s.once = r("addOnceListener"), s.defineEvent = function(e) {
                    return this.getListeners(e), this
                }, s.defineEvents = function(e) {
                    for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
                    return this
                }, s.removeListener = function(e, t) {
                    var r, i, s = this.getListenersAsObject(e);
                    for (i in s) s.hasOwnProperty(i) && -1 !== (r = n(s[i], t)) && s[i].splice(r, 1);
                    return this
                }, s.off = r("removeListener"), s.addListeners = function(e, t) {
                    return this.manipulateListeners(!1, e, t)
                }, s.removeListeners = function(e, t) {
                    return this.manipulateListeners(!0, e, t)
                }, s.manipulateListeners = function(e, t, n) {
                    var r, i, s = e ? this.removeListener : this.addListener,
                        o = e ? this.removeListeners : this.addListeners;
                    if ("object" != typeof t || t instanceof RegExp)
                        for (r = n.length; r--;) s.call(this, t, n[r]);
                    else
                        for (r in t) t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? s.call(this, r, i) : o.call(this, r, i));
                    return this
                }, s.removeEvent = function(e) {
                    var t, n = typeof e,
                        r = this._getEvents();
                    if ("string" === n) delete r[e];
                    else if (e instanceof RegExp)
                        for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
                    else delete this._events;
                    return this
                }, s.removeAllListeners = r("removeEvent"), s.emitEvent = function(e, t) {
                    var n, r, i, s, o = this.getListenersAsObject(e);
                    for (s in o)
                        if (o.hasOwnProperty(s))
                            for (n = o[s].slice(0), i = 0; i < n.length; i++) r = n[i], !0 === r.once && this.removeListener(e, r.listener), r.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, r.listener);
                    return this
                }, s.trigger = r("emitEvent"), s.emit = function(e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    return this.emitEvent(e, t)
                }, s.setOnceReturnValue = function(e) {
                    return this._onceReturnValue = e, this
                }, s._getOnceReturnValue = function() {
                    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
                }, s._getEvents = function() {
                    return this._events || (this._events = {})
                }, t.noConflict = function() {
                    return e.EventEmitter = o, t
                }, "function" == typeof define && define.amd ? define(function() {
                    return t
                }) : "object" == typeof module && module.exports ? module.exports = t : e.EventEmitter = t
            }("undefined" != typeof window ? window : this || {});
            // upper thing is event emitter
        } else {
            WebSocket = require("ws");
            EventEmitter = require("events");
            Canvas = require("canvas");
        }

        if (!Object.values) Object.values = function(object) {
            return Object.keys(object).map(function(key) {
                return object[key];
            });
        }
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

        class WeirdDataView {
            constructor(arrayBuffer = new ArrayBuffer()) {
                this.offset = 0;
                this.dv = new DataView(arrayBuffer);
            }
            get buffer() {
                return this.dv.buffer;
            }
            // set
            // 8
            setUint8(value, offset = this.offset, addToOffset = true) {
                let data = this.dv.setUint8(offset, value);
                this.offset = addToOffset ? offset + 1 : offset;
            }
            setInt8(value, offset = this.offset, addToOffset = true) {
                let data = this.dv.setInt8(offset, value);
                this.offset = addToOffset ? offset + 1 : offset;
            }
            // 16
            setUint16(value, offset = this.offset, littleEndian = true, addToOffset = true) {
                let data = this.dv.setUint16(offset, value, littleEndian);
                this.offset = addToOffset ? offset + 2 : offset;
            }
            setInt16(value, offset = this.offset, littleEndian = true, addToOffset = true) {
                let data = this.dv.setInt16(offset, value, littleEndian);
                this.offset = addToOffset ? offset + 2 : offset;
            }
            // 32
            setUint32(value, offset = this.offset, littleEndian = true, addToOffset = true) {
                let data = this.dv.setUint32(offset, value, littleEndian);
                this.offset = addToOffset ? offset + 4 : offset;
            }
            setInt32(value, offset = this.offset, littleEndian = true, addToOffset = true) {
                let data = this.dv.setInt32(offset, value, littleEndian);
                this.offset = addToOffset ? offset + 4 : offset;
            }

            // get
            // 8
            getUint8(offset = this.offset, addToOffset = true) {
                let data = this.dv.getUint8(offset);
                this.offset = addToOffset ? offset + 1 : offset;
                return data;
            }
            getInt8(offset = this.offset, addToOffset = true) {
                let data = this.dv.getInt8(offset);
                this.offset = addToOffset ? offset + 1 : offset;
                return data;
            }
            // 16
            getUint16(offset = this.offset, littleEndian = true, addToOffset = true) {
                let data = this.dv.getUint16(offset, littleEndian);
                this.offset = addToOffset ? offset + 2 : offset;
                return data;
            }
            getInt16(offset = this.offset, littleEndian = true, addToOffset = true) {
                let data = this.dv.getInt16(offset, littleEndian);
                this.offset = addToOffset ? offset + 2 : offset;
                return data;
            }
            // 32
            getUint32(offset = this.offset, littleEndian = true, addToOffset = true) {
                let data = this.dv.getUint32(offset, littleEndian);
                this.offset = addToOffset ? offset + 4 : offset;
                return data;
            }
            getInt32(offset = this.offset, littleEndian = true, addToOffset = true) {
                let data = this.dv.getInt32(offset, littleEndian);
                this.offset = addToOffset ? offset + 4 : offset;
                return data;
            }
        }

        class ChunkSystem {
            static getIbyXY(x, y, w) {
                return (y * w + x) * 3;
            }
            constructor() {
                this.chunks = {};
                this.chunkProtected = {};
            };

            setChunk(x, y, data) {
                if (!data || typeof x !== "number" || typeof y !== "number") throw new Error("x or y is not a number or no data!");

                return this.chunks[`${x},${y}`] = data;
            };
            getChunk(x, y) {
                return this.chunks[`${x},${y}`];
            };
            removeChunk(x, y) {
                return delete this.chunks[`${x},${y}`];
            };
            setPixel(x, y, rgb) {
                if (typeof rgb !== "object" || typeof x !== "number" || typeof y !== "number") throw new Error("x or y is not a number or rgb is not array!");
                const chunkX = Math.floor(x / Client.options.chunkSize);
                const chunkY = Math.floor(y / Client.options.chunkSize);

                const chunk = this.getChunk(chunkX, chunkY);
                if (!chunk) return;

                const i = ChunkSystem.getIbyXY(x & Client.options.chunkSize - 1, y & Client.options.chunkSize - 1, Client.options.chunkSize);

                chunk[i] = rgb[0];
                chunk[i + 1] = rgb[1];
                chunk[i + 2] = rgb[2];
                return true;
            };
            getPixel(x, y) {
                if (typeof x !== "number" || typeof y !== "number") throw new Error("x or y is not a number!");
                const chunkX = Math.floor(x / Client.options.chunkSize);
                const chunkY = Math.floor(y / Client.options.chunkSize);

                const chunk = this.getChunk(chunkX, chunkY);

                if (!chunk) return;

                const i = ChunkSystem.getIbyXY(x & Client.options.chunkSize - 1, y & Client.options.chunkSize - 1, Client.options.chunkSize);
                return [chunk[i], chunk[i + 1], chunk[i + 2]];
            };
            setChunkProtection(x, y, newState) {
                if (typeof x !== "number" || typeof y !== "number") throw new Error("x or y is not a number!");

                if (newState) this.chunkProtected[`${x},${y}`] = true;
                else delete this.chunkProtected[`${x},${y}`];
                return true;
            }
            isProtected(x, y) {
                if (typeof x !== "number" || typeof y !== "number") throw new Error("x or y is not a number!");
                return !!this.chunkProtected[`${x},${y}`];
            }
        };

        const canvasUtils = {
            getIbyXY(x, y, w) {
                return (y * w + x) * 4;
            },
            _lerp(color1, color2, factor = 0.5) {
                return Math.round(color1 + (color2 - color1) * factor);
            },
            lerp(color1, color2, factor = 0.5) {
                let result = Uint8ClampedArray(3); // i don't really want other values like NaN

                for (let i = 0; i < 3; i++) {
                    result[i] = canvasUtils._lerp(color1[i], color2[i], factor);
                }
                return result;
            },
            imageDataToCtx(imageData) { // canvas = ctx.canvas
                let canvas = canvasUtils.createCanvas(imageData.width, imageData.height);
                let ctx = canvas.getContext("2d");

                ctx.putImageData(imageData, 0, 0);
                return ctx;
            },
            createCanvas(width, height) {
                let canvas;
                if (isBrowser) {
                    canvas = document.createElement("canvas");
                    canvas.width = width;
                    canvas.height = height;
                } else {
                    canvas = new Canvas.Canvas(width, height);
                }
                return canvas;
            },
            createImageData() {
                let imageData;

                if (isBrowser) {
                    let canvas = document.createElement("canvas");
                    let ctx = canvas.getContext("2d");
                    imageData = ctx.createImageData(...arguments);
                } else {
                    imageData = Canvas.createImageData(...arguments);
                }

                return imageData;
            },
            dataToImageData(data, width, height, hasAlpha = true, alpha = 255) {
                let imageData = canvasUtils.createImageData(width, height);
                if (!hasAlpha) {
                    data = canvasUtils.addAlphaToData(data, alpha);
                }

                for (let i = 0; i < data.length; i++) imageData.data[i] = data[i]; // WTF WHY IT CAN'T BE JUST image.data = data; WHYYYYYYYYYYYYYYYYYYYYYYYYYYY

                return imageData;
            },
            removeAlphaFromImageData(data) {
                if (data.length % 4 !== 0) throw new Error("Data is not image data");

                let newData = new Uint8ClampedArray(data.length - data.length / 4);
                for (let i = 0, i2 = 0; i < newData.length;) {
                    newData[i++] = data[i2++];
                    newData[i++] = data[i2++];
                    newData[i++] = data[i2++];
                    i2++;
                }
                return newData;
            },
            addAlphaToData(data, alpha = 255) {
                if (data.length % 3 !== 0) throw new Error("Data is not data ;-;");
                let newData = new Uint8ClampedArray(data.length + data.length / 3);

                for (let i = 0, i2 = 0; i < newData.length;) {
                    newData[i++] = data[i2++];
                    newData[i++] = data[i2++];
                    newData[i++] = data[i2++];
                    newData[i++] = alpha;
                }
                return newData;
            }
            /*,
                lerpImageDataWithNormalColors(imageData, imageDataWithoutAlphaChannel) { // i will delete it but i added it idk why
                  let lerped = new Uint8ClampedArray(imageDataWithoutAlphaChannel.length);
                  for (let i = 0, i2 = 0; i < imageData.length;) {
                    let factor = imageData[i + 3];
                    lerped[i2] = canvasUtils._lerp(imageDataWithoutAlphaChannel[i2], imageData[i], factor / 255);
                    i++;
                    i2++;
                    lerped[i2] = canvasUtils._lerp(imageDataWithoutAlphaChannel[i2], imageData[i], factor / 255);
                    i++;
                    i2++;
                    lerped[i2] = canvasUtils._lerp(imageDataWithoutAlphaChannel[i2], imageData[i], factor / 255);
                    i++;
                    i2++;

                    i++;
                  }
                  return lerped;
                }*/
        };

        class Client extends EventEmitter {
            static options = {
                chunkSize: 16,
                maxChatBuffer: 256,
                maxMessageLength: {
                    0: 128,
                    1: 128,
                    2: 512,
                    3: 16384
                },
                maxWorldNameLength: 24,
                worldBorder: 0xFFFFFF, // or Math.pow(2, 24)-1
                misc: {
                    chatVerification: String.fromCharCode(10),
                    tokenVerification: "CaptchA",
                    worldVerification: 25565
                },
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
                chatQuota: {
                    0: [4, 6],
                    1: [4, 6],
                    2: [10, 3],
                    3: [0, 1000]
                },
                captchaState: {
                    WAITING: 0,
                    VERIFYING: 1,
                    VERIFIED: 2,
                    OK: 3,
                    INVALID: 4
                },
                tools: {
                    0: [1, "cursor"],
                    1: [0, "move"],
                    2: [0, "pippete"],
                    3: [2, "eraser"],
                    4: [0, "zoom"],
                    5: [1, "bucket"],
                    6: [2, "paste"],
                    7: [0, "export"],
                    8: [1, "line"],
                    9: [2, "protect"],
                    10: [2, "copy"]
                }
            };
            static utils = {
                shouldMove(x1, y1, x2, y2) {
                    let distx = Math.trunc(x2 / Client.options.chunkSize) - Math.trunc(x1 / Client.options.chunkSize);
                    distx *= distx;
                    let disty = Math.trunc(y2 / Client.options.chunkSize) - Math.trunc(y1 / Client.options.chunkSize);
                    disty *= disty;

                    let dist = Math.sqrt(distx + disty);

                    return dist >= 3;
                },
                decompress(u8arr) {
                    var originalLength = u8arr[1] << 8 | u8arr[0];
                    var u8decompressedarr = new Uint8ClampedArray(originalLength);
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
                },
                Player: class {
                    constructor(id) {
                        this.id = id;
                        this.nick = "";
                        this.x = 0;
                        this.y = 0;
                        this.color = [0, 0, 0];
                        this.rank = 0;
                    }
                },
                createChunkFromRGB(color) {
                    let tile = new Uint8ClampedArray(Client.options.chunkSize * Client.options.chunkSize * 3);
                    for (var i = 0; i < tile.length;) {
                        tile[i++] = color[0];
                        tile[i++] = color[1];
                        tile[i++] = color[2];
                    }
                    return tile;
                },
                isArraysSame(...arrays) {
                    arrays = arrays.map(array => JSON.stringify(array));

                    return !arrays.filter(array => arrays[0] !== array).length;
                }
            };
            constructor(options = {}) {
                super();
                const that = this;
                this.chunkSystem = new ChunkSystem();
                this.pendingLoad = {};
                this.destroyed = false;

                if (!options.ws) options.ws = OWOP.options.serverAddress[0].url;;
                if (!options.origin && !isBrowser) options.origin = options.ws.replace("ws", "http");
                if (typeof options.protocol === "undefined") options.protocol = 1;
                if (typeof options.autoConnectWorld === "undefined") options.autoConnectWorld = true;
                if (typeof options.log === "undefined") options.log = true;
                if (typeof options.autoMakeSocket === "undefined") options.autoMakeSocket = true;
                if (typeof options.captchaSiteKey === "undefined") options.captchaSiteKey = "6LcgvScUAAAAAARUXtwrM8MP0A0N70z4DHNJh-KI";
                if (typeof options.reconnectTime === "undefined") options.reconnectTime = 5000;
                if (typeof options.reconnectTries === "undefined") options.reconnectTries = -1; // endless
                this.reconnectTries = options.reconnectTries;

                if (options.controller && !isBrowser) {
                    const stdin = process.openStdin();
                    stdin.on("data", d => {
                        const msg = d.toString().trim();
                        try {
                            return console.log(String(eval(msg)).slice(0, 1000));
                        } catch (e) {
                            console.log('[ERROR]: ' + e.name + ": " + e.message + "\n" + e.stack);
                        }
                    });
                }
                this.clientOptions = options;

                this.players = {};
                this.player = {
                    id: null,
                    color: [0, 0, 0],
                    tool: 0,
                    x: 0,
                    y: 0,
                    rank: 0,

                    nick: options.nick,
                    chatBucket: new Bucket(...Client.options.chatQuota[0]),
                    pixelBucket: new Bucket(32, 4)
                };
                this.chat = {
                    send(message, sendModifier = true) {
                        if (!that.ws ||
                            that.ws.readyState !== 1) return false;
                        if (!that.clientOptions.unsafe) {
                            if (!that.player.chatBucket.canSpend(1)) return false;
                            message = message.slice(0, Client.options.maxMessageLength[that.player.rank]);
                        }
                        if (sendModifier) message = that.chat.sendModifier(message);

                        that.ws.send(message + Client.options.misc.chatVerification);
                    },
                    recvModifier(message) {
                        return message;
                    },
                    sendModifier(message) {
                        return message;
                    },
                    messages: [],
                    /*
                    0-3 - normal owop ranks
                    4 - discord
                    */
                    parseMessage(msg) {
                        let something = msg.split(": ");

                        if (msg.startsWith("DEV") ||
                            msg.toLowerCase().startsWith("server:") ||
                            msg[0] === "<" ||
                            something.length < 2) return [null, null, null, msg];

                        let before = something.shift();
                        let message = something.join(": ").trim();

                        let user = {
                            rank: 0,
                            id: null,
                            nick: ""
                        }
                        let tell = false;

                        if (before.startsWith("[D]")) {
                            user.rank = 4; // rank 4 is discord
                            user.nick = before.slice(4).trim(); // two ways one is spliting by space second is by just slicing 4 letters

                        } else if (before.startsWith("(M)")) {
                            user.nick = before.slice(4).trim();
                            user.rank = 2;
                        } else if (before.startsWith("(A)")) {
                            user.nick = before.slice(4).trim();
                            user.rank = 3;
                        } else if (before.startsWith("[") || /[0-9]/g.test(before[0])) {
                            if (before.startsWith("[")) {
                                user.id = +before.split("]")[0].substr(1);
                                user.nick = before.split("]");
                                user.nick.shift();
                                user.nick = user.nick.join("]").trim();
                            } else {
                                user.id = +before;
                                user.nick = before.trim(); // trim is not needed i think
                            }

                            user.rank = 0; //that.players[user.id] ? that.players[user.id].rank : 0;
                        } else if (before.startsWith("-> ") && /[0-9]/g.test(before[4])) {
                            tell = true;
                            user.id = +before.split(" ")[1];
                            user.nick = user.id.toString();

                            user.rank = 0 //that.players[user.id] ? that.players[user.id].rank : 0;
                        } else if (before.toLowerCase().startsWith("-> you tell")) {
                            user.id = that.player.id;
                            user.nick = that.player.nick;
                            tell = true;
                        }
                        return [user, message, tell, msg];
                    }
                };

                this.world = {
                    join(name = "main") {
                        let nameCopy = name = (name.replace(/[^a-zA-Z0-9\._]/gm, "").slice(0, 24) || "main");
                        nameCopy = nameCopy.split("").map(x => x.charCodeAt(0));

                        let dv = new DataView(new ArrayBuffer(name.length + 2));

                        for (let i = 0; i < name.length; i++) dv.setUint8(i, nameCopy[i] || 0);

                        dv.setUint16(name.length, that.clientOptions.worldVerification || Client.options.misc.worldVerification, true);

                        that.ws.send(dv.buffer);
                        that.world.name = name;
                        that.log("Joining world: " + name);
                    },
                    leave() {
                        this.ws.close(); // bug it will reconnect if can
                    },
                    move(x = that.player.x, y = that.player.y) {
                        if (that.ws.readyState !== 1) return false;

                        that.player.x = x = +x;
                        that.player.y = y = +y;

                        x *= 16;
                        y *= 16;

                        let dv = new WeirdDataView(new ArrayBuffer(12));
                        dv.setInt32(x);
                        dv.setInt32(y);
                        dv.setUint8(that.player.color[0]);
                        dv.setUint8(that.player.color[1]);
                        dv.setUint8(that.player.color[2]);
                        dv.setUint8(that.player.tool);
                        that.ws.send(dv.buffer);
                        return true;
                    },
                    setPixel(x = that.player.x, y = that.player.y, color = that.player.color, wolfMove, sneaky, move = (that.player.rank < 3)) {
                        if (that.ws.readyState !== 1) return false;
                        let oldX = that.player.x;
                        let oldY = that.player.y;

                        x = +x;
                        y = +y;
                        if (!that.clientOptions.unsafe && (!that.player.pixelBucket.canSpend(1) || that.player.rank === 0)) return false;
                        if (wolfMove) {
                            if (Client.utils.shouldMove(that.player.x, that.player.x, x, y)) that.world.move(x, y);
                        } else if (move) {
                            that.world.move(x, y);
                        }
                        that.player.color = color;
                        let dv = new WeirdDataView(new ArrayBuffer(11));
                        dv.setInt32(x);
                        dv.setInt32(y);
                        dv.setUint8(that.player.color[0]);
                        dv.setUint8(that.player.color[1]);
                        dv.setUint8(that.player.color[2]);
                        that.ws.send(dv.buffer);

                        if (sneaky) that.world.move(oldX, oldY);
                        return true;
                    },
                    pasteChunk(x, y, data) {
                        if (that.ws.readyState !== 1 || !that.clientOptions.unsafe && that.player.rank < 2) return false;

                        let dv = new DataView(new ArrayBuffer(8 + Client.options.chunkSize * Client.options.chunkSize * 3));
                        dv.setInt32(0, x, true);
                        dv.setInt32(4, y, true);
                        for (let i = 0; i < data.length; i++) dv.setUint8(8 + i, data[i]);

                        that.ws.send(dv.buffer);
                        return true;
                    },
                    async pasteImageData(x, y, imageData, isImage) { // tried to do fastest as possible
                        if (that.ws.readyState !== 1 || !that.clientOptions.unsafe && that.player.rank < 2) return false;

                        // math
                        let chunkXStart = Math.floor(x / Client.options.chunkSize);
                        let chunkXEnd = Math.floor((x + imageData.width) / Client.options.chunkSize) + 1;
                        let chunkYStart = Math.floor(x / Client.options.chunkSize);
                        let chunkYEnd = Math.floor((x + imageData.height) / Client.options.chunkSize) + 1;

                        let canvasWidthInChunks = chunkXEnd - chunkXStart;
                        let canvasHeightInChunks = chunkYEnd - chunkXStart;

                        let posXOnCanvas = x % Client.options.chunkSize;
                        let posYOnCanvas = y % Client.options.chunkSize;

                        // some shit
                        let canvas = canvasUtils.createCanvas(canvasWidthInChunks * Client.options.chunkSize, canvasHeightInChunks * Client.options.chunkSize);
                        let ctx = canvas.getContext("2d");
                        let image = isImage ? imageData : canvasUtils.imageDataToCtx(imageData).canvas;

                        // requesting chunks and setting them on canvas
                        await new Promise(resolve => {
                            let chunksLasted = canvasWidthInChunks * canvasHeightInChunks;

                            for (let xx = chunkXStart, canvasX = 0; xx < chunkXEnd; xx++, canvasX += Client.options.chunkSize) {
                                for (let yy = chunkYStart, canvasY = 0; yy < chunkYEnd; yy++, canvasY += Client.options.chunkSize) {

                                    that.world.requestChunk(xx, yy).then(data => {
                                        let chunkImageData = canvasUtils.dataToImageData(data, Client.options.chunkSize, Client.options.chunkSize, false);

                                        ctx.putImageData(chunkImageData, canvasX, canvasY);

                                        chunksLasted--;
                                        if (!chunksLasted) resolve();
                                    });
                                }
                            }
                        });

                        ctx.drawImage(image, posXOnCanvas, posYOnCanvas); // setting image

                        // pasting
                        for (let xx = chunkXStart, canvasX = 0; xx < chunkXEnd; xx++, canvasX += Client.options.chunkSize) {
                            for (let yy = chunkYStart, canvasY = 0; yy < chunkYEnd; yy++, canvasY += Client.options.chunkSize) {
                                let chunkImageData = ctx.getImageData(canvasX, canvasY, Client.options.chunkSize, Client.options.chunkSize);
                                let chunkData = canvasUtils.removeAlphaFromImageData(chunkImageData.data);

                                if (Client.utils.isArraysSame(chunkData, that.chunkSystem.getChunk(xx, yy))) continue;

                                that.world.pasteChunk(xx, yy, chunkData);
                            }
                        }

                        return true;
                    },
                    setTool(tool) {
                        if (that.ws.readyState !== 1) return false;
                        that.player.tool = +tool;

                        let dv = new WeirdDataView(new ArrayBuffer(12));
                        dv.setInt32(that.player.x * 16);
                        dv.setInt32(that.player.y * 16);
                        dv.setUint8(that.player.color[0]);
                        dv.setUint8(that.player.color[1]);
                        dv.setUint8(that.player.color[2]);
                        dv.setUint8(that.player.tool);
                        that.ws.send(dv.buffer);
                        return true;
                    },
                    setColor(color) {
                        if (that.ws.readyState !== 1) return false;
                        that.player.color = color;

                        let dv = new WeirdDataView(new ArrayBuffer(12));
                        dv.setInt32(that.player.x * 16);
                        dv.setInt32(that.player.y * 16);
                        dv.setUint8(that.player.color[0]);
                        dv.setUint8(that.player.color[1]);
                        dv.setUint8(that.player.color[2]);
                        dv.setUint8(that.player.tool);
                        that.ws.send(dv.buffer);
                        return true;
                    },
                    protectChunk(x, y, newState = 1) {
                        if (that.ws.readyState !== 1 || that.player.rank < 2 && that.clientOptions.unsafe) return false;
                        let dv = new WeirdDataView(new ArrayBuffer(10));
                        dv.setInt32(x);
                        dv.setInt32(y);
                        dv.setUint8(newState);
                        that.ws.send(dv.buffer);
                        return true;
                    },
                    clearChunk(x, y, color) {
                        if (that.ws.readyState !== 1 || that.player.rank < 2 && that.clientOptions.unsafe) return false;
                        if (that.clientOptions.protocol === 0) {
                            if (color[0] === 255 && color[1] === 255 && color[2] === 255) {
                                let dv = new WeirdDataView(new ArrayBuffer(9));
                                dv.setInt32(x);
                                dv.setInt32(y);
                                that.ws.send(dv.buffer);
                            } else {
                                that.world.pasteChunk(x, y, Client.utils.createChunkFromRGB(color));
                            }
                        } else {
                            let dv = new WeirdDataView(new ArrayBuffer(13));
                            dv.setInt32(x);
                            dv.setInt32(y);
                            dv.setUint8(color[0]);
                            dv.setUint8(color[1]);
                            dv.setUint8(color[2]);
                            that.ws.send(dv.buffer);
                        }
                        return true;
                    },
                    __requestChunk(x, y) {
                        let dv = new WeirdDataView(new ArrayBuffer(8));
                        dv.setInt32(x);
                        dv.setInt32(y);
                        that.ws.send(dv.buffer);
                        return true;
                    },
                    _requestChunk(x, y) {
                        return new Promise(async (resolve, reject) => {
                            if (that.pendingLoad[x + "," + y]) await that.pendingLoad[x + "," + y];

                            if (that.chunkSystem.getChunk(x, y)) return resolve(that.chunkSystem.getChunk(x, y));

                            let wb = Client.options.worldBorder;
                            if (!that.clientOptions.unsafe && (x > wb || y > wb || x < ~wb || y < ~wb)) return reject(false);

                            let func = ((cx, cy, data) => {
                                if (x !== cx || y !== cy) return;
                                that.off("chunk", func);
                                resolve(data);
                            });
                            that.on("chunk", func);
                            that.world.__requestChunk(x, y);
                        });
                    },
                    requestChunk(x, y, inaccurate) { // i think that there is simplier way but i can't invent it
                        if (inaccurate) {
                            x = Math.floor(x / Client.options.chunkSize);
                            y = Math.floor(y / Client.options.chunkSize);
                        };
                        let chunk = that.world._requestChunk(x, y);

                        that.pendingLoad[x + "," + y] = new Promise(async resolve => {
                            resolve(await chunk);
                            delete that.pendingLoad[x + "," + y];
                        });
                        return chunk;
                    },
                    async getPixel(x, y) {
                        if (isBrowser)
                            if (that.clientOptions.simpleChunks) return OWOP.world.getPixel(x, y);
                        await that.world.requestChunk(x, y, true);

                        return that.chunkSystem.getPixel(x, y);
                    }
                };
                this.captcha = {
                    usedKeys: [],
                    login(key) {
                        if (!that.ws ||
                            that.ws.readyState !== 1) return false;
                        if (that.captcha.usedKeys.includes(key)) {
                            return false
                        } else if (!key.startsWith("LETMEINPLZ")) {
                            that.captcha.usedKeys.push(key);
                        }
                        that.ws.send(Client.options.misc.tokenVerification + key);
                        that.captcha.usedKeys.push(key);
                        return true;
                    },
                    renderCaptcha(uniqueName = true) {
                        // you can do it self only on browser
                        if (isBrowser) {
                            return new Promise(resolve => {
                                OWOP.windowSys.addWindow(new OWOP.windowSys.class.window(`Verification Needed` + (uniqueName ? String.fromCharCode(Math.random() * 100) : ""), {
                                    closeable: true,
                                    moveable: true
                                }, win => {
                                    grecaptcha.render(win.addObj(OWOP.util.mkHTML('div', {})), {
                                        theme: 'dark',
                                        sitekey: that.clientOptions.captchaSiteKey,
                                        callback: token => {
                                            win.close();
                                            resolve(token);
                                        }
                                    });
                                }));
                            });
                        } else {
                            throw new Error("Node JS can't use renderCaptcha")
                        }
                    },
                    async renderAndLogin(unique = true) {
                        that.captcha.login(await that.captcha.renderCaptcha(unique));
                    }
                };
                if (options.autoMakeSocket) this.makeSocket();
            }
            log(...args) {
                if (this.clientOptions.log) console.log(...args);
            }
            destroy() {
                if (this.ws.readyState === 1) this.ws.close();
                this.destroyed = true;
                this.emit("destroy");
            }
            makeSocket() {
                let ws = new WebSocket(this.clientOptions.ws, isBrowser ? undefined : this.clientOptions);

                this.players = {};
                ws.binaryType = "arraybuffer";

                ws.onopen = () => {
                    this.emit("open", ...arguments);
                    this.log("Connected");
                }
                ws.onclose = () => {
                    this.emit("close", ...arguments);
                    this.isWorldConnected = false;
                    this.log("Disconnected");
                    // if someone dumb will set this.reconnectTries to 0 then it will change after \/ to -1 (endless) but will not connect
                    if (!this.destroyed && this.clientOptions.reconnect) setTimeout(this.makeSocket.bind(this), this.clientOptions.reconnectTime)
                }

                ws.onmessage = e => {
                    let msg = e.data;
                    this.emit("rawMessage", msg);

                    const isBinary = typeof msg !== "string";

                    if (isBinary) {
                        let dv = new WeirdDataView(msg);
                        let len = dv.byteLength;
                        switch (dv.getUint8()) {
                            case Client.options.opcode.setId: {
                                this.player.id = dv.getUint32();;
                                this.isWorldConnected = true;

                                this.player.rank = 0;

                                this.log(`Joined world '${this.world.name}' and got id '${this.player.id}'`);

                                if (this.clientOptions.adminlogin) this.chat.send("/adminlogin " + this.clientOptions.adminlogin);
                                if (this.clientOptions.modlogin) this.chat.send("/modlogin " + this.clientOptions.modlogin);
                                if (this.clientOptions.pass) this.chat.send("/pass " + this.clientOptions.pass);
                                if (this.clientOptions.nick) this.chat.send("/nick " + this.clientOptions.nick);

                                this.emit("join", this.world.name, this.player.id);
                                break;
                            }
                            case Client.options.opcode.worldUpdate: {
                                let count = dv.getUint8(); // players update size

                                let updatedPlayers = {};
                                let newPlayers = [];
                                for (let i = 0; i < count; i++) { // player updates
                                    let id = dv.getUint32(); // player id
                                    //let isNew = false;
                                    if (!this.players[id]) {
                                        //isNew = true;
                                        this.players[id] = new Client.utils.Player(id);
                                        newPlayers.push(id);
                                    }
                                    let player = updatedPlayers[id] = this.players[id];

                                    player.x = dv.getInt32() / 16; // x
                                    player.y = dv.getInt32() / 16; // y

                                    player.color[0] = dv.getUint8(); // r
                                    player.color[1] = dv.getUint8(); // g
                                    player.color[2] = dv.getUint8(); // b
                                    player.tool = dv.getUint8(); // tool
                                    player.tool = Client.options.tools[player.tool] ? player.tool : 0;
                                    player.rank = Math.max(player.rank, Client.options.tools[player.tool][0]);
                                }
                                if (count) {
                                    this.emit("updatedPlayers", updatedPlayers);
                                    if (newPlayers.length) this.emit("newPlayers", newPlayers);
                                }

                                count = dv.getUint16(); // pixels update size
                                let updatedPixels = [];
                                for (let i = 0; i < count; i++) { // pixel updates
                                    let pixel = {};
                                    if (this.clientOptions.protocol === 1) pixel.id = dv.getUint32(); // player which set pixel id
                                    pixel.x = dv.getInt32(); // pixel x
                                    pixel.y = dv.getInt32(); // y
                                    pixel.color = [dv.getUint8(), dv.getUint8(), dv.getUint8()];

                                    this.chunkSystem.setPixel(pixel.x, pixel.y, pixel.color);

                                    updatedPixels.push(pixel);
                                    //this.emit("pixelUpdate", pixel);
                                }
                                if (count) this.emit("updatedPixels", updatedPixels);

                                count = dv.getUint8(); // disconnections of players update size
                                let disconnectedPlayers = [];
                                for (let i = 0; i < count; i++) {
                                    let leftId = dv.getUint32();
                                    disconnectedPlayers.push(leftId);
                                    delete this.players[leftId];
                                }
                                if (count) this.emit("playersLeft", disconnectedPlayers);
                                break;
                            }
                            case Client.options.opcode.captcha: {
                                let id = dv.getUint8();
                                this.emit("captcha", id);
                                switch (id) {
                                    case Client.options.captchaState.WAITING: {
                                        this.log("Captcha State: 0 (WAITING)");
                                        if (this.clientOptions.captchaPass) {
                                            this.captcha.login("LETMEINPLZ" + this.clientOptions.captchaPass);
                                            this.log("Trying to login using captcha pass");
                                        } else if (this.clientOptions.captchaToken) {
                                            this.log("Trying to login using captcha token");
                                            if (!this.captcha.login(this.clientOptions.captchaToken)) console.log("login failed token already used");
                                        }
                                        break;
                                    }
                                    case Client.options.captchaState.VERIFYING: {
                                        this.log("Captcha State: 1 (VERIFYING)");
                                        break;
                                    }
                                    case Client.options.captchaState.VERIFIED: {
                                        this.log("Captcha State: 2 (VERIFIED)");
                                        break;
                                    }
                                    case Client.options.captchaState.OK: {
                                        this.log("Captcha State: 3 (OK)");
                                        if (this.clientOptions.autoConnectWorld) this.world.join(this.clientOptions.world);
                                        break;
                                    }
                                    case Client.options.captchaState.INVALID: {
                                        this.log("Captcha State: 4 (INVALID)");
                                        break;
                                    }
                                }
                                break;
                            }
                            case Client.options.opcode.chunkLoad: {
                                let chunkX = dv.getInt32();
                                let chunkY = dv.getInt32();

                                let locked = !!dv.getUint8();
                                let chunk = new Uint8ClampedArray(msg, 10);

                                chunk = Client.utils.decompress(chunk);


                                let isNew = !this.chunkSystem.getChunk(chunkX, chunkY);
                                this.chunkSystem.setChunk(chunkX, chunkY, chunk);
                                this.chunkSystem.setChunkProtection(chunkX, chunkY, locked);

                                this.emit("chunk", chunkX, chunkY, chunk, locked, isNew);
                                break;
                            }
                            case Client.options.opcode.teleport: {
                                if (!this.clientOptions.teleport) break;
                                let x = dv.getInt32();
                                let y = dv.getInt32();

                                this.world.move(x, y); // lazy to write
                                this.emit("teleport", x, y);
                                break;
                            }
                            case Client.options.opcode.setRank: {
                                let rank = dv.getUint8();
                                this.player.rank = rank;
                                this.player.chatBucket = new Bucket(...Client.options.chatQuota[rank]);

                                this.emit("rank", rank);
                                break;
                            }
                            case Client.options.opcode.setPQuota: {
                                let rate = dv.getUint16();
                                let per = dv.getUint16();
                                this.player.pixelBucket = new Bucket(rate, per);

                                this.emit("pquota", rate, per);

                                this.log(`New pixelQuota: ${rate}x${per}`);
                                break;
                            }
                            case Client.options.opcode.chunkProtected: {
                                let chunkX = dv.getInt32();
                                let chunkY = dv.getInt32();

                                let locked = !!dv.getUint8();

                                this.chunkSystem.setChunkProtection(chunkX, chunkY, locked);
                                this.emit("chunkProtect", chunkX, chunkY, locked);
                                break;
                            }
                        }
                    } else {
                        if (msg.toLowerCase().startsWith("you are banned")) {
                            this.destroy();
                            this.emit("ban", msg);
                        }
                        let parsedMessage = this.chat.parseMessage(msg);
                        let userInfo = parsedMessage[0];
                        if (userInfo) {
                            if (userInfo.id) {
                                if (this.players[userInfo.id]) {
                                    this.players[userInfo.id].nick = userInfo.nick;
                                }
                            }
                        }
                        msg = this.chat.recvModifier(msg);

                        if (this.chat.messages.length > Client.options.maxChatBuffer) this.chat.messages.shift();
                        this.chat.messages.push(msg);

                        if (msg.toLowerCase().startsWith("Nickname reset")) {
                            this.player.nick = "";
                        } else if (msg.toLowerCase().startsWith("Nickname set to")) {
                            this.player.nick = msg.slice("Nickname set to: \"".length, -1);
                        }
                        this.emit("message", msg, parsedMessage);
                        this.log(msg);
                    }
                }

                this.ws = ws;
            }
        }

        if (isBrowser) {
            BOJS = { // browser
                Client,
                ChunkSystem,
                WeirdDataView,
                EventEmitter, // should be defined globally
                Bucket,
                canvasUtils
            }
        } else if (!isBrowser) {
            module.exports = {
                Client,
                ChunkSystem,
                WeirdDataView,
                Bucket,
                canvasUtils
            }
        }
    });
    let connected = 0;
    let minPquotaSleep = Math.floor(2 * 1000 / 50) + 1
    let followCheckbox;


    function disconnectBots() {
        for (var ii = 0; ii < connected; ii++) {
            bots[ii].BOJS.ws.close()
        }
        bots = []
    }
    loadScript("https://raw.githack.com/Olical/EventEmitter/master/EventEmitter.min.js", () => {
        loadScript("https://www.google.com/recaptcha/api.js");
        const renderCaptcha = (botId, count) => new Promise(resolve => {
            OWOP.windowSys.addWindow(new OWOP.windowSys.class.window(`CAPTCHA - ${botId}`, {
                closeable: true
            }, function(win) {
                grecaptcha.render(win.addObj(OWOP.util.mkHTML("div", {})), {
                    theme: "dark",
                    sitekey: "6LcgvScUAAAAAARUXtwrM8MP0A0N70z4DHNJh-KI",
                    callback: function callback(token) {
                        console.log(token)
                        win.close();
                        resolve(token);
                    }
                });
            }));
        });

        class Bot {
            constructor(id, ws, prox) {
                this.BOJS = new BOJS.Client({
                    reconnect: false,
                    log: false,
                    ws: ws,
                    world: OWOP.world.name
                });
                this.id = id;
                this.BOJS.prox = prox;
                this.BOJS.on("join", this.onJoin.bind(this));
                this.BOJS.on("close", this.onClose.bind(this));
                this.BOJS.on("captcha", this.onCaptcha.bind(this));
                this.BOJS.on("message", this.onMessage.bind(this))
                this.BOJS.onmessage = e => {
                    let msg = e.data;
                    if (msg == 'You are banned. Appeal on the OWOP discord server, ( http://owop.me/discord )') {
                        document.getElementById(`proxystatus-${this.BOJS.prox}`).innerText = "🔨";
                        document.getElementById(`proxystatus-${this.BOJS.prox}`).style.color = "yellow";
                    }
                }

            }
            onMessage() {
                console.log(this.BOJS.msg)
            }
            onClose() {
                document.getElementById('bot'+this.id).remove();
                //setTimeout(() => {
                //if (this.BOJS.prox != 'local') {
                //bots.push(new Bot(connected, "wss://ws-proxy" + this.BOJS.prox + ".glitch.me/?ws=wss://ourworldofpixels.com/", this.BOJS.prox));
                //connected++
                //} else {
                //bots.push(new Bot(connected, OWOP.options.serverAddress[0].url, 'local'));
                //}
                //},100)
                //this.BOJS.ws.close()
                if (this.BOJS.prox != 'local') {
                    if (document.getElementById(`proxyconns-${this.BOJS.prox}`).innerText != 0) {
                        document.getElementById(`proxyconns-${this.BOJS.prox}`).innerText--;
                    }
                }
                connected -= 1
                console.log(`Bot ${this.id} left the game. ID: ${this.BOJS.player.id}`)
                delete bots[bots.indexOf(this)];
                bots.sort().pop();
            }
            onJoin() {
                if (this.BOJS.prox != 'local') {
                    document.getElementById(`proxyconns-${this.BOJS.prox}`).innerText++;
                }
                //let obget = JSON.parse(this.BOJS.players);
                let A6bEKT = new Object(this.BOJS.players.toString());
                for (var key in A6bEKT) {
                    console.log(A6bEKT[key]) // айди пишет блять
                }
                console.log(this.BOJS.players);
                connected += 1;
                console.log(`Bot ${this.id} joined the game. ID: ${this.BOJS.player.id}`)
                console.log(`Bot world:` + OWOP.world.name);
                //this.BOJS.chat.send(`/nick ${window.localStorage.nick.slice(0, 12)} bot`)
                //drawFromTo = new bot.world.drawFromTo(0, 0, 2, 2, [Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)])
            }
            async onCaptcha(id) {
                if (id === 0) {
                    var captchacode = await renderCaptcha(this.id, 0)
                    this.BOJS.ws.send(OWOP.options.serverAddress[0].proto.misc.tokenVerification + captchacode);
                }
            }
        }

        async function joinBots(count = 8, timeout = 0) {
            for (var i = 0; i < count; i++) {
                bots.push(new Bot(connected, OWOP.options.serverAddress[0].url, 'local'));
                connected += 1;
            }
        }
        async function joinBotsProx(count, ws) {
            for (var i = 0; i < count; i++) {
                bots.push(new Bot(connected, "wss://ws-proxy" + ws + ".glitch.me/?ws=wss://ourworldofpixels.com/", ws));
                connected++
            }
        }

        function disconnectBots() {
            for (var ii = 0; ii < connected; ii++) {
                bots[ii].BOJS.ws.close()
            }
            bots = []
        }
        let cont;
        OWOP.windowSys.addWindow(new OWOP.windowSys.class.window("CopyProxy", {
            closeable: true
        }, win => {
            serv_cont = document.createElement("div");
            win.addObj(serv_cont);
            serv_cont.id = "serv-cont";
        }).move(window.innerWidth - 100, 100))
        const updateServers = () => {
            const servers = document.getElementById("serv-cont");
            servers.innerHTML = "";
            for (let i in ProxyPasswords) {
                const Proxy = ProxyPasswords[i];
                const WSCheck = new WebSocket(`wss://ws-proxy${Proxy}.glitch.me/?ws=WS-STATUS`);
                WSCheck.onopen = () => {
                    document.getElementById(`proxyjoin-${Proxy}`).onclick = () => {
                        joinBotsProx(1, Proxy)
                    };
                    document.getElementById(`proxystatus-${Proxy}`).innerHTML = '<td id="proxystatus-'+Proxy+'">'+'✅'+'</td>';
                    WSCheck.send("WS-STATUS");
                };
                WSCheck.onmessage = msg => {
                    console.log(msg);
                    document.getElementById(`proxyconns-${Proxy}`).innerHTML = '<td id="proxyconns-'+Proxy+'">'+(parseInt(msg.data.split(",")[1]) - 1)+'</td>';
                    WSCheck.close();
                };
                WSCheck.onerror = () => {
                    document.getElementById(`proxystatus-${Proxy}`).innerHTML = '<td id="proxystatus-'+Proxy+'">'+'❌'+'</td>';
                };
            }
        };
        let ProxyListTable;
                let ProxyListWindow;
                var S1 = ProxyListTable = document.createElement("table"),
                    T1 = ProxyListWindow = OWOP.windowSys.addWindow(new OWOP.windowSys.class.window("Copy-Proxy", {
                closeable: true
            }, win => {
                        var t = document.createElement("tr");
            t.innerHTML = "<th>Pass</th><th>Status</th><th>Connected</th><th>join</th>",
            S1.appendChild(t),
            win.container.appendChild(S1);
            win.container.id = "player-list";
        })).move(window.innerWidth - 240, 32);
        //setTimeout(() => {
            for (let i in ProxyPasswords) {
                const Proxy = ProxyPasswords[i];
            var d = document.createElement("tr");
                d.innerHTML = '<td>'+Proxy+'</td><td id="proxystatus-'+Proxy+'">'+'❓'+'</td><td id="proxyconns-'+Proxy+'">'+'0'+'</td>'+'<button id="proxyjoin-'+Proxy+'">con</button>';
                d.id = 'Proxy' + Proxy;
                ProxyListTable.appendChild(d);
        }
        //setInterval(() =>{
        //    for (let i in ProxyPasswords) {
        //        const Proxy = ProxyPasswords[i];
        //    const WSCheck = new WebSocket(`wss://ws-proxy${Proxy}.glitch.me/?ws=WS-STATUS`);
        //        WSCheck.onopen = () => {
        //            document.getElementById(`proxyjoin-${Proxy}`).onclick = () => {
        //                joinBotsProx(1, Proxy)
        //            };
        //            document.getElementById(`proxystatus-${Proxy}`).innerText = "✅";
        //            //document.getElementById(`proxystatus-${Proxy}`).style.color = "green";
        //            WSCheck.send("WS-STATUS");
        //        };
        //        WSCheck.onmessage = msg => {
        //            console.log(msg);
        //            document.getElementById(`proxyconns-${Proxy}`).innerText = parseInt(msg.data.split(",")[1]) - 1;
        //            //console.log("test " + msg + " " + Proxy);
        //            WSCheck.close();
        //        };
        //        WSCheck.onerror = () => {
        //            document.getElementById(`proxystatus-${Proxy}`).innerText = "❌";
        //            //document.getElementById(`proxystatus-${Proxy}`).style.color = "red";
        //            //document.getElementById(`proxy-${Proxy}`).style.cssText = "display:none";
        //        };
        //    }
        //},1000)
        //},100)
        let playerList = {};
        let playerListTable;
                let playerListWindow;
                var S = playerListTable = document.createElement("table"),
                    T = playerListWindow = OWOP.windowSys.addWindow(new OWOP.windowSys.class.window("Copy bot List", {
                closeable: true
            }, win => {
                        var t = document.createElement("tr");
            t.innerHTML = "<th>Id</th><th>X</th><th>Y</th><th>WS</th><th>Color</th>",
            S.appendChild(t),
            win.container.appendChild(S);
            win.container.id = "player-list";
        })).move(window.innerWidth - 240, 32);
function componentFroasdmStr(numStr, percent) {
    var num = Math.max(0, parseInt(numStr, 10));
    return percent ?
        Math.floor(255 * Math.min(100, num) / 100) : Math.min(255, num);
}

function rgbToHasdex(rgb) {
    var rgbRegex = /^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/;
    var result, r, g, b, hex = "";
    if ( (result = rgbRegex.exec(rgb)) ) {
        r = componentFroasdmStr(result[1], result[2]);
        g = componentFroasdmStr(result[3], result[4]);
        b = componentFroasdmStr(result[5], result[6]);

        hex = "0x" + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return hex;
}
        setInterval(() => {
            let i;
            i = bots.length;
            let BOTS = bots;
            while (i--) {
                try {
                    document.getElementById('bot'+bots[i].id).innerHTML = '';
                    } catch (err) {
                        let device;
                         if(bots[i].BOJS.prox == 'local') device = '🖥️'; else device = '📡';
                         var d = document.createElement("tr");
                         d.innerHTML = '<td></td>';
                         d.id = 'bot' + bots[i].id;
                         playerListTable.appendChild(d);
                    }
                let device;
                if(bots[i].BOJS.prox == 'local') device = '🖥️'; else device = '📡';
                    document.getElementById('bot'+bots[i].id).innerHTML =
                        '<td>'+Math.round(bots[i].BOJS.player.id)+'</td><td>'+Math.round(bots[i].BOJS.player.x)+'</td><td>'+Math.round(bots[i].BOJS.player.y)+'</td><td>'+device+'</td><td>'+ bots[i].BOJS.player.color+'</td>';
            }
        },100)
        updateServers();
        let bab_cont;

        function makeWindow() {
            let options = {
                closeable: true
            }
            var mkHTML = OWOP.util.mkHTML

            function windowFunc(wdow) {
                bab_cont = mkHTML("div");
                bab_cont.id = "bab-cont";
                let joinCountTextarea = mkHTML("input", {
                    value: 1,
                    type: "number",
                    min: 1,
                    max: 1 * 6
                })
                gaePastBut = mkHTML("button", {
                    innerHTML: " gaePast Off",
                    onclick: function() {
                        if (gaePast) {
                            gaePast = false;
                            gaePast1 = ' gaePast Off'
                        } else {
                            gaePast = true;
                            gaePast1 = ' gaePast On' //dont try past big pic
                        }
                    }
                })
                let joinButton = mkHTML("button", {
                    innerHTML: "Connect",
                    onclick: function() {
                        joinBots(joinCountTextarea.value)
                    }
                })
                BotsAmount = mkHTML("span", {
                    innerHTML: " Bots " + bots.length
                })
                let joinAllButton = mkHTML("button", {
                    innerHTML: "Con all",
                    onclick: function() {
                        for (let i in ProxyPasswords) {
                            const Proxy = ProxyPasswords[i];
                            joinBotsProx(joinCountTextarea.value, Proxy)
                        }
                    }
                })
                joinButtonProx = mkHTML("button", {
                    innerHTML: 'prox-',
                    onclick: function() {
                        if (gag121) {
                            gag121 = false
                            serv_cont.hidden = false;
                        } else {
                            gag121 = true;
                            serv_cont.hidden = true;
                        }
                        //joinBotsProx(joinCountTextareaProx.value)
                    }
                })
                let discButton = mkHTML("button", {
                    innerHTML: "Kick",
                    onclick: function() {
                        disconnectBots();
                    }
                })
                let past = mkHTML("span", {
                    innerHTML: "paster"
                })
                pastTextarea = mkHTML("input", { //pastTextarea.value
                    type: "number",
                    value: 0,
                    min: 0,
                    max: 4,
                    onchange: function() {
                        Paster = pastTextarea.value;
                    }
                })

                let followSpan = mkHTML("span", {
                    innerHTML: "follow"
                })
                let followAnimTextarea = mkHTML("input", {
                    type: "number",
                    value: 0,
                    min: 0,
                    max: 8
                })
                let chunkSpan = mkHTML("span", {
                    innerHTML: "chunk"
                })
                let chunkpixTextarea = mkHTML("input", {
                    type: "number",
                    value: 16,
                    min: 0,
                    max: 100,
                    onchange: function() {
                        pix = chunkpixTextarea.value;
                    }
                })
                followCheckbox = mkHTML("input", {
                    type: "checkbox",
                    onchange: function() {
                        if (followCheckbox.checked) {
                            followe = followAnimTextarea.value;
                            following = true;
                        } else {
                            followe = 99999 //there is no 9999 anim so
                            following = false;
                        }
                    }
                })
                let stopbtn = mkHTML("button", {
                    innerHTML: "Stop bot",
                    onclick: function() {
                        clearBuffer()
                        stop121 = true;
                        setTimeout(() => {
                            stop121 = false;
                        }, 1000)
                    }
                })

                let mathiasCreator = mkHTML("div", {
                    innerHTML: "CopyBot - nothing unique"
                })

                let hreff = mkHTML("a", {
                    innerHTML: "if dont work CText",
                    href: 'https://cors-anywhere.herokuapp.com',
                    target: "blank"
                })
                //wdow

                //bab_cont.style.backgroundImage = 'url(https://cdn.discordapp.com/attachments/450024393628844032/890625420259631124/b005f3de-4e5c-48e4-b88e-3a0a083bd5f5.png)'
                wdow.addObj(joinCountTextarea);
                wdow.addObj(joinButton);
                wdow.addObj(joinButtonProx);
                wdow.addObj(gaePastBut);

                wdow.addObj(mkHTML("br"))
                wdow.addObj(discButton);
                wdow.addObj(joinAllButton);
                wdow.addObj(mkHTML("br"))

                wdow.addObj(chunkSpan)
                wdow.addObj(chunkpixTextarea)
                wdow.addObj(mkHTML("br"))

                wdow.addObj(followSpan)
                wdow.addObj(followCheckbox)
                wdow.addObj(followAnimTextarea)
                wdow.addObj(mkHTML("br")) //BotsAmount

                wdow.addObj(past)
                wdow.addObj(pastTextarea)

                wdow.addObj(mkHTML("br")) //BotsAmount
                wdow.addObj(stopbtn)
                wdow.addObj(BotsAmount)

                wdow.addObj(mkHTML("br"))
                wdow.addObj(mathiasCreator); //lol, i cant rename it. conscience will not allow.
                wdow.addObj(bab_cont);
                wdow.addObj(mkHTML("br"))
                wdow.addObj(hreff);
                wdow.addObj(mkHTML("br"))
            }
            //OWOP.windowSys.addWindow(playerlist).move(window.innerWidth - 240, 32);
            let wclass = new OWOP.windowSys.class.window("CopyBot", options, windowFunc);
            OWOP.windowSys.addWindow(wclass).move(window.innerHeight / 3, 30) //OWOP.windowSys.addWindow(new OWOP.windowSys.class.window(" ", {
            //            closeable: true
            //        }, win => {
            //    cont = win.container;
            //}).move(window.innerWidth - 800, 50))
        }
        makeWindow();
    });

    let f = 0;
    let f1 = 0;
    let PI2 = 2 * Math.PI;
    let FOLLOWADD = PI2 / 45;
    setInterval(() => {
        BotsAmount.innerHTML = " Bots " + bots.length;
        gaePastBut.innerHTML = gaePast1;
        if (gag121) {
            joinButtonProx.innerHTML = "prox Off"
        } else {
            joinButtonProx.innerHTML = "prox On"
        }
        if (following == true) {
            let i;
            i = bots.length;
            let BOTS = bots;
            while (i--) {
                let pos = {
                    x: OWOP.mouse.tileX,
                    y: OWOP.mouse.tileY
                }
                let x1;
                let y1;
                let x;
                let y;
                if (followe == 0) {
                    let BOTS = bots;
                    let t = Math.PI * 2 / bots.length * i + f;
                    let t1 = Math.PI / bots.length * i + f;
                    x = pos.x + (2 * Math.sin(t) + Math.sin(2 * t1)) * bots.length / 2;
                    y = pos.y + (2 * Math.cos(t) - Math.cos(2 * t1)) * bots.length / 2;
                } else if (followe == 1000) {
                    let t = (0.75 * Math.PI / 1 * i + f)
                    x = pos.x + (1 + Math.cos(t) * Math.cos(t) * BOTS.length * 2);
                    y = pos.y + (1 + Math.cos(t) * Math.sin(t) * BOTS.length * 2);
                } else if (followe == 2) {
                    let t = Math.PI * 2 / BOTS.length * i + f;
                    x = pos.x + (2 * Math.sin(t) + Math.sin(2 * (t))) * BOTS.length / 2;
                    y = pos.y + (2 * Math.cos(t) - Math.cos(2 * (t))) * BOTS.length / 2;
                } else
                    if (followe == 3) {
                    let t = Math.PI * 2 / BOTS.length * i - f;
                    let t1 = Math.PI * 3 / BOTS.length * i + f;
                    x1 = pos.x + (Math.cos(2 * t) * BOTS.length / 2);
                    y1 = pos.y + (Math.sin(2 * t) * BOTS.length / 2);
                    x = x1 + (Math.cos(3 * t) * BOTS.length / 2);
                    y = y1 + (Math.sin(3 * t) * BOTS.length / 2);
                } else if (followe == 4) {
                    let t = 2 * Math.PI * 2 / BOTS.length * i + f1;
                    if (i <= BOTS.length / 2) {
                        x = pos.x + (Math.cos(t + 2) * BOTS.length)
                        y = pos.y + (Math.sin(t) * BOTS.length)
                    } else {
                        x = pos.x + (Math.cos(t) * BOTS.length / (BOTS.length / 10)),
                            y = pos.y + (Math.sin(t) * BOTS.length / (BOTS.length / 10));
                    }
                }
                bots[i].BOJS.world.move(x, y);
            }
        }
    }, 80)
    setInterval(() => {
        f = (f + FOLLOWADD - .5) % PI2;
    }, 50)
    setInterval(() => {
        f1 = (f1 + (PI2 / 75) - .5) % PI2;
    }, 50)
    /*    //////////////////////////////////////////JPDLD//////////////////////////////////////////    */
    const fonts = {};
    fonts.small = {
        A: [
            [0, 1, 0],
            [1, 0, 1],
            [1, 1, 1],
            [1, 0, 1],
            [1, 0, 1],
            [0, 0, 0]
        ],
        B: [
            [1, 1, 0],
            [1, 0, 1],
            [1, 1, 0],
            [1, 0, 1],
            [1, 1, 0],
            [0, 0, 0]
        ],
        C: [
            [0, 1, 1],
            [1, 0, 0],
            [1, 0, 0],
            [1, 0, 0],
            [0, 1, 1],
            [0, 0, 0]
        ],
        D: [
            [1, 1, 0],
            [1, 0, 1],
            [1, 0, 1],
            [1, 0, 1],
            [1, 1, 0],
            [0, 0, 0]
        ],
        E: [
            [1, 1, 1],
            [1, 0, 0],
            [1, 1, 0],
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ],
        F: [
            [1, 1, 1],
            [1, 0, 0],
            [1, 1, 0],
            [1, 0, 0],
            [1, 0, 0],
            [0, 0, 0]
        ],
        G: [
            [0, 1, 1, 0],
            [1, 0, 0, 0],
            [1, 0, 1, 1],
            [1, 0, 0, 1],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        H: [
            [1, 0, 1],
            [1, 0, 1],
            [1, 1, 1],
            [1, 0, 1],
            [1, 0, 1],
            [0, 0, 0]
        ],
        I: [
            [1],
            [1],
            [1],
            [1],
            [1],
            [0]
        ],
        J: [
            [0, 0, 1],
            [0, 0, 1],
            [0, 0, 1],
            [1, 0, 1],
            [0, 1, 0],
            [0, 0, 0]
        ],
        K: [
            [1, 0, 0, 1],
            [1, 0, 1, 0],
            [1, 1, 0, 0],
            [1, 0, 1, 0],
            [1, 0, 0, 1],
            [0, 0, 0, 0]
        ],
        L: [
            [1, 0, 0],
            [1, 0, 0],
            [1, 0, 0],
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ],
        M: [
            [1, 0, 0, 0, 1],
            [1, 1, 0, 1, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [0, 0, 0, 0, 0]
        ],
        N: [
            [1, 0, 0, 1],
            [1, 1, 0, 1],
            [1, 0, 1, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [0, 0, 0, 0]
        ],
        O: [
            [0, 1, 1, 0],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        P: [
            [1, 1, 0],
            [1, 0, 1],
            [1, 1, 0],
            [1, 0, 0],
            [1, 0, 0],
            [0, 0, 0]
        ],
        Q: [
            [0, 1, 1, 0],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 1, 1],
            [0, 1, 1, 1],
            [0, 0, 0, 0]
        ],
        R: [
            [1, 1, 0],
            [1, 0, 1],
            [1, 1, 0],
            [1, 0, 1],
            [1, 0, 1],
            [0, 0, 0]
        ],
        S: [
            [0, 1, 1],
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
            [1, 1, 0],
            [0, 0, 0]
        ],
        T: [
            [1, 1, 1],
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
            [0, 0, 0]
        ],
        U: [
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        V: [
            [1, 0, 1],
            [1, 0, 1],
            [1, 0, 1],
            [1, 0, 1],
            [0, 1, 0],
            [0, 0, 0]
        ],
        W: [
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0]
        ],
        X: [
            [1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 0, 0, 1],
            [0, 0, 0, 0, 0]
        ],
        Y: [
            [1, 0, 1],
            [1, 0, 1],
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
            [0, 0, 0]
        ],
        Z: [
            [1, 1, 1, 1, 1],
            [0, 0, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0]
        ],
        /*    //////////////////////////////////////////added ru letters//////////////////////////////////////////    */
        А: [
            [0, 1, 0],
            [1, 0, 1],
            [1, 1, 1],
            [1, 0, 1],
            [1, 0, 1],
            [0, 0, 0]
        ],
        В: [
            [1, 1, 0],
            [1, 0, 1],
            [1, 1, 0],
            [1, 0, 1],
            [1, 1, 0],
            [0, 0, 0]
        ],
        С: [
            [0, 1, 1],
            [1, 0, 0],
            [1, 0, 0],
            [1, 0, 0],
            [0, 1, 1],
            [0, 0, 0]
        ],
        Д: [
            [0, 1, 1, 1, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0],
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [0, 0, 0, 0, 0]
        ],
        Е: [
            [1, 1, 1],
            [1, 0, 0],
            [1, 1, 0],
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ],
        Ф: [
            [0, 0, 1, 0, 0],
            [1, 1, 1, 1, 1],
            [1, 0, 1, 0, 1],
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0]
        ],
        卐: [
            [1, 0, 1, 1, 1],
            [1, 0, 1, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 1],
            [1, 1, 1, 0, 1],
            [0, 0, 0, 0, 0]
        ],
        Г: [
            [1, 1, 1],
            [1, 0, 0],
            [1, 0, 0],
            [1, 0, 0],
            [1, 0, 0],
            [0, 0, 0]
        ],
        Н: [
            [1, 0, 1],
            [1, 0, 1],
            [1, 1, 1],
            [1, 0, 1],
            [1, 0, 1],
            [0, 0, 0]
        ],
        Ж: [
            [1, 0, 1, 0, 1],
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 1, 1, 0],
            [1, 0, 1, 0, 1],
            [0, 0, 0, 0, 0]
        ],
        К: [
            [1, 0, 0, 1],
            [1, 0, 1, 0],
            [1, 1, 0, 0],
            [1, 0, 1, 0],
            [1, 0, 0, 1],
            [0, 0, 0, 0]
        ],
        Л: [
            [0, 1, 0],
            [1, 0, 1],
            [1, 0, 1],
            [1, 0, 1],
            [1, 0, 1],
            [0, 0, 0]
        ],
        М: [
            [1, 0, 0, 0, 1],
            [1, 1, 0, 1, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [0, 0, 0, 0, 0]
        ],
        О: [
            [0, 1, 1, 0],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        Р: [
            [1, 1, 0],
            [1, 0, 1],
            [1, 1, 0],
            [1, 0, 0],
            [1, 0, 0],
            [0, 0, 0]
        ],
        П: [
            [1, 1, 1],
            [1, 0, 1],
            [1, 0, 1],
            [1, 0, 1],
            [1, 0, 1],
            [0, 0, 0]
        ],
        Т: [
            [1, 1, 1],
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
            [0, 0, 0]
        ],
        Ю: [
            [1, 0, 1, 1, 1],
            [1, 0, 1, 0, 1],
            [1, 1, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 1, 1, 1],
            [0, 0, 0, 0, 0]
        ],
        Х: [
            [1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 0, 0, 1],
            [0, 0, 0, 0, 0]
        ],
        У: [
            [1, 0, 1],
            [1, 0, 1],
            [0, 1, 1],
            [0, 0, 1],
            [1, 1, 0],
            [0, 0, 0]
        ],
        З: [
            [1, 1, 0],
            [0, 0, 1],
            [0, 1, 0],
            [0, 0, 1],
            [1, 1, 0],
            [0, 0, 0]
        ],
        Ь: [
            [1, 0, 0],
            [1, 0, 0],
            [1, 1, 0],
            [1, 0, 1],
            [1, 1, 0],
            [0, 0, 0]
        ],
        Ъ: [
            [1, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 1],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        И: [
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 1, 1],
            [1, 1, 0, 1],
            [1, 0, 0, 1],
            [0, 0, 0, 0]
        ],
        Ц: [
            [1, 0, 1, 0],
            [1, 0, 1, 0],
            [1, 0, 1, 0],
            [1, 0, 1, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 1]
        ],
        Й: [
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 1, 1],
            [1, 1, 0, 1],
            [1, 0, 0, 1]
        ],
        Ш: [
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0]
        ],
        Щ: [
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1]
        ],
        Я: [
            [0, 1, 1],
            [1, 0, 1],
            [1, 0, 1],
            [0, 1, 1],
            [1, 0, 1],
            [0, 0, 0]
        ],
        Б: [
            [1, 1, 1],
            [1, 0, 0],
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1],
            [0, 0, 0]
        ],
        Ы: [
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 1, 1, 0, 1],
            [0, 0, 0, 0, 0]
        ],
        Ч: [
            [1, 0, 1],
            [1, 0, 1],
            [0, 1, 1],
            [0, 0, 1],
            [0, 0, 1],
            [0, 0, 0]
        ],
        /*    //////////////////////////////////////////added ru letters end//////////////////////////////////////////    */
        '1': [
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ],
        '2': [
            [0, 1, 1, 0],
            [1, 0, 0, 1],
            [0, 0, 1, 0],
            [0, 1, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0]
        ],
        '3': [
            [1, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        '4': [
            [1, 0, 1, 0],
            [1, 0, 1, 0],
            [1, 0, 1, 0],
            [1, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ],
        '5': [
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        '6': [
            [0, 1, 1, 0],
            [1, 0, 0, 0],
            [1, 1, 1, 0],
            [1, 0, 1, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        '7': [
            [1, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        '8': [
            [1, 1, 1, 0],
            [1, 0, 1, 0],
            [0, 1, 0, 0],
            [1, 0, 1, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        '9': [
            [1, 1, 1, 0],
            [1, 0, 1, 0],
            [1, 1, 1, 0],
            [0, 0, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        '0': [
            [0, 1, 0, 0],
            [1, 0, 1, 0],
            [1, 0, 1, 0],
            [1, 0, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        ' ': [
            [0],
            [0],
            [0],
            [0],
            [0],
            [0]
        ],
        '-': [
            [0, 0],
            [0, 0],
            [1, 1],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        '>': [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
            [0, 1, 0],
            [1, 0, 0],
            [0, 0, 0]
        ],
        '<': [
            [0, 0, 1],
            [0, 1, 0],
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
            [0, 0, 0]
        ],
        'Э': [
            [1, 1, 0],
            [0, 0, 1],
            [1, 1, 1],
            [0, 0, 1],
            [0, 0, 1],
            [1, 1, 0]
        ],
        '!': [
            [1],
            [1],
            [1],
            [0],
            [1],
            [0]
        ],
        ':': [
            [0],
            [0],
            [1],
            [0],
            [1],
            [0]
        ],
        ';': [
            [0],
            [0],
            [1],
            [0],
            [1],
            [1]
        ],
        '.': [
            [0],
            [0],
            [0],
            [0],
            [1],
            [0]
        ],
        ',': [
            [0],
            [0],
            [0],
            [0],
            [1],
            [1]
        ],
        '?': [
            [1, 1, 0],
            [0, 0, 1],
            [0, 1, 0],
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
        ],
        '/': [
            [0, 0, 1],
            [0, 0, 1],
            [0, 1, 0],
            [0, 1, 0],
            [1, 0, 0],
            [1, 0, 0]
        ],
        '(': [
            [0, 1],
            [1, 0],
            [1, 0],
            [1, 0],
            [0, 1],
            [0, 0]
        ],
        ')': [
            [1, 0],
            [0, 1],
            [0, 1],
            [0, 1],
            [1, 0],
            [0, 0]
        ],
        '[': [
            [1, 1],
            [1, 0],
            [1, 0],
            [1, 0],
            [1, 1],
            [0, 0]
        ],
        ']': [
            [1, 1],
            [0, 1],
            [0, 1],
            [0, 1],
            [1, 1],
            [0, 0]
        ],
        '"': [
            [1, 0, 1],
            [1, 0, 1],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ],
        '+': [
            [0, 0, 0],
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0],
            [0, 0, 0]
        ],
        '=': [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 0],
            [0, 0, 0]
        ],
        '#': [
            [0, 1, 0, 1, 0],
            [1, 1, 1, 1, 1],
            [0, 1, 0, 1, 0],
            [1, 1, 1, 1, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0]
        ],
        '\'': [
            [1],
            [1],
            [0],
            [0],
            [0],
            [0]
        ],
        '~': [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0],
            [1, 0, 0, 1, 0, 0, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ],
        '_': [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ],
        '%': [
            [0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
    };

    //tools
    /*
    OWOP custom tools by Unnick, upgraded by JPDLD
    */

    // Custom drawing
    /* CHANGE HERE WITH YOUR DRAWING ============================ */
    const jpland_flag = [ // JPLand flag
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
        [0, 2, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 2, 0],
        [0, 2, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 2, 0],
        [0, 2, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 2, 0],
        [0, 2, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 2, 0],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    /* CHANGE HERE WITH THE COLOR PALETTE OF YOUR DRAWING ======= */
    const jpland_palette = {
        0: [0, 0, 0],
        1: [193, 181, 23],
        2: [235, 224, 86]
    };
    /* ========================================================== */
    if (!localStorage.defaultDrawing) {
        var drawing = jpland_flag;
        var palette = jpland_palette;
    }
    try {
        // Fonts
        var s = document.createElement('script');
        s.src = 'http://boudon.nom.fr/owop/JPDLD_letters.js';
        document.body.appendChild(s);
    } catch (e) {};
    // Utilities
    let onpix = [];
    let pixqueue = [];
    let pps;
    setInterval(() => {
        onpix.forEach(i => i.func());
    }, 0);
    let addfunc = (func, id) => {
        if (onpix.some(i => i.id === id)) throw new Error(`id clash ${id}`);
        onpix.push({
            func: func,
            id: id
        });
    };
    let remfunc = (id) => {
        const idx = onpix.findIndex(i => i.id === id);
        if (idx === -1) return;
        onpix.splice(idx, 1);
    };
    //let move = (x, y) => {
    //    OWOP.net.protocol.lastSentX = x * 16;
    //    OWOP.net.protocol.lastSentY = y * 16;
    //    OWOP.net.connection.send(new Int32Array([x * 16, y * 16, 0]).buffer);
    //};
    setTimeout(() => {
        setInterval(() => {
            //    move(0, 0);
        }, 0)
    }, 2000)
    //let ok2sec = 0;
    //setInterval(() => {
    //    if(ok2sec == true){
    //        ok2sec = false;
    //    } else {
    //        ok2sec = true;
    //    }
    //},2000)
    addfunc(() => {
        //onpix.forEach(i => i.func());
        async function draw() {
            while (pixqueue.length > 0) {
                const pix = pixqueue.pop();
                if (!chekCol(pix.color, OWOP.world.getPixel(...pix.pos))) {
                    move(...pix.pos)
                    if (!OWOP.world.setPixel(...pix.pos, pix.color)) {
                        pixqueue.unshift(pix); //gg?
                        await sleep(0)
                    }
                    let abc = getFree();
                    if (!bots[abc].BOJS.world.setPixel(...pix.pos, pix.color, true, true)) {
                        pixqueue.unshift(pix);
                        await sleep(0)
                    }
                }
            }
        }
        draw();
    });
    /*
    let pixqueue = [];
    let id = setInterval(() => {
        while(pixqueue.length) {
            const pix = pixqueue.pop();
            if(OWOP.world.getPixel(...pix.pos) === null || pix.color[0] !== OWOP.world.getPixel(...pix.pos)[0] || pix.color[1] !== OWOP.world.getPixel(...pix.pos)[1] || pix.color[2] !== OWOP.world.getPixel(...pix.pos)[2])
                OWOP.world.setPixel(...pix.pos, pix.color);
        }
    }, 20);*/

    let eqcolor = (c1, c2) => {
        return c1[0] === c2[0] && c1[1] === c2[1] && c1[2] === c2[2]
    };

    // Default text tool font
    setTimeout(() => {
        if (!localStorage.defaultFont) letters = fonts.small;
        else letters = fonts[localStorage.defaultFont];
    }, 1000)

    // Circle tool
    OWOP.tools.addToolObject(new OWOP.tools.class('circle1', OWOP.cursors.brush, OWOP.fx.player.RECT_SELECT_ALIGNED(1), false, function(tool) {
        let inprog = false;
        let start = [0, 0];
        tool.setEvent('mousedown', (mouse, event) => {
            if (event.button === 1) return;
            start = [mouse.tileX, mouse.tileY];
            inprog = true;
        });
        tool.setEvent('mouseup', (mouse, event) => {
            if (event.button === 1) return;
            if (!inprog) return;
            let end = [mouse.tileX, mouse.tileY];
            let color = event.button === 0 ? OWOP.player.selectedColor : [0xff, 0xff, 0xff];
            const radsqr = Math.pow(start[0] - end[0], 2) + Math.pow(start[1] - end[1], 2);
            let pos = [0, Math.floor(Math.sqrt(radsqr))];
            let i = 0;
            while (pos[0] <= pos[1]) {
                pixqueue.unshift({
                    pos: [start[0] + pos[0], start[1] + pos[1]],
                    color: color
                });
                pixqueue.unshift({
                    pos: [start[0] - pos[0], start[1] + pos[1]],
                    color: color
                });
                pixqueue.unshift({
                    pos: [start[0] + pos[0], start[1] - pos[1]],
                    color: color
                });
                pixqueue.unshift({
                    pos: [start[0] - pos[0], start[1] - pos[1]],
                    color: color
                });
                pixqueue.unshift({
                    pos: [start[0] + pos[1], start[1] + pos[0]],
                    color: color
                });
                pixqueue.unshift({
                    pos: [start[0] - pos[1], start[1] + pos[0]],
                    color: color
                });
                pixqueue.unshift({
                    pos: [start[0] + pos[1], start[1] - pos[0]],
                    color: color
                });
                pixqueue.unshift({
                    pos: [start[0] - pos[1], start[1] - pos[0]],
                    color: color
                });
                if (pos[0] * pos[0] + pos[1] * pos[1] > radsqr) --pos[1];
                ++pos[0];
                ++i;
                if (i > 1000000) {
                    alert('Too large circle !');
                    break;
                }
            }
            inprog = false;
        });
    }));
    var smileytoolcss = (function() {
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(''));
        document.head.appendChild(style);
        return style.sheet;
    })();
    smileytoolcss.addRule('button#tool-paste div', 'background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAYAAACGVs+MAAABsElEQVRIDe1WO05DMRA0KBeiICKio6Og5R6IHgQ9yjmgpUhHh0Ch4CLcATJBY01Wu/68lydRYCnx7Hq9M7vv2UlKI8bF0ek3PiNSpIOhmy3x8+froFzdm5T4/OF2q391fZfr6BXSJcCSkxhCiKGkR0QoQMlyeRvgVY31yM+9kahDBugckWsMCeFTrDGKo5wzDfLw8Xye3R/rdcYAEXFpz06CjeE+AqrVRNxoRdDPubTHewzVDjAxZ4+Aa0PmLgGXy/vM8XR1k2BjxiDWGPi5DuyNLgFI8PL+ls5OFl6u7ENM6+gWYMlZuRJ+Pa7ULOJuAbY62LbtYKSv9gjce6AkGdVphcBWFPZ7Pi9vtQMtlWwFyXvBPR6h9VUFaCWKkUhtYs6WKLK7L6IoUcnPy8u7iKrvANqpLbWYtsYpLgnDWlUAgtBWJiWGH0NbbjHF/Ub6300CcPZ5nPQeAKHaiqPTYWU0CbCVMYkeR/g0DrZdh8+OJgGaSLFtsXbAEkX2oGPISjkjeYQjYvr//jGk0qnmpndgKnLk/RdQPAW8w6d8BO4pACH/Ge+L3Psh2lfuUXl+AJZp1pxOg0LkAAAAAElFTkSuQmCC) !important;background-position: 0 0 !important; background-repeat: no-repeat;', 0);
    //smileytoolcss .addRule('button#tool-paste.selected div','background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAYAAACGVs+MAAAAe0lEQVRIDWNgoAD4Glr/B2EKjGBgJFczusWbzx8lyyySNaFbjO4BUh1CkgMIWQ5zDCmOwOkAYi2DWUqIxuUorA6gtuUwx2FzBBNMcqDoUQeMhsBoCIyGwGgIjIbAaAiMhsBoCIyGwGgIYO0XgJro1O4bYOsTDFRXAMVeAB97G6WtYtlEAAAAAElFTkSuQmCC) !important;background-position: 0 0 !important;', 0);
    // Custom drawing tool
    OWOP.tools.addToolObject(new OWOP.tools.class('customdrav', OWOP.cursors.paste, OWOP.fx.player.RECT_SELECT_ALIGNED(0), false, function(tool) {
        tool.setFxRenderer((fx, ctx) => {
            const X = fx.extra.player.x,
                Y = fx.extra.player.y,
                cX = (1 * Math.floor(X / (1*16)) - OWOP.camera.x) * OWOP.camera.zoom,
                cY = (1 * Math.floor(Y / (1*16)) - OWOP.camera.y) * OWOP.camera.zoom,
                tX = fx.extra.player.tileX,
                tY = fx.extra.player.tileY;
            ctx.globalAlpha = .6;
            ctx.fillStyle = '#000000';
            ctx.fillRect(cX, cY, 18 * OWOP.camera.zoom, 10 * OWOP.camera.zoom);
            ctx.fillStyle = Rainbows;
            let zom = OWOP.camera.zoom;
            ctx.fillRect(1 * zom+cX,1 * zom + cY, 16 * zom, 1 * zom);
            ctx.fillRect(1 * zom+cX,8 * zom + cY, 16 * zom, 1 * zom);
            ctx.fillRect(1 * zom+cX,2 * zom + cY, 1 * zom, 6 * zom);
            ctx.fillRect(3 * zom+cX,3 * zom + cY, 1 * zom, 4 * zom);
            ctx.fillRect(4 * zom+cX,4 * zom + cY, 1 * zom, 1 * zom);
            ctx.fillRect(5 * zom+cX,5 * zom + cY, 1 * zom, 1 * zom);
            ctx.fillRect(6 * zom+cX,3 * zom + cY, 1 * zom, 4 * zom);//N
            ctx.fillRect(8 * zom+cX,3 * zom + cY, 1 * zom, 4 * zom);
            ctx.fillRect(9 * zom+cX,3 * zom + cY, 1 * zom, 1 * zom);
            ctx.fillRect(9 * zom+cX,5 * zom + cY, 1 * zom, 1 * zom);//A
            ctx.fillRect(12 * zom+cX,3 * zom + cY, 1 * zom, 4 * zom);
            ctx.fillRect(10 * zom+cX,3 * zom + cY, 1 * zom, 4 * zom);
            ctx.fillRect(13 * zom+cX,4 * zom + cY, 1 * zom, 1 * zom);
            ctx.fillRect(13 * zom+cX,6 * zom + cY, 1 * zom, 1 * zom);
            ctx.fillRect(14 * zom+cX,4 * zom + cY, 1 * zom, 3 * zom);
            ctx.fillRect(16 * zom+cX,2 * zom + cY, 1 * zom, 6 * zom);

            //ctx.fillRect(cX, cY, 18 * OWOP.camera.zoom, 10 * OWOP.camera.zoom);
            //ctx.fillRect(cX, cY, 18 * OWOP.camera.zoom, 10 * OWOP.camera.zoom);
            //ctx.fillRect(cX, cY, 18 * OWOP.camera.zoom, 10 * OWOP.camera.zoom);

            return true;
        });
        tool.setEvent('mousedown', (mouse, event) => {//
            if (event.button === 1) return;
            start = [mouse.tileX, mouse.tileY];
            for (let y = 0; y < drawing.length; ++y) {
                for (let x = 0; x < drawing[0].length; ++x) {
                    pixqueue.unshift({
                        pos: [x + start[0], y + start[1]],
                        color: palette[drawing[y][x]]
                    });
                }
            }
        });
    }));

    function chekCol(col1, col2) {
        let c00 = col1[0],
            c10 = col1[1],
            c20 = col1[2],
            c01 = col2[0],
            c11 = col2[1],
            c21 = col2[2];
        if (c00 == c01 && c10 == c11 && c20 == c21) return true
    }
    let fillAreaAfterSelected = false;

    function drawFromTo(x1, y1, x2, y2, color, tocol, tocol1) {
        let color1 = OWOP.player.selectedColor;
        let xStart = x1 > x2 ? x2 : x1;
        let yStart = y1 > y2 ? y2 : y1;
        let xEnd = x1 < x2 ? x2 : x1;
        let yEnd = y1 < y2 ? y2 : y1;
        let stop = false;
        if (!gaePast) {
            draw()
        } else {
            for (var x = xStart; x < xEnd; x++) {
                if (stop) break;
                for (var y = yStart; y < yEnd; y++) {
                    if (stop) break;
                    if (!chekCol(color1, OWOP.world.getPixel(x, y))) {
                        if(tocol){
                            if(chekCol(OWOP.world.getPixel(x, y), tocol1)){
                        pixqueue.unshift({
                            pos: [x, y],
                            color: color
                        });
                            }
                        } else {
                            pixqueue.unshift({
                            pos: [x, y],
                            color: color
                        });
                        }
                    }

                }
            }
        }
        async function draw() {
            for (var x = xStart; x < xEnd; x++) {
                if (stop121) break;
                for (var y = yStart; y < yEnd; y++) {
                    if (stop121) break;
                    if (!chekCol(color1, OWOP.world.getPixel(x, y))) {
                        if(tocol){
                            if(chekCol(OWOP.world.getPixel(x, y), tocol1)){
                        let abc = getFree();
                        if (!bots[abc].BOJS.world.setPixel(x, y, color)) {
                            y--
                            await sleep(0)
                        }
                            }
                        } else {
                            let abc = getFree();
                        if (!bots[abc].BOJS.world.setPixel(x, y, color)) {
                            y--
                            await sleep(0)
                        }
                        }
                    }

                }
            }
        }
    }
    let areaa = 1;
    /* OWOP.tool.addToolObject(new OWOP.tool.class('Fill2', OWOP.cursors.fill, OWOP.fx.player.NONE, false, function (tool) {
        //tool.extra.tickAmount = 1000;
        //var queue = [];
        var x = OWOP.mouse.tileX;
        var y = OWOP.mouse.tileY;
        var fillingColor = null;
        var defaultFx = OWOP.fx.player.RECT_SELECT_ALIGNED(1);
        tool.setFxRenderer(function (fx, ctx, time) {
            ctx.globalAlpha = 0.8;
            ctx.strokeStyle = fx.extra.player.htmlRgb;
            var z = OWOP.camera.zoom;
            if (!fillingColor || !fx.extra.isLocalPlayer) {
                defaultFx(fx, ctx, time);
            } else {
                ctx.beginPath();
                //for (var i = 0; i < queue.length; i++) {
                //  ctx.rect((queue[i][0] - OWOP.camera.x) * z, (queue[i][1] - OWOP.camera.y) * z, z, z);
                //}
                ctx.stroke();
            }
        });
        function tick() {
            var eq = function eq(a, b) {
                return a && b && a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
            };
            var check = function check(x, y) {
                if (eq(OWOP.world.getPixel(x, y), fillingColor)) {
                    //queue.unshift([x, y]);
                    return true;
                }
                return false;
            };

            //if (!queue.length || !fillingColor) {
            //  return;
            //}

            var selClr = OWOP.player.selectedColor;
            //var tickAmount = 0;
                //var current = queue.pop();
                //var x = OWOP.mouse.tileX;
                //var y = OWOP.mouse.tileY;
                var thisClr = OWOP.world.getPixel(x, y);
                if (eq(thisClr, fillingColor) && !eq(thisClr, selClr)) {
            //let abc = getFree();
                    pixqueue.unshift({pos: [x, y],color: selClr});
                        //queue.push(current);

                    // diamond check first
                    var top = check(x, y - 1);
                    var bottom = check(x, y + 1);
                    var left = check(x - 1, y);
                    var right = check(x + 1, y);

                    // if corners are not closed by parts of the diamond, then they can be accessed
                    //if (top && left) {
                    //  check(x - 1, y - 1);
                    //}
                    //if (top && right) {
                    //  check(x + 1, y - 1);
                    //}
                    //if (bottom && left) {
                    //  check(x - 1, y + 1);
                    //}
                    //if (bottom && right) {
                    //  check(x + 1, y + 1);
                    //}

                    // Shape diamond, infra not like
                    check(x    , y - 1);
                    check(x - 1, y    );
                    check(x + 1, y    );
                    check(x    , y + 1);
                }
        }
        tool.setEvent('mousedown', function (mouse) {
            if (!(mouse.buttons & 4)) {
                fillingColor = OWOP.world.getPixel(mouse.tileX, mouse.tileY);
                //if (fillingColor) {
                    //queue.push([mouse.tileX, mouse.tileY]);
                    tool.setEvent('tick', tick);
                //}
            }
        });
        tool.setEvent('mouseup deselect', function (mouse) {
            if (!mouse || !(mouse.buttons & 1)) {
                fillingColor = null;
                //queue = [];
                tool.setEvent('tick', null);
            }
        });
    }));*/

    OWOP.tools.addToolObject(new OWOP.tools.class('FastArea', OWOP.cursors.select, OWOP.fx.player.NONE, OWOP.RANK.USER, function(tool) {
        try {
            tool.setFxRenderer(function(fx, ctx, time) {
                if (!fx.extra.isLocalPlayer) return 1;
                let x = fx.extra.player.x;
                let y = fx.extra.player.y;
                let fxx = (Math.floor(x / areaa) - OWOP.camera.x) * OWOP.camera.zoom;
                let fxy = (Math.floor(y / areaa) - OWOP.camera.y) * OWOP.camera.zoom;
                let oldlinew = ctx.lineWidth;
                ctx.lineWidth = 1;
                if (tool.extra.end) {
                    let s = tool.extra.start;
                    let e = tool.extra.end;
                    let x = (s[0] - OWOP.camera.x) * OWOP.camera.zoom + 0.5;
                    let y = (s[1] - OWOP.camera.y) * OWOP.camera.zoom + 0.5;
                    let w = e[0] - s[0];
                    let h = e[1] - s[1];
                    ctx.beginPath();
                    ctx.rect(x, y, w * OWOP.camera.zoom, h * OWOP.camera.zoom);
                    ctx.globalAlpha = 0.25;
                    ctx.strokeStyle = "#FFFFFF";
                    ctx.stroke();
                    ctx.setLineDash([3, 4]);
                    ctx.strokeStyle = "#000000";
                    ctx.stroke();
                    ctx.globalAlpha = 0.25 + Math.sin(time / 320) / 4;
                    ctx.fillStyle = OWOP.renderer.patterns.unloaded;
                    ctx.fill();
                    ctx.setLineDash([]);
                    let oldfont = ctx.font;
                    ctx.font = "16px sans-serif";
                    let txt = (!tool.extra.clicking ? "Right-Click Inside to start. | Right-Click Anywhere to stop. " : "") + '(' + Math.abs(w) + 'x' + Math.abs(h) + ')';
                    let txtx = window.innerWidth >> 1;
                    let txty = window.innerHeight >> 1;
                    txtx = Math.max(x, Math.min(txtx, x + w * OWOP.camera.zoom));
                    txty = Math.max(y, Math.min(txty, y + h * OWOP.camera.zoom));
                    OWOP.drawText = (ctx, str, x, y, centered) => {
                        ctx.strokeStyle = "#000000", ctx.fillStyle = "#FFFFFF", ctx.lineWidth = 2.5, ctx.globalAlpha = 1;
                        if (centered) {
                            x -= ctx.measureText(str).width >> 1;
                        }
                        ctx.strokeText(str, x, y);
                        ctx.globalAlpha = 1;
                        ctx.fillText(str, x, y);
                    };
                    OWOP.drawText(ctx, txt, txtx, txty, true);
                    ctx.font = oldfont;
                    ctx.lineWidth = oldlinew;
                    return 0;
                } else {
                    ctx.beginPath();
                    ctx.moveTo(0, fxy + 0.5);
                    ctx.moveTo(fxx + 0.5, 0);

                    //ctx.lineWidth = 1;
                    ctx.globalAlpha = 0.8;
                    ctx.strokeStyle = "#FFFFFF";
                    ctx.stroke();
                    ctx.setLineDash([3]);
                    ctx.strokeStyle = "#000000";
                    ctx.stroke();

                    ctx.setLineDash([]);
                    ctx.lineWidth = oldlinew;
                    return 1;
                }
            });

            tool.extra.start = null;
            tool.extra.end = null;
            tool.extra.clicking = false;

            tool.setEvent('mousedown', function(mouse, event) {

                let s = tool.extra.start;
                let e = tool.extra.end;
                let isInside = function isInside() {
                    return mouse.tileX >= s[0] && mouse.tileX < e[0] && mouse.tileY >= s[1] && mouse.tileY < e[1];
                };
                if (mouse.buttons === 1 && !tool.extra.end) {
                    tool.extra.start = [Math.floor(mouse.tileX / areaa) * areaa, Math.floor(mouse.tileY / areaa) * areaa];
                    tool.extra.clicking = true;
                    tool.setEvent('mousemove', function(mouse, event) {
                        if (tool.extra.start && mouse.buttons === 1) {
                            tool.extra.end = [Math.floor(mouse.tileX / areaa) * areaa, Math.floor(mouse.tileY / areaa) * areaa];
                            return 1;
                        }
                    });

                    let finish = function finish() {
                        tool.setEvent('mousemove mouseup deselect', null);
                        tool.extra.clicking = false;
                        let s = tool.extra.start;
                        let e = tool.extra.end;

                        if (fillAreaAfterSelected == true) {
                            let color = OWOP.player.selectedColor;
                            drawFromTo(tool.extra.start[0], tool.extra.start[1], tool.extra.end[0], tool.extra.end[1], color, false)
                            tool.extra.start = null;
                            tool.extra.end = null;
                            OWOP.renderer.render(OWOP.renderer.rendertype.FX);
                        }

                        if (e) {
                            if (s[0] === e[0] || s[1] === e[1]) {
                                tool.extra.start = null;
                                tool.extra.end = null;
                            }
                            if (s[0] > e[0]) {
                                let tmp = e[0];
                                e[0] = s[0];
                                s[0] = tmp;
                            }
                            if (s[1] > e[1]) {
                                let tmp = e[1];
                                e[1] = s[1];
                                s[1] = tmp;
                            }
                        }
                        OWOP.renderer.render(OWOP.renderer.rendertype.FX);
                    };

                    tool.setEvent('deselect', finish);
                    tool.setEvent('mouseup', function(mouse, event) {
                        if (!(mouse.buttons & 1)) {
                            finish();
                        }
                    });
                } else if (mouse.buttons === 1 && tool.extra.end) {
                    if (isInside()) {
                        let offx = mouse.tileX;
                        let offy = mouse.tileY;
                        tool.setEvent('mousemove', function(mouse, event) {
                            let dx = mouse.tileX - offx;
                            let dy = mouse.tileY - offy;
                            tool.extra.start = [s[0] + dx, s[1] + dy];
                            tool.extra.end = [e[0] + dx, e[1] + dy];
                        });
                        let end = function end() {
                            tool.setEvent('mouseup deselect mousemove', null);
                        };

                        tool.setEvent('deselect', end);
                        tool.setEvent('mouseup', function(mouse, event) {
                            if (!(mouse.buttons & 1)) {
                                end();
                            };
                        });
                    }
                } else if (mouse.buttons === 2 && tool.extra.end && isInside()) {
                    let color = OWOP.player.selectedColor;
                    drawFromTo(tool.extra.start[0], tool.extra.start[1], tool.extra.end[0], tool.extra.end[1], color)
                } else {
                    tool.extra.start = null;
                    tool.extra.end = null;
                }
            });
        } catch (e) {
            console.log(e)
        }
    }));
    // Text tool
    OWOP.tools.addToolObject(new OWOP.tools.class('text', OWOP.cursors.write, OWOP.fx.player.RECT_SELECT_ALIGNED(1), false, function(tool) {
        tool.setEvent('mousedown', (mouse, event) => {
            if (event.button === 1) return;
            let text = prompt('Enter text here');
            if (text === null) return;
            text = [...text.toUpperCase()];
            let tpos = {
                x: mouse.tileX,
                y: mouse.tileY
            };
            const pos = {
                x: mouse.tileX,
                y: mouse.tileY
            };
            let length = 0;
            for (let i = 0; i < text.length; ++i) {
                const letter = letters[text[i]];
                for (let y = 0; y < 6; ++y) {
                    for (let x = 0; x < letter[0].length; ++x) {
                        pixqueue.unshift({
                            pos: [tpos.x + x, tpos.y + y],
                            color: letter[y][x] ? (event.button === 2 ? OWOP.player.selectedColor : [0, 0, 0]) : [0xff, 0xff, 0xff]
                        });
                    }
                }
                tpos.x += letter[0].length + 1;
                length += letter[0].length + 1;
                if (i < text.length - 1) {
                    for (let y = 0; y < 6; ++y) {
                        pixqueue.unshift({
                            pos: [tpos.x - 1, tpos.y + y],
                            color: [0xff, 0xff, 0xff]
                        });
                    }
                }
            }
            for (let x = -1; x < length; ++x) {
                pixqueue.unshift({
                    pos: [pos.x + x, pos.y - 1],
                    color: [0xff, 0xff, 0xff]
                });
            }
            for (let y = -1; y < 5; ++y) {
                pixqueue.unshift({
                    pos: [pos.x - 1, pos.y + y],
                    color: [0xff, 0xff, 0xff]
                });
                pixqueue.unshift({
                    pos: [pos.x + length - 1, pos.y + y],
                    color: [0xff, 0xff, 0xff]
                });
            }
        });
    }));
    OWOP.world.protection = {
        intervals: {},
        pixels: {}
    };
    OWOP.tools.addToolObject(new OWOP.tools.class("CText Bot", OWOP.cursors.write, OWOP.fx.player.NONE, OWOP.RANK.USER, tool => {
        let xPos = null;
        let yPos = null;
        let fonts = {};
        let font = null;
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
        chars += "¡¢£€¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ";
        chars += "ĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽž";
        tool.setFxRenderer((fx, ctx, time) => {
            let x = fx.extra.player.x;
            let y = fx.extra.player.y;
            if (xPos !== null && yPos !== null) {
                x = xPos * 16;
                y = yPos * 16;
            }
            let fxx = (Math.floor(x / 16) - OWOP.camera.x) * OWOP.camera.zoom;
            let fxy = (Math.floor(y / 16) - OWOP.camera.y) * OWOP.camera.zoom;
            ctx.globalAlpha = 0.8;
            ctx.strokeStyle = fx.extra.player.htmlRgb;
            ctx.strokeRect(fxx, fxy, OWOP.camera.zoom, OWOP.camera.zoom * 12);
            return 0;
        });
        tool.setEvent("select", () => {
            let id = 1234;
            let xhttp = new XMLHttpRequest();
            xhttp.addEventListener("load", () => {
                let source = xhttp.responseXML.body.children[2].innerHTML;
                let data = JSON.parse(source.match(/loadData\('(.+)'\)/)[1]);
                let meta = source.match(/drawSample\('',([0-9]+),(-?[0-9]+)\)/);

                data.letterspace = parseInt(64);
                data.monospacewidth = parseInt(-1);

                fonts[id] = data;
                font = id;
            });
            xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://www.pentacom.jp/pentacom/bitfontmaker2/gallery/?id=" + 5173);
            xhttp.responseType = "document";
            xhttp.send();
        });
        tool.setEvent("deselect", () => {
            font = null;
        });

        tool.setEvent("mousedown mousemove", (mouse, event) => {
            if (mouse.buttons === 1) {
                xPos = mouse.tileX;
                yPos = mouse.tileY;
            }
        });
        tool.setEvent("keydown", () => {
            return true;
        });
        tool.setEvent("keyup", () => {
            return true;
        });

        window.addEventListener("keypress", event => {
            if (font === null || xPos === null || yPos === null || ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;

            let f = fonts[font];
            let letterSpacing = (f.letterspace / 64 | 0) - 1;
            let isMono = f.monospacewidth !== -1;

            if (event.which == 32) {
                xPos += isMono ? f.monospacewidth : 4 + letterSpacing;
                return;
            }

            let char = f[event.which];
            if (!char) return;

            let width = 0;
            for (let y = 0; y < 16; y++)
                for (let x = 1; x < 15; x++) {
                    if (char[y] & (1 << x) && x > width) width = x;
                    //pixqueue.unshift({pos: [xPos + x, yPos + y],color: [255,255,255]});
                }

            let color = OWOP.player.selectedColor;
            for (let y = 0; y < 16; y++)
                for (let x = 1; x < width + 1; x++) {
                    if (!(char[y] & (1 << x))) {
                        pixqueue.unshift({
                            pos: [xPos + x, yPos + y],
                            color: [255, 255, 255]
                        });
                    } else {
                        pixqueue.unshift({
                            pos: [xPos + x, yPos + y],
                            color: [0, 0, 0]
                        });
                    }
                    continue;
                }

            xPos += isMono ? f.monospacewidth : width + letterSpacing;
        });
    }));
    OWOP.tools.addToolObject(new OWOP.tools.class("Bot Protection", OWOP.cursors.shield, OWOP.fx.player.RECT_SELECT_ALIGNED(16), OWOP.RANK.USER, tool => {
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
                    if (chunk) return false;
                    for (let y = 0; y < 16; y++)
                        for (let x = 0; x < 16; x++) {
                            OWOP.world.protection.pixels[`${X + x},${Y + y}`] = OWOP.world.getPixel(X + x, Y + y);
                            OWOP.world.protection.intervals[`${X + x},${Y + y}`] = setInterval(() => {
                                if (!chekCol(OWOP.world.getPixel(X + x, Y + y), OWOP.world.protection.pixels[`${X + x},${Y + y}`])) {
                                    pixqueue.unshift({
                                        pos: [X + x, Y + y],
                                        color: OWOP.world.protection.pixels[`${X + x},${Y + y}`]
                                    });
                                    let abc = getFree();
                                    bots[abc].BOJS.world.setPixel(X + x, Y + y, OWOP.world.protection.pixels[`${X + x},${Y + y}`]);
                                }
                            }, 5000);
                        }
                    return true;
                    break;
                case 2:
                    if (!chunk) return false;
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
    /*OWOP.tool.addToolObject(new OWOP.tool.class('NEW TIMER', OWOP.cursors.write, OWOP.fx.player.RECT_SELECT_ALIGNED(1), false, function(tool) {
        // элемент canvas, контекст и разделитель
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        let XX;
        let YY;
        let divided = ':';
        // размеры полотна и заливка
        canvas.width = 100;
        canvas.height = 20;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // стили текста (цифр)
        ctx.font = '14px Arial'; // размер и шрифт
        ctx.textBaseline = 'middle'; // по центру, относительно top bottom
        ctx.textAlign = 'center'; // по центру, относительно left right
        //clockShow(); // поехали!
        // функция отрисовки кадра
        function clockShow() {
            let now = new Date();
            // условия для ведущего нуля и двоеточия
            //if(hour < 10) hour = '0' + hour;
            //if(min < 10) min = '0' + min;
            divided === ':' ? divided = ' ' : divided = ':';
            //ctx.clearRect(20, 20, canvas.width - 40, canvas.height - 40); // очистка
            ctx.fillStyle = '#000'; // цвет заливки
            ctx.fillRect(20, 20, canvas.width - 40, canvas.height - 40); // заливка
            ctx.fillStyle = '#00FD00'; // цвет текста
            ctx.fillText(now.toLocaleTimeString(), canvas.width / 2, canvas.height / 2 + 1); // вывод текста
            // рамка
            ctx.strokeStyle = '#808080'; // цвет
            ctx.lineWidth = 2; // толщина
            ctx.strokeRect(3, 3, canvas.width - 6, canvas.height - 6);
            ctx.imageSmoothingEnabled = false;
            //ctx.fontSmooth = false;
        }
        tool.setEvent('mousedown', (mouse, event) => {
            if (event.button == 0) {
                clockShow();
                XX = OWOP.mouse.tileX;
                YY = OWOP.mouse.tileY;
                stop = true;

                function Timer() {
                    if (stop121) return;
                    setTimeout(() => {
                        paste(ctx.getImageData(0, 0, canvas.width, canvas.height), [XX, YY]);
                    }, 500)
                    setTimeout(() => {
                        clockShow();
                    }, 500);
                    setTimeout(() => {
                        Timer()
                    }, 500)
                }
                Timer()
            }
        });

        function lerp(v0, v1, r) {
            return v0 * (1 - r) + v1 * r;
        }
        let paste = (imgdata, pos) => {
            async function pastir() {
                for (let y = 0; y < imgdata.height; ++y) {
                    if (stop121) break;
                    for (let x = 0; x < imgdata.width; ++x) {
                        if (stop121) break;
                        const idx = (x + y * imgdata.width) << 2;
                        let alpha = imgdata.data[idx + 3] / 255;
                        let pixel = OWOP.world.getPixel(x + pos[0], y + pos[1]);
                        let color = [
                            lerp(pixel[0], imgdata.data[idx], alpha),
                            lerp(pixel[1], imgdata.data[idx + 1], alpha),
                            lerp(pixel[2], imgdata.data[idx + 2], alpha)
                        ];
                        //const color = [imgdata.data[idx], imgdata.data[idx+1], imgdata.data[idx+2]];
                        if (gaePast) {
                            pixqueue.unshift({
                                pos: [x + pos[0], y + pos[1]],
                                color: color
                            });
                        } else {
                            if (!chekCol(color, OWOP.world.getPixel(x + pos[0], y + pos[1]))) { // && OWOP.world.getPixel(x,y)[1] != color[1] && OWOP.world.getPixel(x,y)[2] != color[2]){
                                let abc = getFree();
                                bots[abc].BOJS.world.setPixel(x + pos[0], y + pos[1], color)
                                //await sleep(0)
                            }
                        }
                    }

                }
                stop = false;
            }
            pastir()
        }
    }));
    */
    /*    //////////////////////////////////////////dont use this shit//////////////////////////////////////////

    OWOP.tool.addToolObject(new OWOP.tool.class('timer', OWOP.cursors.write, OWOP.fx.player.RECT_SELECT_ALIGNED(1), false, function(tool) {
        tool.setEvent('mousedown', (mouse, event) => {
            let X = mouse.tileX;
            let Y = mouse.tileY;
            if (event.button === 1) return;
            setInterval(() => {
                let now = new Date();
                texting(now.toLocaleTimeString())
            }, 500)

            function texting(text) {
                //pps = [0, 100000000, 100, 1000000][OWOP.player.rank]
                text = [...text.toUpperCase()];
                let tpos = {
                    x: X,
                    y: Y
                };
                const pos = {
                    x: X,
                    y: Y
                };
                let length = 0;
                for (let i = 0; i < text.length; ++i) {
                    const letter = letters[text[i]];
                    for (let y = 0; y < 6; ++y) {
                        for (let x = 0; x < letter[0].length; ++x) {
                            pixqueue.unshift({
                                pos: [tpos.x + x, tpos.y + y],
                                color: letter[y][x] ? (event.button === 2 ? OWOP.player.selectedColor : [0, 0, 0]) : [0xff, 0xff, 0xff]
                            });
                        }
                    }
                    tpos.x += letter[0].length + 1;
                    length += letter[0].length + 1;
                    if (i < text.length - 1) {
                        for (let y = 0; y < 6; ++y) {
                            pixqueue.unshift({
                                pos: [tpos.x - 1, tpos.y + y],
                                color: [0xff, 0xff, 0xff]
                            });
                        }
                    }
                }
                for (let x = -1; x < length; ++x) {
                    pixqueue.unshift({
                        pos: [pos.x + x, pos.y - 1],
                        color: [0xff, 0xff, 0xff]
                    });
                }
                for (let y = -1; y < 5; ++y) {
                    pixqueue.unshift({
                        pos: [pos.x - 1, pos.y + y],
                        color: [0xff, 0xff, 0xff]
                    });
                    pixqueue.unshift({
                        pos: [pos.x + length - 1, pos.y + y],
                        color: [0xff, 0xff, 0xff]
                    });
                }
            }
        });
    }));
    */
    /*    //////////////////////////////////////////dont use this shit//////////////////////////////////////////    */
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    let last = 0;
    const getFree = () => {
        let b = bots.length;
        if (b === 0) return -1;
        if (last >= b) last = 0;
        return last++;
    };

    function pixColor(img, X, Y) {
        var abab = img.getImageData(X, Y, 1, 1).data
        return [abab[0], abab[1], abab[2]]
    }
    let one2sec = false;
    //setInterval(() => {
    //    if(one2sec){
    //        one2sec = false;
    //    } else {
    //        one2sec = true;
    //    }
    //},2000)
    let anaga;
    let anaga1;
    let xX;
    let yY;
    OWOP.tools.addToolObject(new OWOP.tools.class('fake past xd2', OWOP.cursors.cursor, OWOP.fx.player.RECT_SELECT_ALIGNED(1), false, function(tool) {
        let stop = false;

        let c = document.createElement('canvas');
        let ctx = c.getContext('2d');
        const misc = OWOP.misc;
        const camera = OWOP.camera;
        let anage;
        let anage1;
        let XX;
        let YY;
        tool.setFxRenderer(function(fx, ctx, time) {
            let zoom = camera.zoom;
            if (stop) {
                let fxx = Math.floor(XX << 4 / 16) - camera.x;
                let fxy = Math.floor(YY << 4 / 16) - camera.y;

                if (fx.extra.isLocalPlayer && c.width && c.height) {
                    ctx.globalAlpha = 0.5;
                    ctx.strokeStyle = "#000000";
                    ctx.scale(zoom, zoom);
                    ctx.drawImage(c, fxx, fxy);
                    ctx.scale(1 / zoom, 1 / zoom);
                    ctx.globalAlpha = 0.8;
                    ctx.strokeRect(fxx * zoom, fxy * zoom, c.width * zoom, c.height * zoom);
                    return 0;
                }
            } else if (!stop) {
                let fxx = Math.floor(OWOP.mouse.tileX << 4 / 16) - camera.x;
                let fxy = Math.floor(OWOP.mouse.tileY << 4 / 16) - camera.y;
                if (fx.extra.isLocalPlayer && c.width && c.height) {
                    ctx.globalAlpha = 0.5;
                    ctx.strokeStyle = "#000000";
                    ctx.scale(zoom, zoom);
                    ctx.drawImage(c, fxx, fxy);
                    ctx.scale(1 / zoom, 1 / zoom);
                    ctx.globalAlpha = 0.8;
                    ctx.strokeRect(fxx * zoom, fxy * zoom, c.width * zoom, c.height * zoom);
                    return 0;
                }
            }
        });
        tool.setEvent("select", function() {
            //stop = false;
            if (!stop) {
                let fileinp = document.createElement('input');
                fileinp.type = 'file';
                fileinp.accept = 'image/*';
                fileinp.click();
                fileinp.addEventListener('change', () => {
                    if (fileinp.files.length === 0) return;
                    const file = fileinp.files[0];
                    let img = new Image;
                    anaga1 = ctx;
                    anage1 = ctx;
                    img.onload = () => {
                        c.height = img.height;
                        c.width = img.width;
                        //ctx.fillStyle = "#fff";
                        //ctx.fillRect(0, 0, img.width, img.height);
                        ctx.getImageData(0, 0, img.width, img.height)
                        ctx.drawImage(img, 0, 0);
                        anaga = img;
                        anage = img;
                        URL.revokeObjectURL(img.src);
                    };
                    img.src = URL.createObjectURL(file);
                });
            }
        })
        let mdown = false;
        tool.setEvent('mousedown mousemove', (mouse, event) => {
            if (!stop) {
                if (event.button != 0) {
                    if (stop) {
                        stop = false;
                        stop121 = true; //
                        setTimeout(() => {
                            stop121 = false;
                        }, 1000)
                    }
                    stop = true;
                    XX = OWOP.mouse.tileX
                    YY = OWOP.mouse.tileY
                    xX = OWOP.mouse.tileX
                    yY = OWOP.mouse.tileY
                    //stop = false;
                    //paste(ctx.getImageData(0, 0, anage.width, anage.height), [OWOP.mouse.tileX, OWOP.mouse.tileY]);
                }
            } else {
                if (event.button != 0) {
                    if (stop) {
                        stop = false;
                        stop121 = true; //
                        setTimeout(() => {
                            stop121 = false;
                        }, 1000)
                    }
                }
            }
        })
        document.addEventListener('mousedown', (e) => {
            //if (event.button != 0) {
            //    OWOP.emit(6666695-6666666, OWOP.mouse.tileX, OWOP.mouse.tileY);
            //} else {
            mdown = true;
            //}
        })
        document.addEventListener('mouseup', (e) => {
            //if (event.button != 0) {
            //    OWOP.emit(6666695-6666666, OWOP.mouse.tileX, OWOP.mouse.tileY);
            //} else {
            mdown = false;
            //}
        })
        setInterval(() => {
            if (stop) {
                if (mdown) OWOP.world.setPixel(OWOP.mouse.tileX, OWOP.mouse.tileY, OWOP.player.selectedColor)
            }
        }, 0)
        document.addEventListener('keydown', (e) => {
            if (e.keyCode == 78) {
                setTimeout(() => {
                    OWOP.player.selectedColor = pixColor(anage1, OWOP.mouse.tileX - XX, OWOP.mouse.tileY - YY)
                }, 100)
            }
        })
    }))
    OWOP.tools.addToolObject(new OWOP.tools.class('fake past xd', OWOP.cursors.cursor, OWOP.fx.player.RECT_SELECT_ALIGNED(1), false, function(tool) {
        let stop = false;

        let c = document.createElement('canvas');
        let ctx = c.getContext('2d');
        const misc = OWOP.misc;
        const camera = OWOP.camera;
        let anage;
        let anage1;
        let XX;
        let YY;
        tool.setFxRenderer(function(fx, ctx, time) {
            let zoom = camera.zoom;
            if (stop) {
                let fxx = Math.floor(XX << 4 / 16) - camera.x;
                let fxy = Math.floor(YY << 4 / 16) - camera.y;

                if (fx.extra.isLocalPlayer && c.width && c.height) {
                    ctx.globalAlpha = 0.5;
                    ctx.strokeStyle = "#000000";
                    ctx.scale(zoom, zoom);
                    ctx.drawImage(c, fxx, fxy);
                    ctx.scale(1 / zoom, 1 / zoom);
                    ctx.globalAlpha = 0.8;
                    ctx.strokeRect(fxx * zoom, fxy * zoom, c.width * zoom, c.height * zoom);
                    return 0;
                }
            } else if (!stop) {
                let fxx = Math.floor(OWOP.mouse.tileX << 4 / 16) - camera.x;
                let fxy = Math.floor(OWOP.mouse.tileY << 4 / 16) - camera.y;
                if (fx.extra.isLocalPlayer && c.width && c.height) {
                    ctx.globalAlpha = 0.5;
                    ctx.strokeStyle = "#000000";
                    ctx.scale(zoom, zoom);
                    ctx.drawImage(c, fxx, fxy);
                    ctx.scale(1 / zoom, 1 / zoom);
                    ctx.globalAlpha = 0.8;
                    ctx.strokeRect(fxx * zoom, fxy * zoom, c.width * zoom, c.height * zoom);
                    return 0;
                }
            }
        });
        tool.setEvent("select", function() {
            //stop = false;
            if (!stop) {
                let fileinp = document.createElement('input');
                fileinp.type = 'file';
                fileinp.accept = 'image/*';
                fileinp.click();
                fileinp.addEventListener('change', () => {
                    if (fileinp.files.length === 0) return;
                    const file = fileinp.files[0];
                    let img = new Image;
                    anaga1 = ctx;
                    anage1 = ctx;
                    img.onload = () => {
                        c.height = img.height;
                        c.width = img.width;
                        //ctx.fillStyle = "#fff";
                        //ctx.fillRect(0, 0, img.width, img.height);
                        ctx.getImageData(0, 0, img.width, img.height)
                        ctx.drawImage(img, 0, 0);
                        anaga = img;
                        anage = img;
                        URL.revokeObjectURL(img.src);
                    };
                    img.src = URL.createObjectURL(file);
                });
            }
        })
        let mdown = false;
        tool.setEvent('mousedown mousemove', (mouse, event) => {
            if (!stop) {
                if (event.button != 0) {
                    if (stop) {
                        stop = false;
                        stop121 = true; //
                        setTimeout(() => {
                            stop121 = false;
                        }, 1000)
                    }
                    stop = true;
                    XX = OWOP.mouse.tileX
                    YY = OWOP.mouse.tileY
                    xX = OWOP.mouse.tileX
                    yY = OWOP.mouse.tileY
                    //stop = false;
                    //paste(ctx.getImageData(0, 0, anage.width, anage.height), [OWOP.mouse.tileX, OWOP.mouse.tileY]);
                }
            } else {
                if (event.button != 0) {
                    if (stop) {
                        stop = false;
                        stop121 = true; //
                        setTimeout(() => {
                            stop121 = false;
                        }, 1000)
                    }
                }
            }
        })
        document.addEventListener('mousedown', (e) => {
            //if (event.button != 0) {
            //    OWOP.emit(6666695-6666666, OWOP.mouse.tileX, OWOP.mouse.tileY);
            //} else {
            mdown = true;
            //}
        })
        document.addEventListener('mouseup', (e) => {
            //if (event.button != 0) {
            //    OWOP.emit(6666695-6666666, OWOP.mouse.tileX, OWOP.mouse.tileY);
            //} else {
            mdown = false;
            //}
        })
        setInterval(() => {
            if (stop) {
                if (mdown) { OWOP.world.setPixel(OWOP.mouse.tileX, OWOP.mouse.tileY, pixColor(anage1, OWOP.mouse.tileX - XX, OWOP.mouse.tileY - YY))
                OWOP.world.setPixel(OWOP.mouse.tileX + 1, OWOP.mouse.tileY, pixColor(anage1, OWOP.mouse.tileX + 1 - XX, OWOP.mouse.tileY - YY))
                OWOP.world.setPixel(OWOP.mouse.tileX + 1, OWOP.mouse.tileX + 1, pixColor(anage1, OWOP.mouse.tileX + 1 - XX, OWOP.mouse.tileY + 1 - YY))
                OWOP.world.setPixel(OWOP.mouse.tileX, OWOP.mouse.tileY + 1, pixColor(anage1, OWOP.mouse.tileX - XX, OWOP.mouse.tileY + 1 - YY))};

            }
        }, 0)
        document.addEventListener('keydown', (e) => {
            if (e.keyCode == 78) {
                setTimeout(() => {
                    OWOP.player.selectedColor = pixColor(anage1, OWOP.mouse.tileX - XX, OWOP.mouse.tileY - YY)
                }, 100)
            }
        })
    }))
    let toot;

     OWOP.tools.addToolObject(new OWOP.tools.class('Checker Fill', OWOP.cursors.wand, OWOP.fx.player.NONE, OWOP.RANK.USER, function (tool) {
    tool.extra.tickAmount = 32;
    var queue = [];
    var fillingColor = null;
    //var defaultFx = OWOP.fx.player.RECT_SELECT_ALIGNED(1);
    //tool.setFxRenderer(function (fx, ctx, time) {
    //  ctx.globalAlpha = 0.8;
    //  ctx.strokeStyle = fx.extra.player.htmlRgb;
    //  var z = OWOP.camera.zoom;
    //  if (!fillingColor || !fx.extra.isLocalPlayer)
    //      defaultFx(fx, ctx, time);
    //  else {
    //      ctx.beginPath();
    //      for (var i = 0; i < queue.length; i++)
    //          ctx.rect((queue[i][0] - OWOP.camera.x) * z, (queue[i][1] - OWOP.camera.y) * z, z, z);
    //      ctx.stroke();
    //  }
    //});
    function tick() {
        var eq = function eq(a, b) {
            return a && b && a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
        };
        var slientCheck = function slientCheck(x, y) {
            return !eq(OWOP.world.getPixel(x, y), [1,0,0]);
        }
        var check = function check(x, y) {
            if (slientCheck(x, y)) {
                queue.unshift([x, y]);
                return true;
            }
            return false;
        };

        if (!queue.length || !fillingColor) {
            return;
        }

        var selClr = OWOP.player.selectedColor;
        var painted = 0;
        var tickAmount = tool.extra.tickAmount;
        for (var painted = 0; painted < tickAmount && queue.length; painted++) {
            var current = queue.pop();
            var x = current[0];
            var y = current[1];
            var thisClr = OWOP.world.getPixel(x, y);
            if (!eq(thisClr, [1,0,0]) && !eq(thisClr, selClr)) {
                //move(x,y);
                if (!OWOP.world.setPixel(x, y, selClr)) {
                    queue.push(current);
                    break;
                }

                var top = slientCheck(x, y - 1);
                var bottom = slientCheck(x, y + 1);
                var left = slientCheck(x - 1, y);
                var right = slientCheck(x + 1, y);

                  if (right) {
                    check(x + 6, y);
                  }
                  if (bottom && right) {
                    check(x + 6, y + 6);
                  }
                  if (bottom) {
                    check(x, y + 6);
                  }
                  if (bottom && left) {
                    check(x - 6, y + 6);
                  }
                  if (left) {
                    check(x - 6, y);
                  }
                  if (top && left) {
                    check(x - 6, y - 6);
                  }
                  if (top) {
                    check(x, y - 6);
                  }
                  if (top && right) {
                    check(x + 6, y - 6);
                  }

            }
        }
    }
    let trye = false;
        tool.setEvent('mousedown', function(mouse) {
            if (trye == false) {
                if (!(mouse.buttons & 4)) {
                    trye = true;
                    fillingColor = OWOP.world.getPixel(mouse.tileX, mouse.tileY);
                    //fillingColor2 = OWOP.world.getPixel(mouse.tileX, mouse.tileY);
                    if (fillingColor) {
                        //queue1.push([mouse.tileX + 1, mouse.tileY]);
                        queue.push([mouse.tileX, mouse.tileY]);
                        tool.setEvent('tick', tick);

                    }
                }
            } else {
                if (!mouse || !(mouse.buttons & 1)) {
                    trye = false;
                    fillingColor = null;
                    //fillingColor2 = null;
                    queue = [];
                    //queue1 = [];
                    tool.setEvent('tick', null);
                }
            }
        });
}));
    OWOP.tools.addToolObject(new OWOP.tools.class('fix Fill', OWOP.cursors.fill, OWOP.fx.player.NONE, false, function(tool) {
        toot = tool;
        tool.extra.tickAmount = 10000;
        tool.extra.tickAmount2 = 10000;
        var queue = [];
        var queue1 = [];
        var fillingColor = null;
        var fillingColor2 = null;

        function tick2() {
            var eq = function eq(a, b) {
                return a && b && a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
            };
            var check = function check(x, y) {
                if (!eq(OWOP.world.getPixel(x, y), [0,0,0])) {
                    queue.unshift([x, y]);
                    return true;
                }
                return false;
            };

            if (!queue.length || !fillingColor) {
                return;
            }

            var selClr = OWOP.player.selectedColor;
            var painted = 0;
            var tickAmount = tool.extra.tickAmount;
            function pixset(abc,x,y,col){
                bots[abc].BOJS.world.move(0, 0)
                if (!bots[abc].BOJS.world.setPixel(x, y, selClr)) {
                bots[abc].BOJS.world.move(0, 0)
                    return false;
                } else {
                bots[abc].BOJS.world.move(0, 0)
                    return true;
                }
                bots[abc].BOJS.world.move(0, 0)
            }
            for (var painted = 0; painted < tickAmount && queue.length; painted++) {
                    let current = queue.pop();
                    let x = current[0];
                    let y = current[1];
                    let thisClr = OWOP.world.getPixel(x, y);
                if (!eq(thisClr, [0,0,0]) && !eq(thisClr, selClr)) {
                   // move(x,y);
                    if (!OWOP.world.setPixel(x, y, selClr)) {
                        queue.push(current);
                        break;
                    }

                    //xx
                    //xx

                    // diamond check first
                    // diamond check first
                    var top = check(x, y - 1);
                    var bottom = check(x, y + 1);
                    var left = check(x - 1, y);
                    var right = check(x + 1, y);

                    // if corners are not closed by parts of the diamond, then they can be accessed
                    if (top && left) {
                        check(x - 1, y - 1);
                    }
                    if (top && right) {
                        check(x + 1, y - 1);
                    }
                    if (bottom && left) {
                        check(x - 1, y + 1);
                    }
                    if (bottom && right) {
                        check(x + 1, y + 1);
                    }
                    // Shape diamond, infra not like
                    /*check(x    , y - 1);
     check(x - 1, y    );
     check(x + 1, y    );
     check(x    , y + 1);*/
                }
            }
        }
        function tick() {
            tick2()
        }
        let trye = false;
        toot.setEvent('mousedown', function(mouse) {
            if (trye == false) {
                if (!(mouse.buttons & 4)) {
                    trye = true;
                    fillingColor = OWOP.world.getPixel(mouse.tileX, mouse.tileY);
                    fillingColor2 = OWOP.world.getPixel(mouse.tileX, mouse.tileY);
                    if (fillingColor && fillingColor2) {
                        //queue1.push([mouse.tileX + 1, mouse.tileY]);
                        queue.push([mouse.tileX, mouse.tileY]);
                        toot.setEvent('tick', tick);

                    }
                }
            } else {
                if (!mouse || !(mouse.buttons & 1)) {
                    trye = false;
                    fillingColor = null;
                    fillingColor2 = null;
                    queue = [];
                    queue1 = [];
                    toot.setEvent('tick', null);
                }
            }
        });
}));//w(new b("Cursor",s.cursors.cursor,f.PLAYERFX.RECT_SELECT_ALIGNED(1),i.RANK.USER,function(e) {

    OWOP.tools.addToolObject(new OWOP.tools.class('paste', OWOP.cursors.paste, OWOP.fx.player.RECT_SELECT_ALIGNED(1), false, function(tool) {
        let c = document.createElement('canvas');
        let ctx = c.getContext('2d');
        const misc = OWOP.misc;
        const camera = OWOP.camera;
        let anage;
        let anage1;
        let XX;
        let YY;
        tool.setFxRenderer(function(fx, ctx, time) {
            let zoom = camera.zoom;
            if (stop) {
                let fxx = Math.floor(XX << 4 / 16) - camera.x;
                let fxy = Math.floor(YY << 4 / 16) - camera.y;

                if (fx.extra.isLocalPlayer && c.width && c.height) {
                    ctx.globalAlpha = 0.5;
                    ctx.strokeStyle = "#000000";
                    ctx.scale(zoom, zoom);
                    ctx.drawImage(c, fxx, fxy);
                    ctx.scale(1 / zoom, 1 / zoom);
                    ctx.globalAlpha = 0.8;
                    ctx.strokeRect(fxx * zoom, fxy * zoom, c.width * zoom, c.height * zoom);
                    return 0;
                }
            } else if (!stop) {
                let fxx = Math.floor(OWOP.mouse.tileX << 4 / 16) - camera.x;
                let fxy = Math.floor(OWOP.mouse.tileY << 4 / 16) - camera.y;
                if (fx.extra.isLocalPlayer && c.width && c.height) {
                    ctx.globalAlpha = 0.5;
                    ctx.strokeStyle = "#000000";
                    ctx.scale(zoom, zoom);
                    ctx.drawImage(c, fxx, fxy);
                    ctx.scale(1 / zoom, 1 / zoom);
                    ctx.globalAlpha = 0.8;
                    ctx.strokeRect(fxx * zoom, fxy * zoom, c.width * zoom, c.height * zoom);
                    return 0;
                }
            }
        });
        tool.setEvent("select", function() {
            //stop = false;
            if (!stop) {
                let fileinp = document.createElement('input');
                fileinp.type = 'file';
                fileinp.accept = 'image/*';
                fileinp.click();
                fileinp.addEventListener('change', () => {
                    if (fileinp.files.length === 0) return;
                    const file = fileinp.files[0];
                    let img = new Image;
                    anage1 = ctx;
                    img.onload = () => {
                        c.height = img.height;
                        c.width = img.width;
                        //ctx.fillStyle = "#fff";
                        //ctx.fillRect(0, 0, img.width, img.height);
                        ctx.getImageData(0, 0, img.width, img.height)
                        ctx.drawImage(img, 0, 0);
                        anage = img;
                        URL.revokeObjectURL(img.src);
                    };
                    img.src = URL.createObjectURL(file);
                });
            }
        })
        tool.setEvent('mousedown', (mouse, event) => {
            if (event.button == 0) {
                stop = true;
                paste(ctx.getImageData(0, 0, anage.width, anage.height), [OWOP.mouse.tileX, OWOP.mouse.tileY]);
            } else {
                stop = false;
                stop121 = true;
                setTimeout(() => {
                    stop121 = false;
                }, 1000)
                //stop = false;
            }
        });

        function lerp(v0, v1, r) {
            return v0 * (1 - r) + v1 * r;
        }
        //let jpgPaster = false;
        let paste = (imgdata, pos) => {
            let pixelStack = []
            XX = pos[0]
            YY = pos[1]
            if (Paster == 0) {
                async function pastir() {
                    for (let y = 0; y < imgdata.height; ++y) {
                        if (stop121) break;
                        for (let x = 0; x < imgdata.width; ++x) {
                            if (stop121) break;
                            const idx = (x + y * imgdata.width) << 2;
                            let alpha = imgdata.data[idx + 3] / 255;
                            let pixel = OWOP.world.getPixel(x + pos[0], y + pos[1]);
                            let color = [
                                lerp(pixel[0], imgdata.data[idx], alpha),
                                lerp(pixel[1], imgdata.data[idx + 1], alpha),
                                lerp(pixel[2], imgdata.data[idx + 2], alpha)
                            ];
                            if (gaePast) {
                                pixqueue.unshift({
                                    pos: [x + pos[0], y + pos[1]],
                                    color: color
                                });
                            } else {
                                if (!chekCol(color, OWOP.world.getPixel(x + pos[0], y + pos[1]))) { // && OWOP.world.getPixel(x,y)[1] != color[1] && OWOP.world.getPixel(x,y)[2] != color[2]){
                                    let abc = getFree();
                                    if (!bots[abc].BOJS.world.setPixel(x + pos[0], y + pos[1], color)) {
                                        x--
                                        await sleep(0)
                                    }
                                }
                            }
                        }

                    }
                    stop = false;
                }
                pastir()
            } else if (Paster == 1) {
                function getRandomArbitrary(min, max) {
                    return Math.random() * (max - min) + min;
                }
                async function pastePick() {
                    function rgb2int(rgb) {
                        return ((rgb[0] & 0x0ff) << 16) | ((rgb[1] & 0x0ff) << 8) | (rgb[2] & 0x0ff)
                    }
                    const colors = new Set();
                    mainLoop:
                        for (let X = 0; X < imgdata.width; X++) {
                            for (let Y = 0; Y < imgdata.height; Y++) {
                                if (stop121) break mainLoop;
                                const col = rgb2int(pixColor(anage1, X, Y));
                                colors.add(col);
                            }
                        }
                    console.log(colors);
                    const colorsArr = [...colors];
                    mainLoop2:
                        for (let color of colorsArr) {
                            for (let X = 0; X < imgdata.width; X++) {
                                for (let Y = 0; Y < imgdata.height; Y++) {
                                    const rgbCol = pixColor(anage1, X, Y);
                                    const col = rgb2int(rgbCol);
                                    if (col !== color) continue;
                                    while (true) {
                                        if (stop121) break mainLoop2;
                                        if (gaePast) {
                                            pixqueue.unshift({
                                                pos: [XX + X, YY + Y],
                                                color: pixColor(anage1, X, Y)
                                            });
                                        } else {
                                            if (!chekCol(pixColor(anage1, X, Y), OWOP.world.getPixel(XX + X, YY + Y))) {
                                                let abc = getFree();
                                                //move(XX + X + 0.5, YY + Y + 0.5)
                                                if (!bots[abc].BOJS.world.setPixel(XX + X, YY + Y, pixColor(anage1, X, Y)) && !OWOP.world.setPixel(XX + X, YY + Y, pixColor(anage1, X, Y))){//&& !move(XX + X + 0.5, YY + Y + 0.5)) {
                                                    //move(XX + X + 0.5, YY + Y + 0.5)
                                                    await sleep(getRandomArbitrary(250, 1500))
                                                    continue;
                                                }
                                            }
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                }
                pastePick();
            } else if (Paster == 2) {
                async function pastePick() {
                    if(gaePast){
                    for (let Y = 0; Y < imgdata.height; Y++) {
                        for (let X = 0; X < imgdata.width; X++) {
                            if (stop121) break
                                if (!chekCol(pixColor(anage1, X, Y), OWOP.world.getPixel(XX + X, YY + Y))) {
                                    //move(XX + X, YY + Y)
                                    OWOP.world.setPixel(XX + X, YY + Y, pixColor(anage1, X, Y))
                                }
                                if (!chekCol(pixColor(anage1, X, Y), OWOP.world.getPixel(XX + X, YY + Y))) {
                                    let abc = getFree();
                                    if (!bots[abc].BOJS.world.setPixel(XX + X, YY + Y, pixColor(anage1, X, Y))) {
                                        await sleep(1000)
                                        X = imgdata.width;
                                        Y = imgdata.height;
                                        pastePick()
                                    }
                                }
                        }
                    }
                } else {
                async function pastpasta() {
                    for (let Y = 0; Y < imgdata.height; Y++) {
                        for (let X = 0; X < imgdata.width; X++) {
                            if (!chekCol(pixColor(anage1, X, Y), OWOP.world.getPixel(XX + X, YY + Y))) {
                                    let abc = getFree();
                                    if (!bots[abc].BOJS.world.setPixel(XX + X, YY + Y, pixColor(anage1, X, Y))) {
                                        await sleep(1000)
                                        X = imgdata.width;
                                        Y = imgdata.height;
                                    }
                                }
                        }
                    }
                }
                    setInterval(() => {
                        pastpasta()
                    },1000)
                }
                }
                pastePick()
            } else if (Paster == 3) {
                let doooo = false;
                async function pastePick() {
                    doooo = true;
                    for (let Y = 0; Y < imgdata.height; Y++) {
                        for (let X = 0; X < imgdata.width; X++) {
                            if (stop121) break
                            if (gaePast) {
                                pixqueue.unshift({
                                    pos: [XX + X, YY + Y],
                                    color: pixColor(anage1, X, Y)
                                });
                            } else {
                                var X_ = Math.random() * imgdata.width | 0;
                                var Y_ = Math.random() * imgdata.height | 0;
                                if (!chekCol(pixColor(anage1, X_, Y_), OWOP.world.getPixel(XX + X_, YY + Y_))) {
                                    //move(XX + X_, YY + Y_)
                                    OWOP.world.setPixel(XX + X_, YY + Y_, pixColor(anage1, X_, Y_))
                                    let abc = getFree();
                                    if (!bots[abc].BOJS.world.setPixel(XX + X_, YY + Y_, pixColor(anage1, X_, Y_))) {
                                        await sleep(1000)
                                        X = imgdata.width;
                                        Y = imgdata.height;
                                        pastePick()
                                    }
                                }
                            }
                        }
                    }
                    doooo = false;
                }
                pastePick()
            } else if (Paster == 4) {
                let doooo = false;
                async function pastePick() {
                    doooo = true;
                    for (let Y = 0; Y < imgdata.height; Y++) {
                        for (let X = 0; X < imgdata.width; X++) {
                            if (stop121) break
                            var X_ = Math.random() * imgdata.width | 0;
                            var Y_ = Math.random() * imgdata.height | 0;
                            if (!chekCol(pixColor(anage1, X_, Y_), OWOP.world.getPixel(XX + X_, YY + Y_))) {
                                //move(XX + X_, YY + Y_)
                                OWOP.world.setPixel(XX + X_, YY + Y_, pixColor(anage1, X_, Y_))
                                let abc = getFree();
                                if (!bots[abc].BOJS.world.setPixel(XX + X_, YY + Y_, pixColor(anage1, X_, Y_))) {
                                    await sleep(1000)
                                    X = imgdata.width;
                                    Y = imgdata.height;
                                    pastePick()
                                }
                            }
                        }
                    }
                    doooo = false;
                }
                pastePick()
            } else if (Paster == 5) {
                let XxX = XX;
                let YyY = YY;
                async function pastePick(cc, xx) {
                    for (let Y = 0; Y < imgdata.height; Y++) {
                        for (let X = 0; X < imgdata.width; X++) {
                            if (stop121) break
                            //var X_ = Math.random() * imgdata.width | 0;
                            //var Y_ = Math.random() * imgdata.height | 0;
                            if (!chekCol(pixColor(anage1, X, Y), OWOP.world.getPixel(cc + X, xx + Y))) {
                                //move(XX + X_, YY + Y_)
                                //OWOP.world.setPixel(XX + X_, YY + Y_, pixColor(anage1, X_, Y_))
                                let abc = getFree();
                                if (!bots[abc].BOJS.world.setPixel(cc + X, xx + Y, pixColor(anage1, X, Y))) {
                                    X = X - 1
                                    await sleep(0);
                                }
                            }
                        }
                    }
                    XxX = XxX - imgdata.width
                    OWOP.emit(6666695 - 6666666, +XxX, +xx);
                    pastePick(XxX, xx);
                }
                pastePick(XxX, YyY);
                //};
            }
        }
    }));

    function dist(x, y) {
        return Math.sqrt(x * x + y * y);
    }
var RainbowCycle = 0;
var Rainbows = `hsla(${RainbowCycle}, 80%, 50%, 1)`
setInterval(() => {
if(RainbowCycle > 359){
RainbowCycle = 0
}else{
RainbowCycle++;
Rainbows = `hsla(${RainbowCycle}, 85%, 50%, 1)`
}
}, 10);
    OWOP.tools.addToolObject(new OWOP.tools.class('Erase', OWOP.cursors.erase, OWOP.fx.player.RECT_SELECT_ALIGNED(0), false, function(tool) {
        let inprog = false;
        setInterval(() => {
        tool.setFxRenderer((fx, ctx) => {
            const X = fx.extra.player.x,
                Y = fx.extra.player.y,
                cX = (pix * Math.floor(X / (pix*16)) - OWOP.camera.x) * OWOP.camera.zoom,
                cY = (pix * Math.floor(Y / (pix*16)) - OWOP.camera.y) * OWOP.camera.zoom,
                tX = fx.extra.player.tileX,
                tY = fx.extra.player.tileY;
            ctx.globalAlpha = .2;
            ctx.fillStyle = Rainbows;
            ctx.fillRect(cX, cY, pix * OWOP.camera.zoom, pix * OWOP.camera.zoom);
            return true;
        });
        })
        const set = (x, y, color) => {
            OWOP.net.protocol.lastSentX = x * 16;
            OWOP.net.protocol.lastSentY = y * 16;
            OWOP.net.connection.send(new Int32Array([OWOP.net.protocol.lastSentX, OWOP.net.protocol.lastSentY, 0]).buffer);
            OWOP.world.setPixel(x, y, color);
        };
        const eq = (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2];

        async function clearChunk(chunkX, chunkY) {
            let color = event.button === 0 ? OWOP.player.selectedColor : [0xff, 0xff, 0xff];
            for (let y = 0; y < pix; ++y) {
                for (let x = 0; x < pix; ++x) {
                    if (stop121) return;
                        let abc = getFree();
                        bots[abc].BOJS.player.pixelBucket.canSpend(0)
                        if(bots[abc].BOJS.player.pixelBucket.allowance >= 1){
                    if ((!eq(OWOP.world.getPixel(chunkX * pix + x, chunkY * pix + y), color))) {
                        bots[abc].BOJS.world.setPixel(chunkX * pix + x, chunkY * pix + y, color)
                        }
                    } else {
                        await sleep(0)
                        x--
                    }
                }
            }
        }
        tool.setEvent('mousedown', function(mouse, event) {
            clearChunk(Math.floor(OWOP.mouse.tileX / pix), Math.floor(OWOP.mouse.tileY / pix));
            inprog = true;
        });
    }));

    function clearBuffer() {
        pixqueue = [];
    }

    OWOP.tools.addToolObject(new OWOP.tools.class('Unpixel-area', OWOP.cursors.select, OWOP.fx.player.NONE, OWOP.RANK.USER, function(tool) {
        try {
            let colorez;
            document.addEventListener('keydown', (e) => {
            if (e.keyCode == 78) {
                    colorez = OWOP.player.selectedColor;
            }
            })
            tool.setFxRenderer(function(fx, ctx, time) {
                if (!fx.extra.isLocalPlayer) return 1;
                let x = fx.extra.player.x;
                let y = fx.extra.player.y;
                let fxx = (Math.floor(x / areaa) - OWOP.camera.x) * OWOP.camera.zoom;
                let fxy = (Math.floor(y / areaa) - OWOP.camera.y) * OWOP.camera.zoom;
                let oldlinew = ctx.lineWidth;
                ctx.lineWidth = 1;
                if (tool.extra.end) {
                    let s = tool.extra.start;
                    let e = tool.extra.end;
                    let x = (s[0] - OWOP.camera.x) * OWOP.camera.zoom + 0.5;
                    let y = (s[1] - OWOP.camera.y) * OWOP.camera.zoom + 0.5;
                    let w = e[0] - s[0];
                    let h = e[1] - s[1];
                    ctx.beginPath();
                    ctx.rect(x, y, w * OWOP.camera.zoom, h * OWOP.camera.zoom);
                    ctx.globalAlpha = 0.25;
                    ctx.strokeStyle = "#FFFFFF";
                    ctx.stroke();
                    ctx.setLineDash([3, 4]);
                    ctx.strokeStyle = "#000000";
                    ctx.stroke();
                    ctx.globalAlpha = 0.25 + Math.sin(time / 320) / 4;
                    ctx.fillStyle = OWOP.renderer.patterns.unloaded;
                    ctx.fill();
                    ctx.setLineDash([]);
                    let oldfont = ctx.font;
                    ctx.font = "16px sans-serif";
                    let txt = (!tool.extra.clicking ? "Right-Click Inside to start. | Right-Click Anywhere to stop. " : "") + '(' + Math.abs(w) + 'x' + Math.abs(h) + ')';
                    let txtx = window.innerWidth >> 1;
                    let txty = window.innerHeight >> 1;
                    txtx = Math.max(x, Math.min(txtx, x + w * OWOP.camera.zoom));
                    txty = Math.max(y, Math.min(txty, y + h * OWOP.camera.zoom));
                    OWOP.drawText = (ctx, str, x, y, centered) => {
                        ctx.strokeStyle = "#000000", ctx.fillStyle = "#FFFFFF", ctx.lineWidth = 2.5, ctx.globalAlpha = 1;
                        if (centered) {
                            x -= ctx.measureText(str).width >> 1;
                        }
                        ctx.strokeText(str, x, y);
                        ctx.globalAlpha = 1;
                        ctx.fillText(str, x, y);
                    };
                    OWOP.drawText(ctx, txt, txtx, txty, true);
                    ctx.font = oldfont;
                    ctx.lineWidth = oldlinew;
                    return 0;
                } else {
                    ctx.beginPath();
                    ctx.moveTo(0, fxy + 0.5);
                    ctx.moveTo(fxx + 0.5, 0);

                    //ctx.lineWidth = 1;
                    ctx.globalAlpha = 0.8;
                    ctx.strokeStyle = "#FFFFFF";
                    ctx.stroke();
                    ctx.setLineDash([3]);
                    ctx.strokeStyle = "#000000";
                    ctx.stroke();

                    ctx.setLineDash([]);
                    ctx.lineWidth = oldlinew;
                    return 1;
                }
            });

            tool.extra.start = null;
            tool.extra.end = null;
            tool.extra.clicking = false;

            tool.setEvent('mousedown', function(mouse, event) {

                let s = tool.extra.start;
                let e = tool.extra.end;
                let isInside = function isInside() {
                    return mouse.tileX >= s[0] && mouse.tileX < e[0] && mouse.tileY >= s[1] && mouse.tileY < e[1];
                };
                if (mouse.buttons === 1 && !tool.extra.end) {
                    tool.extra.start = [Math.floor(mouse.tileX / areaa) * areaa, Math.floor(mouse.tileY / areaa) * areaa];
                    tool.extra.clicking = true;
                    tool.setEvent('mousemove', function(mouse, event) {
                        if (tool.extra.start && mouse.buttons === 1) {
                            tool.extra.end = [Math.floor(mouse.tileX / areaa) * areaa, Math.floor(mouse.tileY / areaa) * areaa];
                            return 1;
                        }
                    });

                    let finish = function finish() {
                        tool.setEvent('mousemove mouseup deselect', null);
                        tool.extra.clicking = false;
                        let s = tool.extra.start;
                        let e = tool.extra.end;

                        if (fillAreaAfterSelected == true) {
                            let color = OWOP.player.selectedColor;
                            drawFromTo(tool.extra.start[0], tool.extra.start[1], tool.extra.end[0], tool.extra.end[1], color, true, colorez)
                            tool.extra.start = null;
                            tool.extra.end = null;
                            OWOP.renderer.render(OWOP.renderer.rendertype.FX);
                        }

                        if (e) {
                            if (s[0] === e[0] || s[1] === e[1]) {
                                tool.extra.start = null;
                                tool.extra.end = null;
                            }
                            if (s[0] > e[0]) {
                                let tmp = e[0];
                                e[0] = s[0];
                                s[0] = tmp;
                            }
                            if (s[1] > e[1]) {
                                let tmp = e[1];
                                e[1] = s[1];
                                s[1] = tmp;
                            }
                        }
                        OWOP.renderer.render(OWOP.renderer.rendertype.FX);
                    };

                    tool.setEvent('deselect', finish);
                    tool.setEvent('mouseup', function(mouse, event) {
                        if (!(mouse.buttons & 1)) {
                            finish();
                        }
                    });
                } else if (mouse.buttons === 1 && tool.extra.end) {
                    if (isInside()) {
                        let offx = mouse.tileX;
                        let offy = mouse.tileY;
                        tool.setEvent('mousemove', function(mouse, event) {
                            let dx = mouse.tileX - offx;
                            let dy = mouse.tileY - offy;
                            tool.extra.start = [s[0] + dx, s[1] + dy];
                            tool.extra.end = [e[0] + dx, e[1] + dy];
                        });
                        let end = function end() {
                            tool.setEvent('mouseup deselect mousemove', null);
                        };

                        tool.setEvent('deselect', end);
                        tool.setEvent('mouseup', function(mouse, event) {
                            if (!(mouse.buttons & 1)) {
                                end();
                            };
                        });
                    }
                } else if (mouse.buttons === 2 && tool.extra.end && isInside()) {
                    let color = OWOP.player.selectedColor;
                            drawFromTo(tool.extra.start[0], tool.extra.start[1], tool.extra.end[0], tool.extra.end[1], color, true, colorez)
                } else {
                    tool.extra.start = null;
                    tool.extra.end = null;
                }
            });
        } catch (e) {
            console.log(e)
        }
    }));
}
install()
