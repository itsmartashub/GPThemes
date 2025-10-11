import { SK_TOGGLE_FAB } from '../../js/app/FAB'
import { getItem, setItem, removeItems } from '../../js/utils/storage'
import { renderToggle } from '../../js/app/components/renderToggles'

console.log(SK_TOGGLE_FAB)

const CONFIG = {
	label: 'Hide GPThemes',
	containerId: 'toggle-fab-container',
	toggleId: 'toggle-fab-visibility',
}

async function setupFABToggle() {
	const container = document.getElementById(CONFIG.containerId)
	if (!container) return

	// Get current state - handle null case (first install)
	let shouldHideFAB = await getItem(SK_TOGGLE_FAB)

	// If null (first time), default to false (don't hide)
	if (shouldHideFAB === null) {
		shouldHideFAB = false
		// Optionally set the default value in storage
		await removeItems(SK_TOGGLE_FAB)
	}

	console.log('shouldHideFAB', shouldHideFAB)

	container.innerHTML = renderToggle({
		id: CONFIG.toggleId,
		checked: shouldHideFAB, // Toggle checked = FAB visible, unchecked = FAB hidden
		label: CONFIG.label,
		card: true,
		className: '',
	})

	// Update storage when toggle changes
	document.getElementById(CONFIG.toggleId)?.addEventListener('change', async (e) => {
		const shouldBeHidden = e.target.checked

		console.log('FAB hidden:', shouldBeHidden)
		await setItem(SK_TOGGLE_FAB, shouldBeHidden)
	})
}

export { setupFABToggle }
