// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5qqt3":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = "localhost";
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "ddf6e0724bd358bd";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "c5c918026727a776";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3q87D":[function(require,module,exports) {
var _floatingBtn = require("./app/floatingBtn");
var _customFonts = require("./app/customFonts");

},{"./app/floatingBtn":"dYzZC","./app/customFonts":"eUmGQ"}],"dYzZC":[function(require,module,exports) {
// Use a cross-browser storage API:
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webextensionPolyfill = require("webextension-polyfill");
var _webextensionPolyfillDefault = parcelHelpers.interopDefault(_webextensionPolyfill);
// import { icon_sun, icon_moon, icon_moon_full, icon_settings, icon_paint, icon_palette } from './icons.js'
var _iconsJs = require("./icons.js");
// import gpthToggleImg from '../../img/gpth-toggle-circled.webp'
var _hexToHSL = require("../utils/hexToHSL");
var _customFonts = require("./customFonts");
// console.log(fontHtmlCode)
// let isOptionsShown = false
// Global Variables
let isOptionsShown = false;
let $htmlTag;
let $floatingBtn;
let $floatingOptions;
let $floatingBtnsContainer;
let $settings // @ Accent Theme
;
let $resetAllBtn;
// let isSettingsOpen = false
let styleElement = null // Declare the styleElement variable
;
let defaultColorLight = "#6b4dfe";
let defaultColorDark = "#ca93fb";
// let isDisabledResetAll = true
const renderColorsTab = `
	<section>
		<div class="colorpicker-container">
			<div class="colorpicker">
				<input type="color" id="accentLight" value="#6b4dfe" />
				<label for="accentLight">Accent <span>Light</span></label>
			</div>
			<div class="colorpicker">
				<input type="color" id="accentDark" value="#ca93fb" />
				<label for="accentDark">Accent <span>Dark</span></label>
			</div>
		</div>
		<footer class="grid m-5">
			<button id="resetAllSettings" class="btn block relative btn-primary text-center" as="button">Reset Accents</button>
		</footer>
	</section>
`;
// Initialization
init();
function tabsSwitching() {
    const tabs = document.querySelectorAll(".gpth-settings .tab-button");
    const panes = document.querySelectorAll(".gpth-settings .tab-pane");
    tabs.forEach((tab, index)=>{
        tab.addEventListener("click", ()=>{
            document.querySelector(".tab-button.active").classList.remove("active");
            document.querySelector(".tab-pane:not(.hidden)").classList.add("hidden");
            tab.classList.add("active");
            panes[index].classList.remove("hidden");
        });
    });
}
async function initTheme() {
    try {
        const { gptheme: storedTheme } = await (0, _webextensionPolyfillDefault.default).storage.sync.get("gptheme");
        const theme = storedTheme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
        applyTheme(theme);
    } catch (error) {
        console.error("Error initializing theme:", error);
    }
}
async function setTheme(theme) {
    try {
        await (0, _webextensionPolyfillDefault.default).storage.sync.set({
            gptheme: theme
        });
        applyTheme(theme);
        toggleOptions();
    } catch (error) {
        console.error("Error setting theme:", error);
    }
}
function createAndAppendSVGStickyBtn() {
    const gpthFloatingBtn = document.createElement("div");
    gpthFloatingBtn.className = "gpth__floating";
    // <img src="${gpthToggleImg}" alt="gpth-toggle"/>
    let htmlCode = `
		<div class="gpth__floating-icon">
			${(0, _iconsJs.icon_paint)}
		</div>
		
		<div class="gpth__options">
			<div class="gpth__options-btns">
				<button id="light" data-gpth-theme="light">${(0, _iconsJs.icon_sun)}</button>
				<button id="dark" data-gpth-theme="dark">${(0, _iconsJs.icon_moon)}</button>
				<button id="oled" data-gpth-theme="black">${(0, _iconsJs.icon_moon_full)}</button>
				<button id="gpth-open-settings" data-gpth-theme="more">${(0, _iconsJs.icon_settings)}</button>
			</div>
		</div>
	`;
    // gpthFloatingBtn.innerHTML = htmlCode
    gpthFloatingBtn.insertAdjacentHTML("beforeend", htmlCode);
    document.body.appendChild(gpthFloatingBtn);
    // Cache DOM elements after appending
    $htmlTag = document.documentElement;
    $floatingBtn = document.querySelector(".gpth__floating");
    $floatingOptions = document.querySelector(".gpth__options");
    $floatingBtnsContainer = document.querySelector(".gpth__options-btns");
    // Add event listeners after DOM elements are appended
    $floatingBtn.addEventListener("click", toggleOptions);
    $floatingBtnsContainer.addEventListener("click", handleChangeTheme);
}
function handleChangeTheme(e) {
    const themeButton = e.target.closest("button");
    if (!themeButton) return;
    const theme = themeButton.id;
    if (theme !== "gpth-open-settings") {
        setTheme(theme);
        return;
    }
    /* If clicked on "⚙️ Open Settings" */ if (theme === "gpth-open-settings") openSettings();
}
function applyTheme(theme) {
    $htmlTag.dataset.gptheme = theme;
    $htmlTag.style.colorScheme = theme === "oled" ? "dark" : theme;
    $htmlTag.className = theme === "oled" ? "dark" : theme;
    if (theme !== "oled") $htmlTag.removeAttribute("data-gptheme");
}
function toggleOptions() {
    isOptionsShown = !isOptionsShown;
    $floatingOptions.classList.toggle("gpth__options--shown", isOptionsShown);
    if (isOptionsShown) document.body.addEventListener("click", hideOptions);
    else document.body.removeEventListener("click", hideOptions);
}
function hideOptions(e) {
    const isClickInsideFloatingBtn = $floatingBtn.contains(e.target);
    const isClickInsideFloatingOptions = $floatingOptions.contains(e.target);
    if (!isClickInsideFloatingBtn && !isClickInsideFloatingOptions) toggleOptions();
// if (!$floatingBtn.contains(e.target) && !$floatingThemeOptions.contains(e.target)) toggleOptions()
}
function decreiseFloatingBtnSize() {
    setTimeout(()=>{
        $floatingBtn.classList.add("gpth__floating--small");
    }, 3000);
}
/* ______________ THEME CUSTOMIZATION - ACCENT THEME ______________ */ function renderSettings() {
    const gpthSettings = document.createElement("div");
    gpthSettings.className = `gpth-settings fixed flex flex-col`;
    let htmlCode = `
		<header class="mb-5">
			<h2 class="mt-5 text-center font-medium"><span class="font-semibold">GPThemes</span> Customization</h2>

			<button class="text-token-text-tertiary hover:text-token-text-primary absolute top-4 right-4" id="gpth-settings-close">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.34315 6.34338L17.6569 17.6571M17.6569 6.34338L6.34315 17.6571" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
			</button>
		</header>

		<main>
			<div class="tabs">
				<div class="tab-buttons flex items-center rounded-full p-1 mb-6 font-semibold">
					<button class="tab-button py-2 px-4 focus:outline-none text-center rounded-full active">
						Color
					</button>
					<button class="tab-button py-2 px-4 focus:outline-none text-center rounded-full">
						Font
					</button>
					<button class="tab-button py-2 px-4 focus:outline-none text-center rounded-full">
						Assets
					</button>
				</div>
				<div class="tab-content p-4">
					<div class="tab-pane active" id="tab-colors">
						${renderColorsTab}
					</div>

					<div class="tab-pane hidden" id="tab-fonts">
						${(0, _customFonts.fontHtmlCode)}
					</div>

					<div class="tab-pane hidden" id="tab-assets">
						<p class="text-center text-token-text-tertiary text-sm mb-2 font-weight-200">ooops, such empty</p>
						<p class="text-center text-token-text-secondary text-md font-semibold">Coming Soon</p>
					</div>
				</div>
			</div>
		</main>
	`;
    gpthSettings.insertAdjacentHTML("beforeend", htmlCode);
    document.body.appendChild(gpthSettings);
    document.getElementById("gpth-settings-close").addEventListener("click", closeSettings);
    $settings = gpthSettings;
    tabsSwitching();
    $resetAllBtn = $settings.querySelector("#resetAllSettings");
    $resetAllBtn.disabled = true;
    $settings.querySelector("#resetAllSettings").addEventListener("click", resetAllSettings);
    (0, _customFonts.addFontsEventHandlers)();
}
function openSettings() {
    $settings.classList.add("gpth-settings--open");
    $settings.addEventListener("transitionend", handleSettingsOpened);
    $resetAllBtn.disabled = false;
// isOptionsShown = false
// toggleOptions()
}
function handleSettingsOpened() {
    document.body.addEventListener("click", handleClickOutsideSettings);
    $settings.removeEventListener("transitionend", handleSettingsOpened);
}
function closeSettings() {
    $settings.classList.remove("gpth-settings--open");
    document.body.removeEventListener("click", handleClickOutsideSettings);
    $resetAllBtn.disabled = true;
}
function handleClickOutsideSettings(e) {
    let isOpenSettingsButton = e.target.id === "gpth-settings-open";
    if (!$settings.contains(e.target) && !isOpenSettingsButton) closeSettings();
}
function handleColorInput() {
    $settings.addEventListener("click", (e)=>{
        // console.log(e.target)
        if (e.target.id === "accentLight") {
            e.target.addEventListener("input", (e)=>{
                updateCSSVars(e.target.value, null);
            });
            // Save light accent color to storage
            e.target.addEventListener("change", (e)=>{
                setAccentToStorage("accent_light", e.target.value);
                closeSettings();
            });
        }
        if (e.target.id === "accentDark") {
            e.target.addEventListener("input", (e)=>{
                updateCSSVars(null, e.target.value);
            });
            // Save dark accent color to storage
            e.target.addEventListener("change", (e)=>{
                setAccentToStorage("accent_dark", e.target.value);
                closeSettings();
            });
        }
    });
}
// Function to create and inject the <style> element
function injectStyleElement() {
    styleElement = document.createElement("style");
    styleElement.type = "text/css";
    document.head.appendChild(styleElement);
}
function updateCSSVars(lightColor, darkColor) {
    if (!styleElement) injectStyleElement();
    const lightHSL = lightColor ? (0, _hexToHSL.hexToHSL)(lightColor) : (0, _hexToHSL.hexToHSL)($settings.querySelector(".colorpicker #accentLight").value);
    const darkHSL = darkColor ? (0, _hexToHSL.hexToHSL)(darkColor) : (0, _hexToHSL.hexToHSL)($settings.querySelector(".colorpicker #accentDark").value);
    let cssVars = "";
    cssVars = `
        html.light {
            --accent-h: ${lightHSL[0]} !important;
            --accent-s: ${lightHSL[1]}% !important;
            --accent-l: ${lightHSL[2]}% !important;
        }
        html.dark {
            --accent-h: ${darkHSL[0]} !important;
            --accent-s: ${darkHSL[1]}% !important;
            --accent-l: ${darkHSL[2]}% !important;
        }
    `;
    // console.log(cssVars)
    styleElement.textContent = cssVars;
}
async function setAccentToStorage(storageColorProperty, accentValue) {
    try {
        if (storageColorProperty === "accent_light") await (0, _webextensionPolyfillDefault.default).storage.sync.set({
            accent_light: accentValue
        });
        if (storageColorProperty === "accent_dark") await (0, _webextensionPolyfillDefault.default).storage.sync.set({
            accent_dark: accentValue
        });
    // console.log({ storageColorProperty, accentValue })
    } catch (e) {
        console.error("Error setting the accent colors in storage:", e);
    }
}
function setColorInputValue({ accentLight, accentDark }) {
    // console.log({ accentLight, accentDark })
    $settings.querySelector(".colorpicker #accentLight").value = accentLight;
    $settings.querySelector(".colorpicker #accentDark").value = accentDark;
}
async function handleAccentsStorage() {
    try {
        // Get accent colors from storage
        const { accent_light: accentLight, accent_dark: accentDark } = await (0, _webextensionPolyfillDefault.default).storage.sync.get([
            "accent_light",
            "accent_dark"
        ]);
        // console.log('Retrieved accent colors from storage:', accentLight, accentDark)
        // Set default accent colors if not already set
        if (!accentLight || !accentDark) {
            await (0, _webextensionPolyfillDefault.default).storage.sync.set({
                accent_light: defaultColorLight,
                accent_dark: defaultColorDark
            });
            console.log("Default accent colors set in storage");
        }
        const accentColorLight = accentLight || defaultColorLight;
        const accentColorDark = accentDark || defaultColorDark;
        // Update CSS with retrieved or default accent colors
        updateCSSVars(accentColorLight, accentColorDark);
        setColorInputValue({
            accentLight: accentColorLight,
            accentDark: accentColorDark
        });
    // console.log('Accent colors applied to CSS:', accentColorLight, accentColorDark)
    } catch (error) {
        console.error("Error handling accent colors:", error);
    }
}
async function resetAllSettings() {
    if (!styleElement) injectStyleElement();
    // let accentLight = [250, 99, 65]
    // let accentDark = [272, 93, 78]
    let accentLight = (0, _hexToHSL.hexToHSL)(defaultColorLight);
    let accentDark = (0, _hexToHSL.hexToHSL)(defaultColorDark);
    const cssVars = `
        html.light {
            --accent-h: ${accentLight[0]} !important;
            --accent-s: ${accentLight[1]}% !important;
            --accent-l: ${accentLight[2]}% !important;
        }
        html.dark {
            --accent-h: ${accentDark[0]} !important;
            --accent-s: ${accentDark[1]}% !important;
            --accent-l: ${accentDark[2]}% !important;
        }
    `;
    styleElement.textContent = cssVars;
    setColorInputValue({
        accentLight: defaultColorLight,
        accentDark: defaultColorDark
    });
    await (0, _webextensionPolyfillDefault.default).storage.sync.set({
        accent_light: defaultColorLight,
        accent_dark: defaultColorDark
    });
}
/* === Initialization */ function init() {
    initTheme();
    createAndAppendSVGStickyBtn();
    renderSettings();
    decreiseFloatingBtnSize();
    handleAccentsStorage();
    handleColorInput();
} /* ? Only for debugging - remove later! */  /* debugGetAllStorageItems()
// Get all the items in the storage
function debugGetAllStorageItems() {
	browser.storage.sync.get(null, function (items) {
		console.log(items) // This will log all the items stored in sync storage
	})
}
*/ 

},{"webextension-polyfill":"Zel51","./icons.js":"98oRq","../utils/hexToHSL":"gNsnw","./customFonts":"eUmGQ","@parcel/transformer-js/src/esmodule-helpers.js":"4IpBY"}],"Zel51":[function(require,module,exports) {
(function(global, factory) {
    if (typeof define === "function" && define.amd) define("webextension-polyfill", [
        "module"
    ], factory);
    else {
        var mod;
        factory(module);
    }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function(module1) {
    /* webextension-polyfill - v0.10.0 - Fri Aug 12 2022 19:42:44 */ /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */ /* vim: set sts=2 sw=2 et tw=80: */ /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */ "use strict";
    if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
    if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
        const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received."; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
        // optimization for Firefox. Since Spidermonkey does not fully parse the
        // contents of a function until the first time it's called, and since it will
        // never actually need to be called, this allows the polyfill to be included
        // in Firefox nearly for free.
        const wrapAPIs = (extensionAPIs)=>{
            // NOTE: apiMetadata is associated to the content of the api-metadata.json file
            // at build time by replacing the following "include" with the content of the
            // JSON file.
            const apiMetadata = {
                "alarms": {
                    "clear": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "clearAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "get": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "bookmarks": {
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getChildren": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getRecent": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getSubTree": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTree": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "move": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeTree": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "browserAction": {
                    "disable": {
                        "minArgs": 0,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "enable": {
                        "minArgs": 0,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "getBadgeBackgroundColor": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getBadgeText": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getPopup": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTitle": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "openPopup": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "setBadgeBackgroundColor": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setBadgeText": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setIcon": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "setPopup": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setTitle": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "browsingData": {
                    "remove": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "removeCache": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeCookies": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeDownloads": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeFormData": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeHistory": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeLocalStorage": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removePasswords": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removePluginData": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "settings": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "commands": {
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "contextMenus": {
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "cookies": {
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAllCookieStores": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "set": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "devtools": {
                    "inspectedWindow": {
                        "eval": {
                            "minArgs": 1,
                            "maxArgs": 2,
                            "singleCallbackArg": false
                        }
                    },
                    "panels": {
                        "create": {
                            "minArgs": 3,
                            "maxArgs": 3,
                            "singleCallbackArg": true
                        },
                        "elements": {
                            "createSidebarPane": {
                                "minArgs": 1,
                                "maxArgs": 1
                            }
                        }
                    }
                },
                "downloads": {
                    "cancel": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "download": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "erase": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getFileIcon": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "open": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "pause": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeFile": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "resume": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "show": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "extension": {
                    "isAllowedFileSchemeAccess": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "isAllowedIncognitoAccess": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "history": {
                    "addUrl": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "deleteAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "deleteRange": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "deleteUrl": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getVisits": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "i18n": {
                    "detectLanguage": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAcceptLanguages": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "identity": {
                    "launchWebAuthFlow": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "idle": {
                    "queryState": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "management": {
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getSelf": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "setEnabled": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "uninstallSelf": {
                        "minArgs": 0,
                        "maxArgs": 1
                    }
                },
                "notifications": {
                    "clear": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getPermissionLevel": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "pageAction": {
                    "getPopup": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTitle": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "hide": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setIcon": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "setPopup": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setTitle": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "show": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "permissions": {
                    "contains": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "request": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "runtime": {
                    "getBackgroundPage": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getPlatformInfo": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "openOptionsPage": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "requestUpdateCheck": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "sendMessage": {
                        "minArgs": 1,
                        "maxArgs": 3
                    },
                    "sendNativeMessage": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "setUninstallURL": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "sessions": {
                    "getDevices": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getRecentlyClosed": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "restore": {
                        "minArgs": 0,
                        "maxArgs": 1
                    }
                },
                "storage": {
                    "local": {
                        "clear": {
                            "minArgs": 0,
                            "maxArgs": 0
                        },
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "remove": {
                            "minArgs": 1,
                            "maxArgs": 1
                        },
                        "set": {
                            "minArgs": 1,
                            "maxArgs": 1
                        }
                    },
                    "managed": {
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        }
                    },
                    "sync": {
                        "clear": {
                            "minArgs": 0,
                            "maxArgs": 0
                        },
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "remove": {
                            "minArgs": 1,
                            "maxArgs": 1
                        },
                        "set": {
                            "minArgs": 1,
                            "maxArgs": 1
                        }
                    }
                },
                "tabs": {
                    "captureVisibleTab": {
                        "minArgs": 0,
                        "maxArgs": 2
                    },
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "detectLanguage": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "discard": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "duplicate": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "executeScript": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getCurrent": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getZoom": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getZoomSettings": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "goBack": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "goForward": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "highlight": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "insertCSS": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "move": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "query": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "reload": {
                        "minArgs": 0,
                        "maxArgs": 2
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeCSS": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "sendMessage": {
                        "minArgs": 2,
                        "maxArgs": 3
                    },
                    "setZoom": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "setZoomSettings": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "update": {
                        "minArgs": 1,
                        "maxArgs": 2
                    }
                },
                "topSites": {
                    "get": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "webNavigation": {
                    "getAllFrames": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getFrame": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "webRequest": {
                    "handlerBehaviorChanged": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "windows": {
                    "create": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getCurrent": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getLastFocused": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                }
            };
            if (Object.keys(apiMetadata).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
            /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */ class DefaultWeakMap extends WeakMap {
                constructor(createItem, items){
                    super(items);
                    this.createItem = createItem;
                }
                get(key) {
                    if (!this.has(key)) this.set(key, this.createItem(key));
                    return super.get(key);
                }
            }
            /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */ const isThenable = (value)=>{
                return value && typeof value === "object" && typeof value.then === "function";
            };
            /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */ const makeCallback = (promise, metadata)=>{
                return (...callbackArgs)=>{
                    if (extensionAPIs.runtime.lastError) promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                    else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) promise.resolve(callbackArgs[0]);
                    else promise.resolve(callbackArgs);
                };
            };
            const pluralizeArguments = (numArgs)=>numArgs == 1 ? "argument" : "arguments";
            /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */ const wrapAsyncFunction = (name, metadata)=>{
                return function asyncFunctionWrapper(target, ...args) {
                    if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                    if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                    return new Promise((resolve, reject)=>{
                        if (metadata.fallbackToNoCallback) // This API method has currently no callback on Chrome, but it return a promise on Firefox,
                        // and so the polyfill will try to call it with a callback first, and it will fallback
                        // to not passing the callback if the first call fails.
                        try {
                            target[name](...args, makeCallback({
                                resolve,
                                reject
                            }, metadata));
                        } catch (cbError) {
                            console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                            target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                            // use the unsupported callback anymore.
                            metadata.fallbackToNoCallback = false;
                            metadata.noCallback = true;
                            resolve();
                        }
                        else if (metadata.noCallback) {
                            target[name](...args);
                            resolve();
                        } else target[name](...args, makeCallback({
                            resolve,
                            reject
                        }, metadata));
                    });
                };
            };
            /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */ const wrapMethod = (target, method, wrapper)=>{
                return new Proxy(method, {
                    apply (targetMethod, thisObj, args) {
                        return wrapper.call(thisObj, target, ...args);
                    }
                });
            };
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */ const wrapObject = (target, wrappers = {}, metadata = {})=>{
                let cache = Object.create(null);
                let handlers = {
                    has (proxyTarget, prop) {
                        return prop in target || prop in cache;
                    },
                    get (proxyTarget, prop, receiver) {
                        if (prop in cache) return cache[prop];
                        if (!(prop in target)) return undefined;
                        let value = target[prop];
                        if (typeof value === "function") {
                            // This is a method on the underlying object. Check if we need to do
                            // any wrapping.
                            if (typeof wrappers[prop] === "function") // We have a special-case wrapper for this method.
                            value = wrapMethod(target, target[prop], wrappers[prop]);
                            else if (hasOwnProperty(metadata, prop)) {
                                // This is an async method that we have metadata for. Create a
                                // Promise wrapper for it.
                                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                                value = wrapMethod(target, target[prop], wrapper);
                            } else // This is a method that we don't know or care about. Return the
                            // original method, bound to the underlying object.
                            value = value.bind(target);
                        } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) // This is an object that we need to do some wrapping for the children
                        // of. Create a sub-object wrapper for it with the appropriate child
                        // metadata.
                        value = wrapObject(value, wrappers[prop], metadata[prop]);
                        else if (hasOwnProperty(metadata, "*")) // Wrap all properties in * namespace.
                        value = wrapObject(value, wrappers[prop], metadata["*"]);
                        else {
                            // We don't need to do any wrapping for this property,
                            // so just forward all access to the underlying object.
                            Object.defineProperty(cache, prop, {
                                configurable: true,
                                enumerable: true,
                                get () {
                                    return target[prop];
                                },
                                set (value) {
                                    target[prop] = value;
                                }
                            });
                            return value;
                        }
                        cache[prop] = value;
                        return value;
                    },
                    set (proxyTarget, prop, value, receiver) {
                        if (prop in cache) cache[prop] = value;
                        else target[prop] = value;
                        return true;
                    },
                    defineProperty (proxyTarget, prop, desc) {
                        return Reflect.defineProperty(cache, prop, desc);
                    },
                    deleteProperty (proxyTarget, prop) {
                        return Reflect.deleteProperty(cache, prop);
                    }
                }; // Per contract of the Proxy API, the "get" proxy handler must return the
                // original value of the target if that value is declared read-only and
                // non-configurable. For this reason, we create an object with the
                // prototype set to `target` instead of using `target` directly.
                // Otherwise we cannot return a custom object for APIs that
                // are declared read-only and non-configurable, such as `chrome.devtools`.
                //
                // The proxy handlers themselves will still use the original `target`
                // instead of the `proxyTarget`, so that the methods and properties are
                // dereferenced via the original targets.
                let proxyTarget = Object.create(target);
                return new Proxy(proxyTarget, handlers);
            };
            /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */ const wrapEvent = (wrapperMap)=>({
                    addListener (target, listener, ...args) {
                        target.addListener(wrapperMap.get(listener), ...args);
                    },
                    hasListener (target, listener) {
                        return target.hasListener(wrapperMap.get(listener));
                    },
                    removeListener (target, listener) {
                        target.removeListener(wrapperMap.get(listener));
                    }
                });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener)=>{
                if (typeof listener !== "function") return listener;
                /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */ return function onRequestFinished(req) {
                    const wrappedReq = wrapObject(req, {}, {
                        getContent: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    });
                    listener(wrappedReq);
                };
            });
            const onMessageWrappers = new DefaultWeakMap((listener)=>{
                if (typeof listener !== "function") return listener;
                /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */ return function onMessage(message, sender, sendResponse) {
                    let didCallSendResponse = false;
                    let wrappedSendResponse;
                    let sendResponsePromise = new Promise((resolve)=>{
                        wrappedSendResponse = function(response) {
                            didCallSendResponse = true;
                            resolve(response);
                        };
                    });
                    let result;
                    try {
                        result = listener(message, sender, wrappedSendResponse);
                    } catch (err) {
                        result = Promise.reject(err);
                    }
                    const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
                    // wrappedSendResponse synchronously, we can exit earlier
                    // because there will be no response sent from this listener.
                    if (result !== true && !isResultThenable && !didCallSendResponse) return false;
                     // A small helper to send the message if the promise resolves
                    // and an error if the promise rejects (a wrapped sendMessage has
                    // to translate the message into a resolved promise or a rejected
                    // promise).
                    const sendPromisedResult = (promise)=>{
                        promise.then((msg)=>{
                            // send the message value.
                            sendResponse(msg);
                        }, (error)=>{
                            // Send a JSON representation of the error if the rejected value
                            // is an instance of error, or the object itself otherwise.
                            let message;
                            if (error && (error instanceof Error || typeof error.message === "string")) message = error.message;
                            else message = "An unexpected error occurred";
                            sendResponse({
                                __mozWebExtensionPolyfillReject__: true,
                                message
                            });
                        }).catch((err)=>{
                            // Print an error on the console if unable to send the response.
                            console.error("Failed to send onMessage rejected reply", err);
                        });
                    }; // If the listener returned a Promise, send the resolved value as a
                    // result, otherwise wait the promise related to the wrappedSendResponse
                    // callback to resolve and send it as a response.
                    if (isResultThenable) sendPromisedResult(result);
                    else sendPromisedResult(sendResponsePromise);
                     // Let Chrome know that the listener is replying.
                    return true;
                };
            });
            const wrappedSendMessageCallback = ({ reject, resolve }, reply)=>{
                if (extensionAPIs.runtime.lastError) {
                    // Detect when none of the listeners replied to the sendMessage call and resolve
                    // the promise to undefined as in Firefox.
                    // See https://github.com/mozilla/webextension-polyfill/issues/130
                    if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) resolve();
                    else reject(new Error(extensionAPIs.runtime.lastError.message));
                } else if (reply && reply.__mozWebExtensionPolyfillReject__) // Convert back the JSON representation of the error into
                // an Error instance.
                reject(new Error(reply.message));
                else resolve(reply);
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args)=>{
                if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                return new Promise((resolve, reject)=>{
                    const wrappedCb = wrappedSendMessageCallback.bind(null, {
                        resolve,
                        reject
                    });
                    args.push(wrappedCb);
                    apiNamespaceObj.sendMessage(...args);
                });
            };
            const staticWrappers = {
                devtools: {
                    network: {
                        onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                    }
                },
                runtime: {
                    onMessage: wrapEvent(onMessageWrappers),
                    onMessageExternal: wrapEvent(onMessageWrappers),
                    sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                        minArgs: 1,
                        maxArgs: 3
                    })
                },
                tabs: {
                    sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                        minArgs: 2,
                        maxArgs: 3
                    })
                }
            };
            const settingMetadata = {
                clear: {
                    minArgs: 1,
                    maxArgs: 1
                },
                get: {
                    minArgs: 1,
                    maxArgs: 1
                },
                set: {
                    minArgs: 1,
                    maxArgs: 1
                }
            };
            apiMetadata.privacy = {
                network: {
                    "*": settingMetadata
                },
                services: {
                    "*": settingMetadata
                },
                websites: {
                    "*": settingMetadata
                }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
        }; // The build process adds a UMD wrapper around this file, which makes the
        // `module` variable available.
        module1.exports = wrapAPIs(chrome);
    } else module1.exports = globalThis.browser;
});

},{}],"98oRq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "icon_sun", ()=>icon_sun);
parcelHelpers.export(exports, "icon_moon", ()=>icon_moon);
parcelHelpers.export(exports, "icon_moon_full", ()=>icon_moon_full);
parcelHelpers.export(exports, "icon_settings", ()=>icon_settings);
parcelHelpers.export(exports, "icon_paint", ()=>icon_paint);
parcelHelpers.export(exports, "icon_palette", ()=>icon_palette);
const icon_sun = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-sun"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>`;
const icon_moon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-moon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>`;
const icon_moon_full = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-moon-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.418 4.157a8 8 0 0 0 0 15.686" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>`;
const icon_settings = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg>`;
const icon_paint = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-paint"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" /><path d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2" /><path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /></svg>`;
const icon_palette = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-palette"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" /><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4IpBY"}],"4IpBY":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gNsnw":[function(require,module,exports) {
/* export function hexToHSL(hex) {
	const result = {}
	hex = hex.substring(1) // Remove leading "#" symbol

	const rgb = hex.match(/[A-Fa-f\d]{2}/g).map(function (value) {
		return parseInt(value, 16) / 255
	})

	const r = rgb[0]
	const g = rgb[1]
	const b = rgb[2]

	const max = Math.max(r, g, b)
	const min = Math.min(r, g, b)
	let h, s, l

	l = (max + min) / 2

	if (max === min) {
		h = s = 0 // Achromatic
	} else {
		const d = max - min
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0)
				break
			case g:
				h = (b - r) / d + 2
				break
			case b:
				h = (r - g) / d + 4
				break
		}
		h = Math.round(h * 60)
	}

	result.h = h % 360
	result.s = Math.round(s * 100)
	result.l = Math.round(l * 100)

	return result
} */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hexToHSL", ()=>hexToHSL);
function hexToHSL(hex) {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
    }
    // Then convert RGB to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) h = s = 0 // achromatic
    ;
    else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return [
        Math.round(h * 360),
        Math.round(s * 100),
        Math.round(l * 100)
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4IpBY"}],"eUmGQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fontHtmlCode", ()=>fontHtmlCode);
/* function isLinkAlreadyInjected(href) {
	let googleFontLinks = getAllGoogleFontLinks()

	console.log('isLinkAlreadyInjected()')

	if (!googleFontLinks) return false

	for (let link of googleFontLinks) {
		console.log('link.href:', link.href)
		console.log('href:', href)

		if (link.href === href) {
			console.log('Link injected already')
			return true
		}
	}
	return false
} */ /* export function applyFont() {
	const fontFamily = document.getElementById('fontFamily').value
	let fontSize = document.getElementById('fontSize').value

	console.log('applyFont()', fontFamily, fontSize)

	// Create the <link> in <head> which will fetch the selected font from Google Fonts
	createAndInjectLinkElement(fontFamily)

	// Apply CSS variables
	setCSSVariables({ fontFamily, fontSize })

	// Save settings to chrome.storage
	setFontsToStorage({ fontFamily, fontSize })
} */ /* export function resetFont() {
	// Reset CSS variables to default values
	setCSSVariables({ fontFamily: defaultFontFamily, fontSize: '16' })

	// Reset input fields to default values
	setInputFields({ fontFamily: 'Default', fontSize: '16' })

	// Remove custom font link from the head
	removeExistingGoogleFontLinks()

	// Remove custom font settings from chrome.storage
	removeFontsFromStorage()
} */ parcelHelpers.export(exports, "resetToDefaults", ()=>resetToDefaults);
parcelHelpers.export(exports, "applyFontFamily", ()=>applyFontFamily);
parcelHelpers.export(exports, "applyFontSize", ()=>applyFontSize);
parcelHelpers.export(exports, "applyLetterSpacing", ()=>applyLetterSpacing);
parcelHelpers.export(exports, "applyLineHeight", ()=>applyLineHeight);
parcelHelpers.export(exports, "addFontsEventHandlers", ()=>addFontsEventHandlers);
var _webextensionPolyfill = require("webextension-polyfill");
var _webextensionPolyfillDefault = parcelHelpers.interopDefault(_webextensionPolyfill);
var _fontsConverting = require("../utils/fontsConverting");
// import { remToPx } from '../utils/fontsConverting'
var _renderFonts = require("./components/renderFonts");
const defaultFontFamily = getComputedStyle(document.documentElement).getPropertyValue("--f-family-default");
const defaultFontSize = "16";
const defaultLetterSpacing = "0";
const defaultLineHeight = 28;
// const defaultLineHeight = '24px'
const fontNames = [
    "Default",
    "Inter",
    "Roboto",
    "Roboto Mono",
    "DM Sans",
    "Reddit Mono",
    "Poppins",
    "Noto Sans",
    "Monospace",
    "Lato",
    "Quicksand",
    "Outfit"
];
let googleFontWeights = `:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900`;
let currFontHref = null;
let fontHtmlCode = `
	<section id="fontChangerPopover" class="fonts">
		<div class="grid gap-4">
			<div class="fonts__family text-sm mb-2 flex flex-col">
				<label for="fontFamily" class="uppercase text-xs mb-1 font-semibold">Font Family:</label>
				<select id="fontFamily" class="bg-token-sidebar-surface-secondary rounded-md outline-none border-none p-3 focus:none">
				${fontNames.map((name)=>`<option value="${name === "Default" ? defaultFontFamily : name}">${name}</option>`).join("")}
				</select>
			</div>

			${(0, _renderFonts.renderFont)({
    name: "Font Size",
    className: "fonts__size",
    inputId: "fontSize",
    inputType: "number",
    inputValue: defaultFontSize,
    inputPlaceholder: "16px",
    unit: "px"
})}
			${(0, _renderFonts.renderFont)({
    name: "Line Height",
    className: "fonts__lineHeight",
    inputId: "lineHeight",
    inputType: "number",
    inputValue: defaultLineHeight,
    inputPlaceholder: `${defaultLineHeight}px`,
    unit: "px"
})}
			${(0, _renderFonts.renderFont)({
    name: "Letter Spacing",
    className: "fonts__letterSpacing",
    inputId: "letterSpacing",
    inputType: "number",
    inputValue: defaultLetterSpacing,
    inputPlaceholder: `${defaultFontSize}px`,
    unit: "px"
})}
		</div>

		<div class="gap-2 mt-4 grid">
			${(0, _renderFonts.renderButton)({
    id: "resetFont",
    content: "Reset Fonts",
    disabled: false,
    className: "btn-primary"
})}
		</div>
	</section>
`;
/* function setCSSVariables({ fontFamily, fontSize = '16' }) {
	if (fontFamily !== defaultFontFamily) {
		document.documentElement.style.setProperty('--f-family', `${fontFamily}, ${defaultFontFamily}`)
		document.documentElement.style.setProperty('--f-size', `${pxToRem(fontSize)}`)
		return
	}

	document.documentElement.style.setProperty('--f-family', defaultFontFamily)
	document.documentElement.style.setProperty('--f-size', `${pxToRem(fontSize)}`)
}
function setInputFields({ fontFamily, fontSize = '16' }) {
	// console.log('setInputFields():', fontFamily, fontSize)

	if (fontFamily !== 'Default') {
		document.getElementById('fontFamily').value = fontFamily
		document.getElementById('fontSize').value = fontSize
		return
	}

	document.getElementById('fontFamily').value = defaultFontFamily
	document.getElementById('fontSize').value = fontSize
} */ function setCSSVar({ varName, varValue }) {
    console.log("setCSSVar():", varName, varValue);
    document.documentElement.style.setProperty(varName, varValue);
}
function setInputField({ inputSelector, inputVal }) {
    console.log("setInputField():", inputSelector, inputVal);
    let inputEl = document.querySelector(`.gpth-settings ${inputSelector}`);
    if (inputVal === "Default") inputEl.value = defaultFontFamily;
    else inputEl.value = inputVal;
}
async function getFontsFromStorage() {
    try {
        const data = await (0, _webextensionPolyfillDefault.default).storage.sync.get([
            "fontFamily",
            "fontSize",
            "letterSpacing",
            "lineHeight"
        ]);
        // console.log('data: ', data)
        if (data.fontFamily) {
            setCSSVar({
                varName: "--f-family",
                varValue: `${data.fontFamily}, ${defaultFontFamily}`
            });
            setInputField({
                inputSelector: "#fontFamily",
                inputVal: data.fontFamily
            });
            // Load selected font from Google Fonts
            createAndInjectLinkElement(data.fontFamily);
        }
        if (data.fontSize) {
            setCSSVar({
                varName: "--f-size",
                varValue: `${(0, _fontsConverting.pxToRem)(data.fontSize)}`
            });
            setInputField({
                inputSelector: "#fontSize",
                inputVal: data.fontSize
            });
        }
        if (data.letterSpacing) {
            setCSSVar({
                varName: "--f-letter-spacing",
                varValue: `${data.letterSpacing}px`
            });
            setInputField({
                inputSelector: "#letterSpacing",
                inputVal: data.letterSpacing
            });
        }
        if (data.lineHeight) {
            setCSSVar({
                varName: "--f-line-height",
                varValue: data.lineHeight
            });
            setInputField({
                inputSelector: "#lineHeight",
                inputVal: data.lineHeight
            });
        }
    } catch (error) {
        console.error("Error getting fonts from storage:", error);
    }
}
/* async function setFontsToStorage({ fontFamily, fontSize = '16' }) {
	// Save selected font to storage
	await browser.storage.sync.set({ fontFamily, fontSize })
} */ async function setPropToStorage({ propName, propVal }) {
    // Save selected font to storage
    await (0, _webextensionPolyfillDefault.default).storage.sync.set({
        [propName]: propVal
    });
}
async function removeFontsFromStorage() {
    await (0, _webextensionPolyfillDefault.default).storage.sync.remove([
        "fontFamily",
        "fontSize",
        "letterSpacing",
        "lineHeight"
    ]);
}
// Create the <link> in <head> which will fetch the selected font from Google Fonts
function createAndInjectLinkElement(fontFamily) {
    let href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(" ", "+")}${googleFontWeights}&display=swap`;
    // Ako je href == currFontHref, ne dodajemo link!
    if (currFontHref && currFontHref === href) return;
    // TODO Check if the link is already injected
    // Remove existing Google Font links
    removeExistingGoogleFontLinks();
    currFontHref = href;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
    return link;
}
function getAllGoogleFontLinks() {
    // Select all link elements in the head
    const linkElements = document.head.querySelectorAll("link");
    // Filter the link elements to find those fetching Google Fonts
    const googleFontLinks = Array.from(linkElements).filter((link)=>link.href.includes("fonts.googleapis.com"));
    return googleFontLinks;
}
function removeExistingGoogleFontLinks() {
    let googleFontLinks = getAllGoogleFontLinks();
    currFontHref = null;
    // Remove all existing Google Font links
    googleFontLinks.forEach((link)=>{
        link.parentNode.removeChild(link);
    });
}
function resetToDefaults() {
    // Reset CSS variables to default values
    setCSSVar({
        varName: "--f-family",
        varValue: defaultFontFamily
    });
    setCSSVar({
        varName: "--f-size",
        varValue: `${(0, _fontsConverting.pxToRem)(defaultFontSize)}`
    });
    setCSSVar({
        varName: "--f-letter-spacing",
        varValue: `${defaultLetterSpacing}px`
    });
    setCSSVar({
        varName: "--f-line-height",
        varValue: defaultLineHeight
    });
    // Reset input fields to default values
    setInputField({
        inputSelector: "#fontFamily",
        inputVal: "Default"
    });
    setInputField({
        inputSelector: "#fontSize",
        inputVal: defaultFontSize
    });
    setInputField({
        inputSelector: "#letterSpacing",
        inputVal: defaultLetterSpacing
    });
    setInputField({
        inputSelector: "#lineHeight",
        inputVal: defaultLineHeight
    });
    // Remove custom font link from the head
    removeExistingGoogleFontLinks();
    // Remove custom font settings from chrome.storage
    removeFontsFromStorage();
}
function applyFontFamily(e) {
    const fontFamily = e.target.value;
    // Create the <link> in <head> which will fetch the selected font from Google Fonts
    createAndInjectLinkElement(fontFamily);
    // Apply CSS variables
    setCSSVar({
        varName: "--f-family",
        varValue: `${fontFamily}, ${defaultFontFamily}`
    });
    // Save settings to chrome.storage
    setPropToStorage({
        propName: "fontFamily",
        propVal: fontFamily
    });
}
function applyFontSize(e) {
    const fontSize = e.target.value;
    // Apply CSS variables
    setCSSVar({
        varName: "--f-size",
        varValue: `${(0, _fontsConverting.pxToRem)(fontSize)}`
    });
    // Save settings to chrome.storage
    setPropToStorage({
        propName: "fontSize",
        propVal: fontSize
    });
}
function applyLetterSpacing(e) {
    // console.log('applyLetterSpacing()', e.target.value)
    const letterSpacing = e.target.value;
    // Apply CSS variables
    setCSSVar({
        varName: "--f-letter-spacing",
        varValue: `${letterSpacing}px`
    });
    // Save settings to chrome.storage
    setPropToStorage({
        propName: "letterSpacing",
        propVal: letterSpacing
    });
}
function applyLineHeight(e) {
    const lineHeight = e.target.value;
    // Apply CSS variables
    setCSSVar({
        varName: "--f-line-height",
        varValue: lineHeight
    });
    // Save settings to chrome.storage
    setPropToStorage({
        propName: "lineHeight",
        propVal: lineHeight
    });
}
function addFontsEventHandlers() {
    document.querySelector(".gpth-settings #fontFamily").addEventListener("change", applyFontFamily);
    document.querySelector(".gpth-settings #fontSize").addEventListener("input", applyFontSize);
    document.querySelector(".gpth-settings #letterSpacing").addEventListener("input", applyLetterSpacing);
    document.querySelector(".gpth-settings #lineHeight").addEventListener("input", applyLineHeight);
    document.querySelector(".gpth-settings #resetFont").addEventListener("click", resetToDefaults);
}
function initFonts() {
    getFontsFromStorage();
}
// Init
initFonts();

},{"webextension-polyfill":"Zel51","../utils/fontsConverting":"2z8mC","./components/renderFonts":"hOcoo","@parcel/transformer-js/src/esmodule-helpers.js":"4IpBY"}],"2z8mC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pxToRem", ()=>pxToRem);
parcelHelpers.export(exports, "remToPx", ()=>remToPx);
const pxToRem = (px)=>`${px / 16}rem`;
const remToPx = (rem)=>`${rem * 16}px`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4IpBY"}],"hOcoo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderFont", ()=>renderFont);
parcelHelpers.export(exports, "renderButton", ()=>renderButton);
function renderFont({ name, className, inputId, inputType, inputValue, inputPlaceholder }) {
    return `
        <div class="${className} text-xs mb-2 flex flex-col flex-1">
            <label for="${inputId}" class="uppercase text-xs mb-1 font-semibold">${name} ${inputId === "fontSize" ? '(<code class="text-xs">px</code>)' : ""}:</label>
            <input type="${inputType}" id="${inputId}" value="${inputValue}" placeholder="${inputPlaceholder}" class="bg-token-sidebar-surface-secondary rounded-lg outline-none border-none p-3">
        </div>`;
}
function renderButton({ name, className, id, content, disabled = false }) {
    return `
        <button id="${id}" class="btn block relative text-center ${className}" ${disabled ? "disabled" : ""}>
            ${content}
        </button>`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4IpBY"}]},["5qqt3","3q87D"], "3q87D", "parcelRequire2158")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRTtJQUMvRixPQUFPLENBQUM7b0JBQ1csRUFBRSxVQUFVO3dCQUNSLEVBQUUsUUFBUSwrQ0FBK0MsRUFBRSxLQUFLLENBQUMsRUFDdkYsWUFBWSxhQUFhLHNDQUFzQyxHQUMvRDt5QkFDdUIsRUFBRSxVQUFVLE1BQU0sRUFBRSxRQUFRLFNBQVMsRUFBRSxXQUFXLGVBQWUsRUFBRSxpQkFBaUI7Y0FDL0YsQ0FBQztBQUNmO0FBRU8sU0FBUyxhQUFhLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsS0FBSyxFQUFFO0lBQzlFLE9BQU8sQ0FBQztvQkFDVyxFQUFFLEdBQUcsd0NBQXdDLEVBQUUsVUFBVSxFQUFFLEVBQUUsV0FBVyxhQUFhLEdBQUc7WUFDaEcsRUFBRSxRQUFRO2lCQUNMLENBQUM7QUFDbEIiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtYnJvd3Nlci1obXIvbGliL3J1bnRpbWUtYTY1Yzc1YTdlMDMwZGY2Zi5qcyIsInNyYy9qcy9jb250ZW50LmpzIiwic3JjL2pzL2FwcC9mbG9hdGluZ0J0bi5qcyIsIm5vZGVfbW9kdWxlcy93ZWJleHRlbnNpb24tcG9seWZpbGwvZGlzdC9icm93c2VyLXBvbHlmaWxsLmpzIiwic3JjL2pzL2FwcC9pY29ucy5qcyIsIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIiwic3JjL2pzL3V0aWxzL2hleFRvSFNMLmpzIiwic3JjL2pzL2FwcC9jdXN0b21Gb250cy5qcyIsInNyYy9qcy91dGlscy9mb250c0NvbnZlcnRpbmcuanMiLCJzcmMvanMvYXBwL2NvbXBvbmVudHMvcmVuZGVyRm9udHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEhNUl9IT1NUID0gXCJsb2NhbGhvc3RcIjt2YXIgSE1SX1BPUlQgPSAxMjM0O3ZhciBITVJfU0VDVVJFID0gZmFsc2U7dmFyIEhNUl9FTlZfSEFTSCA9IFwiZGRmNmUwNzI0YmQzNThiZFwiO3ZhciBITVJfVVNFX1NTRSA9IGZhbHNlO21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRCA9IFwiYzVjOTE4MDI2NzI3YTc3NlwiO1widXNlIHN0cmljdFwiO1xuXG4vKiBnbG9iYWwgSE1SX0hPU1QsIEhNUl9QT1JULCBITVJfRU5WX0hBU0gsIEhNUl9TRUNVUkUsIEhNUl9VU0VfU1NFLCBjaHJvbWUsIGJyb3dzZXIsIF9fcGFyY2VsX19pbXBvcnRfXywgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXywgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlICovXG4vKjo6XG5pbXBvcnQgdHlwZSB7XG4gIEhNUkFzc2V0LFxuICBITVJNZXNzYWdlLFxufSBmcm9tICdAcGFyY2VsL3JlcG9ydGVyLWRldi1zZXJ2ZXIvc3JjL0hNUlNlcnZlci5qcyc7XG5pbnRlcmZhY2UgUGFyY2VsUmVxdWlyZSB7XG4gIChzdHJpbmcpOiBtaXhlZDtcbiAgY2FjaGU6IHt8W3N0cmluZ106IFBhcmNlbE1vZHVsZXx9O1xuICBob3REYXRhOiB7fFtzdHJpbmddOiBtaXhlZHx9O1xuICBNb2R1bGU6IGFueTtcbiAgcGFyZW50OiA/UGFyY2VsUmVxdWlyZTtcbiAgaXNQYXJjZWxSZXF1aXJlOiB0cnVlO1xuICBtb2R1bGVzOiB7fFtzdHJpbmddOiBbRnVuY3Rpb24sIHt8W3N0cmluZ106IHN0cmluZ3x9XXx9O1xuICBITVJfQlVORExFX0lEOiBzdHJpbmc7XG4gIHJvb3Q6IFBhcmNlbFJlcXVpcmU7XG59XG5pbnRlcmZhY2UgUGFyY2VsTW9kdWxlIHtcbiAgaG90OiB7fFxuICAgIGRhdGE6IG1peGVkLFxuICAgIGFjY2VwdChjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICBkaXNwb3NlKGNiOiAobWl4ZWQpID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGFjY2VwdChkZXBzOiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nLCBjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBkZWNsaW5lKCk6IHZvaWQsXG4gICAgX2FjY2VwdENhbGxiYWNrczogQXJyYXk8KEZ1bmN0aW9uKSA9PiB2b2lkPixcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogQXJyYXk8KG1peGVkKSA9PiB2b2lkPixcbiAgfH07XG59XG5pbnRlcmZhY2UgRXh0ZW5zaW9uQ29udGV4dCB7XG4gIHJ1bnRpbWU6IHt8XG4gICAgcmVsb2FkKCk6IHZvaWQsXG4gICAgZ2V0VVJMKHVybDogc3RyaW5nKTogc3RyaW5nO1xuICAgIGdldE1hbmlmZXN0KCk6IHttYW5pZmVzdF92ZXJzaW9uOiBudW1iZXIsIC4uLn07XG4gIHx9O1xufVxuZGVjbGFyZSB2YXIgbW9kdWxlOiB7YnVuZGxlOiBQYXJjZWxSZXF1aXJlLCAuLi59O1xuZGVjbGFyZSB2YXIgSE1SX0hPU1Q6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9QT1JUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfRU5WX0hBU0g6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9TRUNVUkU6IGJvb2xlYW47XG5kZWNsYXJlIHZhciBITVJfVVNFX1NTRTogYm9vbGVhbjtcbmRlY2xhcmUgdmFyIGNocm9tZTogRXh0ZW5zaW9uQ29udGV4dDtcbmRlY2xhcmUgdmFyIGJyb3dzZXI6IEV4dGVuc2lvbkNvbnRleHQ7XG5kZWNsYXJlIHZhciBfX3BhcmNlbF9faW1wb3J0X186IChzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG5kZWNsYXJlIHZhciBfX3BhcmNlbF9faW1wb3J0U2NyaXB0c19fOiAoc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuZGVjbGFyZSB2YXIgZ2xvYmFsVGhpczogdHlwZW9mIHNlbGY7XG5kZWNsYXJlIHZhciBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGU6IE9iamVjdDtcbiovXG52YXIgT1ZFUkxBWV9JRCA9ICdfX3BhcmNlbF9fZXJyb3JfX292ZXJsYXlfXyc7XG52YXIgT2xkTW9kdWxlID0gbW9kdWxlLmJ1bmRsZS5Nb2R1bGU7XG5mdW5jdGlvbiBNb2R1bGUobW9kdWxlTmFtZSkge1xuICBPbGRNb2R1bGUuY2FsbCh0aGlzLCBtb2R1bGVOYW1lKTtcbiAgdGhpcy5ob3QgPSB7XG4gICAgZGF0YTogbW9kdWxlLmJ1bmRsZS5ob3REYXRhW21vZHVsZU5hbWVdLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IFtdLFxuICAgIF9kaXNwb3NlQ2FsbGJhY2tzOiBbXSxcbiAgICBhY2NlcHQ6IGZ1bmN0aW9uIChmbikge1xuICAgICAgdGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2goZm4gfHwgZnVuY3Rpb24gKCkge30pO1xuICAgIH0sXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKGZuKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2goZm4pO1xuICAgIH1cbiAgfTtcbiAgbW9kdWxlLmJ1bmRsZS5ob3REYXRhW21vZHVsZU5hbWVdID0gdW5kZWZpbmVkO1xufVxubW9kdWxlLmJ1bmRsZS5Nb2R1bGUgPSBNb2R1bGU7XG5tb2R1bGUuYnVuZGxlLmhvdERhdGEgPSB7fTtcbnZhciBjaGVja2VkQXNzZXRzIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi8sIGFzc2V0c1RvRGlzcG9zZSAvKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovLCBhc3NldHNUb0FjY2VwdCAvKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovO1xuXG5mdW5jdGlvbiBnZXRIb3N0bmFtZSgpIHtcbiAgcmV0dXJuIEhNUl9IT1NUIHx8IChsb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKCdodHRwJykgPT09IDAgPyBsb2NhdGlvbi5ob3N0bmFtZSA6ICdsb2NhbGhvc3QnKTtcbn1cbmZ1bmN0aW9uIGdldFBvcnQoKSB7XG4gIHJldHVybiBITVJfUE9SVCB8fCBsb2NhdGlvbi5wb3J0O1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG52YXIgcGFyZW50ID0gbW9kdWxlLmJ1bmRsZS5wYXJlbnQ7XG5pZiAoKCFwYXJlbnQgfHwgIXBhcmVudC5pc1BhcmNlbFJlcXVpcmUpICYmIHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gIHZhciBwb3J0ID0gZ2V0UG9ydCgpO1xuICB2YXIgcHJvdG9jb2wgPSBITVJfU0VDVVJFIHx8IGxvY2F0aW9uLnByb3RvY29sID09ICdodHRwczonICYmICFbJ2xvY2FsaG9zdCcsICcxMjcuMC4wLjEnLCAnMC4wLjAuMCddLmluY2x1ZGVzKGhvc3RuYW1lKSA/ICd3c3MnIDogJ3dzJztcbiAgdmFyIHdzO1xuICBpZiAoSE1SX1VTRV9TU0UpIHtcbiAgICB3cyA9IG5ldyBFdmVudFNvdXJjZSgnL19fcGFyY2VsX2htcicpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICB3cyA9IG5ldyBXZWJTb2NrZXQocHJvdG9jb2wgKyAnOi8vJyArIGhvc3RuYW1lICsgKHBvcnQgPyAnOicgKyBwb3J0IDogJycpICsgJy8nKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHdzID0ge307XG4gICAgfVxuICB9XG5cbiAgLy8gV2ViIGV4dGVuc2lvbiBjb250ZXh0XG4gIHZhciBleHRDdHggPSB0eXBlb2YgYnJvd3NlciA9PT0gJ3VuZGVmaW5lZCcgPyB0eXBlb2YgY2hyb21lID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBjaHJvbWUgOiBicm93c2VyO1xuXG4gIC8vIFNhZmFyaSBkb2Vzbid0IHN1cHBvcnQgc291cmNlVVJMIGluIGVycm9yIHN0YWNrcy5cbiAgLy8gZXZhbCBtYXkgYWxzbyBiZSBkaXNhYmxlZCB2aWEgQ1NQLCBzbyBkbyBhIHF1aWNrIGNoZWNrLlxuICB2YXIgc3VwcG9ydHNTb3VyY2VVUkwgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICAoMCwgZXZhbCkoJ3Rocm93IG5ldyBFcnJvcihcInRlc3RcIik7IC8vIyBzb3VyY2VVUkw9dGVzdC5qcycpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBzdXBwb3J0c1NvdXJjZVVSTCA9IGVyci5zdGFjay5pbmNsdWRlcygndGVzdC5qcycpO1xuICB9XG5cbiAgLy8gJEZsb3dGaXhNZVxuICB3cy5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbiAoZXZlbnQgLyo6IHtkYXRhOiBzdHJpbmcsIC4uLn0gKi8pIHtcbiAgICBjaGVja2VkQXNzZXRzID0ge30gLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqLztcbiAgICBhc3NldHNUb0FjY2VwdCA9IFtdO1xuICAgIGFzc2V0c1RvRGlzcG9zZSA9IFtdO1xuICAgIHZhciBkYXRhIC8qOiBITVJNZXNzYWdlICovID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICBpZiAoZGF0YS50eXBlID09PSAndXBkYXRlJykge1xuICAgICAgLy8gUmVtb3ZlIGVycm9yIG92ZXJsYXkgaWYgdGhlcmUgaXMgb25lXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgIH1cbiAgICAgIGxldCBhc3NldHMgPSBkYXRhLmFzc2V0cy5maWx0ZXIoYXNzZXQgPT4gYXNzZXQuZW52SGFzaCA9PT0gSE1SX0VOVl9IQVNIKTtcblxuICAgICAgLy8gSGFuZGxlIEhNUiBVcGRhdGVcbiAgICAgIGxldCBoYW5kbGVkID0gYXNzZXRzLmV2ZXJ5KGFzc2V0ID0+IHtcbiAgICAgICAgcmV0dXJuIGFzc2V0LnR5cGUgPT09ICdjc3MnIHx8IGFzc2V0LnR5cGUgPT09ICdqcycgJiYgaG1yQWNjZXB0Q2hlY2sobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldC5pZCwgYXNzZXQuZGVwc0J5QnVuZGxlKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuXG4gICAgICAgIC8vIERpc3BhdGNoIGN1c3RvbSBldmVudCBzbyBvdGhlciBydW50aW1lcyAoZS5nIFJlYWN0IFJlZnJlc2gpIGFyZSBhd2FyZS5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBDdXN0b21FdmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3BhcmNlbGhtcmFjY2VwdCcpKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBobXJBcHBseVVwZGF0ZXMoYXNzZXRzKTtcblxuICAgICAgICAvLyBEaXNwb3NlIGFsbCBvbGQgYXNzZXRzLlxuICAgICAgICBsZXQgcHJvY2Vzc2VkQXNzZXRzID0ge30gLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqLztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NldHNUb0Rpc3Bvc2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgaWQgPSBhc3NldHNUb0Rpc3Bvc2VbaV1bMV07XG4gICAgICAgICAgaWYgKCFwcm9jZXNzZWRBc3NldHNbaWRdKSB7XG4gICAgICAgICAgICBobXJEaXNwb3NlKGFzc2V0c1RvRGlzcG9zZVtpXVswXSwgaWQpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkQXNzZXRzW2lkXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUnVuIGFjY2VwdCBjYWxsYmFja3MuIFRoaXMgd2lsbCBhbHNvIHJlLWV4ZWN1dGUgb3RoZXIgZGlzcG9zZWQgYXNzZXRzIGluIHRvcG9sb2dpY2FsIG9yZGVyLlxuICAgICAgICBwcm9jZXNzZWRBc3NldHMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NldHNUb0FjY2VwdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBpZCA9IGFzc2V0c1RvQWNjZXB0W2ldWzFdO1xuICAgICAgICAgIGlmICghcHJvY2Vzc2VkQXNzZXRzW2lkXSkge1xuICAgICAgICAgICAgaG1yQWNjZXB0KGFzc2V0c1RvQWNjZXB0W2ldWzBdLCBpZCk7XG4gICAgICAgICAgICBwcm9jZXNzZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBmdWxsUmVsb2FkKCk7XG4gICAgfVxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIC8vIExvZyBwYXJjZWwgZXJyb3JzIHRvIGNvbnNvbGVcbiAgICAgIGZvciAobGV0IGFuc2lEaWFnbm9zdGljIG9mIGRhdGEuZGlhZ25vc3RpY3MuYW5zaSkge1xuICAgICAgICBsZXQgc3RhY2sgPSBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgPyBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgOiBhbnNpRGlhZ25vc3RpYy5zdGFjaztcbiAgICAgICAgY29uc29sZS5lcnJvcign8J+aqCBbcGFyY2VsXTogJyArIGFuc2lEaWFnbm9zdGljLm1lc3NhZ2UgKyAnXFxuJyArIHN0YWNrICsgJ1xcblxcbicgKyBhbnNpRGlhZ25vc3RpYy5oaW50cy5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBSZW5kZXIgdGhlIGZhbmN5IGh0bWwgb3ZlcmxheVxuICAgICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgICAgdmFyIG92ZXJsYXkgPSBjcmVhdGVFcnJvck92ZXJsYXkoZGF0YS5kaWFnbm9zdGljcy5odG1sKTtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgaWYgKHdzIGluc3RhbmNlb2YgV2ViU29ja2V0KSB7XG4gICAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5tZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1twYXJjZWxdIPCfmqggQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciB3YXMgbG9zdCcpO1xuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIHJlbW92ZUVycm9yT3ZlcmxheSgpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPVkVSTEFZX0lEKTtcbiAgaWYgKG92ZXJsYXkpIHtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIGNvbnNvbGUubG9nKCdbcGFyY2VsXSDinKggRXJyb3IgcmVzb2x2ZWQnKTtcbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRXJyb3JPdmVybGF5KGRpYWdub3N0aWNzKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuaWQgPSBPVkVSTEFZX0lEO1xuICBsZXQgZXJyb3JIVE1MID0gJzxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiBibGFjazsgb3BhY2l0eTogMC44NTsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogd2hpdGU7IHBvc2l0aW9uOiBmaXhlZDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgdG9wOiAwcHg7IGxlZnQ6IDBweDsgcGFkZGluZzogMzBweDsgZm9udC1mYW1pbHk6IE1lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlOyB6LWluZGV4OiA5OTk5O1wiPic7XG4gIGZvciAobGV0IGRpYWdub3N0aWMgb2YgZGlhZ25vc3RpY3MpIHtcbiAgICBsZXQgc3RhY2sgPSBkaWFnbm9zdGljLmZyYW1lcy5sZW5ndGggPyBkaWFnbm9zdGljLmZyYW1lcy5yZWR1Y2UoKHAsIGZyYW1lKSA9PiB7XG4gICAgICByZXR1cm4gYCR7cH1cbjxhIGhyZWY9XCIvX19wYXJjZWxfbGF1bmNoX2VkaXRvcj9maWxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGZyYW1lLmxvY2F0aW9uKX1cIiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBjb2xvcjogIzg4OFwiIG9uY2xpY2s9XCJmZXRjaCh0aGlzLmhyZWYpOyByZXR1cm4gZmFsc2VcIj4ke2ZyYW1lLmxvY2F0aW9ufTwvYT5cbiR7ZnJhbWUuY29kZX1gO1xuICAgIH0sICcnKSA6IGRpYWdub3N0aWMuc3RhY2s7XG4gICAgZXJyb3JIVE1MICs9IGBcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tdG9wOiAyMHB4O1wiPlxuICAgICAgICAgIPCfmqggJHtkaWFnbm9zdGljLm1lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cHJlPiR7c3RhY2t9PC9wcmU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgJHtkaWFnbm9zdGljLmhpbnRzLm1hcChoaW50ID0+ICc8ZGl2PvCfkqEgJyArIGhpbnQgKyAnPC9kaXY+Jykuam9pbignJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke2RpYWdub3N0aWMuZG9jdW1lbnRhdGlvbiA/IGA8ZGl2PvCfk50gPGEgc3R5bGU9XCJjb2xvcjogdmlvbGV0XCIgaHJlZj1cIiR7ZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9ufVwiIHRhcmdldD1cIl9ibGFua1wiPkxlYXJuIG1vcmU8L2E+PC9kaXY+YCA6ICcnfVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuICBlcnJvckhUTUwgKz0gJzwvZGl2Pic7XG4gIG92ZXJsYXkuaW5uZXJIVE1MID0gZXJyb3JIVE1MO1xuICByZXR1cm4gb3ZlcmxheTtcbn1cbmZ1bmN0aW9uIGZ1bGxSZWxvYWQoKSB7XG4gIGlmICgncmVsb2FkJyBpbiBsb2NhdGlvbikge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9IGVsc2UgaWYgKGV4dEN0eCAmJiBleHRDdHgucnVudGltZSAmJiBleHRDdHgucnVudGltZS5yZWxvYWQpIHtcbiAgICBleHRDdHgucnVudGltZS5yZWxvYWQoKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0UGFyZW50cyhidW5kbGUsIGlkKSAvKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICove1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIHBhcmVudHMgPSBbXTtcbiAgdmFyIGssIGQsIGRlcDtcbiAgZm9yIChrIGluIG1vZHVsZXMpIHtcbiAgICBmb3IgKGQgaW4gbW9kdWxlc1trXVsxXSkge1xuICAgICAgZGVwID0gbW9kdWxlc1trXVsxXVtkXTtcbiAgICAgIGlmIChkZXAgPT09IGlkIHx8IEFycmF5LmlzQXJyYXkoZGVwKSAmJiBkZXBbZGVwLmxlbmd0aCAtIDFdID09PSBpZCkge1xuICAgICAgICBwYXJlbnRzLnB1c2goW2J1bmRsZSwga10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIHBhcmVudHMgPSBwYXJlbnRzLmNvbmNhdChnZXRQYXJlbnRzKGJ1bmRsZS5wYXJlbnQsIGlkKSk7XG4gIH1cbiAgcmV0dXJuIHBhcmVudHM7XG59XG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmspIHtcbiAgdmFyIGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICBpZiAoIWhyZWYpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5ld0xpbmsgPSBsaW5rLmNsb25lTm9kZSgpO1xuICBuZXdMaW5rLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobGluay5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgfVxuICB9O1xuICBuZXdMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsXG4gIC8vICRGbG93Rml4TWVcbiAgaHJlZi5zcGxpdCgnPycpWzBdICsgJz8nICsgRGF0ZS5ub3coKSk7XG4gIC8vICRGbG93Rml4TWVcbiAgbGluay5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdMaW5rLCBsaW5rLm5leHRTaWJsaW5nKTtcbn1cbnZhciBjc3NUaW1lb3V0ID0gbnVsbDtcbmZ1bmN0aW9uIHJlbG9hZENTUygpIHtcbiAgaWYgKGNzc1RpbWVvdXQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY3NzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdXG4gICAgICB2YXIgaHJlZiAvKjogc3RyaW5nICovID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICAgICAgdmFyIHNlcnZlZEZyb21ITVJTZXJ2ZXIgPSBob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgPyBuZXcgUmVnRXhwKCdeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOicgKyBnZXRQb3J0KCkpLnRlc3QoaHJlZikgOiBocmVmLmluZGV4T2YoaG9zdG5hbWUgKyAnOicgKyBnZXRQb3J0KCkpO1xuICAgICAgdmFyIGFic29sdXRlID0gL15odHRwcz86XFwvXFwvL2kudGVzdChocmVmKSAmJiBocmVmLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSAhPT0gMCAmJiAhc2VydmVkRnJvbUhNUlNlcnZlcjtcbiAgICAgIGlmICghYWJzb2x1dGUpIHtcbiAgICAgICAgdXBkYXRlTGluayhsaW5rc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNzc1RpbWVvdXQgPSBudWxsO1xuICB9LCA1MCk7XG59XG5mdW5jdGlvbiBobXJEb3dubG9hZChhc3NldCkge1xuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2pzJykge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQuc3JjID0gYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpO1xuICAgICAgaWYgKGFzc2V0Lm91dHB1dEZvcm1hdCA9PT0gJ2VzbW9kdWxlJykge1xuICAgICAgICBzY3JpcHQudHlwZSA9ICdtb2R1bGUnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdmFyIF9kb2N1bWVudCRoZWFkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4gcmVzb2x2ZShzY3JpcHQpO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgKF9kb2N1bWVudCRoZWFkID0gZG9jdW1lbnQuaGVhZCkgPT09IG51bGwgfHwgX2RvY3VtZW50JGhlYWQgPT09IHZvaWQgMCB8fCBfZG9jdW1lbnQkaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gV29ya2VyIHNjcmlwdHNcbiAgICAgIGlmIChhc3NldC5vdXRwdXRGb3JtYXQgPT09ICdlc21vZHVsZScpIHtcbiAgICAgICAgcmV0dXJuIF9fcGFyY2VsX19pbXBvcnRfXyhhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXyhhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCkpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIGhtckFwcGx5VXBkYXRlcyhhc3NldHMpIHtcbiAgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGxldCBzY3JpcHRzVG9SZW1vdmU7XG4gIHRyeSB7XG4gICAgLy8gSWYgc291cmNlVVJMIGNvbW1lbnRzIGFyZW4ndCBzdXBwb3J0ZWQgaW4gZXZhbCwgd2UgbmVlZCB0byBsb2FkXG4gICAgLy8gdGhlIHVwZGF0ZSBmcm9tIHRoZSBkZXYgc2VydmVyIG92ZXIgSFRUUCBzbyB0aGF0IHN0YWNrIHRyYWNlc1xuICAgIC8vIGFyZSBjb3JyZWN0IGluIGVycm9ycy9sb2dzLiBUaGlzIGlzIG11Y2ggc2xvd2VyIHRoYW4gZXZhbCwgc29cbiAgICAvLyB3ZSBvbmx5IGRvIGl0IGlmIG5lZWRlZCAoY3VycmVudGx5IGp1c3QgU2FmYXJpKS5cbiAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM3Mjk3XG4gICAgLy8gVGhpcyBwYXRoIGlzIGFsc28gdGFrZW4gaWYgYSBDU1AgZGlzYWxsb3dzIGV2YWwuXG4gICAgaWYgKCFzdXBwb3J0c1NvdXJjZVVSTCkge1xuICAgICAgbGV0IHByb21pc2VzID0gYXNzZXRzLm1hcChhc3NldCA9PiB7XG4gICAgICAgIHZhciBfaG1yRG93bmxvYWQ7XG4gICAgICAgIHJldHVybiAoX2htckRvd25sb2FkID0gaG1yRG93bmxvYWQoYXNzZXQpKSA9PT0gbnVsbCB8fCBfaG1yRG93bmxvYWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9obXJEb3dubG9hZC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIC8vIFdlYiBleHRlbnNpb24gZml4XG4gICAgICAgICAgaWYgKGV4dEN0eCAmJiBleHRDdHgucnVudGltZSAmJiBleHRDdHgucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb24gPT0gMyAmJiB0eXBlb2YgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlICE9ICd1bmRlZmluZWQnICYmIGdsb2JhbCBpbnN0YW5jZW9mIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSkge1xuICAgICAgICAgICAgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHNjcmlwdHNUb1JlbW92ZSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG4gICAgYXNzZXRzLmZvckVhY2goZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICBobXJBcHBseShtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0KTtcbiAgICB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZTtcbiAgICBpZiAoc2NyaXB0c1RvUmVtb3ZlKSB7XG4gICAgICBzY3JpcHRzVG9SZW1vdmUuZm9yRWFjaChzY3JpcHQgPT4ge1xuICAgICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgICAgdmFyIF9kb2N1bWVudCRoZWFkMjtcbiAgICAgICAgICAoX2RvY3VtZW50JGhlYWQyID0gZG9jdW1lbnQuaGVhZCkgPT09IG51bGwgfHwgX2RvY3VtZW50JGhlYWQyID09PSB2b2lkIDAgfHwgX2RvY3VtZW50JGhlYWQyLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gaG1yQXBwbHkoYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLCBhc3NldCAvKjogIEhNUkFzc2V0ICovKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2NzcycpIHtcbiAgICByZWxvYWRDU1MoKTtcbiAgfSBlbHNlIGlmIChhc3NldC50eXBlID09PSAnanMnKSB7XG4gICAgbGV0IGRlcHMgPSBhc3NldC5kZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdO1xuICAgIGlmIChkZXBzKSB7XG4gICAgICBpZiAobW9kdWxlc1thc3NldC5pZF0pIHtcbiAgICAgICAgLy8gUmVtb3ZlIGRlcGVuZGVuY2llcyB0aGF0IGFyZSByZW1vdmVkIGFuZCB3aWxsIGJlY29tZSBvcnBoYW5lZC5cbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3Nhcnkgc28gdGhhdCBpZiB0aGUgYXNzZXQgaXMgYWRkZWQgYmFjayBhZ2FpbiwgdGhlIGNhY2hlIGlzIGdvbmUsIGFuZCB3ZSBwcmV2ZW50IGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAgICAgICAgbGV0IG9sZERlcHMgPSBtb2R1bGVzW2Fzc2V0LmlkXVsxXTtcbiAgICAgICAgZm9yIChsZXQgZGVwIGluIG9sZERlcHMpIHtcbiAgICAgICAgICBpZiAoIWRlcHNbZGVwXSB8fCBkZXBzW2RlcF0gIT09IG9sZERlcHNbZGVwXSkge1xuICAgICAgICAgICAgbGV0IGlkID0gb2xkRGVwc1tkZXBdO1xuICAgICAgICAgICAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgICAgICAgaWYgKHBhcmVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGhtckRlbGV0ZShtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0c1NvdXJjZVVSTCkge1xuICAgICAgICAvLyBHbG9iYWwgZXZhbC4gV2Ugd291bGQgdXNlIGBuZXcgRnVuY3Rpb25gIGhlcmUgYnV0IGJyb3dzZXJcbiAgICAgICAgLy8gc3VwcG9ydCBmb3Igc291cmNlIG1hcHMgaXMgYmV0dGVyIHdpdGggZXZhbC5cbiAgICAgICAgKDAsIGV2YWwpKGFzc2V0Lm91dHB1dCk7XG4gICAgICB9XG5cbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGxldCBmbiA9IGdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbYXNzZXQuaWRdO1xuICAgICAgbW9kdWxlc1thc3NldC5pZF0gPSBbZm4sIGRlcHNdO1xuICAgIH0gZWxzZSBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgICAgaG1yQXBwbHkoYnVuZGxlLnBhcmVudCwgYXNzZXQpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gaG1yRGVsZXRlKGJ1bmRsZSwgaWQpIHtcbiAgbGV0IG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChtb2R1bGVzW2lkXSkge1xuICAgIC8vIENvbGxlY3QgZGVwZW5kZW5jaWVzIHRoYXQgd2lsbCBiZWNvbWUgb3JwaGFuZWQgd2hlbiB0aGlzIG1vZHVsZSBpcyBkZWxldGVkLlxuICAgIGxldCBkZXBzID0gbW9kdWxlc1tpZF1bMV07XG4gICAgbGV0IG9ycGhhbnMgPSBbXTtcbiAgICBmb3IgKGxldCBkZXAgaW4gZGVwcykge1xuICAgICAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgZGVwc1tkZXBdKTtcbiAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBvcnBoYW5zLnB1c2goZGVwc1tkZXBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWxldGUgdGhlIG1vZHVsZS4gVGhpcyBtdXN0IGJlIGRvbmUgYmVmb3JlIGRlbGV0aW5nIGRlcGVuZGVuY2llcyBpbiBjYXNlIG9mIGNpcmN1bGFyIGRlcGVuZGVuY2llcy5cbiAgICBkZWxldGUgbW9kdWxlc1tpZF07XG4gICAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07XG5cbiAgICAvLyBOb3cgZGVsZXRlIHRoZSBvcnBoYW5zLlxuICAgIG9ycGhhbnMuZm9yRWFjaChpZCA9PiB7XG4gICAgICBobXJEZWxldGUobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIGhtckRlbGV0ZShidW5kbGUucGFyZW50LCBpZCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGhtckFjY2VwdENoZWNrKGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgaWQgLyo6IHN0cmluZyAqLywgZGVwc0J5QnVuZGxlIC8qOiA/eyBbc3RyaW5nXTogeyBbc3RyaW5nXTogc3RyaW5nIH0gfSovKSB7XG4gIGlmIChobXJBY2NlcHRDaGVja09uZShidW5kbGUsIGlkLCBkZXBzQnlCdW5kbGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBUcmF2ZXJzZSBwYXJlbnRzIGJyZWFkdGggZmlyc3QuIEFsbCBwb3NzaWJsZSBhbmNlc3RyaWVzIG11c3QgYWNjZXB0IHRoZSBITVIgdXBkYXRlLCBvciB3ZSdsbCByZWxvYWQuXG4gIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgbGV0IGFjY2VwdGVkID0gZmFsc2U7XG4gIHdoaWxlIChwYXJlbnRzLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgdiA9IHBhcmVudHMuc2hpZnQoKTtcbiAgICBsZXQgYSA9IGhtckFjY2VwdENoZWNrT25lKHZbMF0sIHZbMV0sIG51bGwpO1xuICAgIGlmIChhKSB7XG4gICAgICAvLyBJZiB0aGlzIHBhcmVudCBhY2NlcHRzLCBzdG9wIHRyYXZlcnNpbmcgdXB3YXJkLCBidXQgc3RpbGwgY29uc2lkZXIgc2libGluZ3MuXG4gICAgICBhY2NlcHRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSwgcXVldWUgdGhlIHBhcmVudHMgaW4gdGhlIG5leHQgbGV2ZWwgdXB3YXJkLlxuICAgICAgbGV0IHAgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgdlsxXSk7XG4gICAgICBpZiAocC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIHBhcmVudHMsIHRoZW4gd2UndmUgcmVhY2hlZCBhbiBlbnRyeSB3aXRob3V0IGFjY2VwdGluZy4gUmVsb2FkLlxuICAgICAgICBhY2NlcHRlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHBhcmVudHMucHVzaCguLi5wKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFjY2VwdGVkO1xufVxuZnVuY3Rpb24gaG1yQWNjZXB0Q2hlY2tPbmUoYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLCBpZCAvKjogc3RyaW5nICovLCBkZXBzQnlCdW5kbGUgLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki8pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChkZXBzQnlCdW5kbGUgJiYgIWRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF0pIHtcbiAgICAvLyBJZiB3ZSByZWFjaGVkIHRoZSByb290IGJ1bmRsZSB3aXRob3V0IGZpbmRpbmcgd2hlcmUgdGhlIGFzc2V0IHNob3VsZCBnbyxcbiAgICAvLyB0aGVyZSdzIG5vdGhpbmcgdG8gZG8uIE1hcmsgYXMgXCJhY2NlcHRlZFwiIHNvIHdlIGRvbid0IHJlbG9hZCB0aGUgcGFnZS5cbiAgICBpZiAoIWJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gaG1yQWNjZXB0Q2hlY2soYnVuZGxlLnBhcmVudCwgaWQsIGRlcHNCeUJ1bmRsZSk7XG4gIH1cbiAgaWYgKGNoZWNrZWRBc3NldHNbaWRdKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY2hlY2tlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYXNzZXRzVG9EaXNwb3NlLnB1c2goW2J1bmRsZSwgaWRdKTtcbiAgaWYgKCFjYWNoZWQgfHwgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgYXNzZXRzVG9BY2NlcHQucHVzaChbYnVuZGxlLCBpZF0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5mdW5jdGlvbiBobXJEaXNwb3NlKGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgaWQgLyo6IHN0cmluZyAqLykge1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYnVuZGxlLmhvdERhdGFbaWRdID0ge307XG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCkge1xuICAgIGNhY2hlZC5ob3QuZGF0YSA9IGJ1bmRsZS5ob3REYXRhW2lkXTtcbiAgfVxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICBjYihidW5kbGUuaG90RGF0YVtpZF0pO1xuICAgIH0pO1xuICB9XG4gIGRlbGV0ZSBidW5kbGUuY2FjaGVbaWRdO1xufVxuZnVuY3Rpb24gaG1yQWNjZXB0KGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgaWQgLyo6IHN0cmluZyAqLykge1xuICAvLyBFeGVjdXRlIHRoZSBtb2R1bGUuXG4gIGJ1bmRsZShpZCk7XG5cbiAgLy8gUnVuIHRoZSBhY2NlcHQgY2FsbGJhY2tzIGluIHRoZSBuZXcgdmVyc2lvbiBvZiB0aGUgbW9kdWxlLlxuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIHZhciBhc3NldHNUb0Fsc29BY2NlcHQgPSBjYihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgfSk7XG4gICAgICBpZiAoYXNzZXRzVG9BbHNvQWNjZXB0ICYmIGFzc2V0c1RvQWNjZXB0Lmxlbmd0aCkge1xuICAgICAgICBhc3NldHNUb0Fsc29BY2NlcHQuZm9yRWFjaChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIGhtckRpc3Bvc2UoYVswXSwgYVsxXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vICRGbG93Rml4TWVbbWV0aG9kLXVuYmluZGluZ11cbiAgICAgICAgYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShhc3NldHNUb0FjY2VwdCwgYXNzZXRzVG9BbHNvQWNjZXB0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCAnLi9hcHAvZmxvYXRpbmdCdG4nXHJcbmltcG9ydCAnLi9hcHAvY3VzdG9tRm9udHMnXHJcbiIsIi8vIFVzZSBhIGNyb3NzLWJyb3dzZXIgc3RvcmFnZSBBUEk6XHJcbmltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCdcclxuXHJcbi8vIGltcG9ydCB7IGljb25fc3VuLCBpY29uX21vb24sIGljb25fbW9vbl9mdWxsLCBpY29uX3NldHRpbmdzLCBpY29uX3BhaW50LCBpY29uX3BhbGV0dGUgfSBmcm9tICcuL2ljb25zLmpzJ1xyXG5pbXBvcnQgeyBpY29uX3N1biwgaWNvbl9tb29uLCBpY29uX21vb25fZnVsbCwgaWNvbl9zZXR0aW5ncywgaWNvbl9wYWludCB9IGZyb20gJy4vaWNvbnMuanMnXHJcbi8vIGltcG9ydCBncHRoVG9nZ2xlSW1nIGZyb20gJy4uLy4uL2ltZy9ncHRoLXRvZ2dsZS1jaXJjbGVkLndlYnAnXHJcbmltcG9ydCB7IGhleFRvSFNMIH0gZnJvbSAnLi4vdXRpbHMvaGV4VG9IU0wnXHJcblxyXG5pbXBvcnQgeyBmb250SHRtbENvZGUsIGFkZEZvbnRzRXZlbnRIYW5kbGVycyB9IGZyb20gJy4vY3VzdG9tRm9udHMnXHJcbi8vIGNvbnNvbGUubG9nKGZvbnRIdG1sQ29kZSlcclxuXHJcbi8vIGxldCBpc09wdGlvbnNTaG93biA9IGZhbHNlXHJcblxyXG4vLyBHbG9iYWwgVmFyaWFibGVzXHJcbmxldCBpc09wdGlvbnNTaG93biA9IGZhbHNlXHJcbmxldCAkaHRtbFRhZ1xyXG5sZXQgJGZsb2F0aW5nQnRuXHJcbmxldCAkZmxvYXRpbmdPcHRpb25zXHJcbmxldCAkZmxvYXRpbmdCdG5zQ29udGFpbmVyXHJcblxyXG5sZXQgJHNldHRpbmdzIC8vIEAgQWNjZW50IFRoZW1lXHJcbmxldCAkcmVzZXRBbGxCdG5cclxuLy8gbGV0IGlzU2V0dGluZ3NPcGVuID0gZmFsc2VcclxubGV0IHN0eWxlRWxlbWVudCA9IG51bGwgLy8gRGVjbGFyZSB0aGUgc3R5bGVFbGVtZW50IHZhcmlhYmxlXHJcblxyXG5sZXQgZGVmYXVsdENvbG9yTGlnaHQgPSAnIzZiNGRmZSdcclxubGV0IGRlZmF1bHRDb2xvckRhcmsgPSAnI2NhOTNmYidcclxuLy8gbGV0IGlzRGlzYWJsZWRSZXNldEFsbCA9IHRydWVcclxuXHJcbmNvbnN0IHJlbmRlckNvbG9yc1RhYiA9IGBcclxuXHQ8c2VjdGlvbj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb2xvcnBpY2tlci1jb250YWluZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbG9ycGlja2VyXCI+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJjb2xvclwiIGlkPVwiYWNjZW50TGlnaHRcIiB2YWx1ZT1cIiM2YjRkZmVcIiAvPlxyXG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJhY2NlbnRMaWdodFwiPkFjY2VudCA8c3Bhbj5MaWdodDwvc3Bhbj48L2xhYmVsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbG9ycGlja2VyXCI+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJjb2xvclwiIGlkPVwiYWNjZW50RGFya1wiIHZhbHVlPVwiI2NhOTNmYlwiIC8+XHJcblx0XHRcdFx0PGxhYmVsIGZvcj1cImFjY2VudERhcmtcIj5BY2NlbnQgPHNwYW4+RGFyazwvc3Bhbj48L2xhYmVsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGZvb3RlciBjbGFzcz1cImdyaWQgbS01XCI+XHJcblx0XHRcdDxidXR0b24gaWQ9XCJyZXNldEFsbFNldHRpbmdzXCIgY2xhc3M9XCJidG4gYmxvY2sgcmVsYXRpdmUgYnRuLXByaW1hcnkgdGV4dC1jZW50ZXJcIiBhcz1cImJ1dHRvblwiPlJlc2V0IEFjY2VudHM8L2J1dHRvbj5cclxuXHRcdDwvZm9vdGVyPlxyXG5cdDwvc2VjdGlvbj5cclxuYFxyXG5cclxuLy8gSW5pdGlhbGl6YXRpb25cclxuaW5pdCgpXHJcblxyXG5mdW5jdGlvbiB0YWJzU3dpdGNoaW5nKCkge1xyXG5cdGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3B0aC1zZXR0aW5ncyAudGFiLWJ1dHRvbicpXHJcblx0Y29uc3QgcGFuZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3B0aC1zZXR0aW5ncyAudGFiLXBhbmUnKVxyXG5cclxuXHR0YWJzLmZvckVhY2goKHRhYiwgaW5kZXgpID0+IHtcclxuXHRcdHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1idXR0b24uYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1wYW5lOm5vdCguaGlkZGVuKScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcblxyXG5cdFx0XHR0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuXHRcdFx0cGFuZXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXHJcblx0XHR9KVxyXG5cdH0pXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXRUaGVtZSgpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgeyBncHRoZW1lOiBzdG9yZWRUaGVtZSB9ID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCdncHRoZW1lJylcclxuXHRcdGNvbnN0IHRoZW1lID0gc3RvcmVkVGhlbWUgfHwgKHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScpLm1hdGNoZXMgPyAnbGlnaHQnIDogJ2RhcmsnKVxyXG5cdFx0YXBwbHlUaGVtZSh0aGVtZSlcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIHRoZW1lOicsIGVycm9yKVxyXG5cdH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2V0VGhlbWUodGhlbWUpIHtcclxuXHR0cnkge1xyXG5cdFx0YXdhaXQgYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHsgZ3B0aGVtZTogdGhlbWUgfSlcclxuXHRcdGFwcGx5VGhlbWUodGhlbWUpXHJcblx0XHR0b2dnbGVPcHRpb25zKClcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignRXJyb3Igc2V0dGluZyB0aGVtZTonLCBlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFuZEFwcGVuZFNWR1N0aWNreUJ0bigpIHtcclxuXHRjb25zdCBncHRoRmxvYXRpbmdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdGdwdGhGbG9hdGluZ0J0bi5jbGFzc05hbWUgPSAnZ3B0aF9fZmxvYXRpbmcnXHJcblxyXG5cdC8vIDxpbWcgc3JjPVwiJHtncHRoVG9nZ2xlSW1nfVwiIGFsdD1cImdwdGgtdG9nZ2xlXCIvPlxyXG5cdGxldCBodG1sQ29kZSA9IGBcclxuXHRcdDxkaXYgY2xhc3M9XCJncHRoX19mbG9hdGluZy1pY29uXCI+XHJcblx0XHRcdCR7aWNvbl9wYWludH1cclxuXHRcdDwvZGl2PlxyXG5cdFx0XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ3B0aF9fb3B0aW9uc1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3B0aF9fb3B0aW9ucy1idG5zXCI+XHJcblx0XHRcdFx0PGJ1dHRvbiBpZD1cImxpZ2h0XCIgZGF0YS1ncHRoLXRoZW1lPVwibGlnaHRcIj4ke2ljb25fc3VufTwvYnV0dG9uPlxyXG5cdFx0XHRcdDxidXR0b24gaWQ9XCJkYXJrXCIgZGF0YS1ncHRoLXRoZW1lPVwiZGFya1wiPiR7aWNvbl9tb29ufTwvYnV0dG9uPlxyXG5cdFx0XHRcdDxidXR0b24gaWQ9XCJvbGVkXCIgZGF0YS1ncHRoLXRoZW1lPVwiYmxhY2tcIj4ke2ljb25fbW9vbl9mdWxsfTwvYnV0dG9uPlxyXG5cdFx0XHRcdDxidXR0b24gaWQ9XCJncHRoLW9wZW4tc2V0dGluZ3NcIiBkYXRhLWdwdGgtdGhlbWU9XCJtb3JlXCI+JHtpY29uX3NldHRpbmdzfTwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxuXHJcblx0Ly8gZ3B0aEZsb2F0aW5nQnRuLmlubmVySFRNTCA9IGh0bWxDb2RlXHJcblx0Z3B0aEZsb2F0aW5nQnRuLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbENvZGUpXHJcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChncHRoRmxvYXRpbmdCdG4pXHJcblxyXG5cdC8vIENhY2hlIERPTSBlbGVtZW50cyBhZnRlciBhcHBlbmRpbmdcclxuXHQkaHRtbFRhZyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxyXG5cdCRmbG9hdGluZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoX19mbG9hdGluZycpXHJcblx0JGZsb2F0aW5nT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoX19vcHRpb25zJylcclxuXHQkZmxvYXRpbmdCdG5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdwdGhfX29wdGlvbnMtYnRucycpXHJcblxyXG5cdC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgYWZ0ZXIgRE9NIGVsZW1lbnRzIGFyZSBhcHBlbmRlZFxyXG5cdCRmbG9hdGluZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU9wdGlvbnMpXHJcblx0JGZsb2F0aW5nQnRuc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNoYW5nZVRoZW1lKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2VUaGVtZShlKSB7XHJcblx0Y29uc3QgdGhlbWVCdXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKVxyXG5cdGlmICghdGhlbWVCdXR0b24pIHJldHVyblxyXG5cclxuXHRjb25zdCB0aGVtZSA9IHRoZW1lQnV0dG9uLmlkXHJcblxyXG5cdGlmICh0aGVtZSAhPT0gJ2dwdGgtb3Blbi1zZXR0aW5ncycpIHtcclxuXHRcdHNldFRoZW1lKHRoZW1lKVxyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cclxuXHQvKiBJZiBjbGlja2VkIG9uIFwi4pqZ77iPIE9wZW4gU2V0dGluZ3NcIiAqL1xyXG5cdGlmICh0aGVtZSA9PT0gJ2dwdGgtb3Blbi1zZXR0aW5ncycpIHtcclxuXHRcdG9wZW5TZXR0aW5ncygpXHJcblx0XHQvLyB0b2dnbGVPcHRpb25zKClcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VGhlbWUodGhlbWUpIHtcclxuXHQkaHRtbFRhZy5kYXRhc2V0LmdwdGhlbWUgPSB0aGVtZVxyXG5cdCRodG1sVGFnLnN0eWxlLmNvbG9yU2NoZW1lID0gdGhlbWUgPT09ICdvbGVkJyA/ICdkYXJrJyA6IHRoZW1lXHJcblx0JGh0bWxUYWcuY2xhc3NOYW1lID0gdGhlbWUgPT09ICdvbGVkJyA/ICdkYXJrJyA6IHRoZW1lXHJcblx0aWYgKHRoZW1lICE9PSAnb2xlZCcpICRodG1sVGFnLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1ncHRoZW1lJylcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlT3B0aW9ucygpIHtcclxuXHRpc09wdGlvbnNTaG93biA9ICFpc09wdGlvbnNTaG93blxyXG5cdCRmbG9hdGluZ09wdGlvbnMuY2xhc3NMaXN0LnRvZ2dsZSgnZ3B0aF9fb3B0aW9ucy0tc2hvd24nLCBpc09wdGlvbnNTaG93bilcclxuXHJcblx0aWYgKGlzT3B0aW9uc1Nob3duKSBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU9wdGlvbnMpXHJcblx0ZWxzZSBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU9wdGlvbnMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVPcHRpb25zKGUpIHtcclxuXHRjb25zdCBpc0NsaWNrSW5zaWRlRmxvYXRpbmdCdG4gPSAkZmxvYXRpbmdCdG4uY29udGFpbnMoZS50YXJnZXQpXHJcblx0Y29uc3QgaXNDbGlja0luc2lkZUZsb2F0aW5nT3B0aW9ucyA9ICRmbG9hdGluZ09wdGlvbnMuY29udGFpbnMoZS50YXJnZXQpXHJcblxyXG5cdGlmICghaXNDbGlja0luc2lkZUZsb2F0aW5nQnRuICYmICFpc0NsaWNrSW5zaWRlRmxvYXRpbmdPcHRpb25zKSB0b2dnbGVPcHRpb25zKClcclxuXHJcblx0Ly8gaWYgKCEkZmxvYXRpbmdCdG4uY29udGFpbnMoZS50YXJnZXQpICYmICEkZmxvYXRpbmdUaGVtZU9wdGlvbnMuY29udGFpbnMoZS50YXJnZXQpKSB0b2dnbGVPcHRpb25zKClcclxufVxyXG5cclxuZnVuY3Rpb24gZGVjcmVpc2VGbG9hdGluZ0J0blNpemUoKSB7XHJcblx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHQkZmxvYXRpbmdCdG4uY2xhc3NMaXN0LmFkZCgnZ3B0aF9fZmxvYXRpbmctLXNtYWxsJylcclxuXHR9LCAzMDAwKVxyXG59XHJcblxyXG4vKiBfX19fX19fX19fX19fXyBUSEVNRSBDVVNUT01JWkFUSU9OIC0gQUNDRU5UIFRIRU1FIF9fX19fX19fX19fX19fICovXHJcbmZ1bmN0aW9uIHJlbmRlclNldHRpbmdzKCkge1xyXG5cdGNvbnN0IGdwdGhTZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0Z3B0aFNldHRpbmdzLmNsYXNzTmFtZSA9IGBncHRoLXNldHRpbmdzIGZpeGVkIGZsZXggZmxleC1jb2xgXHJcblxyXG5cdGxldCBodG1sQ29kZSA9IGBcclxuXHRcdDxoZWFkZXIgY2xhc3M9XCJtYi01XCI+XHJcblx0XHRcdDxoMiBjbGFzcz1cIm10LTUgdGV4dC1jZW50ZXIgZm9udC1tZWRpdW1cIj48c3BhbiBjbGFzcz1cImZvbnQtc2VtaWJvbGRcIj5HUFRoZW1lczwvc3Bhbj4gQ3VzdG9taXphdGlvbjwvaDI+XHJcblxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwidGV4dC10b2tlbi10ZXh0LXRlcnRpYXJ5IGhvdmVyOnRleHQtdG9rZW4tdGV4dC1wcmltYXJ5IGFic29sdXRlIHRvcC00IHJpZ2h0LTRcIiBpZD1cImdwdGgtc2V0dGluZ3MtY2xvc2VcIj5cclxuXHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTYuMzQzMTUgNi4zNDMzOEwxNy42NTY5IDE3LjY1NzFNMTcuNjU2OSA2LjM0MzM4TDYuMzQzMTUgMTcuNjU3MVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+PC9zdmc+XHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0PC9oZWFkZXI+XHJcblxyXG5cdFx0PG1haW4+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ0YWJzXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInRhYi1idXR0b25zIGZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBwLTEgbWItNiBmb250LXNlbWlib2xkXCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwidGFiLWJ1dHRvbiBweS0yIHB4LTQgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtY2VudGVyIHJvdW5kZWQtZnVsbCBhY3RpdmVcIj5cclxuXHRcdFx0XHRcdFx0Q29sb3JcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInRhYi1idXR0b24gcHktMiBweC00IGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGxcIj5cclxuXHRcdFx0XHRcdFx0Rm9udFxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwidGFiLWJ1dHRvbiBweS0yIHB4LTQgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtY2VudGVyIHJvdW5kZWQtZnVsbFwiPlxyXG5cdFx0XHRcdFx0XHRBc3NldHNcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YWItY29udGVudCBwLTRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YWItcGFuZSBhY3RpdmVcIiBpZD1cInRhYi1jb2xvcnNcIj5cclxuXHRcdFx0XHRcdFx0JHtyZW5kZXJDb2xvcnNUYWJ9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGFiLXBhbmUgaGlkZGVuXCIgaWQ9XCJ0YWItZm9udHNcIj5cclxuXHRcdFx0XHRcdFx0JHtmb250SHRtbENvZGV9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGFiLXBhbmUgaGlkZGVuXCIgaWQ9XCJ0YWItYXNzZXRzXCI+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC10b2tlbi10ZXh0LXRlcnRpYXJ5IHRleHQtc20gbWItMiBmb250LXdlaWdodC0yMDBcIj5vb29wcywgc3VjaCBlbXB0eTwvcD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LXRva2VuLXRleHQtc2Vjb25kYXJ5IHRleHQtbWQgZm9udC1zZW1pYm9sZFwiPkNvbWluZyBTb29uPC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9tYWluPlxyXG5cdGBcclxuXHJcblx0Z3B0aFNldHRpbmdzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbENvZGUpXHJcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChncHRoU2V0dGluZ3MpXHJcblxyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncHRoLXNldHRpbmdzLWNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVNldHRpbmdzKVxyXG5cclxuXHQkc2V0dGluZ3MgPSBncHRoU2V0dGluZ3NcclxuXHJcblx0dGFic1N3aXRjaGluZygpXHJcblxyXG5cdCRyZXNldEFsbEJ0biA9ICRzZXR0aW5ncy5xdWVyeVNlbGVjdG9yKCcjcmVzZXRBbGxTZXR0aW5ncycpXHJcblx0JHJlc2V0QWxsQnRuLmRpc2FibGVkID0gdHJ1ZVxyXG5cclxuXHQkc2V0dGluZ3MucXVlcnlTZWxlY3RvcignI3Jlc2V0QWxsU2V0dGluZ3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0QWxsU2V0dGluZ3MpXHJcblxyXG5cdGFkZEZvbnRzRXZlbnRIYW5kbGVycygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5TZXR0aW5ncygpIHtcclxuXHQkc2V0dGluZ3MuY2xhc3NMaXN0LmFkZCgnZ3B0aC1zZXR0aW5ncy0tb3BlbicpXHJcblx0JHNldHRpbmdzLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVTZXR0aW5nc09wZW5lZClcclxuXHQkcmVzZXRBbGxCdG4uZGlzYWJsZWQgPSBmYWxzZVxyXG5cclxuXHQvLyBpc09wdGlvbnNTaG93biA9IGZhbHNlXHJcblx0Ly8gdG9nZ2xlT3B0aW9ucygpXHJcbn1cclxuZnVuY3Rpb24gaGFuZGxlU2V0dGluZ3NPcGVuZWQoKSB7XHJcblx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrT3V0c2lkZVNldHRpbmdzKVxyXG5cdCRzZXR0aW5ncy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlU2V0dGluZ3NPcGVuZWQpXHJcbn1cclxuZnVuY3Rpb24gY2xvc2VTZXR0aW5ncygpIHtcclxuXHQkc2V0dGluZ3MuY2xhc3NMaXN0LnJlbW92ZSgnZ3B0aC1zZXR0aW5ncy0tb3BlbicpXHJcblx0ZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrT3V0c2lkZVNldHRpbmdzKVxyXG5cdCRyZXNldEFsbEJ0bi5kaXNhYmxlZCA9IHRydWVcclxufVxyXG5mdW5jdGlvbiBoYW5kbGVDbGlja091dHNpZGVTZXR0aW5ncyhlKSB7XHJcblx0bGV0IGlzT3BlblNldHRpbmdzQnV0dG9uID0gZS50YXJnZXQuaWQgPT09ICdncHRoLXNldHRpbmdzLW9wZW4nXHJcblxyXG5cdGlmICghJHNldHRpbmdzLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhaXNPcGVuU2V0dGluZ3NCdXR0b24pIGNsb3NlU2V0dGluZ3MoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDb2xvcklucHV0KCkge1xyXG5cdCRzZXR0aW5ncy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuXHJcblx0XHRpZiAoZS50YXJnZXQuaWQgPT09ICdhY2NlbnRMaWdodCcpIHtcclxuXHRcdFx0ZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG5cdFx0XHRcdHVwZGF0ZUNTU1ZhcnMoZS50YXJnZXQudmFsdWUsIG51bGwpXHJcblx0XHRcdH0pXHJcblx0XHRcdC8vIFNhdmUgbGlnaHQgYWNjZW50IGNvbG9yIHRvIHN0b3JhZ2VcclxuXHRcdFx0ZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuXHRcdFx0XHRzZXRBY2NlbnRUb1N0b3JhZ2UoJ2FjY2VudF9saWdodCcsIGUudGFyZ2V0LnZhbHVlKVxyXG5cdFx0XHRcdGNsb3NlU2V0dGluZ3MoKVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChlLnRhcmdldC5pZCA9PT0gJ2FjY2VudERhcmsnKSB7XHJcblx0XHRcdGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuXHRcdFx0XHR1cGRhdGVDU1NWYXJzKG51bGwsIGUudGFyZ2V0LnZhbHVlKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQvLyBTYXZlIGRhcmsgYWNjZW50IGNvbG9yIHRvIHN0b3JhZ2VcclxuXHRcdFx0ZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuXHRcdFx0XHRzZXRBY2NlbnRUb1N0b3JhZ2UoJ2FjY2VudF9kYXJrJywgZS50YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0Y2xvc2VTZXR0aW5ncygpXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fSlcclxufVxyXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgYW5kIGluamVjdCB0aGUgPHN0eWxlPiBlbGVtZW50XHJcbmZ1bmN0aW9uIGluamVjdFN0eWxlRWxlbWVudCgpIHtcclxuXHRzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXHJcblx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNTU1ZhcnMobGlnaHRDb2xvciwgZGFya0NvbG9yKSB7XHJcblx0aWYgKCFzdHlsZUVsZW1lbnQpIGluamVjdFN0eWxlRWxlbWVudCgpXHJcblxyXG5cdGNvbnN0IGxpZ2h0SFNMID0gbGlnaHRDb2xvclxyXG5cdFx0PyBoZXhUb0hTTChsaWdodENvbG9yKVxyXG5cdFx0OiBoZXhUb0hTTCgkc2V0dGluZ3MucXVlcnlTZWxlY3RvcignLmNvbG9ycGlja2VyICNhY2NlbnRMaWdodCcpLnZhbHVlKVxyXG5cdGNvbnN0IGRhcmtIU0wgPSBkYXJrQ29sb3JcclxuXHRcdD8gaGV4VG9IU0woZGFya0NvbG9yKVxyXG5cdFx0OiBoZXhUb0hTTCgkc2V0dGluZ3MucXVlcnlTZWxlY3RvcignLmNvbG9ycGlja2VyICNhY2NlbnREYXJrJykudmFsdWUpXHJcblxyXG5cdGxldCBjc3NWYXJzID0gJydcclxuXHJcblx0Y3NzVmFycyA9IGBcclxuICAgICAgICBodG1sLmxpZ2h0IHtcclxuICAgICAgICAgICAgLS1hY2NlbnQtaDogJHtsaWdodEhTTFswXX0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1hY2NlbnQtczogJHtsaWdodEhTTFsxXX0lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LWw6ICR7bGlnaHRIU0xbMl19JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sLmRhcmsge1xyXG4gICAgICAgICAgICAtLWFjY2VudC1oOiAke2RhcmtIU0xbMF19ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LXM6ICR7ZGFya0hTTFsxXX0lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LWw6ICR7ZGFya0hTTFsyXX0lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgYFxyXG5cclxuXHQvLyBjb25zb2xlLmxvZyhjc3NWYXJzKVxyXG5cclxuXHRzdHlsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBjc3NWYXJzXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldEFjY2VudFRvU3RvcmFnZShzdG9yYWdlQ29sb3JQcm9wZXJ0eSwgYWNjZW50VmFsdWUpIHtcclxuXHR0cnkge1xyXG5cdFx0aWYgKHN0b3JhZ2VDb2xvclByb3BlcnR5ID09PSAnYWNjZW50X2xpZ2h0Jykge1xyXG5cdFx0XHRhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyBhY2NlbnRfbGlnaHQ6IGFjY2VudFZhbHVlIH0pXHJcblx0XHR9XHJcblx0XHRpZiAoc3RvcmFnZUNvbG9yUHJvcGVydHkgPT09ICdhY2NlbnRfZGFyaycpIHtcclxuXHRcdFx0YXdhaXQgYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHsgYWNjZW50X2Rhcms6IGFjY2VudFZhbHVlIH0pXHJcblx0XHR9XHJcblx0XHQvLyBjb25zb2xlLmxvZyh7IHN0b3JhZ2VDb2xvclByb3BlcnR5LCBhY2NlbnRWYWx1ZSB9KVxyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNldHRpbmcgdGhlIGFjY2VudCBjb2xvcnMgaW4gc3RvcmFnZTonLCBlKVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q29sb3JJbnB1dFZhbHVlKHsgYWNjZW50TGlnaHQsIGFjY2VudERhcmsgfSkge1xyXG5cdC8vIGNvbnNvbGUubG9nKHsgYWNjZW50TGlnaHQsIGFjY2VudERhcmsgfSlcclxuXHQkc2V0dGluZ3MucXVlcnlTZWxlY3RvcignLmNvbG9ycGlja2VyICNhY2NlbnRMaWdodCcpLnZhbHVlID0gYWNjZW50TGlnaHRcclxuXHQkc2V0dGluZ3MucXVlcnlTZWxlY3RvcignLmNvbG9ycGlja2VyICNhY2NlbnREYXJrJykudmFsdWUgPSBhY2NlbnREYXJrXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFjY2VudHNTdG9yYWdlKCkge1xyXG5cdHRyeSB7XHJcblx0XHQvLyBHZXQgYWNjZW50IGNvbG9ycyBmcm9tIHN0b3JhZ2VcclxuXHRcdGNvbnN0IHsgYWNjZW50X2xpZ2h0OiBhY2NlbnRMaWdodCwgYWNjZW50X2Rhcms6IGFjY2VudERhcmsgfSA9IGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldChbXHJcblx0XHRcdCdhY2NlbnRfbGlnaHQnLFxyXG5cdFx0XHQnYWNjZW50X2RhcmsnLFxyXG5cdFx0XSlcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdSZXRyaWV2ZWQgYWNjZW50IGNvbG9ycyBmcm9tIHN0b3JhZ2U6JywgYWNjZW50TGlnaHQsIGFjY2VudERhcmspXHJcblxyXG5cdFx0Ly8gU2V0IGRlZmF1bHQgYWNjZW50IGNvbG9ycyBpZiBub3QgYWxyZWFkeSBzZXRcclxuXHRcdGlmICghYWNjZW50TGlnaHQgfHwgIWFjY2VudERhcmspIHtcclxuXHRcdFx0YXdhaXQgYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHtcclxuXHRcdFx0XHRhY2NlbnRfbGlnaHQ6IGRlZmF1bHRDb2xvckxpZ2h0LFxyXG5cdFx0XHRcdGFjY2VudF9kYXJrOiBkZWZhdWx0Q29sb3JEYXJrLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHRjb25zb2xlLmxvZygnRGVmYXVsdCBhY2NlbnQgY29sb3JzIHNldCBpbiBzdG9yYWdlJylcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBhY2NlbnRDb2xvckxpZ2h0ID0gYWNjZW50TGlnaHQgfHwgZGVmYXVsdENvbG9yTGlnaHRcclxuXHRcdGNvbnN0IGFjY2VudENvbG9yRGFyayA9IGFjY2VudERhcmsgfHwgZGVmYXVsdENvbG9yRGFya1xyXG5cclxuXHRcdC8vIFVwZGF0ZSBDU1Mgd2l0aCByZXRyaWV2ZWQgb3IgZGVmYXVsdCBhY2NlbnQgY29sb3JzXHJcblx0XHR1cGRhdGVDU1NWYXJzKGFjY2VudENvbG9yTGlnaHQsIGFjY2VudENvbG9yRGFyaylcclxuXHJcblx0XHRzZXRDb2xvcklucHV0VmFsdWUoeyBhY2NlbnRMaWdodDogYWNjZW50Q29sb3JMaWdodCwgYWNjZW50RGFyazogYWNjZW50Q29sb3JEYXJrIH0pXHJcblxyXG5cdFx0Ly8gY29uc29sZS5sb2coJ0FjY2VudCBjb2xvcnMgYXBwbGllZCB0byBDU1M6JywgYWNjZW50Q29sb3JMaWdodCwgYWNjZW50Q29sb3JEYXJrKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBoYW5kbGluZyBhY2NlbnQgY29sb3JzOicsIGVycm9yKVxyXG5cdH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiByZXNldEFsbFNldHRpbmdzKCkge1xyXG5cdGlmICghc3R5bGVFbGVtZW50KSBpbmplY3RTdHlsZUVsZW1lbnQoKVxyXG5cclxuXHQvLyBsZXQgYWNjZW50TGlnaHQgPSBbMjUwLCA5OSwgNjVdXHJcblx0Ly8gbGV0IGFjY2VudERhcmsgPSBbMjcyLCA5MywgNzhdXHJcblx0bGV0IGFjY2VudExpZ2h0ID0gaGV4VG9IU0woZGVmYXVsdENvbG9yTGlnaHQpXHJcblx0bGV0IGFjY2VudERhcmsgPSBoZXhUb0hTTChkZWZhdWx0Q29sb3JEYXJrKVxyXG5cclxuXHRjb25zdCBjc3NWYXJzID0gYFxyXG4gICAgICAgIGh0bWwubGlnaHQge1xyXG4gICAgICAgICAgICAtLWFjY2VudC1oOiAke2FjY2VudExpZ2h0WzBdfSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWFjY2VudC1zOiAke2FjY2VudExpZ2h0WzFdfSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1hY2NlbnQtbDogJHthY2NlbnRMaWdodFsyXX0lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwuZGFyayB7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LWg6ICR7YWNjZW50RGFya1swXX0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1hY2NlbnQtczogJHthY2NlbnREYXJrWzFdfSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1hY2NlbnQtbDogJHthY2NlbnREYXJrWzJdfSUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICBgXHJcblxyXG5cdHN0eWxlRWxlbWVudC50ZXh0Q29udGVudCA9IGNzc1ZhcnNcclxuXHJcblx0c2V0Q29sb3JJbnB1dFZhbHVlKHsgYWNjZW50TGlnaHQ6IGRlZmF1bHRDb2xvckxpZ2h0LCBhY2NlbnREYXJrOiBkZWZhdWx0Q29sb3JEYXJrIH0pXHJcblxyXG5cdGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7XHJcblx0XHRhY2NlbnRfbGlnaHQ6IGRlZmF1bHRDb2xvckxpZ2h0LFxyXG5cdFx0YWNjZW50X2Rhcms6IGRlZmF1bHRDb2xvckRhcmssXHJcblx0fSlcclxufVxyXG5cclxuLyogPT09IEluaXRpYWxpemF0aW9uICovXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcblx0aW5pdFRoZW1lKClcclxuXHRjcmVhdGVBbmRBcHBlbmRTVkdTdGlja3lCdG4oKVxyXG5cdHJlbmRlclNldHRpbmdzKClcclxuXHRkZWNyZWlzZUZsb2F0aW5nQnRuU2l6ZSgpXHJcblx0aGFuZGxlQWNjZW50c1N0b3JhZ2UoKVxyXG5cdGhhbmRsZUNvbG9ySW5wdXQoKVxyXG59XHJcblxyXG4vKiA/IE9ubHkgZm9yIGRlYnVnZ2luZyAtIHJlbW92ZSBsYXRlciEgKi9cclxuLyogZGVidWdHZXRBbGxTdG9yYWdlSXRlbXMoKVxyXG4vLyBHZXQgYWxsIHRoZSBpdGVtcyBpbiB0aGUgc3RvcmFnZVxyXG5mdW5jdGlvbiBkZWJ1Z0dldEFsbFN0b3JhZ2VJdGVtcygpIHtcclxuXHRicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZnVuY3Rpb24gKGl0ZW1zKSB7XHJcblx0XHRjb25zb2xlLmxvZyhpdGVtcykgLy8gVGhpcyB3aWxsIGxvZyBhbGwgdGhlIGl0ZW1zIHN0b3JlZCBpbiBzeW5jIHN0b3JhZ2VcclxuXHR9KVxyXG59XHJcbiovXHJcbiIsIi8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjEwLjAgLSBGcmkgQXVnIDEyIDIwMjIgMTk6NDI6NDQgKi9cbi8qIC0qLSBNb2RlOiBpbmRlbnQtdGFicy1tb2RlOiBuaWw7IGpzLWluZGVudC1sZXZlbDogMiAtKi0gKi9cbi8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG4vKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmlmICghZ2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWU/LmlkKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2NyaXB0IHNob3VsZCBvbmx5IGJlIGxvYWRlZCBpbiBhIGJyb3dzZXIgZXh0ZW5zaW9uLlwiKTtcbn1cblxuaWYgKHR5cGVvZiBnbG9iYWxUaGlzLmJyb3dzZXIgPT09IFwidW5kZWZpbmVkXCIgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbFRoaXMuYnJvd3NlcikgIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgY29uc3QgQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFID0gXCJUaGUgbWVzc2FnZSBwb3J0IGNsb3NlZCBiZWZvcmUgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuXCI7XG5cbiAgLy8gV3JhcHBpbmcgdGhlIGJ1bGsgb2YgdGhpcyBwb2x5ZmlsbCBpbiBhIG9uZS10aW1lLXVzZSBmdW5jdGlvbiBpcyBhIG1pbm9yXG4gIC8vIG9wdGltaXphdGlvbiBmb3IgRmlyZWZveC4gU2luY2UgU3BpZGVybW9ua2V5IGRvZXMgbm90IGZ1bGx5IHBhcnNlIHRoZVxuICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAvLyBuZXZlciBhY3R1YWxseSBuZWVkIHRvIGJlIGNhbGxlZCwgdGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIGJlIGluY2x1ZGVkXG4gIC8vIGluIEZpcmVmb3ggbmVhcmx5IGZvciBmcmVlLlxuICBjb25zdCB3cmFwQVBJcyA9IGV4dGVuc2lvbkFQSXMgPT4ge1xuICAgIC8vIE5PVEU6IGFwaU1ldGFkYXRhIGlzIGFzc29jaWF0ZWQgdG8gdGhlIGNvbnRlbnQgb2YgdGhlIGFwaS1tZXRhZGF0YS5qc29uIGZpbGVcbiAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgLy8gSlNPTiBmaWxlLlxuICAgIGNvbnN0IGFwaU1ldGFkYXRhID0ge1xuICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImNsZWFyQWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRSZWNlbnRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0U3ViVHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiYnJvd3NlckFjdGlvblwiOiB7XG4gICAgICAgIFwiZGlzYWJsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwib3BlblBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInNldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ2FjaGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVEb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRm9ybURhdGFcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVMb2NhbFN0b3JhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlUGFzc3dvcmRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0dGluZ3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImNvb2tpZXNcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsQ29va2llU3RvcmVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgXCJpbnNwZWN0ZWRXaW5kb3dcIjoge1xuICAgICAgICAgIFwiZXZhbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYW5lbHNcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAzLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDMsXG4gICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZWxlbWVudHNcIjoge1xuICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZG93bmxvYWRzXCI6IHtcbiAgICAgICAgXCJjYW5jZWxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXJhc2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0RmlsZUljb25cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwicGF1c2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXN1bWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICBcImlzQWxsb3dlZEZpbGVTY2hlbWVBY2Nlc3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiaXNBbGxvd2VkSW5jb2duaXRvQWNjZXNzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJoaXN0b3J5XCI6IHtcbiAgICAgICAgXCJhZGRVcmxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZVJhbmdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZVVybFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBY2NlcHRMYW5ndWFnZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImlkZW50aXR5XCI6IHtcbiAgICAgICAgXCJsYXVuY2hXZWJBdXRoRmxvd1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaWRsZVwiOiB7XG4gICAgICAgIFwicXVlcnlTdGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwibWFuYWdlbWVudFwiOiB7XG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRTZWxmXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInNldEVuYWJsZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwibm90aWZpY2F0aW9uc1wiOiB7XG4gICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBlcm1pc3Npb25zXCI6IHtcbiAgICAgICAgXCJjb250YWluc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlcXVlc3RcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInJ1bnRpbWVcIjoge1xuICAgICAgICBcImdldEJhY2tncm91bmRQYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuT3B0aW9uc1BhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWVzdFVwZGF0ZUNoZWNrXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInNlbmROYXRpdmVNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNldFVuaW5zdGFsbFVSTFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2Vzc2lvbnNcIjoge1xuICAgICAgICBcImdldERldmljZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzdG9yZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgIFwibG9jYWxcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWFuYWdlZFwiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGFic1wiOiB7XG4gICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZHVwbGljYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImV4ZWN1dGVTY3JpcHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Wm9vbVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ29CYWNrXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdvRm9yd2FyZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaW5zZXJ0Q1NTXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVsb2FkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0Wm9vbVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgXCJnZXRBbGxGcmFtZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0RnJhbWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndlYlJlcXVlc3RcIjoge1xuICAgICAgICBcImhhbmRsZXJCZWhhdmlvckNoYW5nZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndpbmRvd3NcIjoge1xuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoT2JqZWN0LmtleXMoYXBpTWV0YWRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBXZWFrTWFwIHN1YmNsYXNzIHdoaWNoIGNyZWF0ZXMgYW5kIHN0b3JlcyBhIHZhbHVlIGZvciBhbnkga2V5IHdoaWNoIGRvZXNcbiAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICogb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGluIG9yZGVyIHRvIGNyZWF0ZSB0aGUgdmFsdWUgZm9yIGFueVxuICAgICAqICAgICAgICBrZXkgd2hpY2ggZG9lcyBub3QgZXhpc3QsIHRoZSBmaXJzdCB0aW1lIGl0IGlzIGFjY2Vzc2VkLiBUaGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICovXG4gICAgY2xhc3MgRGVmYXVsdFdlYWtNYXAgZXh0ZW5kcyBXZWFrTWFwIHtcbiAgICAgIGNvbnN0cnVjdG9yKGNyZWF0ZUl0ZW0sIGl0ZW1zID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtID0gY3JlYXRlSXRlbTtcbiAgICAgIH1cblxuICAgICAgZ2V0KGtleSkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgICB0aGlzLnNldChrZXksIHRoaXMuY3JlYXRlSXRlbShrZXkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhbiBvYmplY3Qgd2l0aCBhIGB0aGVuYCBtZXRob2QsIGFuZCBjYW5cbiAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICovXG4gICAgY29uc3QgaXNUaGVuYWJsZSA9IHZhbHVlID0+IHtcbiAgICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGNhbGxlZCwgd2lsbCByZXNvbHZlIG9yIHJlamVjdFxuICAgICAqIHRoZSBnaXZlbiBwcm9taXNlIGJhc2VkIG9uIGhvdyBpdCBpcyBjYWxsZWQ6XG4gICAgICpcbiAgICAgKiAtIElmLCB3aGVuIGNhbGxlZCwgYGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcmAgY29udGFpbnMgYSBub24tbnVsbCBvYmplY3QsXG4gICAgICogICB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIHRoYXQgdmFsdWUuXG4gICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICogICByZXNvbHZlZCB0byB0aGF0IHZhbHVlLlxuICAgICAqIC0gT3RoZXJ3aXNlLCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB0byBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGVcbiAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb21pc2VcbiAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAqICAgICAgICBwcm9taXNlLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVzb2x2ZVxuICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZWplY3RcbiAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZWplY3Rpb24gZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSB3cmFwcGVkIG1ldGhvZCB3aGljaCBoYXMgY3JlYXRlZCB0aGUgY2FsbGJhY2suXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICogICAgICAgIFRoZSBnZW5lcmF0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIHByb21pc2UucmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fFxuICAgICAgICAgICAgICAgICAgIChjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSkge1xuICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3NbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3MpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSAobnVtQXJncykgPT4gbnVtQXJncyA9PSAxID8gXCJhcmd1bWVudFwiIDogXCJhcmd1bWVudHNcIjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xuICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggZmV3ZXIgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxuICAgICAqICAgICAgIFRoZSBnZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFzeW5jRnVuY3Rpb25XcmFwcGVyKHRhcmdldCwgLi4uYXJncykge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gVGhpcyBBUEkgbWV0aG9kIGhhcyBjdXJyZW50bHkgbm8gY2FsbGJhY2sgb24gQ2hyb21lLCBidXQgaXQgcmV0dXJuIGEgcHJvbWlzZSBvbiBGaXJlZm94LFxuICAgICAgICAgICAgLy8gYW5kIHNvIHRoZSBwb2x5ZmlsbCB3aWxsIHRyeSB0byBjYWxsIGl0IHdpdGggYSBjYWxsYmFjayBmaXJzdCwgYW5kIGl0IHdpbGwgZmFsbGJhY2tcbiAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe3Jlc29sdmUsIHJlamVjdH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtuYW1lfSBBUEkgbWV0aG9kIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IHRoZSBjYWxsYmFjayBwYXJhbWV0ZXIsIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWxsaW5nIGJhY2sgdG8gY2FsbCBpdCB3aXRob3V0IGEgY2FsbGJhY2s6IFwiLCBjYkVycm9yKTtcblxuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG5cbiAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBBUEkgbWV0aG9kIG1ldGFkYXRhLCBzbyB0aGF0IHRoZSBuZXh0IEFQSSBjYWxscyB3aWxsIG5vdCB0cnkgdG9cbiAgICAgICAgICAgICAgLy8gdXNlIHRoZSB1bnN1cHBvcnRlZCBjYWxsYmFjayBhbnltb3JlLlxuICAgICAgICAgICAgICBtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICBtZXRhZGF0YS5ub0NhbGxiYWNrID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe3Jlc29sdmUsIHJlamVjdH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFdyYXBzIGFuIGV4aXN0aW5nIG1ldGhvZCBvZiB0aGUgdGFyZ2V0IG9iamVjdCwgc28gdGhhdCBjYWxscyB0byBpdCBhcmVcbiAgICAgKiBpbnRlcmNlcHRlZCBieSB0aGUgZ2l2ZW4gd3JhcHBlciBmdW5jdGlvbi4gVGhlIHdyYXBwZXIgZnVuY3Rpb24gcmVjZWl2ZXMsXG4gICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICogdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgKiAgICAgICAgVGhlIG9yaWdpbmFsIHRhcmdldCBvYmplY3QgdGhhdCB0aGUgd3JhcHBlZCBtZXRob2QgYmVsb25ncyB0by5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2RcbiAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgKiAgICAgICAgb2JqZWN0IHdoaWNoIGlzIGNyZWF0ZWQgdG8gd3JhcCB0aGUgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHdyYXBwZXJcbiAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgKiAgICAgICAgb2YgdGhlIHdyYXBwZWQgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgKiAgICAgICAgQSBQcm94eSBvYmplY3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdoaWNoIGludm9rZXMgdGhlIGdpdmVuIHdyYXBwZXJcbiAgICAgKiAgICAgICAgbWV0aG9kIGluIGl0cyBwbGFjZS5cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb3h5KG1ldGhvZCwge1xuICAgICAgICBhcHBseSh0YXJnZXRNZXRob2QsIHRoaXNPYmosIGFyZ3MpIHtcbiAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgLyoqXG4gICAgICogV3JhcHMgYW4gb2JqZWN0IGluIGEgUHJveHkgd2hpY2ggaW50ZXJjZXB0cyBhbmQgd3JhcHMgY2VydGFpbiBtZXRob2RzXG4gICAgICogYmFzZWQgb24gdGhlIGdpdmVuIGB3cmFwcGVyc2AgYW5kIGBtZXRhZGF0YWAgb2JqZWN0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgKiAgICAgICAgVGhlIHRhcmdldCBvYmplY3QgdG8gd3JhcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbd3JhcHBlcnMgPSB7fV1cbiAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyB3cmFwcGVyIGZ1bmN0aW9ucyBmb3Igc3BlY2lhbCBjYXNlcy4gQW55XG4gICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICogICAgICAgIG1ldGhvZCBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUuIFRoZXNlXG4gICAgICogICAgICAgIHdyYXBwZXIgbWV0aG9kcyBhcmUgaW52b2tlZCBhcyBkZXNjcmliZWQgaW4ge0BzZWUgd3JhcE1ldGhvZH0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW21ldGFkYXRhID0ge31dXG4gICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgbWV0YWRhdGEgdXNlZCB0byBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlXG4gICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICogICAgICAgIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZSB3aGljaCBoYXMgYSBjb3JyZXNwb25kaW5nIG1ldGFkYXRhIG9iamVjdFxuICAgICAqICAgICAgICBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYG1ldGFkYXRhYCB0cmVlIGlzIHJlcGxhY2VkIHdpdGggYW5cbiAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICogICAgICAgIHtAc2VlIHdyYXBBc3luY0Z1bmN0aW9ufVxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICovXG4gICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBsZXQgaGFuZGxlcnMgPSB7XG4gICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldCB8fCBwcm9wIGluIGNhY2hlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghKHByb3AgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcF07XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAvLyBhbnkgd3JhcHBpbmcuXG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlcnNbcHJvcF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAvLyBXZSBoYXZlIGEgc3BlY2lhbC1jYXNlIHdyYXBwZXIgZm9yIHRoaXMgbWV0aG9kLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gYXN5bmMgbWV0aG9kIHRoYXQgd2UgaGF2ZSBtZXRhZGF0YSBmb3IuIENyZWF0ZSBhXG4gICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gd3JhcEFzeW5jRnVuY3Rpb24ocHJvcCwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCB0aGF0IHdlIGRvbid0IGtub3cgb3IgY2FyZSBhYm91dC4gUmV0dXJuIHRoZVxuICAgICAgICAgICAgICAvLyBvcmlnaW5hbCBtZXRob2QsIGJvdW5kIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICBoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxuICAgICAgICAgICAgLy8gbWV0YWRhdGEuXG4gICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXCIqXCIpKSB7XG4gICAgICAgICAgICAvLyBXcmFwIGFsbCBwcm9wZXJ0aWVzIGluICogbmFtZXNwYWNlLlxuICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBkbyBhbnkgd3JhcHBpbmcgZm9yIHRoaXMgcHJvcGVydHksXG4gICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldChwcm94eVRhcmdldCwgcHJvcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWZpbmVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCwgZGVzYykge1xuICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWxldGVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGNhY2hlLCBwcm9wKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgLy8gb3JpZ2luYWwgdmFsdWUgb2YgdGhlIHRhcmdldCBpZiB0aGF0IHZhbHVlIGlzIGRlY2xhcmVkIHJlYWQtb25seSBhbmRcbiAgICAgIC8vIG5vbi1jb25maWd1cmFibGUuIEZvciB0aGlzIHJlYXNvbiwgd2UgY3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZVxuICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbm5vdCByZXR1cm4gYSBjdXN0b20gb2JqZWN0IGZvciBBUElzIHRoYXRcbiAgICAgIC8vIGFyZSBkZWNsYXJlZCByZWFkLW9ubHkgYW5kIG5vbi1jb25maWd1cmFibGUsIHN1Y2ggYXMgYGNocm9tZS5kZXZ0b29sc2AuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIHByb3h5IGhhbmRsZXJzIHRoZW1zZWx2ZXMgd2lsbCBzdGlsbCB1c2UgdGhlIG9yaWdpbmFsIGB0YXJnZXRgXG4gICAgICAvLyBpbnN0ZWFkIG9mIHRoZSBgcHJveHlUYXJnZXRgLCBzbyB0aGF0IHRoZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFyZVxuICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cbiAgICAgIGxldCBwcm94eVRhcmdldCA9IE9iamVjdC5jcmVhdGUodGFyZ2V0KTtcbiAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNldCBvZiB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYW4gZXZlbnQgb2JqZWN0LCB3aGljaCBoYW5kbGVzXG4gICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgKlxuICAgICAqIEEgc2luZ2xlIHdyYXBwZXIgaXMgY3JlYXRlZCBmb3IgZWFjaCBsaXN0ZW5lciBmdW5jdGlvbiwgYW5kIHN0b3JlZCBpbiBhXG4gICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgKiByZXRyaWV2ZSB0aGUgb3JpZ2luYWwgd3JhcHBlciwgc28gdGhhdCAgYXR0ZW1wdHMgdG8gcmVtb3ZlIGFcbiAgICAgKiBwcmV2aW91c2x5LWFkZGVkIGxpc3RlbmVyIHdvcmsgYXMgZXhwZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RlZmF1bHRXZWFrTWFwPGZ1bmN0aW9uLCBmdW5jdGlvbj59IHdyYXBwZXJNYXBcbiAgICAgKiAgICAgICAgQSBEZWZhdWx0V2Vha01hcCBvYmplY3Qgd2hpY2ggd2lsbCBjcmVhdGUgdGhlIGFwcHJvcHJpYXRlIHdyYXBwZXJcbiAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAqICAgICAgICBhbiBleGlzdGluZyBvbmUgd2hlbiBpdCBkb2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwRXZlbnQgPSB3cmFwcGVyTWFwID0+ICh7XG4gICAgICBhZGRMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyLCAuLi5hcmdzKSB7XG4gICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgfSxcblxuICAgICAgaGFzTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmVMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvblJlcXVlc3RGaW5pc2hlZCBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IHdpbGwgcmV0dXJuIGFcbiAgICAgICAqIGBnZXRDb250ZW50KClgIHByb3BlcnR5IHdoaWNoIHJldHVybnMgYSBgUHJvbWlzZWAgcmF0aGVyIHRoYW4gdXNpbmcgYVxuICAgICAgICogY2FsbGJhY2sgQVBJLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXFcbiAgICAgICAqICAgICAgICBUaGUgSEFSIGVudHJ5IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIG5ldHdvcmsgcmVxdWVzdC5cbiAgICAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uUmVxdWVzdEZpbmlzaGVkKHJlcSkge1xuICAgICAgICBjb25zdCB3cmFwcGVkUmVxID0gd3JhcE9iamVjdChyZXEsIHt9IC8qIHdyYXBwZXJzICovLCB7XG4gICAgICAgICAgZ2V0Q29udGVudDoge1xuICAgICAgICAgICAgbWluQXJnczogMCxcbiAgICAgICAgICAgIG1heEFyZ3M6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGxpc3RlbmVyKHdyYXBwZWRSZXEpO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXG4gICAgICAgKiBpdHMgcmV0dXJuIHZhbHVlLCByYXRoZXIgdGhhbiBieSByZXR1cm5pbmcgYSBzZW50aW5lbCB2YWx1ZSBhbmQgY2FsbGluZyBhXG4gICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gc2VuZGVyXG4gICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXG4gICAgICAgKiAgICAgICAgQSBjYWxsYmFjayB3aGljaCwgd2hlbiBjYWxsZWQgd2l0aCBhbiBhcmJpdHJhcnkgYXJndW1lbnQsIHNlbmRzXG4gICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgKiAgICAgICAgVHJ1ZSBpZiB0aGUgd3JhcHBlZCBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHdoaWNoIHdpbGwgbGF0ZXJcbiAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IGRpZENhbGxTZW5kUmVzcG9uc2UgPSBmYWxzZTtcblxuICAgICAgICBsZXQgd3JhcHBlZFNlbmRSZXNwb25zZTtcbiAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICB3cmFwcGVkU2VuZFJlc3BvbnNlID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGRpZENhbGxTZW5kUmVzcG9uc2UgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNSZXN1bHRUaGVuYWJsZSA9IHJlc3VsdCAhPT0gdHJ1ZSAmJiBpc1RoZW5hYmxlKHJlc3VsdCk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIGRpZG4ndCByZXR1cm5lZCB0cnVlIG9yIGEgUHJvbWlzZSwgb3IgY2FsbGVkXG4gICAgICAgIC8vIHdyYXBwZWRTZW5kUmVzcG9uc2Ugc3luY2hyb25vdXNseSwgd2UgY2FuIGV4aXQgZWFybGllclxuICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHRydWUgJiYgIWlzUmVzdWx0VGhlbmFibGUgJiYgIWRpZENhbGxTZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXG4gICAgICAgIC8vIHRvIHRyYW5zbGF0ZSB0aGUgbWVzc2FnZSBpbnRvIGEgcmVzb2x2ZWQgcHJvbWlzZSBvciBhIHJlamVjdGVkXG4gICAgICAgIC8vIHByb21pc2UpLlxuICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSAocHJvbWlzZSkgPT4ge1xuICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xuICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgIHNlbmRSZXNwb25zZShtc2cpO1xuICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgIC8vIGlzIGFuIGluc3RhbmNlIG9mIGVycm9yLCBvciB0aGUgb2JqZWN0IGl0c2VsZiBvdGhlcndpc2UuXG4gICAgICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciB8fFxuICAgICAgICAgICAgICAgIHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fOiB0cnVlLFxuICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcIiwgZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCBzZW5kIHRoZSByZXNvbHZlZCB2YWx1ZSBhcyBhXG4gICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxuICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG4gICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XG4gICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7cmVqZWN0LCByZXNvbHZlfSwgcmVwbHkpID0+IHtcbiAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXG4gICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2lzc3Vlcy8xMzBcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmVwbHkgJiYgcmVwbHkuX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fKSB7XG4gICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAvLyBhbiBFcnJvciBpbnN0YW5jZS5cbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXBseS5tZXNzYWdlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHJlcGx5KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlID0gKG5hbWUsIG1ldGFkYXRhLCBhcGlOYW1lc3BhY2VPYmosIC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge3Jlc29sdmUsIHJlamVjdH0pO1xuICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcbiAgICAgICAgYXBpTmFtZXNwYWNlT2JqLnNlbmRNZXNzYWdlKC4uLmFyZ3MpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN0YXRpY1dyYXBwZXJzID0ge1xuICAgICAgZGV2dG9vbHM6IHtcbiAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgIG9uUmVxdWVzdEZpbmlzaGVkOiB3cmFwRXZlbnQob25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcnVudGltZToge1xuICAgICAgICBvbk1lc3NhZ2U6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7bWluQXJnczogMSwgbWF4QXJnczogM30pLFxuICAgICAgfSxcbiAgICAgIHRhYnM6IHtcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge21pbkFyZ3M6IDIsIG1heEFyZ3M6IDN9KSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBzZXR0aW5nTWV0YWRhdGEgPSB7XG4gICAgICBjbGVhcjoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgICAgZ2V0OiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgICBzZXQ6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICB9O1xuICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XG4gICAgICBuZXR3b3JrOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgICBzZXJ2aWNlczoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgICAgd2Vic2l0ZXM6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcbiAgfTtcblxuICAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gIC8vIGBtb2R1bGVgIHZhcmlhYmxlIGF2YWlsYWJsZS5cbiAgbW9kdWxlLmV4cG9ydHMgPSB3cmFwQVBJcyhjaHJvbWUpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzLmJyb3dzZXI7XG59XG4iLCJleHBvcnQgY29uc3QgaWNvbl9zdW4gPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiaWNvbiBpY29uLXRhYmxlciBpY29ucy10YWJsZXItb3V0bGluZSBpY29uLXRhYmxlci1zdW5cIj48cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+PHBhdGggZD1cIk0xMiAxMm0tNCAwYTQgNCAwIDEgMCA4IDBhNCA0IDAgMSAwIC04IDBcIiAvPjxwYXRoIGQ9XCJNMyAxMmgxbTggLTl2MW04IDhoMW0tOSA4djFtLTYuNCAtMTUuNGwuNyAuN20xMi4xIC0uN2wtLjcgLjdtMCAxMS40bC43IC43bS0xMi4xIC0uN2wtLjcgLjdcIiAvPjwvc3ZnPmBcclxuXHJcbmV4cG9ydCBjb25zdCBpY29uX21vb24gPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiaWNvbiBpY29uLXRhYmxlciBpY29ucy10YWJsZXItb3V0bGluZSBpY29uLXRhYmxlci1tb29uXCI+PHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+PHBhdGggZD1cIk0xMiAzYy4xMzIgMCAuMjYzIDAgLjM5MyAwYTcuNSA3LjUgMCAwIDAgNy45MiAxMi40NDZhOSA5IDAgMSAxIC04LjMxMyAtMTIuNDU0elwiIC8+PC9zdmc+YFxyXG5cclxuZXhwb3J0IGNvbnN0IGljb25fbW9vbl9mdWxsID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImljb24gaWNvbi10YWJsZXIgaWNvbnMtdGFibGVyLW91dGxpbmUgaWNvbi10YWJsZXItbW9vbi0yXCI+PHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+PHBhdGggZD1cIk0xNi40MTggNC4xNTdhOCA4IDAgMCAwIDAgMTUuNjg2XCIgLz48cGF0aCBkPVwiTTEyIDEybS05IDBhOSA5IDAgMSAwIDE4IDBhOSA5IDAgMSAwIC0xOCAwXCIgLz48L3N2Zz5gXHJcblxyXG5leHBvcnQgY29uc3QgaWNvbl9zZXR0aW5ncyA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1vdXRsaW5lIGljb24tdGFibGVyLXNldHRpbmdzXCI+PHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+PHBhdGggZD1cIk0xMC4zMjUgNC4zMTdjLjQyNiAtMS43NTYgMi45MjQgLTEuNzU2IDMuMzUgMGExLjcyNCAxLjcyNCAwIDAgMCAyLjU3MyAxLjA2NmMxLjU0MyAtLjk0IDMuMzEgLjgyNiAyLjM3IDIuMzdhMS43MjQgMS43MjQgMCAwIDAgMS4wNjUgMi41NzJjMS43NTYgLjQyNiAxLjc1NiAyLjkyNCAwIDMuMzVhMS43MjQgMS43MjQgMCAwIDAgLTEuMDY2IDIuNTczYy45NCAxLjU0MyAtLjgyNiAzLjMxIC0yLjM3IDIuMzdhMS43MjQgMS43MjQgMCAwIDAgLTIuNTcyIDEuMDY1Yy0uNDI2IDEuNzU2IC0yLjkyNCAxLjc1NiAtMy4zNSAwYTEuNzI0IDEuNzI0IDAgMCAwIC0yLjU3MyAtMS4wNjZjLTEuNTQzIC45NCAtMy4zMSAtLjgyNiAtMi4zNyAtMi4zN2ExLjcyNCAxLjcyNCAwIDAgMCAtMS4wNjUgLTIuNTcyYy0xLjc1NiAtLjQyNiAtMS43NTYgLTIuOTI0IDAgLTMuMzVhMS43MjQgMS43MjQgMCAwIDAgMS4wNjYgLTIuNTczYy0uOTQgLTEuNTQzIC44MjYgLTMuMzEgMi4zNyAtMi4zN2MxIC42MDggMi4yOTYgLjA3IDIuNTcyIC0xLjA2NXpcIiAvPjxwYXRoIGQ9XCJNOSAxMmEzIDMgMCAxIDAgNiAwYTMgMyAwIDAgMCAtNiAwXCIgLz48L3N2Zz5gXHJcblxyXG5leHBvcnQgY29uc3QgaWNvbl9wYWludCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1vdXRsaW5lIGljb24tdGFibGVyLXBhaW50XCI+PHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+PHBhdGggZD1cIk01IDNtMCAyYTIgMiAwIDAgMSAyIC0yaDEwYTIgMiAwIDAgMSAyIDJ2MmEyIDIgMCAwIDEgLTIgMmgtMTBhMiAyIDAgMCAxIC0yIC0yelwiIC8+PHBhdGggZD1cIk0xOSA2aDFhMiAyIDAgMCAxIDIgMmE1IDUgMCAwIDEgLTUgNWwtNSAwdjJcIiAvPjxwYXRoIGQ9XCJNMTAgMTVtMCAxYTEgMSAwIDAgMSAxIC0xaDJhMSAxIDAgMCAxIDEgMXY0YTEgMSAwIDAgMSAtMSAxaC0yYTEgMSAwIDAgMSAtMSAtMXpcIiAvPjwvc3ZnPmBcclxuXHJcbmV4cG9ydCBjb25zdCBpY29uX3BhbGV0dGUgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiaWNvbiBpY29uLXRhYmxlciBpY29ucy10YWJsZXItb3V0bGluZSBpY29uLXRhYmxlci1wYWxldHRlXCI+PHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+PHBhdGggZD1cIk0xMiAyMWE5IDkgMCAwIDEgMCAtMThjNC45NyAwIDkgMy41ODIgOSA4YzAgMS4wNiAtLjQ3NCAyLjA3OCAtMS4zMTggMi44MjhjLS44NDQgLjc1IC0xLjk4OSAxLjE3MiAtMy4xODIgMS4xNzJoLTIuNWEyIDIgMCAwIDAgLTEgMy43NWExLjMgMS4zIDAgMCAxIC0xIDIuMjVcIiAvPjxwYXRoIGQ9XCJNOC41IDEwLjVtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwXCIgLz48cGF0aCBkPVwiTTEyLjUgNy41bS0xIDBhMSAxIDAgMSAwIDIgMGExIDEgMCAxIDAgLTIgMFwiIC8+PHBhdGggZD1cIk0xNi41IDEwLjVtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwXCIgLz48L3N2Zz5gXHJcbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKFxuICAgICAga2V5ID09PSAnZGVmYXVsdCcgfHxcbiAgICAgIGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8XG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGVzdCwga2V5KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsIi8qIGV4cG9ydCBmdW5jdGlvbiBoZXhUb0hTTChoZXgpIHtcclxuXHRjb25zdCByZXN1bHQgPSB7fVxyXG5cdGhleCA9IGhleC5zdWJzdHJpbmcoMSkgLy8gUmVtb3ZlIGxlYWRpbmcgXCIjXCIgc3ltYm9sXHJcblxyXG5cdGNvbnN0IHJnYiA9IGhleC5tYXRjaCgvW0EtRmEtZlxcZF17Mn0vZykubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxNikgLyAyNTVcclxuXHR9KVxyXG5cclxuXHRjb25zdCByID0gcmdiWzBdXHJcblx0Y29uc3QgZyA9IHJnYlsxXVxyXG5cdGNvbnN0IGIgPSByZ2JbMl1cclxuXHJcblx0Y29uc3QgbWF4ID0gTWF0aC5tYXgociwgZywgYilcclxuXHRjb25zdCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKVxyXG5cdGxldCBoLCBzLCBsXHJcblxyXG5cdGwgPSAobWF4ICsgbWluKSAvIDJcclxuXHJcblx0aWYgKG1heCA9PT0gbWluKSB7XHJcblx0XHRoID0gcyA9IDAgLy8gQWNocm9tYXRpY1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zdCBkID0gbWF4IC0gbWluXHJcblx0XHRzID0gbCA+IDAuNSA/IGQgLyAoMiAtIG1heCAtIG1pbikgOiBkIC8gKG1heCArIG1pbilcclxuXHRcdHN3aXRjaCAobWF4KSB7XHJcblx0XHRcdGNhc2UgcjpcclxuXHRcdFx0XHRoID0gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMClcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlIGc6XHJcblx0XHRcdFx0aCA9IChiIC0gcikgLyBkICsgMlxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgYjpcclxuXHRcdFx0XHRoID0gKHIgLSBnKSAvIGQgKyA0XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdH1cclxuXHRcdGggPSBNYXRoLnJvdW5kKGggKiA2MClcclxuXHR9XHJcblxyXG5cdHJlc3VsdC5oID0gaCAlIDM2MFxyXG5cdHJlc3VsdC5zID0gTWF0aC5yb3VuZChzICogMTAwKVxyXG5cdHJlc3VsdC5sID0gTWF0aC5yb3VuZChsICogMTAwKVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0XHJcbn0gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoZXhUb0hTTChoZXgpIHtcclxuXHQvLyBDb252ZXJ0IGhleCB0byBSR0IgZmlyc3RcclxuXHRsZXQgciA9IDAsXHJcblx0XHRnID0gMCxcclxuXHRcdGIgPSAwXHJcblx0aWYgKGhleC5sZW5ndGggPT09IDQpIHtcclxuXHRcdHIgPSBwYXJzZUludChoZXhbMV0gKyBoZXhbMV0sIDE2KVxyXG5cdFx0ZyA9IHBhcnNlSW50KGhleFsyXSArIGhleFsyXSwgMTYpXHJcblx0XHRiID0gcGFyc2VJbnQoaGV4WzNdICsgaGV4WzNdLCAxNilcclxuXHR9IGVsc2UgaWYgKGhleC5sZW5ndGggPT09IDcpIHtcclxuXHRcdHIgPSBwYXJzZUludChoZXguc2xpY2UoMSwgMyksIDE2KVxyXG5cdFx0ZyA9IHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpXHJcblx0XHRiID0gcGFyc2VJbnQoaGV4LnNsaWNlKDUsIDcpLCAxNilcclxuXHR9XHJcblxyXG5cdC8vIFRoZW4gY29udmVydCBSR0IgdG8gSFNMXHJcblx0ciAvPSAyNTVcclxuXHRnIC89IDI1NVxyXG5cdGIgLz0gMjU1XHJcblx0Y29uc3QgbWF4ID0gTWF0aC5tYXgociwgZywgYilcclxuXHRjb25zdCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKVxyXG5cdGxldCBoLFxyXG5cdFx0cyxcclxuXHRcdGwgPSAobWF4ICsgbWluKSAvIDJcclxuXHJcblx0aWYgKG1heCA9PT0gbWluKSB7XHJcblx0XHRoID0gcyA9IDAgLy8gYWNocm9tYXRpY1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zdCBkID0gbWF4IC0gbWluXHJcblx0XHRzID0gbCA+IDAuNSA/IGQgLyAoMiAtIG1heCAtIG1pbikgOiBkIC8gKG1heCArIG1pbilcclxuXHRcdHN3aXRjaCAobWF4KSB7XHJcblx0XHRcdGNhc2UgcjpcclxuXHRcdFx0XHRoID0gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMClcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlIGc6XHJcblx0XHRcdFx0aCA9IChiIC0gcikgLyBkICsgMlxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgYjpcclxuXHRcdFx0XHRoID0gKHIgLSBnKSAvIGQgKyA0XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdH1cclxuXHRcdGggLz0gNlxyXG5cdH1cclxuXHJcblx0cmV0dXJuIFtNYXRoLnJvdW5kKGggKiAzNjApLCBNYXRoLnJvdW5kKHMgKiAxMDApLCBNYXRoLnJvdW5kKGwgKiAxMDApXVxyXG59XHJcbiIsImltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCdcclxuaW1wb3J0IHsgcHhUb1JlbSB9IGZyb20gJy4uL3V0aWxzL2ZvbnRzQ29udmVydGluZydcclxuLy8gaW1wb3J0IHsgcmVtVG9QeCB9IGZyb20gJy4uL3V0aWxzL2ZvbnRzQ29udmVydGluZydcclxuaW1wb3J0IHsgcmVuZGVyRm9udCwgcmVuZGVyQnV0dG9uIH0gZnJvbSAnLi9jb21wb25lbnRzL3JlbmRlckZvbnRzJ1xyXG5cclxuY29uc3QgZGVmYXVsdEZvbnRGYW1pbHkgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1mLWZhbWlseS1kZWZhdWx0JylcclxuY29uc3QgZGVmYXVsdEZvbnRTaXplID0gJzE2J1xyXG5jb25zdCBkZWZhdWx0TGV0dGVyU3BhY2luZyA9ICcwJ1xyXG5jb25zdCBkZWZhdWx0TGluZUhlaWdodCA9IDI4XHJcbi8vIGNvbnN0IGRlZmF1bHRMaW5lSGVpZ2h0ID0gJzI0cHgnXHJcblxyXG5jb25zdCBmb250TmFtZXMgPSBbXHJcblx0J0RlZmF1bHQnLFxyXG5cdCdJbnRlcicsXHJcblx0J1JvYm90bycsXHJcblx0J1JvYm90byBNb25vJyxcclxuXHQnRE0gU2FucycsXHJcblx0J1JlZGRpdCBNb25vJyxcclxuXHQnUG9wcGlucycsXHJcblx0J05vdG8gU2FucycsXHJcblx0J01vbm9zcGFjZScsXHJcblx0J0xhdG8nLFxyXG5cdCdRdWlja3NhbmQnLFxyXG5cdCdPdXRmaXQnLFxyXG5dXHJcblxyXG5sZXQgZ29vZ2xlRm9udFdlaWdodHMgPSBgOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMGBcclxubGV0IGN1cnJGb250SHJlZiA9IG51bGxcclxuXHJcbmV4cG9ydCBsZXQgZm9udEh0bWxDb2RlID0gYFxyXG5cdDxzZWN0aW9uIGlkPVwiZm9udENoYW5nZXJQb3BvdmVyXCIgY2xhc3M9XCJmb250c1wiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImdyaWQgZ2FwLTRcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImZvbnRzX19mYW1pbHkgdGV4dC1zbSBtYi0yIGZsZXggZmxleC1jb2xcIj5cclxuXHRcdFx0XHQ8bGFiZWwgZm9yPVwiZm9udEZhbWlseVwiIGNsYXNzPVwidXBwZXJjYXNlIHRleHQteHMgbWItMSBmb250LXNlbWlib2xkXCI+Rm9udCBGYW1pbHk6PC9sYWJlbD5cclxuXHRcdFx0XHQ8c2VsZWN0IGlkPVwiZm9udEZhbWlseVwiIGNsYXNzPVwiYmctdG9rZW4tc2lkZWJhci1zdXJmYWNlLXNlY29uZGFyeSByb3VuZGVkLW1kIG91dGxpbmUtbm9uZSBib3JkZXItbm9uZSBwLTMgZm9jdXM6bm9uZVwiPlxyXG5cdFx0XHRcdCR7Zm9udE5hbWVzLm1hcCgobmFtZSkgPT4gYDxvcHRpb24gdmFsdWU9XCIke25hbWUgPT09ICdEZWZhdWx0JyA/IGRlZmF1bHRGb250RmFtaWx5IDogbmFtZX1cIj4ke25hbWV9PC9vcHRpb24+YCkuam9pbignJyl9XHJcblx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0JHtyZW5kZXJGb250KHtcclxuXHRcdFx0XHRuYW1lOiAnRm9udCBTaXplJyxcclxuXHRcdFx0XHRjbGFzc05hbWU6ICdmb250c19fc2l6ZScsXHJcblx0XHRcdFx0aW5wdXRJZDogJ2ZvbnRTaXplJyxcclxuXHRcdFx0XHRpbnB1dFR5cGU6ICdudW1iZXInLFxyXG5cdFx0XHRcdGlucHV0VmFsdWU6IGRlZmF1bHRGb250U2l6ZSxcclxuXHRcdFx0XHRpbnB1dFBsYWNlaG9sZGVyOiAnMTZweCcsXHJcblx0XHRcdFx0dW5pdDogJ3B4JyxcclxuXHRcdFx0fSl9XHJcblx0XHRcdCR7cmVuZGVyRm9udCh7XHJcblx0XHRcdFx0bmFtZTogJ0xpbmUgSGVpZ2h0JyxcclxuXHRcdFx0XHRjbGFzc05hbWU6ICdmb250c19fbGluZUhlaWdodCcsXHJcblx0XHRcdFx0aW5wdXRJZDogJ2xpbmVIZWlnaHQnLFxyXG5cdFx0XHRcdGlucHV0VHlwZTogJ251bWJlcicsXHJcblx0XHRcdFx0aW5wdXRWYWx1ZTogZGVmYXVsdExpbmVIZWlnaHQsXHJcblx0XHRcdFx0aW5wdXRQbGFjZWhvbGRlcjogYCR7ZGVmYXVsdExpbmVIZWlnaHR9cHhgLFxyXG5cdFx0XHRcdHVuaXQ6ICdweCcsXHJcblx0XHRcdH0pfVxyXG5cdFx0XHQke3JlbmRlckZvbnQoe1xyXG5cdFx0XHRcdG5hbWU6ICdMZXR0ZXIgU3BhY2luZycsXHJcblx0XHRcdFx0Y2xhc3NOYW1lOiAnZm9udHNfX2xldHRlclNwYWNpbmcnLFxyXG5cdFx0XHRcdGlucHV0SWQ6ICdsZXR0ZXJTcGFjaW5nJyxcclxuXHRcdFx0XHRpbnB1dFR5cGU6ICdudW1iZXInLFxyXG5cdFx0XHRcdGlucHV0VmFsdWU6IGRlZmF1bHRMZXR0ZXJTcGFjaW5nLFxyXG5cdFx0XHRcdGlucHV0UGxhY2Vob2xkZXI6IGAke2RlZmF1bHRGb250U2l6ZX1weGAsXHJcblx0XHRcdFx0dW5pdDogJ3B4JyxcclxuXHRcdFx0fSl9XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ2FwLTIgbXQtNCBncmlkXCI+XHJcblx0XHRcdCR7cmVuZGVyQnV0dG9uKHsgaWQ6ICdyZXNldEZvbnQnLCBjb250ZW50OiAnUmVzZXQgRm9udHMnLCBkaXNhYmxlZDogZmFsc2UsIGNsYXNzTmFtZTogJ2J0bi1wcmltYXJ5JyB9KX1cclxuXHRcdDwvZGl2PlxyXG5cdDwvc2VjdGlvbj5cclxuYFxyXG5cclxuLyogZnVuY3Rpb24gc2V0Q1NTVmFyaWFibGVzKHsgZm9udEZhbWlseSwgZm9udFNpemUgPSAnMTYnIH0pIHtcclxuXHRpZiAoZm9udEZhbWlseSAhPT0gZGVmYXVsdEZvbnRGYW1pbHkpIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mLWZhbWlseScsIGAke2ZvbnRGYW1pbHl9LCAke2RlZmF1bHRGb250RmFtaWx5fWApXHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZi1zaXplJywgYCR7cHhUb1JlbShmb250U2l6ZSl9YClcclxuXHRcdHJldHVyblxyXG5cdH1cclxuXHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWYtZmFtaWx5JywgZGVmYXVsdEZvbnRGYW1pbHkpXHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWYtc2l6ZScsIGAke3B4VG9SZW0oZm9udFNpemUpfWApXHJcbn1cclxuZnVuY3Rpb24gc2V0SW5wdXRGaWVsZHMoeyBmb250RmFtaWx5LCBmb250U2l6ZSA9ICcxNicgfSkge1xyXG5cdC8vIGNvbnNvbGUubG9nKCdzZXRJbnB1dEZpZWxkcygpOicsIGZvbnRGYW1pbHksIGZvbnRTaXplKVxyXG5cclxuXHRpZiAoZm9udEZhbWlseSAhPT0gJ0RlZmF1bHQnKSB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9udEZhbWlseScpLnZhbHVlID0gZm9udEZhbWlseVxyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbnRTaXplJykudmFsdWUgPSBmb250U2l6ZVxyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9udEZhbWlseScpLnZhbHVlID0gZGVmYXVsdEZvbnRGYW1pbHlcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9udFNpemUnKS52YWx1ZSA9IGZvbnRTaXplXHJcbn0gKi9cclxuZnVuY3Rpb24gc2V0Q1NTVmFyKHsgdmFyTmFtZSwgdmFyVmFsdWUgfSkge1xyXG5cdGNvbnNvbGUubG9nKCdzZXRDU1NWYXIoKTonLCB2YXJOYW1lLCB2YXJWYWx1ZSlcclxuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFyVmFsdWUpXHJcbn1cclxuZnVuY3Rpb24gc2V0SW5wdXRGaWVsZCh7IGlucHV0U2VsZWN0b3IsIGlucHV0VmFsIH0pIHtcclxuXHRjb25zb2xlLmxvZygnc2V0SW5wdXRGaWVsZCgpOicsIGlucHV0U2VsZWN0b3IsIGlucHV0VmFsKVxyXG5cclxuXHRsZXQgaW5wdXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ncHRoLXNldHRpbmdzICR7aW5wdXRTZWxlY3Rvcn1gKVxyXG5cclxuXHRpZiAoaW5wdXRWYWwgPT09ICdEZWZhdWx0Jykge1xyXG5cdFx0aW5wdXRFbC52YWx1ZSA9IGRlZmF1bHRGb250RmFtaWx5XHJcblx0fSBlbHNlIHtcclxuXHRcdGlucHV0RWwudmFsdWUgPSBpbnB1dFZhbFxyXG5cdH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiBnZXRGb250c0Zyb21TdG9yYWdlKCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KFsnZm9udEZhbWlseScsICdmb250U2l6ZScsICdsZXR0ZXJTcGFjaW5nJywgJ2xpbmVIZWlnaHQnXSlcclxuXHJcblx0XHQvLyBjb25zb2xlLmxvZygnZGF0YTogJywgZGF0YSlcclxuXHJcblx0XHRpZiAoZGF0YS5mb250RmFtaWx5KSB7XHJcblx0XHRcdHNldENTU1Zhcih7IHZhck5hbWU6ICctLWYtZmFtaWx5JywgdmFyVmFsdWU6IGAke2RhdGEuZm9udEZhbWlseX0sICR7ZGVmYXVsdEZvbnRGYW1pbHl9YCB9KVxyXG5cdFx0XHRzZXRJbnB1dEZpZWxkKHsgaW5wdXRTZWxlY3RvcjogJyNmb250RmFtaWx5JywgaW5wdXRWYWw6IGRhdGEuZm9udEZhbWlseSB9KVxyXG5cclxuXHRcdFx0Ly8gTG9hZCBzZWxlY3RlZCBmb250IGZyb20gR29vZ2xlIEZvbnRzXHJcblx0XHRcdGNyZWF0ZUFuZEluamVjdExpbmtFbGVtZW50KGRhdGEuZm9udEZhbWlseSlcclxuXHRcdH1cclxuXHRcdGlmIChkYXRhLmZvbnRTaXplKSB7XHJcblx0XHRcdHNldENTU1Zhcih7IHZhck5hbWU6ICctLWYtc2l6ZScsIHZhclZhbHVlOiBgJHtweFRvUmVtKGRhdGEuZm9udFNpemUpfWAgfSlcclxuXHRcdFx0c2V0SW5wdXRGaWVsZCh7IGlucHV0U2VsZWN0b3I6ICcjZm9udFNpemUnLCBpbnB1dFZhbDogZGF0YS5mb250U2l6ZSB9KVxyXG5cdFx0fVxyXG5cdFx0aWYgKGRhdGEubGV0dGVyU3BhY2luZykge1xyXG5cdFx0XHRzZXRDU1NWYXIoeyB2YXJOYW1lOiAnLS1mLWxldHRlci1zcGFjaW5nJywgdmFyVmFsdWU6IGAke2RhdGEubGV0dGVyU3BhY2luZ31weGAgfSlcclxuXHRcdFx0c2V0SW5wdXRGaWVsZCh7IGlucHV0U2VsZWN0b3I6ICcjbGV0dGVyU3BhY2luZycsIGlucHV0VmFsOiBkYXRhLmxldHRlclNwYWNpbmcgfSlcclxuXHRcdH1cclxuXHRcdGlmIChkYXRhLmxpbmVIZWlnaHQpIHtcclxuXHRcdFx0c2V0Q1NTVmFyKHsgdmFyTmFtZTogJy0tZi1saW5lLWhlaWdodCcsIHZhclZhbHVlOiBkYXRhLmxpbmVIZWlnaHQgfSlcclxuXHRcdFx0c2V0SW5wdXRGaWVsZCh7IGlucHV0U2VsZWN0b3I6ICcjbGluZUhlaWdodCcsIGlucHV0VmFsOiBkYXRhLmxpbmVIZWlnaHQgfSlcclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignRXJyb3IgZ2V0dGluZyBmb250cyBmcm9tIHN0b3JhZ2U6JywgZXJyb3IpXHJcblx0fVxyXG59XHJcblxyXG4vKiBhc3luYyBmdW5jdGlvbiBzZXRGb250c1RvU3RvcmFnZSh7IGZvbnRGYW1pbHksIGZvbnRTaXplID0gJzE2JyB9KSB7XHJcblx0Ly8gU2F2ZSBzZWxlY3RlZCBmb250IHRvIHN0b3JhZ2VcclxuXHRhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyBmb250RmFtaWx5LCBmb250U2l6ZSB9KVxyXG59ICovXHJcbmFzeW5jIGZ1bmN0aW9uIHNldFByb3BUb1N0b3JhZ2UoeyBwcm9wTmFtZSwgcHJvcFZhbCB9KSB7XHJcblx0Ly8gU2F2ZSBzZWxlY3RlZCBmb250IHRvIHN0b3JhZ2VcclxuXHRhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyBbcHJvcE5hbWVdOiBwcm9wVmFsIH0pXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gcmVtb3ZlRm9udHNGcm9tU3RvcmFnZSgpIHtcclxuXHRhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5yZW1vdmUoWydmb250RmFtaWx5JywgJ2ZvbnRTaXplJywgJ2xldHRlclNwYWNpbmcnLCAnbGluZUhlaWdodCddKVxyXG59XHJcblxyXG4vLyBDcmVhdGUgdGhlIDxsaW5rPiBpbiA8aGVhZD4gd2hpY2ggd2lsbCBmZXRjaCB0aGUgc2VsZWN0ZWQgZm9udCBmcm9tIEdvb2dsZSBGb250c1xyXG5mdW5jdGlvbiBjcmVhdGVBbmRJbmplY3RMaW5rRWxlbWVudChmb250RmFtaWx5KSB7XHJcblx0bGV0IGhyZWYgPSBgaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT0ke2ZvbnRGYW1pbHkucmVwbGFjZShcclxuXHRcdCcgJyxcclxuXHRcdCcrJ1xyXG5cdCl9JHtnb29nbGVGb250V2VpZ2h0c30mZGlzcGxheT1zd2FwYFxyXG5cclxuXHQvLyBBa28gamUgaHJlZiA9PSBjdXJyRm9udEhyZWYsIG5lIGRvZGFqZW1vIGxpbmshXHJcblx0aWYgKGN1cnJGb250SHJlZiAmJiBjdXJyRm9udEhyZWYgPT09IGhyZWYpIHJldHVyblxyXG5cclxuXHQvLyBUT0RPIENoZWNrIGlmIHRoZSBsaW5rIGlzIGFscmVhZHkgaW5qZWN0ZWRcclxuXHJcblx0Ly8gUmVtb3ZlIGV4aXN0aW5nIEdvb2dsZSBGb250IGxpbmtzXHJcblx0cmVtb3ZlRXhpc3RpbmdHb29nbGVGb250TGlua3MoKVxyXG5cclxuXHRjdXJyRm9udEhyZWYgPSBocmVmXHJcblxyXG5cdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcclxuXHRsaW5rLnJlbCA9ICdzdHlsZXNoZWV0J1xyXG5cdGxpbmsuaHJlZiA9IGhyZWZcclxuXHJcblx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxyXG5cclxuXHRyZXR1cm4gbGlua1xyXG59XHJcbmZ1bmN0aW9uIGdldEFsbEdvb2dsZUZvbnRMaW5rcygpIHtcclxuXHQvLyBTZWxlY3QgYWxsIGxpbmsgZWxlbWVudHMgaW4gdGhlIGhlYWRcclxuXHRjb25zdCBsaW5rRWxlbWVudHMgPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmsnKVxyXG5cclxuXHQvLyBGaWx0ZXIgdGhlIGxpbmsgZWxlbWVudHMgdG8gZmluZCB0aG9zZSBmZXRjaGluZyBHb29nbGUgRm9udHNcclxuXHRjb25zdCBnb29nbGVGb250TGlua3MgPSBBcnJheS5mcm9tKGxpbmtFbGVtZW50cykuZmlsdGVyKChsaW5rKSA9PiBsaW5rLmhyZWYuaW5jbHVkZXMoJ2ZvbnRzLmdvb2dsZWFwaXMuY29tJykpXHJcblxyXG5cdHJldHVybiBnb29nbGVGb250TGlua3NcclxufVxyXG5mdW5jdGlvbiByZW1vdmVFeGlzdGluZ0dvb2dsZUZvbnRMaW5rcygpIHtcclxuXHRsZXQgZ29vZ2xlRm9udExpbmtzID0gZ2V0QWxsR29vZ2xlRm9udExpbmtzKClcclxuXHRjdXJyRm9udEhyZWYgPSBudWxsXHJcblx0Ly8gUmVtb3ZlIGFsbCBleGlzdGluZyBHb29nbGUgRm9udCBsaW5rc1xyXG5cdGdvb2dsZUZvbnRMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcblx0XHRsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluaylcclxuXHR9KVxyXG59XHJcbi8qIGZ1bmN0aW9uIGlzTGlua0FscmVhZHlJbmplY3RlZChocmVmKSB7XHJcblx0bGV0IGdvb2dsZUZvbnRMaW5rcyA9IGdldEFsbEdvb2dsZUZvbnRMaW5rcygpXHJcblxyXG5cdGNvbnNvbGUubG9nKCdpc0xpbmtBbHJlYWR5SW5qZWN0ZWQoKScpXHJcblxyXG5cdGlmICghZ29vZ2xlRm9udExpbmtzKSByZXR1cm4gZmFsc2VcclxuXHJcblx0Zm9yIChsZXQgbGluayBvZiBnb29nbGVGb250TGlua3MpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdsaW5rLmhyZWY6JywgbGluay5ocmVmKVxyXG5cdFx0Y29uc29sZS5sb2coJ2hyZWY6JywgaHJlZilcclxuXHJcblx0XHRpZiAobGluay5ocmVmID09PSBocmVmKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdMaW5rIGluamVjdGVkIGFscmVhZHknKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2VcclxufSAqL1xyXG5cclxuLyogZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Rm9udCgpIHtcclxuXHRjb25zdCBmb250RmFtaWx5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbnRGYW1pbHknKS52YWx1ZVxyXG5cdGxldCBmb250U2l6ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb250U2l6ZScpLnZhbHVlXHJcblxyXG5cdGNvbnNvbGUubG9nKCdhcHBseUZvbnQoKScsIGZvbnRGYW1pbHksIGZvbnRTaXplKVxyXG5cclxuXHQvLyBDcmVhdGUgdGhlIDxsaW5rPiBpbiA8aGVhZD4gd2hpY2ggd2lsbCBmZXRjaCB0aGUgc2VsZWN0ZWQgZm9udCBmcm9tIEdvb2dsZSBGb250c1xyXG5cdGNyZWF0ZUFuZEluamVjdExpbmtFbGVtZW50KGZvbnRGYW1pbHkpXHJcblxyXG5cdC8vIEFwcGx5IENTUyB2YXJpYWJsZXNcclxuXHRzZXRDU1NWYXJpYWJsZXMoeyBmb250RmFtaWx5LCBmb250U2l6ZSB9KVxyXG5cclxuXHQvLyBTYXZlIHNldHRpbmdzIHRvIGNocm9tZS5zdG9yYWdlXHJcblx0c2V0Rm9udHNUb1N0b3JhZ2UoeyBmb250RmFtaWx5LCBmb250U2l6ZSB9KVxyXG59ICovXHJcbi8qIGV4cG9ydCBmdW5jdGlvbiByZXNldEZvbnQoKSB7XHJcblx0Ly8gUmVzZXQgQ1NTIHZhcmlhYmxlcyB0byBkZWZhdWx0IHZhbHVlc1xyXG5cdHNldENTU1ZhcmlhYmxlcyh7IGZvbnRGYW1pbHk6IGRlZmF1bHRGb250RmFtaWx5LCBmb250U2l6ZTogJzE2JyB9KVxyXG5cclxuXHQvLyBSZXNldCBpbnB1dCBmaWVsZHMgdG8gZGVmYXVsdCB2YWx1ZXNcclxuXHRzZXRJbnB1dEZpZWxkcyh7IGZvbnRGYW1pbHk6ICdEZWZhdWx0JywgZm9udFNpemU6ICcxNicgfSlcclxuXHJcblx0Ly8gUmVtb3ZlIGN1c3RvbSBmb250IGxpbmsgZnJvbSB0aGUgaGVhZFxyXG5cdHJlbW92ZUV4aXN0aW5nR29vZ2xlRm9udExpbmtzKClcclxuXHJcblx0Ly8gUmVtb3ZlIGN1c3RvbSBmb250IHNldHRpbmdzIGZyb20gY2hyb21lLnN0b3JhZ2VcclxuXHRyZW1vdmVGb250c0Zyb21TdG9yYWdlKClcclxufSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRUb0RlZmF1bHRzKCkge1xyXG5cdC8vIFJlc2V0IENTUyB2YXJpYWJsZXMgdG8gZGVmYXVsdCB2YWx1ZXNcclxuXHRzZXRDU1NWYXIoeyB2YXJOYW1lOiAnLS1mLWZhbWlseScsIHZhclZhbHVlOiBkZWZhdWx0Rm9udEZhbWlseSB9KVxyXG5cdHNldENTU1Zhcih7IHZhck5hbWU6ICctLWYtc2l6ZScsIHZhclZhbHVlOiBgJHtweFRvUmVtKGRlZmF1bHRGb250U2l6ZSl9YCB9KVxyXG5cdHNldENTU1Zhcih7IHZhck5hbWU6ICctLWYtbGV0dGVyLXNwYWNpbmcnLCB2YXJWYWx1ZTogYCR7ZGVmYXVsdExldHRlclNwYWNpbmd9cHhgIH0pXHJcblx0c2V0Q1NTVmFyKHsgdmFyTmFtZTogJy0tZi1saW5lLWhlaWdodCcsIHZhclZhbHVlOiBkZWZhdWx0TGluZUhlaWdodCB9KVxyXG5cclxuXHQvLyBSZXNldCBpbnB1dCBmaWVsZHMgdG8gZGVmYXVsdCB2YWx1ZXNcclxuXHRzZXRJbnB1dEZpZWxkKHsgaW5wdXRTZWxlY3RvcjogJyNmb250RmFtaWx5JywgaW5wdXRWYWw6ICdEZWZhdWx0JyB9KVxyXG5cdHNldElucHV0RmllbGQoeyBpbnB1dFNlbGVjdG9yOiAnI2ZvbnRTaXplJywgaW5wdXRWYWw6IGRlZmF1bHRGb250U2l6ZSB9KVxyXG5cdHNldElucHV0RmllbGQoeyBpbnB1dFNlbGVjdG9yOiAnI2xldHRlclNwYWNpbmcnLCBpbnB1dFZhbDogZGVmYXVsdExldHRlclNwYWNpbmcgfSlcclxuXHRzZXRJbnB1dEZpZWxkKHsgaW5wdXRTZWxlY3RvcjogJyNsaW5lSGVpZ2h0JywgaW5wdXRWYWw6IGRlZmF1bHRMaW5lSGVpZ2h0IH0pXHJcblxyXG5cdC8vIFJlbW92ZSBjdXN0b20gZm9udCBsaW5rIGZyb20gdGhlIGhlYWRcclxuXHRyZW1vdmVFeGlzdGluZ0dvb2dsZUZvbnRMaW5rcygpXHJcblxyXG5cdC8vIFJlbW92ZSBjdXN0b20gZm9udCBzZXR0aW5ncyBmcm9tIGNocm9tZS5zdG9yYWdlXHJcblx0cmVtb3ZlRm9udHNGcm9tU3RvcmFnZSgpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseUZvbnRGYW1pbHkoZSkge1xyXG5cdGNvbnN0IGZvbnRGYW1pbHkgPSBlLnRhcmdldC52YWx1ZVxyXG5cclxuXHQvLyBDcmVhdGUgdGhlIDxsaW5rPiBpbiA8aGVhZD4gd2hpY2ggd2lsbCBmZXRjaCB0aGUgc2VsZWN0ZWQgZm9udCBmcm9tIEdvb2dsZSBGb250c1xyXG5cdGNyZWF0ZUFuZEluamVjdExpbmtFbGVtZW50KGZvbnRGYW1pbHkpXHJcblxyXG5cdC8vIEFwcGx5IENTUyB2YXJpYWJsZXNcclxuXHRzZXRDU1NWYXIoeyB2YXJOYW1lOiAnLS1mLWZhbWlseScsIHZhclZhbHVlOiBgJHtmb250RmFtaWx5fSwgJHtkZWZhdWx0Rm9udEZhbWlseX1gIH0pXHJcblxyXG5cdC8vIFNhdmUgc2V0dGluZ3MgdG8gY2hyb21lLnN0b3JhZ2VcclxuXHRzZXRQcm9wVG9TdG9yYWdlKHsgcHJvcE5hbWU6ICdmb250RmFtaWx5JywgcHJvcFZhbDogZm9udEZhbWlseSB9KVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseUZvbnRTaXplKGUpIHtcclxuXHRjb25zdCBmb250U2l6ZSA9IGUudGFyZ2V0LnZhbHVlXHJcblxyXG5cdC8vIEFwcGx5IENTUyB2YXJpYWJsZXNcclxuXHRzZXRDU1NWYXIoeyB2YXJOYW1lOiAnLS1mLXNpemUnLCB2YXJWYWx1ZTogYCR7cHhUb1JlbShmb250U2l6ZSl9YCB9KVxyXG5cclxuXHQvLyBTYXZlIHNldHRpbmdzIHRvIGNocm9tZS5zdG9yYWdlXHJcblx0c2V0UHJvcFRvU3RvcmFnZSh7IHByb3BOYW1lOiAnZm9udFNpemUnLCBwcm9wVmFsOiBmb250U2l6ZSB9KVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseUxldHRlclNwYWNpbmcoZSkge1xyXG5cdC8vIGNvbnNvbGUubG9nKCdhcHBseUxldHRlclNwYWNpbmcoKScsIGUudGFyZ2V0LnZhbHVlKVxyXG5cdGNvbnN0IGxldHRlclNwYWNpbmcgPSBlLnRhcmdldC52YWx1ZVxyXG5cclxuXHQvLyBBcHBseSBDU1MgdmFyaWFibGVzXHJcblx0c2V0Q1NTVmFyKHsgdmFyTmFtZTogJy0tZi1sZXR0ZXItc3BhY2luZycsIHZhclZhbHVlOiBgJHtsZXR0ZXJTcGFjaW5nfXB4YCB9KVxyXG5cclxuXHQvLyBTYXZlIHNldHRpbmdzIHRvIGNocm9tZS5zdG9yYWdlXHJcblx0c2V0UHJvcFRvU3RvcmFnZSh7IHByb3BOYW1lOiAnbGV0dGVyU3BhY2luZycsIHByb3BWYWw6IGxldHRlclNwYWNpbmcgfSlcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlMaW5lSGVpZ2h0KGUpIHtcclxuXHRjb25zdCBsaW5lSGVpZ2h0ID0gZS50YXJnZXQudmFsdWVcclxuXHJcblx0Ly8gQXBwbHkgQ1NTIHZhcmlhYmxlc1xyXG5cdHNldENTU1Zhcih7IHZhck5hbWU6ICctLWYtbGluZS1oZWlnaHQnLCB2YXJWYWx1ZTogbGluZUhlaWdodCB9KVxyXG5cclxuXHQvLyBTYXZlIHNldHRpbmdzIHRvIGNocm9tZS5zdG9yYWdlXHJcblx0c2V0UHJvcFRvU3RvcmFnZSh7IHByb3BOYW1lOiAnbGluZUhlaWdodCcsIHByb3BWYWw6IGxpbmVIZWlnaHQgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEZvbnRzRXZlbnRIYW5kbGVycygpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aC1zZXR0aW5ncyAjZm9udEZhbWlseScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGFwcGx5Rm9udEZhbWlseSlcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aC1zZXR0aW5ncyAjZm9udFNpemUnKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGFwcGx5Rm9udFNpemUpXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdwdGgtc2V0dGluZ3MgI2xldHRlclNwYWNpbmcnKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGFwcGx5TGV0dGVyU3BhY2luZylcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aC1zZXR0aW5ncyAjbGluZUhlaWdodCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYXBwbHlMaW5lSGVpZ2h0KVxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoLXNldHRpbmdzICNyZXNldEZvbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0VG9EZWZhdWx0cylcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEZvbnRzKCkge1xyXG5cdGdldEZvbnRzRnJvbVN0b3JhZ2UoKVxyXG59XHJcblxyXG4vLyBJbml0XHJcbmluaXRGb250cygpXHJcbiIsImV4cG9ydCBjb25zdCBweFRvUmVtID0gKHB4KSA9PiBgJHtweCAvIDE2fXJlbWBcclxuZXhwb3J0IGNvbnN0IHJlbVRvUHggPSAocmVtKSA9PiBgJHtyZW0gKiAxNn1weGBcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckZvbnQoeyBuYW1lLCBjbGFzc05hbWUsIGlucHV0SWQsIGlucHV0VHlwZSwgaW5wdXRWYWx1ZSwgaW5wdXRQbGFjZWhvbGRlciB9KSB7XHJcblx0cmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiJHtjbGFzc05hbWV9IHRleHQteHMgbWItMiBmbGV4IGZsZXgtY29sIGZsZXgtMVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiJHtpbnB1dElkfVwiIGNsYXNzPVwidXBwZXJjYXNlIHRleHQteHMgbWItMSBmb250LXNlbWlib2xkXCI+JHtuYW1lfSAke1xyXG5cdFx0aW5wdXRJZCA9PT0gJ2ZvbnRTaXplJyA/ICcoPGNvZGUgY2xhc3M9XCJ0ZXh0LXhzXCI+cHg8L2NvZGU+KScgOiAnJ1xyXG5cdH06PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCIke2lucHV0VHlwZX1cIiBpZD1cIiR7aW5wdXRJZH1cIiB2YWx1ZT1cIiR7aW5wdXRWYWx1ZX1cIiBwbGFjZWhvbGRlcj1cIiR7aW5wdXRQbGFjZWhvbGRlcn1cIiBjbGFzcz1cImJnLXRva2VuLXNpZGViYXItc3VyZmFjZS1zZWNvbmRhcnkgcm91bmRlZC1sZyBvdXRsaW5lLW5vbmUgYm9yZGVyLW5vbmUgcC0zXCI+XHJcbiAgICAgICAgPC9kaXY+YFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQnV0dG9uKHsgbmFtZSwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgZGlzYWJsZWQgPSBmYWxzZSB9KSB7XHJcblx0cmV0dXJuIGBcclxuICAgICAgICA8YnV0dG9uIGlkPVwiJHtpZH1cIiBjbGFzcz1cImJ0biBibG9jayByZWxhdGl2ZSB0ZXh0LWNlbnRlciAke2NsYXNzTmFtZX1cIiAke2Rpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICcnfT5cclxuICAgICAgICAgICAgJHtjb250ZW50fVxyXG4gICAgICAgIDwvYnV0dG9uPmBcclxufVxyXG4iXSwibmFtZXMiOlsiZ2xvYmFsVGhpcyIsImNocm9tZSIsInJ1bnRpbWUiLCJpZCIsIkVycm9yIiwiYnJvd3NlciIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFIiwid3JhcEFQSXMiLCJleHRlbnNpb25BUElzIiwiYXBpTWV0YWRhdGEiLCJrZXlzIiwibGVuZ3RoIiwiRGVmYXVsdFdlYWtNYXAiLCJXZWFrTWFwIiwiY29uc3RydWN0b3IiLCJjcmVhdGVJdGVtIiwiaXRlbXMiLCJ1bmRlZmluZWQiLCJnZXQiLCJrZXkiLCJoYXMiLCJzZXQiLCJpc1RoZW5hYmxlIiwidmFsdWUiLCJ0aGVuIiwibWFrZUNhbGxiYWNrIiwicHJvbWlzZSIsIm1ldGFkYXRhIiwiY2FsbGJhY2tBcmdzIiwibGFzdEVycm9yIiwicmVqZWN0IiwibWVzc2FnZSIsInNpbmdsZUNhbGxiYWNrQXJnIiwicmVzb2x2ZSIsInBsdXJhbGl6ZUFyZ3VtZW50cyIsIm51bUFyZ3MiLCJ3cmFwQXN5bmNGdW5jdGlvbiIsIm5hbWUiLCJhc3luY0Z1bmN0aW9uV3JhcHBlciIsInRhcmdldCIsImFyZ3MiLCJtaW5BcmdzIiwibWF4QXJncyIsIlByb21pc2UiLCJmYWxsYmFja1RvTm9DYWxsYmFjayIsImNiRXJyb3IiLCJjb25zb2xlIiwid2FybiIsIm5vQ2FsbGJhY2siLCJ3cmFwTWV0aG9kIiwibWV0aG9kIiwid3JhcHBlciIsIlByb3h5IiwiYXBwbHkiLCJ0YXJnZXRNZXRob2QiLCJ0aGlzT2JqIiwiY2FsbCIsImhhc093blByb3BlcnR5IiwiRnVuY3Rpb24iLCJiaW5kIiwid3JhcE9iamVjdCIsIndyYXBwZXJzIiwiY2FjaGUiLCJjcmVhdGUiLCJoYW5kbGVycyIsInByb3h5VGFyZ2V0IiwicHJvcCIsInJlY2VpdmVyIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZGVzYyIsIlJlZmxlY3QiLCJkZWxldGVQcm9wZXJ0eSIsIndyYXBFdmVudCIsIndyYXBwZXJNYXAiLCJhZGRMaXN0ZW5lciIsImxpc3RlbmVyIiwiaGFzTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsIm9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMiLCJvblJlcXVlc3RGaW5pc2hlZCIsInJlcSIsIndyYXBwZWRSZXEiLCJnZXRDb250ZW50Iiwib25NZXNzYWdlV3JhcHBlcnMiLCJvbk1lc3NhZ2UiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJkaWRDYWxsU2VuZFJlc3BvbnNlIiwid3JhcHBlZFNlbmRSZXNwb25zZSIsInNlbmRSZXNwb25zZVByb21pc2UiLCJyZXNwb25zZSIsInJlc3VsdCIsImVyciIsImlzUmVzdWx0VGhlbmFibGUiLCJzZW5kUHJvbWlzZWRSZXN1bHQiLCJtc2ciLCJlcnJvciIsIl9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXyIsImNhdGNoIiwid3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2siLCJyZXBseSIsIndyYXBwZWRTZW5kTWVzc2FnZSIsImFwaU5hbWVzcGFjZU9iaiIsIndyYXBwZWRDYiIsInB1c2giLCJzZW5kTWVzc2FnZSIsInN0YXRpY1dyYXBwZXJzIiwiZGV2dG9vbHMiLCJuZXR3b3JrIiwib25NZXNzYWdlRXh0ZXJuYWwiLCJ0YWJzIiwic2V0dGluZ01ldGFkYXRhIiwiY2xlYXIiLCJwcml2YWN5Iiwic2VydmljZXMiLCJ3ZWJzaXRlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwidmVyc2lvbiI6MywiZmlsZSI6ImNvbnRlbnQuNjcyN2E3NzYuanMubWFwIn0=
