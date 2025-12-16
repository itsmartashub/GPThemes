import { renderToggle } from '../../js/app/components/renderToggles.js'
import { SK_TOGGLE_FAB_HIDDEN } from '../../js/app/config/consts-storage.js'
import { getItem, removeItems, setItem } from '../../js/utils/storage.js'

const STORAGE_KEY = SK_TOGGLE_FAB_HIDDEN

const CONFIG = {
	SELECTORS: {
		container: 'toggle-fab-container',
		toggle: 'toggle-fab-visibility',
	},
	LABEL: 'Hide GPThemes',
}

// Update storage when toggle changes
async function onChange(e) {
	const hideFAB = e.target.checked

	if (hideFAB) {
		// If true, hide FAB
		await setItem(STORAGE_KEY, true)
	} else {
		await removeItems(STORAGE_KEY)
	}
}

async function init() {
	const container = document.getElementById(CONFIG.SELECTORS.container)
	if (!container) return

	try {
		// Get current state - handle null case (first install)
		const isHidden = (await getItem(STORAGE_KEY)) ?? false

		// Render toggle
		container.innerHTML = renderToggle({
			id: CONFIG.SELECTORS.toggle,
			checked: isHidden, // toggle ✅ = FAB visible, toggle ❌ = FAB hidden
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
