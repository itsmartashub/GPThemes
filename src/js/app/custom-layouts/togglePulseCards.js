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

let routeObserverStarted = false
let lastPath = ''
let routeObserver = null
let mountedInput = null
let mountToken = 0

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

async function saveState(state = DEFAULT_STATE) {
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
	try {
		return !!(await getItem(STORAGE_KEY))
	} catch (error) {
		Notify.error('Failed to load Pulse card preference')
		console.error('Failed to load Pulse card preference:', error)
		return DEFAULT_STATE
	}
}

function isPulsePath() {
	return location.pathname.split('/').filter(Boolean)[0] === 'pulse'
}

function updatePulsePageAttr() {
	const path = location.pathname
	if (path === lastPath) return

	lastPath = path
	if (isPulsePath()) {
		ROOT_HTML.setAttribute(PAGE_ATTR, '')
	} else {
		ROOT_HTML.removeAttribute(PAGE_ATTR)
	}
}

function observeRouteChanges() {
	if (routeObserverStarted) return
	routeObserverStarted = true
	updatePulsePageAttr()

	routeObserver = new MutationObserver(updatePulsePageAttr)
	routeObserver.observe(document.body, { childList: true, subtree: true })
	window.addEventListener('popstate', updatePulsePageAttr)
}

function updateDataAttr(state) {
	if (state) {
		ROOT_HTML.setAttribute(DATA_ATTR, '')
	} else {
		ROOT_HTML.removeAttribute(DATA_ATTR)
	}
	updatePulsePageAttr()
}

function updateInput(state) {
	const input = document.getElementById(SELECTORS.PULSE.TOGGLE_EXPAND_CARDS_ID)
	if (input) input.checked = !!state
}

async function onChange({ target }) {
	const isEnabled = target.checked
	updateDataAttr(isEnabled)
	updateInput(isEnabled)
	saveState(isEnabled)
}

async function mount() {
	const token = ++mountToken
	const input = document.getElementById(SELECTORS.PULSE.TOGGLE_EXPAND_CARDS_ID)
	if (!input) {
		console.warn(`Element with ID ${SELECTORS.PULSE.TOGGLE_EXPAND_CARDS_ID} not found`)
		return
	}

	observeRouteChanges()

	const state = await loadState()
	if (token !== mountToken || !input.isConnected) return

	updateInput(state)
	updateDataAttr(state)
	input.removeEventListener('change', onChange)
	input.addEventListener('change', onChange)
	mountedInput = input
}

function cleanup() {
	mountToken++
	routeObserver?.disconnect()
	routeObserver = null
	window.removeEventListener('popstate', updatePulsePageAttr)
	routeObserverStarted = false
	lastPath = ''
	ROOT_HTML.removeAttribute(PAGE_ATTR)

	mountedInput?.removeEventListener('change', onChange)
	mountedInput = null
}

export { cleanup, templateHTML as renderExpandPulseCards, mount }
