import { $, ROOT_HTML } from '../../utils/dom.js'
import { getItems, setItem } from '../../utils/storage.js'
import { Notify } from '../components/renderNotify.js'
import { renderToggle } from '../components/renderToggles.js'
import { ELEMENTS } from '../config/consts-hidden-els.js'
import { SELECTORS } from '../config/selectors'
import {
	disconnectSidebarPillMarkers,
	observeSidebarPillMarkers,
	syncSidebarPillMarkers,
} from './sidebarPills.js'

// =====================================================
// STATE
// =====================================================
// Precompute map for O(1) lookups
const ELEMENTS_MAP = new Map(ELEMENTS.map((cfg) => [cfg.id, cfg]))
let mountedContainer = null
let mountToken = 0

// =====================================================
// TEMPLATE
// =====================================================
function templateHTML() {
	if (!Array.isArray(ELEMENTS) || ELEMENTS.length === 0) {
		console.warn('ELEMENTS array is empty or invalid')
		return ''
	}

	const items = ELEMENTS.map((cfg) =>
		renderToggle({
			id: cfg.id,
			checked: cfg.isHidden, // false by default = OFF
			label: cfg.label,
			subtitle: cfg.subtitle,
			icon: cfg.icon,
			card: true,
			className: '',
		}),
	).join('')

	return `
		<section id="${SELECTORS.HIDE.CONTAINER_ID}">
			<h4 class="${SELECTORS.SUBHEADING}">Hide elements</h4>
			<div class="grid grid-cols-[repeat(auto-fit,minmax(7rem,1fr))]">
				${items}
			</div>
		</section>
	`
}

// =====================================================
// STORAGE
// =====================================================
// Save state to storage
async function saveState(key, value, label) {
	try {
		await setItem(key, value)

		const element = label ? label.replace('Hide ', '') : 'Element'
		value ? Notify.info(`😶‍🌫️ ${element} hidden`) : Notify.success(`👁️ ${element} shown`)
		return true
	} catch (e) {
		Notify.error(`Failed to hide element`)
		console.error('Failed to save toggle state', key, e)
		return false
	}
}
// Load saved state from storage
async function loadState() {
	try {
		const result = await getItems(ELEMENTS.map((cfg) => cfg.storageKey))

		return result
	} catch (error) {
		console.error('Failed to load toggle states:', error)
		return {}
	}
}

// =====================================================
// UPDATE CSS/DOM
// =====================================================
// Apply data attribute without saving
function updateDataAttr(dataAttr, isHidden) {
	if (!dataAttr || !ROOT_HTML) return

	if (isHidden) {
		// When element should be hidden, SET the data attr
		ROOT_HTML.setAttribute(dataAttr, '')
	} else {
		// When element should be shown, REMOVE the data attr
		ROOT_HTML.removeAttribute(dataAttr)
	}

	// When element should be hidden, ADD the data attr. When element should be shown, REMOVE the data attr
	// isHidden ? ROOT_HTML.setAttribute(dataAttr, '') : ROOT_HTML.removeAttribute(dataAttr)
}

// Handle toggle change - check element existence ON EVERY TOGGLE
function onChange({ target }) {
	if (!target.matches('input[type="checkbox"]')) return

	const cfg = ELEMENTS_MAP.get(target.id)
	if (!cfg) return

	syncSidebarPillMarkers()

	// Check if element exists RIGHT NOW
	const element = $(cfg.selector)
	if (!element && !cfg.allowMissing) {
		Notify.error(`${cfg.label.replace('Hide ', '')} not found on this page`)
		target.checked = !target.checked // Revert toggle
		return
	}

	const isHidden = target.checked
	updateDataAttr(cfg.dataAttr, isHidden)
	saveState(cfg.storageKey, isHidden, cfg.label)
}

// =====================================================
// Lifecycle: MOUNT
// =====================================================
// Hydrate and wire events after render
async function mount() {
	const token = ++mountToken
	const container = document.getElementById(SELECTORS.HIDE.CONTAINER_ID)
	if (!container) {
		console.warn(`Element with ID ${SELECTORS.HIDE.CONTAINER_ID} not found`)
		return
	}

	try {
		observeSidebarPillMarkers()

		// Load all states in parallel
		const savedStates = await loadState()
		if (token !== mountToken || !container.isConnected) return

		// Apply saved states
		for (const cfg of ELEMENTS) {
			const saved = savedStates?.[cfg.storageKey]
			const isHidden = typeof saved === 'boolean' ? saved : cfg.isHidden

			const input = $(`#${cfg.id}`, container)
			if (input) input.checked = isHidden
			updateDataAttr(cfg.dataAttr, isHidden)
		}
	} catch (e) {
		Notify.error('Failed to load hide settings')
		console.error('Failed to load hide controls: ', e)
	} finally {
		if (token === mountToken && container.isConnected) {
			// ALWAYS attach the listener, even if loading state failed
			container.removeEventListener('change', onChange)
			container.addEventListener('change', onChange)
			mountedContainer = container
		}
	}
}

function cleanup() {
	mountToken++
	mountedContainer?.removeEventListener('change', onChange)
	mountedContainer = null
	disconnectSidebarPillMarkers()
}

export { cleanup, templateHTML as renderCustomHides, mount }
