import { init as initFAB } from './app/custom-fab/index'
import { mount as mountSuggestedPrompts } from './app/custom-layouts/suggestedPrompts'
import { init as initThemes } from './app/themeManager'

// !! Chat bubbles and chatbox height are mounted from custom-layouts after Settings render !!
// !! User bubble accent toggle is mounted from Colors module after Settings render !!

const CONFIG = {
	// TARGET_SELECTOR: '.gpth-settings',
	TARGET_SELECTOR: '.gpth-fab',
	RETRY_DELAY: 3000,
	MAX_RETRIES: 4,
}

const CLEANUP_KEY = '_gpthCleanup'

const PAGE_ATTRS = {
	LIBRARY: 'data-gpth-page-library',
}
const LIBRARY_HEADER_ATTR = 'data-gpth-library-header-control'
const LIBRARY_UPLOAD_ATTR = 'data-gpth-library-upload-button'
const LIBRARY_HEADER_LABEL_PATTERN = /^(Name|Modified|Size)\b/
const LIBRARY_HEADER_SELECTOR = [
	'button',
	'[role="button"]',
	'[aria-sort]',
	'[role="columnheader"]',
	'th',
	'span',
	'div',
	'label',
	'p',
].join(',')

// Track number of attempts
let retryCount = 0
let retryTimeout = null // For cleanup
const runtimeCleanups = []
let routeObserverStarted = false
let routeObserver = null
let routeScanFrame = null
let lastRoutePath = ''

function addCleanup(cleanup) {
	if (typeof cleanup === 'function') runtimeCleanups.push(cleanup)
}

function normalizeLibraryLabel(text) {
	return text?.trim().replace(/\s+/g, ' ') || ''
}

function markLibraryHeaderNode(el) {
	if (!(el instanceof HTMLElement)) return

	const target =
		el.closest('button, [role="button"], [aria-sort], th, [role="columnheader"]') || el

	target.setAttribute(LIBRARY_HEADER_ATTR, '')
	el.setAttribute(LIBRARY_HEADER_ATTR, '')

	let current = target
	for (let depth = 0; depth < 6; depth++) {
		const parent = current.parentElement
		if (!parent || parent.matches('main')) break

		const parentText = normalizeLibraryLabel(parent.textContent)
		if (parentText.length > 90) break

		parent.setAttribute(LIBRARY_HEADER_ATTR, '')
		current = parent
	}
}

function clearLibraryMarkers(main) {
	main.querySelectorAll(`[${LIBRARY_HEADER_ATTR}], [${LIBRARY_UPLOAD_ATTR}]`).forEach((el) => {
		el.removeAttribute(LIBRARY_HEADER_ATTR)
		el.removeAttribute(LIBRARY_UPLOAD_ATTR)
	})
}

function markLibraryUploadButton(main) {
	main.querySelectorAll('button, a, [role="button"]').forEach((el) => {
		if (normalizeLibraryLabel(el.textContent) !== 'Upload') return

		el.setAttribute(LIBRARY_UPLOAD_ATTR, '')
	})
}

function markLibraryHeaderControls(main) {
	if (!main) return

	clearLibraryMarkers(main)

	main.querySelectorAll(LIBRARY_HEADER_SELECTOR).forEach((el) => {
		const label = normalizeLibraryLabel(el.textContent)
		if (!LIBRARY_HEADER_LABEL_PATTERN.test(label)) return

		markLibraryHeaderNode(el)
	})

	const textWalker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
		acceptNode(node) {
			return LIBRARY_HEADER_LABEL_PATTERN.test(normalizeLibraryLabel(node.textContent))
				? NodeFilter.FILTER_ACCEPT
				: NodeFilter.FILTER_REJECT
		},
	})

	let node = textWalker.nextNode()
	while (node) {
		markLibraryHeaderNode(node.parentElement)
		node = textWalker.nextNode()
	}
}

