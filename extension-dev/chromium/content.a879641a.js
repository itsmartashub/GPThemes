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
})({"bq6oV":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = "localhost";
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "ddf6e0724bd358bd";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4914e2e1a879641a";
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
// Use a cross-browser storage API:
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webextensionPolyfill = require("webextension-polyfill");
var _webextensionPolyfillDefault = parcelHelpers.interopDefault(_webextensionPolyfill);
var _gpthToggleCircledWebp = require("../img/gpth-toggle-circled.webp");
var _gpthToggleCircledWebpDefault = parcelHelpers.interopDefault(_gpthToggleCircledWebp);
// let isOptionsShown = false
// Global Variables
let isOptionsShown = false;
let $htmlTag;
let $floatingBtn;
let $floatingThemeOptions;
let $floatingThemesBtnsContainer;
// Initialization
initializeTheme();
createAndAppendSVGStickyBtn();
// const $htmlTag = document.documentElement
// const $floatingBtn = document.querySelector('.gpth__svg-icon')
// const $floatingThemeOptions = document.querySelector('.gpth__options')
// const $floatingThemesBtnsContainer = document.querySelector('.gpth__themes-btns')
// $floatingBtn.addEventListener('click', toggleOptions)
// $floatingThemesBtnsContainer.addEventListener('click', handleChangeTheme)
async function initializeTheme() {
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
    gpthFloatingBtn.className = "gpth__svg";
    let htmlCode = `
		<div class="gpth__svg-icon">
			<img src="${(0, _gpthToggleCircledWebpDefault.default)}" alt="gpth-toggle"/>
		</div>
		<div class="gpth__options">
			<div class="gpth__themes">
				<div class="gpth__themes-btns">
					<button id="light" data-gpth-theme="light">\u{2600}\u{FE0F}</button>
					<button id="dark" data-gpth-theme="dark">\u{1F319}</button>
					<button id="oled" data-gpth-theme="black">\u{1F316}</button>
				</div>
			</div>
		</div>
	`;
    // gpthFloatingBtn.innerHTML = htmlCode
    gpthFloatingBtn.insertAdjacentHTML("beforeend", htmlCode);
    document.body.appendChild(gpthFloatingBtn);
    // Cache DOM elements after appending
    $htmlTag = document.documentElement;
    $floatingBtn = document.querySelector(".gpth__svg-icon");
    $floatingThemeOptions = document.querySelector(".gpth__options");
    $floatingThemesBtnsContainer = document.querySelector(".gpth__themes-btns");
    // Add event listeners after DOM elements are appended
    $floatingBtn.addEventListener("click", toggleOptions);
    $floatingThemesBtnsContainer.addEventListener("click", handleChangeTheme);
}
function handleChangeTheme(e) {
    const themeButton = e.target.closest("button");
    if (!themeButton) return;
    const theme = themeButton.id;
    setTheme(theme);
}
function applyTheme(theme) {
    $htmlTag.dataset.gptheme = theme;
    $htmlTag.style.colorScheme = theme === "oled" ? "dark" : theme;
    $htmlTag.className = theme === "oled" ? "dark" : theme;
    if (theme !== "oled") $htmlTag.removeAttribute("data-gptheme");
}
function toggleOptions() {
    isOptionsShown = !isOptionsShown;
    $floatingThemeOptions.classList.toggle("gpth-options-shown", isOptionsShown);
    if (isOptionsShown) document.body.addEventListener("click", hideOptions);
    else document.body.removeEventListener("click", hideOptions);
}
function hideOptions(e) {
    const isClickInsideFloatingBtn = $floatingBtn.contains(e.target);
    const isClickInsideFloatingOptions = $floatingThemeOptions.contains(e.target);
    if (!isClickInsideFloatingBtn && !isClickInsideFloatingOptions) toggleOptions();
// if (!$floatingBtn.contains(e.target) && !$floatingThemeOptions.contains(e.target)) toggleOptions()
}
setTimeout(()=>{
    $floatingBtn.classList.add("gpth__svg--small");
}, 3000);

},{"webextension-polyfill":"Zel51","../img/gpth-toggle-circled.webp":"brejW","@parcel/transformer-js/src/esmodule-helpers.js":"4IpBY"}],"Zel51":[function(require,module,exports) {
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

},{}],"brejW":[function(require,module,exports) {
module.exports = require("a4c522cfc69cac76").getBundleURL("6h0Iu") + "gpth-toggle-circled.07b8368d.webp" + "?" + Date.now();

},{"a4c522cfc69cac76":"hxxwq"}],"hxxwq":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"4IpBY":[function(require,module,exports) {
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

},{}]},["bq6oV","3q87D"], "3q87D", "parcelRequire2158")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aW1lLWJyb3dzZXItaG1yL2xpYi9ydW50aW1lLWM1NjJmN2Q3ZWM1ZWI1MDAuanMiLCJzcmMvanMvY29udGVudC5qcyIsIm5vZGVfbW9kdWxlcy93ZWJleHRlbnNpb24tcG9seWZpbGwvZGlzdC9icm93c2VyLXBvbHlmaWxsLmpzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS0zM2I3MTZkZGI0OTg5ZTExLmpzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvaGVscGVycy9idW5kbGUtdXJsLmpzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEhNUl9IT1NUID0gXCJsb2NhbGhvc3RcIjt2YXIgSE1SX1BPUlQgPSAxMjM0O3ZhciBITVJfU0VDVVJFID0gZmFsc2U7dmFyIEhNUl9FTlZfSEFTSCA9IFwiZGRmNmUwNzI0YmQzNThiZFwiO3ZhciBITVJfVVNFX1NTRSA9IGZhbHNlO21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRCA9IFwiNDkxNGUyZTFhODc5NjQxYVwiO1widXNlIHN0cmljdFwiO1xuXG4vKiBnbG9iYWwgSE1SX0hPU1QsIEhNUl9QT1JULCBITVJfRU5WX0hBU0gsIEhNUl9TRUNVUkUsIEhNUl9VU0VfU1NFLCBjaHJvbWUsIGJyb3dzZXIsIF9fcGFyY2VsX19pbXBvcnRfXywgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXywgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlICovXG4vKjo6XG5pbXBvcnQgdHlwZSB7XG4gIEhNUkFzc2V0LFxuICBITVJNZXNzYWdlLFxufSBmcm9tICdAcGFyY2VsL3JlcG9ydGVyLWRldi1zZXJ2ZXIvc3JjL0hNUlNlcnZlci5qcyc7XG5pbnRlcmZhY2UgUGFyY2VsUmVxdWlyZSB7XG4gIChzdHJpbmcpOiBtaXhlZDtcbiAgY2FjaGU6IHt8W3N0cmluZ106IFBhcmNlbE1vZHVsZXx9O1xuICBob3REYXRhOiB7fFtzdHJpbmddOiBtaXhlZHx9O1xuICBNb2R1bGU6IGFueTtcbiAgcGFyZW50OiA/UGFyY2VsUmVxdWlyZTtcbiAgaXNQYXJjZWxSZXF1aXJlOiB0cnVlO1xuICBtb2R1bGVzOiB7fFtzdHJpbmddOiBbRnVuY3Rpb24sIHt8W3N0cmluZ106IHN0cmluZ3x9XXx9O1xuICBITVJfQlVORExFX0lEOiBzdHJpbmc7XG4gIHJvb3Q6IFBhcmNlbFJlcXVpcmU7XG59XG5pbnRlcmZhY2UgUGFyY2VsTW9kdWxlIHtcbiAgaG90OiB7fFxuICAgIGRhdGE6IG1peGVkLFxuICAgIGFjY2VwdChjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICBkaXNwb3NlKGNiOiAobWl4ZWQpID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGFjY2VwdChkZXBzOiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nLCBjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBkZWNsaW5lKCk6IHZvaWQsXG4gICAgX2FjY2VwdENhbGxiYWNrczogQXJyYXk8KEZ1bmN0aW9uKSA9PiB2b2lkPixcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogQXJyYXk8KG1peGVkKSA9PiB2b2lkPixcbiAgfH07XG59XG5pbnRlcmZhY2UgRXh0ZW5zaW9uQ29udGV4dCB7XG4gIHJ1bnRpbWU6IHt8XG4gICAgcmVsb2FkKCk6IHZvaWQsXG4gICAgZ2V0VVJMKHVybDogc3RyaW5nKTogc3RyaW5nO1xuICAgIGdldE1hbmlmZXN0KCk6IHttYW5pZmVzdF92ZXJzaW9uOiBudW1iZXIsIC4uLn07XG4gIHx9O1xufVxuZGVjbGFyZSB2YXIgbW9kdWxlOiB7YnVuZGxlOiBQYXJjZWxSZXF1aXJlLCAuLi59O1xuZGVjbGFyZSB2YXIgSE1SX0hPU1Q6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9QT1JUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfRU5WX0hBU0g6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9TRUNVUkU6IGJvb2xlYW47XG5kZWNsYXJlIHZhciBITVJfVVNFX1NTRTogYm9vbGVhbjtcbmRlY2xhcmUgdmFyIGNocm9tZTogRXh0ZW5zaW9uQ29udGV4dDtcbmRlY2xhcmUgdmFyIGJyb3dzZXI6IEV4dGVuc2lvbkNvbnRleHQ7XG5kZWNsYXJlIHZhciBfX3BhcmNlbF9faW1wb3J0X186IChzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG5kZWNsYXJlIHZhciBfX3BhcmNlbF9faW1wb3J0U2NyaXB0c19fOiAoc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuZGVjbGFyZSB2YXIgZ2xvYmFsVGhpczogdHlwZW9mIHNlbGY7XG5kZWNsYXJlIHZhciBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGU6IE9iamVjdDtcbiovXG52YXIgT1ZFUkxBWV9JRCA9ICdfX3BhcmNlbF9fZXJyb3JfX292ZXJsYXlfXyc7XG52YXIgT2xkTW9kdWxlID0gbW9kdWxlLmJ1bmRsZS5Nb2R1bGU7XG5mdW5jdGlvbiBNb2R1bGUobW9kdWxlTmFtZSkge1xuICBPbGRNb2R1bGUuY2FsbCh0aGlzLCBtb2R1bGVOYW1lKTtcbiAgdGhpcy5ob3QgPSB7XG4gICAgZGF0YTogbW9kdWxlLmJ1bmRsZS5ob3REYXRhW21vZHVsZU5hbWVdLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IFtdLFxuICAgIF9kaXNwb3NlQ2FsbGJhY2tzOiBbXSxcbiAgICBhY2NlcHQ6IGZ1bmN0aW9uIChmbikge1xuICAgICAgdGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2goZm4gfHwgZnVuY3Rpb24gKCkge30pO1xuICAgIH0sXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKGZuKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2goZm4pO1xuICAgIH1cbiAgfTtcbiAgbW9kdWxlLmJ1bmRsZS5ob3REYXRhW21vZHVsZU5hbWVdID0gdW5kZWZpbmVkO1xufVxubW9kdWxlLmJ1bmRsZS5Nb2R1bGUgPSBNb2R1bGU7XG5tb2R1bGUuYnVuZGxlLmhvdERhdGEgPSB7fTtcbnZhciBjaGVja2VkQXNzZXRzIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi8sIGFzc2V0c1RvRGlzcG9zZSAvKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovLCBhc3NldHNUb0FjY2VwdCAvKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovO1xuXG5mdW5jdGlvbiBnZXRIb3N0bmFtZSgpIHtcbiAgcmV0dXJuIEhNUl9IT1NUIHx8IChsb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKCdodHRwJykgPT09IDAgPyBsb2NhdGlvbi5ob3N0bmFtZSA6ICdsb2NhbGhvc3QnKTtcbn1cbmZ1bmN0aW9uIGdldFBvcnQoKSB7XG4gIHJldHVybiBITVJfUE9SVCB8fCBsb2NhdGlvbi5wb3J0O1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG52YXIgcGFyZW50ID0gbW9kdWxlLmJ1bmRsZS5wYXJlbnQ7XG5pZiAoKCFwYXJlbnQgfHwgIXBhcmVudC5pc1BhcmNlbFJlcXVpcmUpICYmIHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gIHZhciBwb3J0ID0gZ2V0UG9ydCgpO1xuICB2YXIgcHJvdG9jb2wgPSBITVJfU0VDVVJFIHx8IGxvY2F0aW9uLnByb3RvY29sID09ICdodHRwczonICYmICFbJ2xvY2FsaG9zdCcsICcxMjcuMC4wLjEnLCAnMC4wLjAuMCddLmluY2x1ZGVzKGhvc3RuYW1lKSA/ICd3c3MnIDogJ3dzJztcbiAgdmFyIHdzO1xuICBpZiAoSE1SX1VTRV9TU0UpIHtcbiAgICB3cyA9IG5ldyBFdmVudFNvdXJjZSgnL19fcGFyY2VsX2htcicpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICB3cyA9IG5ldyBXZWJTb2NrZXQocHJvdG9jb2wgKyAnOi8vJyArIGhvc3RuYW1lICsgKHBvcnQgPyAnOicgKyBwb3J0IDogJycpICsgJy8nKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHdzID0ge307XG4gICAgfVxuICB9XG5cbiAgLy8gV2ViIGV4dGVuc2lvbiBjb250ZXh0XG4gIHZhciBleHRDdHggPSB0eXBlb2YgYnJvd3NlciA9PT0gJ3VuZGVmaW5lZCcgPyB0eXBlb2YgY2hyb21lID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBjaHJvbWUgOiBicm93c2VyO1xuXG4gIC8vIFNhZmFyaSBkb2Vzbid0IHN1cHBvcnQgc291cmNlVVJMIGluIGVycm9yIHN0YWNrcy5cbiAgLy8gZXZhbCBtYXkgYWxzbyBiZSBkaXNhYmxlZCB2aWEgQ1NQLCBzbyBkbyBhIHF1aWNrIGNoZWNrLlxuICB2YXIgc3VwcG9ydHNTb3VyY2VVUkwgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICAoMCwgZXZhbCkoJ3Rocm93IG5ldyBFcnJvcihcInRlc3RcIik7IC8vIyBzb3VyY2VVUkw9dGVzdC5qcycpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBzdXBwb3J0c1NvdXJjZVVSTCA9IGVyci5zdGFjay5pbmNsdWRlcygndGVzdC5qcycpO1xuICB9XG5cbiAgLy8gJEZsb3dGaXhNZVxuICB3cy5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbiAoZXZlbnQgLyo6IHtkYXRhOiBzdHJpbmcsIC4uLn0gKi8pIHtcbiAgICBjaGVja2VkQXNzZXRzID0ge30gLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqLztcbiAgICBhc3NldHNUb0FjY2VwdCA9IFtdO1xuICAgIGFzc2V0c1RvRGlzcG9zZSA9IFtdO1xuICAgIHZhciBkYXRhIC8qOiBITVJNZXNzYWdlICovID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICBpZiAoZGF0YS50eXBlID09PSAndXBkYXRlJykge1xuICAgICAgLy8gUmVtb3ZlIGVycm9yIG92ZXJsYXkgaWYgdGhlcmUgaXMgb25lXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgIH1cbiAgICAgIGxldCBhc3NldHMgPSBkYXRhLmFzc2V0cy5maWx0ZXIoYXNzZXQgPT4gYXNzZXQuZW52SGFzaCA9PT0gSE1SX0VOVl9IQVNIKTtcblxuICAgICAgLy8gSGFuZGxlIEhNUiBVcGRhdGVcbiAgICAgIGxldCBoYW5kbGVkID0gYXNzZXRzLmV2ZXJ5KGFzc2V0ID0+IHtcbiAgICAgICAgcmV0dXJuIGFzc2V0LnR5cGUgPT09ICdjc3MnIHx8IGFzc2V0LnR5cGUgPT09ICdqcycgJiYgaG1yQWNjZXB0Q2hlY2sobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldC5pZCwgYXNzZXQuZGVwc0J5QnVuZGxlKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuXG4gICAgICAgIC8vIERpc3BhdGNoIGN1c3RvbSBldmVudCBzbyBvdGhlciBydW50aW1lcyAoZS5nIFJlYWN0IFJlZnJlc2gpIGFyZSBhd2FyZS5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBDdXN0b21FdmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3BhcmNlbGhtcmFjY2VwdCcpKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBobXJBcHBseVVwZGF0ZXMoYXNzZXRzKTtcblxuICAgICAgICAvLyBEaXNwb3NlIGFsbCBvbGQgYXNzZXRzLlxuICAgICAgICBsZXQgcHJvY2Vzc2VkQXNzZXRzID0ge30gLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqLztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NldHNUb0Rpc3Bvc2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgaWQgPSBhc3NldHNUb0Rpc3Bvc2VbaV1bMV07XG4gICAgICAgICAgaWYgKCFwcm9jZXNzZWRBc3NldHNbaWRdKSB7XG4gICAgICAgICAgICBobXJEaXNwb3NlKGFzc2V0c1RvRGlzcG9zZVtpXVswXSwgaWQpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkQXNzZXRzW2lkXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUnVuIGFjY2VwdCBjYWxsYmFja3MuIFRoaXMgd2lsbCBhbHNvIHJlLWV4ZWN1dGUgb3RoZXIgZGlzcG9zZWQgYXNzZXRzIGluIHRvcG9sb2dpY2FsIG9yZGVyLlxuICAgICAgICBwcm9jZXNzZWRBc3NldHMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NldHNUb0FjY2VwdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBpZCA9IGFzc2V0c1RvQWNjZXB0W2ldWzFdO1xuICAgICAgICAgIGlmICghcHJvY2Vzc2VkQXNzZXRzW2lkXSkge1xuICAgICAgICAgICAgaG1yQWNjZXB0KGFzc2V0c1RvQWNjZXB0W2ldWzBdLCBpZCk7XG4gICAgICAgICAgICBwcm9jZXNzZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBmdWxsUmVsb2FkKCk7XG4gICAgfVxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIC8vIExvZyBwYXJjZWwgZXJyb3JzIHRvIGNvbnNvbGVcbiAgICAgIGZvciAobGV0IGFuc2lEaWFnbm9zdGljIG9mIGRhdGEuZGlhZ25vc3RpY3MuYW5zaSkge1xuICAgICAgICBsZXQgc3RhY2sgPSBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgPyBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgOiBhbnNpRGlhZ25vc3RpYy5zdGFjaztcbiAgICAgICAgY29uc29sZS5lcnJvcign8J+aqCBbcGFyY2VsXTogJyArIGFuc2lEaWFnbm9zdGljLm1lc3NhZ2UgKyAnXFxuJyArIHN0YWNrICsgJ1xcblxcbicgKyBhbnNpRGlhZ25vc3RpYy5oaW50cy5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBSZW5kZXIgdGhlIGZhbmN5IGh0bWwgb3ZlcmxheVxuICAgICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgICAgdmFyIG92ZXJsYXkgPSBjcmVhdGVFcnJvck92ZXJsYXkoZGF0YS5kaWFnbm9zdGljcy5odG1sKTtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgaWYgKHdzIGluc3RhbmNlb2YgV2ViU29ja2V0KSB7XG4gICAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5tZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1twYXJjZWxdIPCfmqggQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciB3YXMgbG9zdCcpO1xuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIHJlbW92ZUVycm9yT3ZlcmxheSgpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPVkVSTEFZX0lEKTtcbiAgaWYgKG92ZXJsYXkpIHtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIGNvbnNvbGUubG9nKCdbcGFyY2VsXSDinKggRXJyb3IgcmVzb2x2ZWQnKTtcbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRXJyb3JPdmVybGF5KGRpYWdub3N0aWNzKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuaWQgPSBPVkVSTEFZX0lEO1xuICBsZXQgZXJyb3JIVE1MID0gJzxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiBibGFjazsgb3BhY2l0eTogMC44NTsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogd2hpdGU7IHBvc2l0aW9uOiBmaXhlZDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgdG9wOiAwcHg7IGxlZnQ6IDBweDsgcGFkZGluZzogMzBweDsgZm9udC1mYW1pbHk6IE1lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlOyB6LWluZGV4OiA5OTk5O1wiPic7XG4gIGZvciAobGV0IGRpYWdub3N0aWMgb2YgZGlhZ25vc3RpY3MpIHtcbiAgICBsZXQgc3RhY2sgPSBkaWFnbm9zdGljLmZyYW1lcy5sZW5ndGggPyBkaWFnbm9zdGljLmZyYW1lcy5yZWR1Y2UoKHAsIGZyYW1lKSA9PiB7XG4gICAgICByZXR1cm4gYCR7cH1cbjxhIGhyZWY9XCIvX19wYXJjZWxfbGF1bmNoX2VkaXRvcj9maWxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGZyYW1lLmxvY2F0aW9uKX1cIiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBjb2xvcjogIzg4OFwiIG9uY2xpY2s9XCJmZXRjaCh0aGlzLmhyZWYpOyByZXR1cm4gZmFsc2VcIj4ke2ZyYW1lLmxvY2F0aW9ufTwvYT5cbiR7ZnJhbWUuY29kZX1gO1xuICAgIH0sICcnKSA6IGRpYWdub3N0aWMuc3RhY2s7XG4gICAgZXJyb3JIVE1MICs9IGBcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tdG9wOiAyMHB4O1wiPlxuICAgICAgICAgIPCfmqggJHtkaWFnbm9zdGljLm1lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cHJlPiR7c3RhY2t9PC9wcmU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgJHtkaWFnbm9zdGljLmhpbnRzLm1hcChoaW50ID0+ICc8ZGl2PvCfkqEgJyArIGhpbnQgKyAnPC9kaXY+Jykuam9pbignJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke2RpYWdub3N0aWMuZG9jdW1lbnRhdGlvbiA/IGA8ZGl2PvCfk50gPGEgc3R5bGU9XCJjb2xvcjogdmlvbGV0XCIgaHJlZj1cIiR7ZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9ufVwiIHRhcmdldD1cIl9ibGFua1wiPkxlYXJuIG1vcmU8L2E+PC9kaXY+YCA6ICcnfVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuICBlcnJvckhUTUwgKz0gJzwvZGl2Pic7XG4gIG92ZXJsYXkuaW5uZXJIVE1MID0gZXJyb3JIVE1MO1xuICByZXR1cm4gb3ZlcmxheTtcbn1cbmZ1bmN0aW9uIGZ1bGxSZWxvYWQoKSB7XG4gIGlmICgncmVsb2FkJyBpbiBsb2NhdGlvbikge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9IGVsc2UgaWYgKGV4dEN0eCAmJiBleHRDdHgucnVudGltZSAmJiBleHRDdHgucnVudGltZS5yZWxvYWQpIHtcbiAgICBleHRDdHgucnVudGltZS5yZWxvYWQoKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0UGFyZW50cyhidW5kbGUsIGlkKSAvKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICove1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIHBhcmVudHMgPSBbXTtcbiAgdmFyIGssIGQsIGRlcDtcbiAgZm9yIChrIGluIG1vZHVsZXMpIHtcbiAgICBmb3IgKGQgaW4gbW9kdWxlc1trXVsxXSkge1xuICAgICAgZGVwID0gbW9kdWxlc1trXVsxXVtkXTtcbiAgICAgIGlmIChkZXAgPT09IGlkIHx8IEFycmF5LmlzQXJyYXkoZGVwKSAmJiBkZXBbZGVwLmxlbmd0aCAtIDFdID09PSBpZCkge1xuICAgICAgICBwYXJlbnRzLnB1c2goW2J1bmRsZSwga10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIHBhcmVudHMgPSBwYXJlbnRzLmNvbmNhdChnZXRQYXJlbnRzKGJ1bmRsZS5wYXJlbnQsIGlkKSk7XG4gIH1cbiAgcmV0dXJuIHBhcmVudHM7XG59XG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmspIHtcbiAgdmFyIGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICBpZiAoIWhyZWYpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5ld0xpbmsgPSBsaW5rLmNsb25lTm9kZSgpO1xuICBuZXdMaW5rLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobGluay5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgfVxuICB9O1xuICBuZXdMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsXG4gIC8vICRGbG93Rml4TWVcbiAgaHJlZi5zcGxpdCgnPycpWzBdICsgJz8nICsgRGF0ZS5ub3coKSk7XG4gIC8vICRGbG93Rml4TWVcbiAgbGluay5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdMaW5rLCBsaW5rLm5leHRTaWJsaW5nKTtcbn1cbnZhciBjc3NUaW1lb3V0ID0gbnVsbDtcbmZ1bmN0aW9uIHJlbG9hZENTUygpIHtcbiAgaWYgKGNzc1RpbWVvdXQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY3NzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdXG4gICAgICB2YXIgaHJlZiAvKjogc3RyaW5nICovID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICAgICAgdmFyIHNlcnZlZEZyb21ITVJTZXJ2ZXIgPSBob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgPyBuZXcgUmVnRXhwKCdeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOicgKyBnZXRQb3J0KCkpLnRlc3QoaHJlZikgOiBocmVmLmluZGV4T2YoaG9zdG5hbWUgKyAnOicgKyBnZXRQb3J0KCkpO1xuICAgICAgdmFyIGFic29sdXRlID0gL15odHRwcz86XFwvXFwvL2kudGVzdChocmVmKSAmJiBocmVmLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSAhPT0gMCAmJiAhc2VydmVkRnJvbUhNUlNlcnZlcjtcbiAgICAgIGlmICghYWJzb2x1dGUpIHtcbiAgICAgICAgdXBkYXRlTGluayhsaW5rc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNzc1RpbWVvdXQgPSBudWxsO1xuICB9LCA1MCk7XG59XG5mdW5jdGlvbiBobXJEb3dubG9hZChhc3NldCkge1xuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2pzJykge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQuc3JjID0gYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpO1xuICAgICAgaWYgKGFzc2V0Lm91dHB1dEZvcm1hdCA9PT0gJ2VzbW9kdWxlJykge1xuICAgICAgICBzY3JpcHQudHlwZSA9ICdtb2R1bGUnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdmFyIF9kb2N1bWVudCRoZWFkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4gcmVzb2x2ZShzY3JpcHQpO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgKF9kb2N1bWVudCRoZWFkID0gZG9jdW1lbnQuaGVhZCkgPT09IG51bGwgfHwgX2RvY3VtZW50JGhlYWQgPT09IHZvaWQgMCB8fCBfZG9jdW1lbnQkaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gV29ya2VyIHNjcmlwdHNcbiAgICAgIGlmIChhc3NldC5vdXRwdXRGb3JtYXQgPT09ICdlc21vZHVsZScpIHtcbiAgICAgICAgcmV0dXJuIF9fcGFyY2VsX19pbXBvcnRfXyhhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXyhhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCkpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIGhtckFwcGx5VXBkYXRlcyhhc3NldHMpIHtcbiAgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGxldCBzY3JpcHRzVG9SZW1vdmU7XG4gIHRyeSB7XG4gICAgLy8gSWYgc291cmNlVVJMIGNvbW1lbnRzIGFyZW4ndCBzdXBwb3J0ZWQgaW4gZXZhbCwgd2UgbmVlZCB0byBsb2FkXG4gICAgLy8gdGhlIHVwZGF0ZSBmcm9tIHRoZSBkZXYgc2VydmVyIG92ZXIgSFRUUCBzbyB0aGF0IHN0YWNrIHRyYWNlc1xuICAgIC8vIGFyZSBjb3JyZWN0IGluIGVycm9ycy9sb2dzLiBUaGlzIGlzIG11Y2ggc2xvd2VyIHRoYW4gZXZhbCwgc29cbiAgICAvLyB3ZSBvbmx5IGRvIGl0IGlmIG5lZWRlZCAoY3VycmVudGx5IGp1c3QgU2FmYXJpKS5cbiAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM3Mjk3XG4gICAgLy8gVGhpcyBwYXRoIGlzIGFsc28gdGFrZW4gaWYgYSBDU1AgZGlzYWxsb3dzIGV2YWwuXG4gICAgaWYgKCFzdXBwb3J0c1NvdXJjZVVSTCkge1xuICAgICAgbGV0IHByb21pc2VzID0gYXNzZXRzLm1hcChhc3NldCA9PiB7XG4gICAgICAgIHZhciBfaG1yRG93bmxvYWQ7XG4gICAgICAgIHJldHVybiAoX2htckRvd25sb2FkID0gaG1yRG93bmxvYWQoYXNzZXQpKSA9PT0gbnVsbCB8fCBfaG1yRG93bmxvYWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9obXJEb3dubG9hZC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIC8vIFdlYiBleHRlbnNpb24gZml4XG4gICAgICAgICAgaWYgKGV4dEN0eCAmJiBleHRDdHgucnVudGltZSAmJiBleHRDdHgucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb24gPT0gMyAmJiB0eXBlb2YgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlICE9ICd1bmRlZmluZWQnICYmIGdsb2JhbCBpbnN0YW5jZW9mIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSkge1xuICAgICAgICAgICAgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHNjcmlwdHNUb1JlbW92ZSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG4gICAgYXNzZXRzLmZvckVhY2goZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICBobXJBcHBseShtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0KTtcbiAgICB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZTtcbiAgICBpZiAoc2NyaXB0c1RvUmVtb3ZlKSB7XG4gICAgICBzY3JpcHRzVG9SZW1vdmUuZm9yRWFjaChzY3JpcHQgPT4ge1xuICAgICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgICAgdmFyIF9kb2N1bWVudCRoZWFkMjtcbiAgICAgICAgICAoX2RvY3VtZW50JGhlYWQyID0gZG9jdW1lbnQuaGVhZCkgPT09IG51bGwgfHwgX2RvY3VtZW50JGhlYWQyID09PSB2b2lkIDAgfHwgX2RvY3VtZW50JGhlYWQyLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gaG1yQXBwbHkoYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLCBhc3NldCAvKjogIEhNUkFzc2V0ICovKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2NzcycpIHtcbiAgICByZWxvYWRDU1MoKTtcbiAgfSBlbHNlIGlmIChhc3NldC50eXBlID09PSAnanMnKSB7XG4gICAgbGV0IGRlcHMgPSBhc3NldC5kZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdO1xuICAgIGlmIChkZXBzKSB7XG4gICAgICBpZiAobW9kdWxlc1thc3NldC5pZF0pIHtcbiAgICAgICAgLy8gUmVtb3ZlIGRlcGVuZGVuY2llcyB0aGF0IGFyZSByZW1vdmVkIGFuZCB3aWxsIGJlY29tZSBvcnBoYW5lZC5cbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3Nhcnkgc28gdGhhdCBpZiB0aGUgYXNzZXQgaXMgYWRkZWQgYmFjayBhZ2FpbiwgdGhlIGNhY2hlIGlzIGdvbmUsIGFuZCB3ZSBwcmV2ZW50IGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAgICAgICAgbGV0IG9sZERlcHMgPSBtb2R1bGVzW2Fzc2V0LmlkXVsxXTtcbiAgICAgICAgZm9yIChsZXQgZGVwIGluIG9sZERlcHMpIHtcbiAgICAgICAgICBpZiAoIWRlcHNbZGVwXSB8fCBkZXBzW2RlcF0gIT09IG9sZERlcHNbZGVwXSkge1xuICAgICAgICAgICAgbGV0IGlkID0gb2xkRGVwc1tkZXBdO1xuICAgICAgICAgICAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgICAgICAgaWYgKHBhcmVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGhtckRlbGV0ZShtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0c1NvdXJjZVVSTCkge1xuICAgICAgICAvLyBHbG9iYWwgZXZhbC4gV2Ugd291bGQgdXNlIGBuZXcgRnVuY3Rpb25gIGhlcmUgYnV0IGJyb3dzZXJcbiAgICAgICAgLy8gc3VwcG9ydCBmb3Igc291cmNlIG1hcHMgaXMgYmV0dGVyIHdpdGggZXZhbC5cbiAgICAgICAgKDAsIGV2YWwpKGFzc2V0Lm91dHB1dCk7XG4gICAgICB9XG5cbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGxldCBmbiA9IGdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbYXNzZXQuaWRdO1xuICAgICAgbW9kdWxlc1thc3NldC5pZF0gPSBbZm4sIGRlcHNdO1xuICAgIH0gZWxzZSBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgICAgaG1yQXBwbHkoYnVuZGxlLnBhcmVudCwgYXNzZXQpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gaG1yRGVsZXRlKGJ1bmRsZSwgaWQpIHtcbiAgbGV0IG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChtb2R1bGVzW2lkXSkge1xuICAgIC8vIENvbGxlY3QgZGVwZW5kZW5jaWVzIHRoYXQgd2lsbCBiZWNvbWUgb3JwaGFuZWQgd2hlbiB0aGlzIG1vZHVsZSBpcyBkZWxldGVkLlxuICAgIGxldCBkZXBzID0gbW9kdWxlc1tpZF1bMV07XG4gICAgbGV0IG9ycGhhbnMgPSBbXTtcbiAgICBmb3IgKGxldCBkZXAgaW4gZGVwcykge1xuICAgICAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgZGVwc1tkZXBdKTtcbiAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBvcnBoYW5zLnB1c2goZGVwc1tkZXBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWxldGUgdGhlIG1vZHVsZS4gVGhpcyBtdXN0IGJlIGRvbmUgYmVmb3JlIGRlbGV0aW5nIGRlcGVuZGVuY2llcyBpbiBjYXNlIG9mIGNpcmN1bGFyIGRlcGVuZGVuY2llcy5cbiAgICBkZWxldGUgbW9kdWxlc1tpZF07XG4gICAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07XG5cbiAgICAvLyBOb3cgZGVsZXRlIHRoZSBvcnBoYW5zLlxuICAgIG9ycGhhbnMuZm9yRWFjaChpZCA9PiB7XG4gICAgICBobXJEZWxldGUobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIGhtckRlbGV0ZShidW5kbGUucGFyZW50LCBpZCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGhtckFjY2VwdENoZWNrKGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgaWQgLyo6IHN0cmluZyAqLywgZGVwc0J5QnVuZGxlIC8qOiA/eyBbc3RyaW5nXTogeyBbc3RyaW5nXTogc3RyaW5nIH0gfSovKSB7XG4gIGlmIChobXJBY2NlcHRDaGVja09uZShidW5kbGUsIGlkLCBkZXBzQnlCdW5kbGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBUcmF2ZXJzZSBwYXJlbnRzIGJyZWFkdGggZmlyc3QuIEFsbCBwb3NzaWJsZSBhbmNlc3RyaWVzIG11c3QgYWNjZXB0IHRoZSBITVIgdXBkYXRlLCBvciB3ZSdsbCByZWxvYWQuXG4gIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgbGV0IGFjY2VwdGVkID0gZmFsc2U7XG4gIHdoaWxlIChwYXJlbnRzLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgdiA9IHBhcmVudHMuc2hpZnQoKTtcbiAgICBsZXQgYSA9IGhtckFjY2VwdENoZWNrT25lKHZbMF0sIHZbMV0sIG51bGwpO1xuICAgIGlmIChhKSB7XG4gICAgICAvLyBJZiB0aGlzIHBhcmVudCBhY2NlcHRzLCBzdG9wIHRyYXZlcnNpbmcgdXB3YXJkLCBidXQgc3RpbGwgY29uc2lkZXIgc2libGluZ3MuXG4gICAgICBhY2NlcHRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSwgcXVldWUgdGhlIHBhcmVudHMgaW4gdGhlIG5leHQgbGV2ZWwgdXB3YXJkLlxuICAgICAgbGV0IHAgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgdlsxXSk7XG4gICAgICBpZiAocC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIHBhcmVudHMsIHRoZW4gd2UndmUgcmVhY2hlZCBhbiBlbnRyeSB3aXRob3V0IGFjY2VwdGluZy4gUmVsb2FkLlxuICAgICAgICBhY2NlcHRlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHBhcmVudHMucHVzaCguLi5wKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFjY2VwdGVkO1xufVxuZnVuY3Rpb24gaG1yQWNjZXB0Q2hlY2tPbmUoYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLCBpZCAvKjogc3RyaW5nICovLCBkZXBzQnlCdW5kbGUgLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki8pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChkZXBzQnlCdW5kbGUgJiYgIWRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF0pIHtcbiAgICAvLyBJZiB3ZSByZWFjaGVkIHRoZSByb290IGJ1bmRsZSB3aXRob3V0IGZpbmRpbmcgd2hlcmUgdGhlIGFzc2V0IHNob3VsZCBnbyxcbiAgICAvLyB0aGVyZSdzIG5vdGhpbmcgdG8gZG8uIE1hcmsgYXMgXCJhY2NlcHRlZFwiIHNvIHdlIGRvbid0IHJlbG9hZCB0aGUgcGFnZS5cbiAgICBpZiAoIWJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gaG1yQWNjZXB0Q2hlY2soYnVuZGxlLnBhcmVudCwgaWQsIGRlcHNCeUJ1bmRsZSk7XG4gIH1cbiAgaWYgKGNoZWNrZWRBc3NldHNbaWRdKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY2hlY2tlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYXNzZXRzVG9EaXNwb3NlLnB1c2goW2J1bmRsZSwgaWRdKTtcbiAgaWYgKCFjYWNoZWQgfHwgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgYXNzZXRzVG9BY2NlcHQucHVzaChbYnVuZGxlLCBpZF0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5mdW5jdGlvbiBobXJEaXNwb3NlKGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgaWQgLyo6IHN0cmluZyAqLykge1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYnVuZGxlLmhvdERhdGFbaWRdID0ge307XG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCkge1xuICAgIGNhY2hlZC5ob3QuZGF0YSA9IGJ1bmRsZS5ob3REYXRhW2lkXTtcbiAgfVxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICBjYihidW5kbGUuaG90RGF0YVtpZF0pO1xuICAgIH0pO1xuICB9XG4gIGRlbGV0ZSBidW5kbGUuY2FjaGVbaWRdO1xufVxuZnVuY3Rpb24gaG1yQWNjZXB0KGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgaWQgLyo6IHN0cmluZyAqLykge1xuICAvLyBFeGVjdXRlIHRoZSBtb2R1bGUuXG4gIGJ1bmRsZShpZCk7XG5cbiAgLy8gUnVuIHRoZSBhY2NlcHQgY2FsbGJhY2tzIGluIHRoZSBuZXcgdmVyc2lvbiBvZiB0aGUgbW9kdWxlLlxuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIHZhciBhc3NldHNUb0Fsc29BY2NlcHQgPSBjYihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgfSk7XG4gICAgICBpZiAoYXNzZXRzVG9BbHNvQWNjZXB0ICYmIGFzc2V0c1RvQWNjZXB0Lmxlbmd0aCkge1xuICAgICAgICBhc3NldHNUb0Fsc29BY2NlcHQuZm9yRWFjaChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIGhtckRpc3Bvc2UoYVswXSwgYVsxXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vICRGbG93Rml4TWVbbWV0aG9kLXVuYmluZGluZ11cbiAgICAgICAgYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShhc3NldHNUb0FjY2VwdCwgYXNzZXRzVG9BbHNvQWNjZXB0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSIsIi8vIFVzZSBhIGNyb3NzLWJyb3dzZXIgc3RvcmFnZSBBUEk6XHJcbmltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCdcclxuaW1wb3J0IGdwdGhUb2dnbGVJbWcgZnJvbSAnLi4vaW1nL2dwdGgtdG9nZ2xlLWNpcmNsZWQud2VicCdcclxuXHJcbi8vIGxldCBpc09wdGlvbnNTaG93biA9IGZhbHNlXHJcblxyXG4vLyBHbG9iYWwgVmFyaWFibGVzXHJcbmxldCBpc09wdGlvbnNTaG93biA9IGZhbHNlXHJcbmxldCAkaHRtbFRhZ1xyXG5sZXQgJGZsb2F0aW5nQnRuXHJcbmxldCAkZmxvYXRpbmdUaGVtZU9wdGlvbnNcclxubGV0ICRmbG9hdGluZ1RoZW1lc0J0bnNDb250YWluZXJcclxuXHJcbi8vIEluaXRpYWxpemF0aW9uXHJcbmluaXRpYWxpemVUaGVtZSgpXHJcbmNyZWF0ZUFuZEFwcGVuZFNWR1N0aWNreUJ0bigpXHJcblxyXG4vLyBjb25zdCAkaHRtbFRhZyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxyXG4vLyBjb25zdCAkZmxvYXRpbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aF9fc3ZnLWljb24nKVxyXG4vLyBjb25zdCAkZmxvYXRpbmdUaGVtZU9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aF9fb3B0aW9ucycpXHJcbi8vIGNvbnN0ICRmbG9hdGluZ1RoZW1lc0J0bnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aF9fdGhlbWVzLWJ0bnMnKVxyXG5cclxuLy8gJGZsb2F0aW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlT3B0aW9ucylcclxuLy8gJGZsb2F0aW5nVGhlbWVzQnRuc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNoYW5nZVRoZW1lKVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVRoZW1lKCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB7IGdwdGhlbWU6IHN0b3JlZFRoZW1lIH0gPSBhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoJ2dwdGhlbWUnKVxyXG5cdFx0Y29uc3QgdGhlbWUgPSBzdG9yZWRUaGVtZSB8fCAod2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJykubWF0Y2hlcyA/ICdsaWdodCcgOiAnZGFyaycpXHJcblx0XHRhcHBseVRoZW1lKHRoZW1lKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBpbml0aWFsaXppbmcgdGhlbWU6JywgZXJyb3IpXHJcblx0fVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXRUaGVtZSh0aGVtZSkge1xyXG5cdHRyeSB7XHJcblx0XHRhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyBncHRoZW1lOiB0aGVtZSB9KVxyXG5cdFx0YXBwbHlUaGVtZSh0aGVtZSlcclxuXHRcdHRvZ2dsZU9wdGlvbnMoKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBzZXR0aW5nIHRoZW1lOicsIGVycm9yKVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQW5kQXBwZW5kU1ZHU3RpY2t5QnRuKCkge1xyXG5cdGNvbnN0IGdwdGhGbG9hdGluZ0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0Z3B0aEZsb2F0aW5nQnRuLmNsYXNzTmFtZSA9ICdncHRoX19zdmcnXHJcblxyXG5cdGxldCBodG1sQ29kZSA9IGBcclxuXHRcdDxkaXYgY2xhc3M9XCJncHRoX19zdmctaWNvblwiPlxyXG5cdFx0XHQ8aW1nIHNyYz1cIiR7Z3B0aFRvZ2dsZUltZ31cIiBhbHQ9XCJncHRoLXRvZ2dsZVwiLz5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImdwdGhfX29wdGlvbnNcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImdwdGhfX3RoZW1lc1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJncHRoX190aGVtZXMtYnRuc1wiPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBpZD1cImxpZ2h0XCIgZGF0YS1ncHRoLXRoZW1lPVwibGlnaHRcIj7imIDvuI88L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gaWQ9XCJkYXJrXCIgZGF0YS1ncHRoLXRoZW1lPVwiZGFya1wiPvCfjJk8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gaWQ9XCJvbGVkXCIgZGF0YS1ncHRoLXRoZW1lPVwiYmxhY2tcIj7wn4yWPC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG5cclxuXHQvLyBncHRoRmxvYXRpbmdCdG4uaW5uZXJIVE1MID0gaHRtbENvZGVcclxuXHRncHRoRmxvYXRpbmdCdG4uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sQ29kZSlcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdwdGhGbG9hdGluZ0J0bilcclxuXHJcblx0Ly8gQ2FjaGUgRE9NIGVsZW1lbnRzIGFmdGVyIGFwcGVuZGluZ1xyXG5cdCRodG1sVGFnID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XHJcblx0JGZsb2F0aW5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdwdGhfX3N2Zy1pY29uJylcclxuXHQkZmxvYXRpbmdUaGVtZU9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aF9fb3B0aW9ucycpXHJcblx0JGZsb2F0aW5nVGhlbWVzQnRuc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoX190aGVtZXMtYnRucycpXHJcblxyXG5cdC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgYWZ0ZXIgRE9NIGVsZW1lbnRzIGFyZSBhcHBlbmRlZFxyXG5cdCRmbG9hdGluZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU9wdGlvbnMpXHJcblx0JGZsb2F0aW5nVGhlbWVzQnRuc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNoYW5nZVRoZW1lKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2VUaGVtZShlKSB7XHJcblx0Y29uc3QgdGhlbWVCdXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKVxyXG5cdGlmICghdGhlbWVCdXR0b24pIHJldHVyblxyXG5cclxuXHRjb25zdCB0aGVtZSA9IHRoZW1lQnV0dG9uLmlkXHJcblx0c2V0VGhlbWUodGhlbWUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VGhlbWUodGhlbWUpIHtcclxuXHQkaHRtbFRhZy5kYXRhc2V0LmdwdGhlbWUgPSB0aGVtZVxyXG5cdCRodG1sVGFnLnN0eWxlLmNvbG9yU2NoZW1lID0gdGhlbWUgPT09ICdvbGVkJyA/ICdkYXJrJyA6IHRoZW1lXHJcblx0JGh0bWxUYWcuY2xhc3NOYW1lID0gdGhlbWUgPT09ICdvbGVkJyA/ICdkYXJrJyA6IHRoZW1lXHJcblx0aWYgKHRoZW1lICE9PSAnb2xlZCcpICRodG1sVGFnLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1ncHRoZW1lJylcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlT3B0aW9ucygpIHtcclxuXHRpc09wdGlvbnNTaG93biA9ICFpc09wdGlvbnNTaG93blxyXG5cdCRmbG9hdGluZ1RoZW1lT3B0aW9ucy5jbGFzc0xpc3QudG9nZ2xlKCdncHRoLW9wdGlvbnMtc2hvd24nLCBpc09wdGlvbnNTaG93bilcclxuXHJcblx0aWYgKGlzT3B0aW9uc1Nob3duKSBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU9wdGlvbnMpXHJcblx0ZWxzZSBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU9wdGlvbnMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVPcHRpb25zKGUpIHtcclxuXHRjb25zdCBpc0NsaWNrSW5zaWRlRmxvYXRpbmdCdG4gPSAkZmxvYXRpbmdCdG4uY29udGFpbnMoZS50YXJnZXQpXHJcblx0Y29uc3QgaXNDbGlja0luc2lkZUZsb2F0aW5nT3B0aW9ucyA9ICRmbG9hdGluZ1RoZW1lT3B0aW9ucy5jb250YWlucyhlLnRhcmdldClcclxuXHJcblx0aWYgKCFpc0NsaWNrSW5zaWRlRmxvYXRpbmdCdG4gJiYgIWlzQ2xpY2tJbnNpZGVGbG9hdGluZ09wdGlvbnMpIHRvZ2dsZU9wdGlvbnMoKVxyXG5cclxuXHQvLyBpZiAoISRmbG9hdGluZ0J0bi5jb250YWlucyhlLnRhcmdldCkgJiYgISRmbG9hdGluZ1RoZW1lT3B0aW9ucy5jb250YWlucyhlLnRhcmdldCkpIHRvZ2dsZU9wdGlvbnMoKVxyXG59XHJcblxyXG5zZXRUaW1lb3V0KCgpID0+IHtcclxuXHQkZmxvYXRpbmdCdG4uY2xhc3NMaXN0LmFkZCgnZ3B0aF9fc3ZnLS1zbWFsbCcpXHJcbn0sIDMwMDApXHJcbiIsIi8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjEwLjAgLSBGcmkgQXVnIDEyIDIwMjIgMTk6NDI6NDQgKi9cbi8qIC0qLSBNb2RlOiBpbmRlbnQtdGFicy1tb2RlOiBuaWw7IGpzLWluZGVudC1sZXZlbDogMiAtKi0gKi9cbi8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG4vKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmlmICghZ2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWU/LmlkKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2NyaXB0IHNob3VsZCBvbmx5IGJlIGxvYWRlZCBpbiBhIGJyb3dzZXIgZXh0ZW5zaW9uLlwiKTtcbn1cblxuaWYgKHR5cGVvZiBnbG9iYWxUaGlzLmJyb3dzZXIgPT09IFwidW5kZWZpbmVkXCIgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbFRoaXMuYnJvd3NlcikgIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgY29uc3QgQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFID0gXCJUaGUgbWVzc2FnZSBwb3J0IGNsb3NlZCBiZWZvcmUgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuXCI7XG5cbiAgLy8gV3JhcHBpbmcgdGhlIGJ1bGsgb2YgdGhpcyBwb2x5ZmlsbCBpbiBhIG9uZS10aW1lLXVzZSBmdW5jdGlvbiBpcyBhIG1pbm9yXG4gIC8vIG9wdGltaXphdGlvbiBmb3IgRmlyZWZveC4gU2luY2UgU3BpZGVybW9ua2V5IGRvZXMgbm90IGZ1bGx5IHBhcnNlIHRoZVxuICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAvLyBuZXZlciBhY3R1YWxseSBuZWVkIHRvIGJlIGNhbGxlZCwgdGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIGJlIGluY2x1ZGVkXG4gIC8vIGluIEZpcmVmb3ggbmVhcmx5IGZvciBmcmVlLlxuICBjb25zdCB3cmFwQVBJcyA9IGV4dGVuc2lvbkFQSXMgPT4ge1xuICAgIC8vIE5PVEU6IGFwaU1ldGFkYXRhIGlzIGFzc29jaWF0ZWQgdG8gdGhlIGNvbnRlbnQgb2YgdGhlIGFwaS1tZXRhZGF0YS5qc29uIGZpbGVcbiAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgLy8gSlNPTiBmaWxlLlxuICAgIGNvbnN0IGFwaU1ldGFkYXRhID0ge1xuICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImNsZWFyQWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRSZWNlbnRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0U3ViVHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiYnJvd3NlckFjdGlvblwiOiB7XG4gICAgICAgIFwiZGlzYWJsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwib3BlblBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInNldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ2FjaGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVEb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRm9ybURhdGFcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVMb2NhbFN0b3JhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlUGFzc3dvcmRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0dGluZ3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImNvb2tpZXNcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsQ29va2llU3RvcmVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgXCJpbnNwZWN0ZWRXaW5kb3dcIjoge1xuICAgICAgICAgIFwiZXZhbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYW5lbHNcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAzLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDMsXG4gICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZWxlbWVudHNcIjoge1xuICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZG93bmxvYWRzXCI6IHtcbiAgICAgICAgXCJjYW5jZWxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXJhc2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0RmlsZUljb25cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwicGF1c2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXN1bWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICBcImlzQWxsb3dlZEZpbGVTY2hlbWVBY2Nlc3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiaXNBbGxvd2VkSW5jb2duaXRvQWNjZXNzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJoaXN0b3J5XCI6IHtcbiAgICAgICAgXCJhZGRVcmxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZVJhbmdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZVVybFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBY2NlcHRMYW5ndWFnZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImlkZW50aXR5XCI6IHtcbiAgICAgICAgXCJsYXVuY2hXZWJBdXRoRmxvd1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaWRsZVwiOiB7XG4gICAgICAgIFwicXVlcnlTdGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwibWFuYWdlbWVudFwiOiB7XG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRTZWxmXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInNldEVuYWJsZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwibm90aWZpY2F0aW9uc1wiOiB7XG4gICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBlcm1pc3Npb25zXCI6IHtcbiAgICAgICAgXCJjb250YWluc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlcXVlc3RcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInJ1bnRpbWVcIjoge1xuICAgICAgICBcImdldEJhY2tncm91bmRQYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuT3B0aW9uc1BhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWVzdFVwZGF0ZUNoZWNrXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInNlbmROYXRpdmVNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNldFVuaW5zdGFsbFVSTFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2Vzc2lvbnNcIjoge1xuICAgICAgICBcImdldERldmljZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzdG9yZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgIFwibG9jYWxcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWFuYWdlZFwiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGFic1wiOiB7XG4gICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZHVwbGljYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImV4ZWN1dGVTY3JpcHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Wm9vbVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ29CYWNrXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdvRm9yd2FyZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaW5zZXJ0Q1NTXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVsb2FkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0Wm9vbVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgXCJnZXRBbGxGcmFtZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0RnJhbWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndlYlJlcXVlc3RcIjoge1xuICAgICAgICBcImhhbmRsZXJCZWhhdmlvckNoYW5nZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndpbmRvd3NcIjoge1xuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoT2JqZWN0LmtleXMoYXBpTWV0YWRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBXZWFrTWFwIHN1YmNsYXNzIHdoaWNoIGNyZWF0ZXMgYW5kIHN0b3JlcyBhIHZhbHVlIGZvciBhbnkga2V5IHdoaWNoIGRvZXNcbiAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICogb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGluIG9yZGVyIHRvIGNyZWF0ZSB0aGUgdmFsdWUgZm9yIGFueVxuICAgICAqICAgICAgICBrZXkgd2hpY2ggZG9lcyBub3QgZXhpc3QsIHRoZSBmaXJzdCB0aW1lIGl0IGlzIGFjY2Vzc2VkLiBUaGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICovXG4gICAgY2xhc3MgRGVmYXVsdFdlYWtNYXAgZXh0ZW5kcyBXZWFrTWFwIHtcbiAgICAgIGNvbnN0cnVjdG9yKGNyZWF0ZUl0ZW0sIGl0ZW1zID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtID0gY3JlYXRlSXRlbTtcbiAgICAgIH1cblxuICAgICAgZ2V0KGtleSkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgICB0aGlzLnNldChrZXksIHRoaXMuY3JlYXRlSXRlbShrZXkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhbiBvYmplY3Qgd2l0aCBhIGB0aGVuYCBtZXRob2QsIGFuZCBjYW5cbiAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICovXG4gICAgY29uc3QgaXNUaGVuYWJsZSA9IHZhbHVlID0+IHtcbiAgICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGNhbGxlZCwgd2lsbCByZXNvbHZlIG9yIHJlamVjdFxuICAgICAqIHRoZSBnaXZlbiBwcm9taXNlIGJhc2VkIG9uIGhvdyBpdCBpcyBjYWxsZWQ6XG4gICAgICpcbiAgICAgKiAtIElmLCB3aGVuIGNhbGxlZCwgYGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcmAgY29udGFpbnMgYSBub24tbnVsbCBvYmplY3QsXG4gICAgICogICB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIHRoYXQgdmFsdWUuXG4gICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICogICByZXNvbHZlZCB0byB0aGF0IHZhbHVlLlxuICAgICAqIC0gT3RoZXJ3aXNlLCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB0byBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGVcbiAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb21pc2VcbiAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAqICAgICAgICBwcm9taXNlLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVzb2x2ZVxuICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZWplY3RcbiAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZWplY3Rpb24gZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSB3cmFwcGVkIG1ldGhvZCB3aGljaCBoYXMgY3JlYXRlZCB0aGUgY2FsbGJhY2suXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICogICAgICAgIFRoZSBnZW5lcmF0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIHByb21pc2UucmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fFxuICAgICAgICAgICAgICAgICAgIChjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSkge1xuICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3NbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3MpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSAobnVtQXJncykgPT4gbnVtQXJncyA9PSAxID8gXCJhcmd1bWVudFwiIDogXCJhcmd1bWVudHNcIjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xuICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggZmV3ZXIgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxuICAgICAqICAgICAgIFRoZSBnZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFzeW5jRnVuY3Rpb25XcmFwcGVyKHRhcmdldCwgLi4uYXJncykge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gVGhpcyBBUEkgbWV0aG9kIGhhcyBjdXJyZW50bHkgbm8gY2FsbGJhY2sgb24gQ2hyb21lLCBidXQgaXQgcmV0dXJuIGEgcHJvbWlzZSBvbiBGaXJlZm94LFxuICAgICAgICAgICAgLy8gYW5kIHNvIHRoZSBwb2x5ZmlsbCB3aWxsIHRyeSB0byBjYWxsIGl0IHdpdGggYSBjYWxsYmFjayBmaXJzdCwgYW5kIGl0IHdpbGwgZmFsbGJhY2tcbiAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe3Jlc29sdmUsIHJlamVjdH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtuYW1lfSBBUEkgbWV0aG9kIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IHRoZSBjYWxsYmFjayBwYXJhbWV0ZXIsIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWxsaW5nIGJhY2sgdG8gY2FsbCBpdCB3aXRob3V0IGEgY2FsbGJhY2s6IFwiLCBjYkVycm9yKTtcblxuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG5cbiAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBBUEkgbWV0aG9kIG1ldGFkYXRhLCBzbyB0aGF0IHRoZSBuZXh0IEFQSSBjYWxscyB3aWxsIG5vdCB0cnkgdG9cbiAgICAgICAgICAgICAgLy8gdXNlIHRoZSB1bnN1cHBvcnRlZCBjYWxsYmFjayBhbnltb3JlLlxuICAgICAgICAgICAgICBtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICBtZXRhZGF0YS5ub0NhbGxiYWNrID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe3Jlc29sdmUsIHJlamVjdH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFdyYXBzIGFuIGV4aXN0aW5nIG1ldGhvZCBvZiB0aGUgdGFyZ2V0IG9iamVjdCwgc28gdGhhdCBjYWxscyB0byBpdCBhcmVcbiAgICAgKiBpbnRlcmNlcHRlZCBieSB0aGUgZ2l2ZW4gd3JhcHBlciBmdW5jdGlvbi4gVGhlIHdyYXBwZXIgZnVuY3Rpb24gcmVjZWl2ZXMsXG4gICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICogdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgKiAgICAgICAgVGhlIG9yaWdpbmFsIHRhcmdldCBvYmplY3QgdGhhdCB0aGUgd3JhcHBlZCBtZXRob2QgYmVsb25ncyB0by5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2RcbiAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgKiAgICAgICAgb2JqZWN0IHdoaWNoIGlzIGNyZWF0ZWQgdG8gd3JhcCB0aGUgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHdyYXBwZXJcbiAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgKiAgICAgICAgb2YgdGhlIHdyYXBwZWQgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgKiAgICAgICAgQSBQcm94eSBvYmplY3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdoaWNoIGludm9rZXMgdGhlIGdpdmVuIHdyYXBwZXJcbiAgICAgKiAgICAgICAgbWV0aG9kIGluIGl0cyBwbGFjZS5cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb3h5KG1ldGhvZCwge1xuICAgICAgICBhcHBseSh0YXJnZXRNZXRob2QsIHRoaXNPYmosIGFyZ3MpIHtcbiAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgLyoqXG4gICAgICogV3JhcHMgYW4gb2JqZWN0IGluIGEgUHJveHkgd2hpY2ggaW50ZXJjZXB0cyBhbmQgd3JhcHMgY2VydGFpbiBtZXRob2RzXG4gICAgICogYmFzZWQgb24gdGhlIGdpdmVuIGB3cmFwcGVyc2AgYW5kIGBtZXRhZGF0YWAgb2JqZWN0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgKiAgICAgICAgVGhlIHRhcmdldCBvYmplY3QgdG8gd3JhcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbd3JhcHBlcnMgPSB7fV1cbiAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyB3cmFwcGVyIGZ1bmN0aW9ucyBmb3Igc3BlY2lhbCBjYXNlcy4gQW55XG4gICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICogICAgICAgIG1ldGhvZCBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUuIFRoZXNlXG4gICAgICogICAgICAgIHdyYXBwZXIgbWV0aG9kcyBhcmUgaW52b2tlZCBhcyBkZXNjcmliZWQgaW4ge0BzZWUgd3JhcE1ldGhvZH0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW21ldGFkYXRhID0ge31dXG4gICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgbWV0YWRhdGEgdXNlZCB0byBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlXG4gICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICogICAgICAgIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZSB3aGljaCBoYXMgYSBjb3JyZXNwb25kaW5nIG1ldGFkYXRhIG9iamVjdFxuICAgICAqICAgICAgICBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYG1ldGFkYXRhYCB0cmVlIGlzIHJlcGxhY2VkIHdpdGggYW5cbiAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICogICAgICAgIHtAc2VlIHdyYXBBc3luY0Z1bmN0aW9ufVxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICovXG4gICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBsZXQgaGFuZGxlcnMgPSB7XG4gICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldCB8fCBwcm9wIGluIGNhY2hlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghKHByb3AgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcF07XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAvLyBhbnkgd3JhcHBpbmcuXG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlcnNbcHJvcF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAvLyBXZSBoYXZlIGEgc3BlY2lhbC1jYXNlIHdyYXBwZXIgZm9yIHRoaXMgbWV0aG9kLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gYXN5bmMgbWV0aG9kIHRoYXQgd2UgaGF2ZSBtZXRhZGF0YSBmb3IuIENyZWF0ZSBhXG4gICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gd3JhcEFzeW5jRnVuY3Rpb24ocHJvcCwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCB0aGF0IHdlIGRvbid0IGtub3cgb3IgY2FyZSBhYm91dC4gUmV0dXJuIHRoZVxuICAgICAgICAgICAgICAvLyBvcmlnaW5hbCBtZXRob2QsIGJvdW5kIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICBoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxuICAgICAgICAgICAgLy8gbWV0YWRhdGEuXG4gICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXCIqXCIpKSB7XG4gICAgICAgICAgICAvLyBXcmFwIGFsbCBwcm9wZXJ0aWVzIGluICogbmFtZXNwYWNlLlxuICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBkbyBhbnkgd3JhcHBpbmcgZm9yIHRoaXMgcHJvcGVydHksXG4gICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldChwcm94eVRhcmdldCwgcHJvcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWZpbmVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCwgZGVzYykge1xuICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWxldGVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGNhY2hlLCBwcm9wKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgLy8gb3JpZ2luYWwgdmFsdWUgb2YgdGhlIHRhcmdldCBpZiB0aGF0IHZhbHVlIGlzIGRlY2xhcmVkIHJlYWQtb25seSBhbmRcbiAgICAgIC8vIG5vbi1jb25maWd1cmFibGUuIEZvciB0aGlzIHJlYXNvbiwgd2UgY3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZVxuICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbm5vdCByZXR1cm4gYSBjdXN0b20gb2JqZWN0IGZvciBBUElzIHRoYXRcbiAgICAgIC8vIGFyZSBkZWNsYXJlZCByZWFkLW9ubHkgYW5kIG5vbi1jb25maWd1cmFibGUsIHN1Y2ggYXMgYGNocm9tZS5kZXZ0b29sc2AuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIHByb3h5IGhhbmRsZXJzIHRoZW1zZWx2ZXMgd2lsbCBzdGlsbCB1c2UgdGhlIG9yaWdpbmFsIGB0YXJnZXRgXG4gICAgICAvLyBpbnN0ZWFkIG9mIHRoZSBgcHJveHlUYXJnZXRgLCBzbyB0aGF0IHRoZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFyZVxuICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cbiAgICAgIGxldCBwcm94eVRhcmdldCA9IE9iamVjdC5jcmVhdGUodGFyZ2V0KTtcbiAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNldCBvZiB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYW4gZXZlbnQgb2JqZWN0LCB3aGljaCBoYW5kbGVzXG4gICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgKlxuICAgICAqIEEgc2luZ2xlIHdyYXBwZXIgaXMgY3JlYXRlZCBmb3IgZWFjaCBsaXN0ZW5lciBmdW5jdGlvbiwgYW5kIHN0b3JlZCBpbiBhXG4gICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgKiByZXRyaWV2ZSB0aGUgb3JpZ2luYWwgd3JhcHBlciwgc28gdGhhdCAgYXR0ZW1wdHMgdG8gcmVtb3ZlIGFcbiAgICAgKiBwcmV2aW91c2x5LWFkZGVkIGxpc3RlbmVyIHdvcmsgYXMgZXhwZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RlZmF1bHRXZWFrTWFwPGZ1bmN0aW9uLCBmdW5jdGlvbj59IHdyYXBwZXJNYXBcbiAgICAgKiAgICAgICAgQSBEZWZhdWx0V2Vha01hcCBvYmplY3Qgd2hpY2ggd2lsbCBjcmVhdGUgdGhlIGFwcHJvcHJpYXRlIHdyYXBwZXJcbiAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAqICAgICAgICBhbiBleGlzdGluZyBvbmUgd2hlbiBpdCBkb2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwRXZlbnQgPSB3cmFwcGVyTWFwID0+ICh7XG4gICAgICBhZGRMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyLCAuLi5hcmdzKSB7XG4gICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgfSxcblxuICAgICAgaGFzTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmVMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvblJlcXVlc3RGaW5pc2hlZCBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IHdpbGwgcmV0dXJuIGFcbiAgICAgICAqIGBnZXRDb250ZW50KClgIHByb3BlcnR5IHdoaWNoIHJldHVybnMgYSBgUHJvbWlzZWAgcmF0aGVyIHRoYW4gdXNpbmcgYVxuICAgICAgICogY2FsbGJhY2sgQVBJLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXFcbiAgICAgICAqICAgICAgICBUaGUgSEFSIGVudHJ5IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIG5ldHdvcmsgcmVxdWVzdC5cbiAgICAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uUmVxdWVzdEZpbmlzaGVkKHJlcSkge1xuICAgICAgICBjb25zdCB3cmFwcGVkUmVxID0gd3JhcE9iamVjdChyZXEsIHt9IC8qIHdyYXBwZXJzICovLCB7XG4gICAgICAgICAgZ2V0Q29udGVudDoge1xuICAgICAgICAgICAgbWluQXJnczogMCxcbiAgICAgICAgICAgIG1heEFyZ3M6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGxpc3RlbmVyKHdyYXBwZWRSZXEpO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXG4gICAgICAgKiBpdHMgcmV0dXJuIHZhbHVlLCByYXRoZXIgdGhhbiBieSByZXR1cm5pbmcgYSBzZW50aW5lbCB2YWx1ZSBhbmQgY2FsbGluZyBhXG4gICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gc2VuZGVyXG4gICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXG4gICAgICAgKiAgICAgICAgQSBjYWxsYmFjayB3aGljaCwgd2hlbiBjYWxsZWQgd2l0aCBhbiBhcmJpdHJhcnkgYXJndW1lbnQsIHNlbmRzXG4gICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgKiAgICAgICAgVHJ1ZSBpZiB0aGUgd3JhcHBlZCBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHdoaWNoIHdpbGwgbGF0ZXJcbiAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IGRpZENhbGxTZW5kUmVzcG9uc2UgPSBmYWxzZTtcblxuICAgICAgICBsZXQgd3JhcHBlZFNlbmRSZXNwb25zZTtcbiAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICB3cmFwcGVkU2VuZFJlc3BvbnNlID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGRpZENhbGxTZW5kUmVzcG9uc2UgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNSZXN1bHRUaGVuYWJsZSA9IHJlc3VsdCAhPT0gdHJ1ZSAmJiBpc1RoZW5hYmxlKHJlc3VsdCk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIGRpZG4ndCByZXR1cm5lZCB0cnVlIG9yIGEgUHJvbWlzZSwgb3IgY2FsbGVkXG4gICAgICAgIC8vIHdyYXBwZWRTZW5kUmVzcG9uc2Ugc3luY2hyb25vdXNseSwgd2UgY2FuIGV4aXQgZWFybGllclxuICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHRydWUgJiYgIWlzUmVzdWx0VGhlbmFibGUgJiYgIWRpZENhbGxTZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXG4gICAgICAgIC8vIHRvIHRyYW5zbGF0ZSB0aGUgbWVzc2FnZSBpbnRvIGEgcmVzb2x2ZWQgcHJvbWlzZSBvciBhIHJlamVjdGVkXG4gICAgICAgIC8vIHByb21pc2UpLlxuICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSAocHJvbWlzZSkgPT4ge1xuICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xuICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgIHNlbmRSZXNwb25zZShtc2cpO1xuICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgIC8vIGlzIGFuIGluc3RhbmNlIG9mIGVycm9yLCBvciB0aGUgb2JqZWN0IGl0c2VsZiBvdGhlcndpc2UuXG4gICAgICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciB8fFxuICAgICAgICAgICAgICAgIHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fOiB0cnVlLFxuICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcIiwgZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCBzZW5kIHRoZSByZXNvbHZlZCB2YWx1ZSBhcyBhXG4gICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxuICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG4gICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XG4gICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7cmVqZWN0LCByZXNvbHZlfSwgcmVwbHkpID0+IHtcbiAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXG4gICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2lzc3Vlcy8xMzBcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmVwbHkgJiYgcmVwbHkuX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fKSB7XG4gICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAvLyBhbiBFcnJvciBpbnN0YW5jZS5cbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXBseS5tZXNzYWdlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHJlcGx5KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlID0gKG5hbWUsIG1ldGFkYXRhLCBhcGlOYW1lc3BhY2VPYmosIC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge3Jlc29sdmUsIHJlamVjdH0pO1xuICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcbiAgICAgICAgYXBpTmFtZXNwYWNlT2JqLnNlbmRNZXNzYWdlKC4uLmFyZ3MpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN0YXRpY1dyYXBwZXJzID0ge1xuICAgICAgZGV2dG9vbHM6IHtcbiAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgIG9uUmVxdWVzdEZpbmlzaGVkOiB3cmFwRXZlbnQob25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcnVudGltZToge1xuICAgICAgICBvbk1lc3NhZ2U6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7bWluQXJnczogMSwgbWF4QXJnczogM30pLFxuICAgICAgfSxcbiAgICAgIHRhYnM6IHtcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge21pbkFyZ3M6IDIsIG1heEFyZ3M6IDN9KSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBzZXR0aW5nTWV0YWRhdGEgPSB7XG4gICAgICBjbGVhcjoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgICAgZ2V0OiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgICBzZXQ6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICB9O1xuICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XG4gICAgICBuZXR3b3JrOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgICBzZXJ2aWNlczoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgICAgd2Vic2l0ZXM6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcbiAgfTtcblxuICAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gIC8vIGBtb2R1bGVgIHZhcmlhYmxlIGF2YWlsYWJsZS5cbiAgbW9kdWxlLmV4cG9ydHMgPSB3cmFwQVBJcyhjaHJvbWUpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzLmJyb3dzZXI7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaGVscGVycy9idW5kbGUtdXJsJykuZ2V0QnVuZGxlVVJMKCc2aDBJdScpICsgXCJncHRoLXRvZ2dsZS1jaXJjbGVkLjA3YjgzNjhkLndlYnBcIiArIFwiP1wiICsgRGF0ZS5ub3coKTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGJ1bmRsZVVSTCA9IHt9O1xuZnVuY3Rpb24gZ2V0QnVuZGxlVVJMQ2FjaGVkKGlkKSB7XG4gIHZhciB2YWx1ZSA9IGJ1bmRsZVVSTFtpZF07XG4gIGlmICghdmFsdWUpIHtcbiAgICB2YWx1ZSA9IGdldEJ1bmRsZVVSTCgpO1xuICAgIGJ1bmRsZVVSTFtpZF0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBnZXRCdW5kbGVVUkwoKSB7XG4gIHRyeSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHZhciBtYXRjaGVzID0gKCcnICsgZXJyLnN0YWNrKS5tYXRjaCgvKGh0dHBzP3xmaWxlfGZ0cHwoY2hyb21lfG1venxzYWZhcmktd2ViKS1leHRlbnNpb24pOlxcL1xcL1teKVxcbl0rL2cpO1xuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAvLyBUaGUgZmlyc3QgdHdvIHN0YWNrIGZyYW1lcyB3aWxsIGJlIHRoaXMgZnVuY3Rpb24gYW5kIGdldEJ1bmRsZVVSTENhY2hlZC5cbiAgICAgIC8vIFVzZSB0aGUgM3JkIG9uZSwgd2hpY2ggd2lsbCBiZSBhIHJ1bnRpbWUgaW4gdGhlIG9yaWdpbmFsIGJ1bmRsZS5cbiAgICAgIHJldHVybiBnZXRCYXNlVVJMKG1hdGNoZXNbMl0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJy8nO1xufVxuZnVuY3Rpb24gZ2V0QmFzZVVSTCh1cmwpIHtcbiAgcmV0dXJuICgnJyArIHVybCkucmVwbGFjZSgvXigoPzpodHRwcz98ZmlsZXxmdHB8KGNocm9tZXxtb3p8c2FmYXJpLXdlYiktZXh0ZW5zaW9uKTpcXC9cXC8uKylcXC9bXi9dKyQvLCAnJDEnKSArICcvJztcbn1cblxuLy8gVE9ETzogUmVwbGFjZSB1c2VzIHdpdGggYG5ldyBVUkwodXJsKS5vcmlnaW5gIHdoZW4gaWUxMSBpcyBubyBsb25nZXIgc3VwcG9ydGVkLlxuZnVuY3Rpb24gZ2V0T3JpZ2luKHVybCkge1xuICB2YXIgbWF0Y2hlcyA9ICgnJyArIHVybCkubWF0Y2goLyhodHRwcz98ZmlsZXxmdHB8KGNocm9tZXxtb3p8c2FmYXJpLXdlYiktZXh0ZW5zaW9uKTpcXC9cXC9bXi9dKy8pO1xuICBpZiAoIW1hdGNoZXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09yaWdpbiBub3QgZm91bmQnKTtcbiAgfVxuICByZXR1cm4gbWF0Y2hlc1swXTtcbn1cbmV4cG9ydHMuZ2V0QnVuZGxlVVJMID0gZ2V0QnVuZGxlVVJMQ2FjaGVkO1xuZXhwb3J0cy5nZXRCYXNlVVJMID0gZ2V0QmFzZVVSTDtcbmV4cG9ydHMuZ2V0T3JpZ2luID0gZ2V0T3JpZ2luOyIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKFxuICAgICAga2V5ID09PSAnZGVmYXVsdCcgfHxcbiAgICAgIGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8XG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGVzdCwga2V5KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJnbG9iYWxUaGlzIiwiY2hyb21lIiwicnVudGltZSIsImlkIiwiRXJyb3IiLCJicm93c2VyIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UiLCJ3cmFwQVBJcyIsImV4dGVuc2lvbkFQSXMiLCJhcGlNZXRhZGF0YSIsImtleXMiLCJsZW5ndGgiLCJEZWZhdWx0V2Vha01hcCIsIldlYWtNYXAiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZUl0ZW0iLCJpdGVtcyIsInVuZGVmaW5lZCIsImdldCIsImtleSIsImhhcyIsInNldCIsImlzVGhlbmFibGUiLCJ2YWx1ZSIsInRoZW4iLCJtYWtlQ2FsbGJhY2siLCJwcm9taXNlIiwibWV0YWRhdGEiLCJjYWxsYmFja0FyZ3MiLCJsYXN0RXJyb3IiLCJyZWplY3QiLCJtZXNzYWdlIiwic2luZ2xlQ2FsbGJhY2tBcmciLCJyZXNvbHZlIiwicGx1cmFsaXplQXJndW1lbnRzIiwibnVtQXJncyIsIndyYXBBc3luY0Z1bmN0aW9uIiwibmFtZSIsImFzeW5jRnVuY3Rpb25XcmFwcGVyIiwidGFyZ2V0IiwiYXJncyIsIm1pbkFyZ3MiLCJtYXhBcmdzIiwiUHJvbWlzZSIsImZhbGxiYWNrVG9Ob0NhbGxiYWNrIiwiY2JFcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwibm9DYWxsYmFjayIsIndyYXBNZXRob2QiLCJtZXRob2QiLCJ3cmFwcGVyIiwiUHJveHkiLCJhcHBseSIsInRhcmdldE1ldGhvZCIsInRoaXNPYmoiLCJjYWxsIiwiaGFzT3duUHJvcGVydHkiLCJGdW5jdGlvbiIsImJpbmQiLCJ3cmFwT2JqZWN0Iiwid3JhcHBlcnMiLCJjYWNoZSIsImNyZWF0ZSIsImhhbmRsZXJzIiwicHJveHlUYXJnZXQiLCJwcm9wIiwicmVjZWl2ZXIiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJkZXNjIiwiUmVmbGVjdCIsImRlbGV0ZVByb3BlcnR5Iiwid3JhcEV2ZW50Iiwid3JhcHBlck1hcCIsImFkZExpc3RlbmVyIiwibGlzdGVuZXIiLCJoYXNMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwib25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyIsIm9uUmVxdWVzdEZpbmlzaGVkIiwicmVxIiwid3JhcHBlZFJlcSIsImdldENvbnRlbnQiLCJvbk1lc3NhZ2VXcmFwcGVycyIsIm9uTWVzc2FnZSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImRpZENhbGxTZW5kUmVzcG9uc2UiLCJ3cmFwcGVkU2VuZFJlc3BvbnNlIiwic2VuZFJlc3BvbnNlUHJvbWlzZSIsInJlc3BvbnNlIiwicmVzdWx0IiwiZXJyIiwiaXNSZXN1bHRUaGVuYWJsZSIsInNlbmRQcm9taXNlZFJlc3VsdCIsIm1zZyIsImVycm9yIiwiX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fIiwiY2F0Y2giLCJ3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayIsInJlcGx5Iiwid3JhcHBlZFNlbmRNZXNzYWdlIiwiYXBpTmFtZXNwYWNlT2JqIiwid3JhcHBlZENiIiwicHVzaCIsInNlbmRNZXNzYWdlIiwic3RhdGljV3JhcHBlcnMiLCJkZXZ0b29scyIsIm5ldHdvcmsiLCJvbk1lc3NhZ2VFeHRlcm5hbCIsInRhYnMiLCJzZXR0aW5nTWV0YWRhdGEiLCJjbGVhciIsInByaXZhY3kiLCJzZXJ2aWNlcyIsIndlYnNpdGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5hODc5NjQxYS5qcy5tYXAifQ==
