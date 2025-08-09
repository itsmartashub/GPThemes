import browser from 'webextension-polyfill'
import { renderToggle } from './components/renderToggles'
import { setCssVars } from '../utils/setCssVar'

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
				className: 'gpth-bubbles__item cursor-pointer',
				dataType: type,
			})
		)
		.join('')

	return `
		<section class="gpth-bubbles">
			<h4 class="gpth-subheading">Chat Bubbles Toggle</h4>
			<div class="gpth-bubbles__items">
				${toggleItems}
			</div>
		</section>
	`
}

// Update CSS variables based on state
/* const updateRootVariables = (state) => {
	const root = document.documentElement

	// Use a DocumentFragment for batched style updates
	requestAnimationFrame(() => {
		Object.entries(state).forEach(([type, isEnabled]) => {
			const { toggleVar, originalVar } = BG_CONFIG[type]
			root.style.setProperty(toggleVar, isEnabled ? `var(${originalVar})` : 'transparent')
		})
	})
} */

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
		console.error('Failed to load preference:', error)
		return DEFAULT_STATE
	}
}

// Apply state to DOM elements and update CSS
const applyBackgroundState = (state) => {
	// Query all checkboxes at once and filter for better performance
	const checkboxes = document.querySelectorAll('.gpth-bubbles .gpth-checkbox__input')
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
	const container = document.querySelector('.gpth-bubbles__items')
	if (!container) return

	container.addEventListener('change', async (event) => {
		const input = event.target
		if (input.classList.contains('gpth-checkbox__input')) {
			const type = input.dataset.type

			if (!type || !(type in BG_CONFIG)) {
				console.warn('Unknown or missing type for chat bubble toggle:', type, input)
				return // Prevents the destructuring error
			}
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
