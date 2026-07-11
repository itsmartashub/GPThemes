import { subscribeDomMutations } from '../../runtime/domMutations.js'

const PANEL_ATTR = 'data-gpth-activity-panel'
const SURFACE_ATTR = 'data-gpth-activity-surface'
const CANDIDATE_SELECTOR =
	'aside, [role="complementary"], [data-testid*="flyout" i], [data-testid*="activity" i], [class*="flyout" i]'
const SURFACE_SELECTOR = [
	'[class*="bg-neutral-"]',
	'[class*="bg-gray-"]',
	'[class*="bg-white"]',
	'[class*="bg-[#f"]',
	'[class*="bg-[#e"]',
	'[class*="bg-[#d"]',
	'[class*="bg-[#F"]',
	'[class*="bg-[#E"]',
	'[class*="bg-[#D"]',
	'[style*="background"]',
].join(',')

let active = false
let removeDomSubscription = null

function isActivityPanel(element) {
	if (element.matches('aside, [role="complementary"]')) return true
	if (element.getAttribute('data-testid')?.match(/flyout|activity/i)) return true
	return !!(
		element.className?.match?.(/flyout|activity|sidebar/i) &&
		!element.matches('#stage-slideover-sidebar, #stage-popover-sidebar, nav')
	)
}

function isLightBackground(element) {
	const background = window.getComputedStyle(element).backgroundColor
	if (!background || background === 'transparent' || background === 'rgba(0, 0, 0, 0)') {
		return false
	}

	const match = background.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
	if (!match) return false

	const [, red, green, blue] = match.map(Number)
	const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255
	return luminance > 0.7
}

function getMatches(root, selector) {
	if (!(root instanceof HTMLElement)) return []
	return [
		...(root.matches(selector) ? [root] : []),
		...root.querySelectorAll(selector),
	]
}

function markChildSurfaces(panel, root = panel) {
	for (const element of getMatches(root, SURFACE_SELECTOR)) {
		if (panel.contains(element) && isLightBackground(element)) {
			element.setAttribute(SURFACE_ATTR, '')
		}
	}
}

function markPanel(panel) {
	if (!panel.hasAttribute(PANEL_ATTR)) panel.setAttribute(PANEL_ATTR, '')
	markChildSurfaces(panel)
}

function scanRoot(root) {
	if (!(root instanceof HTMLElement)) return

	const containingPanel = root.closest(`[${PANEL_ATTR}]`)
	if (containingPanel) markChildSurfaces(containingPanel, root)

	for (const element of getMatches(root, CANDIDATE_SELECTOR)) {
		if (isActivityPanel(element)) markPanel(element)
	}
}

function scanDocument() {
	const root = document.querySelector('main') || document.body
	if (root instanceof HTMLElement) scanRoot(root)
}

function onDomMutations(mutations) {
	for (const mutation of mutations) {
		for (const node of mutation.addedNodes) {
			if (node instanceof HTMLElement) scanRoot(node)
		}
	}
}

function mount() {
	if (active) return cleanup
	active = true

	scanDocument()
	removeDomSubscription = subscribeDomMutations(onDomMutations)
	return cleanup
}

function cleanup() {
	removeDomSubscription?.()
	removeDomSubscription = null
	active = false
	document.querySelectorAll(`[${PANEL_ATTR}], [${SURFACE_ATTR}]`).forEach((element) => {
		element.removeAttribute(PANEL_ATTR)
		element.removeAttribute(SURFACE_ATTR)
	})
}

export { cleanup, mount }
