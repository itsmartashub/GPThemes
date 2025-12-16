import { $, ROOT_HTML } from '../../utils/dom.js'
import { getItem, setItem } from '../../utils/storage.js'
import { icon_accent } from '../components/icons.js'
import { Notify } from '../components/renderNotify.js'
import { renderToggle } from '../components/renderToggles.js'
import { ATTR_BUBBLE_USER_ACCENT } from '../config/consts-attr.js'
import { SK_TOGGLE_USER_BUBBLE_ACCENT } from '../config/consts-storage.js'
import { SELECTORS } from '../config/selectors.js'

// =====================================================
// STATE
// =====================================================
const STORAGE_KEY = SK_TOGGLE_USER_BUBBLE_ACCENT
const DATA_ATTR = ATTR_BUBBLE_USER_ACCENT
const DEFAULT_STATE = false

// =====================================================
// TEMPLATE
// =====================================================
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

// =====================================================
// STORAGE
// =====================================================
// Load saved state from storage
async function loadState() {
	try {
		const result = await getItem(STORAGE_KEY) // boolean: true | false | null

		return !!result // if null => !!null => false
	} catch (error) {
		onError('Failed to load user accent bubble preference', error)
		return false
	}
}
// Save state to storage
async function saveState(state = DEFAULT_STATE) {
	try {
		await setItem(STORAGE_KEY, state)
		state
			? Notify.success('User bubble accent enabled')
			: Notify.info('User bubble accent disabled')
		return true
	} catch (error) {
		onError('Failed to save user accent bubble preference', error)
		return false
	}
}

// =====================================================
// UPDATE CSS/DOM
// =====================================================
// Apply data attribute to document root
function updateDataAttr(enabled) {
	if (enabled) {
		// When toggle is ON, set the data attribute
		ROOT_HTML.setAttribute(DATA_ATTR, '')
	} else {
		// When toggle is OFF, remove the data attribute
		ROOT_HTML.removeAttribute(DATA_ATTR)
	}
}

// Update input to reflect state (DOM required)
function updateInputs(enabled) {
	const input = document.getElementById(SELECTORS.CHATS.TOGGLE_USER_BUBBLE_ACCENT_ID)
	if (input) input.checked = !!enabled
}

// Error handler
function onError(message, error = null) {
	Notify.error(message)
	if (error) console.error(`${message}:`, error)
}

async function onChange({ target }) {
	const userBubble = $(`.${SELECTORS.CHATS.USER}`)

	if (!userBubble) {
		onError('User bubble not found on this page.')
		target.checked = !target.checked
		return
	}

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
	const input = document.getElementById(SELECTORS.CHATS.TOGGLE_USER_BUBBLE_ACCENT_ID)
	if (!input) {
		console.warning(`Element with ID ${SELECTORS.CHATS.TOGGLE_USER_BUBBLE_ACCENT_ID} not found`)
		return
	}
	// Get data from storage and update html root data-attribute (css) and inputs
	const state = await loadState()
	updateDataAttr(state)
	updateInputs(state)

	// Attach listeners to inputs
	input.addEventListener('change', onChange)
}

export { templateHTML as renderUserAccentBgToggle, mount }
