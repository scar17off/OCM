// ==UserScript==
// @name         OCM
// @version      1.0
// @license      MIT
// @description  OWOP CRACKED MANAGER.
// @author       scar17off
// @otherauthors Name was suggested by Maybe Brill
// @match        *://augustberchelmann.com/owop/*
// @match        *://ourworldofpixels.com/*
// @match        *://yourworldofpixels.glitch.me/*
// @icon         https://www.google.com/s2/favicons?domain=ourworldofpixels.com
// @grant        none
// ==/UserScript==

(function(){
	"use strict";

	var OCM;

	setTimeout(() => {
		let ocm_window;
		OWOP.windowSys.addWindow(new OWOP.windowSys.class.window("OCM", {
                closeable: true,
                moveable: false
           }, function(win) {
           	let ui = document.createElement("div");
           	let styles = document.createElement("style");
			
			ui.id = 'ocm-ui';
           	ui.innerHTML = `
<div id="topbar">
	<div id="title-div">
		<span style="color: #6b6b6b;">OWOP</span>
		<span style="color: #c51f10;">CRACKED</span>
		<span style="color: #6b6b6b;">MANAGER</span>
	</div>
</div>
<hr>
<div id="ocmcontent">
	
</div>
`;
			styles.innerHTML = `
#title-div {
	height: auto;
	text-align: center;
}
#ocm-window-container {
	background-color: #292929;
}
#windows > div, .winframe {
    position: absolute;
    pointer-events: auto;
    background-color: rgb(22, 21, 21);
    border: 11px solid rgb(22, 21, 21);
    border-width: 11px;
    -o-border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 11 repeat;
    border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 11 repeat;
    border-image-outset: 1px;
}
.wincontainer {
    overflow: auto;
    min-width: 100%;
    height: 100%;
    margin: 0 -5px -5px -5px;
    background-color: #620cb300;
    border: 5px #7e635c00 solid;
    border-width: 5px;
    -o-border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 11 repeat;
    border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 11 repeat;
}
button[id^="tool-"]:not(.selected) > div {
    background-image: url("https://github.com/scar17off/OSM-2-packages/blob/main/packages/assets/scaledbottoolset.png?raw=true") !important;
    background-color: rgba(69, 69, 69, 1);
}
button {
    border: 6px #aba389 outset;
    -o-border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 6 repeat;
    border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 6 repeat;
    background-color: rgba(69, 69, 69, 1);
    transition: -webkit-filter 0.125s;
    transition: filter 0.125s;
    transition: filter 0.125s, -webkit-filter 0.125s;
}
`;

			win.addObj(ui);
			win.addObj(styles);

           	ocm_window = win.container;
           	ocm_window.id = "ocm-window-container";
			ocm_window.style.height = "550px";
			ocm_window.style.width = "350px";
           }).move(75, 75));
		var ocmclass = class {
			constructor() {
				this.window = document.getElementById("ocm-ui");
				this.url = "";
				this.packagesurl = "https://github.com/scar17off/OSM-2-packages/blob/main/packages/assets/polybius.png?raw=true", "https://raw.githubusercontent.com/scar17off/OCM/main/packages/";
				this.placeholder = "https://github.com/scar17off/OCM/blob/main/placeholder.png?raw=true";
				const OCM = this;
			};
			loadScript(url) {
				let xhttpt = new XMLHttpRequest();
				xhttpt.open("GET", url);
				xhttpt.responseType = "text";
				xhttpt.addEventListener("load", function() {
					eval(xhttpt.response);
				});
				xhttpt.send();
			};
			require(libname) {
				let xhttpt = new XMLHttpRequest();
				xhttpt.open("GET", `${OCM.url}/libraries/${libname}.js`);
				xhttpt.responseType = "text";
				xhttpt.addEventListener("load", function() {
					return xhttpt.response;
				});
				xhttpt.send();
			};
			install(toinstall) {
		
			};
			changeUsername(username) {
				let oldcfg = JSON.parse(localStorage.OCM);
				oldcfg = oldcfg.username = username;
				localStorage.OCM = JSON.stringify(oldcfg);
				return true;
			};
			addPackage(displayName, description, version, author, avatar, script) {
				let cont = document.getElementById("ocm-window-container");
				cont.insertAdjacentHTML(`beforeend`, `
					<div id="ocm-package-${displayName.toLowerCase()}-div">
						<div style="vertical-align: text-top;">
							<img src="${avatar}"></img>
							<span style="color: #6b6b6b" >${displayName}</span>
						</div>
						<div style="vertical-align: text-top;">
							<span style="color: #6b6b6b" >${description}</span>
							<span style="color: #6b6b6b" >v${version}</span>
							<span style="color: #6b6b6b" >Author: ${author}</span>
						</div>
						<div><button style="color: #212121" onclick='OCM.loadScript("${script}")' id="ocm-package-${displayName.toLowerCase()}-install">Install</button></div>
					</div>
					<hr>
				`);
			};
		};
		OCM = new ocmclass();
		OCM.addPackage("Polybius", "Leaked paid proxy bots.", "N", "dimden", OCM.packagesurl+"polybius/main.js");
		OCM.addPackage("CopyBot", "Copy-paste.", "1.9", "Not Bot", OCM.placeholder, OCM.packagesurl+"copybot/main.js");
	}, 3001);
})();
