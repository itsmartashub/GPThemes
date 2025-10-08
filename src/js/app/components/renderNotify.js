// notification.js
import { SELECTORS } from '../config/selectors'

const NOTIFICATION_TYPES = {
	INFO: 'info',
	SUCCESS: 'success',
	WARNING: 'warning',
	ERROR: 'error',
}

const DEFAULT_DURATION = 4000
const MAX_NOTIFICATIONS = 5
const THROTTLE_DELAY = 300

// Persistent container & throttle tracking
let $notificationContainer = null
let lastNotificationTime = 0

// Create container once and keep it
function ensureContainer() {
	if (!$notificationContainer) {
		$notificationContainer = document.createElement('div')
		$notificationContainer.className = SELECTORS.NOTIFY.CONTAINER
		document.body.appendChild($notificationContainer)
	}
	return $notificationContainer
}

// Throttle rapid notifications
function shouldThrottle() {
	const now = Date.now()
	if (now - lastNotificationTime < THROTTLE_DELAY) {
		return true
	}
	lastNotificationTime = now
	return false
}

// Limit notification count
function enforceMaxNotifications(container) {
	const notifications = container.children
	while (notifications.length >= MAX_NOTIFICATIONS) {
		const oldest = notifications[notifications.length - 1]
		closeNotification(oldest, true)
	}
}

function showNotification(
	message = 'ℹ️ Settings have been updated',
	type = NOTIFICATION_TYPES.INFO,
	duration = DEFAULT_DURATION
) {
	// Throttle rapid-fire notifications
	if (shouldThrottle()) {
		return { close: () => {} }
	}

	const container = ensureContainer()
	enforceMaxNotifications(container)

	// Create notification with close button in one go
	const notification = document.createElement('div')
	notification.className = `${SELECTORS.NOTIFY.ITEM} ${SELECTORS.NOTIFY.ITEM}--${type}`

	const content = document.createElement('div')
	content.className = `${SELECTORS.NOTIFY.ITEM}__content`
	content.textContent = message

	const closeBtn = document.createElement('button')
	closeBtn.className = SELECTORS.NOTIFY.CLOSE_BTN
	closeBtn.textContent = '×'
	closeBtn.type = 'button'

	notification.appendChild(content)
	notification.appendChild(closeBtn)

	// Setup cleanup tracking
	let timeoutId = null
	let isClosed = false

	// Cleanup function - prevents memory leaks
	const cleanup = () => {
		if (isClosed) return
		isClosed = true

		if (timeoutId) {
			clearTimeout(timeoutId)
			timeoutId = null
		}
		closeBtn.removeEventListener('click', handleClose)
	}

	// Close handler
	const handleClose = () => {
		cleanup()
		closeNotification(notification)
	}

	// Single event listener (will be properly cleaned up)
	closeBtn.addEventListener('click', handleClose, { once: true })

	// Auto-close timeout
	if (duration > 0) {
		timeoutId = setTimeout(() => {
			cleanup()
			closeNotification(notification)
		}, duration)
	}

	// Add to DOM and trigger animation
	container.prepend(notification)

	// Batch animation trigger
	requestAnimationFrame(() => {
		notification.classList.add(SELECTORS.NOTIFY.SHOW_STATE)
	})

	return {
		close: handleClose,
	}
}

function closeNotification(notification, immediate = false) {
	if (!notification || !notification.parentNode) return

	if (immediate) {
		notification.remove()
		cleanupContainer()
		return
	}

	notification.classList.remove(SELECTORS.NOTIFY.SHOW_STATE)

	// Use transitionend with fallback timeout
	let handled = false

	const cleanup = () => {
		if (handled) return
		handled = true
		notification.remove()
		cleanupContainer()
	}

	notification.addEventListener('transitionend', cleanup, { once: true })

	// Fallback if transition doesn't fire
	setTimeout(cleanup, 500)
}

// Smart container cleanup - only if empty for a while
let cleanupTimer = null
function cleanupContainer() {
	if (!$notificationContainer) return

	if (cleanupTimer) clearTimeout(cleanupTimer)

	if ($notificationContainer.children.length === 0) {
		// Wait a bit before removing - likely more notifications coming
		cleanupTimer = setTimeout(() => {
			if ($notificationContainer && $notificationContainer.children.length === 0) {
				$notificationContainer.remove()
				$notificationContainer = null
			}
		}, 1000)
	}
}

// Unified API
const Notify = {
	info: (msg = 'ℹ️ Settings have been updated!', duration) =>
		showNotification(msg, NOTIFICATION_TYPES.INFO, duration),
	success: (msg = '✅ Your changes were saved successfully.', duration) =>
		showNotification(msg, NOTIFICATION_TYPES.SUCCESS, duration),
	warning: (msg = '⚠️ Please check your input and try again.', duration) =>
		showNotification(msg, NOTIFICATION_TYPES.WARNING, duration),
	error: (msg = '🚨 Yikes, something went wrong.', duration) =>
		showNotification(msg, NOTIFICATION_TYPES.ERROR, duration),
}

export { Notify, showNotification }
