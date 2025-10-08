import { getItem, setItem } from '../../utils/storage'
import { $ } from '../../utils/dom'
import { SELECTORS } from '../config/selectors'
import { icon_taller_height } from '../components/icons'
import { renderToggle } from '../components/renderToggles'
import { Notify } from '../components/renderNotify'

// Storage key for preferences
const DEFAULT_STATE = false
const STORAGE_KEY = 'customChatboxHeightState'
const ATTR_NAME = 'data-gpth-toggle-chatbox-height'

function enableCustomHeight() {
	document.documentElement.setAttribute(ATTR_NAME, '')
}
function disableCustomHeight() {
	document.documentElement.removeAttribute(ATTR_NAME)
}

function templateHTML() {
	return `
		<h4 class="${SELECTORS.SUBHEADING}">Other</h4>
		${renderToggle({
			id: SELECTORS?.CHATBOX?.TOGGLE_MAX_HEIGHT_ID,
			checked: DEFAULT_STATE,
			label: 'Expand Chatbox',
			subtitle:
				'Increase the height of the message box to fit more content. Warning: Always disabled on "Library" and  "New chat" initial page!',
			icon: icon_taller_height,
			card: true,
			className: '',
		})}
	`
}

async function saveState(state = false) {
	try {
		await setItem(STORAGE_KEY, state)
		return true
	} catch (error) {
		Notify.error('Failed to save Chatbox height preference')
		console.error('Failed to save Chatbox height  preference:', error)
		return false
	}
}

async function loadState() {
	try {
		const result = await getItem(STORAGE_KEY) // state: true | false | null

		return result || false
	} catch (error) {
		Notify.error('Failed to load Chatbox custom height preference')
		console.error('Failed to load Chatbox height preference:', error)
		return false
	}
}

// Apply CSS/attribute only (no DOM dependency)
function applyCss(state) {
	if (state) {
		enableCustomHeight()
	} else {
		disableCustomHeight()
	}
}

// Update input to reflect state (DOM required)
function updateInputs(state) {
	const input = document.getElementById(SELECTORS.CHATBOX.TOGGLE_MAX_HEIGHT_ID)
	if (input) input.checked = !!state
}

async function handleChange(e) {
	const target = e.target
	const chatbox = $(SELECTORS.CHATBOX.HEIGHT)

	if (!chatbox) {
		Notify.error('Chatbox not found on this page.')
		// Revert the toggle so UI stays truthful
		target.checked = !target.checked
		return
	}

	const isEnabled = target.checked
	applyCss(isEnabled)
	saveState(isEnabled)
}

// Setup toggle input listener (mount after DOM exists)
async function mount() {
	const input = document.getElementById(SELECTORS.CHATBOX.TOGGLE_MAX_HEIGHT_ID)
	if (!input) {
		Notify.warning('Missing chatbox toggle button')
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
// 	// Only apply saved state on load; do not require settings UI to be present
// 	const state = await loadState()
// 	applyCss(state)
// }

export { templateHTML as renderCustomChatboxHeight, mount }
