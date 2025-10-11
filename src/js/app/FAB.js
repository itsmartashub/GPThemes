import { getItem, watchStorageChanges } from '../utils/storage.js'
import { SELECTORS } from './config/selectors.js'
import { SK_TOGGLE_FAB_HIDDEN } from './config/consts-storage.js'
import { $ } from '../utils/dom.js'
import { icon_sun, icon_moon, icon_moon_full, icon_settings, icon_paint } from './components/icons.js'
import { handleChangeTheme } from './themeManager.js'
import { createSettings, closeSettings } from './settingsManager.js'
import { setupExtensionMessaging } from './messaging/index.js'

const STORAGE_KEY = SK_TOGGLE_FAB_HIDDEN

// Local UI state
let isOptionsShown = false

// Cached DOM refs
const elements = {
	FAB: null,
	FABOptions: null,
	FABContainer: null,
}

// --- INIT ---
async function init() {
	try {
		await createFAB()
		createSettings()
		setupExtensionMessaging()

		// Listen for storage sync changes (cross-tab)
		watchStorageChanges(handleStorageChange)
	} catch (err) {
		console.error('[FAB:init] Failed:', err)
	}
}

function templateHTML() {
	return `
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
}

// --- DOM CREATION ---
async function createFAB() {
	// Prevent duplicates
	// if (elements.FAB) return

	const $FAB = document.createElement('div')
	$FAB.className = SELECTORS.FLOATING_BTN.ROOT
	$FAB.innerHTML = templateHTML()
	document.body.appendChild($FAB)

	cacheElements($FAB)
	bindListeners()

	// Initialize visibility
	await setInitialFABVisibility()
}

// --- ELEMENTS ---
function cacheElements(FAB) {
	elements.FAB = FAB
	elements.FABOptions = $(`.${SELECTORS.FLOATING_BTN.OPTIONS}`, FAB)
	elements.FABContainer = $(`.${SELECTORS.FLOATING_BTN.BTNS_CONTAINER}`, FAB)
}

// --- EVENTS ---
function bindListeners() {
	elements.FAB.addEventListener('click', onFABClick)
	elements.FABContainer.addEventListener('click', handleChangeTheme)
}

function onFABClick(e) {
	// Ignore clicks on actual option buttons (delegated to theme handler)
	if (e.target.closest(`.${SELECTORS.FLOATING_BTN.BTNS_CONTAINER}`)) return

	toggleFABOptions()
}

function toggleFABOptions(show = !isOptionsShown) {
	if (!elements.FABOptions) return

	isOptionsShown = show
	elements.FABOptions.classList.toggle(SELECTORS.FLOATING_BTN.OPEN_STATE, show)

	if (show) {
		document.addEventListener('click', handleOutsideClick, { capture: true })
	} else {
		document.removeEventListener('click', handleOutsideClick, { capture: true })
	}
}

function handleOutsideClick(e) {
	const insideFAB = elements.FAB?.contains(e.target)
	if (!insideFAB) toggleFABOptions(false)
}

function closeFABOptions() {
	toggleFABOptions(false)
}

// --- VISIBILITY ---
async function setInitialFABVisibility() {
	const isHidden = await getItem(STORAGE_KEY)
	toggleFABVisibility(isHidden) // default false
}

function toggleFABVisibility(isHidden = false) {
	const { FAB } = elements
	if (!FAB) return

	FAB.classList.toggle(`${SELECTORS.FLOATING_BTN.ROOT}--hidden`, isHidden)

	// Auto-close settings if FAB hidden
	if (isHidden && $(`.${SELECTORS.SETTINGS.OPEN_STATE}`)) closeSettings()
}

// --- STORAGE WATCHER ---
function handleStorageChange(changes, area) {
	if (area !== 'sync') return

	const change = changes[STORAGE_KEY]
	if (!change) return

	console.log('change: ', change)

	const isHidden = change.newValue !== false

	console.log('isHidden', isHidden)

	toggleFABVisibility(isHidden)
}

// --- EXPORTS ---
export {
	init,
	closeFABOptions as closeFloatingOptions,
	toggleFABVisibility as toggleFloatingBtnVisibility,
	STORAGE_KEY as SK_TOGGLE_FAB,
}
