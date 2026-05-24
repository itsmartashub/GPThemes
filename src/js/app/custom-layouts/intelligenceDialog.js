/**
 * Minimal tagger for the Intelligence / Configure dialog.
 * Only identifies the dialog and stamps data-gpth-intelligence-dialog.
 * NO selection management — native ChatGPT handles that via checkmark + DOM classes.
 */

let active = false
let observer = null

function isIntelligenceDialog(dialog) {
	const text = dialog.textContent || ''
	if (!text.includes('Intelligence') || !text.includes('Model')) return false
	return ['Instant', 'Thinking', 'Pro'].filter((m) => text.includes(m)).length >= 2
}

function scan() {
	for (const dialog of document.querySelectorAll('[role="dialog"]')) {
		if (isIntelligenceDialog(dialog)) {
			dialog.setAttribute('data-gpth-intelligence-dialog', '')
		} else if (
			dialog.hasAttribute('data-gpth-intelligence-dialog') &&
			!dialog.textContent?.includes('Intelligence')
		) {
			dialog.removeAttribute('data-gpth-intelligence-dialog')
		}
	}
}

function mount() {
	if (active) return
	active = true
	scan()
	observer = new MutationObserver(scan)
	observer.observe(document.body, { childList: true, subtree: true })
	return cleanup
}

function cleanup() {
	observer?.disconnect()
	observer = null
	active = false
	document.querySelectorAll('[data-gpth-intelligence-dialog]').forEach((dialog) => {
		dialog.removeAttribute('data-gpth-intelligence-dialog')
	})
}

export { cleanup, mount }
