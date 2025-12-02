import { getItem, setItem } from '../../utils/storage.js'
import { SELECTORS } from '../config/selectors.js'
import { SK_TOGGLE_CHAT_BUBBLES_STATE } from '../config/consts-storage.js'
import { ATTR_BUBBLE_GPT, ATTR_BUBBLE_USER } from '../config/consts-attr.js'
import { $, $$, ROOT_HTML } from '../../utils/dom.js'
import { renderToggle } from '../components/renderToggles.js'
import { Notify } from '../components/renderNotify.js'

// =====================================================
// CONSTANTS
// =====================================================

const STORAGE_KEY = SK_TOGGLE_CHAT_BUBBLES_STATE

// Bubble types + config
const CONFIG = {
	user: {
		label: 'USER',
		attr: ATTR_BUBBLE_USER,
	},
	gpt: {
		label: 'GPT',
		attr: ATTR_BUBBLE_GPT,
	},
}

// Default toggle state
const DEFAULT_STATE = {
	user: true,
	gpt: true,
}

// =====================================================
// TEMPLATE
// =====================================================

function templateHTML() {
	const toggleItems = Object.entries(CONFIG)
		.map(function ([type, config]) {
			return renderToggle({
				id: `id-${config.label}`,
				checked: DEFAULT_STATE[type],
				label: config.label,
				className: `${SELECTORS.TOGGLE_BUBBLES.ITEM} cursor-pointer`,
				dataType: type,
			})
		})
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

// =====================================================
// STORAGE
// =====================================================
// Save state to storage
async function saveState(state) {
	try {
		await setItem(STORAGE_KEY, state)
		return true
	} catch (error) {
		Notify.error('Failed to save bubble preference')
		console.error('Failed to save preference:', error)
		return false
	}
}
// Load saved state from storage
async function loadState() {
	try {
		const result = await getItem(STORAGE_KEY)
		return result || DEFAULT_STATE
	} catch (error) {
		Notify.error('Failed to load bubble preference')
		console.error('Failed to load preference:', error)
		return DEFAULT_STATE
	}
}

// =====================================================
// UPDATE CSS/DOM
// =====================================================

// Apply data attributes to document root
function updateDataAttr(state) {
	for (const [type, config] of Object.entries(CONFIG)) {
		if (state[type]) {
			// When bubble is ENABLED (checked), remove the data attr
			ROOT_HTML.removeAttribute(config.attr)
		} else {
			// When bubble is DISABLED (unchecked), set the data attr
			ROOT_HTML.setAttribute(config.attr, '')
		}
		// When bubble is DISABLED (unchecked), ADD the data attr!! When bubble is ENaABLED (checked), REMOVE the data attr
		// !state[type] ? ROOT_HTML.setAttribute(config.attr, '') : ROOT_HTML.removeAttribute(config.attr)
	}
}

// Update checkbox inputs to reflect state (DOM required)
function updateInputs(state) {
	const checkboxes = $$(`.${SELECTORS.TOGGLE_BUBBLES.ROOT} .gpth-checkbox__input`)
	checkboxes.forEach(function (input) {
		const type = input.dataset.type
		if (type in state) input.checked = state[type]
	})
}

// =====================================================
// EVENTS
// =====================================================

async function onChange(event) {
	const input = event.target
	if (!input.classList.contains('gpth-checkbox__input')) return

	const type = input.dataset.type
	if (!type || !(type in CONFIG)) {
		console.warn('Unknown or missing type for chat bubble toggle:', type)
		return
	}

	const currState = await loadState()
	const updatedState = { ...currState, [type]: input.checked }

	updateDataAttr(updatedState)
	updateInputs(updatedState)

	saveState(updatedState).then((success) =>
		input.checked ? Notify.success(`${type} bubble enabled`) : Notify.info(`${type} bubble disabled`)
	)
}

// =====================================================
// Lifecycle: MOUNT
// =====================================================

// Mount after DOM exists: sync inputs and add delegation listener
async function mount() {
	const container = $(`.${SELECTORS.TOGGLE_BUBBLES.ITEMS_CONTAINER}`)
	if (!container) {
		console.warning(`Element with class ${SELECTORS.TOGGLE_BUBBLES.ITEMS_CONTAINER} not found`)
		return
	}

	// Sync inputs to curr/saved state on mount
	const state = await loadState()
	updateDataAttr(state)
	updateInputs(state)
	container.addEventListener('change', onChange)
}

// =====================================================
// Exports
// =====================================================
export { templateHTML as renderCustomChatBubbles, mount }
