import { init as initFAB } from './app/custom-fab/index.js'
import { setupExtensionMessaging } from './app/messaging/index.js'
import { createSettings } from './app/settingsManager.js'

// !! Chat bubbles are mounted from custom-layouts after Settings render !!
// !! User bubble accent toggle is mounted from Colors module after Settings render !!

const FAB_SELECTOR = '.gpth-fab'

// Main init fn
async function initExt() {
	try {
		await Promise.all([initFAB(), createSettings()])
		setupExtensionMessaging()
	} catch (error) {
		console.error('[🎨GPThemes]: Critical initialization error:', error)
		return false
	}
	return true
}

// =====================================================
// FAB WATCHDOG — MutationObserver
// =====================================================
/* ChatGPT's React re-renders can remove our injected elements from the DOM
A MutationObserver on body fires exactly when this happens, with no polling overhead. We only watch direct children (subtree: false) since FAB is appended directly to body */

let observer = null

function watchFAB() {
	if (observer) return

	observer = new MutationObserver(() => {
		if (document.querySelector(FAB_SELECTOR)) return
		console.info('[🎨GPThemes]: FAB removed by page re-render, re-initializing…')
		initExt()
	})

	observer.observe(document.body, { childList: true })
}

function cleanup() {
	observer?.disconnect()
	observer = null
}

// Initial run
if (!document.querySelector(FAB_SELECTOR)) {
	initExt().then((ok) => {
		if (ok) watchFAB()
	})
} else {
	watchFAB()
}

// Emergency cleanup if the content script re-runs in the same context
if (window._gpthCleanup) window._gpthCleanup()
window._gpthCleanup = cleanup
