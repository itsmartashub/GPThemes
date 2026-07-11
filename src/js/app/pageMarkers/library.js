import { subscribeDomMutations } from '../../runtime/domMutations.js'
import { subscribeRouteChanges } from '../../runtime/routes.js'

const PAGE_ATTR = 'data-gpth-page-library'
const HEADER_ATTR = 'data-gpth-library-header-control'
const UPLOAD_ATTR = 'data-gpth-library-upload-button'
const HEADER_LABEL_PATTERN = /^(Name|Modified|Size)\b/
const HEADER_SELECTOR = [
	'button',
	'[role="button"]',
	'[aria-sort]',
	'[role="columnheader"]',
	'th',
	'span',
	'div',
	'label',
	'p',
].join(',')

let activeMain = null
let mainObserver = null
let scanFrame = null
let removeRouteSubscription = null
let removeMainGuard = null

function normalizeLabel(text) {
	return text?.trim().replace(/\s+/g, ' ') || ''
}

function markHeaderNode(element) {
	if (!(element instanceof HTMLElement)) return

	const target =
		element.closest('button, [role="button"], [aria-sort], th, [role="columnheader"]') ||
		element

	target.setAttribute(HEADER_ATTR, '')
	element.setAttribute(HEADER_ATTR, '')

	let current = target
	for (let depth = 0; depth < 6; depth++) {
		const parent = current.parentElement
		if (!parent || parent.matches('main')) break
		if (normalizeLabel(parent.textContent).length > 90) break

		parent.setAttribute(HEADER_ATTR, '')
		current = parent
	}
}

function clearMarkers(root = document) {
	root.querySelectorAll?.(`[${HEADER_ATTR}], [${UPLOAD_ATTR}]`).forEach((element) => {
		element.removeAttribute(HEADER_ATTR)
		element.removeAttribute(UPLOAD_ATTR)
	})
}

function markUploadButton(main) {
	main.querySelectorAll('button, a, [role="button"]').forEach((element) => {
		if (normalizeLabel(element.textContent) === 'Upload') {
			element.setAttribute(UPLOAD_ATTR, '')
		}
	})
}

function markHeaderControls(main) {
	clearMarkers(main)

	main.querySelectorAll(HEADER_SELECTOR).forEach((element) => {
		if (HEADER_LABEL_PATTERN.test(normalizeLabel(element.textContent))) {
			markHeaderNode(element)
		}
	})

	const textWalker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
		acceptNode(node) {
			return HEADER_LABEL_PATTERN.test(normalizeLabel(node.textContent))
				? NodeFilter.FILTER_ACCEPT
				: NodeFilter.FILTER_REJECT
		},
	})

	let node = textWalker.nextNode()
	while (node) {
		markHeaderNode(node.parentElement)
		node = textWalker.nextNode()
	}
}

function scan() {
	if (!activeMain?.isConnected) return
	markHeaderControls(activeMain)
	markUploadButton(activeMain)
}

function scheduleScan() {
	if (scanFrame) return

	scanFrame = window.requestAnimationFrame(() => {
		scanFrame = null
		scan()
	})
}

function detachMain() {
	if (scanFrame) {
		window.cancelAnimationFrame(scanFrame)
		scanFrame = null
	}

	mainObserver?.disconnect()
	mainObserver = null
	if (activeMain) clearMarkers(activeMain)
	activeMain = null
}

function attachMain() {
	const main = document.querySelector('main')
	if (!(main instanceof HTMLElement) || main === activeMain) return

	detachMain()
	activeMain = main
	mainObserver = new MutationObserver(scheduleScan)
	mainObserver.observe(main, {
		characterData: true,
		childList: true,
		subtree: true,
	})
	scan()
}

function isLibraryPath(path) {
	return path.split('/').filter(Boolean)[0] === 'library'
}

function onRouteChange({ path }) {
	const isLibrary = isLibraryPath(path)
	document.documentElement.toggleAttribute(PAGE_ATTR, isLibrary)

	if (isLibrary) {
		attachMain()
	} else {
		detachMain()
	}
}

function guardLibraryMain() {
	if (!document.documentElement.hasAttribute(PAGE_ATTR)) return
	if (!activeMain?.isConnected) attachMain()
}

function mount() {
	if (removeRouteSubscription) return cleanup

	removeRouteSubscription = subscribeRouteChanges(onRouteChange)
	removeMainGuard = subscribeDomMutations(guardLibraryMain)
	return cleanup
}

function cleanup() {
	removeRouteSubscription?.()
	removeRouteSubscription = null
	removeMainGuard?.()
	removeMainGuard = null
	detachMain()
	document.documentElement.removeAttribute(PAGE_ATTR)
}

export { cleanup, mount }
