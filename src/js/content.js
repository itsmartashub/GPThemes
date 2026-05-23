import { init as initFAB } from './app/custom-fab/index'
import { init as initThemes } from './app/themeManager'

// !! Chat bubbles and chatbox height are mounted from custom-layouts after Settings render !!
// !! User bubble accent toggle is mounted from Colors module after Settings render !!

const CONFIG = {
	// TARGET_SELECTOR: '.gpth-settings',
	TARGET_SELECTOR: '.gpth-fab',
	RETRY_DELAY: 3000,
	MAX_RETRIES: 4,
}

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
let routeObserverStarted = false
let lastRoutePath = ''

function normalizeLibraryLabel(text) {
	return text?.trim().replace(/\s+/g, ' ') || ''
}

function applyLibraryHeaderPaintReset(el) {
	if (!(el instanceof HTMLElement)) return

	el.style.setProperty('appearance', 'none', 'important')
	el.style.setProperty('-webkit-appearance', 'none', 'important')
	el.style.setProperty('background', 'transparent', 'important')
	el.style.setProperty('background-color', 'transparent', 'important')
	el.style.setProperty('border-color', 'transparent', 'important')
	el.style.setProperty('box-shadow', 'none', 'important')
	el.style.setProperty('color', 'var(--c-subtext-1)', 'important')
	el.style.setProperty('outline', 'none', 'important')
}

function applyLibraryUploadMotionReset(el) {
	if (!(el instanceof HTMLElement)) return

	el.style.setProperty('transform', 'none', 'important')
	el.style.setProperty('translate', '0 0', 'important')
	el.style.setProperty('scale', '1', 'important')
	el.style.setProperty('will-change', 'auto', 'important')
	el.style.setProperty(
		'transition',
		'opacity 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out',
		'important',
	)
}

function markLibraryHeaderNode(el) {
	if (!(el instanceof HTMLElement)) return

	const target =
		el.closest('button, [role="button"], [aria-sort], th, [role="columnheader"]') || el

	target.setAttribute(LIBRARY_HEADER_ATTR, '')
	el.setAttribute(LIBRARY_HEADER_ATTR, '')
	applyLibraryHeaderPaintReset(target)
	applyLibraryHeaderPaintReset(el)

	let current = target
	for (let depth = 0; depth < 6; depth++) {
		const parent = current.parentElement
		if (!parent || parent.matches('main')) break

		const parentText = normalizeLibraryLabel(parent.textContent)
		if (parentText.length > 90) break

		parent.setAttribute(LIBRARY_HEADER_ATTR, '')
		applyLibraryHeaderPaintReset(parent)
		current = parent
	}
}

function markLibraryUploadButton() {
	document.querySelectorAll(`[${LIBRARY_UPLOAD_ATTR}]`).forEach((el) => {
		el.removeAttribute(LIBRARY_UPLOAD_ATTR)
	})

	const main = document.querySelector('main')
	if (!main) return

	main.querySelectorAll('button, a, [role="button"]').forEach((el) => {
		if (normalizeLibraryLabel(el.textContent) !== 'Upload') return

		el.setAttribute(LIBRARY_UPLOAD_ATTR, '')
		applyLibraryUploadMotionReset(el)
	})
}

function markLibraryHeaderControls() {
	document.querySelectorAll(`[${LIBRARY_HEADER_ATTR}]`).forEach((el) => {
		el.removeAttribute(LIBRARY_HEADER_ATTR)
	})

	const main = document.querySelector('main')
	if (!main) return

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
		markLibraryHeaderControls()
		markLibraryUploadButton()
	}
}

function observePageRoute() {
	if (routeObserverStarted) return
	routeObserverStarted = true
	updatePageAttrs()

	new MutationObserver(updatePageAttrs).observe(document.body, { childList: true, subtree: true })
	window.addEventListener('popstate', updatePageAttrs)
}

// Main init fn
async function initExt() {
	// console.log(`[🎨GPThemes]: Initializing components (attempt ${retryCount + 1}/${CONFIG.MAX_RETRIES})`)

	try {
		observePageRoute()
		initThemes()
		initFAB()
		// !! Settings modules (colors, fonts, layouts) are initialized inside settingsManager after DOM attach !!
	} catch (error) {
		console.error('[🎨GPThemes]: Critical initialization error:', error)
		return false
	}
	return true
}

// Schedule retries with exponential backoff
function scheduleRetry() {
	retryCount++

	if (retryCount <= CONFIG.MAX_RETRIES) {
		const delay = CONFIG.RETRY_DELAY * retryCount

		// console.log(`[🎨GPThemes]: Scheduling retry ${retryCount}/${CONFIG.MAX_RETRIES} in ${delay}ms`)

		retryTimeout = setTimeout(() => {
			// Check if our components exist before retrying
			if (document.querySelector(CONFIG.TARGET_SELECTOR)) {
				// console.log('[🎨GPThemes]: Components already present, stopping retries')
				cleanup()
				return
			}

			console.info(
				'[🎨GPThemes]: Re-initializing extension (possible React hydration issue: "Minified React error #XXX;" above?)',
			)

			if (initExt()) {
				// console.log('Injection successful')
				cleanup()
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
	if (retryTimeout) {
		clearTimeout(retryTimeout)
		retryTimeout = null
	}
}

// Initial run
if (!document.querySelector(CONFIG.TARGET_SELECTOR)) {
	initExt()
	scheduleRetry()
} else {
	console.log('[🎨GPThemes]: Components already present on first check')
}

// Emergency cleanup if script re-runs
if (window._gpthCleanup) window._gpthCleanup()
window._gpthCleanup = cleanup
