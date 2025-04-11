import browser from 'webextension-polyfill'
import { icon_toggle_on, icon_toggle_off } from './components/icons'

// Configuration object
const BG_CONFIG = {
	user: {
		label: 'User',
		icon: icon_toggle_on,
		toggleVar: '--toggleBgUser',
		originalVar: '--c-bg-msg-user',
	},
	gpt: {
		label: 'GPT',
		icon: icon_toggle_on,
		toggleVar: '--toggleBgGpt',
		originalVar: '--c-bg-msg-gpt',
	},
}

const DEFAULT_STATE = {
	user: true,
	gpt: true,
}

function generateChatBackgroundHTML() {
	const toggleButtons = Object.entries(BG_CONFIG)
		.map(([type, config]) => {
			return `
        <div class="gpth-bubbles__item">
          <span>${config.label}</span>
          <button 
            id="bg-toggle-${type}" 
            class="gpth-bubbles__toggle active" 
            data-type="${type}"
            aria-pressed="true"
          >
            ${config.icon}
          </button>
        </div>
      `
		})
		.join('')

	return `
    <section class="gpth-bubbles">
      <h4 class="mb-3 ml-2">Chat Bubbles</h4>
      <div class="gpth-bubbles__toggles">
        ${toggleButtons}
      </div>
    </section>
  `
}

function updateRootVariables(state) {
	const root = document.documentElement

	Object.entries(state).forEach(([type, isEnabled]) => {
		const config = BG_CONFIG[type]
		root.style.setProperty(config.toggleVar, isEnabled ? `var(${config.originalVar})` : 'transparent')

		getComputedStyle(root).getPropertyValue(config.toggleVar)
	})
}

async function saveBackgroundPreference(state) {
	try {
		await browser.storage.sync.set({ chatBackgroundState: state })
	} catch (error) {
		console.error('Failed to save background preference:', error)
	}
}

async function loadBackgroundPreference() {
	try {
		const result = await browser.storage.sync.get('chatBackgroundState')
		return result.chatBackgroundState || DEFAULT_STATE
	} catch (error) {
		console.error('Failed to load background preference:', error)
		return DEFAULT_STATE
	}
}

function applyBackgroundState(state = DEFAULT_STATE) {
	Object.entries(state).forEach(([type, isEnabled]) => {
		const btn = document.querySelector(`#bg-toggle-${type}`)
		if (btn) {
			btn.classList.toggle('active', isEnabled)
			btn.setAttribute('aria-pressed', isEnabled.toString())
			btn.innerHTML = isEnabled ? BG_CONFIG[type].icon : icon_toggle_off
		}
	})

	updateRootVariables(state)
}

function addBackgroundListeners() {
	console.log('addBackgroundListeners')
	const toggleContainer = document.querySelector('.gpth-bubbles__toggles')
	if (!toggleContainer) return

	toggleContainer.addEventListener('click', async (e) => {
		console.log('toggleContainer: ', e.target)
		const btn = e.target.closest('.gpth-bubbles__toggle')
		if (!btn) return

		const type = btn.dataset.type
		const isActive = btn.getAttribute('aria-pressed') === 'true'
		const newState = !isActive

		// Update UI immediately
		btn.classList.toggle('active', newState)
		btn.setAttribute('aria-pressed', newState.toString())
		btn.innerHTML = newState ? BG_CONFIG[type].icon : icon_toggle_off

		// Get current state and update
		const currentState = await loadBackgroundPreference()
		const updatedState = {
			...currentState,
			[type]: newState,
		}

		// Update variables and save
		updateRootVariables(updatedState)
		await saveBackgroundPreference(updatedState)
	})

	// Load and apply saved preferences
	loadBackgroundPreference().then(applyBackgroundState)
}

function init() {
	// Initialize variables on root
	updateRootVariables(DEFAULT_STATE)
	addBackgroundListeners()
}

export { generateChatBackgroundHTML as renderChatBackground, init }
