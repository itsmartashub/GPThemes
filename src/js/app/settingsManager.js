import { renderColorsTab, resetAllAccents } from './mainColors.js'
import { renderFontsTab, handleFontsListeners } from './mainFonts.js'
import { renderWidthsTab, handleWidthsListeners } from './mainWidths.js'

let $settings = null
let $resetAllAccentsBtn = null

const SETTINGS_OPEN_CLASS = 'gpth-settings--open'

async function createSettings() {
	const gpthSettings = document.createElement('div')
	gpthSettings.className = 'gpth-settings fixed flex flex-col'

	/* 
	 <button class="text-token-text-tertiary hover:text-token-text-primary absolute top-4 right-4" id="gpth-settings-close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.34315 6.34338L17.6569 17.6571M17.6569 6.34338L6.34315 17.6571" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </button> */

	gpthSettings.innerHTML = `
    <header class="mb-5">
      <h2 class="text-center font-medium gpth-settings__title"><span class="font-semibold">GPThemes</span> Customization</h2>
    </header>
    <main>
      <div class="tabs">
        <div class="tab-buttons p-1 font-semibold mb-5">
          <button class="tab-button py-2 px-4 focus:outline-none text-center active">Color</button>
          <button class="tab-button py-2 px-4 focus:outline-none text-center">Font</button>
          <button class="tab-button py-2 px-4 focus:outline-none text-center">Layout</button>
        </div>
        <div class="tab-content">
          <div class="tab-pane active" id="tab-colors">${renderColorsTab}</div>
          <div class="tab-pane hidden" id="tab-fonts">${renderFontsTab}</div>
          <div class="tab-pane hidden" id="tab-assets">${renderWidthsTab}</div>
        </div>
      </div>
    </main>
  `

	document.body.appendChild(gpthSettings)
	cacheElements(gpthSettings)
	addListeners()
}

function cacheElements(gpthSettings) {
	$settings = gpthSettings
	$resetAllAccentsBtn = $settings.querySelector('#resetAllAccents')
	$resetAllAccentsBtn.disabled = true
}
function addListeners() {
	// document.getElementById('gpth-settings-close').addEventListener('click', closeSettings)
	handleTabsSwitching()
	handleFontsListeners()
	handleWidthsListeners()
	$resetAllAccentsBtn.addEventListener('click', resetAllAccents)
}
// ___ Settings management
function openSettings() {
	$settings.classList.add(SETTINGS_OPEN_CLASS)
	$settings.addEventListener('transitionend', handleSettingsOpened)
	$resetAllAccentsBtn.disabled = false
}
function handleSettingsOpened() {
	document.body.addEventListener('click', handleClickOutsideSettings)
	$settings.removeEventListener('transitionend', handleSettingsOpened)
}
function closeSettings() {
	$settings.classList.remove(SETTINGS_OPEN_CLASS)
	document.body.removeEventListener('click', handleClickOutsideSettings)
	$resetAllAccentsBtn.disabled = true
}
function handleClickOutsideSettings(e) {
	if (!$settings.contains(e.target) && e.target.id !== 'gpth-open-settings') closeSettings()
}

function handleTabsSwitching() {
	const tabs = document.querySelectorAll('.gpth-settings .tab-button')
	const panes = document.querySelectorAll('.gpth-settings .tab-pane')

	// tabs.forEach((tab, index) => {
	// 	tab.addEventListener('click', () => {
	// 		document.querySelector('.tab-button.active').classList.remove('active')
	// 		document.querySelector('.tab-pane:not(.hidden)').classList.add('hidden')

	// 		tab.classList.add('active')
	// 		panes[index].classList.remove('hidden')
	// 	})
	// })
	// Cache the query results outside the event handler to avoid repeated DOM queries
	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			const activeTab = document.querySelector('.tab-button.active')
			const activePane = document.querySelector('.tab-pane:not(.hidden)')

			// Only do DOM updates if necessary
			if (activeTab !== tab) {
				activeTab.classList.remove('active')
				activePane.classList.add('hidden')

				tab.classList.add('active')
				panes[index].classList.remove('hidden')
			}
		})
	})
}

export { createSettings, openSettings, closeSettings, $settings }
