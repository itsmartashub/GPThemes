import { SELECTORS } from './config/selectors'
import { PFX } from './config/constants'
import { renderColorsTab, handleColorsListeners } from './custom-colors/index'
import { renderFontsTab, handleFontsListeners } from './custom-fonts/index'
import { renderWidthsTab, handleWidthsListeners } from './custom-layouts/index'
import { handleScrolldownListeners } from './custom-layouts/scrolldown'
// import { handleCustomChatboxListeners } from './toggleCustomChatbox'

// Elements cache
let $settings = null
let $tabButtons = null
let $tabPanes = null

// Constants
const ACTIVE_CLASS = 'active'
const HIDDEN_CLASS = 'hidden'

async function createSettings() {
	// Create settings element if it doesn't exist
	// if ($settings) return

	const gpthSettings = document.createElement('div')
	gpthSettings.className = `${SELECTORS.SETTINGS.ROOT} fixed flex flex-col`

	// Render settings HTML
	gpthSettings.innerHTML = `
		<header class="mb-5">
			<h2 class="text-center font-medium gpth-settings__title">
				<span class="font-semibold">GPThemes</span> Customization
			</h2>
		</header>
		<main>
			<div class="${SELECTORS.SETTINGS.TABS.ROOT}">
				<div class="${SELECTORS.SETTINGS.TABS.BUTTONS} p-1 font-semibold mb-5">
					<button class="${SELECTORS.SETTINGS.TABS.BUTTON} py-2 px-4 focus:outline-none text-center active">Color</button>
					<button class="${SELECTORS.SETTINGS.TABS.BUTTON} py-2 px-4 focus:outline-none text-center">Font</button>
					<button class="${SELECTORS.SETTINGS.TABS.BUTTON} py-2 px-4 focus:outline-none text-center">Layout</button>
				</div>
				<div class="${SELECTORS.SETTINGS.TABS.CONTENT}">
					<div class="${SELECTORS.SETTINGS.TABS.PANE} active" id="${PFX}-tab-colors">${renderColorsTab()}</div>
					<div class="${SELECTORS.SETTINGS.TABS.PANE} hidden" id="${PFX}-tab-fonts">${renderFontsTab()}</div>
					<div class="${SELECTORS.SETTINGS.TABS.PANE} hidden" id="${PFX}-tab-layout">${renderWidthsTab()}</div>
				</div>
			</div>
		</main>
	`

	// Add to DOM and set up listeners
	document.body.appendChild(gpthSettings)
	cacheElements(gpthSettings)

	// Add listeners after initialization
	addListeners()
}

function cacheElements(gpthSettings) {
	$settings = gpthSettings
	$tabButtons = Array.from($settings.querySelectorAll(`.${SELECTORS.SETTINGS.TABS.BUTTON}`))
	$tabPanes = Array.from($settings.querySelectorAll(`.${SELECTORS.SETTINGS.TABS.PANE}`))
}

function addListeners() {
	handleTabsSwitching()

	handleColorsListeners()
	handleFontsListeners()
	handleWidthsListeners()
	handleScrolldownListeners()
	// handleCustomChatboxListeners()
}

function openSettings() {
	$settings.classList.add(SELECTORS.SETTINGS.OPEN_STATE)
	$settings.addEventListener('transitionend', handleSettingsOpened, { once: true })
}

function handleSettingsOpened() {
	document.body.addEventListener('click', handleClickOutsideSettings)
}

function closeSettings() {
	if (!$settings) return

	$settings.classList.remove(SELECTORS.SETTINGS.OPEN_STATE)
	document.body.removeEventListener('click', handleClickOutsideSettings)
}

function handleClickOutsideSettings(e) {
	if (!$settings.contains(e.target) && e.target.id !== SELECTORS.SETTINGS.OPEN_BTN) {
		closeSettings()
	}
}

function handleTabsSwitching() {
	if (!$tabButtons || !$tabButtons.length) return

	// Use cached elements instead of querying on each click
	$tabButtons.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			const activeTabIndex = $tabButtons.findIndex((t) => t.classList.contains(ACTIVE_CLASS))

			// Skip if the clicked tab is already active
			if (activeTabIndex === index) return

			// Update tab buttons
			$tabButtons[activeTabIndex].classList.remove(ACTIVE_CLASS)
			tab.classList.add(ACTIVE_CLASS)

			// Update tab panes
			$tabPanes[activeTabIndex].classList.add(HIDDEN_CLASS)
			$tabPanes[index].classList.remove(HIDDEN_CLASS)
		})
	})
}

export { createSettings, openSettings, closeSettings, $settings, SETTINGS_OPEN_CLASS }
