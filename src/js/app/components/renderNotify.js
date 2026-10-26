import { SELECTORS } from '../config/selectors'

const NOTIF_TYPES = {
	INFO: 'info',
	SUCCESS: 'success',
	WARNING: 'warning',
	ERROR: 'error',
}

const DEFAULT_DURATION = 4000
const MAX_NOTIF = 4
const THROTTLE_DELAY = 300

// Persistent container & throttle tracking
let $notifContainer = null
let lastNotifTime = 0

// Create container once and keep it
function ensureContainer() {
	if (!$notifContainer) {
		$notifContainer = document.createElement('div')
		$notifContainer.className = SELECTORS.NOTIFY.CONTAINER
		$notifContainer.setAttribute('role', 'status')
		$notifContainer.setAttribute('aria-live', 'polite')
		$notifContainer.setAttribute('aria-atomic', 'false')
		document.body.appendChild($notifContainer)
	}
	return $notifContainer
}

// Throttle rapid notif
function shouldThrottle() {
	const now = Date.now()

	if (now - lastNotifTime < THROTTLE_DELAY) return true

	lastNotifTime = now
	return false
}

// Recompute the stacked (deck-of-cards) layout for all live notifications. Newest notification stays on top at full size, older ones shrink and step down
function updateStack(container) {
	if (!container) return

	const cards = Array.from(container.children).filter((card) => !card.dataset.exiting)

	cards.forEach((card, i) => {
		card.style.setProperty('--i', i)
	})
}

// Limit notif count
function enforceMaxNotif(container) {
	const notifications = container.children
	while (notifications.length >= MAX_NOTIF) {
		const oldest = notifications[notifications.length - 1]
		closeNotification(oldest, true)
	}
}

function showNotification(
	message = 'i Settings have been updated',
	type = NOTIF_TYPES.INFO,
	duration = DEFAULT_DURATION,
) {
	// Throttle rapid-fire notifs
	if (shouldThrottle()) {
		return { close: () => {} }
	}

	const container = ensureContainer()
	enforceMaxNotif(container)

	// Create notif with close btn in one go
	const notification = document.createElement('div')
	notification.className = `${SELECTORS.NOTIFY.ITEM} ${SELECTORS.NOTIFY.ITEM}--${type}`

	const content = document.createElement('div')
	content.className = `${SELECTORS.NOTIFY.ITEM}__content`
	content.textContent = message

	const closeBtn = document.createElement('button')
	closeBtn.className = SELECTORS.NOTIFY.CLOSE_BTN
	closeBtn.textContent = '×'
	closeBtn.type = 'button'
	closeBtn.setAttribute('aria-label', 'Close notification')

	notification.appendChild(content)
	notification.appendChild(closeBtn)

	// Setup cleanup tracking
	let timeoutId = null
	let isClosed = false

	// Cleanup fn - prevents mem leaks
	const cleanup = () => {
		if (isClosed) return
		isClosed = true

		if (timeoutId) {
			clearTimeout(timeoutId)
			timeoutId = null
		}
		closeBtn.removeEventListener('click', onClose)
	}

	// Close handler
	const onClose = () => {
		cleanup()
		closeNotification(notification)
	}

	// Single event listener (will be properly cleaned up)
	closeBtn.addEventListener('click', onClose, { once: true })

	// Auto-close timeout
	if (duration > 0) {
		timeoutId = setTimeout(() => {
			cleanup()
			closeNotification(notification)
		}, duration)
	}

	// Entrance start state (off-screen top); cleared next frame so CSS stack animates in
	notification.style.transform = 'translateY(-120%) scale(1)'
	notification.style.opacity = '0'

	// Add to DOM
	container.prepend(notification)

	requestAnimationFrame(() => {
		notification.getBoundingClientRect()
		requestAnimationFrame(() => {
			notification.style.removeProperty('transform')
			notification.style.removeProperty('opacity')
			updateStack(container)
		})
	})

	return {
		close: onClose,
	}
}

function closeNotification(notification, immediate = false) {
	if (!notification?.parentNode) return

	const container = notification.parentNode

	if (immediate) {
		notification.remove()
		updateStack(container)
		cleanupContainer()
		return
	}

	// Shift remaining cards up while this one exits
	notification.dataset.exiting = '1'
	updateStack(container)

	notification.style.transition = 'transform 0.24s ease, opacity 0.24s ease'
	notification.style.transform = 'translateY(-120%) scale(0.92) rotate(0deg)'
	notification.style.opacity = '0'

	// Use transitionend with fallback timeout
	let handled = false

	const cleanup = () => {
		if (handled) return
		handled = true
		delete notification.dataset.exiting
		notification.remove()
		updateStack(container)
		cleanupContainer()
	}

	notification.addEventListener('transitionend', cleanup, { once: true })

	// Fallback if transition doesnt fire
	setTimeout(cleanup, 320)
}

// Smart container cleanup - only if empty for a while
let cleanupTimer = null
function cleanupContainer() {
	if (!$notifContainer) return

	if (cleanupTimer) clearTimeout(cleanupTimer)

	if ($notifContainer.children.length === 0) {
		// Wait a bit before removing - likely more notifs coming
		cleanupTimer = setTimeout(() => {
			if ($notifContainer && $notifContainer.children.length === 0) {
				$notifContainer.remove()
				$notifContainer = null
			}
		}, 1000)
	}
}

// Unified API
const Notify = {
	info: (msg = 'i Settings have been updated!', duration) =>
		showNotification(msg, NOTIF_TYPES.INFO, duration),
	success: (msg = '✅ Your changes were saved successfully.', duration) =>
		showNotification(msg, NOTIF_TYPES.SUCCESS, duration),
	warning: (msg = '! Please check your input and try again.', duration) =>
		showNotification(msg, NOTIF_TYPES.WARNING, duration),
	error: (msg = '🚨 Yikes, something went wrong.', duration) =>
		showNotification(msg, NOTIF_TYPES.ERROR, duration),
}

export { Notify, showNotification }
