import { subscribeDomMutations } from '../../runtime/domMutations.js'
import { rafThrottle } from '../../utils/dom.js'

const PILL_ATTR = 'data-gpth-sidebar-pill'
const PILL_WRAPPER_ATTR = 'data-gpth-sidebar-pill-wrapper'
const LABEL_SELECTOR = '.__menu-label'
const PILL_LABELS = {
	recents: 'recents',
	gpts: 'gpts',
}

let markerRoot = null
let markerObserver = null
let removeRootGuard = null
let syncOnNextFrame = null

function normalizeLabel(text = '') {
	return text.replace(/\s+/g, ' ').trim().toLowerCase()
}

function syncSidebarPillMarkers() {
	const labels = document.querySelectorAll(LABEL_SELECTOR)
	if (!labels.length) return

	document.querySelectorAll(`[${PILL_WRAPPER_ATTR}]`).forEach((element) => {
		element.removeAttribute(PILL_WRAPPER_ATTR)
	})

	for (const label of labels) {
		const normalized = normalizeLabel(label.textContent)
		const wrapper = label.closest('button')

		if (normalized === PILL_LABELS.recents || normalized === PILL_LABELS.gpts) {
			label.setAttribute(PILL_ATTR, normalized)
			wrapper?.setAttribute(PILL_WRAPPER_ATTR, normalized)
		} else {
			label.removeAttribute(PILL_ATTR)
		}
	}
}

function findMarkerRoot() {
	const label = document.querySelector(LABEL_SELECTOR)
	return label?.closest('nav, aside') || label?.parentElement || null
}

function attachMarkerRoot() {
	const nextRoot = findMarkerRoot()
	if (!nextRoot || nextRoot === markerRoot) return

	markerObserver?.disconnect()
	markerRoot = nextRoot
	markerObserver = new MutationObserver(syncOnNextFrame)
	markerObserver.observe(markerRoot, {
		characterData: true,
		childList: true,
		subtree: true,
	})
	syncOnNextFrame()
}

function guardMarkerRoot() {
	if (!markerRoot?.isConnected || !markerRoot.querySelector(LABEL_SELECTOR)) {
		markerObserver?.disconnect()
		markerObserver = null
		markerRoot = null
		attachMarkerRoot()
	}
}

function observeSidebarPillMarkers() {
	if (removeRootGuard || !document.body) return

	syncOnNextFrame = rafThrottle(syncSidebarPillMarkers)
	attachMarkerRoot()
	syncOnNextFrame()
	removeRootGuard = subscribeDomMutations(guardMarkerRoot)
}

function disconnectSidebarPillMarkers() {
	syncOnNextFrame?.cancel?.()
	markerObserver?.disconnect()
	markerObserver = null
	markerRoot = null
	removeRootGuard?.()
	removeRootGuard = null
	syncOnNextFrame = null
	document.querySelectorAll(`[${PILL_ATTR}], [${PILL_WRAPPER_ATTR}]`).forEach((element) => {
		element.removeAttribute(PILL_ATTR)
		element.removeAttribute(PILL_WRAPPER_ATTR)
	})
}

export {
	disconnectSidebarPillMarkers,
	observeSidebarPillMarkers,
	syncSidebarPillMarkers,
}
