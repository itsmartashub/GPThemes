import { SK_TOGGLE_FAB } from '../../js/app/FAB'
import { getItem, setItem } from '../../js/utils/storage'
import { renderToggle } from '../../js/app/components/renderToggles'

const CONFIG = {
	label: 'Hide GPThemes',
	containerId: 'toggle-fab-container',
	toggleId: 'toggle-fab-visibility',
}

async function setupFABToggle() {
	const container = document.getElementById(CONFIG.containerId)
	if (!container) return

	// Get current state
	const isVisible = await getItem(SK_TOGGLE_FAB)

	container.innerHTML = renderToggle({
		id: CONFIG.toggleId,
		checked: !isVisible,
		label: CONFIG.label,
		card: true,
		className: '',
	})

	// Just update storage - sync will handle the rest
	document.getElementById(CONFIG.toggleId)?.addEventListener('change', async (e) => {
		await setItem(SK_TOGGLE_FAB, !e.target.checked)
	})
}

export { setupFABToggle }
