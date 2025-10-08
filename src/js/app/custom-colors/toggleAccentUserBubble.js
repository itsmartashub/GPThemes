import { getItem, setItem } from '../../utils/storage.js'
import { $, setVar } from '../../utils/dom.js'
import { SELECTORS } from '../config/selectors.js'
import { icon_accent } from '../components/icons.js'
import { renderToggle } from '../components/renderToggles.js'
import { Notify } from '../components/renderNotify.js'

const DEFAULT_STATE = false
const STORAGE_KEY = 'customUserBubbleAccentState'
const CSS_VAR = '--gpthUserBubbleAccent'

// Render toggle HTML
function templateHTML() {
	return renderToggle({
		id: SELECTORS.CHATS.TOGGLE_USER_BUBBLE_ACCENT_ID,
		checked: DEFAULT_STATE,
		label: 'Accent User Bubble',
		subtitle: 'Make the user bubble fully accented for higher contrast',
		icon: icon_accent,
		card: true,
	})
}

// Load saved state from storage
async function loadState() {
	try {
		const result = await getItem(STORAGE_KEY) // boolean: true | false | null

		return !!result
	} catch (error) {
		handleError('Failed to load user accent bubble preference', error)
		return false
	}
}

// Save state to storage
async function saveState(state = DEFAULT_STATE) {
	try {
		await setItem(STORAGE_KEY, state)
		return true
	} catch (error) {
		handleError('Failed to save user accent bubble preference', error)
		return false
	}
}

// Apply CSS only (no DOM dependency)
function applyCss(enabled) {
	setVar(CSS_VAR, enabled ? '1' : '0')
}

// Update input to reflect state (DOM required)
function updateInputs(enabled) {
	const input = document.getElementById(SELECTORS.CHATS.TOGGLE_USER_BUBBLE_ACCENT_ID)
	if (input) input.checked = !!enabled
}

// Error handler
function handleError(message, error = null) {
	Notify.error(message)
	if (error) console.error(`${message}:`, error)
}

async function handleChange({ target }) {
	const userBubble = $(`.${SELECTORS.CHATS.USER}`)

	if (!userBubble) {
		handleError('User bubble not found on this page.')
		target.checked = !target.checked
		return
	}

	const isEnabled = target.checked
	applyCss(isEnabled)
	saveState(isEnabled)
}

// Setup toggle input listener (mount after DOM exists)
async function mount() {
	const input = document.getElementById(SELECTORS.CHATS.TOGGLE_USER_BUBBLE_ACCENT_ID)
	if (!input) {
		console.warning(`Element with ID ${SELECTORS.CHATS.TOGGLE_USER_BUBBLE_ACCENT_ID} not found`)
		return
	}

	// Sync with saved state
	const state = await loadState()
	updateInputs(state)
	applyCss(state)
	input.addEventListener('change', handleChange)
}

// // Initialize toggle on page load
// async function init() {
// 	const state = await loadState()
// 	applyCss(state)
// }

// export { templateHTML as renderUserAccentBgToggle, init, mount }
export { templateHTML as renderUserAccentBgToggle, mount }
