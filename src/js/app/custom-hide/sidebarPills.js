import { rafThrottle } from '../../utils/dom.js'

const PILL_ATTR = 'data-gpth-sidebar-pill'
const PILL_WRAPPER_ATTR = 'data-gpth-sidebar-pill-wrapper'
const LABEL_SELECTOR = '.__menu-label'

const PILL_LABELS = {
	recents: 'recents',
	gpts: 'gpts',
}

let observerStarted = false
let observer = null
let syncOnNextFrame = null

function normalizeLabel(text = '') {
	return text.replace(/\s+/g, ' ').trim().toLowerCase()
}

export function syncSidebarPillMarkers() {
	const labels = document.querySelectorAll(LABEL_SELECTOR)
	if (!labels.length) return

	document.querySelectorAll(`[${PILL_WRAPPER_ATTR}]`).forEach((el) => {
		el.removeAttribute(PILL_WRAPPER_ATTR)
	})

	for (const label of labels) {
		const normalized = normalizeLabel(label.textContent)
		const wrapper = label.closest('button')

		if (normalized === PILL_LABELS.recents || normalized === PILL_LABELS.gpts) {
			label.setAttribute(PILL_ATTR, normalized)
			wrapper?.setAttribute(PILL_WRAPPER_ATTR, normalized)
		} else if (label.hasAttribute(PILL_ATTR)) {
			label.removeAttribute(PILL_ATTR)
		}
	}
}

export function observeSidebarPillMarkers() {
	if (observerStarted || !document.body) return

	observerStarted = true
	syncSidebarPillMarkers()

	syncOnNextFrame = rafThrottle(syncSidebarPillMarkers)
	observer = new MutationObserver(() => {
		syncOnNextFrame()
	})

	observer.observe(document.body, {
		subtree: true,
		childList: true,
		characterData: true,
	})
}

export function disconnectSidebarPillMarkers() {
	observer?.disconnect()
	observer = null
	syncOnNextFrame = null
	observerStarted = false
	document.querySelectorAll(`[${PILL_ATTR}], [${PILL_WRAPPER_ATTR}]`).forEach((el) => {
		el.removeAttribute(PILL_ATTR)
		el.removeAttribute(PILL_WRAPPER_ATTR)
	})
}
