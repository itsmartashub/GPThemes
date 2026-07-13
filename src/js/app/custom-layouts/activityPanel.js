import { subscribeDomMutations } from '../../runtime/domMutations.js'

const PANEL_ATTR = 'data-gpth-activity-panel'
const CANDIDATE_SELECTOR =
	'aside, [role="complementary"], [data-testid*="flyout" i], [data-testid*="activity" i], [class*="flyout" i]'

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

function getMatches(root, selector) {
	if (!(root instanceof HTMLElement)) return []
	return [
		...(root.matches(selector) ? [root] : []),
		...root.querySelectorAll(selector),
	]
}

function markPanel(panel) {
	if (!panel.hasAttribute(PANEL_ATTR)) panel.setAttribute(PANEL_ATTR, '')
}

function scanRoot(root) {
	if (!(root instanceof HTMLElement)) return

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
	document.querySelectorAll(`[${PANEL_ATTR}]`).forEach((element) => {
		element.removeAttribute(PANEL_ATTR)
	})
}

export { cleanup, mount }
