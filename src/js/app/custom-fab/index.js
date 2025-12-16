import { $ } from '../../utils/dom.js'
import { getItem, watchStorageChanges } from '../../utils/storage.js'
import {
	icon_kofi_cup,
	icon_moon,
	icon_moon_full,
	icon_paint,
	icon_settings,
	icon_sun,
} from '../components/icons.js'
import { SK_TOGGLE_FAB_HIDDEN } from '../config/consts-storage.js'
import { SELECTORS } from '../config/selectors.js'
import { setupExtensionMessaging } from '../messaging/index.js'
import { createSettings, onCloseSettings } from '../settingsManager.js'
import { onChangeTheme } from '../themeManager.js'

// =====================================================
// CONSTANTS
// =====================================================

const STORAGE_KEY = SK_TOGGLE_FAB_HIDDEN

// =====================================================
// STATE
// =====================================================

let isDockOpen = false

const elements = {
	FAB: null,
	dock: null,
	dockButtons: null,
}

// =====================================================
// TEMPLATE
// =====================================================

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

// =====================================================
// Lifecycle: CREATE (build DOM, init modules, mount)
// =====================================================

async function createFAB() {
	// 1. Create DOM
	const $FAB = document.createElement('div')
	$FAB.className = SELECTORS.FAB.ROOT
	$FAB.innerHTML = templateHTML()
	document.body.appendChild($FAB)

	// 2. Cache elements
	setElements($FAB)

	// 3. Load initial state
	await setInitialFABVisibility()

	// 4. Wire up listeners (after DOM ready)
	requestAnimationFrame(() => {
		addListeners()
	})

	return $FAB
}

// =====================================================
// ELEMENTS - cache DOM elemnt references
// =====================================================

function setElements(FAB) {
	elements.FAB = FAB
	elements.dock = $(`.${SELECTORS.FAB.DOCK}`, FAB)
	elements.dockButtons = $(`.${SELECTORS.FAB.DOCK_BTNS}`, FAB)
}

// =====================================================
// LISTENERS
// =====================================================

function addListeners() {
	elements.FAB.addEventListener('click', onFABClick)
	elements.dockButtons.addEventListener('click', onChangeTheme)
}

function onFABClick(e) {
	// Ignore clicks on actual option buttons (delegated to theme handler)
	if (e.target.closest(`.${SELECTORS.FAB.DOCK_BTNS}`)) return

	toggleDock()
}

// =====================================================
// DOCK MANAGEMENT
// =====================================================

// Toggle dock visibility
function toggleDock(shouldOpen) {
	const newState = shouldOpen ?? !isDockOpen

	if (!elements.dock || isDockOpen === newState) return

	isDockOpen = newState
	elements.dock.classList.toggle(SELECTORS.FAB.OPEN_STATE, newState)

	if (newState) {
		document.addEventListener('click', onOutsideClick, { capture: true })
	} else {
		document.removeEventListener('click', onOutsideClick, { capture: true })
	}
}

// Close dock when clicking outside FAB
function onOutsideClick(e) {
	const insideFAB = elements.FAB?.contains(e.target)
	if (!insideFAB) toggleDock(false)
}

// =====================================================
// SET VISIBILITY
// =====================================================

function setFABVisibility(isHidden = false) {
	if (!elements.FAB) return

	elements.FAB.classList.toggle(`${SELECTORS.FAB.ROOT}--hidden`, isHidden)

	// auto-close settings if FAB hidden
	if (isHidden && $(`.${SELECTORS.SETTINGS.OPEN_STATE}`)) onCloseSettings()
}

// Load initial visibilty state from storage
async function setInitialFABVisibility() {
	// Show FAB immediately (non-blocking)
	setFABVisibility(false)

	// Update from storage if different
	try {
		const isHidden = await getItem(STORAGE_KEY)
		if (isHidden) setFABVisibility(true)
	} catch (error) {
		console.warn('[FAB] Could not load visibility state:', error)
	}
}

// =====================================================
// STORAGE WATCHER
// =====================================================

// Handle cross-tab storage sync changes
function onStorageChange(changes, area) {
	if (area !== 'sync') return

	const visibilityChange = changes[STORAGE_KEY]
	if (!visibilityChange) return

	// Only hide FAB if newValue is EXPLICITLY true
	const isHidden = visibilityChange.newValue === true
	setFABVisibility(isHidden)
}

// =====================================================
// Lifecycle: INIT
// =====================================================

async function init() {
	try {
		await createFAB()

		// Initialize sub-modules
		createSettings()
		setupExtensionMessaging()

		// Listen for storage sync changes (cross-tab)
		watchStorageChanges(onStorageChange)
	} catch (err) {
		console.error('[FAB:init] Failed:', err)
	}
}

// =====================================================
// Exports
// =====================================================
export { init, setFABVisibility as toggleFABVisibility }
