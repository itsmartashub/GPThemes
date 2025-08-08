import { SELECTORS } from '../config'

// Auto-create container once
let notifyContainer

function ensureContainer() {
	if (!notifyContainer) {
		notifyContainer = document.createElement('div')
		notifyContainer.className = `${SELECTORS.NOTIFY.CONTAINER}`
		document.body.appendChild(notifyContainer)
	}
}

export function notify(msg, type = 'info', duration = 3000) {
	ensureContainer()

	const note = document.createElement('div')
	note.className = `${SELECTORS.NOTIFY.CONTAINER} ${SELECTORS.NOTIFY}--${type}`
	note.textContent = msg

	notifyContainer.appendChild(note)

	requestAnimationFrame(() => {
		note.classList.add(SELECTORS.NOTIFY.SHOW_STATE)
	})

	setTimeout(() => {
		note.classList.remove(SELECTORS.NOTIFY.SHOW_STATE)
		note.addEventListener(
			'transitionend',
			() => {
				note.remove()
			},
			{ once: true }
		)
	}, duration)
}
