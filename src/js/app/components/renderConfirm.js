// Uses the native <dialog> element for correct focus trapping and Escape handling.
import { SELECTORS } from '../config/selectors.js'

/*
Shows a modal confirm dialog and returns a Promise<boolean>
Resolves true when the user confirms, false when they cancel or press Escape

Usage:
  const ok = await showConfirm({ title: 'Reset all?', message: '...' })
  if (ok) doTheThing() */
export function showConfirm({
	title,
	message,
	confirmLabel = 'Confirm',
	cancelLabel = 'Cancel',
	danger = false,
} = {}) {
	return new Promise((resolve) => {
		const dialog = buildDialog({ title, message, confirmLabel, cancelLabel, danger })
		document.body.appendChild(dialog)
		dialog.showModal()

		// Focus the cancel btn by default
		dialog.querySelector(`.${SELECTORS.CONFIRM.CANCEL_BTN}`)?.focus()

		function finish(result) {
			dialog.addEventListener('transitionend', () => dialog.remove(), { once: true })
			dialog.classList.remove(SELECTORS.CONFIRM.OPEN_STATE)

			// Fallback removal if the transition never fires (eg reduced-motion)
			setTimeout(() => dialog.remove(), 320)

			resolve(result)
		}

		dialog
			.querySelector(`.${SELECTORS.CONFIRM.CONFIRM_BTN}`)
			.addEventListener('click', () => finish(true), { once: true })
		dialog
			.querySelector(`.${SELECTORS.CONFIRM.CANCEL_BTN}`)
			.addEventListener('click', () => finish(false), { once: true })

		// Native <dialog> fires 'cancel' on Escape before closing. Ths prevent the default close so the animation runs
		dialog.addEventListener(
			'cancel',
			(e) => {
				e.preventDefault()
				finish(false)
			},
			{ once: true },
		)

		// Trigger open animation on next frame
		requestAnimationFrame(() => dialog.classList.add(SELECTORS.CONFIRM.OPEN_STATE))
	})
}

function buildDialog({ title, message, confirmLabel, cancelLabel, danger }) {
	const dialog = document.createElement('dialog')
	dialog.className = SELECTORS.CONFIRM.ROOT

	dialog.innerHTML = `
		<div class="${SELECTORS.CONFIRM.PANEL}">
			<h3 class="${SELECTORS.CONFIRM.TITLE}">${title}</h3>
			<p class="${SELECTORS.CONFIRM.MESSAGE}">${message}</p>
			<div class="${SELECTORS.CONFIRM.ACTIONS}">
				<button class="${SELECTORS.CONFIRM.CANCEL_BTN}" type="button">${cancelLabel}</button>
				<button class="${SELECTORS.CONFIRM.CONFIRM_BTN} ${danger ? SELECTORS.CONFIRM.DANGER_MOD : ''}" type="button">${confirmLabel}</button>
			</div>
		</div>`

	return dialog
}
