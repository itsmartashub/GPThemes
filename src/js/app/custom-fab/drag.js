import { rafThrottle } from '../../utils/dom.js'
import { storageLocal } from '../../utils/storage.js'
import { SK_FAB_POSITION } from '../config/consts-storage.js'

// =====================================================
// CONSTANTS
// =====================================================

// Minimum pixels the button must stay inside the viewport on each edge
const EDGE_MARGIN = 8

// Drag is only committed after moving this many pixels, to preserve click intent
const DRAG_THRESHOLD = 4

// =====================================================
// HELPERS
// =====================================================

// Clamp the proposed position so the element never leaves the viewport
function clamp(pos, size, viewportSize) {
	return Math.min(Math.max(pos, EDGE_MARGIN), viewportSize - size - EDGE_MARGIN)
}

// Read the saved {x, y} from local storage (device-specific, not synced)
export async function loadFABPosition() {
	return storageLocal.getItem(SK_FAB_POSITION, null)
}

// Save {x, y} to local storage without blocking the UI
function saveFABPosition(x, y) {
	storageLocal.setItem(SK_FAB_POSITION, { x, y })
}

// Apply pixel position directly to the element
export function applyFABPosition($el, x, y) {
	$el.style.left = `${x}px`
	$el.style.top = `${y}px`
}

// Re-clamp the element to the current viewport (call on restore and on resize)
export function clampToViewport($el) {
	const rect = $el.getBoundingClientRect()
	const x = clamp(rect.left, $el.offsetWidth, window.innerWidth)
	const y = clamp(rect.top, $el.offsetHeight, window.innerHeight)

	// Only write style if something actually changed to avoid layout thrash
	if (x !== rect.left || y !== rect.top) applyFABPosition($el, x, y)
}

// =====================================================
// PUBLIC API
// =====================================================

/*
Make $fab draggable anywhere on the viewport
Accepts an options object with onDragStart and onDragEnd callbacks, or onDragEnd callback directly
Returns a cleanup function that removes all listeners */
export function makeDraggable($fab, options = {}) {
	const callbacks = typeof options === 'function' ? { onDragEnd: options } : options
	const { onDragStart, onDragEnd } = callbacks
	let startX = 0
	let startY = 0
	let originLeft = 0
	let originTop = 0
	let dragging = false
	// Survives longer than the --dragging class so the click handler can read it after pointerup
	let didDrag = false

	const onMove = rafThrottle((e) => {
		if (!dragging) return

		const dx = e.clientX - startX
		const dy = e.clientY - startY

		// Activate drag state only after threshold to preserve click intent
		if (!didDrag) {
			if (Math.abs(dx) < DRAG_THRESHOLD && Math.abs(dy) < DRAG_THRESHOLD) return
			didDrag = true
			$fab.classList.add('gpth-fab--dragging')
			onDragStart?.()
		}

		const w = $fab.offsetWidth
		const h = $fab.offsetHeight
		const x = clamp(originLeft + dx, w, window.innerWidth)
		const y = clamp(originTop + dy, h, window.innerHeight)

		applyFABPosition($fab, x, y)
	})

	function onStart(e) {
		// Only primary pointer / left button
		if (e.button !== undefined && e.button !== 0) return

		const rect = $fab.getBoundingClientRect()
		startX = e.clientX
		startY = e.clientY
		originLeft = rect.left
		originTop = rect.top
		dragging = true

		document.addEventListener('pointermove', onMove)
		document.addEventListener('pointerup', onEnd, { once: true })
		document.addEventListener('pointercancel', onEnd, { once: true })

		// Prevent text selection and scrolling while dragging
		e.preventDefault()
	}

	function onEnd() {
		dragging = false
		document.removeEventListener('pointermove', onMove)

		if (!didDrag) return

		$fab.classList.remove('gpth-fab--dragging')
		// Clear didDrag after click has had a chance to fire (click follows pointerup)
		requestAnimationFrame(() => {
			didDrag = false
		})

		const rect = $fab.getBoundingClientRect()
		const x = Math.round(rect.left)
		const y = Math.round(rect.top)

		saveFABPosition(x, y)
		onDragEnd?.({ x, y })
	}

	$fab.addEventListener('pointerdown', onStart)

	// Expose a one-shot query: returns true if the last interaction was a drag (not a click)
	return {
		cleanup: () => {
			$fab.removeEventListener('pointerdown', onStart)
			document.removeEventListener('pointermove', onMove)
		},
		wasDragged: () => didDrag,
	}
}
