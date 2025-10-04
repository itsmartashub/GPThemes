// notification.js
import { SELECTORS } from '../config/selectors'
import { $ } from '../../utils/dom'

const NOTIFICATION_TYPES = {
	INFO: 'info',
	SUCCESS: 'success',
	WARNING: 'warning',
	ERROR: 'error',
}

const DEFAULT_DURATION = 4000 // 4 seconds

// Create container once
let notificationContainer

function ensureContainer() {
	if (!notificationContainer) {
		notificationContainer = document.createElement('div')
		notificationContainer.className = SELECTORS.NOTIFY.CONTAINER
		document.body.appendChild(notificationContainer)
	}
	return notificationContainer
}

export function showNotification(
	message = 'ℹ️ Settings have been updated',
	type = NOTIFICATION_TYPES.INFO,
	duration = DEFAULT_DURATION
) {
	const container = ensureContainer()

	const notification = document.createElement('div')
	notification.className = `${SELECTORS.NOTIFY.ITEM} ${SELECTORS.NOTIFY.ITEM}--${type}`

	notification.innerHTML = `
		<div class="${SELECTORS.NOTIFY.ITEM}__content">${message}</div>
		<button class="${SELECTORS.NOTIFY.CLOSE_BTN}">&times;</button>
  `

	container.appendChild(notification)

	// Force reflow to enable CSS transition
	requestAnimationFrame(() => {
		notification.classList.add(SELECTORS.NOTIFY.SHOW_STATE)
	})

	// Close button handler
	$(`.${SELECTORS.NOTIFY.CLOSE_BTN}`, notification).addEventListener('click', () => {
		closeNotification(notification)
	})

	// Auto-close if duration is set
	if (duration > 0) {
		setTimeout(() => {
			closeNotification(notification)
		}, duration)
	}

	return {
		close: () => closeNotification(notification),
	}
}

function closeNotification(notification) {
	notification.classList.remove(SELECTORS.NOTIFY.SHOW_STATE)
	notification.addEventListener(
		'transitionend',
		() => {
			notification.remove()
			// Remove container if no notifications left
			if (notificationContainer && notificationContainer.children.length === 0) {
				notificationContainer.remove()
				notificationContainer = null
			}
		},
		{ once: true }
	)
}

// Export types for better autocomplete
export const Notify = {
	info: (msg = `ℹ️ Settings have been updated!`, duration) =>
		showNotification(msg, NOTIFICATION_TYPES.INFO, duration),
	success: (msg = '✅ Your changes were saved successfully.', duration) =>
		showNotification(msg, NOTIFICATION_TYPES.SUCCESS, duration),
	warning: (msg = `⚠️ Please check your input and try again.`, duration) =>
		showNotification(msg, NOTIFICATION_TYPES.WARNING, duration),
	error: (msg = `🚨 Yikes, something went wrong.`, duration) =>
		showNotification(msg, NOTIFICATION_TYPES.ERROR, duration),
}
