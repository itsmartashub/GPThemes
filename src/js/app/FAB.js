import { getItem, watchStorageChanges } from '../utils/storage.js'
import { SELECTORS } from './config/selectors.js'
import { SK_TOGGLE_FAB_HIDDEN } from './config/consts-storage.js'
import { $ } from '../utils/dom.js'
import { icon_sun, icon_moon, icon_moon_full, icon_settings, icon_paint, icon_kofi_cup } from './components/icons.js'
import { handleChangeTheme } from './themeManager.js'
import { createSettings, closeSettings } from './settingsManager.js'
import { setupExtensionMessaging } from './messaging/index.js'

const STORAGE_KEY = SK_TOGGLE_FAB_HIDDEN

// Local UI state
let isDockShown = false

// Cached DOM refs
const elements = {
	FAB: null,
	FABDock: null,
	FABDockBtnContainer: null,
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
		<div class="${SELECTORS.FAB.ROOT}__icon">${icon_paint}</div>
		
		<aside class="${SELECTORS.FAB.DOCK}">
			<div class="${SELECTORS.FAB.DOCK_BTNS}">
				<button id="light" data-gpth-dock-btn="light" class="${SELECTORS.FAB.DOCK}__btn">${icon_sun}</button>
				<button id="dark" data-gpth-dock-btn="dark" class="${SELECTORS.FAB.DOCK}__btn">${icon_moon}</button>
				<button id="oled" data-gpth-dock-btn="black" class="${SELECTORS.FAB.DOCK}__btn">${icon_moon_full}</button>
				<button id="${SELECTORS.SETTINGS.OPEN_BTN}" data-gpth-dock-btn="more" class="${SELECTORS.FAB.DOCK}__btn">${icon_settings}</button>
			</div>

			<a href="https://ko-fi.com/http417" data-gpth-dock-btn="ko-fi" class="${SELECTORS.FAB.DOCK}__btn" target="_blank" rel="noopener noreferrer">
				${icon_kofi_cup}
			</a>
		</aside>
	`
}

// --- DOM CREATION ---
async function createFAB() {
	// Prevent duplicates
	// if (elements.FAB) return

	const $FAB = document.createElement('div')
	$FAB.className = SELECTORS.FAB.ROOT
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
	elements.FABDock = $(`.${SELECTORS.FAB.DOCK}`, FAB)
	elements.FABDockBtnContainer = $(`.${SELECTORS.FAB.DOCK_BTNS}`, FAB)
}

// --- EVENTS ---
function bindListeners() {
	elements.FAB.addEventListener('click', onFABClick)
	elements.FABDockBtnContainer.addEventListener('click', handleChangeTheme)
}

function onFABClick(e) {
	// Ignore clicks on actual option buttons (delegated to theme handler)
	if (e.target.closest(`.${SELECTORS.FAB.DOCK_BTNS}`)) return

	toggleFABDock()
}

function toggleFABDock(show = !isDockShown) {
	if (!elements.FABDock) return

	isDockShown = show
	elements.FABDock.classList.toggle(SELECTORS.FAB.OPEN_STATE, show)

	if (show) {
		document.addEventListener('click', handleOutsideClick, { capture: true })
	} else {
		document.removeEventListener('click', handleOutsideClick, { capture: true })
	}
}

function handleOutsideClick(e) {
	const insideFAB = elements.FAB?.contains(e.target)
	if (!insideFAB) toggleFABDock(false)
}

function closeFABDock() {
	toggleFABDock(false)
}

// --- VISIBILITY ---
async function setInitialFABVisibility() {
	const isHidden = await getItem(STORAGE_KEY)
	toggleFABVisibility(isHidden) // default false
}

function toggleFABVisibility(isHidden = false) {
	const { FAB } = elements
	if (!FAB) return

	FAB.classList.toggle(`${SELECTORS.FAB.ROOT}--hidden`, isHidden)

	// Auto-close settings if FAB hidden
	if (isHidden && $(`.${SELECTORS.SETTINGS.OPEN_STATE}`)) closeSettings()
}

// --- STORAGE WATCHER ---
function handleStorageChange(changes, area) {
	if (area !== 'sync') return

	const change = changes[STORAGE_KEY]
	if (!change) return

	const isHidden = change.newValue !== false

	toggleFABVisibility(isHidden)
}

// --- EXPORTS ---
export { init, toggleFABVisibility, STORAGE_KEY as SK_TOGGLE_FAB }
