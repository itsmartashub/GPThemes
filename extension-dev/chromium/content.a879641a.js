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
// const storage = chrome.storage.sync || browser.storage.sync
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webextensionPolyfill = require("webextension-polyfill");
var _webextensionPolyfillDefault = parcelHelpers.interopDefault(_webextensionPolyfill);
var _gpthToggleCircledWebp = require("../img/gpth-toggle-circled.webp");
var _gpthToggleCircledWebpDefault = parcelHelpers.interopDefault(_gpthToggleCircledWebp);
let isOptionsShown = false;
(0, _webextensionPolyfillDefault.default).storage.sync.get("gptheme").then((data)=>{
    /* 	const theme = data.gptheme || 'dark'
	applyTheme(theme) */ let theme = "";
    const storedTheme = data.gptheme;
    if (storedTheme) {
        theme = storedTheme;
        applyTheme(theme);
        return;
    }
    // Check if the dark or light theme preference is set
    const lightThemeQuery = window.matchMedia("(prefers-color-scheme: light)");
    lightThemeQuery.matches ? theme = "light" : theme = "dark" // Fallback theme
    ;
    applyTheme(theme);
});
createAndAppendSVGStickyBtn();
const $htmlTag = document.documentElement;
const $options = document.querySelector(".gpth__options");
const $svgIcon = document.querySelector(".gpth__svg-icon");
const $themeButtonsContainer = document.querySelector(".gpth__themes-btns");
// const $themeButtons = document.querySelectorAll('.gpth__themes-btns button')
$svgIcon.addEventListener("click", toggleOptions);
/* $themeButtons.forEach((btn) => {
	btn.addEventListener('click', ({ target }) => {
		const theme = target.id
		browser.storage.sync.set({ gptheme: theme })
		applyTheme(theme)
		toggleOptions()
	})
}) */ $themeButtonsContainer.addEventListener("click", (event)=>{
    const themeButton = event.target.closest("button");
    if (!themeButton) return;
    const theme = themeButton.id;
    (0, _webextensionPolyfillDefault.default).storage.sync.set({
        gptheme: theme
    });
    applyTheme(theme);
    toggleOptions();
});
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
}
/* function applyTheme(theme) {
	let htmlTag = document.documentElement

	// document.documentElement.className = theme === 'oled' ? 'oled dark' : theme
	if (theme === 'oled') {
		htmlTag.dataset.gptheme = theme
		htmlTag.style.colorScheme = 'dark'
		htmlTag.className = 'dark'
	} else {
		htmlTag.style.colorScheme = theme
		htmlTag.className = theme
		htmlTag.hasAttribute('data-gptheme') && htmlTag.removeAttribute('data-gptheme')
	}
}
 */ function applyTheme(theme) {
    $htmlTag.dataset.gptheme = theme;
    $htmlTag.style.colorScheme = theme === "oled" ? "dark" : theme;
    $htmlTag.className = theme === "oled" ? "dark" : theme;
    if (theme !== "oled") $htmlTag.removeAttribute("data-gptheme");
}
function toggleOptions() {
    isOptionsShown = !isOptionsShown;
    $options.classList.toggle("gpth-options-shown", isOptionsShown);
    if (isOptionsShown) document.body.addEventListener("click", hideOptions);
    else document.body.removeEventListener("click", hideOptions);
}
function hideOptions(event) {
    if (!$svgIcon.contains(event.target) && !$options.contains(event.target)) toggleOptions();
}

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsR0FBRzs7O0FDdENwQixRQUFRLGNBQWMsR0FBRyxTQUFVLENBQUM7SUFDbEMsT0FBTyxLQUFLLEVBQUUsVUFBVSxHQUFHLElBQUk7UUFBQyxTQUFTO0lBQUM7QUFDNUM7QUFFQSxRQUFRLGlCQUFpQixHQUFHLFNBQVUsQ0FBQztJQUNyQyxPQUFPLGNBQWMsQ0FBQyxHQUFHLGNBQWM7UUFBQyxPQUFPO0lBQUk7QUFDckQ7QUFFQSxRQUFRLFNBQVMsR0FBRyxTQUFVLE1BQU0sRUFBRSxJQUFJO0lBQ3hDLE9BQU8sSUFBSSxDQUFDLFFBQVEsT0FBTyxDQUFDLFNBQVUsR0FBRztRQUN2QyxJQUNFLFFBQVEsYUFDUixRQUFRLGdCQUNSLE9BQU8sU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxNQUUzQztRQUdGLE9BQU8sY0FBYyxDQUFDLE1BQU0sS0FBSztZQUMvQixZQUFZO1lBQ1osS0FBSztnQkFDSCxPQUFPLE1BQU0sQ0FBQyxJQUFJO1lBQ3BCO1FBQ0Y7SUFDRjtJQUVBLE9BQU87QUFDVDtBQUVBLFFBQVEsTUFBTSxHQUFHLFNBQVUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHO0lBQzVDLE9BQU8sY0FBYyxDQUFDLE1BQU0sVUFBVTtRQUNwQyxZQUFZO1FBQ1osS0FBSztJQUNQO0FBQ0YiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtYnJvd3Nlci1obXIvbGliL3J1bnRpbWUtYzU2MmY3ZDdlYzVlYjUwMC5qcyIsInNyYy9qcy9jb250ZW50LmpzIiwibm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWpzL2xpYi9ydW50aW1lLTMzYjcxNmRkYjQ5ODllMTEuanMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWpzL2xpYi9oZWxwZXJzL2J1bmRsZS11cmwuanMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSE1SX0hPU1QgPSBcImxvY2FsaG9zdFwiO3ZhciBITVJfUE9SVCA9IDEyMzQ7dmFyIEhNUl9TRUNVUkUgPSBmYWxzZTt2YXIgSE1SX0VOVl9IQVNIID0gXCJkZGY2ZTA3MjRiZDM1OGJkXCI7dmFyIEhNUl9VU0VfU1NFID0gZmFsc2U7bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEID0gXCI0OTE0ZTJlMWE4Nzk2NDFhXCI7XCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGdsb2JhbCBITVJfSE9TVCwgSE1SX1BPUlQsIEhNUl9FTlZfSEFTSCwgSE1SX1NFQ1VSRSwgSE1SX1VTRV9TU0UsIGNocm9tZSwgYnJvd3NlciwgX19wYXJjZWxfX2ltcG9ydF9fLCBfX3BhcmNlbF9faW1wb3J0U2NyaXB0c19fLCBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUgKi9cbi8qOjpcbmltcG9ydCB0eXBlIHtcbiAgSE1SQXNzZXQsXG4gIEhNUk1lc3NhZ2UsXG59IGZyb20gJ0BwYXJjZWwvcmVwb3J0ZXItZGV2LXNlcnZlci9zcmMvSE1SU2VydmVyLmpzJztcbmludGVyZmFjZSBQYXJjZWxSZXF1aXJlIHtcbiAgKHN0cmluZyk6IG1peGVkO1xuICBjYWNoZToge3xbc3RyaW5nXTogUGFyY2VsTW9kdWxlfH07XG4gIGhvdERhdGE6IHt8W3N0cmluZ106IG1peGVkfH07XG4gIE1vZHVsZTogYW55O1xuICBwYXJlbnQ6ID9QYXJjZWxSZXF1aXJlO1xuICBpc1BhcmNlbFJlcXVpcmU6IHRydWU7XG4gIG1vZHVsZXM6IHt8W3N0cmluZ106IFtGdW5jdGlvbiwge3xbc3RyaW5nXTogc3RyaW5nfH1dfH07XG4gIEhNUl9CVU5ETEVfSUQ6IHN0cmluZztcbiAgcm9vdDogUGFyY2VsUmVxdWlyZTtcbn1cbmludGVyZmFjZSBQYXJjZWxNb2R1bGUge1xuICBob3Q6IHt8XG4gICAgZGF0YTogbWl4ZWQsXG4gICAgYWNjZXB0KGNiOiAoRnVuY3Rpb24pID0+IHZvaWQpOiB2b2lkLFxuICAgIGRpc3Bvc2UoY2I6IChtaXhlZCkgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gYWNjZXB0KGRlcHM6IEFycmF5PHN0cmluZz4gfCBzdHJpbmcsIGNiOiAoRnVuY3Rpb24pID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGRlY2xpbmUoKTogdm9pZCxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBBcnJheTwoRnVuY3Rpb24pID0+IHZvaWQ+LFxuICAgIF9kaXNwb3NlQ2FsbGJhY2tzOiBBcnJheTwobWl4ZWQpID0+IHZvaWQ+LFxuICB8fTtcbn1cbmludGVyZmFjZSBFeHRlbnNpb25Db250ZXh0IHtcbiAgcnVudGltZToge3xcbiAgICByZWxvYWQoKTogdm9pZCxcbiAgICBnZXRVUkwodXJsOiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgZ2V0TWFuaWZlc3QoKToge21hbmlmZXN0X3ZlcnNpb246IG51bWJlciwgLi4ufTtcbiAgfH07XG59XG5kZWNsYXJlIHZhciBtb2R1bGU6IHtidW5kbGU6IFBhcmNlbFJlcXVpcmUsIC4uLn07XG5kZWNsYXJlIHZhciBITVJfSE9TVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1BPUlQ6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9FTlZfSEFTSDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1NFQ1VSRTogYm9vbGVhbjtcbmRlY2xhcmUgdmFyIEhNUl9VU0VfU1NFOiBib29sZWFuO1xuZGVjbGFyZSB2YXIgY2hyb21lOiBFeHRlbnNpb25Db250ZXh0O1xuZGVjbGFyZSB2YXIgYnJvd3NlcjogRXh0ZW5zaW9uQ29udGV4dDtcbmRlY2xhcmUgdmFyIF9fcGFyY2VsX19pbXBvcnRfXzogKHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbmRlY2xhcmUgdmFyIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX186IChzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG5kZWNsYXJlIHZhciBnbG9iYWxUaGlzOiB0eXBlb2Ygc2VsZjtcbmRlY2xhcmUgdmFyIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZTogT2JqZWN0O1xuKi9cbnZhciBPVkVSTEFZX0lEID0gJ19fcGFyY2VsX19lcnJvcl9fb3ZlcmxheV9fJztcbnZhciBPbGRNb2R1bGUgPSBtb2R1bGUuYnVuZGxlLk1vZHVsZTtcbmZ1bmN0aW9uIE1vZHVsZShtb2R1bGVOYW1lKSB7XG4gIE9sZE1vZHVsZS5jYWxsKHRoaXMsIG1vZHVsZU5hbWUpO1xuICB0aGlzLmhvdCA9IHtcbiAgICBkYXRhOiBtb2R1bGUuYnVuZGxlLmhvdERhdGFbbW9kdWxlTmFtZV0sXG4gICAgX2FjY2VwdENhbGxiYWNrczogW10sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IFtdLFxuICAgIGFjY2VwdDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICB0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaChmbiB8fCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgfSxcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaChmbik7XG4gICAgfVxuICB9O1xuICBtb2R1bGUuYnVuZGxlLmhvdERhdGFbbW9kdWxlTmFtZV0gPSB1bmRlZmluZWQ7XG59XG5tb2R1bGUuYnVuZGxlLk1vZHVsZSA9IE1vZHVsZTtcbm1vZHVsZS5idW5kbGUuaG90RGF0YSA9IHt9O1xudmFyIGNoZWNrZWRBc3NldHMgLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqLywgYXNzZXRzVG9EaXNwb3NlIC8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi8sIGFzc2V0c1RvQWNjZXB0IC8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi87XG5cbmZ1bmN0aW9uIGdldEhvc3RuYW1lKCkge1xuICByZXR1cm4gSE1SX0hPU1QgfHwgKGxvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoJ2h0dHAnKSA9PT0gMCA/IGxvY2F0aW9uLmhvc3RuYW1lIDogJ2xvY2FsaG9zdCcpO1xufVxuZnVuY3Rpb24gZ2V0UG9ydCgpIHtcbiAgcmV0dXJuIEhNUl9QT1JUIHx8IGxvY2F0aW9uLnBvcnQ7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcbnZhciBwYXJlbnQgPSBtb2R1bGUuYnVuZGxlLnBhcmVudDtcbmlmICgoIXBhcmVudCB8fCAhcGFyZW50LmlzUGFyY2VsUmVxdWlyZSkgJiYgdHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbiAgdmFyIHBvcnQgPSBnZXRQb3J0KCk7XG4gIHZhciBwcm90b2NvbCA9IEhNUl9TRUNVUkUgfHwgbG9jYXRpb24ucHJvdG9jb2wgPT0gJ2h0dHBzOicgJiYgIVsnbG9jYWxob3N0JywgJzEyNy4wLjAuMScsICcwLjAuMC4wJ10uaW5jbHVkZXMoaG9zdG5hbWUpID8gJ3dzcycgOiAnd3MnO1xuICB2YXIgd3M7XG4gIGlmIChITVJfVVNFX1NTRSkge1xuICAgIHdzID0gbmV3IEV2ZW50U291cmNlKCcvX19wYXJjZWxfaG1yJyk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHdzID0gbmV3IFdlYlNvY2tldChwcm90b2NvbCArICc6Ly8nICsgaG9zdG5hbWUgKyAocG9ydCA/ICc6JyArIHBvcnQgOiAnJykgKyAnLycpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5tZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgd3MgPSB7fTtcbiAgICB9XG4gIH1cblxuICAvLyBXZWIgZXh0ZW5zaW9uIGNvbnRleHRcbiAgdmFyIGV4dEN0eCA9IHR5cGVvZiBicm93c2VyID09PSAndW5kZWZpbmVkJyA/IHR5cGVvZiBjaHJvbWUgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGNocm9tZSA6IGJyb3dzZXI7XG5cbiAgLy8gU2FmYXJpIGRvZXNuJ3Qgc3VwcG9ydCBzb3VyY2VVUkwgaW4gZXJyb3Igc3RhY2tzLlxuICAvLyBldmFsIG1heSBhbHNvIGJlIGRpc2FibGVkIHZpYSBDU1AsIHNvIGRvIGEgcXVpY2sgY2hlY2suXG4gIHZhciBzdXBwb3J0c1NvdXJjZVVSTCA9IGZhbHNlO1xuICB0cnkge1xuICAgICgwLCBldmFsKSgndGhyb3cgbmV3IEVycm9yKFwidGVzdFwiKTsgLy8jIHNvdXJjZVVSTD10ZXN0LmpzJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHN1cHBvcnRzU291cmNlVVJMID0gZXJyLnN0YWNrLmluY2x1ZGVzKCd0ZXN0LmpzJyk7XG4gIH1cblxuICAvLyAkRmxvd0ZpeE1lXG4gIHdzLm9ubWVzc2FnZSA9IGFzeW5jIGZ1bmN0aW9uIChldmVudCAvKjoge2RhdGE6IHN0cmluZywgLi4ufSAqLykge1xuICAgIGNoZWNrZWRBc3NldHMgPSB7fSAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovO1xuICAgIGFzc2V0c1RvQWNjZXB0ID0gW107XG4gICAgYXNzZXRzVG9EaXNwb3NlID0gW107XG4gICAgdmFyIGRhdGEgLyo6IEhNUk1lc3NhZ2UgKi8gPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgIGlmIChkYXRhLnR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgICAvLyBSZW1vdmUgZXJyb3Igb3ZlcmxheSBpZiB0aGVyZSBpcyBvbmVcbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgfVxuICAgICAgbGV0IGFzc2V0cyA9IGRhdGEuYXNzZXRzLmZpbHRlcihhc3NldCA9PiBhc3NldC5lbnZIYXNoID09PSBITVJfRU5WX0hBU0gpO1xuXG4gICAgICAvLyBIYW5kbGUgSE1SIFVwZGF0ZVxuICAgICAgbGV0IGhhbmRsZWQgPSBhc3NldHMuZXZlcnkoYXNzZXQgPT4ge1xuICAgICAgICByZXR1cm4gYXNzZXQudHlwZSA9PT0gJ2NzcycgfHwgYXNzZXQudHlwZSA9PT0gJ2pzJyAmJiBobXJBY2NlcHRDaGVjayhtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0LmlkLCBhc3NldC5kZXBzQnlCdW5kbGUpO1xuICAgICAgfSk7XG4gICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG5cbiAgICAgICAgLy8gRGlzcGF0Y2ggY3VzdG9tIGV2ZW50IHNvIG90aGVyIHJ1bnRpbWVzIChlLmcgUmVhY3QgUmVmcmVzaCkgYXJlIGF3YXJlLlxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEN1c3RvbUV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncGFyY2VsaG1yYWNjZXB0JykpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGhtckFwcGx5VXBkYXRlcyhhc3NldHMpO1xuXG4gICAgICAgIC8vIERpc3Bvc2UgYWxsIG9sZCBhc3NldHMuXG4gICAgICAgIGxldCBwcm9jZXNzZWRBc3NldHMgPSB7fSAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0c1RvRGlzcG9zZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBpZCA9IGFzc2V0c1RvRGlzcG9zZVtpXVsxXTtcbiAgICAgICAgICBpZiAoIXByb2Nlc3NlZEFzc2V0c1tpZF0pIHtcbiAgICAgICAgICAgIGhtckRpc3Bvc2UoYXNzZXRzVG9EaXNwb3NlW2ldWzBdLCBpZCk7XG4gICAgICAgICAgICBwcm9jZXNzZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSdW4gYWNjZXB0IGNhbGxiYWNrcy4gVGhpcyB3aWxsIGFsc28gcmUtZXhlY3V0ZSBvdGhlciBkaXNwb3NlZCBhc3NldHMgaW4gdG9wb2xvZ2ljYWwgb3JkZXIuXG4gICAgICAgIHByb2Nlc3NlZEFzc2V0cyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0c1RvQWNjZXB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGlkID0gYXNzZXRzVG9BY2NlcHRbaV1bMV07XG4gICAgICAgICAgaWYgKCFwcm9jZXNzZWRBc3NldHNbaWRdKSB7XG4gICAgICAgICAgICBobXJBY2NlcHQoYXNzZXRzVG9BY2NlcHRbaV1bMF0sIGlkKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGZ1bGxSZWxvYWQoKTtcbiAgICB9XG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgLy8gTG9nIHBhcmNlbCBlcnJvcnMgdG8gY29uc29sZVxuICAgICAgZm9yIChsZXQgYW5zaURpYWdub3N0aWMgb2YgZGF0YS5kaWFnbm9zdGljcy5hbnNpKSB7XG4gICAgICAgIGxldCBzdGFjayA9IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZSA/IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZSA6IGFuc2lEaWFnbm9zdGljLnN0YWNrO1xuICAgICAgICBjb25zb2xlLmVycm9yKCfwn5qoIFtwYXJjZWxdOiAnICsgYW5zaURpYWdub3N0aWMubWVzc2FnZSArICdcXG4nICsgc3RhY2sgKyAnXFxuXFxuJyArIGFuc2lEaWFnbm9zdGljLmhpbnRzLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFJlbmRlciB0aGUgZmFuY3kgaHRtbCBvdmVybGF5XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgICB2YXIgb3ZlcmxheSA9IGNyZWF0ZUVycm9yT3ZlcmxheShkYXRhLmRpYWdub3N0aWNzLmh0bWwpO1xuICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBpZiAod3MgaW5zdGFuY2VvZiBXZWJTb2NrZXQpIHtcbiAgICB3cy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLm1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgd3Mub25jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUud2FybignW3BhcmNlbF0g8J+aqCBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIHdhcyBsb3N0Jyk7XG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gcmVtb3ZlRXJyb3JPdmVybGF5KCkge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE9WRVJMQVlfSUQpO1xuICBpZiAob3ZlcmxheSkge1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgY29uc29sZS5sb2coJ1twYXJjZWxdIOKcqCBFcnJvciByZXNvbHZlZCcpO1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFcnJvck92ZXJsYXkoZGlhZ25vc3RpY3MpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3ZlcmxheS5pZCA9IE9WRVJMQVlfSUQ7XG4gIGxldCBlcnJvckhUTUwgPSAnPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6IGJsYWNrOyBvcGFjaXR5OiAwLjg1OyBmb250LXNpemU6IDE2cHg7IGNvbG9yOiB3aGl0ZTsgcG9zaXRpb246IGZpeGVkOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyB0b3A6IDBweDsgbGVmdDogMHB4OyBwYWRkaW5nOiAzMHB4OyBmb250LWZhbWlseTogTWVubG8sIENvbnNvbGFzLCBtb25vc3BhY2U7IHotaW5kZXg6IDk5OTk7XCI+JztcbiAgZm9yIChsZXQgZGlhZ25vc3RpYyBvZiBkaWFnbm9zdGljcykge1xuICAgIGxldCBzdGFjayA9IGRpYWdub3N0aWMuZnJhbWVzLmxlbmd0aCA/IGRpYWdub3N0aWMuZnJhbWVzLnJlZHVjZSgocCwgZnJhbWUpID0+IHtcbiAgICAgIHJldHVybiBgJHtwfVxuPGEgaHJlZj1cIi9fX3BhcmNlbF9sYXVuY2hfZWRpdG9yP2ZpbGU9JHtlbmNvZGVVUklDb21wb25lbnQoZnJhbWUubG9jYXRpb24pfVwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IGNvbG9yOiAjODg4XCIgb25jbGljaz1cImZldGNoKHRoaXMuaHJlZik7IHJldHVybiBmYWxzZVwiPiR7ZnJhbWUubG9jYXRpb259PC9hPlxuJHtmcmFtZS5jb2RlfWA7XG4gICAgfSwgJycpIDogZGlhZ25vc3RpYy5zdGFjaztcbiAgICBlcnJvckhUTUwgKz0gYFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IG1hcmdpbi10b3A6IDIwcHg7XCI+XG4gICAgICAgICAg8J+aqCAke2RpYWdub3N0aWMubWVzc2FnZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwcmU+JHtzdGFja308L3ByZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAke2RpYWdub3N0aWMuaGludHMubWFwKGhpbnQgPT4gJzxkaXY+8J+SoSAnICsgaGludCArICc8L2Rpdj4nKS5qb2luKCcnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICR7ZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9uID8gYDxkaXY+8J+TnSA8YSBzdHlsZT1cImNvbG9yOiB2aW9sZXRcIiBocmVmPVwiJHtkaWFnbm9zdGljLmRvY3VtZW50YXRpb259XCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGVhcm4gbW9yZTwvYT48L2Rpdj5gIDogJyd9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG4gIGVycm9ySFRNTCArPSAnPC9kaXY+JztcbiAgb3ZlcmxheS5pbm5lckhUTUwgPSBlcnJvckhUTUw7XG4gIHJldHVybiBvdmVybGF5O1xufVxuZnVuY3Rpb24gZnVsbFJlbG9hZCgpIHtcbiAgaWYgKCdyZWxvYWQnIGluIGxvY2F0aW9uKSB7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0gZWxzZSBpZiAoZXh0Q3R4ICYmIGV4dEN0eC5ydW50aW1lICYmIGV4dEN0eC5ydW50aW1lLnJlbG9hZCkge1xuICAgIGV4dEN0eC5ydW50aW1lLnJlbG9hZCgpO1xuICB9XG59XG5mdW5jdGlvbiBnZXRQYXJlbnRzKGJ1bmRsZSwgaWQpIC8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi97XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgcGFyZW50cyA9IFtdO1xuICB2YXIgaywgZCwgZGVwO1xuICBmb3IgKGsgaW4gbW9kdWxlcykge1xuICAgIGZvciAoZCBpbiBtb2R1bGVzW2tdWzFdKSB7XG4gICAgICBkZXAgPSBtb2R1bGVzW2tdWzFdW2RdO1xuICAgICAgaWYgKGRlcCA9PT0gaWQgfHwgQXJyYXkuaXNBcnJheShkZXApICYmIGRlcFtkZXAubGVuZ3RoIC0gMV0gPT09IGlkKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChbYnVuZGxlLCBrXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgcGFyZW50cyA9IHBhcmVudHMuY29uY2F0KGdldFBhcmVudHMoYnVuZGxlLnBhcmVudCwgaWQpKTtcbiAgfVxuICByZXR1cm4gcGFyZW50cztcbn1cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGluaykge1xuICB2YXIgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gIGlmICghaHJlZikge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbmV3TGluayA9IGxpbmsuY2xvbmVOb2RlKCk7XG4gIG5ld0xpbmsub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChsaW5rLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGxpbmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICB9XG4gIH07XG4gIG5ld0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJyxcbiAgLy8gJEZsb3dGaXhNZVxuICBocmVmLnNwbGl0KCc/JylbMF0gKyAnPycgKyBEYXRlLm5vdygpKTtcbiAgLy8gJEZsb3dGaXhNZVxuICBsaW5rLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0xpbmssIGxpbmsubmV4dFNpYmxpbmcpO1xufVxudmFyIGNzc1RpbWVvdXQgPSBudWxsO1xuZnVuY3Rpb24gcmVsb2FkQ1NTKCkge1xuICBpZiAoY3NzVGltZW91dCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjc3NUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV1cbiAgICAgIHZhciBocmVmIC8qOiBzdHJpbmcgKi8gPSBsaW5rc1tpXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gICAgICB2YXIgc2VydmVkRnJvbUhNUlNlcnZlciA9IGhvc3RuYW1lID09PSAnbG9jYWxob3N0JyA/IG5ldyBSZWdFeHAoJ14oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6JyArIGdldFBvcnQoKSkudGVzdChocmVmKSA6IGhyZWYuaW5kZXhPZihob3N0bmFtZSArICc6JyArIGdldFBvcnQoKSk7XG4gICAgICB2YXIgYWJzb2x1dGUgPSAvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KGhyZWYpICYmIGhyZWYuaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pICE9PSAwICYmICFzZXJ2ZWRGcm9tSE1SU2VydmVyO1xuICAgICAgaWYgKCFhYnNvbHV0ZSkge1xuICAgICAgICB1cGRhdGVMaW5rKGxpbmtzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY3NzVGltZW91dCA9IG51bGw7XG4gIH0sIDUwKTtcbn1cbmZ1bmN0aW9uIGhtckRvd25sb2FkKGFzc2V0KSB7XG4gIGlmIChhc3NldC50eXBlID09PSAnanMnKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5zcmMgPSBhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCk7XG4gICAgICBpZiAoYXNzZXQub3V0cHV0Rm9ybWF0ID09PSAnZXNtb2R1bGUnKSB7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ21vZHVsZSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB2YXIgX2RvY3VtZW50JGhlYWQ7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHNjcmlwdCk7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAoX2RvY3VtZW50JGhlYWQgPSBkb2N1bWVudC5oZWFkKSA9PT0gbnVsbCB8fCBfZG9jdW1lbnQkaGVhZCA9PT0gdm9pZCAwIHx8IF9kb2N1bWVudCRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbXBvcnRTY3JpcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBXb3JrZXIgc2NyaXB0c1xuICAgICAgaWYgKGFzc2V0Lm91dHB1dEZvcm1hdCA9PT0gJ2VzbW9kdWxlJykge1xuICAgICAgICByZXR1cm4gX19wYXJjZWxfX2ltcG9ydF9fKGFzc2V0LnVybCArICc/dD0nICsgRGF0ZS5ub3coKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBfX3BhcmNlbF9faW1wb3J0U2NyaXB0c19fKGFzc2V0LnVybCArICc/dD0nICsgRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuYXN5bmMgZnVuY3Rpb24gaG1yQXBwbHlVcGRhdGVzKGFzc2V0cykge1xuICBnbG9iYWwucGFyY2VsSG90VXBkYXRlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgbGV0IHNjcmlwdHNUb1JlbW92ZTtcbiAgdHJ5IHtcbiAgICAvLyBJZiBzb3VyY2VVUkwgY29tbWVudHMgYXJlbid0IHN1cHBvcnRlZCBpbiBldmFsLCB3ZSBuZWVkIHRvIGxvYWRcbiAgICAvLyB0aGUgdXBkYXRlIGZyb20gdGhlIGRldiBzZXJ2ZXIgb3ZlciBIVFRQIHNvIHRoYXQgc3RhY2sgdHJhY2VzXG4gICAgLy8gYXJlIGNvcnJlY3QgaW4gZXJyb3JzL2xvZ3MuIFRoaXMgaXMgbXVjaCBzbG93ZXIgdGhhbiBldmFsLCBzb1xuICAgIC8vIHdlIG9ubHkgZG8gaXQgaWYgbmVlZGVkIChjdXJyZW50bHkganVzdCBTYWZhcmkpLlxuICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzcyOTdcbiAgICAvLyBUaGlzIHBhdGggaXMgYWxzbyB0YWtlbiBpZiBhIENTUCBkaXNhbGxvd3MgZXZhbC5cbiAgICBpZiAoIXN1cHBvcnRzU291cmNlVVJMKSB7XG4gICAgICBsZXQgcHJvbWlzZXMgPSBhc3NldHMubWFwKGFzc2V0ID0+IHtcbiAgICAgICAgdmFyIF9obXJEb3dubG9hZDtcbiAgICAgICAgcmV0dXJuIChfaG1yRG93bmxvYWQgPSBobXJEb3dubG9hZChhc3NldCkpID09PSBudWxsIHx8IF9obXJEb3dubG9hZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2htckRvd25sb2FkLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgLy8gV2ViIGV4dGVuc2lvbiBmaXhcbiAgICAgICAgICBpZiAoZXh0Q3R4ICYmIGV4dEN0eC5ydW50aW1lICYmIGV4dEN0eC5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbiA9PSAzICYmIHR5cGVvZiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUgIT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsIGluc3RhbmNlb2YgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlKSB7XG4gICAgICAgICAgICBleHRDdHgucnVudGltZS5yZWxvYWQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgc2NyaXB0c1RvUmVtb3ZlID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cbiAgICBhc3NldHMuZm9yRWFjaChmdW5jdGlvbiAoYXNzZXQpIHtcbiAgICAgIGhtckFwcGx5KG1vZHVsZS5idW5kbGUucm9vdCwgYXNzZXQpO1xuICAgIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGRlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlO1xuICAgIGlmIChzY3JpcHRzVG9SZW1vdmUpIHtcbiAgICAgIHNjcmlwdHNUb1JlbW92ZS5mb3JFYWNoKHNjcmlwdCA9PiB7XG4gICAgICAgIGlmIChzY3JpcHQpIHtcbiAgICAgICAgICB2YXIgX2RvY3VtZW50JGhlYWQyO1xuICAgICAgICAgIChfZG9jdW1lbnQkaGVhZDIgPSBkb2N1bWVudC5oZWFkKSA9PT0gbnVsbCB8fCBfZG9jdW1lbnQkaGVhZDIgPT09IHZvaWQgMCB8fCBfZG9jdW1lbnQkaGVhZDIucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBobXJBcHBseShidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGFzc2V0IC8qOiAgSE1SQXNzZXQgKi8pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChhc3NldC50eXBlID09PSAnY3NzJykge1xuICAgIHJlbG9hZENTUygpO1xuICB9IGVsc2UgaWYgKGFzc2V0LnR5cGUgPT09ICdqcycpIHtcbiAgICBsZXQgZGVwcyA9IGFzc2V0LmRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF07XG4gICAgaWYgKGRlcHMpIHtcbiAgICAgIGlmIChtb2R1bGVzW2Fzc2V0LmlkXSkge1xuICAgICAgICAvLyBSZW1vdmUgZGVwZW5kZW5jaWVzIHRoYXQgYXJlIHJlbW92ZWQgYW5kIHdpbGwgYmVjb21lIG9ycGhhbmVkLlxuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBzbyB0aGF0IGlmIHRoZSBhc3NldCBpcyBhZGRlZCBiYWNrIGFnYWluLCB0aGUgY2FjaGUgaXMgZ29uZSwgYW5kIHdlIHByZXZlbnQgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICAgICAgICBsZXQgb2xkRGVwcyA9IG1vZHVsZXNbYXNzZXQuaWRdWzFdO1xuICAgICAgICBmb3IgKGxldCBkZXAgaW4gb2xkRGVwcykge1xuICAgICAgICAgIGlmICghZGVwc1tkZXBdIHx8IGRlcHNbZGVwXSAhPT0gb2xkRGVwc1tkZXBdKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSBvbGREZXBzW2RlcF07XG4gICAgICAgICAgICBsZXQgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICAgICAgICBpZiAocGFyZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgaG1yRGVsZXRlKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzU291cmNlVVJMKSB7XG4gICAgICAgIC8vIEdsb2JhbCBldmFsLiBXZSB3b3VsZCB1c2UgYG5ldyBGdW5jdGlvbmAgaGVyZSBidXQgYnJvd3NlclxuICAgICAgICAvLyBzdXBwb3J0IGZvciBzb3VyY2UgbWFwcyBpcyBiZXR0ZXIgd2l0aCBldmFsLlxuICAgICAgICAoMCwgZXZhbCkoYXNzZXQub3V0cHV0KTtcbiAgICAgIH1cblxuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgbGV0IGZuID0gZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVthc3NldC5pZF07XG4gICAgICBtb2R1bGVzW2Fzc2V0LmlkXSA9IFtmbiwgZGVwc107XG4gICAgfSBlbHNlIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgICBobXJBcHBseShidW5kbGUucGFyZW50LCBhc3NldCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBobXJEZWxldGUoYnVuZGxlLCBpZCkge1xuICBsZXQgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1vZHVsZXNbaWRdKSB7XG4gICAgLy8gQ29sbGVjdCBkZXBlbmRlbmNpZXMgdGhhdCB3aWxsIGJlY29tZSBvcnBoYW5lZCB3aGVuIHRoaXMgbW9kdWxlIGlzIGRlbGV0ZWQuXG4gICAgbGV0IGRlcHMgPSBtb2R1bGVzW2lkXVsxXTtcbiAgICBsZXQgb3JwaGFucyA9IFtdO1xuICAgIGZvciAobGV0IGRlcCBpbiBkZXBzKSB7XG4gICAgICBsZXQgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBkZXBzW2RlcF0pO1xuICAgICAgaWYgKHBhcmVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIG9ycGhhbnMucHVzaChkZXBzW2RlcF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlbGV0ZSB0aGUgbW9kdWxlLiBUaGlzIG11c3QgYmUgZG9uZSBiZWZvcmUgZGVsZXRpbmcgZGVwZW5kZW5jaWVzIGluIGNhc2Ugb2YgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuICAgIGRlbGV0ZSBtb2R1bGVzW2lkXTtcbiAgICBkZWxldGUgYnVuZGxlLmNhY2hlW2lkXTtcblxuICAgIC8vIE5vdyBkZWxldGUgdGhlIG9ycGhhbnMuXG4gICAgb3JwaGFucy5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGhtckRlbGV0ZShtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgaG1yRGVsZXRlKGJ1bmRsZS5wYXJlbnQsIGlkKTtcbiAgfVxufVxuZnVuY3Rpb24gaG1yQWNjZXB0Q2hlY2soYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLCBpZCAvKjogc3RyaW5nICovLCBkZXBzQnlCdW5kbGUgLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki8pIHtcbiAgaWYgKGhtckFjY2VwdENoZWNrT25lKGJ1bmRsZSwgaWQsIGRlcHNCeUJ1bmRsZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIFRyYXZlcnNlIHBhcmVudHMgYnJlYWR0aCBmaXJzdC4gQWxsIHBvc3NpYmxlIGFuY2VzdHJpZXMgbXVzdCBhY2NlcHQgdGhlIEhNUiB1cGRhdGUsIG9yIHdlJ2xsIHJlbG9hZC5cbiAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICBsZXQgYWNjZXB0ZWQgPSBmYWxzZTtcbiAgd2hpbGUgKHBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgIGxldCB2ID0gcGFyZW50cy5zaGlmdCgpO1xuICAgIGxldCBhID0gaG1yQWNjZXB0Q2hlY2tPbmUodlswXSwgdlsxXSwgbnVsbCk7XG4gICAgaWYgKGEpIHtcbiAgICAgIC8vIElmIHRoaXMgcGFyZW50IGFjY2VwdHMsIHN0b3AgdHJhdmVyc2luZyB1cHdhcmQsIGJ1dCBzdGlsbCBjb25zaWRlciBzaWJsaW5ncy5cbiAgICAgIGFjY2VwdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3RoZXJ3aXNlLCBxdWV1ZSB0aGUgcGFyZW50cyBpbiB0aGUgbmV4dCBsZXZlbCB1cHdhcmQuXG4gICAgICBsZXQgcCA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCB2WzFdKTtcbiAgICAgIGlmIChwLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gcGFyZW50cywgdGhlbiB3ZSd2ZSByZWFjaGVkIGFuIGVudHJ5IHdpdGhvdXQgYWNjZXB0aW5nLiBSZWxvYWQuXG4gICAgICAgIGFjY2VwdGVkID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcGFyZW50cy5wdXNoKC4uLnApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYWNjZXB0ZWQ7XG59XG5mdW5jdGlvbiBobXJBY2NlcHRDaGVja09uZShidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGlkIC8qOiBzdHJpbmcgKi8sIGRlcHNCeUJ1bmRsZSAvKjogP3sgW3N0cmluZ106IHsgW3N0cmluZ106IHN0cmluZyB9IH0qLykge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGRlcHNCeUJ1bmRsZSAmJiAhZGVwc0J5QnVuZGxlW2J1bmRsZS5ITVJfQlVORExFX0lEXSkge1xuICAgIC8vIElmIHdlIHJlYWNoZWQgdGhlIHJvb3QgYnVuZGxlIHdpdGhvdXQgZmluZGluZyB3aGVyZSB0aGUgYXNzZXQgc2hvdWxkIGdvLFxuICAgIC8vIHRoZXJlJ3Mgbm90aGluZyB0byBkby4gTWFyayBhcyBcImFjY2VwdGVkXCIgc28gd2UgZG9uJ3QgcmVsb2FkIHRoZSBwYWdlLlxuICAgIGlmICghYnVuZGxlLnBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBobXJBY2NlcHRDaGVjayhidW5kbGUucGFyZW50LCBpZCwgZGVwc0J5QnVuZGxlKTtcbiAgfVxuICBpZiAoY2hlY2tlZEFzc2V0c1tpZF0pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjaGVja2VkQXNzZXRzW2lkXSA9IHRydWU7XG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBhc3NldHNUb0Rpc3Bvc2UucHVzaChbYnVuZGxlLCBpZF0pO1xuICBpZiAoIWNhY2hlZCB8fCBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBhc3NldHNUb0FjY2VwdC5wdXNoKFtidW5kbGUsIGlkXSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGhtckRpc3Bvc2UoYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLCBpZCAvKjogc3RyaW5nICovKSB7XG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBidW5kbGUuaG90RGF0YVtpZF0gPSB7fTtcbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90KSB7XG4gICAgY2FjaGVkLmhvdC5kYXRhID0gYnVuZGxlLmhvdERhdGFbaWRdO1xuICB9XG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIGNiKGJ1bmRsZS5ob3REYXRhW2lkXSk7XG4gICAgfSk7XG4gIH1cbiAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07XG59XG5mdW5jdGlvbiBobXJBY2NlcHQoYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLCBpZCAvKjogc3RyaW5nICovKSB7XG4gIC8vIEV4ZWN1dGUgdGhlIG1vZHVsZS5cbiAgYnVuZGxlKGlkKTtcblxuICAvLyBSdW4gdGhlIGFjY2VwdCBjYWxsYmFja3MgaW4gdGhlIG5ldyB2ZXJzaW9uIG9mIHRoZSBtb2R1bGUuXG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgdmFyIGFzc2V0c1RvQWxzb0FjY2VwdCA9IGNiKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChhc3NldHNUb0Fsc29BY2NlcHQgJiYgYXNzZXRzVG9BY2NlcHQubGVuZ3RoKSB7XG4gICAgICAgIGFzc2V0c1RvQWxzb0FjY2VwdC5mb3JFYWNoKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgaG1yRGlzcG9zZShhWzBdLCBhWzFdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gJEZsb3dGaXhNZVttZXRob2QtdW5iaW5kaW5nXVxuICAgICAgICBhc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGFzc2V0c1RvQWNjZXB0LCBhc3NldHNUb0Fsc29BY2NlcHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59IiwiLy8gVXNlIGEgY3Jvc3MtYnJvd3NlciBzdG9yYWdlIEFQSTpcclxuLy8gY29uc3Qgc3RvcmFnZSA9IGNocm9tZS5zdG9yYWdlLnN5bmMgfHwgYnJvd3Nlci5zdG9yYWdlLnN5bmNcclxuaW1wb3J0IGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJ1xyXG5pbXBvcnQgZ3B0aFRvZ2dsZUltZyBmcm9tICcuLi9pbWcvZ3B0aC10b2dnbGUtY2lyY2xlZC53ZWJwJ1xyXG5cclxubGV0IGlzT3B0aW9uc1Nob3duID0gZmFsc2VcclxuXHJcbmJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgnZ3B0aGVtZScpLnRoZW4oKGRhdGEpID0+IHtcclxuXHQvKiBcdGNvbnN0IHRoZW1lID0gZGF0YS5ncHRoZW1lIHx8ICdkYXJrJ1xyXG5cdGFwcGx5VGhlbWUodGhlbWUpICovXHJcblx0bGV0IHRoZW1lID0gJydcclxuXHRjb25zdCBzdG9yZWRUaGVtZSA9IGRhdGEuZ3B0aGVtZVxyXG5cclxuXHRpZiAoc3RvcmVkVGhlbWUpIHtcclxuXHRcdHRoZW1lID0gc3RvcmVkVGhlbWVcclxuXHRcdGFwcGx5VGhlbWUodGhlbWUpXHJcblxyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cclxuXHQvLyBDaGVjayBpZiB0aGUgZGFyayBvciBsaWdodCB0aGVtZSBwcmVmZXJlbmNlIGlzIHNldFxyXG5cdGNvbnN0IGxpZ2h0VGhlbWVRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScpXHJcblxyXG5cdGxpZ2h0VGhlbWVRdWVyeS5tYXRjaGVzID8gKHRoZW1lID0gJ2xpZ2h0JykgOiAodGhlbWUgPSAnZGFyaycpIC8vIEZhbGxiYWNrIHRoZW1lXHJcblxyXG5cdGFwcGx5VGhlbWUodGhlbWUpXHJcbn0pXHJcblxyXG5jcmVhdGVBbmRBcHBlbmRTVkdTdGlja3lCdG4oKVxyXG5cclxuY29uc3QgJGh0bWxUYWcgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcclxuY29uc3QgJG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3B0aF9fb3B0aW9ucycpXHJcbmNvbnN0ICRzdmdJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdwdGhfX3N2Zy1pY29uJylcclxuY29uc3QgJHRoZW1lQnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncHRoX190aGVtZXMtYnRucycpXHJcbi8vIGNvbnN0ICR0aGVtZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3B0aF9fdGhlbWVzLWJ0bnMgYnV0dG9uJylcclxuXHJcbiRzdmdJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlT3B0aW9ucylcclxuXHJcbi8qICR0aGVtZUJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcblx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuXHRcdGNvbnN0IHRoZW1lID0gdGFyZ2V0LmlkXHJcblx0XHRicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyBncHRoZW1lOiB0aGVtZSB9KVxyXG5cdFx0YXBwbHlUaGVtZSh0aGVtZSlcclxuXHRcdHRvZ2dsZU9wdGlvbnMoKVxyXG5cdH0pXHJcbn0pICovXHJcbiR0aGVtZUJ1dHRvbnNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRjb25zdCB0aGVtZUJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdidXR0b24nKVxyXG5cdGlmICghdGhlbWVCdXR0b24pIHJldHVyblxyXG5cclxuXHRjb25zdCB0aGVtZSA9IHRoZW1lQnV0dG9uLmlkXHJcblx0YnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHsgZ3B0aGVtZTogdGhlbWUgfSlcclxuXHRhcHBseVRoZW1lKHRoZW1lKVxyXG5cdHRvZ2dsZU9wdGlvbnMoKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQW5kQXBwZW5kU1ZHU3RpY2t5QnRuKCkge1xyXG5cdGNvbnN0IGdwdGhGbG9hdGluZ0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0Z3B0aEZsb2F0aW5nQnRuLmNsYXNzTmFtZSA9ICdncHRoX19zdmcnXHJcblxyXG5cdGxldCBodG1sQ29kZSA9IGBcclxuXHRcdDxkaXYgY2xhc3M9XCJncHRoX19zdmctaWNvblwiPlxyXG5cdFx0XHQ8aW1nIHNyYz1cIiR7Z3B0aFRvZ2dsZUltZ31cIiBhbHQ9XCJncHRoLXRvZ2dsZVwiLz5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImdwdGhfX29wdGlvbnNcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImdwdGhfX3RoZW1lc1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJncHRoX190aGVtZXMtYnRuc1wiPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBpZD1cImxpZ2h0XCIgZGF0YS1ncHRoLXRoZW1lPVwibGlnaHRcIj7imIDvuI88L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gaWQ9XCJkYXJrXCIgZGF0YS1ncHRoLXRoZW1lPVwiZGFya1wiPvCfjJk8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gaWQ9XCJvbGVkXCIgZGF0YS1ncHRoLXRoZW1lPVwiYmxhY2tcIj7wn4yWPC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG5cclxuXHQvLyBncHRoRmxvYXRpbmdCdG4uaW5uZXJIVE1MID0gaHRtbENvZGVcclxuXHRncHRoRmxvYXRpbmdCdG4uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sQ29kZSlcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdwdGhGbG9hdGluZ0J0bilcclxufVxyXG5cclxuLyogZnVuY3Rpb24gYXBwbHlUaGVtZSh0aGVtZSkge1xyXG5cdGxldCBodG1sVGFnID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XHJcblxyXG5cdC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgPSB0aGVtZSA9PT0gJ29sZWQnID8gJ29sZWQgZGFyaycgOiB0aGVtZVxyXG5cdGlmICh0aGVtZSA9PT0gJ29sZWQnKSB7XHJcblx0XHRodG1sVGFnLmRhdGFzZXQuZ3B0aGVtZSA9IHRoZW1lXHJcblx0XHRodG1sVGFnLnN0eWxlLmNvbG9yU2NoZW1lID0gJ2RhcmsnXHJcblx0XHRodG1sVGFnLmNsYXNzTmFtZSA9ICdkYXJrJ1xyXG5cdH0gZWxzZSB7XHJcblx0XHRodG1sVGFnLnN0eWxlLmNvbG9yU2NoZW1lID0gdGhlbWVcclxuXHRcdGh0bWxUYWcuY2xhc3NOYW1lID0gdGhlbWVcclxuXHRcdGh0bWxUYWcuaGFzQXR0cmlidXRlKCdkYXRhLWdwdGhlbWUnKSAmJiBodG1sVGFnLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1ncHRoZW1lJylcclxuXHR9XHJcbn1cclxuICovXHJcbmZ1bmN0aW9uIGFwcGx5VGhlbWUodGhlbWUpIHtcclxuXHQkaHRtbFRhZy5kYXRhc2V0LmdwdGhlbWUgPSB0aGVtZVxyXG5cdCRodG1sVGFnLnN0eWxlLmNvbG9yU2NoZW1lID0gdGhlbWUgPT09ICdvbGVkJyA/ICdkYXJrJyA6IHRoZW1lXHJcblx0JGh0bWxUYWcuY2xhc3NOYW1lID0gdGhlbWUgPT09ICdvbGVkJyA/ICdkYXJrJyA6IHRoZW1lXHJcblx0aWYgKHRoZW1lICE9PSAnb2xlZCcpICRodG1sVGFnLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1ncHRoZW1lJylcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlT3B0aW9ucygpIHtcclxuXHRpc09wdGlvbnNTaG93biA9ICFpc09wdGlvbnNTaG93blxyXG5cdCRvcHRpb25zLmNsYXNzTGlzdC50b2dnbGUoJ2dwdGgtb3B0aW9ucy1zaG93bicsIGlzT3B0aW9uc1Nob3duKVxyXG5cclxuXHRpZiAoaXNPcHRpb25zU2hvd24pIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlT3B0aW9ucylcclxuXHRlbHNlIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlT3B0aW9ucylcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZU9wdGlvbnMoZXZlbnQpIHtcclxuXHRpZiAoISRzdmdJY29uLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgISRvcHRpb25zLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuXHRcdHRvZ2dsZU9wdGlvbnMoKVxyXG5cdH1cclxufVxyXG4iLCIvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC4xMC4wIC0gRnJpIEF1ZyAxMiAyMDIyIDE5OjQyOjQ0ICovXG4vKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG4vKiB2aW06IHNldCBzdHM9MiBzdz0yIGV0IHR3PTgwOiAqL1xuLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblwidXNlIHN0cmljdFwiO1xuXG5pZiAoIWdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lPy5pZCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG59XG5cbmlmICh0eXBlb2YgZ2xvYmFsVGhpcy5icm93c2VyID09PSBcInVuZGVmaW5lZFwiIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWxUaGlzLmJyb3dzZXIpICE9PSBPYmplY3QucHJvdG90eXBlKSB7XG4gIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiO1xuXG4gIC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgLy8gY29udGVudHMgb2YgYSBmdW5jdGlvbiB1bnRpbCB0aGUgZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHNpbmNlIGl0IHdpbGxcbiAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cbiAgY29uc3Qgd3JhcEFQSXMgPSBleHRlbnNpb25BUElzID0+IHtcbiAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgLy8gYXQgYnVpbGQgdGltZSBieSByZXBsYWNpbmcgdGhlIGZvbGxvd2luZyBcImluY2x1ZGVcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxuICAgIC8vIEpTT04gZmlsZS5cbiAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgIFwiYWxhcm1zXCI6IHtcbiAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJib29rbWFya3NcIjoge1xuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q2hpbGRyZW5cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UmVjZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb3dzZXJBY3Rpb25cIjoge1xuICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5Qb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb3dzaW5nRGF0YVwiOiB7XG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNvb2tpZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRG93bmxvYWRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUhpc3RvcnlcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlTG9jYWxTdG9yYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVQbHVnaW5EYXRhXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb21tYW5kc1wiOiB7XG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb250ZXh0TWVudXNcIjoge1xuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkZXZ0b29sc1wiOiB7XG4gICAgICAgIFwiaW5zcGVjdGVkV2luZG93XCI6IHtcbiAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMixcbiAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMyxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlU2lkZWJhclBhbmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRvd25sb2Fkc1wiOiB7XG4gICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImVyYXNlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUZpbGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzdW1lXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZXh0ZW5zaW9uXCI6IHtcbiAgICAgICAgXCJpc0FsbG93ZWRGaWxlU2NoZW1lQWNjZXNzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaGlzdG9yeVwiOiB7XG4gICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZUFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVSYW5nZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VmlzaXRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaTE4blwiOiB7XG4gICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpZGVudGl0eVwiOiB7XG4gICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImlkbGVcIjoge1xuICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm1hbmFnZW1lbnRcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0U2VsZlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInVuaW5zdGFsbFNlbGZcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGVybWlzc2lvbkxldmVsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGFnZUFjdGlvblwiOiB7XG4gICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlkZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwZXJtaXNzaW9uc1wiOiB7XG4gICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQbGF0Zm9ybUluZm9cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwib3Blbk9wdGlvbnNQYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTmF0aXZlTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlc3Npb25zXCI6IHtcbiAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFJlY2VudGx5Q2xvc2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlc3RvcmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICBcImxvY2FsXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRhYnNcIjoge1xuICAgICAgICBcImNhcHR1cmVWaXNpYmxlVGFiXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXNjYXJkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImR1cGxpY2F0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdvQmFja1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImluc2VydENTU1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInF1ZXJ5XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbG9hZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ1NTXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidG9wU2l0ZXNcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2ViTmF2aWdhdGlvblwiOiB7XG4gICAgICAgIFwiZ2V0QWxsRnJhbWVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3ZWJSZXF1ZXN0XCI6IHtcbiAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3aW5kb3dzXCI6IHtcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldExhc3RGb2N1c2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxuICAgICAqIG90aGVyd2lzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cbiAgICAgKiAgICAgICAgQSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpbiBvcmRlciB0byBjcmVhdGUgdGhlIHZhbHVlIGZvciBhbnlcbiAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxuICAgICAqL1xuICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XG4gICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICBzdXBlcihpdGVtcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XG4gICAgICB9XG5cbiAgICAgIGdldChrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAqL1xuICAgIGNvbnN0IGlzVGhlbmFibGUgPSB2YWx1ZSA9PiB7XG4gICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcbiAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAqXG4gICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxuICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xuICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcbiAgICAgKiAgICAgICAgcHJvbWlzZS5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0XG4gICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuICguLi5jYWxsYmFja0FyZ3MpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgfHxcbiAgICAgICAgICAgICAgICAgICAoY2FsbGJhY2tBcmdzLmxlbmd0aCA8PSAxICYmIG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnICE9PSBmYWxzZSkpIHtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gKG51bUFyZ3MpID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgKiAgICAgICAgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtdXN0IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heEFyZ3NcbiAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24ob2JqZWN0LCAuLi4qKX1cbiAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBhc3luY0Z1bmN0aW9uV3JhcHBlcih0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcbiAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtyZXNvbHZlLCByZWplY3R9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoY2JFcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bmFtZX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG5cbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuXG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgQVBJIG1ldGhvZCBtZXRhZGF0YSwgc28gdGhhdCB0aGUgbmV4dCBBUEkgY2FsbHMgd2lsbCBub3QgdHJ5IHRvXG4gICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cbiAgICAgICAgICAgICAgbWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEubm9DYWxsYmFjaykge1xuICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtyZXNvbHZlLCByZWplY3R9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyBhbiBleGlzdGluZyBtZXRob2Qgb2YgdGhlIHRhcmdldCBvYmplY3QsIHNvIHRoYXQgY2FsbHMgdG8gaXQgYXJlXG4gICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxuICAgICAqIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICogICAgICAgIFRoZSBvcmlnaW5hbCB0YXJnZXQgb2JqZWN0IHRoYXQgdGhlIHdyYXBwZWQgbWV0aG9kIGJlbG9uZ3MgdG8uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XG4gICAgICogICAgICAgIG9iamVjdCB3aGljaCBpcyBjcmVhdGVkIHRvIHdyYXAgdGhlIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXG4gICAgICogICAgICAgIG9mIHRoZSB3cmFwcGVkIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XG4gICAgICogICAgICAgIEEgUHJveHkgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gbWV0aG9kLCB3aGljaCBpbnZva2VzIHRoZSBnaXZlbiB3cmFwcGVyXG4gICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICovXG4gICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcbiAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIC8qKlxuICAgICAqIFdyYXBzIGFuIG9iamVjdCBpbiBhIFByb3h5IHdoaWNoIGludGVyY2VwdHMgYW5kIHdyYXBzIGNlcnRhaW4gbWV0aG9kc1xuICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW3dyYXBwZXJzID0ge31dXG4gICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxuICAgICAqICAgICAgICBtZXRob2QgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlLiBUaGVzZVxuICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YSA9IHt9XVxuICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxuICAgICAqICAgICAgICB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUgd2hpY2ggaGFzIGEgY29ycmVzcG9uZGluZyBtZXRhZGF0YSBvYmplY3RcbiAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxuICAgICAqICAgICAgICB7QHNlZSB3cmFwQXN5bmNGdW5jdGlvbn1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgfHwgcHJvcCBpbiBjYWNoZTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIShwcm9wIGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BdO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IHdyYXBBc3luY0Z1bmN0aW9uKHByb3AsIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2QgdGhhdCB3ZSBkb24ndCBrbm93IG9yIGNhcmUgYWJvdXQuIFJldHVybiB0aGVcbiAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgLy8gb2YuIENyZWF0ZSBhIHN1Yi1vYmplY3Qgd3JhcHBlciBmb3IgaXQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY2hpbGRcbiAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIFwiKlwiKSkge1xuICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCB7XG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQocHJveHlUYXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFwiZ2V0XCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcbiAgICAgIC8vIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSB0YXJnZXQgaWYgdGhhdCB2YWx1ZSBpcyBkZWNsYXJlZCByZWFkLW9ubHkgYW5kXG4gICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cbiAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW5ub3QgcmV0dXJuIGEgY3VzdG9tIG9iamVjdCBmb3IgQVBJcyB0aGF0XG4gICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBwcm94eSBoYW5kbGVycyB0aGVtc2VsdmVzIHdpbGwgc3RpbGwgdXNlIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YFxuICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXG4gICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXG4gICAgICpcbiAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXG4gICAgICogcmV0cmlldmUgdGhlIG9yaWdpbmFsIHdyYXBwZXIsIHNvIHRoYXQgIGF0dGVtcHRzIHRvIHJlbW92ZSBhXG4gICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEZWZhdWx0V2Vha01hcDxmdW5jdGlvbiwgZnVuY3Rpb24+fSB3cmFwcGVyTWFwXG4gICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcbiAgICAgKiAgICAgICAgYW4gZXhpc3Rpbmcgb25lIHdoZW4gaXQgZG9lcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xuICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcbiAgICAgIH0sXG5cbiAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gb25SZXF1ZXN0RmluaXNoZWQgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCB3aWxsIHJldHVybiBhXG4gICAgICAgKiBgZ2V0Q29udGVudCgpYCBwcm9wZXJ0eSB3aGljaCByZXR1cm5zIGEgYFByb21pc2VgIHJhdGhlciB0aGFuIHVzaW5nIGFcbiAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxXG4gICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZFJlcSA9IHdyYXBPYmplY3QocmVxLCB7fSAvKiB3cmFwcGVycyAqLywge1xuICAgICAgICAgIGdldENvbnRlbnQ6IHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDAsXG4gICAgICAgICAgICBtYXhBcmdzOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0ZW5lcih3cmFwcGVkUmVxKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGEgbWVzc2FnZSBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IG1heSBzZW5kIHJlc3BvbnNlcyBiYXNlZCBvblxuICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgKiBzZW50IHdoZW4gdGhlIHByb21pc2UgZWl0aGVyIHJlc29sdmVzIG9yIHJlamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgKiAgICAgICAgVGhlIG1lc3NhZ2Ugc2VudCBieSB0aGUgb3RoZXIgZW5kIG9mIHRoZSBjaGFubmVsLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKil9IHNlbmRSZXNwb25zZVxuICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgd3JhcHBlZFNlbmRSZXNwb25zZSA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkaWRDYWxsU2VuZFJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIobWVzc2FnZSwgc2VuZGVyLCB3cmFwcGVkU2VuZFJlc3BvbnNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpO1xuXG4gICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciBkaWRuJ3QgcmV0dXJuZWQgdHJ1ZSBvciBhIFByb21pc2UsIG9yIGNhbGxlZFxuICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAvLyBhbmQgYW4gZXJyb3IgaWYgdGhlIHByb21pc2UgcmVqZWN0cyAoYSB3cmFwcGVkIHNlbmRNZXNzYWdlIGhhc1xuICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAvLyBwcm9taXNlKS5cbiAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gKHByb21pc2UpID0+IHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2UgdmFsdWUuXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAvLyBTZW5kIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaWYgdGhlIHJlamVjdGVkIHZhbHVlXG4gICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgIF9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXzogdHJ1ZSxcbiAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgb25NZXNzYWdlIHJlamVjdGVkIHJlcGx5XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgLy8gY2FsbGJhY2sgdG8gcmVzb2x2ZSBhbmQgc2VuZCBpdCBhcyBhIHJlc3BvbnNlLlxuICAgICAgICBpZiAoaXNSZXN1bHRUaGVuYWJsZSkge1xuICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChzZW5kUmVzcG9uc2VQcm9taXNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExldCBDaHJvbWUga25vdyB0aGF0IHRoZSBsaXN0ZW5lciBpcyByZXBseWluZy5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2sgPSAoe3JlamVjdCwgcmVzb2x2ZX0sIHJlcGx5KSA9PiB7XG4gICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAvLyB0aGUgcHJvbWlzZSB0byB1bmRlZmluZWQgYXMgaW4gRmlyZWZveC5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgLy8gYW4gRXJyb3IgaW5zdGFuY2UuXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXBseSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZSA9IChuYW1lLCBtZXRhZGF0YSwgYXBpTmFtZXNwYWNlT2JqLCAuLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtyZXNvbHZlLCByZWplY3R9KTtcbiAgICAgICAgYXJncy5wdXNoKHdyYXBwZWRDYik7XG4gICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgIGRldnRvb2xzOiB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBvblJlcXVlc3RGaW5pc2hlZDogd3JhcEV2ZW50KG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDN9KSxcbiAgICAgIH0sXG4gICAgICB0YWJzOiB7XG4gICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHttaW5BcmdzOiAyLCBtYXhBcmdzOiAzfSksXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xuICAgICAgY2xlYXI6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICAgIGdldDoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgICAgc2V0OiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgfTtcbiAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xuICAgICAgbmV0d29yazoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgICAgc2VydmljZXM6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICAgIHdlYnNpdGVzOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgfTtcblxuICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gIH07XG5cbiAgLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxuICAvLyBgbW9kdWxlYCB2YXJpYWJsZSBhdmFpbGFibGUuXG4gIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5icm93c2VyO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2hlbHBlcnMvYnVuZGxlLXVybCcpLmdldEJ1bmRsZVVSTCgnNmgwSXUnKSArIFwiZ3B0aC10b2dnbGUtY2lyY2xlZC4wN2I4MzY4ZC53ZWJwXCIgKyBcIj9cIiArIERhdGUubm93KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBidW5kbGVVUkwgPSB7fTtcbmZ1bmN0aW9uIGdldEJ1bmRsZVVSTENhY2hlZChpZCkge1xuICB2YXIgdmFsdWUgPSBidW5kbGVVUkxbaWRdO1xuICBpZiAoIXZhbHVlKSB7XG4gICAgdmFsdWUgPSBnZXRCdW5kbGVVUkwoKTtcbiAgICBidW5kbGVVUkxbaWRdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0QnVuZGxlVVJMKCkge1xuICB0cnkge1xuICAgIHRocm93IG5ldyBFcnJvcigpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB2YXIgbWF0Y2hlcyA9ICgnJyArIGVyci5zdGFjaykubWF0Y2goLyhodHRwcz98ZmlsZXxmdHB8KGNocm9tZXxtb3p8c2FmYXJpLXdlYiktZXh0ZW5zaW9uKTpcXC9cXC9bXilcXG5dKy9nKTtcbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgLy8gVGhlIGZpcnN0IHR3byBzdGFjayBmcmFtZXMgd2lsbCBiZSB0aGlzIGZ1bmN0aW9uIGFuZCBnZXRCdW5kbGVVUkxDYWNoZWQuXG4gICAgICAvLyBVc2UgdGhlIDNyZCBvbmUsIHdoaWNoIHdpbGwgYmUgYSBydW50aW1lIGluIHRoZSBvcmlnaW5hbCBidW5kbGUuXG4gICAgICByZXR1cm4gZ2V0QmFzZVVSTChtYXRjaGVzWzJdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICcvJztcbn1cbmZ1bmN0aW9uIGdldEJhc2VVUkwodXJsKSB7XG4gIHJldHVybiAoJycgKyB1cmwpLnJlcGxhY2UoL14oKD86aHR0cHM/fGZpbGV8ZnRwfChjaHJvbWV8bW96fHNhZmFyaS13ZWIpLWV4dGVuc2lvbik6XFwvXFwvLispXFwvW14vXSskLywgJyQxJykgKyAnLyc7XG59XG5cbi8vIFRPRE86IFJlcGxhY2UgdXNlcyB3aXRoIGBuZXcgVVJMKHVybCkub3JpZ2luYCB3aGVuIGllMTEgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZC5cbmZ1bmN0aW9uIGdldE9yaWdpbih1cmwpIHtcbiAgdmFyIG1hdGNoZXMgPSAoJycgKyB1cmwpLm1hdGNoKC8oaHR0cHM/fGZpbGV8ZnRwfChjaHJvbWV8bW96fHNhZmFyaS13ZWIpLWV4dGVuc2lvbik6XFwvXFwvW14vXSsvKTtcbiAgaWYgKCFtYXRjaGVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdPcmlnaW4gbm90IGZvdW5kJyk7XG4gIH1cbiAgcmV0dXJuIG1hdGNoZXNbMF07XG59XG5leHBvcnRzLmdldEJ1bmRsZVVSTCA9IGdldEJ1bmRsZVVSTENhY2hlZDtcbmV4cG9ydHMuZ2V0QmFzZVVSTCA9IGdldEJhc2VVUkw7XG5leHBvcnRzLmdldE9yaWdpbiA9IGdldE9yaWdpbjsiLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChcbiAgICAgIGtleSA9PT0gJ2RlZmF1bHQnIHx8XG4gICAgICBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRlc3QsIGtleSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iXSwibmFtZXMiOlsiZ2xvYmFsVGhpcyIsImNocm9tZSIsInJ1bnRpbWUiLCJpZCIsIkVycm9yIiwiYnJvd3NlciIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFIiwid3JhcEFQSXMiLCJleHRlbnNpb25BUElzIiwiYXBpTWV0YWRhdGEiLCJrZXlzIiwibGVuZ3RoIiwiRGVmYXVsdFdlYWtNYXAiLCJXZWFrTWFwIiwiY29uc3RydWN0b3IiLCJjcmVhdGVJdGVtIiwiaXRlbXMiLCJ1bmRlZmluZWQiLCJnZXQiLCJrZXkiLCJoYXMiLCJzZXQiLCJpc1RoZW5hYmxlIiwidmFsdWUiLCJ0aGVuIiwibWFrZUNhbGxiYWNrIiwicHJvbWlzZSIsIm1ldGFkYXRhIiwiY2FsbGJhY2tBcmdzIiwibGFzdEVycm9yIiwicmVqZWN0IiwibWVzc2FnZSIsInNpbmdsZUNhbGxiYWNrQXJnIiwicmVzb2x2ZSIsInBsdXJhbGl6ZUFyZ3VtZW50cyIsIm51bUFyZ3MiLCJ3cmFwQXN5bmNGdW5jdGlvbiIsIm5hbWUiLCJhc3luY0Z1bmN0aW9uV3JhcHBlciIsInRhcmdldCIsImFyZ3MiLCJtaW5BcmdzIiwibWF4QXJncyIsIlByb21pc2UiLCJmYWxsYmFja1RvTm9DYWxsYmFjayIsImNiRXJyb3IiLCJjb25zb2xlIiwid2FybiIsIm5vQ2FsbGJhY2siLCJ3cmFwTWV0aG9kIiwibWV0aG9kIiwid3JhcHBlciIsIlByb3h5IiwiYXBwbHkiLCJ0YXJnZXRNZXRob2QiLCJ0aGlzT2JqIiwiY2FsbCIsImhhc093blByb3BlcnR5IiwiRnVuY3Rpb24iLCJiaW5kIiwid3JhcE9iamVjdCIsIndyYXBwZXJzIiwiY2FjaGUiLCJjcmVhdGUiLCJoYW5kbGVycyIsInByb3h5VGFyZ2V0IiwicHJvcCIsInJlY2VpdmVyIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZGVzYyIsIlJlZmxlY3QiLCJkZWxldGVQcm9wZXJ0eSIsIndyYXBFdmVudCIsIndyYXBwZXJNYXAiLCJhZGRMaXN0ZW5lciIsImxpc3RlbmVyIiwiaGFzTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsIm9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMiLCJvblJlcXVlc3RGaW5pc2hlZCIsInJlcSIsIndyYXBwZWRSZXEiLCJnZXRDb250ZW50Iiwib25NZXNzYWdlV3JhcHBlcnMiLCJvbk1lc3NhZ2UiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJkaWRDYWxsU2VuZFJlc3BvbnNlIiwid3JhcHBlZFNlbmRSZXNwb25zZSIsInNlbmRSZXNwb25zZVByb21pc2UiLCJyZXNwb25zZSIsInJlc3VsdCIsImVyciIsImlzUmVzdWx0VGhlbmFibGUiLCJzZW5kUHJvbWlzZWRSZXN1bHQiLCJtc2ciLCJlcnJvciIsIl9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXyIsImNhdGNoIiwid3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2siLCJyZXBseSIsIndyYXBwZWRTZW5kTWVzc2FnZSIsImFwaU5hbWVzcGFjZU9iaiIsIndyYXBwZWRDYiIsInB1c2giLCJzZW5kTWVzc2FnZSIsInN0YXRpY1dyYXBwZXJzIiwiZGV2dG9vbHMiLCJuZXR3b3JrIiwib25NZXNzYWdlRXh0ZXJuYWwiLCJ0YWJzIiwic2V0dGluZ01ldGFkYXRhIiwiY2xlYXIiLCJwcml2YWN5Iiwic2VydmljZXMiLCJ3ZWJzaXRlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwidmVyc2lvbiI6MywiZmlsZSI6ImNvbnRlbnQuYTg3OTY0MWEuanMubWFwIn0=
