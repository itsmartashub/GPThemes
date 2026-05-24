const PANEL_ATTR = 'data-gpth-suggested-prompts-panel'
const ROW_ATTR = 'data-gpth-suggested-prompt-row'
const BUTTON_ATTR = 'data-gpth-suggested-prompt-button'
const MAX_PANEL_DISTANCE = 320

let active = false
let observer = null
let scanFrame = null

function normalizeText(text) {
	return text?.trim().replace(/\s+/g, ' ') || ''
}

function isVisible(el) {
	const rect = el.getBoundingClientRect()
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

function hasEnoughHorizontalOverlap(rect, composerRect) {
	const composerLeft = composerRect.left - 96
	const composerRight = composerRect.right + 96
	const overlap = Math.min(rect.right, composerRight) - Math.max(rect.left, composerLeft)
	return overlap >= Math.min(rect.width, composerRect.width) * 0.35
}

function isSuggestionCandidate(el, composer) {
	if (!(el instanceof HTMLElement) || !isVisible(el)) return false
	if (el.closest('form, aside, nav, [role="dialog"], [data-testid="modal-settings"]'))
		return false

	const text = normalizeText(el.innerText || el.textContent)
	if (text.length < 8 || text.length > 180) return false

	const rect = el.getBoundingClientRect()
	const centerY = rect.top + rect.height / 2
	if (centerY < composer.rect.bottom - 8) return false
	if (centerY > composer.rect.bottom + MAX_PANEL_DISTANCE) return false
	if (rect.height > 96 || rect.width < 160) return false
	if (!hasEnoughHorizontalOverlap(rect, composer.rect)) return false

	return true
}

function countCandidatesInside(el, candidates) {
	let count = 0
	for (const candidate of candidates) {
		if (el.contains(candidate)) count++
	}
	return count
}

function containsComposer(el, composer) {
	return el.contains(composer.prompt) || (composer.form && el.contains(composer.form))
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
					best = { count, area, el: current }
				}
			}

			current = current.parentElement
		}
	}

	return best?.el || null
}

function clearMarkers() {
	document.querySelectorAll(`[${PANEL_ATTR}], [${ROW_ATTR}], [${BUTTON_ATTR}]`).forEach((el) => {
		el.removeAttribute(PANEL_ATTR)
		el.removeAttribute(ROW_ATTR)
		el.removeAttribute(BUTTON_ATTR)
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
		.filter((el) => isSuggestionCandidate(el, composer))
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
	if (scanFrame) window.cancelAnimationFrame(scanFrame)

	scanFrame = window.requestAnimationFrame(() => {
		scanFrame = null
		scan()
	})
}

function mount() {
	if (active || !document.body) return
	active = true

	scan()
	observer = new MutationObserver(scheduleScan)
	observer.observe(document.body, {
		childList: true,
		subtree: true,
		characterData: true,
	})

	document.addEventListener('input', scheduleScan, true)
	document.addEventListener('keyup', scheduleScan, true)
	return cleanup
}

function cleanup() {
	if (scanFrame) {
		window.cancelAnimationFrame(scanFrame)
		scanFrame = null
	}
	observer?.disconnect()
	observer = null
	document.removeEventListener('input', scheduleScan, true)
	document.removeEventListener('keyup', scheduleScan, true)
	clearMarkers()
	active = false
}

export { cleanup, mount }
