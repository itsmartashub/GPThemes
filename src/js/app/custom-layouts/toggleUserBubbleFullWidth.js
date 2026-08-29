import { $, ROOT_HTML } from '../../utils/dom'
import { getItem, setItem } from '../../utils/storage'
import { icon_bubble_full_width } from '../components/icons'
import { Notify } from '../components/renderNotify'
import { renderToggle } from '../components/renderToggles'
import { ATTR_BUBBLE_USER_FULLWIDTH } from '../config/consts-attr'
import { SK_TOGGLE_USER_BUBBLE_FULLWIDTH } from '../config/consts-storage'
import { SELECTORS } from '../config/selectors'

// =====================================================
// STATE
// =====================================================
const STORAGE_KEY = SK_TOGGLE_USER_BUBBLE_FULLWIDTH
const DATA_ATTR = ATTR_BUBBLE_USER_FULLWIDTH
const DEFAULT_STATE = false

// =====================================================
// TEMPLATE
// =====================================================
function templateHTML() {
	return renderToggle({
		id: SELECTORS.CHATS.TOGGLE_USER_BUBBLE_FULLWIDTH_ID,
		checked: DEFAULT_STATE,
		label: 'User Bubble Full Width',
		subtitle: 'Expands the user message width from the default 70% to 100% to match the assistant message width',
		icon: icon_bubble_full_width,
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
		state ? Notify.success('Full width user chat enabled') : Notify.info('Full width user chat disabled')
		return true
	} catch (error) {
		Notify.error('Failed to save Full width user chat preference')
		console.error('Failed to save Full width user chat preference:', error)
		return false
	}
}
// Load saved state from storage
async function loadState() {
	try {
		const result = await getItem(STORAGE_KEY) // state: true | false | null

		return !!result
	} catch (error) {
		Notify.error('Failed to load Full width user chat preference')
		console.error('Failed to load Full width user chat preference:', error)
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
}

// Update input to reflect state (DOM required)
function updateInputs(state) {
	const input = document.getElementById(SELECTORS.CHATS.TOGGLE_USER_BUBBLE_FULLWIDTH_ID)
	if (input) input.checked = !!state
}

// =====================================================
// EVENTS
// =====================================================
async function onChange({ target }) {
	const userBubble = $(SELECTORS?.CHATS?.USER_WIDTH)

	if (!userBubble) {
		Notify.error('User chat not found on this page.')
		// Revert the toggle so UI stays truthful
		target.checked = !target.checked
		return
	}

	const isEnabled = target.checked
	updateDataAttr(isEnabled)
	saveState(isEnabled)
}
// =====================================================
// Lifecycle: MOUNT
// =====================================================

// Mount after DOM exists: sync inputs and add delegation listener
async function mount() {
	const input = document.getElementById(SELECTORS.CHATS.TOGGLE_USER_BUBBLE_FULLWIDTH_ID)
	if (!input) {
		console.warn(`Element with ID ${SELECTORS.CHATS.TOGGLE_USER_BUBBLE_FULLWIDTH_ID} not found`)
		return
	}

	// Sync inputs to curr/saved state on mount
	const state = await loadState()
	updateInputs(state)
	updateDataAttr(state)
	input.addEventListener('change', onChange)
}

// =====================================================
// RESET
// =====================================================
async function reset() {
	updateInputs(DEFAULT_STATE)
	updateDataAttr(DEFAULT_STATE)
	try {
		await setItem(STORAGE_KEY, DEFAULT_STATE)
	} catch (error) {
		console.error('Failed to reset user bubble full width preference:', error)
	}
}

// =====================================================
// Exports
// =====================================================
export { templateHTML as renderCustomUserBubbleFullWidth, mount, reset as resetUserBubbleFullWidth }
