import { getItem, setItem } from '../../utils/storage.js'
import { $, ROOT_HTML } from '../../utils/dom.js'
import { SELECTORS } from '../config/selectors.js'
import { SK_TOGGLE_ACCENT_TEXT } from '../config/consts-storage.js'
import { ATTR_ACCENT_TEXT } from '../config/consts-attr.js'
import { Notify } from '../components/renderNotify.js'
import { renderToggle } from '../components/renderToggles.js'
import { icon_text_color } from '../components/icons.js'

// =====================================================
// STATE
// =====================================================
const STORAGE_KEY = SK_TOGGLE_ACCENT_TEXT
const DATA_ATTR = ATTR_ACCENT_TEXT
const DEFAULT_STATE = false

// =====================================================
// TEMPLATE
// =====================================================
function templateHTML() {
	return renderToggle({
		id: SELECTORS.CHATS.TOGGLE_ACCENT_TEXT_ID,
		checked: DEFAULT_STATE,
		label: 'Accent All Text',
		subtitle: 'Make all the text on the page accented',
		icon: icon_text_color,
		card: true,
	})
}

// =====================================================
// STORAGE
// =====================================================

// Save state to storage
async function saveState(state = DEFAULT_STATE) {
	try {
		await setItem(STORAGE_KEY, state)
		state ? Notify.success('All text accent enabled') : Notify.info('All text accent disabled')
		return true
	} catch (error) {
		onError('Failed to save user accent bubble preference', error)
		return false
	}
}
// Load saved state from storage
async function loadState() {
	try {
		const result = await getItem(STORAGE_KEY) // boolean: true | false | null

		return !!result // if null => !!null => false
	} catch (error) {
		onError('Failed to load all text accent preference', error)
		return false
	}
}

// =====================================================
// UPDATE CSS/DOM
// =====================================================
// Apply data attribute to document root
function updateDataAttr(enabled) {
	// if (enabled) {
	// 	// When toggle is ON, set the data attribute
	// 	ROOT_HTML.setAttribute(DATA_ATTR, '')
	// } else {
	// 	// When toggle is OFF, remove the data attribute
	// 	ROOT_HTML.removeAttribute(DATA_ATTR)
	// }

	// When toggle is ON, set the data attr. When toggle is OFF, remove the data att
	enabled ? ROOT_HTML.setAttribute(DATA_ATTR, '') : ROOT_HTML.removeAttribute(DATA_ATTR)
}

// Update input to reflect state (DOM required)
function updateInputs(enabled) {
	const input = document.getElementById(SELECTORS.CHATS.TOGGLE_ACCENT_TEXT_ID)
	if (input) input.checked = !!enabled
}

// =====================================================
// EVENTS
// =====================================================
// Error handler
function onError(message, error = null) {
	Notify.error(message)
	if (error) console.error(`${message}:`, error)
}

async function onChange({ target }) {
	// const userBubble = $(`.${SELECTORS.CHATS.USER}`)

	// if (!userBubble) {
	// 	handleError('User bubble not found on this page.')
	// 	target.checked = !target.checked
	// 	return
	// }

	const isEnabled = target.checked
	updateDataAttr(isEnabled)
	saveState(isEnabled)

	// // Show appropriate notif
	// if (isEnabled) {
	// 	Notify.success('User bubble accent enabled')
	// } else {
	// 	Notify.info('User bubble accent disabled')
	// }
}

// =====================================================
// Lifecycle: MOUNT
// =====================================================

// Setup toggle input listener (mount after DOM exists)
async function mount() {
	const input = document.getElementById(SELECTORS.CHATS.TOGGLE_ACCENT_TEXT_ID)
	if (!input) {
		console.warning(`Element with ID ${SELECTORS.CHATS.TOGGLE_ACCENT_TEXT_ID} not found`)
		return
	}
	// Get data from storage and update html root data-attribute (css) and inputs
	const state = await loadState()
	updateDataAttr(state)
	updateInputs(state)

	// Attach listeners to inputs
	input.addEventListener('change', onChange)
}

// =====================================================
// Exports
// =====================================================
export { templateHTML as renderAllTextAccent, mount }
