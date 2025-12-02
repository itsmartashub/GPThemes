import { getItem, setItem } from '../../utils/storage'
import { $, ROOT_HTML } from '../../utils/dom'
import { SELECTORS } from '../config/selectors'
import { SK_TOGGLE_CHATBOX_HEIGHT } from '../config/consts-storage'
import { ATTR_CHATBOX_HEIGHT } from '../config/consts-attr'
import { renderToggle } from '../components/renderToggles'
import { Notify } from '../components/renderNotify'
import { icon_taller_height } from '../components/icons'

// =====================================================
// STATE
// =====================================================
const STORAGE_KEY = SK_TOGGLE_CHATBOX_HEIGHT
const DATA_ATTR = ATTR_CHATBOX_HEIGHT
const DEFAULT_STATE = false

// =====================================================
// TEMPLATE
// =====================================================
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
		})}
	`
}
// =====================================================
// STORAGE
// =====================================================
// Save state to storage
async function saveState(state = DEFAULT_STATE) {
	try {
		await setItem(STORAGE_KEY, state)
		state ? Notify.success('Chatbox height preference enabled') : Notify.info('Chatbox height preference disabled')
		return true
	} catch (error) {
		Notify.error('Failed to save Chatbox height preference')
		console.error('Failed to save Chatbox height  preference:', error)
		return false
	}
}
// Load saved state from storage
async function loadState() {
	try {
		const result = await getItem(STORAGE_KEY) // state: true | false | null

		return !!result
	} catch (error) {
		Notify.error('Failed to load Chatbox custom height preference')
		console.error('Failed to load Chatbox height preference:', error)
		return false
	}
}

// =====================================================
// UPDATE CSS/DOM
// =====================================================

// Apply CSS/attribute only (no DOM dependency)
function updateDataAttr(state) {
	if (state) {
		// When toggle is ON, set the data attr
		ROOT_HTML.setAttribute(DATA_ATTR, '')
	} else {
		// When toggle is OFF, remove the data attr
		ROOT_HTML.removeAttribute(DATA_ATTR)
	}

	// When toggle is ON, set the data attr. When toggle is OFF, remove the data attr
	// state ? ROOT_HTML.setAttribute(DATA_ATTR, '') : ROOT_HTML.removeAttribute(DATA_ATTR)
}

// Update input to reflect state (DOM required)
function updateInputs(state) {
	const input = document.getElementById(SELECTORS.CHATBOX.TOGGLE_MAX_HEIGHT_ID)
	if (input) input.checked = !!state
}

// =====================================================
// EVENTS
// =====================================================
async function onChange({ target }) {
	// const target = e.target
	const chatbox = $(SELECTORS.CHATBOX.HEIGHT)

	if (!chatbox) {
		Notify.error('Chatbox not found on this page.')
		// Revert the toggle so UI stays truthful
		target.checked = !target.checked
		return
	}

	const isEnabled = target.checked
	updateDataAttr(isEnabled)
	saveState(isEnabled)

	// // Show appropriate notification
	// if (isEnabled) {
	// 	Notify.success('User bubble accent enabled')
	// } else {
	// 	Notify.info('User bubble accent disabled')
	// }
}
// =====================================================
// Lifecycle: MOUNT
// =====================================================

// Mount after DOM exists: sync inputs and add delegation listener
async function mount() {
	const input = document.getElementById(SELECTORS.CHATBOX.TOGGLE_MAX_HEIGHT_ID)
	if (!input) {
		console.warning(`Element with ID ${SELECTORS.CHATS.TOGGLE_USER_BUBBLE_ACCENT_ID} not found`)
		return
	}

	// Sync inputs to curr/saved state on mount
	const state = await loadState()
	updateInputs(state)
	updateDataAttr(state)
	input.addEventListener('change', onChange)
}

// =====================================================
// Exports
// =====================================================
export { templateHTML as renderCustomChatboxHeight, mount }
