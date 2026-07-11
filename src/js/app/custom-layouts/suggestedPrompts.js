import { subscribeDomMutations } from '../../runtime/domMutations.js'
import { subscribeRouteChanges } from '../../runtime/routes.js'

const PANEL_ATTR = 'data-gpth-suggested-prompts-panel'
const ROW_ATTR = 'data-gpth-suggested-prompt-row'
const BUTTON_ATTR = 'data-gpth-suggested-prompt-button'
const MAX_PANEL_DISTANCE = 320

let active = false
let composerRoot = null
let composerObserver = null
let scanFrame = null
let removeDomSubscription = null
let removeRouteSubscription = null

function normalizeText(text) {
	return text?.trim().replace(/\s+/g, ' ') || ''
}

function isVisible(element) {
	const rect = element.getBoundingClientRect()
	return rect.width > 0 && rect.height > 0
}

function getPromptText(prompt) {
	return normalizeText(prompt.value || prompt.innerText || prompt.textContent)
}

function getComposerContext() {
	const prompt = document.querySelector('#prompt-textarea')
	if (!(prompt instanceof HTMLElement)) return null

	const promptText = getPromptText(prompt)
	if (promptText.length < 2 || /^[#/@]/.test(promptText)) return null

	const form = prompt.closest('form')
	const anchor = form || prompt
	const rect = anchor.getBoundingClientRect()
	if (rect.width <= 0 || rect.height <= 0) return null

	return { form, prompt, rect }
}

function getComposerRoot() {
	const prompt = document.querySelector('#prompt-textarea')
	if (!(prompt instanceof HTMLElement)) return null
	return prompt.closest('form')?.parentElement || prompt.parentElement
}

function hasEnoughHorizontalOverlap(rect, composerRect) {
	const composerLeft = composerRect.left - 96
	const composerRight = composerRect.right + 96
	const overlap = Math.min(rect.right, composerRight) - Math.max(rect.left, composerLeft)
	return overlap >= Math.min(rect.width, composerRect.width) * 0.35
}

function isSuggestionCandidate(element, composer) {
	if (!(element instanceof HTMLElement) || !isVisible(element)) return false
	if (element.closest('form, aside, nav, [role="dialog"], [data-testid="modal-settings"]')) {
		return false
	}

	const text = normalizeText(element.innerText || element.textContent)
	if (text.length < 8 || text.length > 180) return false

	const rect = element.getBoundingClientRect()
	const centerY = rect.top + rect.height / 2
	if (centerY < composer.rect.bottom - 8) return false
	if (centerY > composer.rect.bottom + MAX_PANEL_DISTANCE) return false
	if (rect.height > 96 || rect.width < 160) return false
	if (!hasEnoughHorizontalOverlap(rect, composer.rect)) return false

	return true
}

function countCandidatesInside(element, candidates) {
	let count = 0
	for (const candidate of candidates) {
		if (element.contains(candidate)) count++
	}
	return count
}

function containsComposer(element, composer) {
	return element.contains(composer.prompt) || (composer.form && element.contains(composer.form))
}

function findPanel(candidates, composer) {
	const minCount = Math.min(2, candidates.length)
	let best = null

	for (const candidate of candidates) {
		let current = candidate.parentElement

		for (let depth = 0; depth < 8 && current; depth++) {
			if (current.matches('main, body, html, form')) break
			if (containsComposer(current, composer)) break

			const count = countCandidatesInside(current, candidates)
			if (count >= minCount) {
				const rect = current.getBoundingClientRect()
				const area = rect.width * rect.height

				if (!best || count > best.count || (count === best.count && area < best.area)) {
					best = { count, area, element: current }
				}
			}

			current = current.parentElement
		}
	}

	return best?.element || null
}

function clearMarkers() {
	document.querySelectorAll(`[${PANEL_ATTR}], [${ROW_ATTR}], [${BUTTON_ATTR}]`).forEach((element) => {
		element.removeAttribute(PANEL_ATTR)
		element.removeAttribute(ROW_ATTR)
		element.removeAttribute(BUTTON_ATTR)
	})
}

function markPanelStack(panel, composer) {
	let current = panel

	for (let depth = 0; depth < 5 && current; depth++) {
		if (current.matches('main, body, html, form')) break
		if (containsComposer(current, composer)) break

		const rect = current.getBoundingClientRect()
		const isNearComposer =
			rect.bottom >= composer.rect.bottom - 16 &&
			rect.top <= composer.rect.bottom + MAX_PANEL_DISTANCE

		if (!isNearComposer) break

		current.setAttribute(PANEL_ATTR, '')
		current = current.parentElement
	}
}

function scan() {
	const composer = getComposerContext()
	clearMarkers()
	if (!composer) return

	const root = composer.form?.parentElement || document.querySelector('main') || document.body
	const candidates = [...root.querySelectorAll('button, [role="button"], [role="option"]')]
		.filter((element) => isSuggestionCandidate(element, composer))
		.slice(0, 8)

	if (candidates.length < 2) return

	const panel = findPanel(candidates, composer)
	if (!panel) return

	markPanelStack(panel, composer)

	for (const button of candidates) {
		button.setAttribute(BUTTON_ATTR, '')

		const row = button.closest('li, [role="option"], [role="presentation"], div')
		if (row instanceof HTMLElement && panel.contains(row)) {
			row.setAttribute(ROW_ATTR, '')
		}
	}
}

function scheduleScan() {
	if (scanFrame) return

	scanFrame = window.requestAnimationFrame(() => {
		scanFrame = null
		scan()
	})
}

function attachComposerObserver() {
	const nextRoot = getComposerRoot()
	if (!nextRoot || nextRoot === composerRoot) return

	composerObserver?.disconnect()
	composerRoot = nextRoot
	composerObserver = new MutationObserver(scheduleScan)
	composerObserver.observe(composerRoot, {
		characterData: true,
		childList: true,
		subtree: true,
	})
	scheduleScan()
}

function ensureComposerObserver() {
	if (!composerRoot?.isConnected) {
		composerObserver?.disconnect()
		composerObserver = null
		composerRoot = null
		attachComposerObserver()
	}
}

function onRouteChange() {
	composerObserver?.disconnect()
	composerObserver = null
	composerRoot = null
	attachComposerObserver()
	scheduleScan()
}

function mount() {
	if (active || !document.body) return cleanup
	active = true

	attachComposerObserver()
	scan()
	removeDomSubscription = subscribeDomMutations(ensureComposerObserver)
	removeRouteSubscription = subscribeRouteChanges(onRouteChange, { emitCurrent: false })
	document.addEventListener('input', scheduleScan, true)
	return cleanup
}

function cleanup() {
	if (scanFrame) {
		window.cancelAnimationFrame(scanFrame)
		scanFrame = null
	}

	composerObserver?.disconnect()
	composerObserver = null
	composerRoot = null
	removeDomSubscription?.()
	removeDomSubscription = null
	removeRouteSubscription?.()
	removeRouteSubscription = null
	document.removeEventListener('input', scheduleScan, true)
	clearMarkers()
	active = false
}

export { cleanup, mount }
