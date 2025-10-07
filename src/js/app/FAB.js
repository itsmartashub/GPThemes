import { getItem, watchStorageChanges } from '../utils/storage.js'
import { SELECTORS } from './config/selectors.js'
import { $ } from '../utils/dom.js'
import { icon_sun, icon_moon, icon_moon_full, icon_settings, icon_paint } from './components/icons.js'
import { handleChangeTheme } from './themeManager.js'
import { createSettings, closeSettings } from './settingsManager.js'
import { setupExtensionMessaging } from './messaging/index.js'

// Storage key
const STORAGE_KEY = 'toggleFABVisibility'

// State
let isOptionsShown = false

// DOM Elements
const elements = {
	FAB: null,
	FABOptions: null,
	FABContainer: null,
}

// ___ Initialize the FAB and create settings
async function init() {
	try {
		await createFAB()
		createSettings()
		// Start watching for storage changes for FAB visibility
		watchStorageChanges(handleStorageChange)
		setupExtensionMessaging()
	} catch (error) {
		console.error('Initialization error:', error)
	}
}

// ___ Create and append the floating button? - UI Components
async function createFAB() {
	const $FAB = document.createElement('div')
	$FAB.className = SELECTORS.FLOATING_BTN.ROOT

	$FAB.innerHTML = `
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

	document.body.appendChild($FAB)
	cacheElements($FAB)
	addListeners()

	// Set initial visibility from storage (popup.js)
	await setInitialFABVisibility()
}
function cacheElements(FAB) {
	elements.FAB = FAB
	elements.FABOptions = $(`.${SELECTORS.FLOATING_BTN.OPTIONS}`, FAB)
	elements.FABContainer = $(`.${SELECTORS.FLOATING_BTN.BTNS_CONTAINER}`, FAB)
}
function addListeners() {
	elements.FAB.addEventListener('click', toggleFABOptions)
	elements.FABContainer.addEventListener('click', handleChangeTheme)
}
// __ Options and Settings
function toggleFABOptions() {
	isOptionsShown = !isOptionsShown
	elements.FABOptions.classList.toggle(SELECTORS.FLOATING_BTN.OPEN_STATE, isOptionsShown)

	if (isOptionsShown) {
		document.body.addEventListener('click', hideFABOptions)
	} else {
		document.body.removeEventListener('click', hideFABOptions)
	}
}

function hideFABOptions(e) {
	const isClickInsideFAB = elements.FAB.contains(e.target)
	const isClickInsideFABOptions = elements.FABOptions.contains(e.target)

	if (!isClickInsideFAB && !isClickInsideFABOptions) {
		toggleFABOptions()
	}
}
function closeFABOptions() {
	// console.log('closeFloatingOptions: ', { isOptionsShown })
	isOptionsShown = false
	elements.FABOptions.classList.remove(SELECTORS.FLOATING_BTN.OPEN_STATE)
	document.body.removeEventListener('click', hideFABOptions)
	// console.log('closeFloatingOptions: ', { isOptionsShown })
}

/* Toggle flaoting button logic */
async function setInitialFABVisibility() {
	const isVisible = await getItem(STORAGE_KEY)
	toggleFABVisibility(isVisible !== false) // default true
}
// Show/hide floating button
function toggleFABVisibility(isVisible) {
	/* TODO: Add better toggle toggle card in popup: when floatingBtn not exists then show re-init ext, when floatingBtn exists then show toggle floating btn card */
	if (!elements.FAB) return

	elements.FAB.classList.toggle(`${SELECTORS.FLOATING_BTN.ROOT}--hidden`, !isVisible)

	// Close FLOATING_BTN too if it's open
	if (!isVisible && $(`.${SELECTORS.SETTINGS.OPEN_STATE}`)) closeSettings()
}
// ___ Listen for storage changes (for multi-tab sync)
function handleStorageChange(changes, area) {
	const change = changes[STORAGE_KEY]

	// Check area and if the specific key changed
	if (area === 'sync' && change) {
		// Use a direct boolean check for clarity (newValue is likely a boolean)
		const isVisible = change.newValue !== false
		toggleFABVisibility(isVisible)
	}
}

export {
	init,
	closeFABOptions as closeFloatingOptions,
	toggleFABVisibility as toggleFloatingBtnVisibility,
	STORAGE_KEY as SK_TOGGLE_FAB,
}
