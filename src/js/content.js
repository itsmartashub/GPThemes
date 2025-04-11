import { init as initThemes } from './app/themeManager'
import { init as initFloating } from './app/floatingBtn'
import { init as initColors } from './app/mainColors'
import { init as initFonts } from './app/mainFonts'
import { init as initWidths } from './app/mainWidths'
import { init as initScrolldown } from './app/scrolldown'

// Configuration
const CONFIG = {
	TARGET_SELECTOR: '.gpth-settings',
	RETRY_DELAY: 2000,
	MAX_RETRIES: 4,
}

// Track number of attempts
let retryCount = 0

// Main initialization function
function initExtension() {
	console.log(`[🎨GPThemes]: Initializing components (attempt ${retryCount + 1})`)

	initThemes()
	initFloating()
	initColors()
	initFonts()
	initWidths()
	initScrolldown()
}

// Schedule retries with exponential backoff
function scheduleRetry() {
	retryCount++

	if (retryCount <= CONFIG.MAX_RETRIES) {
		const delay = CONFIG.RETRY_DELAY * retryCount

		console.log(`[🎨GPThemes]: Scheduling retry ${retryCount}/${CONFIG.MAX_RETRIES} in ${delay}ms`)

		setTimeout(() => {
			// Check if our components exist before retrying
			if (document.querySelector(CONFIG.TARGET_SELECTOR)) {
				console.log('[🎨GPThemes]: Components already present, no need to retry')
				return
			}

			console.info(
				'[🎨GPThemes]: Re-initializing extension because there is probably "Minified React error #" above this...'
			)

			// Retry initialization
			initExtension()

			// Schedule next retry if needed
			scheduleRetry()
		}, delay)
	} else {
		console.log('[🎨GPThemes]: Maximum retries reached')
	}
}

// Initial run
initExtension()

// Start retry sequence
scheduleRetry()
