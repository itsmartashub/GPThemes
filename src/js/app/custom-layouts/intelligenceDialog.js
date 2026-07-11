import { subscribeDomMutations } from '../../runtime/domMutations.js'

const DIALOG_ATTR = 'data-gpth-intelligence-dialog'
let active = false
let removeDomSubscription = null

function isIntelligenceDialog(dialog) {
	const text = dialog.textContent || ''
	if (!text.includes('Intelligence') || !text.includes('Model')) return false
	return ['Instant', 'Thinking', 'Pro'].filter((model) => text.includes(model)).length >= 2
}

function getDialogs(root) {
	if (!(root instanceof HTMLElement)) return []
	return [
		...(root.matches('[role="dialog"]') ? [root] : []),
		...root.querySelectorAll('[role="dialog"]'),
	]
}

function scanRoot(root) {
	for (const dialog of getDialogs(root)) {
		dialog.toggleAttribute(DIALOG_ATTR, isIntelligenceDialog(dialog))
	}
}

function scanDocument() {
	for (const dialog of document.querySelectorAll('[role="dialog"]')) {
		dialog.toggleAttribute(DIALOG_ATTR, isIntelligenceDialog(dialog))
	}
}

function onDomMutations(mutations) {
	for (const mutation of mutations) {
		const target =
			mutation.target instanceof HTMLElement
				? mutation.target
				: mutation.target.parentElement
		const containingDialog = target?.closest?.('[role="dialog"]')
		if (containingDialog) {
			containingDialog.toggleAttribute(DIALOG_ATTR, isIntelligenceDialog(containingDialog))
		}

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
	document.querySelectorAll(`[${DIALOG_ATTR}]`).forEach((dialog) => {
		dialog.removeAttribute(DIALOG_ATTR)
	})
}

export { cleanup, mount }
