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
// Function to handle font listeners
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
// Function to set input field values
function setInputField(inputSelector, inputVal) {
    const inputEl = document.querySelector(`.gpth-settings #${inputSelector}`);
    inputEl.value = inputVal === "Default" ? DEFAULTS[inputSelector] : inputVal;
}
// Function to apply settings
function applySettings(settings) {
    Object.entries(settings).forEach(([key, value])=>{
        document.documentElement.style.setProperty(`--${key}`, value);
        setInputField(key, value);
        console.log("getComputedStyle: ", getComputedStyle(document.documentElement).getPropertyValue(`--${key}`));
    });
}
// Function to save settings to Chrome Storage
async function saveSettings(settings) {
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
        if (settings.fontFamily && settings.fontFamily !== DEFAULTS.fontFamily) loadGoogleFont(settings.fontFamily);
        applySettings(settings);
    } catch (error) {
        console.error("Failed to load settings:", error);
    }
}
// Function to dynamically load Google Fonts
function loadGoogleFont(fontFamily) {
    const href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(" ", "+")}${GOOGLE_FONT_WEIGHTS}&display=swap`;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
}
// Function to get all Google Font links
function getAllHeadLinks() {
    return Array.from(document.querySelectorAll("link[rel='stylesheet']"));
}
// Function to remove all Google Font links
function removeAllGoogleFontsLinks() {
    const links = getAllHeadLinks();
    links.forEach((link)=>{
        if (link.href.includes("googleapis.com")) link.remove();
    });
}
// Function to validate input fields
function validateInputField(inputValue, min, max = 24) {
    if (isNaN(inputValue)) {
        displayError("Empty or invalid value");
        return false;
    } else if (inputValue < min || inputValue > max) {
        displayError(`Number must be between ${min} and ${max}`);
        return false;
    }
    return true;
}
// Function to display error messages
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
// Function to format numbers
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
// Function to handle font size change
function changeFontSize(e) {
    const newVal = formatNumber(e.target.value);
    onFocusValFontSize = formatNumber(onFocusValFontSize, 4);
    if (onFocusValFontSize === newVal) return;
    if (!validateInputField(newVal, fontSizeData.min, fontSizeData.max)) {
        setInputField("fontSize", onFocusValFontSize);
        applySettings({
            fontSize: onFocusValFontSize
        });
        saveSettings({
            fontSize: onFocusValFontSize
        });
        // setInputField('fontSize', DEFAULTS.fontSize)
        // applySettings({ fontSize: DEFAULTS.fontSize })
        // saveSettings({ fontSize: DEFAULTS.fontSize })
        return;
    }
    applySettings({
        fontSize: newVal
    });
    saveSettings({
        fontSize: newVal
    });
}
// Function to handle line height change
function changeLineHeight(e) {
    const newVal = formatNumber(e.target.value);
    onFocusValLineHeight = formatNumber(onFocusValLineHeight, 4);
    if (onFocusValLineHeight === newVal) return;
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
// Function to handle letter spacing change
function changeLetterSpacing(e) {
    const newVal = formatNumber(e.target.value);
    onFocusValLetterSpacing = formatNumber(onFocusValLetterSpacing, 4);
    if (onFocusValLetterSpacing === newVal) return;
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
// Function to handle font family change
async function changeFontFamily(e) {
    const selectedFont = e.target.value;
    // Remove all existing Google Fonts links
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
// Function to reset fonts to default
function resetFonts() {
    applySettings(DEFAULTS);
    saveSettings(DEFAULTS);
}
function handleFontsListeners() {
    const selectors = {
        selectFontFamily: document.querySelector(".gpth-settings #fontFamily"),
        inputFontSize: document.querySelector(".gpth-settings #fontSize"),
        inputLineHeight: document.querySelector(".gpth-settings #lineHeight"),
        inputLetterSpacing: document.querySelector(".gpth-settings #letterSpacing"),
        btnResetFont: document.querySelector(".gpth-settings #resetFont")
    };
    selectors.selectFontFamily.addEventListener("change", changeFontFamily);
    selectors.inputFontSize.addEventListener("blur", changeFontSize);
    selectors.inputLineHeight.addEventListener("blur", changeLineHeight);
    selectors.inputLetterSpacing.addEventListener("blur", changeLetterSpacing);
    selectors.inputFontSize.addEventListener("focus", (e)=>{
        onFocusValFontSize = e.target.value;
    });
    selectors.inputLineHeight.addEventListener("focus", (e)=>{
        onFocusValLineHeight = e.target.value;
    });
    selectors.inputLetterSpacing.addEventListener("focus", (e)=>{
        onFocusValLetterSpacing = e.target.value;
    });
    selectors.inputFontSize.addEventListener("keypress", (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            changeFontSize(e);
            e.target.blur();
        }
    });
    selectors.inputLineHeight.addEventListener("keypress", (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            changeLineHeight(e);
            e.target.blur();
        }
    });
    selectors.inputLetterSpacing.addEventListener("keypress", (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            changeLetterSpacing(e);
            e.target.blur();
        }
    });
    selectors.btnResetFont.addEventListener("click", resetFonts);
}
// Function to initialize the settings
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
// export function renderFontCard({ data, cardType = 'small', includeFields = [] }) {
// 	const { name, className, inputId, inputType, inputValue, inputPlaceholder, min = 0, max = 24, unit = 'px' } = data
// 	let cardHtml
// 	if (cardType === 'small') {
// 		cardHtml = `
// 			<div class="${className} card card--small" data-gpth-err="${min}${unit} &hArr; ${max}${unit}">
// 				<label for="${inputId}" class="rounded-full flex items-center gap-2 h-full w-full">
// 					${
// 						includeFields.includes('input')
// 							? `<input type="${inputType}" id="${inputId}" value="${inputValue}" placeholder="${inputPlaceholder}" class="rounded-full outline-none border-none font-bold" minlength="${min}" maxlength="${max}">`
// 							: ''
// 					}
// 					<div class="card__unitname-wrapper">
// 					<p class="card__unit rounded-full flex items-center justify-center">${unit}</p>
// 					<p class="card__name uppercase font-semibold">${name}</p>
// 					</div>
// 				</label>
// 			</div>
// 		`
// 	} else if (cardType === 'big') {
// 		cardHtml = `
// 			<div class="${className} fonts__group card card--big h-full" data-gpth-err="${min}${unit} &hArr; ${max}${unit}">
// 				<label for="${inputId}" class="grid gap-1 h-full w-full">
// 					<div>
// 						<p class="card__unit card__icon">${unit.toUpperCase()}</p>
// 						<p class="card__name uppercase font-semibold">${name}</p>
// 					</div>
// 					${
// 						includeFields.includes('input')
// 							? `<input type="${inputType}" id="${inputId}" value="${inputValue}" placeholder="${inputPlaceholder}" class="outline-none border-none focus:outline-none focus:border-none font-bold" minlength="${min}" maxlength="${max}">`
// 							: ''
// 					}
// 				</label>
// 			</div>
// 		`
// 	} else {
// 		throw new Error('Invalid card type specified.')
// 	}
// 	return cardHtml
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLFdBQVc7QUFBWSxJQUFJLFdBQVc7QUFBSyxJQUFJLGFBQWE7QUFBTSxJQUFJLGVBQWU7QUFBbUIsSUFBSSxjQUFjO0FBQU0sT0FBTyxNQUFNLENBQUMsYUFBYSxHQUFHO0FBQW1CO0FBRXJMLDhKQUE4SixHQUM5Sjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDQSxHQUNBLElBQUksYUFBYTtBQUNqQixJQUFJLFlBQVksT0FBTyxNQUFNLENBQUMsTUFBTTtBQUNwQyxTQUFTLE9BQU8sVUFBVTtJQUN4QixVQUFVLElBQUksQ0FBQyxJQUFJLEVBQUU7SUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRztRQUNULE1BQU0sT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDdkMsa0JBQWtCLEVBQUU7UUFDcEIsbUJBQW1CLEVBQUU7UUFDckIsUUFBUSxTQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLFlBQWE7UUFDaEQ7UUFDQSxTQUFTLFNBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1FBQzlCO0lBQ0Y7SUFDQSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHO0FBQ3RDO0FBQ0EsT0FBTyxNQUFNLENBQUMsTUFBTSxHQUFHO0FBQ3ZCLE9BQU8sTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDO0FBQ3pCLElBQUksY0FBYywwQkFBMEIsS0FBSSxnQkFBZ0IsbUNBQW1DLEtBQUksZUFBZSxtQ0FBbUM7QUFFekosU0FBUztJQUNQLE9BQU8sWUFBYSxDQUFBLFNBQVMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksU0FBUyxRQUFRLEdBQUcsV0FBVTtBQUM5RjtBQUNBLFNBQVM7SUFDUCxPQUFPLFlBQVksU0FBUyxJQUFJO0FBQ2xDO0FBRUEsd0NBQXdDO0FBQ3hDLElBQUksU0FBUyxPQUFPLE1BQU0sQ0FBQyxNQUFNO0FBQ2pDLElBQUksQUFBQyxDQUFBLENBQUMsVUFBVSxDQUFDLE9BQU8sZUFBZSxBQUFELEtBQU0sT0FBTyxjQUFjLGFBQWE7SUFDNUUsSUFBSSxXQUFXO0lBQ2YsSUFBSSxPQUFPO0lBQ1gsSUFBSSxXQUFXLGNBQWMsU0FBUyxRQUFRLElBQUksWUFBWSxDQUFDO1FBQUM7UUFBYTtRQUFhO0tBQVUsQ0FBQyxRQUFRLENBQUMsWUFBWSxRQUFRO0lBQ2xJLElBQUk7SUFDSixJQUFJLGFBQ0YsS0FBSyxJQUFJLFlBQVk7U0FFckIsSUFBSTtRQUNGLEtBQUssSUFBSSxVQUFVLFdBQVcsUUFBUSxXQUFZLENBQUEsT0FBTyxNQUFNLE9BQU8sRUFBQyxJQUFLO0lBQzlFLEVBQUUsT0FBTyxLQUFLO1FBQ1osSUFBSSxJQUFJLE9BQU8sRUFDYixRQUFRLEtBQUssQ0FBQyxJQUFJLE9BQU87UUFFM0IsS0FBSyxDQUFDO0lBQ1I7SUFHRix3QkFBd0I7SUFDeEIsSUFBSSxTQUFTLE9BQU8sWUFBWSxjQUFjLE9BQU8sV0FBVyxjQUFjLE9BQU8sU0FBUztJQUU5RixvREFBb0Q7SUFDcEQsMERBQTBEO0lBQzFELElBQUksb0JBQW9CO0lBQ3hCLElBQUk7UUFDRCxDQUFBLEdBQUcsSUFBRyxFQUFHO0lBQ1osRUFBRSxPQUFPLEtBQUs7UUFDWixvQkFBb0IsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ3pDO0lBRUEsYUFBYTtJQUNiLEdBQUcsU0FBUyxHQUFHLGVBQWdCLE1BQU0sd0JBQXdCLEdBQXpCO1FBQ2xDLGdCQUFnQixDQUFDLEVBQUUsMEJBQTBCO1FBQzdDLGlCQUFpQixFQUFFO1FBQ25CLGtCQUFrQixFQUFFO1FBQ3BCLElBQUksS0FBSyxlQUFlLE1BQUssS0FBSyxLQUFLLENBQUMsTUFBTSxJQUFJO1FBQ2xELElBQUksS0FBSyxJQUFJLEtBQUssVUFBVTtZQUMxQix1Q0FBdUM7WUFDdkMsSUFBSSxPQUFPLGFBQWEsYUFDdEI7WUFFRixJQUFJLFNBQVMsS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUEsUUFBUyxNQUFNLE9BQU8sS0FBSztZQUUzRCxvQkFBb0I7WUFDcEIsSUFBSSxVQUFVLE9BQU8sS0FBSyxDQUFDLENBQUE7Z0JBQ3pCLE9BQU8sTUFBTSxJQUFJLEtBQUssU0FBUyxNQUFNLElBQUksS0FBSyxRQUFRLGVBQWUsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sWUFBWTtZQUN2SDtZQUNBLElBQUksU0FBUztnQkFDWCxRQUFRLEtBQUs7Z0JBRWIseUVBQXlFO2dCQUN6RSxJQUFJLE9BQU8sV0FBVyxlQUFlLE9BQU8sZ0JBQWdCLGFBQzFELE9BQU8sYUFBYSxDQUFDLElBQUksWUFBWTtnQkFFdkMsTUFBTSxnQkFBZ0I7Z0JBRXRCLDBCQUEwQjtnQkFDMUIsSUFBSSxrQkFBa0IsQ0FBQyxFQUFFLDBCQUEwQjtnQkFDbkQsSUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLGdCQUFnQixNQUFNLEVBQUUsSUFBSztvQkFDL0MsSUFBSSxLQUFLLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUU7d0JBQ3hCLFdBQVcsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ2xDLGVBQWUsQ0FBQyxHQUFHLEdBQUc7b0JBQ3hCO2dCQUNGO2dCQUVBLDhGQUE4RjtnQkFDOUYsa0JBQWtCLENBQUM7Z0JBQ25CLElBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxlQUFlLE1BQU0sRUFBRSxJQUFLO29CQUM5QyxJQUFJLEtBQUssY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRTt3QkFDeEIsVUFBVSxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDaEMsZUFBZSxDQUFDLEdBQUcsR0FBRztvQkFDeEI7Z0JBQ0Y7WUFDRixPQUFPO1FBQ1Q7UUFDQSxJQUFJLEtBQUssSUFBSSxLQUFLLFNBQVM7WUFDekIsK0JBQStCO1lBQy9CLEtBQUssSUFBSSxrQkFBa0IsS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFFO2dCQUNoRCxJQUFJLFFBQVEsZUFBZSxTQUFTLEdBQUcsZUFBZSxTQUFTLEdBQUcsZUFBZSxLQUFLO2dCQUN0RixRQUFRLEtBQUssQ0FBQyw0QkFBa0IsZUFBZSxPQUFPLEdBQUcsT0FBTyxRQUFRLFNBQVMsZUFBZSxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzdHO1lBQ0EsSUFBSSxPQUFPLGFBQWEsYUFBYTtnQkFDbkMsZ0NBQWdDO2dCQUNoQztnQkFDQSxJQUFJLFVBQVUsbUJBQW1CLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3RELGFBQWE7Z0JBQ2IsU0FBUyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzVCO1FBQ0Y7SUFDRjtJQUNBLElBQUksY0FBYyxXQUFXO1FBQzNCLEdBQUcsT0FBTyxHQUFHLFNBQVUsQ0FBQztZQUN0QixJQUFJLEVBQUUsT0FBTyxFQUNYLFFBQVEsS0FBSyxDQUFDLEVBQUUsT0FBTztRQUUzQjtRQUNBLEdBQUcsT0FBTyxHQUFHO1lBQ1gsUUFBUSxJQUFJLENBQUM7UUFDZjtJQUNGO0FBQ0Y7QUFDQSxTQUFTO0lBQ1AsSUFBSSxVQUFVLFNBQVMsY0FBYyxDQUFDO0lBQ3RDLElBQUksU0FBUztRQUNYLFFBQVEsTUFBTTtRQUNkLFFBQVEsR0FBRyxDQUFDO0lBQ2Q7QUFDRjtBQUNBLFNBQVMsbUJBQW1CLFdBQVc7SUFDckMsSUFBSSxVQUFVLFNBQVMsYUFBYSxDQUFDO0lBQ3JDLFFBQVEsRUFBRSxHQUFHO0lBQ2IsSUFBSSxZQUFZO0lBQ2hCLEtBQUssSUFBSSxjQUFjLFlBQWE7UUFDbEMsSUFBSSxRQUFRLFdBQVcsTUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHO1lBQ2xFLE9BQU8sQ0FBQyxFQUFFLEVBQUU7c0NBQ29CLEVBQUUsbUJBQW1CLE1BQU0sUUFBUSxFQUFFLDJGQUEyRixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3ZMLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNWLEdBQUcsTUFBTSxXQUFXLEtBQUs7UUFDekIsYUFBYSxDQUFDOzs7b0JBR0wsRUFBRSxXQUFXLE9BQU8sQ0FBQzs7YUFFckIsRUFBRSxNQUFNOztVQUVYLEVBQUUsV0FBVyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUEsT0FBUSx1QkFBYSxPQUFPLFVBQVUsSUFBSSxDQUFDLElBQUk7O1FBRXhFLEVBQUUsV0FBVyxhQUFhLEdBQUcsQ0FBQyw4Q0FBdUMsRUFBRSxXQUFXLGFBQWEsQ0FBQyxzQ0FBc0MsQ0FBQyxHQUFHLEdBQUc7O0lBRWpKLENBQUM7SUFDSDtJQUNBLGFBQWE7SUFDYixRQUFRLFNBQVMsR0FBRztJQUNwQixPQUFPO0FBQ1Q7QUFDQSxTQUFTO0lBQ1AsSUFBSSxZQUFZLFVBQ2QsU0FBUyxNQUFNO1NBQ1YsSUFBSSxVQUFVLE9BQU8sT0FBTyxJQUFJLE9BQU8sT0FBTyxDQUFDLE1BQU0sRUFDMUQsT0FBTyxPQUFPLENBQUMsTUFBTTtBQUV6QjtBQUNBLFNBQVMsV0FBVyxNQUFNLEVBQUUsRUFBRSxFQUFFLG1DQUFtQztJQUNqRSxJQUFJLFVBQVUsT0FBTyxPQUFPO0lBQzVCLElBQUksQ0FBQyxTQUNILE9BQU8sRUFBRTtJQUVYLElBQUksVUFBVSxFQUFFO0lBQ2hCLElBQUksR0FBRyxHQUFHO0lBQ1YsSUFBSyxLQUFLLFFBQ1IsSUFBSyxLQUFLLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFFO1FBQ3ZCLE1BQU0sT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUN0QixJQUFJLFFBQVEsTUFBTSxNQUFNLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLE1BQU0sR0FBRyxFQUFFLEtBQUssSUFDOUQsUUFBUSxJQUFJLENBQUM7WUFBQztZQUFRO1NBQUU7SUFFNUI7SUFFRixJQUFJLE9BQU8sTUFBTSxFQUNmLFVBQVUsUUFBUSxNQUFNLENBQUMsV0FBVyxPQUFPLE1BQU0sRUFBRTtJQUVyRCxPQUFPO0FBQ1Q7QUFDQSxTQUFTLFdBQVcsSUFBSTtJQUN0QixJQUFJLE9BQU8sS0FBSyxZQUFZLENBQUM7SUFDN0IsSUFBSSxDQUFDLE1BQ0g7SUFFRixJQUFJLFVBQVUsS0FBSyxTQUFTO0lBQzVCLFFBQVEsTUFBTSxHQUFHO1FBQ2YsSUFBSSxLQUFLLFVBQVUsS0FBSyxNQUN0QixhQUFhO1FBQ2IsS0FBSyxVQUFVLENBQUMsV0FBVyxDQUFDO0lBRWhDO0lBQ0EsUUFBUSxZQUFZLENBQUMsUUFDckIsYUFBYTtJQUNiLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxLQUFLLEdBQUc7SUFDbkMsYUFBYTtJQUNiLEtBQUssVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLEtBQUssV0FBVztBQUN4RDtBQUNBLElBQUksYUFBYTtBQUNqQixTQUFTO0lBQ1AsSUFBSSxZQUNGO0lBRUYsYUFBYSxXQUFXO1FBQ3RCLElBQUksUUFBUSxTQUFTLGdCQUFnQixDQUFDO1FBQ3RDLElBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLE1BQU0sRUFBRSxJQUFLO1lBQ3JDLGdDQUFnQztZQUNoQyxJQUFJLEtBQUssV0FBVyxNQUFLLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQy9DLElBQUksV0FBVztZQUNmLElBQUksc0JBQXNCLGFBQWEsY0FBYyxJQUFJLE9BQU8sbURBQW1ELFdBQVcsSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUMsV0FBVyxNQUFNO1lBQ3pLLElBQUksV0FBVyxnQkFBZ0IsSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsU0FBUyxNQUFNLE1BQU0sS0FBSyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxVQUNILFdBQVcsS0FBSyxDQUFDLEVBQUU7UUFFdkI7UUFDQSxhQUFhO0lBQ2YsR0FBRztBQUNMO0FBQ0EsU0FBUyxZQUFZLEtBQUs7SUFDeEIsSUFBSSxNQUFNLElBQUksS0FBSyxNQUFNO1FBQ3ZCLElBQUksT0FBTyxhQUFhLGFBQWE7WUFDbkMsSUFBSSxTQUFTLFNBQVMsYUFBYSxDQUFDO1lBQ3BDLE9BQU8sR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLFFBQVEsS0FBSyxHQUFHO1lBQ3pDLElBQUksTUFBTSxZQUFZLEtBQUssWUFDekIsT0FBTyxJQUFJLEdBQUc7WUFFaEIsT0FBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTO2dCQUMzQixJQUFJO2dCQUNKLE9BQU8sTUFBTSxHQUFHLElBQU0sUUFBUTtnQkFDOUIsT0FBTyxPQUFPLEdBQUc7Z0JBQ2hCLENBQUEsaUJBQWlCLFNBQVMsSUFBSSxBQUFELE1BQU8sUUFBUSxtQkFBbUIsS0FBSyxLQUFLLGVBQWUsV0FBVyxDQUFDO1lBQ3ZHO1FBQ0YsT0FBTyxJQUFJLE9BQU8sa0JBQWtCLFlBQVk7WUFDOUMsaUJBQWlCO1lBQ2pCLElBQUksTUFBTSxZQUFZLEtBQUssWUFDekIsT0FBTyxPQUFtQixNQUFNLEdBQUcsR0FBRyxRQUFRLEtBQUssR0FBRztpQkFFdEQsT0FBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTO2dCQUMzQixJQUFJO29CQUNGLGNBQTBCLE1BQU0sR0FBRyxHQUFHLFFBQVEsS0FBSyxHQUFHO29CQUN0RDtnQkFDRixFQUFFLE9BQU8sS0FBSztvQkFDWixPQUFPO2dCQUNUO1lBQ0Y7UUFFSjtJQUNGO0FBQ0Y7QUFDQSxlQUFlLGdCQUFnQixNQUFNO0lBQ25DLE9BQU8sZUFBZSxHQUFHLE9BQU8sTUFBTSxDQUFDO0lBQ3ZDLElBQUk7SUFDSixJQUFJO1FBQ0Ysa0VBQWtFO1FBQ2xFLGdFQUFnRTtRQUNoRSxnRUFBZ0U7UUFDaEUsbURBQW1EO1FBQ25ELGlEQUFpRDtRQUNqRCxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLG1CQUFtQjtZQUN0QixJQUFJLFdBQVcsT0FBTyxHQUFHLENBQUMsQ0FBQTtnQkFDeEIsSUFBSTtnQkFDSixPQUFPLEFBQUMsQ0FBQSxlQUFlLFlBQVksTUFBSyxNQUFPLFFBQVEsaUJBQWlCLEtBQUssSUFBSSxLQUFLLElBQUksYUFBYSxLQUFLLENBQUMsQ0FBQTtvQkFDM0csb0JBQW9CO29CQUNwQixJQUFJLFVBQVUsT0FBTyxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsV0FBVyxHQUFHLGdCQUFnQixJQUFJLEtBQUssT0FBTyw0QkFBNEIsZUFBZSxrQkFBa0IsMEJBQTBCO3dCQUNsTCxPQUFPLE9BQU8sQ0FBQyxNQUFNO3dCQUNyQjtvQkFDRjtvQkFDQSxNQUFNO2dCQUNSO1lBQ0Y7WUFDQSxrQkFBa0IsTUFBTSxRQUFRLEdBQUcsQ0FBQztRQUN0QztRQUNBLE9BQU8sT0FBTyxDQUFDLFNBQVUsS0FBSztZQUM1QixTQUFTLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRTtRQUMvQjtJQUNGLFNBQVU7UUFDUixPQUFPLE9BQU8sZUFBZTtRQUM3QixJQUFJLGlCQUNGLGdCQUFnQixPQUFPLENBQUMsQ0FBQTtZQUN0QixJQUFJLFFBQVE7Z0JBQ1YsSUFBSTtnQkFDSCxDQUFBLGtCQUFrQixTQUFTLElBQUksQUFBRCxNQUFPLFFBQVEsb0JBQW9CLEtBQUssS0FBSyxnQkFBZ0IsV0FBVyxDQUFDO1lBQzFHO1FBQ0Y7SUFFSjtBQUNGO0FBQ0EsU0FBUyxTQUFTLE9BQU8sa0JBQWtCLEdBQW5CLEVBQXVCLE1BQU0sY0FBYyxHQUFmO0lBQ2xELElBQUksVUFBVSxPQUFPLE9BQU87SUFDNUIsSUFBSSxDQUFDLFNBQ0g7SUFFRixJQUFJLE1BQU0sSUFBSSxLQUFLLE9BQ2pCO1NBQ0ssSUFBSSxNQUFNLElBQUksS0FBSyxNQUFNO1FBQzlCLElBQUksT0FBTyxNQUFNLFlBQVksQ0FBQyxPQUFPLGFBQWEsQ0FBQztRQUNuRCxJQUFJLE1BQU07WUFDUixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO2dCQUNyQixpRUFBaUU7Z0JBQ2pFLG9IQUFvSDtnQkFDcEgsSUFBSSxVQUFVLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xDLElBQUssSUFBSSxPQUFPLFFBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsSUFBSSxFQUFFO29CQUM1QyxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUk7b0JBQ3JCLElBQUksVUFBVSxXQUFXLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRTtvQkFDN0MsSUFBSSxRQUFRLE1BQU0sS0FBSyxHQUNyQixVQUFVLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRTtnQkFFbEM7WUFFSjtZQUNBLElBQUksbUJBR0YsQUFGQSw0REFBNEQ7WUFDNUQsK0NBQStDO1lBQzlDLENBQUEsR0FBRyxJQUFHLEVBQUcsTUFBTSxNQUFNO1lBR3hCLGFBQWE7WUFDYixJQUFJLEtBQUssT0FBTyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDekMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUc7Z0JBQUM7Z0JBQUk7YUFBSztRQUNoQyxPQUFPLElBQUksT0FBTyxNQUFNLEVBQ3RCLFNBQVMsT0FBTyxNQUFNLEVBQUU7SUFFNUI7QUFDRjtBQUNBLFNBQVMsVUFBVSxNQUFNLEVBQUUsRUFBRTtJQUMzQixJQUFJLFVBQVUsT0FBTyxPQUFPO0lBQzVCLElBQUksQ0FBQyxTQUNIO0lBRUYsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO1FBQ2YsOEVBQThFO1FBQzlFLElBQUksT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDekIsSUFBSSxVQUFVLEVBQUU7UUFDaEIsSUFBSyxJQUFJLE9BQU8sS0FBTTtZQUNwQixJQUFJLFVBQVUsV0FBVyxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDdEQsSUFBSSxRQUFRLE1BQU0sS0FBSyxHQUNyQixRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtRQUUxQjtRQUVBLHNHQUFzRztRQUN0RyxPQUFPLE9BQU8sQ0FBQyxHQUFHO1FBQ2xCLE9BQU8sT0FBTyxLQUFLLENBQUMsR0FBRztRQUV2QiwwQkFBMEI7UUFDMUIsUUFBUSxPQUFPLENBQUMsQ0FBQTtZQUNkLFVBQVUsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ2hDO0lBQ0YsT0FBTyxJQUFJLE9BQU8sTUFBTSxFQUN0QixVQUFVLE9BQU8sTUFBTSxFQUFFO0FBRTdCO0FBQ0EsU0FBUyxlQUFlLE9BQU8sa0JBQWtCLEdBQW5CLEVBQXVCLEdBQUcsV0FBVyxHQUFaLEVBQWdCLGFBQWEsdUNBQXVDLEdBQXhDO0lBQ2pGLElBQUksa0JBQWtCLFFBQVEsSUFBSSxlQUNoQyxPQUFPO0lBR1QsdUdBQXVHO0lBQ3ZHLElBQUksVUFBVSxXQUFXLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRTtJQUM3QyxJQUFJLFdBQVc7SUFDZixNQUFPLFFBQVEsTUFBTSxHQUFHLEVBQUc7UUFDekIsSUFBSSxJQUFJLFFBQVEsS0FBSztRQUNyQixJQUFJLElBQUksa0JBQWtCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUN0QyxJQUFJLEdBQ0YsK0VBQStFO1FBQy9FLFdBQVc7YUFDTjtZQUNMLHlEQUF5RDtZQUN6RCxJQUFJLElBQUksV0FBVyxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxFQUFFLE1BQU0sS0FBSyxHQUFHO2dCQUNsQixrRkFBa0Y7Z0JBQ2xGLFdBQVc7Z0JBQ1g7WUFDRjtZQUNBLFFBQVEsSUFBSSxJQUFJO1FBQ2xCO0lBQ0Y7SUFDQSxPQUFPO0FBQ1Q7QUFDQSxTQUFTLGtCQUFrQixPQUFPLGtCQUFrQixHQUFuQixFQUF1QixHQUFHLFdBQVcsR0FBWixFQUFnQixhQUFhLHVDQUF1QyxHQUF4QztJQUNwRixJQUFJLFVBQVUsT0FBTyxPQUFPO0lBQzVCLElBQUksQ0FBQyxTQUNIO0lBRUYsSUFBSSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxhQUFhLENBQUMsRUFBRTtRQUN2RCwyRUFBMkU7UUFDM0UseUVBQXlFO1FBQ3pFLElBQUksQ0FBQyxPQUFPLE1BQU0sRUFDaEIsT0FBTztRQUVULE9BQU8sZUFBZSxPQUFPLE1BQU0sRUFBRSxJQUFJO0lBQzNDO0lBQ0EsSUFBSSxhQUFhLENBQUMsR0FBRyxFQUNuQixPQUFPO0lBRVQsYUFBYSxDQUFDLEdBQUcsR0FBRztJQUNwQixJQUFJLFNBQVMsT0FBTyxLQUFLLENBQUMsR0FBRztJQUM3QixnQkFBZ0IsSUFBSSxDQUFDO1FBQUM7UUFBUTtLQUFHO0lBQ2pDLElBQUksQ0FBQyxVQUFVLE9BQU8sR0FBRyxJQUFJLE9BQU8sR0FBRyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtRQUMvRCxlQUFlLElBQUksQ0FBQztZQUFDO1lBQVE7U0FBRztRQUNoQyxPQUFPO0lBQ1Q7QUFDRjtBQUNBLFNBQVMsV0FBVyxPQUFPLGtCQUFrQixHQUFuQixFQUF1QixHQUFHLFdBQVcsR0FBWjtJQUNqRCxJQUFJLFNBQVMsT0FBTyxLQUFLLENBQUMsR0FBRztJQUM3QixPQUFPLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN0QixJQUFJLFVBQVUsT0FBTyxHQUFHLEVBQ3RCLE9BQU8sR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLE9BQU8sQ0FBQyxHQUFHO0lBRXRDLElBQUksVUFBVSxPQUFPLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQzdELE9BQU8sR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxTQUFVLEVBQUU7UUFDL0MsR0FBRyxPQUFPLE9BQU8sQ0FBQyxHQUFHO0lBQ3ZCO0lBRUYsT0FBTyxPQUFPLEtBQUssQ0FBQyxHQUFHO0FBQ3pCO0FBQ0EsU0FBUyxVQUFVLE9BQU8sa0JBQWtCLEdBQW5CLEVBQXVCLEdBQUcsV0FBVyxHQUFaO0lBQ2hELHNCQUFzQjtJQUN0QixPQUFPO0lBRVAsNkRBQTZEO0lBQzdELElBQUksU0FBUyxPQUFPLEtBQUssQ0FBQyxHQUFHO0lBQzdCLElBQUksVUFBVSxPQUFPLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQzVELE9BQU8sR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFVLEVBQUU7UUFDOUMsSUFBSSxxQkFBcUIsR0FBRztZQUMxQixPQUFPLFdBQVcsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3hDO1FBQ0EsSUFBSSxzQkFBc0IsZUFBZSxNQUFNLEVBQUU7WUFDL0MsbUJBQW1CLE9BQU8sQ0FBQyxTQUFVLENBQUM7Z0JBQ3BDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUN2QjtZQUVBLCtCQUErQjtZQUMvQixlQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCO1FBQzVDO0lBQ0Y7QUFFSjs7O0FDdmZBO0FBQ0EsNkJBQTZCO0FBQzdCOzs7QUNGQSxtQ0FBbUM7O0FBQ25DOztBQUVBO0FBQ0E7QUFFQSxzRUFBc0U7QUFDdEU7QUFDQSw0QkFBNEI7QUFFNUIsNkJBQTZCO0FBRTdCLG1CQUFtQjtBQUNuQixJQUFJLGlCQUFpQjtBQUNyQixJQUFJO0FBQ0osSUFBSTtBQUNKLElBQUk7QUFDSixJQUFJO0FBRUosSUFBSSxVQUFVLGlCQUFpQjs7QUFDL0IsSUFBSTtBQUNKLDZCQUE2QjtBQUM3QixJQUFJLGVBQWUsS0FBSyxvQ0FBb0M7O0FBRTVELElBQUksb0JBQW9CO0FBQ3hCLElBQUksbUJBQW1CO0FBQ3ZCLGdDQUFnQztBQUVoQyxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J6QixDQUFDO0FBRUQsaUJBQWlCO0FBQ2pCO0FBRUEsU0FBUztJQUNSLE1BQU0sT0FBTyxTQUFTLGdCQUFnQixDQUFDO0lBQ3ZDLE1BQU0sUUFBUSxTQUFTLGdCQUFnQixDQUFDO0lBRXhDLEtBQUssT0FBTyxDQUFDLENBQUMsS0FBSztRQUNsQixJQUFJLGdCQUFnQixDQUFDLFNBQVM7WUFDN0IsU0FBUyxhQUFhLENBQUMsc0JBQXNCLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDOUQsU0FBUyxhQUFhLENBQUMsMEJBQTBCLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFFL0QsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDO1lBQ2xCLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUMvQjtJQUNEO0FBQ0Q7QUFFQSxlQUFlO0lBQ2QsSUFBSTtRQUNILE1BQU0sRUFBRSxTQUFTLFdBQVcsRUFBRSxHQUFHLE1BQU0sQ0FBQSxHQUFBLG9DQUFPLEFBQUQsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNoRSxNQUFNLFFBQVEsZUFBZ0IsQ0FBQSxPQUFPLFVBQVUsQ0FBQyxpQ0FBaUMsT0FBTyxHQUFHLFVBQVUsTUFBSztRQUMxRyxXQUFXO0lBQ1osRUFBRSxPQUFPLE9BQU87UUFDZixRQUFRLEtBQUssQ0FBQyw2QkFBNkI7SUFDNUM7QUFDRDtBQUVBLGVBQWUsU0FBUyxLQUFLO0lBQzVCLElBQUk7UUFDSCxNQUFNLENBQUEsR0FBQSxvQ0FBTyxBQUFELEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBRSxTQUFTO1FBQU07UUFDaEQsV0FBVztRQUNYO0lBQ0QsRUFBRSxPQUFPLE9BQU87UUFDZixRQUFRLEtBQUssQ0FBQyx3QkFBd0I7SUFDdkM7QUFDRDtBQUVBLFNBQVM7SUFDUixNQUFNLGtCQUFrQixTQUFTLGFBQWEsQ0FBQztJQUMvQyxnQkFBZ0IsU0FBUyxHQUFHO0lBRTVCLGtEQUFrRDtJQUNsRCxJQUFJLFdBQVcsQ0FBQzs7R0FFZCxFQUFFLENBQUEsR0FBQSxtQkFBVSxBQUFELEVBQUU7Ozs7OytDQUsrQixFQUFFLENBQUEsR0FBQSxpQkFBUSxBQUFELEVBQUU7NkNBQ2IsRUFBRSxDQUFBLEdBQUEsa0JBQVMsQUFBRCxFQUFFOzhDQUNYLEVBQUUsQ0FBQSxHQUFBLHVCQUFjLEFBQUQsRUFBRTsyREFDSixFQUFFLENBQUEsR0FBQSxzQkFBYSxBQUFELEVBQUU7OztDQUcxRSxDQUFDO0lBRUQsdUNBQXVDO0lBQ3ZDLGdCQUFnQixrQkFBa0IsQ0FBQyxhQUFhO0lBQ2hELFNBQVMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUUxQixxQ0FBcUM7SUFDckMsV0FBVyxTQUFTLGVBQWU7SUFDbkMsZUFBZSxTQUFTLGFBQWEsQ0FBQztJQUN0QyxtQkFBbUIsU0FBUyxhQUFhLENBQUM7SUFDMUMseUJBQXlCLFNBQVMsYUFBYSxDQUFDO0lBRWhELHNEQUFzRDtJQUN0RCxhQUFhLGdCQUFnQixDQUFDLFNBQVM7SUFDdkMsdUJBQXVCLGdCQUFnQixDQUFDLFNBQVM7QUFDbEQ7QUFFQSxTQUFTLGtCQUFrQixDQUFDO0lBQzNCLE1BQU0sY0FBYyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDckMsSUFBSSxDQUFDLGFBQWE7SUFFbEIsTUFBTSxRQUFRLFlBQVksRUFBRTtJQUU1QixJQUFJLFVBQVUsc0JBQXNCO1FBQ25DLFNBQVM7UUFDVDtJQUNEO0lBRUEsb0NBQW9DLEdBQ3BDLElBQUksVUFBVSxzQkFDYjtBQUdGO0FBRUEsU0FBUyxXQUFXLEtBQUs7SUFDeEIsU0FBUyxPQUFPLENBQUMsT0FBTyxHQUFHO0lBQzNCLFNBQVMsS0FBSyxDQUFDLFdBQVcsR0FBRyxVQUFVLFNBQVMsU0FBUztJQUN6RCxTQUFTLFNBQVMsR0FBRyxVQUFVLFNBQVMsU0FBUztJQUNqRCxJQUFJLFVBQVUsUUFBUSxTQUFTLGVBQWUsQ0FBQztBQUNoRDtBQUVBLFNBQVM7SUFDUixpQkFBaUIsQ0FBQztJQUNsQixpQkFBaUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0I7SUFFMUQsSUFBSSxnQkFBZ0IsU0FBUyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUztTQUN2RCxTQUFTLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTO0FBQ2pEO0FBRUEsU0FBUyxZQUFZLENBQUM7SUFDckIsTUFBTSwyQkFBMkIsYUFBYSxRQUFRLENBQUMsRUFBRSxNQUFNO0lBQy9ELE1BQU0sK0JBQStCLGlCQUFpQixRQUFRLENBQUMsRUFBRSxNQUFNO0lBRXZFLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyw4QkFBOEI7QUFFaEUscUdBQXFHO0FBQ3RHO0FBRUEsU0FBUztJQUNSLFdBQVc7UUFDVixhQUFhLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFDNUIsR0FBRztBQUNKO0FBRUEsb0VBQW9FLEdBQ3BFLFNBQVM7SUFDUixNQUFNLGVBQWUsU0FBUyxhQUFhLENBQUM7SUFDNUMsYUFBYSxTQUFTLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQztJQUU1RCxJQUFJLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXlCWCxFQUFFLGdCQUFnQjs7OztNQUlsQixFQUFFLENBQUEsR0FBQSx1QkFBWSxBQUFELEVBQUU7Ozs7Ozs7Ozs7Q0FVcEIsQ0FBQztJQUVELGFBQWEsa0JBQWtCLENBQUMsYUFBYTtJQUM3QyxTQUFTLElBQUksQ0FBQyxXQUFXLENBQUM7SUFFMUIsU0FBUyxjQUFjLENBQUMsdUJBQXVCLGdCQUFnQixDQUFDLFNBQVM7SUFFekUsWUFBWTtJQUVaO0lBRUEsZUFBZSxVQUFVLGFBQWEsQ0FBQztJQUN2QyxhQUFhLFFBQVEsR0FBRztJQUV4QixVQUFVLGFBQWEsQ0FBQyxxQkFBcUIsZ0JBQWdCLENBQUMsU0FBUztJQUV2RSwwQkFBMEI7SUFDMUIsQ0FBQSxHQUFBLCtCQUFvQixBQUFEO0FBQ3BCO0FBRUEsU0FBUztJQUNSLFVBQVUsU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUN4QixVQUFVLGdCQUFnQixDQUFDLGlCQUFpQjtJQUM1QyxhQUFhLFFBQVEsR0FBRztBQUV4Qix5QkFBeUI7QUFDekIsa0JBQWtCO0FBQ25CO0FBQ0EsU0FBUztJQUNSLFNBQVMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVM7SUFDeEMsVUFBVSxtQkFBbUIsQ0FBQyxpQkFBaUI7QUFDaEQ7QUFDQSxTQUFTO0lBQ1IsVUFBVSxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQzNCLFNBQVMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVM7SUFDM0MsYUFBYSxRQUFRLEdBQUc7QUFDekI7QUFDQSxTQUFTLDJCQUEyQixDQUFDO0lBQ3BDLElBQUksdUJBQXVCLEVBQUUsTUFBTSxDQUFDLEVBQUUsS0FBSztJQUUzQyxJQUFJLENBQUMsVUFBVSxRQUFRLENBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQyxzQkFBc0I7QUFDN0Q7QUFFQSxTQUFTO0lBQ1IsVUFBVSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7UUFDcEMsd0JBQXdCO1FBRXhCLElBQUksRUFBRSxNQUFNLENBQUMsRUFBRSxLQUFLLGVBQWU7WUFDbEMsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO2dCQUNuQyxjQUFjLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUMvQjtZQUNBLHFDQUFxQztZQUNyQyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7Z0JBQ3BDLG1CQUFtQixnQkFBZ0IsRUFBRSxNQUFNLENBQUMsS0FBSztnQkFDakQ7WUFDRDtRQUNEO1FBRUEsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEtBQUssY0FBYztZQUNqQyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7Z0JBQ25DLGNBQWMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25DO1lBQ0Esb0NBQW9DO1lBQ3BDLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztnQkFDcEMsbUJBQW1CLGVBQWUsRUFBRSxNQUFNLENBQUMsS0FBSztnQkFDaEQ7WUFDRDtRQUNEO0lBQ0Q7QUFDRDtBQUNBLG9EQUFvRDtBQUNwRCxTQUFTO0lBQ1IsZUFBZSxTQUFTLGFBQWEsQ0FBQztJQUN0QyxhQUFhLElBQUksR0FBRztJQUNwQixTQUFTLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDM0I7QUFFQSxTQUFTLGNBQWMsVUFBVSxFQUFFLFNBQVM7SUFDM0MsSUFBSSxDQUFDLGNBQWM7SUFFbkIsTUFBTSxXQUFXLGFBQ2QsQ0FBQSxHQUFBLGtCQUFRLEFBQUQsRUFBRSxjQUNULENBQUEsR0FBQSxrQkFBUSxBQUFELEVBQUUsVUFBVSxhQUFhLENBQUMsNkJBQTZCLEtBQUs7SUFDdEUsTUFBTSxVQUFVLFlBQ2IsQ0FBQSxHQUFBLGtCQUFRLEFBQUQsRUFBRSxhQUNULENBQUEsR0FBQSxrQkFBUSxBQUFELEVBQUUsVUFBVSxhQUFhLENBQUMsNEJBQTRCLEtBQUs7SUFFckUsSUFBSSxVQUFVO0lBRWQsVUFBVSxDQUFDOzt3QkFFWSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUM7d0JBQ2QsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDO3dCQUNkLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQzs7O3dCQUdkLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQzt3QkFDYixFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUM7d0JBQ2IsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDOztJQUVqQyxDQUFDO0lBRUosdUJBQXVCO0lBRXZCLGFBQWEsV0FBVyxHQUFHO0FBQzVCO0FBRUEsZUFBZSxtQkFBbUIsb0JBQW9CLEVBQUUsV0FBVztJQUNsRSxJQUFJO1FBQ0gsSUFBSSx5QkFBeUIsZ0JBQzVCLE1BQU0sQ0FBQSxHQUFBLG9DQUFPLEFBQUQsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUFFLGNBQWM7UUFBWTtRQUU1RCxJQUFJLHlCQUF5QixlQUM1QixNQUFNLENBQUEsR0FBQSxvQ0FBTyxBQUFELEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBRSxhQUFhO1FBQVk7SUFFM0QscURBQXFEO0lBQ3RELEVBQUUsT0FBTyxHQUFHO1FBQ1gsUUFBUSxLQUFLLENBQUMsK0NBQStDO0lBQzlEO0FBQ0Q7QUFFQSxTQUFTLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUU7SUFDdEQsMkNBQTJDO0lBQzNDLFVBQVUsYUFBYSxDQUFDLDZCQUE2QixLQUFLLEdBQUc7SUFDN0QsVUFBVSxhQUFhLENBQUMsNEJBQTRCLEtBQUssR0FBRztBQUM3RDtBQUVBLGVBQWU7SUFDZCxJQUFJO1FBQ0gsaUNBQWlDO1FBQ2pDLE1BQU0sRUFBRSxjQUFjLFdBQVcsRUFBRSxhQUFhLFVBQVUsRUFBRSxHQUFHLE1BQU0sQ0FBQSxHQUFBLG9DQUFPLEFBQUQsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUM3RjtZQUNBO1NBQ0E7UUFDRCxnRkFBZ0Y7UUFFaEYsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWTtZQUNoQyxNQUFNLENBQUEsR0FBQSxvQ0FBTyxBQUFELEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQzlCLGNBQWM7Z0JBQ2QsYUFBYTtZQUNkO1lBQ0EsUUFBUSxHQUFHLENBQUM7UUFDYjtRQUVBLE1BQU0sbUJBQW1CLGVBQWU7UUFDeEMsTUFBTSxrQkFBa0IsY0FBYztRQUV0QyxxREFBcUQ7UUFDckQsY0FBYyxrQkFBa0I7UUFFaEMsbUJBQW1CO1lBQUUsYUFBYTtZQUFrQixZQUFZO1FBQWdCO0lBRWhGLGtGQUFrRjtJQUNuRixFQUFFLE9BQU8sT0FBTztRQUNmLFFBQVEsS0FBSyxDQUFDLGlDQUFpQztJQUNoRDtBQUNEO0FBQ0EsZUFBZTtJQUNkLElBQUksQ0FBQyxjQUFjO0lBRW5CLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMsSUFBSSxjQUFjLENBQUEsR0FBQSxrQkFBUSxBQUFELEVBQUU7SUFDM0IsSUFBSSxhQUFhLENBQUEsR0FBQSxrQkFBUSxBQUFELEVBQUU7SUFFMUIsTUFBTSxVQUFVLENBQUM7O3dCQUVNLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQzt3QkFDakIsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDO3dCQUNqQixFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUM7Ozt3QkFHakIsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDO3dCQUNoQixFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUM7d0JBQ2hCLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQzs7SUFFcEMsQ0FBQztJQUVKLGFBQWEsV0FBVyxHQUFHO0lBRTNCLG1CQUFtQjtRQUFFLGFBQWE7UUFBbUIsWUFBWTtJQUFpQjtJQUVsRixNQUFNLENBQUEsR0FBQSxvQ0FBTyxBQUFELEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDOUIsY0FBYztRQUNkLGFBQWE7SUFDZDtBQUNEO0FBRUEsc0JBQXNCLEdBQ3RCLFNBQVM7SUFDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDRCxFQUVBLHdDQUF3QyxJQUN4Qzs7Ozs7OztBQU9BOzs7QSxDLFMsTSxFLE87SSxJLE8sVyxjLE8sRyxFLE8seUI7UTtLLEU7UztZO1EsUTtJO0EsQyxFLE8sZSxjLGEsTyxTLGMsTyxJLEUsUyxPO0lDbGFBLDhEQUFBLEdBQ0EsMkRBQUEsR0FDQSxpQ0FBQSxHQUNBOzs4REFFQSxHQUNBO0lBRUEsSUFBSSxDQUFDQSxXQUFXQyxNQUFYLEVBQW1CQyxTQUFTQyxJQUMvQixNQUFNLElBQUlDLE1BQU07SUFHbEIsSUFBSSxPQUFPSixXQUFXSyxPQUFsQixLQUE4QixlQUFlQyxPQUFPQyxjQUFQLENBQXNCUCxXQUFXSyxPQUFqQyxNQUE4Q0MsT0FBT0UsU0FBdEcsRUFBaUg7UUFDL0csTUFBTUMsbURBQW1ELDJEQUV6RCwyRUFGQTtRQUdBLHdFQUFBO1FBQ0EsNkVBQUE7UUFDQSw0RUFBQTtRQUNBLDhCQUFBO1FBQ0EsTUFBTUMsV0FBV0MsQ0FBQUE7WUFDZiwrRUFBQTtZQUNBLDZFQUFBO1lBQ0EsYUFBQTtZQUNBLE1BQU1DLGNBQWM7Z0JBQ2xCLFVBQVU7b0JBQ1IsU0FBUzt3QkFDUCxXQUFXO3dCQUNYLFdBQVc7b0JBRko7b0JBSVQsWUFBWTt3QkFDVixXQUFXO3dCQUNYLFdBQVc7b0JBRkQ7b0JBSVosT0FBTzt3QkFDTCxXQUFXO3dCQUNYLFdBQVc7b0JBRk47b0JBSVAsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7Z0JBYkY7Z0JBa0JWLGFBQWE7b0JBQ1gsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsT0FBTzt3QkFDTCxXQUFXO3dCQUNYLFdBQVc7b0JBRk47b0JBSVAsZUFBZTt3QkFDYixXQUFXO3dCQUNYLFdBQVc7b0JBRkU7b0JBSWYsYUFBYTt3QkFDWCxXQUFXO3dCQUNYLFdBQVc7b0JBRkE7b0JBSWIsY0FBYzt3QkFDWixXQUFXO3dCQUNYLFdBQVc7b0JBRkM7b0JBSWQsV0FBVzt3QkFDVCxXQUFXO3dCQUNYLFdBQVc7b0JBRkY7b0JBSVgsUUFBUTt3QkFDTixXQUFXO3dCQUNYLFdBQVc7b0JBRkw7b0JBSVIsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsY0FBYzt3QkFDWixXQUFXO3dCQUNYLFdBQVc7b0JBRkM7b0JBSWQsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7Z0JBekNDO2dCQThDYixpQkFBaUI7b0JBQ2YsV0FBVzt3QkFDVCxXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsd0JBQXdCO29CQUhmO29CQUtYLFVBQVU7d0JBQ1IsV0FBVzt3QkFDWCxXQUFXO3dCQUNYLHdCQUF3QjtvQkFIaEI7b0JBS1YsMkJBQTJCO3dCQUN6QixXQUFXO3dCQUNYLFdBQVc7b0JBRmM7b0JBSTNCLGdCQUFnQjt3QkFDZCxXQUFXO3dCQUNYLFdBQVc7b0JBRkc7b0JBSWhCLFlBQVk7d0JBQ1YsV0FBVzt3QkFDWCxXQUFXO29CQUZEO29CQUlaLFlBQVk7d0JBQ1YsV0FBVzt3QkFDWCxXQUFXO29CQUZEO29CQUlaLGFBQWE7d0JBQ1gsV0FBVzt3QkFDWCxXQUFXO29CQUZBO29CQUliLDJCQUEyQjt3QkFDekIsV0FBVzt3QkFDWCxXQUFXO3dCQUNYLHdCQUF3QjtvQkFIQztvQkFLM0IsZ0JBQWdCO3dCQUNkLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCx3QkFBd0I7b0JBSFY7b0JBS2hCLFdBQVc7d0JBQ1QsV0FBVzt3QkFDWCxXQUFXO29CQUZGO29CQUlYLFlBQVk7d0JBQ1YsV0FBVzt3QkFDWCxXQUFXO3dCQUNYLHdCQUF3QjtvQkFIZDtvQkFLWixZQUFZO3dCQUNWLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCx3QkFBd0I7b0JBSGQ7Z0JBbERHO2dCQXdEakIsZ0JBQWdCO29CQUNkLFVBQVU7d0JBQ1IsV0FBVzt3QkFDWCxXQUFXO29CQUZIO29CQUlWLGVBQWU7d0JBQ2IsV0FBVzt3QkFDWCxXQUFXO29CQUZFO29CQUlmLGlCQUFpQjt3QkFDZixXQUFXO3dCQUNYLFdBQVc7b0JBRkk7b0JBSWpCLG1CQUFtQjt3QkFDakIsV0FBVzt3QkFDWCxXQUFXO29CQUZNO29CQUluQixrQkFBa0I7d0JBQ2hCLFdBQVc7d0JBQ1gsV0FBVztvQkFGSztvQkFJbEIsaUJBQWlCO3dCQUNmLFdBQVc7d0JBQ1gsV0FBVztvQkFGSTtvQkFJakIsc0JBQXNCO3dCQUNwQixXQUFXO3dCQUNYLFdBQVc7b0JBRlM7b0JBSXRCLG1CQUFtQjt3QkFDakIsV0FBVzt3QkFDWCxXQUFXO29CQUZNO29CQUluQixvQkFBb0I7d0JBQ2xCLFdBQVc7d0JBQ1gsV0FBVztvQkFGTztvQkFJcEIsWUFBWTt3QkFDVixXQUFXO3dCQUNYLFdBQVc7b0JBRkQ7Z0JBckNFO2dCQTBDaEIsWUFBWTtvQkFDVixVQUFVO3dCQUNSLFdBQVc7d0JBQ1gsV0FBVztvQkFGSDtnQkFEQTtnQkFNWixnQkFBZ0I7b0JBQ2QsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsYUFBYTt3QkFDWCxXQUFXO3dCQUNYLFdBQVc7b0JBRkE7b0JBSWIsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7Z0JBVEk7Z0JBY2hCLFdBQVc7b0JBQ1QsT0FBTzt3QkFDTCxXQUFXO3dCQUNYLFdBQVc7b0JBRk47b0JBSVAsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsc0JBQXNCO3dCQUNwQixXQUFXO3dCQUNYLFdBQVc7b0JBRlM7b0JBSXRCLFVBQVU7d0JBQ1IsV0FBVzt3QkFDWCxXQUFXO29CQUZIO29CQUlWLE9BQU87d0JBQ0wsV0FBVzt3QkFDWCxXQUFXO29CQUZOO2dCQWpCRTtnQkFzQlgsWUFBWTtvQkFDVixtQkFBbUI7d0JBQ2pCLFFBQVE7NEJBQ04sV0FBVzs0QkFDWCxXQUFXOzRCQUNYLHFCQUFxQjt3QkFIZjtvQkFEUztvQkFPbkIsVUFBVTt3QkFDUixVQUFVOzRCQUNSLFdBQVc7NEJBQ1gsV0FBVzs0QkFDWCxxQkFBcUI7d0JBSGI7d0JBS1YsWUFBWTs0QkFDVixxQkFBcUI7Z0NBQ25CLFdBQVc7Z0NBQ1gsV0FBVzs0QkFGUTt3QkFEWDtvQkFOSjtnQkFSQTtnQkFzQlosYUFBYTtvQkFDWCxVQUFVO3dCQUNSLFdBQVc7d0JBQ1gsV0FBVztvQkFGSDtvQkFJVixZQUFZO3dCQUNWLFdBQVc7d0JBQ1gsV0FBVztvQkFGRDtvQkFJWixTQUFTO3dCQUNQLFdBQVc7d0JBQ1gsV0FBVztvQkFGSjtvQkFJVCxlQUFlO3dCQUNiLFdBQVc7d0JBQ1gsV0FBVztvQkFGRTtvQkFJZixRQUFRO3dCQUNOLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCx3QkFBd0I7b0JBSGxCO29CQUtSLFNBQVM7d0JBQ1AsV0FBVzt3QkFDWCxXQUFXO29CQUZKO29CQUlULGNBQWM7d0JBQ1osV0FBVzt3QkFDWCxXQUFXO29CQUZDO29CQUlkLFVBQVU7d0JBQ1IsV0FBVzt3QkFDWCxXQUFXO29CQUZIO29CQUlWLFVBQVU7d0JBQ1IsV0FBVzt3QkFDWCxXQUFXO29CQUZIO29CQUlWLFFBQVE7d0JBQ04sV0FBVzt3QkFDWCxXQUFXO3dCQUNYLHdCQUF3QjtvQkFIbEI7Z0JBdENHO2dCQTRDYixhQUFhO29CQUNYLDZCQUE2Qjt3QkFDM0IsV0FBVzt3QkFDWCxXQUFXO29CQUZnQjtvQkFJN0IsNEJBQTRCO3dCQUMxQixXQUFXO3dCQUNYLFdBQVc7b0JBRmU7Z0JBTGpCO2dCQVViLFdBQVc7b0JBQ1QsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsYUFBYTt3QkFDWCxXQUFXO3dCQUNYLFdBQVc7b0JBRkE7b0JBSWIsZUFBZTt3QkFDYixXQUFXO3dCQUNYLFdBQVc7b0JBRkU7b0JBSWYsYUFBYTt3QkFDWCxXQUFXO3dCQUNYLFdBQVc7b0JBRkE7b0JBSWIsYUFBYTt3QkFDWCxXQUFXO3dCQUNYLFdBQVc7b0JBRkE7b0JBSWIsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7Z0JBckJEO2dCQTBCWCxRQUFRO29CQUNOLGtCQUFrQjt3QkFDaEIsV0FBVzt3QkFDWCxXQUFXO29CQUZLO29CQUlsQixzQkFBc0I7d0JBQ3BCLFdBQVc7d0JBQ1gsV0FBVztvQkFGUztnQkFMaEI7Z0JBVVIsWUFBWTtvQkFDVixxQkFBcUI7d0JBQ25CLFdBQVc7d0JBQ1gsV0FBVztvQkFGUTtnQkFEWDtnQkFNWixRQUFRO29CQUNOLGNBQWM7d0JBQ1osV0FBVzt3QkFDWCxXQUFXO29CQUZDO2dCQURSO2dCQU1SLGNBQWM7b0JBQ1osT0FBTzt3QkFDTCxXQUFXO3dCQUNYLFdBQVc7b0JBRk47b0JBSVAsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsV0FBVzt3QkFDVCxXQUFXO3dCQUNYLFdBQVc7b0JBRkY7b0JBSVgsY0FBYzt3QkFDWixXQUFXO3dCQUNYLFdBQVc7b0JBRkM7b0JBSWQsaUJBQWlCO3dCQUNmLFdBQVc7d0JBQ1gsV0FBVztvQkFGSTtnQkFqQkw7Z0JBc0JkLGlCQUFpQjtvQkFDZixTQUFTO3dCQUNQLFdBQVc7d0JBQ1gsV0FBVztvQkFGSjtvQkFJVCxVQUFVO3dCQUNSLFdBQVc7d0JBQ1gsV0FBVztvQkFGSDtvQkFJVixVQUFVO3dCQUNSLFdBQVc7d0JBQ1gsV0FBVztvQkFGSDtvQkFJVixzQkFBc0I7d0JBQ3BCLFdBQVc7d0JBQ1gsV0FBVztvQkFGUztvQkFJdEIsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7Z0JBakJLO2dCQXNCakIsY0FBYztvQkFDWixZQUFZO3dCQUNWLFdBQVc7d0JBQ1gsV0FBVztvQkFGRDtvQkFJWixZQUFZO3dCQUNWLFdBQVc7d0JBQ1gsV0FBVztvQkFGRDtvQkFJWixRQUFRO3dCQUNOLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCx3QkFBd0I7b0JBSGxCO29CQUtSLFdBQVc7d0JBQ1QsV0FBVzt3QkFDWCxXQUFXO29CQUZGO29CQUlYLFlBQVk7d0JBQ1YsV0FBVzt3QkFDWCxXQUFXO3dCQUNYLHdCQUF3QjtvQkFIZDtvQkFLWixZQUFZO3dCQUNWLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCx3QkFBd0I7b0JBSGQ7b0JBS1osUUFBUTt3QkFDTixXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsd0JBQXdCO29CQUhsQjtnQkE1Qkk7Z0JBa0NkLGVBQWU7b0JBQ2IsWUFBWTt3QkFDVixXQUFXO3dCQUNYLFdBQVc7b0JBRkQ7b0JBSVosVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsV0FBVzt3QkFDVCxXQUFXO3dCQUNYLFdBQVc7b0JBRkY7Z0JBYkU7Z0JBa0JmLFdBQVc7b0JBQ1QscUJBQXFCO3dCQUNuQixXQUFXO3dCQUNYLFdBQVc7b0JBRlE7b0JBSXJCLG1CQUFtQjt3QkFDakIsV0FBVzt3QkFDWCxXQUFXO29CQUZNO29CQUluQixtQkFBbUI7d0JBQ2pCLFdBQVc7d0JBQ1gsV0FBVztvQkFGTTtvQkFJbkIsc0JBQXNCO3dCQUNwQixXQUFXO3dCQUNYLFdBQVc7b0JBRlM7b0JBSXRCLGVBQWU7d0JBQ2IsV0FBVzt3QkFDWCxXQUFXO29CQUZFO29CQUlmLHFCQUFxQjt3QkFDbkIsV0FBVzt3QkFDWCxXQUFXO29CQUZRO29CQUlyQixtQkFBbUI7d0JBQ2pCLFdBQVc7d0JBQ1gsV0FBVztvQkFGTTtnQkF6QlY7Z0JBOEJYLFlBQVk7b0JBQ1YsY0FBYzt3QkFDWixXQUFXO3dCQUNYLFdBQVc7b0JBRkM7b0JBSWQscUJBQXFCO3dCQUNuQixXQUFXO3dCQUNYLFdBQVc7b0JBRlE7b0JBSXJCLFdBQVc7d0JBQ1QsV0FBVzt3QkFDWCxXQUFXO29CQUZGO2dCQVREO2dCQWNaLFdBQVc7b0JBQ1QsU0FBUzt3QkFDUCxTQUFTOzRCQUNQLFdBQVc7NEJBQ1gsV0FBVzt3QkFGSjt3QkFJVCxPQUFPOzRCQUNMLFdBQVc7NEJBQ1gsV0FBVzt3QkFGTjt3QkFJUCxpQkFBaUI7NEJBQ2YsV0FBVzs0QkFDWCxXQUFXO3dCQUZJO3dCQUlqQixVQUFVOzRCQUNSLFdBQVc7NEJBQ1gsV0FBVzt3QkFGSDt3QkFJVixPQUFPOzRCQUNMLFdBQVc7NEJBQ1gsV0FBVzt3QkFGTjtvQkFqQkE7b0JBc0JULFdBQVc7d0JBQ1QsT0FBTzs0QkFDTCxXQUFXOzRCQUNYLFdBQVc7d0JBRk47d0JBSVAsaUJBQWlCOzRCQUNmLFdBQVc7NEJBQ1gsV0FBVzt3QkFGSTtvQkFMUjtvQkFVWCxRQUFRO3dCQUNOLFNBQVM7NEJBQ1AsV0FBVzs0QkFDWCxXQUFXO3dCQUZKO3dCQUlULE9BQU87NEJBQ0wsV0FBVzs0QkFDWCxXQUFXO3dCQUZOO3dCQUlQLGlCQUFpQjs0QkFDZixXQUFXOzRCQUNYLFdBQVc7d0JBRkk7d0JBSWpCLFVBQVU7NEJBQ1IsV0FBVzs0QkFDWCxXQUFXO3dCQUZIO3dCQUlWLE9BQU87NEJBQ0wsV0FBVzs0QkFDWCxXQUFXO3dCQUZOO29CQWpCRDtnQkFqQ0M7Z0JBd0RYLFFBQVE7b0JBQ04scUJBQXFCO3dCQUNuQixXQUFXO3dCQUNYLFdBQVc7b0JBRlE7b0JBSXJCLFVBQVU7d0JBQ1IsV0FBVzt3QkFDWCxXQUFXO29CQUZIO29CQUlWLGtCQUFrQjt3QkFDaEIsV0FBVzt3QkFDWCxXQUFXO29CQUZLO29CQUlsQixXQUFXO3dCQUNULFdBQVc7d0JBQ1gsV0FBVztvQkFGRjtvQkFJWCxhQUFhO3dCQUNYLFdBQVc7d0JBQ1gsV0FBVztvQkFGQTtvQkFJYixpQkFBaUI7d0JBQ2YsV0FBVzt3QkFDWCxXQUFXO29CQUZJO29CQUlqQixPQUFPO3dCQUNMLFdBQVc7d0JBQ1gsV0FBVztvQkFGTjtvQkFJUCxjQUFjO3dCQUNaLFdBQVc7d0JBQ1gsV0FBVztvQkFGQztvQkFJZCxXQUFXO3dCQUNULFdBQVc7d0JBQ1gsV0FBVztvQkFGRjtvQkFJWCxtQkFBbUI7d0JBQ2pCLFdBQVc7d0JBQ1gsV0FBVztvQkFGTTtvQkFJbkIsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsYUFBYTt3QkFDWCxXQUFXO3dCQUNYLFdBQVc7b0JBRkE7b0JBSWIsYUFBYTt3QkFDWCxXQUFXO3dCQUNYLFdBQVc7b0JBRkE7b0JBSWIsYUFBYTt3QkFDWCxXQUFXO3dCQUNYLFdBQVc7b0JBRkE7b0JBSWIsUUFBUTt3QkFDTixXQUFXO3dCQUNYLFdBQVc7b0JBRkw7b0JBSVIsU0FBUzt3QkFDUCxXQUFXO3dCQUNYLFdBQVc7b0JBRko7b0JBSVQsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsYUFBYTt3QkFDWCxXQUFXO3dCQUNYLFdBQVc7b0JBRkE7b0JBSWIsZUFBZTt3QkFDYixXQUFXO3dCQUNYLFdBQVc7b0JBRkU7b0JBSWYsV0FBVzt3QkFDVCxXQUFXO3dCQUNYLFdBQVc7b0JBRkY7b0JBSVgsbUJBQW1CO3dCQUNqQixXQUFXO3dCQUNYLFdBQVc7b0JBRk07b0JBSW5CLFVBQVU7d0JBQ1IsV0FBVzt3QkFDWCxXQUFXO29CQUZIO2dCQXpGSjtnQkE4RlIsWUFBWTtvQkFDVixPQUFPO3dCQUNMLFdBQVc7d0JBQ1gsV0FBVztvQkFGTjtnQkFERztnQkFNWixpQkFBaUI7b0JBQ2YsZ0JBQWdCO3dCQUNkLFdBQVc7d0JBQ1gsV0FBVztvQkFGRztvQkFJaEIsWUFBWTt3QkFDVixXQUFXO3dCQUNYLFdBQVc7b0JBRkQ7Z0JBTEc7Z0JBVWpCLGNBQWM7b0JBQ1osMEJBQTBCO3dCQUN4QixXQUFXO3dCQUNYLFdBQVc7b0JBRmE7Z0JBRGQ7Z0JBTWQsV0FBVztvQkFDVCxVQUFVO3dCQUNSLFdBQVc7d0JBQ1gsV0FBVztvQkFGSDtvQkFJVixPQUFPO3dCQUNMLFdBQVc7d0JBQ1gsV0FBVztvQkFGTjtvQkFJUCxVQUFVO3dCQUNSLFdBQVc7d0JBQ1gsV0FBVztvQkFGSDtvQkFJVixjQUFjO3dCQUNaLFdBQVc7d0JBQ1gsV0FBVztvQkFGQztvQkFJZCxrQkFBa0I7d0JBQ2hCLFdBQVc7d0JBQ1gsV0FBVztvQkFGSztvQkFJbEIsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7b0JBSVYsVUFBVTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7b0JBRkg7Z0JBekJEO1lBam9CTztZQWlxQnBCLElBQUlOLE9BQU9PLElBQVAsQ0FBWUQsYUFBYUUsTUFBekIsS0FBb0MsR0FDdEMsTUFBTSxJQUFJVixNQUFNO1lBR2xCOzs7Ozs7Ozs7T0FTSixHQUNJLE1BQU1XLHVCQUF1QkM7Z0JBQzNCQyxZQUFZQyxVQUFELEVBQWFDLEtBQWIsQ0FBZ0M7b0JBQ3pDLEtBQUEsQ0FBTUE7b0JBQ04sSUFBQSxDQUFLRCxVQUFMLEdBQWtCQTtnQkFDbkI7Z0JBRURHLElBQUlDLEdBQUQsRUFBTTtvQkFDUCxJQUFJLENBQUMsSUFBQSxDQUFLQyxHQUFMLENBQVNELE1BQ1osSUFBQSxDQUFLRSxHQUFMLENBQVNGLEtBQUssSUFBQSxDQUFLSixVQUFMLENBQWdCSTtvQkFHaEMsT0FBTyxLQUFBLENBQU1ELElBQUlDO2dCQUNsQjtZQVprQztZQWVyQzs7Ozs7O09BTUosR0FDSSxNQUFNRyxhQUFhQyxDQUFBQTtnQkFDakIsT0FBT0EsU0FBUyxPQUFPQSxVQUFVLFlBQVksT0FBT0EsTUFBTUMsSUFBYixLQUFzQjtZQUNwRTtZQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E4QkosR0FDSSxNQUFNQyxlQUFlLENBQUNDLFNBQVNDO2dCQUM3QixPQUFPLENBQUMsR0FBR0M7b0JBQ1QsSUFBSXBCLGNBQWNULE9BQWQsQ0FBc0I4QixTQUExQixFQUNFSCxRQUFRSSxNQUFSLENBQWUsSUFBSTdCLE1BQU1PLGNBQWNULE9BQWQsQ0FBc0I4QixTQUF0QixDQUFnQ0UsT0FBMUM7eUJBQ1YsSUFBSUosU0FBU0ssaUJBQVQsSUFDQ0osYUFBYWpCLE1BQWIsSUFBdUIsS0FBS2dCLFNBQVNLLGlCQUFULEtBQStCLE9BQ3JFTixRQUFRTyxPQUFSLENBQWdCTCxZQUFZLENBQUMsRUFBN0I7eUJBRUFGLFFBQVFPLE9BQVIsQ0FBZ0JMO2dCQUVuQjtZQUNGO1lBRUQsTUFBTU0scUJBQXNCQyxDQUFBQSxVQUFZQSxXQUFXLElBQUksYUFBYTtZQUVwRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXlCSixHQUNJLE1BQU1DLG9CQUFvQixDQUFDQyxNQUFNVjtnQkFDL0IsT0FBTyxTQUFTVyxxQkFBcUJDLE1BQTlCLEVBQXNDLEdBQUdDLElBQXpDO29CQUNMLElBQUlBLEtBQUs3QixNQUFMLEdBQWNnQixTQUFTYyxPQUEzQixFQUNFLE1BQU0sSUFBSXhDLE1BQU8sQ0FBQSxrQkFBQSxFQUFvQjBCLFNBQVNjLE9BQVEsQ0FBQSxDQUFBLEVBQUdQLG1CQUFtQlAsU0FBU2MsT0FBVixFQUFtQixLQUFBLEVBQU9KLEtBQUssUUFBQSxFQUFVRyxLQUFLN0IsTUFBTyxDQUFBLENBQTFIO29CQUdSLElBQUk2QixLQUFLN0IsTUFBTCxHQUFjZ0IsU0FBU2UsT0FBM0IsRUFDRSxNQUFNLElBQUl6QyxNQUFPLENBQUEsaUJBQUEsRUFBbUIwQixTQUFTZSxPQUFRLENBQUEsQ0FBQSxFQUFHUixtQkFBbUJQLFNBQVNlLE9BQVYsRUFBbUIsS0FBQSxFQUFPTCxLQUFLLFFBQUEsRUFBVUcsS0FBSzdCLE1BQU8sQ0FBQSxDQUF6SDtvQkFHUixPQUFPLElBQUlnQyxRQUFRLENBQUNWLFNBQVNIO3dCQUMzQixJQUFJSCxTQUFTaUIsb0JBQWIsRUFDRSwyRkFBQTt3QkFDQSxzRkFBQTt3QkFDQSx1REFBQTt3QkFDQSxJQUFJOzRCQUNGTCxNQUFNLENBQUNGLEtBQVAsSUFBZ0JHLE1BQU1mLGFBQWE7Z0NBQUNRO2dDQUFTSDs0QkFBVixHQUFtQkg7d0JBQ3ZELEVBQUMsT0FBT2tCLFNBQVM7NEJBQ2hCQyxRQUFRQyxJQUFSLENBQWMsQ0FBQSxFQUFFVixLQUFLLDREQUFBLENBQVIsR0FDQSxnREFBZ0RROzRCQUU3RE4sTUFBTSxDQUFDRixLQUFQLElBQWdCRyxPQUVoQiw2RUFGQUQ7NEJBR0Esd0NBQUE7NEJBQ0FaLFNBQVNpQixvQkFBVCxHQUFnQzs0QkFDaENqQixTQUFTcUIsVUFBVCxHQUFzQjs0QkFFdEJmO3dCQUNEOzZCQUNJLElBQUlOLFNBQVNxQixVQUFiLEVBQXlCOzRCQUM5QlQsTUFBTSxDQUFDRixLQUFQLElBQWdCRzs0QkFDaEJQO3dCQUNELE9BQ0NNLE1BQU0sQ0FBQ0YsS0FBUCxJQUFnQkcsTUFBTWYsYUFBYTs0QkFBQ1E7NEJBQVNIO3dCQUFWLEdBQW1CSDtvQkFFekQ7Z0JBQ0Y7WUFDRjtZQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrQkosR0FDSSxNQUFNc0IsYUFBYSxDQUFDVixRQUFRVyxRQUFRQztnQkFDbEMsT0FBTyxJQUFJQyxNQUFNRixRQUFRO29CQUN2QkcsT0FBTUMsWUFBRCxFQUFlQyxPQUFmLEVBQXdCZixJQUF4Qjt3QkFDSCxPQUFPVyxRQUFRSyxJQUFSLENBQWFELFNBQVNoQixXQUFXQztvQkFDekM7Z0JBSHNCO1lBSzFCO1lBRUQsSUFBSWlCLGlCQUFpQkMsU0FBU0YsSUFBVCxDQUFjRyxJQUFkLENBQW1CeEQsT0FBT0UsU0FBUCxDQUFpQm9ELGNBQXBDO1lBRXJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bc0JKLEdBQ0ksTUFBTUcsYUFBYSxDQUFDckIsUUFBUXNCLFdBQVcsQ0FBQSxDQUFwQixFQUF3QmxDLFdBQVcsQ0FBQSxDQUFuQztnQkFDakIsSUFBSW1DLFFBQVEzRCxPQUFPNEQsTUFBUCxDQUFjO2dCQUMxQixJQUFJQyxXQUFXO29CQUNiNUMsS0FBSTZDLFdBQUQsRUFBY0MsSUFBZDt3QkFDRCxPQUFPQSxRQUFRM0IsVUFBVTJCLFFBQVFKO29CQUNsQztvQkFFRDVDLEtBQUkrQyxXQUFELEVBQWNDLElBQWQsRUFBb0JDLFFBQXBCO3dCQUNELElBQUlELFFBQVFKLE9BQ1YsT0FBT0EsS0FBSyxDQUFDSSxLQUFiO3dCQUdGLElBQUksQ0FBRUEsQ0FBQUEsUUFBUTNCLE1BQUFBLEdBQ1osT0FBT3RCO3dCQUdULElBQUlNLFFBQVFnQixNQUFNLENBQUMyQixLQUFuQjt3QkFFQSxJQUFJLE9BQU8zQyxVQUFVLFlBQVk7NEJBQy9CLG9FQUFBOzRCQUNBLGdCQUFBOzRCQUVBLElBQUksT0FBT3NDLFFBQVEsQ0FBQ0ssS0FBaEIsS0FBMEIsWUFDNUIsa0RBQUE7NEJBQ0EzQyxRQUFRMEIsV0FBV1YsUUFBUUEsTUFBTSxDQUFDMkIsS0FBaEIsRUFBdUJMLFFBQVEsQ0FBQ0ssS0FBaEM7aUNBQ2IsSUFBSVQsZUFBZTlCLFVBQVV1QyxPQUFPO2dDQUN6Qyw4REFBQTtnQ0FDQSwwQkFBQTtnQ0FDQSxJQUFJZixVQUFVZixrQkFBa0I4QixNQUFNdkMsUUFBUSxDQUFDdUMsS0FBaEI7Z0NBQy9CM0MsUUFBUTBCLFdBQVdWLFFBQVFBLE1BQU0sQ0FBQzJCLEtBQWhCLEVBQXVCZjs0QkFDMUMsT0FDQyxnRUFBQTs0QkFDQSxtREFBQTs0QkFDQTVCLFFBQVFBLE1BQU1vQyxJQUFOLENBQVdwQjt3QkFFdEIsT0FBTSxJQUFJLE9BQU9oQixVQUFVLFlBQVlBLFVBQVUsUUFDdENrQyxDQUFBQSxlQUFlSSxVQUFVSyxTQUN6QlQsZUFBZTlCLFVBQVV1QyxLQUFYLEdBQ3hCLHNFQUFBO3dCQUNBLG9FQUFBO3dCQUNBLFlBQUE7d0JBQ0EzQyxRQUFRcUMsV0FBV3JDLE9BQU9zQyxRQUFRLENBQUNLLEtBQWpCLEVBQXdCdkMsUUFBUSxDQUFDdUMsS0FBakM7NkJBQ2IsSUFBSVQsZUFBZTlCLFVBQVUsTUFDbEMsc0NBQUE7d0JBQ0FKLFFBQVFxQyxXQUFXckMsT0FBT3NDLFFBQVEsQ0FBQ0ssS0FBakIsRUFBd0J2QyxRQUFRLENBQUMsSUFBakM7NkJBQ2I7NEJBQ0wsc0RBQUE7NEJBQ0EsdURBQUE7NEJBQ0F4QixPQUFPaUUsY0FBUCxDQUFzQk4sT0FBT0ksTUFBTTtnQ0FDakNHLGNBQWM7Z0NBQ2RDLFlBQVk7Z0NBQ1pwRDtvQ0FDRSxPQUFPcUIsTUFBTSxDQUFDMkIsS0FBZDtnQ0FDRDtnQ0FDRDdDLEtBQUlFLEtBQUQ7b0NBQ0RnQixNQUFNLENBQUMyQixLQUFQLEdBQWUzQztnQ0FDaEI7NEJBUmdDOzRCQVduQyxPQUFPQTt3QkFDUjt3QkFFRHVDLEtBQUssQ0FBQ0ksS0FBTixHQUFjM0M7d0JBQ2QsT0FBT0E7b0JBQ1I7b0JBRURGLEtBQUk0QyxXQUFELEVBQWNDLElBQWQsRUFBb0IzQyxLQUFwQixFQUEyQjRDLFFBQTNCO3dCQUNELElBQUlELFFBQVFKLE9BQ1ZBLEtBQUssQ0FBQ0ksS0FBTixHQUFjM0M7NkJBRWRnQixNQUFNLENBQUMyQixLQUFQLEdBQWUzQzt3QkFFakIsT0FBTztvQkFDUjtvQkFFRDZDLGdCQUFlSCxXQUFELEVBQWNDLElBQWQsRUFBb0JLLElBQXBCO3dCQUNaLE9BQU9DLFFBQVFKLGNBQVIsQ0FBdUJOLE9BQU9JLE1BQU1LO29CQUM1QztvQkFFREUsZ0JBQWVSLFdBQUQsRUFBY0MsSUFBZDt3QkFDWixPQUFPTSxRQUFRQyxjQUFSLENBQXVCWCxPQUFPSTtvQkFDdEM7Z0JBL0VZLEdBa0ZmLHlFQWxGZTtnQkFtRmYsdUVBQUE7Z0JBQ0Esa0VBQUE7Z0JBQ0EsZ0VBQUE7Z0JBQ0EsMkRBQUE7Z0JBQ0EsMEVBQUE7Z0JBQ0EsRUFBQTtnQkFDQSxxRUFBQTtnQkFDQSx1RUFBQTtnQkFDQSx5Q0FBQTtnQkFDQSxJQUFJRCxjQUFjOUQsT0FBTzRELE1BQVAsQ0FBY3hCO2dCQUNoQyxPQUFPLElBQUlhLE1BQU1hLGFBQWFEO1lBQy9CO1lBRUQ7Ozs7Ozs7Ozs7Ozs7OztPQWVKLEdBQ0ksTUFBTVUsWUFBWUMsQ0FBQUEsYUFBZSxDQUFBO29CQUMvQkMsYUFBWXJDLE1BQUQsRUFBU3NDLFFBQVQsRUFBbUIsR0FBR3JDLElBQXRCO3dCQUNURCxPQUFPcUMsV0FBUCxDQUFtQkQsV0FBV3pELEdBQVgsQ0FBZTJELGNBQWNyQztvQkFDakQ7b0JBRURzQyxhQUFZdkMsTUFBRCxFQUFTc0MsUUFBVDt3QkFDVCxPQUFPdEMsT0FBT3VDLFdBQVAsQ0FBbUJILFdBQVd6RCxHQUFYLENBQWUyRDtvQkFDMUM7b0JBRURFLGdCQUFleEMsTUFBRCxFQUFTc0MsUUFBVDt3QkFDWnRDLE9BQU93QyxjQUFQLENBQXNCSixXQUFXekQsR0FBWCxDQUFlMkQ7b0JBQ3RDO2dCQVg4QixDQUFBO1lBY2pDLE1BQU1HLDRCQUE0QixJQUFJcEUsZUFBZWlFLENBQUFBO2dCQUNuRCxJQUFJLE9BQU9BLGFBQWEsWUFDdEIsT0FBT0E7Z0JBR1Q7Ozs7Ozs7U0FPTixHQUNNLE9BQU8sU0FBU0ksa0JBQWtCQyxHQUEzQjtvQkFDTCxNQUFNQyxhQUFhdkIsV0FBV3NCLEtBQUssQ0FBbkMsR0FBc0Q7d0JBQ3BERSxZQUFZOzRCQUNWM0MsU0FBUzs0QkFDVEMsU0FBUzt3QkFGQztvQkFEd0M7b0JBTXREbUMsU0FBU007Z0JBQ1Y7WUFDRjtZQUVELE1BQU1FLG9CQUFvQixJQUFJekUsZUFBZWlFLENBQUFBO2dCQUMzQyxJQUFJLE9BQU9BLGFBQWEsWUFDdEIsT0FBT0E7Z0JBR1Q7Ozs7Ozs7Ozs7Ozs7Ozs7U0FnQk4sR0FDTSxPQUFPLFNBQVNTLFVBQVV2RCxPQUFuQixFQUE0QndELE1BQTVCLEVBQW9DQyxZQUFwQztvQkFDTCxJQUFJQyxzQkFBc0I7b0JBRTFCLElBQUlDO29CQUNKLElBQUlDLHNCQUFzQixJQUFJaEQsUUFBUVYsQ0FBQUE7d0JBQ3BDeUQsc0JBQXNCLFNBQVNFLFFBQVQ7NEJBQ3BCSCxzQkFBc0I7NEJBQ3RCeEQsUUFBUTJEO3dCQUNUO29CQUNGO29CQUVELElBQUlDO29CQUNKLElBQUk7d0JBQ0ZBLFNBQVNoQixTQUFTOUMsU0FBU3dELFFBQVFHO29CQUNwQyxFQUFDLE9BQU9JLEtBQUs7d0JBQ1pELFNBQVNsRCxRQUFRYixNQUFSLENBQWVnRTtvQkFDekI7b0JBRUQsTUFBTUMsbUJBQW1CRixXQUFXLFFBQVF2RSxXQUFXdUUsU0FFdkQsK0RBRkE7b0JBR0EseURBQUE7b0JBQ0EsNkRBQUE7b0JBQ0EsSUFBSUEsV0FBVyxRQUFRLENBQUNFLG9CQUFvQixDQUFDTixxQkFDM0MsT0FBTztxQkFHVCw2REFGQztvQkFHRCxpRUFBQTtvQkFDQSxpRUFBQTtvQkFDQSxZQUFBO29CQUNBLE1BQU1PLHFCQUFzQnRFLENBQUFBO3dCQUMxQkEsUUFBUUYsSUFBUixDQUFheUUsQ0FBQUE7NEJBQ1gsMEJBQUE7NEJBQ0FULGFBQWFTO3dCQUNkLEdBQUVDLENBQUFBOzRCQUNELGdFQUFBOzRCQUNBLDJEQUFBOzRCQUNBLElBQUluRTs0QkFDSixJQUFJbUUsU0FBVUEsQ0FBQUEsaUJBQWlCakcsU0FDM0IsT0FBT2lHLE1BQU1uRSxPQUFiLEtBQXlCLFFBQUEsR0FDM0JBLFVBQVVtRSxNQUFNbkUsT0FBaEI7aUNBRUFBLFVBQVU7NEJBR1p5RCxhQUFhO2dDQUNYVyxtQ0FBbUM7Z0NBQ25DcEU7NEJBRlc7d0JBSWQsR0FBRXFFLEtBbEJILENBa0JTTixDQUFBQTs0QkFDUCxnRUFBQTs0QkFDQWhELFFBQVFvRCxLQUFSLENBQWMsMkNBQTJDSjt3QkFDMUQ7b0JBQ0YsR0FFRCxtRUFGQztvQkFHRCx3RUFBQTtvQkFDQSxpREFBQTtvQkFDQSxJQUFJQyxrQkFDRkMsbUJBQW1CSDt5QkFFbkJHLG1CQUFtQkw7cUJBR3JCLGlEQUZDO29CQUdELE9BQU87Z0JBQ1I7WUFDRjtZQUVELE1BQU1VLDZCQUE2QixDQUFDLEVBQUN2RSxNQUFELEVBQVNHLE9BQUFBLEVBQVYsRUFBb0JxRTtnQkFDckQsSUFBSTlGLGNBQWNULE9BQWQsQ0FBc0I4QixTQUExQjtvQkFDRSxnRkFBQTtvQkFDQSwwQ0FBQTtvQkFDQSxrRUFBQTtvQkFDQSxJQUFJckIsY0FBY1QsT0FBZCxDQUFzQjhCLFNBQXRCLENBQWdDRSxPQUFoQyxLQUE0Q3pCLGtEQUM5QzJCO3lCQUVBSCxPQUFPLElBQUk3QixNQUFNTyxjQUFjVCxPQUFkLENBQXNCOEIsU0FBdEIsQ0FBZ0NFLE9BQTFDO3VCQUVKLElBQUl1RSxTQUFTQSxNQUFNSCxpQ0FBbkIsRUFDTCx5REFBQTtnQkFDQSxxQkFBQTtnQkFDQXJFLE9BQU8sSUFBSTdCLE1BQU1xRyxNQUFNdkUsT0FBaEI7cUJBRVBFLFFBQVFxRTtZQUVYO1lBRUQsTUFBTUMscUJBQXFCLENBQUNsRSxNQUFNVixVQUFVNkUsaUJBQWlCLEdBQUdoRTtnQkFDOUQsSUFBSUEsS0FBSzdCLE1BQUwsR0FBY2dCLFNBQVNjLE9BQTNCLEVBQ0UsTUFBTSxJQUFJeEMsTUFBTyxDQUFBLGtCQUFBLEVBQW9CMEIsU0FBU2MsT0FBUSxDQUFBLENBQUEsRUFBR1AsbUJBQW1CUCxTQUFTYyxPQUFWLEVBQW1CLEtBQUEsRUFBT0osS0FBSyxRQUFBLEVBQVVHLEtBQUs3QixNQUFPLENBQUEsQ0FBMUg7Z0JBR1IsSUFBSTZCLEtBQUs3QixNQUFMLEdBQWNnQixTQUFTZSxPQUEzQixFQUNFLE1BQU0sSUFBSXpDLE1BQU8sQ0FBQSxpQkFBQSxFQUFtQjBCLFNBQVNlLE9BQVEsQ0FBQSxDQUFBLEVBQUdSLG1CQUFtQlAsU0FBU2UsT0FBVixFQUFtQixLQUFBLEVBQU9MLEtBQUssUUFBQSxFQUFVRyxLQUFLN0IsTUFBTyxDQUFBLENBQXpIO2dCQUdSLE9BQU8sSUFBSWdDLFFBQVEsQ0FBQ1YsU0FBU0g7b0JBQzNCLE1BQU0yRSxZQUFZSiwyQkFBMkIxQyxJQUEzQixDQUFnQyxNQUFNO3dCQUFDMUI7d0JBQVNIO29CQUFWO29CQUN4RFUsS0FBS2tFLElBQUwsQ0FBVUQ7b0JBQ1ZELGdCQUFnQkcsV0FBaEIsSUFBK0JuRTtnQkFDaEM7WUFDRjtZQUVELE1BQU1vRSxpQkFBaUI7Z0JBQ3JCQyxVQUFVO29CQUNSQyxTQUFTO3dCQUNQN0IsbUJBQW1CUCxVQUFVTTtvQkFEdEI7Z0JBREQ7Z0JBS1ZqRixTQUFTO29CQUNQdUYsV0FBV1osVUFBVVc7b0JBQ3JCMEIsbUJBQW1CckMsVUFBVVc7b0JBQzdCc0IsYUFBYUosbUJBQW1CNUMsSUFBbkIsQ0FBd0IsTUFBTSxlQUFlO3dCQUFDbEIsU0FBUzt3QkFBR0MsU0FBUztvQkFBdEI7Z0JBSG5EO2dCQUtUc0UsTUFBTTtvQkFDSkwsYUFBYUosbUJBQW1CNUMsSUFBbkIsQ0FBd0IsTUFBTSxlQUFlO3dCQUFDbEIsU0FBUzt3QkFBR0MsU0FBUztvQkFBdEI7Z0JBRHREO1lBWGU7WUFldkIsTUFBTXVFLGtCQUFrQjtnQkFDdEJDLE9BQU87b0JBQUN6RSxTQUFTO29CQUFHQyxTQUFTO2dCQUF0QjtnQkFDUHhCLEtBQUs7b0JBQUN1QixTQUFTO29CQUFHQyxTQUFTO2dCQUF0QjtnQkFDTHJCLEtBQUs7b0JBQUNvQixTQUFTO29CQUFHQyxTQUFTO2dCQUF0QjtZQUhpQjtZQUt4QmpDLFlBQVkwRyxPQUFaLEdBQXNCO2dCQUNwQkwsU0FBUztvQkFBQyxLQUFLRztnQkFBTjtnQkFDVEcsVUFBVTtvQkFBQyxLQUFLSDtnQkFBTjtnQkFDVkksVUFBVTtvQkFBQyxLQUFLSjtnQkFBTjtZQUhVO1lBTXRCLE9BQU9yRCxXQUFXcEQsZUFBZW9HLGdCQUFnQm5HO1FBQ2xELEdBRUQseUVBRkM7UUFHRCwrQkFBQTtRQUNBNkcsUUFBT0MsT0FBUCxHQUFpQmhILFNBQVNUO0lBQzNCLE9BQ0N3SCxRQUFPQyxPQUFQLEdBQWlCMUgsV0FBV0ssT0FBNUI7QTs7Ozs7OENDN3JDVzsrQ0FFQTtvREFFQTttREFFQTtnREFFQTtrREFFQTtBQVZOLE1BQU0sV0FBVyxDQUFDLHljQUF5YyxDQUFDO0FBRTVkLE1BQU0sWUFBWSxDQUFDLHdZQUF3WSxDQUFDO0FBRTVaLE1BQU0saUJBQWlCLENBQUMsbVpBQW1aLENBQUM7QUFFNWEsTUFBTSxnQkFBZ0IsQ0FBQyx3M0JBQXczQixDQUFDO0FBRWg1QixNQUFNLGFBQWEsQ0FBQyw0aEJBQTRoQixDQUFDO0FBRWpqQixNQUFNLGVBQWUsQ0FBQyxnb0JBQWdvQixDQUFDOzs7QUNWOXBCLFFBQVEsY0FBYyxHQUFHLFNBQVUsQ0FBQztJQUNsQyxPQUFPLEtBQUssRUFBRSxVQUFVLEdBQUcsSUFBSTtRQUFDLFNBQVM7SUFBQztBQUM1QztBQUVBLFFBQVEsaUJBQWlCLEdBQUcsU0FBVSxDQUFDO0lBQ3JDLE9BQU8sY0FBYyxDQUFDLEdBQUcsY0FBYztRQUFDLE9BQU87SUFBSTtBQUNyRDtBQUVBLFFBQVEsU0FBUyxHQUFHLFNBQVUsTUFBTSxFQUFFLElBQUk7SUFDeEMsT0FBTyxJQUFJLENBQUMsUUFBUSxPQUFPLENBQUMsU0FBVSxHQUFHO1FBQ3ZDLElBQ0UsUUFBUSxhQUNSLFFBQVEsZ0JBQ1IsT0FBTyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLE1BRTNDO1FBR0YsT0FBTyxjQUFjLENBQUMsTUFBTSxLQUFLO1lBQy9CLFlBQVk7WUFDWixLQUFLO2dCQUNILE9BQU8sTUFBTSxDQUFDLElBQUk7WUFDcEI7UUFDRjtJQUNGO0lBRUEsT0FBTztBQUNUO0FBRUEsUUFBUSxNQUFNLEdBQUcsU0FBVSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUc7SUFDNUMsT0FBTyxjQUFjLENBQUMsTUFBTSxVQUFVO1FBQ3BDLFlBQVk7UUFDWixLQUFLO0lBQ1A7QUFDRjs7O0FDbENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEwQ0U7O0FBRUYsOENBQWdCO0FBQVQsU0FBUyxTQUFTLEdBQUc7SUFDM0IsMkJBQTJCO0lBQzNCLElBQUksSUFBSSxHQUNQLElBQUksR0FDSixJQUFJO0lBQ0wsSUFBSSxJQUFJLE1BQU0sS0FBSyxHQUFHO1FBQ3JCLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUU7UUFDOUIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRTtRQUM5QixJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFO0lBQy9CLE9BQU8sSUFBSSxJQUFJLE1BQU0sS0FBSyxHQUFHO1FBQzVCLElBQUksU0FBUyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUk7UUFDOUIsSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSTtRQUM5QixJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJO0lBQy9CO0lBRUEsMEJBQTBCO0lBQzFCLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLE1BQU0sTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUc7SUFDM0IsTUFBTSxNQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRztJQUMzQixJQUFJLEdBQ0gsR0FDQSxJQUFJLEFBQUMsQ0FBQSxNQUFNLEdBQUUsSUFBSztJQUVuQixJQUFJLFFBQVEsS0FDWCxJQUFJLElBQUksRUFBRSxhQUFhOztTQUNqQjtRQUNOLE1BQU0sSUFBSSxNQUFNO1FBQ2hCLElBQUksSUFBSSxNQUFNLElBQUssQ0FBQSxJQUFJLE1BQU0sR0FBRSxJQUFLLElBQUssQ0FBQSxNQUFNLEdBQUU7UUFDakQsT0FBUTtZQUNQLEtBQUs7Z0JBQ0osSUFBSSxBQUFDLENBQUEsSUFBSSxDQUFBLElBQUssSUFBSyxDQUFBLElBQUksSUFBSSxJQUFJLENBQUE7Z0JBQy9CO1lBQ0QsS0FBSztnQkFDSixJQUFJLEFBQUMsQ0FBQSxJQUFJLENBQUEsSUFBSyxJQUFJO2dCQUNsQjtZQUNELEtBQUs7Z0JBQ0osSUFBSSxBQUFDLENBQUEsSUFBSSxDQUFBLElBQUssSUFBSTtnQkFDbEI7UUFDRjtRQUNBLEtBQUs7SUFDTjtJQUVBLE9BQU87UUFBQyxLQUFLLEtBQUssQ0FBQyxJQUFJO1FBQU0sS0FBSyxLQUFLLENBQUMsSUFBSTtRQUFNLEtBQUssS0FBSyxDQUFDLElBQUk7S0FBSztBQUN2RTs7O0FDekZBLFVBQVU7OztrREFzRUM7QUErTlgsb0NBQW9DO0FBQ3BDLDBEQUFnQjtBQXJTaEI7O0FBQ0E7QUFFQSxZQUFZO0FBQ1osTUFBTSxXQUFXO0lBQ2hCLFlBQVksaUJBQWlCLFNBQVMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO0lBQ3hFLFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtBQUNiO0FBRUEsTUFBTSxhQUFhO0lBQ2xCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNBO0FBRUQsTUFBTSxzQkFBc0IsQ0FBQyxzSEFBc0gsQ0FBQztBQUVwSixJQUFJLHFCQUFxQixNQUN4Qix1QkFBdUIsTUFDdkIsMEJBQTBCO0FBRTNCLE1BQU0sZUFBZTtJQUNwQixNQUFNO0lBQ04sV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWSxTQUFTLFFBQVE7SUFDN0Isa0JBQWtCLFNBQVMsUUFBUTtJQUNuQyxNQUFNO0lBQ04sS0FBSztJQUNMLEtBQUs7QUFDTjtBQUVBLE1BQU0saUJBQWlCO0lBQ3RCLE1BQU07SUFDTixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZLFNBQVMsVUFBVTtJQUMvQixrQkFBa0IsU0FBUyxVQUFVO0lBQ3JDLE1BQU07SUFDTixLQUFLO0lBQ0wsS0FBSztBQUNOO0FBRUEsTUFBTSxvQkFBb0I7SUFDekIsTUFBTTtJQUNOLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVksU0FBUyxhQUFhO0lBQ2xDLGtCQUFrQixTQUFTLGFBQWE7SUFDeEMsTUFBTTtJQUNOLEtBQUs7SUFDTCxLQUFLO0FBQ047QUFHTyxJQUFJLGVBQWUsQ0FBQzs7Ozs7Ozs7OztZQVVmLEVBQUUsV0FBVyxHQUFHLENBQ3hCLENBQUMsT0FBUyxDQUFDLGVBQWUsRUFBRSxTQUFTLFlBQVksU0FBUyxVQUFVLEdBQUcsS0FBSyxFQUFFLEVBQUUsS0FBSyxTQUFTLENBQUMsRUFDOUYsSUFBSSxDQUFDLElBQUk7Ozs7TUFJUixFQUFFLENBQUEsR0FBQSw4QkFBaUIsQUFBRCxFQUFFLGNBQWM7TUFDbEMsRUFBRSxDQUFBLEdBQUEsZ0NBQW1CLEFBQUQsRUFBRSxnQkFBZ0I7TUFDdEMsRUFBRSxDQUFBLEdBQUEsZ0NBQW1CLEFBQUQsRUFBRSxtQkFBbUI7OztNQUd6QyxFQUFFLENBQUEsR0FBQSx5QkFBWSxBQUFELEVBQUU7SUFBRSxJQUFJO0lBQWEsU0FBUztJQUFlLFVBQVU7SUFBTyxXQUFXO0FBQWMsR0FBRzs7O0FBRzdHLENBQUM7QUFFRCxxQ0FBcUM7QUFDckMsU0FBUyxjQUFjLGFBQWEsRUFBRSxRQUFRO0lBQzdDLE1BQU0sVUFBVSxTQUFTLGFBQWEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztJQUN6RSxRQUFRLEtBQUssR0FBRyxhQUFhLFlBQVksUUFBUSxDQUFDLGNBQWMsR0FBRztBQUNwRTtBQUVBLDZCQUE2QjtBQUM3QixTQUFTLGNBQWMsUUFBUTtJQUM5QixPQUFPLE9BQU8sQ0FBQyxVQUFVLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNO1FBQzdDLFNBQVMsZUFBZSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7UUFDdkQsY0FBYyxLQUFLO1FBRW5CLFFBQVEsR0FBRyxDQUFDLHNCQUFzQixpQkFBaUIsU0FBUyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3pHO0FBQ0Q7QUFFQSw4Q0FBOEM7QUFDOUMsZUFBZSxhQUFhLFFBQVE7SUFDbkMsSUFBSTtRQUNILE1BQU0sQ0FBQSxHQUFBLG9DQUFPLEFBQUQsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNoQyxFQUFFLE9BQU8sT0FBTztRQUNmLFFBQVEsS0FBSyxDQUFDLDRCQUE0QjtJQUMzQztBQUNEO0FBRUEsZ0RBQWdEO0FBQ2hELGVBQWU7SUFDZCxJQUFJO1FBQ0gsTUFBTSxXQUFXLE1BQU0sQ0FBQSxHQUFBLG9DQUFPLEFBQUQsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQztRQUU1RCxJQUFJLFNBQVMsVUFBVSxJQUFJLFNBQVMsVUFBVSxLQUFLLFNBQVMsVUFBVSxFQUNyRSxlQUFlLFNBQVMsVUFBVTtRQUVuQyxjQUFjO0lBQ2YsRUFBRSxPQUFPLE9BQU87UUFDZixRQUFRLEtBQUssQ0FBQyw0QkFBNEI7SUFDM0M7QUFDRDtBQUVBLDRDQUE0QztBQUM1QyxTQUFTLGVBQWUsVUFBVTtJQUNqQyxNQUFNLE9BQU8sQ0FBQyx5Q0FBeUMsRUFBRSxXQUFXLE9BQU8sQ0FDMUUsS0FDQSxLQUNDLEVBQUUsb0JBQW9CLGFBQWEsQ0FBQztJQUN0QyxNQUFNLE9BQU8sU0FBUyxhQUFhLENBQUM7SUFDcEMsS0FBSyxHQUFHLEdBQUc7SUFDWCxLQUFLLElBQUksR0FBRztJQUNaLFNBQVMsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUMzQjtBQUVBLHdDQUF3QztBQUN4QyxTQUFTO0lBQ1IsT0FBTyxNQUFNLElBQUksQ0FBQyxTQUFTLGdCQUFnQixDQUFDO0FBQzdDO0FBQ0EsMkNBQTJDO0FBQzNDLFNBQVM7SUFDUixNQUFNLFFBQVE7SUFFZCxNQUFNLE9BQU8sQ0FBQyxDQUFDO1FBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQ3RCLEtBQUssTUFBTTtJQUViO0FBQ0Q7QUFFQSxvQ0FBb0M7QUFDcEMsU0FBUyxtQkFBbUIsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7SUFDcEQsSUFBSSxNQUFNLGFBQWE7UUFDdEIsYUFBYTtRQUNiLE9BQU87SUFDUixPQUFPLElBQUksYUFBYSxPQUFPLGFBQWEsS0FBSztRQUNoRCxhQUFhLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxLQUFLLEVBQUUsSUFBSSxDQUFDO1FBQ3ZELE9BQU87SUFDUjtJQUNBLE9BQU87QUFDUjtBQUVBLHFDQUFxQztBQUNyQyxTQUFTLGFBQWEsT0FBTztJQUM1QixxQ0FBcUM7SUFDckMsTUFBTSxnQkFBZ0IsU0FBUyxhQUFhLENBQUM7SUFDN0MsSUFBSSxlQUFlLGNBQWMsTUFBTTtJQUV2QywwQ0FBMEM7SUFDMUMsTUFBTSxlQUFlLFNBQVMsYUFBYSxDQUFDO0lBQzVDLGFBQWEsU0FBUyxHQUFHO0lBQ3pCLGFBQWEsV0FBVyxHQUFHO0lBQzNCLFNBQVMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUUxQiwyQ0FBMkM7SUFDM0MsV0FBVztRQUNWLGFBQWEsTUFBTTtJQUNwQixHQUFHO0FBQ0o7QUFFQSw2QkFBNkI7QUFDN0IsU0FBUyxhQUFhLFFBQVEsRUFBRSxhQUFhLENBQUM7SUFDN0MsNkNBQTZDO0lBQzdDLFdBQVcsU0FBUyxPQUFPLENBQUMsZ0JBQWdCO0lBQzVDLGtFQUFrRTtJQUNsRSxJQUFJLFlBQVksV0FBVyxVQUFVLE9BQU8sQ0FBQztJQUM3Qyw4Q0FBOEM7SUFDOUMsWUFBWSxVQUFVLE9BQU8sQ0FBQyxVQUFVO0lBQ3hDLDBDQUEwQztJQUMxQyxPQUFPO0FBQ1I7QUFFQSxzQ0FBc0M7QUFDdEMsU0FBUyxlQUFlLENBQUM7SUFDeEIsTUFBTSxTQUFTLGFBQWEsRUFBRSxNQUFNLENBQUMsS0FBSztJQUMxQyxxQkFBcUIsYUFBYSxvQkFBb0I7SUFFdEQsSUFBSSx1QkFBdUIsUUFBUTtJQUVuQyxJQUFJLENBQUMsbUJBQW1CLFFBQVEsYUFBYSxHQUFHLEVBQUUsYUFBYSxHQUFHLEdBQUc7UUFDcEUsY0FBYyxZQUFZO1FBQzFCLGNBQWM7WUFBRSxVQUFVO1FBQW1CO1FBQzdDLGFBQWE7WUFBRSxVQUFVO1FBQW1CO1FBQzVDLCtDQUErQztRQUMvQyxpREFBaUQ7UUFDakQsZ0RBQWdEO1FBQ2hEO0lBQ0Q7SUFFQSxjQUFjO1FBQUUsVUFBVTtJQUFPO0lBQ2pDLGFBQWE7UUFBRSxVQUFVO0lBQU87QUFDakM7QUFFQSx3Q0FBd0M7QUFDeEMsU0FBUyxpQkFBaUIsQ0FBQztJQUMxQixNQUFNLFNBQVMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxLQUFLO0lBQzFDLHVCQUF1QixhQUFhLHNCQUFzQjtJQUUxRCxJQUFJLHlCQUF5QixRQUFRO0lBRXJDLElBQUksQ0FBQyxtQkFBbUIsUUFBUSxlQUFlLEdBQUcsRUFBRSxlQUFlLEdBQUcsR0FBRztRQUN4RSxjQUFjLGNBQWM7UUFDNUIsY0FBYztZQUFFLFlBQVk7UUFBcUI7UUFDakQsYUFBYTtZQUFFLFlBQVk7UUFBcUI7UUFDaEQ7SUFDRDtJQUVBLGNBQWM7UUFBRSxZQUFZO0lBQU87SUFDbkMsYUFBYTtRQUFFLFlBQVk7SUFBTztBQUNuQztBQUVBLDJDQUEyQztBQUMzQyxTQUFTLG9CQUFvQixDQUFDO0lBQzdCLE1BQU0sU0FBUyxhQUFhLEVBQUUsTUFBTSxDQUFDLEtBQUs7SUFDMUMsMEJBQTBCLGFBQWEseUJBQXlCO0lBRWhFLElBQUksNEJBQTRCLFFBQVE7SUFFeEMsSUFBSSxDQUFDLG1CQUFtQixRQUFRLGtCQUFrQixHQUFHLEVBQUUsa0JBQWtCLEdBQUcsR0FBRztRQUM5RSxjQUFjLGlCQUFpQjtRQUMvQixjQUFjO1lBQUUsZUFBZTtRQUF3QjtRQUN2RCxhQUFhO1lBQUUsZUFBZTtRQUF3QjtRQUN0RDtJQUNEO0lBRUEsY0FBYztRQUFFLGVBQWU7SUFBTztJQUN0QyxhQUFhO1FBQUUsZUFBZTtJQUFPO0FBQ3RDO0FBRUEsd0NBQXdDO0FBQ3hDLGVBQWUsaUJBQWlCLENBQUM7SUFDaEMsTUFBTSxlQUFlLEVBQUUsTUFBTSxDQUFDLEtBQUs7SUFFbkMseUNBQXlDO0lBQ3pDO0lBQ0EsSUFBSSxpQkFBaUIsU0FBUyxVQUFVLEVBQUU7UUFDekMsc0NBQXNDO1FBQ3RDLGVBQWU7UUFDZixjQUFjO1lBQUUsWUFBWTtRQUFhO1FBQ3pDLElBQUk7WUFDSCxNQUFNLGFBQWE7Z0JBQUUsWUFBWTtZQUFhO1FBQy9DLEVBQUUsT0FBTyxPQUFPO1lBQ2YsUUFBUSxLQUFLLENBQUMsK0JBQStCO1FBQzlDO0lBQ0QsT0FBTztRQUNOLDhCQUE4QjtRQUM5QixjQUFjO1FBQ2QsSUFBSTtZQUNILE1BQU0sYUFBYTtRQUNwQixFQUFFLE9BQU8sT0FBTztZQUNmLFFBQVEsS0FBSyxDQUFDLGdDQUFnQztRQUMvQztJQUNEO0FBQ0Q7QUFFQSxxQ0FBcUM7QUFDckMsU0FBUztJQUNSLGNBQWM7SUFDZCxhQUFhO0FBQ2Q7QUFHTyxTQUFTO0lBQ2YsTUFBTSxZQUFZO1FBQ2pCLGtCQUFrQixTQUFTLGFBQWEsQ0FBQztRQUN6QyxlQUFlLFNBQVMsYUFBYSxDQUFDO1FBQ3RDLGlCQUFpQixTQUFTLGFBQWEsQ0FBQztRQUN4QyxvQkFBb0IsU0FBUyxhQUFhLENBQUM7UUFDM0MsY0FBYyxTQUFTLGFBQWEsQ0FBQztJQUN0QztJQUVBLFVBQVUsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsVUFBVTtJQUN0RCxVQUFVLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRO0lBQ2pELFVBQVUsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFFBQVE7SUFDbkQsVUFBVSxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRO0lBRXRELFVBQVUsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztRQUNsRCxxQkFBcUIsRUFBRSxNQUFNLENBQUMsS0FBSztJQUNwQztJQUNBLFVBQVUsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztRQUNwRCx1QkFBdUIsRUFBRSxNQUFNLENBQUMsS0FBSztJQUN0QztJQUNBLFVBQVUsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBQ3ZELDBCQUEwQixFQUFFLE1BQU0sQ0FBQyxLQUFLO0lBQ3pDO0lBRUEsVUFBVSxhQUFhLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1FBQ3JELElBQUksRUFBRSxHQUFHLEtBQUssU0FBUztZQUN0QixFQUFFLGNBQWM7WUFDaEIsZUFBZTtZQUNmLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFDZDtJQUNEO0lBQ0EsVUFBVSxlQUFlLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1FBQ3ZELElBQUksRUFBRSxHQUFHLEtBQUssU0FBUztZQUN0QixFQUFFLGNBQWM7WUFDaEIsaUJBQWlCO1lBQ2pCLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFDZDtJQUNEO0lBQ0EsVUFBVSxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7UUFDMUQsSUFBSSxFQUFFLEdBQUcsS0FBSyxTQUFTO1lBQ3RCLEVBQUUsY0FBYztZQUNoQixvQkFBb0I7WUFDcEIsRUFBRSxNQUFNLENBQUMsSUFBSTtRQUNkO0lBQ0Q7SUFFQSxVQUFVLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTO0FBQ2xEO0FBRUEsc0NBQXNDO0FBQ3RDLFNBQVM7SUFDUiw2QkFBNkI7SUFDN0I7QUFDRDtBQUNBOzs7OztBQzVWQSx5REFBZ0I7QUF3QmhCLHVEQUFnQjtBQXdCaEIscUZBQXFGO0FBQ3JGLHNIQUFzSDtBQUV0SCxnQkFBZ0I7QUFFaEIsK0JBQStCO0FBQy9CLGlCQUFpQjtBQUNqQixvR0FBb0c7QUFDcEcsMEZBQTBGO0FBQzFGLFVBQVU7QUFDVix3Q0FBd0M7QUFDeEMsK01BQStNO0FBQy9NLGNBQWM7QUFDZCxTQUFTO0FBRVQsNENBQTRDO0FBQzVDLHVGQUF1RjtBQUN2RixpRUFBaUU7QUFDakUsY0FBYztBQUNkLGVBQWU7QUFDZixZQUFZO0FBQ1osTUFBTTtBQUNOLG9DQUFvQztBQUNwQyxpQkFBaUI7QUFDakIsc0hBQXNIO0FBQ3RILGdFQUFnRTtBQUNoRSxhQUFhO0FBQ2IsbUVBQW1FO0FBQ25FLGtFQUFrRTtBQUNsRSxjQUFjO0FBRWQsVUFBVTtBQUNWLHdDQUF3QztBQUN4Qyx1T0FBdU87QUFDdk8sY0FBYztBQUNkLFNBQVM7QUFDVCxlQUFlO0FBQ2YsWUFBWTtBQUNaLE1BQU07QUFDTixZQUFZO0FBQ1osb0RBQW9EO0FBQ3BELEtBQUs7QUFFTCxtQkFBbUI7QUFDbkIsSUFBSTtBQUVKLGtEQUFnQjtBQTlGVCxTQUFTLG9CQUFvQixFQUNuQyxJQUFJLEVBQ0osU0FBUyxFQUNULE9BQU8sRUFDUCxTQUFTLEVBQ1QsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixNQUFNLEVBQUUsRUFDUixNQUFNLEVBQUUsRUFDUixPQUFPLElBQUksRUFDWDtJQUNBLE9BQU8sQ0FBQztvQkFDVyxFQUFFLFVBQVUsa0NBQWtDLEVBQUUsSUFBSSxFQUFFLEtBQUssUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLO3dCQUM1RSxFQUFFLFFBQVE7NkJBQ0wsRUFBRSxVQUFVLE1BQU0sRUFBRSxRQUFRLFNBQVMsRUFBRSxXQUFXLGVBQWUsRUFBRSxpQkFBaUIscUVBQXFFLEVBQUUsSUFBSSxhQUFhLEVBQUUsSUFBSTs7OztrRUFJN0ksRUFBRSxLQUFLOzs7Y0FHM0QsQ0FBQztBQUNmO0FBRU8sU0FBUyxrQkFBa0IsRUFDakMsSUFBSSxFQUNKLFNBQVMsRUFDVCxPQUFPLEVBQ1AsU0FBUyxFQUNULFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsTUFBTSxDQUFDLEVBQ1AsTUFBTSxFQUFFLEVBQ1IsT0FBTyxJQUFJLEVBQ1g7SUFDQSxPQUFPLENBQUM7b0JBQ1csRUFBRSxVQUFVLG9EQUFvRCxFQUFFLElBQUksRUFBRSxLQUFLLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSzt3QkFDOUYsRUFBRSxRQUFROzs7a0VBR2dDLEVBQUUsS0FBSzs7OzZCQUc1QyxFQUFFLFVBQVUsTUFBTSxFQUFFLFFBQVEsU0FBUyxFQUFFLFdBQVcsZUFBZSxFQUFFLGlCQUFpQiw2RkFBNkYsRUFBRSxJQUFJLGFBQWEsRUFBRSxJQUFJOztjQUV6TixDQUFDO0FBQ2Y7QUFnRE8sU0FBUyxhQUFhLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsS0FBSyxFQUFFO0lBQzlFLE9BQU8sQ0FBQztvQkFDVyxFQUFFLEdBQUcsd0NBQXdDLEVBQUUsVUFBVSxFQUFFLEVBQUUsV0FBVyxhQUFhLEdBQUc7WUFDaEcsRUFBRSxRQUFROztDQUVyQixDQUFDO0FBQ0YiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtYnJvd3Nlci1obXIvbGliL3J1bnRpbWUtZWY5MWFmMThiOTJjMDc0NC5qcyIsInNyYy9qcy9jb250ZW50LmpzIiwic3JjL2pzL2FwcC9mbG9hdGluZ0J0bi5qcyIsIm5vZGVfbW9kdWxlcy93ZWJleHRlbnNpb24tcG9seWZpbGwvZGlzdC9icm93c2VyLXBvbHlmaWxsLmpzIiwic3JjL2pzL2FwcC9pY29ucy5qcyIsIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIiwic3JjL2pzL3V0aWxzL2hleFRvSFNMLmpzIiwic3JjL2pzL2FwcC9tYWluRm9udHMuanMiLCJzcmMvanMvYXBwL2NvbXBvbmVudHMvcmVuZGVyRm9udHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEhNUl9IT1NUID0gXCJsb2NhbGhvc3RcIjt2YXIgSE1SX1BPUlQgPSAxMjM0O3ZhciBITVJfU0VDVVJFID0gZmFsc2U7dmFyIEhNUl9FTlZfSEFTSCA9IFwiZGRmNmUwNzI0YmQzNThiZFwiO3ZhciBITVJfVVNFX1NTRSA9IGZhbHNlO21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRCA9IFwiNTljOTg4N2QxMjczMDY0N1wiO1widXNlIHN0cmljdFwiO1xuXG4vKiBnbG9iYWwgSE1SX0hPU1QsIEhNUl9QT1JULCBITVJfRU5WX0hBU0gsIEhNUl9TRUNVUkUsIEhNUl9VU0VfU1NFLCBjaHJvbWUsIGJyb3dzZXIsIF9fcGFyY2VsX19pbXBvcnRfXywgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXywgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlICovXG4vKjo6XG5pbXBvcnQgdHlwZSB7XG4gIEhNUkFzc2V0LFxuICBITVJNZXNzYWdlLFxufSBmcm9tICdAcGFyY2VsL3JlcG9ydGVyLWRldi1zZXJ2ZXIvc3JjL0hNUlNlcnZlci5qcyc7XG5pbnRlcmZhY2UgUGFyY2VsUmVxdWlyZSB7XG4gIChzdHJpbmcpOiBtaXhlZDtcbiAgY2FjaGU6IHt8W3N0cmluZ106IFBhcmNlbE1vZHVsZXx9O1xuICBob3REYXRhOiB7fFtzdHJpbmddOiBtaXhlZHx9O1xuICBNb2R1bGU6IGFueTtcbiAgcGFyZW50OiA/UGFyY2VsUmVxdWlyZTtcbiAgaXNQYXJjZWxSZXF1aXJlOiB0cnVlO1xuICBtb2R1bGVzOiB7fFtzdHJpbmddOiBbRnVuY3Rpb24sIHt8W3N0cmluZ106IHN0cmluZ3x9XXx9O1xuICBITVJfQlVORExFX0lEOiBzdHJpbmc7XG4gIHJvb3Q6IFBhcmNlbFJlcXVpcmU7XG59XG5pbnRlcmZhY2UgUGFyY2VsTW9kdWxlIHtcbiAgaG90OiB7fFxuICAgIGRhdGE6IG1peGVkLFxuICAgIGFjY2VwdChjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICBkaXNwb3NlKGNiOiAobWl4ZWQpID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGFjY2VwdChkZXBzOiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nLCBjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBkZWNsaW5lKCk6IHZvaWQsXG4gICAgX2FjY2VwdENhbGxiYWNrczogQXJyYXk8KEZ1bmN0aW9uKSA9PiB2b2lkPixcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogQXJyYXk8KG1peGVkKSA9PiB2b2lkPixcbiAgfH07XG59XG5pbnRlcmZhY2UgRXh0ZW5zaW9uQ29udGV4dCB7XG4gIHJ1bnRpbWU6IHt8XG4gICAgcmVsb2FkKCk6IHZvaWQsXG4gICAgZ2V0VVJMKHVybDogc3RyaW5nKTogc3RyaW5nO1xuICAgIGdldE1hbmlmZXN0KCk6IHttYW5pZmVzdF92ZXJzaW9uOiBudW1iZXIsIC4uLn07XG4gIHx9O1xufVxuZGVjbGFyZSB2YXIgbW9kdWxlOiB7YnVuZGxlOiBQYXJjZWxSZXF1aXJlLCAuLi59O1xuZGVjbGFyZSB2YXIgSE1SX0hPU1Q6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9QT1JUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfRU5WX0hBU0g6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9TRUNVUkU6IGJvb2xlYW47XG5kZWNsYXJlIHZhciBITVJfVVNFX1NTRTogYm9vbGVhbjtcbmRlY2xhcmUgdmFyIGNocm9tZTogRXh0ZW5zaW9uQ29udGV4dDtcbmRlY2xhcmUgdmFyIGJyb3dzZXI6IEV4dGVuc2lvbkNvbnRleHQ7XG5kZWNsYXJlIHZhciBfX3BhcmNlbF9faW1wb3J0X186IChzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG5kZWNsYXJlIHZhciBfX3BhcmNlbF9faW1wb3J0U2NyaXB0c19fOiAoc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuZGVjbGFyZSB2YXIgZ2xvYmFsVGhpczogdHlwZW9mIHNlbGY7XG5kZWNsYXJlIHZhciBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGU6IE9iamVjdDtcbiovXG52YXIgT1ZFUkxBWV9JRCA9ICdfX3BhcmNlbF9fZXJyb3JfX292ZXJsYXlfXyc7XG52YXIgT2xkTW9kdWxlID0gbW9kdWxlLmJ1bmRsZS5Nb2R1bGU7XG5mdW5jdGlvbiBNb2R1bGUobW9kdWxlTmFtZSkge1xuICBPbGRNb2R1bGUuY2FsbCh0aGlzLCBtb2R1bGVOYW1lKTtcbiAgdGhpcy5ob3QgPSB7XG4gICAgZGF0YTogbW9kdWxlLmJ1bmRsZS5ob3REYXRhW21vZHVsZU5hbWVdLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IFtdLFxuICAgIF9kaXNwb3NlQ2FsbGJhY2tzOiBbXSxcbiAgICBhY2NlcHQ6IGZ1bmN0aW9uIChmbikge1xuICAgICAgdGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2goZm4gfHwgZnVuY3Rpb24gKCkge30pO1xuICAgIH0sXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKGZuKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2goZm4pO1xuICAgIH1cbiAgfTtcbiAgbW9kdWxlLmJ1bmRsZS5ob3REYXRhW21vZHVsZU5hbWVdID0gdW5kZWZpbmVkO1xufVxubW9kdWxlLmJ1bmRsZS5Nb2R1bGUgPSBNb2R1bGU7XG5tb2R1bGUuYnVuZGxlLmhvdERhdGEgPSB7fTtcbnZhciBjaGVja2VkQXNzZXRzIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi8sIGFzc2V0c1RvRGlzcG9zZSAvKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovLCBhc3NldHNUb0FjY2VwdCAvKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovO1xuXG5mdW5jdGlvbiBnZXRIb3N0bmFtZSgpIHtcbiAgcmV0dXJuIEhNUl9IT1NUIHx8IChsb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKCdodHRwJykgPT09IDAgPyBsb2NhdGlvbi5ob3N0bmFtZSA6ICdsb2NhbGhvc3QnKTtcbn1cbmZ1bmN0aW9uIGdldFBvcnQoKSB7XG4gIHJldHVybiBITVJfUE9SVCB8fCBsb2NhdGlvbi5wb3J0O1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG52YXIgcGFyZW50ID0gbW9kdWxlLmJ1bmRsZS5wYXJlbnQ7XG5pZiAoKCFwYXJlbnQgfHwgIXBhcmVudC5pc1BhcmNlbFJlcXVpcmUpICYmIHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gIHZhciBwb3J0ID0gZ2V0UG9ydCgpO1xuICB2YXIgcHJvdG9jb2wgPSBITVJfU0VDVVJFIHx8IGxvY2F0aW9uLnByb3RvY29sID09ICdodHRwczonICYmICFbJ2xvY2FsaG9zdCcsICcxMjcuMC4wLjEnLCAnMC4wLjAuMCddLmluY2x1ZGVzKGhvc3RuYW1lKSA/ICd3c3MnIDogJ3dzJztcbiAgdmFyIHdzO1xuICBpZiAoSE1SX1VTRV9TU0UpIHtcbiAgICB3cyA9IG5ldyBFdmVudFNvdXJjZSgnL19fcGFyY2VsX2htcicpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICB3cyA9IG5ldyBXZWJTb2NrZXQocHJvdG9jb2wgKyAnOi8vJyArIGhvc3RuYW1lICsgKHBvcnQgPyAnOicgKyBwb3J0IDogJycpICsgJy8nKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHdzID0ge307XG4gICAgfVxuICB9XG5cbiAgLy8gV2ViIGV4dGVuc2lvbiBjb250ZXh0XG4gIHZhciBleHRDdHggPSB0eXBlb2YgYnJvd3NlciA9PT0gJ3VuZGVmaW5lZCcgPyB0eXBlb2YgY2hyb21lID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBjaHJvbWUgOiBicm93c2VyO1xuXG4gIC8vIFNhZmFyaSBkb2Vzbid0IHN1cHBvcnQgc291cmNlVVJMIGluIGVycm9yIHN0YWNrcy5cbiAgLy8gZXZhbCBtYXkgYWxzbyBiZSBkaXNhYmxlZCB2aWEgQ1NQLCBzbyBkbyBhIHF1aWNrIGNoZWNrLlxuICB2YXIgc3VwcG9ydHNTb3VyY2VVUkwgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICAoMCwgZXZhbCkoJ3Rocm93IG5ldyBFcnJvcihcInRlc3RcIik7IC8vIyBzb3VyY2VVUkw9dGVzdC5qcycpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBzdXBwb3J0c1NvdXJjZVVSTCA9IGVyci5zdGFjay5pbmNsdWRlcygndGVzdC5qcycpO1xuICB9XG5cbiAgLy8gJEZsb3dGaXhNZVxuICB3cy5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbiAoZXZlbnQgLyo6IHtkYXRhOiBzdHJpbmcsIC4uLn0gKi8pIHtcbiAgICBjaGVja2VkQXNzZXRzID0ge30gLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqLztcbiAgICBhc3NldHNUb0FjY2VwdCA9IFtdO1xuICAgIGFzc2V0c1RvRGlzcG9zZSA9IFtdO1xuICAgIHZhciBkYXRhIC8qOiBITVJNZXNzYWdlICovID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICBpZiAoZGF0YS50eXBlID09PSAndXBkYXRlJykge1xuICAgICAgLy8gUmVtb3ZlIGVycm9yIG92ZXJsYXkgaWYgdGhlcmUgaXMgb25lXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgIH1cbiAgICAgIGxldCBhc3NldHMgPSBkYXRhLmFzc2V0cy5maWx0ZXIoYXNzZXQgPT4gYXNzZXQuZW52SGFzaCA9PT0gSE1SX0VOVl9IQVNIKTtcblxuICAgICAgLy8gSGFuZGxlIEhNUiBVcGRhdGVcbiAgICAgIGxldCBoYW5kbGVkID0gYXNzZXRzLmV2ZXJ5KGFzc2V0ID0+IHtcbiAgICAgICAgcmV0dXJuIGFzc2V0LnR5cGUgPT09ICdjc3MnIHx8IGFzc2V0LnR5cGUgPT09ICdqcycgJiYgaG1yQWNjZXB0Q2hlY2sobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldC5pZCwgYXNzZXQuZGVwc0J5QnVuZGxlKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuXG4gICAgICAgIC8vIERpc3BhdGNoIGN1c3RvbSBldmVudCBzbyBvdGhlciBydW50aW1lcyAoZS5nIFJlYWN0IFJlZnJlc2gpIGFyZSBhd2FyZS5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBDdXN0b21FdmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3BhcmNlbGhtcmFjY2VwdCcpKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBobXJBcHBseVVwZGF0ZXMoYXNzZXRzKTtcblxuICAgICAgICAvLyBEaXNwb3NlIGFsbCBvbGQgYXNzZXRzLlxuICAgICAgICBsZXQgcHJvY2Vzc2VkQXNzZXRzID0ge30gLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqLztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NldHNUb0Rpc3Bvc2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgaWQgPSBhc3NldHNUb0Rpc3Bvc2VbaV1bMV07XG4gICAgICAgICAgaWYgKCFwcm9jZXNzZWRBc3NldHNbaWRdKSB7XG4gICAgICAgICAgICBobXJEaXNwb3NlKGFzc2V0c1RvRGlzcG9zZVtpXVswXSwgaWQpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkQXNzZXRzW2lkXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUnVuIGFjY2VwdCBjYWxsYmFja3MuIFRoaXMgd2lsbCBhbHNvIHJlLWV4ZWN1dGUgb3RoZXIgZGlzcG9zZWQgYXNzZXRzIGluIHRvcG9sb2dpY2FsIG9yZGVyLlxuICAgICAgICBwcm9jZXNzZWRBc3NldHMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NldHNUb0FjY2VwdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBpZCA9IGFzc2V0c1RvQWNjZXB0W2ldWzFdO1xuICAgICAgICAgIGlmICghcHJvY2Vzc2VkQXNzZXRzW2lkXSkge1xuICAgICAgICAgICAgaG1yQWNjZXB0KGFzc2V0c1RvQWNjZXB0W2ldWzBdLCBpZCk7XG4gICAgICAgICAgICBwcm9jZXNzZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBmdWxsUmVsb2FkKCk7XG4gICAgfVxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIC8vIExvZyBwYXJjZWwgZXJyb3JzIHRvIGNvbnNvbGVcbiAgICAgIGZvciAobGV0IGFuc2lEaWFnbm9zdGljIG9mIGRhdGEuZGlhZ25vc3RpY3MuYW5zaSkge1xuICAgICAgICBsZXQgc3RhY2sgPSBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgPyBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgOiBhbnNpRGlhZ25vc3RpYy5zdGFjaztcbiAgICAgICAgY29uc29sZS5lcnJvcign8J+aqCBbcGFyY2VsXTogJyArIGFuc2lEaWFnbm9zdGljLm1lc3NhZ2UgKyAnXFxuJyArIHN0YWNrICsgJ1xcblxcbicgKyBhbnNpRGlhZ25vc3RpYy5oaW50cy5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBSZW5kZXIgdGhlIGZhbmN5IGh0bWwgb3ZlcmxheVxuICAgICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgICAgdmFyIG92ZXJsYXkgPSBjcmVhdGVFcnJvck92ZXJsYXkoZGF0YS5kaWFnbm9zdGljcy5odG1sKTtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgaWYgKHdzIGluc3RhbmNlb2YgV2ViU29ja2V0KSB7XG4gICAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5tZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1twYXJjZWxdIPCfmqggQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciB3YXMgbG9zdCcpO1xuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIHJlbW92ZUVycm9yT3ZlcmxheSgpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPVkVSTEFZX0lEKTtcbiAgaWYgKG92ZXJsYXkpIHtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIGNvbnNvbGUubG9nKCdbcGFyY2VsXSDinKggRXJyb3IgcmVzb2x2ZWQnKTtcbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRXJyb3JPdmVybGF5KGRpYWdub3N0aWNzKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuaWQgPSBPVkVSTEFZX0lEO1xuICBsZXQgZXJyb3JIVE1MID0gJzxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiBibGFjazsgb3BhY2l0eTogMC44NTsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogd2hpdGU7IHBvc2l0aW9uOiBmaXhlZDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgdG9wOiAwcHg7IGxlZnQ6IDBweDsgcGFkZGluZzogMzBweDsgZm9udC1mYW1pbHk6IE1lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlOyB6LWluZGV4OiA5OTk5O1wiPic7XG4gIGZvciAobGV0IGRpYWdub3N0aWMgb2YgZGlhZ25vc3RpY3MpIHtcbiAgICBsZXQgc3RhY2sgPSBkaWFnbm9zdGljLmZyYW1lcy5sZW5ndGggPyBkaWFnbm9zdGljLmZyYW1lcy5yZWR1Y2UoKHAsIGZyYW1lKSA9PiB7XG4gICAgICByZXR1cm4gYCR7cH1cbjxhIGhyZWY9XCIvX19wYXJjZWxfbGF1bmNoX2VkaXRvcj9maWxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGZyYW1lLmxvY2F0aW9uKX1cIiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBjb2xvcjogIzg4OFwiIG9uY2xpY2s9XCJmZXRjaCh0aGlzLmhyZWYpOyByZXR1cm4gZmFsc2VcIj4ke2ZyYW1lLmxvY2F0aW9ufTwvYT5cbiR7ZnJhbWUuY29kZX1gO1xuICAgIH0sICcnKSA6IGRpYWdub3N0aWMuc3RhY2s7XG4gICAgZXJyb3JIVE1MICs9IGBcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tdG9wOiAyMHB4O1wiPlxuICAgICAgICAgIPCfmqggJHtkaWFnbm9zdGljLm1lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cHJlPiR7c3RhY2t9PC9wcmU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgJHtkaWFnbm9zdGljLmhpbnRzLm1hcChoaW50ID0+ICc8ZGl2PvCfkqEgJyArIGhpbnQgKyAnPC9kaXY+Jykuam9pbignJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke2RpYWdub3N0aWMuZG9jdW1lbnRhdGlvbiA/IGA8ZGl2PvCfk50gPGEgc3R5bGU9XCJjb2xvcjogdmlvbGV0XCIgaHJlZj1cIiR7ZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9ufVwiIHRhcmdldD1cIl9ibGFua1wiPkxlYXJuIG1vcmU8L2E+PC9kaXY+YCA6ICcnfVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuICBlcnJvckhUTUwgKz0gJzwvZGl2Pic7XG4gIG92ZXJsYXkuaW5uZXJIVE1MID0gZXJyb3JIVE1MO1xuICByZXR1cm4gb3ZlcmxheTtcbn1cbmZ1bmN0aW9uIGZ1bGxSZWxvYWQoKSB7XG4gIGlmICgncmVsb2FkJyBpbiBsb2NhdGlvbikge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9IGVsc2UgaWYgKGV4dEN0eCAmJiBleHRDdHgucnVudGltZSAmJiBleHRDdHgucnVudGltZS5yZWxvYWQpIHtcbiAgICBleHRDdHgucnVudGltZS5yZWxvYWQoKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0UGFyZW50cyhidW5kbGUsIGlkKSAvKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICove1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIHBhcmVudHMgPSBbXTtcbiAgdmFyIGssIGQsIGRlcDtcbiAgZm9yIChrIGluIG1vZHVsZXMpIHtcbiAgICBmb3IgKGQgaW4gbW9kdWxlc1trXVsxXSkge1xuICAgICAgZGVwID0gbW9kdWxlc1trXVsxXVtkXTtcbiAgICAgIGlmIChkZXAgPT09IGlkIHx8IEFycmF5LmlzQXJyYXkoZGVwKSAmJiBkZXBbZGVwLmxlbmd0aCAtIDFdID09PSBpZCkge1xuICAgICAgICBwYXJlbnRzLnB1c2goW2J1bmRsZSwga10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIHBhcmVudHMgPSBwYXJlbnRzLmNvbmNhdChnZXRQYXJlbnRzKGJ1bmRsZS5wYXJlbnQsIGlkKSk7XG4gIH1cbiAgcmV0dXJuIHBhcmVudHM7XG59XG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmspIHtcbiAgdmFyIGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICBpZiAoIWhyZWYpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5ld0xpbmsgPSBsaW5rLmNsb25lTm9kZSgpO1xuICBuZXdMaW5rLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobGluay5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgfVxuICB9O1xuICBuZXdMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsXG4gIC8vICRGbG93Rml4TWVcbiAgaHJlZi5zcGxpdCgnPycpWzBdICsgJz8nICsgRGF0ZS5ub3coKSk7XG4gIC8vICRGbG93Rml4TWVcbiAgbGluay5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdMaW5rLCBsaW5rLm5leHRTaWJsaW5nKTtcbn1cbnZhciBjc3NUaW1lb3V0ID0gbnVsbDtcbmZ1bmN0aW9uIHJlbG9hZENTUygpIHtcbiAgaWYgKGNzc1RpbWVvdXQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY3NzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdXG4gICAgICB2YXIgaHJlZiAvKjogc3RyaW5nICovID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICAgICAgdmFyIHNlcnZlZEZyb21ITVJTZXJ2ZXIgPSBob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgPyBuZXcgUmVnRXhwKCdeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOicgKyBnZXRQb3J0KCkpLnRlc3QoaHJlZikgOiBocmVmLmluZGV4T2YoaG9zdG5hbWUgKyAnOicgKyBnZXRQb3J0KCkpO1xuICAgICAgdmFyIGFic29sdXRlID0gL15odHRwcz86XFwvXFwvL2kudGVzdChocmVmKSAmJiBocmVmLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSAhPT0gMCAmJiAhc2VydmVkRnJvbUhNUlNlcnZlcjtcbiAgICAgIGlmICghYWJzb2x1dGUpIHtcbiAgICAgICAgdXBkYXRlTGluayhsaW5rc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNzc1RpbWVvdXQgPSBudWxsO1xuICB9LCA1MCk7XG59XG5mdW5jdGlvbiBobXJEb3dubG9hZChhc3NldCkge1xuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2pzJykge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQuc3JjID0gYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpO1xuICAgICAgaWYgKGFzc2V0Lm91dHB1dEZvcm1hdCA9PT0gJ2VzbW9kdWxlJykge1xuICAgICAgICBzY3JpcHQudHlwZSA9ICdtb2R1bGUnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdmFyIF9kb2N1bWVudCRoZWFkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4gcmVzb2x2ZShzY3JpcHQpO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgKF9kb2N1bWVudCRoZWFkID0gZG9jdW1lbnQuaGVhZCkgPT09IG51bGwgfHwgX2RvY3VtZW50JGhlYWQgPT09IHZvaWQgMCB8fCBfZG9jdW1lbnQkaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gV29ya2VyIHNjcmlwdHNcbiAgICAgIGlmIChhc3NldC5vdXRwdXRGb3JtYXQgPT09ICdlc21vZHVsZScpIHtcbiAgICAgICAgcmV0dXJuIF9fcGFyY2VsX19pbXBvcnRfXyhhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXyhhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCkpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIGhtckFwcGx5VXBkYXRlcyhhc3NldHMpIHtcbiAgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGxldCBzY3JpcHRzVG9SZW1vdmU7XG4gIHRyeSB7XG4gICAgLy8gSWYgc291cmNlVVJMIGNvbW1lbnRzIGFyZW4ndCBzdXBwb3J0ZWQgaW4gZXZhbCwgd2UgbmVlZCB0byBsb2FkXG4gICAgLy8gdGhlIHVwZGF0ZSBmcm9tIHRoZSBkZXYgc2VydmVyIG92ZXIgSFRUUCBzbyB0aGF0IHN0YWNrIHRyYWNlc1xuICAgIC8vIGFyZSBjb3JyZWN0IGluIGVycm9ycy9sb2dzLiBUaGlzIGlzIG11Y2ggc2xvd2VyIHRoYW4gZXZhbCwgc29cbiAgICAvLyB3ZSBvbmx5IGRvIGl0IGlmIG5lZWRlZCAoY3VycmVudGx5IGp1c3QgU2FmYXJpKS5cbiAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM3Mjk3XG4gICAgLy8gVGhpcyBwYXRoIGlzIGFsc28gdGFrZW4gaWYgYSBDU1AgZGlzYWxsb3dzIGV2YWwuXG4gICAgaWYgKCFzdXBwb3J0c1NvdXJjZVVSTCkge1xuICAgICAgbGV0IHByb21pc2VzID0gYXNzZXRzLm1hcChhc3NldCA9PiB7XG4gICAgICAgIHZhciBfaG1yRG93bmxvYWQ7XG4gICAgICAgIHJldHVybiAoX2htckRvd25sb2FkID0gaG1yRG93bmxvYWQoYXNzZXQpKSA9PT0gbnVsbCB8fCBfaG1yRG93bmxvYWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9obXJEb3dubG9hZC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIC8vIFdlYiBleHRlbnNpb24gZml4XG4gICAgICAgICAgaWYgKGV4dEN0eCAmJiBleHRDdHgucnVudGltZSAmJiBleHRDdHgucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb24gPT0gMyAmJiB0eXBlb2YgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlICE9ICd1bmRlZmluZWQnICYmIGdsb2JhbCBpbnN0YW5jZW9mIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSkge1xuICAgICAgICAgICAgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHNjcmlwdHNUb1JlbW92ZSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG4gICAgYXNzZXRzLmZvckVhY2goZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICBobXJBcHBseShtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0KTtcbiAgICB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZTtcbiAgICBpZiAoc2NyaXB0c1RvUmVtb3ZlKSB7XG4gICAgICBzY3JpcHRzVG9SZW1vdmUuZm9yRWFjaChzY3JpcHQgPT4ge1xuICAgICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgICAgdmFyIF9kb2N1bWVudCRoZWFkMjtcbiAgICAgICAgICAoX2RvY3VtZW50JGhlYWQyID0gZG9jdW1lbnQuaGVhZCkgPT09IG51bGwgfHwgX2RvY3VtZW50JGhlYWQyID09PSB2b2lkIDAgfHwgX2RvY3VtZW50JGhlYWQyLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gaG1yQXBwbHkoYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLCBhc3NldCAvKjogIEhNUkFzc2V0ICovKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2NzcycpIHtcbiAgICByZWxvYWRDU1MoKTtcbiAgfSBlbHNlIGlmIChhc3NldC50eXBlID09PSAnanMnKSB7XG4gICAgbGV0IGRlcHMgPSBhc3NldC5kZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdO1xuICAgIGlmIChkZXBzKSB7XG4gICAgICBpZiAobW9kdWxlc1thc3NldC5pZF0pIHtcbiAgICAgICAgLy8gUmVtb3ZlIGRlcGVuZGVuY2llcyB0aGF0IGFyZSByZW1vdmVkIGFuZCB3aWxsIGJlY29tZSBvcnBoYW5lZC5cbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3Nhcnkgc28gdGhhdCBpZiB0aGUgYXNzZXQgaXMgYWRkZWQgYmFjayBhZ2FpbiwgdGhlIGNhY2hlIGlzIGdvbmUsIGFuZCB3ZSBwcmV2ZW50IGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAgICAgICAgbGV0IG9sZERlcHMgPSBtb2R1bGVzW2Fzc2V0LmlkXVsxXTtcbiAgICAgICAgZm9yIChsZXQgZGVwIGluIG9sZERlcHMpIHtcbiAgICAgICAgICBpZiAoIWRlcHNbZGVwXSB8fCBkZXBzW2RlcF0gIT09IG9sZERlcHNbZGVwXSkge1xuICAgICAgICAgICAgbGV0IGlkID0gb2xkRGVwc1tkZXBdO1xuICAgICAgICAgICAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgICAgICAgaWYgKHBhcmVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGhtckRlbGV0ZShtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0c1NvdXJjZVVSTCkge1xuICAgICAgICAvLyBHbG9iYWwgZXZhbC4gV2Ugd291bGQgdXNlIGBuZXcgRnVuY3Rpb25gIGhlcmUgYnV0IGJyb3dzZXJcbiAgICAgICAgLy8gc3VwcG9ydCBmb3Igc291cmNlIG1hcHMgaXMgYmV0dGVyIHdpdGggZXZhbC5cbiAgICAgICAgKDAsIGV2YWwpKGFzc2V0Lm91dHB1dCk7XG4gICAgICB9XG5cbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGxldCBmbiA9IGdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbYXNzZXQuaWRdO1xuICAgICAgbW9kdWxlc1thc3NldC5pZF0gPSBbZm4sIGRlcHNdO1xuICAgIH0gZWxzZSBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgICAgaG1yQXBwbHkoYnVuZGxlLnBhcmVudCwgYXNzZXQpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gaG1yRGVsZXRlKGJ1bmRsZSwgaWQpIHtcbiAgbGV0IG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChtb2R1bGVzW2lkXSkge1xuICAgIC8vIENvbGxlY3QgZGVwZW5kZW5jaWVzIHRoYXQgd2lsbCBiZWNvbWUgb3JwaGFuZWQgd2hlbiB0aGlzIG1vZHVsZSBpcyBkZWxldGVkLlxuICAgIGxldCBkZXBzID0gbW9kdWxlc1tpZF1bMV07XG4gICAgbGV0IG9ycGhhbnMgPSBbXTtcbiAgICBmb3IgKGxldCBkZXAgaW4gZGVwcykge1xuICAgICAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgZGVwc1tkZXBdKTtcbiAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBvcnBoYW5zLnB1c2goZGVwc1tkZXBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWxldGUgdGhlIG1vZHVsZS4gVGhpcyBtdXN0IGJlIGRvbmUgYmVmb3JlIGRlbGV0aW5nIGRlcGVuZGVuY2llcyBpbiBjYXNlIG9mIGNpcmN1bGFyIGRlcGVuZGVuY2llcy5cbiAgICBkZWxldGUgbW9kdWxlc1tpZF07XG4gICAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07XG5cbiAgICAvLyBOb3cgZGVsZXRlIHRoZSBvcnBoYW5zLlxuICAgIG9ycGhhbnMuZm9yRWFjaChpZCA9PiB7XG4gICAgICBobXJEZWxldGUobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIGhtckRlbGV0ZShidW5kbGUucGFyZW50LCBpZCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGhtckFjY2VwdENoZWNrKGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgaWQgLyo6IHN0cmluZyAqLywgZGVwc0J5QnVuZGxlIC8qOiA/eyBbc3RyaW5nXTogeyBbc3RyaW5nXTogc3RyaW5nIH0gfSovKSB7XG4gIGlmIChobXJBY2NlcHRDaGVja09uZShidW5kbGUsIGlkLCBkZXBzQnlCdW5kbGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBUcmF2ZXJzZSBwYXJlbnRzIGJyZWFkdGggZmlyc3QuIEFsbCBwb3NzaWJsZSBhbmNlc3RyaWVzIG11c3QgYWNjZXB0IHRoZSBITVIgdXBkYXRlLCBvciB3ZSdsbCByZWxvYWQuXG4gIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgbGV0IGFjY2VwdGVkID0gZmFsc2U7XG4gIHdoaWxlIChwYXJlbnRzLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgdiA9IHBhcmVudHMuc2hpZnQoKTtcbiAgICBsZXQgYSA9IGhtckFjY2VwdENoZWNrT25lKHZbMF0sIHZbMV0sIG51bGwpO1xuICAgIGlmIChhKSB7XG4gICAgICAvLyBJZiB0aGlzIHBhcmVudCBhY2NlcHRzLCBzdG9wIHRyYXZlcnNpbmcgdXB3YXJkLCBidXQgc3RpbGwgY29uc2lkZXIgc2libGluZ3MuXG4gICAgICBhY2NlcHRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSwgcXVldWUgdGhlIHBhcmVudHMgaW4gdGhlIG5leHQgbGV2ZWwgdXB3YXJkLlxuICAgICAgbGV0IHAgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgdlsxXSk7XG4gICAgICBpZiAocC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIHBhcmVudHMsIHRoZW4gd2UndmUgcmVhY2hlZCBhbiBlbnRyeSB3aXRob3V0IGFjY2VwdGluZy4gUmVsb2FkLlxuICAgICAgICBhY2NlcHRlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHBhcmVudHMucHVzaCguLi5wKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFjY2VwdGVkO1xufVxuZnVuY3Rpb24gaG1yQWNjZXB0Q2hlY2tPbmUoYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLCBpZCAvKjogc3RyaW5nICovLCBkZXBzQnlCdW5kbGUgLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki8pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChkZXBzQnlCdW5kbGUgJiYgIWRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF0pIHtcbiAgICAvLyBJZiB3ZSByZWFjaGVkIHRoZSByb290IGJ1bmRsZSB3aXRob3V0IGZpbmRpbmcgd2hlcmUgdGhlIGFzc2V0IHNob3VsZCBnbyxcbiAgICAvLyB0aGVyZSdzIG5vdGhpbmcgdG8gZG8uIE1hcmsgYXMgXCJhY2NlcHRlZFwiIHNvIHdlIGRvbid0IHJlbG9hZCB0aGUgcGFnZS5cbiAgICBpZiAoIWJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gaG1yQWNjZXB0Q2hlY2soYnVuZGxlLnBhcmVudCwgaWQsIGRlcHNCeUJ1bmRsZSk7XG4gIH1cbiAgaWYgKGNoZWNrZWRBc3NldHNbaWRdKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY2hlY2tlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYXNzZXRzVG9EaXNwb3NlLnB1c2goW2J1bmRsZSwgaWRdKTtcbiAgaWYgKCFjYWNoZWQgfHwgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgYXNzZXRzVG9BY2NlcHQucHVzaChbYnVuZGxlLCBpZF0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5mdW5jdGlvbiBobXJEaXNwb3NlKGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgaWQgLyo6IHN0cmluZyAqLykge1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYnVuZGxlLmhvdERhdGFbaWRdID0ge307XG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCkge1xuICAgIGNhY2hlZC5ob3QuZGF0YSA9IGJ1bmRsZS5ob3REYXRhW2lkXTtcbiAgfVxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICBjYihidW5kbGUuaG90RGF0YVtpZF0pO1xuICAgIH0pO1xuICB9XG4gIGRlbGV0ZSBidW5kbGUuY2FjaGVbaWRdO1xufVxuZnVuY3Rpb24gaG1yQWNjZXB0KGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgaWQgLyo6IHN0cmluZyAqLykge1xuICAvLyBFeGVjdXRlIHRoZSBtb2R1bGUuXG4gIGJ1bmRsZShpZCk7XG5cbiAgLy8gUnVuIHRoZSBhY2NlcHQgY2FsbGJhY2tzIGluIHRoZSBuZXcgdmVyc2lvbiBvZiB0aGUgbW9kdWxlLlxuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIHZhciBhc3NldHNUb0Fsc29BY2NlcHQgPSBjYihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgfSk7XG4gICAgICBpZiAoYXNzZXRzVG9BbHNvQWNjZXB0ICYmIGFzc2V0c1RvQWNjZXB0Lmxlbmd0aCkge1xuICAgICAgICBhc3NldHNUb0Fsc29BY2NlcHQuZm9yRWFjaChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIGhtckRpc3Bvc2UoYVswXSwgYVsxXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vICRGbG93Rml4TWVbbWV0aG9kLXVuYmluZGluZ11cbiAgICAgICAgYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShhc3NldHNUb0FjY2VwdCwgYXNzZXRzVG9BbHNvQWNjZXB0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCAnLi9hcHAvZmxvYXRpbmdCdG4nXHJcbi8vIGltcG9ydCAnLi9hcHAvY3VzdG9tRm9udHMnXHJcbmltcG9ydCAnLi9hcHAvbWFpbkZvbnRzJ1xyXG4iLCIvLyBVc2UgYSBjcm9zcy1icm93c2VyIHN0b3JhZ2UgQVBJOlxyXG5pbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnXHJcblxyXG5pbXBvcnQgeyBpY29uX3N1biwgaWNvbl9tb29uLCBpY29uX21vb25fZnVsbCwgaWNvbl9zZXR0aW5ncywgaWNvbl9wYWludCB9IGZyb20gJy4vaWNvbnMuanMnXHJcbmltcG9ydCB7IGhleFRvSFNMIH0gZnJvbSAnLi4vdXRpbHMvaGV4VG9IU0wnXHJcblxyXG4vLyBpbXBvcnQgeyBmb250SHRtbENvZGUsIGFkZEZvbnRzRXZlbnRIYW5kbGVycyB9IGZyb20gJy4vY3VzdG9tRm9udHMnXHJcbmltcG9ydCB7IGZvbnRIdG1sQ29kZSwgaGFuZGxlRm9udHNMaXN0ZW5lcnMgfSBmcm9tICcuL21haW5Gb250cydcclxuLy8gY29uc29sZS5sb2coZm9udEh0bWxDb2RlKVxyXG5cclxuLy8gbGV0IGlzT3B0aW9uc1Nob3duID0gZmFsc2VcclxuXHJcbi8vIEdsb2JhbCBWYXJpYWJsZXNcclxubGV0IGlzT3B0aW9uc1Nob3duID0gZmFsc2VcclxubGV0ICRodG1sVGFnXHJcbmxldCAkZmxvYXRpbmdCdG5cclxubGV0ICRmbG9hdGluZ09wdGlvbnNcclxubGV0ICRmbG9hdGluZ0J0bnNDb250YWluZXJcclxuXHJcbmxldCAkc2V0dGluZ3MgLy8gQCBBY2NlbnQgVGhlbWVcclxubGV0ICRyZXNldEFsbEJ0blxyXG4vLyBsZXQgaXNTZXR0aW5nc09wZW4gPSBmYWxzZVxyXG5sZXQgc3R5bGVFbGVtZW50ID0gbnVsbCAvLyBEZWNsYXJlIHRoZSBzdHlsZUVsZW1lbnQgdmFyaWFibGVcclxuXHJcbmxldCBkZWZhdWx0Q29sb3JMaWdodCA9ICcjNmI0ZGZlJ1xyXG5sZXQgZGVmYXVsdENvbG9yRGFyayA9ICcjY2E5M2ZiJ1xyXG4vLyBsZXQgaXNEaXNhYmxlZFJlc2V0QWxsID0gdHJ1ZVxyXG5cclxuY29uc3QgcmVuZGVyQ29sb3JzVGFiID0gYFxyXG5cdDxzZWN0aW9uPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbG9ycGlja2VyLWNvbnRhaW5lclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sb3JwaWNrZXJcIj5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNvbG9yXCIgaWQ9XCJhY2NlbnRMaWdodFwiIHZhbHVlPVwiIzZiNGRmZVwiIC8+XHJcblx0XHRcdFx0PGxhYmVsIGZvcj1cImFjY2VudExpZ2h0XCI+QWNjZW50IDxzcGFuPkxpZ2h0PC9zcGFuPjwvbGFiZWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sb3JwaWNrZXJcIj5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNvbG9yXCIgaWQ9XCJhY2NlbnREYXJrXCIgdmFsdWU9XCIjY2E5M2ZiXCIgLz5cclxuXHRcdFx0XHQ8bGFiZWwgZm9yPVwiYWNjZW50RGFya1wiPkFjY2VudCA8c3Bhbj5EYXJrPC9zcGFuPjwvbGFiZWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8Zm9vdGVyIGNsYXNzPVwiZ3JpZCBtdC0xMFwiPlxyXG5cdFx0XHQ8YnV0dG9uIGlkPVwicmVzZXRBbGxTZXR0aW5nc1wiIGNsYXNzPVwiYnRuIGJsb2NrIHJlbGF0aXZlIGJ0bi1wcmltYXJ5IHRleHQtY2VudGVyXCIgYXM9XCJidXR0b25cIj5SZXNldCBBY2NlbnRzPC9idXR0b24+XHJcblx0XHQ8L2Zvb3Rlcj5cclxuXHQ8L3NlY3Rpb24+XHJcbmBcclxuXHJcbi8vIEluaXRpYWxpemF0aW9uXHJcbmluaXQoKVxyXG5cclxuZnVuY3Rpb24gdGFic1N3aXRjaGluZygpIHtcclxuXHRjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdwdGgtc2V0dGluZ3MgLnRhYi1idXR0b24nKVxyXG5cdGNvbnN0IHBhbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdwdGgtc2V0dGluZ3MgLnRhYi1wYW5lJylcclxuXHJcblx0dGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XHJcblx0XHR0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWItYnV0dG9uLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWItcGFuZTpub3QoLmhpZGRlbiknKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG5cclxuXHRcdFx0dGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblx0XHRcdHBhbmVzW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxyXG5cdFx0fSlcclxuXHR9KVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbml0VGhlbWUoKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHsgZ3B0aGVtZTogc3RvcmVkVGhlbWUgfSA9IGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgnZ3B0aGVtZScpXHJcblx0XHRjb25zdCB0aGVtZSA9IHN0b3JlZFRoZW1lIHx8ICh3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCknKS5tYXRjaGVzID8gJ2xpZ2h0JyA6ICdkYXJrJylcclxuXHRcdGFwcGx5VGhlbWUodGhlbWUpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluaXRpYWxpemluZyB0aGVtZTonLCBlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldFRoZW1lKHRoZW1lKSB7XHJcblx0dHJ5IHtcclxuXHRcdGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IGdwdGhlbWU6IHRoZW1lIH0pXHJcblx0XHRhcHBseVRoZW1lKHRoZW1lKVxyXG5cdFx0dG9nZ2xlT3B0aW9ucygpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNldHRpbmcgdGhlbWU6JywgZXJyb3IpXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBbmRBcHBlbmRTVkdTdGlja3lCdG4oKSB7XHJcblx0Y29uc3QgZ3B0aEZsb2F0aW5nQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHRncHRoRmxvYXRpbmdCdG4uY2xhc3NOYW1lID0gJ2dwdGhfX2Zsb2F0aW5nJ1xyXG5cclxuXHQvLyA8aW1nIHNyYz1cIiR7Z3B0aFRvZ2dsZUltZ31cIiBhbHQ9XCJncHRoLXRvZ2dsZVwiLz5cclxuXHRsZXQgaHRtbENvZGUgPSBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ3B0aF9fZmxvYXRpbmctaWNvblwiPlxyXG5cdFx0XHQke2ljb25fcGFpbnR9XHJcblx0XHQ8L2Rpdj5cclxuXHRcdFxyXG5cdFx0PGRpdiBjbGFzcz1cImdwdGhfX29wdGlvbnNcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImdwdGhfX29wdGlvbnMtYnRuc1wiPlxyXG5cdFx0XHRcdDxidXR0b24gaWQ9XCJsaWdodFwiIGRhdGEtZ3B0aC10aGVtZT1cImxpZ2h0XCI+JHtpY29uX3N1bn08L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIGlkPVwiZGFya1wiIGRhdGEtZ3B0aC10aGVtZT1cImRhcmtcIj4ke2ljb25fbW9vbn08L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIGlkPVwib2xlZFwiIGRhdGEtZ3B0aC10aGVtZT1cImJsYWNrXCI+JHtpY29uX21vb25fZnVsbH08L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIGlkPVwiZ3B0aC1vcGVuLXNldHRpbmdzXCIgZGF0YS1ncHRoLXRoZW1lPVwibW9yZVwiPiR7aWNvbl9zZXR0aW5nc308L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcblxyXG5cdC8vIGdwdGhGbG9hdGluZ0J0bi5pbm5lckhUTUwgPSBodG1sQ29kZVxyXG5cdGdwdGhGbG9hdGluZ0J0bi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWxDb2RlKVxyXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ3B0aEZsb2F0aW5nQnRuKVxyXG5cclxuXHQvLyBDYWNoZSBET00gZWxlbWVudHMgYWZ0ZXIgYXBwZW5kaW5nXHJcblx0JGh0bWxUYWcgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcclxuXHQkZmxvYXRpbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aF9fZmxvYXRpbmcnKVxyXG5cdCRmbG9hdGluZ09wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aF9fb3B0aW9ucycpXHJcblx0JGZsb2F0aW5nQnRuc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoX19vcHRpb25zLWJ0bnMnKVxyXG5cclxuXHQvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIGFmdGVyIERPTSBlbGVtZW50cyBhcmUgYXBwZW5kZWRcclxuXHQkZmxvYXRpbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVPcHRpb25zKVxyXG5cdCRmbG9hdGluZ0J0bnNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDaGFuZ2VUaGVtZSlcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlVGhlbWUoZSkge1xyXG5cdGNvbnN0IHRoZW1lQnV0dG9uID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJylcclxuXHRpZiAoIXRoZW1lQnV0dG9uKSByZXR1cm5cclxuXHJcblx0Y29uc3QgdGhlbWUgPSB0aGVtZUJ1dHRvbi5pZFxyXG5cclxuXHRpZiAodGhlbWUgIT09ICdncHRoLW9wZW4tc2V0dGluZ3MnKSB7XHJcblx0XHRzZXRUaGVtZSh0aGVtZSlcclxuXHRcdHJldHVyblxyXG5cdH1cclxuXHJcblx0LyogSWYgY2xpY2tlZCBvbiBcIuKame+4jyBPcGVuIFNldHRpbmdzXCIgKi9cclxuXHRpZiAodGhlbWUgPT09ICdncHRoLW9wZW4tc2V0dGluZ3MnKSB7XHJcblx0XHRvcGVuU2V0dGluZ3MoKVxyXG5cdFx0Ly8gdG9nZ2xlT3B0aW9ucygpXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRoZW1lKHRoZW1lKSB7XHJcblx0JGh0bWxUYWcuZGF0YXNldC5ncHRoZW1lID0gdGhlbWVcclxuXHQkaHRtbFRhZy5zdHlsZS5jb2xvclNjaGVtZSA9IHRoZW1lID09PSAnb2xlZCcgPyAnZGFyaycgOiB0aGVtZVxyXG5cdCRodG1sVGFnLmNsYXNzTmFtZSA9IHRoZW1lID09PSAnb2xlZCcgPyAnZGFyaycgOiB0aGVtZVxyXG5cdGlmICh0aGVtZSAhPT0gJ29sZWQnKSAkaHRtbFRhZy5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZ3B0aGVtZScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU9wdGlvbnMoKSB7XHJcblx0aXNPcHRpb25zU2hvd24gPSAhaXNPcHRpb25zU2hvd25cclxuXHQkZmxvYXRpbmdPcHRpb25zLmNsYXNzTGlzdC50b2dnbGUoJ2dwdGhfX29wdGlvbnMtLXNob3duJywgaXNPcHRpb25zU2hvd24pXHJcblxyXG5cdGlmIChpc09wdGlvbnNTaG93bikgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVPcHRpb25zKVxyXG5cdGVsc2UgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVPcHRpb25zKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlT3B0aW9ucyhlKSB7XHJcblx0Y29uc3QgaXNDbGlja0luc2lkZUZsb2F0aW5nQnRuID0gJGZsb2F0aW5nQnRuLmNvbnRhaW5zKGUudGFyZ2V0KVxyXG5cdGNvbnN0IGlzQ2xpY2tJbnNpZGVGbG9hdGluZ09wdGlvbnMgPSAkZmxvYXRpbmdPcHRpb25zLmNvbnRhaW5zKGUudGFyZ2V0KVxyXG5cclxuXHRpZiAoIWlzQ2xpY2tJbnNpZGVGbG9hdGluZ0J0biAmJiAhaXNDbGlja0luc2lkZUZsb2F0aW5nT3B0aW9ucykgdG9nZ2xlT3B0aW9ucygpXHJcblxyXG5cdC8vIGlmICghJGZsb2F0aW5nQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhJGZsb2F0aW5nVGhlbWVPcHRpb25zLmNvbnRhaW5zKGUudGFyZ2V0KSkgdG9nZ2xlT3B0aW9ucygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlY3JlaXNlRmxvYXRpbmdCdG5TaXplKCkge1xyXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0JGZsb2F0aW5nQnRuLmNsYXNzTGlzdC5hZGQoJ2dwdGhfX2Zsb2F0aW5nLS1zbWFsbCcpXHJcblx0fSwgMzAwMClcclxufVxyXG5cclxuLyogX19fX19fX19fX19fX18gVEhFTUUgQ1VTVE9NSVpBVElPTiAtIEFDQ0VOVCBUSEVNRSBfX19fX19fX19fX19fXyAqL1xyXG5mdW5jdGlvbiByZW5kZXJTZXR0aW5ncygpIHtcclxuXHRjb25zdCBncHRoU2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdGdwdGhTZXR0aW5ncy5jbGFzc05hbWUgPSBgZ3B0aC1zZXR0aW5ncyBmaXhlZCBmbGV4IGZsZXgtY29sYFxyXG5cclxuXHRsZXQgaHRtbENvZGUgPSBgXHJcblx0XHQ8aGVhZGVyIGNsYXNzPVwibWItNVwiPlxyXG5cdFx0XHQ8aDIgY2xhc3M9XCJtdC01IHRleHQtY2VudGVyIGZvbnQtbWVkaXVtIGdwdGgtc2V0dGluZ3NfX3RpdGxlXCI+PHNwYW4gY2xhc3M9XCJmb250LXNlbWlib2xkXCI+R1BUaGVtZXM8L3NwYW4+IEN1c3RvbWl6YXRpb248L2gyPlxyXG5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cInRleHQtdG9rZW4tdGV4dC10ZXJ0aWFyeSBob3Zlcjp0ZXh0LXRva2VuLXRleHQtcHJpbWFyeSBhYnNvbHV0ZSB0b3AtNCByaWdodC00XCIgaWQ9XCJncHRoLXNldHRpbmdzLWNsb3NlXCI+XHJcblx0XHRcdFx0PHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk02LjM0MzE1IDYuMzQzMzhMMTcuNjU2OSAxNy42NTcxTTE3LjY1NjkgNi4zNDMzOEw2LjM0MzE1IDE3LjY1NzFcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPjwvc3ZnPlxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdDwvaGVhZGVyPlxyXG5cclxuXHRcdDxtYWluID5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInRhYnNcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGFiLWJ1dHRvbnMgZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIHAtMSBmb250LXNlbWlib2xkIG1iLTEwXCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwidGFiLWJ1dHRvbiBweS0yIHB4LTQgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtY2VudGVyIHJvdW5kZWQtZnVsbCBhY3RpdmVcIj5cclxuXHRcdFx0XHRcdFx0Q29sb3JcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInRhYi1idXR0b24gcHktMiBweC00IGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGxcIj5cclxuXHRcdFx0XHRcdFx0Rm9udFxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwidGFiLWJ1dHRvbiBweS0yIHB4LTQgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtY2VudGVyIHJvdW5kZWQtZnVsbFwiPlxyXG5cdFx0XHRcdFx0XHRBc3NldHNcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YWItcGFuZSBhY3RpdmVcIiBpZD1cInRhYi1jb2xvcnNcIj5cclxuXHRcdFx0XHRcdFx0JHtyZW5kZXJDb2xvcnNUYWJ9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGFiLXBhbmUgaGlkZGVuXCIgaWQ9XCJ0YWItZm9udHNcIj5cclxuXHRcdFx0XHRcdFx0JHtmb250SHRtbENvZGV9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGFiLXBhbmUgaGlkZGVuXCIgaWQ9XCJ0YWItYXNzZXRzXCI+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC10b2tlbi10ZXh0LXRlcnRpYXJ5IHRleHQtc20gbWItMiBmb250LXdlaWdodC0yMDBcIj5vb29wcywgc3VjaCBlbXB0eTwvcD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LXRva2VuLXRleHQtc2Vjb25kYXJ5IHRleHQtbWQgZm9udC1zZW1pYm9sZFwiPkNvbWluZyBTb29uPC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9tYWluPlxyXG5cdGBcclxuXHJcblx0Z3B0aFNldHRpbmdzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbENvZGUpXHJcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChncHRoU2V0dGluZ3MpXHJcblxyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncHRoLXNldHRpbmdzLWNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVNldHRpbmdzKVxyXG5cclxuXHQkc2V0dGluZ3MgPSBncHRoU2V0dGluZ3NcclxuXHJcblx0dGFic1N3aXRjaGluZygpXHJcblxyXG5cdCRyZXNldEFsbEJ0biA9ICRzZXR0aW5ncy5xdWVyeVNlbGVjdG9yKCcjcmVzZXRBbGxTZXR0aW5ncycpXHJcblx0JHJlc2V0QWxsQnRuLmRpc2FibGVkID0gdHJ1ZVxyXG5cclxuXHQkc2V0dGluZ3MucXVlcnlTZWxlY3RvcignI3Jlc2V0QWxsU2V0dGluZ3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0QWxsU2V0dGluZ3MpXHJcblxyXG5cdC8vIGFkZEZvbnRzRXZlbnRIYW5kbGVycygpXHJcblx0aGFuZGxlRm9udHNMaXN0ZW5lcnMoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuU2V0dGluZ3MoKSB7XHJcblx0JHNldHRpbmdzLmNsYXNzTGlzdC5hZGQoJ2dwdGgtc2V0dGluZ3MtLW9wZW4nKVxyXG5cdCRzZXR0aW5ncy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlU2V0dGluZ3NPcGVuZWQpXHJcblx0JHJlc2V0QWxsQnRuLmRpc2FibGVkID0gZmFsc2VcclxuXHJcblx0Ly8gaXNPcHRpb25zU2hvd24gPSBmYWxzZVxyXG5cdC8vIHRvZ2dsZU9wdGlvbnMoKVxyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZVNldHRpbmdzT3BlbmVkKCkge1xyXG5cdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGVTZXR0aW5ncylcclxuXHQkc2V0dGluZ3MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVNldHRpbmdzT3BlbmVkKVxyXG59XHJcbmZ1bmN0aW9uIGNsb3NlU2V0dGluZ3MoKSB7XHJcblx0JHNldHRpbmdzLmNsYXNzTGlzdC5yZW1vdmUoJ2dwdGgtc2V0dGluZ3MtLW9wZW4nKVxyXG5cdGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGVTZXR0aW5ncylcclxuXHQkcmVzZXRBbGxCdG4uZGlzYWJsZWQgPSB0cnVlXHJcbn1cclxuZnVuY3Rpb24gaGFuZGxlQ2xpY2tPdXRzaWRlU2V0dGluZ3MoZSkge1xyXG5cdGxldCBpc09wZW5TZXR0aW5nc0J1dHRvbiA9IGUudGFyZ2V0LmlkID09PSAnZ3B0aC1zZXR0aW5ncy1vcGVuJ1xyXG5cclxuXHRpZiAoISRzZXR0aW5ncy5jb250YWlucyhlLnRhcmdldCkgJiYgIWlzT3BlblNldHRpbmdzQnV0dG9uKSBjbG9zZVNldHRpbmdzKClcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ29sb3JJbnB1dCgpIHtcclxuXHQkc2V0dGluZ3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZS50YXJnZXQpXHJcblxyXG5cdFx0aWYgKGUudGFyZ2V0LmlkID09PSAnYWNjZW50TGlnaHQnKSB7XHJcblx0XHRcdGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuXHRcdFx0XHR1cGRhdGVDU1NWYXJzKGUudGFyZ2V0LnZhbHVlLCBudWxsKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQvLyBTYXZlIGxpZ2h0IGFjY2VudCBjb2xvciB0byBzdG9yYWdlXHJcblx0XHRcdGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcblx0XHRcdFx0c2V0QWNjZW50VG9TdG9yYWdlKCdhY2NlbnRfbGlnaHQnLCBlLnRhcmdldC52YWx1ZSlcclxuXHRcdFx0XHRjbG9zZVNldHRpbmdzKClcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZS50YXJnZXQuaWQgPT09ICdhY2NlbnREYXJrJykge1xyXG5cdFx0XHRlLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcblx0XHRcdFx0dXBkYXRlQ1NTVmFycyhudWxsLCBlLnRhcmdldC52YWx1ZSlcclxuXHRcdFx0fSlcclxuXHRcdFx0Ly8gU2F2ZSBkYXJrIGFjY2VudCBjb2xvciB0byBzdG9yYWdlXHJcblx0XHRcdGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcblx0XHRcdFx0c2V0QWNjZW50VG9TdG9yYWdlKCdhY2NlbnRfZGFyaycsIGUudGFyZ2V0LnZhbHVlKVxyXG5cdFx0XHRcdGNsb3NlU2V0dGluZ3MoKVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGFuZCBpbmplY3QgdGhlIDxzdHlsZT4gZWxlbWVudFxyXG5mdW5jdGlvbiBpbmplY3RTdHlsZUVsZW1lbnQoKSB7XHJcblx0c3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xyXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDU1NWYXJzKGxpZ2h0Q29sb3IsIGRhcmtDb2xvcikge1xyXG5cdGlmICghc3R5bGVFbGVtZW50KSBpbmplY3RTdHlsZUVsZW1lbnQoKVxyXG5cclxuXHRjb25zdCBsaWdodEhTTCA9IGxpZ2h0Q29sb3JcclxuXHRcdD8gaGV4VG9IU0wobGlnaHRDb2xvcilcclxuXHRcdDogaGV4VG9IU0woJHNldHRpbmdzLnF1ZXJ5U2VsZWN0b3IoJy5jb2xvcnBpY2tlciAjYWNjZW50TGlnaHQnKS52YWx1ZSlcclxuXHRjb25zdCBkYXJrSFNMID0gZGFya0NvbG9yXHJcblx0XHQ/IGhleFRvSFNMKGRhcmtDb2xvcilcclxuXHRcdDogaGV4VG9IU0woJHNldHRpbmdzLnF1ZXJ5U2VsZWN0b3IoJy5jb2xvcnBpY2tlciAjYWNjZW50RGFyaycpLnZhbHVlKVxyXG5cclxuXHRsZXQgY3NzVmFycyA9ICcnXHJcblxyXG5cdGNzc1ZhcnMgPSBgXHJcbiAgICAgICAgaHRtbC5saWdodCB7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LWg6ICR7bGlnaHRIU0xbMF19ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LXM6ICR7bGlnaHRIU0xbMV19JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWFjY2VudC1sOiAke2xpZ2h0SFNMWzJdfSUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbC5kYXJrIHtcclxuICAgICAgICAgICAgLS1hY2NlbnQtaDogJHtkYXJrSFNMWzBdfSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWFjY2VudC1zOiAke2RhcmtIU0xbMV19JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWFjY2VudC1sOiAke2RhcmtIU0xbMl19JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIGBcclxuXHJcblx0Ly8gY29uc29sZS5sb2coY3NzVmFycylcclxuXHJcblx0c3R5bGVFbGVtZW50LnRleHRDb250ZW50ID0gY3NzVmFyc1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXRBY2NlbnRUb1N0b3JhZ2Uoc3RvcmFnZUNvbG9yUHJvcGVydHksIGFjY2VudFZhbHVlKSB7XHJcblx0dHJ5IHtcclxuXHRcdGlmIChzdG9yYWdlQ29sb3JQcm9wZXJ0eSA9PT0gJ2FjY2VudF9saWdodCcpIHtcclxuXHRcdFx0YXdhaXQgYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHsgYWNjZW50X2xpZ2h0OiBhY2NlbnRWYWx1ZSB9KVxyXG5cdFx0fVxyXG5cdFx0aWYgKHN0b3JhZ2VDb2xvclByb3BlcnR5ID09PSAnYWNjZW50X2RhcmsnKSB7XHJcblx0XHRcdGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IGFjY2VudF9kYXJrOiBhY2NlbnRWYWx1ZSB9KVxyXG5cdFx0fVxyXG5cdFx0Ly8gY29uc29sZS5sb2coeyBzdG9yYWdlQ29sb3JQcm9wZXJ0eSwgYWNjZW50VmFsdWUgfSlcclxuXHR9IGNhdGNoIChlKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBzZXR0aW5nIHRoZSBhY2NlbnQgY29sb3JzIGluIHN0b3JhZ2U6JywgZSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvbG9ySW5wdXRWYWx1ZSh7IGFjY2VudExpZ2h0LCBhY2NlbnREYXJrIH0pIHtcclxuXHQvLyBjb25zb2xlLmxvZyh7IGFjY2VudExpZ2h0LCBhY2NlbnREYXJrIH0pXHJcblx0JHNldHRpbmdzLnF1ZXJ5U2VsZWN0b3IoJy5jb2xvcnBpY2tlciAjYWNjZW50TGlnaHQnKS52YWx1ZSA9IGFjY2VudExpZ2h0XHJcblx0JHNldHRpbmdzLnF1ZXJ5U2VsZWN0b3IoJy5jb2xvcnBpY2tlciAjYWNjZW50RGFyaycpLnZhbHVlID0gYWNjZW50RGFya1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVBY2NlbnRzU3RvcmFnZSgpIHtcclxuXHR0cnkge1xyXG5cdFx0Ly8gR2V0IGFjY2VudCBjb2xvcnMgZnJvbSBzdG9yYWdlXHJcblx0XHRjb25zdCB7IGFjY2VudF9saWdodDogYWNjZW50TGlnaHQsIGFjY2VudF9kYXJrOiBhY2NlbnREYXJrIH0gPSBhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoW1xyXG5cdFx0XHQnYWNjZW50X2xpZ2h0JyxcclxuXHRcdFx0J2FjY2VudF9kYXJrJyxcclxuXHRcdF0pXHJcblx0XHQvLyBjb25zb2xlLmxvZygnUmV0cmlldmVkIGFjY2VudCBjb2xvcnMgZnJvbSBzdG9yYWdlOicsIGFjY2VudExpZ2h0LCBhY2NlbnREYXJrKVxyXG5cclxuXHRcdC8vIFNldCBkZWZhdWx0IGFjY2VudCBjb2xvcnMgaWYgbm90IGFscmVhZHkgc2V0XHJcblx0XHRpZiAoIWFjY2VudExpZ2h0IHx8ICFhY2NlbnREYXJrKSB7XHJcblx0XHRcdGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7XHJcblx0XHRcdFx0YWNjZW50X2xpZ2h0OiBkZWZhdWx0Q29sb3JMaWdodCxcclxuXHRcdFx0XHRhY2NlbnRfZGFyazogZGVmYXVsdENvbG9yRGFyayxcclxuXHRcdFx0fSlcclxuXHRcdFx0Y29uc29sZS5sb2coJ0RlZmF1bHQgYWNjZW50IGNvbG9ycyBzZXQgaW4gc3RvcmFnZScpXHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgYWNjZW50Q29sb3JMaWdodCA9IGFjY2VudExpZ2h0IHx8IGRlZmF1bHRDb2xvckxpZ2h0XHJcblx0XHRjb25zdCBhY2NlbnRDb2xvckRhcmsgPSBhY2NlbnREYXJrIHx8IGRlZmF1bHRDb2xvckRhcmtcclxuXHJcblx0XHQvLyBVcGRhdGUgQ1NTIHdpdGggcmV0cmlldmVkIG9yIGRlZmF1bHQgYWNjZW50IGNvbG9yc1xyXG5cdFx0dXBkYXRlQ1NTVmFycyhhY2NlbnRDb2xvckxpZ2h0LCBhY2NlbnRDb2xvckRhcmspXHJcblxyXG5cdFx0c2V0Q29sb3JJbnB1dFZhbHVlKHsgYWNjZW50TGlnaHQ6IGFjY2VudENvbG9yTGlnaHQsIGFjY2VudERhcms6IGFjY2VudENvbG9yRGFyayB9KVxyXG5cclxuXHRcdC8vIGNvbnNvbGUubG9nKCdBY2NlbnQgY29sb3JzIGFwcGxpZWQgdG8gQ1NTOicsIGFjY2VudENvbG9yTGlnaHQsIGFjY2VudENvbG9yRGFyaylcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignRXJyb3IgaGFuZGxpbmcgYWNjZW50IGNvbG9yczonLCBlcnJvcilcclxuXHR9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gcmVzZXRBbGxTZXR0aW5ncygpIHtcclxuXHRpZiAoIXN0eWxlRWxlbWVudCkgaW5qZWN0U3R5bGVFbGVtZW50KClcclxuXHJcblx0Ly8gbGV0IGFjY2VudExpZ2h0ID0gWzI1MCwgOTksIDY1XVxyXG5cdC8vIGxldCBhY2NlbnREYXJrID0gWzI3MiwgOTMsIDc4XVxyXG5cdGxldCBhY2NlbnRMaWdodCA9IGhleFRvSFNMKGRlZmF1bHRDb2xvckxpZ2h0KVxyXG5cdGxldCBhY2NlbnREYXJrID0gaGV4VG9IU0woZGVmYXVsdENvbG9yRGFyaylcclxuXHJcblx0Y29uc3QgY3NzVmFycyA9IGBcclxuICAgICAgICBodG1sLmxpZ2h0IHtcclxuICAgICAgICAgICAgLS1hY2NlbnQtaDogJHthY2NlbnRMaWdodFswXX0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1hY2NlbnQtczogJHthY2NlbnRMaWdodFsxXX0lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LWw6ICR7YWNjZW50TGlnaHRbMl19JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sLmRhcmsge1xyXG4gICAgICAgICAgICAtLWFjY2VudC1oOiAke2FjY2VudERhcmtbMF19ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LXM6ICR7YWNjZW50RGFya1sxXX0lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LWw6ICR7YWNjZW50RGFya1syXX0lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgYFxyXG5cclxuXHRzdHlsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBjc3NWYXJzXHJcblxyXG5cdHNldENvbG9ySW5wdXRWYWx1ZSh7IGFjY2VudExpZ2h0OiBkZWZhdWx0Q29sb3JMaWdodCwgYWNjZW50RGFyazogZGVmYXVsdENvbG9yRGFyayB9KVxyXG5cclxuXHRhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoe1xyXG5cdFx0YWNjZW50X2xpZ2h0OiBkZWZhdWx0Q29sb3JMaWdodCxcclxuXHRcdGFjY2VudF9kYXJrOiBkZWZhdWx0Q29sb3JEYXJrLFxyXG5cdH0pXHJcbn1cclxuXHJcbi8qID09PSBJbml0aWFsaXphdGlvbiAqL1xyXG5mdW5jdGlvbiBpbml0KCkge1xyXG5cdGluaXRUaGVtZSgpXHJcblx0Y3JlYXRlQW5kQXBwZW5kU1ZHU3RpY2t5QnRuKClcclxuXHRyZW5kZXJTZXR0aW5ncygpXHJcblx0ZGVjcmVpc2VGbG9hdGluZ0J0blNpemUoKVxyXG5cdGhhbmRsZUFjY2VudHNTdG9yYWdlKClcclxuXHRoYW5kbGVDb2xvcklucHV0KClcclxufVxyXG5cclxuLyogPyBPbmx5IGZvciBkZWJ1Z2dpbmcgLSByZW1vdmUgbGF0ZXIhICovXHJcbi8qIGRlYnVnR2V0QWxsU3RvcmFnZUl0ZW1zKClcclxuLy8gR2V0IGFsbCB0aGUgaXRlbXMgaW4gdGhlIHN0b3JhZ2VcclxuZnVuY3Rpb24gZGVidWdHZXRBbGxTdG9yYWdlSXRlbXMoKSB7XHJcblx0YnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KG51bGwsIGZ1bmN0aW9uIChpdGVtcykge1xyXG5cdFx0Y29uc29sZS5sb2coaXRlbXMpIC8vIFRoaXMgd2lsbCBsb2cgYWxsIHRoZSBpdGVtcyBzdG9yZWQgaW4gc3luYyBzdG9yYWdlXHJcblx0fSlcclxufVxyXG4qL1xyXG4iLCIvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC4xMC4wIC0gRnJpIEF1ZyAxMiAyMDIyIDE5OjQyOjQ0ICovXG4vKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG4vKiB2aW06IHNldCBzdHM9MiBzdz0yIGV0IHR3PTgwOiAqL1xuLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblwidXNlIHN0cmljdFwiO1xuXG5pZiAoIWdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lPy5pZCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG59XG5cbmlmICh0eXBlb2YgZ2xvYmFsVGhpcy5icm93c2VyID09PSBcInVuZGVmaW5lZFwiIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWxUaGlzLmJyb3dzZXIpICE9PSBPYmplY3QucHJvdG90eXBlKSB7XG4gIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiO1xuXG4gIC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgLy8gY29udGVudHMgb2YgYSBmdW5jdGlvbiB1bnRpbCB0aGUgZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHNpbmNlIGl0IHdpbGxcbiAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cbiAgY29uc3Qgd3JhcEFQSXMgPSBleHRlbnNpb25BUElzID0+IHtcbiAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgLy8gYXQgYnVpbGQgdGltZSBieSByZXBsYWNpbmcgdGhlIGZvbGxvd2luZyBcImluY2x1ZGVcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxuICAgIC8vIEpTT04gZmlsZS5cbiAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgIFwiYWxhcm1zXCI6IHtcbiAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJib29rbWFya3NcIjoge1xuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q2hpbGRyZW5cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UmVjZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb3dzZXJBY3Rpb25cIjoge1xuICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5Qb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb3dzaW5nRGF0YVwiOiB7XG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNvb2tpZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRG93bmxvYWRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUhpc3RvcnlcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlTG9jYWxTdG9yYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVQbHVnaW5EYXRhXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb21tYW5kc1wiOiB7XG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb250ZXh0TWVudXNcIjoge1xuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkZXZ0b29sc1wiOiB7XG4gICAgICAgIFwiaW5zcGVjdGVkV2luZG93XCI6IHtcbiAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMixcbiAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMyxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlU2lkZWJhclBhbmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRvd25sb2Fkc1wiOiB7XG4gICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImVyYXNlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUZpbGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzdW1lXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZXh0ZW5zaW9uXCI6IHtcbiAgICAgICAgXCJpc0FsbG93ZWRGaWxlU2NoZW1lQWNjZXNzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaGlzdG9yeVwiOiB7XG4gICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZUFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVSYW5nZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VmlzaXRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaTE4blwiOiB7XG4gICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpZGVudGl0eVwiOiB7XG4gICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImlkbGVcIjoge1xuICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm1hbmFnZW1lbnRcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0U2VsZlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInVuaW5zdGFsbFNlbGZcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGVybWlzc2lvbkxldmVsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGFnZUFjdGlvblwiOiB7XG4gICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlkZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwZXJtaXNzaW9uc1wiOiB7XG4gICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQbGF0Zm9ybUluZm9cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwib3Blbk9wdGlvbnNQYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTmF0aXZlTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlc3Npb25zXCI6IHtcbiAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFJlY2VudGx5Q2xvc2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlc3RvcmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICBcImxvY2FsXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRhYnNcIjoge1xuICAgICAgICBcImNhcHR1cmVWaXNpYmxlVGFiXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXNjYXJkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImR1cGxpY2F0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdvQmFja1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImluc2VydENTU1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInF1ZXJ5XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbG9hZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ1NTXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidG9wU2l0ZXNcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2ViTmF2aWdhdGlvblwiOiB7XG4gICAgICAgIFwiZ2V0QWxsRnJhbWVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3ZWJSZXF1ZXN0XCI6IHtcbiAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3aW5kb3dzXCI6IHtcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldExhc3RGb2N1c2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxuICAgICAqIG90aGVyd2lzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cbiAgICAgKiAgICAgICAgQSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpbiBvcmRlciB0byBjcmVhdGUgdGhlIHZhbHVlIGZvciBhbnlcbiAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxuICAgICAqL1xuICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XG4gICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICBzdXBlcihpdGVtcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XG4gICAgICB9XG5cbiAgICAgIGdldChrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAqL1xuICAgIGNvbnN0IGlzVGhlbmFibGUgPSB2YWx1ZSA9PiB7XG4gICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcbiAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAqXG4gICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxuICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xuICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcbiAgICAgKiAgICAgICAgcHJvbWlzZS5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0XG4gICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuICguLi5jYWxsYmFja0FyZ3MpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgfHxcbiAgICAgICAgICAgICAgICAgICAoY2FsbGJhY2tBcmdzLmxlbmd0aCA8PSAxICYmIG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnICE9PSBmYWxzZSkpIHtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gKG51bUFyZ3MpID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgKiAgICAgICAgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtdXN0IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heEFyZ3NcbiAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24ob2JqZWN0LCAuLi4qKX1cbiAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBhc3luY0Z1bmN0aW9uV3JhcHBlcih0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcbiAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtyZXNvbHZlLCByZWplY3R9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoY2JFcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bmFtZX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG5cbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuXG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgQVBJIG1ldGhvZCBtZXRhZGF0YSwgc28gdGhhdCB0aGUgbmV4dCBBUEkgY2FsbHMgd2lsbCBub3QgdHJ5IHRvXG4gICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cbiAgICAgICAgICAgICAgbWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEubm9DYWxsYmFjaykge1xuICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtyZXNvbHZlLCByZWplY3R9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyBhbiBleGlzdGluZyBtZXRob2Qgb2YgdGhlIHRhcmdldCBvYmplY3QsIHNvIHRoYXQgY2FsbHMgdG8gaXQgYXJlXG4gICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxuICAgICAqIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICogICAgICAgIFRoZSBvcmlnaW5hbCB0YXJnZXQgb2JqZWN0IHRoYXQgdGhlIHdyYXBwZWQgbWV0aG9kIGJlbG9uZ3MgdG8uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XG4gICAgICogICAgICAgIG9iamVjdCB3aGljaCBpcyBjcmVhdGVkIHRvIHdyYXAgdGhlIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXG4gICAgICogICAgICAgIG9mIHRoZSB3cmFwcGVkIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XG4gICAgICogICAgICAgIEEgUHJveHkgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gbWV0aG9kLCB3aGljaCBpbnZva2VzIHRoZSBnaXZlbiB3cmFwcGVyXG4gICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICovXG4gICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcbiAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIC8qKlxuICAgICAqIFdyYXBzIGFuIG9iamVjdCBpbiBhIFByb3h5IHdoaWNoIGludGVyY2VwdHMgYW5kIHdyYXBzIGNlcnRhaW4gbWV0aG9kc1xuICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW3dyYXBwZXJzID0ge31dXG4gICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxuICAgICAqICAgICAgICBtZXRob2QgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlLiBUaGVzZVxuICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YSA9IHt9XVxuICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxuICAgICAqICAgICAgICB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUgd2hpY2ggaGFzIGEgY29ycmVzcG9uZGluZyBtZXRhZGF0YSBvYmplY3RcbiAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxuICAgICAqICAgICAgICB7QHNlZSB3cmFwQXN5bmNGdW5jdGlvbn1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgfHwgcHJvcCBpbiBjYWNoZTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIShwcm9wIGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BdO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IHdyYXBBc3luY0Z1bmN0aW9uKHByb3AsIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2QgdGhhdCB3ZSBkb24ndCBrbm93IG9yIGNhcmUgYWJvdXQuIFJldHVybiB0aGVcbiAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgLy8gb2YuIENyZWF0ZSBhIHN1Yi1vYmplY3Qgd3JhcHBlciBmb3IgaXQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY2hpbGRcbiAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIFwiKlwiKSkge1xuICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCB7XG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQocHJveHlUYXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFwiZ2V0XCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcbiAgICAgIC8vIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSB0YXJnZXQgaWYgdGhhdCB2YWx1ZSBpcyBkZWNsYXJlZCByZWFkLW9ubHkgYW5kXG4gICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cbiAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW5ub3QgcmV0dXJuIGEgY3VzdG9tIG9iamVjdCBmb3IgQVBJcyB0aGF0XG4gICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBwcm94eSBoYW5kbGVycyB0aGVtc2VsdmVzIHdpbGwgc3RpbGwgdXNlIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YFxuICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXG4gICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXG4gICAgICpcbiAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXG4gICAgICogcmV0cmlldmUgdGhlIG9yaWdpbmFsIHdyYXBwZXIsIHNvIHRoYXQgIGF0dGVtcHRzIHRvIHJlbW92ZSBhXG4gICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEZWZhdWx0V2Vha01hcDxmdW5jdGlvbiwgZnVuY3Rpb24+fSB3cmFwcGVyTWFwXG4gICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcbiAgICAgKiAgICAgICAgYW4gZXhpc3Rpbmcgb25lIHdoZW4gaXQgZG9lcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xuICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcbiAgICAgIH0sXG5cbiAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gb25SZXF1ZXN0RmluaXNoZWQgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCB3aWxsIHJldHVybiBhXG4gICAgICAgKiBgZ2V0Q29udGVudCgpYCBwcm9wZXJ0eSB3aGljaCByZXR1cm5zIGEgYFByb21pc2VgIHJhdGhlciB0aGFuIHVzaW5nIGFcbiAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxXG4gICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZFJlcSA9IHdyYXBPYmplY3QocmVxLCB7fSAvKiB3cmFwcGVycyAqLywge1xuICAgICAgICAgIGdldENvbnRlbnQ6IHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDAsXG4gICAgICAgICAgICBtYXhBcmdzOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0ZW5lcih3cmFwcGVkUmVxKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGEgbWVzc2FnZSBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IG1heSBzZW5kIHJlc3BvbnNlcyBiYXNlZCBvblxuICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgKiBzZW50IHdoZW4gdGhlIHByb21pc2UgZWl0aGVyIHJlc29sdmVzIG9yIHJlamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgKiAgICAgICAgVGhlIG1lc3NhZ2Ugc2VudCBieSB0aGUgb3RoZXIgZW5kIG9mIHRoZSBjaGFubmVsLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKil9IHNlbmRSZXNwb25zZVxuICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgd3JhcHBlZFNlbmRSZXNwb25zZSA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkaWRDYWxsU2VuZFJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIobWVzc2FnZSwgc2VuZGVyLCB3cmFwcGVkU2VuZFJlc3BvbnNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpO1xuXG4gICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciBkaWRuJ3QgcmV0dXJuZWQgdHJ1ZSBvciBhIFByb21pc2UsIG9yIGNhbGxlZFxuICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAvLyBhbmQgYW4gZXJyb3IgaWYgdGhlIHByb21pc2UgcmVqZWN0cyAoYSB3cmFwcGVkIHNlbmRNZXNzYWdlIGhhc1xuICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAvLyBwcm9taXNlKS5cbiAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gKHByb21pc2UpID0+IHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2UgdmFsdWUuXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAvLyBTZW5kIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaWYgdGhlIHJlamVjdGVkIHZhbHVlXG4gICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgIF9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXzogdHJ1ZSxcbiAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgb25NZXNzYWdlIHJlamVjdGVkIHJlcGx5XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgLy8gY2FsbGJhY2sgdG8gcmVzb2x2ZSBhbmQgc2VuZCBpdCBhcyBhIHJlc3BvbnNlLlxuICAgICAgICBpZiAoaXNSZXN1bHRUaGVuYWJsZSkge1xuICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChzZW5kUmVzcG9uc2VQcm9taXNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExldCBDaHJvbWUga25vdyB0aGF0IHRoZSBsaXN0ZW5lciBpcyByZXBseWluZy5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2sgPSAoe3JlamVjdCwgcmVzb2x2ZX0sIHJlcGx5KSA9PiB7XG4gICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAvLyB0aGUgcHJvbWlzZSB0byB1bmRlZmluZWQgYXMgaW4gRmlyZWZveC5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgLy8gYW4gRXJyb3IgaW5zdGFuY2UuXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXBseSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZSA9IChuYW1lLCBtZXRhZGF0YSwgYXBpTmFtZXNwYWNlT2JqLCAuLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtyZXNvbHZlLCByZWplY3R9KTtcbiAgICAgICAgYXJncy5wdXNoKHdyYXBwZWRDYik7XG4gICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgIGRldnRvb2xzOiB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBvblJlcXVlc3RGaW5pc2hlZDogd3JhcEV2ZW50KG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDN9KSxcbiAgICAgIH0sXG4gICAgICB0YWJzOiB7XG4gICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHttaW5BcmdzOiAyLCBtYXhBcmdzOiAzfSksXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xuICAgICAgY2xlYXI6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICAgIGdldDoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgICAgc2V0OiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgfTtcbiAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xuICAgICAgbmV0d29yazoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgICAgc2VydmljZXM6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICAgIHdlYnNpdGVzOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgfTtcblxuICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gIH07XG5cbiAgLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxuICAvLyBgbW9kdWxlYCB2YXJpYWJsZSBhdmFpbGFibGUuXG4gIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5icm93c2VyO1xufVxuIiwiZXhwb3J0IGNvbnN0IGljb25fc3VuID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImljb24gaWNvbi10YWJsZXIgaWNvbnMtdGFibGVyLW91dGxpbmUgaWNvbi10YWJsZXItc3VuXCI+PHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPjxwYXRoIGQ9XCJNMTIgMTJtLTQgMGE0IDQgMCAxIDAgOCAwYTQgNCAwIDEgMCAtOCAwXCIgLz48cGF0aCBkPVwiTTMgMTJoMW04IC05djFtOCA4aDFtLTkgOHYxbS02LjQgLTE1LjRsLjcgLjdtMTIuMSAtLjdsLS43IC43bTAgMTEuNGwuNyAuN20tMTIuMSAtLjdsLS43IC43XCIgLz48L3N2Zz5gXHJcblxyXG5leHBvcnQgY29uc3QgaWNvbl9tb29uID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImljb24gaWNvbi10YWJsZXIgaWNvbnMtdGFibGVyLW91dGxpbmUgaWNvbi10YWJsZXItbW9vblwiPjxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPjxwYXRoIGQ9XCJNMTIgM2MuMTMyIDAgLjI2MyAwIC4zOTMgMGE3LjUgNy41IDAgMCAwIDcuOTIgMTIuNDQ2YTkgOSAwIDEgMSAtOC4zMTMgLTEyLjQ1NHpcIiAvPjwvc3ZnPmBcclxuXHJcbmV4cG9ydCBjb25zdCBpY29uX21vb25fZnVsbCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1vdXRsaW5lIGljb24tdGFibGVyLW1vb24tMlwiPjxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPjxwYXRoIGQ9XCJNMTYuNDE4IDQuMTU3YTggOCAwIDAgMCAwIDE1LjY4NlwiIC8+PHBhdGggZD1cIk0xMiAxMm0tOSAwYTkgOSAwIDEgMCAxOCAwYTkgOSAwIDEgMCAtMTggMFwiIC8+PC9zdmc+YFxyXG5cclxuZXhwb3J0IGNvbnN0IGljb25fc2V0dGluZ3MgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiaWNvbiBpY29uLXRhYmxlciBpY29ucy10YWJsZXItb3V0bGluZSBpY29uLXRhYmxlci1zZXR0aW5nc1wiPjxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPjxwYXRoIGQ9XCJNMTAuMzI1IDQuMzE3Yy40MjYgLTEuNzU2IDIuOTI0IC0xLjc1NiAzLjM1IDBhMS43MjQgMS43MjQgMCAwIDAgMi41NzMgMS4wNjZjMS41NDMgLS45NCAzLjMxIC44MjYgMi4zNyAyLjM3YTEuNzI0IDEuNzI0IDAgMCAwIDEuMDY1IDIuNTcyYzEuNzU2IC40MjYgMS43NTYgMi45MjQgMCAzLjM1YTEuNzI0IDEuNzI0IDAgMCAwIC0xLjA2NiAyLjU3M2MuOTQgMS41NDMgLS44MjYgMy4zMSAtMi4zNyAyLjM3YTEuNzI0IDEuNzI0IDAgMCAwIC0yLjU3MiAxLjA2NWMtLjQyNiAxLjc1NiAtMi45MjQgMS43NTYgLTMuMzUgMGExLjcyNCAxLjcyNCAwIDAgMCAtMi41NzMgLTEuMDY2Yy0xLjU0MyAuOTQgLTMuMzEgLS44MjYgLTIuMzcgLTIuMzdhMS43MjQgMS43MjQgMCAwIDAgLTEuMDY1IC0yLjU3MmMtMS43NTYgLS40MjYgLTEuNzU2IC0yLjkyNCAwIC0zLjM1YTEuNzI0IDEuNzI0IDAgMCAwIDEuMDY2IC0yLjU3M2MtLjk0IC0xLjU0MyAuODI2IC0zLjMxIDIuMzcgLTIuMzdjMSAuNjA4IDIuMjk2IC4wNyAyLjU3MiAtMS4wNjV6XCIgLz48cGF0aCBkPVwiTTkgMTJhMyAzIDAgMSAwIDYgMGEzIDMgMCAwIDAgLTYgMFwiIC8+PC9zdmc+YFxyXG5cclxuZXhwb3J0IGNvbnN0IGljb25fcGFpbnQgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiaWNvbiBpY29uLXRhYmxlciBpY29ucy10YWJsZXItb3V0bGluZSBpY29uLXRhYmxlci1wYWludFwiPjxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPjxwYXRoIGQ9XCJNNSAzbTAgMmEyIDIgMCAwIDEgMiAtMmgxMGEyIDIgMCAwIDEgMiAydjJhMiAyIDAgMCAxIC0yIDJoLTEwYTIgMiAwIDAgMSAtMiAtMnpcIiAvPjxwYXRoIGQ9XCJNMTkgNmgxYTIgMiAwIDAgMSAyIDJhNSA1IDAgMCAxIC01IDVsLTUgMHYyXCIgLz48cGF0aCBkPVwiTTEwIDE1bTAgMWExIDEgMCAwIDEgMSAtMWgyYTEgMSAwIDAgMSAxIDF2NGExIDEgMCAwIDEgLTEgMWgtMmExIDEgMCAwIDEgLTEgLTF6XCIgLz48L3N2Zz5gXHJcblxyXG5leHBvcnQgY29uc3QgaWNvbl9wYWxldHRlID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImljb24gaWNvbi10YWJsZXIgaWNvbnMtdGFibGVyLW91dGxpbmUgaWNvbi10YWJsZXItcGFsZXR0ZVwiPjxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPjxwYXRoIGQ9XCJNMTIgMjFhOSA5IDAgMCAxIDAgLTE4YzQuOTcgMCA5IDMuNTgyIDkgOGMwIDEuMDYgLS40NzQgMi4wNzggLTEuMzE4IDIuODI4Yy0uODQ0IC43NSAtMS45ODkgMS4xNzIgLTMuMTgyIDEuMTcyaC0yLjVhMiAyIDAgMCAwIC0xIDMuNzVhMS4zIDEuMyAwIDAgMSAtMSAyLjI1XCIgLz48cGF0aCBkPVwiTTguNSAxMC41bS0xIDBhMSAxIDAgMSAwIDIgMGExIDEgMCAxIDAgLTIgMFwiIC8+PHBhdGggZD1cIk0xMi41IDcuNW0tMSAwYTEgMSAwIDEgMCAyIDBhMSAxIDAgMSAwIC0yIDBcIiAvPjxwYXRoIGQ9XCJNMTYuNSAxMC41bS0xIDBhMSAxIDAgMSAwIDIgMGExIDEgMCAxIDAgLTIgMFwiIC8+PC9zdmc+YFxyXG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChcbiAgICAgIGtleSA9PT0gJ2RlZmF1bHQnIHx8XG4gICAgICBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRlc3QsIGtleSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCIvKiBleHBvcnQgZnVuY3Rpb24gaGV4VG9IU0woaGV4KSB7XHJcblx0Y29uc3QgcmVzdWx0ID0ge31cclxuXHRoZXggPSBoZXguc3Vic3RyaW5nKDEpIC8vIFJlbW92ZSBsZWFkaW5nIFwiI1wiIHN5bWJvbFxyXG5cclxuXHRjb25zdCByZ2IgPSBoZXgubWF0Y2goL1tBLUZhLWZcXGRdezJ9L2cpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcclxuXHRcdHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTYpIC8gMjU1XHJcblx0fSlcclxuXHJcblx0Y29uc3QgciA9IHJnYlswXVxyXG5cdGNvbnN0IGcgPSByZ2JbMV1cclxuXHRjb25zdCBiID0gcmdiWzJdXHJcblxyXG5cdGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpXHJcblx0Y29uc3QgbWluID0gTWF0aC5taW4ociwgZywgYilcclxuXHRsZXQgaCwgcywgbFxyXG5cclxuXHRsID0gKG1heCArIG1pbikgLyAyXHJcblxyXG5cdGlmIChtYXggPT09IG1pbikge1xyXG5cdFx0aCA9IHMgPSAwIC8vIEFjaHJvbWF0aWNcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc3QgZCA9IG1heCAtIG1pblxyXG5cdFx0cyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pXHJcblx0XHRzd2l0Y2ggKG1heCkge1xyXG5cdFx0XHRjYXNlIHI6XHJcblx0XHRcdFx0aCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSBnOlxyXG5cdFx0XHRcdGggPSAoYiAtIHIpIC8gZCArIDJcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlIGI6XHJcblx0XHRcdFx0aCA9IChyIC0gZykgLyBkICsgNFxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHR9XHJcblx0XHRoID0gTWF0aC5yb3VuZChoICogNjApXHJcblx0fVxyXG5cclxuXHRyZXN1bHQuaCA9IGggJSAzNjBcclxuXHRyZXN1bHQucyA9IE1hdGgucm91bmQocyAqIDEwMClcclxuXHRyZXN1bHQubCA9IE1hdGgucm91bmQobCAqIDEwMClcclxuXHJcblx0cmV0dXJuIHJlc3VsdFxyXG59ICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9IU0woaGV4KSB7XHJcblx0Ly8gQ29udmVydCBoZXggdG8gUkdCIGZpcnN0XHJcblx0bGV0IHIgPSAwLFxyXG5cdFx0ZyA9IDAsXHJcblx0XHRiID0gMFxyXG5cdGlmIChoZXgubGVuZ3RoID09PSA0KSB7XHJcblx0XHRyID0gcGFyc2VJbnQoaGV4WzFdICsgaGV4WzFdLCAxNilcclxuXHRcdGcgPSBwYXJzZUludChoZXhbMl0gKyBoZXhbMl0sIDE2KVxyXG5cdFx0YiA9IHBhcnNlSW50KGhleFszXSArIGhleFszXSwgMTYpXHJcblx0fSBlbHNlIGlmIChoZXgubGVuZ3RoID09PSA3KSB7XHJcblx0XHRyID0gcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNilcclxuXHRcdGcgPSBwYXJzZUludChoZXguc2xpY2UoMywgNSksIDE2KVxyXG5cdFx0YiA9IHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpXHJcblx0fVxyXG5cclxuXHQvLyBUaGVuIGNvbnZlcnQgUkdCIHRvIEhTTFxyXG5cdHIgLz0gMjU1XHJcblx0ZyAvPSAyNTVcclxuXHRiIC89IDI1NVxyXG5cdGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpXHJcblx0Y29uc3QgbWluID0gTWF0aC5taW4ociwgZywgYilcclxuXHRsZXQgaCxcclxuXHRcdHMsXHJcblx0XHRsID0gKG1heCArIG1pbikgLyAyXHJcblxyXG5cdGlmIChtYXggPT09IG1pbikge1xyXG5cdFx0aCA9IHMgPSAwIC8vIGFjaHJvbWF0aWNcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc3QgZCA9IG1heCAtIG1pblxyXG5cdFx0cyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pXHJcblx0XHRzd2l0Y2ggKG1heCkge1xyXG5cdFx0XHRjYXNlIHI6XHJcblx0XHRcdFx0aCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSBnOlxyXG5cdFx0XHRcdGggPSAoYiAtIHIpIC8gZCArIDJcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlIGI6XHJcblx0XHRcdFx0aCA9IChyIC0gZykgLyBkICsgNFxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHR9XHJcblx0XHRoIC89IDZcclxuXHR9XHJcblxyXG5cdHJldHVybiBbTWF0aC5yb3VuZChoICogMzYwKSwgTWF0aC5yb3VuZChzICogMTAwKSwgTWF0aC5yb3VuZChsICogMTAwKV1cclxufVxyXG4iLCIvLyBtYWluLmpzXHJcbmltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCdcclxuaW1wb3J0IHsgcmVuZGVyRm9udFNtYWxsQ2FyZCwgcmVuZGVyRm9udEJpZ0NhcmQsIHJlbmRlckJ1dHRvbiB9IGZyb20gJy4vY29tcG9uZW50cy9yZW5kZXJGb250cydcclxuXHJcbi8vIENvbnN0YW50c1xyXG5jb25zdCBERUZBVUxUUyA9IHtcclxuXHRmb250RmFtaWx5OiBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1mb250RmFtaWx5RGVmYXVsdCcpLFxyXG5cdGZvbnRTaXplOiAxNixcclxuXHRsZXR0ZXJTcGFjaW5nOiAwLFxyXG5cdGxpbmVIZWlnaHQ6IDI4LFxyXG59XHJcblxyXG5jb25zdCBGT05UX05BTUVTID0gW1xyXG5cdCdEZWZhdWx0JyxcclxuXHQnSW50ZXInLFxyXG5cdCdSb2JvdG8nLFxyXG5cdCdSb2JvdG8gTW9ubycsXHJcblx0J0RNIFNhbnMnLFxyXG5cdCdSZWRkaXQgTW9ubycsXHJcblx0J1BvcHBpbnMnLFxyXG5cdCdOb3RvIFNhbnMnLFxyXG5cdCdNb25vc3BhY2UnLFxyXG5cdCdMYXRvJyxcclxuXHQnUXVpY2tzYW5kJyxcclxuXHQnT3V0Zml0JyxcclxuXVxyXG5cclxuY29uc3QgR09PR0xFX0ZPTlRfV0VJR0hUUyA9IGA6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwYFxyXG5cclxubGV0IG9uRm9jdXNWYWxGb250U2l6ZSA9IG51bGwsXHJcblx0b25Gb2N1c1ZhbExpbmVIZWlnaHQgPSBudWxsLFxyXG5cdG9uRm9jdXNWYWxMZXR0ZXJTcGFjaW5nID0gbnVsbFxyXG5cclxuY29uc3QgZm9udFNpemVEYXRhID0ge1xyXG5cdG5hbWU6ICdGb250IFNpemUnLFxyXG5cdGNsYXNzTmFtZTogJ2ZvbnRzX19zaXplJyxcclxuXHRpbnB1dElkOiAnZm9udFNpemUnLFxyXG5cdGlucHV0VHlwZTogJ251bWJlcicsXHJcblx0aW5wdXRWYWx1ZTogREVGQVVMVFMuZm9udFNpemUsXHJcblx0aW5wdXRQbGFjZWhvbGRlcjogREVGQVVMVFMuZm9udFNpemUsXHJcblx0dW5pdDogJ3B4JyxcclxuXHRtaW46IDEyLFxyXG5cdG1heDogMjQsXHJcbn1cclxuXHJcbmNvbnN0IGxpbmVIZWlnaHREYXRhID0ge1xyXG5cdG5hbWU6ICdMaW5lIEhlaWdodCcsXHJcblx0Y2xhc3NOYW1lOiAnZm9udHNfX2xpbmVIZWlnaHQnLFxyXG5cdGlucHV0SWQ6ICdsaW5lSGVpZ2h0JyxcclxuXHRpbnB1dFR5cGU6ICdudW1iZXInLFxyXG5cdGlucHV0VmFsdWU6IERFRkFVTFRTLmxpbmVIZWlnaHQsXHJcblx0aW5wdXRQbGFjZWhvbGRlcjogREVGQVVMVFMubGluZUhlaWdodCxcclxuXHR1bml0OiAncHgnLFxyXG5cdG1pbjogMTIsXHJcblx0bWF4OiA2MCxcclxufVxyXG5cclxuY29uc3QgbGV0dGVyU3BhY2luZ0RhdGEgPSB7XHJcblx0bmFtZTogJ0xldHRlciBTcGFjaW5nJyxcclxuXHRjbGFzc05hbWU6ICdmb250c19fbGV0dGVyU3BhY2luZycsXHJcblx0aW5wdXRJZDogJ2xldHRlclNwYWNpbmcnLFxyXG5cdGlucHV0VHlwZTogJ251bWJlcicsXHJcblx0aW5wdXRWYWx1ZTogREVGQVVMVFMubGV0dGVyU3BhY2luZyxcclxuXHRpbnB1dFBsYWNlaG9sZGVyOiBERUZBVUxUUy5sZXR0ZXJTcGFjaW5nLFxyXG5cdHVuaXQ6ICdweCcsXHJcblx0bWluOiAtNSxcclxuXHRtYXg6IDUsXHJcbn1cclxuXHJcbi8vIEhUTUwgdGVtcGxhdGUgZm9yIGZvbnQgY2hhbmdlciBwb3BvdmVyXHJcbmV4cG9ydCBsZXQgZm9udEh0bWxDb2RlID0gYFxyXG4gIDxzZWN0aW9uIGlkPVwiZm9udENoYW5nZXJQb3BvdmVyXCIgY2xhc3M9XCJmb250c1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvbnRzX19wcm9wc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9udHNfX2ZhbWlseSBmb250c19fZ3JvdXAgY2FyZCBjYXJkLS1iaWcgaC1mdWxsXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImZvbnRGYW1pbHlcIiBjbGFzcz1cImdyaWQgZ2FwLTEgaC1mdWxsIHctZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX191bml0IGNhcmRfX2ljb25cIj5UPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX25hbWUgdXBwZXJjYXNlIGZvbnQtc2VtaWJvbGRcIj5GT05UIEZBTUlMWTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNlbGVjdCBpZD1cImZvbnRGYW1pbHlcIiBjbGFzcz1cImJvcmRlci1ub25lIG91dGxpbmUtbm9uZSBmb2N1czpub25lIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICAke0ZPTlRfTkFNRVMubWFwKFxyXG5cdFx0XHRcdChuYW1lKSA9PiBgPG9wdGlvbiB2YWx1ZT1cIiR7bmFtZSA9PT0gJ0RlZmF1bHQnID8gREVGQVVMVFMuZm9udEZhbWlseSA6IG5hbWV9XCI+JHtuYW1lfTwvb3B0aW9uPmBcclxuXHRcdFx0KS5qb2luKCcnKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAke3JlbmRlckZvbnRCaWdDYXJkKGZvbnRTaXplRGF0YSl9XHJcbiAgICAgICR7cmVuZGVyRm9udFNtYWxsQ2FyZChsaW5lSGVpZ2h0RGF0YSl9XHJcbiAgICAgICR7cmVuZGVyRm9udFNtYWxsQ2FyZChsZXR0ZXJTcGFjaW5nRGF0YSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxmb290ZXIgY2xhc3M9XCJncmlkIG10LTEwXCI+XHJcbiAgICAgICR7cmVuZGVyQnV0dG9uKHsgaWQ6ICdyZXNldEZvbnQnLCBjb250ZW50OiAnUmVzZXQgRm9udHMnLCBkaXNhYmxlZDogZmFsc2UsIGNsYXNzTmFtZTogJ2J0bi1wcmltYXJ5JyB9KX1cclxuICAgIDwvZm9vdGVyPlxyXG4gIDwvc2VjdGlvbj5cclxuYFxyXG5cclxuLy8gRnVuY3Rpb24gdG8gc2V0IGlucHV0IGZpZWxkIHZhbHVlc1xyXG5mdW5jdGlvbiBzZXRJbnB1dEZpZWxkKGlucHV0U2VsZWN0b3IsIGlucHV0VmFsKSB7XHJcblx0Y29uc3QgaW5wdXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ncHRoLXNldHRpbmdzICMke2lucHV0U2VsZWN0b3J9YClcclxuXHRpbnB1dEVsLnZhbHVlID0gaW5wdXRWYWwgPT09ICdEZWZhdWx0JyA/IERFRkFVTFRTW2lucHV0U2VsZWN0b3JdIDogaW5wdXRWYWxcclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdG8gYXBwbHkgc2V0dGluZ3NcclxuZnVuY3Rpb24gYXBwbHlTZXR0aW5ncyhzZXR0aW5ncykge1xyXG5cdE9iamVjdC5lbnRyaWVzKHNldHRpbmdzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke2tleX1gLCB2YWx1ZSlcclxuXHRcdHNldElucHV0RmllbGQoa2V5LCB2YWx1ZSlcclxuXHJcblx0XHRjb25zb2xlLmxvZygnZ2V0Q29tcHV0ZWRTdHlsZTogJywgZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoYC0tJHtrZXl9YCkpXHJcblx0fSlcclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdG8gc2F2ZSBzZXR0aW5ncyB0byBDaHJvbWUgU3RvcmFnZVxyXG5hc3luYyBmdW5jdGlvbiBzYXZlU2V0dGluZ3Moc2V0dGluZ3MpIHtcclxuXHR0cnkge1xyXG5cdFx0YXdhaXQgYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHNldHRpbmdzKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2F2ZSBzZXR0aW5nczonLCBlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGxvYWQgc2V0dGluZ3MgZnJvbSBDaHJvbWUgU3RvcmFnZVxyXG5hc3luYyBmdW5jdGlvbiBsb2FkU2V0dGluZ3MoKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KE9iamVjdC5rZXlzKERFRkFVTFRTKSlcclxuXHJcblx0XHRpZiAoc2V0dGluZ3MuZm9udEZhbWlseSAmJiBzZXR0aW5ncy5mb250RmFtaWx5ICE9PSBERUZBVUxUUy5mb250RmFtaWx5KSB7XHJcblx0XHRcdGxvYWRHb29nbGVGb250KHNldHRpbmdzLmZvbnRGYW1pbHkpXHJcblx0XHR9XHJcblx0XHRhcHBseVNldHRpbmdzKHNldHRpbmdzKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBzZXR0aW5nczonLCBlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGR5bmFtaWNhbGx5IGxvYWQgR29vZ2xlIEZvbnRzXHJcbmZ1bmN0aW9uIGxvYWRHb29nbGVGb250KGZvbnRGYW1pbHkpIHtcclxuXHRjb25zdCBocmVmID0gYGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9JHtmb250RmFtaWx5LnJlcGxhY2UoXHJcblx0XHQnICcsXHJcblx0XHQnKydcclxuXHQpfSR7R09PR0xFX0ZPTlRfV0VJR0hUU30mZGlzcGxheT1zd2FwYFxyXG5cdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcclxuXHRsaW5rLnJlbCA9ICdzdHlsZXNoZWV0J1xyXG5cdGxpbmsuaHJlZiA9IGhyZWZcclxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGdldCBhbGwgR29vZ2xlIEZvbnQgbGlua3NcclxuZnVuY3Rpb24gZ2V0QWxsSGVhZExpbmtzKCkge1xyXG5cdHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD0nc3R5bGVzaGVldCddXCIpKVxyXG59XHJcbi8vIEZ1bmN0aW9uIHRvIHJlbW92ZSBhbGwgR29vZ2xlIEZvbnQgbGlua3NcclxuZnVuY3Rpb24gcmVtb3ZlQWxsR29vZ2xlRm9udHNMaW5rcygpIHtcclxuXHRjb25zdCBsaW5rcyA9IGdldEFsbEhlYWRMaW5rcygpXHJcblxyXG5cdGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuXHRcdGlmIChsaW5rLmhyZWYuaW5jbHVkZXMoJ2dvb2dsZWFwaXMuY29tJykpIHtcclxuXHRcdFx0bGluay5yZW1vdmUoKVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHZhbGlkYXRlIGlucHV0IGZpZWxkc1xyXG5mdW5jdGlvbiB2YWxpZGF0ZUlucHV0RmllbGQoaW5wdXRWYWx1ZSwgbWluLCBtYXggPSAyNCkge1xyXG5cdGlmIChpc05hTihpbnB1dFZhbHVlKSkge1xyXG5cdFx0ZGlzcGxheUVycm9yKCdFbXB0eSBvciBpbnZhbGlkIHZhbHVlJylcclxuXHRcdHJldHVybiBmYWxzZVxyXG5cdH0gZWxzZSBpZiAoaW5wdXRWYWx1ZSA8IG1pbiB8fCBpbnB1dFZhbHVlID4gbWF4KSB7XHJcblx0XHRkaXNwbGF5RXJyb3IoYE51bWJlciBtdXN0IGJlIGJldHdlZW4gJHttaW59IGFuZCAke21heH1gKVxyXG5cdFx0cmV0dXJuIGZhbHNlXHJcblx0fVxyXG5cdHJldHVybiB0cnVlXHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGRpc3BsYXkgZXJyb3IgbWVzc2FnZXNcclxuZnVuY3Rpb24gZGlzcGxheUVycm9yKG1lc3NhZ2UpIHtcclxuXHQvLyBSZW1vdmUgYW55IHByZXZpb3VzIGVycm9yIG1lc3NhZ2VzXHJcblx0Y29uc3QgZXhpc3RpbmdFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoLWVycm9yLW1zZycpXHJcblx0aWYgKGV4aXN0aW5nRXJyb3IpIGV4aXN0aW5nRXJyb3IucmVtb3ZlKClcclxuXHJcblx0Ly8gQ3JlYXRlIGFuZCBpbnNlcnQgdGhlIG5ldyBlcnJvciBtZXNzYWdlXHJcblx0Y29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHRlcnJvck1lc3NhZ2UuY2xhc3NOYW1lID0gJ2dwdGgtZXJyb3ItbXNnIGZpeGVkIHJvdW5kZWQteGwgYmctcmVkLTUwMCByZWQtNTAwIHAtMyBmb250LXNlbWlib2xkIHRleHQtY2VudGVyJ1xyXG5cdGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IG1lc3NhZ2VcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSlcclxuXHJcblx0Ly8gUmVtb3ZlIHRoZSBlcnJvciBtZXNzYWdlIGFmdGVyIDQgc2Vjb25kc1xyXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0ZXJyb3JNZXNzYWdlLnJlbW92ZSgpXHJcblx0fSwgNDAwMClcclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdG8gZm9ybWF0IG51bWJlcnNcclxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKGlucHV0VmFsLCB0b0ZpeGVkTnVtID0gMikge1xyXG5cdC8vIFJlbW92ZSBsZWFkaW5nIHplcm9zIGZyb20gdGhlIGludGVnZXIgcGFydFxyXG5cdGlucHV0VmFsID0gaW5wdXRWYWwucmVwbGFjZSgvXjArKD89XFxkKlxcLikvLCAnJylcclxuXHQvLyBQYXJzZSB0aGUgaW5wdXQgYXMgYSBudW1iZXIgYW5kIHJldHVybiBpdCB3aXRoIDIgZGVjaW1hbCBwbGFjZXNcclxuXHRsZXQgZm9ybWF0dGVkID0gcGFyc2VGbG9hdChpbnB1dFZhbCkudG9GaXhlZCh0b0ZpeGVkTnVtKVxyXG5cdC8vIFJlbW92ZSB0cmFpbGluZyB6ZXJvcyBmcm9tIHRoZSBkZWNpbWFsIHBhcnRcclxuXHRmb3JtYXR0ZWQgPSBmb3JtYXR0ZWQucmVwbGFjZSgvXFwuPzArJC8sICcnKVxyXG5cdC8vIFJldHVybiB0aGUgZm9ybWF0dGVkIG51bWJlciBhcyBhIHN0cmluZ1xyXG5cdHJldHVybiBmb3JtYXR0ZWRcclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGZvbnQgc2l6ZSBjaGFuZ2VcclxuZnVuY3Rpb24gY2hhbmdlRm9udFNpemUoZSkge1xyXG5cdGNvbnN0IG5ld1ZhbCA9IGZvcm1hdE51bWJlcihlLnRhcmdldC52YWx1ZSlcclxuXHRvbkZvY3VzVmFsRm9udFNpemUgPSBmb3JtYXROdW1iZXIob25Gb2N1c1ZhbEZvbnRTaXplLCA0KVxyXG5cclxuXHRpZiAob25Gb2N1c1ZhbEZvbnRTaXplID09PSBuZXdWYWwpIHJldHVyblxyXG5cclxuXHRpZiAoIXZhbGlkYXRlSW5wdXRGaWVsZChuZXdWYWwsIGZvbnRTaXplRGF0YS5taW4sIGZvbnRTaXplRGF0YS5tYXgpKSB7XHJcblx0XHRzZXRJbnB1dEZpZWxkKCdmb250U2l6ZScsIG9uRm9jdXNWYWxGb250U2l6ZSlcclxuXHRcdGFwcGx5U2V0dGluZ3MoeyBmb250U2l6ZTogb25Gb2N1c1ZhbEZvbnRTaXplIH0pXHJcblx0XHRzYXZlU2V0dGluZ3MoeyBmb250U2l6ZTogb25Gb2N1c1ZhbEZvbnRTaXplIH0pXHJcblx0XHQvLyBzZXRJbnB1dEZpZWxkKCdmb250U2l6ZScsIERFRkFVTFRTLmZvbnRTaXplKVxyXG5cdFx0Ly8gYXBwbHlTZXR0aW5ncyh7IGZvbnRTaXplOiBERUZBVUxUUy5mb250U2l6ZSB9KVxyXG5cdFx0Ly8gc2F2ZVNldHRpbmdzKHsgZm9udFNpemU6IERFRkFVTFRTLmZvbnRTaXplIH0pXHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblxyXG5cdGFwcGx5U2V0dGluZ3MoeyBmb250U2l6ZTogbmV3VmFsIH0pXHJcblx0c2F2ZVNldHRpbmdzKHsgZm9udFNpemU6IG5ld1ZhbCB9KVxyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byBoYW5kbGUgbGluZSBoZWlnaHQgY2hhbmdlXHJcbmZ1bmN0aW9uIGNoYW5nZUxpbmVIZWlnaHQoZSkge1xyXG5cdGNvbnN0IG5ld1ZhbCA9IGZvcm1hdE51bWJlcihlLnRhcmdldC52YWx1ZSlcclxuXHRvbkZvY3VzVmFsTGluZUhlaWdodCA9IGZvcm1hdE51bWJlcihvbkZvY3VzVmFsTGluZUhlaWdodCwgNClcclxuXHJcblx0aWYgKG9uRm9jdXNWYWxMaW5lSGVpZ2h0ID09PSBuZXdWYWwpIHJldHVyblxyXG5cclxuXHRpZiAoIXZhbGlkYXRlSW5wdXRGaWVsZChuZXdWYWwsIGxpbmVIZWlnaHREYXRhLm1pbiwgbGluZUhlaWdodERhdGEubWF4KSkge1xyXG5cdFx0c2V0SW5wdXRGaWVsZCgnbGluZUhlaWdodCcsIG9uRm9jdXNWYWxMaW5lSGVpZ2h0KVxyXG5cdFx0YXBwbHlTZXR0aW5ncyh7IGxpbmVIZWlnaHQ6IG9uRm9jdXNWYWxMaW5lSGVpZ2h0IH0pXHJcblx0XHRzYXZlU2V0dGluZ3MoeyBsaW5lSGVpZ2h0OiBvbkZvY3VzVmFsTGluZUhlaWdodCB9KVxyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cclxuXHRhcHBseVNldHRpbmdzKHsgbGluZUhlaWdodDogbmV3VmFsIH0pXHJcblx0c2F2ZVNldHRpbmdzKHsgbGluZUhlaWdodDogbmV3VmFsIH0pXHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBsZXR0ZXIgc3BhY2luZyBjaGFuZ2VcclxuZnVuY3Rpb24gY2hhbmdlTGV0dGVyU3BhY2luZyhlKSB7XHJcblx0Y29uc3QgbmV3VmFsID0gZm9ybWF0TnVtYmVyKGUudGFyZ2V0LnZhbHVlKVxyXG5cdG9uRm9jdXNWYWxMZXR0ZXJTcGFjaW5nID0gZm9ybWF0TnVtYmVyKG9uRm9jdXNWYWxMZXR0ZXJTcGFjaW5nLCA0KVxyXG5cclxuXHRpZiAob25Gb2N1c1ZhbExldHRlclNwYWNpbmcgPT09IG5ld1ZhbCkgcmV0dXJuXHJcblxyXG5cdGlmICghdmFsaWRhdGVJbnB1dEZpZWxkKG5ld1ZhbCwgbGV0dGVyU3BhY2luZ0RhdGEubWluLCBsZXR0ZXJTcGFjaW5nRGF0YS5tYXgpKSB7XHJcblx0XHRzZXRJbnB1dEZpZWxkKCdsZXR0ZXJTcGFjaW5nJywgb25Gb2N1c1ZhbExldHRlclNwYWNpbmcpXHJcblx0XHRhcHBseVNldHRpbmdzKHsgbGV0dGVyU3BhY2luZzogb25Gb2N1c1ZhbExldHRlclNwYWNpbmcgfSlcclxuXHRcdHNhdmVTZXR0aW5ncyh7IGxldHRlclNwYWNpbmc6IG9uRm9jdXNWYWxMZXR0ZXJTcGFjaW5nIH0pXHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblxyXG5cdGFwcGx5U2V0dGluZ3MoeyBsZXR0ZXJTcGFjaW5nOiBuZXdWYWwgfSlcclxuXHRzYXZlU2V0dGluZ3MoeyBsZXR0ZXJTcGFjaW5nOiBuZXdWYWwgfSlcclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGZvbnQgZmFtaWx5IGNoYW5nZVxyXG5hc3luYyBmdW5jdGlvbiBjaGFuZ2VGb250RmFtaWx5KGUpIHtcclxuXHRjb25zdCBzZWxlY3RlZEZvbnQgPSBlLnRhcmdldC52YWx1ZVxyXG5cclxuXHQvLyBSZW1vdmUgYWxsIGV4aXN0aW5nIEdvb2dsZSBGb250cyBsaW5rc1xyXG5cdHJlbW92ZUFsbEdvb2dsZUZvbnRzTGlua3MoKVxyXG5cdGlmIChzZWxlY3RlZEZvbnQgIT09IERFRkFVTFRTLmZvbnRGYW1pbHkpIHtcclxuXHRcdC8vIExvYWQgdGhlIG5ld2x5IHNlbGVjdGVkIEdvb2dsZSBGb250XHJcblx0XHRsb2FkR29vZ2xlRm9udChzZWxlY3RlZEZvbnQpXHJcblx0XHRhcHBseVNldHRpbmdzKHsgZm9udEZhbWlseTogc2VsZWN0ZWRGb250IH0pXHJcblx0XHR0cnkge1xyXG5cdFx0XHRhd2FpdCBzYXZlU2V0dGluZ3MoeyBmb250RmFtaWx5OiBzZWxlY3RlZEZvbnQgfSlcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzYXZlIGZvbnQgZmFtaWx5OicsIGVycm9yKVxyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyBBcHBseSBkZWZhdWx0IGZvbnQgc2V0dGluZ3NcclxuXHRcdGFwcGx5U2V0dGluZ3MoREVGQVVMVFMpXHJcblx0XHR0cnkge1xyXG5cdFx0XHRhd2FpdCBzYXZlU2V0dGluZ3MoREVGQVVMVFMpXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gcmVzZXQgZm9udCBmYW1pbHk6JywgZXJyb3IpXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byByZXNldCBmb250cyB0byBkZWZhdWx0XHJcbmZ1bmN0aW9uIHJlc2V0Rm9udHMoKSB7XHJcblx0YXBwbHlTZXR0aW5ncyhERUZBVUxUUylcclxuXHRzYXZlU2V0dGluZ3MoREVGQVVMVFMpXHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBmb250IGxpc3RlbmVyc1xyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRm9udHNMaXN0ZW5lcnMoKSB7XHJcblx0Y29uc3Qgc2VsZWN0b3JzID0ge1xyXG5cdFx0c2VsZWN0Rm9udEZhbWlseTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdwdGgtc2V0dGluZ3MgI2ZvbnRGYW1pbHknKSxcclxuXHRcdGlucHV0Rm9udFNpemU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoLXNldHRpbmdzICNmb250U2l6ZScpLFxyXG5cdFx0aW5wdXRMaW5lSGVpZ2h0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aC1zZXR0aW5ncyAjbGluZUhlaWdodCcpLFxyXG5cdFx0aW5wdXRMZXR0ZXJTcGFjaW5nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aC1zZXR0aW5ncyAjbGV0dGVyU3BhY2luZycpLFxyXG5cdFx0YnRuUmVzZXRGb250OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aC1zZXR0aW5ncyAjcmVzZXRGb250JyksXHJcblx0fVxyXG5cclxuXHRzZWxlY3RvcnMuc2VsZWN0Rm9udEZhbWlseS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VGb250RmFtaWx5KVxyXG5cdHNlbGVjdG9ycy5pbnB1dEZvbnRTaXplLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBjaGFuZ2VGb250U2l6ZSlcclxuXHRzZWxlY3RvcnMuaW5wdXRMaW5lSGVpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBjaGFuZ2VMaW5lSGVpZ2h0KVxyXG5cdHNlbGVjdG9ycy5pbnB1dExldHRlclNwYWNpbmcuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGNoYW5nZUxldHRlclNwYWNpbmcpXHJcblxyXG5cdHNlbGVjdG9ycy5pbnB1dEZvbnRTaXplLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGUpID0+IHtcclxuXHRcdG9uRm9jdXNWYWxGb250U2l6ZSA9IGUudGFyZ2V0LnZhbHVlXHJcblx0fSlcclxuXHRzZWxlY3RvcnMuaW5wdXRMaW5lSGVpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGUpID0+IHtcclxuXHRcdG9uRm9jdXNWYWxMaW5lSGVpZ2h0ID0gZS50YXJnZXQudmFsdWVcclxuXHR9KVxyXG5cdHNlbGVjdG9ycy5pbnB1dExldHRlclNwYWNpbmcuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZSkgPT4ge1xyXG5cdFx0b25Gb2N1c1ZhbExldHRlclNwYWNpbmcgPSBlLnRhcmdldC52YWx1ZVxyXG5cdH0pXHJcblxyXG5cdHNlbGVjdG9ycy5pbnB1dEZvbnRTaXplLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuXHRcdGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0Y2hhbmdlRm9udFNpemUoZSlcclxuXHRcdFx0ZS50YXJnZXQuYmx1cigpXHJcblx0XHR9XHJcblx0fSlcclxuXHRzZWxlY3RvcnMuaW5wdXRMaW5lSGVpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuXHRcdGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0Y2hhbmdlTGluZUhlaWdodChlKVxyXG5cdFx0XHRlLnRhcmdldC5ibHVyKClcclxuXHRcdH1cclxuXHR9KVxyXG5cdHNlbGVjdG9ycy5pbnB1dExldHRlclNwYWNpbmcuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG5cdFx0aWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRjaGFuZ2VMZXR0ZXJTcGFjaW5nKGUpXHJcblx0XHRcdGUudGFyZ2V0LmJsdXIoKVxyXG5cdFx0fVxyXG5cdH0pXHJcblxyXG5cdHNlbGVjdG9ycy5idG5SZXNldEZvbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEZvbnRzKVxyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byBpbml0aWFsaXplIHRoZSBzZXR0aW5nc1xyXG5mdW5jdGlvbiBpbml0KCkge1xyXG5cdC8vIExvYWQgc2V0dGluZ3Mgb24gcGFnZSBsb2FkXHJcblx0bG9hZFNldHRpbmdzKClcclxufVxyXG5pbml0KClcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckZvbnRTbWFsbENhcmQoe1xyXG5cdG5hbWUsXHJcblx0Y2xhc3NOYW1lLFxyXG5cdGlucHV0SWQsXHJcblx0aW5wdXRUeXBlLFxyXG5cdGlucHV0VmFsdWUsXHJcblx0aW5wdXRQbGFjZWhvbGRlcixcclxuXHRtaW4gPSAxNixcclxuXHRtYXggPSAyNCxcclxuXHR1bml0ID0gJ3B4JyxcclxufSkge1xyXG5cdHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIiR7Y2xhc3NOYW1lfSBjYXJkIGNhcmQtLXNtYWxsXCIgZGF0YS1ncHRoLWVycj1cIiR7bWlufSR7dW5pdH0gJmhBcnI7ICR7bWF4fSR7dW5pdH1cIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIiR7aW5wdXRJZH1cIiBjbGFzcz1cInJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBoLWZ1bGwgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIiR7aW5wdXRUeXBlfVwiIGlkPVwiJHtpbnB1dElkfVwiIHZhbHVlPVwiJHtpbnB1dFZhbHVlfVwiIHBsYWNlaG9sZGVyPVwiJHtpbnB1dFBsYWNlaG9sZGVyfVwiIGNsYXNzPVwicm91bmRlZC1mdWxsIG91dGxpbmUtbm9uZSBib3JkZXItbm9uZSBmb250LWJvbGRcIiBtaW5sZW5ndGg9XCIke21pbn1cIiBtYXhsZW5ndGg9XCIke21heH1cIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fdW5pdG5hbWUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZF9fdW5pdCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5waXhlbHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX19uYW1lIHVwcGVyY2FzZSBmb250LXNlbWlib2xkXCI+JHtuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PmBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckZvbnRCaWdDYXJkKHtcclxuXHRuYW1lLFxyXG5cdGNsYXNzTmFtZSxcclxuXHRpbnB1dElkLFxyXG5cdGlucHV0VHlwZSxcclxuXHRpbnB1dFZhbHVlLFxyXG5cdGlucHV0UGxhY2Vob2xkZXIsXHJcblx0bWluID0gMCxcclxuXHRtYXggPSAyMCxcclxuXHR1bml0ID0gJ3B4JyxcclxufSkge1xyXG5cdHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIiR7Y2xhc3NOYW1lfSBmb250c19fZ3JvdXAgY2FyZCBjYXJkLS1iaWcgaC1mdWxsXCIgZGF0YS1ncHRoLWVycj1cIiR7bWlufSR7dW5pdH0gJmhBcnI7ICR7bWF4fSR7dW5pdH1cIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIiR7aW5wdXRJZH1cIiBjbGFzcz1cImdyaWQgZ2FwLTEgaC1mdWxsIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX3VuaXQgY2FyZF9faWNvblwiPlBYPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZF9fbmFtZSB1cHBlcmNhc2UgZm9udC1zZW1pYm9sZFwiPiR7bmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIiR7aW5wdXRUeXBlfVwiIGlkPVwiJHtpbnB1dElkfVwiIHZhbHVlPVwiJHtpbnB1dFZhbHVlfVwiIHBsYWNlaG9sZGVyPVwiJHtpbnB1dFBsYWNlaG9sZGVyfVwiIGNsYXNzPVwib3V0bGluZS1ub25lIGJvcmRlci1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItbm9uZSBmb250LWJvbGRcIiBtaW5sZW5ndGg9XCIke21pbn1cIiBtYXhsZW5ndGg9XCIke21heH1cIj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5gXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiByZW5kZXJGb250Q2FyZCh7IGRhdGEsIGNhcmRUeXBlID0gJ3NtYWxsJywgaW5jbHVkZUZpZWxkcyA9IFtdIH0pIHtcclxuLy8gXHRjb25zdCB7IG5hbWUsIGNsYXNzTmFtZSwgaW5wdXRJZCwgaW5wdXRUeXBlLCBpbnB1dFZhbHVlLCBpbnB1dFBsYWNlaG9sZGVyLCBtaW4gPSAwLCBtYXggPSAyNCwgdW5pdCA9ICdweCcgfSA9IGRhdGFcclxuXHJcbi8vIFx0bGV0IGNhcmRIdG1sXHJcblxyXG4vLyBcdGlmIChjYXJkVHlwZSA9PT0gJ3NtYWxsJykge1xyXG4vLyBcdFx0Y2FyZEh0bWwgPSBgXHJcbi8vIFx0XHRcdDxkaXYgY2xhc3M9XCIke2NsYXNzTmFtZX0gY2FyZCBjYXJkLS1zbWFsbFwiIGRhdGEtZ3B0aC1lcnI9XCIke21pbn0ke3VuaXR9ICZoQXJyOyAke21heH0ke3VuaXR9XCI+XHJcbi8vIFx0XHRcdFx0PGxhYmVsIGZvcj1cIiR7aW5wdXRJZH1cIiBjbGFzcz1cInJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBoLWZ1bGwgdy1mdWxsXCI+XHJcbi8vIFx0XHRcdFx0XHQke1xyXG4vLyBcdFx0XHRcdFx0XHRpbmNsdWRlRmllbGRzLmluY2x1ZGVzKCdpbnB1dCcpXHJcbi8vIFx0XHRcdFx0XHRcdFx0PyBgPGlucHV0IHR5cGU9XCIke2lucHV0VHlwZX1cIiBpZD1cIiR7aW5wdXRJZH1cIiB2YWx1ZT1cIiR7aW5wdXRWYWx1ZX1cIiBwbGFjZWhvbGRlcj1cIiR7aW5wdXRQbGFjZWhvbGRlcn1cIiBjbGFzcz1cInJvdW5kZWQtZnVsbCBvdXRsaW5lLW5vbmUgYm9yZGVyLW5vbmUgZm9udC1ib2xkXCIgbWlubGVuZ3RoPVwiJHttaW59XCIgbWF4bGVuZ3RoPVwiJHttYXh9XCI+YFxyXG4vLyBcdFx0XHRcdFx0XHRcdDogJydcclxuLy8gXHRcdFx0XHRcdH1cclxuXHJcbi8vIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZF9fdW5pdG5hbWUtd3JhcHBlclwiPlxyXG4vLyBcdFx0XHRcdFx0PHAgY2xhc3M9XCJjYXJkX191bml0IHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPiR7dW5pdH08L3A+XHJcbi8vIFx0XHRcdFx0XHQ8cCBjbGFzcz1cImNhcmRfX25hbWUgdXBwZXJjYXNlIGZvbnQtc2VtaWJvbGRcIj4ke25hbWV9PC9wPlxyXG4vLyBcdFx0XHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRcdFx0PC9sYWJlbD5cclxuLy8gXHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRgXHJcbi8vIFx0fSBlbHNlIGlmIChjYXJkVHlwZSA9PT0gJ2JpZycpIHtcclxuLy8gXHRcdGNhcmRIdG1sID0gYFxyXG4vLyBcdFx0XHQ8ZGl2IGNsYXNzPVwiJHtjbGFzc05hbWV9IGZvbnRzX19ncm91cCBjYXJkIGNhcmQtLWJpZyBoLWZ1bGxcIiBkYXRhLWdwdGgtZXJyPVwiJHttaW59JHt1bml0fSAmaEFycjsgJHttYXh9JHt1bml0fVwiPlxyXG4vLyBcdFx0XHRcdDxsYWJlbCBmb3I9XCIke2lucHV0SWR9XCIgY2xhc3M9XCJncmlkIGdhcC0xIGgtZnVsbCB3LWZ1bGxcIj5cclxuLy8gXHRcdFx0XHRcdDxkaXY+XHJcbi8vIFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwiY2FyZF9fdW5pdCBjYXJkX19pY29uXCI+JHt1bml0LnRvVXBwZXJDYXNlKCl9PC9wPlxyXG4vLyBcdFx0XHRcdFx0XHQ8cCBjbGFzcz1cImNhcmRfX25hbWUgdXBwZXJjYXNlIGZvbnQtc2VtaWJvbGRcIj4ke25hbWV9PC9wPlxyXG4vLyBcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG4vLyBcdFx0XHRcdFx0JHtcclxuLy8gXHRcdFx0XHRcdFx0aW5jbHVkZUZpZWxkcy5pbmNsdWRlcygnaW5wdXQnKVxyXG4vLyBcdFx0XHRcdFx0XHRcdD8gYDxpbnB1dCB0eXBlPVwiJHtpbnB1dFR5cGV9XCIgaWQ9XCIke2lucHV0SWR9XCIgdmFsdWU9XCIke2lucHV0VmFsdWV9XCIgcGxhY2Vob2xkZXI9XCIke2lucHV0UGxhY2Vob2xkZXJ9XCIgY2xhc3M9XCJvdXRsaW5lLW5vbmUgYm9yZGVyLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ub25lIGZvbnQtYm9sZFwiIG1pbmxlbmd0aD1cIiR7bWlufVwiIG1heGxlbmd0aD1cIiR7bWF4fVwiPmBcclxuLy8gXHRcdFx0XHRcdFx0XHQ6ICcnXHJcbi8vIFx0XHRcdFx0XHR9XHJcbi8vIFx0XHRcdFx0PC9sYWJlbD5cclxuLy8gXHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRgXHJcbi8vIFx0fSBlbHNlIHtcclxuLy8gXHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjYXJkIHR5cGUgc3BlY2lmaWVkLicpXHJcbi8vIFx0fVxyXG5cclxuLy8gXHRyZXR1cm4gY2FyZEh0bWxcclxuLy8gfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJ1dHRvbih7IG5hbWUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIGRpc2FibGVkID0gZmFsc2UgfSkge1xyXG5cdHJldHVybiBgXHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cIiR7aWR9XCIgY2xhc3M9XCJidG4gYmxvY2sgcmVsYXRpdmUgdGV4dC1jZW50ZXIgJHtjbGFzc05hbWV9XCIgJHtkaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJ30+XHJcbiAgICAgICAgICAgICR7Y29udGVudH1cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHRgXHJcbn1cclxuIl0sIm5hbWVzIjpbImdsb2JhbFRoaXMiLCJjaHJvbWUiLCJydW50aW1lIiwiaWQiLCJFcnJvciIsImJyb3dzZXIiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsIkNIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSIsIndyYXBBUElzIiwiZXh0ZW5zaW9uQVBJcyIsImFwaU1ldGFkYXRhIiwia2V5cyIsImxlbmd0aCIsIkRlZmF1bHRXZWFrTWFwIiwiV2Vha01hcCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlSXRlbSIsIml0ZW1zIiwidW5kZWZpbmVkIiwiZ2V0Iiwia2V5IiwiaGFzIiwic2V0IiwiaXNUaGVuYWJsZSIsInZhbHVlIiwidGhlbiIsIm1ha2VDYWxsYmFjayIsInByb21pc2UiLCJtZXRhZGF0YSIsImNhbGxiYWNrQXJncyIsImxhc3RFcnJvciIsInJlamVjdCIsIm1lc3NhZ2UiLCJzaW5nbGVDYWxsYmFja0FyZyIsInJlc29sdmUiLCJwbHVyYWxpemVBcmd1bWVudHMiLCJudW1BcmdzIiwid3JhcEFzeW5jRnVuY3Rpb24iLCJuYW1lIiwiYXN5bmNGdW5jdGlvbldyYXBwZXIiLCJ0YXJnZXQiLCJhcmdzIiwibWluQXJncyIsIm1heEFyZ3MiLCJQcm9taXNlIiwiZmFsbGJhY2tUb05vQ2FsbGJhY2siLCJjYkVycm9yIiwiY29uc29sZSIsIndhcm4iLCJub0NhbGxiYWNrIiwid3JhcE1ldGhvZCIsIm1ldGhvZCIsIndyYXBwZXIiLCJQcm94eSIsImFwcGx5IiwidGFyZ2V0TWV0aG9kIiwidGhpc09iaiIsImNhbGwiLCJoYXNPd25Qcm9wZXJ0eSIsIkZ1bmN0aW9uIiwiYmluZCIsIndyYXBPYmplY3QiLCJ3cmFwcGVycyIsImNhY2hlIiwiY3JlYXRlIiwiaGFuZGxlcnMiLCJwcm94eVRhcmdldCIsInByb3AiLCJyZWNlaXZlciIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImRlc2MiLCJSZWZsZWN0IiwiZGVsZXRlUHJvcGVydHkiLCJ3cmFwRXZlbnQiLCJ3cmFwcGVyTWFwIiwiYWRkTGlzdGVuZXIiLCJsaXN0ZW5lciIsImhhc0xpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzIiwib25SZXF1ZXN0RmluaXNoZWQiLCJyZXEiLCJ3cmFwcGVkUmVxIiwiZ2V0Q29udGVudCIsIm9uTWVzc2FnZVdyYXBwZXJzIiwib25NZXNzYWdlIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiZGlkQ2FsbFNlbmRSZXNwb25zZSIsIndyYXBwZWRTZW5kUmVzcG9uc2UiLCJzZW5kUmVzcG9uc2VQcm9taXNlIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJlcnIiLCJpc1Jlc3VsdFRoZW5hYmxlIiwic2VuZFByb21pc2VkUmVzdWx0IiwibXNnIiwiZXJyb3IiLCJfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18iLCJjYXRjaCIsIndyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrIiwicmVwbHkiLCJ3cmFwcGVkU2VuZE1lc3NhZ2UiLCJhcGlOYW1lc3BhY2VPYmoiLCJ3cmFwcGVkQ2IiLCJwdXNoIiwic2VuZE1lc3NhZ2UiLCJzdGF0aWNXcmFwcGVycyIsImRldnRvb2xzIiwibmV0d29yayIsIm9uTWVzc2FnZUV4dGVybmFsIiwidGFicyIsInNldHRpbmdNZXRhZGF0YSIsImNsZWFyIiwicHJpdmFjeSIsInNlcnZpY2VzIiwid2Vic2l0ZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sInZlcnNpb24iOjMsImZpbGUiOiJjb250ZW50LjEyNzMwNjQ3LmpzLm1hcCJ9
