import browser from 'webextension-polyfill'
import { SELECTORS } from './config.js'
import { q, qq } from '../utils/dom.js'
import { setCssVars } from '../utils/setCssVar'
import { renderToggle } from './components/renderToggles'
import { Notify } from './components/renderNotify.js'

// Configuration object with all bubble types and their properties
const BG_CONFIG = {
	user: {
		label: 'USER',
		toggleVar: '--toggleBgUser',
		originalVar: '--c-bg-msg-user',
	},
	gpt: {
		label: 'GPT',
		toggleVar: '--toggleBgGpt',
		originalVar: '--c-bg-msg-gpt',
	},
}

// Default state for bubble visibility
const DEFAULT_STATE = {
	user: true,
	gpt: true,
}

// Storage key for preferences
const STORAGE_KEY = 'chatBubblesState'

// Create HTML for chat background toggles
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

const updateRootVariables = (state) => {
	// console.log('updateRootVariables: ', state)

	setCssVars({
		toggleBgUser: state.user ? 'var(--c-bg-msg-user)' : 'transparent',
		toggleBgGpt: state.gpt ? 'var(--c-bg-msg-gpt)' : 'transparent',
	})
}

// Save preferences to browser storage
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

// Load preferences from browser storage
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

// Apply state to DOM elements and update CSS
const applyBackgroundState = (state) => {
	// Query all checkboxes at once and filter for better performance
	const checkboxes = qq(`.${SELECTORS.TOGGLE_BUBBLES.ROOT} .gpth-checkbox__input`)
	checkboxes.forEach((input) => {
		const type = input.dataset.type
		if (type in state) {
			input.checked = state[type]
		}
	})

	updateRootVariables(state)
}

// Set up event delegation for better performance
const setupBubblesListeners = () => {
	const container = q(`.${SELECTORS.TOGGLE_BUBBLES.ITEMS_CONTAINER}`)
	if (!container) return

	container.addEventListener('change', async (event) => {
		const input = event.target
		if (input.classList.contains('gpth-checkbox__input')) {
			const type = input.dataset.type

			if (!type || !(type in BG_CONFIG)) {
				console.warn('Unknown or missing type for chat bubble toggle:', type, input)
				return // Prevents the destructuring error
			}

			// Check if chat bubbles exist
			// console.log(SELECTORS.CHATS[BG_CONFIG[type].label])
			const chatBubbles = q(`.${SELECTORS.CHATS[BG_CONFIG[type].label]}`)
			// console.log('chatBubbles: ', chatBubbles)

			if (!chatBubbles) return Notify.error(`Could not find chat bubbles for ${BG_CONFIG[type].label}`)

			const currentState = await loadBackgroundPreference()

			// Create new state object (immutable pattern)
			const updatedState = {
				...currentState,
				[type]: input.checked,
			}

			updateRootVariables(updatedState)
			saveBackgroundPreference(updatedState)
		}
	})
}

// Initialize the module
const init = async () => {
	// Load and apply preferences in one go
	const state = await loadBackgroundPreference()
	applyBackgroundState(state)
	setupBubblesListeners()
}

// Export named functions for external use
export { generateChatBackgroundHTML as renderChatBubbles, init }
