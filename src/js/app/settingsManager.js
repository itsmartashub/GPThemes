import { SELECTORS } from './config/selectors'
import { PFX } from './config/constants'
import {
	renderColorsTab,
	handleColorsListeners,
	init as initColorsModule,
	mount as mountColors,
} from './custom-colors/index'
import {
	renderFontsTab,
	handleFontsListeners,
	init as initFontsModule,
	mount as mountFonts,
} from './custom-fonts/index'
import {
	renderWidthsTab,
	handleWidthsListeners,
	init as initWidthsModule,
	mount as mountWidths,
} from './custom-layouts/index'
// Scrolldown is initialized and mounted from custom-layouts module
// import { handleCustomChatboxListeners } from './toggleCustomChatbox'

// Cached DOM refs
let $settings = null
let $tabButtons = null
let $tabPanes = null

// Constants
const ACTIVE_CLASS = 'active'
const HIDDEN_CLASS = 'hidden'

async function createSettings() {
	// Create settings element if it doesn't exist
	// if ($settings) return

	// 1. Create and render settings HTML
	const gpthSettings = document.createElement('div')
	gpthSettings.className = `${SELECTORS.SETTINGS.ROOT} fixed flex flex-col`

	gpthSettings.innerHTML = templateHTML()

	// 2. Append (synchronous) - Add to DOM
	document.body.appendChild(gpthSettings)

	// 3. Cache elements
	cacheElements(gpthSettings)

	// 4. Attach listeners after initialization
	attachListeners()

	// 5. Initialize modules now that DOM is attached
	try {
		await Promise.all([initColorsModule(), initFontsModule(), initWidthsModule()])
		// After state/css init, mount DOM listeners scoped to settings
		mountColors()
		mountFonts()
		mountWidths()
	} catch (err) {
		console.error('[Settings] Module initialization failed:', err)
	}

	return gpthSettings
}

function templateHTML() {
	const tabConfig = [
		{ id: 'colors', label: 'Color', render: renderColorsTab },
		{ id: 'fonts', label: 'Font', render: renderFontsTab },
		{ id: 'layout', label: 'Layout', render: renderWidthsTab },
	]

	const taButtonsHTML = tabConfig
		.map(
			({ label }, i) => `
				<button 
					class="${SELECTORS.SETTINGS.TABS.BUTTON} py-2 px-4 focus:outline-none text-center ${i === 0 ? ACTIVE_CLASS : ''}">
					${label}
				</button>`
		)
		.join('')

	const tabPanesHTML = tabConfig
		.map(
			({ id, render }, i) => `
				<div 
					id="${PFX}-tab-${id}" 
					class="${SELECTORS.SETTINGS.TABS.PANE} ${i === 0 ? ACTIVE_CLASS : HIDDEN_CLASS}">
					${render()}
				</div>`
		)
		.join('')

	return `
		<header class="mb-5">
			<h2 class="text-center font-medium gpth-settings__title">
				<span class="font-semibold">GPThemes</span> Customization
			</h2>
		</header>
		<main>
			<div class="${SELECTORS.SETTINGS.TABS.ROOT}">
				<div class="${SELECTORS.SETTINGS.TABS.BUTTONS} p-1 font-semibold mb-5">
					${taButtonsHTML}
				</div>
				<div class="${SELECTORS.SETTINGS.TABS.CONTENT}">
					${tabPanesHTML}
				</div>
			</div>
		</main>
	`
}

function cacheElements(gpthSettings) {
	$settings = gpthSettings
	$tabButtons = [...$settings.querySelectorAll(`.${SELECTORS.SETTINGS.TABS.BUTTON}`)]
	$tabPanes = [...$settings.querySelectorAll(`.${SELECTORS.SETTINGS.TABS.PANE}`)]
}

function attachListeners() {
	handleTabsSwitching()

	// handleColorsListeners()
	// handleFontsListeners()
	// handleWidthsListeners()
	// handleCustomChatboxListeners()
}

function openSettings() {
	if (!$settings) return

	$settings.classList.add(SELECTORS.SETTINGS.OPEN_STATE)
	$settings.addEventListener('transitionend', handleOpened, { once: true })
}
function closeSettings() {
	if (!$settings) return

	$settings.classList.remove(SELECTORS.SETTINGS.OPEN_STATE)
	document.body.removeEventListener('click', handleClickOutsideSettings)
}

function handleOpened() {
	document.body.addEventListener('click', handleClickOutsideSettings)
}

function handleClickOutsideSettings(e) {
	// Ignore clicks inside settings
	if (!$settings.contains(e.target) && e.target.id !== SELECTORS.SETTINGS.OPEN_BTN) {
		closeSettings()
	}
}

function handleTabsSwitching() {
	if (!$tabButtons?.length) return

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
