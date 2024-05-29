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
} */ // export function applyFont() {
// 	const fontFamily = document.getElementById('fontFamily').value
// 	let fontSize = document.getElementById('fontSize').value
// 	console.log('applyFont()', fontFamily, fontSize)
// 	// Create the <link> in <head> which will fetch the selected font from Google Fonts
// 	createAndInjectLinkElement(fontFamily)
// 	// Apply CSS variables
// 	setCSSVariables({ fontFamily, fontSize })
// 	// Save settings to chrome.storage
// 	setFontsToStorage({ fontFamily, fontSize })
// }
parcelHelpers.export(exports, "resetFont", ()=>resetFont);
parcelHelpers.export(exports, "resetToDefaults", ()=>resetToDefaults);
parcelHelpers.export(exports, "applyFontFamily", ()=>applyFontFamily);
parcelHelpers.export(exports, "applyFontSize", ()=>applyFontSize);
parcelHelpers.export(exports, "applyLetterSpacing", ()=>applyLetterSpacing);
parcelHelpers.export(exports, "applyLineHeight", ()=>applyLineHeight);
/* ${renderFont({
	name: 'Letter Spacing',
	className: 'fonts__letterSpacing',
	inputId: 'letterSpacing',
	inputType: 'number',
	inputValue: '1',
	inputPlaceholder: '1px',
})}
${renderFont({
	name: 'Line Height',
	className: 'fonts__lineHeight',
	inputId: 'lineHeight',
	inputType: 'number',
	inputValue: '1.5',
	inputPlaceholder: '1.5',
})} */ parcelHelpers.export(exports, "addFontsEventHandlers", ()=>addFontsEventHandlers);
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
function setCSSVar({ varName, varValue }) {
    console.log("setCSSVar():", varName, varValue);
    document.documentElement.style.setProperty(varName, varValue);
}
function setCSSVariables({ fontFamily, fontSize = "16" }) {
    if (fontFamily !== defaultFontFamily) {
        document.documentElement.style.setProperty("--f-family", `${fontFamily}, ${defaultFontFamily}`);
        document.documentElement.style.setProperty("--f-size", `${(0, _fontsConverting.pxToRem)(fontSize)}`);
        return;
    }
    document.documentElement.style.setProperty("--f-family", defaultFontFamily);
    document.documentElement.style.setProperty("--f-size", `${(0, _fontsConverting.pxToRem)(fontSize)}`);
}
function setInputFields({ fontFamily, fontSize = "16" }) {
    // console.log('setInputFields():', fontFamily, fontSize)
    if (fontFamily !== "Default") {
        document.getElementById("fontFamily").value = fontFamily;
        document.getElementById("fontSize").value = fontSize;
        return;
    }
    document.getElementById("fontFamily").value = defaultFontFamily;
    document.getElementById("fontSize").value = fontSize;
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
        console.log("data: ", data);
        if (data.fontFamily) {
            setCSSVar({
                varName: "--f-family",
                varValue: data.fontFamily
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
                varValue: `${data.fontSize}px`
            });
            setInputField({
                inputSelector: "#letterSpacing",
                inputVal: data.letterSpacing
            });
        }
        if (data.lineHeight) {
            setCSSVar({
                varName: "--f-line-height",
                varValue: data.fontSize
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
async function setFontsToStorage({ fontFamily, fontSize = "16" }) {
    // Save selected font to storage
    await (0, _webextensionPolyfillDefault.default).storage.sync.set({
        fontFamily,
        fontSize
    });
}
async function setPropToStorage({ propName, propVal }) {
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
    // Remove all existing Google Font links
    googleFontLinks.forEach((link)=>{
        link.parentNode.removeChild(link);
    });
}
function resetFont() {
    // Reset CSS variables to default values
    setCSSVariables({
        fontFamily: defaultFontFamily,
        fontSize: "16"
    });
    // Reset input fields to default values
    setInputFields({
        fontFamily: "Default",
        fontSize: "16"
    });
    // Remove custom font link from the head
    removeExistingGoogleFontLinks();
    // Remove custom font settings from chrome.storage
    removeFontsFromStorage();
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
        varValue: fontFamily
    });
    // Save settings to chrome.storage
    setPropToStorage({
        propName: "fontFamily",
        propVal: fontFamily
    });
}
function applyFontSize(e) {
    console.log("applyFontSize()", e.target.value);
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
    console.log("applyLetterSpacing()", e.target.value);
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
    console.log("applyLineHeight()", e.target.value);
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
function initFonts() {
    getFontsFromStorage();
}
// Init
initFonts();
function addFontsEventHandlers() {
    document.querySelector(".gpth-settings #fontFamily").addEventListener("change", applyFontFamily);
    document.querySelector(".gpth-settings #fontSize").addEventListener("input", applyFontSize);
    document.querySelector(".gpth-settings #letterSpacing").addEventListener("input", applyLetterSpacing);
    document.querySelector(".gpth-settings #lineHeight").addEventListener("input", applyLineHeight);
    document.querySelector(".gpth-settings #resetFont").addEventListener("click", resetToDefaults);
}

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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4IpBY"}]},["anGFI","3q87D"], "3q87D", "parcelRequire2158")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBQyxFQUFFLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDdkMsTUFBTSxVQUFVLENBQUMsTUFBUSxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQzs7Ozs7QUNEL0MsZ0RBQWdCO0FBVWhCLGtEQUFnQjtBQVZULFNBQVMsV0FBVyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUU7SUFDL0YsT0FBTyxDQUFDO29CQUNXLEVBQUUsVUFBVTt3QkFDUixFQUFFLFFBQVEsK0NBQStDLEVBQUUsS0FBSyxDQUFDLEVBQ3ZGLFlBQVksYUFBYSxzQ0FBc0MsR0FDL0Q7eUJBQ3VCLEVBQUUsVUFBVSxNQUFNLEVBQUUsUUFBUSxTQUFTLEVBQUUsV0FBVyxlQUFlLEVBQUUsaUJBQWlCO2NBQy9GLENBQUM7QUFDZjtBQUVPLFNBQVMsYUFBYSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEtBQUssRUFBRTtJQUM5RSxPQUFPLENBQUM7b0JBQ1csRUFBRSxHQUFHLHdDQUF3QyxFQUFFLFVBQVUsRUFBRSxFQUFFLFdBQVcsYUFBYSxHQUFHO1lBQ2hHLEVBQUUsUUFBUTtpQkFDTCxDQUFDO0FBQ2xCIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWJyb3dzZXItaG1yL2xpYi9ydW50aW1lLWVmOTFhZjE4YjkyYzA3NDQuanMiLCJzcmMvanMvY29udGVudC5qcyIsInNyYy9qcy9hcHAvZmxvYXRpbmdCdG4uanMiLCJub2RlX21vZHVsZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2Rpc3QvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsInNyYy9qcy9hcHAvaWNvbnMuanMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInNyYy9qcy91dGlscy9oZXhUb0hTTC5qcyIsInNyYy9qcy9hcHAvY3VzdG9tRm9udHMuanMiLCJzcmMvanMvdXRpbHMvZm9udHNDb252ZXJ0aW5nLmpzIiwic3JjL2pzL2FwcC9jb21wb25lbnRzL3JlbmRlckZvbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBITVJfSE9TVCA9IFwibG9jYWxob3N0XCI7dmFyIEhNUl9QT1JUID0gMTIzNDt2YXIgSE1SX1NFQ1VSRSA9IGZhbHNlO3ZhciBITVJfRU5WX0hBU0ggPSBcImRkZjZlMDcyNGJkMzU4YmRcIjt2YXIgSE1SX1VTRV9TU0UgPSBmYWxzZTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQgPSBcIjU5Yzk4ODdkMTI3MzA2NDdcIjtcInVzZSBzdHJpY3RcIjtcblxuLyogZ2xvYmFsIEhNUl9IT1NULCBITVJfUE9SVCwgSE1SX0VOVl9IQVNILCBITVJfU0VDVVJFLCBITVJfVVNFX1NTRSwgY2hyb21lLCBicm93c2VyLCBfX3BhcmNlbF9faW1wb3J0X18sIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX18sIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSAqL1xuLyo6OlxuaW1wb3J0IHR5cGUge1xuICBITVJBc3NldCxcbiAgSE1STWVzc2FnZSxcbn0gZnJvbSAnQHBhcmNlbC9yZXBvcnRlci1kZXYtc2VydmVyL3NyYy9ITVJTZXJ2ZXIuanMnO1xuaW50ZXJmYWNlIFBhcmNlbFJlcXVpcmUge1xuICAoc3RyaW5nKTogbWl4ZWQ7XG4gIGNhY2hlOiB7fFtzdHJpbmddOiBQYXJjZWxNb2R1bGV8fTtcbiAgaG90RGF0YToge3xbc3RyaW5nXTogbWl4ZWR8fTtcbiAgTW9kdWxlOiBhbnk7XG4gIHBhcmVudDogP1BhcmNlbFJlcXVpcmU7XG4gIGlzUGFyY2VsUmVxdWlyZTogdHJ1ZTtcbiAgbW9kdWxlczoge3xbc3RyaW5nXTogW0Z1bmN0aW9uLCB7fFtzdHJpbmddOiBzdHJpbmd8fV18fTtcbiAgSE1SX0JVTkRMRV9JRDogc3RyaW5nO1xuICByb290OiBQYXJjZWxSZXF1aXJlO1xufVxuaW50ZXJmYWNlIFBhcmNlbE1vZHVsZSB7XG4gIGhvdDoge3xcbiAgICBkYXRhOiBtaXhlZCxcbiAgICBhY2NlcHQoY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgZGlzcG9zZShjYjogKG1peGVkKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBhY2NlcHQoZGVwczogQXJyYXk8c3RyaW5nPiB8IHN0cmluZywgY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gZGVjbGluZSgpOiB2b2lkLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IEFycmF5PChGdW5jdGlvbikgPT4gdm9pZD4sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IEFycmF5PChtaXhlZCkgPT4gdm9pZD4sXG4gIHx9O1xufVxuaW50ZXJmYWNlIEV4dGVuc2lvbkNvbnRleHQge1xuICBydW50aW1lOiB7fFxuICAgIHJlbG9hZCgpOiB2b2lkLFxuICAgIGdldFVSTCh1cmw6IHN0cmluZyk6IHN0cmluZztcbiAgICBnZXRNYW5pZmVzdCgpOiB7bWFuaWZlc3RfdmVyc2lvbjogbnVtYmVyLCAuLi59O1xuICB8fTtcbn1cbmRlY2xhcmUgdmFyIG1vZHVsZToge2J1bmRsZTogUGFyY2VsUmVxdWlyZSwgLi4ufTtcbmRlY2xhcmUgdmFyIEhNUl9IT1NUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfUE9SVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX0VOVl9IQVNIOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfU0VDVVJFOiBib29sZWFuO1xuZGVjbGFyZSB2YXIgSE1SX1VTRV9TU0U6IGJvb2xlYW47XG5kZWNsYXJlIHZhciBjaHJvbWU6IEV4dGVuc2lvbkNvbnRleHQ7XG5kZWNsYXJlIHZhciBicm93c2VyOiBFeHRlbnNpb25Db250ZXh0O1xuZGVjbGFyZSB2YXIgX19wYXJjZWxfX2ltcG9ydF9fOiAoc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuZGVjbGFyZSB2YXIgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXzogKHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbmRlY2xhcmUgdmFyIGdsb2JhbFRoaXM6IHR5cGVvZiBzZWxmO1xuZGVjbGFyZSB2YXIgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlOiBPYmplY3Q7XG4qL1xudmFyIE9WRVJMQVlfSUQgPSAnX19wYXJjZWxfX2Vycm9yX19vdmVybGF5X18nO1xudmFyIE9sZE1vZHVsZSA9IG1vZHVsZS5idW5kbGUuTW9kdWxlO1xuZnVuY3Rpb24gTW9kdWxlKG1vZHVsZU5hbWUpIHtcbiAgT2xkTW9kdWxlLmNhbGwodGhpcywgbW9kdWxlTmFtZSk7XG4gIHRoaXMuaG90ID0ge1xuICAgIGRhdGE6IG1vZHVsZS5idW5kbGUuaG90RGF0YVttb2R1bGVOYW1lXSxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBbXSxcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogW10sXG4gICAgYWNjZXB0OiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHRoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKGZuIHx8IGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9LFxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uIChmbikge1xuICAgICAgdGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKGZuKTtcbiAgICB9XG4gIH07XG4gIG1vZHVsZS5idW5kbGUuaG90RGF0YVttb2R1bGVOYW1lXSA9IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5idW5kbGUuTW9kdWxlID0gTW9kdWxlO1xubW9kdWxlLmJ1bmRsZS5ob3REYXRhID0ge307XG52YXIgY2hlY2tlZEFzc2V0cyAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovLCBhc3NldHNUb0Rpc3Bvc2UgLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqLywgYXNzZXRzVG9BY2NlcHQgLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqLztcblxuZnVuY3Rpb24gZ2V0SG9zdG5hbWUoKSB7XG4gIHJldHVybiBITVJfSE9TVCB8fCAobG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZignaHR0cCcpID09PSAwID8gbG9jYXRpb24uaG9zdG5hbWUgOiAnbG9jYWxob3N0Jyk7XG59XG5mdW5jdGlvbiBnZXRQb3J0KCkge1xuICByZXR1cm4gSE1SX1BPUlQgfHwgbG9jYXRpb24ucG9ydDtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxudmFyIHBhcmVudCA9IG1vZHVsZS5idW5kbGUucGFyZW50O1xuaWYgKCghcGFyZW50IHx8ICFwYXJlbnQuaXNQYXJjZWxSZXF1aXJlKSAmJiB0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICB2YXIgcG9ydCA9IGdldFBvcnQoKTtcbiAgdmFyIHByb3RvY29sID0gSE1SX1NFQ1VSRSB8fCBsb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cHM6JyAmJiAhWydsb2NhbGhvc3QnLCAnMTI3LjAuMC4xJywgJzAuMC4wLjAnXS5pbmNsdWRlcyhob3N0bmFtZSkgPyAnd3NzJyA6ICd3cyc7XG4gIHZhciB3cztcbiAgaWYgKEhNUl9VU0VfU1NFKSB7XG4gICAgd3MgPSBuZXcgRXZlbnRTb3VyY2UoJy9fX3BhcmNlbF9obXInKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgd3MgPSBuZXcgV2ViU29ja2V0KHByb3RvY29sICsgJzovLycgKyBob3N0bmFtZSArIChwb3J0ID8gJzonICsgcG9ydCA6ICcnKSArICcvJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB3cyA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIC8vIFdlYiBleHRlbnNpb24gY29udGV4dFxuICB2YXIgZXh0Q3R4ID0gdHlwZW9mIGJyb3dzZXIgPT09ICd1bmRlZmluZWQnID8gdHlwZW9mIGNocm9tZSA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogY2hyb21lIDogYnJvd3NlcjtcblxuICAvLyBTYWZhcmkgZG9lc24ndCBzdXBwb3J0IHNvdXJjZVVSTCBpbiBlcnJvciBzdGFja3MuXG4gIC8vIGV2YWwgbWF5IGFsc28gYmUgZGlzYWJsZWQgdmlhIENTUCwgc28gZG8gYSBxdWljayBjaGVjay5cbiAgdmFyIHN1cHBvcnRzU291cmNlVVJMID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgKDAsIGV2YWwpKCd0aHJvdyBuZXcgRXJyb3IoXCJ0ZXN0XCIpOyAvLyMgc291cmNlVVJMPXRlc3QuanMnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgc3VwcG9ydHNTb3VyY2VVUkwgPSBlcnIuc3RhY2suaW5jbHVkZXMoJ3Rlc3QuanMnKTtcbiAgfVxuXG4gIC8vICRGbG93Rml4TWVcbiAgd3Mub25tZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50IC8qOiB7ZGF0YTogc3RyaW5nLCAuLi59ICovKSB7XG4gICAgY2hlY2tlZEFzc2V0cyA9IHt9IC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi87XG4gICAgYXNzZXRzVG9BY2NlcHQgPSBbXTtcbiAgICBhc3NldHNUb0Rpc3Bvc2UgPSBbXTtcbiAgICB2YXIgZGF0YSAvKjogSE1STWVzc2FnZSAqLyA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgIC8vIFJlbW92ZSBlcnJvciBvdmVybGF5IGlmIHRoZXJlIGlzIG9uZVxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgICB9XG4gICAgICBsZXQgYXNzZXRzID0gZGF0YS5hc3NldHMuZmlsdGVyKGFzc2V0ID0+IGFzc2V0LmVudkhhc2ggPT09IEhNUl9FTlZfSEFTSCk7XG5cbiAgICAgIC8vIEhhbmRsZSBITVIgVXBkYXRlXG4gICAgICBsZXQgaGFuZGxlZCA9IGFzc2V0cy5ldmVyeShhc3NldCA9PiB7XG4gICAgICAgIHJldHVybiBhc3NldC50eXBlID09PSAnY3NzJyB8fCBhc3NldC50eXBlID09PSAnanMnICYmIGhtckFjY2VwdENoZWNrKG1vZHVsZS5idW5kbGUucm9vdCwgYXNzZXQuaWQsIGFzc2V0LmRlcHNCeUJ1bmRsZSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcblxuICAgICAgICAvLyBEaXNwYXRjaCBjdXN0b20gZXZlbnQgc28gb3RoZXIgcnVudGltZXMgKGUuZyBSZWFjdCBSZWZyZXNoKSBhcmUgYXdhcmUuXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQ3VzdG9tRXZlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdwYXJjZWxobXJhY2NlcHQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgaG1yQXBwbHlVcGRhdGVzKGFzc2V0cyk7XG5cbiAgICAgICAgLy8gRGlzcG9zZSBhbGwgb2xkIGFzc2V0cy5cbiAgICAgICAgbGV0IHByb2Nlc3NlZEFzc2V0cyA9IHt9IC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi87XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzVG9EaXNwb3NlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGlkID0gYXNzZXRzVG9EaXNwb3NlW2ldWzFdO1xuICAgICAgICAgIGlmICghcHJvY2Vzc2VkQXNzZXRzW2lkXSkge1xuICAgICAgICAgICAgaG1yRGlzcG9zZShhc3NldHNUb0Rpc3Bvc2VbaV1bMF0sIGlkKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJ1biBhY2NlcHQgY2FsbGJhY2tzLiBUaGlzIHdpbGwgYWxzbyByZS1leGVjdXRlIG90aGVyIGRpc3Bvc2VkIGFzc2V0cyBpbiB0b3BvbG9naWNhbCBvcmRlci5cbiAgICAgICAgcHJvY2Vzc2VkQXNzZXRzID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzVG9BY2NlcHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgaWQgPSBhc3NldHNUb0FjY2VwdFtpXVsxXTtcbiAgICAgICAgICBpZiAoIXByb2Nlc3NlZEFzc2V0c1tpZF0pIHtcbiAgICAgICAgICAgIGhtckFjY2VwdChhc3NldHNUb0FjY2VwdFtpXVswXSwgaWQpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkQXNzZXRzW2lkXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgZnVsbFJlbG9hZCgpO1xuICAgIH1cbiAgICBpZiAoZGF0YS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAvLyBMb2cgcGFyY2VsIGVycm9ycyB0byBjb25zb2xlXG4gICAgICBmb3IgKGxldCBhbnNpRGlhZ25vc3RpYyBvZiBkYXRhLmRpYWdub3N0aWNzLmFuc2kpIHtcbiAgICAgICAgbGV0IHN0YWNrID0gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lID8gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lIDogYW5zaURpYWdub3N0aWMuc3RhY2s7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ/CfmqggW3BhcmNlbF06ICcgKyBhbnNpRGlhZ25vc3RpYy5tZXNzYWdlICsgJ1xcbicgKyBzdGFjayArICdcXG5cXG4nICsgYW5zaURpYWdub3N0aWMuaGludHMuam9pbignXFxuJykpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gUmVuZGVyIHRoZSBmYW5jeSBodG1sIG92ZXJsYXlcbiAgICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgICAgIHZhciBvdmVybGF5ID0gY3JlYXRlRXJyb3JPdmVybGF5KGRhdGEuZGlhZ25vc3RpY3MuaHRtbCk7XG4gICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGlmICh3cyBpbnN0YW5jZW9mIFdlYlNvY2tldCkge1xuICAgIHdzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUubWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3cy5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS53YXJuKCdbcGFyY2VsXSDwn5qoIENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgd2FzIGxvc3QnKTtcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiByZW1vdmVFcnJvck92ZXJsYXkoKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoT1ZFUkxBWV9JRCk7XG4gIGlmIChvdmVybGF5KSB7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZygnW3BhcmNlbF0g4pyoIEVycm9yIHJlc29sdmVkJyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yT3ZlcmxheShkaWFnbm9zdGljcykge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5LmlkID0gT1ZFUkxBWV9JRDtcbiAgbGV0IGVycm9ySFRNTCA9ICc8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogYmxhY2s7IG9wYWNpdHk6IDAuODU7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHdoaXRlOyBwb3NpdGlvbjogZml4ZWQ7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IHRvcDogMHB4OyBsZWZ0OiAwcHg7IHBhZGRpbmc6IDMwcHg7IGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTsgei1pbmRleDogOTk5OTtcIj4nO1xuICBmb3IgKGxldCBkaWFnbm9zdGljIG9mIGRpYWdub3N0aWNzKSB7XG4gICAgbGV0IHN0YWNrID0gZGlhZ25vc3RpYy5mcmFtZXMubGVuZ3RoID8gZGlhZ25vc3RpYy5mcmFtZXMucmVkdWNlKChwLCBmcmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIGAke3B9XG48YSBocmVmPVwiL19fcGFyY2VsX2xhdW5jaF9lZGl0b3I/ZmlsZT0ke2VuY29kZVVSSUNvbXBvbmVudChmcmFtZS5sb2NhdGlvbil9XCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgY29sb3I6ICM4ODhcIiBvbmNsaWNrPVwiZmV0Y2godGhpcy5ocmVmKTsgcmV0dXJuIGZhbHNlXCI+JHtmcmFtZS5sb2NhdGlvbn08L2E+XG4ke2ZyYW1lLmNvZGV9YDtcbiAgICB9LCAnJykgOiBkaWFnbm9zdGljLnN0YWNrO1xuICAgIGVycm9ySFRNTCArPSBgXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luLXRvcDogMjBweDtcIj5cbiAgICAgICAgICDwn5qoICR7ZGlhZ25vc3RpYy5tZXNzYWdlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHByZT4ke3N0YWNrfTwvcHJlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICR7ZGlhZ25vc3RpYy5oaW50cy5tYXAoaGludCA9PiAnPGRpdj7wn5KhICcgKyBoaW50ICsgJzwvZGl2PicpLmpvaW4oJycpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJHtkaWFnbm9zdGljLmRvY3VtZW50YXRpb24gPyBgPGRpdj7wn5OdIDxhIHN0eWxlPVwiY29sb3I6IHZpb2xldFwiIGhyZWY9XCIke2RpYWdub3N0aWMuZG9jdW1lbnRhdGlvbn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5MZWFybiBtb3JlPC9hPjwvZGl2PmAgOiAnJ31cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbiAgZXJyb3JIVE1MICs9ICc8L2Rpdj4nO1xuICBvdmVybGF5LmlubmVySFRNTCA9IGVycm9ySFRNTDtcbiAgcmV0dXJuIG92ZXJsYXk7XG59XG5mdW5jdGlvbiBmdWxsUmVsb2FkKCkge1xuICBpZiAoJ3JlbG9hZCcgaW4gbG9jYXRpb24pIHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSBlbHNlIGlmIChleHRDdHggJiYgZXh0Q3R4LnJ1bnRpbWUgJiYgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKSB7XG4gICAgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFBhcmVudHMoYnVuZGxlLCBpZCkgLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqL3tcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBwYXJlbnRzID0gW107XG4gIHZhciBrLCBkLCBkZXA7XG4gIGZvciAoayBpbiBtb2R1bGVzKSB7XG4gICAgZm9yIChkIGluIG1vZHVsZXNba11bMV0pIHtcbiAgICAgIGRlcCA9IG1vZHVsZXNba11bMV1bZF07XG4gICAgICBpZiAoZGVwID09PSBpZCB8fCBBcnJheS5pc0FycmF5KGRlcCkgJiYgZGVwW2RlcC5sZW5ndGggLSAxXSA9PT0gaWQpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKFtidW5kbGUsIGtdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBwYXJlbnRzID0gcGFyZW50cy5jb25jYXQoZ2V0UGFyZW50cyhidW5kbGUucGFyZW50LCBpZCkpO1xuICB9XG4gIHJldHVybiBwYXJlbnRzO1xufVxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rKSB7XG4gIHZhciBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgaWYgKCFocmVmKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuZXdMaW5rID0gbGluay5jbG9uZU5vZGUoKTtcbiAgbmV3TGluay5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxpbmsucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgIH1cbiAgfTtcbiAgbmV3TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLFxuICAvLyAkRmxvd0ZpeE1lXG4gIGhyZWYuc3BsaXQoJz8nKVswXSArICc/JyArIERhdGUubm93KCkpO1xuICAvLyAkRmxvd0ZpeE1lXG4gIGxpbmsucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3TGluaywgbGluay5uZXh0U2libGluZyk7XG59XG52YXIgY3NzVGltZW91dCA9IG51bGw7XG5mdW5jdGlvbiByZWxvYWRDU1MoKSB7XG4gIGlmIChjc3NUaW1lb3V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXVxuICAgICAgdmFyIGhyZWYgLyo6IHN0cmluZyAqLyA9IGxpbmtzW2ldLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbiAgICAgIHZhciBzZXJ2ZWRGcm9tSE1SU2VydmVyID0gaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnID8gbmV3IFJlZ0V4cCgnXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTonICsgZ2V0UG9ydCgpKS50ZXN0KGhyZWYpIDogaHJlZi5pbmRleE9mKGhvc3RuYW1lICsgJzonICsgZ2V0UG9ydCgpKTtcbiAgICAgIHZhciBhYnNvbHV0ZSA9IC9eaHR0cHM/OlxcL1xcLy9pLnRlc3QoaHJlZikgJiYgaHJlZi5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikgIT09IDAgJiYgIXNlcnZlZEZyb21ITVJTZXJ2ZXI7XG4gICAgICBpZiAoIWFic29sdXRlKSB7XG4gICAgICAgIHVwZGF0ZUxpbmsobGlua3NbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjc3NUaW1lb3V0ID0gbnVsbDtcbiAgfSwgNTApO1xufVxuZnVuY3Rpb24gaG1yRG93bmxvYWQoYXNzZXQpIHtcbiAgaWYgKGFzc2V0LnR5cGUgPT09ICdqcycpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LnNyYyA9IGFzc2V0LnVybCArICc/dD0nICsgRGF0ZS5ub3coKTtcbiAgICAgIGlmIChhc3NldC5vdXRwdXRGb3JtYXQgPT09ICdlc21vZHVsZScpIHtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnbW9kdWxlJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHZhciBfZG9jdW1lbnQkaGVhZDtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHJlc29sdmUoc2NyaXB0KTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIChfZG9jdW1lbnQkaGVhZCA9IGRvY3VtZW50LmhlYWQpID09PSBudWxsIHx8IF9kb2N1bWVudCRoZWFkID09PSB2b2lkIDAgfHwgX2RvY3VtZW50JGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFdvcmtlciBzY3JpcHRzXG4gICAgICBpZiAoYXNzZXQub3V0cHV0Rm9ybWF0ID09PSAnZXNtb2R1bGUnKSB7XG4gICAgICAgIHJldHVybiBfX3BhcmNlbF9faW1wb3J0X18oYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX18oYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5hc3luYyBmdW5jdGlvbiBobXJBcHBseVVwZGF0ZXMoYXNzZXRzKSB7XG4gIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBsZXQgc2NyaXB0c1RvUmVtb3ZlO1xuICB0cnkge1xuICAgIC8vIElmIHNvdXJjZVVSTCBjb21tZW50cyBhcmVuJ3Qgc3VwcG9ydGVkIGluIGV2YWwsIHdlIG5lZWQgdG8gbG9hZFxuICAgIC8vIHRoZSB1cGRhdGUgZnJvbSB0aGUgZGV2IHNlcnZlciBvdmVyIEhUVFAgc28gdGhhdCBzdGFjayB0cmFjZXNcbiAgICAvLyBhcmUgY29ycmVjdCBpbiBlcnJvcnMvbG9ncy4gVGhpcyBpcyBtdWNoIHNsb3dlciB0aGFuIGV2YWwsIHNvXG4gICAgLy8gd2Ugb25seSBkbyBpdCBpZiBuZWVkZWQgKGN1cnJlbnRseSBqdXN0IFNhZmFyaSkuXG4gICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNzI5N1xuICAgIC8vIFRoaXMgcGF0aCBpcyBhbHNvIHRha2VuIGlmIGEgQ1NQIGRpc2FsbG93cyBldmFsLlxuICAgIGlmICghc3VwcG9ydHNTb3VyY2VVUkwpIHtcbiAgICAgIGxldCBwcm9taXNlcyA9IGFzc2V0cy5tYXAoYXNzZXQgPT4ge1xuICAgICAgICB2YXIgX2htckRvd25sb2FkO1xuICAgICAgICByZXR1cm4gKF9obXJEb3dubG9hZCA9IGhtckRvd25sb2FkKGFzc2V0KSkgPT09IG51bGwgfHwgX2htckRvd25sb2FkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaG1yRG93bmxvYWQuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAvLyBXZWIgZXh0ZW5zaW9uIGZpeFxuICAgICAgICAgIGlmIChleHRDdHggJiYgZXh0Q3R4LnJ1bnRpbWUgJiYgZXh0Q3R4LnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5tYW5pZmVzdF92ZXJzaW9uID09IDMgJiYgdHlwZW9mIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSAhPSAndW5kZWZpbmVkJyAmJiBnbG9iYWwgaW5zdGFuY2VvZiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUpIHtcbiAgICAgICAgICAgIGV4dEN0eC5ydW50aW1lLnJlbG9hZCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBzY3JpcHRzVG9SZW1vdmUgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfVxuICAgIGFzc2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChhc3NldCkge1xuICAgICAgaG1yQXBwbHkobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldCk7XG4gICAgfSk7XG4gIH0gZmluYWxseSB7XG4gICAgZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGU7XG4gICAgaWYgKHNjcmlwdHNUb1JlbW92ZSkge1xuICAgICAgc2NyaXB0c1RvUmVtb3ZlLmZvckVhY2goc2NyaXB0ID0+IHtcbiAgICAgICAgaWYgKHNjcmlwdCkge1xuICAgICAgICAgIHZhciBfZG9jdW1lbnQkaGVhZDI7XG4gICAgICAgICAgKF9kb2N1bWVudCRoZWFkMiA9IGRvY3VtZW50LmhlYWQpID09PSBudWxsIHx8IF9kb2N1bWVudCRoZWFkMiA9PT0gdm9pZCAwIHx8IF9kb2N1bWVudCRoZWFkMi5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGhtckFwcGx5KGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgYXNzZXQgLyo6ICBITVJBc3NldCAqLykge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGFzc2V0LnR5cGUgPT09ICdjc3MnKSB7XG4gICAgcmVsb2FkQ1NTKCk7XG4gIH0gZWxzZSBpZiAoYXNzZXQudHlwZSA9PT0gJ2pzJykge1xuICAgIGxldCBkZXBzID0gYXNzZXQuZGVwc0J5QnVuZGxlW2J1bmRsZS5ITVJfQlVORExFX0lEXTtcbiAgICBpZiAoZGVwcykge1xuICAgICAgaWYgKG1vZHVsZXNbYXNzZXQuaWRdKSB7XG4gICAgICAgIC8vIFJlbW92ZSBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgcmVtb3ZlZCBhbmQgd2lsbCBiZWNvbWUgb3JwaGFuZWQuXG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHNvIHRoYXQgaWYgdGhlIGFzc2V0IGlzIGFkZGVkIGJhY2sgYWdhaW4sIHRoZSBjYWNoZSBpcyBnb25lLCBhbmQgd2UgcHJldmVudCBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gICAgICAgIGxldCBvbGREZXBzID0gbW9kdWxlc1thc3NldC5pZF1bMV07XG4gICAgICAgIGZvciAobGV0IGRlcCBpbiBvbGREZXBzKSB7XG4gICAgICAgICAgaWYgKCFkZXBzW2RlcF0gfHwgZGVwc1tkZXBdICE9PSBvbGREZXBzW2RlcF0pIHtcbiAgICAgICAgICAgIGxldCBpZCA9IG9sZERlcHNbZGVwXTtcbiAgICAgICAgICAgIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICBobXJEZWxldGUobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHNTb3VyY2VVUkwpIHtcbiAgICAgICAgLy8gR2xvYmFsIGV2YWwuIFdlIHdvdWxkIHVzZSBgbmV3IEZ1bmN0aW9uYCBoZXJlIGJ1dCBicm93c2VyXG4gICAgICAgIC8vIHN1cHBvcnQgZm9yIHNvdXJjZSBtYXBzIGlzIGJldHRlciB3aXRoIGV2YWwuXG4gICAgICAgICgwLCBldmFsKShhc3NldC5vdXRwdXQpO1xuICAgICAgfVxuXG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBsZXQgZm4gPSBnbG9iYWwucGFyY2VsSG90VXBkYXRlW2Fzc2V0LmlkXTtcbiAgICAgIG1vZHVsZXNbYXNzZXQuaWRdID0gW2ZuLCBkZXBzXTtcbiAgICB9IGVsc2UgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIGhtckFwcGx5KGJ1bmRsZS5wYXJlbnQsIGFzc2V0KTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGhtckRlbGV0ZShidW5kbGUsIGlkKSB7XG4gIGxldCBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobW9kdWxlc1tpZF0pIHtcbiAgICAvLyBDb2xsZWN0IGRlcGVuZGVuY2llcyB0aGF0IHdpbGwgYmVjb21lIG9ycGhhbmVkIHdoZW4gdGhpcyBtb2R1bGUgaXMgZGVsZXRlZC5cbiAgICBsZXQgZGVwcyA9IG1vZHVsZXNbaWRdWzFdO1xuICAgIGxldCBvcnBoYW5zID0gW107XG4gICAgZm9yIChsZXQgZGVwIGluIGRlcHMpIHtcbiAgICAgIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGRlcHNbZGVwXSk7XG4gICAgICBpZiAocGFyZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgb3JwaGFucy5wdXNoKGRlcHNbZGVwXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIHRoZSBtb2R1bGUuIFRoaXMgbXVzdCBiZSBkb25lIGJlZm9yZSBkZWxldGluZyBkZXBlbmRlbmNpZXMgaW4gY2FzZSBvZiBjaXJjdWxhciBkZXBlbmRlbmNpZXMuXG4gICAgZGVsZXRlIG1vZHVsZXNbaWRdO1xuICAgIGRlbGV0ZSBidW5kbGUuY2FjaGVbaWRdO1xuXG4gICAgLy8gTm93IGRlbGV0ZSB0aGUgb3JwaGFucy5cbiAgICBvcnBoYW5zLmZvckVhY2goaWQgPT4ge1xuICAgICAgaG1yRGVsZXRlKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBobXJEZWxldGUoYnVuZGxlLnBhcmVudCwgaWQpO1xuICB9XG59XG5mdW5jdGlvbiBobXJBY2NlcHRDaGVjayhidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGlkIC8qOiBzdHJpbmcgKi8sIGRlcHNCeUJ1bmRsZSAvKjogP3sgW3N0cmluZ106IHsgW3N0cmluZ106IHN0cmluZyB9IH0qLykge1xuICBpZiAoaG1yQWNjZXB0Q2hlY2tPbmUoYnVuZGxlLCBpZCwgZGVwc0J5QnVuZGxlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gVHJhdmVyc2UgcGFyZW50cyBicmVhZHRoIGZpcnN0LiBBbGwgcG9zc2libGUgYW5jZXN0cmllcyBtdXN0IGFjY2VwdCB0aGUgSE1SIHVwZGF0ZSwgb3Igd2UnbGwgcmVsb2FkLlxuICBsZXQgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gIGxldCBhY2NlcHRlZCA9IGZhbHNlO1xuICB3aGlsZSAocGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IHYgPSBwYXJlbnRzLnNoaWZ0KCk7XG4gICAgbGV0IGEgPSBobXJBY2NlcHRDaGVja09uZSh2WzBdLCB2WzFdLCBudWxsKTtcbiAgICBpZiAoYSkge1xuICAgICAgLy8gSWYgdGhpcyBwYXJlbnQgYWNjZXB0cywgc3RvcCB0cmF2ZXJzaW5nIHVwd2FyZCwgYnV0IHN0aWxsIGNvbnNpZGVyIHNpYmxpbmdzLlxuICAgICAgYWNjZXB0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdGhlcndpc2UsIHF1ZXVlIHRoZSBwYXJlbnRzIGluIHRoZSBuZXh0IGxldmVsIHVwd2FyZC5cbiAgICAgIGxldCBwID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIHZbMV0pO1xuICAgICAgaWYgKHAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBwYXJlbnRzLCB0aGVuIHdlJ3ZlIHJlYWNoZWQgYW4gZW50cnkgd2l0aG91dCBhY2NlcHRpbmcuIFJlbG9hZC5cbiAgICAgICAgYWNjZXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwYXJlbnRzLnB1c2goLi4ucCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhY2NlcHRlZDtcbn1cbmZ1bmN0aW9uIGhtckFjY2VwdENoZWNrT25lKGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgaWQgLyo6IHN0cmluZyAqLywgZGVwc0J5QnVuZGxlIC8qOiA/eyBbc3RyaW5nXTogeyBbc3RyaW5nXTogc3RyaW5nIH0gfSovKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZGVwc0J5QnVuZGxlICYmICFkZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdKSB7XG4gICAgLy8gSWYgd2UgcmVhY2hlZCB0aGUgcm9vdCBidW5kbGUgd2l0aG91dCBmaW5kaW5nIHdoZXJlIHRoZSBhc3NldCBzaG91bGQgZ28sXG4gICAgLy8gdGhlcmUncyBub3RoaW5nIHRvIGRvLiBNYXJrIGFzIFwiYWNjZXB0ZWRcIiBzbyB3ZSBkb24ndCByZWxvYWQgdGhlIHBhZ2UuXG4gICAgaWYgKCFidW5kbGUucGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhtckFjY2VwdENoZWNrKGJ1bmRsZS5wYXJlbnQsIGlkLCBkZXBzQnlCdW5kbGUpO1xuICB9XG4gIGlmIChjaGVja2VkQXNzZXRzW2lkXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNoZWNrZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGFzc2V0c1RvRGlzcG9zZS5wdXNoKFtidW5kbGUsIGlkXSk7XG4gIGlmICghY2FjaGVkIHx8IGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGFzc2V0c1RvQWNjZXB0LnB1c2goW2J1bmRsZSwgaWRdKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuZnVuY3Rpb24gaG1yRGlzcG9zZShidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGlkIC8qOiBzdHJpbmcgKi8pIHtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZS5ob3REYXRhW2lkXSA9IHt9O1xuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QpIHtcbiAgICBjYWNoZWQuaG90LmRhdGEgPSBidW5kbGUuaG90RGF0YVtpZF07XG4gIH1cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgY2IoYnVuZGxlLmhvdERhdGFbaWRdKTtcbiAgICB9KTtcbiAgfVxuICBkZWxldGUgYnVuZGxlLmNhY2hlW2lkXTtcbn1cbmZ1bmN0aW9uIGhtckFjY2VwdChidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGlkIC8qOiBzdHJpbmcgKi8pIHtcbiAgLy8gRXhlY3V0ZSB0aGUgbW9kdWxlLlxuICBidW5kbGUoaWQpO1xuXG4gIC8vIFJ1biB0aGUgYWNjZXB0IGNhbGxiYWNrcyBpbiB0aGUgbmV3IHZlcnNpb24gb2YgdGhlIG1vZHVsZS5cbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICB2YXIgYXNzZXRzVG9BbHNvQWNjZXB0ID0gY2IoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGFzc2V0c1RvQWxzb0FjY2VwdCAmJiBhc3NldHNUb0FjY2VwdC5sZW5ndGgpIHtcbiAgICAgICAgYXNzZXRzVG9BbHNvQWNjZXB0LmZvckVhY2goZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICBobXJEaXNwb3NlKGFbMF0sIGFbMV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAkRmxvd0ZpeE1lW21ldGhvZC11bmJpbmRpbmddXG4gICAgICAgIGFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoYXNzZXRzVG9BY2NlcHQsIGFzc2V0c1RvQWxzb0FjY2VwdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgJy4vYXBwL2Zsb2F0aW5nQnRuJ1xyXG5pbXBvcnQgJy4vYXBwL2N1c3RvbUZvbnRzJ1xyXG4iLCIvLyBVc2UgYSBjcm9zcy1icm93c2VyIHN0b3JhZ2UgQVBJOlxyXG5pbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnXHJcblxyXG4vLyBpbXBvcnQgeyBpY29uX3N1biwgaWNvbl9tb29uLCBpY29uX21vb25fZnVsbCwgaWNvbl9zZXR0aW5ncywgaWNvbl9wYWludCwgaWNvbl9wYWxldHRlIH0gZnJvbSAnLi9pY29ucy5qcydcclxuaW1wb3J0IHsgaWNvbl9zdW4sIGljb25fbW9vbiwgaWNvbl9tb29uX2Z1bGwsIGljb25fc2V0dGluZ3MsIGljb25fcGFpbnQgfSBmcm9tICcuL2ljb25zLmpzJ1xyXG4vLyBpbXBvcnQgZ3B0aFRvZ2dsZUltZyBmcm9tICcuLi8uLi9pbWcvZ3B0aC10b2dnbGUtY2lyY2xlZC53ZWJwJ1xyXG5pbXBvcnQgeyBoZXhUb0hTTCB9IGZyb20gJy4uL3V0aWxzL2hleFRvSFNMJ1xyXG5cclxuaW1wb3J0IHsgZm9udEh0bWxDb2RlLCBhZGRGb250c0V2ZW50SGFuZGxlcnMgfSBmcm9tICcuL2N1c3RvbUZvbnRzJ1xyXG4vLyBjb25zb2xlLmxvZyhmb250SHRtbENvZGUpXHJcblxyXG4vLyBsZXQgaXNPcHRpb25zU2hvd24gPSBmYWxzZVxyXG5cclxuLy8gR2xvYmFsIFZhcmlhYmxlc1xyXG5sZXQgaXNPcHRpb25zU2hvd24gPSBmYWxzZVxyXG5sZXQgJGh0bWxUYWdcclxubGV0ICRmbG9hdGluZ0J0blxyXG5sZXQgJGZsb2F0aW5nT3B0aW9uc1xyXG5sZXQgJGZsb2F0aW5nQnRuc0NvbnRhaW5lclxyXG5cclxubGV0ICRzZXR0aW5ncyAvLyBAIEFjY2VudCBUaGVtZVxyXG5sZXQgJHJlc2V0QWxsQnRuXHJcbi8vIGxldCBpc1NldHRpbmdzT3BlbiA9IGZhbHNlXHJcbmxldCBzdHlsZUVsZW1lbnQgPSBudWxsIC8vIERlY2xhcmUgdGhlIHN0eWxlRWxlbWVudCB2YXJpYWJsZVxyXG5cclxubGV0IGRlZmF1bHRDb2xvckxpZ2h0ID0gJyM2YjRkZmUnXHJcbmxldCBkZWZhdWx0Q29sb3JEYXJrID0gJyNjYTkzZmInXHJcbi8vIGxldCBpc0Rpc2FibGVkUmVzZXRBbGwgPSB0cnVlXHJcblxyXG5jb25zdCByZW5kZXJDb2xvcnNUYWIgPSBgXHJcblx0PHNlY3Rpb24+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29sb3JwaWNrZXItY29udGFpbmVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb2xvcnBpY2tlclwiPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiY29sb3JcIiBpZD1cImFjY2VudExpZ2h0XCIgdmFsdWU9XCIjNmI0ZGZlXCIgLz5cclxuXHRcdFx0XHQ8bGFiZWwgZm9yPVwiYWNjZW50TGlnaHRcIj5BY2NlbnQgPHNwYW4+TGlnaHQ8L3NwYW4+PC9sYWJlbD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb2xvcnBpY2tlclwiPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiY29sb3JcIiBpZD1cImFjY2VudERhcmtcIiB2YWx1ZT1cIiNjYTkzZmJcIiAvPlxyXG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJhY2NlbnREYXJrXCI+QWNjZW50IDxzcGFuPkRhcms8L3NwYW4+PC9sYWJlbD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxmb290ZXIgY2xhc3M9XCJncmlkIG0tNVwiPlxyXG5cdFx0XHQ8YnV0dG9uIGlkPVwicmVzZXRBbGxTZXR0aW5nc1wiIGNsYXNzPVwiYnRuIGJsb2NrIHJlbGF0aXZlIGJ0bi1wcmltYXJ5IHRleHQtY2VudGVyXCIgYXM9XCJidXR0b25cIj5SZXNldCBBY2NlbnRzPC9idXR0b24+XHJcblx0XHQ8L2Zvb3Rlcj5cclxuXHQ8L3NlY3Rpb24+XHJcbmBcclxuXHJcbi8vIEluaXRpYWxpemF0aW9uXHJcbmluaXQoKVxyXG5cclxuZnVuY3Rpb24gdGFic1N3aXRjaGluZygpIHtcclxuXHRjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdwdGgtc2V0dGluZ3MgLnRhYi1idXR0b24nKVxyXG5cdGNvbnN0IHBhbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdwdGgtc2V0dGluZ3MgLnRhYi1wYW5lJylcclxuXHJcblx0dGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XHJcblx0XHR0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWItYnV0dG9uLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWItcGFuZTpub3QoLmhpZGRlbiknKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG5cclxuXHRcdFx0dGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblx0XHRcdHBhbmVzW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxyXG5cdFx0fSlcclxuXHR9KVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbml0VGhlbWUoKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHsgZ3B0aGVtZTogc3RvcmVkVGhlbWUgfSA9IGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgnZ3B0aGVtZScpXHJcblx0XHRjb25zdCB0aGVtZSA9IHN0b3JlZFRoZW1lIHx8ICh3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCknKS5tYXRjaGVzID8gJ2xpZ2h0JyA6ICdkYXJrJylcclxuXHRcdGFwcGx5VGhlbWUodGhlbWUpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluaXRpYWxpemluZyB0aGVtZTonLCBlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldFRoZW1lKHRoZW1lKSB7XHJcblx0dHJ5IHtcclxuXHRcdGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IGdwdGhlbWU6IHRoZW1lIH0pXHJcblx0XHRhcHBseVRoZW1lKHRoZW1lKVxyXG5cdFx0dG9nZ2xlT3B0aW9ucygpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNldHRpbmcgdGhlbWU6JywgZXJyb3IpXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBbmRBcHBlbmRTVkdTdGlja3lCdG4oKSB7XHJcblx0Y29uc3QgZ3B0aEZsb2F0aW5nQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHRncHRoRmxvYXRpbmdCdG4uY2xhc3NOYW1lID0gJ2dwdGhfX2Zsb2F0aW5nJ1xyXG5cclxuXHQvLyA8aW1nIHNyYz1cIiR7Z3B0aFRvZ2dsZUltZ31cIiBhbHQ9XCJncHRoLXRvZ2dsZVwiLz5cclxuXHRsZXQgaHRtbENvZGUgPSBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ3B0aF9fZmxvYXRpbmctaWNvblwiPlxyXG5cdFx0XHQke2ljb25fcGFpbnR9XHJcblx0XHQ8L2Rpdj5cclxuXHRcdFxyXG5cdFx0PGRpdiBjbGFzcz1cImdwdGhfX29wdGlvbnNcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImdwdGhfX29wdGlvbnMtYnRuc1wiPlxyXG5cdFx0XHRcdDxidXR0b24gaWQ9XCJsaWdodFwiIGRhdGEtZ3B0aC10aGVtZT1cImxpZ2h0XCI+JHtpY29uX3N1bn08L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIGlkPVwiZGFya1wiIGRhdGEtZ3B0aC10aGVtZT1cImRhcmtcIj4ke2ljb25fbW9vbn08L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIGlkPVwib2xlZFwiIGRhdGEtZ3B0aC10aGVtZT1cImJsYWNrXCI+JHtpY29uX21vb25fZnVsbH08L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIGlkPVwiZ3B0aC1vcGVuLXNldHRpbmdzXCIgZGF0YS1ncHRoLXRoZW1lPVwibW9yZVwiPiR7aWNvbl9zZXR0aW5nc308L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcblxyXG5cdC8vIGdwdGhGbG9hdGluZ0J0bi5pbm5lckhUTUwgPSBodG1sQ29kZVxyXG5cdGdwdGhGbG9hdGluZ0J0bi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWxDb2RlKVxyXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ3B0aEZsb2F0aW5nQnRuKVxyXG5cclxuXHQvLyBDYWNoZSBET00gZWxlbWVudHMgYWZ0ZXIgYXBwZW5kaW5nXHJcblx0JGh0bWxUYWcgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcclxuXHQkZmxvYXRpbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aF9fZmxvYXRpbmcnKVxyXG5cdCRmbG9hdGluZ09wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aF9fb3B0aW9ucycpXHJcblx0JGZsb2F0aW5nQnRuc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoX19vcHRpb25zLWJ0bnMnKVxyXG5cclxuXHQvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIGFmdGVyIERPTSBlbGVtZW50cyBhcmUgYXBwZW5kZWRcclxuXHQkZmxvYXRpbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVPcHRpb25zKVxyXG5cdCRmbG9hdGluZ0J0bnNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDaGFuZ2VUaGVtZSlcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlVGhlbWUoZSkge1xyXG5cdGNvbnN0IHRoZW1lQnV0dG9uID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJylcclxuXHRpZiAoIXRoZW1lQnV0dG9uKSByZXR1cm5cclxuXHJcblx0Y29uc3QgdGhlbWUgPSB0aGVtZUJ1dHRvbi5pZFxyXG5cclxuXHRpZiAodGhlbWUgIT09ICdncHRoLW9wZW4tc2V0dGluZ3MnKSB7XHJcblx0XHRzZXRUaGVtZSh0aGVtZSlcclxuXHRcdHJldHVyblxyXG5cdH1cclxuXHJcblx0LyogSWYgY2xpY2tlZCBvbiBcIuKame+4jyBPcGVuIFNldHRpbmdzXCIgKi9cclxuXHRpZiAodGhlbWUgPT09ICdncHRoLW9wZW4tc2V0dGluZ3MnKSB7XHJcblx0XHRvcGVuU2V0dGluZ3MoKVxyXG5cdFx0Ly8gdG9nZ2xlT3B0aW9ucygpXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRoZW1lKHRoZW1lKSB7XHJcblx0JGh0bWxUYWcuZGF0YXNldC5ncHRoZW1lID0gdGhlbWVcclxuXHQkaHRtbFRhZy5zdHlsZS5jb2xvclNjaGVtZSA9IHRoZW1lID09PSAnb2xlZCcgPyAnZGFyaycgOiB0aGVtZVxyXG5cdCRodG1sVGFnLmNsYXNzTmFtZSA9IHRoZW1lID09PSAnb2xlZCcgPyAnZGFyaycgOiB0aGVtZVxyXG5cdGlmICh0aGVtZSAhPT0gJ29sZWQnKSAkaHRtbFRhZy5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZ3B0aGVtZScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU9wdGlvbnMoKSB7XHJcblx0aXNPcHRpb25zU2hvd24gPSAhaXNPcHRpb25zU2hvd25cclxuXHQkZmxvYXRpbmdPcHRpb25zLmNsYXNzTGlzdC50b2dnbGUoJ2dwdGhfX29wdGlvbnMtLXNob3duJywgaXNPcHRpb25zU2hvd24pXHJcblxyXG5cdGlmIChpc09wdGlvbnNTaG93bikgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVPcHRpb25zKVxyXG5cdGVsc2UgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVPcHRpb25zKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlT3B0aW9ucyhlKSB7XHJcblx0Y29uc3QgaXNDbGlja0luc2lkZUZsb2F0aW5nQnRuID0gJGZsb2F0aW5nQnRuLmNvbnRhaW5zKGUudGFyZ2V0KVxyXG5cdGNvbnN0IGlzQ2xpY2tJbnNpZGVGbG9hdGluZ09wdGlvbnMgPSAkZmxvYXRpbmdPcHRpb25zLmNvbnRhaW5zKGUudGFyZ2V0KVxyXG5cclxuXHRpZiAoIWlzQ2xpY2tJbnNpZGVGbG9hdGluZ0J0biAmJiAhaXNDbGlja0luc2lkZUZsb2F0aW5nT3B0aW9ucykgdG9nZ2xlT3B0aW9ucygpXHJcblxyXG5cdC8vIGlmICghJGZsb2F0aW5nQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhJGZsb2F0aW5nVGhlbWVPcHRpb25zLmNvbnRhaW5zKGUudGFyZ2V0KSkgdG9nZ2xlT3B0aW9ucygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlY3JlaXNlRmxvYXRpbmdCdG5TaXplKCkge1xyXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0JGZsb2F0aW5nQnRuLmNsYXNzTGlzdC5hZGQoJ2dwdGhfX2Zsb2F0aW5nLS1zbWFsbCcpXHJcblx0fSwgMzAwMClcclxufVxyXG5cclxuLyogX19fX19fX19fX19fX18gVEhFTUUgQ1VTVE9NSVpBVElPTiAtIEFDQ0VOVCBUSEVNRSBfX19fX19fX19fX19fXyAqL1xyXG5mdW5jdGlvbiByZW5kZXJTZXR0aW5ncygpIHtcclxuXHRjb25zdCBncHRoU2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdGdwdGhTZXR0aW5ncy5jbGFzc05hbWUgPSBgZ3B0aC1zZXR0aW5ncyBmaXhlZCBmbGV4IGZsZXgtY29sYFxyXG5cclxuXHRsZXQgaHRtbENvZGUgPSBgXHJcblx0XHQ8aGVhZGVyIGNsYXNzPVwibWItNVwiPlxyXG5cdFx0XHQ8aDIgY2xhc3M9XCJtdC01IHRleHQtY2VudGVyIGZvbnQtbWVkaXVtXCI+PHNwYW4gY2xhc3M9XCJmb250LXNlbWlib2xkXCI+R1BUaGVtZXM8L3NwYW4+IEN1c3RvbWl6YXRpb248L2gyPlxyXG5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cInRleHQtdG9rZW4tdGV4dC10ZXJ0aWFyeSBob3Zlcjp0ZXh0LXRva2VuLXRleHQtcHJpbWFyeSBhYnNvbHV0ZSB0b3AtNCByaWdodC00XCIgaWQ9XCJncHRoLXNldHRpbmdzLWNsb3NlXCI+XHJcblx0XHRcdFx0PHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk02LjM0MzE1IDYuMzQzMzhMMTcuNjU2OSAxNy42NTcxTTE3LjY1NjkgNi4zNDMzOEw2LjM0MzE1IDE3LjY1NzFcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPjwvc3ZnPlxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdDwvaGVhZGVyPlxyXG5cclxuXHRcdDxtYWluPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGFic1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YWItYnV0dG9ucyBmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgcC0xIG1iLTYgZm9udC1zZW1pYm9sZFwiPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInRhYi1idXR0b24gcHktMiBweC00IGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGwgYWN0aXZlXCI+XHJcblx0XHRcdFx0XHRcdENvbG9yXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJ0YWItYnV0dG9uIHB5LTIgcHgtNCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1jZW50ZXIgcm91bmRlZC1mdWxsXCI+XHJcblx0XHRcdFx0XHRcdEZvbnRcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInRhYi1idXR0b24gcHktMiBweC00IGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGxcIj5cclxuXHRcdFx0XHRcdFx0QXNzZXRzXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnQgcC00XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGFiLXBhbmUgYWN0aXZlXCIgaWQ9XCJ0YWItY29sb3JzXCI+XHJcblx0XHRcdFx0XHRcdCR7cmVuZGVyQ29sb3JzVGFifVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRhYi1wYW5lIGhpZGRlblwiIGlkPVwidGFiLWZvbnRzXCI+XHJcblx0XHRcdFx0XHRcdCR7Zm9udEh0bWxDb2RlfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRhYi1wYW5lIGhpZGRlblwiIGlkPVwidGFiLWFzc2V0c1wiPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtdG9rZW4tdGV4dC10ZXJ0aWFyeSB0ZXh0LXNtIG1iLTIgZm9udC13ZWlnaHQtMjAwXCI+b29vcHMsIHN1Y2ggZW1wdHk8L3A+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC10b2tlbi10ZXh0LXNlY29uZGFyeSB0ZXh0LW1kIGZvbnQtc2VtaWJvbGRcIj5Db21pbmcgU29vbjwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbWFpbj5cclxuXHRgXHJcblxyXG5cdGdwdGhTZXR0aW5ncy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWxDb2RlKVxyXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ3B0aFNldHRpbmdzKVxyXG5cclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3B0aC1zZXR0aW5ncy1jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VTZXR0aW5ncylcclxuXHJcblx0JHNldHRpbmdzID0gZ3B0aFNldHRpbmdzXHJcblxyXG5cdHRhYnNTd2l0Y2hpbmcoKVxyXG5cclxuXHQkcmVzZXRBbGxCdG4gPSAkc2V0dGluZ3MucXVlcnlTZWxlY3RvcignI3Jlc2V0QWxsU2V0dGluZ3MnKVxyXG5cdCRyZXNldEFsbEJ0bi5kaXNhYmxlZCA9IHRydWVcclxuXHJcblx0JHNldHRpbmdzLnF1ZXJ5U2VsZWN0b3IoJyNyZXNldEFsbFNldHRpbmdzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEFsbFNldHRpbmdzKVxyXG5cclxuXHRhZGRGb250c0V2ZW50SGFuZGxlcnMoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuU2V0dGluZ3MoKSB7XHJcblx0JHNldHRpbmdzLmNsYXNzTGlzdC5hZGQoJ2dwdGgtc2V0dGluZ3MtLW9wZW4nKVxyXG5cdCRzZXR0aW5ncy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlU2V0dGluZ3NPcGVuZWQpXHJcblx0JHJlc2V0QWxsQnRuLmRpc2FibGVkID0gZmFsc2VcclxuXHJcblx0Ly8gaXNPcHRpb25zU2hvd24gPSBmYWxzZVxyXG5cdC8vIHRvZ2dsZU9wdGlvbnMoKVxyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZVNldHRpbmdzT3BlbmVkKCkge1xyXG5cdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGVTZXR0aW5ncylcclxuXHQkc2V0dGluZ3MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVNldHRpbmdzT3BlbmVkKVxyXG59XHJcbmZ1bmN0aW9uIGNsb3NlU2V0dGluZ3MoKSB7XHJcblx0JHNldHRpbmdzLmNsYXNzTGlzdC5yZW1vdmUoJ2dwdGgtc2V0dGluZ3MtLW9wZW4nKVxyXG5cdGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGVTZXR0aW5ncylcclxuXHQkcmVzZXRBbGxCdG4uZGlzYWJsZWQgPSB0cnVlXHJcbn1cclxuZnVuY3Rpb24gaGFuZGxlQ2xpY2tPdXRzaWRlU2V0dGluZ3MoZSkge1xyXG5cdGxldCBpc09wZW5TZXR0aW5nc0J1dHRvbiA9IGUudGFyZ2V0LmlkID09PSAnZ3B0aC1zZXR0aW5ncy1vcGVuJ1xyXG5cclxuXHRpZiAoISRzZXR0aW5ncy5jb250YWlucyhlLnRhcmdldCkgJiYgIWlzT3BlblNldHRpbmdzQnV0dG9uKSBjbG9zZVNldHRpbmdzKClcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ29sb3JJbnB1dCgpIHtcclxuXHQkc2V0dGluZ3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZS50YXJnZXQpXHJcblxyXG5cdFx0aWYgKGUudGFyZ2V0LmlkID09PSAnYWNjZW50TGlnaHQnKSB7XHJcblx0XHRcdGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuXHRcdFx0XHR1cGRhdGVDU1NWYXJzKGUudGFyZ2V0LnZhbHVlLCBudWxsKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQvLyBTYXZlIGxpZ2h0IGFjY2VudCBjb2xvciB0byBzdG9yYWdlXHJcblx0XHRcdGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcblx0XHRcdFx0c2V0QWNjZW50VG9TdG9yYWdlKCdhY2NlbnRfbGlnaHQnLCBlLnRhcmdldC52YWx1ZSlcclxuXHRcdFx0XHRjbG9zZVNldHRpbmdzKClcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZS50YXJnZXQuaWQgPT09ICdhY2NlbnREYXJrJykge1xyXG5cdFx0XHRlLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcblx0XHRcdFx0dXBkYXRlQ1NTVmFycyhudWxsLCBlLnRhcmdldC52YWx1ZSlcclxuXHRcdFx0fSlcclxuXHRcdFx0Ly8gU2F2ZSBkYXJrIGFjY2VudCBjb2xvciB0byBzdG9yYWdlXHJcblx0XHRcdGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcblx0XHRcdFx0c2V0QWNjZW50VG9TdG9yYWdlKCdhY2NlbnRfZGFyaycsIGUudGFyZ2V0LnZhbHVlKVxyXG5cdFx0XHRcdGNsb3NlU2V0dGluZ3MoKVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGFuZCBpbmplY3QgdGhlIDxzdHlsZT4gZWxlbWVudFxyXG5mdW5jdGlvbiBpbmplY3RTdHlsZUVsZW1lbnQoKSB7XHJcblx0c3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xyXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDU1NWYXJzKGxpZ2h0Q29sb3IsIGRhcmtDb2xvcikge1xyXG5cdGlmICghc3R5bGVFbGVtZW50KSBpbmplY3RTdHlsZUVsZW1lbnQoKVxyXG5cclxuXHRjb25zdCBsaWdodEhTTCA9IGxpZ2h0Q29sb3JcclxuXHRcdD8gaGV4VG9IU0wobGlnaHRDb2xvcilcclxuXHRcdDogaGV4VG9IU0woJHNldHRpbmdzLnF1ZXJ5U2VsZWN0b3IoJy5jb2xvcnBpY2tlciAjYWNjZW50TGlnaHQnKS52YWx1ZSlcclxuXHRjb25zdCBkYXJrSFNMID0gZGFya0NvbG9yXHJcblx0XHQ/IGhleFRvSFNMKGRhcmtDb2xvcilcclxuXHRcdDogaGV4VG9IU0woJHNldHRpbmdzLnF1ZXJ5U2VsZWN0b3IoJy5jb2xvcnBpY2tlciAjYWNjZW50RGFyaycpLnZhbHVlKVxyXG5cclxuXHRsZXQgY3NzVmFycyA9ICcnXHJcblxyXG5cdGNzc1ZhcnMgPSBgXHJcbiAgICAgICAgaHRtbC5saWdodCB7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LWg6ICR7bGlnaHRIU0xbMF19ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LXM6ICR7bGlnaHRIU0xbMV19JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWFjY2VudC1sOiAke2xpZ2h0SFNMWzJdfSUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbC5kYXJrIHtcclxuICAgICAgICAgICAgLS1hY2NlbnQtaDogJHtkYXJrSFNMWzBdfSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWFjY2VudC1zOiAke2RhcmtIU0xbMV19JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWFjY2VudC1sOiAke2RhcmtIU0xbMl19JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIGBcclxuXHJcblx0Ly8gY29uc29sZS5sb2coY3NzVmFycylcclxuXHJcblx0c3R5bGVFbGVtZW50LnRleHRDb250ZW50ID0gY3NzVmFyc1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXRBY2NlbnRUb1N0b3JhZ2Uoc3RvcmFnZUNvbG9yUHJvcGVydHksIGFjY2VudFZhbHVlKSB7XHJcblx0dHJ5IHtcclxuXHRcdGlmIChzdG9yYWdlQ29sb3JQcm9wZXJ0eSA9PT0gJ2FjY2VudF9saWdodCcpIHtcclxuXHRcdFx0YXdhaXQgYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHsgYWNjZW50X2xpZ2h0OiBhY2NlbnRWYWx1ZSB9KVxyXG5cdFx0fVxyXG5cdFx0aWYgKHN0b3JhZ2VDb2xvclByb3BlcnR5ID09PSAnYWNjZW50X2RhcmsnKSB7XHJcblx0XHRcdGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IGFjY2VudF9kYXJrOiBhY2NlbnRWYWx1ZSB9KVxyXG5cdFx0fVxyXG5cdFx0Ly8gY29uc29sZS5sb2coeyBzdG9yYWdlQ29sb3JQcm9wZXJ0eSwgYWNjZW50VmFsdWUgfSlcclxuXHR9IGNhdGNoIChlKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBzZXR0aW5nIHRoZSBhY2NlbnQgY29sb3JzIGluIHN0b3JhZ2U6JywgZSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvbG9ySW5wdXRWYWx1ZSh7IGFjY2VudExpZ2h0LCBhY2NlbnREYXJrIH0pIHtcclxuXHQvLyBjb25zb2xlLmxvZyh7IGFjY2VudExpZ2h0LCBhY2NlbnREYXJrIH0pXHJcblx0JHNldHRpbmdzLnF1ZXJ5U2VsZWN0b3IoJy5jb2xvcnBpY2tlciAjYWNjZW50TGlnaHQnKS52YWx1ZSA9IGFjY2VudExpZ2h0XHJcblx0JHNldHRpbmdzLnF1ZXJ5U2VsZWN0b3IoJy5jb2xvcnBpY2tlciAjYWNjZW50RGFyaycpLnZhbHVlID0gYWNjZW50RGFya1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVBY2NlbnRzU3RvcmFnZSgpIHtcclxuXHR0cnkge1xyXG5cdFx0Ly8gR2V0IGFjY2VudCBjb2xvcnMgZnJvbSBzdG9yYWdlXHJcblx0XHRjb25zdCB7IGFjY2VudF9saWdodDogYWNjZW50TGlnaHQsIGFjY2VudF9kYXJrOiBhY2NlbnREYXJrIH0gPSBhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoW1xyXG5cdFx0XHQnYWNjZW50X2xpZ2h0JyxcclxuXHRcdFx0J2FjY2VudF9kYXJrJyxcclxuXHRcdF0pXHJcblx0XHQvLyBjb25zb2xlLmxvZygnUmV0cmlldmVkIGFjY2VudCBjb2xvcnMgZnJvbSBzdG9yYWdlOicsIGFjY2VudExpZ2h0LCBhY2NlbnREYXJrKVxyXG5cclxuXHRcdC8vIFNldCBkZWZhdWx0IGFjY2VudCBjb2xvcnMgaWYgbm90IGFscmVhZHkgc2V0XHJcblx0XHRpZiAoIWFjY2VudExpZ2h0IHx8ICFhY2NlbnREYXJrKSB7XHJcblx0XHRcdGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7XHJcblx0XHRcdFx0YWNjZW50X2xpZ2h0OiBkZWZhdWx0Q29sb3JMaWdodCxcclxuXHRcdFx0XHRhY2NlbnRfZGFyazogZGVmYXVsdENvbG9yRGFyayxcclxuXHRcdFx0fSlcclxuXHRcdFx0Y29uc29sZS5sb2coJ0RlZmF1bHQgYWNjZW50IGNvbG9ycyBzZXQgaW4gc3RvcmFnZScpXHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgYWNjZW50Q29sb3JMaWdodCA9IGFjY2VudExpZ2h0IHx8IGRlZmF1bHRDb2xvckxpZ2h0XHJcblx0XHRjb25zdCBhY2NlbnRDb2xvckRhcmsgPSBhY2NlbnREYXJrIHx8IGRlZmF1bHRDb2xvckRhcmtcclxuXHJcblx0XHQvLyBVcGRhdGUgQ1NTIHdpdGggcmV0cmlldmVkIG9yIGRlZmF1bHQgYWNjZW50IGNvbG9yc1xyXG5cdFx0dXBkYXRlQ1NTVmFycyhhY2NlbnRDb2xvckxpZ2h0LCBhY2NlbnRDb2xvckRhcmspXHJcblxyXG5cdFx0c2V0Q29sb3JJbnB1dFZhbHVlKHsgYWNjZW50TGlnaHQ6IGFjY2VudENvbG9yTGlnaHQsIGFjY2VudERhcms6IGFjY2VudENvbG9yRGFyayB9KVxyXG5cclxuXHRcdC8vIGNvbnNvbGUubG9nKCdBY2NlbnQgY29sb3JzIGFwcGxpZWQgdG8gQ1NTOicsIGFjY2VudENvbG9yTGlnaHQsIGFjY2VudENvbG9yRGFyaylcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignRXJyb3IgaGFuZGxpbmcgYWNjZW50IGNvbG9yczonLCBlcnJvcilcclxuXHR9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gcmVzZXRBbGxTZXR0aW5ncygpIHtcclxuXHRpZiAoIXN0eWxlRWxlbWVudCkgaW5qZWN0U3R5bGVFbGVtZW50KClcclxuXHJcblx0Ly8gbGV0IGFjY2VudExpZ2h0ID0gWzI1MCwgOTksIDY1XVxyXG5cdC8vIGxldCBhY2NlbnREYXJrID0gWzI3MiwgOTMsIDc4XVxyXG5cdGxldCBhY2NlbnRMaWdodCA9IGhleFRvSFNMKGRlZmF1bHRDb2xvckxpZ2h0KVxyXG5cdGxldCBhY2NlbnREYXJrID0gaGV4VG9IU0woZGVmYXVsdENvbG9yRGFyaylcclxuXHJcblx0Y29uc3QgY3NzVmFycyA9IGBcclxuICAgICAgICBodG1sLmxpZ2h0IHtcclxuICAgICAgICAgICAgLS1hY2NlbnQtaDogJHthY2NlbnRMaWdodFswXX0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1hY2NlbnQtczogJHthY2NlbnRMaWdodFsxXX0lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LWw6ICR7YWNjZW50TGlnaHRbMl19JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sLmRhcmsge1xyXG4gICAgICAgICAgICAtLWFjY2VudC1oOiAke2FjY2VudERhcmtbMF19ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LXM6ICR7YWNjZW50RGFya1sxXX0lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LWw6ICR7YWNjZW50RGFya1syXX0lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgYFxyXG5cclxuXHRzdHlsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBjc3NWYXJzXHJcblxyXG5cdHNldENvbG9ySW5wdXRWYWx1ZSh7IGFjY2VudExpZ2h0OiBkZWZhdWx0Q29sb3JMaWdodCwgYWNjZW50RGFyazogZGVmYXVsdENvbG9yRGFyayB9KVxyXG5cclxuXHRhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoe1xyXG5cdFx0YWNjZW50X2xpZ2h0OiBkZWZhdWx0Q29sb3JMaWdodCxcclxuXHRcdGFjY2VudF9kYXJrOiBkZWZhdWx0Q29sb3JEYXJrLFxyXG5cdH0pXHJcbn1cclxuXHJcbi8qID09PSBJbml0aWFsaXphdGlvbiAqL1xyXG5mdW5jdGlvbiBpbml0KCkge1xyXG5cdGluaXRUaGVtZSgpXHJcblx0Y3JlYXRlQW5kQXBwZW5kU1ZHU3RpY2t5QnRuKClcclxuXHRyZW5kZXJTZXR0aW5ncygpXHJcblx0ZGVjcmVpc2VGbG9hdGluZ0J0blNpemUoKVxyXG5cdGhhbmRsZUFjY2VudHNTdG9yYWdlKClcclxuXHRoYW5kbGVDb2xvcklucHV0KClcclxufVxyXG5cclxuLyogPyBPbmx5IGZvciBkZWJ1Z2dpbmcgLSByZW1vdmUgbGF0ZXIhICovXHJcbi8qIGRlYnVnR2V0QWxsU3RvcmFnZUl0ZW1zKClcclxuLy8gR2V0IGFsbCB0aGUgaXRlbXMgaW4gdGhlIHN0b3JhZ2VcclxuZnVuY3Rpb24gZGVidWdHZXRBbGxTdG9yYWdlSXRlbXMoKSB7XHJcblx0YnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KG51bGwsIGZ1bmN0aW9uIChpdGVtcykge1xyXG5cdFx0Y29uc29sZS5sb2coaXRlbXMpIC8vIFRoaXMgd2lsbCBsb2cgYWxsIHRoZSBpdGVtcyBzdG9yZWQgaW4gc3luYyBzdG9yYWdlXHJcblx0fSlcclxufVxyXG4qL1xyXG4iLCIvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC4xMC4wIC0gRnJpIEF1ZyAxMiAyMDIyIDE5OjQyOjQ0ICovXG4vKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG4vKiB2aW06IHNldCBzdHM9MiBzdz0yIGV0IHR3PTgwOiAqL1xuLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblwidXNlIHN0cmljdFwiO1xuXG5pZiAoIWdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lPy5pZCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG59XG5cbmlmICh0eXBlb2YgZ2xvYmFsVGhpcy5icm93c2VyID09PSBcInVuZGVmaW5lZFwiIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWxUaGlzLmJyb3dzZXIpICE9PSBPYmplY3QucHJvdG90eXBlKSB7XG4gIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiO1xuXG4gIC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgLy8gY29udGVudHMgb2YgYSBmdW5jdGlvbiB1bnRpbCB0aGUgZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHNpbmNlIGl0IHdpbGxcbiAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cbiAgY29uc3Qgd3JhcEFQSXMgPSBleHRlbnNpb25BUElzID0+IHtcbiAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgLy8gYXQgYnVpbGQgdGltZSBieSByZXBsYWNpbmcgdGhlIGZvbGxvd2luZyBcImluY2x1ZGVcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxuICAgIC8vIEpTT04gZmlsZS5cbiAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgIFwiYWxhcm1zXCI6IHtcbiAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJib29rbWFya3NcIjoge1xuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q2hpbGRyZW5cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UmVjZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb3dzZXJBY3Rpb25cIjoge1xuICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5Qb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb3dzaW5nRGF0YVwiOiB7XG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNvb2tpZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRG93bmxvYWRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUhpc3RvcnlcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlTG9jYWxTdG9yYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVQbHVnaW5EYXRhXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb21tYW5kc1wiOiB7XG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb250ZXh0TWVudXNcIjoge1xuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkZXZ0b29sc1wiOiB7XG4gICAgICAgIFwiaW5zcGVjdGVkV2luZG93XCI6IHtcbiAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMixcbiAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMyxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlU2lkZWJhclBhbmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRvd25sb2Fkc1wiOiB7XG4gICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImVyYXNlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUZpbGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzdW1lXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZXh0ZW5zaW9uXCI6IHtcbiAgICAgICAgXCJpc0FsbG93ZWRGaWxlU2NoZW1lQWNjZXNzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaGlzdG9yeVwiOiB7XG4gICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZUFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVSYW5nZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VmlzaXRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaTE4blwiOiB7XG4gICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpZGVudGl0eVwiOiB7XG4gICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImlkbGVcIjoge1xuICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm1hbmFnZW1lbnRcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0U2VsZlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInVuaW5zdGFsbFNlbGZcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGVybWlzc2lvbkxldmVsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGFnZUFjdGlvblwiOiB7XG4gICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlkZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwZXJtaXNzaW9uc1wiOiB7XG4gICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQbGF0Zm9ybUluZm9cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwib3Blbk9wdGlvbnNQYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTmF0aXZlTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlc3Npb25zXCI6IHtcbiAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFJlY2VudGx5Q2xvc2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlc3RvcmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICBcImxvY2FsXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRhYnNcIjoge1xuICAgICAgICBcImNhcHR1cmVWaXNpYmxlVGFiXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXNjYXJkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImR1cGxpY2F0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdvQmFja1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImluc2VydENTU1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInF1ZXJ5XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbG9hZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ1NTXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidG9wU2l0ZXNcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2ViTmF2aWdhdGlvblwiOiB7XG4gICAgICAgIFwiZ2V0QWxsRnJhbWVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3ZWJSZXF1ZXN0XCI6IHtcbiAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3aW5kb3dzXCI6IHtcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldExhc3RGb2N1c2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxuICAgICAqIG90aGVyd2lzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cbiAgICAgKiAgICAgICAgQSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpbiBvcmRlciB0byBjcmVhdGUgdGhlIHZhbHVlIGZvciBhbnlcbiAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxuICAgICAqL1xuICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XG4gICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICBzdXBlcihpdGVtcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XG4gICAgICB9XG5cbiAgICAgIGdldChrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAqL1xuICAgIGNvbnN0IGlzVGhlbmFibGUgPSB2YWx1ZSA9PiB7XG4gICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcbiAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAqXG4gICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxuICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xuICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcbiAgICAgKiAgICAgICAgcHJvbWlzZS5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0XG4gICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuICguLi5jYWxsYmFja0FyZ3MpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgfHxcbiAgICAgICAgICAgICAgICAgICAoY2FsbGJhY2tBcmdzLmxlbmd0aCA8PSAxICYmIG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnICE9PSBmYWxzZSkpIHtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gKG51bUFyZ3MpID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgKiAgICAgICAgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtdXN0IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heEFyZ3NcbiAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24ob2JqZWN0LCAuLi4qKX1cbiAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBhc3luY0Z1bmN0aW9uV3JhcHBlcih0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcbiAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtyZXNvbHZlLCByZWplY3R9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoY2JFcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bmFtZX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG5cbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuXG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgQVBJIG1ldGhvZCBtZXRhZGF0YSwgc28gdGhhdCB0aGUgbmV4dCBBUEkgY2FsbHMgd2lsbCBub3QgdHJ5IHRvXG4gICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cbiAgICAgICAgICAgICAgbWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEubm9DYWxsYmFjaykge1xuICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtyZXNvbHZlLCByZWplY3R9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyBhbiBleGlzdGluZyBtZXRob2Qgb2YgdGhlIHRhcmdldCBvYmplY3QsIHNvIHRoYXQgY2FsbHMgdG8gaXQgYXJlXG4gICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxuICAgICAqIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICogICAgICAgIFRoZSBvcmlnaW5hbCB0YXJnZXQgb2JqZWN0IHRoYXQgdGhlIHdyYXBwZWQgbWV0aG9kIGJlbG9uZ3MgdG8uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XG4gICAgICogICAgICAgIG9iamVjdCB3aGljaCBpcyBjcmVhdGVkIHRvIHdyYXAgdGhlIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXG4gICAgICogICAgICAgIG9mIHRoZSB3cmFwcGVkIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XG4gICAgICogICAgICAgIEEgUHJveHkgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gbWV0aG9kLCB3aGljaCBpbnZva2VzIHRoZSBnaXZlbiB3cmFwcGVyXG4gICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICovXG4gICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcbiAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIC8qKlxuICAgICAqIFdyYXBzIGFuIG9iamVjdCBpbiBhIFByb3h5IHdoaWNoIGludGVyY2VwdHMgYW5kIHdyYXBzIGNlcnRhaW4gbWV0aG9kc1xuICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW3dyYXBwZXJzID0ge31dXG4gICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxuICAgICAqICAgICAgICBtZXRob2QgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlLiBUaGVzZVxuICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YSA9IHt9XVxuICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxuICAgICAqICAgICAgICB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUgd2hpY2ggaGFzIGEgY29ycmVzcG9uZGluZyBtZXRhZGF0YSBvYmplY3RcbiAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxuICAgICAqICAgICAgICB7QHNlZSB3cmFwQXN5bmNGdW5jdGlvbn1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgfHwgcHJvcCBpbiBjYWNoZTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIShwcm9wIGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BdO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IHdyYXBBc3luY0Z1bmN0aW9uKHByb3AsIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2QgdGhhdCB3ZSBkb24ndCBrbm93IG9yIGNhcmUgYWJvdXQuIFJldHVybiB0aGVcbiAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgLy8gb2YuIENyZWF0ZSBhIHN1Yi1vYmplY3Qgd3JhcHBlciBmb3IgaXQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY2hpbGRcbiAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIFwiKlwiKSkge1xuICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCB7XG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQocHJveHlUYXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFwiZ2V0XCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcbiAgICAgIC8vIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSB0YXJnZXQgaWYgdGhhdCB2YWx1ZSBpcyBkZWNsYXJlZCByZWFkLW9ubHkgYW5kXG4gICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cbiAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW5ub3QgcmV0dXJuIGEgY3VzdG9tIG9iamVjdCBmb3IgQVBJcyB0aGF0XG4gICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBwcm94eSBoYW5kbGVycyB0aGVtc2VsdmVzIHdpbGwgc3RpbGwgdXNlIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YFxuICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXG4gICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXG4gICAgICpcbiAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXG4gICAgICogcmV0cmlldmUgdGhlIG9yaWdpbmFsIHdyYXBwZXIsIHNvIHRoYXQgIGF0dGVtcHRzIHRvIHJlbW92ZSBhXG4gICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEZWZhdWx0V2Vha01hcDxmdW5jdGlvbiwgZnVuY3Rpb24+fSB3cmFwcGVyTWFwXG4gICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcbiAgICAgKiAgICAgICAgYW4gZXhpc3Rpbmcgb25lIHdoZW4gaXQgZG9lcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xuICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcbiAgICAgIH0sXG5cbiAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gb25SZXF1ZXN0RmluaXNoZWQgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCB3aWxsIHJldHVybiBhXG4gICAgICAgKiBgZ2V0Q29udGVudCgpYCBwcm9wZXJ0eSB3aGljaCByZXR1cm5zIGEgYFByb21pc2VgIHJhdGhlciB0aGFuIHVzaW5nIGFcbiAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxXG4gICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZFJlcSA9IHdyYXBPYmplY3QocmVxLCB7fSAvKiB3cmFwcGVycyAqLywge1xuICAgICAgICAgIGdldENvbnRlbnQ6IHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDAsXG4gICAgICAgICAgICBtYXhBcmdzOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0ZW5lcih3cmFwcGVkUmVxKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGEgbWVzc2FnZSBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IG1heSBzZW5kIHJlc3BvbnNlcyBiYXNlZCBvblxuICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgKiBzZW50IHdoZW4gdGhlIHByb21pc2UgZWl0aGVyIHJlc29sdmVzIG9yIHJlamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgKiAgICAgICAgVGhlIG1lc3NhZ2Ugc2VudCBieSB0aGUgb3RoZXIgZW5kIG9mIHRoZSBjaGFubmVsLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKil9IHNlbmRSZXNwb25zZVxuICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgd3JhcHBlZFNlbmRSZXNwb25zZSA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkaWRDYWxsU2VuZFJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIobWVzc2FnZSwgc2VuZGVyLCB3cmFwcGVkU2VuZFJlc3BvbnNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpO1xuXG4gICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciBkaWRuJ3QgcmV0dXJuZWQgdHJ1ZSBvciBhIFByb21pc2UsIG9yIGNhbGxlZFxuICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAvLyBhbmQgYW4gZXJyb3IgaWYgdGhlIHByb21pc2UgcmVqZWN0cyAoYSB3cmFwcGVkIHNlbmRNZXNzYWdlIGhhc1xuICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAvLyBwcm9taXNlKS5cbiAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gKHByb21pc2UpID0+IHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2UgdmFsdWUuXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAvLyBTZW5kIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaWYgdGhlIHJlamVjdGVkIHZhbHVlXG4gICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgIF9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXzogdHJ1ZSxcbiAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgb25NZXNzYWdlIHJlamVjdGVkIHJlcGx5XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgLy8gY2FsbGJhY2sgdG8gcmVzb2x2ZSBhbmQgc2VuZCBpdCBhcyBhIHJlc3BvbnNlLlxuICAgICAgICBpZiAoaXNSZXN1bHRUaGVuYWJsZSkge1xuICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChzZW5kUmVzcG9uc2VQcm9taXNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExldCBDaHJvbWUga25vdyB0aGF0IHRoZSBsaXN0ZW5lciBpcyByZXBseWluZy5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2sgPSAoe3JlamVjdCwgcmVzb2x2ZX0sIHJlcGx5KSA9PiB7XG4gICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAvLyB0aGUgcHJvbWlzZSB0byB1bmRlZmluZWQgYXMgaW4gRmlyZWZveC5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgLy8gYW4gRXJyb3IgaW5zdGFuY2UuXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXBseSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZSA9IChuYW1lLCBtZXRhZGF0YSwgYXBpTmFtZXNwYWNlT2JqLCAuLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtyZXNvbHZlLCByZWplY3R9KTtcbiAgICAgICAgYXJncy5wdXNoKHdyYXBwZWRDYik7XG4gICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgIGRldnRvb2xzOiB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBvblJlcXVlc3RGaW5pc2hlZDogd3JhcEV2ZW50KG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDN9KSxcbiAgICAgIH0sXG4gICAgICB0YWJzOiB7XG4gICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHttaW5BcmdzOiAyLCBtYXhBcmdzOiAzfSksXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xuICAgICAgY2xlYXI6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICAgIGdldDoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgICAgc2V0OiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgfTtcbiAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xuICAgICAgbmV0d29yazoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgICAgc2VydmljZXM6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICAgIHdlYnNpdGVzOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgfTtcblxuICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gIH07XG5cbiAgLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxuICAvLyBgbW9kdWxlYCB2YXJpYWJsZSBhdmFpbGFibGUuXG4gIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5icm93c2VyO1xufVxuIiwiZXhwb3J0IGNvbnN0IGljb25fc3VuID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImljb24gaWNvbi10YWJsZXIgaWNvbnMtdGFibGVyLW91dGxpbmUgaWNvbi10YWJsZXItc3VuXCI+PHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPjxwYXRoIGQ9XCJNMTIgMTJtLTQgMGE0IDQgMCAxIDAgOCAwYTQgNCAwIDEgMCAtOCAwXCIgLz48cGF0aCBkPVwiTTMgMTJoMW04IC05djFtOCA4aDFtLTkgOHYxbS02LjQgLTE1LjRsLjcgLjdtMTIuMSAtLjdsLS43IC43bTAgMTEuNGwuNyAuN20tMTIuMSAtLjdsLS43IC43XCIgLz48L3N2Zz5gXHJcblxyXG5leHBvcnQgY29uc3QgaWNvbl9tb29uID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImljb24gaWNvbi10YWJsZXIgaWNvbnMtdGFibGVyLW91dGxpbmUgaWNvbi10YWJsZXItbW9vblwiPjxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPjxwYXRoIGQ9XCJNMTIgM2MuMTMyIDAgLjI2MyAwIC4zOTMgMGE3LjUgNy41IDAgMCAwIDcuOTIgMTIuNDQ2YTkgOSAwIDEgMSAtOC4zMTMgLTEyLjQ1NHpcIiAvPjwvc3ZnPmBcclxuXHJcbmV4cG9ydCBjb25zdCBpY29uX21vb25fZnVsbCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1vdXRsaW5lIGljb24tdGFibGVyLW1vb24tMlwiPjxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPjxwYXRoIGQ9XCJNMTYuNDE4IDQuMTU3YTggOCAwIDAgMCAwIDE1LjY4NlwiIC8+PHBhdGggZD1cIk0xMiAxMm0tOSAwYTkgOSAwIDEgMCAxOCAwYTkgOSAwIDEgMCAtMTggMFwiIC8+PC9zdmc+YFxyXG5cclxuZXhwb3J0IGNvbnN0IGljb25fc2V0dGluZ3MgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiaWNvbiBpY29uLXRhYmxlciBpY29ucy10YWJsZXItb3V0bGluZSBpY29uLXRhYmxlci1zZXR0aW5nc1wiPjxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPjxwYXRoIGQ9XCJNMTAuMzI1IDQuMzE3Yy40MjYgLTEuNzU2IDIuOTI0IC0xLjc1NiAzLjM1IDBhMS43MjQgMS43MjQgMCAwIDAgMi41NzMgMS4wNjZjMS41NDMgLS45NCAzLjMxIC44MjYgMi4zNyAyLjM3YTEuNzI0IDEuNzI0IDAgMCAwIDEuMDY1IDIuNTcyYzEuNzU2IC40MjYgMS43NTYgMi45MjQgMCAzLjM1YTEuNzI0IDEuNzI0IDAgMCAwIC0xLjA2NiAyLjU3M2MuOTQgMS41NDMgLS44MjYgMy4zMSAtMi4zNyAyLjM3YTEuNzI0IDEuNzI0IDAgMCAwIC0yLjU3MiAxLjA2NWMtLjQyNiAxLjc1NiAtMi45MjQgMS43NTYgLTMuMzUgMGExLjcyNCAxLjcyNCAwIDAgMCAtMi41NzMgLTEuMDY2Yy0xLjU0MyAuOTQgLTMuMzEgLS44MjYgLTIuMzcgLTIuMzdhMS43MjQgMS43MjQgMCAwIDAgLTEuMDY1IC0yLjU3MmMtMS43NTYgLS40MjYgLTEuNzU2IC0yLjkyNCAwIC0zLjM1YTEuNzI0IDEuNzI0IDAgMCAwIDEuMDY2IC0yLjU3M2MtLjk0IC0xLjU0MyAuODI2IC0zLjMxIDIuMzcgLTIuMzdjMSAuNjA4IDIuMjk2IC4wNyAyLjU3MiAtMS4wNjV6XCIgLz48cGF0aCBkPVwiTTkgMTJhMyAzIDAgMSAwIDYgMGEzIDMgMCAwIDAgLTYgMFwiIC8+PC9zdmc+YFxyXG5cclxuZXhwb3J0IGNvbnN0IGljb25fcGFpbnQgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiaWNvbiBpY29uLXRhYmxlciBpY29ucy10YWJsZXItb3V0bGluZSBpY29uLXRhYmxlci1wYWludFwiPjxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPjxwYXRoIGQ9XCJNNSAzbTAgMmEyIDIgMCAwIDEgMiAtMmgxMGEyIDIgMCAwIDEgMiAydjJhMiAyIDAgMCAxIC0yIDJoLTEwYTIgMiAwIDAgMSAtMiAtMnpcIiAvPjxwYXRoIGQ9XCJNMTkgNmgxYTIgMiAwIDAgMSAyIDJhNSA1IDAgMCAxIC01IDVsLTUgMHYyXCIgLz48cGF0aCBkPVwiTTEwIDE1bTAgMWExIDEgMCAwIDEgMSAtMWgyYTEgMSAwIDAgMSAxIDF2NGExIDEgMCAwIDEgLTEgMWgtMmExIDEgMCAwIDEgLTEgLTF6XCIgLz48L3N2Zz5gXHJcblxyXG5leHBvcnQgY29uc3QgaWNvbl9wYWxldHRlID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImljb24gaWNvbi10YWJsZXIgaWNvbnMtdGFibGVyLW91dGxpbmUgaWNvbi10YWJsZXItcGFsZXR0ZVwiPjxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPjxwYXRoIGQ9XCJNMTIgMjFhOSA5IDAgMCAxIDAgLTE4YzQuOTcgMCA5IDMuNTgyIDkgOGMwIDEuMDYgLS40NzQgMi4wNzggLTEuMzE4IDIuODI4Yy0uODQ0IC43NSAtMS45ODkgMS4xNzIgLTMuMTgyIDEuMTcyaC0yLjVhMiAyIDAgMCAwIC0xIDMuNzVhMS4zIDEuMyAwIDAgMSAtMSAyLjI1XCIgLz48cGF0aCBkPVwiTTguNSAxMC41bS0xIDBhMSAxIDAgMSAwIDIgMGExIDEgMCAxIDAgLTIgMFwiIC8+PHBhdGggZD1cIk0xMi41IDcuNW0tMSAwYTEgMSAwIDEgMCAyIDBhMSAxIDAgMSAwIC0yIDBcIiAvPjxwYXRoIGQ9XCJNMTYuNSAxMC41bS0xIDBhMSAxIDAgMSAwIDIgMGExIDEgMCAxIDAgLTIgMFwiIC8+PC9zdmc+YFxyXG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChcbiAgICAgIGtleSA9PT0gJ2RlZmF1bHQnIHx8XG4gICAgICBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRlc3QsIGtleSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCIvKiBleHBvcnQgZnVuY3Rpb24gaGV4VG9IU0woaGV4KSB7XHJcblx0Y29uc3QgcmVzdWx0ID0ge31cclxuXHRoZXggPSBoZXguc3Vic3RyaW5nKDEpIC8vIFJlbW92ZSBsZWFkaW5nIFwiI1wiIHN5bWJvbFxyXG5cclxuXHRjb25zdCByZ2IgPSBoZXgubWF0Y2goL1tBLUZhLWZcXGRdezJ9L2cpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcclxuXHRcdHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTYpIC8gMjU1XHJcblx0fSlcclxuXHJcblx0Y29uc3QgciA9IHJnYlswXVxyXG5cdGNvbnN0IGcgPSByZ2JbMV1cclxuXHRjb25zdCBiID0gcmdiWzJdXHJcblxyXG5cdGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpXHJcblx0Y29uc3QgbWluID0gTWF0aC5taW4ociwgZywgYilcclxuXHRsZXQgaCwgcywgbFxyXG5cclxuXHRsID0gKG1heCArIG1pbikgLyAyXHJcblxyXG5cdGlmIChtYXggPT09IG1pbikge1xyXG5cdFx0aCA9IHMgPSAwIC8vIEFjaHJvbWF0aWNcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc3QgZCA9IG1heCAtIG1pblxyXG5cdFx0cyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pXHJcblx0XHRzd2l0Y2ggKG1heCkge1xyXG5cdFx0XHRjYXNlIHI6XHJcblx0XHRcdFx0aCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSBnOlxyXG5cdFx0XHRcdGggPSAoYiAtIHIpIC8gZCArIDJcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlIGI6XHJcblx0XHRcdFx0aCA9IChyIC0gZykgLyBkICsgNFxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHR9XHJcblx0XHRoID0gTWF0aC5yb3VuZChoICogNjApXHJcblx0fVxyXG5cclxuXHRyZXN1bHQuaCA9IGggJSAzNjBcclxuXHRyZXN1bHQucyA9IE1hdGgucm91bmQocyAqIDEwMClcclxuXHRyZXN1bHQubCA9IE1hdGgucm91bmQobCAqIDEwMClcclxuXHJcblx0cmV0dXJuIHJlc3VsdFxyXG59ICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9IU0woaGV4KSB7XHJcblx0Ly8gQ29udmVydCBoZXggdG8gUkdCIGZpcnN0XHJcblx0bGV0IHIgPSAwLFxyXG5cdFx0ZyA9IDAsXHJcblx0XHRiID0gMFxyXG5cdGlmIChoZXgubGVuZ3RoID09PSA0KSB7XHJcblx0XHRyID0gcGFyc2VJbnQoaGV4WzFdICsgaGV4WzFdLCAxNilcclxuXHRcdGcgPSBwYXJzZUludChoZXhbMl0gKyBoZXhbMl0sIDE2KVxyXG5cdFx0YiA9IHBhcnNlSW50KGhleFszXSArIGhleFszXSwgMTYpXHJcblx0fSBlbHNlIGlmIChoZXgubGVuZ3RoID09PSA3KSB7XHJcblx0XHRyID0gcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNilcclxuXHRcdGcgPSBwYXJzZUludChoZXguc2xpY2UoMywgNSksIDE2KVxyXG5cdFx0YiA9IHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpXHJcblx0fVxyXG5cclxuXHQvLyBUaGVuIGNvbnZlcnQgUkdCIHRvIEhTTFxyXG5cdHIgLz0gMjU1XHJcblx0ZyAvPSAyNTVcclxuXHRiIC89IDI1NVxyXG5cdGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpXHJcblx0Y29uc3QgbWluID0gTWF0aC5taW4ociwgZywgYilcclxuXHRsZXQgaCxcclxuXHRcdHMsXHJcblx0XHRsID0gKG1heCArIG1pbikgLyAyXHJcblxyXG5cdGlmIChtYXggPT09IG1pbikge1xyXG5cdFx0aCA9IHMgPSAwIC8vIGFjaHJvbWF0aWNcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc3QgZCA9IG1heCAtIG1pblxyXG5cdFx0cyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pXHJcblx0XHRzd2l0Y2ggKG1heCkge1xyXG5cdFx0XHRjYXNlIHI6XHJcblx0XHRcdFx0aCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSBnOlxyXG5cdFx0XHRcdGggPSAoYiAtIHIpIC8gZCArIDJcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlIGI6XHJcblx0XHRcdFx0aCA9IChyIC0gZykgLyBkICsgNFxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHR9XHJcblx0XHRoIC89IDZcclxuXHR9XHJcblxyXG5cdHJldHVybiBbTWF0aC5yb3VuZChoICogMzYwKSwgTWF0aC5yb3VuZChzICogMTAwKSwgTWF0aC5yb3VuZChsICogMTAwKV1cclxufVxyXG4iLCJpbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnXHJcbmltcG9ydCB7IHB4VG9SZW0gfSBmcm9tICcuLi91dGlscy9mb250c0NvbnZlcnRpbmcnXHJcbi8vIGltcG9ydCB7IHJlbVRvUHggfSBmcm9tICcuLi91dGlscy9mb250c0NvbnZlcnRpbmcnXHJcbmltcG9ydCB7IHJlbmRlckZvbnQsIHJlbmRlckJ1dHRvbiB9IGZyb20gJy4vY29tcG9uZW50cy9yZW5kZXJGb250cydcclxuXHJcbmNvbnN0IGRlZmF1bHRGb250RmFtaWx5ID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tZi1mYW1pbHktZGVmYXVsdCcpXHJcbmNvbnN0IGRlZmF1bHRGb250U2l6ZSA9ICcxNidcclxuY29uc3QgZGVmYXVsdExldHRlclNwYWNpbmcgPSAnMCdcclxuY29uc3QgZGVmYXVsdExpbmVIZWlnaHQgPSAyOFxyXG4vLyBjb25zdCBkZWZhdWx0TGluZUhlaWdodCA9ICcyNHB4J1xyXG5cclxuY29uc3QgZm9udE5hbWVzID0gW1xyXG5cdCdEZWZhdWx0JyxcclxuXHQnSW50ZXInLFxyXG5cdCdSb2JvdG8nLFxyXG5cdCdSb2JvdG8gTW9ubycsXHJcblx0J0RNIFNhbnMnLFxyXG5cdCdSZWRkaXQgTW9ubycsXHJcblx0J1BvcHBpbnMnLFxyXG5cdCdOb3RvIFNhbnMnLFxyXG5cdCdNb25vc3BhY2UnLFxyXG5cdCdMYXRvJyxcclxuXHQnUXVpY2tzYW5kJyxcclxuXHQnT3V0Zml0JyxcclxuXVxyXG5cclxubGV0IGdvb2dsZUZvbnRXZWlnaHRzID0gYDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDBgXHJcbmxldCBjdXJyRm9udEhyZWYgPSBudWxsXHJcblxyXG5leHBvcnQgbGV0IGZvbnRIdG1sQ29kZSA9IGBcclxuXHQ8c2VjdGlvbiBpZD1cImZvbnRDaGFuZ2VyUG9wb3ZlclwiIGNsYXNzPVwiZm9udHNcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJncmlkIGdhcC00XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmb250c19fZmFtaWx5IHRleHQtc20gbWItMiBmbGV4IGZsZXgtY29sXCI+XHJcblx0XHRcdFx0PGxhYmVsIGZvcj1cImZvbnRGYW1pbHlcIiBjbGFzcz1cInVwcGVyY2FzZSB0ZXh0LXhzIG1iLTEgZm9udC1zZW1pYm9sZFwiPkZvbnQgRmFtaWx5OjwvbGFiZWw+XHJcblx0XHRcdFx0PHNlbGVjdCBpZD1cImZvbnRGYW1pbHlcIiBjbGFzcz1cImJnLXRva2VuLXNpZGViYXItc3VyZmFjZS1zZWNvbmRhcnkgcm91bmRlZC1tZCBvdXRsaW5lLW5vbmUgYm9yZGVyLW5vbmUgcC0zIGZvY3VzOm5vbmVcIj5cclxuXHRcdFx0XHQke2ZvbnROYW1lcy5tYXAoKG5hbWUpID0+IGA8b3B0aW9uIHZhbHVlPVwiJHtuYW1lID09PSAnRGVmYXVsdCcgPyBkZWZhdWx0Rm9udEZhbWlseSA6IG5hbWV9XCI+JHtuYW1lfTwvb3B0aW9uPmApLmpvaW4oJycpfVxyXG5cdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdCR7cmVuZGVyRm9udCh7XHJcblx0XHRcdFx0bmFtZTogJ0ZvbnQgU2l6ZScsXHJcblx0XHRcdFx0Y2xhc3NOYW1lOiAnZm9udHNfX3NpemUnLFxyXG5cdFx0XHRcdGlucHV0SWQ6ICdmb250U2l6ZScsXHJcblx0XHRcdFx0aW5wdXRUeXBlOiAnbnVtYmVyJyxcclxuXHRcdFx0XHRpbnB1dFZhbHVlOiBkZWZhdWx0Rm9udFNpemUsXHJcblx0XHRcdFx0aW5wdXRQbGFjZWhvbGRlcjogJzE2cHgnLFxyXG5cdFx0XHRcdHVuaXQ6ICdweCcsXHJcblx0XHRcdH0pfVxyXG5cdFx0XHQke3JlbmRlckZvbnQoe1xyXG5cdFx0XHRcdG5hbWU6ICdMaW5lIEhlaWdodCcsXHJcblx0XHRcdFx0Y2xhc3NOYW1lOiAnZm9udHNfX2xpbmVIZWlnaHQnLFxyXG5cdFx0XHRcdGlucHV0SWQ6ICdsaW5lSGVpZ2h0JyxcclxuXHRcdFx0XHRpbnB1dFR5cGU6ICdudW1iZXInLFxyXG5cdFx0XHRcdGlucHV0VmFsdWU6IGRlZmF1bHRMaW5lSGVpZ2h0LFxyXG5cdFx0XHRcdGlucHV0UGxhY2Vob2xkZXI6IGAke2RlZmF1bHRMaW5lSGVpZ2h0fXB4YCxcclxuXHRcdFx0XHR1bml0OiAncHgnLFxyXG5cdFx0XHR9KX1cclxuXHRcdFx0JHtyZW5kZXJGb250KHtcclxuXHRcdFx0XHRuYW1lOiAnTGV0dGVyIFNwYWNpbmcnLFxyXG5cdFx0XHRcdGNsYXNzTmFtZTogJ2ZvbnRzX19sZXR0ZXJTcGFjaW5nJyxcclxuXHRcdFx0XHRpbnB1dElkOiAnbGV0dGVyU3BhY2luZycsXHJcblx0XHRcdFx0aW5wdXRUeXBlOiAnbnVtYmVyJyxcclxuXHRcdFx0XHRpbnB1dFZhbHVlOiBkZWZhdWx0TGV0dGVyU3BhY2luZyxcclxuXHRcdFx0XHRpbnB1dFBsYWNlaG9sZGVyOiBgJHtkZWZhdWx0Rm9udFNpemV9cHhgLFxyXG5cdFx0XHRcdHVuaXQ6ICdweCcsXHJcblx0XHRcdH0pfVxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImdhcC0yIG10LTQgZ3JpZFwiPlxyXG5cdFx0XHQke3JlbmRlckJ1dHRvbih7IGlkOiAncmVzZXRGb250JywgY29udGVudDogJ1Jlc2V0IEZvbnRzJywgZGlzYWJsZWQ6IGZhbHNlLCBjbGFzc05hbWU6ICdidG4tcHJpbWFyeScgfSl9XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L3NlY3Rpb24+XHJcbmBcclxuXHJcbmZ1bmN0aW9uIHNldENTU1Zhcih7IHZhck5hbWUsIHZhclZhbHVlIH0pIHtcclxuXHRjb25zb2xlLmxvZygnc2V0Q1NTVmFyKCk6JywgdmFyTmFtZSwgdmFyVmFsdWUpXHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHZhck5hbWUsIHZhclZhbHVlKVxyXG59XHJcbmZ1bmN0aW9uIHNldENTU1ZhcmlhYmxlcyh7IGZvbnRGYW1pbHksIGZvbnRTaXplID0gJzE2JyB9KSB7XHJcblx0aWYgKGZvbnRGYW1pbHkgIT09IGRlZmF1bHRGb250RmFtaWx5KSB7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZi1mYW1pbHknLCBgJHtmb250RmFtaWx5fSwgJHtkZWZhdWx0Rm9udEZhbWlseX1gKVxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWYtc2l6ZScsIGAke3B4VG9SZW0oZm9udFNpemUpfWApXHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblxyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mLWZhbWlseScsIGRlZmF1bHRGb250RmFtaWx5KVxyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mLXNpemUnLCBgJHtweFRvUmVtKGZvbnRTaXplKX1gKVxyXG59XHJcbmZ1bmN0aW9uIHNldElucHV0RmllbGRzKHsgZm9udEZhbWlseSwgZm9udFNpemUgPSAnMTYnIH0pIHtcclxuXHQvLyBjb25zb2xlLmxvZygnc2V0SW5wdXRGaWVsZHMoKTonLCBmb250RmFtaWx5LCBmb250U2l6ZSlcclxuXHJcblx0aWYgKGZvbnRGYW1pbHkgIT09ICdEZWZhdWx0Jykge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbnRGYW1pbHknKS52YWx1ZSA9IGZvbnRGYW1pbHlcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb250U2l6ZScpLnZhbHVlID0gZm9udFNpemVcclxuXHRcdHJldHVyblxyXG5cdH1cclxuXHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbnRGYW1pbHknKS52YWx1ZSA9IGRlZmF1bHRGb250RmFtaWx5XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbnRTaXplJykudmFsdWUgPSBmb250U2l6ZVxyXG59XHJcbmZ1bmN0aW9uIHNldElucHV0RmllbGQoeyBpbnB1dFNlbGVjdG9yLCBpbnB1dFZhbCB9KSB7XHJcblx0Y29uc29sZS5sb2coJ3NldElucHV0RmllbGQoKTonLCBpbnB1dFNlbGVjdG9yLCBpbnB1dFZhbClcclxuXHJcblx0bGV0IGlucHV0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ3B0aC1zZXR0aW5ncyAke2lucHV0U2VsZWN0b3J9YClcclxuXHJcblx0aWYgKGlucHV0VmFsID09PSAnRGVmYXVsdCcpIHtcclxuXHRcdGlucHV0RWwudmFsdWUgPSBkZWZhdWx0Rm9udEZhbWlseVxyXG5cdH0gZWxzZSB7XHJcblx0XHRpbnB1dEVsLnZhbHVlID0gaW5wdXRWYWxcclxuXHR9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9udHNGcm9tU3RvcmFnZSgpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldChbJ2ZvbnRGYW1pbHknLCAnZm9udFNpemUnLCAnbGV0dGVyU3BhY2luZycsICdsaW5lSGVpZ2h0J10pXHJcblxyXG5cdFx0Y29uc29sZS5sb2coJ2RhdGE6ICcsIGRhdGEpXHJcblxyXG5cdFx0aWYgKGRhdGEuZm9udEZhbWlseSkge1xyXG5cdFx0XHRzZXRDU1NWYXIoeyB2YXJOYW1lOiAnLS1mLWZhbWlseScsIHZhclZhbHVlOiBkYXRhLmZvbnRGYW1pbHkgfSlcclxuXHRcdFx0Ly8gTG9hZCBzZWxlY3RlZCBmb250IGZyb20gR29vZ2xlIEZvbnRzXHJcblx0XHRcdGNyZWF0ZUFuZEluamVjdExpbmtFbGVtZW50KGRhdGEuZm9udEZhbWlseSlcclxuXHRcdH1cclxuXHRcdGlmIChkYXRhLmZvbnRTaXplKSB7XHJcblx0XHRcdHNldENTU1Zhcih7IHZhck5hbWU6ICctLWYtc2l6ZScsIHZhclZhbHVlOiBgJHtweFRvUmVtKGRhdGEuZm9udFNpemUpfWAgfSlcclxuXHRcdFx0c2V0SW5wdXRGaWVsZCh7IGlucHV0U2VsZWN0b3I6ICcjZm9udFNpemUnLCBpbnB1dFZhbDogZGF0YS5mb250U2l6ZSB9KVxyXG5cdFx0fVxyXG5cdFx0aWYgKGRhdGEubGV0dGVyU3BhY2luZykge1xyXG5cdFx0XHRzZXRDU1NWYXIoeyB2YXJOYW1lOiAnLS1mLWxldHRlci1zcGFjaW5nJywgdmFyVmFsdWU6IGAke2RhdGEuZm9udFNpemV9cHhgIH0pXHJcblx0XHRcdHNldElucHV0RmllbGQoeyBpbnB1dFNlbGVjdG9yOiAnI2xldHRlclNwYWNpbmcnLCBpbnB1dFZhbDogZGF0YS5sZXR0ZXJTcGFjaW5nIH0pXHJcblx0XHR9XHJcblx0XHRpZiAoZGF0YS5saW5lSGVpZ2h0KSB7XHJcblx0XHRcdHNldENTU1Zhcih7IHZhck5hbWU6ICctLWYtbGluZS1oZWlnaHQnLCB2YXJWYWx1ZTogZGF0YS5mb250U2l6ZSB9KVxyXG5cdFx0XHRzZXRJbnB1dEZpZWxkKHsgaW5wdXRTZWxlY3RvcjogJyNsaW5lSGVpZ2h0JywgaW5wdXRWYWw6IGRhdGEubGluZUhlaWdodCB9KVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIGZvbnRzIGZyb20gc3RvcmFnZTonLCBlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldEZvbnRzVG9TdG9yYWdlKHsgZm9udEZhbWlseSwgZm9udFNpemUgPSAnMTYnIH0pIHtcclxuXHQvLyBTYXZlIHNlbGVjdGVkIGZvbnQgdG8gc3RvcmFnZVxyXG5cdGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IGZvbnRGYW1pbHksIGZvbnRTaXplIH0pXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gc2V0UHJvcFRvU3RvcmFnZSh7IHByb3BOYW1lLCBwcm9wVmFsIH0pIHtcclxuXHQvLyBTYXZlIHNlbGVjdGVkIGZvbnQgdG8gc3RvcmFnZVxyXG5cdGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IFtwcm9wTmFtZV06IHByb3BWYWwgfSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiByZW1vdmVGb250c0Zyb21TdG9yYWdlKCkge1xyXG5cdGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnJlbW92ZShbJ2ZvbnRGYW1pbHknLCAnZm9udFNpemUnLCAnbGV0dGVyU3BhY2luZycsICdsaW5lSGVpZ2h0J10pXHJcbn1cclxuXHJcbi8vIENyZWF0ZSB0aGUgPGxpbms+IGluIDxoZWFkPiB3aGljaCB3aWxsIGZldGNoIHRoZSBzZWxlY3RlZCBmb250IGZyb20gR29vZ2xlIEZvbnRzXHJcbmZ1bmN0aW9uIGNyZWF0ZUFuZEluamVjdExpbmtFbGVtZW50KGZvbnRGYW1pbHkpIHtcclxuXHRsZXQgaHJlZiA9IGBodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PSR7Zm9udEZhbWlseS5yZXBsYWNlKFxyXG5cdFx0JyAnLFxyXG5cdFx0JysnXHJcblx0KX0ke2dvb2dsZUZvbnRXZWlnaHRzfSZkaXNwbGF5PXN3YXBgXHJcblxyXG5cdC8vIEFrbyBqZSBocmVmID09IGN1cnJGb250SHJlZiwgbmUgZG9kYWplbW8gbGluayFcclxuXHRpZiAoY3VyckZvbnRIcmVmICYmIGN1cnJGb250SHJlZiA9PT0gaHJlZikgcmV0dXJuXHJcblxyXG5cdC8vIFRPRE8gQ2hlY2sgaWYgdGhlIGxpbmsgaXMgYWxyZWFkeSBpbmplY3RlZFxyXG5cclxuXHQvLyBSZW1vdmUgZXhpc3RpbmcgR29vZ2xlIEZvbnQgbGlua3NcclxuXHRyZW1vdmVFeGlzdGluZ0dvb2dsZUZvbnRMaW5rcygpXHJcblxyXG5cdGN1cnJGb250SHJlZiA9IGhyZWZcclxuXHJcblx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxyXG5cdGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnXHJcblx0bGluay5ocmVmID0gaHJlZlxyXG5cclxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXHJcblxyXG5cdHJldHVybiBsaW5rXHJcbn1cclxuZnVuY3Rpb24gZ2V0QWxsR29vZ2xlRm9udExpbmtzKCkge1xyXG5cdC8vIFNlbGVjdCBhbGwgbGluayBlbGVtZW50cyBpbiB0aGUgaGVhZFxyXG5cdGNvbnN0IGxpbmtFbGVtZW50cyA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvckFsbCgnbGluaycpXHJcblxyXG5cdC8vIEZpbHRlciB0aGUgbGluayBlbGVtZW50cyB0byBmaW5kIHRob3NlIGZldGNoaW5nIEdvb2dsZSBGb250c1xyXG5cdGNvbnN0IGdvb2dsZUZvbnRMaW5rcyA9IEFycmF5LmZyb20obGlua0VsZW1lbnRzKS5maWx0ZXIoKGxpbmspID0+IGxpbmsuaHJlZi5pbmNsdWRlcygnZm9udHMuZ29vZ2xlYXBpcy5jb20nKSlcclxuXHJcblx0cmV0dXJuIGdvb2dsZUZvbnRMaW5rc1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZUV4aXN0aW5nR29vZ2xlRm9udExpbmtzKCkge1xyXG5cdGxldCBnb29nbGVGb250TGlua3MgPSBnZXRBbGxHb29nbGVGb250TGlua3MoKVxyXG5cdC8vIFJlbW92ZSBhbGwgZXhpc3RpbmcgR29vZ2xlIEZvbnQgbGlua3NcclxuXHRnb29nbGVGb250TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG5cdFx0bGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspXHJcblx0fSlcclxufVxyXG4vKiBmdW5jdGlvbiBpc0xpbmtBbHJlYWR5SW5qZWN0ZWQoaHJlZikge1xyXG5cdGxldCBnb29nbGVGb250TGlua3MgPSBnZXRBbGxHb29nbGVGb250TGlua3MoKVxyXG5cclxuXHRjb25zb2xlLmxvZygnaXNMaW5rQWxyZWFkeUluamVjdGVkKCknKVxyXG5cclxuXHRpZiAoIWdvb2dsZUZvbnRMaW5rcykgcmV0dXJuIGZhbHNlXHJcblxyXG5cdGZvciAobGV0IGxpbmsgb2YgZ29vZ2xlRm9udExpbmtzKSB7XHJcblx0XHRjb25zb2xlLmxvZygnbGluay5ocmVmOicsIGxpbmsuaHJlZilcclxuXHRcdGNvbnNvbGUubG9nKCdocmVmOicsIGhyZWYpXHJcblxyXG5cdFx0aWYgKGxpbmsuaHJlZiA9PT0gaHJlZikge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTGluayBpbmplY3RlZCBhbHJlYWR5JylcclxuXHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlXHJcbn0gKi9cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBhcHBseUZvbnQoKSB7XHJcbi8vIFx0Y29uc3QgZm9udEZhbWlseSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb250RmFtaWx5JykudmFsdWVcclxuLy8gXHRsZXQgZm9udFNpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9udFNpemUnKS52YWx1ZVxyXG5cclxuLy8gXHRjb25zb2xlLmxvZygnYXBwbHlGb250KCknLCBmb250RmFtaWx5LCBmb250U2l6ZSlcclxuXHJcbi8vIFx0Ly8gQ3JlYXRlIHRoZSA8bGluaz4gaW4gPGhlYWQ+IHdoaWNoIHdpbGwgZmV0Y2ggdGhlIHNlbGVjdGVkIGZvbnQgZnJvbSBHb29nbGUgRm9udHNcclxuLy8gXHRjcmVhdGVBbmRJbmplY3RMaW5rRWxlbWVudChmb250RmFtaWx5KVxyXG5cclxuLy8gXHQvLyBBcHBseSBDU1MgdmFyaWFibGVzXHJcbi8vIFx0c2V0Q1NTVmFyaWFibGVzKHsgZm9udEZhbWlseSwgZm9udFNpemUgfSlcclxuXHJcbi8vIFx0Ly8gU2F2ZSBzZXR0aW5ncyB0byBjaHJvbWUuc3RvcmFnZVxyXG4vLyBcdHNldEZvbnRzVG9TdG9yYWdlKHsgZm9udEZhbWlseSwgZm9udFNpemUgfSlcclxuLy8gfVxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRGb250KCkge1xyXG5cdC8vIFJlc2V0IENTUyB2YXJpYWJsZXMgdG8gZGVmYXVsdCB2YWx1ZXNcclxuXHRzZXRDU1NWYXJpYWJsZXMoeyBmb250RmFtaWx5OiBkZWZhdWx0Rm9udEZhbWlseSwgZm9udFNpemU6ICcxNicgfSlcclxuXHJcblx0Ly8gUmVzZXQgaW5wdXQgZmllbGRzIHRvIGRlZmF1bHQgdmFsdWVzXHJcblx0c2V0SW5wdXRGaWVsZHMoeyBmb250RmFtaWx5OiAnRGVmYXVsdCcsIGZvbnRTaXplOiAnMTYnIH0pXHJcblxyXG5cdC8vIFJlbW92ZSBjdXN0b20gZm9udCBsaW5rIGZyb20gdGhlIGhlYWRcclxuXHRyZW1vdmVFeGlzdGluZ0dvb2dsZUZvbnRMaW5rcygpXHJcblxyXG5cdC8vIFJlbW92ZSBjdXN0b20gZm9udCBzZXR0aW5ncyBmcm9tIGNocm9tZS5zdG9yYWdlXHJcblx0cmVtb3ZlRm9udHNGcm9tU3RvcmFnZSgpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0VG9EZWZhdWx0cygpIHtcclxuXHQvLyBSZXNldCBDU1MgdmFyaWFibGVzIHRvIGRlZmF1bHQgdmFsdWVzXHJcblx0c2V0Q1NTVmFyKHsgdmFyTmFtZTogJy0tZi1mYW1pbHknLCB2YXJWYWx1ZTogZGVmYXVsdEZvbnRGYW1pbHkgfSlcclxuXHRzZXRDU1NWYXIoeyB2YXJOYW1lOiAnLS1mLXNpemUnLCB2YXJWYWx1ZTogYCR7cHhUb1JlbShkZWZhdWx0Rm9udFNpemUpfWAgfSlcclxuXHRzZXRDU1NWYXIoeyB2YXJOYW1lOiAnLS1mLWxldHRlci1zcGFjaW5nJywgdmFyVmFsdWU6IGAke2RlZmF1bHRMZXR0ZXJTcGFjaW5nfXB4YCB9KVxyXG5cdHNldENTU1Zhcih7IHZhck5hbWU6ICctLWYtbGluZS1oZWlnaHQnLCB2YXJWYWx1ZTogZGVmYXVsdExpbmVIZWlnaHQgfSlcclxuXHJcblx0Ly8gUmVzZXQgaW5wdXQgZmllbGRzIHRvIGRlZmF1bHQgdmFsdWVzXHJcblx0c2V0SW5wdXRGaWVsZCh7IGlucHV0U2VsZWN0b3I6ICcjZm9udEZhbWlseScsIGlucHV0VmFsOiAnRGVmYXVsdCcgfSlcclxuXHRzZXRJbnB1dEZpZWxkKHsgaW5wdXRTZWxlY3RvcjogJyNmb250U2l6ZScsIGlucHV0VmFsOiBkZWZhdWx0Rm9udFNpemUgfSlcclxuXHRzZXRJbnB1dEZpZWxkKHsgaW5wdXRTZWxlY3RvcjogJyNsZXR0ZXJTcGFjaW5nJywgaW5wdXRWYWw6IGRlZmF1bHRMZXR0ZXJTcGFjaW5nIH0pXHJcblx0c2V0SW5wdXRGaWVsZCh7IGlucHV0U2VsZWN0b3I6ICcjbGluZUhlaWdodCcsIGlucHV0VmFsOiBkZWZhdWx0TGluZUhlaWdodCB9KVxyXG5cclxuXHQvLyBSZW1vdmUgY3VzdG9tIGZvbnQgbGluayBmcm9tIHRoZSBoZWFkXHJcblx0cmVtb3ZlRXhpc3RpbmdHb29nbGVGb250TGlua3MoKVxyXG5cclxuXHQvLyBSZW1vdmUgY3VzdG9tIGZvbnQgc2V0dGluZ3MgZnJvbSBjaHJvbWUuc3RvcmFnZVxyXG5cdHJlbW92ZUZvbnRzRnJvbVN0b3JhZ2UoKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlGb250RmFtaWx5KGUpIHtcclxuXHRjb25zdCBmb250RmFtaWx5ID0gZS50YXJnZXQudmFsdWVcclxuXHJcblx0Ly8gQ3JlYXRlIHRoZSA8bGluaz4gaW4gPGhlYWQ+IHdoaWNoIHdpbGwgZmV0Y2ggdGhlIHNlbGVjdGVkIGZvbnQgZnJvbSBHb29nbGUgRm9udHNcclxuXHRjcmVhdGVBbmRJbmplY3RMaW5rRWxlbWVudChmb250RmFtaWx5KVxyXG5cclxuXHQvLyBBcHBseSBDU1MgdmFyaWFibGVzXHJcblx0c2V0Q1NTVmFyKHsgdmFyTmFtZTogJy0tZi1mYW1pbHknLCB2YXJWYWx1ZTogZm9udEZhbWlseSB9KVxyXG5cclxuXHQvLyBTYXZlIHNldHRpbmdzIHRvIGNocm9tZS5zdG9yYWdlXHJcblx0c2V0UHJvcFRvU3RvcmFnZSh7IHByb3BOYW1lOiAnZm9udEZhbWlseScsIHByb3BWYWw6IGZvbnRGYW1pbHkgfSlcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlGb250U2l6ZShlKSB7XHJcblx0Y29uc29sZS5sb2coJ2FwcGx5Rm9udFNpemUoKScsIGUudGFyZ2V0LnZhbHVlKVxyXG5cdGNvbnN0IGZvbnRTaXplID0gZS50YXJnZXQudmFsdWVcclxuXHJcblx0Ly8gQXBwbHkgQ1NTIHZhcmlhYmxlc1xyXG5cdHNldENTU1Zhcih7IHZhck5hbWU6ICctLWYtc2l6ZScsIHZhclZhbHVlOiBgJHtweFRvUmVtKGZvbnRTaXplKX1gIH0pXHJcblxyXG5cdC8vIFNhdmUgc2V0dGluZ3MgdG8gY2hyb21lLnN0b3JhZ2VcclxuXHRzZXRQcm9wVG9TdG9yYWdlKHsgcHJvcE5hbWU6ICdmb250U2l6ZScsIHByb3BWYWw6IGZvbnRTaXplIH0pXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TGV0dGVyU3BhY2luZyhlKSB7XHJcblx0Y29uc29sZS5sb2coJ2FwcGx5TGV0dGVyU3BhY2luZygpJywgZS50YXJnZXQudmFsdWUpXHJcblx0Y29uc3QgbGV0dGVyU3BhY2luZyA9IGUudGFyZ2V0LnZhbHVlXHJcblxyXG5cdC8vIEFwcGx5IENTUyB2YXJpYWJsZXNcclxuXHRzZXRDU1NWYXIoeyB2YXJOYW1lOiAnLS1mLWxldHRlci1zcGFjaW5nJywgdmFyVmFsdWU6IGAke2xldHRlclNwYWNpbmd9cHhgIH0pXHJcblxyXG5cdC8vIFNhdmUgc2V0dGluZ3MgdG8gY2hyb21lLnN0b3JhZ2VcclxuXHRzZXRQcm9wVG9TdG9yYWdlKHsgcHJvcE5hbWU6ICdsZXR0ZXJTcGFjaW5nJywgcHJvcFZhbDogbGV0dGVyU3BhY2luZyB9KVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseUxpbmVIZWlnaHQoZSkge1xyXG5cdGNvbnNvbGUubG9nKCdhcHBseUxpbmVIZWlnaHQoKScsIGUudGFyZ2V0LnZhbHVlKVxyXG5cdGNvbnN0IGxpbmVIZWlnaHQgPSBlLnRhcmdldC52YWx1ZVxyXG5cclxuXHQvLyBBcHBseSBDU1MgdmFyaWFibGVzXHJcblx0c2V0Q1NTVmFyKHsgdmFyTmFtZTogJy0tZi1saW5lLWhlaWdodCcsIHZhclZhbHVlOiBsaW5lSGVpZ2h0IH0pXHJcblxyXG5cdC8vIFNhdmUgc2V0dGluZ3MgdG8gY2hyb21lLnN0b3JhZ2VcclxuXHRzZXRQcm9wVG9TdG9yYWdlKHsgcHJvcE5hbWU6ICdsaW5lSGVpZ2h0JywgcHJvcFZhbDogbGluZUhlaWdodCB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0Rm9udHMoKSB7XHJcblx0Z2V0Rm9udHNGcm9tU3RvcmFnZSgpXHJcbn1cclxuXHJcbi8vIEluaXRcclxuaW5pdEZvbnRzKClcclxuXHJcbi8qICR7cmVuZGVyRm9udCh7XHJcblx0bmFtZTogJ0xldHRlciBTcGFjaW5nJyxcclxuXHRjbGFzc05hbWU6ICdmb250c19fbGV0dGVyU3BhY2luZycsXHJcblx0aW5wdXRJZDogJ2xldHRlclNwYWNpbmcnLFxyXG5cdGlucHV0VHlwZTogJ251bWJlcicsXHJcblx0aW5wdXRWYWx1ZTogJzEnLFxyXG5cdGlucHV0UGxhY2Vob2xkZXI6ICcxcHgnLFxyXG59KX1cclxuJHtyZW5kZXJGb250KHtcclxuXHRuYW1lOiAnTGluZSBIZWlnaHQnLFxyXG5cdGNsYXNzTmFtZTogJ2ZvbnRzX19saW5lSGVpZ2h0JyxcclxuXHRpbnB1dElkOiAnbGluZUhlaWdodCcsXHJcblx0aW5wdXRUeXBlOiAnbnVtYmVyJyxcclxuXHRpbnB1dFZhbHVlOiAnMS41JyxcclxuXHRpbnB1dFBsYWNlaG9sZGVyOiAnMS41JyxcclxufSl9ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRGb250c0V2ZW50SGFuZGxlcnMoKSB7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdwdGgtc2V0dGluZ3MgI2ZvbnRGYW1pbHknKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBhcHBseUZvbnRGYW1pbHkpXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdwdGgtc2V0dGluZ3MgI2ZvbnRTaXplJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBhcHBseUZvbnRTaXplKVxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoLXNldHRpbmdzICNsZXR0ZXJTcGFjaW5nJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBhcHBseUxldHRlclNwYWNpbmcpXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdwdGgtc2V0dGluZ3MgI2xpbmVIZWlnaHQnKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGFwcGx5TGluZUhlaWdodClcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aC1zZXR0aW5ncyAjcmVzZXRGb250JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldFRvRGVmYXVsdHMpXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHB4VG9SZW0gPSAocHgpID0+IGAke3B4IC8gMTZ9cmVtYFxyXG5leHBvcnQgY29uc3QgcmVtVG9QeCA9IChyZW0pID0+IGAke3JlbSAqIDE2fXB4YFxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyRm9udCh7IG5hbWUsIGNsYXNzTmFtZSwgaW5wdXRJZCwgaW5wdXRUeXBlLCBpbnB1dFZhbHVlLCBpbnB1dFBsYWNlaG9sZGVyIH0pIHtcclxuXHRyZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCIke2NsYXNzTmFtZX0gdGV4dC14cyBtYi0yIGZsZXggZmxleC1jb2wgZmxleC0xXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCIke2lucHV0SWR9XCIgY2xhc3M9XCJ1cHBlcmNhc2UgdGV4dC14cyBtYi0xIGZvbnQtc2VtaWJvbGRcIj4ke25hbWV9ICR7XHJcblx0XHRpbnB1dElkID09PSAnZm9udFNpemUnID8gJyg8Y29kZSBjbGFzcz1cInRleHQteHNcIj5weDwvY29kZT4pJyA6ICcnXHJcblx0fTo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIiR7aW5wdXRUeXBlfVwiIGlkPVwiJHtpbnB1dElkfVwiIHZhbHVlPVwiJHtpbnB1dFZhbHVlfVwiIHBsYWNlaG9sZGVyPVwiJHtpbnB1dFBsYWNlaG9sZGVyfVwiIGNsYXNzPVwiYmctdG9rZW4tc2lkZWJhci1zdXJmYWNlLXNlY29uZGFyeSByb3VuZGVkLWxnIG91dGxpbmUtbm9uZSBib3JkZXItbm9uZSBwLTNcIj5cclxuICAgICAgICA8L2Rpdj5gXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCdXR0b24oeyBuYW1lLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBkaXNhYmxlZCA9IGZhbHNlIH0pIHtcclxuXHRyZXR1cm4gYFxyXG4gICAgICAgIDxidXR0b24gaWQ9XCIke2lkfVwiIGNsYXNzPVwiYnRuIGJsb2NrIHJlbGF0aXZlIHRleHQtY2VudGVyICR7Y2xhc3NOYW1lfVwiICR7ZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJyd9PlxyXG4gICAgICAgICAgICAke2NvbnRlbnR9XHJcbiAgICAgICAgPC9idXR0b24+YFxyXG59XHJcbiJdLCJuYW1lcyI6WyJnbG9iYWxUaGlzIiwiY2hyb21lIiwicnVudGltZSIsImlkIiwiRXJyb3IiLCJicm93c2VyIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UiLCJ3cmFwQVBJcyIsImV4dGVuc2lvbkFQSXMiLCJhcGlNZXRhZGF0YSIsImtleXMiLCJsZW5ndGgiLCJEZWZhdWx0V2Vha01hcCIsIldlYWtNYXAiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZUl0ZW0iLCJpdGVtcyIsInVuZGVmaW5lZCIsImdldCIsImtleSIsImhhcyIsInNldCIsImlzVGhlbmFibGUiLCJ2YWx1ZSIsInRoZW4iLCJtYWtlQ2FsbGJhY2siLCJwcm9taXNlIiwibWV0YWRhdGEiLCJjYWxsYmFja0FyZ3MiLCJsYXN0RXJyb3IiLCJyZWplY3QiLCJtZXNzYWdlIiwic2luZ2xlQ2FsbGJhY2tBcmciLCJyZXNvbHZlIiwicGx1cmFsaXplQXJndW1lbnRzIiwibnVtQXJncyIsIndyYXBBc3luY0Z1bmN0aW9uIiwibmFtZSIsImFzeW5jRnVuY3Rpb25XcmFwcGVyIiwidGFyZ2V0IiwiYXJncyIsIm1pbkFyZ3MiLCJtYXhBcmdzIiwiUHJvbWlzZSIsImZhbGxiYWNrVG9Ob0NhbGxiYWNrIiwiY2JFcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwibm9DYWxsYmFjayIsIndyYXBNZXRob2QiLCJtZXRob2QiLCJ3cmFwcGVyIiwiUHJveHkiLCJhcHBseSIsInRhcmdldE1ldGhvZCIsInRoaXNPYmoiLCJjYWxsIiwiaGFzT3duUHJvcGVydHkiLCJGdW5jdGlvbiIsImJpbmQiLCJ3cmFwT2JqZWN0Iiwid3JhcHBlcnMiLCJjYWNoZSIsImNyZWF0ZSIsImhhbmRsZXJzIiwicHJveHlUYXJnZXQiLCJwcm9wIiwicmVjZWl2ZXIiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJkZXNjIiwiUmVmbGVjdCIsImRlbGV0ZVByb3BlcnR5Iiwid3JhcEV2ZW50Iiwid3JhcHBlck1hcCIsImFkZExpc3RlbmVyIiwibGlzdGVuZXIiLCJoYXNMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwib25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyIsIm9uUmVxdWVzdEZpbmlzaGVkIiwicmVxIiwid3JhcHBlZFJlcSIsImdldENvbnRlbnQiLCJvbk1lc3NhZ2VXcmFwcGVycyIsIm9uTWVzc2FnZSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImRpZENhbGxTZW5kUmVzcG9uc2UiLCJ3cmFwcGVkU2VuZFJlc3BvbnNlIiwic2VuZFJlc3BvbnNlUHJvbWlzZSIsInJlc3BvbnNlIiwicmVzdWx0IiwiZXJyIiwiaXNSZXN1bHRUaGVuYWJsZSIsInNlbmRQcm9taXNlZFJlc3VsdCIsIm1zZyIsImVycm9yIiwiX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fIiwiY2F0Y2giLCJ3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayIsInJlcGx5Iiwid3JhcHBlZFNlbmRNZXNzYWdlIiwiYXBpTmFtZXNwYWNlT2JqIiwid3JhcHBlZENiIiwicHVzaCIsInNlbmRNZXNzYWdlIiwic3RhdGljV3JhcHBlcnMiLCJkZXZ0b29scyIsIm5ldHdvcmsiLCJvbk1lc3NhZ2VFeHRlcm5hbCIsInRhYnMiLCJzZXR0aW5nTWV0YWRhdGEiLCJjbGVhciIsInByaXZhY3kiLCJzZXJ2aWNlcyIsIndlYnNpdGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC4xMjczMDY0Ny5qcy5tYXAifQ==
