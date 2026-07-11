import { subscribeRouteChanges } from '../../runtime/routes.js'
import { ROOT_HTML } from '../../utils/dom.js'
import { getItem, setItem } from '../../utils/storage.js'
import { icon_full_width } from '../components/icons.js'
import { Notify } from '../components/renderNotify.js'
import { renderToggle } from '../components/renderToggles.js'
import { ATTR_EXPAND_PULSE_CARDS } from '../config/consts-attr.js'
import { SK_TOGGLE_EXPAND_PULSE_CARDS } from '../config/consts-storage.js'
import { SELECTORS } from '../config/selectors.js'

const STORAGE_KEY = SK_TOGGLE_EXPAND_PULSE_CARDS
const DATA_ATTR = ATTR_EXPAND_PULSE_CARDS
const PAGE_ATTR = 'data-gpth-page-pulse'
const DEFAULT_STATE = false

let currentState = DEFAULT_STATE
let initialized = false
let mountedInput = null
let mountToken = 0
let removeRouteSubscription = null

function templateHTML() {
	return renderToggle({
		id: SELECTORS.PULSE.TOGGLE_EXPAND_CARDS_ID,
		checked: DEFAULT_STATE,
		label: 'Expand Pulse Cards',
		subtitle: 'Allow Pulse cards to use the available page width instead of staying narrow.',
		icon: icon_full_width,
		card: true,
	})
}

async function saveState(state) {
	try {
		await setItem(STORAGE_KEY, state)
		state ? Notify.success('Pulse cards expanded') : Notify.info('Pulse cards reset')
		return true
	} catch (error) {
		Notify.error('Failed to save Pulse card preference')
		console.error('Failed to save Pulse card preference:', error)
		return false
	}
}

async function loadState() {
	return !!(await getItem(STORAGE_KEY, DEFAULT_STATE))
}

function isPulsePath(path) {
	return path.split('/').filter(Boolean)[0] === 'pulse'
}

function onRouteChange({ path }) {
	ROOT_HTML.toggleAttribute(PAGE_ATTR, isPulsePath(path))
}

function applyState(state) {
	ROOT_HTML.toggleAttribute(DATA_ATTR, state)
}

function updateInput(state) {
	const input = document.getElementById(SELECTORS.PULSE.TOGGLE_EXPAND_CARDS_ID)
	if (input) input.checked = state
}

async function onChange({ target }) {
	currentState = target.checked
	applyState(currentState)
	updateInput(currentState)
	await saveState(currentState)
}

async function init() {
	if (!removeRouteSubscription) {
		removeRouteSubscription = subscribeRouteChanges(onRouteChange)
	}

	currentState = await loadState()
	applyState(currentState)
	initialized = true
	return currentState
}

async function mount() {
	const token = ++mountToken
	const input = document.getElementById(SELECTORS.PULSE.TOGGLE_EXPAND_CARDS_ID)
	if (!input) {
		console.warn(`Element with ID ${SELECTORS.PULSE.TOGGLE_EXPAND_CARDS_ID} not found`)
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
	removeRouteSubscription?.()
	removeRouteSubscription = null
	ROOT_HTML.removeAttribute(PAGE_ATTR)
	initialized = false
}

export { cleanup, init, mount, templateHTML as renderExpandPulseCards }
