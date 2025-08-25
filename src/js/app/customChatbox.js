import browser from 'webextension-polyfill'

import { SELECTORS } from './config'
import { icon_taller_height } from './components/icons'
import { q } from '../utils/dom'
import { renderToggle } from './components/renderToggles'
import { Notify } from './components/renderNotify'

// Storage key for preferences
const STORAGE_KEY = 'customChatboxHeightState'

function enableCustomHeight() {
	document.documentElement.classList.add('gpth-chatbox--custom-height')
}
function disableCustomHeight() {
	document.documentElement.classList.remove('gpth-chatbox--custom-height')
}

function generateHTML() {
	return `
		<h4 class="${SELECTORS.SUBHEADING}">Other</h4>
		${renderToggle({
			id: SELECTORS?.CHATBOX?.TOGGLE_MAX_HEIGHT_ID,
			checked: false,
			label: 'Taller Chatbox',
			subtitle: 'Increase the height of the message box to fit more content',
			icon: icon_taller_height,
			card: true,
			className: '',
		})}
	`
}

function setupListeners() {
	const $toggleHeight = q(`#${SELECTORS.CHATBOX.TOGGLE_MAX_HEIGHT_ID}`)

	// Silently skip if toggle is not yet rendered; caller can re-run later
	if (!$toggleHeight) return

	// Sync UI with stored state when toggle becomes available
	loadState().then((state) => {
		$toggleHeight.checked = !!state
	})

	$toggleHeight.addEventListener('change', (e) => {
		const isChecked = e.target.checked

		if (isChecked) enableCustomHeight()
		else disableCustomHeight()
		saveState(isChecked)
	})
}

async function saveState(state = false) {
	try {
		await browser.storage.sync.set({ [STORAGE_KEY]: state })
		return true
	} catch (error) {
		Notify.error('Failed to save Chatbox height preference')
		console.error('Failed to save Chatbox height  preference:', error)
		return false
	}
}

async function loadState() {
	try {
		const result = await browser.storage.sync.get(STORAGE_KEY)
		return result[STORAGE_KEY] || false
	} catch (error) {
		Notify.error('Failed to load Chatbox custom height preference')
		console.error('Failed to load Chatbox height preference:', error)
		return false
	}
}

function init() {
	// Only apply saved state on load; do not require settings UI to be present
	loadState().then((state) => {
		if (state) {
			enableCustomHeight()
		} else {
			disableCustomHeight()
		}
	})
}

export { generateHTML as renderCustomChatboxHeight, init, setupListeners as handleCustomChatboxListeners }
