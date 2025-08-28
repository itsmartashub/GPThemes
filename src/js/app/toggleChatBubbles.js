import browser from 'webextension-polyfill'
import { SELECTORS } from './config/selectors.js'
import { q, qq } from '../utils/dom.js'
import { setCssVars } from '../utils/setCssVar.js'
import { renderToggle } from './components/renderToggles.js'
import { Notify } from './components/renderNotify.js'

// Bubble types + config
const BG_CONFIG = {
	user: {
		label: 'USER',
		var: '--gpthToggleBubbleUser', // our 0/1 var
	},
	gpt: {
		label: 'GPT',
		var: '--gpthToggleBubbleGpt',
	},
}

// Default toggle state
const DEFAULT_STATE = {
	user: true,
	gpt: true,
}

const STORAGE_KEY = 'chatBubblesState'

// Generate section HTML
const generateChatBackgroundHTML = () => {
	const toggleItems = Object.entries(BG_CONFIG)
		.map(([type, config]) =>
			renderToggle({
				id: `id-${config.label}`,
				checked: DEFAULT_STATE[type],
				label: config.label,
				className: `${SELECTORS.TOGGLE_BUBBLES.ITEM} cursor-pointer`,
				dataType: type,
			})
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

// Write CSS vars based on state
const updateRootVariables = (state) => {
	const vars = {}
	for (const [type, config] of Object.entries(BG_CONFIG)) {
		vars[config.var.replace(/^--/, '')] = state[type] ? '1' : '0'
	}
	setCssVars(vars)
}

// Persist state
const saveBackgroundPreference = async (state) => {
	try {
		await browser.storage.sync.set({ [STORAGE_KEY]: state })
		return true
	} catch (error) {
		Notify.error('Failed to save preference')
		console.error('Failed to save preference:', error)
		return false
	}
}

// Load state
const loadBackgroundPreference = async () => {
	try {
		const result = await browser.storage.sync.get(STORAGE_KEY)
		return result[STORAGE_KEY] || DEFAULT_STATE
	} catch (error) {
		Notify.error('Failed to load preference')
		console.error('Failed to load preference:', error)
		return DEFAULT_STATE
	}
}

// Apply state to inputs + CSS vars
const applyBubbleState = (state) => {
	const checkboxes = qq(`.${SELECTORS.TOGGLE_BUBBLES.ROOT} .gpth-checkbox__input`)
	checkboxes.forEach((input) => {
		const type = input.dataset.type
		if (type in state) input.checked = state[type]
	})

	updateRootVariables(state)
}

// Listener with delegation
const setupBubblesListeners = () => {
	const container = q(`.${SELECTORS.TOGGLE_BUBBLES.ITEMS_CONTAINER}`)
	if (!container) return

	container.addEventListener('change', async (event) => {
		const input = event.target
		if (!input.classList.contains('gpth-checkbox__input')) return

		const type = input.dataset.type
		if (!type || !(type in BG_CONFIG)) {
			console.warn('Unknown or missing type for chat bubble toggle:', type)
			return
		}

		const currentState = await loadBackgroundPreference()
		const updatedState = { ...currentState, [type]: input.checked }

		updateRootVariables(updatedState)
		saveBackgroundPreference(updatedState)
	})
}

// Init module
const init = async () => {
	const state = await loadBackgroundPreference()
	applyBubbleState(state)
	setupBubblesListeners()
}

export { generateChatBackgroundHTML as renderChatBubbles, init }
