// Use a cross-browser storage API:
import browser from 'webextension-polyfill'
import { icon_sun, icon_moon, icon_moon_full, icon_settings, icon_paint } from './components/icons.js'
import { handleChangeTheme } from './themeManager.js'
import { renderColorsTab, resetAllAccents } from './mainColors.js'
import { renderFontsTab, handleFontsListeners } from './mainFonts.js'
import { renderAssetsTab, handleAssetsListeners } from './mainAssets.js'

// State
const state = {
	isOptionsShown: false,
}

// DOM Elements
export const elements = {
	floatingBtn: null,
	floatingOptions: null,
	floatingBtnsContainer: null,
	settings: null,
	resetAllAccentsBtn: null,
}

// ___ Initialize the application
async function init() {
	try {
		await createAndAppendFloatingBtn()
		await createAndAppendSettings()

		// await initTheme()

		decreaseFloatingBtnSize()
		addFloatingListeners()
		console.log(await browser.storage.sync.get('gptheme'))
	} catch (error) {
		console.error('Initialization error:', error)
	}
}

// ___ Create and append the floating button? - UI Components
async function createAndAppendFloatingBtn() {
	const gpthFloatingBtn = document.createElement('div')
	gpthFloatingBtn.className = 'gpth__floating'

	const htmlCode = `
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

	gpthFloatingBtn.insertAdjacentHTML('beforeend', htmlCode)
	document.body.appendChild(gpthFloatingBtn)

	cacheFloatingElements(gpthFloatingBtn)
}
function cacheFloatingElements(gpthFloatingBtn) {
	elements.floatingBtn = gpthFloatingBtn
	elements.floatingOptions = gpthFloatingBtn.querySelector('.gpth__options')
	elements.floatingBtnsContainer = gpthFloatingBtn.querySelector('.gpth__options-btns')
}
function addFloatingListeners() {
	elements.floatingBtn.addEventListener('click', toggleOptions)
	elements.floatingBtnsContainer.addEventListener('click', handleChangeTheme)
}
// __ Options and Settings
export function toggleOptions() {
	state.isOptionsShown = !state.isOptionsShown
	elements.floatingOptions.classList.toggle('gpth__options--shown', state.isOptionsShown)

	if (state.isOptionsShown) {
		document.body.addEventListener('click', hideOptions)
	} else {
		document.body.removeEventListener('click', hideOptions)
	}
}
function hideOptions(e) {
	if (!elements.floatingBtn.contains(e.target) && !elements.floatingOptions.contains(e.target)) {
		toggleOptions()
	}
}
function decreaseFloatingBtnSize() {
	setTimeout(() => elements.floatingBtn.classList.add('gpth__floating--small'), 3000)
}

// ___ Settings UI
async function createAndAppendSettings() {
	const gpthSettings = document.createElement('div')
	gpthSettings.className = 'gpth-settings fixed flex flex-col'

	const htmlCode = `
    <header class="mb-5">
      <h2 class="mt-5 text-center font-medium gpth-settings__title"><span class="font-semibold">GPThemes</span> Customization</h2>
      <button class="text-token-text-tertiary hover:text-token-text-primary absolute top-4 right-4" id="gpth-settings-close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.34315 6.34338L17.6569 17.6571M17.6569 6.34338L6.34315 17.6571" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </button>
    </header>
    <main>
      <div class="tabs">
        <div class="tab-buttons flex items-center rounded-full p-1 font-semibold mb-10">
          <button class="tab-button py-2 px-4 focus:outline-none text-center rounded-full active">Color</button>
          <button class="tab-button py-2 px-4 focus:outline-none text-center rounded-full">Font</button>
          <button class="tab-button py-2 px-4 focus:outline-none text-center rounded-full">Assets</button>
        </div>
        <div class="tab-content">
          <div class="tab-pane active" id="tab-colors">${renderColorsTab}</div>
          <div class="tab-pane hidden" id="tab-fonts">${renderFontsTab}</div>
          <div class="tab-pane hidden" id="tab-assets">${renderAssetsTab}</div>
        </div>
      </div>
    </main>
  `

	gpthSettings.insertAdjacentHTML('beforeend', htmlCode)
	document.body.appendChild(gpthSettings)
	cacheSettingsElements(gpthSettings)
	addSettingsListeners()
}

function cacheSettingsElements(gpthSettings) {
	elements.settings = gpthSettings
	elements.resetAllAccentsBtn = elements.settings.querySelector('#resetAllAccents')
	elements.resetAllAccentsBtn.disabled = true
}
function addSettingsListeners() {
	document.getElementById('gpth-settings-close').addEventListener('click', closeSettings)
	handleTabsSwitchingListeners()
	handleFontsListeners()
	handleAssetsListeners()
	elements.resetAllAccentsBtn.addEventListener('click', resetAllAccents)
}

function handleTabsSwitchingListeners() {
	const tabs = document.querySelectorAll('.gpth-settings .tab-button')
	const panes = document.querySelectorAll('.gpth-settings .tab-pane')

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			document.querySelector('.tab-button.active').classList.remove('active')
			document.querySelector('.tab-pane:not(.hidden)').classList.add('hidden')

			tab.classList.add('active')
			panes[index].classList.remove('hidden')
		})
	})
}

// ___ Settings management
export function openSettings() {
	elements.settings.classList.add('gpth-settings--open')
	elements.settings.addEventListener('transitionend', handleSettingsOpened)
	elements.resetAllAccentsBtn.disabled = false
}
function handleSettingsOpened() {
	document.body.addEventListener('click', handleClickOutsideSettings)
	elements.settings.removeEventListener('transitionend', handleSettingsOpened)
}
export function closeSettings() {
	elements.settings.classList.remove('gpth-settings--open')
	document.body.removeEventListener('click', handleClickOutsideSettings)
	elements.resetAllAccentsBtn.disabled = true
}
function handleClickOutsideSettings(e) {
	if (!elements.settings.contains(e.target) && e.target.id !== 'gpth-open-settings') closeSettings()
}

export { init }
