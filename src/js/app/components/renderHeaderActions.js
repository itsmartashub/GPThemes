import { SELECTORS } from '../config/selectors.js'

// One small round action for the settings header: href renders a link, id renders a button
export function renderHeaderAction({ href, id, label, icon }) {
	const sharedAttrs = `class="${SELECTORS.SETTINGS.ACTION_BTN}" title="${label}" aria-label="${label}"`

	if (href) {
		return `<a ${sharedAttrs} href="${href}" target="_blank" rel="noopener noreferrer">${icon}</a>`
	}

	return `<button ${sharedAttrs} id="${id}" type="button">${icon}</button>`
}