function updatePageAttrs() {
	const path = location.pathname
	const currentPage = path.split('/').filter(Boolean)[0]
	const isLibrary = currentPage === 'library'

	if (path !== lastRoutePath) {
		lastRoutePath = path
		document.documentElement.toggleAttribute(PAGE_ATTRS.LIBRARY, isLibrary)
	}

	if (isLibrary) {
		const main = document.querySelector('main')
		if (!main) return

		markLibraryHeaderControls(main)
		markLibraryUploadButton(main)
	}
}

function scheduleRouteScan() {
	if (routeScanFrame) return

	routeScanFrame = window.requestAnimationFrame(() => {
		routeScanFrame = null
		updatePageAttrs()
	})
}

function observePageRoute() {
	if (routeObserverStarted || !document.body) return
	routeObserverStarted = true
	updatePageAttrs()

	routeObserver = new MutationObserver(scheduleRouteScan)
	routeObserver.observe(document.body, { childList: true, subtree: true })
	window.addEventListener('popstate', updatePageAttrs)

	addCleanup(() => {
		if (routeScanFrame) {
			window.cancelAnimationFrame(routeScanFrame)
			routeScanFrame = null
		}
		routeObserver?.disconnect()
		routeObserver = null
		routeObserverStarted = false
		lastRoutePath = ''
		document.documentElement.removeAttribute(PAGE_ATTRS.LIBRARY)
		window.removeEventListener('popstate', updatePageAttrs)
	})
}

// Main init fn
async function initExt() {
	// console.log(`[🎨GPThemes]: Initializing components (attempt ${retryCount + 1}/${CONFIG.MAX_RETRIES})`)
	if (!document.body) return false

	try {
		observePageRoute()
		addCleanup(mountSuggestedPrompts())
		addCleanup(initThemes())
		addCleanup(await initFAB())
		// !! Settings modules (colors, fonts, layouts) are initialized inside settingsManager after DOM attach !!
	} catch (error) {
		console.error('[🎨GPThemes]: Critical initialization error:', error)
		disposeRuntimeModules()
		return false
	}
	return true
}

function disposeRuntimeModules() {
	while (runtimeCleanups.length) {
		const cleanup = runtimeCleanups.pop()
		try {
			cleanup()
		} catch (error) {
			console.warn('[🎨GPThemes]: Cleanup failed:', error)
		}
	}
}

function clearRetry() {
	if (retryTimeout) {
		clearTimeout(retryTimeout)
		retryTimeout = null
	}
}

// Schedule retries with exponential backoff
function scheduleRetry() {
	clearRetry()
	retryCount++

	if (retryCount <= CONFIG.MAX_RETRIES) {
		const delay = CONFIG.RETRY_DELAY * retryCount

		// console.log(`[🎨GPThemes]: Scheduling retry ${retryCount}/${CONFIG.MAX_RETRIES} in ${delay}ms`)

		retryTimeout = setTimeout(async () => {
			console.info(
				'[🎨GPThemes]: Re-initializing extension (possible React hydration issue: "Minified React error #XXX;" above?)',
			)

			if (await initExt()) {
				// console.log('Injection successful')
				retryCount = 0
				clearRetry()
			} else {
				scheduleRetry()
			}
		}, delay)
	} else {
		console.log('[🎨GPThemes]: Maximum retries reached')
	}
}

// Cleanup fn
function cleanup() {
	clearRetry()
	disposeRuntimeModules()
}

// Emergency cleanup if script re-runs
if (typeof window[CLEANUP_KEY] === 'function') window[CLEANUP_KEY]()
window[CLEANUP_KEY] = cleanup

async function start() {
	const initialized = await initExt()
	if (initialized) {
		if (document.querySelector(CONFIG.TARGET_SELECTOR)) {
			console.log('[🎨GPThemes]: Components initialized')
		}
		retryCount = 0
		clearRetry()
		return
	}

	scheduleRetry()
}

// Initial run
if (document.body) {
	start()
} else {
	document.addEventListener('DOMContentLoaded', start, { once: true })
	addCleanup(() => document.removeEventListener('DOMContentLoaded', start))
}
