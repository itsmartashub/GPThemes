import browser from 'webextension-polyfill'
import { renderToggle } from '../../js/app/components/renderToggles.js'
import { SK_TOGGLE_FAB_HIDDEN } from '../../js/app/config/consts-storage.js'
import { getItem, removeItems, setItem } from '../../js/utils/storage.js'

const STORAGE_KEY = SK_TOGGLE_FAB_HIDDEN

const CONFIG = {
	SELECTORS: {
		container: 'toggle-fab-container',
		toggle: 'toggle-fab-visibility',
	},
	LABEL: 'Show theme menu',
}

function isExpectedMissingReceiverError(error) {
	const message = error?.message || ''
	return (
		message.includes('Could not establish connection') ||
		message.includes('Receiving end does not exist') ||
		message.includes('No tab with id')
	)
}

async function notifyActiveTab(isHidden) {
	try {
		const [activeTab] = await browser.tabs.query({ active: true, currentWindow: true })
		if (!activeTab?.id) return

		await browser.tabs.sendMessage(activeTab.id, {
			action: 'toggleFABVisibility',
			isHidden,
			visible: !isHidden,
		})
	} catch (error) {
		if (!isExpectedMissingReceiverError(error)) {
			console.debug('Could not notify active tab about FAB visibility:', error)
		}
	}
}

// Update storage when toggle changes
async function onChange(e) {
	const showFAB = e.target.checked
	const hideFAB = !showFAB

	try {
		if (hideFAB) {
			await setItem(STORAGE_KEY, true)
		} else {
			await removeItems(STORAGE_KEY)
		}

		await notifyActiveTab(hideFAB)
	} catch (error) {
		e.target.checked = !showFAB
		console.error('Failed to update FAB visibility preference:', error)
	}
}

async function init() {
	const container = document.getElementById(CONFIG.SELECTORS.container)
	if (!container) return

	try {
		// Get current state - handle null case (first install)
		const isHidden = (await getItem(STORAGE_KEY)) === true

		// Render toggle
		container.innerHTML = renderToggle({
			id: CONFIG.SELECTORS.toggle,
			checked: !isHidden,
			label: CONFIG.LABEL,
			card: true,
			className: '',
		})

		// Handle toggle changes
		document.getElementById(CONFIG.SELECTORS.toggle)?.addEventListener('change', onChange)
	} catch (error) {
		console.error('Failed to setup FAB toggle:', error)
		container.innerHTML = '<p class="error">Hrm, toggle failed 😳</p>'
	}
}

export { init }
