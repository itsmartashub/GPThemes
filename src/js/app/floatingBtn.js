// Use a cross-browser storage API:
// import browser from 'webextension-polyfill'
import { icon_sun, icon_moon, icon_moon_full, icon_settings, icon_paint } from './components/icons.js'
import { handleChangeTheme } from './themeManager.js'
import { createSettings } from './settingsManager.js'

// State
let isOptionsShown = false

// DOM Elements
const elements = {
	floatingBtn: null,
	floatingOptions: null,
	floatingBtnsContainer: null,
}

// ___ Initialize the application
async function init() {
	try {
		createFloatingBtn()
		createSettings()
	} catch (error) {
		console.error('Initialization error:', error)
	}
}

// ___ Create and append the floating button? - UI Components
async function createFloatingBtn() {
	const gpthFloatingBtn = document.createElement('div')
	gpthFloatingBtn.className = 'gpth__floating'

	gpthFloatingBtn.innerHTML = `
    <div class="gpth__floating-icon">${icon_paint}</div>
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

export { init, closeFloatingOptions }
