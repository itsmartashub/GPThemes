import { renderColorsTab, resetAllAccents } from './mainColors.js'
import { renderFontsTab, handleFontsListeners } from './mainFonts.js'
import { renderAssetsTab, handleAssetsListeners } from './mainAssets.js'

const elements = {
	settings: null,
	resetAllAccentsBtn: null,
	tabButtons: null,
	tabPanes: null,
}

const SETTINGS_OPEN_CLASS = 'gpth-settings--open'

function createSettings() {
	const gpthSettings = document.createElement('div')
	gpthSettings.className = 'gpth-settings fixed flex flex-col'

	gpthSettings.innerHTML = `
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
          <div class="tab-pane active" id="tab-colors">${renderColorsTab()}</div>
          <div class="tab-pane hidden" id="tab-fonts">${renderFontsTab()}</div>
          <div class="tab-pane hidden" id="tab-assets">${renderAssetsTab()}</div>
        </div>
      </div>
    </main>
  `

	document.body.appendChild(gpthSettings)
	cacheElements(gpthSettings)
	addEventListeners()
}

function cacheElements(gpthSettings) {
	elements.settings = gpthSettings
	elements.resetAllAccentsBtn = gpthSettings.querySelector('#resetAllAccents')
	elements.tabButtons = gpthSettings.querySelectorAll('.tab-button')
	elements.tabPanes = gpthSettings.querySelectorAll('.tab-pane')
	elements.resetAllAccentsBtn.disabled = true
}

function addEventListeners() {
	elements.settings.querySelector('#gpth-settings-close').addEventListener('click', closeSettings)
	elements.resetAllAccentsBtn.addEventListener('click', resetAllAccents)
	handleTabsSwitching()
	handleFontsListeners()
	handleAssetsListeners()
}

function openSettings() {
	elements.settings.classList.add(SETTINGS_OPEN_CLASS)
	elements.settings.addEventListener(
		'transitionend',
		() => {
			document.body.addEventListener('click', handleClickOutsideSettings)
		},
		{ once: true }
	)
	elements.resetAllAccentsBtn.disabled = false
}

function closeSettings() {
	elements.settings.classList.remove(SETTINGS_OPEN_CLASS)
	document.body.removeEventListener('click', handleClickOutsideSettings)
	elements.resetAllAccentsBtn.disabled = true
}

function handleClickOutsideSettings(e) {
	if (!elements.settings.contains(e.target) && e.target.id !== 'gpth-open-settings') {
		closeSettings()
	}
}

function handleTabsSwitching() {
	elements.tabButtons.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			document.querySelector('.tab-button.active').classList.remove('active')
			document.querySelector('.tab-pane:not(.hidden)').classList.add('hidden')

			tab.classList.add('active')
			elements.tabPanes[index].classList.remove('hidden')
		})
	})
}

const $settings = elements.settings

export { createSettings, openSettings, closeSettings, $settings }
