// Use a cross-browser storage API:
import browser from 'webextension-polyfill'
import { icon_sun, icon_moon, icon_moon_full, icon_settings, icon_paint } from './components/icons.js'
import { SELECTORS, PFX } from './config.js'
import { handleChangeTheme } from './themeManager.js'
import { createSettings, closeSettings } from './settingsManager.js'
import { FLOATING_BTN_VISIBLE_KEY } from './config'
import { setupExtensionMessaging } from './messaging'

/* import { init as initThemes } from './themeManager'
import { init as initColors } from './mainColors'
import { init as initFonts } from './mainFonts'
import { init as initWidths } from './mainWidths' */

// State
let isOptionsShown = false

// DOM Elements
const elements = {
	floatingBtn: null,
	floatingOptions: null,
	floatingBtnsContainer: null,
}

// Listen for storage changes (for multi-tab sync)
browser.storage.onChanged.addListener((changes, area) => {
	if (area === 'sync' && changes[FLOATING_BTN_VISIBLE_KEY]) {
		toggleFloatingBtnVisibility(changes[FLOATING_BTN_VISIBLE_KEY].newValue !== false)
	}
})

// ___ Initialize the application
async function init() {
	try {
		await createFloatingBtn()
		createSettings()
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
	elements.floatingOptions = gpthFloatingBtn.querySelector(`.${SELECTORS.FLOATING_BTN.OPTIONS}`)
	elements.floatingBtnsContainer = gpthFloatingBtn.querySelector(`.${SELECTORS.FLOATING_BTN.BTNS_CONTAINER}`)
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
	const result = await browser.storage.sync.get(FLOATING_BTN_VISIBLE_KEY)
	const isVisible = result[FLOATING_BTN_VISIBLE_KEY]
	toggleFloatingBtnVisibility(isVisible !== false) // default true
}
// Show/hide floating button
function toggleFloatingBtnVisibility(isVisible) {
	/* TODO: Add better toggle toggle card in popup: when floatingBtn not exists then show re-init ext, when floatingBtn exists then show toggle floating btn card */
	// if (!elements.floatingBtn) return initExtension()
	if (!elements.floatingBtn) return

	elements.floatingBtn.classList.toggle(`${SELECTORS.FLOATING_BTN.ROOT}--hidden`, !isVisible)

	// Close FLOATING_BTN too if it's open
	if (!isVisible && document.querySelector(`.${SELECTORS.SETTINGS.OPEN_STATE}`)) closeSettings()
}

/* function initExtension() {
	initThemes()
	init()
	initColors()
	initFonts()
	initWidths()
}
 */
export { init, closeFloatingOptions, toggleFloatingBtnVisibility }
