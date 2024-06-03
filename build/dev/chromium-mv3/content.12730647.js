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
parcelHelpers.export(exports, "resetToDefaults", ()=>resetToDefaults);
parcelHelpers.export(exports, "applyFontFamily", ()=>applyFontFamily);
parcelHelpers.export(exports, "applyFontSize", ()=>applyFontSize);
parcelHelpers.export(exports, "applyLineHeight", ()=>applyLineHeight);
parcelHelpers.export(exports, "applyLetterSpacing", ()=>applyLetterSpacing);
parcelHelpers.export(exports, "addFontsEventHandlers", ()=>addFontsEventHandlers);
var _webextensionPolyfill = require("webextension-polyfill");
var _webextensionPolyfillDefault = parcelHelpers.interopDefault(_webextensionPolyfill);
var _fontsConverting = require("../utils/fontsConverting");
var _renderFonts = require("./components/renderFonts");
const defaultFontFamily = getComputedStyle(document.documentElement).getPropertyValue("--f-family-default");
const defaultFontSize = "16";
const defaultLetterSpacing = "0";
const defaultLineHeight = 28;
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
let onFocusValFontSize = null, onFocusValLineHeight = null, onFocusValLetterSpacing = null;
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
							${fontNames.map((name)=>`<option value="${name === "Default" ? defaultFontFamily : name}">${name}</option>`).join("")}
					</select>
				</label>
			</div>

			${(0, _renderFonts.renderFontBigCards)({
    name: "Font Size",
    className: "fonts__size",
    inputId: "fontSize",
    inputType: "number",
    inputValue: defaultFontSize,
    inputPlaceholder: defaultFontSize,
    unit: "px",
    min: 12,
    max: 24
})}
			${(0, _renderFonts.renderFont)({
    name: "Line Height",
    className: "fonts__lineHeight",
    inputId: "lineHeight",
    inputType: "number",
    inputValue: defaultLineHeight,
    inputPlaceholder: defaultLineHeight,
    unit: "px",
    min: 12,
    max: 60
})}
			${(0, _renderFonts.renderFont)({
    name: "Letter Spacing",
    className: "fonts__letterSpacing",
    inputId: "letterSpacing",
    inputType: "number",
    inputValue: defaultLetterSpacing,
    inputPlaceholder: defaultLetterSpacing,
    unit: "px",
    min: -30,
    max: 30
})}
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
function setCSSVar({ varName, varValue }) {
    document.documentElement.style.setProperty(varName, varValue);
}
function setInputField({ inputSelector, inputVal }) {
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
    const fontSize = formatNumber(e.target.value, 4);
    onFocusValFontSize = formatNumber(onFocusValFontSize, 4);
    console.log("applyFontSize()", fontSize);
    console.log("applyFontSize()", onFocusValFontSize);
    setInputField({
        inputSelector: "#fontSize",
        inputVal: fontSize
    });
    if (onFocusValFontSize == fontSize) return console.log("onFocusValFontSize()", onFocusValFontSize);
    let isValid = validateInputField({
        inputValue: fontSize,
        min: 12,
        max: 24
    });
    if (!isValid) {
        // e.target.addEventListener('blur', () => {
        setInputField({
            inputSelector: "#fontSize",
            inputVal: defaultFontSize
        });
        // Apply CSS variables
        setCSSVar({
            varName: "--f-size",
            varValue: `${(0, _fontsConverting.pxToRem)(defaultFontSize)}`
        });
        // Save settings to chrome.storage
        setPropToStorage({
            propName: "fontSize",
            propVal: defaultFontSize
        });
        // })
        return;
    }
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
function applyLineHeight(e) {
    const lineHeight = formatNumber(e.target.value);
    onFocusValLineHeight = formatNumber(onFocusValLineHeight);
    console.log("applyLineHeight()", lineHeight, onFocusValLineHeight);
    setInputField({
        inputSelector: "#lineHeight",
        inputVal: lineHeight
    });
    if (onFocusValLineHeight == lineHeight) return;
    let isValid = validateInputField({
        inputValue: lineHeight,
        min: 12,
        max: 60
    });
    if (!isValid) {
        setInputField({
            inputSelector: "#lineHeight",
            inputVal: defaultLineHeight
        });
        // Apply CSS variables
        setCSSVar({
            varName: "--f-line-height",
            varValue: defaultLineHeight
        });
        // Save settings to chrome.storage
        setPropToStorage({
            propName: "lineHeight",
            propVal: defaultLineHeight
        });
        return;
    }
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
function applyLetterSpacing(e) {
    // const letterSpacing = formatNumber(e.target.value)
    const letterSpacing = formatNumber(e.target.value);
    onFocusValLetterSpacing = formatNumber(onFocusValLetterSpacing);
    console.log("applyLetterSpacing()", letterSpacing, onFocusValLetterSpacing);
    setInputField({
        inputSelector: "#letterSpacing",
        inputVal: letterSpacing
    });
    if (formatNumber(onFocusValLetterSpacing) == letterSpacing) return;
    let isValid = validateInputField({
        inputValue: letterSpacing,
        min: -30,
        max: 30
    });
    if (!isValid) {
        setInputField({
            inputSelector: "#letterSpacing",
            inputVal: defaultLetterSpacing
        });
        // Apply CSS variables
        setCSSVar({
            varName: "--f-letter-spacing",
            varValue: `${defaultLetterSpacing}px`
        });
        // Save settings to chrome.storage
        setPropToStorage({
            propName: "letterSpacing",
            propVal: defaultLetterSpacing
        });
        return;
    }
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
function addFontsEventHandlers() {
    document.querySelector(".gpth-settings #resetFont").addEventListener("click", resetToDefaults);
    document.querySelector(".gpth-settings #fontFamily").addEventListener("change", applyFontFamily);
    document.querySelector(".gpth-settings #fontSize").addEventListener("blur", applyFontSize);
    document.querySelector(".gpth-settings #lineHeight").addEventListener("blur", applyLineHeight);
    document.querySelector(".gpth-settings #letterSpacing").addEventListener("blur", applyLetterSpacing);
    document.querySelector(".gpth-settings #fontSize").addEventListener("focus", (e)=>{
        onFocusValFontSize = e.target.value;
    });
    document.querySelector(".gpth-settings #lineHeight").addEventListener("focus", (e)=>{
        onFocusValLineHeight = e.target.value;
    });
    document.querySelector(".gpth-settings #letterSpacing").addEventListener("focus", (e)=>{
        onFocusValLetterSpacing = e.target.value;
    });
}
// function validateInputField({ inputField, min, max = 24, defaultVal = 16, cssVarName, propVal }) {
function validateInputField({ inputValue, min, max = 24 }) {
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
    errorMessage.className = "gpth-error-msg fixed rounded-xl bg-red-500 red-500 p-3 font-semibold";
    errorMessage.textContent = message;
    document.body.appendChild(errorMessage);
    // Remove the error message after 4 seconds
    setTimeout(()=>{
        errorMessage.remove();
    }, 4000);
}
/* function formatNumber(inputVal) {
	// Remove leading zeros from the integer part
	inputVal = inputVal.replace(/^0+(?=\d*\.)/, '')
	// Remove trailing zeros from the decimal part
	inputVal = inputVal.replace(/\.?0+$/, '')
	// Parse the input as a number and return it
	return parseFloat(inputVal)
} */ function formatNumber(inputVal, toFixedNum = 2) {
    // Remove leading zeros from the integer part
    inputVal = inputVal.replace(/^0+(?=\d*\.)/, "");
    // Parse the input as a number and return it with 2 decimal places
    let formatted = parseFloat(inputVal).toFixed(toFixedNum);
    // Remove trailing zeros from the decimal part
    formatted = formatted.replace(/\.?0+$/, "");
    // Return the formatted number as a string
    return formatted;
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
const pxToRem = (px)=>`${px / 16}rem` // export const remToPx = (rem) => `${rem * 16}px`
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4IpBY"}],"hOcoo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderFont", ()=>renderFont);
parcelHelpers.export(exports, "renderFontBigCards", ()=>renderFontBigCards);
parcelHelpers.export(exports, "renderButton", ()=>renderButton);
function renderFont({ name, className, inputId, inputType, inputValue, inputPlaceholder, min = 16, max = 24, unit = "px" }) {
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
function renderFontBigCards({ name, className, inputId, inputType, inputValue, inputPlaceholder, min = 0, max = 20, unit = "px" }) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVPLFNBQVMsYUFBYSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEtBQUssRUFBRTtJQUM5RSxPQUFPLENBQUM7b0JBQ1csRUFBRSxHQUFHLHdDQUF3QyxFQUFFLFVBQVUsRUFBRSxFQUFFLFdBQVcsYUFBYSxHQUFHO1lBQ2hHLEVBQUUsUUFBUTs7Q0FFckIsQ0FBQztBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWJyb3dzZXItaG1yL2xpYi9ydW50aW1lLWVmOTFhZjE4YjkyYzA3NDQuanMiLCJzcmMvanMvY29udGVudC5qcyIsInNyYy9qcy9hcHAvZmxvYXRpbmdCdG4uanMiLCJub2RlX21vZHVsZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2Rpc3QvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsInNyYy9qcy9hcHAvaWNvbnMuanMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInNyYy9qcy91dGlscy9oZXhUb0hTTC5qcyIsInNyYy9qcy9hcHAvY3VzdG9tRm9udHMuanMiLCJzcmMvanMvdXRpbHMvZm9udHNDb252ZXJ0aW5nLmpzIiwic3JjL2pzL2FwcC9jb21wb25lbnRzL3JlbmRlckZvbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBITVJfSE9TVCA9IFwibG9jYWxob3N0XCI7dmFyIEhNUl9QT1JUID0gMTIzNDt2YXIgSE1SX1NFQ1VSRSA9IGZhbHNlO3ZhciBITVJfRU5WX0hBU0ggPSBcImRkZjZlMDcyNGJkMzU4YmRcIjt2YXIgSE1SX1VTRV9TU0UgPSBmYWxzZTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQgPSBcIjU5Yzk4ODdkMTI3MzA2NDdcIjtcInVzZSBzdHJpY3RcIjtcblxuLyogZ2xvYmFsIEhNUl9IT1NULCBITVJfUE9SVCwgSE1SX0VOVl9IQVNILCBITVJfU0VDVVJFLCBITVJfVVNFX1NTRSwgY2hyb21lLCBicm93c2VyLCBfX3BhcmNlbF9faW1wb3J0X18sIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX18sIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSAqL1xuLyo6OlxuaW1wb3J0IHR5cGUge1xuICBITVJBc3NldCxcbiAgSE1STWVzc2FnZSxcbn0gZnJvbSAnQHBhcmNlbC9yZXBvcnRlci1kZXYtc2VydmVyL3NyYy9ITVJTZXJ2ZXIuanMnO1xuaW50ZXJmYWNlIFBhcmNlbFJlcXVpcmUge1xuICAoc3RyaW5nKTogbWl4ZWQ7XG4gIGNhY2hlOiB7fFtzdHJpbmddOiBQYXJjZWxNb2R1bGV8fTtcbiAgaG90RGF0YToge3xbc3RyaW5nXTogbWl4ZWR8fTtcbiAgTW9kdWxlOiBhbnk7XG4gIHBhcmVudDogP1BhcmNlbFJlcXVpcmU7XG4gIGlzUGFyY2VsUmVxdWlyZTogdHJ1ZTtcbiAgbW9kdWxlczoge3xbc3RyaW5nXTogW0Z1bmN0aW9uLCB7fFtzdHJpbmddOiBzdHJpbmd8fV18fTtcbiAgSE1SX0JVTkRMRV9JRDogc3RyaW5nO1xuICByb290OiBQYXJjZWxSZXF1aXJlO1xufVxuaW50ZXJmYWNlIFBhcmNlbE1vZHVsZSB7XG4gIGhvdDoge3xcbiAgICBkYXRhOiBtaXhlZCxcbiAgICBhY2NlcHQoY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgZGlzcG9zZShjYjogKG1peGVkKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBhY2NlcHQoZGVwczogQXJyYXk8c3RyaW5nPiB8IHN0cmluZywgY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gZGVjbGluZSgpOiB2b2lkLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IEFycmF5PChGdW5jdGlvbikgPT4gdm9pZD4sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IEFycmF5PChtaXhlZCkgPT4gdm9pZD4sXG4gIHx9O1xufVxuaW50ZXJmYWNlIEV4dGVuc2lvbkNvbnRleHQge1xuICBydW50aW1lOiB7fFxuICAgIHJlbG9hZCgpOiB2b2lkLFxuICAgIGdldFVSTCh1cmw6IHN0cmluZyk6IHN0cmluZztcbiAgICBnZXRNYW5pZmVzdCgpOiB7bWFuaWZlc3RfdmVyc2lvbjogbnVtYmVyLCAuLi59O1xuICB8fTtcbn1cbmRlY2xhcmUgdmFyIG1vZHVsZToge2J1bmRsZTogUGFyY2VsUmVxdWlyZSwgLi4ufTtcbmRlY2xhcmUgdmFyIEhNUl9IT1NUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfUE9SVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX0VOVl9IQVNIOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfU0VDVVJFOiBib29sZWFuO1xuZGVjbGFyZSB2YXIgSE1SX1VTRV9TU0U6IGJvb2xlYW47XG5kZWNsYXJlIHZhciBjaHJvbWU6IEV4dGVuc2lvbkNvbnRleHQ7XG5kZWNsYXJlIHZhciBicm93c2VyOiBFeHRlbnNpb25Db250ZXh0O1xuZGVjbGFyZSB2YXIgX19wYXJjZWxfX2ltcG9ydF9fOiAoc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuZGVjbGFyZSB2YXIgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXzogKHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbmRlY2xhcmUgdmFyIGdsb2JhbFRoaXM6IHR5cGVvZiBzZWxmO1xuZGVjbGFyZSB2YXIgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlOiBPYmplY3Q7XG4qL1xudmFyIE9WRVJMQVlfSUQgPSAnX19wYXJjZWxfX2Vycm9yX19vdmVybGF5X18nO1xudmFyIE9sZE1vZHVsZSA9IG1vZHVsZS5idW5kbGUuTW9kdWxlO1xuZnVuY3Rpb24gTW9kdWxlKG1vZHVsZU5hbWUpIHtcbiAgT2xkTW9kdWxlLmNhbGwodGhpcywgbW9kdWxlTmFtZSk7XG4gIHRoaXMuaG90ID0ge1xuICAgIGRhdGE6IG1vZHVsZS5idW5kbGUuaG90RGF0YVttb2R1bGVOYW1lXSxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBbXSxcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogW10sXG4gICAgYWNjZXB0OiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHRoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKGZuIHx8IGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9LFxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uIChmbikge1xuICAgICAgdGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKGZuKTtcbiAgICB9XG4gIH07XG4gIG1vZHVsZS5idW5kbGUuaG90RGF0YVttb2R1bGVOYW1lXSA9IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5idW5kbGUuTW9kdWxlID0gTW9kdWxlO1xubW9kdWxlLmJ1bmRsZS5ob3REYXRhID0ge307XG52YXIgY2hlY2tlZEFzc2V0cyAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovLCBhc3NldHNUb0Rpc3Bvc2UgLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqLywgYXNzZXRzVG9BY2NlcHQgLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqLztcblxuZnVuY3Rpb24gZ2V0SG9zdG5hbWUoKSB7XG4gIHJldHVybiBITVJfSE9TVCB8fCAobG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZignaHR0cCcpID09PSAwID8gbG9jYXRpb24uaG9zdG5hbWUgOiAnbG9jYWxob3N0Jyk7XG59XG5mdW5jdGlvbiBnZXRQb3J0KCkge1xuICByZXR1cm4gSE1SX1BPUlQgfHwgbG9jYXRpb24ucG9ydDtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxudmFyIHBhcmVudCA9IG1vZHVsZS5idW5kbGUucGFyZW50O1xuaWYgKCghcGFyZW50IHx8ICFwYXJlbnQuaXNQYXJjZWxSZXF1aXJlKSAmJiB0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICB2YXIgcG9ydCA9IGdldFBvcnQoKTtcbiAgdmFyIHByb3RvY29sID0gSE1SX1NFQ1VSRSB8fCBsb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cHM6JyAmJiAhWydsb2NhbGhvc3QnLCAnMTI3LjAuMC4xJywgJzAuMC4wLjAnXS5pbmNsdWRlcyhob3N0bmFtZSkgPyAnd3NzJyA6ICd3cyc7XG4gIHZhciB3cztcbiAgaWYgKEhNUl9VU0VfU1NFKSB7XG4gICAgd3MgPSBuZXcgRXZlbnRTb3VyY2UoJy9fX3BhcmNlbF9obXInKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgd3MgPSBuZXcgV2ViU29ja2V0KHByb3RvY29sICsgJzovLycgKyBob3N0bmFtZSArIChwb3J0ID8gJzonICsgcG9ydCA6ICcnKSArICcvJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB3cyA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIC8vIFdlYiBleHRlbnNpb24gY29udGV4dFxuICB2YXIgZXh0Q3R4ID0gdHlwZW9mIGJyb3dzZXIgPT09ICd1bmRlZmluZWQnID8gdHlwZW9mIGNocm9tZSA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogY2hyb21lIDogYnJvd3NlcjtcblxuICAvLyBTYWZhcmkgZG9lc24ndCBzdXBwb3J0IHNvdXJjZVVSTCBpbiBlcnJvciBzdGFja3MuXG4gIC8vIGV2YWwgbWF5IGFsc28gYmUgZGlzYWJsZWQgdmlhIENTUCwgc28gZG8gYSBxdWljayBjaGVjay5cbiAgdmFyIHN1cHBvcnRzU291cmNlVVJMID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgKDAsIGV2YWwpKCd0aHJvdyBuZXcgRXJyb3IoXCJ0ZXN0XCIpOyAvLyMgc291cmNlVVJMPXRlc3QuanMnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgc3VwcG9ydHNTb3VyY2VVUkwgPSBlcnIuc3RhY2suaW5jbHVkZXMoJ3Rlc3QuanMnKTtcbiAgfVxuXG4gIC8vICRGbG93Rml4TWVcbiAgd3Mub25tZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50IC8qOiB7ZGF0YTogc3RyaW5nLCAuLi59ICovKSB7XG4gICAgY2hlY2tlZEFzc2V0cyA9IHt9IC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi87XG4gICAgYXNzZXRzVG9BY2NlcHQgPSBbXTtcbiAgICBhc3NldHNUb0Rpc3Bvc2UgPSBbXTtcbiAgICB2YXIgZGF0YSAvKjogSE1STWVzc2FnZSAqLyA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgIC8vIFJlbW92ZSBlcnJvciBvdmVybGF5IGlmIHRoZXJlIGlzIG9uZVxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgICB9XG4gICAgICBsZXQgYXNzZXRzID0gZGF0YS5hc3NldHMuZmlsdGVyKGFzc2V0ID0+IGFzc2V0LmVudkhhc2ggPT09IEhNUl9FTlZfSEFTSCk7XG5cbiAgICAgIC8vIEhhbmRsZSBITVIgVXBkYXRlXG4gICAgICBsZXQgaGFuZGxlZCA9IGFzc2V0cy5ldmVyeShhc3NldCA9PiB7XG4gICAgICAgIHJldHVybiBhc3NldC50eXBlID09PSAnY3NzJyB8fCBhc3NldC50eXBlID09PSAnanMnICYmIGhtckFjY2VwdENoZWNrKG1vZHVsZS5idW5kbGUucm9vdCwgYXNzZXQuaWQsIGFzc2V0LmRlcHNCeUJ1bmRsZSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcblxuICAgICAgICAvLyBEaXNwYXRjaCBjdXN0b20gZXZlbnQgc28gb3RoZXIgcnVudGltZXMgKGUuZyBSZWFjdCBSZWZyZXNoKSBhcmUgYXdhcmUuXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQ3VzdG9tRXZlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdwYXJjZWxobXJhY2NlcHQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgaG1yQXBwbHlVcGRhdGVzKGFzc2V0cyk7XG5cbiAgICAgICAgLy8gRGlzcG9zZSBhbGwgb2xkIGFzc2V0cy5cbiAgICAgICAgbGV0IHByb2Nlc3NlZEFzc2V0cyA9IHt9IC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi87XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzVG9EaXNwb3NlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGlkID0gYXNzZXRzVG9EaXNwb3NlW2ldWzFdO1xuICAgICAgICAgIGlmICghcHJvY2Vzc2VkQXNzZXRzW2lkXSkge1xuICAgICAgICAgICAgaG1yRGlzcG9zZShhc3NldHNUb0Rpc3Bvc2VbaV1bMF0sIGlkKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJ1biBhY2NlcHQgY2FsbGJhY2tzLiBUaGlzIHdpbGwgYWxzbyByZS1leGVjdXRlIG90aGVyIGRpc3Bvc2VkIGFzc2V0cyBpbiB0b3BvbG9naWNhbCBvcmRlci5cbiAgICAgICAgcHJvY2Vzc2VkQXNzZXRzID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzVG9BY2NlcHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgaWQgPSBhc3NldHNUb0FjY2VwdFtpXVsxXTtcbiAgICAgICAgICBpZiAoIXByb2Nlc3NlZEFzc2V0c1tpZF0pIHtcbiAgICAgICAgICAgIGhtckFjY2VwdChhc3NldHNUb0FjY2VwdFtpXVswXSwgaWQpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkQXNzZXRzW2lkXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgZnVsbFJlbG9hZCgpO1xuICAgIH1cbiAgICBpZiAoZGF0YS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAvLyBMb2cgcGFyY2VsIGVycm9ycyB0byBjb25zb2xlXG4gICAgICBmb3IgKGxldCBhbnNpRGlhZ25vc3RpYyBvZiBkYXRhLmRpYWdub3N0aWNzLmFuc2kpIHtcbiAgICAgICAgbGV0IHN0YWNrID0gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lID8gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lIDogYW5zaURpYWdub3N0aWMuc3RhY2s7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ/CfmqggW3BhcmNlbF06ICcgKyBhbnNpRGlhZ25vc3RpYy5tZXNzYWdlICsgJ1xcbicgKyBzdGFjayArICdcXG5cXG4nICsgYW5zaURpYWdub3N0aWMuaGludHMuam9pbignXFxuJykpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gUmVuZGVyIHRoZSBmYW5jeSBodG1sIG92ZXJsYXlcbiAgICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgICAgIHZhciBvdmVybGF5ID0gY3JlYXRlRXJyb3JPdmVybGF5KGRhdGEuZGlhZ25vc3RpY3MuaHRtbCk7XG4gICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGlmICh3cyBpbnN0YW5jZW9mIFdlYlNvY2tldCkge1xuICAgIHdzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUubWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3cy5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS53YXJuKCdbcGFyY2VsXSDwn5qoIENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgd2FzIGxvc3QnKTtcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiByZW1vdmVFcnJvck92ZXJsYXkoKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoT1ZFUkxBWV9JRCk7XG4gIGlmIChvdmVybGF5KSB7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZygnW3BhcmNlbF0g4pyoIEVycm9yIHJlc29sdmVkJyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yT3ZlcmxheShkaWFnbm9zdGljcykge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5LmlkID0gT1ZFUkxBWV9JRDtcbiAgbGV0IGVycm9ySFRNTCA9ICc8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogYmxhY2s7IG9wYWNpdHk6IDAuODU7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHdoaXRlOyBwb3NpdGlvbjogZml4ZWQ7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IHRvcDogMHB4OyBsZWZ0OiAwcHg7IHBhZGRpbmc6IDMwcHg7IGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTsgei1pbmRleDogOTk5OTtcIj4nO1xuICBmb3IgKGxldCBkaWFnbm9zdGljIG9mIGRpYWdub3N0aWNzKSB7XG4gICAgbGV0IHN0YWNrID0gZGlhZ25vc3RpYy5mcmFtZXMubGVuZ3RoID8gZGlhZ25vc3RpYy5mcmFtZXMucmVkdWNlKChwLCBmcmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIGAke3B9XG48YSBocmVmPVwiL19fcGFyY2VsX2xhdW5jaF9lZGl0b3I/ZmlsZT0ke2VuY29kZVVSSUNvbXBvbmVudChmcmFtZS5sb2NhdGlvbil9XCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgY29sb3I6ICM4ODhcIiBvbmNsaWNrPVwiZmV0Y2godGhpcy5ocmVmKTsgcmV0dXJuIGZhbHNlXCI+JHtmcmFtZS5sb2NhdGlvbn08L2E+XG4ke2ZyYW1lLmNvZGV9YDtcbiAgICB9LCAnJykgOiBkaWFnbm9zdGljLnN0YWNrO1xuICAgIGVycm9ySFRNTCArPSBgXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luLXRvcDogMjBweDtcIj5cbiAgICAgICAgICDwn5qoICR7ZGlhZ25vc3RpYy5tZXNzYWdlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHByZT4ke3N0YWNrfTwvcHJlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICR7ZGlhZ25vc3RpYy5oaW50cy5tYXAoaGludCA9PiAnPGRpdj7wn5KhICcgKyBoaW50ICsgJzwvZGl2PicpLmpvaW4oJycpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJHtkaWFnbm9zdGljLmRvY3VtZW50YXRpb24gPyBgPGRpdj7wn5OdIDxhIHN0eWxlPVwiY29sb3I6IHZpb2xldFwiIGhyZWY9XCIke2RpYWdub3N0aWMuZG9jdW1lbnRhdGlvbn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5MZWFybiBtb3JlPC9hPjwvZGl2PmAgOiAnJ31cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbiAgZXJyb3JIVE1MICs9ICc8L2Rpdj4nO1xuICBvdmVybGF5LmlubmVySFRNTCA9IGVycm9ySFRNTDtcbiAgcmV0dXJuIG92ZXJsYXk7XG59XG5mdW5jdGlvbiBmdWxsUmVsb2FkKCkge1xuICBpZiAoJ3JlbG9hZCcgaW4gbG9jYXRpb24pIHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSBlbHNlIGlmIChleHRDdHggJiYgZXh0Q3R4LnJ1bnRpbWUgJiYgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKSB7XG4gICAgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFBhcmVudHMoYnVuZGxlLCBpZCkgLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqL3tcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBwYXJlbnRzID0gW107XG4gIHZhciBrLCBkLCBkZXA7XG4gIGZvciAoayBpbiBtb2R1bGVzKSB7XG4gICAgZm9yIChkIGluIG1vZHVsZXNba11bMV0pIHtcbiAgICAgIGRlcCA9IG1vZHVsZXNba11bMV1bZF07XG4gICAgICBpZiAoZGVwID09PSBpZCB8fCBBcnJheS5pc0FycmF5KGRlcCkgJiYgZGVwW2RlcC5sZW5ndGggLSAxXSA9PT0gaWQpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKFtidW5kbGUsIGtdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBwYXJlbnRzID0gcGFyZW50cy5jb25jYXQoZ2V0UGFyZW50cyhidW5kbGUucGFyZW50LCBpZCkpO1xuICB9XG4gIHJldHVybiBwYXJlbnRzO1xufVxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rKSB7XG4gIHZhciBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgaWYgKCFocmVmKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuZXdMaW5rID0gbGluay5jbG9uZU5vZGUoKTtcbiAgbmV3TGluay5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxpbmsucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgIH1cbiAgfTtcbiAgbmV3TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLFxuICAvLyAkRmxvd0ZpeE1lXG4gIGhyZWYuc3BsaXQoJz8nKVswXSArICc/JyArIERhdGUubm93KCkpO1xuICAvLyAkRmxvd0ZpeE1lXG4gIGxpbmsucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3TGluaywgbGluay5uZXh0U2libGluZyk7XG59XG52YXIgY3NzVGltZW91dCA9IG51bGw7XG5mdW5jdGlvbiByZWxvYWRDU1MoKSB7XG4gIGlmIChjc3NUaW1lb3V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXVxuICAgICAgdmFyIGhyZWYgLyo6IHN0cmluZyAqLyA9IGxpbmtzW2ldLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbiAgICAgIHZhciBzZXJ2ZWRGcm9tSE1SU2VydmVyID0gaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnID8gbmV3IFJlZ0V4cCgnXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTonICsgZ2V0UG9ydCgpKS50ZXN0KGhyZWYpIDogaHJlZi5pbmRleE9mKGhvc3RuYW1lICsgJzonICsgZ2V0UG9ydCgpKTtcbiAgICAgIHZhciBhYnNvbHV0ZSA9IC9eaHR0cHM/OlxcL1xcLy9pLnRlc3QoaHJlZikgJiYgaHJlZi5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikgIT09IDAgJiYgIXNlcnZlZEZyb21ITVJTZXJ2ZXI7XG4gICAgICBpZiAoIWFic29sdXRlKSB7XG4gICAgICAgIHVwZGF0ZUxpbmsobGlua3NbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjc3NUaW1lb3V0ID0gbnVsbDtcbiAgfSwgNTApO1xufVxuZnVuY3Rpb24gaG1yRG93bmxvYWQoYXNzZXQpIHtcbiAgaWYgKGFzc2V0LnR5cGUgPT09ICdqcycpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LnNyYyA9IGFzc2V0LnVybCArICc/dD0nICsgRGF0ZS5ub3coKTtcbiAgICAgIGlmIChhc3NldC5vdXRwdXRGb3JtYXQgPT09ICdlc21vZHVsZScpIHtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnbW9kdWxlJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHZhciBfZG9jdW1lbnQkaGVhZDtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHJlc29sdmUoc2NyaXB0KTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIChfZG9jdW1lbnQkaGVhZCA9IGRvY3VtZW50LmhlYWQpID09PSBudWxsIHx8IF9kb2N1bWVudCRoZWFkID09PSB2b2lkIDAgfHwgX2RvY3VtZW50JGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFdvcmtlciBzY3JpcHRzXG4gICAgICBpZiAoYXNzZXQub3V0cHV0Rm9ybWF0ID09PSAnZXNtb2R1bGUnKSB7XG4gICAgICAgIHJldHVybiBfX3BhcmNlbF9faW1wb3J0X18oYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX18oYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5hc3luYyBmdW5jdGlvbiBobXJBcHBseVVwZGF0ZXMoYXNzZXRzKSB7XG4gIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBsZXQgc2NyaXB0c1RvUmVtb3ZlO1xuICB0cnkge1xuICAgIC8vIElmIHNvdXJjZVVSTCBjb21tZW50cyBhcmVuJ3Qgc3VwcG9ydGVkIGluIGV2YWwsIHdlIG5lZWQgdG8gbG9hZFxuICAgIC8vIHRoZSB1cGRhdGUgZnJvbSB0aGUgZGV2IHNlcnZlciBvdmVyIEhUVFAgc28gdGhhdCBzdGFjayB0cmFjZXNcbiAgICAvLyBhcmUgY29ycmVjdCBpbiBlcnJvcnMvbG9ncy4gVGhpcyBpcyBtdWNoIHNsb3dlciB0aGFuIGV2YWwsIHNvXG4gICAgLy8gd2Ugb25seSBkbyBpdCBpZiBuZWVkZWQgKGN1cnJlbnRseSBqdXN0IFNhZmFyaSkuXG4gICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNzI5N1xuICAgIC8vIFRoaXMgcGF0aCBpcyBhbHNvIHRha2VuIGlmIGEgQ1NQIGRpc2FsbG93cyBldmFsLlxuICAgIGlmICghc3VwcG9ydHNTb3VyY2VVUkwpIHtcbiAgICAgIGxldCBwcm9taXNlcyA9IGFzc2V0cy5tYXAoYXNzZXQgPT4ge1xuICAgICAgICB2YXIgX2htckRvd25sb2FkO1xuICAgICAgICByZXR1cm4gKF9obXJEb3dubG9hZCA9IGhtckRvd25sb2FkKGFzc2V0KSkgPT09IG51bGwgfHwgX2htckRvd25sb2FkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaG1yRG93bmxvYWQuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAvLyBXZWIgZXh0ZW5zaW9uIGZpeFxuICAgICAgICAgIGlmIChleHRDdHggJiYgZXh0Q3R4LnJ1bnRpbWUgJiYgZXh0Q3R4LnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5tYW5pZmVzdF92ZXJzaW9uID09IDMgJiYgdHlwZW9mIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSAhPSAndW5kZWZpbmVkJyAmJiBnbG9iYWwgaW5zdGFuY2VvZiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUpIHtcbiAgICAgICAgICAgIGV4dEN0eC5ydW50aW1lLnJlbG9hZCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBzY3JpcHRzVG9SZW1vdmUgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfVxuICAgIGFzc2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChhc3NldCkge1xuICAgICAgaG1yQXBwbHkobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldCk7XG4gICAgfSk7XG4gIH0gZmluYWxseSB7XG4gICAgZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGU7XG4gICAgaWYgKHNjcmlwdHNUb1JlbW92ZSkge1xuICAgICAgc2NyaXB0c1RvUmVtb3ZlLmZvckVhY2goc2NyaXB0ID0+IHtcbiAgICAgICAgaWYgKHNjcmlwdCkge1xuICAgICAgICAgIHZhciBfZG9jdW1lbnQkaGVhZDI7XG4gICAgICAgICAgKF9kb2N1bWVudCRoZWFkMiA9IGRvY3VtZW50LmhlYWQpID09PSBudWxsIHx8IF9kb2N1bWVudCRoZWFkMiA9PT0gdm9pZCAwIHx8IF9kb2N1bWVudCRoZWFkMi5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGhtckFwcGx5KGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgYXNzZXQgLyo6ICBITVJBc3NldCAqLykge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGFzc2V0LnR5cGUgPT09ICdjc3MnKSB7XG4gICAgcmVsb2FkQ1NTKCk7XG4gIH0gZWxzZSBpZiAoYXNzZXQudHlwZSA9PT0gJ2pzJykge1xuICAgIGxldCBkZXBzID0gYXNzZXQuZGVwc0J5QnVuZGxlW2J1bmRsZS5ITVJfQlVORExFX0lEXTtcbiAgICBpZiAoZGVwcykge1xuICAgICAgaWYgKG1vZHVsZXNbYXNzZXQuaWRdKSB7XG4gICAgICAgIC8vIFJlbW92ZSBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgcmVtb3ZlZCBhbmQgd2lsbCBiZWNvbWUgb3JwaGFuZWQuXG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHNvIHRoYXQgaWYgdGhlIGFzc2V0IGlzIGFkZGVkIGJhY2sgYWdhaW4sIHRoZSBjYWNoZSBpcyBnb25lLCBhbmQgd2UgcHJldmVudCBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gICAgICAgIGxldCBvbGREZXBzID0gbW9kdWxlc1thc3NldC5pZF1bMV07XG4gICAgICAgIGZvciAobGV0IGRlcCBpbiBvbGREZXBzKSB7XG4gICAgICAgICAgaWYgKCFkZXBzW2RlcF0gfHwgZGVwc1tkZXBdICE9PSBvbGREZXBzW2RlcF0pIHtcbiAgICAgICAgICAgIGxldCBpZCA9IG9sZERlcHNbZGVwXTtcbiAgICAgICAgICAgIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICBobXJEZWxldGUobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHNTb3VyY2VVUkwpIHtcbiAgICAgICAgLy8gR2xvYmFsIGV2YWwuIFdlIHdvdWxkIHVzZSBgbmV3IEZ1bmN0aW9uYCBoZXJlIGJ1dCBicm93c2VyXG4gICAgICAgIC8vIHN1cHBvcnQgZm9yIHNvdXJjZSBtYXBzIGlzIGJldHRlciB3aXRoIGV2YWwuXG4gICAgICAgICgwLCBldmFsKShhc3NldC5vdXRwdXQpO1xuICAgICAgfVxuXG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBsZXQgZm4gPSBnbG9iYWwucGFyY2VsSG90VXBkYXRlW2Fzc2V0LmlkXTtcbiAgICAgIG1vZHVsZXNbYXNzZXQuaWRdID0gW2ZuLCBkZXBzXTtcbiAgICB9IGVsc2UgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIGhtckFwcGx5KGJ1bmRsZS5wYXJlbnQsIGFzc2V0KTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGhtckRlbGV0ZShidW5kbGUsIGlkKSB7XG4gIGxldCBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobW9kdWxlc1tpZF0pIHtcbiAgICAvLyBDb2xsZWN0IGRlcGVuZGVuY2llcyB0aGF0IHdpbGwgYmVjb21lIG9ycGhhbmVkIHdoZW4gdGhpcyBtb2R1bGUgaXMgZGVsZXRlZC5cbiAgICBsZXQgZGVwcyA9IG1vZHVsZXNbaWRdWzFdO1xuICAgIGxldCBvcnBoYW5zID0gW107XG4gICAgZm9yIChsZXQgZGVwIGluIGRlcHMpIHtcbiAgICAgIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGRlcHNbZGVwXSk7XG4gICAgICBpZiAocGFyZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgb3JwaGFucy5wdXNoKGRlcHNbZGVwXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIHRoZSBtb2R1bGUuIFRoaXMgbXVzdCBiZSBkb25lIGJlZm9yZSBkZWxldGluZyBkZXBlbmRlbmNpZXMgaW4gY2FzZSBvZiBjaXJjdWxhciBkZXBlbmRlbmNpZXMuXG4gICAgZGVsZXRlIG1vZHVsZXNbaWRdO1xuICAgIGRlbGV0ZSBidW5kbGUuY2FjaGVbaWRdO1xuXG4gICAgLy8gTm93IGRlbGV0ZSB0aGUgb3JwaGFucy5cbiAgICBvcnBoYW5zLmZvckVhY2goaWQgPT4ge1xuICAgICAgaG1yRGVsZXRlKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBobXJEZWxldGUoYnVuZGxlLnBhcmVudCwgaWQpO1xuICB9XG59XG5mdW5jdGlvbiBobXJBY2NlcHRDaGVjayhidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGlkIC8qOiBzdHJpbmcgKi8sIGRlcHNCeUJ1bmRsZSAvKjogP3sgW3N0cmluZ106IHsgW3N0cmluZ106IHN0cmluZyB9IH0qLykge1xuICBpZiAoaG1yQWNjZXB0Q2hlY2tPbmUoYnVuZGxlLCBpZCwgZGVwc0J5QnVuZGxlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gVHJhdmVyc2UgcGFyZW50cyBicmVhZHRoIGZpcnN0LiBBbGwgcG9zc2libGUgYW5jZXN0cmllcyBtdXN0IGFjY2VwdCB0aGUgSE1SIHVwZGF0ZSwgb3Igd2UnbGwgcmVsb2FkLlxuICBsZXQgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gIGxldCBhY2NlcHRlZCA9IGZhbHNlO1xuICB3aGlsZSAocGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IHYgPSBwYXJlbnRzLnNoaWZ0KCk7XG4gICAgbGV0IGEgPSBobXJBY2NlcHRDaGVja09uZSh2WzBdLCB2WzFdLCBudWxsKTtcbiAgICBpZiAoYSkge1xuICAgICAgLy8gSWYgdGhpcyBwYXJlbnQgYWNjZXB0cywgc3RvcCB0cmF2ZXJzaW5nIHVwd2FyZCwgYnV0IHN0aWxsIGNvbnNpZGVyIHNpYmxpbmdzLlxuICAgICAgYWNjZXB0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdGhlcndpc2UsIHF1ZXVlIHRoZSBwYXJlbnRzIGluIHRoZSBuZXh0IGxldmVsIHVwd2FyZC5cbiAgICAgIGxldCBwID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIHZbMV0pO1xuICAgICAgaWYgKHAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBwYXJlbnRzLCB0aGVuIHdlJ3ZlIHJlYWNoZWQgYW4gZW50cnkgd2l0aG91dCBhY2NlcHRpbmcuIFJlbG9hZC5cbiAgICAgICAgYWNjZXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwYXJlbnRzLnB1c2goLi4ucCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhY2NlcHRlZDtcbn1cbmZ1bmN0aW9uIGhtckFjY2VwdENoZWNrT25lKGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgaWQgLyo6IHN0cmluZyAqLywgZGVwc0J5QnVuZGxlIC8qOiA/eyBbc3RyaW5nXTogeyBbc3RyaW5nXTogc3RyaW5nIH0gfSovKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZGVwc0J5QnVuZGxlICYmICFkZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdKSB7XG4gICAgLy8gSWYgd2UgcmVhY2hlZCB0aGUgcm9vdCBidW5kbGUgd2l0aG91dCBmaW5kaW5nIHdoZXJlIHRoZSBhc3NldCBzaG91bGQgZ28sXG4gICAgLy8gdGhlcmUncyBub3RoaW5nIHRvIGRvLiBNYXJrIGFzIFwiYWNjZXB0ZWRcIiBzbyB3ZSBkb24ndCByZWxvYWQgdGhlIHBhZ2UuXG4gICAgaWYgKCFidW5kbGUucGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhtckFjY2VwdENoZWNrKGJ1bmRsZS5wYXJlbnQsIGlkLCBkZXBzQnlCdW5kbGUpO1xuICB9XG4gIGlmIChjaGVja2VkQXNzZXRzW2lkXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNoZWNrZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGFzc2V0c1RvRGlzcG9zZS5wdXNoKFtidW5kbGUsIGlkXSk7XG4gIGlmICghY2FjaGVkIHx8IGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGFzc2V0c1RvQWNjZXB0LnB1c2goW2J1bmRsZSwgaWRdKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuZnVuY3Rpb24gaG1yRGlzcG9zZShidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGlkIC8qOiBzdHJpbmcgKi8pIHtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZS5ob3REYXRhW2lkXSA9IHt9O1xuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QpIHtcbiAgICBjYWNoZWQuaG90LmRhdGEgPSBidW5kbGUuaG90RGF0YVtpZF07XG4gIH1cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgY2IoYnVuZGxlLmhvdERhdGFbaWRdKTtcbiAgICB9KTtcbiAgfVxuICBkZWxldGUgYnVuZGxlLmNhY2hlW2lkXTtcbn1cbmZ1bmN0aW9uIGhtckFjY2VwdChidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGlkIC8qOiBzdHJpbmcgKi8pIHtcbiAgLy8gRXhlY3V0ZSB0aGUgbW9kdWxlLlxuICBidW5kbGUoaWQpO1xuXG4gIC8vIFJ1biB0aGUgYWNjZXB0IGNhbGxiYWNrcyBpbiB0aGUgbmV3IHZlcnNpb24gb2YgdGhlIG1vZHVsZS5cbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICB2YXIgYXNzZXRzVG9BbHNvQWNjZXB0ID0gY2IoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGFzc2V0c1RvQWxzb0FjY2VwdCAmJiBhc3NldHNUb0FjY2VwdC5sZW5ndGgpIHtcbiAgICAgICAgYXNzZXRzVG9BbHNvQWNjZXB0LmZvckVhY2goZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICBobXJEaXNwb3NlKGFbMF0sIGFbMV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAkRmxvd0ZpeE1lW21ldGhvZC11bmJpbmRpbmddXG4gICAgICAgIGFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoYXNzZXRzVG9BY2NlcHQsIGFzc2V0c1RvQWxzb0FjY2VwdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgJy4vYXBwL2Zsb2F0aW5nQnRuJ1xyXG5pbXBvcnQgJy4vYXBwL2N1c3RvbUZvbnRzJ1xyXG4iLCIvLyBVc2UgYSBjcm9zcy1icm93c2VyIHN0b3JhZ2UgQVBJOlxyXG5pbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnXHJcblxyXG4vLyBpbXBvcnQgeyBpY29uX3N1biwgaWNvbl9tb29uLCBpY29uX21vb25fZnVsbCwgaWNvbl9zZXR0aW5ncywgaWNvbl9wYWludCwgaWNvbl9wYWxldHRlIH0gZnJvbSAnLi9pY29ucy5qcydcclxuaW1wb3J0IHsgaWNvbl9zdW4sIGljb25fbW9vbiwgaWNvbl9tb29uX2Z1bGwsIGljb25fc2V0dGluZ3MsIGljb25fcGFpbnQgfSBmcm9tICcuL2ljb25zLmpzJ1xyXG4vLyBpbXBvcnQgZ3B0aFRvZ2dsZUltZyBmcm9tICcuLi8uLi9pbWcvZ3B0aC10b2dnbGUtY2lyY2xlZC53ZWJwJ1xyXG5pbXBvcnQgeyBoZXhUb0hTTCB9IGZyb20gJy4uL3V0aWxzL2hleFRvSFNMJ1xyXG5cclxuaW1wb3J0IHsgZm9udEh0bWxDb2RlLCBhZGRGb250c0V2ZW50SGFuZGxlcnMgfSBmcm9tICcuL2N1c3RvbUZvbnRzJ1xyXG4vLyBjb25zb2xlLmxvZyhmb250SHRtbENvZGUpXHJcblxyXG4vLyBsZXQgaXNPcHRpb25zU2hvd24gPSBmYWxzZVxyXG5cclxuLy8gR2xvYmFsIFZhcmlhYmxlc1xyXG5sZXQgaXNPcHRpb25zU2hvd24gPSBmYWxzZVxyXG5sZXQgJGh0bWxUYWdcclxubGV0ICRmbG9hdGluZ0J0blxyXG5sZXQgJGZsb2F0aW5nT3B0aW9uc1xyXG5sZXQgJGZsb2F0aW5nQnRuc0NvbnRhaW5lclxyXG5cclxubGV0ICRzZXR0aW5ncyAvLyBAIEFjY2VudCBUaGVtZVxyXG5sZXQgJHJlc2V0QWxsQnRuXHJcbi8vIGxldCBpc1NldHRpbmdzT3BlbiA9IGZhbHNlXHJcbmxldCBzdHlsZUVsZW1lbnQgPSBudWxsIC8vIERlY2xhcmUgdGhlIHN0eWxlRWxlbWVudCB2YXJpYWJsZVxyXG5cclxubGV0IGRlZmF1bHRDb2xvckxpZ2h0ID0gJyM2YjRkZmUnXHJcbmxldCBkZWZhdWx0Q29sb3JEYXJrID0gJyNjYTkzZmInXHJcbi8vIGxldCBpc0Rpc2FibGVkUmVzZXRBbGwgPSB0cnVlXHJcblxyXG5jb25zdCByZW5kZXJDb2xvcnNUYWIgPSBgXHJcblx0PHNlY3Rpb24+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29sb3JwaWNrZXItY29udGFpbmVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb2xvcnBpY2tlclwiPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiY29sb3JcIiBpZD1cImFjY2VudExpZ2h0XCIgdmFsdWU9XCIjNmI0ZGZlXCIgLz5cclxuXHRcdFx0XHQ8bGFiZWwgZm9yPVwiYWNjZW50TGlnaHRcIj5BY2NlbnQgPHNwYW4+TGlnaHQ8L3NwYW4+PC9sYWJlbD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb2xvcnBpY2tlclwiPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiY29sb3JcIiBpZD1cImFjY2VudERhcmtcIiB2YWx1ZT1cIiNjYTkzZmJcIiAvPlxyXG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJhY2NlbnREYXJrXCI+QWNjZW50IDxzcGFuPkRhcms8L3NwYW4+PC9sYWJlbD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxmb290ZXIgY2xhc3M9XCJncmlkIG10LTEwXCI+XHJcblx0XHRcdDxidXR0b24gaWQ9XCJyZXNldEFsbFNldHRpbmdzXCIgY2xhc3M9XCJidG4gYmxvY2sgcmVsYXRpdmUgYnRuLXByaW1hcnkgdGV4dC1jZW50ZXJcIiBhcz1cImJ1dHRvblwiPlJlc2V0IEFjY2VudHM8L2J1dHRvbj5cclxuXHRcdDwvZm9vdGVyPlxyXG5cdDwvc2VjdGlvbj5cclxuYFxyXG5cclxuLy8gSW5pdGlhbGl6YXRpb25cclxuaW5pdCgpXHJcblxyXG5mdW5jdGlvbiB0YWJzU3dpdGNoaW5nKCkge1xyXG5cdGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3B0aC1zZXR0aW5ncyAudGFiLWJ1dHRvbicpXHJcblx0Y29uc3QgcGFuZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3B0aC1zZXR0aW5ncyAudGFiLXBhbmUnKVxyXG5cclxuXHR0YWJzLmZvckVhY2goKHRhYiwgaW5kZXgpID0+IHtcclxuXHRcdHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1idXR0b24uYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1wYW5lOm5vdCguaGlkZGVuKScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcblxyXG5cdFx0XHR0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuXHRcdFx0cGFuZXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXHJcblx0XHR9KVxyXG5cdH0pXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXRUaGVtZSgpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgeyBncHRoZW1lOiBzdG9yZWRUaGVtZSB9ID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCdncHRoZW1lJylcclxuXHRcdGNvbnN0IHRoZW1lID0gc3RvcmVkVGhlbWUgfHwgKHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScpLm1hdGNoZXMgPyAnbGlnaHQnIDogJ2RhcmsnKVxyXG5cdFx0YXBwbHlUaGVtZSh0aGVtZSlcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIHRoZW1lOicsIGVycm9yKVxyXG5cdH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2V0VGhlbWUodGhlbWUpIHtcclxuXHR0cnkge1xyXG5cdFx0YXdhaXQgYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHsgZ3B0aGVtZTogdGhlbWUgfSlcclxuXHRcdGFwcGx5VGhlbWUodGhlbWUpXHJcblx0XHR0b2dnbGVPcHRpb25zKClcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignRXJyb3Igc2V0dGluZyB0aGVtZTonLCBlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFuZEFwcGVuZFNWR1N0aWNreUJ0bigpIHtcclxuXHRjb25zdCBncHRoRmxvYXRpbmdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdGdwdGhGbG9hdGluZ0J0bi5jbGFzc05hbWUgPSAnZ3B0aF9fZmxvYXRpbmcnXHJcblxyXG5cdC8vIDxpbWcgc3JjPVwiJHtncHRoVG9nZ2xlSW1nfVwiIGFsdD1cImdwdGgtdG9nZ2xlXCIvPlxyXG5cdGxldCBodG1sQ29kZSA9IGBcclxuXHRcdDxkaXYgY2xhc3M9XCJncHRoX19mbG9hdGluZy1pY29uXCI+XHJcblx0XHRcdCR7aWNvbl9wYWludH1cclxuXHRcdDwvZGl2PlxyXG5cdFx0XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ3B0aF9fb3B0aW9uc1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3B0aF9fb3B0aW9ucy1idG5zXCI+XHJcblx0XHRcdFx0PGJ1dHRvbiBpZD1cImxpZ2h0XCIgZGF0YS1ncHRoLXRoZW1lPVwibGlnaHRcIj4ke2ljb25fc3VufTwvYnV0dG9uPlxyXG5cdFx0XHRcdDxidXR0b24gaWQ9XCJkYXJrXCIgZGF0YS1ncHRoLXRoZW1lPVwiZGFya1wiPiR7aWNvbl9tb29ufTwvYnV0dG9uPlxyXG5cdFx0XHRcdDxidXR0b24gaWQ9XCJvbGVkXCIgZGF0YS1ncHRoLXRoZW1lPVwiYmxhY2tcIj4ke2ljb25fbW9vbl9mdWxsfTwvYnV0dG9uPlxyXG5cdFx0XHRcdDxidXR0b24gaWQ9XCJncHRoLW9wZW4tc2V0dGluZ3NcIiBkYXRhLWdwdGgtdGhlbWU9XCJtb3JlXCI+JHtpY29uX3NldHRpbmdzfTwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxuXHJcblx0Ly8gZ3B0aEZsb2F0aW5nQnRuLmlubmVySFRNTCA9IGh0bWxDb2RlXHJcblx0Z3B0aEZsb2F0aW5nQnRuLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbENvZGUpXHJcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChncHRoRmxvYXRpbmdCdG4pXHJcblxyXG5cdC8vIENhY2hlIERPTSBlbGVtZW50cyBhZnRlciBhcHBlbmRpbmdcclxuXHQkaHRtbFRhZyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxyXG5cdCRmbG9hdGluZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoX19mbG9hdGluZycpXHJcblx0JGZsb2F0aW5nT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoX19vcHRpb25zJylcclxuXHQkZmxvYXRpbmdCdG5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdwdGhfX29wdGlvbnMtYnRucycpXHJcblxyXG5cdC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgYWZ0ZXIgRE9NIGVsZW1lbnRzIGFyZSBhcHBlbmRlZFxyXG5cdCRmbG9hdGluZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU9wdGlvbnMpXHJcblx0JGZsb2F0aW5nQnRuc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNoYW5nZVRoZW1lKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2VUaGVtZShlKSB7XHJcblx0Y29uc3QgdGhlbWVCdXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKVxyXG5cdGlmICghdGhlbWVCdXR0b24pIHJldHVyblxyXG5cclxuXHRjb25zdCB0aGVtZSA9IHRoZW1lQnV0dG9uLmlkXHJcblxyXG5cdGlmICh0aGVtZSAhPT0gJ2dwdGgtb3Blbi1zZXR0aW5ncycpIHtcclxuXHRcdHNldFRoZW1lKHRoZW1lKVxyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cclxuXHQvKiBJZiBjbGlja2VkIG9uIFwi4pqZ77iPIE9wZW4gU2V0dGluZ3NcIiAqL1xyXG5cdGlmICh0aGVtZSA9PT0gJ2dwdGgtb3Blbi1zZXR0aW5ncycpIHtcclxuXHRcdG9wZW5TZXR0aW5ncygpXHJcblx0XHQvLyB0b2dnbGVPcHRpb25zKClcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VGhlbWUodGhlbWUpIHtcclxuXHQkaHRtbFRhZy5kYXRhc2V0LmdwdGhlbWUgPSB0aGVtZVxyXG5cdCRodG1sVGFnLnN0eWxlLmNvbG9yU2NoZW1lID0gdGhlbWUgPT09ICdvbGVkJyA/ICdkYXJrJyA6IHRoZW1lXHJcblx0JGh0bWxUYWcuY2xhc3NOYW1lID0gdGhlbWUgPT09ICdvbGVkJyA/ICdkYXJrJyA6IHRoZW1lXHJcblx0aWYgKHRoZW1lICE9PSAnb2xlZCcpICRodG1sVGFnLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1ncHRoZW1lJylcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlT3B0aW9ucygpIHtcclxuXHRpc09wdGlvbnNTaG93biA9ICFpc09wdGlvbnNTaG93blxyXG5cdCRmbG9hdGluZ09wdGlvbnMuY2xhc3NMaXN0LnRvZ2dsZSgnZ3B0aF9fb3B0aW9ucy0tc2hvd24nLCBpc09wdGlvbnNTaG93bilcclxuXHJcblx0aWYgKGlzT3B0aW9uc1Nob3duKSBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU9wdGlvbnMpXHJcblx0ZWxzZSBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU9wdGlvbnMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVPcHRpb25zKGUpIHtcclxuXHRjb25zdCBpc0NsaWNrSW5zaWRlRmxvYXRpbmdCdG4gPSAkZmxvYXRpbmdCdG4uY29udGFpbnMoZS50YXJnZXQpXHJcblx0Y29uc3QgaXNDbGlja0luc2lkZUZsb2F0aW5nT3B0aW9ucyA9ICRmbG9hdGluZ09wdGlvbnMuY29udGFpbnMoZS50YXJnZXQpXHJcblxyXG5cdGlmICghaXNDbGlja0luc2lkZUZsb2F0aW5nQnRuICYmICFpc0NsaWNrSW5zaWRlRmxvYXRpbmdPcHRpb25zKSB0b2dnbGVPcHRpb25zKClcclxuXHJcblx0Ly8gaWYgKCEkZmxvYXRpbmdCdG4uY29udGFpbnMoZS50YXJnZXQpICYmICEkZmxvYXRpbmdUaGVtZU9wdGlvbnMuY29udGFpbnMoZS50YXJnZXQpKSB0b2dnbGVPcHRpb25zKClcclxufVxyXG5cclxuZnVuY3Rpb24gZGVjcmVpc2VGbG9hdGluZ0J0blNpemUoKSB7XHJcblx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHQkZmxvYXRpbmdCdG4uY2xhc3NMaXN0LmFkZCgnZ3B0aF9fZmxvYXRpbmctLXNtYWxsJylcclxuXHR9LCAzMDAwKVxyXG59XHJcblxyXG4vKiBfX19fX19fX19fX19fXyBUSEVNRSBDVVNUT01JWkFUSU9OIC0gQUNDRU5UIFRIRU1FIF9fX19fX19fX19fX19fICovXHJcbmZ1bmN0aW9uIHJlbmRlclNldHRpbmdzKCkge1xyXG5cdGNvbnN0IGdwdGhTZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0Z3B0aFNldHRpbmdzLmNsYXNzTmFtZSA9IGBncHRoLXNldHRpbmdzIGZpeGVkIGZsZXggZmxleC1jb2xgXHJcblxyXG5cdGxldCBodG1sQ29kZSA9IGBcclxuXHRcdDxoZWFkZXIgY2xhc3M9XCJtYi01XCI+XHJcblx0XHRcdDxoMiBjbGFzcz1cIm10LTUgdGV4dC1jZW50ZXIgZm9udC1tZWRpdW0gZ3B0aC1zZXR0aW5nc19fdGl0bGVcIj48c3BhbiBjbGFzcz1cImZvbnQtc2VtaWJvbGRcIj5HUFRoZW1lczwvc3Bhbj4gQ3VzdG9taXphdGlvbjwvaDI+XHJcblxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwidGV4dC10b2tlbi10ZXh0LXRlcnRpYXJ5IGhvdmVyOnRleHQtdG9rZW4tdGV4dC1wcmltYXJ5IGFic29sdXRlIHRvcC00IHJpZ2h0LTRcIiBpZD1cImdwdGgtc2V0dGluZ3MtY2xvc2VcIj5cclxuXHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTYuMzQzMTUgNi4zNDMzOEwxNy42NTY5IDE3LjY1NzFNMTcuNjU2OSA2LjM0MzM4TDYuMzQzMTUgMTcuNjU3MVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+PC9zdmc+XHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0PC9oZWFkZXI+XHJcblxyXG5cdFx0PG1haW4gPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGFic1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YWItYnV0dG9ucyBmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgcC0xIGZvbnQtc2VtaWJvbGQgbWItMTBcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJ0YWItYnV0dG9uIHB5LTIgcHgtNCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1jZW50ZXIgcm91bmRlZC1mdWxsIGFjdGl2ZVwiPlxyXG5cdFx0XHRcdFx0XHRDb2xvclxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwidGFiLWJ1dHRvbiBweS0yIHB4LTQgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtY2VudGVyIHJvdW5kZWQtZnVsbFwiPlxyXG5cdFx0XHRcdFx0XHRGb250XHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJ0YWItYnV0dG9uIHB5LTIgcHgtNCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1jZW50ZXIgcm91bmRlZC1mdWxsXCI+XHJcblx0XHRcdFx0XHRcdEFzc2V0c1xyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRhYi1wYW5lIGFjdGl2ZVwiIGlkPVwidGFiLWNvbG9yc1wiPlxyXG5cdFx0XHRcdFx0XHQke3JlbmRlckNvbG9yc1RhYn1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YWItcGFuZSBoaWRkZW5cIiBpZD1cInRhYi1mb250c1wiPlxyXG5cdFx0XHRcdFx0XHQke2ZvbnRIdG1sQ29kZX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YWItcGFuZSBoaWRkZW5cIiBpZD1cInRhYi1hc3NldHNcIj5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LXRva2VuLXRleHQtdGVydGlhcnkgdGV4dC1zbSBtYi0yIGZvbnQtd2VpZ2h0LTIwMFwiPm9vb3BzLCBzdWNoIGVtcHR5PC9wPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtdG9rZW4tdGV4dC1zZWNvbmRhcnkgdGV4dC1tZCBmb250LXNlbWlib2xkXCI+Q29taW5nIFNvb248L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L21haW4+XHJcblx0YFxyXG5cclxuXHRncHRoU2V0dGluZ3MuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sQ29kZSlcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdwdGhTZXR0aW5ncylcclxuXHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dwdGgtc2V0dGluZ3MtY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlU2V0dGluZ3MpXHJcblxyXG5cdCRzZXR0aW5ncyA9IGdwdGhTZXR0aW5nc1xyXG5cclxuXHR0YWJzU3dpdGNoaW5nKClcclxuXHJcblx0JHJlc2V0QWxsQnRuID0gJHNldHRpbmdzLnF1ZXJ5U2VsZWN0b3IoJyNyZXNldEFsbFNldHRpbmdzJylcclxuXHQkcmVzZXRBbGxCdG4uZGlzYWJsZWQgPSB0cnVlXHJcblxyXG5cdCRzZXR0aW5ncy5xdWVyeVNlbGVjdG9yKCcjcmVzZXRBbGxTZXR0aW5ncycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRBbGxTZXR0aW5ncylcclxuXHJcblx0YWRkRm9udHNFdmVudEhhbmRsZXJzKClcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlblNldHRpbmdzKCkge1xyXG5cdCRzZXR0aW5ncy5jbGFzc0xpc3QuYWRkKCdncHRoLXNldHRpbmdzLS1vcGVuJylcclxuXHQkc2V0dGluZ3MuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVNldHRpbmdzT3BlbmVkKVxyXG5cdCRyZXNldEFsbEJ0bi5kaXNhYmxlZCA9IGZhbHNlXHJcblxyXG5cdC8vIGlzT3B0aW9uc1Nob3duID0gZmFsc2VcclxuXHQvLyB0b2dnbGVPcHRpb25zKClcclxufVxyXG5mdW5jdGlvbiBoYW5kbGVTZXR0aW5nc09wZW5lZCgpIHtcclxuXHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlU2V0dGluZ3MpXHJcblx0JHNldHRpbmdzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVTZXR0aW5nc09wZW5lZClcclxufVxyXG5mdW5jdGlvbiBjbG9zZVNldHRpbmdzKCkge1xyXG5cdCRzZXR0aW5ncy5jbGFzc0xpc3QucmVtb3ZlKCdncHRoLXNldHRpbmdzLS1vcGVuJylcclxuXHRkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlU2V0dGluZ3MpXHJcblx0JHJlc2V0QWxsQnRuLmRpc2FibGVkID0gdHJ1ZVxyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZUNsaWNrT3V0c2lkZVNldHRpbmdzKGUpIHtcclxuXHRsZXQgaXNPcGVuU2V0dGluZ3NCdXR0b24gPSBlLnRhcmdldC5pZCA9PT0gJ2dwdGgtc2V0dGluZ3Mtb3BlbidcclxuXHJcblx0aWYgKCEkc2V0dGluZ3MuY29udGFpbnMoZS50YXJnZXQpICYmICFpc09wZW5TZXR0aW5nc0J1dHRvbikgY2xvc2VTZXR0aW5ncygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNvbG9ySW5wdXQoKSB7XHJcblx0JHNldHRpbmdzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG5cclxuXHRcdGlmIChlLnRhcmdldC5pZCA9PT0gJ2FjY2VudExpZ2h0Jykge1xyXG5cdFx0XHRlLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcblx0XHRcdFx0dXBkYXRlQ1NTVmFycyhlLnRhcmdldC52YWx1ZSwgbnVsbClcclxuXHRcdFx0fSlcclxuXHRcdFx0Ly8gU2F2ZSBsaWdodCBhY2NlbnQgY29sb3IgdG8gc3RvcmFnZVxyXG5cdFx0XHRlLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG5cdFx0XHRcdHNldEFjY2VudFRvU3RvcmFnZSgnYWNjZW50X2xpZ2h0JywgZS50YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0Y2xvc2VTZXR0aW5ncygpXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGUudGFyZ2V0LmlkID09PSAnYWNjZW50RGFyaycpIHtcclxuXHRcdFx0ZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG5cdFx0XHRcdHVwZGF0ZUNTU1ZhcnMobnVsbCwgZS50YXJnZXQudmFsdWUpXHJcblx0XHRcdH0pXHJcblx0XHRcdC8vIFNhdmUgZGFyayBhY2NlbnQgY29sb3IgdG8gc3RvcmFnZVxyXG5cdFx0XHRlLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG5cdFx0XHRcdHNldEFjY2VudFRvU3RvcmFnZSgnYWNjZW50X2RhcmsnLCBlLnRhcmdldC52YWx1ZSlcclxuXHRcdFx0XHRjbG9zZVNldHRpbmdzKClcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgaW5qZWN0IHRoZSA8c3R5bGU+IGVsZW1lbnRcclxuZnVuY3Rpb24gaW5qZWN0U3R5bGVFbGVtZW50KCkge1xyXG5cdHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcclxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ1NTVmFycyhsaWdodENvbG9yLCBkYXJrQ29sb3IpIHtcclxuXHRpZiAoIXN0eWxlRWxlbWVudCkgaW5qZWN0U3R5bGVFbGVtZW50KClcclxuXHJcblx0Y29uc3QgbGlnaHRIU0wgPSBsaWdodENvbG9yXHJcblx0XHQ/IGhleFRvSFNMKGxpZ2h0Q29sb3IpXHJcblx0XHQ6IGhleFRvSFNMKCRzZXR0aW5ncy5xdWVyeVNlbGVjdG9yKCcuY29sb3JwaWNrZXIgI2FjY2VudExpZ2h0JykudmFsdWUpXHJcblx0Y29uc3QgZGFya0hTTCA9IGRhcmtDb2xvclxyXG5cdFx0PyBoZXhUb0hTTChkYXJrQ29sb3IpXHJcblx0XHQ6IGhleFRvSFNMKCRzZXR0aW5ncy5xdWVyeVNlbGVjdG9yKCcuY29sb3JwaWNrZXIgI2FjY2VudERhcmsnKS52YWx1ZSlcclxuXHJcblx0bGV0IGNzc1ZhcnMgPSAnJ1xyXG5cclxuXHRjc3NWYXJzID0gYFxyXG4gICAgICAgIGh0bWwubGlnaHQge1xyXG4gICAgICAgICAgICAtLWFjY2VudC1oOiAke2xpZ2h0SFNMWzBdfSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWFjY2VudC1zOiAke2xpZ2h0SFNMWzFdfSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1hY2NlbnQtbDogJHtsaWdodEhTTFsyXX0lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwuZGFyayB7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LWg6ICR7ZGFya0hTTFswXX0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1hY2NlbnQtczogJHtkYXJrSFNMWzFdfSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1hY2NlbnQtbDogJHtkYXJrSFNMWzJdfSUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICBgXHJcblxyXG5cdC8vIGNvbnNvbGUubG9nKGNzc1ZhcnMpXHJcblxyXG5cdHN0eWxlRWxlbWVudC50ZXh0Q29udGVudCA9IGNzc1ZhcnNcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2V0QWNjZW50VG9TdG9yYWdlKHN0b3JhZ2VDb2xvclByb3BlcnR5LCBhY2NlbnRWYWx1ZSkge1xyXG5cdHRyeSB7XHJcblx0XHRpZiAoc3RvcmFnZUNvbG9yUHJvcGVydHkgPT09ICdhY2NlbnRfbGlnaHQnKSB7XHJcblx0XHRcdGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IGFjY2VudF9saWdodDogYWNjZW50VmFsdWUgfSlcclxuXHRcdH1cclxuXHRcdGlmIChzdG9yYWdlQ29sb3JQcm9wZXJ0eSA9PT0gJ2FjY2VudF9kYXJrJykge1xyXG5cdFx0XHRhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyBhY2NlbnRfZGFyazogYWNjZW50VmFsdWUgfSlcclxuXHRcdH1cclxuXHRcdC8vIGNvbnNvbGUubG9nKHsgc3RvcmFnZUNvbG9yUHJvcGVydHksIGFjY2VudFZhbHVlIH0pXHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdFx0Y29uc29sZS5lcnJvcignRXJyb3Igc2V0dGluZyB0aGUgYWNjZW50IGNvbG9ycyBpbiBzdG9yYWdlOicsIGUpXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDb2xvcklucHV0VmFsdWUoeyBhY2NlbnRMaWdodCwgYWNjZW50RGFyayB9KSB7XHJcblx0Ly8gY29uc29sZS5sb2coeyBhY2NlbnRMaWdodCwgYWNjZW50RGFyayB9KVxyXG5cdCRzZXR0aW5ncy5xdWVyeVNlbGVjdG9yKCcuY29sb3JwaWNrZXIgI2FjY2VudExpZ2h0JykudmFsdWUgPSBhY2NlbnRMaWdodFxyXG5cdCRzZXR0aW5ncy5xdWVyeVNlbGVjdG9yKCcuY29sb3JwaWNrZXIgI2FjY2VudERhcmsnKS52YWx1ZSA9IGFjY2VudERhcmtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlQWNjZW50c1N0b3JhZ2UoKSB7XHJcblx0dHJ5IHtcclxuXHRcdC8vIEdldCBhY2NlbnQgY29sb3JzIGZyb20gc3RvcmFnZVxyXG5cdFx0Y29uc3QgeyBhY2NlbnRfbGlnaHQ6IGFjY2VudExpZ2h0LCBhY2NlbnRfZGFyazogYWNjZW50RGFyayB9ID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KFtcclxuXHRcdFx0J2FjY2VudF9saWdodCcsXHJcblx0XHRcdCdhY2NlbnRfZGFyaycsXHJcblx0XHRdKVxyXG5cdFx0Ly8gY29uc29sZS5sb2coJ1JldHJpZXZlZCBhY2NlbnQgY29sb3JzIGZyb20gc3RvcmFnZTonLCBhY2NlbnRMaWdodCwgYWNjZW50RGFyaylcclxuXHJcblx0XHQvLyBTZXQgZGVmYXVsdCBhY2NlbnQgY29sb3JzIGlmIG5vdCBhbHJlYWR5IHNldFxyXG5cdFx0aWYgKCFhY2NlbnRMaWdodCB8fCAhYWNjZW50RGFyaykge1xyXG5cdFx0XHRhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoe1xyXG5cdFx0XHRcdGFjY2VudF9saWdodDogZGVmYXVsdENvbG9yTGlnaHQsXHJcblx0XHRcdFx0YWNjZW50X2Rhcms6IGRlZmF1bHRDb2xvckRhcmssXHJcblx0XHRcdH0pXHJcblx0XHRcdGNvbnNvbGUubG9nKCdEZWZhdWx0IGFjY2VudCBjb2xvcnMgc2V0IGluIHN0b3JhZ2UnKVxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGFjY2VudENvbG9yTGlnaHQgPSBhY2NlbnRMaWdodCB8fCBkZWZhdWx0Q29sb3JMaWdodFxyXG5cdFx0Y29uc3QgYWNjZW50Q29sb3JEYXJrID0gYWNjZW50RGFyayB8fCBkZWZhdWx0Q29sb3JEYXJrXHJcblxyXG5cdFx0Ly8gVXBkYXRlIENTUyB3aXRoIHJldHJpZXZlZCBvciBkZWZhdWx0IGFjY2VudCBjb2xvcnNcclxuXHRcdHVwZGF0ZUNTU1ZhcnMoYWNjZW50Q29sb3JMaWdodCwgYWNjZW50Q29sb3JEYXJrKVxyXG5cclxuXHRcdHNldENvbG9ySW5wdXRWYWx1ZSh7IGFjY2VudExpZ2h0OiBhY2NlbnRDb2xvckxpZ2h0LCBhY2NlbnREYXJrOiBhY2NlbnRDb2xvckRhcmsgfSlcclxuXHJcblx0XHQvLyBjb25zb2xlLmxvZygnQWNjZW50IGNvbG9ycyBhcHBsaWVkIHRvIENTUzonLCBhY2NlbnRDb2xvckxpZ2h0LCBhY2NlbnRDb2xvckRhcmspXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGFjY2VudCBjb2xvcnM6JywgZXJyb3IpXHJcblx0fVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHJlc2V0QWxsU2V0dGluZ3MoKSB7XHJcblx0aWYgKCFzdHlsZUVsZW1lbnQpIGluamVjdFN0eWxlRWxlbWVudCgpXHJcblxyXG5cdC8vIGxldCBhY2NlbnRMaWdodCA9IFsyNTAsIDk5LCA2NV1cclxuXHQvLyBsZXQgYWNjZW50RGFyayA9IFsyNzIsIDkzLCA3OF1cclxuXHRsZXQgYWNjZW50TGlnaHQgPSBoZXhUb0hTTChkZWZhdWx0Q29sb3JMaWdodClcclxuXHRsZXQgYWNjZW50RGFyayA9IGhleFRvSFNMKGRlZmF1bHRDb2xvckRhcmspXHJcblxyXG5cdGNvbnN0IGNzc1ZhcnMgPSBgXHJcbiAgICAgICAgaHRtbC5saWdodCB7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LWg6ICR7YWNjZW50TGlnaHRbMF19ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYWNjZW50LXM6ICR7YWNjZW50TGlnaHRbMV19JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWFjY2VudC1sOiAke2FjY2VudExpZ2h0WzJdfSUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbC5kYXJrIHtcclxuICAgICAgICAgICAgLS1hY2NlbnQtaDogJHthY2NlbnREYXJrWzBdfSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWFjY2VudC1zOiAke2FjY2VudERhcmtbMV19JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWFjY2VudC1sOiAke2FjY2VudERhcmtbMl19JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIGBcclxuXHJcblx0c3R5bGVFbGVtZW50LnRleHRDb250ZW50ID0gY3NzVmFyc1xyXG5cclxuXHRzZXRDb2xvcklucHV0VmFsdWUoeyBhY2NlbnRMaWdodDogZGVmYXVsdENvbG9yTGlnaHQsIGFjY2VudERhcms6IGRlZmF1bHRDb2xvckRhcmsgfSlcclxuXHJcblx0YXdhaXQgYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHtcclxuXHRcdGFjY2VudF9saWdodDogZGVmYXVsdENvbG9yTGlnaHQsXHJcblx0XHRhY2NlbnRfZGFyazogZGVmYXVsdENvbG9yRGFyayxcclxuXHR9KVxyXG59XHJcblxyXG4vKiA9PT0gSW5pdGlhbGl6YXRpb24gKi9cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuXHRpbml0VGhlbWUoKVxyXG5cdGNyZWF0ZUFuZEFwcGVuZFNWR1N0aWNreUJ0bigpXHJcblx0cmVuZGVyU2V0dGluZ3MoKVxyXG5cdGRlY3JlaXNlRmxvYXRpbmdCdG5TaXplKClcclxuXHRoYW5kbGVBY2NlbnRzU3RvcmFnZSgpXHJcblx0aGFuZGxlQ29sb3JJbnB1dCgpXHJcbn1cclxuXHJcbi8qID8gT25seSBmb3IgZGVidWdnaW5nIC0gcmVtb3ZlIGxhdGVyISAqL1xyXG4vKiBkZWJ1Z0dldEFsbFN0b3JhZ2VJdGVtcygpXHJcbi8vIEdldCBhbGwgdGhlIGl0ZW1zIGluIHRoZSBzdG9yYWdlXHJcbmZ1bmN0aW9uIGRlYnVnR2V0QWxsU3RvcmFnZUl0ZW1zKCkge1xyXG5cdGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldChudWxsLCBmdW5jdGlvbiAoaXRlbXMpIHtcclxuXHRcdGNvbnNvbGUubG9nKGl0ZW1zKSAvLyBUaGlzIHdpbGwgbG9nIGFsbCB0aGUgaXRlbXMgc3RvcmVkIGluIHN5bmMgc3RvcmFnZVxyXG5cdH0pXHJcbn1cclxuKi9cclxuIiwiLyogd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIC0gdjAuMTAuMCAtIEZyaSBBdWcgMTIgMjAyMiAxOTo0Mjo0NCAqL1xuLyogLSotIE1vZGU6IGluZGVudC10YWJzLW1vZGU6IG5pbDsganMtaW5kZW50LWxldmVsOiAyIC0qLSAqL1xuLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cbi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cInVzZSBzdHJpY3RcIjtcblxuaWYgKCFnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZT8uaWQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xufVxuXG5pZiAodHlwZW9mIGdsb2JhbFRoaXMuYnJvd3NlciA9PT0gXCJ1bmRlZmluZWRcIiB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsVGhpcy5icm93c2VyKSAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjtcblxuICAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgLy8gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiBTaW5jZSBTcGlkZXJtb25rZXkgZG9lcyBub3QgZnVsbHkgcGFyc2UgdGhlXG4gIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXG4gIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgLy8gaW4gRmlyZWZveCBuZWFybHkgZm9yIGZyZWUuXG4gIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgLy8gTk9URTogYXBpTWV0YWRhdGEgaXMgYXNzb2NpYXRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgYXBpLW1ldGFkYXRhLmpzb24gZmlsZVxuICAgIC8vIGF0IGJ1aWxkIHRpbWUgYnkgcmVwbGFjaW5nIHRoZSBmb2xsb3dpbmcgXCJpbmNsdWRlXCIgd2l0aCB0aGUgY29udGVudCBvZiB0aGVcbiAgICAvLyBKU09OIGZpbGUuXG4gICAgY29uc3QgYXBpTWV0YWRhdGEgPSB7XG4gICAgICBcImFsYXJtc1wiOiB7XG4gICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiY2xlYXJBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiYm9va21hcmtzXCI6IHtcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldENoaWxkcmVuXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRTdWJUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlVHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgXCJkaXNhYmxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImdldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJicm93c2luZ0RhdGFcIjoge1xuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDYWNoZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDb29raWVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVGb3JtRGF0YVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVIaXN0b3J5XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVQYXNzd29yZHNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlUGx1Z2luRGF0YVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29tbWFuZHNcIjoge1xuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29udGV4dE1lbnVzXCI6IHtcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29va2llc1wiOiB7XG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxDb29raWVTdG9yZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGV2dG9vbHNcIjoge1xuICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgXCJldmFsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBhbmVsc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMyxcbiAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbGVtZW50c1wiOiB7XG4gICAgICAgICAgICBcImNyZWF0ZVNpZGViYXJQYW5lXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICBcImNhbmNlbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRGaWxlSWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXVzZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVGaWxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImV4dGVuc2lvblwiOiB7XG4gICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICBcImFkZFVybFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlVXJsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFZpc2l0c1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImkxOG5cIjoge1xuICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFjY2VwdExhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICBcImxhdW5jaFdlYkF1dGhGbG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgXCJxdWVyeVN0YXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0RW5hYmxlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1bmluc3RhbGxTZWxmXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJub3RpZmljYXRpb25zXCI6IHtcbiAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFBlcm1pc3Npb25MZXZlbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBhZ2VBY3Rpb25cIjoge1xuICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImhpZGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICBcImNvbnRhaW5zXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgIFwiZ2V0QmFja2dyb3VuZFBhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGxhdGZvcm1JbmZvXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXF1ZXN0VXBkYXRlQ2hlY2tcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VW5pbnN0YWxsVVJMXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgIFwiZ2V0RGV2aWNlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRSZWNlbnRseUNsb3NlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzdG9yYWdlXCI6IHtcbiAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VkXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzeW5jXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0YWJzXCI6IHtcbiAgICAgICAgXCJjYXB0dXJlVmlzaWJsZVRhYlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzY2FyZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhlY3V0ZVNjcmlwdFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRab29tXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ29Gb3J3YXJkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImhpZ2hsaWdodFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJxdWVyeVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNTU1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRab29tXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRvcFNpdGVzXCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndlYk5hdmlnYXRpb25cIjoge1xuICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRGcmFtZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgIFwiaGFuZGxlckJlaGF2aW9yQ2hhbmdlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRMYXN0Rm9jdXNlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcGktbWV0YWRhdGEuanNvbiBoYXMgbm90IGJlZW4gaW5jbHVkZWQgaW4gYnJvd3Nlci1wb2x5ZmlsbFwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIFdlYWtNYXAgc3ViY2xhc3Mgd2hpY2ggY3JlYXRlcyBhbmQgc3RvcmVzIGEgdmFsdWUgZm9yIGFueSBrZXkgd2hpY2ggZG9lc1xuICAgICAqIG5vdCBleGlzdCB3aGVuIGFjY2Vzc2VkLCBidXQgYmVoYXZlcyBleGFjdGx5IGFzIGFuIG9yZGluYXJ5IFdlYWtNYXBcbiAgICAgKiBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjcmVhdGVJdGVtXG4gICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICogICAgICAgIGtleSB3aGljaCBkb2VzIG5vdCBleGlzdCwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgYWNjZXNzZWQuIFRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbiByZWNlaXZlcywgYXMgaXRzIG9ubHkgYXJndW1lbnQsIHRoZSBrZXkgYmVpbmcgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgY29uc3RydWN0b3IoY3JlYXRlSXRlbSwgaXRlbXMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VwZXIoaXRlbXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgfVxuXG4gICAgICBnZXQoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jcmVhdGVJdGVtKGtleSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAqIHRoZXJlZm9yZSBiZSBhc3N1bWVkIHRvIGJlaGF2ZSBhcyBhIFByb21pc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB0aGVuYWJsZS5cbiAgICAgKi9cbiAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICogdGhlIGdpdmVuIHByb21pc2UgYmFzZWQgb24gaG93IGl0IGlzIGNhbGxlZDpcbiAgICAgKlxuICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgKiAgIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGggdGhhdCB2YWx1ZS5cbiAgICAgKiAtIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBleGFjdGx5IG9uZSBhcmd1bWVudCwgdGhlIHByb21pc2UgaXNcbiAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICogLSBPdGhlcndpc2UsIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZVxuICAgICAqICAgZnVuY3Rpb24ncyBhcmd1bWVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvbWlzZVxuICAgICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb2x1dGlvbiBhbmQgcmVqZWN0aW9uIGZ1bmN0aW9ucyBvZiBhXG4gICAgICogICAgICAgIHByb21pc2UuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZXNvbHZlXG4gICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVzb2x1dGlvbiBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdFxuICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlamVjdGlvbiBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgKiAgICAgICAgVGhlIGdlbmVyYXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdCBtYWtlQ2FsbGJhY2sgPSAocHJvbWlzZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgcHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8XG4gICAgICAgICAgICAgICAgICAgKGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpKSB7XG4gICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJnc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHBsdXJhbGl6ZUFyZ3VtZW50cyA9IChudW1BcmdzKSA9PiBudW1BcmdzID09IDEgPyBcImFyZ3VtZW50XCIgOiBcImFyZ3VtZW50c1wiO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gZm9yIGEgbWV0aG9kIHdpdGggdGhlIGdpdmVuIG5hbWUgYW5kIG1ldGFkYXRhLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiAgICAgICAgVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB3aGljaCBpcyBiZWluZyB3cmFwcGVkLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5taW5BcmdzXG4gICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIG1vcmUgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBBc3luY0Z1bmN0aW9uID0gKG5hbWUsIG1ldGFkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgaWYgKG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAvLyBhbmQgc28gdGhlIHBvbHlmaWxsIHdpbGwgdHJ5IHRvIGNhbGwgaXQgd2l0aCBhIGNhbGxiYWNrIGZpcnN0LCBhbmQgaXQgd2lsbCBmYWxsYmFja1xuICAgICAgICAgICAgLy8gdG8gbm90IHBhc3NpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBmaXJzdCBjYWxsIGZhaWxzLlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7cmVzb2x2ZSwgcmVqZWN0fSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbGxpbmcgYmFjayB0byBjYWxsIGl0IHdpdGhvdXQgYSBjYWxsYmFjazogXCIsIGNiRXJyb3IpO1xuXG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcblxuICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAvLyB1c2UgdGhlIHVuc3VwcG9ydGVkIGNhbGxiYWNrIGFueW1vcmUuXG4gICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7cmVzb2x2ZSwgcmVqZWN0fSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAqIGludGVyY2VwdGVkIGJ5IHRoZSBnaXZlbiB3cmFwcGVyIGZ1bmN0aW9uLiBUaGUgd3JhcHBlciBmdW5jdGlvbiByZWNlaXZlcyxcbiAgICAgKiBhcyBpdHMgZmlyc3QgYXJndW1lbnQsIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YCBvYmplY3QsIGZvbGxvd2VkIGJ5IGVhY2ggb2ZcbiAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxuICAgICAqICAgICAgICBUaGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgdGFyZ2V0IG9mIHRoZSBQcm94eVxuICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlclxuICAgICAqICAgICAgICBUaGUgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgYSBkaXJlY3QgaW52b2NhdGlvblxuICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJveHk8ZnVuY3Rpb24+fVxuICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAqICAgICAgICBtZXRob2QgaW4gaXRzIHBsYWNlLlxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBNZXRob2QgPSAodGFyZ2V0LCBtZXRob2QsIHdyYXBwZXIpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgIGFwcGx5KHRhcmdldE1ldGhvZCwgdGhpc09iaiwgYXJncykge1xuICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNhbGwodGhpc09iaiwgdGFyZ2V0LCAuLi5hcmdzKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBsZXQgaGFzT3duUHJvcGVydHkgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgKiBiYXNlZCBvbiB0aGUgZ2l2ZW4gYHdyYXBwZXJzYCBhbmQgYG1ldGFkYXRhYCBvYmplY3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAqICAgICAgICBUaGUgdGFyZ2V0IG9iamVjdCB0byB3cmFwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBzcGVjaWFsIGNhc2VzLiBBbnlcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gcHJlc2VudCBpbiB0aGlzIG9iamVjdCB0cmVlIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiB0aGVcbiAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgKiAgICAgICAgd3JhcHBlciBtZXRob2RzIGFyZSBpbnZva2VkIGFzIGRlc2NyaWJlZCBpbiB7QHNlZSB3cmFwTWV0aG9kfS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyBtZXRhZGF0YSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVcbiAgICAgKiAgICAgICAgUHJvbWlzZS1iYXNlZCB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYXN5bmNocm9ub3VzLiBBbnkgZnVuY3Rpb24gaW5cbiAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICogICAgICAgIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgbWV0YWRhdGFgIHRyZWUgaXMgcmVwbGFjZWQgd2l0aCBhblxuICAgICAqICAgICAgICBhdXRvbWF0aWNhbGx5LWdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLCBhcyBkZXNjcmliZWQgaW5cbiAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJveHk8b2JqZWN0Pn1cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwT2JqZWN0ID0gKHRhcmdldCwgd3JhcHBlcnMgPSB7fSwgbWV0YWRhdGEgPSB7fSkgPT4ge1xuICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgaGFzKHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuIENoZWNrIGlmIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcnNbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgLy8gUHJvbWlzZSB3cmFwcGVyIGZvciBpdC5cbiAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmJpbmQodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgKGhhc093blByb3BlcnR5KHdyYXBwZXJzLCBwcm9wKSB8fFxuICAgICAgICAgICAgICAgICAgICAgIGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gb2JqZWN0IHRoYXQgd2UgbmVlZCB0byBkbyBzb21lIHdyYXBwaW5nIGZvciB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtcIipcIl0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgIC8vIHNvIGp1c3QgZm9yd2FyZCBhbGwgYWNjZXNzIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIGRlc2MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoY2FjaGUsIHByb3ApO1xuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgLy8gUGVyIGNvbnRyYWN0IG9mIHRoZSBQcm94eSBBUEksIHRoZSBcImdldFwiIHByb3h5IGhhbmRsZXIgbXVzdCByZXR1cm4gdGhlXG4gICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZS4gRm9yIHRoaXMgcmVhc29uLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICAvLyBwcm90b3R5cGUgc2V0IHRvIGB0YXJnZXRgIGluc3RlYWQgb2YgdXNpbmcgYHRhcmdldGAgZGlyZWN0bHkuXG4gICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgLy8gYXJlIGRlY2xhcmVkIHJlYWQtb25seSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSwgc3VjaCBhcyBgY2hyb21lLmRldnRvb2xzYC5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGBwcm94eVRhcmdldGAsIHNvIHRoYXQgdGhlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlXG4gICAgICAvLyBkZXJlZmVyZW5jZWQgdmlhIHRoZSBvcmlnaW5hbCB0YXJnZXRzLlxuICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgcmV0dXJuIG5ldyBQcm94eShwcm94eVRhcmdldCwgaGFuZGxlcnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2V0IG9mIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhbiBldmVudCBvYmplY3QsIHdoaWNoIGhhbmRsZXNcbiAgICAgKiB3cmFwcGluZyBvZiBsaXN0ZW5lciBmdW5jdGlvbnMgdGhhdCB0aG9zZSBtZXNzYWdlcyBhcmUgcGFzc2VkLlxuICAgICAqXG4gICAgICogQSBzaW5nbGUgd3JhcHBlciBpcyBjcmVhdGVkIGZvciBlYWNoIGxpc3RlbmVyIGZ1bmN0aW9uLCBhbmQgc3RvcmVkIGluIGFcbiAgICAgKiBtYXAuIFN1YnNlcXVlbnQgY2FsbHMgdG8gYGFkZExpc3RlbmVyYCwgYGhhc0xpc3RlbmVyYCwgb3IgYHJlbW92ZUxpc3RlbmVyYFxuICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAqIHByZXZpb3VzbHktYWRkZWQgbGlzdGVuZXIgd29yayBhcyBleHBlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAqICAgICAgICBBIERlZmF1bHRXZWFrTWFwIG9iamVjdCB3aGljaCB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgd3JhcHBlclxuICAgICAqICAgICAgICBmb3IgYSBnaXZlbiBsaXN0ZW5lciBmdW5jdGlvbiB3aGVuIG9uZSBkb2VzIG5vdCBleGlzdCwgYW5kIHJldHJpZXZlXG4gICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgIGFkZExpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIsIC4uLmFyZ3MpIHtcbiAgICAgICAgdGFyZ2V0LmFkZExpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSwgLi4uYXJncyk7XG4gICAgICB9LFxuXG4gICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQuaGFzTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3Qgb25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIG9uUmVxdWVzdEZpbmlzaGVkIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgd2lsbCByZXR1cm4gYVxuICAgICAgICogYGdldENvbnRlbnQoKWAgcHJvcGVydHkgd2hpY2ggcmV0dXJucyBhIGBQcm9taXNlYCByYXRoZXIgdGhhbiB1c2luZyBhXG4gICAgICAgKiBjYWxsYmFjayBBUEkuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHJlcVxuICAgICAgICogICAgICAgIFRoZSBIQVIgZW50cnkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgbmV0d29yayByZXF1ZXN0LlxuICAgICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gb25SZXF1ZXN0RmluaXNoZWQocmVxKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZWRSZXEgPSB3cmFwT2JqZWN0KHJlcSwge30gLyogd3JhcHBlcnMgKi8sIHtcbiAgICAgICAgICBnZXRDb250ZW50OiB7XG4gICAgICAgICAgICBtaW5BcmdzOiAwLFxuICAgICAgICAgICAgbWF4QXJnczogMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgbGlzdGVuZXIod3JhcHBlZFJlcSk7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb25NZXNzYWdlV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAqIGNhbGxiYWNrLiBJZiB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gcmV0dXJucyBhIFByb21pc2UsIHRoZSByZXNwb25zZSBpc1xuICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gbWVzc2FnZVxuICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAqICAgICAgICBEZXRhaWxzIGFib3V0IHRoZSBzZW5kZXIgb2YgdGhlIG1lc3NhZ2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAqICAgICAgICB0aGF0IHZhbHVlIGFzIGEgcmVzcG9uc2UuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICogICAgICAgIHlpZWxkIGEgcmVzcG9uc2UuIEZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICBsZXQgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB3cmFwcGVkU2VuZFJlc3BvbnNlO1xuICAgICAgICBsZXQgc2VuZFJlc3BvbnNlUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTtcblxuICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyByZXNwb25zZSBzZW50IGZyb20gdGhpcyBsaXN0ZW5lci5cbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEEgc21hbGwgaGVscGVyIHRvIHNlbmQgdGhlIG1lc3NhZ2UgaWYgdGhlIHByb21pc2UgcmVzb2x2ZXNcbiAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcbiAgICAgICAgLy8gcHJvbWlzZSkuXG4gICAgICAgIGNvbnN0IHNlbmRQcm9taXNlZFJlc3VsdCA9IChwcm9taXNlKSA9PiB7XG4gICAgICAgICAgcHJvbWlzZS50aGVuKG1zZyA9PiB7XG4gICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgLy8gUHJpbnQgYW4gZXJyb3Igb24gdGhlIGNvbnNvbGUgaWYgdW5hYmxlIHRvIHNlbmQgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgLy8gcmVzdWx0LCBvdGhlcndpc2Ugd2FpdCB0aGUgcHJvbWlzZSByZWxhdGVkIHRvIHRoZSB3cmFwcGVkU2VuZFJlc3BvbnNlXG4gICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cbiAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtyZWplY3QsIHJlc29sdmV9LCByZXBseSkgPT4ge1xuICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgLy8gRGV0ZWN0IHdoZW4gbm9uZSBvZiB0aGUgbGlzdGVuZXJzIHJlcGxpZWQgdG8gdGhlIHNlbmRNZXNzYWdlIGNhbGwgYW5kIHJlc29sdmVcbiAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlID09PSBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UpIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgLy8gQ29udmVydCBiYWNrIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpbnRvXG4gICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZENiID0gd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2suYmluZChudWxsLCB7cmVzb2x2ZSwgcmVqZWN0fSk7XG4gICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XG4gICAgICBkZXZ0b29sczoge1xuICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgb25SZXF1ZXN0RmluaXNoZWQ6IHdyYXBFdmVudChvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBydW50aW1lOiB7XG4gICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgb25NZXNzYWdlRXh0ZXJuYWw6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHttaW5BcmdzOiAxLCBtYXhBcmdzOiAzfSksXG4gICAgICB9LFxuICAgICAgdGFiczoge1xuICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7bWluQXJnczogMiwgbWF4QXJnczogM30pLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgIGNsZWFyOiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgICBnZXQ6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICAgIHNldDoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgIH07XG4gICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgIG5ldHdvcms6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICAgIHNlcnZpY2VzOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgICB3ZWJzaXRlczoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgIH07XG5cbiAgICByZXR1cm4gd3JhcE9iamVjdChleHRlbnNpb25BUElzLCBzdGF0aWNXcmFwcGVycywgYXBpTWV0YWRhdGEpO1xuICB9O1xuXG4gIC8vIFRoZSBidWlsZCBwcm9jZXNzIGFkZHMgYSBVTUQgd3JhcHBlciBhcm91bmQgdGhpcyBmaWxlLCB3aGljaCBtYWtlcyB0aGVcbiAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXMuYnJvd3Nlcjtcbn1cbiIsImV4cG9ydCBjb25zdCBpY29uX3N1biA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1vdXRsaW5lIGljb24tdGFibGVyLXN1blwiPjxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz48cGF0aCBkPVwiTTEyIDEybS00IDBhNCA0IDAgMSAwIDggMGE0IDQgMCAxIDAgLTggMFwiIC8+PHBhdGggZD1cIk0zIDEyaDFtOCAtOXYxbTggOGgxbS05IDh2MW0tNi40IC0xNS40bC43IC43bTEyLjEgLS43bC0uNyAuN20wIDExLjRsLjcgLjdtLTEyLjEgLS43bC0uNyAuN1wiIC8+PC9zdmc+YFxyXG5cclxuZXhwb3J0IGNvbnN0IGljb25fbW9vbiA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1vdXRsaW5lIGljb24tdGFibGVyLW1vb25cIj48cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48cGF0aCBkPVwiTTEyIDNjLjEzMiAwIC4yNjMgMCAuMzkzIDBhNy41IDcuNSAwIDAgMCA3LjkyIDEyLjQ0NmE5IDkgMCAxIDEgLTguMzEzIC0xMi40NTR6XCIgLz48L3N2Zz5gXHJcblxyXG5leHBvcnQgY29uc3QgaWNvbl9tb29uX2Z1bGwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiaWNvbiBpY29uLXRhYmxlciBpY29ucy10YWJsZXItb3V0bGluZSBpY29uLXRhYmxlci1tb29uLTJcIj48cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48cGF0aCBkPVwiTTE2LjQxOCA0LjE1N2E4IDggMCAwIDAgMCAxNS42ODZcIiAvPjxwYXRoIGQ9XCJNMTIgMTJtLTkgMGE5IDkgMCAxIDAgMTggMGE5IDkgMCAxIDAgLTE4IDBcIiAvPjwvc3ZnPmBcclxuXHJcbmV4cG9ydCBjb25zdCBpY29uX3NldHRpbmdzID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImljb24gaWNvbi10YWJsZXIgaWNvbnMtdGFibGVyLW91dGxpbmUgaWNvbi10YWJsZXItc2V0dGluZ3NcIj48cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48cGF0aCBkPVwiTTEwLjMyNSA0LjMxN2MuNDI2IC0xLjc1NiAyLjkyNCAtMS43NTYgMy4zNSAwYTEuNzI0IDEuNzI0IDAgMCAwIDIuNTczIDEuMDY2YzEuNTQzIC0uOTQgMy4zMSAuODI2IDIuMzcgMi4zN2ExLjcyNCAxLjcyNCAwIDAgMCAxLjA2NSAyLjU3MmMxLjc1NiAuNDI2IDEuNzU2IDIuOTI0IDAgMy4zNWExLjcyNCAxLjcyNCAwIDAgMCAtMS4wNjYgMi41NzNjLjk0IDEuNTQzIC0uODI2IDMuMzEgLTIuMzcgMi4zN2ExLjcyNCAxLjcyNCAwIDAgMCAtMi41NzIgMS4wNjVjLS40MjYgMS43NTYgLTIuOTI0IDEuNzU2IC0zLjM1IDBhMS43MjQgMS43MjQgMCAwIDAgLTIuNTczIC0xLjA2NmMtMS41NDMgLjk0IC0zLjMxIC0uODI2IC0yLjM3IC0yLjM3YTEuNzI0IDEuNzI0IDAgMCAwIC0xLjA2NSAtMi41NzJjLTEuNzU2IC0uNDI2IC0xLjc1NiAtMi45MjQgMCAtMy4zNWExLjcyNCAxLjcyNCAwIDAgMCAxLjA2NiAtMi41NzNjLS45NCAtMS41NDMgLjgyNiAtMy4zMSAyLjM3IC0yLjM3YzEgLjYwOCAyLjI5NiAuMDcgMi41NzIgLTEuMDY1elwiIC8+PHBhdGggZD1cIk05IDEyYTMgMyAwIDEgMCA2IDBhMyAzIDAgMCAwIC02IDBcIiAvPjwvc3ZnPmBcclxuXHJcbmV4cG9ydCBjb25zdCBpY29uX3BhaW50ID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImljb24gaWNvbi10YWJsZXIgaWNvbnMtdGFibGVyLW91dGxpbmUgaWNvbi10YWJsZXItcGFpbnRcIj48cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48cGF0aCBkPVwiTTUgM20wIDJhMiAyIDAgMCAxIDIgLTJoMTBhMiAyIDAgMCAxIDIgMnYyYTIgMiAwIDAgMSAtMiAyaC0xMGEyIDIgMCAwIDEgLTIgLTJ6XCIgLz48cGF0aCBkPVwiTTE5IDZoMWEyIDIgMCAwIDEgMiAyYTUgNSAwIDAgMSAtNSA1bC01IDB2MlwiIC8+PHBhdGggZD1cIk0xMCAxNW0wIDFhMSAxIDAgMCAxIDEgLTFoMmExIDEgMCAwIDEgMSAxdjRhMSAxIDAgMCAxIC0xIDFoLTJhMSAxIDAgMCAxIC0xIC0xelwiIC8+PC9zdmc+YFxyXG5cclxuZXhwb3J0IGNvbnN0IGljb25fcGFsZXR0ZSA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1vdXRsaW5lIGljb24tdGFibGVyLXBhbGV0dGVcIj48cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48cGF0aCBkPVwiTTEyIDIxYTkgOSAwIDAgMSAwIC0xOGM0Ljk3IDAgOSAzLjU4MiA5IDhjMCAxLjA2IC0uNDc0IDIuMDc4IC0xLjMxOCAyLjgyOGMtLjg0NCAuNzUgLTEuOTg5IDEuMTcyIC0zLjE4MiAxLjE3MmgtMi41YTIgMiAwIDAgMCAtMSAzLjc1YTEuMyAxLjMgMCAwIDEgLTEgMi4yNVwiIC8+PHBhdGggZD1cIk04LjUgMTAuNW0tMSAwYTEgMSAwIDEgMCAyIDBhMSAxIDAgMSAwIC0yIDBcIiAvPjxwYXRoIGQ9XCJNMTIuNSA3LjVtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwXCIgLz48cGF0aCBkPVwiTTE2LjUgMTAuNW0tMSAwYTEgMSAwIDEgMCAyIDBhMSAxIDAgMSAwIC0yIDBcIiAvPjwvc3ZnPmBcclxuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoXG4gICAgICBrZXkgPT09ICdkZWZhdWx0JyB8fFxuICAgICAga2V5ID09PSAnX19lc01vZHVsZScgfHxcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZXN0LCBrZXkpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwiLyogZXhwb3J0IGZ1bmN0aW9uIGhleFRvSFNMKGhleCkge1xyXG5cdGNvbnN0IHJlc3VsdCA9IHt9XHJcblx0aGV4ID0gaGV4LnN1YnN0cmluZygxKSAvLyBSZW1vdmUgbGVhZGluZyBcIiNcIiBzeW1ib2xcclxuXHJcblx0Y29uc3QgcmdiID0gaGV4Lm1hdGNoKC9bQS1GYS1mXFxkXXsyfS9nKS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gcGFyc2VJbnQodmFsdWUsIDE2KSAvIDI1NVxyXG5cdH0pXHJcblxyXG5cdGNvbnN0IHIgPSByZ2JbMF1cclxuXHRjb25zdCBnID0gcmdiWzFdXHJcblx0Y29uc3QgYiA9IHJnYlsyXVxyXG5cclxuXHRjb25zdCBtYXggPSBNYXRoLm1heChyLCBnLCBiKVxyXG5cdGNvbnN0IG1pbiA9IE1hdGgubWluKHIsIGcsIGIpXHJcblx0bGV0IGgsIHMsIGxcclxuXHJcblx0bCA9IChtYXggKyBtaW4pIC8gMlxyXG5cclxuXHRpZiAobWF4ID09PSBtaW4pIHtcclxuXHRcdGggPSBzID0gMCAvLyBBY2hyb21hdGljXHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnN0IGQgPSBtYXggLSBtaW5cclxuXHRcdHMgPSBsID4gMC41ID8gZCAvICgyIC0gbWF4IC0gbWluKSA6IGQgLyAobWF4ICsgbWluKVxyXG5cdFx0c3dpdGNoIChtYXgpIHtcclxuXHRcdFx0Y2FzZSByOlxyXG5cdFx0XHRcdGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgZzpcclxuXHRcdFx0XHRoID0gKGIgLSByKSAvIGQgKyAyXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSBiOlxyXG5cdFx0XHRcdGggPSAociAtIGcpIC8gZCArIDRcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0fVxyXG5cdFx0aCA9IE1hdGgucm91bmQoaCAqIDYwKVxyXG5cdH1cclxuXHJcblx0cmVzdWx0LmggPSBoICUgMzYwXHJcblx0cmVzdWx0LnMgPSBNYXRoLnJvdW5kKHMgKiAxMDApXHJcblx0cmVzdWx0LmwgPSBNYXRoLnJvdW5kKGwgKiAxMDApXHJcblxyXG5cdHJldHVybiByZXN1bHRcclxufSAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvSFNMKGhleCkge1xyXG5cdC8vIENvbnZlcnQgaGV4IHRvIFJHQiBmaXJzdFxyXG5cdGxldCByID0gMCxcclxuXHRcdGcgPSAwLFxyXG5cdFx0YiA9IDBcclxuXHRpZiAoaGV4Lmxlbmd0aCA9PT0gNCkge1xyXG5cdFx0ciA9IHBhcnNlSW50KGhleFsxXSArIGhleFsxXSwgMTYpXHJcblx0XHRnID0gcGFyc2VJbnQoaGV4WzJdICsgaGV4WzJdLCAxNilcclxuXHRcdGIgPSBwYXJzZUludChoZXhbM10gKyBoZXhbM10sIDE2KVxyXG5cdH0gZWxzZSBpZiAoaGV4Lmxlbmd0aCA9PT0gNykge1xyXG5cdFx0ciA9IHBhcnNlSW50KGhleC5zbGljZSgxLCAzKSwgMTYpXHJcblx0XHRnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNilcclxuXHRcdGIgPSBwYXJzZUludChoZXguc2xpY2UoNSwgNyksIDE2KVxyXG5cdH1cclxuXHJcblx0Ly8gVGhlbiBjb252ZXJ0IFJHQiB0byBIU0xcclxuXHRyIC89IDI1NVxyXG5cdGcgLz0gMjU1XHJcblx0YiAvPSAyNTVcclxuXHRjb25zdCBtYXggPSBNYXRoLm1heChyLCBnLCBiKVxyXG5cdGNvbnN0IG1pbiA9IE1hdGgubWluKHIsIGcsIGIpXHJcblx0bGV0IGgsXHJcblx0XHRzLFxyXG5cdFx0bCA9IChtYXggKyBtaW4pIC8gMlxyXG5cclxuXHRpZiAobWF4ID09PSBtaW4pIHtcclxuXHRcdGggPSBzID0gMCAvLyBhY2hyb21hdGljXHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnN0IGQgPSBtYXggLSBtaW5cclxuXHRcdHMgPSBsID4gMC41ID8gZCAvICgyIC0gbWF4IC0gbWluKSA6IGQgLyAobWF4ICsgbWluKVxyXG5cdFx0c3dpdGNoIChtYXgpIHtcclxuXHRcdFx0Y2FzZSByOlxyXG5cdFx0XHRcdGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgZzpcclxuXHRcdFx0XHRoID0gKGIgLSByKSAvIGQgKyAyXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSBiOlxyXG5cdFx0XHRcdGggPSAociAtIGcpIC8gZCArIDRcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0fVxyXG5cdFx0aCAvPSA2XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gW01hdGgucm91bmQoaCAqIDM2MCksIE1hdGgucm91bmQocyAqIDEwMCksIE1hdGgucm91bmQobCAqIDEwMCldXHJcbn1cclxuIiwiaW1wb3J0IGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJ1xyXG5pbXBvcnQgeyBweFRvUmVtIH0gZnJvbSAnLi4vdXRpbHMvZm9udHNDb252ZXJ0aW5nJ1xyXG5pbXBvcnQgeyByZW5kZXJGb250LCByZW5kZXJGb250QmlnQ2FyZHMsIHJlbmRlckJ1dHRvbiB9IGZyb20gJy4vY29tcG9uZW50cy9yZW5kZXJGb250cydcclxuXHJcbmNvbnN0IGRlZmF1bHRGb250RmFtaWx5ID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tZi1mYW1pbHktZGVmYXVsdCcpXHJcbmNvbnN0IGRlZmF1bHRGb250U2l6ZSA9ICcxNidcclxuY29uc3QgZGVmYXVsdExldHRlclNwYWNpbmcgPSAnMCdcclxuY29uc3QgZGVmYXVsdExpbmVIZWlnaHQgPSAyOFxyXG5cclxuY29uc3QgZm9udE5hbWVzID0gW1xyXG5cdCdEZWZhdWx0JyxcclxuXHQnSW50ZXInLFxyXG5cdCdSb2JvdG8nLFxyXG5cdCdSb2JvdG8gTW9ubycsXHJcblx0J0RNIFNhbnMnLFxyXG5cdCdSZWRkaXQgTW9ubycsXHJcblx0J1BvcHBpbnMnLFxyXG5cdCdOb3RvIFNhbnMnLFxyXG5cdCdNb25vc3BhY2UnLFxyXG5cdCdMYXRvJyxcclxuXHQnUXVpY2tzYW5kJyxcclxuXHQnT3V0Zml0JyxcclxuXVxyXG5cclxubGV0IGdvb2dsZUZvbnRXZWlnaHRzID0gYDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDBgXHJcbmxldCBjdXJyRm9udEhyZWYgPSBudWxsXHJcblxyXG5sZXQgb25Gb2N1c1ZhbEZvbnRTaXplID0gbnVsbCxcclxuXHRvbkZvY3VzVmFsTGluZUhlaWdodCA9IG51bGwsXHJcblx0b25Gb2N1c1ZhbExldHRlclNwYWNpbmcgPSBudWxsXHJcblxyXG5leHBvcnQgbGV0IGZvbnRIdG1sQ29kZSA9IGBcclxuXHQ8c2VjdGlvbiBpZD1cImZvbnRDaGFuZ2VyUG9wb3ZlclwiIGNsYXNzPVwiZm9udHNcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJmb250c19fcHJvcHNcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImZvbnRzX19mYW1pbHkgZm9udHNfX2dyb3VwIGNhcmQgY2FyZC0tYmlnIGgtZnVsbFwiPlxyXG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJmb250RmFtaWx5XCIgY2xhc3M9XCJncmlkIGdhcC0xIGgtZnVsbCB3LWZ1bGxcIj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzPVwiY2FyZF9fdW5pdCBjYXJkX19pY29uXCI+VDwvcD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJjYXJkX19uYW1lIHVwcGVyY2FzZSBmb250LXNlbWlib2xkXCI+Rk9OVCBGQU1JTFk8L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxzZWxlY3QgaWQ9XCJmb250RmFtaWx5XCIgY2xhc3M9XCJib3JkZXItbm9uZSBvdXRsaW5lLW5vbmUgZm9jdXM6bm9uZSBmb250LWJvbGRcIj5cclxuXHRcdFx0XHRcdFx0XHQke2ZvbnROYW1lcy5tYXAoKG5hbWUpID0+IGA8b3B0aW9uIHZhbHVlPVwiJHtuYW1lID09PSAnRGVmYXVsdCcgPyBkZWZhdWx0Rm9udEZhbWlseSA6IG5hbWV9XCI+JHtuYW1lfTwvb3B0aW9uPmApLmpvaW4oJycpfVxyXG5cdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQke3JlbmRlckZvbnRCaWdDYXJkcyh7XHJcblx0XHRcdFx0bmFtZTogJ0ZvbnQgU2l6ZScsXHJcblx0XHRcdFx0Y2xhc3NOYW1lOiAnZm9udHNfX3NpemUnLFxyXG5cdFx0XHRcdGlucHV0SWQ6ICdmb250U2l6ZScsXHJcblx0XHRcdFx0aW5wdXRUeXBlOiAnbnVtYmVyJyxcclxuXHRcdFx0XHRpbnB1dFZhbHVlOiBkZWZhdWx0Rm9udFNpemUsXHJcblx0XHRcdFx0aW5wdXRQbGFjZWhvbGRlcjogZGVmYXVsdEZvbnRTaXplLFxyXG5cdFx0XHRcdHVuaXQ6ICdweCcsXHJcblx0XHRcdFx0bWluOiAxMixcclxuXHRcdFx0XHRtYXg6IDI0LFxyXG5cdFx0XHR9KX1cclxuXHRcdFx0JHtyZW5kZXJGb250KHtcclxuXHRcdFx0XHRuYW1lOiAnTGluZSBIZWlnaHQnLFxyXG5cdFx0XHRcdGNsYXNzTmFtZTogJ2ZvbnRzX19saW5lSGVpZ2h0JyxcclxuXHRcdFx0XHRpbnB1dElkOiAnbGluZUhlaWdodCcsXHJcblx0XHRcdFx0aW5wdXRUeXBlOiAnbnVtYmVyJyxcclxuXHRcdFx0XHRpbnB1dFZhbHVlOiBkZWZhdWx0TGluZUhlaWdodCxcclxuXHRcdFx0XHRpbnB1dFBsYWNlaG9sZGVyOiBkZWZhdWx0TGluZUhlaWdodCxcclxuXHRcdFx0XHR1bml0OiAncHgnLFxyXG5cdFx0XHRcdG1pbjogMTIsXHJcblx0XHRcdFx0bWF4OiA2MCxcclxuXHRcdFx0fSl9XHJcblx0XHRcdCR7cmVuZGVyRm9udCh7XHJcblx0XHRcdFx0bmFtZTogJ0xldHRlciBTcGFjaW5nJyxcclxuXHRcdFx0XHRjbGFzc05hbWU6ICdmb250c19fbGV0dGVyU3BhY2luZycsXHJcblx0XHRcdFx0aW5wdXRJZDogJ2xldHRlclNwYWNpbmcnLFxyXG5cdFx0XHRcdGlucHV0VHlwZTogJ251bWJlcicsXHJcblx0XHRcdFx0aW5wdXRWYWx1ZTogZGVmYXVsdExldHRlclNwYWNpbmcsXHJcblx0XHRcdFx0aW5wdXRQbGFjZWhvbGRlcjogZGVmYXVsdExldHRlclNwYWNpbmcsXHJcblx0XHRcdFx0dW5pdDogJ3B4JyxcclxuXHRcdFx0XHRtaW46IC0zMCxcclxuXHRcdFx0XHRtYXg6IDMwLFxyXG5cdFx0XHR9KX1cclxuXHRcdDwvZGl2PlxyXG5cclxuXHRcdDxmb290ZXIgY2xhc3M9XCJncmlkIG10LTEwXCI+XHJcblx0XHRcdCR7cmVuZGVyQnV0dG9uKHsgaWQ6ICdyZXNldEZvbnQnLCBjb250ZW50OiAnUmVzZXQgRm9udHMnLCBkaXNhYmxlZDogZmFsc2UsIGNsYXNzTmFtZTogJ2J0bi1wcmltYXJ5JyB9KX1cclxuXHRcdDwvZm9vdGVyPlxyXG5cdDwvc2VjdGlvbj5cclxuYFxyXG5cclxuZnVuY3Rpb24gc2V0Q1NTVmFyKHsgdmFyTmFtZSwgdmFyVmFsdWUgfSkge1xyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YXJWYWx1ZSlcclxufVxyXG5mdW5jdGlvbiBzZXRJbnB1dEZpZWxkKHsgaW5wdXRTZWxlY3RvciwgaW5wdXRWYWwgfSkge1xyXG5cdGxldCBpbnB1dEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdwdGgtc2V0dGluZ3MgJHtpbnB1dFNlbGVjdG9yfWApXHJcblxyXG5cdGlmIChpbnB1dFZhbCA9PT0gJ0RlZmF1bHQnKSB7XHJcblx0XHRpbnB1dEVsLnZhbHVlID0gZGVmYXVsdEZvbnRGYW1pbHlcclxuXHR9IGVsc2Uge1xyXG5cdFx0aW5wdXRFbC52YWx1ZSA9IGlucHV0VmFsXHJcblx0fVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGdldEZvbnRzRnJvbVN0b3JhZ2UoKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoWydmb250RmFtaWx5JywgJ2ZvbnRTaXplJywgJ2xldHRlclNwYWNpbmcnLCAnbGluZUhlaWdodCddKVxyXG5cclxuXHRcdC8vIGNvbnNvbGUubG9nKCdkYXRhOiAnLCBkYXRhKVxyXG5cclxuXHRcdGlmIChkYXRhLmZvbnRGYW1pbHkpIHtcclxuXHRcdFx0c2V0Q1NTVmFyKHsgdmFyTmFtZTogJy0tZi1mYW1pbHknLCB2YXJWYWx1ZTogYCR7ZGF0YS5mb250RmFtaWx5fSwgJHtkZWZhdWx0Rm9udEZhbWlseX1gIH0pXHJcblx0XHRcdHNldElucHV0RmllbGQoeyBpbnB1dFNlbGVjdG9yOiAnI2ZvbnRGYW1pbHknLCBpbnB1dFZhbDogZGF0YS5mb250RmFtaWx5IH0pXHJcblxyXG5cdFx0XHQvLyBMb2FkIHNlbGVjdGVkIGZvbnQgZnJvbSBHb29nbGUgRm9udHNcclxuXHRcdFx0Y3JlYXRlQW5kSW5qZWN0TGlua0VsZW1lbnQoZGF0YS5mb250RmFtaWx5KVxyXG5cdFx0fVxyXG5cdFx0aWYgKGRhdGEuZm9udFNpemUpIHtcclxuXHRcdFx0c2V0Q1NTVmFyKHsgdmFyTmFtZTogJy0tZi1zaXplJywgdmFyVmFsdWU6IGAke3B4VG9SZW0oZGF0YS5mb250U2l6ZSl9YCB9KVxyXG5cdFx0XHRzZXRJbnB1dEZpZWxkKHsgaW5wdXRTZWxlY3RvcjogJyNmb250U2l6ZScsIGlucHV0VmFsOiBkYXRhLmZvbnRTaXplIH0pXHJcblx0XHR9XHJcblx0XHRpZiAoZGF0YS5sZXR0ZXJTcGFjaW5nKSB7XHJcblx0XHRcdHNldENTU1Zhcih7IHZhck5hbWU6ICctLWYtbGV0dGVyLXNwYWNpbmcnLCB2YXJWYWx1ZTogYCR7ZGF0YS5sZXR0ZXJTcGFjaW5nfXB4YCB9KVxyXG5cdFx0XHRzZXRJbnB1dEZpZWxkKHsgaW5wdXRTZWxlY3RvcjogJyNsZXR0ZXJTcGFjaW5nJywgaW5wdXRWYWw6IGRhdGEubGV0dGVyU3BhY2luZyB9KVxyXG5cdFx0fVxyXG5cdFx0aWYgKGRhdGEubGluZUhlaWdodCkge1xyXG5cdFx0XHRzZXRDU1NWYXIoeyB2YXJOYW1lOiAnLS1mLWxpbmUtaGVpZ2h0JywgdmFyVmFsdWU6IGRhdGEubGluZUhlaWdodCB9KVxyXG5cdFx0XHRzZXRJbnB1dEZpZWxkKHsgaW5wdXRTZWxlY3RvcjogJyNsaW5lSGVpZ2h0JywgaW5wdXRWYWw6IGRhdGEubGluZUhlaWdodCB9KVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIGZvbnRzIGZyb20gc3RvcmFnZTonLCBlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldFByb3BUb1N0b3JhZ2UoeyBwcm9wTmFtZSwgcHJvcFZhbCB9KSB7XHJcblx0Ly8gU2F2ZSBzZWxlY3RlZCBmb250IHRvIHN0b3JhZ2VcclxuXHRhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyBbcHJvcE5hbWVdOiBwcm9wVmFsIH0pXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gcmVtb3ZlRm9udHNGcm9tU3RvcmFnZSgpIHtcclxuXHRhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5yZW1vdmUoWydmb250RmFtaWx5JywgJ2ZvbnRTaXplJywgJ2xldHRlclNwYWNpbmcnLCAnbGluZUhlaWdodCddKVxyXG59XHJcblxyXG4vLyBDcmVhdGUgdGhlIDxsaW5rPiBpbiA8aGVhZD4gd2hpY2ggd2lsbCBmZXRjaCB0aGUgc2VsZWN0ZWQgZm9udCBmcm9tIEdvb2dsZSBGb250c1xyXG5mdW5jdGlvbiBjcmVhdGVBbmRJbmplY3RMaW5rRWxlbWVudChmb250RmFtaWx5KSB7XHJcblx0bGV0IGhyZWYgPSBgaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT0ke2ZvbnRGYW1pbHkucmVwbGFjZShcclxuXHRcdCcgJyxcclxuXHRcdCcrJ1xyXG5cdCl9JHtnb29nbGVGb250V2VpZ2h0c30mZGlzcGxheT1zd2FwYFxyXG5cclxuXHQvLyBBa28gamUgaHJlZiA9PSBjdXJyRm9udEhyZWYsIG5lIGRvZGFqZW1vIGxpbmshXHJcblx0aWYgKGN1cnJGb250SHJlZiAmJiBjdXJyRm9udEhyZWYgPT09IGhyZWYpIHJldHVyblxyXG5cclxuXHQvLyBUT0RPIENoZWNrIGlmIHRoZSBsaW5rIGlzIGFscmVhZHkgaW5qZWN0ZWRcclxuXHJcblx0Ly8gUmVtb3ZlIGV4aXN0aW5nIEdvb2dsZSBGb250IGxpbmtzXHJcblx0cmVtb3ZlRXhpc3RpbmdHb29nbGVGb250TGlua3MoKVxyXG5cclxuXHRjdXJyRm9udEhyZWYgPSBocmVmXHJcblxyXG5cdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcclxuXHRsaW5rLnJlbCA9ICdzdHlsZXNoZWV0J1xyXG5cdGxpbmsuaHJlZiA9IGhyZWZcclxuXHJcblx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxyXG5cclxuXHRyZXR1cm4gbGlua1xyXG59XHJcbmZ1bmN0aW9uIGdldEFsbEdvb2dsZUZvbnRMaW5rcygpIHtcclxuXHQvLyBTZWxlY3QgYWxsIGxpbmsgZWxlbWVudHMgaW4gdGhlIGhlYWRcclxuXHRjb25zdCBsaW5rRWxlbWVudHMgPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmsnKVxyXG5cclxuXHQvLyBGaWx0ZXIgdGhlIGxpbmsgZWxlbWVudHMgdG8gZmluZCB0aG9zZSBmZXRjaGluZyBHb29nbGUgRm9udHNcclxuXHRjb25zdCBnb29nbGVGb250TGlua3MgPSBBcnJheS5mcm9tKGxpbmtFbGVtZW50cykuZmlsdGVyKChsaW5rKSA9PiBsaW5rLmhyZWYuaW5jbHVkZXMoJ2ZvbnRzLmdvb2dsZWFwaXMuY29tJykpXHJcblxyXG5cdHJldHVybiBnb29nbGVGb250TGlua3NcclxufVxyXG5mdW5jdGlvbiByZW1vdmVFeGlzdGluZ0dvb2dsZUZvbnRMaW5rcygpIHtcclxuXHRsZXQgZ29vZ2xlRm9udExpbmtzID0gZ2V0QWxsR29vZ2xlRm9udExpbmtzKClcclxuXHRjdXJyRm9udEhyZWYgPSBudWxsXHJcblx0Ly8gUmVtb3ZlIGFsbCBleGlzdGluZyBHb29nbGUgRm9udCBsaW5rc1xyXG5cdGdvb2dsZUZvbnRMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcblx0XHRsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluaylcclxuXHR9KVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldFRvRGVmYXVsdHMoKSB7XHJcblx0Ly8gUmVzZXQgQ1NTIHZhcmlhYmxlcyB0byBkZWZhdWx0IHZhbHVlc1xyXG5cdHNldENTU1Zhcih7IHZhck5hbWU6ICctLWYtZmFtaWx5JywgdmFyVmFsdWU6IGRlZmF1bHRGb250RmFtaWx5IH0pXHJcblx0c2V0Q1NTVmFyKHsgdmFyTmFtZTogJy0tZi1zaXplJywgdmFyVmFsdWU6IGAke3B4VG9SZW0oZGVmYXVsdEZvbnRTaXplKX1gIH0pXHJcblx0c2V0Q1NTVmFyKHsgdmFyTmFtZTogJy0tZi1sZXR0ZXItc3BhY2luZycsIHZhclZhbHVlOiBgJHtkZWZhdWx0TGV0dGVyU3BhY2luZ31weGAgfSlcclxuXHRzZXRDU1NWYXIoeyB2YXJOYW1lOiAnLS1mLWxpbmUtaGVpZ2h0JywgdmFyVmFsdWU6IGRlZmF1bHRMaW5lSGVpZ2h0IH0pXHJcblxyXG5cdC8vIFJlc2V0IGlucHV0IGZpZWxkcyB0byBkZWZhdWx0IHZhbHVlc1xyXG5cdHNldElucHV0RmllbGQoeyBpbnB1dFNlbGVjdG9yOiAnI2ZvbnRGYW1pbHknLCBpbnB1dFZhbDogJ0RlZmF1bHQnIH0pXHJcblx0c2V0SW5wdXRGaWVsZCh7IGlucHV0U2VsZWN0b3I6ICcjZm9udFNpemUnLCBpbnB1dFZhbDogZGVmYXVsdEZvbnRTaXplIH0pXHJcblx0c2V0SW5wdXRGaWVsZCh7IGlucHV0U2VsZWN0b3I6ICcjbGV0dGVyU3BhY2luZycsIGlucHV0VmFsOiBkZWZhdWx0TGV0dGVyU3BhY2luZyB9KVxyXG5cdHNldElucHV0RmllbGQoeyBpbnB1dFNlbGVjdG9yOiAnI2xpbmVIZWlnaHQnLCBpbnB1dFZhbDogZGVmYXVsdExpbmVIZWlnaHQgfSlcclxuXHJcblx0Ly8gUmVtb3ZlIGN1c3RvbSBmb250IGxpbmsgZnJvbSB0aGUgaGVhZFxyXG5cdHJlbW92ZUV4aXN0aW5nR29vZ2xlRm9udExpbmtzKClcclxuXHJcblx0Ly8gUmVtb3ZlIGN1c3RvbSBmb250IHNldHRpbmdzIGZyb20gY2hyb21lLnN0b3JhZ2VcclxuXHRyZW1vdmVGb250c0Zyb21TdG9yYWdlKClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Rm9udEZhbWlseShlKSB7XHJcblx0Y29uc3QgZm9udEZhbWlseSA9IGUudGFyZ2V0LnZhbHVlXHJcblxyXG5cdC8vIENyZWF0ZSB0aGUgPGxpbms+IGluIDxoZWFkPiB3aGljaCB3aWxsIGZldGNoIHRoZSBzZWxlY3RlZCBmb250IGZyb20gR29vZ2xlIEZvbnRzXHJcblx0Y3JlYXRlQW5kSW5qZWN0TGlua0VsZW1lbnQoZm9udEZhbWlseSlcclxuXHJcblx0Ly8gQXBwbHkgQ1NTIHZhcmlhYmxlc1xyXG5cdHNldENTU1Zhcih7IHZhck5hbWU6ICctLWYtZmFtaWx5JywgdmFyVmFsdWU6IGAke2ZvbnRGYW1pbHl9LCAke2RlZmF1bHRGb250RmFtaWx5fWAgfSlcclxuXHJcblx0Ly8gU2F2ZSBzZXR0aW5ncyB0byBjaHJvbWUuc3RvcmFnZVxyXG5cdHNldFByb3BUb1N0b3JhZ2UoeyBwcm9wTmFtZTogJ2ZvbnRGYW1pbHknLCBwcm9wVmFsOiBmb250RmFtaWx5IH0pXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Rm9udFNpemUoZSkge1xyXG5cdGNvbnN0IGZvbnRTaXplID0gZm9ybWF0TnVtYmVyKGUudGFyZ2V0LnZhbHVlLCA0KVxyXG5cdG9uRm9jdXNWYWxGb250U2l6ZSA9IGZvcm1hdE51bWJlcihvbkZvY3VzVmFsRm9udFNpemUsIDQpXHJcblxyXG5cdGNvbnNvbGUubG9nKCdhcHBseUZvbnRTaXplKCknLCBmb250U2l6ZSlcclxuXHRjb25zb2xlLmxvZygnYXBwbHlGb250U2l6ZSgpJywgb25Gb2N1c1ZhbEZvbnRTaXplKVxyXG5cclxuXHRzZXRJbnB1dEZpZWxkKHsgaW5wdXRTZWxlY3RvcjogJyNmb250U2l6ZScsIGlucHV0VmFsOiBmb250U2l6ZSB9KVxyXG5cclxuXHRpZiAob25Gb2N1c1ZhbEZvbnRTaXplID09IGZvbnRTaXplKSByZXR1cm4gY29uc29sZS5sb2coJ29uRm9jdXNWYWxGb250U2l6ZSgpJywgb25Gb2N1c1ZhbEZvbnRTaXplKVxyXG5cclxuXHRsZXQgaXNWYWxpZCA9IHZhbGlkYXRlSW5wdXRGaWVsZCh7XHJcblx0XHRpbnB1dFZhbHVlOiBmb250U2l6ZSxcclxuXHRcdG1pbjogMTIsXHJcblx0XHRtYXg6IDI0LFxyXG5cdH0pXHJcblxyXG5cdGlmICghaXNWYWxpZCkge1xyXG5cdFx0Ly8gZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuXHRcdHNldElucHV0RmllbGQoeyBpbnB1dFNlbGVjdG9yOiAnI2ZvbnRTaXplJywgaW5wdXRWYWw6IGRlZmF1bHRGb250U2l6ZSB9KVxyXG5cclxuXHRcdC8vIEFwcGx5IENTUyB2YXJpYWJsZXNcclxuXHRcdHNldENTU1Zhcih7IHZhck5hbWU6ICctLWYtc2l6ZScsIHZhclZhbHVlOiBgJHtweFRvUmVtKGRlZmF1bHRGb250U2l6ZSl9YCB9KVxyXG5cclxuXHRcdC8vIFNhdmUgc2V0dGluZ3MgdG8gY2hyb21lLnN0b3JhZ2VcclxuXHRcdHNldFByb3BUb1N0b3JhZ2UoeyBwcm9wTmFtZTogJ2ZvbnRTaXplJywgcHJvcFZhbDogZGVmYXVsdEZvbnRTaXplIH0pXHJcblx0XHQvLyB9KVxyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cclxuXHQvLyBBcHBseSBDU1MgdmFyaWFibGVzXHJcblx0c2V0Q1NTVmFyKHsgdmFyTmFtZTogJy0tZi1zaXplJywgdmFyVmFsdWU6IGAke3B4VG9SZW0oZm9udFNpemUpfWAgfSlcclxuXHJcblx0Ly8gU2F2ZSBzZXR0aW5ncyB0byBjaHJvbWUuc3RvcmFnZVxyXG5cdHNldFByb3BUb1N0b3JhZ2UoeyBwcm9wTmFtZTogJ2ZvbnRTaXplJywgcHJvcFZhbDogZm9udFNpemUgfSlcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlMaW5lSGVpZ2h0KGUpIHtcclxuXHRjb25zdCBsaW5lSGVpZ2h0ID0gZm9ybWF0TnVtYmVyKGUudGFyZ2V0LnZhbHVlKVxyXG5cdG9uRm9jdXNWYWxMaW5lSGVpZ2h0ID0gZm9ybWF0TnVtYmVyKG9uRm9jdXNWYWxMaW5lSGVpZ2h0KVxyXG5cdGNvbnNvbGUubG9nKCdhcHBseUxpbmVIZWlnaHQoKScsIGxpbmVIZWlnaHQsIG9uRm9jdXNWYWxMaW5lSGVpZ2h0KVxyXG5cclxuXHRzZXRJbnB1dEZpZWxkKHsgaW5wdXRTZWxlY3RvcjogJyNsaW5lSGVpZ2h0JywgaW5wdXRWYWw6IGxpbmVIZWlnaHQgfSlcclxuXHJcblx0aWYgKG9uRm9jdXNWYWxMaW5lSGVpZ2h0ID09IGxpbmVIZWlnaHQpIHJldHVyblxyXG5cclxuXHRsZXQgaXNWYWxpZCA9IHZhbGlkYXRlSW5wdXRGaWVsZCh7XHJcblx0XHRpbnB1dFZhbHVlOiBsaW5lSGVpZ2h0LFxyXG5cdFx0bWluOiAxMixcclxuXHRcdG1heDogNjAsXHJcblx0fSlcclxuXHJcblx0aWYgKCFpc1ZhbGlkKSB7XHJcblx0XHRzZXRJbnB1dEZpZWxkKHsgaW5wdXRTZWxlY3RvcjogJyNsaW5lSGVpZ2h0JywgaW5wdXRWYWw6IGRlZmF1bHRMaW5lSGVpZ2h0IH0pXHJcblxyXG5cdFx0Ly8gQXBwbHkgQ1NTIHZhcmlhYmxlc1xyXG5cdFx0c2V0Q1NTVmFyKHsgdmFyTmFtZTogJy0tZi1saW5lLWhlaWdodCcsIHZhclZhbHVlOiBkZWZhdWx0TGluZUhlaWdodCB9KVxyXG5cclxuXHRcdC8vIFNhdmUgc2V0dGluZ3MgdG8gY2hyb21lLnN0b3JhZ2VcclxuXHRcdHNldFByb3BUb1N0b3JhZ2UoeyBwcm9wTmFtZTogJ2xpbmVIZWlnaHQnLCBwcm9wVmFsOiBkZWZhdWx0TGluZUhlaWdodCB9KVxyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cclxuXHQvLyBBcHBseSBDU1MgdmFyaWFibGVzXHJcblx0c2V0Q1NTVmFyKHsgdmFyTmFtZTogJy0tZi1saW5lLWhlaWdodCcsIHZhclZhbHVlOiBsaW5lSGVpZ2h0IH0pXHJcblxyXG5cdC8vIFNhdmUgc2V0dGluZ3MgdG8gY2hyb21lLnN0b3JhZ2VcclxuXHRzZXRQcm9wVG9TdG9yYWdlKHsgcHJvcE5hbWU6ICdsaW5lSGVpZ2h0JywgcHJvcFZhbDogbGluZUhlaWdodCB9KVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseUxldHRlclNwYWNpbmcoZSkge1xyXG5cdC8vIGNvbnN0IGxldHRlclNwYWNpbmcgPSBmb3JtYXROdW1iZXIoZS50YXJnZXQudmFsdWUpXHJcblx0Y29uc3QgbGV0dGVyU3BhY2luZyA9IGZvcm1hdE51bWJlcihlLnRhcmdldC52YWx1ZSlcclxuXHRvbkZvY3VzVmFsTGV0dGVyU3BhY2luZyA9IGZvcm1hdE51bWJlcihvbkZvY3VzVmFsTGV0dGVyU3BhY2luZylcclxuXHJcblx0Y29uc29sZS5sb2coJ2FwcGx5TGV0dGVyU3BhY2luZygpJywgbGV0dGVyU3BhY2luZywgb25Gb2N1c1ZhbExldHRlclNwYWNpbmcpXHJcblxyXG5cdHNldElucHV0RmllbGQoeyBpbnB1dFNlbGVjdG9yOiAnI2xldHRlclNwYWNpbmcnLCBpbnB1dFZhbDogbGV0dGVyU3BhY2luZyB9KVxyXG5cclxuXHRpZiAoZm9ybWF0TnVtYmVyKG9uRm9jdXNWYWxMZXR0ZXJTcGFjaW5nKSA9PSBsZXR0ZXJTcGFjaW5nKSByZXR1cm5cclxuXHJcblx0bGV0IGlzVmFsaWQgPSB2YWxpZGF0ZUlucHV0RmllbGQoe1xyXG5cdFx0aW5wdXRWYWx1ZTogbGV0dGVyU3BhY2luZyxcclxuXHRcdG1pbjogLTMwLFxyXG5cdFx0bWF4OiAzMCxcclxuXHR9KVxyXG5cclxuXHRpZiAoIWlzVmFsaWQpIHtcclxuXHRcdHNldElucHV0RmllbGQoeyBpbnB1dFNlbGVjdG9yOiAnI2xldHRlclNwYWNpbmcnLCBpbnB1dFZhbDogZGVmYXVsdExldHRlclNwYWNpbmcgfSlcclxuXHJcblx0XHQvLyBBcHBseSBDU1MgdmFyaWFibGVzXHJcblx0XHRzZXRDU1NWYXIoeyB2YXJOYW1lOiAnLS1mLWxldHRlci1zcGFjaW5nJywgdmFyVmFsdWU6IGAke2RlZmF1bHRMZXR0ZXJTcGFjaW5nfXB4YCB9KVxyXG5cclxuXHRcdC8vIFNhdmUgc2V0dGluZ3MgdG8gY2hyb21lLnN0b3JhZ2VcclxuXHRcdHNldFByb3BUb1N0b3JhZ2UoeyBwcm9wTmFtZTogJ2xldHRlclNwYWNpbmcnLCBwcm9wVmFsOiBkZWZhdWx0TGV0dGVyU3BhY2luZyB9KVxyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cclxuXHQvLyBBcHBseSBDU1MgdmFyaWFibGVzXHJcblx0c2V0Q1NTVmFyKHsgdmFyTmFtZTogJy0tZi1sZXR0ZXItc3BhY2luZycsIHZhclZhbHVlOiBgJHtsZXR0ZXJTcGFjaW5nfXB4YCB9KVxyXG5cclxuXHQvLyBTYXZlIHNldHRpbmdzIHRvIGNocm9tZS5zdG9yYWdlXHJcblx0c2V0UHJvcFRvU3RvcmFnZSh7IHByb3BOYW1lOiAnbGV0dGVyU3BhY2luZycsIHByb3BWYWw6IGxldHRlclNwYWNpbmcgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEZvbnRzRXZlbnRIYW5kbGVycygpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aC1zZXR0aW5ncyAjcmVzZXRGb250JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldFRvRGVmYXVsdHMpXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdwdGgtc2V0dGluZ3MgI2ZvbnRGYW1pbHknKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBhcHBseUZvbnRGYW1pbHkpXHJcblxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoLXNldHRpbmdzICNmb250U2l6ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBhcHBseUZvbnRTaXplKVxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoLXNldHRpbmdzICNsaW5lSGVpZ2h0JykuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGFwcGx5TGluZUhlaWdodClcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aC1zZXR0aW5ncyAjbGV0dGVyU3BhY2luZycpLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBhcHBseUxldHRlclNwYWNpbmcpXHJcblxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoLXNldHRpbmdzICNmb250U2l6ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGUpID0+IHtcclxuXHRcdG9uRm9jdXNWYWxGb250U2l6ZSA9IGUudGFyZ2V0LnZhbHVlXHJcblx0fSlcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aC1zZXR0aW5ncyAjbGluZUhlaWdodCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGUpID0+IHtcclxuXHRcdG9uRm9jdXNWYWxMaW5lSGVpZ2h0ID0gZS50YXJnZXQudmFsdWVcclxuXHR9KVxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoLXNldHRpbmdzICNsZXR0ZXJTcGFjaW5nJykuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZSkgPT4ge1xyXG5cdFx0b25Gb2N1c1ZhbExldHRlclNwYWNpbmcgPSBlLnRhcmdldC52YWx1ZVxyXG5cdH0pXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHZhbGlkYXRlSW5wdXRGaWVsZCh7IGlucHV0RmllbGQsIG1pbiwgbWF4ID0gMjQsIGRlZmF1bHRWYWwgPSAxNiwgY3NzVmFyTmFtZSwgcHJvcFZhbCB9KSB7XHJcbmZ1bmN0aW9uIHZhbGlkYXRlSW5wdXRGaWVsZCh7IGlucHV0VmFsdWUsIG1pbiwgbWF4ID0gMjQgfSkge1xyXG5cdGlmIChpc05hTihpbnB1dFZhbHVlKSkge1xyXG5cdFx0ZGlzcGxheUVycm9yKCdFbXB0eSBvciBpbnZhbGlkIGlucHV0IGZpZWxkJylcclxuXHRcdHJldHVybiBmYWxzZVxyXG5cdH0gZWxzZSBpZiAoaW5wdXRWYWx1ZSA8IG1pbiB8fCBpbnB1dFZhbHVlID4gbWF4KSB7XHJcblx0XHRkaXNwbGF5RXJyb3IoYE51bWJlciBtdXN0IGJlIGJldHdlZW4gJHttaW59IGFuZCAke21heH1gKVxyXG5cdFx0cmV0dXJuIGZhbHNlXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5RXJyb3IobWVzc2FnZSkge1xyXG5cdC8vIFJlbW92ZSBhbnkgcHJldmlvdXMgZXJyb3IgbWVzc2FnZXNcclxuXHRjb25zdCBleGlzdGluZ0Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdwdGgtZXJyb3ItbXNnJylcclxuXHRpZiAoZXhpc3RpbmdFcnJvcikge1xyXG5cdFx0ZXhpc3RpbmdFcnJvci5yZW1vdmUoKVxyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlIGFuZCBpbnNlcnQgdGhlIG5ldyBlcnJvciBtZXNzYWdlXHJcblx0Y29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHRlcnJvck1lc3NhZ2UuY2xhc3NOYW1lID0gJ2dwdGgtZXJyb3ItbXNnIGZpeGVkIHJvdW5kZWQteGwgYmctcmVkLTUwMCByZWQtNTAwIHAtMyBmb250LXNlbWlib2xkJ1xyXG5cdGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IG1lc3NhZ2VcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSlcclxuXHJcblx0Ly8gUmVtb3ZlIHRoZSBlcnJvciBtZXNzYWdlIGFmdGVyIDQgc2Vjb25kc1xyXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0ZXJyb3JNZXNzYWdlLnJlbW92ZSgpXHJcblx0fSwgNDAwMClcclxufVxyXG4vKiBmdW5jdGlvbiBmb3JtYXROdW1iZXIoaW5wdXRWYWwpIHtcclxuXHQvLyBSZW1vdmUgbGVhZGluZyB6ZXJvcyBmcm9tIHRoZSBpbnRlZ2VyIHBhcnRcclxuXHRpbnB1dFZhbCA9IGlucHV0VmFsLnJlcGxhY2UoL14wKyg/PVxcZCpcXC4pLywgJycpXHJcblx0Ly8gUmVtb3ZlIHRyYWlsaW5nIHplcm9zIGZyb20gdGhlIGRlY2ltYWwgcGFydFxyXG5cdGlucHV0VmFsID0gaW5wdXRWYWwucmVwbGFjZSgvXFwuPzArJC8sICcnKVxyXG5cdC8vIFBhcnNlIHRoZSBpbnB1dCBhcyBhIG51bWJlciBhbmQgcmV0dXJuIGl0XHJcblx0cmV0dXJuIHBhcnNlRmxvYXQoaW5wdXRWYWwpXHJcbn0gKi9cclxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKGlucHV0VmFsLCB0b0ZpeGVkTnVtID0gMikge1xyXG5cdC8vIFJlbW92ZSBsZWFkaW5nIHplcm9zIGZyb20gdGhlIGludGVnZXIgcGFydFxyXG5cdGlucHV0VmFsID0gaW5wdXRWYWwucmVwbGFjZSgvXjArKD89XFxkKlxcLikvLCAnJylcclxuXHQvLyBQYXJzZSB0aGUgaW5wdXQgYXMgYSBudW1iZXIgYW5kIHJldHVybiBpdCB3aXRoIDIgZGVjaW1hbCBwbGFjZXNcclxuXHRsZXQgZm9ybWF0dGVkID0gcGFyc2VGbG9hdChpbnB1dFZhbCkudG9GaXhlZCh0b0ZpeGVkTnVtKVxyXG5cdC8vIFJlbW92ZSB0cmFpbGluZyB6ZXJvcyBmcm9tIHRoZSBkZWNpbWFsIHBhcnRcclxuXHRmb3JtYXR0ZWQgPSBmb3JtYXR0ZWQucmVwbGFjZSgvXFwuPzArJC8sICcnKVxyXG5cdC8vIFJldHVybiB0aGUgZm9ybWF0dGVkIG51bWJlciBhcyBhIHN0cmluZ1xyXG5cdHJldHVybiBmb3JtYXR0ZWRcclxufVxyXG5mdW5jdGlvbiBpbml0Rm9udHMoKSB7XHJcblx0Z2V0Rm9udHNGcm9tU3RvcmFnZSgpXHJcbn1cclxuXHJcbi8vIEluaXRcclxuaW5pdEZvbnRzKClcclxuIiwiZXhwb3J0IGNvbnN0IHB4VG9SZW0gPSAocHgpID0+IGAke3B4IC8gMTZ9cmVtYFxyXG4vLyBleHBvcnQgY29uc3QgcmVtVG9QeCA9IChyZW0pID0+IGAke3JlbSAqIDE2fXB4YFxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyRm9udCh7XHJcblx0bmFtZSxcclxuXHRjbGFzc05hbWUsXHJcblx0aW5wdXRJZCxcclxuXHRpbnB1dFR5cGUsXHJcblx0aW5wdXRWYWx1ZSxcclxuXHRpbnB1dFBsYWNlaG9sZGVyLFxyXG5cdG1pbiA9IDE2LFxyXG5cdG1heCA9IDI0LFxyXG5cdHVuaXQgPSAncHgnLFxyXG59KSB7XHJcblx0cmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiJHtjbGFzc05hbWV9IGNhcmQgY2FyZC0tc21hbGxcIiBkYXRhLWdwdGgtZXJyPVwiJHttaW59JHt1bml0fSAmaEFycjsgJHttYXh9JHt1bml0fVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiJHtpbnB1dElkfVwiIGNsYXNzPVwicm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGgtZnVsbCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiJHtpbnB1dFR5cGV9XCIgaWQ9XCIke2lucHV0SWR9XCIgdmFsdWU9XCIke2lucHV0VmFsdWV9XCIgcGxhY2Vob2xkZXI9XCIke2lucHV0UGxhY2Vob2xkZXJ9XCIgY2xhc3M9XCJyb3VuZGVkLWZ1bGwgb3V0bGluZS1ub25lIGJvcmRlci1ub25lIGZvbnQtYm9sZFwiIG1pbmxlbmd0aD1cIiR7bWlufVwiIG1heGxlbmd0aD1cIiR7bWF4fVwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX191bml0bmFtZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX191bml0IHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPnBpeGVsczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX25hbWUgdXBwZXJjYXNlIGZvbnQtc2VtaWJvbGRcIj4ke25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+YFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRm9udEJpZ0NhcmRzKHtcclxuXHRuYW1lLFxyXG5cdGNsYXNzTmFtZSxcclxuXHRpbnB1dElkLFxyXG5cdGlucHV0VHlwZSxcclxuXHRpbnB1dFZhbHVlLFxyXG5cdGlucHV0UGxhY2Vob2xkZXIsXHJcblx0bWluID0gMCxcclxuXHRtYXggPSAyMCxcclxuXHR1bml0ID0gJ3B4JyxcclxufSkge1xyXG5cdHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIiR7Y2xhc3NOYW1lfSBmb250c19fZ3JvdXAgY2FyZCBjYXJkLS1iaWcgaC1mdWxsXCIgZGF0YS1ncHRoLWVycj1cIiR7bWlufSR7dW5pdH0gJmhBcnI7ICR7bWF4fSR7dW5pdH1cIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIiR7aW5wdXRJZH1cIiBjbGFzcz1cImdyaWQgZ2FwLTEgaC1mdWxsIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX3VuaXQgY2FyZF9faWNvblwiPlBYPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZF9fbmFtZSB1cHBlcmNhc2UgZm9udC1zZW1pYm9sZFwiPiR7bmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIiR7aW5wdXRUeXBlfVwiIGlkPVwiJHtpbnB1dElkfVwiIHZhbHVlPVwiJHtpbnB1dFZhbHVlfVwiIHBsYWNlaG9sZGVyPVwiJHtpbnB1dFBsYWNlaG9sZGVyfVwiIGNsYXNzPVwib3V0bGluZS1ub25lIGJvcmRlci1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItbm9uZSBmb250LWJvbGRcIiBtaW5sZW5ndGg9XCIke21pbn1cIiBtYXhsZW5ndGg9XCIke21heH1cIj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5gXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCdXR0b24oeyBuYW1lLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBkaXNhYmxlZCA9IGZhbHNlIH0pIHtcclxuXHRyZXR1cm4gYFxyXG4gICAgICAgIDxidXR0b24gaWQ9XCIke2lkfVwiIGNsYXNzPVwiYnRuIGJsb2NrIHJlbGF0aXZlIHRleHQtY2VudGVyICR7Y2xhc3NOYW1lfVwiICR7ZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJyd9PlxyXG4gICAgICAgICAgICAke2NvbnRlbnR9XHJcbiAgICAgICAgPC9idXR0b24+XHJcblx0YFxyXG59XHJcbiJdLCJuYW1lcyI6WyJnbG9iYWxUaGlzIiwiY2hyb21lIiwicnVudGltZSIsImlkIiwiRXJyb3IiLCJicm93c2VyIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UiLCJ3cmFwQVBJcyIsImV4dGVuc2lvbkFQSXMiLCJhcGlNZXRhZGF0YSIsImtleXMiLCJsZW5ndGgiLCJEZWZhdWx0V2Vha01hcCIsIldlYWtNYXAiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZUl0ZW0iLCJpdGVtcyIsInVuZGVmaW5lZCIsImdldCIsImtleSIsImhhcyIsInNldCIsImlzVGhlbmFibGUiLCJ2YWx1ZSIsInRoZW4iLCJtYWtlQ2FsbGJhY2siLCJwcm9taXNlIiwibWV0YWRhdGEiLCJjYWxsYmFja0FyZ3MiLCJsYXN0RXJyb3IiLCJyZWplY3QiLCJtZXNzYWdlIiwic2luZ2xlQ2FsbGJhY2tBcmciLCJyZXNvbHZlIiwicGx1cmFsaXplQXJndW1lbnRzIiwibnVtQXJncyIsIndyYXBBc3luY0Z1bmN0aW9uIiwibmFtZSIsImFzeW5jRnVuY3Rpb25XcmFwcGVyIiwidGFyZ2V0IiwiYXJncyIsIm1pbkFyZ3MiLCJtYXhBcmdzIiwiUHJvbWlzZSIsImZhbGxiYWNrVG9Ob0NhbGxiYWNrIiwiY2JFcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwibm9DYWxsYmFjayIsIndyYXBNZXRob2QiLCJtZXRob2QiLCJ3cmFwcGVyIiwiUHJveHkiLCJhcHBseSIsInRhcmdldE1ldGhvZCIsInRoaXNPYmoiLCJjYWxsIiwiaGFzT3duUHJvcGVydHkiLCJGdW5jdGlvbiIsImJpbmQiLCJ3cmFwT2JqZWN0Iiwid3JhcHBlcnMiLCJjYWNoZSIsImNyZWF0ZSIsImhhbmRsZXJzIiwicHJveHlUYXJnZXQiLCJwcm9wIiwicmVjZWl2ZXIiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJkZXNjIiwiUmVmbGVjdCIsImRlbGV0ZVByb3BlcnR5Iiwid3JhcEV2ZW50Iiwid3JhcHBlck1hcCIsImFkZExpc3RlbmVyIiwibGlzdGVuZXIiLCJoYXNMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwib25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyIsIm9uUmVxdWVzdEZpbmlzaGVkIiwicmVxIiwid3JhcHBlZFJlcSIsImdldENvbnRlbnQiLCJvbk1lc3NhZ2VXcmFwcGVycyIsIm9uTWVzc2FnZSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImRpZENhbGxTZW5kUmVzcG9uc2UiLCJ3cmFwcGVkU2VuZFJlc3BvbnNlIiwic2VuZFJlc3BvbnNlUHJvbWlzZSIsInJlc3BvbnNlIiwicmVzdWx0IiwiZXJyIiwiaXNSZXN1bHRUaGVuYWJsZSIsInNlbmRQcm9taXNlZFJlc3VsdCIsIm1zZyIsImVycm9yIiwiX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fIiwiY2F0Y2giLCJ3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayIsInJlcGx5Iiwid3JhcHBlZFNlbmRNZXNzYWdlIiwiYXBpTmFtZXNwYWNlT2JqIiwid3JhcHBlZENiIiwicHVzaCIsInNlbmRNZXNzYWdlIiwic3RhdGljV3JhcHBlcnMiLCJkZXZ0b29scyIsIm5ldHdvcmsiLCJvbk1lc3NhZ2VFeHRlcm5hbCIsInRhYnMiLCJzZXR0aW5nTWV0YWRhdGEiLCJjbGVhciIsInByaXZhY3kiLCJzZXJ2aWNlcyIsIndlYnNpdGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC4xMjczMDY0Ny5qcy5tYXAifQ==
