import { getItem, watchStorageChanges } from '../utils/storage.js'
import { SELECTORS } from './config/selectors'
import { $ } from '../utils/dom.js'
import { icon_sun, icon_moon, icon_moon_full, icon_settings, icon_paint } from './components/icons.js'
import { handleChangeTheme } from './themeManager.js'
import { createSettings, closeSettings } from './settingsManager.js'
import { setupExtensionMessaging } from './messaging'

// Storage key
const SK_TOGGLE_FAB = 'toggleFABVisibility'

// State
let isOptionsShown = false

// DOM Elements
const elements = {
	floatingBtn: null,
	floatingOptions: null,
	floatingBtnsContainer: null,
}

// ___ Listen for storage changes (for multi-tab sync)
function handleStorageChange(changes, area) {
	const change = changes[SK_TOGGLE_FAB]

	// Check area and if the specific key changed
	if (area === 'sync' && change) {
		// Use a direct boolean check for clarity (newValue is likely a boolean)
		const isVisible = change.newValue !== false
		toggleFloatingBtnVisibility(isVisible)
	}
}

// ___ Initialize the application
async function init() {
	try {
		await createFloatingBtn()
		createSettings()
		// Start watching for storage changes and store the cleanup function
		watchStorageChanges(handleStorageChange)
		setupExtensionMessaging()
	} catch (error) {
		console.error('Initialization error:', error)
	}
}

// ___ Create and append the floating button? - UI Components
async function createFloatingBtn() {
	const gpthFloatingBtn = document.createElement('div')
	gpthFloatingBtn.className = SELECTORS.FLOATING_BTN.ROOT

	gpthFloatingBtn.innerHTML = `
		<div class="${SELECTORS.FLOATING_BTN.ROOT}-icon">${icon_paint}</div>

		<div class="${SELECTORS.FLOATING_BTN.OPTIONS}">
			<div class="${SELECTORS.FLOATING_BTN.BTNS_CONTAINER}">
				<button id="light" data-gpth-theme="light">${icon_sun}</button>
				<button id="dark" data-gpth-theme="dark">${icon_moon}</button>
				<button id="oled" data-gpth-theme="black">${icon_moon_full}</button>
				<button id="${SELECTORS.SETTINGS.OPEN_BTN}" data-gpth-theme="more">${icon_settings}</button>
			</div>
		</div>
	`

	document.body.appendChild(gpthFloatingBtn)
	cacheFloatingElements(gpthFloatingBtn)
	addFloatingListeners()

	// Set initial visibility from storage (popup.js)
	await setInitialFloatingBtnVisibility()
}
function cacheFloatingElements(gpthFloatingBtn) {
	elements.floatingBtn = gpthFloatingBtn
	elements.floatingOptions = $(`.${SELECTORS.FLOATING_BTN.OPTIONS}`, gpthFloatingBtn)
	elements.floatingBtnsContainer = $(`.${SELECTORS.FLOATING_BTN.BTNS_CONTAINER}`, gpthFloatingBtn)
}
function addFloatingListeners() {
	elements.floatingBtn.addEventListener('click', toggleFloatingOptions)
	elements.floatingBtnsContainer.addEventListener('click', handleChangeTheme)
}
// __ Options and Settings
function toggleFloatingOptions() {
	isOptionsShown = !isOptionsShown
	elements.floatingOptions.classList.toggle(SELECTORS.FLOATING_BTN.OPEN_STATE, isOptionsShown)

	if (isOptionsShown) {
		document.body.addEventListener('click', hideFloatingOptions)
	} else {
		document.body.removeEventListener('click', hideFloatingOptions)
	}
}

function hideFloatingOptions(e) {
	const isClickInsideFloatingBtn = elements.floatingBtn.contains(e.target)
	const isClickInsideFloatingOptions = elements.floatingOptions.contains(e.target)

	if (!isClickInsideFloatingBtn && !isClickInsideFloatingOptions) {
		toggleFloatingOptions()
	}
}
function closeFloatingOptions() {
	// console.log('closeFloatingOptions: ', { isOptionsShown })
	isOptionsShown = false
	elements.floatingOptions.classList.remove(SELECTORS.FLOATING_BTN.OPEN_STATE)
	document.body.removeEventListener('click', hideFloatingOptions)
	// console.log('closeFloatingOptions: ', { isOptionsShown })
}

/* Toggle flaoting button logic */
async function setInitialFloatingBtnVisibility() {
	const isVisible = await getItem(SK_TOGGLE_FAB)
	toggleFloatingBtnVisibility(isVisible !== false) // default true
}
// Show/hide floating button
function toggleFloatingBtnVisibility(isVisible) {
	/* TODO: Add better toggle toggle card in popup: when floatingBtn not exists then show re-init ext, when floatingBtn exists then show toggle floating btn card */
	// if (!elements.floatingBtn) return initExtension()
	if (!elements.floatingBtn) return

	elements.floatingBtn.classList.toggle(`${SELECTORS.FLOATING_BTN.ROOT}--hidden`, !isVisible)

	// Close FLOATING_BTN too if it's open
	if (!isVisible && $(`.${SELECTORS.SETTINGS.OPEN_STATE}`)) closeSettings()
}

export { init, closeFloatingOptions, toggleFloatingBtnVisibility, SK_TOGGLE_FAB }
