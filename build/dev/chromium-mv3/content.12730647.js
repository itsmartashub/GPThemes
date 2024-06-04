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
})({"anGFI":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = "localhost";
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "ddf6e0724bd358bd";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "59c9887d12730647";
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
// import './app/customFonts'
var _mainFonts = require("./app/mainFonts");

},{"./app/floatingBtn":"dYzZC","./app/mainFonts":"gynjN"}],"dYzZC":[function(require,module,exports) {
// Use a cross-browser storage API:
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webextensionPolyfill = require("webextension-polyfill");
var _webextensionPolyfillDefault = parcelHelpers.interopDefault(_webextensionPolyfill);
var _iconsJs = require("./icons.js");
var _hexToHSL = require("../utils/hexToHSL");
// import { fontHtmlCode, addFontsEventHandlers } from './customFonts'
var _mainFonts = require("./mainFonts");
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
		<footer class="grid mt-10">
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
			<h2 class="mt-5 text-center font-medium gpth-settings__title"><span class="font-semibold">GPThemes</span> Customization</h2>

			<button class="text-token-text-tertiary hover:text-token-text-primary absolute top-4 right-4" id="gpth-settings-close">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.34315 6.34338L17.6569 17.6571M17.6569 6.34338L6.34315 17.6571" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
			</button>
		</header>

		<main >
			<div class="tabs">
				<div class="tab-buttons flex items-center rounded-full p-1 font-semibold mb-10">
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

				<div class="tab-content">
					<div class="tab-pane active" id="tab-colors">
						${renderColorsTab}
					</div>

					<div class="tab-pane hidden" id="tab-fonts">
						${(0, _mainFonts.fontHtmlCode)}
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
    // addFontsEventHandlers()
    (0, _mainFonts.handleFontsListeners)();
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

},{"webextension-polyfill":"Zel51","./icons.js":"98oRq","../utils/hexToHSL":"gNsnw","./mainFonts":"gynjN","@parcel/transformer-js/src/esmodule-helpers.js":"4IpBY"}],"Zel51":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4IpBY"}],"gynjN":[function(require,module,exports) {
// main.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fontHtmlCode", ()=>fontHtmlCode);
parcelHelpers.export(exports, "handleFontsListeners", ()=>handleFontsListeners);
var _webextensionPolyfill = require("webextension-polyfill");
var _webextensionPolyfillDefault = parcelHelpers.interopDefault(_webextensionPolyfill);
var _renderFonts = require("./components/renderFonts");
// Constants
const DEFAULTS = {
    fontFamily: getComputedStyle(document.documentElement).getPropertyValue("--fontFamilyDefault"),
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 28
};
const FONT_NAMES = [
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
const GOOGLE_FONT_WEIGHTS = `:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900`;
let onFocusValFontSize = null, onFocusValLineHeight = null, onFocusValLetterSpacing = null;
const fontSizeData = {
    name: "Font Size",
    className: "fonts__size",
    inputId: "fontSize",
    inputType: "number",
    inputValue: DEFAULTS.fontSize,
    inputPlaceholder: DEFAULTS.fontSize,
    unit: "px",
    min: 12,
    max: 24
};
const lineHeightData = {
    name: "Line Height",
    className: "fonts__lineHeight",
    inputId: "lineHeight",
    inputType: "number",
    inputValue: DEFAULTS.lineHeight,
    inputPlaceholder: DEFAULTS.lineHeight,
    unit: "px",
    min: 12,
    max: 60
};
const letterSpacingData = {
    name: "Letter Spacing",
    className: "fonts__letterSpacing",
    inputId: "letterSpacing",
    inputType: "number",
    inputValue: DEFAULTS.letterSpacing,
    inputPlaceholder: DEFAULTS.letterSpacing,
    unit: "px",
    min: -5,
    max: 5
};
let fontHtmlCode = `
	<section id="fontChangerPopover" class="fonts">
		<div class="fonts__props">
			<div class="fonts__family fonts__group card card--big h-full">
				<label for="fontFamily" class="grid gap-1 h-full w-full">
					<div>
						<p class="card__unit card__icon">T</p>
						<p class="card__name uppercase font-semibold">FONT FAMILY</p>
					</div>
					<select id="fontFamily" class="border-none outline-none focus:none font-bold">
							${FONT_NAMES.map((name)=>`<option value="${name === "Default" ? DEFAULTS.fontFamily : name}">${name}</option>`).join("")}
					</select>
				</label>
			</div>

			${(0, _renderFonts.renderFontBigCard)(fontSizeData)}
			${(0, _renderFonts.renderFontSmallCard)(lineHeightData)}
			${(0, _renderFonts.renderFontSmallCard)(letterSpacingData)}
		</div>

		<footer class="grid mt-10">
			${(0, _renderFonts.renderButton)({
    id: "resetFont",
    content: "Reset Fonts",
    disabled: false,
    className: "btn-primary"
})}
		</footer>
	</section>
`;
function setInputField(inputSelector, inputVal) {
    let inputEl = document.querySelector(`.gpth-settings #${inputSelector}`);
    if (inputVal === "Default") inputEl.value = DEFAULTS[inputSelector];
    else inputEl.value = inputVal;
}
// Function to apply settings
function applySettings(settings) {
    // console.log(settings)
    Object.entries(settings).forEach(([key, value])=>{
        document.documentElement.style.setProperty(`--${key}`, value);
        setInputField(key, value);
        // setInputField(`#${key}`, value)
        console.log("getComputedStyle: ", getComputedStyle(document.documentElement).getPropertyValue(`--${key}`));
    });
}
// Function to save settings to Chrome Storage
async function saveSettings(settings) {
    // console.log(settings)
    try {
        await (0, _webextensionPolyfillDefault.default).storage.sync.set(settings);
    } catch (error) {
        console.error("Failed to save settings:", error);
    }
}
// Function to load settings from Chrome Storage
async function loadSettings() {
    try {
        const settings = await (0, _webextensionPolyfillDefault.default).storage.sync.get(Object.keys(DEFAULTS));
        // console.log({ settings })
        if (settings.fontFamily && settings.fontFamily !== DEFAULTS.fontFamily) loadGoogleFont(settings.fontFamily);
        applySettings(settings);
    } catch (error) {
        console.error("Failed to load settings:", error);
    }
}
// Validate input
/* function isValidInput(value, type) {
	switch (type) {
		case 'fontSize':
		case 'lineHeight':
			return !isNaN(parseFloat(value)) && parseFloat(value) > 0
		case 'letterSpacing':
			return !isNaN(parseInt(value)) && parseInt(value) >= 0
		default:
			return true
	}
} */ // Function to dynamically load Google Fonts
function loadGoogleFont(fontFamily) {
    const href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(" ", "+")}${GOOGLE_FONT_WEIGHTS}&display=swap`;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
}
function getAllGoogleFontLinks() {
    let links = document.querySelectorAll("link[rel='stylesheet']");
    if (links.length) return Array.from(links);
}
function removeAllGoogleFontsLinks() {
    const links = getAllGoogleFontLinks();
    for(let i = links.length - 1; i >= 0; i--){
        const link = links[i];
        if (link.href.includes("googleapis.com")) link.parentNode.removeChild(link);
    }
}
function validateInputField(inputValue, min, max = 24) {
    if (isNaN(inputValue)) {
        displayError("Empty or invalid input field");
        return false;
    } else if (inputValue < min || inputValue > max) {
        displayError(`Number must be between ${min} and ${max}`);
        return false;
    }
    return true;
}
function displayError(message) {
    // Remove any previous error messages
    const existingError = document.querySelector(".gpth-error-msg");
    if (existingError) existingError.remove();
    // Create and insert the new error message
    const errorMessage = document.createElement("div");
    errorMessage.className = "gpth-error-msg fixed rounded-xl bg-red-500 red-500 p-3 font-semibold text-center";
    errorMessage.textContent = message;
    document.body.appendChild(errorMessage);
    // Remove the error message after 4 seconds
    setTimeout(()=>{
        errorMessage.remove();
    }, 4000);
}
function formatNumber(inputVal, toFixedNum = 2) {
    // Remove leading zeros from the integer part
    inputVal = inputVal.replace(/^0+(?=\d*\.)/, "");
    // Parse the input as a number and return it with 2 decimal places
    let formatted = parseFloat(inputVal).toFixed(toFixedNum);
    // Remove trailing zeros from the decimal part
    formatted = formatted.replace(/\.?0+$/, "");
    // Return the formatted number as a string
    return formatted;
}
function changeFontSize(e) {
    const newVal = formatNumber(e.target.value);
    onFocusValFontSize = formatNumber(onFocusValFontSize, 4);
    if (onFocusValFontSize == newVal) return console.log({
        newSize: newVal,
        onFocusValFontSize
    });
    if (!validateInputField(newVal, fontSizeData.min, fontSizeData.max)) {
        // setInputField('fontSize', DEFAULTS.fontSize)
        // applySettings({ fontSize: DEFAULTS.fontSize })
        // saveSettings({ fontSize: DEFAULTS.fontSize })
        setInputField("fontSize", onFocusValFontSize);
        applySettings({
            fontSize: onFocusValFontSize
        });
        saveSettings({
            fontSize: onFocusValFontSize
        });
        return;
    }
    applySettings({
        fontSize: newVal
    });
    saveSettings({
        fontSize: newVal
    });
}
function changeLineHeight(e) {
    const newVal = formatNumber(e.target.value);
    onFocusValLineHeight = formatNumber(onFocusValLineHeight, 4);
    if (onFocusValLineHeight == newVal) return console.log({
        newVal,
        onFocusValLineHeight
    });
    if (!validateInputField(newVal, lineHeightData.min, lineHeightData.max)) {
        setInputField("lineHeight", onFocusValLineHeight);
        applySettings({
            lineHeight: onFocusValLineHeight
        });
        saveSettings({
            lineHeight: onFocusValLineHeight
        });
        return;
    }
    applySettings({
        lineHeight: newVal
    });
    saveSettings({
        lineHeight: newVal
    });
}
function changeLetterSpacing(e) {
    const newVal = formatNumber(e.target.value);
    onFocusValLetterSpacing = formatNumber(onFocusValLetterSpacing, 4);
    if (onFocusValLetterSpacing == newVal) return console.log({
        newVal,
        onFocusValLetterSpacing
    });
    if (!validateInputField(newVal, letterSpacingData.min, letterSpacingData.max)) {
        setInputField("letterSpacing", onFocusValLetterSpacing);
        applySettings({
            letterSpacing: onFocusValLetterSpacing
        });
        saveSettings({
            letterSpacing: onFocusValLetterSpacing
        });
        return;
    }
    applySettings({
        letterSpacing: newVal
    });
    saveSettings({
        letterSpacing: newVal
    });
}
async function changeFontFamily(e) {
    const selectedFont = e.target.value;
    console.log("selectFontFamily: ", selectedFont);
    // Remove all existing Google Fonts
    removeAllGoogleFontsLinks();
    if (selectedFont !== DEFAULTS.fontFamily) {
        // Load the newly selected Google Font
        loadGoogleFont(selectedFont);
        applySettings({
            fontFamily: selectedFont
        });
        try {
            await saveSettings({
                fontFamily: selectedFont
            });
        } catch (error) {
            console.error("Failed to save font family:", error);
        }
    } else {
        // Apply default font settings
        applySettings(DEFAULTS);
        try {
            await saveSettings(DEFAULTS);
        } catch (error) {
            console.error("Failed to reset font family:", error);
        }
    }
}
function resetFonts() {
    applySettings(DEFAULTS);
    saveSettings(DEFAULTS);
}
function handleFontsListeners() {
    const selectFontFamily = document.querySelector(".gpth-settings #fontFamily");
    const inputFontSize = document.querySelector(".gpth-settings #fontSize");
    const inputLineHeight = document.querySelector(".gpth-settings #lineHeight");
    const inputLetterSpacing = document.querySelector(".gpth-settings #letterSpacing");
    const btnResetFont = document.querySelector(".gpth-settings #resetFont");
    selectFontFamily.addEventListener("change", changeFontFamily);
    inputFontSize.addEventListener("blur", changeFontSize);
    inputLineHeight.addEventListener("blur", changeLineHeight);
    inputLetterSpacing.addEventListener("blur", changeLetterSpacing);
    inputFontSize.addEventListener("focus", (e)=>{
        onFocusValFontSize = e.target.value;
    });
    inputLineHeight.addEventListener("focus", (e)=>{
        onFocusValLineHeight = e.target.value;
    });
    inputLetterSpacing.addEventListener("focus", (e)=>{
        onFocusValLetterSpacing = e.target.value;
    });
    inputFontSize.addEventListener("keypress", (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            changeFontSize(e);
            e.target.blur();
        }
    });
    inputLineHeight.addEventListener("keypress", (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            changeLineHeight(e);
            e.target.blur();
        }
    });
    inputLetterSpacing.addEventListener("keypress", (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            changeLetterSpacing(e);
            e.target.blur();
        }
    });
    btnResetFont.addEventListener("click", resetFonts);
}
function init() {
    // Load settings on page load
    loadSettings();
}
init();

},{"webextension-polyfill":"Zel51","./components/renderFonts":"hOcoo","@parcel/transformer-js/src/esmodule-helpers.js":"4IpBY"}],"hOcoo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderFontSmallCard", ()=>renderFontSmallCard);
parcelHelpers.export(exports, "renderFontBigCard", ()=>renderFontBigCard);
// export function renderFontSelect() {
// 	return `
//         <select id="fontFamily" class="border-none outline-none focus:none font-bold">
//             ${FONT_NAMES.map(
// 				(name) => `<option value="${name === 'Default' ? DEFAULTS.fontFamily : name}">${name}</option>`
// 			).join('')}
//         </select>
//     `
// }
parcelHelpers.export(exports, "renderButton", ()=>renderButton);
function renderFontSmallCard({ name, className, inputId, inputType, inputValue, inputPlaceholder, min = 16, max = 24, unit = "px" }) {
    return `
        <div class="${className} card card--small" data-gpth-err="${min}${unit} &hArr; ${max}${unit}">
            <label for="${inputId}" class="rounded-full flex items-center gap-2 h-full w-full">
                <input type="${inputType}" id="${inputId}" value="${inputValue}" placeholder="${inputPlaceholder}" class="rounded-full outline-none border-none font-bold" minlength="${min}" maxlength="${max}">

                <div class="card__unitname-wrapper">
                    <p class="card__unit rounded-full flex items-center justify-center">pixels</p>
                    <p class="card__name uppercase font-semibold">${name}</p>
                </div>
            </label>
        </div>`;
}
function renderFontBigCard({ name, className, inputId, inputType, inputValue, inputPlaceholder, min = 0, max = 20, unit = "px" }) {
    return `
        <div class="${className} fonts__group card card--big h-full" data-gpth-err="${min}${unit} &hArr; ${max}${unit}">
            <label for="${inputId}" class="grid gap-1 h-full w-full">
                <div>
                    <p class="card__unit card__icon">PX</p>
                    <p class="card__name uppercase font-semibold">${name}</p>
                </div>

                <input type="${inputType}" id="${inputId}" value="${inputValue}" placeholder="${inputPlaceholder}" class="outline-none border-none focus:outline-none focus:border-none font-bold" minlength="${min}" maxlength="${max}">
            </label>
        </div>`;
}
function renderButton({ name, className, id, content, disabled = false }) {
    return `
        <button id="${id}" class="btn block relative text-center ${className}" ${disabled ? "disabled" : ""}>
            ${content}
        </button>
	`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4IpBY"}]},["anGFI","3q87D"], "3q87D", "parcelRequire2158")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLFdBQVc7QUFBWSxJQUFJLFdBQVc7QUFBSyxJQUFJLGFBQWE7QUFBTSxJQUFJLGVBQWU7QUFBbUIsSUFBSSxjQUFjO0FBQU0sT0FBTyxNQUFNLENBQUMsYUFBYSxHQUFHO0FBQW1CO0FBRXJMLDhKQUE4SixHQUM5Sjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDQSxHQUNBLElBQUksYUFBYTtBQUNqQixJQUFJLFlBQVksT0FBTyxNQUFNLENBQUMsTUFBTTtBQUNwQyxTQUFTLE9BQU8sVUFBVTtJQUN4QixVQUFVLElBQUksQ0FBQyxJQUFJLEVBQUU7SUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRztRQUNULE1BQU0sT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDdkMsa0JBQWtCLEVBQUU7UUFDcEIsbUJBQW1CLEVBQUU7UUFDckIsUUFBUSxTQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLFlBQWE7UUFDaEQ7UUFDQSxTQUFTLFNBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1FBQzlCO0lBQ0Y7SUFDQSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHO0FBQ3RDO0FBQ0EsT0FBTyxNQUFNLENBQUMsTUFBTSxHQUFHO0FBQ3ZCLE9BQU8sTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDO0FBQ3pCLElBQUksY0FBYywwQkFBMEIsS0FBSSxnQkFBZ0IsbUNBQW1DLEtBQUksZUFBZSxtQ0FBbUM7QUFFekosU0FBUztJQUNQLE9BQU8sWUFBYSxDQUFBLFNBQVMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksU0FBUyxRQUFRLEdBQUcsV0FBVTtBQUM5RjtBQUNBLFNBQVM7SUFDUCxPQUFPLFlBQVksU0FBUyxJQUFJO0FBQ2xDO0FBRUEsd0NBQXdDO0FBQ3hDLElBQUksU0FBUyxPQUFPLE1BQU0sQ0FBQyxNQUFNO0FBQ2pDLElBQUksQUFBQyxDQUFBLENBQUMsVUFBVSxDQUFDLE9BQU8sZUFBZSxBQUFELEtBQU0sT0FBTyxjQUFjLGFBQWE7SUFDNUUsSUFBSSxXQUFXO0lBQ2YsSUFBSSxPQUFPO0lBQ1gsSUFBSSxXQUFXLGNBQWMsU0FBUyxRQUFRLElBQUksWUFBWSxDQUFDO1FBQUM7UUFBYTtRQUFhO0tBQVUsQ0FBQyxRQUFRLENBQUMsWUFBWSxRQUFRO0lBQ2xJLElBQUk7SUFDSixJQUFJLGFBQ0YsS0FBSyxJQUFJLFlBQVk7U0FFckIsSUFBSTtRQUNGLEtBQUssSUFBSSxVQUFVLFdBQVcsUUFBUSxXQUFZLENBQUEsT0FBTyxNQUFNLE9BQU8sRUFBQyxJQUFLO0lBQzlFLEVBQUUsT0FBTyxLQUFLO1FBQ1osSUFBSSxJQUFJLE9BQU8sRUFDYixRQUFRLEtBQUssQ0FBQyxJQUFJLE9BQU87UUFFM0IsS0FBSyxDQUFDO0lBQ1I7SUFHRix3QkFBd0I7SUFDeEIsSUFBSSxTQUFTLE9BQU8sWUFBWSxjQUFjLE9BQU8sV0FBVyxjQUFjLE9BQU8sU0FBUztJQUU5RixvREFBb0Q7SUFDcEQsMERBQTBEO0lBQzFELElBQUksb0JBQW9CO0lBQ3hCLElBQUk7UUFDRCxDQUFBLEdBQUcsSUFBRyxFQUFHO0lBQ1osRUFBRSxPQUFPLEtBQUs7UUFDWixvQkFBb0IsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ3pDO0lBRUEsYUFBYTtJQUNiLEdBQUcsU0FBUyxHQUFHLGVBQWdCLE1BQU0sd0JBQXdCLEdBQXpCO1FBQ2xDLGdCQUFnQixDQUFDLEVBQUUsMEJBQTBCO1FBQzdDLGlCQUFpQixFQUFFO1FBQ25CLGtCQUFrQixFQUFFO1FBQ3BCLElBQUksS0FBSyxlQUFlLE1BQUssS0FBSyxLQUFLLENBQUMsTUFBTSxJQUFJO1FBQ2xELElBQUksS0FBSyxJQUFJLEtBQUssVUFBVTtZQUMxQix1Q0FBdUM7WUFDdkMsSUFBSSxPQUFPLGFBQWEsYUFDdEI7WUFFRixJQUFJLFNBQVMsS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUEsUUFBUyxNQUFNLE9BQU8sS0FBSztZQUUzRCxvQkFBb0I7WUFDcEIsSUFBSSxVQUFVLE9BQU8sS0FBSyxDQUFDLENBQUE7Z0JBQ3pCLE9BQU8sTUFBTSxJQUFJLEtBQUssU0FBUyxNQUFNLElBQUksS0FBSyxRQUFRLGVBQWUsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sWUFBWTtZQUN2SDtZQUNBLElBQUksU0FBUztnQkFDWCxRQUFRLEtBQUs7Z0JBRWIseUVBQXlFO2dCQUN6RSxJQUFJLE9BQU8sV0FBVyxlQUFlLE9BQU8sZ0JBQWdCLGFBQzFELE9BQU8sYUFBYSxDQUFDLElBQUksWUFBWTtnQkFFdkMsTUFBTSxnQkFBZ0I7Z0JBRXRCLDBCQUEwQjtnQkFDMUIsSUFBSSxrQkFBa0IsQ0FBQyxFQUFFLDBCQUEwQjtnQkFDbkQsSUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLGdCQUFnQixNQUFNLEVBQUUsSUFBSztvQkFDL0MsSUFBSSxLQUFLLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUU7d0JBQ3hCLFdBQVcsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ2xDLGVBQWUsQ0FBQyxHQUFHLEdBQUc7b0JBQ3hCO2dCQUNGO2dCQUVBLDhGQUE4RjtnQkFDOUYsa0JBQWtCLENBQUM7Z0JBQ25CLElBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxlQUFlLE1BQU0sRUFBRSxJQUFLO29CQUM5QyxJQUFJLEtBQUssY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRTt3QkFDeEIsVUFBVSxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDaEMsZUFBZSxDQUFDLEdBQUcsR0FBRztvQkFDeEI7Z0JBQ0Y7WUFDRixPQUFPO1FBQ1Q7UUFDQSxJQUFJLEtBQUssSUFBSSxLQUFLLFNBQVM7WUFDekIsK0JBQStCO1lBQy9CLEtBQUssSUFBSSxrQkFBa0IsS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFFO2dCQUNoRCxJQUFJLFFBQVEsZUFBZSxTQUFTLEdBQUcsZUFBZSxTQUFTLEdBQUcsZUFBZSxLQUFLO2dCQUN0RixRQUFRLEtBQUssQ0FBQyw0QkFBa0IsZUFBZSxPQUFPLEdBQUcsT0FBTyxRQUFRLFNBQVMsZUFBZSxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzdHO1lBQ0EsSUFBSSxPQUFPLGFBQWEsYUFBYTtnQkFDbkMsZ0NBQWdDO2dCQUNoQztnQkFDQSxJQUFJLFVBQVUsbUJBQW1CLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3RELGFBQWE7Z0JBQ2IsU0FBUyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzVCO1FBQ0Y7SUFDRjtJQUNBLElBQUksY0FBYyxXQUFXO1FBQzNCLEdBQUcsT0FBTyxHQUFHLFNBQVUsQ0FBQztZQUN0QixJQUFJLEVBQUUsT0FBTyxFQUNYLFFBQVEsS0FBSyxDQUFDLEVBQUUsT0FBTztRQUUzQjtRQUNBLEdBQUcsT0FBTyxHQUFHO1lBQ1gsUUFBUSxJQUFJLENBQUM7UUFDZjtJQUNGO0FBQ0Y7QUFDQSxTQUFTO0lBQ1AsSUFBSSxVQUFVLFNBQVMsY0FBYyxDQUFDO0lBQ3RDLElBQUksU0FBUztRQUNYLFFBQVEsTUFBTTtRQUNkLFFBQVEsR0FBRyxDQUFDO0lBQ2Q7QUFDRjtBQUNBLFNBQVMsbUJBQW1CLFdBQVc7SUFDckMsSUFBSSxVQUFVLFNBQVMsYUFBYSxDQUFDO0lBQ3JDLFFBQVEsRUFBRSxHQUFHO0lBQ2IsSUFBSSxZQUFZO0lBQ2hCLEtBQUssSUFBSSxjQUFjLFlBQWE7UUFDbEMsSUFBSSxRQUFRLFdBQVcsTUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHO1lBQ2xFLE9BQU8sQ0FBQyxFQUFFLEVBQUU7c0NBQ29CLEVBQUUsbUJBQW1CLE1BQU0sUUFBUSxFQUFFLDJGQUEyRixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3ZMLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNWLEdBQUcsTUFBTSxXQUFXLEtBQUs7UUFDekIsYUFBYSxDQUFDOzs7b0JBR0wsRUFBRSxXQUFXLE9BQU8sQ0FBQzs7YUFFckIsRUFBRSxNQUFNOztVQUVYLEVBQUUsV0FBVyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUEsT0FBUSx1QkFBYSxPQUFPLFVBQVUsSUFBSSxDQUFDLElBQUk7O1FBRXhFLEVBQUUsV0FBVyxhQUFhLEdBQUcsQ0FBQyw4Q0FBdUMsRUFBRSxXQUFXLGFBQWEsQ0FBQyxzQ0FBc0MsQ0FBQyxHQUFHLEdBQUc7O0lBRWpKLENBQUM7SUFDSDtJQUNBLGFBQWE7SUFDYixRQUFRLFNBQVMsR0FBRztJQUNwQixPQUFPO0FBQ1Q7QUFDQSxTQUFTO0lBQ1AsSUFBSSxZQUFZLFVBQ2QsU0FBUyxNQUFNO1NBQ1YsSUFBSSxVQUFVLE9BQU8sT0FBTyxJQUFJLE9BQU8sT0FBTyxDQUFDLE1BQU0sRUFDMUQsT0FBTyxPQUFPLENBQUMsTUFBTTtBQUV6QjtBQUNBLFNBQVMsV0FBVyxNQUFNLEVBQUUsRUFBRSxFQUFFLG1DQUFtQztJQUNqRSxJQUFJLFVBQVUsT0FBTyxPQUFPO0lBQzVCLElBQUksQ0FBQyxTQUNILE9BQU8sRUFBRTtJQUVYLElBQUksVUFBVSxFQUFFO0lBQ2hCLElBQUksR0FBRyxHQUFHO0lBQ1YsSUFBSyxLQUFLLFFBQ1IsSUFBSyxLQUFLLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFFO1FBQ3ZCLE1BQU0sT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUN0QixJQUFJLFFBQVEsTUFBTSxNQUFNLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLE1BQU0sR0FBRyxFQUFFLEtBQUssSUFDOUQsUUFBUSxJQUFJLENBQUM7WUFBQztZQUFRO1NBQUU7SUFFNUI7SUFFRixJQUFJLE9BQU8sTUFBTSxFQUNmLFVBQVUsUUFBUSxNQUFNLENBQUMsV0FBVyxPQUFPLE1BQU0sRUFBRTtJQUVyRCxPQUFPO0FBQ1Q7QUFDQSxTQUFTLFdBQVcsSUFBSTtJQUN0QixJQUFJLE9BQU8sS0FBSyxZQUFZLENBQUM7SUFDN0IsSUFBSSxDQUFDLE1BQ0g7SUFFRixJQUFJLFVBQVUsS0FBSyxTQUFTO0lBQzVCLFFBQVEsTUFBTSxHQUFHO1FBQ2YsSUFBSSxLQUFLLFVBQVUsS0FBSyxNQUN0QixhQUFhO1FBQ2IsS0FBSyxVQUFVLENBQUMsV0FBVyxDQUFDO0lBRWhDO0lBQ0EsUUFBUSxZQUFZLENBQUMsUUFDckIsYUFBYTtJQUNiLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxLQUFLLEdBQUc7SUFDbkMsYUFBYTtJQUNiLEtBQUssVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLEtBQUssV0FBVztBQUN4RDtBQUNBLElBQUksYUFBYTtBQUNqQixTQUFTO0lBQ1AsSUFBSSxZQUNGO0lBRUYsYUFBYSxXQUFXO1FBQ3RCLElBQUksUUFBUSxTQUFTLGdCQUFnQixDQUFDO1FBQ3RDLElBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLE1BQU0sRUFBRSxJQUFLO1lBQ3JDLGdDQUFnQztZQUNoQyxJQUFJLEtBQUssV0FBVyxNQUFLLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQy9DLElBQUksV0FBVztZQUNmLElBQUksc0JBQXNCLGFBQWEsY0FBYyxJQUFJLE9BQU8sbURBQW1ELFdBQVcsSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUMsV0FBVyxNQUFNO1lBQ3pLLElBQUksV0FBVyxnQkFBZ0IsSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsU0FBUyxNQUFNLE1BQU0sS0FBSyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxVQUNILFdBQVcsS0FBSyxDQUFDLEVBQUU7UUFFdkI7UUFDQSxhQUFhO0lBQ2YsR0FBRztBQUNMO0FBQ0EsU0FBUyxZQUFZLEtBQUs7SUFDeEIsSUFBSSxNQUFNLElBQUksS0FBSyxNQUFNO1FBQ3ZCLElBQUksT0FBTyxhQUFhLGFBQWE7WUFDbkMsSUFBSSxTQUFTLFNBQVMsYUFBYSxDQUFDO1lBQ3BDLE9BQU8sR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLFFBQVEsS0FBSyxHQUFHO1lBQ3pDLElBQUksTUFBTSxZQUFZLEtBQUssWUFDekIsT0FBTyxJQUFJLEdBQUc7WUFFaEIsT0FBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTO2dCQUMzQixJQUFJO2dCQUNKLE9BQU8sTUFBTSxHQUFHLElBQU0sUUFBUTtnQkFDOUIsT0FBTyxPQUFPLEdBQUc7Z0JBQ2hCLENBQUEsaUJBQWlCLFNBQVMsSUFBSSxBQUFELE1BQU8sUUFBUSxtQkFBbUIsS0FBSyxLQUFLLGVBQWUsV0FBVyxDQUFDO1lBQ3ZHO1FBQ0YsT0FBTyxJQUFJLE9BQU8sa0JBQWtCLFlBQVk7WUFDOUMsaUJBQWlCO1lBQ2pCLElBQUksTUFBTSxZQUFZLEtBQUssWUFDekIsT0FBTyxPQUFtQixNQUFNLEdBQUcsR0FBRyxRQUFRLEtBQUssR0FBRztpQkFFdEQsT0FBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTO2dCQUMzQixJQUFJO29CQUNGLGNBQTBCLE1BQU0sR0FBRyxHQUFHLFFBQVEsS0FBSyxHQUFHO29CQUN0RDtnQkFDRixFQUFFLE9BQU8sS0FBSztvQkFDWixPQUFPO2dCQUNUO1lBQ0Y7UUFFSjtJQUNGO0FBQ0Y7QUFDQSxlQUFlLGdCQUFnQixNQUFNO0lBQ25DLE9BQU8sZUFBZSxHQUFHLE9BQU8sTUFBTSxDQUFDO0lBQ3ZDLElBQUk7SUFDSixJQUFJO1FBQ0Ysa0VBQWtFO1FBQ2xFLGdFQUFnRTtRQUNoRSxnRUFBZ0U7UUFDaEUsbURBQW1EO1FBQ25ELGlEQUFpRDtRQUNqRCxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLG1CQUFtQjtZQUN0QixJQUFJLFdBQVcsT0FBTyxHQUFHLENBQUMsQ0FBQTtnQkFDeEIsSUFBSTtnQkFDSixPQUFPLEFBQUMsQ0FBQSxlQUFlLFlBQVksTUFBSyxNQUFPLFFBQVEsaUJBQWlCLEtBQUssSUFBSSxLQUFLLElBQUksYUFBYSxLQUFLLENBQUMsQ0FBQTtvQkFDM0csb0JBQW9CO29CQUNwQixJQUFJLFVBQVUsT0FBTyxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsV0FBVyxHQUFHLGdCQUFnQixJQUFJLEtBQUssT0FBTyw0QkFBNEIsZUFBZSxrQkFBa0IsMEJBQTBCO3dCQUNsTCxPQUFPLE9BQU8sQ0FBQyxNQUFNO3dCQUNyQjtvQkFDRjtvQkFDQSxNQUFNO2dCQUNSO1lBQ0Y7WUFDQSxrQkFBa0IsTUFBTSxRQUFRLEdBQUcsQ0FBQztRQUN0QztRQUNBLE9BQU8sT0FBTyxDQUFDLFNBQVUsS0FBSztZQUM1QixTQUFTLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRTtRQUMvQjtJQUNGLFNBQVU7UUFDUixPQUFPLE9BQU8sZUFBZTtRQUM3QixJQUFJLGlCQUNGLGdCQUFnQixPQUFPLENBQUMsQ0FBQTtZQUN0QixJQUFJLFFBQVE7Z0JBQ1YsSUFBSTtnQkFDSCxDQUFBLGtCQUFrQixTQUFTLElBQUksQUFBRCxNQUFPLFFBQVEsb0JBQW9CLEtBQUssS0FBSyxnQkFBZ0IsV0FBVyxDQUFDO1lBQzFHO1FBQ0Y7SUFFSjtBQUNGO0FBQ0EsU0FBUyxTQUFTLE9BQU8sa0JBQWtCLEdBQW5CLEVBQXVCLE1BQU0sY0FBYyxHQUFmO0lBQ2xELElBQUksVUFBVSxPQUFPLE9BQU87SUFDNUIsSUFBSSxDQUFDLFNBQ0g7SUFFRixJQUFJLE1BQU0sSUFBSSxLQUFLLE9BQ2pCO1NBQ0ssSUFBSSxNQUFNLElBQUksS0FBSyxNQUFNO1FBQzlCLElBQUksT0FBTyxNQUFNLFlBQVksQ0FBQyxPQUFPLGFBQWEsQ0FBQztRQUNuRCxJQUFJLE1BQU07WUFDUixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO2dCQUNyQixpRUFBaUU7Z0JBQ2pFLG9IQUFvSDtnQkFDcEgsSUFBSSxVQUFVLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xDLElBQUssSUFBSSxPQUFPLFFBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsSUFBSSxFQUFFO29CQUM1QyxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUk7b0JBQ3JCLElBQUksVUFBVSxXQUFXLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRTtvQkFDN0MsSUFBSSxRQUFRLE1BQU0sS0FBSyxHQUNyQixVQUFVLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRTtnQkFFbEM7WUFFSjtZQUNBLElBQUksbUJBR0YsQUFGQSw0REFBNEQ7WUFDNUQsK0NBQStDO1lBQzlDLENBQUEsR0FBRyxJQUFHLEVBQUcsTUFBTSxNQUFNO1lBR3hCLGFBQWE7WUFDYixJQUFJLEtBQUssT0FBTyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDekMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUc7Z0JBQUM7Z0JBQUk7YUFBSztRQUNoQyxPQUFPLElBQUksT0FBTyxNQUFNLEVBQ3RCLFNBQVMsT0FBTyxNQUFNLEVBQUU7SUFFNUI7QUFDRjtBQUNBLFNBQVMsVUFBVSxNQUFNLEVBQUUsRUFBRTtJQUMzQixJQUFJLFVBQVUsT0FBTyxPQUFPO0lBQzVCLElBQUksQ0FBQyxTQUNIO0lBRUYsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO1FBQ2YsOEVBQThFO1FBQzlFLElBQUksT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDekIsSUFBSSxVQUFVLEVBQUU7UUFDaEIsSUFBSyxJQUFJLE9BQU8sS0FBTTtZQUNwQixJQUFJLFVBQVUsV0FBVyxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDdEQsSUFBSSxRQUFRLE1BQU0sS0FBSyxHQUNyQixRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtRQUUxQjtRQUVBLHNHQUFzRztRQUN0RyxPQUFPLE9BQU8sQ0FBQyxHQUFHO1FBQ2xCLE9BQU8sT0FBTyxLQUFLLENBQUMsR0FBRztRQUV2QiwwQkFBMEI7UUFDMUIsUUFBUSxPQUFPLENBQUMsQ0FBQTtZQUNkLFVBQVUsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ2hDO0lBQ0YsT0FBTyxJQUFJLE9BQU8sTUFBTSxFQUN0QixVQUFVLE9BQU8sTUFBTSxFQUFFO0FBRTdCO0FBQ0EsU0FBUyxlQUFlLE9BQU8sa0JBQWtCLEdBQW5CLEVBQXVCLEdBQUcsV0FBVyxHQUFaLEVBQWdCLGFBQWEsdUNBQXVDLEdBQXhDO0lBQ2pGLElBQUksa0JBQWtCLFFBQVEsSUFBSSxlQUNoQyxPQUFPO0lBR1QsdUdBQXVHO0lBQ3ZHLElBQUksVUFBVSxXQUFXLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRTtJQUM3QyxJQUFJLFdBQVc7SUFDZixNQUFPLFFBQVEsTUFBTSxHQUFHLEVBQUc7UUFDekIsSUFBSSxJQUFJLFFBQVEsS0FBSztRQUNyQixJQUFJLElBQUksa0JBQWtCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUN0QyxJQUFJLEdBQ0YsK0VBQStFO1FBQy9FLFdBQVc7YUFDTjtZQUNMLHlEQUF5RDtZQUN6RCxJQUFJLElBQUksV0FBVyxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxFQUFFLE1BQU0sS0FBSyxHQUFHO2dCQUNsQixrRkFBa0Y7Z0JBQ2xGLFdBQVc7Z0JBQ1g7WUFDRjtZQUNBLFFBQVEsSUFBSSxJQUFJO1FBQ2xCO0lBQ0Y7SUFDQSxPQUFPO0FBQ1Q7QUFDQSxTQUFTLGtCQUFrQixPQUFPLGtCQUFrQixHQUFuQixFQUF1QixHQUFHLFdBQVcsR0FBWixFQUFnQixhQUFhLHVDQUF1QyxHQUF4QztJQUNwRixJQUFJLFVBQVUsT0FBTyxPQUFPO0lBQzVCLElBQUksQ0FBQyxTQUNIO0lBRUYsSUFBSSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxhQUFhLENBQUMsRUFBRTtRQUN2RCwyRUFBMkU7UUFDM0UseUVBQXlFO1FBQ3pFLElBQUksQ0FBQyxPQUFPLE1BQU0sRUFDaEIsT0FBTztRQUVULE9BQU8sZUFBZSxPQUFPLE1BQU0sRUFBRSxJQUFJO0lBQzNDO0lBQ0EsSUFBSSxhQUFhLENBQUMsR0FBRyxFQUNuQixPQUFPO0lBRVQsYUFBYSxDQUFDLEdBQUcsR0FBRztJQUNwQixJQUFJLFNBQVMsT0FBTyxLQUFLLENBQUMsR0FBRztJQUM3QixnQkFBZ0IsSUFBSSxDQUFDO1FBQUM7UUFBUTtLQUFHO0lBQ2pDLElBQUksQ0FBQyxVQUFVLE9BQU8sR0FBRyxJQUFJLE9BQU8sR0FBRyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtRQUMvRCxlQUFlLElBQUksQ0FBQztZQUFDO1lBQVE7U0FBRztRQUNoQyxPQUFPO0lBQ1Q7QUFDRjtBQUNBLFNBQVMsV0FBVyxPQUFPLGtCQUFrQixHQUFuQixFQUF1QixHQUFHLFdBQVcsR0FBWjtJQUNqRCxJQUFJLFNBQVMsT0FBTyxLQUFLLENBQUMsR0FBRztJQUM3QixPQUFPLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN0QixJQUFJLFVBQVUsT0FBTyxHQUFHLEVBQ3RCLE9BQU8sR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLE9BQU8sQ0FBQyxHQUFHO0lBRXRDLElBQUksVUFBVSxPQUFPLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQzdELE9BQU8sR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxTQUFVLEVBQUU7UUFDL0MsR0FBRyxPQUFPLE9BQU8sQ0FBQyxHQUFHO0lBQ3ZCO0lBRUYsT0FBTyxPQUFPLEtBQUssQ0FBQyxHQUFHO0FBQ3pCO0FBQ0EsU0FBUyxVQUFVLE9BQU8sa0JBQWtCLEdBQW5CLEVBQXVCLEdBQUcsV0FBVyxHQUFaO0lBQ2hELHNCQUFzQjtJQUN0QixPQUFPO0lBRVAsNkRBQTZEO0lBQzdELElBQUksU0FBUyxPQUFPLEtBQUssQ0FBQyxHQUFHO0lBQzdCLElBQUksVUFBVSxPQUFPLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQzVELE9BQU8sR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFVLEVBQUU7UUFDOUMsSUFBSSxxQkFBcUIsR0FBRztZQUMxQixPQUFPLFdBQVcsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3hDO1FBQ0EsSUFBSSxzQkFBc0IsZUFBZSxNQUFNLEVBQUU7WUFDL0MsbUJBQW1CLE9BQU8sQ0FBQyxTQUFVLENBQUM7Z0JBQ3BDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUN2QjtZQUVBLCtCQUErQjtZQUMvQixlQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCO1FBQzVDO0lBQ0Y7QUFFSjs7O0FDdmZBO0FBQ0EsNkJBQTZCO0FBQzdCOzs7QUNGQSxtQ0FBbUM7O0FBQ25DOztBQUVBO0FBQ0E7QUFFQSxzRUFBc0U7QUFDdEU7QUFDQSw0QkFBNEI7QUFFNUIsNkJBQTZCO0FBRTdCLG1CQUFtQjtBQUNuQixJQUFJLGlCQUFpQjtBQUNyQixJQUFJO0FBQ0osSUFBSTtBQUNKLElBQUk7QUFDSixJQUFJO0FBRUosSUFBSSxVQUFVLGlCQUFpQjs7QUFDL0IsSUFBSTtBQUNKLDZCQUE2QjtBQUM3QixJQUFJLGVBQWUsS0FBSyxvQ0FBb0M7O0FBRTVELElBQUksb0JBQW9CO0FBQ3hCLElBQUksbUJBQW1CO0FBQ3ZCLGdDQUFnQztBQUVoQyxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J6QixDQUFDO0FBRUQsaUJBQWlCO0FBQ2pCO0FBRUEsU0FBUztJQUNSLE1BQU0sT0FBTyxTQUFTLGdCQUFnQixDQUFDO0lBQ3ZDLE1BQU0sUUFBUSxTQUFTLGdCQUFnQixDQUFDO0lBRXhDLEtBQUssT0FBTyxDQUFDLENBQUMsS0FBSztRQUNsQixJQUFJLGdCQUFnQixDQUFDLFNBQVM7WUFDN0IsU0FBUyxhQUFhLENBQUMsc0JBQXNCLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDOUQsU0FBUyxhQUFhLENBQUMsMEJBQTBCLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFFL0QsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDO1lBQ2xCLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUMvQjtJQUNEO0FBQ0Q7QUFFQSxlQUFlO0lBQ2QsSUFBSTtRQUNILE1BQU0sRUFBRSxTQUFTLFdBQVcsRUFBRSxHQUFHLE1BQU0sQ0FBQSxHQUFBLG9DQUFPLEFBQUQsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNoRSxNQUFNLFFBQVEsZUFBZ0IsQ0FBQSxPQUFPLFVBQVUsQ0FBQyxpQ0FBaUMsT0FBTyxHQUFHLFVBQVUsTUFBSztRQUMxRyxXQUFXO0lBQ1osRUFBRSxPQUFPLE9BQU87UUFDZixRQUFRLEtBQUssQ0FBQyw2QkFBNkI7SUFDNUM7QUFDRDtBQUVBLGVBQWUsU0FBUyxLQUFLO0lBQzVCLElBQUk7UUFDSCxNQUFNLENBQUEsR0FBQSxvQ0FBTyxBQUFELEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBRSxTQUFTO1FBQU07UUFDaEQsV0FBVztRQUNYO0lBQ0QsRUFBRSxPQUFPLE9BQU87UUFDZixRQUFRLEtBQUssQ0FBQyx3QkFBd0I7SUFDdkM7QUFDRDtBQUVBLFNBQVM7SUFDUixNQUFNLGtCQUFrQixTQUFTLGFBQWEsQ0FBQztJQUMvQyxnQkFBZ0IsU0FBUyxHQUFHO0lBRTVCLGtEQUFrRDtJQUNsRCxJQUFJLFdBQVcsQ0FBQzs7R0FFZCxFQUFFLENBQUEsR0FBQSxtQkFBVSxBQUFELEVBQUU7Ozs7OytDQUsrQixFQUFFLENBQUEsR0FBQSxpQkFBUSxBQUFELEVBQUU7NkNBQ2IsRUFBRSxDQUFBLEdBQUEsa0JBQVMsQUFBRCxFQUFFOzhDQUNYLEVBQUUsQ0FBQSxHQUFBLHVCQUFjLEFBQUQsRUFBRTsyREFDSixFQUFFLENBQUEsR0FBQSxzQkFBYSxBQUFELEVBQUU7OztDQUcxRSxDQUFDO0lBRUQsdUNBQXVDO0lBQ3ZDLGdCQUFnQixrQkFBa0IsQ0FBQyxhQUFhO0lBQ2hELFNBQVMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUUxQixxQ0FBcUM7SUFDckMsV0FBVyxTQUFTLGVBQWU7SUFDbkMsZUFBZSxTQUFTLGFBQWEsQ0FBQztJQUN0QyxtQkFBbUIsU0FBUyxhQUFhLENBQUM7SUFDMUMseUJBQXlCLFNBQVMsYUFBYSxDQUFDO0lBRWhELHNEQUFzRDtJQUN0RCxhQUFhLGdCQUFnQixDQUFDLFNBQVM7SUFDdkMsdUJBQXVCLGdCQUFnQixDQUFDLFNBQVM7QUFDbEQ7QUFFQSxTQUFTLGtCQUFrQixDQUFDO0lBQzNCLE1BQU0sY0FBYyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDckMsSUFBSSxDQUFDLGFBQWE7SUFFbEIsTUFBTSxRQUFRLFlBQVksRUFBRTtJQUU1QixJQUFJLFVBQVUsc0JBQXNCO1FBQ25DLFNBQVM7UUFDVDtJQUNEO0lBRUEsb0NBQW9DLEdBQ3BDLElBQUksVUFBVSxzQkFDYjtBQUdGO0FBRUEsU0FBUyxXQUFXLEtBQUs7SUFDeEIsU0FBUyxPQUFPLENBQUMsT0FBTyxHQUFHO0lBQzNCLFNBQVMsS0FBSyxDQUFDLFdBQVcsR0FBRyxVQUFVLFNBQVMsU0FBUztJQUN6RCxTQUFTLFNBQVMsR0FBRyxVQUFVLFNBQVMsU0FBUztJQUNqRCxJQUFJLFVBQVUsUUFBUSxTQUFTLGVBQWUsQ0FBQztBQUNoRDtBQUVBLFNBQVM7SUFDUixpQkFBaUIsQ0FBQztJQUNsQixpQkFBaUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0I7SUFFMUQsSUFBSSxnQkFBZ0IsU0FBUyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUztTQUN2RCxTQUFTLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTO0FBQ2pEO0FBRUEsU0FBUyxZQUFZLENBQUM7SUFDckIsTUFBTSwyQkFBMkIsYUFBYSxRQUFRLENBQUMsRUFBRSxNQUFNO0lBQy9ELE1BQU0sK0JBQStCLGlCQUFpQixRQUFRLENBQUMsRUFBRSxNQUFNO0lBRXZFLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyw4QkFBOEI7QUFFaEUscUdBQXFHO0FBQ3RHO0FBRUEsU0FBUztJQUNSLFdBQVc7UUFDVixhQUFhLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFDNUIsR0FBRztBQUNKO0FBRUEsb0VBQW9FLEdBQ3BFLFNBQVM7SUFDUixNQUFNLGVBQWUsU0FBUyxhQUFhLENBQUM7SUFDNUMsYUFBYSxTQUFTLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQztJQUU1RCxJQUFJLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXlCWCxFQUFFLGdCQUFnQjs7OztNQUlsQixFQUFFLENBQUEsR0FBQSx1QkFBWSxBQUFELEVBQUU7Ozs7Ozs7Ozs7Q0FVcEIsQ0FBQztJQUVELGFBQWEsa0JBQWtCLENBQUMsYUFBYTtJQUM3QyxTQUFTLElBQUksQ0FBQyxXQUFXLENBQUM7SUFFMUIsU0FBUyxjQUFjLENBQUMsdUJBQXVCLGdCQUFnQixDQUFDLFNBQVM7SUFFekUsWUFBWTtJQUVaO0lBRUEsZUFBZSxVQUFVLGFBQWEsQ0FBQztJQUN2QyxhQUFhLFFBQVEsR0FBRztJQUV4QixVQUFVLGFBQWEsQ0FBQyxxQkFBcUIsZ0JBQWdCLENBQUMsU0FBUztJQUV2RSwwQkFBMEI7SUFDMUIsQ0FBQSxHQUFBLCtCQUFvQixBQUFEO0FBQ3BCO0FBRUEsU0FBUztJQUNSLFVBQVUsU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUN4QixVQUFVLGdCQUFnQixDQUFDLGlCQUFpQjtJQUM1QyxhQUFhLFFBQVEsR0FBRztBQUV4Qix5QkFBeUI7QUFDekIsa0JBQWtCO0FBQ25CO0FBQ0EsU0FBUztJQUNSLFNBQVMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVM7SUFDeEMsVUFBVSxtQkFBbUIsQ0FBQyxpQkFBaUI7QUFDaEQ7QUFDQSxTQUFTO0lBQ1IsVUFBVSxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQzNCLFNBQVMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVM7SUFDM0MsYUFBYSxRQUFRLEdBQUc7QUFDekI7QUFDQSxTQUFTLDJCQUEyQixDQUFDO0lBQ3BDLElBQUksdUJBQXVCLEVBQUUsTUFBTSxDQUFDLEVBQUUsS0FBSztJQUUzQyxJQUFJLENBQUMsVUFBVSxRQUFRLENBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQyxzQkFBc0I7QUFDN0Q7QUFFQSxTQUFTO0lBQ1IsVUFBVSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7UUFDcEMsd0JBQXdCO1FBRXhCLElBQUksRUFBRSxNQUFNLENBQUMsRUFBRSxLQUFLLGVBQWU7WUFDbEMsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO2dCQUNuQyxjQUFjLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUMvQjtZQUNBLHFDQUFxQztZQUNyQyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7Z0JBQ3BDLG1CQUFtQixnQkFBZ0IsRUFBRSxNQUFNLENBQUMsS0FBSztnQkFDakQ7WUFDRDtRQUNEO1FBRUEsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEtBQUssY0FBYztZQUNqQyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7Z0JBQ25DLGNBQWMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25DO1lBQ0Esb0NBQW9DO1lBQ3BDLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztnQkFDcEMsbUJBQW1CLGVBQWUsRUFBRSxNQUFNLENBQUMsS0FBSztnQkFDaEQ7WUFDRDtRQUNEO0lBQ0Q7QUFDRDtBQUNBLG9EQUFvRDtBQUNwRCxTQUFTO0lBQ1IsZUFBZSxTQUFTLGFBQWEsQ0FBQztJQUN0QyxhQUFhLElBQUksR0FBRztJQUNwQixTQUFTLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDM0I7QUFFQSxTQUFTLGNBQWMsVUFBVSxFQUFFLFNBQVM7SUFDM0MsSUFBSSxDQUFDLGNBQWM7SUFFbkIsTUFBTSxXQUFXLGFBQ2QsQ0FBQSxHQUFBLGtCQUFRLEFBQUQsRUFBRSxjQUNULENBQUEsR0FBQSxrQkFBUSxBQUFELEVBQUUsVUFBVSxhQUFhLENBQUMsNkJBQTZCLEtBQUs7SUFDdEUsTUFBTSxVQUFVLFlBQ2IsQ0FBQSxHQUFBLGtCQUFRLEFBQUQsRUFBRSxhQUNULENBQUEsR0FBQSxrQkFBUSxBQUFELEVBQUUsVUFBVSxhQUFhLENBQUMsNEJBQTRCLEtBQUs7SUFFckUsSUFBSSxVQUFVO0lBRWQsVUFBVSxDQUFDOzt3QkFFWSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUM7d0JBQ2QsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDO3dCQUNkLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQzs7O3dCQUdkLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQzt3QkFDYixFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUM7d0JBQ2IsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDOztJQUVqQyxDQUFDO0lBRUosdUJBQXVCO0lBRXZCLGFBQWEsV0FBVyxHQUFHO0FBQzVCO0FBRUEsZUFBZSxtQkFBbUIsb0JBQW9CLEVBQUUsV0FBVztJQUNsRSxJQUFJO1FBQ0gsSUFBSSx5QkFBeUIsZ0JBQzVCLE1BQU0sQ0FBQSxHQUFBLG9DQUFPLEFBQUQsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUFFLGNBQWM7UUFBWTtRQUU1RCxJQUFJLHlCQUF5QixlQUM1QixNQUFNLENBQUEsR0FBQSxvQ0FBTyxBQUFELEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBRSxhQUFhO1FBQVk7SUFFM0QscURBQXFEO0lBQ3RELEVBQUUsT0FBTyxHQUFHO1FBQ1gsUUFBUSxLQUFLLENBQUMsK0NBQStDO0lBQzlEO0FBQ0Q7QUFFQSxTQUFTLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUU7SUFDdEQsMkNBQTJDO0lBQzNDLFVBQVUsYUFBYSxDQUFDLDZCQUE2QixLQUFLLEdBQUc7SUFDN0QsVUFBVSxhQUFhLENBQUMsNEJBQTRCLEtBQUssR0FBRztBQUM3RDtBQUVBLGVBQWU7SUFDZCxJQUFJO1FBQ0gsaUNBQWlDO1FBQ2pDLE1BQU0sRUFBRSxjQUFjLFdBQVcsRUFBRSxhQUFhLFVBQVUsRUFBRSxHQUFHLE1BQU0sQ0FBQSxHQUFBLG9DQUFPLEFBQUQsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUM3RjtZQUNBO1NBQ0E7UUFDRCxnRkFBZ0Y7UUFFaEYsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWTtZQUNoQyxNQUFNLENBQUEsR0FBQSxvQ0FBTyxBQUFELEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQzlCLGNBQWM7Z0JBQ2QsYUFBYTtZQUNkO1lBQ0EsUUFBUSxHQUFHLENBQUM7UUFDYjtRQUVBLE1BQU0sbUJBQW1CLGVBQWU7UUFDeEMsTUFBTSxrQkFBa0IsY0FBYztRQUV0QyxxREFBcUQ7UUFDckQsY0FBYyxrQkFBa0I7UUFFaEMsbUJBQW1CO1lBQUUsYUFBYTtZQUFrQixZQUFZO1FBQWdCO0lBRWhGLGtGQUFrRjtJQUNuRixFQUFFLE9BQU8sT0FBTztRQUNmLFFBQVEsS0FBSyxDQUFDLGlDQUFpQztJQUNoRDtBQUNEO0FBQ0EsZUFBZTtJQUNkLElBQUksQ0FBQyxjQUFjO0lBRW5CLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMsSUFBSSxjQUFjLENBQUEsR0FBQSxrQkFBUSxBQUFELEVBQUU7SUFDM0IsSUFBSSxhQUFhLENBQUEsR0FBQSxrQkFBUSxBQUFELEVBQUU7SUFFMUIsTUFBTSxVQUFVLENBQUM7O3dCQUVNLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQzt3QkFDakIsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDO3dCQUNqQixFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUM7Ozt3QkFHakIsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDO3dCQUNoQixFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUM7d0JBQ2hCLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQzs7SUFFcEMsQ0FBQztJQUVKLGFBQWEsV0FBVyxHQUFHO0lBRTNCLG1CQUFtQjtRQUFFLGFBQWE7UUFBbUIsWUFBWTtJQUFpQjtJQUVsRixNQUFNLENBQUEsR0FBQSxvQ0FBTyxBQUFELEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDOUIsY0FBYztRQUNkLGFBQWE7SUFDZDtBQUNEO0FBRUEsc0JBQXNCLEdBQ3RCLFNBQVM7SUFDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDRCxFQUVBLHdDQUF3QyxJQUN4Qzs7Ozs7OztBQU9BOzs7QSxDLFMsTSxFLE87SSxJLE8sVyxjLE8sRyxFLE8seUI7UTtLLEU7UztZO1EsUTtJO0EsQyxFLE8sZSxjLGEsTyxTLGMsTyxJLEUsUyxPO0lDbGFBLDhEQUFBLEdBQ0EsMkRBQUEsR0FDQSxpQ0FBQSxHQUNBOzs4REFFQSxHQUNBO0lBRUEsSUFBSSxDQUFDQSxXQUFXQyxNQUFYLEVBQW1CQyxTQUFTQyxJQUMvQixNQUFNLElBQUlDLE1BQU07SUFHbEIsSUFBSSxPQUFPSixXQUFXSyxPQUFsQixLQUE4QixlQUFlQyxPQUFPQyxjQUFQLENBQXNCUCxXQUFXSyxPQUFqQyxNQUE4Q0MsT0FBT0UsU0FBdEcsRUFBaUg7UUFDL0csTUFBTUMsbURBQW1ELDJEQUV6RCwyRUFGQTtRQUdBLHdFQUFBO1FBQ0EsNkVBQUE7UUFDQSw0RUFBQTtRQUNBLDhCQUFBO1FBQ0EsTUFBTUMsV0FBV0MsQ0FBQUE7WUFDZiwrRUFBQTtZQUNBLDZFQUFBO1lBQ0EsYUFBQTtZQUNBLE1BQU1DLGNBQWM7Z0JBQ2xCLFVBQVU7b0JBQ1IsU0FBUzt3QkFDUCxXQUFXO3dCQUNYLFdBQVc7b0JBRko7b0JBSVQsWUFBWTt3QkFDVixXQUFXO3dCQUNYLFdBQVc7b0JBRkQ7b0JBSVosT0FBTzt3QkFDTCxXQUFXO3dCQUNYLFdBQVc7b0JBRk47b0JBSVAsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7Z0JBYkY7Z0JBa0JWLGFBQWE7b0JBQ1gsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsT0FBTzt3QkFDTCxXQUFXO3dCQUNYLFdBQVc7b0JBRk47b0JBSVAsZUFBZTt3QkFDYixXQUFXO3dCQUNYLFdBQVc7b0JBRkU7b0JBSWYsYUFBYTt3QkFDWCxXQUFXO3dCQUNYLFdBQVc7b0JBRkE7b0JBSWIsY0FBYzt3QkFDWixXQUFXO3dCQUNYLFdBQVc7b0JBRkM7b0JBSWQsV0FBVzt3QkFDVCxXQUFXO3dCQUNYLFdBQVc7b0JBRkY7b0JBSVgsUUFBUTt3QkFDTixXQUFXO3dCQUNYLFdBQVc7b0JBRkw7b0JBSVIsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsY0FBYzt3QkFDWixXQUFXO3dCQUNYLFdBQVc7b0JBRkM7b0JBSWQsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7Z0JBekNDO2dCQThDYixpQkFBaUI7b0JBQ2YsV0FBVzt3QkFDVCxXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsd0JBQXdCO29CQUhmO29CQUtYLFVBQVU7d0JBQ1IsV0FBVzt3QkFDWCxXQUFXO3dCQUNYLHdCQUF3QjtvQkFIaEI7b0JBS1YsMkJBQTJCO3dCQUN6QixXQUFXO3dCQUNYLFdBQVc7b0JBRmM7b0JBSTNCLGdCQUFnQjt3QkFDZCxXQUFXO3dCQUNYLFdBQVc7b0JBRkc7b0JBSWhCLFlBQVk7d0JBQ1YsV0FBVzt3QkFDWCxXQUFXO29CQUZEO29CQUlaLFlBQVk7d0JBQ1YsV0FBVzt3QkFDWCxXQUFXO29CQUZEO29CQUlaLGFBQWE7d0JBQ1gsV0FBVzt3QkFDWCxXQUFXO29CQUZBO29CQUliLDJCQUEyQjt3QkFDekIsV0FBVzt3QkFDWCxXQUFXO3dCQUNYLHdCQUF3QjtvQkFIQztvQkFLM0IsZ0JBQWdCO3dCQUNkLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCx3QkFBd0I7b0JBSFY7b0JBS2hCLFdBQVc7d0JBQ1QsV0FBVzt3QkFDWCxXQUFXO29CQUZGO29CQUlYLFlBQVk7d0JBQ1YsV0FBVzt3QkFDWCxXQUFXO3dCQUNYLHdCQUF3QjtvQkFIZDtvQkFLWixZQUFZO3dCQUNWLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCx3QkFBd0I7b0JBSGQ7Z0JBbERHO2dCQXdEakIsZ0JBQWdCO29CQUNkLFVBQVU7d0JBQ1IsV0FBVzt3QkFDWCxXQUFXO29CQUZIO29CQUlWLGVBQWU7d0JBQ2IsV0FBVzt3QkFDWCxXQUFXO29CQUZFO29CQUlmLGlCQUFpQjt3QkFDZixXQUFXO3dCQUNYLFdBQVc7b0JBRkk7b0JBSWpCLG1CQUFtQjt3QkFDakIsV0FBVzt3QkFDWCxXQUFXO29CQUZNO29CQUluQixrQkFBa0I7d0JBQ2hCLFdBQVc7d0JBQ1gsV0FBVztvQkFGSztvQkFJbEIsaUJBQWlCO3dCQUNmLFdBQVc7d0JBQ1gsV0FBVztvQkFGSTtvQkFJakIsc0JBQXNCO3dCQUNwQixXQUFXO3dCQUNYLFdBQVc7b0JBRlM7b0JBSXRCLG1CQUFtQjt3QkFDakIsV0FBVzt3QkFDWCxXQUFXO29CQUZNO29CQUluQixvQkFBb0I7d0JBQ2xCLFdBQVc7d0JBQ1gsV0FBVztvQkFGTztvQkFJcEIsWUFBWTt3QkFDVixXQUFXO3dCQUNYLFdBQVc7b0JBRkQ7Z0JBckNFO2dCQTBDaEIsWUFBWTtvQkFDVixVQUFVO3dCQUNSLFdBQVc7d0JBQ1gsV0FBVztvQkFGSDtnQkFEQTtnQkFNWixnQkFBZ0I7b0JBQ2QsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsYUFBYTt3QkFDWCxXQUFXO3dCQUNYLFdBQVc7b0JBRkE7b0JBSWIsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7Z0JBVEk7Z0JBY2hCLFdBQVc7b0JBQ1QsT0FBTzt3QkFDTCxXQUFXO3dCQUNYLFdBQVc7b0JBRk47b0JBSVAsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsc0JBQXNCO3dCQUNwQixXQUFXO3dCQUNYLFdBQVc7b0JBRlM7b0JBSXRCLFVBQVU7d0JBQ1IsV0FBVzt3QkFDWCxXQUFXO29CQUZIO29CQUlWLE9BQU87d0JBQ0wsV0FBVzt3QkFDWCxXQUFXO29CQUZOO2dCQWpCRTtnQkFzQlgsWUFBWTtvQkFDVixtQkFBbUI7d0JBQ2pCLFFBQVE7NEJBQ04sV0FBVzs0QkFDWCxXQUFXOzRCQUNYLHFCQUFxQjt3QkFIZjtvQkFEUztvQkFPbkIsVUFBVTt3QkFDUixVQUFVOzRCQUNSLFdBQVc7NEJBQ1gsV0FBVzs0QkFDWCxxQkFBcUI7d0JBSGI7d0JBS1YsWUFBWTs0QkFDVixxQkFBcUI7Z0NBQ25CLFdBQVc7Z0NBQ1gsV0FBVzs0QkFGUTt3QkFEWDtvQkFOSjtnQkFSQTtnQkFzQlosYUFBYTtvQkFDWCxVQUFVO3dCQUNSLFdBQVc7d0JBQ1gsV0FBVztvQkFGSDtvQkFJVixZQUFZO3dCQUNWLFdBQVc7d0JBQ1gsV0FBVztvQkFGRDtvQkFJWixTQUFTO3dCQUNQLFdBQVc7d0JBQ1gsV0FBVztvQkFGSjtvQkFJVCxlQUFlO3dCQUNiLFdBQVc7d0JBQ1gsV0FBVztvQkFGRTtvQkFJZixRQUFRO3dCQUNOLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCx3QkFBd0I7b0JBSGxCO29CQUtSLFNBQVM7d0JBQ1AsV0FBVzt3QkFDWCxXQUFXO29CQUZKO29CQUlULGNBQWM7d0JBQ1osV0FBVzt3QkFDWCxXQUFXO29CQUZDO29CQUlkLFVBQVU7d0JBQ1IsV0FBVzt3QkFDWCxXQUFXO29CQUZIO29CQUlWLFVBQVU7d0JBQ1IsV0FBVzt3QkFDWCxXQUFXO29CQUZIO29CQUlWLFFBQVE7d0JBQ04sV0FBVzt3QkFDWCxXQUFXO3dCQUNYLHdCQUF3QjtvQkFIbEI7Z0JBdENHO2dCQTRDYixhQUFhO29CQUNYLDZCQUE2Qjt3QkFDM0IsV0FBVzt3QkFDWCxXQUFXO29CQUZnQjtvQkFJN0IsNEJBQTRCO3dCQUMxQixXQUFXO3dCQUNYLFdBQVc7b0JBRmU7Z0JBTGpCO2dCQVViLFdBQVc7b0JBQ1QsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsYUFBYTt3QkFDWCxXQUFXO3dCQUNYLFdBQVc7b0JBRkE7b0JBSWIsZUFBZTt3QkFDYixXQUFXO3dCQUNYLFdBQVc7b0JBRkU7b0JBSWYsYUFBYTt3QkFDWCxXQUFXO3dCQUNYLFdBQVc7b0JBRkE7b0JBSWIsYUFBYTt3QkFDWCxXQUFXO3dCQUNYLFdBQVc7b0JBRkE7b0JBSWIsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7Z0JBckJEO2dCQTBCWCxRQUFRO29CQUNOLGtCQUFrQjt3QkFDaEIsV0FBVzt3QkFDWCxXQUFXO29CQUZLO29CQUlsQixzQkFBc0I7d0JBQ3BCLFdBQVc7d0JBQ1gsV0FBVztvQkFGUztnQkFMaEI7Z0JBVVIsWUFBWTtvQkFDVixxQkFBcUI7d0JBQ25CLFdBQVc7d0JBQ1gsV0FBVztvQkFGUTtnQkFEWDtnQkFNWixRQUFRO29CQUNOLGNBQWM7d0JBQ1osV0FBVzt3QkFDWCxXQUFXO29CQUZDO2dCQURSO2dCQU1SLGNBQWM7b0JBQ1osT0FBTzt3QkFDTCxXQUFXO3dCQUNYLFdBQVc7b0JBRk47b0JBSVAsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsV0FBVzt3QkFDVCxXQUFXO3dCQUNYLFdBQVc7b0JBRkY7b0JBSVgsY0FBYzt3QkFDWixXQUFXO3dCQUNYLFdBQVc7b0JBRkM7b0JBSWQsaUJBQWlCO3dCQUNmLFdBQVc7d0JBQ1gsV0FBVztvQkFGSTtnQkFqQkw7Z0JBc0JkLGlCQUFpQjtvQkFDZixTQUFTO3dCQUNQLFdBQVc7d0JBQ1gsV0FBVztvQkFGSjtvQkFJVCxVQUFVO3dCQUNSLFdBQVc7d0JBQ1gsV0FBVztvQkFGSDtvQkFJVixVQUFVO3dCQUNSLFdBQVc7d0JBQ1gsV0FBVztvQkFGSDtvQkFJVixzQkFBc0I7d0JBQ3BCLFdBQVc7d0JBQ1gsV0FBVztvQkFGUztvQkFJdEIsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7Z0JBakJLO2dCQXNCakIsY0FBYztvQkFDWixZQUFZO3dCQUNWLFdBQVc7d0JBQ1gsV0FBVztvQkFGRDtvQkFJWixZQUFZO3dCQUNWLFdBQVc7d0JBQ1gsV0FBVztvQkFGRDtvQkFJWixRQUFRO3dCQUNOLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCx3QkFBd0I7b0JBSGxCO29CQUtSLFdBQVc7d0JBQ1QsV0FBVzt3QkFDWCxXQUFXO29CQUZGO29CQUlYLFlBQVk7d0JBQ1YsV0FBVzt3QkFDWCxXQUFXO3dCQUNYLHdCQUF3QjtvQkFIZDtvQkFLWixZQUFZO3dCQUNWLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCx3QkFBd0I7b0JBSGQ7b0JBS1osUUFBUTt3QkFDTixXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsd0JBQXdCO29CQUhsQjtnQkE1Qkk7Z0JBa0NkLGVBQWU7b0JBQ2IsWUFBWTt3QkFDVixXQUFXO3dCQUNYLFdBQVc7b0JBRkQ7b0JBSVosVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsV0FBVzt3QkFDVCxXQUFXO3dCQUNYLFdBQVc7b0JBRkY7Z0JBYkU7Z0JBa0JmLFdBQVc7b0JBQ1QscUJBQXFCO3dCQUNuQixXQUFXO3dCQUNYLFdBQVc7b0JBRlE7b0JBSXJCLG1CQUFtQjt3QkFDakIsV0FBVzt3QkFDWCxXQUFXO29CQUZNO29CQUluQixtQkFBbUI7d0JBQ2pCLFdBQVc7d0JBQ1gsV0FBVztvQkFGTTtvQkFJbkIsc0JBQXNCO3dCQUNwQixXQUFXO3dCQUNYLFdBQVc7b0JBRlM7b0JBSXRCLGVBQWU7d0JBQ2IsV0FBVzt3QkFDWCxXQUFXO29CQUZFO29CQUlmLHFCQUFxQjt3QkFDbkIsV0FBVzt3QkFDWCxXQUFXO29CQUZRO29CQUlyQixtQkFBbUI7d0JBQ2pCLFdBQVc7d0JBQ1gsV0FBVztvQkFGTTtnQkF6QlY7Z0JBOEJYLFlBQVk7b0JBQ1YsY0FBYzt3QkFDWixXQUFXO3dCQUNYLFdBQVc7b0JBRkM7b0JBSWQscUJBQXFCO3dCQUNuQixXQUFXO3dCQUNYLFdBQVc7b0JBRlE7b0JBSXJCLFdBQVc7d0JBQ1QsV0FBVzt3QkFDWCxXQUFXO29CQUZGO2dCQVREO2dCQWNaLFdBQVc7b0JBQ1QsU0FBUzt3QkFDUCxTQUFTOzRCQUNQLFdBQVc7NEJBQ1gsV0FBVzt3QkFGSjt3QkFJVCxPQUFPOzRCQUNMLFdBQVc7NEJBQ1gsV0FBVzt3QkFGTjt3QkFJUCxpQkFBaUI7NEJBQ2YsV0FBVzs0QkFDWCxXQUFXO3dCQUZJO3dCQUlqQixVQUFVOzRCQUNSLFdBQVc7NEJBQ1gsV0FBVzt3QkFGSDt3QkFJVixPQUFPOzRCQUNMLFdBQVc7NEJBQ1gsV0FBVzt3QkFGTjtvQkFqQkE7b0JBc0JULFdBQVc7d0JBQ1QsT0FBTzs0QkFDTCxXQUFXOzRCQUNYLFdBQVc7d0JBRk47d0JBSVAsaUJBQWlCOzRCQUNmLFdBQVc7NEJBQ1gsV0FBVzt3QkFGSTtvQkFMUjtvQkFVWCxRQUFRO3dCQUNOLFNBQVM7NEJBQ1AsV0FBVzs0QkFDWCxXQUFXO3dCQUZKO3dCQUlULE9BQU87NEJBQ0wsV0FBVzs0QkFDWCxXQUFXO3dCQUZOO3dCQUlQLGlCQUFpQjs0QkFDZixXQUFXOzRCQUNYLFdBQVc7d0JBRkk7d0JBSWpCLFVBQVU7NEJBQ1IsV0FBVzs0QkFDWCxXQUFXO3dCQUZIO3dCQUlWLE9BQU87NEJBQ0wsV0FBVzs0QkFDWCxXQUFXO3dCQUZOO29CQWpCRDtnQkFqQ0M7Z0JBd0RYLFFBQVE7b0JBQ04scUJBQXFCO3dCQUNuQixXQUFXO3dCQUNYLFdBQVc7b0JBRlE7b0JBSXJCLFVBQVU7d0JBQ1IsV0FBVzt3QkFDWCxXQUFXO29CQUZIO29CQUlWLGtCQUFrQjt3QkFDaEIsV0FBVzt3QkFDWCxXQUFXO29CQUZLO29CQUlsQixXQUFXO3dCQUNULFdBQVc7d0JBQ1gsV0FBVztvQkFGRjtvQkFJWCxhQUFhO3dCQUNYLFdBQVc7d0JBQ1gsV0FBVztvQkFGQTtvQkFJYixpQkFBaUI7d0JBQ2YsV0FBVzt3QkFDWCxXQUFXO29CQUZJO29CQUlqQixPQUFPO3dCQUNMLFdBQVc7d0JBQ1gsV0FBVztvQkFGTjtvQkFJUCxjQUFjO3dCQUNaLFdBQVc7d0JBQ1gsV0FBVztvQkFGQztvQkFJZCxXQUFXO3dCQUNULFdBQVc7d0JBQ1gsV0FBVztvQkFGRjtvQkFJWCxtQkFBbUI7d0JBQ2pCLFdBQVc7d0JBQ1gsV0FBVztvQkFGTTtvQkFJbkIsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsYUFBYTt3QkFDWCxXQUFXO3dCQUNYLFdBQVc7b0JBRkE7b0JBSWIsYUFBYTt3QkFDWCxXQUFXO3dCQUNYLFdBQVc7b0JBRkE7b0JBSWIsYUFBYTt3QkFDWCxXQUFXO3dCQUNYLFdBQVc7b0JBRkE7b0JBSWIsUUFBUTt3QkFDTixXQUFXO3dCQUNYLFdBQVc7b0JBRkw7b0JBSVIsU0FBUzt3QkFDUCxXQUFXO3dCQUNYLFdBQVc7b0JBRko7b0JBSVQsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsYUFBYTt3QkFDWCxXQUFXO3dCQUNYLFdBQVc7b0JBRkE7b0JBSWIsZUFBZTt3QkFDYixXQUFXO3dCQUNYLFdBQVc7b0JBRkU7b0JBSWYsV0FBVzt3QkFDVCxXQUFXO3dCQUNYLFdBQVc7b0JBRkY7b0JBSVgsbUJBQW1CO3dCQUNqQixXQUFXO3dCQUNYLFdBQVc7b0JBRk07b0JBSW5CLFVBQVU7d0JBQ1IsV0FBVzt3QkFDWCxXQUFXO29CQUZIO2dCQXpGSjtnQkE4RlIsWUFBWTtvQkFDVixPQUFPO3dCQUNMLFdBQVc7d0JBQ1gsV0FBVztvQkFGTjtnQkFERztnQkFNWixpQkFBaUI7b0JBQ2YsZ0JBQWdCO3dCQUNkLFdBQVc7d0JBQ1gsV0FBVztvQkFGRztvQkFJaEIsWUFBWTt3QkFDVixXQUFXO3dCQUNYLFdBQVc7b0JBRkQ7Z0JBTEc7Z0JBVWpCLGNBQWM7b0JBQ1osMEJBQTBCO3dCQUN4QixXQUFXO3dCQUNYLFdBQVc7b0JBRmE7Z0JBRGQ7Z0JBTWQsV0FBVztvQkFDVCxVQUFVO3dCQUNSLFdBQVc7d0JBQ1gsV0FBVztvQkFGSDtvQkFJVixPQUFPO3dCQUNMLFdBQVc7d0JBQ1gsV0FBVztvQkFGTjtvQkFJUCxVQUFVO3dCQUNSLFdBQVc7d0JBQ1gsV0FBVztvQkFGSDtvQkFJVixjQUFjO3dCQUNaLFdBQVc7d0JBQ1gsV0FBVztvQkFGQztvQkFJZCxrQkFBa0I7d0JBQ2hCLFdBQVc7d0JBQ1gsV0FBVztvQkFGSztvQkFJbEIsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7Z0JBekJEO1lBam9CTztZQWlxQnBCLElBQUlOLE9BQU9PLElBQVAsQ0FBWUQsYUFBYUUsTUFBekIsS0FBb0MsR0FDdEMsTUFBTSxJQUFJVixNQUFNO1lBR2xCOzs7Ozs7Ozs7T0FTSixHQUNJLE1BQU1XLHVCQUF1QkM7Z0JBQzNCQyxZQUFZQyxVQUFELEVBQWFDLEtBQWIsQ0FBZ0M7b0JBQ3pDLEtBQUEsQ0FBTUE7b0JBQ04sSUFBQSxDQUFLRCxVQUFMLEdBQWtCQTtnQkFDbkI7Z0JBRURHLElBQUlDLEdBQUQsRUFBTTtvQkFDUCxJQUFJLENBQUMsSUFBQSxDQUFLQyxHQUFMLENBQVNELE1BQ1osSUFBQSxDQUFLRSxHQUFMLENBQVNGLEtBQUssSUFBQSxDQUFLSixVQUFMLENBQWdCSTtvQkFHaEMsT0FBTyxLQUFBLENBQU1ELElBQUlDO2dCQUNsQjtZQVprQztZQWVyQzs7Ozs7O09BTUosR0FDSSxNQUFNRyxhQUFhQyxDQUFBQTtnQkFDakIsT0FBT0EsU0FBUyxPQUFPQSxVQUFVLFlBQVksT0FBT0EsTUFBTUMsSUFBYixLQUFzQjtZQUNwRTtZQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E4QkosR0FDSSxNQUFNQyxlQUFlLENBQUNDLFNBQVNDO2dCQUM3QixPQUFPLENBQUMsR0FBR0M7b0JBQ1QsSUFBSXBCLGNBQWNULE9BQWQsQ0FBc0I4QixTQUExQixFQUNFSCxRQUFRSSxNQUFSLENBQWUsSUFBSTdCLE1BQU1PLGNBQWNULE9BQWQsQ0FBc0I4QixTQUF0QixDQUFnQ0UsT0FBMUM7eUJBQ1YsSUFBSUosU0FBU0ssaUJBQVQsSUFDQ0osYUFBYWpCLE1BQWIsSUFBdUIsS0FBS2dCLFNBQVNLLGlCQUFULEtBQStCLE9BQ3JFTixRQUFRTyxPQUFSLENBQWdCTCxZQUFZLENBQUMsRUFBN0I7eUJBRUFGLFFBQVFPLE9BQVIsQ0FBZ0JMO2dCQUVuQjtZQUNGO1lBRUQsTUFBTU0scUJBQXNCQyxDQUFBQSxVQUFZQSxXQUFXLElBQUksYUFBYTtZQUVwRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXlCSixHQUNJLE1BQU1DLG9CQUFvQixDQUFDQyxNQUFNVjtnQkFDL0IsT0FBTyxTQUFTVyxxQkFBcUJDLE1BQTlCLEVBQXNDLEdBQUdDLElBQXpDO29CQUNMLElBQUlBLEtBQUs3QixNQUFMLEdBQWNnQixTQUFTYyxPQUEzQixFQUNFLE1BQU0sSUFBSXhDLE1BQU8sQ0FBQSxrQkFBQSxFQUFvQjBCLFNBQVNjLE9BQVEsQ0FBQSxDQUFBLEVBQUdQLG1CQUFtQlAsU0FBU2MsT0FBVixFQUFtQixLQUFBLEVBQU9KLEtBQUssUUFBQSxFQUFVRyxLQUFLN0IsTUFBTyxDQUFBLENBQTFIO29CQUdSLElBQUk2QixLQUFLN0IsTUFBTCxHQUFjZ0IsU0FBU2UsT0FBM0IsRUFDRSxNQUFNLElBQUl6QyxNQUFPLENBQUEsaUJBQUEsRUFBbUIwQixTQUFTZSxPQUFRLENBQUEsQ0FBQSxFQUFHUixtQkFBbUJQLFNBQVNlLE9BQVYsRUFBbUIsS0FBQSxFQUFPTCxLQUFLLFFBQUEsRUFBVUcsS0FBSzdCLE1BQU8sQ0FBQSxDQUF6SDtvQkFHUixPQUFPLElBQUlnQyxRQUFRLENBQUNWLFNBQVNIO3dCQUMzQixJQUFJSCxTQUFTaUIsb0JBQWIsRUFDRSwyRkFBQTt3QkFDQSxzRkFBQTt3QkFDQSx1REFBQTt3QkFDQSxJQUFJOzRCQUNGTCxNQUFNLENBQUNGLEtBQVAsSUFBZ0JHLE1BQU1mLGFBQWE7Z0NBQUNRO2dDQUFTSDs0QkFBVixHQUFtQkg7d0JBQ3ZELEVBQUMsT0FBT2tCLFNBQVM7NEJBQ2hCQyxRQUFRQyxJQUFSLENBQWMsQ0FBQSxFQUFFVixLQUFLLDREQUFBLENBQVIsR0FDQSxnREFBZ0RROzRCQUU3RE4sTUFBTSxDQUFDRixLQUFQLElBQWdCRyxPQUVoQiw2RUFGQUQ7NEJBR0Esd0NBQUE7NEJBQ0FaLFNBQVNpQixvQkFBVCxHQUFnQzs0QkFDaENqQixTQUFTcUIsVUFBVCxHQUFzQjs0QkFFdEJmO3dCQUNEOzZCQUNJLElBQUlOLFNBQVNxQixVQUFiLEVBQXlCOzRCQUM5QlQsTUFBTSxDQUFDRixLQUFQLElBQWdCRzs0QkFDaEJQO3dCQUNELE9BQ0NNLE1BQU0sQ0FBQ0YsS0FBUCxJQUFnQkcsTUFBTWYsYUFBYTs0QkFBQ1E7NEJBQVNIO3dCQUFWLEdBQW1CSDtvQkFFekQ7Z0JBQ0Y7WUFDRjtZQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrQkosR0FDSSxNQUFNc0IsYUFBYSxDQUFDVixRQUFRVyxRQUFRQztnQkFDbEMsT0FBTyxJQUFJQyxNQUFNRixRQUFRO29CQUN2QkcsT0FBTUMsWUFBRCxFQUFlQyxPQUFmLEVBQXdCZixJQUF4Qjt3QkFDSCxPQUFPVyxRQUFRSyxJQUFSLENBQWFELFNBQVNoQixXQUFXQztvQkFDekM7Z0JBSHNCO1lBSzFCO1lBRUQsSUFBSWlCLGlCQUFpQkMsU0FBU0YsSUFBVCxDQUFjRyxJQUFkLENBQW1CeEQsT0FBT0UsU0FBUCxDQUFpQm9ELGNBQXBDO1lBRXJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bc0JKLEdBQ0ksTUFBTUcsYUFBYSxDQUFDckIsUUFBUXNCLFdBQVcsQ0FBQSxDQUFwQixFQUF3QmxDLFdBQVcsQ0FBQSxDQUFuQztnQkFDakIsSUFBSW1DLFFBQVEzRCxPQUFPNEQsTUFBUCxDQUFjO2dCQUMxQixJQUFJQyxXQUFXO29CQUNiNUMsS0FBSTZDLFdBQUQsRUFBY0MsSUFBZDt3QkFDRCxPQUFPQSxRQUFRM0IsVUFBVTJCLFFBQVFKO29CQUNsQztvQkFFRDVDLEtBQUkrQyxXQUFELEVBQWNDLElBQWQsRUFBb0JDLFFBQXBCO3dCQUNELElBQUlELFFBQVFKLE9BQ1YsT0FBT0EsS0FBSyxDQUFDSSxLQUFiO3dCQUdGLElBQUksQ0FBRUEsQ0FBQUEsUUFBUTNCLE1BQUFBLEdBQ1osT0FBT3RCO3dCQUdULElBQUlNLFFBQVFnQixNQUFNLENBQUMyQixLQUFuQjt3QkFFQSxJQUFJLE9BQU8zQyxVQUFVLFlBQVk7NEJBQy9CLG9FQUFBOzRCQUNBLGdCQUFBOzRCQUVBLElBQUksT0FBT3NDLFFBQVEsQ0FBQ0ssS0FBaEIsS0FBMEIsWUFDNUIsa0RBQUE7NEJBQ0EzQyxRQUFRMEIsV0FBV1YsUUFBUUEsTUFBTSxDQUFDMkIsS0FBaEIsRUFBdUJMLFFBQVEsQ0FBQ0ssS0FBaEM7aUNBQ2IsSUFBSVQsZUFBZTlCLFVBQVV1QyxPQUFPO2dDQUN6Qyw4REFBQTtnQ0FDQSwwQkFBQTtnQ0FDQSxJQUFJZixVQUFVZixrQkFBa0I4QixNQUFNdkMsUUFBUSxDQUFDdUMsS0FBaEI7Z0NBQy9CM0MsUUFBUTBCLFdBQVdWLFFBQVFBLE1BQU0sQ0FBQzJCLEtBQWhCLEVBQXVCZjs0QkFDMUMsT0FDQyxnRUFBQTs0QkFDQSxtREFBQTs0QkFDQTVCLFFBQVFBLE1BQU1vQyxJQUFOLENBQVdwQjt3QkFFdEIsT0FBTSxJQUFJLE9BQU9oQixVQUFVLFlBQVlBLFVBQVUsUUFDdENrQyxDQUFBQSxlQUFlSSxVQUFVSyxTQUN6QlQsZUFBZTlCLFVBQVV1QyxLQUFYLEdBQ3hCLHNFQUFBO3dCQUNBLG9FQUFBO3dCQUNBLFlBQUE7d0JBQ0EzQyxRQUFRcUMsV0FBV3JDLE9BQU9zQyxRQUFRLENBQUNLLEtBQWpCLEVBQXdCdkMsUUFBUSxDQUFDdUMsS0FBakM7NkJBQ2IsSUFBSVQsZUFBZTlCLFVBQVUsTUFDbEMsc0NBQUE7d0JBQ0FKLFFBQVFxQyxXQUFXckMsT0FBT3NDLFFBQVEsQ0FBQ0ssS0FBakIsRUFBd0J2QyxRQUFRLENBQUMsSUFBakM7NkJBQ2I7NEJBQ0wsc0RBQUE7NEJBQ0EsdURBQUE7NEJBQ0F4QixPQUFPaUUsY0FBUCxDQUFzQk4sT0FBT0ksTUFBTTtnQ0FDakNHLGNBQWM7Z0NBQ2RDLFlBQVk7Z0NBQ1pwRDtvQ0FDRSxPQUFPcUIsTUFBTSxDQUFDMkIsS0FBZDtnQ0FDRDtnQ0FDRDdDLEtBQUlFLEtBQUQ7b0NBQ0RnQixNQUFNLENBQUMyQixLQUFQLEdBQWUzQztnQ0FDaEI7NEJBUmdDOzRCQVduQyxPQUFPQTt3QkFDUjt3QkFFRHVDLEtBQUssQ0FBQ0ksS0FBTixHQUFjM0M7d0JBQ2QsT0FBT0E7b0JBQ1I7b0JBRURGLEtBQUk0QyxXQUFELEVBQWNDLElBQWQsRUFBb0IzQyxLQUFwQixFQUEyQjRDLFFBQTNCO3dCQUNELElBQUlELFFBQVFKLE9BQ1ZBLEtBQUssQ0FBQ0ksS0FBTixHQUFjM0M7NkJBRWRnQixNQUFNLENBQUMyQixLQUFQLEdBQWUzQzt3QkFFakIsT0FBTztvQkFDUjtvQkFFRDZDLGdCQUFlSCxXQUFELEVBQWNDLElBQWQsRUFBb0JLLElBQXBCO3dCQUNaLE9BQU9DLFFBQVFKLGNBQVIsQ0FBdUJOLE9BQU9JLE1BQU1LO29CQUM1QztvQkFFREUsZ0JBQWVSLFdBQUQsRUFBY0MsSUFBZDt3QkFDWixPQUFPTSxRQUFRQyxjQUFSLENBQXVCWCxPQUFPSTtvQkFDdEM7Z0JBL0VZLEdBa0ZmLHlFQWxGZTtnQkFtRmYsdUVBQUE7Z0JBQ0Esa0VBQUE7Z0JBQ0EsZ0VBQUE7Z0JBQ0EsMkRBQUE7Z0JBQ0EsMEVBQUE7Z0JBQ0EsRUFBQTtnQkFDQSxxRUFBQTtnQkFDQSx1RUFBQTtnQkFDQSx5Q0FBQTtnQkFDQSxJQUFJRCxjQUFjOUQsT0FBTzRELE1BQVAsQ0FBY3hCO2dCQUNoQyxPQUFPLElBQUlhLE1BQU1hLGFBQWFEO1lBQy9CO1lBRUQ7Ozs7Ozs7Ozs7Ozs7OztPQWVKLEdBQ0ksTUFBTVUsWUFBWUMsQ0FBQUEsYUFBZSxDQUFBO29CQUMvQkMsYUFBWXJDLE1BQUQsRUFBU3NDLFFBQVQsRUFBbUIsR0FBR3JDLElBQXRCO3dCQUNURCxPQUFPcUMsV0FBUCxDQUFtQkQsV0FBV3pELEdBQVgsQ0FBZTJELGNBQWNyQztvQkFDakQ7b0JBRURzQyxhQUFZdkMsTUFBRCxFQUFTc0MsUUFBVDt3QkFDVCxPQUFPdEMsT0FBT3VDLFdBQVAsQ0FBbUJILFdBQVd6RCxHQUFYLENBQWUyRDtvQkFDMUM7b0JBRURFLGdCQUFleEMsTUFBRCxFQUFTc0MsUUFBVDt3QkFDWnRDLE9BQU93QyxjQUFQLENBQXNCSixXQUFXekQsR0FBWCxDQUFlMkQ7b0JBQ3RDO2dCQVg4QixDQUFBO1lBY2pDLE1BQU1HLDRCQUE0QixJQUFJcEUsZUFBZWlFLENBQUFBO2dCQUNuRCxJQUFJLE9BQU9BLGFBQWEsWUFDdEIsT0FBT0E7Z0JBR1Q7Ozs7Ozs7U0FPTixHQUNNLE9BQU8sU0FBU0ksa0JBQWtCQyxHQUEzQjtvQkFDTCxNQUFNQyxhQUFhdkIsV0FBV3NCLEtBQUssQ0FBbkMsR0FBc0Q7d0JBQ3BERSxZQUFZOzRCQUNWM0MsU0FBUzs0QkFDVEMsU0FBUzt3QkFGQztvQkFEd0M7b0JBTXREbUMsU0FBU007Z0JBQ1Y7WUFDRjtZQUVELE1BQU1FLG9CQUFvQixJQUFJekUsZUFBZWlFLENBQUFBO2dCQUMzQyxJQUFJLE9BQU9BLGFBQWEsWUFDdEIsT0FBT0E7Z0JBR1Q7Ozs7Ozs7Ozs7Ozs7Ozs7U0FnQk4sR0FDTSxPQUFPLFNBQVNTLFVBQVV2RCxPQUFuQixFQUE0QndELE1BQTVCLEVBQW9DQyxZQUFwQztvQkFDTCxJQUFJQyxzQkFBc0I7b0JBRTFCLElBQUlDO29CQUNKLElBQUlDLHNCQUFzQixJQUFJaEQsUUFBUVYsQ0FBQUE7d0JBQ3BDeUQsc0JBQXNCLFNBQVNFLFFBQVQ7NEJBQ3BCSCxzQkFBc0I7NEJBQ3RCeEQsUUFBUTJEO3dCQUNUO29CQUNGO29CQUVELElBQUlDO29CQUNKLElBQUk7d0JBQ0ZBLFNBQVNoQixTQUFTOUMsU0FBU3dELFFBQVFHO29CQUNwQyxFQUFDLE9BQU9JLEtBQUs7d0JBQ1pELFNBQVNsRCxRQUFRYixNQUFSLENBQWVnRTtvQkFDekI7b0JBRUQsTUFBTUMsbUJBQW1CRixXQUFXLFFBQVF2RSxXQUFXdUUsU0FFdkQsK0RBRkE7b0JBR0EseURBQUE7b0JBQ0EsNkRBQUE7b0JBQ0EsSUFBSUEsV0FBVyxRQUFRLENBQUNFLG9CQUFvQixDQUFDTixxQkFDM0MsT0FBTztxQkFHVCw2REFGQztvQkFHRCxpRUFBQTtvQkFDQSxpRUFBQTtvQkFDQSxZQUFBO29CQUNBLE1BQU1PLHFCQUFzQnRFLENBQUFBO3dCQUMxQkEsUUFBUUYsSUFBUixDQUFheUUsQ0FBQUE7NEJBQ1gsMEJBQUE7NEJBQ0FULGFBQWFTO3dCQUNkLEdBQUVDLENBQUFBOzRCQUNELGdFQUFBOzRCQUNBLDJEQUFBOzRCQUNBLElBQUluRTs0QkFDSixJQUFJbUUsU0FBVUEsQ0FBQUEsaUJBQWlCakcsU0FDM0IsT0FBT2lHLE1BQU1uRSxPQUFiLEtBQXlCLFFBQUEsR0FDM0JBLFVBQVVtRSxNQUFNbkUsT0FBaEI7aUNBRUFBLFVBQVU7NEJBR1p5RCxhQUFhO2dDQUNYVyxtQ0FBbUM7Z0NBQ25DcEU7NEJBRlc7d0JBSWQsR0FBRXFFLEtBbEJILENBa0JTTixDQUFBQTs0QkFDUCxnRUFBQTs0QkFDQWhELFFBQVFvRCxLQUFSLENBQWMsMkNBQTJDSjt3QkFDMUQ7b0JBQ0YsR0FFRCxtRUFGQztvQkFHRCx3RUFBQTtvQkFDQSxpREFBQTtvQkFDQSxJQUFJQyxrQkFDRkMsbUJBQW1CSDt5QkFFbkJHLG1CQUFtQkw7cUJBR3JCLGlEQUZDO29CQUdELE9BQU87Z0JBQ1I7WUFDRjtZQUVELE1BQU1VLDZCQUE2QixDQUFDLEVBQUN2RSxNQUFELEVBQVNHLE9BQUFBLEVBQVYsRUFBb0JxRTtnQkFDckQsSUFBSTlGLGNBQWNULE9BQWQsQ0FBc0I4QixTQUExQjtvQkFDRSxnRkFBQTtvQkFDQSwwQ0FBQTtvQkFDQSxrRUFBQTtvQkFDQSxJQUFJckIsY0FBY1QsT0FBZCxDQUFzQjhCLFNBQXRCLENBQWdDRSxPQUFoQyxLQUE0Q3pCLGtEQUM5QzJCO3lCQUVBSCxPQUFPLElBQUk3QixNQUFNTyxjQUFjVCxPQUFkLENBQXNCOEIsU0FBdEIsQ0FBZ0NFLE9BQTFDO3VCQUVKLElBQUl1RSxTQUFTQSxNQUFNSCxpQ0FBbkIsRUFDTCx5REFBQTtnQkFDQSxxQkFBQTtnQkFDQXJFLE9BQU8sSUFBSTdCLE1BQU1xRyxNQUFNdkUsT0FBaEI7cUJBRVBFLFFBQVFxRTtZQUVYO1lBRUQsTUFBTUMscUJBQXFCLENBQUNsRSxNQUFNVixVQUFVNkUsaUJBQWlCLEdBQUdoRTtnQkFDOUQsSUFBSUEsS0FBSzdCLE1BQUwsR0FBY2dCLFNBQVNjLE9BQTNCLEVBQ0UsTUFBTSxJQUFJeEMsTUFBTyxDQUFBLGtCQUFBLEVBQW9CMEIsU0FBU2MsT0FBUSxDQUFBLENBQUEsRUFBR1AsbUJBQW1CUCxTQUFTYyxPQUFWLEVBQW1CLEtBQUEsRUFBT0osS0FBSyxRQUFBLEVBQVVHLEtBQUs3QixNQUFPLENBQUEsQ0FBMUg7Z0JBR1IsSUFBSTZCLEtBQUs3QixNQUFMLEdBQWNnQixTQUFTZSxPQUEzQixFQUNFLE1BQU0sSUFBSXpDLE1BQU8sQ0FBQSxpQkFBQSxFQUFtQjBCLFNBQVNlLE9BQVEsQ0FBQSxDQUFBLEVBQUdSLG1CQUFtQlAsU0FBU2UsT0FBVixFQUFtQixLQUFBLEVBQU9MLEtBQUssUUFBQSxFQUFVRyxLQUFLN0IsTUFBTyxDQUFBLENBQXpIO2dCQUdSLE9BQU8sSUFBSWdDLFFBQVEsQ0FBQ1YsU0FBU0g7b0JBQzNCLE1BQU0yRSxZQUFZSiwyQkFBMkIxQyxJQUEzQixDQUFnQyxNQUFNO3dCQUFDMUI7d0JBQVNIO29CQUFWO29CQUN4RFUsS0FBS2tFLElBQUwsQ0FBVUQ7b0JBQ1ZELGdCQUFnQkcsV0FBaEIsSUFBK0JuRTtnQkFDaEM7WUFDRjtZQUVELE1BQU1vRSxpQkFBaUI7Z0JBQ3JCQyxVQUFVO29CQUNSQyxTQUFTO3dCQUNQN0IsbUJBQW1CUCxVQUFVTTtvQkFEdEI7Z0JBREQ7Z0JBS1ZqRixTQUFTO29CQUNQdUYsV0FBV1osVUFBVVc7b0JBQ3JCMEIsbUJBQW1CckMsVUFBVVc7b0JBQzdCc0IsYUFBYUosbUJBQW1CNUMsSUFBbkIsQ0FBd0IsTUFBTSxlQUFlO3dCQUFDbEIsU0FBUzt3QkFBR0MsU0FBUztvQkFBdEI7Z0JBSG5EO2dCQUtUc0UsTUFBTTtvQkFDSkwsYUFBYUosbUJBQW1CNUMsSUFBbkIsQ0FBd0IsTUFBTSxlQUFlO3dCQUFDbEIsU0FBUzt3QkFBR0MsU0FBUztvQkFBdEI7Z0JBRHREO1lBWGU7WUFldkIsTUFBTXVFLGtCQUFrQjtnQkFDdEJDLE9BQU87b0JBQUN6RSxTQUFTO29CQUFHQyxTQUFTO2dCQUF0QjtnQkFDUHhCLEtBQUs7b0JBQUN1QixTQUFTO29CQUFHQyxTQUFTO2dCQUF0QjtnQkFDTHJCLEtBQUs7b0JBQUNvQixTQUFTO29CQUFHQyxTQUFTO2dCQUF0QjtZQUhpQjtZQUt4QmpDLFlBQVkwRyxPQUFaLEdBQXNCO2dCQUNwQkwsU0FBUztvQkFBQyxLQUFLRztnQkFBTjtnQkFDVEcsVUFBVTtvQkFBQyxLQUFLSDtnQkFBTjtnQkFDVkksVUFBVTtvQkFBQyxLQUFLSjtnQkFBTjtZQUhVO1lBTXRCLE9BQU9yRCxXQUFXcEQsZUFBZW9HLGdCQUFnQm5HO1FBQ2xELEdBRUQseUVBRkM7UUFHRCwrQkFBQTtRQUNBNkcsUUFBT0MsT0FBUCxHQUFpQmhILFNBQVNUO0lBQzNCLE9BQ0N3SCxRQUFPQyxPQUFQLEdBQWlCMUgsV0FBV0ssT0FBNUI7QTs7Ozs7OENDN3JDVzsrQ0FFQTtvREFFQTttREFFQTtnREFFQTtrREFFQTtBQVZOLE1BQU0sV0FBVyxDQUFDLHljQUF5YyxDQUFDO0FBRTVkLE1BQU0sWUFBWSxDQUFDLHdZQUF3WSxDQUFDO0FBRTVaLE1BQU0saUJBQWlCLENBQUMsbVpBQW1aLENBQUM7QUFFNWEsTUFBTSxnQkFBZ0IsQ0FBQyx3M0JBQXczQixDQUFDO0FBRWg1QixNQUFNLGFBQWEsQ0FBQyw0aEJBQTRoQixDQUFDO0FBRWpqQixNQUFNLGVBQWUsQ0FBQyxnb0JBQWdvQixDQUFDOzs7QUNWOXBCLFFBQVEsY0FBYyxHQUFHLFNBQVUsQ0FBQztJQUNsQyxPQUFPLEtBQUssRUFBRSxVQUFVLEdBQUcsSUFBSTtRQUFDLFNBQVM7SUFBQztBQUM1QztBQUVBLFFBQVEsaUJBQWlCLEdBQUcsU0FBVSxDQUFDO0lBQ3JDLE9BQU8sY0FBYyxDQUFDLEdBQUcsY0FBYztRQUFDLE9BQU87SUFBSTtBQUNyRDtBQUVBLFFBQVEsU0FBUyxHQUFHLFNBQVUsTUFBTSxFQUFFLElBQUk7SUFDeEMsT0FBTyxJQUFJLENBQUMsUUFBUSxPQUFPLENBQUMsU0FBVSxHQUFHO1FBQ3ZDLElBQ0UsUUFBUSxhQUNSLFFBQVEsZ0JBQ1IsT0FBTyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLE1BRTNDO1FBR0YsT0FBTyxjQUFjLENBQUMsTUFBTSxLQUFLO1lBQy9CLFlBQVk7WUFDWixLQUFLO2dCQUNILE9BQU8sTUFBTSxDQUFDLElBQUk7WUFDcEI7UUFDRjtJQUNGO0lBRUEsT0FBTztBQUNUO0FBRUEsUUFBUSxNQUFNLEdBQUcsU0FBVSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUc7SUFDNUMsT0FBTyxjQUFjLENBQUMsTUFBTSxVQUFVO1FBQ3BDLFlBQVk7UUFDWixLQUFLO0lBQ1A7QUFDRjs7O0FDbENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEwQ0U7O0FBRUYsOENBQWdCO0FBQVQsU0FBUyxTQUFTLEdBQUc7SUFDM0IsMkJBQTJCO0lBQzNCLElBQUksSUFBSSxHQUNQLElBQUksR0FDSixJQUFJO0lBQ0wsSUFBSSxJQUFJLE1BQU0sS0FBSyxHQUFHO1FBQ3JCLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUU7UUFDOUIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRTtRQUM5QixJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFO0lBQy9CLE9BQU8sSUFBSSxJQUFJLE1BQU0sS0FBSyxHQUFHO1FBQzVCLElBQUksU0FBUyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUk7UUFDOUIsSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSTtRQUM5QixJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJO0lBQy9CO0lBRUEsMEJBQTBCO0lBQzFCLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLE1BQU0sTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUc7SUFDM0IsTUFBTSxNQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRztJQUMzQixJQUFJLEdBQ0gsR0FDQSxJQUFJLEFBQUMsQ0FBQSxNQUFNLEdBQUUsSUFBSztJQUVuQixJQUFJLFFBQVEsS0FDWCxJQUFJLElBQUksRUFBRSxhQUFhOztTQUNqQjtRQUNOLE1BQU0sSUFBSSxNQUFNO1FBQ2hCLElBQUksSUFBSSxNQUFNLElBQUssQ0FBQSxJQUFJLE1BQU0sR0FBRSxJQUFLLElBQUssQ0FBQSxNQUFNLEdBQUU7UUFDakQsT0FBUTtZQUNQLEtBQUs7Z0JBQ0osSUFBSSxBQUFDLENBQUEsSUFBSSxDQUFBLElBQUssSUFBSyxDQUFBLElBQUksSUFBSSxJQUFJLENBQUE7Z0JBQy9CO1lBQ0QsS0FBSztnQkFDSixJQUFJLEFBQUMsQ0FBQSxJQUFJLENBQUEsSUFBSyxJQUFJO2dCQUNsQjtZQUNELEtBQUs7Z0JBQ0osSUFBSSxBQUFDLENBQUEsSUFBSSxDQUFBLElBQUssSUFBSTtnQkFDbEI7UUFDRjtRQUNBLEtBQUs7SUFDTjtJQUVBLE9BQU87UUFBQyxLQUFLLEtBQUssQ0FBQyxJQUFJO1FBQU0sS0FBSyxLQUFLLENBQUMsSUFBSTtRQUFNLEtBQUssS0FBSyxDQUFDLElBQUk7S0FBSztBQUN2RTs7O0FDekZBLFVBQVU7OztrREFtRUM7QUErT1gsMERBQWdCO0FBalRoQjs7QUFDQTtBQUVBLFlBQVk7QUFDWixNQUFNLFdBQVc7SUFDaEIsWUFBWSxpQkFBaUIsU0FBUyxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7SUFDeEUsVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0FBQ2I7QUFFQSxNQUFNLGFBQWE7SUFDbEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0E7QUFFRCxNQUFNLHNCQUFzQixDQUFDLHNIQUFzSCxDQUFDO0FBRXBKLElBQUkscUJBQXFCLE1BQ3hCLHVCQUF1QixNQUN2QiwwQkFBMEI7QUFFM0IsTUFBTSxlQUFlO0lBQ3BCLE1BQU07SUFDTixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZLFNBQVMsUUFBUTtJQUM3QixrQkFBa0IsU0FBUyxRQUFRO0lBQ25DLE1BQU07SUFDTixLQUFLO0lBQ0wsS0FBSztBQUNOO0FBQ0EsTUFBTSxpQkFBaUI7SUFDdEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVksU0FBUyxVQUFVO0lBQy9CLGtCQUFrQixTQUFTLFVBQVU7SUFDckMsTUFBTTtJQUNOLEtBQUs7SUFDTCxLQUFLO0FBQ047QUFDQSxNQUFNLG9CQUFvQjtJQUN6QixNQUFNO0lBQ04sV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWSxTQUFTLGFBQWE7SUFDbEMsa0JBQWtCLFNBQVMsYUFBYTtJQUN4QyxNQUFNO0lBQ04sS0FBSztJQUNMLEtBQUs7QUFDTjtBQUVPLElBQUksZUFBZSxDQUFDOzs7Ozs7Ozs7O09BVXBCLEVBQUUsV0FBVyxHQUFHLENBQUMsQ0FBQyxPQUFTLENBQUMsZUFBZSxFQUFFLFNBQVMsWUFBWSxTQUFTLFVBQVUsR0FBRyxLQUFLLEVBQUUsRUFBRSxLQUFLLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FDckgsSUFDQzs7Ozs7R0FLTixFQUFFLENBQUEsR0FBQSw4QkFBaUIsQUFBRCxFQUFFLGNBQWM7R0FDbEMsRUFBRSxDQUFBLEdBQUEsZ0NBQW1CLEFBQUQsRUFBRSxnQkFBZ0I7R0FDdEMsRUFBRSxDQUFBLEdBQUEsZ0NBQW1CLEFBQUQsRUFBRSxtQkFBbUI7Ozs7R0FJekMsRUFBRSxDQUFBLEdBQUEseUJBQVksQUFBRCxFQUFFO0lBQUUsSUFBSTtJQUFhLFNBQVM7SUFBZSxVQUFVO0lBQU8sV0FBVztBQUFjLEdBQUc7OztBQUcxRyxDQUFDO0FBRUQsU0FBUyxjQUFjLGFBQWEsRUFBRSxRQUFRO0lBQzdDLElBQUksVUFBVSxTQUFTLGFBQWEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztJQUV2RSxJQUFJLGFBQWEsV0FDaEIsUUFBUSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWM7U0FFdkMsUUFBUSxLQUFLLEdBQUc7QUFFbEI7QUFDQSw2QkFBNkI7QUFDN0IsU0FBUyxjQUFjLFFBQVE7SUFDOUIsd0JBQXdCO0lBRXhCLE9BQU8sT0FBTyxDQUFDLFVBQVUsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU07UUFDN0MsU0FBUyxlQUFlLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtRQUN2RCxjQUFjLEtBQUs7UUFDbkIsa0NBQWtDO1FBRWxDLFFBQVEsR0FBRyxDQUFDLHNCQUFzQixpQkFBaUIsU0FBUyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3pHO0FBQ0Q7QUFDQSw4Q0FBOEM7QUFDOUMsZUFBZSxhQUFhLFFBQVE7SUFDbkMsd0JBQXdCO0lBQ3hCLElBQUk7UUFDSCxNQUFNLENBQUEsR0FBQSxvQ0FBTyxBQUFELEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDaEMsRUFBRSxPQUFPLE9BQU87UUFDZixRQUFRLEtBQUssQ0FBQyw0QkFBNEI7SUFDM0M7QUFDRDtBQUVBLGdEQUFnRDtBQUNoRCxlQUFlO0lBQ2QsSUFBSTtRQUNILE1BQU0sV0FBVyxNQUFNLENBQUEsR0FBQSxvQ0FBTyxBQUFELEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLENBQUM7UUFDNUQsNEJBQTRCO1FBRTVCLElBQUksU0FBUyxVQUFVLElBQUksU0FBUyxVQUFVLEtBQUssU0FBUyxVQUFVLEVBQ3JFLGVBQWUsU0FBUyxVQUFVO1FBRW5DLGNBQWM7SUFDZixFQUFFLE9BQU8sT0FBTztRQUNmLFFBQVEsS0FBSyxDQUFDLDRCQUE0QjtJQUMzQztBQUNEO0FBRUEsaUJBQWlCO0FBQ2pCOzs7Ozs7Ozs7O0VBVUUsR0FFRiw0Q0FBNEM7QUFDNUMsU0FBUyxlQUFlLFVBQVU7SUFDakMsTUFBTSxPQUFPLENBQUMseUNBQXlDLEVBQUUsV0FBVyxPQUFPLENBQzFFLEtBQ0EsS0FDQyxFQUFFLG9CQUFvQixhQUFhLENBQUM7SUFFdEMsTUFBTSxPQUFPLFNBQVMsYUFBYSxDQUFDO0lBQ3BDLEtBQUssR0FBRyxHQUFHO0lBQ1gsS0FBSyxJQUFJLEdBQUc7SUFDWixTQUFTLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDM0I7QUFDQSxTQUFTO0lBQ1IsSUFBSSxRQUFRLFNBQVMsZ0JBQWdCLENBQUM7SUFDdEMsSUFBSSxNQUFNLE1BQU0sRUFBRSxPQUFPLE1BQU0sSUFBSSxDQUFDO0FBQ3JDO0FBRUEsU0FBUztJQUNSLE1BQU0sUUFBUTtJQUVkLElBQUssSUFBSSxJQUFJLE1BQU0sTUFBTSxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUs7UUFDM0MsTUFBTSxPQUFPLEtBQUssQ0FBQyxFQUFFO1FBQ3JCLElBQUksS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUN0QixLQUFLLFVBQVUsQ0FBQyxXQUFXLENBQUM7SUFFOUI7QUFDRDtBQUNBLFNBQVMsbUJBQW1CLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO0lBQ3BELElBQUksTUFBTSxhQUFhO1FBQ3RCLGFBQWE7UUFDYixPQUFPO0lBQ1IsT0FBTyxJQUFJLGFBQWEsT0FBTyxhQUFhLEtBQUs7UUFDaEQsYUFBYSxDQUFDLHVCQUF1QixFQUFFLElBQUksS0FBSyxFQUFFLElBQUksQ0FBQztRQUN2RCxPQUFPO0lBQ1I7SUFFQSxPQUFPO0FBQ1I7QUFDQSxTQUFTLGFBQWEsT0FBTztJQUM1QixxQ0FBcUM7SUFDckMsTUFBTSxnQkFBZ0IsU0FBUyxhQUFhLENBQUM7SUFFN0MsSUFBSSxlQUFlLGNBQWMsTUFBTTtJQUV2QywwQ0FBMEM7SUFDMUMsTUFBTSxlQUFlLFNBQVMsYUFBYSxDQUFDO0lBQzVDLGFBQWEsU0FBUyxHQUFHO0lBQ3pCLGFBQWEsV0FBVyxHQUFHO0lBQzNCLFNBQVMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUUxQiwyQ0FBMkM7SUFDM0MsV0FBVztRQUNWLGFBQWEsTUFBTTtJQUNwQixHQUFHO0FBQ0o7QUFDQSxTQUFTLGFBQWEsUUFBUSxFQUFFLGFBQWEsQ0FBQztJQUM3Qyw2Q0FBNkM7SUFDN0MsV0FBVyxTQUFTLE9BQU8sQ0FBQyxnQkFBZ0I7SUFDNUMsa0VBQWtFO0lBQ2xFLElBQUksWUFBWSxXQUFXLFVBQVUsT0FBTyxDQUFDO0lBQzdDLDhDQUE4QztJQUM5QyxZQUFZLFVBQVUsT0FBTyxDQUFDLFVBQVU7SUFDeEMsMENBQTBDO0lBQzFDLE9BQU87QUFDUjtBQUVBLFNBQVMsZUFBZSxDQUFDO0lBQ3hCLE1BQU0sU0FBUyxhQUFhLEVBQUUsTUFBTSxDQUFDLEtBQUs7SUFDMUMscUJBQXFCLGFBQWEsb0JBQW9CO0lBRXRELElBQUksc0JBQXNCLFFBQVEsT0FBTyxRQUFRLEdBQUcsQ0FBQztRQUFFLFNBQVM7UUFBUTtJQUFtQjtJQUUzRixJQUFJLENBQUMsbUJBQW1CLFFBQVEsYUFBYSxHQUFHLEVBQUUsYUFBYSxHQUFHLEdBQUc7UUFDcEUsK0NBQStDO1FBQy9DLGlEQUFpRDtRQUNqRCxnREFBZ0Q7UUFDaEQsY0FBYyxZQUFZO1FBQzFCLGNBQWM7WUFBRSxVQUFVO1FBQW1CO1FBQzdDLGFBQWE7WUFBRSxVQUFVO1FBQW1CO1FBQzVDO0lBQ0Q7SUFFQSxjQUFjO1FBQUUsVUFBVTtJQUFPO0lBQ2pDLGFBQWE7UUFBRSxVQUFVO0lBQU87QUFDakM7QUFFQSxTQUFTLGlCQUFpQixDQUFDO0lBQzFCLE1BQU0sU0FBUyxhQUFhLEVBQUUsTUFBTSxDQUFDLEtBQUs7SUFDMUMsdUJBQXVCLGFBQWEsc0JBQXNCO0lBRTFELElBQUksd0JBQXdCLFFBQVEsT0FBTyxRQUFRLEdBQUcsQ0FBQztRQUFFO1FBQVE7SUFBcUI7SUFFdEYsSUFBSSxDQUFDLG1CQUFtQixRQUFRLGVBQWUsR0FBRyxFQUFFLGVBQWUsR0FBRyxHQUFHO1FBQ3hFLGNBQWMsY0FBYztRQUM1QixjQUFjO1lBQUUsWUFBWTtRQUFxQjtRQUNqRCxhQUFhO1lBQUUsWUFBWTtRQUFxQjtRQUNoRDtJQUNEO0lBRUEsY0FBYztRQUFFLFlBQVk7SUFBTztJQUNuQyxhQUFhO1FBQUUsWUFBWTtJQUFPO0FBQ25DO0FBRUEsU0FBUyxvQkFBb0IsQ0FBQztJQUM3QixNQUFNLFNBQVMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxLQUFLO0lBQzFDLDBCQUEwQixhQUFhLHlCQUF5QjtJQUVoRSxJQUFJLDJCQUEyQixRQUFRLE9BQU8sUUFBUSxHQUFHLENBQUM7UUFBRTtRQUFRO0lBQXdCO0lBRTVGLElBQUksQ0FBQyxtQkFBbUIsUUFBUSxrQkFBa0IsR0FBRyxFQUFFLGtCQUFrQixHQUFHLEdBQUc7UUFDOUUsY0FBYyxpQkFBaUI7UUFDL0IsY0FBYztZQUFFLGVBQWU7UUFBd0I7UUFDdkQsYUFBYTtZQUFFLGVBQWU7UUFBd0I7UUFDdEQ7SUFDRDtJQUVBLGNBQWM7UUFBRSxlQUFlO0lBQU87SUFDdEMsYUFBYTtRQUFFLGVBQWU7SUFBTztBQUN0QztBQUVBLGVBQWUsaUJBQWlCLENBQUM7SUFDaEMsTUFBTSxlQUFlLEVBQUUsTUFBTSxDQUFDLEtBQUs7SUFFbkMsUUFBUSxHQUFHLENBQUMsc0JBQXNCO0lBRWxDLG1DQUFtQztJQUNuQztJQUVBLElBQUksaUJBQWlCLFNBQVMsVUFBVSxFQUFFO1FBQ3pDLHNDQUFzQztRQUN0QyxlQUFlO1FBQ2YsY0FBYztZQUFFLFlBQVk7UUFBYTtRQUN6QyxJQUFJO1lBQ0gsTUFBTSxhQUFhO2dCQUFFLFlBQVk7WUFBYTtRQUMvQyxFQUFFLE9BQU8sT0FBTztZQUNmLFFBQVEsS0FBSyxDQUFDLCtCQUErQjtRQUM5QztJQUNELE9BQU87UUFDTiw4QkFBOEI7UUFDOUIsY0FBYztRQUNkLElBQUk7WUFDSCxNQUFNLGFBQWE7UUFDcEIsRUFBRSxPQUFPLE9BQU87WUFDZixRQUFRLEtBQUssQ0FBQyxnQ0FBZ0M7UUFDL0M7SUFDRDtBQUNEO0FBQ0EsU0FBUztJQUNSLGNBQWM7SUFDZCxhQUFhO0FBQ2Q7QUFFTyxTQUFTO0lBQ2YsTUFBTSxtQkFBbUIsU0FBUyxhQUFhLENBQUM7SUFDaEQsTUFBTSxnQkFBZ0IsU0FBUyxhQUFhLENBQUM7SUFDN0MsTUFBTSxrQkFBa0IsU0FBUyxhQUFhLENBQUM7SUFDL0MsTUFBTSxxQkFBcUIsU0FBUyxhQUFhLENBQUM7SUFDbEQsTUFBTSxlQUFlLFNBQVMsYUFBYSxDQUFDO0lBRTVDLGlCQUFpQixnQkFBZ0IsQ0FBQyxVQUFVO0lBQzVDLGNBQWMsZ0JBQWdCLENBQUMsUUFBUTtJQUN2QyxnQkFBZ0IsZ0JBQWdCLENBQUMsUUFBUTtJQUN6QyxtQkFBbUIsZ0JBQWdCLENBQUMsUUFBUTtJQUU1QyxjQUFjLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztRQUN4QyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsS0FBSztJQUNwQztJQUNBLGdCQUFnQixnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7UUFDMUMsdUJBQXVCLEVBQUUsTUFBTSxDQUFDLEtBQUs7SUFDdEM7SUFDQSxtQkFBbUIsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBQzdDLDBCQUEwQixFQUFFLE1BQU0sQ0FBQyxLQUFLO0lBQ3pDO0lBRUEsY0FBYyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7UUFDM0MsSUFBSSxFQUFFLEdBQUcsS0FBSyxTQUFTO1lBQ3RCLEVBQUUsY0FBYztZQUNoQixlQUFlO1lBQ2YsRUFBRSxNQUFNLENBQUMsSUFBSTtRQUNkO0lBQ0Q7SUFDQSxnQkFBZ0IsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1FBQzdDLElBQUksRUFBRSxHQUFHLEtBQUssU0FBUztZQUN0QixFQUFFLGNBQWM7WUFDaEIsaUJBQWlCO1lBQ2pCLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFDZDtJQUNEO0lBQ0EsbUJBQW1CLGdCQUFnQixDQUFDLFlBQVksQ0FBQztRQUNoRCxJQUFJLEVBQUUsR0FBRyxLQUFLLFNBQVM7WUFDdEIsRUFBRSxjQUFjO1lBQ2hCLG9CQUFvQjtZQUNwQixFQUFFLE1BQU0sQ0FBQyxJQUFJO1FBQ2Q7SUFDRDtJQUVBLGFBQWEsZ0JBQWdCLENBQUMsU0FBUztBQUN4QztBQUVBLFNBQVM7SUFDUiw2QkFBNkI7SUFDN0I7QUFDRDtBQUNBOzs7OztBQ3JXQSx5REFBZ0I7QUF3QmhCLHVEQUFnQjtBQXdCaEIsdUNBQXVDO0FBQ3ZDLFlBQVk7QUFDWix5RkFBeUY7QUFDekYsZ0NBQWdDO0FBQ2hDLHNHQUFzRztBQUN0RyxpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLFFBQVE7QUFDUixJQUFJO0FBRUosa0RBQWdCO0FBMURULFNBQVMsb0JBQW9CLEVBQ25DLElBQUksRUFDSixTQUFTLEVBQ1QsT0FBTyxFQUNQLFNBQVMsRUFDVCxVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2hCLE1BQU0sRUFBRSxFQUNSLE1BQU0sRUFBRSxFQUNSLE9BQU8sSUFBSSxFQUNYO0lBQ0EsT0FBTyxDQUFDO29CQUNXLEVBQUUsVUFBVSxrQ0FBa0MsRUFBRSxJQUFJLEVBQUUsS0FBSyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUs7d0JBQzVFLEVBQUUsUUFBUTs2QkFDTCxFQUFFLFVBQVUsTUFBTSxFQUFFLFFBQVEsU0FBUyxFQUFFLFdBQVcsZUFBZSxFQUFFLGlCQUFpQixxRUFBcUUsRUFBRSxJQUFJLGFBQWEsRUFBRSxJQUFJOzs7O2tFQUk3SSxFQUFFLEtBQUs7OztjQUczRCxDQUFDO0FBQ2Y7QUFFTyxTQUFTLGtCQUFrQixFQUNqQyxJQUFJLEVBQ0osU0FBUyxFQUNULE9BQU8sRUFDUCxTQUFTLEVBQ1QsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixNQUFNLENBQUMsRUFDUCxNQUFNLEVBQUUsRUFDUixPQUFPLElBQUksRUFDWDtJQUNBLE9BQU8sQ0FBQztvQkFDVyxFQUFFLFVBQVUsb0RBQW9ELEVBQUUsSUFBSSxFQUFFLEtBQUssUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLO3dCQUM5RixFQUFFLFFBQVE7OztrRUFHZ0MsRUFBRSxLQUFLOzs7NkJBRzVDLEVBQUUsVUFBVSxNQUFNLEVBQUUsUUFBUSxTQUFTLEVBQUUsV0FBVyxlQUFlLEVBQUUsaUJBQWlCLDZGQUE2RixFQUFFLElBQUksYUFBYSxFQUFFLElBQUk7O2NBRXpOLENBQUM7QUFDZjtBQVlPLFNBQVMsYUFBYSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEtBQUssRUFBRTtJQUM5RSxPQUFPLENBQUM7b0JBQ1csRUFBRSxHQUFHLHdDQUF3QyxFQUFFLFVBQVUsRUFBRSxFQUFFLFdBQVcsYUFBYSxHQUFHO1lBQ2hHLEVBQUUsUUFBUTs7Q0FFckIsQ0FBQztBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWJyb3dzZXItaG1yL2xpYi9ydW50aW1lLWVmOTFhZjE4YjkyYzA3NDQuanMiLCJzcmMvanMvY29udGVudC5qcyIsInNyYy9qcy9hcHAvZmxvYXRpbmdCdG4uanMiLCJub2RlX21vZHVsZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2Rpc3QvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsInNyYy9qcy9hcHAvaWNvbnMuanMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInNyYy9qcy91dGlscy9oZXhUb0hTTC5qcyIsInNyYy9qcy9hcHAvbWFpbkZvbnRzLmpzIiwic3JjL2pzL2FwcC9jb21wb25lbnRzL3JlbmRlckZvbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBITVJfSE9TVCA9IFwibG9jYWxob3N0XCI7dmFyIEhNUl9QT1JUID0gMTIzNDt2YXIgSE1SX1NFQ1VSRSA9IGZhbHNlO3ZhciBITVJfRU5WX0hBU0ggPSBcImRkZjZlMDcyNGJkMzU4YmRcIjt2YXIgSE1SX1VTRV9TU0UgPSBmYWxzZTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQgPSBcIjU5Yzk4ODdkMTI3MzA2NDdcIjtcInVzZSBzdHJpY3RcIjtcblxuLyogZ2xvYmFsIEhNUl9IT1NULCBITVJfUE9SVCwgSE1SX0VOVl9IQVNILCBITVJfU0VDVVJFLCBITVJfVVNFX1NTRSwgY2hyb21lLCBicm93c2VyLCBfX3BhcmNlbF9faW1wb3J0X18sIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX18sIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSAqL1xuLyo6OlxuaW1wb3J0IHR5cGUge1xuICBITVJBc3NldCxcbiAgSE1STWVzc2FnZSxcbn0gZnJvbSAnQHBhcmNlbC9yZXBvcnRlci1kZXYtc2VydmVyL3NyYy9ITVJTZXJ2ZXIuanMnO1xuaW50ZXJmYWNlIFBhcmNlbFJlcXVpcmUge1xuICAoc3RyaW5nKTogbWl4ZWQ7XG4gIGNhY2hlOiB7fFtzdHJpbmddOiBQYXJjZWxNb2R1bGV8fTtcbiAgaG90RGF0YToge3xbc3RyaW5nXTogbWl4ZWR8fTtcbiAgTW9kdWxlOiBhbnk7XG4gIHBhcmVudDogP1BhcmNlbFJlcXVpcmU7XG4gIGlzUGFyY2VsUmVxdWlyZTogdHJ1ZTtcbiAgbW9kdWxlczoge3xbc3RyaW5nXTogW0Z1bmN0aW9uLCB7fFtzdHJpbmddOiBzdHJpbmd8fV18fTtcbiAgSE1SX0JVTkRMRV9JRDogc3RyaW5nO1xuICByb290OiBQYXJjZWxSZXF1aXJlO1xufVxuaW50ZXJmYWNlIFBhcmNlbE1vZHVsZSB7XG4gIGhvdDoge3xcbiAgICBkYXRhOiBtaXhlZCxcbiAgICBhY2NlcHQoY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgZGlzcG9zZShjYjogKG1peGVkKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBhY2NlcHQoZGVwczogQXJyYXk8c3RyaW5nPiB8IHN0cmluZywgY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gZGVjbGluZSgpOiB2b2lkLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IEFycmF5PChGdW5jdGlvbikgPT4gdm9pZD4sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IEFycmF5PChtaXhlZCkgPT4gdm9pZD4sXG4gIHx9O1xufVxuaW50ZXJmYWNlIEV4dGVuc2lvbkNvbnRleHQge1xuICBydW50aW1lOiB7fFxuICAgIHJlbG9hZCgpOiB2b2lkLFxuICAgIGdldFVSTCh1cmw6IHN0cmluZyk6IHN0cmluZztcbiAgICBnZXRNYW5pZmVzdCgpOiB7bWFuaWZlc3RfdmVyc2lvbjogbnVtYmVyLCAuLi59O1xuICB8fTtcbn1cbmRlY2xhcmUgdmFyIG1vZHVsZToge2J1bmRsZTogUGFyY2VsUmVxdWlyZSwgLi4ufTtcbmRlY2xhcmUgdmFyIEhNUl9IT1NUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfUE9SVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX0VOVl9IQVNIOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfU0VDVVJFOiBib29sZWFuO1xuZGVjbGFyZSB2YXIgSE1SX1VTRV9TU0U6IGJvb2xlYW47XG5kZWNsYXJlIHZhciBjaHJvbWU6IEV4dGVuc2lvbkNvbnRleHQ7XG5kZWNsYXJlIHZhciBicm93c2VyOiBFeHRlbnNpb25Db250ZXh0O1xuZGVjbGFyZSB2YXIgX19wYXJjZWxfX2ltcG9ydF9fOiAoc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuZGVjbGFyZSB2YXIgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXzogKHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbmRlY2xhcmUgdmFyIGdsb2JhbFRoaXM6IHR5cGVvZiBzZWxmO1xuZGVjbGFyZSB2YXIgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlOiBPYmplY3Q7XG4qL1xudmFyIE9WRVJMQVlfSUQgPSAnX19wYXJjZWxfX2Vycm9yX19vdmVybGF5X18nO1xudmFyIE9sZE1vZHVsZSA9IG1vZHVsZS5idW5kbGUuTW9kdWxlO1xuZnVuY3Rpb24gTW9kdWxlKG1vZHVsZU5hbWUpIHtcbiAgT2xkTW9kdWxlLmNhbGwodGhpcywgbW9kdWxlTmFtZSk7XG4gIHRoaXMuaG90ID0ge1xuICAgIGRhdGE6IG1vZHVsZS5idW5kbGUuaG90RGF0YVttb2R1bGVOYW1lXSxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBbXSxcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogW10sXG4gICAgYWNjZXB0OiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHRoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKGZuIHx8IGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9LFxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uIChmbikge1xuICAgICAgdGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKGZuKTtcbiAgICB9XG4gIH07XG4gIG1vZHVsZS5idW5kbGUuaG90RGF0YVttb2R1bGVOYW1lXSA9IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5idW5kbGUuTW9kdWxlID0gTW9kdWxlO1xubW9kdWxlLmJ1bmRsZS5ob3REYXRhID0ge307XG52YXIgY2hlY2tlZEFzc2V0cyAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovLCBhc3NldHNUb0Rpc3Bvc2UgLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqLywgYXNzZXRzVG9BY2NlcHQgLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqLztcblxuZnVuY3Rpb24gZ2V0SG9zdG5hbWUoKSB7XG4gIHJldHVybiBITVJfSE9TVCB8fCAobG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZignaHR0cCcpID09PSAwID8gbG9jYXRpb24uaG9zdG5hbWUgOiAnbG9jYWxob3N0Jyk7XG59XG5mdW5jdGlvbiBnZXRQb3J0KCkge1xuICByZXR1cm4gSE1SX1BPUlQgfHwgbG9jYXRpb24ucG9ydDtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxudmFyIHBhcmVudCA9IG1vZHVsZS5idW5kbGUucGFyZW50O1xuaWYgKCghcGFyZW50IHx8ICFwYXJlbnQuaXNQYXJjZWxSZXF1aXJlKSAmJiB0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICB2YXIgcG9ydCA9IGdldFBvcnQoKTtcbiAgdmFyIHByb3RvY29sID0gSE1SX1NFQ1VSRSB8fCBsb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cHM6JyAmJiAhWydsb2NhbGhvc3QnLCAnMTI3LjAuMC4xJywgJzAuMC4wLjAnXS5pbmNsdWRlcyhob3N0bmFtZSkgPyAnd3NzJyA6ICd3cyc7XG4gIHZhciB3cztcbiAgaWYgKEhNUl9VU0VfU1NFKSB7XG4gICAgd3MgPSBuZXcgRXZlbnRTb3VyY2UoJy9fX3BhcmNlbF9obXInKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgd3MgPSBuZXcgV2ViU29ja2V0KHByb3RvY29sICsgJzovLycgKyBob3N0bmFtZSArIChwb3J0ID8gJzonICsgcG9ydCA6ICcnKSArICcvJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB3cyA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIC8vIFdlYiBleHRlbnNpb24gY29udGV4dFxuICB2YXIgZXh0Q3R4ID0gdHlwZW9mIGJyb3dzZXIgPT09ICd1bmRlZmluZWQnID8gdHlwZW9mIGNocm9tZSA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogY2hyb21lIDogYnJvd3NlcjtcblxuICAvLyBTYWZhcmkgZG9lc24ndCBzdXBwb3J0IHNvdXJjZVVSTCBpbiBlcnJvciBzdGFja3MuXG4gIC8vIGV2YWwgbWF5IGFsc28gYmUgZGlzYWJsZWQgdmlhIENTUCwgc28gZG8gYSBxdWljayBjaGVjay5cbiAgdmFyIHN1cHBvcnRzU291cmNlVVJMID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgKDAsIGV2YWwpKCd0aHJvdyBuZXcgRXJyb3IoXCJ0ZXN0XCIpOyAvLyMgc291cmNlVVJMPXRlc3QuanMnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgc3VwcG9ydHNTb3VyY2VVUkwgPSBlcnIuc3RhY2suaW5jbHVkZXMoJ3Rlc3QuanMnKTtcbiAgfVxuXG4gIC8vICRGbG93Rml4TWVcbiAgd3Mub25tZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50IC8qOiB7ZGF0YTogc3RyaW5nLCAuLi59ICovKSB7XG4gICAgY2hlY2tlZEFzc2V0cyA9IHt9IC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi87XG4gICAgYXNzZXRzVG9BY2NlcHQgPSBbXTtcbiAgICBhc3NldHNUb0Rpc3Bvc2UgPSBbXTtcbiAgICB2YXIgZGF0YSAvKjogSE1STWVzc2FnZSAqLyA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgIC8vIFJlbW92ZSBlcnJvciBvdmVybGF5IGlmIHRoZXJlIGlzIG9uZVxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgICB9XG4gICAgICBsZXQgYXNzZXRzID0gZGF0YS5hc3NldHMuZmlsdGVyKGFzc2V0ID0+IGFzc2V0LmVudkhhc2ggPT09IEhNUl9FTlZfSEFTSCk7XG5cbiAgICAgIC8vIEhhbmRsZSBITVIgVXBkYXRlXG4gICAgICBsZXQgaGFuZGxlZCA9IGFzc2V0cy5ldmVyeShhc3NldCA9PiB7XG4gICAgICAgIHJldHVybiBhc3NldC50eXBlID09PSAnY3NzJyB8fCBhc3NldC50eXBlID09PSAnanMnICYmIGhtckFjY2VwdENoZWNrKG1vZHVsZS5idW5kbGUucm9vdCwgYXNzZXQuaWQsIGFzc2V0LmRlcHNCeUJ1bmRsZSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcblxuICAgICAgICAvLyBEaXNwYXRjaCBjdXN0b20gZXZlbnQgc28gb3RoZXIgcnVudGltZXMgKGUuZyBSZWFjdCBSZWZyZXNoKSBhcmUgYXdhcmUuXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQ3VzdG9tRXZlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdwYXJjZWxobXJhY2NlcHQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgaG1yQXBwbHlVcGRhdGVzKGFzc2V0cyk7XG5cbiAgICAgICAgLy8gRGlzcG9zZSBhbGwgb2xkIGFzc2V0cy5cbiAgICAgICAgbGV0IHByb2Nlc3NlZEFzc2V0cyA9IHt9IC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi87XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzVG9EaXNwb3NlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGlkID0gYXNzZXRzVG9EaXNwb3NlW2ldWzFdO1xuICAgICAgICAgIGlmICghcHJvY2Vzc2VkQXNzZXRzW2lkXSkge1xuICAgICAgICAgICAgaG1yRGlzcG9zZShhc3NldHNUb0Rpc3Bvc2VbaV1bMF0sIGlkKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJ1biBhY2NlcHQgY2FsbGJhY2tzLiBUaGlzIHdpbGwgYWxzbyByZS1leGVjdXRlIG90aGVyIGRpc3Bvc2VkIGFzc2V0cyBpbiB0b3BvbG9naWNhbCBvcmRlci5cbiAgICAgICAgcHJvY2Vzc2VkQXNzZXRzID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzVG9BY2NlcHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgaWQgPSBhc3NldHNUb0FjY2VwdFtpXVsxXTtcbiAgICAgICAgICBpZiAoIXByb2Nlc3NlZEFzc2V0c1tpZF0pIHtcbiAgICAgICAgICAgIGhtckFjY2VwdChhc3NldHNUb0FjY2VwdFtpXVswXSwgaWQpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkQXNzZXRzW2lkXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgZnVsbFJlbG9hZCgpO1xuICAgIH1cbiAgICBpZiAoZGF0YS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAvLyBMb2cgcGFyY2VsIGVycm9ycyB0byBjb25zb2xlXG4gICAgICBmb3IgKGxldCBhbnNpRGlhZ25vc3RpYyBvZiBkYXRhLmRpYWdub3N0aWNzLmFuc2kpIHtcbiAgICAgICAgbGV0IHN0YWNrID0gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lID8gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lIDogYW5zaURpYWdub3N0aWMuc3RhY2s7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ/CfmqggW3BhcmNlbF06ICcgKyBhbnNpRGlhZ25vc3RpYy5tZXNzYWdlICsgJ1xcbicgKyBzdGFjayArICdcXG5cXG4nICsgYW5zaURpYWdub3N0aWMuaGludHMuam9pbignXFxuJykpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gUmVuZGVyIHRoZSBmYW5jeSBodG1sIG92ZXJsYXlcbiAgICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgICAgIHZhciBvdmVybGF5ID0gY3JlYXRlRXJyb3JPdmVybGF5KGRhdGEuZGlhZ25vc3RpY3MuaHRtbCk7XG4gICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGlmICh3cyBpbnN0YW5jZW9mIFdlYlNvY2tldCkge1xuICAgIHdzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUubWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3cy5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS53YXJuKCdbcGFyY2VsXSDwn5qoIENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgd2FzIGxvc3QnKTtcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiByZW1vdmVFcnJvck92ZXJsYXkoKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoT1ZFUkxBWV9JRCk7XG4gIGlmIChvdmVybGF5KSB7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZygnW3BhcmNlbF0g4pyoIEVycm9yIHJlc29sdmVkJyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yT3ZlcmxheShkaWFnbm9zdGljcykge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5LmlkID0gT1ZFUkxBWV9JRDtcbiAgbGV0IGVycm9ySFRNTCA9ICc8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogYmxhY2s7IG9wYWNpdHk6IDAuODU7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHdoaXRlOyBwb3NpdGlvbjogZml4ZWQ7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IHRvcDogMHB4OyBsZWZ0OiAwcHg7IHBhZGRpbmc6IDMwcHg7IGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTsgei1pbmRleDogOTk5OTtcIj4nO1xuICBmb3IgKGxldCBkaWFnbm9zdGljIG9mIGRpYWdub3N0aWNzKSB7XG4gICAgbGV0IHN0YWNrID0gZGlhZ25vc3RpYy5mcmFtZXMubGVuZ3RoID8gZGlhZ25vc3RpYy5mcmFtZXMucmVkdWNlKChwLCBmcmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIGAke3B9XG48YSBocmVmPVwiL19fcGFyY2VsX2xhdW5jaF9lZGl0b3I/ZmlsZT0ke2VuY29kZVVSSUNvbXBvbmVudChmcmFtZS5sb2NhdGlvbil9XCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgY29sb3I6ICM4ODhcIiBvbmNsaWNrPVwiZmV0Y2godGhpcy5ocmVmKTsgcmV0dXJuIGZhbHNlXCI+JHtmcmFtZS5sb2NhdGlvbn08L2E+XG4ke2ZyYW1lLmNvZGV9YDtcbiAgICB9LCAnJykgOiBkaWFnbm9zdGljLnN0YWNrO1xuICAgIGVycm9ySFRNTCArPSBgXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luLXRvcDogMjBweDtcIj5cbiAgICAgICAgICDwn5qoICR7ZGlhZ25vc3RpYy5tZXNzYWdlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHByZT4ke3N0YWNrfTwvcHJlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICR7ZGlhZ25vc3RpYy5oaW50cy5tYXAoaGludCA9PiAnPGRpdj7wn5KhICcgKyBoaW50ICsgJzwvZGl2PicpLmpvaW4oJycpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJHtkaWFnbm9zdGljLmRvY3VtZW50YXRpb24gPyBgPGRpdj7wn5OdIDxhIHN0eWxlPVwiY29sb3I6IHZpb2xldFwiIGhyZWY9XCIke2RpYWdub3N0aWMuZG9jdW1lbnRhdGlvbn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5MZWFybiBtb3JlPC9hPjwvZGl2PmAgOiAnJ31cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbiAgZXJyb3JIVE1MICs9ICc8L2Rpdj4nO1xuICBvdmVybGF5LmlubmVySFRNTCA9IGVycm9ySFRNTDtcbiAgcmV0dXJuIG92ZXJsYXk7XG59XG5mdW5jdGlvbiBmdWxsUmVsb2FkKCkge1xuICBpZiAoJ3JlbG9hZCcgaW4gbG9jYXRpb24pIHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSBlbHNlIGlmIChleHRDdHggJiYgZXh0Q3R4LnJ1bnRpbWUgJiYgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKSB7XG4gICAgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFBhcmVudHMoYnVuZGxlLCBpZCkgLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqL3tcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBwYXJlbnRzID0gW107XG4gIHZhciBrLCBkLCBkZXA7XG4gIGZvciAoayBpbiBtb2R1bGVzKSB7XG4gICAgZm9yIChkIGluIG1vZHVsZXNba11bMV0pIHtcbiAgICAgIGRlcCA9IG1vZHVsZXNba11bMV1bZF07XG4gICAgICBpZiAoZGVwID09PSBpZCB8fCBBcnJheS5pc0FycmF5KGRlcCkgJiYgZGVwW2RlcC5sZW5ndGggLSAxXSA9PT0gaWQpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKFtidW5kbGUsIGtdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBwYXJlbnRzID0gcGFyZW50cy5jb25jYXQoZ2V0UGFyZW50cyhidW5kbGUucGFyZW50LCBpZCkpO1xuICB9XG4gIHJldHVybiBwYXJlbnRzO1xufVxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rKSB7XG4gIHZhciBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgaWYgKCFocmVmKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuZXdMaW5rID0gbGluay5jbG9uZU5vZGUoKTtcbiAgbmV3TGluay5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxpbmsucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgIH1cbiAgfTtcbiAgbmV3TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLFxuICAvLyAkRmxvd0ZpeE1lXG4gIGhyZWYuc3BsaXQoJz8nKVswXSArICc/JyArIERhdGUubm93KCkpO1xuICAvLyAkRmxvd0ZpeE1lXG4gIGxpbmsucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3TGluaywgbGluay5uZXh0U2libGluZyk7XG59XG52YXIgY3NzVGltZW91dCA9IG51bGw7XG5mdW5jdGlvbiByZWxvYWRDU1MoKSB7XG4gIGlmIChjc3NUaW1lb3V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXVxuICAgICAgdmFyIGhyZWYgLyo6IHN0cmluZyAqLyA9IGxpbmtzW2ldLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbiAgICAgIHZhciBzZXJ2ZWRGcm9tSE1SU2VydmVyID0gaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnID8gbmV3IFJlZ0V4cCgnXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTonICsgZ2V0UG9ydCgpKS50ZXN0KGhyZWYpIDogaHJlZi5pbmRleE9mKGhvc3RuYW1lICsgJzonICsgZ2V0UG9ydCgpKTtcbiAgICAgIHZhciBhYnNvbHV0ZSA9IC9eaHR0cHM/OlxcL1xcLy9pLnRlc3QoaHJlZikgJiYgaHJlZi5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikgIT09IDAgJiYgIXNlcnZlZEZyb21ITVJTZXJ2ZXI7XG4gICAgICBpZiAoIWFic29sdXRlKSB7XG4gICAgICAgIHVwZGF0ZUxpbmsobGlua3NbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjc3NUaW1lb3V0ID0gbnVsbDtcbiAgfSwgNTApO1xufVxuZnVuY3Rpb24gaG1yRG93bmxvYWQoYXNzZXQpIHtcbiAgaWYgKGFzc2V0LnR5cGUgPT09ICdqcycpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LnNyYyA9IGFzc2V0LnVybCArICc/dD0nICsgRGF0ZS5ub3coKTtcbiAgICAgIGlmIChhc3NldC5vdXRwdXRGb3JtYXQgPT09ICdlc21vZHVsZScpIHtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnbW9kdWxlJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHZhciBfZG9jdW1lbnQkaGVhZDtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHJlc29sdmUoc2NyaXB0KTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIChfZG9jdW1lbnQkaGVhZCA9IGRvY3VtZW50LmhlYWQpID09PSBudWxsIHx8IF9kb2N1bWVudCRoZWFkID09PSB2b2lkIDAgfHwgX2RvY3VtZW50JGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFdvcmtlciBzY3JpcHRzXG4gICAgICBpZiAoYXNzZXQub3V0cHV0Rm9ybWF0ID09PSAnZXNtb2R1bGUnKSB7XG4gICAgICAgIHJldHVybiBfX3BhcmNlbF9faW1wb3J0X18oYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX18oYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5hc3luYyBmdW5jdGlvbiBobXJBcHBseVVwZGF0ZXMoYXNzZXRzKSB7XG4gIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBsZXQgc2NyaXB0c1RvUmVtb3ZlO1xuICB0cnkge1xuICAgIC8vIElmIHNvdXJjZVVSTCBjb21tZW50cyBhcmVuJ3Qgc3VwcG9ydGVkIGluIGV2YWwsIHdlIG5lZWQgdG8gbG9hZFxuICAgIC8vIHRoZSB1cGRhdGUgZnJvbSB0aGUgZGV2IHNlcnZlciBvdmVyIEhUVFAgc28gdGhhdCBzdGFjayB0cmFjZXNcbiAgICAvLyBhcmUgY29ycmVjdCBpbiBlcnJvcnMvbG9ncy4gVGhpcyBpcyBtdWNoIHNsb3dlciB0aGFuIGV2YWwsIHNvXG4gICAgLy8gd2Ugb25seSBkbyBpdCBpZiBuZWVkZWQgKGN1cnJlbnRseSBqdXN0IFNhZmFyaSkuXG4gICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNzI5N1xuICAgIC8vIFRoaXMgcGF0aCBpcyBhbHNvIHRha2VuIGlmIGEgQ1NQIGRpc2FsbG93cyBldmFsLlxuICAgIGlmICghc3VwcG9ydHNTb3VyY2VVUkwpIHtcbiAgICAgIGxldCBwcm9taXNlcyA9IGFzc2V0cy5tYXAoYXNzZXQgPT4ge1xuICAgICAgICB2YXIgX2htckRvd25sb2FkO1xuICAgICAgICByZXR1cm4gKF9obXJEb3dubG9hZCA9IGhtckRvd25sb2FkKGFzc2V0KSkgPT09IG51bGwgfHwgX2htckRvd25sb2FkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaG1yRG93bmxvYWQuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAvLyBXZWIgZXh0ZW5zaW9uIGZpeFxuICAgICAgICAgIGlmIChleHRDdHggJiYgZXh0Q3R4LnJ1bnRpbWUgJiYgZXh0Q3R4LnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5tYW5pZmVzdF92ZXJzaW9uID09IDMgJiYgdHlwZW9mIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSAhPSAndW5kZWZpbmVkJyAmJiBnbG9iYWwgaW5zdGFuY2VvZiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUpIHtcbiAgICAgICAgICAgIGV4dEN0eC5ydW50aW1lLnJlbG9hZCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBzY3JpcHRzVG9SZW1vdmUgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfVxuICAgIGFzc2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChhc3NldCkge1xuICAgICAgaG1yQXBwbHkobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldCk7XG4gICAgfSk7XG4gIH0gZmluYWxseSB7XG4gICAgZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGU7XG4gICAgaWYgKHNjcmlwdHNUb1JlbW92ZSkge1xuICAgICAgc2NyaXB0c1RvUmVtb3ZlLmZvckVhY2goc2NyaXB0ID0+IHtcbiAgICAgICAgaWYgKHNjcmlwdCkge1xuICAgICAgICAgIHZhciBfZG9jdW1lbnQkaGVhZDI7XG4gICAgICAgICAgKF9kb2N1bWVudCRoZWFkMiA9IGRvY3VtZW50LmhlYWQpID09PSBudWxsIHx8IF9kb2N1bWVudCRoZWFkMiA9PT0gdm9pZCAwIHx8IF9kb2N1bWVudCRoZWFkMi5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGhtckFwcGx5KGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgYXNzZXQgLyo6ICBITVJBc3NldCAqLykge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGFzc2V0LnR5cGUgPT09ICdjc3MnKSB7XG4gICAgcmVsb2FkQ1NTKCk7XG4gIH0gZWxzZSBpZiAoYXNzZXQudHlwZSA9PT0gJ2pzJykge1xuICAgIGxldCBkZXBzID0gYXNzZXQuZGVwc0J5QnVuZGxlW2J1bmRsZS5ITVJfQlVORExFX0lEXTtcbiAgICBpZiAoZGVwcykge1xuICAgICAgaWYgKG1vZHVsZXNbYXNzZXQuaWRdKSB7XG4gICAgICAgIC8vIFJlbW92ZSBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgcmVtb3ZlZCBhbmQgd2lsbCBiZWNvbWUgb3JwaGFuZWQuXG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHNvIHRoYXQgaWYgdGhlIGFzc2V0IGlzIGFkZGVkIGJhY2sgYWdhaW4sIHRoZSBjYWNoZSBpcyBnb25lLCBhbmQgd2UgcHJldmVudCBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gICAgICAgIGxldCBvbGREZXBzID0gbW9kdWxlc1thc3NldC5pZF1bMV07XG4gICAgICAgIGZvciAobGV0IGRlcCBpbiBvbGREZXBzKSB7XG4gICAgICAgICAgaWYgKCFkZXBzW2RlcF0gfHwgZGVwc1tkZXBdICE9PSBvbGREZXBzW2RlcF0pIHtcbiAgICAgICAgICAgIGxldCBpZCA9IG9sZERlcHNbZGVwXTtcbiAgICAgICAgICAgIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICBobXJEZWxldGUobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHNTb3VyY2VVUkwpIHtcbiAgICAgICAgLy8gR2xvYmFsIGV2YWwuIFdlIHdvdWxkIHVzZSBgbmV3IEZ1bmN0aW9uYCBoZXJlIGJ1dCBicm93c2VyXG4gICAgICAgIC8vIHN1cHBvcnQgZm9yIHNvdXJjZSBtYXBzIGlzIGJldHRlciB3aXRoIGV2YWwuXG4gICAgICAgICgwLCBldmFsKShhc3NldC5vdXRwdXQpO1xuICAgICAgfVxuXG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBsZXQgZm4gPSBnbG9iYWwucGFyY2VsSG90VXBkYXRlW2Fzc2V0LmlkXTtcbiAgICAgIG1vZHVsZXNbYXNzZXQuaWRdID0gW2ZuLCBkZXBzXTtcbiAgICB9IGVsc2UgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIGhtckFwcGx5KGJ1bmRsZS5wYXJlbnQsIGFzc2V0KTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGhtckRlbGV0ZShidW5kbGUsIGlkKSB7XG4gIGxldCBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobW9kdWxlc1tpZF0pIHtcbiAgICAvLyBDb2xsZWN0IGRlcGVuZGVuY2llcyB0aGF0IHdpbGwgYmVjb21lIG9ycGhhbmVkIHdoZW4gdGhpcyBtb2R1bGUgaXMgZGVsZXRlZC5cbiAgICBsZXQgZGVwcyA9IG1vZHVsZXNbaWRdWzFdO1xuICAgIGxldCBvcnBoYW5zID0gW107XG4gICAgZm9yIChsZXQgZGVwIGluIGRlcHMpIHtcbiAgICAgIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGRlcHNbZGVwXSk7XG4gICAgICBpZiAocGFyZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgb3JwaGFucy5wdXNoKGRlcHNbZGVwXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIHRoZSBtb2R1bGUuIFRoaXMgbXVzdCBiZSBkb25lIGJlZm9yZSBkZWxldGluZyBkZXBlbmRlbmNpZXMgaW4gY2FzZSBvZiBjaXJjdWxhciBkZXBlbmRlbmNpZXMuXG4gICAgZGVsZXRlIG1vZHVsZXNbaWRdO1xuICAgIGRlbGV0ZSBidW5kbGUuY2FjaGVbaWRdO1xuXG4gICAgLy8gTm93IGRlbGV0ZSB0aGUgb3JwaGFucy5cbiAgICBvcnBoYW5zLmZvckVhY2goaWQgPT4ge1xuICAgICAgaG1yRGVsZXRlKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBobXJEZWxldGUoYnVuZGxlLnBhcmVudCwgaWQpO1xuICB9XG59XG5mdW5jdGlvbiBobXJBY2NlcHRDaGVjayhidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGlkIC8qOiBzdHJpbmcgKi8sIGRlcHNCeUJ1bmRsZSAvKjogP3sgW3N0cmluZ106IHsgW3N0cmluZ106IHN0cmluZyB9IH0qLykge1xuICBpZiAoaG1yQWNjZXB0Q2hlY2tPbmUoYnVuZGxlLCBpZCwgZGVwc0J5QnVuZGxlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gVHJhdmVyc2UgcGFyZW50cyBicmVhZHRoIGZpcnN0LiBBbGwgcG9zc2libGUgYW5jZXN0cmllcyBtdXN0IGFjY2VwdCB0aGUgSE1SIHVwZGF0ZSwgb3Igd2UnbGwgcmVsb2FkLlxuICBsZXQgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gIGxldCBhY2NlcHRlZCA9IGZhbHNlO1xuICB3aGlsZSAocGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IHYgPSBwYXJlbnRzLnNoaWZ0KCk7XG4gICAgbGV0IGEgPSBobXJBY2NlcHRDaGVja09uZSh2WzBdLCB2WzFdLCBudWxsKTtcbiAgICBpZiAoYSkge1xuICAgICAgLy8gSWYgdGhpcyBwYXJlbnQgYWNjZXB0cywgc3RvcCB0cmF2ZXJzaW5nIHVwd2FyZCwgYnV0IHN0aWxsIGNvbnNpZGVyIHNpYmxpbmdzLlxuICAgICAgYWNjZXB0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdGhlcndpc2UsIHF1ZXVlIHRoZSBwYXJlbnRzIGluIHRoZSBuZXh0IGxldmVsIHVwd2FyZC5cbiAgICAgIGxldCBwID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIHZbMV0pO1xuICAgICAgaWYgKHAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBwYXJlbnRzLCB0aGVuIHdlJ3ZlIHJlYWNoZWQgYW4gZW50cnkgd2l0aG91dCBhY2NlcHRpbmcuIFJlbG9hZC5cbiAgICAgICAgYWNjZXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwYXJlbnRzLnB1c2goLi4ucCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhY2NlcHRlZDtcbn1cbmZ1bmN0aW9uIGhtckFjY2VwdENoZWNrT25lKGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgaWQgLyo6IHN0cmluZyAqLywgZGVwc0J5QnVuZGxlIC8qOiA/eyBbc3RyaW5nXTogeyBbc3RyaW5nXTogc3RyaW5nIH0gfSovKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZGVwc0J5QnVuZGxlICYmICFkZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdKSB7XG4gICAgLy8gSWYgd2UgcmVhY2hlZCB0aGUgcm9vdCBidW5kbGUgd2l0aG91dCBmaW5kaW5nIHdoZXJlIHRoZSBhc3NldCBzaG91bGQgZ28sXG4gICAgLy8gdGhlcmUncyBub3RoaW5nIHRvIGRvLiBNYXJrIGFzIFwiYWNjZXB0ZWRcIiBzbyB3ZSBkb24ndCByZWxvYWQgdGhlIHBhZ2UuXG4gICAgaWYgKCFidW5kbGUucGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhtckFjY2VwdENoZWNrKGJ1bmRsZS5wYXJlbnQsIGlkLCBkZXBzQnlCdW5kbGUpO1xuICB9XG4gIGlmIChjaGVja2VkQXNzZXRzW2lkXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNoZWNrZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGFzc2V0c1RvRGlzcG9zZS5wdXNoKFtidW5kbGUsIGlkXSk7XG4gIGlmICghY2FjaGVkIHx8IGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGFzc2V0c1RvQWNjZXB0LnB1c2goW2J1bmRsZSwgaWRdKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuZnVuY3Rpb24gaG1yRGlzcG9zZShidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGlkIC8qOiBzdHJpbmcgKi8pIHtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZS5ob3REYXRhW2lkXSA9IHt9O1xuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QpIHtcbiAgICBjYWNoZWQuaG90LmRhdGEgPSBidW5kbGUuaG90RGF0YVtpZF07XG4gIH1cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgY2IoYnVuZGxlLmhvdERhdGFbaWRdKTtcbiAgICB9KTtcbiAgfVxuICBkZWxldGUgYnVuZGxlLmNhY2hlW2lkXTtcbn1cbmZ1bmN0aW9uIGhtckFjY2VwdChidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGlkIC8qOiBzdHJpbmcgKi8pIHtcbiAgLy8gRXhlY3V0ZSB0aGUgbW9kdWxlLlxuICBidW5kbGUoaWQpO1xuXG4gIC8vIFJ1biB0aGUgYWNjZXB0IGNhbGxiYWNrcyBpbiB0aGUgbmV3IHZlcnNpb24gb2YgdGhlIG1vZHVsZS5cbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICB2YXIgYXNzZXRzVG9BbHNvQWNjZXB0ID0gY2IoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGFzc2V0c1RvQWxzb0FjY2VwdCAmJiBhc3NldHNUb0FjY2VwdC5sZW5ndGgpIHtcbiAgICAgICAgYXNzZXRzVG9BbHNvQWNjZXB0LmZvckVhY2goZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICBobXJEaXNwb3NlKGFbMF0sIGFbMV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAkRmxvd0ZpeE1lW21ldGhvZC11bmJpbmRpbmddXG4gICAgICAgIGFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoYXNzZXRzVG9BY2NlcHQsIGFzc2V0c1RvQWxzb0FjY2VwdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgJy4vYXBwL2Zsb2F0aW5nQnRuJ1xyXG4vLyBpbXBvcnQgJy4vYXBwL2N1c3RvbUZvbnRzJ1xyXG5pbXBvcnQgJy4vYXBwL21haW5Gb250cydcclxuIiwiLy8gVXNlIGEgY3Jvc3MtYnJvd3NlciBzdG9yYWdlIEFQSTpcclxuaW1wb3J0IGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJ1xyXG5cclxuaW1wb3J0IHsgaWNvbl9zdW4sIGljb25fbW9vbiwgaWNvbl9tb29uX2Z1bGwsIGljb25fc2V0dGluZ3MsIGljb25fcGFpbnQgfSBmcm9tICcuL2ljb25zLmpzJ1xyXG5pbXBvcnQgeyBoZXhUb0hTTCB9IGZyb20gJy4uL3V0aWxzL2hleFRvSFNMJ1xyXG5cclxuLy8gaW1wb3J0IHsgZm9udEh0bWxDb2RlLCBhZGRGb250c0V2ZW50SGFuZGxlcnMgfSBmcm9tICcuL2N1c3RvbUZvbnRzJ1xyXG5pbXBvcnQgeyBmb250SHRtbENvZGUsIGhhbmRsZUZvbnRzTGlzdGVuZXJzIH0gZnJvbSAnLi9tYWluRm9udHMnXHJcbi8vIGNvbnNvbGUubG9nKGZvbnRIdG1sQ29kZSlcclxuXHJcbi8vIGxldCBpc09wdGlvbnNTaG93biA9IGZhbHNlXHJcblxyXG4vLyBHbG9iYWwgVmFyaWFibGVzXHJcbmxldCBpc09wdGlvbnNTaG93biA9IGZhbHNlXHJcbmxldCAkaHRtbFRhZ1xyXG5sZXQgJGZsb2F0aW5nQnRuXHJcbmxldCAkZmxvYXRpbmdPcHRpb25zXHJcbmxldCAkZmxvYXRpbmdCdG5zQ29udGFpbmVyXHJcblxyXG5sZXQgJHNldHRpbmdzIC8vIEAgQWNjZW50IFRoZW1lXHJcbmxldCAkcmVzZXRBbGxCdG5cclxuLy8gbGV0IGlzU2V0dGluZ3NPcGVuID0gZmFsc2VcclxubGV0IHN0eWxlRWxlbWVudCA9IG51bGwgLy8gRGVjbGFyZSB0aGUgc3R5bGVFbGVtZW50IHZhcmlhYmxlXHJcblxyXG5sZXQgZGVmYXVsdENvbG9yTGlnaHQgPSAnIzZiNGRmZSdcclxubGV0IGRlZmF1bHRDb2xvckRhcmsgPSAnI2NhOTNmYidcclxuLy8gbGV0IGlzRGlzYWJsZWRSZXNldEFsbCA9IHRydWVcclxuXHJcbmNvbnN0IHJlbmRlckNvbG9yc1RhYiA9IGBcclxuXHQ8c2VjdGlvbj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb2xvcnBpY2tlci1jb250YWluZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbG9ycGlja2VyXCI+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJjb2xvclwiIGlkPVwiYWNjZW50TGlnaHRcIiB2YWx1ZT1cIiM2YjRkZmVcIiAvPlxyXG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJhY2NlbnRMaWdodFwiPkFjY2VudCA8c3Bhbj5MaWdodDwvc3Bhbj48L2xhYmVsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbG9ycGlja2VyXCI+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJjb2xvclwiIGlkPVwiYWNjZW50RGFya1wiIHZhbHVlPVwiI2NhOTNmYlwiIC8+XHJcblx0XHRcdFx0PGxhYmVsIGZvcj1cImFjY2VudERhcmtcIj5BY2NlbnQgPHNwYW4+RGFyazwvc3Bhbj48L2xhYmVsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGZvb3RlciBjbGFzcz1cImdyaWQgbXQtMTBcIj5cclxuXHRcdFx0PGJ1dHRvbiBpZD1cInJlc2V0QWxsU2V0dGluZ3NcIiBjbGFzcz1cImJ0biBibG9jayByZWxhdGl2ZSBidG4tcHJpbWFyeSB0ZXh0LWNlbnRlclwiIGFzPVwiYnV0dG9uXCI+UmVzZXQgQWNjZW50czwvYnV0dG9uPlxyXG5cdFx0PC9mb290ZXI+XHJcblx0PC9zZWN0aW9uPlxyXG5gXHJcblxyXG4vLyBJbml0aWFsaXphdGlvblxyXG5pbml0KClcclxuXHJcbmZ1bmN0aW9uIHRhYnNTd2l0Y2hpbmcoKSB7XHJcblx0Y29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncHRoLXNldHRpbmdzIC50YWItYnV0dG9uJylcclxuXHRjb25zdCBwYW5lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncHRoLXNldHRpbmdzIC50YWItcGFuZScpXHJcblxyXG5cdHRhYnMuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4ge1xyXG5cdFx0dGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLWJ1dHRvbi5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLXBhbmU6bm90KC5oaWRkZW4pJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuXHJcblx0XHRcdHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cdFx0XHRwYW5lc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxuXHRcdH0pXHJcblx0fSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5pdFRoZW1lKCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB7IGdwdGhlbWU6IHN0b3JlZFRoZW1lIH0gPSBhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoJ2dwdGhlbWUnKVxyXG5cdFx0Y29uc3QgdGhlbWUgPSBzdG9yZWRUaGVtZSB8fCAod2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJykubWF0Y2hlcyA/ICdsaWdodCcgOiAnZGFyaycpXHJcblx0XHRhcHBseVRoZW1lKHRoZW1lKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBpbml0aWFsaXppbmcgdGhlbWU6JywgZXJyb3IpXHJcblx0fVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXRUaGVtZSh0aGVtZSkge1xyXG5cdHRyeSB7XHJcblx0XHRhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyBncHRoZW1lOiB0aGVtZSB9KVxyXG5cdFx0YXBwbHlUaGVtZSh0aGVtZSlcclxuXHRcdHRvZ2dsZU9wdGlvbnMoKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBzZXR0aW5nIHRoZW1lOicsIGVycm9yKVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQW5kQXBwZW5kU1ZHU3RpY2t5QnRuKCkge1xyXG5cdGNvbnN0IGdwdGhGbG9hdGluZ0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0Z3B0aEZsb2F0aW5nQnRuLmNsYXNzTmFtZSA9ICdncHRoX19mbG9hdGluZydcclxuXHJcblx0Ly8gPGltZyBzcmM9XCIke2dwdGhUb2dnbGVJbWd9XCIgYWx0PVwiZ3B0aC10b2dnbGVcIi8+XHJcblx0bGV0IGh0bWxDb2RlID0gYFxyXG5cdFx0PGRpdiBjbGFzcz1cImdwdGhfX2Zsb2F0aW5nLWljb25cIj5cclxuXHRcdFx0JHtpY29uX3BhaW50fVxyXG5cdFx0PC9kaXY+XHJcblx0XHRcclxuXHRcdDxkaXYgY2xhc3M9XCJncHRoX19vcHRpb25zXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJncHRoX19vcHRpb25zLWJ0bnNcIj5cclxuXHRcdFx0XHQ8YnV0dG9uIGlkPVwibGlnaHRcIiBkYXRhLWdwdGgtdGhlbWU9XCJsaWdodFwiPiR7aWNvbl9zdW59PC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBpZD1cImRhcmtcIiBkYXRhLWdwdGgtdGhlbWU9XCJkYXJrXCI+JHtpY29uX21vb259PC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBpZD1cIm9sZWRcIiBkYXRhLWdwdGgtdGhlbWU9XCJibGFja1wiPiR7aWNvbl9tb29uX2Z1bGx9PC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBpZD1cImdwdGgtb3Blbi1zZXR0aW5nc1wiIGRhdGEtZ3B0aC10aGVtZT1cIm1vcmVcIj4ke2ljb25fc2V0dGluZ3N9PC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG5cclxuXHQvLyBncHRoRmxvYXRpbmdCdG4uaW5uZXJIVE1MID0gaHRtbENvZGVcclxuXHRncHRoRmxvYXRpbmdCdG4uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sQ29kZSlcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdwdGhGbG9hdGluZ0J0bilcclxuXHJcblx0Ly8gQ2FjaGUgRE9NIGVsZW1lbnRzIGFmdGVyIGFwcGVuZGluZ1xyXG5cdCRodG1sVGFnID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XHJcblx0JGZsb2F0aW5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdwdGhfX2Zsb2F0aW5nJylcclxuXHQkZmxvYXRpbmdPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdwdGhfX29wdGlvbnMnKVxyXG5cdCRmbG9hdGluZ0J0bnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aF9fb3B0aW9ucy1idG5zJylcclxuXHJcblx0Ly8gQWRkIGV2ZW50IGxpc3RlbmVycyBhZnRlciBET00gZWxlbWVudHMgYXJlIGFwcGVuZGVkXHJcblx0JGZsb2F0aW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlT3B0aW9ucylcclxuXHQkZmxvYXRpbmdCdG5zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2hhbmdlVGhlbWUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZVRoZW1lKGUpIHtcclxuXHRjb25zdCB0aGVtZUJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpXHJcblx0aWYgKCF0aGVtZUJ1dHRvbikgcmV0dXJuXHJcblxyXG5cdGNvbnN0IHRoZW1lID0gdGhlbWVCdXR0b24uaWRcclxuXHJcblx0aWYgKHRoZW1lICE9PSAnZ3B0aC1vcGVuLXNldHRpbmdzJykge1xyXG5cdFx0c2V0VGhlbWUodGhlbWUpXHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblxyXG5cdC8qIElmIGNsaWNrZWQgb24gXCLimpnvuI8gT3BlbiBTZXR0aW5nc1wiICovXHJcblx0aWYgKHRoZW1lID09PSAnZ3B0aC1vcGVuLXNldHRpbmdzJykge1xyXG5cdFx0b3BlblNldHRpbmdzKClcclxuXHRcdC8vIHRvZ2dsZU9wdGlvbnMoKVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUaGVtZSh0aGVtZSkge1xyXG5cdCRodG1sVGFnLmRhdGFzZXQuZ3B0aGVtZSA9IHRoZW1lXHJcblx0JGh0bWxUYWcuc3R5bGUuY29sb3JTY2hlbWUgPSB0aGVtZSA9PT0gJ29sZWQnID8gJ2RhcmsnIDogdGhlbWVcclxuXHQkaHRtbFRhZy5jbGFzc05hbWUgPSB0aGVtZSA9PT0gJ29sZWQnID8gJ2RhcmsnIDogdGhlbWVcclxuXHRpZiAodGhlbWUgIT09ICdvbGVkJykgJGh0bWxUYWcucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWdwdGhlbWUnKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVPcHRpb25zKCkge1xyXG5cdGlzT3B0aW9uc1Nob3duID0gIWlzT3B0aW9uc1Nob3duXHJcblx0JGZsb2F0aW5nT3B0aW9ucy5jbGFzc0xpc3QudG9nZ2xlKCdncHRoX19vcHRpb25zLS1zaG93bicsIGlzT3B0aW9uc1Nob3duKVxyXG5cclxuXHRpZiAoaXNPcHRpb25zU2hvd24pIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlT3B0aW9ucylcclxuXHRlbHNlIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlT3B0aW9ucylcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZU9wdGlvbnMoZSkge1xyXG5cdGNvbnN0IGlzQ2xpY2tJbnNpZGVGbG9hdGluZ0J0biA9ICRmbG9hdGluZ0J0bi5jb250YWlucyhlLnRhcmdldClcclxuXHRjb25zdCBpc0NsaWNrSW5zaWRlRmxvYXRpbmdPcHRpb25zID0gJGZsb2F0aW5nT3B0aW9ucy5jb250YWlucyhlLnRhcmdldClcclxuXHJcblx0aWYgKCFpc0NsaWNrSW5zaWRlRmxvYXRpbmdCdG4gJiYgIWlzQ2xpY2tJbnNpZGVGbG9hdGluZ09wdGlvbnMpIHRvZ2dsZU9wdGlvbnMoKVxyXG5cclxuXHQvLyBpZiAoISRmbG9hdGluZ0J0bi5jb250YWlucyhlLnRhcmdldCkgJiYgISRmbG9hdGluZ1RoZW1lT3B0aW9ucy5jb250YWlucyhlLnRhcmdldCkpIHRvZ2dsZU9wdGlvbnMoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWNyZWlzZUZsb2F0aW5nQnRuU2l6ZSgpIHtcclxuXHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdCRmbG9hdGluZ0J0bi5jbGFzc0xpc3QuYWRkKCdncHRoX19mbG9hdGluZy0tc21hbGwnKVxyXG5cdH0sIDMwMDApXHJcbn1cclxuXHJcbi8qIF9fX19fX19fX19fX19fIFRIRU1FIENVU1RPTUlaQVRJT04gLSBBQ0NFTlQgVEhFTUUgX19fX19fX19fX19fX18gKi9cclxuZnVuY3Rpb24gcmVuZGVyU2V0dGluZ3MoKSB7XHJcblx0Y29uc3QgZ3B0aFNldHRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHRncHRoU2V0dGluZ3MuY2xhc3NOYW1lID0gYGdwdGgtc2V0dGluZ3MgZml4ZWQgZmxleCBmbGV4LWNvbGBcclxuXHJcblx0bGV0IGh0bWxDb2RlID0gYFxyXG5cdFx0PGhlYWRlciBjbGFzcz1cIm1iLTVcIj5cclxuXHRcdFx0PGgyIGNsYXNzPVwibXQtNSB0ZXh0LWNlbnRlciBmb250LW1lZGl1bSBncHRoLXNldHRpbmdzX190aXRsZVwiPjxzcGFuIGNsYXNzPVwiZm9udC1zZW1pYm9sZFwiPkdQVGhlbWVzPC9zcGFuPiBDdXN0b21pemF0aW9uPC9oMj5cclxuXHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJ0ZXh0LXRva2VuLXRleHQtdGVydGlhcnkgaG92ZXI6dGV4dC10b2tlbi10ZXh0LXByaW1hcnkgYWJzb2x1dGUgdG9wLTQgcmlnaHQtNFwiIGlkPVwiZ3B0aC1zZXR0aW5ncy1jbG9zZVwiPlxyXG5cdFx0XHRcdDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNi4zNDMxNSA2LjM0MzM4TDE3LjY1NjkgMTcuNjU3MU0xNy42NTY5IDYuMzQzMzhMNi4zNDMxNSAxNy42NTcxXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvcGF0aD48L3N2Zz5cclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHQ8L2hlYWRlcj5cclxuXHJcblx0XHQ8bWFpbiA+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ0YWJzXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInRhYi1idXR0b25zIGZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBwLTEgZm9udC1zZW1pYm9sZCBtYi0xMFwiPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInRhYi1idXR0b24gcHktMiBweC00IGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGwgYWN0aXZlXCI+XHJcblx0XHRcdFx0XHRcdENvbG9yXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJ0YWItYnV0dG9uIHB5LTIgcHgtNCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1jZW50ZXIgcm91bmRlZC1mdWxsXCI+XHJcblx0XHRcdFx0XHRcdEZvbnRcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInRhYi1idXR0b24gcHktMiBweC00IGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGxcIj5cclxuXHRcdFx0XHRcdFx0QXNzZXRzXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGFiLXBhbmUgYWN0aXZlXCIgaWQ9XCJ0YWItY29sb3JzXCI+XHJcblx0XHRcdFx0XHRcdCR7cmVuZGVyQ29sb3JzVGFifVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRhYi1wYW5lIGhpZGRlblwiIGlkPVwidGFiLWZvbnRzXCI+XHJcblx0XHRcdFx0XHRcdCR7Zm9udEh0bWxDb2RlfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRhYi1wYW5lIGhpZGRlblwiIGlkPVwidGFiLWFzc2V0c1wiPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtdG9rZW4tdGV4dC10ZXJ0aWFyeSB0ZXh0LXNtIG1iLTIgZm9udC13ZWlnaHQtMjAwXCI+b29vcHMsIHN1Y2ggZW1wdHk8L3A+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC10b2tlbi10ZXh0LXNlY29uZGFyeSB0ZXh0LW1kIGZvbnQtc2VtaWJvbGRcIj5Db21pbmcgU29vbjwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbWFpbj5cclxuXHRgXHJcblxyXG5cdGdwdGhTZXR0aW5ncy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWxDb2RlKVxyXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ3B0aFNldHRpbmdzKVxyXG5cclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3B0aC1zZXR0aW5ncy1jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VTZXR0aW5ncylcclxuXHJcblx0JHNldHRpbmdzID0gZ3B0aFNldHRpbmdzXHJcblxyXG5cdHRhYnNTd2l0Y2hpbmcoKVxyXG5cclxuXHQkcmVzZXRBbGxCdG4gPSAkc2V0dGluZ3MucXVlcnlTZWxlY3RvcignI3Jlc2V0QWxsU2V0dGluZ3MnKVxyXG5cdCRyZXNldEFsbEJ0bi5kaXNhYmxlZCA9IHRydWVcclxuXHJcblx0JHNldHRpbmdzLnF1ZXJ5U2VsZWN0b3IoJyNyZXNldEFsbFNldHRpbmdzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEFsbFNldHRpbmdzKVxyXG5cclxuXHQvLyBhZGRGb250c0V2ZW50SGFuZGxlcnMoKVxyXG5cdGhhbmRsZUZvbnRzTGlzdGVuZXJzKClcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlblNldHRpbmdzKCkge1xyXG5cdCRzZXR0aW5ncy5jbGFzc0xpc3QuYWRkKCdncHRoLXNldHRpbmdzLS1vcGVuJylcclxuXHQkc2V0dGluZ3MuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVNldHRpbmdzT3BlbmVkKVxyXG5cdCRyZXNldEFsbEJ0bi5kaXNhYmxlZCA9IGZhbHNlXHJcblxyXG5cdC8vIGlzT3B0aW9uc1Nob3duID0gZmFsc2VcclxuXHQvLyB0b2dnbGVPcHRpb25zKClcclxufVxyXG5mdW5jdGlvbiBoYW5kbGVTZXR0aW5nc09wZW5lZCgpIHtcclxuXHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlU2V0dGluZ3MpXHJcblx0JHNldHRpbmdzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVTZXR0aW5nc09wZW5lZClcclxufVxyXG5mdW5jdGlvbiBjbG9zZVNldHRpbmdzKCkge1xyXG5cdCRzZXR0aW5ncy5jbGFzc0xpc3QucmVtb3ZlKCdncHRoLXNldHRpbmdzLS1vcGVuJylcclxuXHRkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlU2V0dGluZ3MpXHJcblx0JHJlc2V0QWxsQnRuLmRpc2FibGVkID0gdHJ1ZVxyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZUNsaWNrT3V0c2lkZVNldHRpbmdzKGUpIHtcclxuXHRsZXQgaXNPcGVuU2V0dGluZ3NCdXR0b24gPSBlLnRhcmdldC5pZCA9PT0gJ2dwdGgtc2V0dGluZ3Mtb3BlbidcclxuXHJcblx0aWYgKCEkc2V0dGluZ3MuY29udGFpbnMoZS50YXJnZXQpICYmICFpc09wZW5TZXR0aW5nc0J1dHRvbikgY2xvc2VTZXR0aW5ncygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNvbG9ySW5wdXQoKSB7XHJcblx0JHNldHRpbmdzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG5cclxuXHRcdGlmIChlLnRhcmdldC5pZCA9PT0gJ2FjY2VudExpZ2h0Jykge1xyXG5cdFx0XHRlLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcblx0XHRcdFx0dXBkYXRlQ1NTVmFycyhlLnRhcmdldC52YWx1ZSwgbnVsbClcclxuXHRcdFx0fSlcclxuXHRcdFx0Ly8gU2F2ZSBsaWdodCBhY2NlbnQgY29sb3IgdG8gc3RvcmFnZVxyXG5cdFx0XHRlLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG5cdFx0XHRcdHNldEFjY2VudFRvU3RvcmFnZSgnYWNjZW50X2xpZ2h0JywgZS50YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0Y2xvc2VTZXR0aW5ncygpXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGUudGFyZ2V0LmlkID09PSAnYWNjZW50RGFyaycpIHtcclxuXHRcdFx0ZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG5cdFx0XHRcdHVwZGF0ZUNTU1ZhcnMobnVsbCwgZS50YXJnZXQudmFsdWUpXHJcblx0XHRcdH0pXHJcblx0XHRcdC8vIFNhdmUgZGFyayBhY2NlbnQgY29sb3IgdG8gc3RvcmFnZVxyXG5cdFx0XHRlLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG5cdFx0XHRcdHNldEFjY2VudFRvU3RvcmFnZSgnYWNjZW50X2RhcmsnLCBlLnRhcmdldC52YWx1ZSlcclxuXHRcdFx0XHRjbG9zZVNldHRpbmdzKClcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgaW5qZWN0IHRoZSA8c3R5bGU+IGVsZW1lbnRcclxuZnVuY3Rpb24gaW5qZWN0U3R5bGVFbGVtZW50KCkge1xyXG5cdHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcclxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ1NTVmFycyhsaWdodENvbG9yLCBkYXJrQ29sb3IpIHtcclxuXHRpZiAoIXN0eWxlRWxlbWVudCkgaW5qZWN0U3R5bGVFbGVtZW50KClcclxuXHJcblx0Y29uc3QgbGlnaHRIU0wgPSBsaWdodENvbG9yXHJcblx0XHQ/IGhleFRvSFNMKGxpZ2h0Q29sb3IpXHJcblx0XHQ6IGhleFRvSFNMKCRzZXR0aW5ncy5xdWVyeVNlbGVjdG9yKCcuY29sb3JwaWNrZXIgI2FjY2VudExpZ2h0JykudmFsdWUpXHJcblx0Y29uc3QgZGFya0hTTCA9IGRhcmtDb2xvclxyXG5cdFx0PyBoZXhUb0hTTChkYXJrQ29sb3IpXHJcblx0XHQ6IGhleFRvSFNMKCRzZXR0aW5ncy5xdWVyeVNlbGVjdG9yKCcuY29sb3JwaWNrZXIgI2FjY2VudERhcmsnKS52YWx1ZSlcclxuXHJcblx0bGV0IGNzc1ZhcnMgPSAnJ1xyXG5cclxuXHRjc3NWYXJzID0gYFxyXG4gICAgICAgIGh0bWwubGlnaHQge1xyXG4gICAgICAgICAgICAtLWFjY2VudC1oOiAke2xpZ2h0SFNMWzBdfSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWFjY2VudC1zOiAke2xpZ2h0SFNMWzFdfSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1hY2NlbnQtbDogJHtsaWdodEhTTFsyXX0lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwuZGFyayB7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LWg6ICR7ZGFya0hTTFswXX0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1hY2NlbnQtczogJHtkYXJrSFNMWzFdfSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1hY2NlbnQtbDogJHtkYXJrSFNMWzJdfSUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICBgXHJcblxyXG5cdC8vIGNvbnNvbGUubG9nKGNzc1ZhcnMpXHJcblxyXG5cdHN0eWxlRWxlbWVudC50ZXh0Q29udGVudCA9IGNzc1ZhcnNcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2V0QWNjZW50VG9TdG9yYWdlKHN0b3JhZ2VDb2xvclByb3BlcnR5LCBhY2NlbnRWYWx1ZSkge1xyXG5cdHRyeSB7XHJcblx0XHRpZiAoc3RvcmFnZUNvbG9yUHJvcGVydHkgPT09ICdhY2NlbnRfbGlnaHQnKSB7XHJcblx0XHRcdGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IGFjY2VudF9saWdodDogYWNjZW50VmFsdWUgfSlcclxuXHRcdH1cclxuXHRcdGlmIChzdG9yYWdlQ29sb3JQcm9wZXJ0eSA9PT0gJ2FjY2VudF9kYXJrJykge1xyXG5cdFx0XHRhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyBhY2NlbnRfZGFyazogYWNjZW50VmFsdWUgfSlcclxuXHRcdH1cclxuXHRcdC8vIGNvbnNvbGUubG9nKHsgc3RvcmFnZUNvbG9yUHJvcGVydHksIGFjY2VudFZhbHVlIH0pXHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdFx0Y29uc29sZS5lcnJvcignRXJyb3Igc2V0dGluZyB0aGUgYWNjZW50IGNvbG9ycyBpbiBzdG9yYWdlOicsIGUpXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDb2xvcklucHV0VmFsdWUoeyBhY2NlbnRMaWdodCwgYWNjZW50RGFyayB9KSB7XHJcblx0Ly8gY29uc29sZS5sb2coeyBhY2NlbnRMaWdodCwgYWNjZW50RGFyayB9KVxyXG5cdCRzZXR0aW5ncy5xdWVyeVNlbGVjdG9yKCcuY29sb3JwaWNrZXIgI2FjY2VudExpZ2h0JykudmFsdWUgPSBhY2NlbnRMaWdodFxyXG5cdCRzZXR0aW5ncy5xdWVyeVNlbGVjdG9yKCcuY29sb3JwaWNrZXIgI2FjY2VudERhcmsnKS52YWx1ZSA9IGFjY2VudERhcmtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlQWNjZW50c1N0b3JhZ2UoKSB7XHJcblx0dHJ5IHtcclxuXHRcdC8vIEdldCBhY2NlbnQgY29sb3JzIGZyb20gc3RvcmFnZVxyXG5cdFx0Y29uc3QgeyBhY2NlbnRfbGlnaHQ6IGFjY2VudExpZ2h0LCBhY2NlbnRfZGFyazogYWNjZW50RGFyayB9ID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KFtcclxuXHRcdFx0J2FjY2VudF9saWdodCcsXHJcblx0XHRcdCdhY2NlbnRfZGFyaycsXHJcblx0XHRdKVxyXG5cdFx0Ly8gY29uc29sZS5sb2coJ1JldHJpZXZlZCBhY2NlbnQgY29sb3JzIGZyb20gc3RvcmFnZTonLCBhY2NlbnRMaWdodCwgYWNjZW50RGFyaylcclxuXHJcblx0XHQvLyBTZXQgZGVmYXVsdCBhY2NlbnQgY29sb3JzIGlmIG5vdCBhbHJlYWR5IHNldFxyXG5cdFx0aWYgKCFhY2NlbnRMaWdodCB8fCAhYWNjZW50RGFyaykge1xyXG5cdFx0XHRhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoe1xyXG5cdFx0XHRcdGFjY2VudF9saWdodDogZGVmYXVsdENvbG9yTGlnaHQsXHJcblx0XHRcdFx0YWNjZW50X2Rhcms6IGRlZmF1bHRDb2xvckRhcmssXHJcblx0XHRcdH0pXHJcblx0XHRcdGNvbnNvbGUubG9nKCdEZWZhdWx0IGFjY2VudCBjb2xvcnMgc2V0IGluIHN0b3JhZ2UnKVxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGFjY2VudENvbG9yTGlnaHQgPSBhY2NlbnRMaWdodCB8fCBkZWZhdWx0Q29sb3JMaWdodFxyXG5cdFx0Y29uc3QgYWNjZW50Q29sb3JEYXJrID0gYWNjZW50RGFyayB8fCBkZWZhdWx0Q29sb3JEYXJrXHJcblxyXG5cdFx0Ly8gVXBkYXRlIENTUyB3aXRoIHJldHJpZXZlZCBvciBkZWZhdWx0IGFjY2VudCBjb2xvcnNcclxuXHRcdHVwZGF0ZUNTU1ZhcnMoYWNjZW50Q29sb3JMaWdodCwgYWNjZW50Q29sb3JEYXJrKVxyXG5cclxuXHRcdHNldENvbG9ySW5wdXRWYWx1ZSh7IGFjY2VudExpZ2h0OiBhY2NlbnRDb2xvckxpZ2h0LCBhY2NlbnREYXJrOiBhY2NlbnRDb2xvckRhcmsgfSlcclxuXHJcblx0XHQvLyBjb25zb2xlLmxvZygnQWNjZW50IGNvbG9ycyBhcHBsaWVkIHRvIENTUzonLCBhY2NlbnRDb2xvckxpZ2h0LCBhY2NlbnRDb2xvckRhcmspXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGFjY2VudCBjb2xvcnM6JywgZXJyb3IpXHJcblx0fVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHJlc2V0QWxsU2V0dGluZ3MoKSB7XHJcblx0aWYgKCFzdHlsZUVsZW1lbnQpIGluamVjdFN0eWxlRWxlbWVudCgpXHJcblxyXG5cdC8vIGxldCBhY2NlbnRMaWdodCA9IFsyNTAsIDk5LCA2NV1cclxuXHQvLyBsZXQgYWNjZW50RGFyayA9IFsyNzIsIDkzLCA3OF1cclxuXHRsZXQgYWNjZW50TGlnaHQgPSBoZXhUb0hTTChkZWZhdWx0Q29sb3JMaWdodClcclxuXHRsZXQgYWNjZW50RGFyayA9IGhleFRvSFNMKGRlZmF1bHRDb2xvckRhcmspXHJcblxyXG5cdGNvbnN0IGNzc1ZhcnMgPSBgXHJcbiAgICAgICAgaHRtbC5saWdodCB7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LWg6ICR7YWNjZW50TGlnaHRbMF19ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LXM6ICR7YWNjZW50TGlnaHRbMV19JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWFjY2VudC1sOiAke2FjY2VudExpZ2h0WzJdfSUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbC5kYXJrIHtcclxuICAgICAgICAgICAgLS1hY2NlbnQtaDogJHthY2NlbnREYXJrWzBdfSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWFjY2VudC1zOiAke2FjY2VudERhcmtbMV19JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWFjY2VudC1sOiAke2FjY2VudERhcmtbMl19JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIGBcclxuXHJcblx0c3R5bGVFbGVtZW50LnRleHRDb250ZW50ID0gY3NzVmFyc1xyXG5cclxuXHRzZXRDb2xvcklucHV0VmFsdWUoeyBhY2NlbnRMaWdodDogZGVmYXVsdENvbG9yTGlnaHQsIGFjY2VudERhcms6IGRlZmF1bHRDb2xvckRhcmsgfSlcclxuXHJcblx0YXdhaXQgYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHtcclxuXHRcdGFjY2VudF9saWdodDogZGVmYXVsdENvbG9yTGlnaHQsXHJcblx0XHRhY2NlbnRfZGFyazogZGVmYXVsdENvbG9yRGFyayxcclxuXHR9KVxyXG59XHJcblxyXG4vKiA9PT0gSW5pdGlhbGl6YXRpb24gKi9cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuXHRpbml0VGhlbWUoKVxyXG5cdGNyZWF0ZUFuZEFwcGVuZFNWR1N0aWNreUJ0bigpXHJcblx0cmVuZGVyU2V0dGluZ3MoKVxyXG5cdGRlY3JlaXNlRmxvYXRpbmdCdG5TaXplKClcclxuXHRoYW5kbGVBY2NlbnRzU3RvcmFnZSgpXHJcblx0aGFuZGxlQ29sb3JJbnB1dCgpXHJcbn1cclxuXHJcbi8qID8gT25seSBmb3IgZGVidWdnaW5nIC0gcmVtb3ZlIGxhdGVyISAqL1xyXG4vKiBkZWJ1Z0dldEFsbFN0b3JhZ2VJdGVtcygpXHJcbi8vIEdldCBhbGwgdGhlIGl0ZW1zIGluIHRoZSBzdG9yYWdlXHJcbmZ1bmN0aW9uIGRlYnVnR2V0QWxsU3RvcmFnZUl0ZW1zKCkge1xyXG5cdGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldChudWxsLCBmdW5jdGlvbiAoaXRlbXMpIHtcclxuXHRcdGNvbnNvbGUubG9nKGl0ZW1zKSAvLyBUaGlzIHdpbGwgbG9nIGFsbCB0aGUgaXRlbXMgc3RvcmVkIGluIHN5bmMgc3RvcmFnZVxyXG5cdH0pXHJcbn1cclxuKi9cclxuIiwiLyogd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIC0gdjAuMTAuMCAtIEZyaSBBdWcgMTIgMjAyMiAxOTo0Mjo0NCAqL1xuLyogLSotIE1vZGU6IGluZGVudC10YWJzLW1vZGU6IG5pbDsganMtaW5kZW50LWxldmVsOiAyIC0qLSAqL1xuLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cbi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cInVzZSBzdHJpY3RcIjtcblxuaWYgKCFnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZT8uaWQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xufVxuXG5pZiAodHlwZW9mIGdsb2JhbFRoaXMuYnJvd3NlciA9PT0gXCJ1bmRlZmluZWRcIiB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsVGhpcy5icm93c2VyKSAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjtcblxuICAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgLy8gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiBTaW5jZSBTcGlkZXJtb25rZXkgZG9lcyBub3QgZnVsbHkgcGFyc2UgdGhlXG4gIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXG4gIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgLy8gaW4gRmlyZWZveCBuZWFybHkgZm9yIGZyZWUuXG4gIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgLy8gTk9URTogYXBpTWV0YWRhdGEgaXMgYXNzb2NpYXRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgYXBpLW1ldGFkYXRhLmpzb24gZmlsZVxuICAgIC8vIGF0IGJ1aWxkIHRpbWUgYnkgcmVwbGFjaW5nIHRoZSBmb2xsb3dpbmcgXCJpbmNsdWRlXCIgd2l0aCB0aGUgY29udGVudCBvZiB0aGVcbiAgICAvLyBKU09OIGZpbGUuXG4gICAgY29uc3QgYXBpTWV0YWRhdGEgPSB7XG4gICAgICBcImFsYXJtc1wiOiB7XG4gICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiY2xlYXJBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiYm9va21hcmtzXCI6IHtcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldENoaWxkcmVuXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRTdWJUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlVHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgXCJkaXNhYmxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImdldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJicm93c2luZ0RhdGFcIjoge1xuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDYWNoZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDb29raWVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVGb3JtRGF0YVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVIaXN0b3J5XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVQYXNzd29yZHNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlUGx1Z2luRGF0YVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29tbWFuZHNcIjoge1xuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29udGV4dE1lbnVzXCI6IHtcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29va2llc1wiOiB7XG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxDb29raWVTdG9yZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGV2dG9vbHNcIjoge1xuICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgXCJldmFsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBhbmVsc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMyxcbiAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbGVtZW50c1wiOiB7XG4gICAgICAgICAgICBcImNyZWF0ZVNpZGViYXJQYW5lXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICBcImNhbmNlbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRGaWxlSWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXVzZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVGaWxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImV4dGVuc2lvblwiOiB7XG4gICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICBcImFkZFVybFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlVXJsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFZpc2l0c1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImkxOG5cIjoge1xuICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFjY2VwdExhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICBcImxhdW5jaFdlYkF1dGhGbG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgXCJxdWVyeVN0YXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0RW5hYmxlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1bmluc3RhbGxTZWxmXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJub3RpZmljYXRpb25zXCI6IHtcbiAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFBlcm1pc3Npb25MZXZlbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBhZ2VBY3Rpb25cIjoge1xuICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImhpZGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICBcImNvbnRhaW5zXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgIFwiZ2V0QmFja2dyb3VuZFBhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGxhdGZvcm1JbmZvXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXF1ZXN0VXBkYXRlQ2hlY2tcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VW5pbnN0YWxsVVJMXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgIFwiZ2V0RGV2aWNlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRSZWNlbnRseUNsb3NlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzdG9yYWdlXCI6IHtcbiAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VkXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzeW5jXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0YWJzXCI6IHtcbiAgICAgICAgXCJjYXB0dXJlVmlzaWJsZVRhYlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzY2FyZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhlY3V0ZVNjcmlwdFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRab29tXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ29Gb3J3YXJkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImhpZ2hsaWdodFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJxdWVyeVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNTU1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRab29tXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRvcFNpdGVzXCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndlYk5hdmlnYXRpb25cIjoge1xuICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRGcmFtZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgIFwiaGFuZGxlckJlaGF2aW9yQ2hhbmdlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRMYXN0Rm9jdXNlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcGktbWV0YWRhdGEuanNvbiBoYXMgbm90IGJlZW4gaW5jbHVkZWQgaW4gYnJvd3Nlci1wb2x5ZmlsbFwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIFdlYWtNYXAgc3ViY2xhc3Mgd2hpY2ggY3JlYXRlcyBhbmQgc3RvcmVzIGEgdmFsdWUgZm9yIGFueSBrZXkgd2hpY2ggZG9lc1xuICAgICAqIG5vdCBleGlzdCB3aGVuIGFjY2Vzc2VkLCBidXQgYmVoYXZlcyBleGFjdGx5IGFzIGFuIG9yZGluYXJ5IFdlYWtNYXBcbiAgICAgKiBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjcmVhdGVJdGVtXG4gICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICogICAgICAgIGtleSB3aGljaCBkb2VzIG5vdCBleGlzdCwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgYWNjZXNzZWQuIFRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbiByZWNlaXZlcywgYXMgaXRzIG9ubHkgYXJndW1lbnQsIHRoZSBrZXkgYmVpbmcgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgY29uc3RydWN0b3IoY3JlYXRlSXRlbSwgaXRlbXMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VwZXIoaXRlbXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgfVxuXG4gICAgICBnZXQoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jcmVhdGVJdGVtKGtleSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAqIHRoZXJlZm9yZSBiZSBhc3N1bWVkIHRvIGJlaGF2ZSBhcyBhIFByb21pc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB0aGVuYWJsZS5cbiAgICAgKi9cbiAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICogdGhlIGdpdmVuIHByb21pc2UgYmFzZWQgb24gaG93IGl0IGlzIGNhbGxlZDpcbiAgICAgKlxuICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgKiAgIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGggdGhhdCB2YWx1ZS5cbiAgICAgKiAtIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBleGFjdGx5IG9uZSBhcmd1bWVudCwgdGhlIHByb21pc2UgaXNcbiAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICogLSBPdGhlcndpc2UsIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZVxuICAgICAqICAgZnVuY3Rpb24ncyBhcmd1bWVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvbWlzZVxuICAgICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb2x1dGlvbiBhbmQgcmVqZWN0aW9uIGZ1bmN0aW9ucyBvZiBhXG4gICAgICogICAgICAgIHByb21pc2UuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZXNvbHZlXG4gICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVzb2x1dGlvbiBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdFxuICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlamVjdGlvbiBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgKiAgICAgICAgVGhlIGdlbmVyYXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdCBtYWtlQ2FsbGJhY2sgPSAocHJvbWlzZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgcHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8XG4gICAgICAgICAgICAgICAgICAgKGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpKSB7XG4gICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJnc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHBsdXJhbGl6ZUFyZ3VtZW50cyA9IChudW1BcmdzKSA9PiBudW1BcmdzID09IDEgPyBcImFyZ3VtZW50XCIgOiBcImFyZ3VtZW50c1wiO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gZm9yIGEgbWV0aG9kIHdpdGggdGhlIGdpdmVuIG5hbWUgYW5kIG1ldGFkYXRhLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiAgICAgICAgVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB3aGljaCBpcyBiZWluZyB3cmFwcGVkLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5taW5BcmdzXG4gICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIG1vcmUgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBBc3luY0Z1bmN0aW9uID0gKG5hbWUsIG1ldGFkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgaWYgKG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAvLyBhbmQgc28gdGhlIHBvbHlmaWxsIHdpbGwgdHJ5IHRvIGNhbGwgaXQgd2l0aCBhIGNhbGxiYWNrIGZpcnN0LCBhbmQgaXQgd2lsbCBmYWxsYmFja1xuICAgICAgICAgICAgLy8gdG8gbm90IHBhc3NpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBmaXJzdCBjYWxsIGZhaWxzLlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7cmVzb2x2ZSwgcmVqZWN0fSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbGxpbmcgYmFjayB0byBjYWxsIGl0IHdpdGhvdXQgYSBjYWxsYmFjazogXCIsIGNiRXJyb3IpO1xuXG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcblxuICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAvLyB1c2UgdGhlIHVuc3VwcG9ydGVkIGNhbGxiYWNrIGFueW1vcmUuXG4gICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7cmVzb2x2ZSwgcmVqZWN0fSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAqIGludGVyY2VwdGVkIGJ5IHRoZSBnaXZlbiB3cmFwcGVyIGZ1bmN0aW9uLiBUaGUgd3JhcHBlciBmdW5jdGlvbiByZWNlaXZlcyxcbiAgICAgKiBhcyBpdHMgZmlyc3QgYXJndW1lbnQsIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YCBvYmplY3QsIGZvbGxvd2VkIGJ5IGVhY2ggb2ZcbiAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxuICAgICAqICAgICAgICBUaGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgdGFyZ2V0IG9mIHRoZSBQcm94eVxuICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlclxuICAgICAqICAgICAgICBUaGUgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgYSBkaXJlY3QgaW52b2NhdGlvblxuICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJveHk8ZnVuY3Rpb24+fVxuICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAqICAgICAgICBtZXRob2QgaW4gaXRzIHBsYWNlLlxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBNZXRob2QgPSAodGFyZ2V0LCBtZXRob2QsIHdyYXBwZXIpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgIGFwcGx5KHRhcmdldE1ldGhvZCwgdGhpc09iaiwgYXJncykge1xuICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNhbGwodGhpc09iaiwgdGFyZ2V0LCAuLi5hcmdzKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBsZXQgaGFzT3duUHJvcGVydHkgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgKiBiYXNlZCBvbiB0aGUgZ2l2ZW4gYHdyYXBwZXJzYCBhbmQgYG1ldGFkYXRhYCBvYmplY3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAqICAgICAgICBUaGUgdGFyZ2V0IG9iamVjdCB0byB3cmFwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBzcGVjaWFsIGNhc2VzLiBBbnlcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gcHJlc2VudCBpbiB0aGlzIG9iamVjdCB0cmVlIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiB0aGVcbiAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgKiAgICAgICAgd3JhcHBlciBtZXRob2RzIGFyZSBpbnZva2VkIGFzIGRlc2NyaWJlZCBpbiB7QHNlZSB3cmFwTWV0aG9kfS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyBtZXRhZGF0YSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVcbiAgICAgKiAgICAgICAgUHJvbWlzZS1iYXNlZCB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYXN5bmNocm9ub3VzLiBBbnkgZnVuY3Rpb24gaW5cbiAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICogICAgICAgIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgbWV0YWRhdGFgIHRyZWUgaXMgcmVwbGFjZWQgd2l0aCBhblxuICAgICAqICAgICAgICBhdXRvbWF0aWNhbGx5LWdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLCBhcyBkZXNjcmliZWQgaW5cbiAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJveHk8b2JqZWN0Pn1cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwT2JqZWN0ID0gKHRhcmdldCwgd3JhcHBlcnMgPSB7fSwgbWV0YWRhdGEgPSB7fSkgPT4ge1xuICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgaGFzKHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuIENoZWNrIGlmIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcnNbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgLy8gUHJvbWlzZSB3cmFwcGVyIGZvciBpdC5cbiAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmJpbmQodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgKGhhc093blByb3BlcnR5KHdyYXBwZXJzLCBwcm9wKSB8fFxuICAgICAgICAgICAgICAgICAgICAgIGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gb2JqZWN0IHRoYXQgd2UgbmVlZCB0byBkbyBzb21lIHdyYXBwaW5nIGZvciB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtcIipcIl0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgIC8vIHNvIGp1c3QgZm9yd2FyZCBhbGwgYWNjZXNzIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIGRlc2MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoY2FjaGUsIHByb3ApO1xuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgLy8gUGVyIGNvbnRyYWN0IG9mIHRoZSBQcm94eSBBUEksIHRoZSBcImdldFwiIHByb3h5IGhhbmRsZXIgbXVzdCByZXR1cm4gdGhlXG4gICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZS4gRm9yIHRoaXMgcmVhc29uLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICAvLyBwcm90b3R5cGUgc2V0IHRvIGB0YXJnZXRgIGluc3RlYWQgb2YgdXNpbmcgYHRhcmdldGAgZGlyZWN0bHkuXG4gICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgLy8gYXJlIGRlY2xhcmVkIHJlYWQtb25seSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSwgc3VjaCBhcyBgY2hyb21lLmRldnRvb2xzYC5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGBwcm94eVRhcmdldGAsIHNvIHRoYXQgdGhlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlXG4gICAgICAvLyBkZXJlZmVyZW5jZWQgdmlhIHRoZSBvcmlnaW5hbCB0YXJnZXRzLlxuICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgcmV0dXJuIG5ldyBQcm94eShwcm94eVRhcmdldCwgaGFuZGxlcnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2V0IG9mIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhbiBldmVudCBvYmplY3QsIHdoaWNoIGhhbmRsZXNcbiAgICAgKiB3cmFwcGluZyBvZiBsaXN0ZW5lciBmdW5jdGlvbnMgdGhhdCB0aG9zZSBtZXNzYWdlcyBhcmUgcGFzc2VkLlxuICAgICAqXG4gICAgICogQSBzaW5nbGUgd3JhcHBlciBpcyBjcmVhdGVkIGZvciBlYWNoIGxpc3RlbmVyIGZ1bmN0aW9uLCBhbmQgc3RvcmVkIGluIGFcbiAgICAgKiBtYXAuIFN1YnNlcXVlbnQgY2FsbHMgdG8gYGFkZExpc3RlbmVyYCwgYGhhc0xpc3RlbmVyYCwgb3IgYHJlbW92ZUxpc3RlbmVyYFxuICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAqIHByZXZpb3VzbHktYWRkZWQgbGlzdGVuZXIgd29yayBhcyBleHBlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAqICAgICAgICBBIERlZmF1bHRXZWFrTWFwIG9iamVjdCB3aGljaCB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgd3JhcHBlclxuICAgICAqICAgICAgICBmb3IgYSBnaXZlbiBsaXN0ZW5lciBmdW5jdGlvbiB3aGVuIG9uZSBkb2VzIG5vdCBleGlzdCwgYW5kIHJldHJpZXZlXG4gICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgIGFkZExpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIsIC4uLmFyZ3MpIHtcbiAgICAgICAgdGFyZ2V0LmFkZExpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSwgLi4uYXJncyk7XG4gICAgICB9LFxuXG4gICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQuaGFzTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3Qgb25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIG9uUmVxdWVzdEZpbmlzaGVkIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgd2lsbCByZXR1cm4gYVxuICAgICAgICogYGdldENvbnRlbnQoKWAgcHJvcGVydHkgd2hpY2ggcmV0dXJucyBhIGBQcm9taXNlYCByYXRoZXIgdGhhbiB1c2luZyBhXG4gICAgICAgKiBjYWxsYmFjayBBUEkuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHJlcVxuICAgICAgICogICAgICAgIFRoZSBIQVIgZW50cnkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgbmV0d29yayByZXF1ZXN0LlxuICAgICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gb25SZXF1ZXN0RmluaXNoZWQocmVxKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZWRSZXEgPSB3cmFwT2JqZWN0KHJlcSwge30gLyogd3JhcHBlcnMgKi8sIHtcbiAgICAgICAgICBnZXRDb250ZW50OiB7XG4gICAgICAgICAgICBtaW5BcmdzOiAwLFxuICAgICAgICAgICAgbWF4QXJnczogMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgbGlzdGVuZXIod3JhcHBlZFJlcSk7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb25NZXNzYWdlV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAqIGNhbGxiYWNrLiBJZiB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gcmV0dXJucyBhIFByb21pc2UsIHRoZSByZXNwb25zZSBpc1xuICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gbWVzc2FnZVxuICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAqICAgICAgICBEZXRhaWxzIGFib3V0IHRoZSBzZW5kZXIgb2YgdGhlIG1lc3NhZ2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAqICAgICAgICB0aGF0IHZhbHVlIGFzIGEgcmVzcG9uc2UuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICogICAgICAgIHlpZWxkIGEgcmVzcG9uc2UuIEZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICBsZXQgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB3cmFwcGVkU2VuZFJlc3BvbnNlO1xuICAgICAgICBsZXQgc2VuZFJlc3BvbnNlUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTtcblxuICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyByZXNwb25zZSBzZW50IGZyb20gdGhpcyBsaXN0ZW5lci5cbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEEgc21hbGwgaGVscGVyIHRvIHNlbmQgdGhlIG1lc3NhZ2UgaWYgdGhlIHByb21pc2UgcmVzb2x2ZXNcbiAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcbiAgICAgICAgLy8gcHJvbWlzZSkuXG4gICAgICAgIGNvbnN0IHNlbmRQcm9taXNlZFJlc3VsdCA9IChwcm9taXNlKSA9PiB7XG4gICAgICAgICAgcHJvbWlzZS50aGVuKG1zZyA9PiB7XG4gICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgLy8gUHJpbnQgYW4gZXJyb3Igb24gdGhlIGNvbnNvbGUgaWYgdW5hYmxlIHRvIHNlbmQgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgLy8gcmVzdWx0LCBvdGhlcndpc2Ugd2FpdCB0aGUgcHJvbWlzZSByZWxhdGVkIHRvIHRoZSB3cmFwcGVkU2VuZFJlc3BvbnNlXG4gICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cbiAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtyZWplY3QsIHJlc29sdmV9LCByZXBseSkgPT4ge1xuICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgLy8gRGV0ZWN0IHdoZW4gbm9uZSBvZiB0aGUgbGlzdGVuZXJzIHJlcGxpZWQgdG8gdGhlIHNlbmRNZXNzYWdlIGNhbGwgYW5kIHJlc29sdmVcbiAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlID09PSBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UpIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgLy8gQ29udmVydCBiYWNrIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpbnRvXG4gICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZENiID0gd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2suYmluZChudWxsLCB7cmVzb2x2ZSwgcmVqZWN0fSk7XG4gICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XG4gICAgICBkZXZ0b29sczoge1xuICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgb25SZXF1ZXN0RmluaXNoZWQ6IHdyYXBFdmVudChvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBydW50aW1lOiB7XG4gICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgb25NZXNzYWdlRXh0ZXJuYWw6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHttaW5BcmdzOiAxLCBtYXhBcmdzOiAzfSksXG4gICAgICB9LFxuICAgICAgdGFiczoge1xuICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7bWluQXJnczogMiwgbWF4QXJnczogM30pLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgIGNsZWFyOiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgICBnZXQ6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICAgIHNldDoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgIH07XG4gICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgIG5ldHdvcms6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICAgIHNlcnZpY2VzOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgICB3ZWJzaXRlczoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgIH07XG5cbiAgICByZXR1cm4gd3JhcE9iamVjdChleHRlbnNpb25BUElzLCBzdGF0aWNXcmFwcGVycywgYXBpTWV0YWRhdGEpO1xuICB9O1xuXG4gIC8vIFRoZSBidWlsZCBwcm9jZXNzIGFkZHMgYSBVTUQgd3JhcHBlciBhcm91bmQgdGhpcyBmaWxlLCB3aGljaCBtYWtlcyB0aGVcbiAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXMuYnJvd3Nlcjtcbn1cbiIsImV4cG9ydCBjb25zdCBpY29uX3N1biA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1vdXRsaW5lIGljb24tdGFibGVyLXN1blwiPjxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz48cGF0aCBkPVwiTTEyIDEybS00IDBhNCA0IDAgMSAwIDggMGE0IDQgMCAxIDAgLTggMFwiIC8+PHBhdGggZD1cIk0zIDEyaDFtOCAtOXYxbTggOGgxbS05IDh2MW0tNi40IC0xNS40bC43IC43bTEyLjEgLS43bC0uNyAuN20wIDExLjRsLjcgLjdtLTEyLjEgLS43bC0uNyAuN1wiIC8+PC9zdmc+YFxyXG5cclxuZXhwb3J0IGNvbnN0IGljb25fbW9vbiA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1vdXRsaW5lIGljb24tdGFibGVyLW1vb25cIj48cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48cGF0aCBkPVwiTTEyIDNjLjEzMiAwIC4yNjMgMCAuMzkzIDBhNy41IDcuNSAwIDAgMCA3LjkyIDEyLjQ0NmE5IDkgMCAxIDEgLTguMzEzIC0xMi40NTR6XCIgLz48L3N2Zz5gXHJcblxyXG5leHBvcnQgY29uc3QgaWNvbl9tb29uX2Z1bGwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiaWNvbiBpY29uLXRhYmxlciBpY29ucy10YWJsZXItb3V0bGluZSBpY29uLXRhYmxlci1tb29uLTJcIj48cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48cGF0aCBkPVwiTTE2LjQxOCA0LjE1N2E4IDggMCAwIDAgMCAxNS42ODZcIiAvPjxwYXRoIGQ9XCJNMTIgMTJtLTkgMGE5IDkgMCAxIDAgMTggMGE5IDkgMCAxIDAgLTE4IDBcIiAvPjwvc3ZnPmBcclxuXHJcbmV4cG9ydCBjb25zdCBpY29uX3NldHRpbmdzID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImljb24gaWNvbi10YWJsZXIgaWNvbnMtdGFibGVyLW91dGxpbmUgaWNvbi10YWJsZXItc2V0dGluZ3NcIj48cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48cGF0aCBkPVwiTTEwLjMyNSA0LjMxN2MuNDI2IC0xLjc1NiAyLjkyNCAtMS43NTYgMy4zNSAwYTEuNzI0IDEuNzI0IDAgMCAwIDIuNTczIDEuMDY2YzEuNTQzIC0uOTQgMy4zMSAuODI2IDIuMzcgMi4zN2ExLjcyNCAxLjcyNCAwIDAgMCAxLjA2NSAyLjU3MmMxLjc1NiAuNDI2IDEuNzU2IDIuOTI0IDAgMy4zNWExLjcyNCAxLjcyNCAwIDAgMCAtMS4wNjYgMi41NzNjLjk0IDEuNTQzIC0uODI2IDMuMzEgLTIuMzcgMi4zN2ExLjcyNCAxLjcyNCAwIDAgMCAtMi41NzIgMS4wNjVjLS40MjYgMS43NTYgLTIuOTI0IDEuNzU2IC0zLjM1IDBhMS43MjQgMS43MjQgMCAwIDAgLTIuNTczIC0xLjA2NmMtMS41NDMgLjk0IC0zLjMxIC0uODI2IC0yLjM3IC0yLjM3YTEuNzI0IDEuNzI0IDAgMCAwIC0xLjA2NSAtMi41NzJjLTEuNzU2IC0uNDI2IC0xLjc1NiAtMi45MjQgMCAtMy4zNWExLjcyNCAxLjcyNCAwIDAgMCAxLjA2NiAtMi41NzNjLS45NCAtMS41NDMgLjgyNiAtMy4zMSAyLjM3IC0yLjM3YzEgLjYwOCAyLjI5NiAuMDcgMi41NzIgLTEuMDY1elwiIC8+PHBhdGggZD1cIk05IDEyYTMgMyAwIDEgMCA2IDBhMyAzIDAgMCAwIC02IDBcIiAvPjwvc3ZnPmBcclxuXHJcbmV4cG9ydCBjb25zdCBpY29uX3BhaW50ID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImljb24gaWNvbi10YWJsZXIgaWNvbnMtdGFibGVyLW91dGxpbmUgaWNvbi10YWJsZXItcGFpbnRcIj48cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48cGF0aCBkPVwiTTUgM20wIDJhMiAyIDAgMCAxIDIgLTJoMTBhMiAyIDAgMCAxIDIgMnYyYTIgMiAwIDAgMSAtMiAyaC0xMGEyIDIgMCAwIDEgLTIgLTJ6XCIgLz48cGF0aCBkPVwiTTE5IDZoMWEyIDIgMCAwIDEgMiAyYTUgNSAwIDAgMSAtNSA1bC01IDB2MlwiIC8+PHBhdGggZD1cIk0xMCAxNW0wIDFhMSAxIDAgMCAxIDEgLTFoMmExIDEgMCAwIDEgMSAxdjRhMSAxIDAgMCAxIC0xIDFoLTJhMSAxIDAgMCAxIC0xIC0xelwiIC8+PC9zdmc+YFxyXG5cclxuZXhwb3J0IGNvbnN0IGljb25fcGFsZXR0ZSA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1vdXRsaW5lIGljb24tdGFibGVyLXBhbGV0dGVcIj48cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48cGF0aCBkPVwiTTEyIDIxYTkgOSAwIDAgMSAwIC0xOGM0Ljk3IDAgOSAzLjU4MiA5IDhjMCAxLjA2IC0uNDc0IDIuMDc4IC0xLjMxOCAyLjgyOGMtLjg0NCAuNzUgLTEuOTg5IDEuMTcyIC0zLjE4MiAxLjE3MmgtMi41YTIgMiAwIDAgMCAtMSAzLjc1YTEuMyAxLjMgMCAwIDEgLTEgMi4yNVwiIC8+PHBhdGggZD1cIk04LjUgMTAuNW0tMSAwYTEgMSAwIDEgMCAyIDBhMSAxIDAgMSAwIC0yIDBcIiAvPjxwYXRoIGQ9XCJNMTIuNSA3LjVtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwXCIgLz48cGF0aCBkPVwiTTE2LjUgMTAuNW0tMSAwYTEgMSAwIDEgMCAyIDBhMSAxIDAgMSAwIC0yIDBcIiAvPjwvc3ZnPmBcclxuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoXG4gICAgICBrZXkgPT09ICdkZWZhdWx0JyB8fFxuICAgICAga2V5ID09PSAnX19lc01vZHVsZScgfHxcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZXN0LCBrZXkpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwiLyogZXhwb3J0IGZ1bmN0aW9uIGhleFRvSFNMKGhleCkge1xyXG5cdGNvbnN0IHJlc3VsdCA9IHt9XHJcblx0aGV4ID0gaGV4LnN1YnN0cmluZygxKSAvLyBSZW1vdmUgbGVhZGluZyBcIiNcIiBzeW1ib2xcclxuXHJcblx0Y29uc3QgcmdiID0gaGV4Lm1hdGNoKC9bQS1GYS1mXFxkXXsyfS9nKS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gcGFyc2VJbnQodmFsdWUsIDE2KSAvIDI1NVxyXG5cdH0pXHJcblxyXG5cdGNvbnN0IHIgPSByZ2JbMF1cclxuXHRjb25zdCBnID0gcmdiWzFdXHJcblx0Y29uc3QgYiA9IHJnYlsyXVxyXG5cclxuXHRjb25zdCBtYXggPSBNYXRoLm1heChyLCBnLCBiKVxyXG5cdGNvbnN0IG1pbiA9IE1hdGgubWluKHIsIGcsIGIpXHJcblx0bGV0IGgsIHMsIGxcclxuXHJcblx0bCA9IChtYXggKyBtaW4pIC8gMlxyXG5cclxuXHRpZiAobWF4ID09PSBtaW4pIHtcclxuXHRcdGggPSBzID0gMCAvLyBBY2hyb21hdGljXHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnN0IGQgPSBtYXggLSBtaW5cclxuXHRcdHMgPSBsID4gMC41ID8gZCAvICgyIC0gbWF4IC0gbWluKSA6IGQgLyAobWF4ICsgbWluKVxyXG5cdFx0c3dpdGNoIChtYXgpIHtcclxuXHRcdFx0Y2FzZSByOlxyXG5cdFx0XHRcdGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgZzpcclxuXHRcdFx0XHRoID0gKGIgLSByKSAvIGQgKyAyXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSBiOlxyXG5cdFx0XHRcdGggPSAociAtIGcpIC8gZCArIDRcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0fVxyXG5cdFx0aCA9IE1hdGgucm91bmQoaCAqIDYwKVxyXG5cdH1cclxuXHJcblx0cmVzdWx0LmggPSBoICUgMzYwXHJcblx0cmVzdWx0LnMgPSBNYXRoLnJvdW5kKHMgKiAxMDApXHJcblx0cmVzdWx0LmwgPSBNYXRoLnJvdW5kKGwgKiAxMDApXHJcblxyXG5cdHJldHVybiByZXN1bHRcclxufSAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvSFNMKGhleCkge1xyXG5cdC8vIENvbnZlcnQgaGV4IHRvIFJHQiBmaXJzdFxyXG5cdGxldCByID0gMCxcclxuXHRcdGcgPSAwLFxyXG5cdFx0YiA9IDBcclxuXHRpZiAoaGV4Lmxlbmd0aCA9PT0gNCkge1xyXG5cdFx0ciA9IHBhcnNlSW50KGhleFsxXSArIGhleFsxXSwgMTYpXHJcblx0XHRnID0gcGFyc2VJbnQoaGV4WzJdICsgaGV4WzJdLCAxNilcclxuXHRcdGIgPSBwYXJzZUludChoZXhbM10gKyBoZXhbM10sIDE2KVxyXG5cdH0gZWxzZSBpZiAoaGV4Lmxlbmd0aCA9PT0gNykge1xyXG5cdFx0ciA9IHBhcnNlSW50KGhleC5zbGljZSgxLCAzKSwgMTYpXHJcblx0XHRnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNilcclxuXHRcdGIgPSBwYXJzZUludChoZXguc2xpY2UoNSwgNyksIDE2KVxyXG5cdH1cclxuXHJcblx0Ly8gVGhlbiBjb252ZXJ0IFJHQiB0byBIU0xcclxuXHRyIC89IDI1NVxyXG5cdGcgLz0gMjU1XHJcblx0YiAvPSAyNTVcclxuXHRjb25zdCBtYXggPSBNYXRoLm1heChyLCBnLCBiKVxyXG5cdGNvbnN0IG1pbiA9IE1hdGgubWluKHIsIGcsIGIpXHJcblx0bGV0IGgsXHJcblx0XHRzLFxyXG5cdFx0bCA9IChtYXggKyBtaW4pIC8gMlxyXG5cclxuXHRpZiAobWF4ID09PSBtaW4pIHtcclxuXHRcdGggPSBzID0gMCAvLyBhY2hyb21hdGljXHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnN0IGQgPSBtYXggLSBtaW5cclxuXHRcdHMgPSBsID4gMC41ID8gZCAvICgyIC0gbWF4IC0gbWluKSA6IGQgLyAobWF4ICsgbWluKVxyXG5cdFx0c3dpdGNoIChtYXgpIHtcclxuXHRcdFx0Y2FzZSByOlxyXG5cdFx0XHRcdGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgZzpcclxuXHRcdFx0XHRoID0gKGIgLSByKSAvIGQgKyAyXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSBiOlxyXG5cdFx0XHRcdGggPSAociAtIGcpIC8gZCArIDRcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0fVxyXG5cdFx0aCAvPSA2XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gW01hdGgucm91bmQoaCAqIDM2MCksIE1hdGgucm91bmQocyAqIDEwMCksIE1hdGgucm91bmQobCAqIDEwMCldXHJcbn1cclxuIiwiLy8gbWFpbi5qc1xyXG5pbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnXHJcbmltcG9ydCB7IHJlbmRlckZvbnRTbWFsbENhcmQsIHJlbmRlckZvbnRCaWdDYXJkLCByZW5kZXJCdXR0b24gfSBmcm9tICcuL2NvbXBvbmVudHMvcmVuZGVyRm9udHMnXHJcblxyXG4vLyBDb25zdGFudHNcclxuY29uc3QgREVGQVVMVFMgPSB7XHJcblx0Zm9udEZhbWlseTogZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tZm9udEZhbWlseURlZmF1bHQnKSxcclxuXHRmb250U2l6ZTogMTYsXHJcblx0bGV0dGVyU3BhY2luZzogMCxcclxuXHRsaW5lSGVpZ2h0OiAyOCxcclxufVxyXG5cclxuY29uc3QgRk9OVF9OQU1FUyA9IFtcclxuXHQnRGVmYXVsdCcsXHJcblx0J0ludGVyJyxcclxuXHQnUm9ib3RvJyxcclxuXHQnUm9ib3RvIE1vbm8nLFxyXG5cdCdETSBTYW5zJyxcclxuXHQnUmVkZGl0IE1vbm8nLFxyXG5cdCdQb3BwaW5zJyxcclxuXHQnTm90byBTYW5zJyxcclxuXHQnTW9ub3NwYWNlJyxcclxuXHQnTGF0bycsXHJcblx0J1F1aWNrc2FuZCcsXHJcblx0J091dGZpdCcsXHJcbl1cclxuXHJcbmNvbnN0IEdPT0dMRV9GT05UX1dFSUdIVFMgPSBgOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMGBcclxuXHJcbmxldCBvbkZvY3VzVmFsRm9udFNpemUgPSBudWxsLFxyXG5cdG9uRm9jdXNWYWxMaW5lSGVpZ2h0ID0gbnVsbCxcclxuXHRvbkZvY3VzVmFsTGV0dGVyU3BhY2luZyA9IG51bGxcclxuXHJcbmNvbnN0IGZvbnRTaXplRGF0YSA9IHtcclxuXHRuYW1lOiAnRm9udCBTaXplJyxcclxuXHRjbGFzc05hbWU6ICdmb250c19fc2l6ZScsXHJcblx0aW5wdXRJZDogJ2ZvbnRTaXplJyxcclxuXHRpbnB1dFR5cGU6ICdudW1iZXInLFxyXG5cdGlucHV0VmFsdWU6IERFRkFVTFRTLmZvbnRTaXplLFxyXG5cdGlucHV0UGxhY2Vob2xkZXI6IERFRkFVTFRTLmZvbnRTaXplLFxyXG5cdHVuaXQ6ICdweCcsXHJcblx0bWluOiAxMixcclxuXHRtYXg6IDI0LFxyXG59XHJcbmNvbnN0IGxpbmVIZWlnaHREYXRhID0ge1xyXG5cdG5hbWU6ICdMaW5lIEhlaWdodCcsXHJcblx0Y2xhc3NOYW1lOiAnZm9udHNfX2xpbmVIZWlnaHQnLFxyXG5cdGlucHV0SWQ6ICdsaW5lSGVpZ2h0JyxcclxuXHRpbnB1dFR5cGU6ICdudW1iZXInLFxyXG5cdGlucHV0VmFsdWU6IERFRkFVTFRTLmxpbmVIZWlnaHQsXHJcblx0aW5wdXRQbGFjZWhvbGRlcjogREVGQVVMVFMubGluZUhlaWdodCxcclxuXHR1bml0OiAncHgnLFxyXG5cdG1pbjogMTIsXHJcblx0bWF4OiA2MCxcclxufVxyXG5jb25zdCBsZXR0ZXJTcGFjaW5nRGF0YSA9IHtcclxuXHRuYW1lOiAnTGV0dGVyIFNwYWNpbmcnLFxyXG5cdGNsYXNzTmFtZTogJ2ZvbnRzX19sZXR0ZXJTcGFjaW5nJyxcclxuXHRpbnB1dElkOiAnbGV0dGVyU3BhY2luZycsXHJcblx0aW5wdXRUeXBlOiAnbnVtYmVyJyxcclxuXHRpbnB1dFZhbHVlOiBERUZBVUxUUy5sZXR0ZXJTcGFjaW5nLFxyXG5cdGlucHV0UGxhY2Vob2xkZXI6IERFRkFVTFRTLmxldHRlclNwYWNpbmcsXHJcblx0dW5pdDogJ3B4JyxcclxuXHRtaW46IC01LFxyXG5cdG1heDogNSxcclxufVxyXG5cclxuZXhwb3J0IGxldCBmb250SHRtbENvZGUgPSBgXHJcblx0PHNlY3Rpb24gaWQ9XCJmb250Q2hhbmdlclBvcG92ZXJcIiBjbGFzcz1cImZvbnRzXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZm9udHNfX3Byb3BzXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmb250c19fZmFtaWx5IGZvbnRzX19ncm91cCBjYXJkIGNhcmQtLWJpZyBoLWZ1bGxcIj5cclxuXHRcdFx0XHQ8bGFiZWwgZm9yPVwiZm9udEZhbWlseVwiIGNsYXNzPVwiZ3JpZCBnYXAtMSBoLWZ1bGwgdy1mdWxsXCI+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzcz1cImNhcmRfX3VuaXQgY2FyZF9faWNvblwiPlQ8L3A+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzPVwiY2FyZF9fbmFtZSB1cHBlcmNhc2UgZm9udC1zZW1pYm9sZFwiPkZPTlQgRkFNSUxZPC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8c2VsZWN0IGlkPVwiZm9udEZhbWlseVwiIGNsYXNzPVwiYm9yZGVyLW5vbmUgb3V0bGluZS1ub25lIGZvY3VzOm5vbmUgZm9udC1ib2xkXCI+XHJcblx0XHRcdFx0XHRcdFx0JHtGT05UX05BTUVTLm1hcCgobmFtZSkgPT4gYDxvcHRpb24gdmFsdWU9XCIke25hbWUgPT09ICdEZWZhdWx0JyA/IERFRkFVTFRTLmZvbnRGYW1pbHkgOiBuYW1lfVwiPiR7bmFtZX08L29wdGlvbj5gKS5qb2luKFxyXG5cdFx0XHRcdFx0XHRcdFx0JydcclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQke3JlbmRlckZvbnRCaWdDYXJkKGZvbnRTaXplRGF0YSl9XHJcblx0XHRcdCR7cmVuZGVyRm9udFNtYWxsQ2FyZChsaW5lSGVpZ2h0RGF0YSl9XHJcblx0XHRcdCR7cmVuZGVyRm9udFNtYWxsQ2FyZChsZXR0ZXJTcGFjaW5nRGF0YSl9XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8Zm9vdGVyIGNsYXNzPVwiZ3JpZCBtdC0xMFwiPlxyXG5cdFx0XHQke3JlbmRlckJ1dHRvbih7IGlkOiAncmVzZXRGb250JywgY29udGVudDogJ1Jlc2V0IEZvbnRzJywgZGlzYWJsZWQ6IGZhbHNlLCBjbGFzc05hbWU6ICdidG4tcHJpbWFyeScgfSl9XHJcblx0XHQ8L2Zvb3Rlcj5cclxuXHQ8L3NlY3Rpb24+XHJcbmBcclxuXHJcbmZ1bmN0aW9uIHNldElucHV0RmllbGQoaW5wdXRTZWxlY3RvciwgaW5wdXRWYWwpIHtcclxuXHRsZXQgaW5wdXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ncHRoLXNldHRpbmdzICMke2lucHV0U2VsZWN0b3J9YClcclxuXHJcblx0aWYgKGlucHV0VmFsID09PSAnRGVmYXVsdCcpIHtcclxuXHRcdGlucHV0RWwudmFsdWUgPSBERUZBVUxUU1tpbnB1dFNlbGVjdG9yXVxyXG5cdH0gZWxzZSB7XHJcblx0XHRpbnB1dEVsLnZhbHVlID0gaW5wdXRWYWxcclxuXHR9XHJcbn1cclxuLy8gRnVuY3Rpb24gdG8gYXBwbHkgc2V0dGluZ3NcclxuZnVuY3Rpb24gYXBwbHlTZXR0aW5ncyhzZXR0aW5ncykge1xyXG5cdC8vIGNvbnNvbGUubG9nKHNldHRpbmdzKVxyXG5cclxuXHRPYmplY3QuZW50cmllcyhzZXR0aW5ncykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtrZXl9YCwgdmFsdWUpXHJcblx0XHRzZXRJbnB1dEZpZWxkKGtleSwgdmFsdWUpXHJcblx0XHQvLyBzZXRJbnB1dEZpZWxkKGAjJHtrZXl9YCwgdmFsdWUpXHJcblxyXG5cdFx0Y29uc29sZS5sb2coJ2dldENvbXB1dGVkU3R5bGU6ICcsIGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGAtLSR7a2V5fWApKVxyXG5cdH0pXHJcbn1cclxuLy8gRnVuY3Rpb24gdG8gc2F2ZSBzZXR0aW5ncyB0byBDaHJvbWUgU3RvcmFnZVxyXG5hc3luYyBmdW5jdGlvbiBzYXZlU2V0dGluZ3Moc2V0dGluZ3MpIHtcclxuXHQvLyBjb25zb2xlLmxvZyhzZXR0aW5ncylcclxuXHR0cnkge1xyXG5cdFx0YXdhaXQgYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHNldHRpbmdzKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2F2ZSBzZXR0aW5nczonLCBlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGxvYWQgc2V0dGluZ3MgZnJvbSBDaHJvbWUgU3RvcmFnZVxyXG5hc3luYyBmdW5jdGlvbiBsb2FkU2V0dGluZ3MoKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KE9iamVjdC5rZXlzKERFRkFVTFRTKSlcclxuXHRcdC8vIGNvbnNvbGUubG9nKHsgc2V0dGluZ3MgfSlcclxuXHJcblx0XHRpZiAoc2V0dGluZ3MuZm9udEZhbWlseSAmJiBzZXR0aW5ncy5mb250RmFtaWx5ICE9PSBERUZBVUxUUy5mb250RmFtaWx5KSB7XHJcblx0XHRcdGxvYWRHb29nbGVGb250KHNldHRpbmdzLmZvbnRGYW1pbHkpXHJcblx0XHR9XHJcblx0XHRhcHBseVNldHRpbmdzKHNldHRpbmdzKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBzZXR0aW5nczonLCBlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbi8vIFZhbGlkYXRlIGlucHV0XHJcbi8qIGZ1bmN0aW9uIGlzVmFsaWRJbnB1dCh2YWx1ZSwgdHlwZSkge1xyXG5cdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0Y2FzZSAnZm9udFNpemUnOlxyXG5cdFx0Y2FzZSAnbGluZUhlaWdodCc6XHJcblx0XHRcdHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIHBhcnNlRmxvYXQodmFsdWUpID4gMFxyXG5cdFx0Y2FzZSAnbGV0dGVyU3BhY2luZyc6XHJcblx0XHRcdHJldHVybiAhaXNOYU4ocGFyc2VJbnQodmFsdWUpKSAmJiBwYXJzZUludCh2YWx1ZSkgPj0gMFxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHRydWVcclxuXHR9XHJcbn0gKi9cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGR5bmFtaWNhbGx5IGxvYWQgR29vZ2xlIEZvbnRzXHJcbmZ1bmN0aW9uIGxvYWRHb29nbGVGb250KGZvbnRGYW1pbHkpIHtcclxuXHRjb25zdCBocmVmID0gYGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9JHtmb250RmFtaWx5LnJlcGxhY2UoXHJcblx0XHQnICcsXHJcblx0XHQnKydcclxuXHQpfSR7R09PR0xFX0ZPTlRfV0VJR0hUU30mZGlzcGxheT1zd2FwYFxyXG5cclxuXHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXHJcblx0bGluay5yZWwgPSAnc3R5bGVzaGVldCdcclxuXHRsaW5rLmhyZWYgPSBocmVmXHJcblx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxyXG59XHJcbmZ1bmN0aW9uIGdldEFsbEdvb2dsZUZvbnRMaW5rcygpIHtcclxuXHRsZXQgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1tyZWw9J3N0eWxlc2hlZXQnXVwiKVxyXG5cdGlmIChsaW5rcy5sZW5ndGgpIHJldHVybiBBcnJheS5mcm9tKGxpbmtzKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBbGxHb29nbGVGb250c0xpbmtzKCkge1xyXG5cdGNvbnN0IGxpbmtzID0gZ2V0QWxsR29vZ2xlRm9udExpbmtzKClcclxuXHJcblx0Zm9yIChsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0XHRjb25zdCBsaW5rID0gbGlua3NbaV1cclxuXHRcdGlmIChsaW5rLmhyZWYuaW5jbHVkZXMoJ2dvb2dsZWFwaXMuY29tJykpIHtcclxuXHRcdFx0bGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspXHJcblx0XHR9XHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uIHZhbGlkYXRlSW5wdXRGaWVsZChpbnB1dFZhbHVlLCBtaW4sIG1heCA9IDI0KSB7XHJcblx0aWYgKGlzTmFOKGlucHV0VmFsdWUpKSB7XHJcblx0XHRkaXNwbGF5RXJyb3IoJ0VtcHR5IG9yIGludmFsaWQgaW5wdXQgZmllbGQnKVxyXG5cdFx0cmV0dXJuIGZhbHNlXHJcblx0fSBlbHNlIGlmIChpbnB1dFZhbHVlIDwgbWluIHx8IGlucHV0VmFsdWUgPiBtYXgpIHtcclxuXHRcdGRpc3BsYXlFcnJvcihgTnVtYmVyIG11c3QgYmUgYmV0d2VlbiAke21pbn0gYW5kICR7bWF4fWApXHJcblx0XHRyZXR1cm4gZmFsc2VcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlXHJcbn1cclxuZnVuY3Rpb24gZGlzcGxheUVycm9yKG1lc3NhZ2UpIHtcclxuXHQvLyBSZW1vdmUgYW55IHByZXZpb3VzIGVycm9yIG1lc3NhZ2VzXHJcblx0Y29uc3QgZXhpc3RpbmdFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoLWVycm9yLW1zZycpXHJcblxyXG5cdGlmIChleGlzdGluZ0Vycm9yKSBleGlzdGluZ0Vycm9yLnJlbW92ZSgpXHJcblxyXG5cdC8vIENyZWF0ZSBhbmQgaW5zZXJ0IHRoZSBuZXcgZXJyb3IgbWVzc2FnZVxyXG5cdGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0ZXJyb3JNZXNzYWdlLmNsYXNzTmFtZSA9ICdncHRoLWVycm9yLW1zZyBmaXhlZCByb3VuZGVkLXhsIGJnLXJlZC01MDAgcmVkLTUwMCBwLTMgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlcidcclxuXHRlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBtZXNzYWdlXHJcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpXHJcblxyXG5cdC8vIFJlbW92ZSB0aGUgZXJyb3IgbWVzc2FnZSBhZnRlciA0IHNlY29uZHNcclxuXHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdGVycm9yTWVzc2FnZS5yZW1vdmUoKVxyXG5cdH0sIDQwMDApXHJcbn1cclxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKGlucHV0VmFsLCB0b0ZpeGVkTnVtID0gMikge1xyXG5cdC8vIFJlbW92ZSBsZWFkaW5nIHplcm9zIGZyb20gdGhlIGludGVnZXIgcGFydFxyXG5cdGlucHV0VmFsID0gaW5wdXRWYWwucmVwbGFjZSgvXjArKD89XFxkKlxcLikvLCAnJylcclxuXHQvLyBQYXJzZSB0aGUgaW5wdXQgYXMgYSBudW1iZXIgYW5kIHJldHVybiBpdCB3aXRoIDIgZGVjaW1hbCBwbGFjZXNcclxuXHRsZXQgZm9ybWF0dGVkID0gcGFyc2VGbG9hdChpbnB1dFZhbCkudG9GaXhlZCh0b0ZpeGVkTnVtKVxyXG5cdC8vIFJlbW92ZSB0cmFpbGluZyB6ZXJvcyBmcm9tIHRoZSBkZWNpbWFsIHBhcnRcclxuXHRmb3JtYXR0ZWQgPSBmb3JtYXR0ZWQucmVwbGFjZSgvXFwuPzArJC8sICcnKVxyXG5cdC8vIFJldHVybiB0aGUgZm9ybWF0dGVkIG51bWJlciBhcyBhIHN0cmluZ1xyXG5cdHJldHVybiBmb3JtYXR0ZWRcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlRm9udFNpemUoZSkge1xyXG5cdGNvbnN0IG5ld1ZhbCA9IGZvcm1hdE51bWJlcihlLnRhcmdldC52YWx1ZSlcclxuXHRvbkZvY3VzVmFsRm9udFNpemUgPSBmb3JtYXROdW1iZXIob25Gb2N1c1ZhbEZvbnRTaXplLCA0KVxyXG5cclxuXHRpZiAob25Gb2N1c1ZhbEZvbnRTaXplID09IG5ld1ZhbCkgcmV0dXJuIGNvbnNvbGUubG9nKHsgbmV3U2l6ZTogbmV3VmFsLCBvbkZvY3VzVmFsRm9udFNpemUgfSlcclxuXHJcblx0aWYgKCF2YWxpZGF0ZUlucHV0RmllbGQobmV3VmFsLCBmb250U2l6ZURhdGEubWluLCBmb250U2l6ZURhdGEubWF4KSkge1xyXG5cdFx0Ly8gc2V0SW5wdXRGaWVsZCgnZm9udFNpemUnLCBERUZBVUxUUy5mb250U2l6ZSlcclxuXHRcdC8vIGFwcGx5U2V0dGluZ3MoeyBmb250U2l6ZTogREVGQVVMVFMuZm9udFNpemUgfSlcclxuXHRcdC8vIHNhdmVTZXR0aW5ncyh7IGZvbnRTaXplOiBERUZBVUxUUy5mb250U2l6ZSB9KVxyXG5cdFx0c2V0SW5wdXRGaWVsZCgnZm9udFNpemUnLCBvbkZvY3VzVmFsRm9udFNpemUpXHJcblx0XHRhcHBseVNldHRpbmdzKHsgZm9udFNpemU6IG9uRm9jdXNWYWxGb250U2l6ZSB9KVxyXG5cdFx0c2F2ZVNldHRpbmdzKHsgZm9udFNpemU6IG9uRm9jdXNWYWxGb250U2l6ZSB9KVxyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cclxuXHRhcHBseVNldHRpbmdzKHsgZm9udFNpemU6IG5ld1ZhbCB9KVxyXG5cdHNhdmVTZXR0aW5ncyh7IGZvbnRTaXplOiBuZXdWYWwgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTGluZUhlaWdodChlKSB7XHJcblx0Y29uc3QgbmV3VmFsID0gZm9ybWF0TnVtYmVyKGUudGFyZ2V0LnZhbHVlKVxyXG5cdG9uRm9jdXNWYWxMaW5lSGVpZ2h0ID0gZm9ybWF0TnVtYmVyKG9uRm9jdXNWYWxMaW5lSGVpZ2h0LCA0KVxyXG5cclxuXHRpZiAob25Gb2N1c1ZhbExpbmVIZWlnaHQgPT0gbmV3VmFsKSByZXR1cm4gY29uc29sZS5sb2coeyBuZXdWYWwsIG9uRm9jdXNWYWxMaW5lSGVpZ2h0IH0pXHJcblxyXG5cdGlmICghdmFsaWRhdGVJbnB1dEZpZWxkKG5ld1ZhbCwgbGluZUhlaWdodERhdGEubWluLCBsaW5lSGVpZ2h0RGF0YS5tYXgpKSB7XHJcblx0XHRzZXRJbnB1dEZpZWxkKCdsaW5lSGVpZ2h0Jywgb25Gb2N1c1ZhbExpbmVIZWlnaHQpXHJcblx0XHRhcHBseVNldHRpbmdzKHsgbGluZUhlaWdodDogb25Gb2N1c1ZhbExpbmVIZWlnaHQgfSlcclxuXHRcdHNhdmVTZXR0aW5ncyh7IGxpbmVIZWlnaHQ6IG9uRm9jdXNWYWxMaW5lSGVpZ2h0IH0pXHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblxyXG5cdGFwcGx5U2V0dGluZ3MoeyBsaW5lSGVpZ2h0OiBuZXdWYWwgfSlcclxuXHRzYXZlU2V0dGluZ3MoeyBsaW5lSGVpZ2h0OiBuZXdWYWwgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTGV0dGVyU3BhY2luZyhlKSB7XHJcblx0Y29uc3QgbmV3VmFsID0gZm9ybWF0TnVtYmVyKGUudGFyZ2V0LnZhbHVlKVxyXG5cdG9uRm9jdXNWYWxMZXR0ZXJTcGFjaW5nID0gZm9ybWF0TnVtYmVyKG9uRm9jdXNWYWxMZXR0ZXJTcGFjaW5nLCA0KVxyXG5cclxuXHRpZiAob25Gb2N1c1ZhbExldHRlclNwYWNpbmcgPT0gbmV3VmFsKSByZXR1cm4gY29uc29sZS5sb2coeyBuZXdWYWwsIG9uRm9jdXNWYWxMZXR0ZXJTcGFjaW5nIH0pXHJcblxyXG5cdGlmICghdmFsaWRhdGVJbnB1dEZpZWxkKG5ld1ZhbCwgbGV0dGVyU3BhY2luZ0RhdGEubWluLCBsZXR0ZXJTcGFjaW5nRGF0YS5tYXgpKSB7XHJcblx0XHRzZXRJbnB1dEZpZWxkKCdsZXR0ZXJTcGFjaW5nJywgb25Gb2N1c1ZhbExldHRlclNwYWNpbmcpXHJcblx0XHRhcHBseVNldHRpbmdzKHsgbGV0dGVyU3BhY2luZzogb25Gb2N1c1ZhbExldHRlclNwYWNpbmcgfSlcclxuXHRcdHNhdmVTZXR0aW5ncyh7IGxldHRlclNwYWNpbmc6IG9uRm9jdXNWYWxMZXR0ZXJTcGFjaW5nIH0pXHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblxyXG5cdGFwcGx5U2V0dGluZ3MoeyBsZXR0ZXJTcGFjaW5nOiBuZXdWYWwgfSlcclxuXHRzYXZlU2V0dGluZ3MoeyBsZXR0ZXJTcGFjaW5nOiBuZXdWYWwgfSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2hhbmdlRm9udEZhbWlseShlKSB7XHJcblx0Y29uc3Qgc2VsZWN0ZWRGb250ID0gZS50YXJnZXQudmFsdWVcclxuXHJcblx0Y29uc29sZS5sb2coJ3NlbGVjdEZvbnRGYW1pbHk6ICcsIHNlbGVjdGVkRm9udClcclxuXHJcblx0Ly8gUmVtb3ZlIGFsbCBleGlzdGluZyBHb29nbGUgRm9udHNcclxuXHRyZW1vdmVBbGxHb29nbGVGb250c0xpbmtzKClcclxuXHJcblx0aWYgKHNlbGVjdGVkRm9udCAhPT0gREVGQVVMVFMuZm9udEZhbWlseSkge1xyXG5cdFx0Ly8gTG9hZCB0aGUgbmV3bHkgc2VsZWN0ZWQgR29vZ2xlIEZvbnRcclxuXHRcdGxvYWRHb29nbGVGb250KHNlbGVjdGVkRm9udClcclxuXHRcdGFwcGx5U2V0dGluZ3MoeyBmb250RmFtaWx5OiBzZWxlY3RlZEZvbnQgfSlcclxuXHRcdHRyeSB7XHJcblx0XHRcdGF3YWl0IHNhdmVTZXR0aW5ncyh7IGZvbnRGYW1pbHk6IHNlbGVjdGVkRm9udCB9KVxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNhdmUgZm9udCBmYW1pbHk6JywgZXJyb3IpXHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdC8vIEFwcGx5IGRlZmF1bHQgZm9udCBzZXR0aW5nc1xyXG5cdFx0YXBwbHlTZXR0aW5ncyhERUZBVUxUUylcclxuXHRcdHRyeSB7XHJcblx0XHRcdGF3YWl0IHNhdmVTZXR0aW5ncyhERUZBVUxUUylcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byByZXNldCBmb250IGZhbWlseTonLCBlcnJvcilcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gcmVzZXRGb250cygpIHtcclxuXHRhcHBseVNldHRpbmdzKERFRkFVTFRTKVxyXG5cdHNhdmVTZXR0aW5ncyhERUZBVUxUUylcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZvbnRzTGlzdGVuZXJzKCkge1xyXG5cdGNvbnN0IHNlbGVjdEZvbnRGYW1pbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aC1zZXR0aW5ncyAjZm9udEZhbWlseScpXHJcblx0Y29uc3QgaW5wdXRGb250U2l6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoLXNldHRpbmdzICNmb250U2l6ZScpXHJcblx0Y29uc3QgaW5wdXRMaW5lSGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdwdGgtc2V0dGluZ3MgI2xpbmVIZWlnaHQnKVxyXG5cdGNvbnN0IGlucHV0TGV0dGVyU3BhY2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoLXNldHRpbmdzICNsZXR0ZXJTcGFjaW5nJylcclxuXHRjb25zdCBidG5SZXNldEZvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aC1zZXR0aW5ncyAjcmVzZXRGb250JylcclxuXHJcblx0c2VsZWN0Rm9udEZhbWlseS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VGb250RmFtaWx5KVxyXG5cdGlucHV0Rm9udFNpemUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGNoYW5nZUZvbnRTaXplKVxyXG5cdGlucHV0TGluZUhlaWdodC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgY2hhbmdlTGluZUhlaWdodClcclxuXHRpbnB1dExldHRlclNwYWNpbmcuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGNoYW5nZUxldHRlclNwYWNpbmcpXHJcblxyXG5cdGlucHV0Rm9udFNpemUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZSkgPT4ge1xyXG5cdFx0b25Gb2N1c1ZhbEZvbnRTaXplID0gZS50YXJnZXQudmFsdWVcclxuXHR9KVxyXG5cdGlucHV0TGluZUhlaWdodC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChlKSA9PiB7XHJcblx0XHRvbkZvY3VzVmFsTGluZUhlaWdodCA9IGUudGFyZ2V0LnZhbHVlXHJcblx0fSlcclxuXHRpbnB1dExldHRlclNwYWNpbmcuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZSkgPT4ge1xyXG5cdFx0b25Gb2N1c1ZhbExldHRlclNwYWNpbmcgPSBlLnRhcmdldC52YWx1ZVxyXG5cdH0pXHJcblxyXG5cdGlucHV0Rm9udFNpemUuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG5cdFx0aWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRjaGFuZ2VGb250U2l6ZShlKVxyXG5cdFx0XHRlLnRhcmdldC5ibHVyKClcclxuXHRcdH1cclxuXHR9KVxyXG5cdGlucHV0TGluZUhlaWdodC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcblx0XHRpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdGNoYW5nZUxpbmVIZWlnaHQoZSlcclxuXHRcdFx0ZS50YXJnZXQuYmx1cigpXHJcblx0XHR9XHJcblx0fSlcclxuXHRpbnB1dExldHRlclNwYWNpbmcuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG5cdFx0aWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRjaGFuZ2VMZXR0ZXJTcGFjaW5nKGUpXHJcblx0XHRcdGUudGFyZ2V0LmJsdXIoKVxyXG5cdFx0fVxyXG5cdH0pXHJcblxyXG5cdGJ0blJlc2V0Rm9udC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0Rm9udHMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcblx0Ly8gTG9hZCBzZXR0aW5ncyBvbiBwYWdlIGxvYWRcclxuXHRsb2FkU2V0dGluZ3MoKVxyXG59XHJcbmluaXQoKVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyRm9udFNtYWxsQ2FyZCh7XHJcblx0bmFtZSxcclxuXHRjbGFzc05hbWUsXHJcblx0aW5wdXRJZCxcclxuXHRpbnB1dFR5cGUsXHJcblx0aW5wdXRWYWx1ZSxcclxuXHRpbnB1dFBsYWNlaG9sZGVyLFxyXG5cdG1pbiA9IDE2LFxyXG5cdG1heCA9IDI0LFxyXG5cdHVuaXQgPSAncHgnLFxyXG59KSB7XHJcblx0cmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiJHtjbGFzc05hbWV9IGNhcmQgY2FyZC0tc21hbGxcIiBkYXRhLWdwdGgtZXJyPVwiJHttaW59JHt1bml0fSAmaEFycjsgJHttYXh9JHt1bml0fVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiJHtpbnB1dElkfVwiIGNsYXNzPVwicm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGgtZnVsbCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiJHtpbnB1dFR5cGV9XCIgaWQ9XCIke2lucHV0SWR9XCIgdmFsdWU9XCIke2lucHV0VmFsdWV9XCIgcGxhY2Vob2xkZXI9XCIke2lucHV0UGxhY2Vob2xkZXJ9XCIgY2xhc3M9XCJyb3VuZGVkLWZ1bGwgb3V0bGluZS1ub25lIGJvcmRlci1ub25lIGZvbnQtYm9sZFwiIG1pbmxlbmd0aD1cIiR7bWlufVwiIG1heGxlbmd0aD1cIiR7bWF4fVwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX191bml0bmFtZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX191bml0IHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPnBpeGVsczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX25hbWUgdXBwZXJjYXNlIGZvbnQtc2VtaWJvbGRcIj4ke25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+YFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRm9udEJpZ0NhcmQoe1xyXG5cdG5hbWUsXHJcblx0Y2xhc3NOYW1lLFxyXG5cdGlucHV0SWQsXHJcblx0aW5wdXRUeXBlLFxyXG5cdGlucHV0VmFsdWUsXHJcblx0aW5wdXRQbGFjZWhvbGRlcixcclxuXHRtaW4gPSAwLFxyXG5cdG1heCA9IDIwLFxyXG5cdHVuaXQgPSAncHgnLFxyXG59KSB7XHJcblx0cmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiJHtjbGFzc05hbWV9IGZvbnRzX19ncm91cCBjYXJkIGNhcmQtLWJpZyBoLWZ1bGxcIiBkYXRhLWdwdGgtZXJyPVwiJHttaW59JHt1bml0fSAmaEFycjsgJHttYXh9JHt1bml0fVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiJHtpbnB1dElkfVwiIGNsYXNzPVwiZ3JpZCBnYXAtMSBoLWZ1bGwgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZF9fdW5pdCBjYXJkX19pY29uXCI+UFg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX19uYW1lIHVwcGVyY2FzZSBmb250LXNlbWlib2xkXCI+JHtuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiJHtpbnB1dFR5cGV9XCIgaWQ9XCIke2lucHV0SWR9XCIgdmFsdWU9XCIke2lucHV0VmFsdWV9XCIgcGxhY2Vob2xkZXI9XCIke2lucHV0UGxhY2Vob2xkZXJ9XCIgY2xhc3M9XCJvdXRsaW5lLW5vbmUgYm9yZGVyLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ub25lIGZvbnQtYm9sZFwiIG1pbmxlbmd0aD1cIiR7bWlufVwiIG1heGxlbmd0aD1cIiR7bWF4fVwiPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PmBcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckZvbnRTZWxlY3QoKSB7XHJcbi8vIFx0cmV0dXJuIGBcclxuLy8gICAgICAgICA8c2VsZWN0IGlkPVwiZm9udEZhbWlseVwiIGNsYXNzPVwiYm9yZGVyLW5vbmUgb3V0bGluZS1ub25lIGZvY3VzOm5vbmUgZm9udC1ib2xkXCI+XHJcbi8vICAgICAgICAgICAgICR7Rk9OVF9OQU1FUy5tYXAoXHJcbi8vIFx0XHRcdFx0KG5hbWUpID0+IGA8b3B0aW9uIHZhbHVlPVwiJHtuYW1lID09PSAnRGVmYXVsdCcgPyBERUZBVUxUUy5mb250RmFtaWx5IDogbmFtZX1cIj4ke25hbWV9PC9vcHRpb24+YFxyXG4vLyBcdFx0XHQpLmpvaW4oJycpfVxyXG4vLyAgICAgICAgIDwvc2VsZWN0PlxyXG4vLyAgICAgYFxyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQnV0dG9uKHsgbmFtZSwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgZGlzYWJsZWQgPSBmYWxzZSB9KSB7XHJcblx0cmV0dXJuIGBcclxuICAgICAgICA8YnV0dG9uIGlkPVwiJHtpZH1cIiBjbGFzcz1cImJ0biBibG9jayByZWxhdGl2ZSB0ZXh0LWNlbnRlciAke2NsYXNzTmFtZX1cIiAke2Rpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICcnfT5cclxuICAgICAgICAgICAgJHtjb250ZW50fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cdGBcclxufVxyXG4iXSwibmFtZXMiOlsiZ2xvYmFsVGhpcyIsImNocm9tZSIsInJ1bnRpbWUiLCJpZCIsIkVycm9yIiwiYnJvd3NlciIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFIiwid3JhcEFQSXMiLCJleHRlbnNpb25BUElzIiwiYXBpTWV0YWRhdGEiLCJrZXlzIiwibGVuZ3RoIiwiRGVmYXVsdFdlYWtNYXAiLCJXZWFrTWFwIiwiY29uc3RydWN0b3IiLCJjcmVhdGVJdGVtIiwiaXRlbXMiLCJ1bmRlZmluZWQiLCJnZXQiLCJrZXkiLCJoYXMiLCJzZXQiLCJpc1RoZW5hYmxlIiwidmFsdWUiLCJ0aGVuIiwibWFrZUNhbGxiYWNrIiwicHJvbWlzZSIsIm1ldGFkYXRhIiwiY2FsbGJhY2tBcmdzIiwibGFzdEVycm9yIiwicmVqZWN0IiwibWVzc2FnZSIsInNpbmdsZUNhbGxiYWNrQXJnIiwicmVzb2x2ZSIsInBsdXJhbGl6ZUFyZ3VtZW50cyIsIm51bUFyZ3MiLCJ3cmFwQXN5bmNGdW5jdGlvbiIsIm5hbWUiLCJhc3luY0Z1bmN0aW9uV3JhcHBlciIsInRhcmdldCIsImFyZ3MiLCJtaW5BcmdzIiwibWF4QXJncyIsIlByb21pc2UiLCJmYWxsYmFja1RvTm9DYWxsYmFjayIsImNiRXJyb3IiLCJjb25zb2xlIiwid2FybiIsIm5vQ2FsbGJhY2siLCJ3cmFwTWV0aG9kIiwibWV0aG9kIiwid3JhcHBlciIsIlByb3h5IiwiYXBwbHkiLCJ0YXJnZXRNZXRob2QiLCJ0aGlzT2JqIiwiY2FsbCIsImhhc093blByb3BlcnR5IiwiRnVuY3Rpb24iLCJiaW5kIiwid3JhcE9iamVjdCIsIndyYXBwZXJzIiwiY2FjaGUiLCJjcmVhdGUiLCJoYW5kbGVycyIsInByb3h5VGFyZ2V0IiwicHJvcCIsInJlY2VpdmVyIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZGVzYyIsIlJlZmxlY3QiLCJkZWxldGVQcm9wZXJ0eSIsIndyYXBFdmVudCIsIndyYXBwZXJNYXAiLCJhZGRMaXN0ZW5lciIsImxpc3RlbmVyIiwiaGFzTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsIm9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMiLCJvblJlcXVlc3RGaW5pc2hlZCIsInJlcSIsIndyYXBwZWRSZXEiLCJnZXRDb250ZW50Iiwib25NZXNzYWdlV3JhcHBlcnMiLCJvbk1lc3NhZ2UiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJkaWRDYWxsU2VuZFJlc3BvbnNlIiwid3JhcHBlZFNlbmRSZXNwb25zZSIsInNlbmRSZXNwb25zZVByb21pc2UiLCJyZXNwb25zZSIsInJlc3VsdCIsImVyciIsImlzUmVzdWx0VGhlbmFibGUiLCJzZW5kUHJvbWlzZWRSZXN1bHQiLCJtc2ciLCJlcnJvciIsIl9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXyIsImNhdGNoIiwid3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2siLCJyZXBseSIsIndyYXBwZWRTZW5kTWVzc2FnZSIsImFwaU5hbWVzcGFjZU9iaiIsIndyYXBwZWRDYiIsInB1c2giLCJzZW5kTWVzc2FnZSIsInN0YXRpY1dyYXBwZXJzIiwiZGV2dG9vbHMiLCJuZXR3b3JrIiwib25NZXNzYWdlRXh0ZXJuYWwiLCJ0YWJzIiwic2V0dGluZ01ldGFkYXRhIiwiY2xlYXIiLCJwcml2YWN5Iiwic2VydmljZXMiLCJ3ZWJzaXRlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwidmVyc2lvbiI6MywiZmlsZSI6ImNvbnRlbnQuMTI3MzA2NDcuanMubWFwIn0=
