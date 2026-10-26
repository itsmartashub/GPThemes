import { debounce } from '../../utils/dom.js'
import { getItem, watchStorageChanges } from '../../utils/storage.js'
import { icon_paint } from '../components/icons.js'
import { SK_TOGGLE_FAB_HIDDEN } from '../config/consts-storage.js'
import { SELECTORS } from '../config/selectors.js'
import { onCloseSettings, toggleSettings } from '../settingsManager.js'
import { applyFABPosition, clampToViewport, loadFABPosition, makeDraggable } from './drag.js'

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

// Handle returned by makeDraggable, used to suppress drag-release clicks and for teardown
let drag = null

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

	// 3. Load initial state in parallel (non-blocking)
	await Promise.allSettled([setInitialFABVisibility(), restoreFABPosition($FAB)])

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

// Named reference so it can be removed on teardown if needed
const onViewportResizeDebounced = debounce(onViewportResize, 150)

function addListeners() {
	elements.FAB.addEventListener('click', onFABClick)

	drag = makeDraggable(elements.FAB, {
		onDragStart: onCloseSettings,
	})

	// Re-clamp the FAB whenever the viewport changes
	window.addEventListener('resize', onViewportResizeDebounced)
}

function onFABClick() {
	// Drag-release must not count as a click (didDrag flag clears after this frame)
	if (drag?.wasDragged()) return

	toggleSettings(elements.FAB)
}

function onViewportResize() {
	clampToViewport(elements.FAB)
}

// =====================================================
// SET VISIBILITY
// =====================================================

function setFABVisibility(isHidden = false) {
	if (!elements.FAB) return

	elements.FAB.classList.toggle(`${SELECTORS.FAB.ROOT}--hidden`, isHidden)

	// Auto-close settings if FAB is hidden
	if (isHidden) onCloseSettings()
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

/* Restore the last dragged position from local storage, or keep the default CSS position. */
async function restoreFABPosition($FAB) {
	try {
		const pos = await loadFABPosition()
		if (pos) applyFABPosition($FAB, pos.x, pos.y)
		// Always clamp after applying — saved pos may be from a larger/different screen
		clampToViewport($FAB)
	} catch (err) {
		console.warn('[FAB] Could not restore position:', err)
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
