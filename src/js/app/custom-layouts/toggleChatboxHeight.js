import { $, ROOT_HTML } from '../../utils/dom.js'
import { getItem, setItem } from '../../utils/storage.js'
import { icon_taller_height } from '../components/icons.js'
import { Notify } from '../components/renderNotify.js'
import { renderToggle } from '../components/renderToggles.js'
import { ATTR_CHATBOX_HEIGHT } from '../config/consts-attr.js'
import { SK_TOGGLE_CHATBOX_HEIGHT } from '../config/consts-storage.js'
import { SELECTORS } from '../config/selectors.js'

const STORAGE_KEY = SK_TOGGLE_CHATBOX_HEIGHT
const DATA_ATTR = ATTR_CHATBOX_HEIGHT
const DEFAULT_STATE = false

let currentState = DEFAULT_STATE
let initialized = false
let mountedInput = null
let mountToken = 0

function templateHTML() {
	return `
		<h4 class="${SELECTORS.SUBHEADING}">Other</h4>
		${renderToggle({
			id: SELECTORS.CHATBOX.TOGGLE_MAX_HEIGHT_ID,
			checked: DEFAULT_STATE,
			label: 'Expand Chatbox',
			subtitle:
				'Increase the height of the message box to fit more content. Warning: Always disabled on "Library" and "New chat" initial page!',
			icon: icon_taller_height,
			card: true,
		})}
	`
}

async function saveState(state) {
	try {
		await setItem(STORAGE_KEY, state)
		state
			? Notify.success('Chatbox height preference enabled')
			: Notify.info('Chatbox height preference disabled')
		return true
	} catch (error) {
		Notify.error('Failed to save Chatbox height preference')
		console.error('Failed to save Chatbox height preference:', error)
		return false
	}
}

async function loadState() {
	return !!(await getItem(STORAGE_KEY, DEFAULT_STATE))
}

function applyState(state) {
	ROOT_HTML.toggleAttribute(DATA_ATTR, state)
}

function updateInput(state) {
	const input = document.getElementById(SELECTORS.CHATBOX.TOGGLE_MAX_HEIGHT_ID)
	if (input) input.checked = state
}

async function onChange({ target }) {
	const chatbox = $(SELECTORS.CHATBOX.HEIGHT)
	if (!chatbox) {
		Notify.error('Chatbox not found on this page.')
		target.checked = currentState
		return
	}

	currentState = target.checked
	applyState(currentState)
	await saveState(currentState)
}

async function init() {
	currentState = await loadState()
	applyState(currentState)
	initialized = true
	return currentState
}

async function mount() {
	const token = ++mountToken
	const input = document.getElementById(SELECTORS.CHATBOX.TOGGLE_MAX_HEIGHT_ID)
	if (!input) {
		console.warn(`Element with ID ${SELECTORS.CHATBOX.TOGGLE_MAX_HEIGHT_ID} not found`)
		return
	}

	if (!initialized) await init()
	if (token !== mountToken || !input.isConnected) return

	updateInput(currentState)
	input.removeEventListener('change', onChange)
	input.addEventListener('change', onChange)
	mountedInput = input
}

function cleanup() {
	mountToken++
	mountedInput?.removeEventListener('change', onChange)
	mountedInput = null
}

export { cleanup, init, mount, templateHTML as renderCustomChatboxHeight }
