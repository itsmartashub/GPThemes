import { $ } from '../../utils/dom.js'
import { getItem, watchStorageChanges } from '../../utils/storage.js'
import { icon_paint } from '../components/icons.js'
import { SK_TOGGLE_FAB_HIDDEN } from '../config/consts-storage.js'
import { SELECTORS } from '../config/selectors.js'
import { setupExtensionMessaging } from '../messaging/index.js'
import { createSettings, onCloseSettings, onOpenSettings } from '../settingsManager.js'

// =====================================================
// CONSTANTS
// =====================================================

const STORAGE_KEY = SK_TOGGLE_FAB_HIDDEN

// =====================================================
// STATE
// =====================================================

const elements = {
	FAB: null,
}

// =====================================================
// TEMPLATE
// =====================================================

function templateHTML() {
	return `
        <div class="${SELECTORS.FAB.ROOT}__icon">${icon_paint}</div>
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
}

// =====================================================
// LISTENERS
// =====================================================

function addListeners() {
	elements.FAB.addEventListener('click', onFABClick)
}

function onFABClick() {
	// The FAB toggles the settings panel
	if ($(`.${SELECTORS.SETTINGS.OPEN_STATE}`)) {
		onCloseSettings()
		return
	}

	onOpenSettings()
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
