import { init as initThemes } from './app/themeManager'
import { init as initFloating } from './app/floatingBtn'
import { init as initColors } from './app/mainColors'
import { init as initFonts } from './app/mainFonts'
import { init as initWidths } from './app/mainWidths'
// import { init as initScrolldown } from './app/scrolldown'
import { init as initToggleChatsBg } from './app/toggleChatsBg'

// Configuration
const CONFIG = {
	TARGET_SELECTOR: '.gpth-settings',
	RETRY_DELAY: 2000,
	MAX_RETRIES: 4,
}

// Track number of attempts
let retryCount = 0
let retryTimeout = null // For cleanup

// Main initialization function
function initExtension() {
	console.log(`[🎨GPThemes]: Initializing components (attempt ${retryCount + 1}/${CONFIG.MAX_RETRIES})`)

	try {
		initThemes()
		initFloating()
		initColors()
		initFonts()
		initWidths()
		// initScrolldown()
		initToggleChatsBg()
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

		console.log(`[🎨GPThemes]: Scheduling retry ${retryCount}/${CONFIG.MAX_RETRIES} in ${delay}ms`)

		retryTimeout = setTimeout(() => {
			// Check if our components exist before retrying
			if (document.querySelector(CONFIG.TARGET_SELECTOR)) {
				console.log('[🎨GPThemes]: Components already present, stopping retries')
				cleanup()
				return
			}

			console.info(
				'[🎨GPThemes]: Re-initializing extension (possible React hydration issue: "Minified React error #XXX;" above?)'
			)

			if (initExtension()) {
				console.log('[🎨GPThemes]: Injection successful')
				cleanup()
			} else {
				scheduleRetry()
			}
		}, delay)
	} else {
		console.log('[🎨GPThemes]: Maximum retries reached')
	}
}

// Cleanup function
function cleanup() {
	if (retryTimeout) {
		clearTimeout(retryTimeout)
		retryTimeout = null
	}
}

// Initial run
if (!document.querySelector(CONFIG.TARGET_SELECTOR)) {
	initExtension()
	scheduleRetry()
} else {
	console.log('[🎨GPThemes]: Components already present on first check')
}

// Emergency cleanup if script re-runs
if (window._gpthCleanup) window._gpthCleanup()
window._gpthCleanup = cleanup
