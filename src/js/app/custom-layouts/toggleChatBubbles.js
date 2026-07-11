import { $, ROOT_HTML } from '../../utils/dom.js'
import { getItem, setItem } from '../../utils/storage.js'
import { Notify } from '../components/renderNotify.js'
import { renderToggle } from '../components/renderToggles.js'
import { ATTR_BUBBLE_GPT, ATTR_BUBBLE_USER } from '../config/consts-attr.js'
import { SK_TOGGLE_CHAT_BUBBLES_STATE } from '../config/consts-storage.js'
import { SELECTORS } from '../config/selectors.js'

const STORAGE_KEY = SK_TOGGLE_CHAT_BUBBLES_STATE
const CONFIG = {
	user: { label: 'USER', attr: ATTR_BUBBLE_USER },
	gpt: { label: 'GPT', attr: ATTR_BUBBLE_GPT },
}
const DEFAULT_STATE = { user: true, gpt: true }

let currentState = { ...DEFAULT_STATE }
let initialized = false
let mountedContainer = null
let mountToken = 0

function templateHTML() {
	const toggleItems = Object.entries(CONFIG)
		.map(([type, config]) =>
			renderToggle({
				id: `id-${config.label}`,
				checked: DEFAULT_STATE[type],
				label: config.label,
				className: `${SELECTORS.TOGGLE_BUBBLES.ITEM} cursor-pointer`,
				dataType: type,
			}),
		)
		.join('')

	return `
		<section class="${SELECTORS.TOGGLE_BUBBLES.ROOT}">
			<h4 class="${SELECTORS.SUBHEADING}">Chat Bubbles Toggle</h4>
			<div class="${SELECTORS.TOGGLE_BUBBLES.ITEMS_CONTAINER}">
				${toggleItems}
			</div>
		</section>
	`
}

async function saveState(state) {
	try {
		await setItem(STORAGE_KEY, state)
		return true
	} catch (error) {
		Notify.error('Failed to save bubble preference')
		console.error('Failed to save bubble preference:', error)
		return false
	}
}

async function loadState() {
	const stored = await getItem(STORAGE_KEY, DEFAULT_STATE)
	return {
		user: stored?.user ?? DEFAULT_STATE.user,
		gpt: stored?.gpt ?? DEFAULT_STATE.gpt,
	}
}

function applyState(state) {
	for (const [type, config] of Object.entries(CONFIG)) {
		ROOT_HTML.toggleAttribute(config.attr, !state[type])
	}
}

function updateInputs(state) {
	const container = $(`.${SELECTORS.TOGGLE_BUBBLES.ITEMS_CONTAINER}`)
	if (!container) return

	for (const input of container.querySelectorAll('.gpth-checkbox__input')) {
		const type = input.dataset.type
		if (type in state) input.checked = state[type]
	}
}

async function onChange(event) {
	const input = event.target
	if (!input.classList.contains('gpth-checkbox__input')) return

	const type = input.dataset.type
	if (!(type in CONFIG)) {
		console.warn('Unknown or missing type for chat bubble toggle:', type)
		return
	}

	currentState = { ...currentState, [type]: input.checked }
	applyState(currentState)
	updateInputs(currentState)
	await saveState(currentState)

	input.checked
		? Notify.success(`${type} bubble enabled`)
		: Notify.info(`${type} bubble disabled`)
}

async function init() {
	currentState = await loadState()
	applyState(currentState)
	initialized = true
	return currentState
}

async function mount() {
	const token = ++mountToken
	const container = $(`.${SELECTORS.TOGGLE_BUBBLES.ITEMS_CONTAINER}`)
	if (!container) {
		console.warn(`Element with class ${SELECTORS.TOGGLE_BUBBLES.ITEMS_CONTAINER} not found`)
		return
	}

	if (!initialized) await init()
	if (token !== mountToken || !container.isConnected) return

	updateInputs(currentState)
	container.removeEventListener('change', onChange)
	container.addEventListener('change', onChange)
	mountedContainer = container
}

function cleanup() {
	mountToken++
	mountedContainer?.removeEventListener('change', onChange)
	mountedContainer = null
}

export { cleanup, init, mount, templateHTML as renderCustomChatBubbles }
