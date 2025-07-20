// Use a cross-browser storage API:
import browser from 'webextension-polyfill'
import { icon_sun, icon_moon, icon_moon_full, icon_settings, icon_paint } from './components/icons.js'
import { handleChangeTheme } from './themeManager.js'
import { createSettings, closeSettings, SETTINGS_OPEN_CLASS } from './settingsManager.js'
import { FLOATING_BTN_VISIBLE_KEY } from './config'
import { setupExtensionMessaging } from './messaging'

/* import { init as initThemes } from './themeManager'
import { init as initColors } from './mainColors'
import { init as initFonts } from './mainFonts'
import { init as initWidths } from './mainWidths' */

// State
let isOptionsShown = false
const FLOATING_CLASS_NAME = 'gpth__floating'

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
	gpthFloatingBtn.className = FLOATING_CLASS_NAME

	gpthFloatingBtn.innerHTML = `
    <div class="${FLOATING_CLASS_NAME}-icon">${icon_paint}</div>
    <div class="gpth__options">
      <div class="gpth__options-btns">
        <button id="light" data-gpth-theme="light">${icon_sun}</button>
        <button id="dark" data-gpth-theme="dark">${icon_moon}</button>
        <button id="oled" data-gpth-theme="black">${icon_moon_full}</button>
        <button id="gpth-open-settings" data-gpth-theme="more">${icon_settings}</button>
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
	elements.floatingOptions = gpthFloatingBtn.querySelector('.gpth__options')
	elements.floatingBtnsContainer = gpthFloatingBtn.querySelector('.gpth__options-btns')
}
function addFloatingListeners() {
	elements.floatingBtn.addEventListener('click', toggleFloatingOptions)
	elements.floatingBtnsContainer.addEventListener('click', handleChangeTheme)
}
// __ Options and Settings
function toggleFloatingOptions() {
	isOptionsShown = !isOptionsShown
	elements.floatingOptions.classList.toggle('gpth__options--shown', isOptionsShown)

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
	elements.floatingOptions.classList.remove('gpth__options--shown')
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

	elements.floatingBtn.classList.toggle(`${FLOATING_CLASS_NAME}--hidden`, !isVisible)

	// Close settings too if it's open
	if (!isVisible && document.querySelector(`.${SETTINGS_OPEN_CLASS}`)) closeSettings()
}

/* function initExtension() {
	initThemes()
	init()
	initColors()
	initFonts()
	initWidths()
}
 */
export { init, closeFloatingOptions, toggleFloatingBtnVisibility, FLOATING_CLASS_NAME }
