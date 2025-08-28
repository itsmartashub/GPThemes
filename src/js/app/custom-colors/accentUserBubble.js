import { renderToggle } from '../components/renderToggles.js'
import { Notify } from '../components/renderNotify.js'
import { q } from '../../utils/dom.js'
import browser from 'webextension-polyfill'
import { setCssVars } from '../../utils/setCssVar.js'
import { SELECTORS } from '../config/selectors.js'
import { icon_accent } from '../components/icons.js'

const STORAGE_KEY = 'customUserBubbleAccentState'
const CSS_VAR = '--gpthUserBubbleAccent'

// Render toggle HTML
function generateHTML() {
	return renderToggle({
		id: SELECTORS.CHATS.TOGGLE_USER_BUBBLE_ACCENT_ID,
		checked: false,
		label: 'Accent User Bubble',
		subtitle: 'Make the user bubble fully accented for higher contrast',
		icon: icon_accent,
		card: true,
	})
}

// Apply toggle by setting CSS var to "1" (enabled) or "0" (disabled)
function applyAccentToggle(enabled) {
	setCssVars({ [CSS_VAR.replace(/^--/, '')]: enabled ? '1' : '0' })
}

// Load saved state from storage
async function loadState() {
	try {
		const result = await browser.storage.sync.get(STORAGE_KEY)
		return !!result[STORAGE_KEY]
	} catch (error) {
		handleError('Failed to load user accent bubble preference', error)
		return false
	}
}

// Save state to storage
async function saveState(state = false) {
	try {
		await browser.storage.sync.set({ [STORAGE_KEY]: state })
		return true
	} catch (error) {
		handleError('Failed to save user accent bubble preference', error)
		return false
	}
}

// Setup toggle input listener
async function setupListeners() {
	const input = document.getElementById(SELECTORS.CHATS.TOGGLE_USER_BUBBLE_ACCENT_ID)
	if (!input) return

	// Sync with saved state
	const state = await loadState()
	input.checked = state
	applyAccentToggle(state)

	input.addEventListener('change', async ({ target }) => {
		const userBubble = q(`.${SELECTORS.CHATS.USER}`) // adjust selector to your chat bubbles

		if (!userBubble) {
			handleError('User bubble not found on this page.')
			target.checked = !target.checked
			return
		}

		const isEnabled = target.checked
		applyAccentToggle(isEnabled)
		saveState(isEnabled)
	})
}

// Initialize toggle on page load
async function init() {
	const state = await loadState()
	applyAccentToggle(state)
}

// Error handler
function handleError(message, error = null) {
	Notify.error(message)
	if (error) console.error(`${message}:`, error)
}

export { generateHTML as renderUserAccentBgToggle, init, setupListeners as handleUserAccentBgListeners }
