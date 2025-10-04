import { getItems, setItem } from '../../utils/storage.js'
import { $, setVar, removeVar } from '../../utils/dom.js'
import { ELEMENTS } from '../config/hidden-els.js'
import { SELECTORS } from '../config/selectors'
import { renderToggle } from '../components/renderToggles.js'
import { Notify } from '../components/renderNotify.js'

// Precompute map for O(1) lookups
const ELEMENTS_MAP = new Map(ELEMENTS.map((cfg) => [cfg.id, cfg]))

// Render section HTML (string)
function renderCustomHides() {
	if (!Array.isArray(ELEMENTS) || ELEMENTS.length === 0) {
		console.warn('ELEMENTS array is empty or invalid')
		return ''
	}

	const items = ELEMENTS.map((cfg) =>
		renderToggle({
			id: cfg.id,
			checked: cfg.isHidden,
			label: cfg.label,
			subtitle: cfg.subtitle,
			icon: cfg.icon,
			card: true,
			className: '',
		})
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

// Hydrate and wire events after render
async function handleCustomHidesListeners() {
	const container = document.getElementById(SELECTORS.HIDE.CONTAINER_ID)
	if (!container) {
		Notify.warning(`Container with ID ${SELECTORS.HIDE.CONTAINER_ID} not found`)
		return
	}

	try {
		// Load all states in parallel
		const savedStates = await getItems(ELEMENTS.map((cfg) => cfg.id))

		// console.log('[🎨GPThemes]: Loaded toggle states', savedStates)

		for (const cfg of ELEMENTS) {
			const saved = savedStates?.[cfg.id]
			const isHidden = typeof saved === 'boolean' ? saved : cfg.isHidden

			// const input = container.querySelector(`#${cfg.id}`)
			const input = $(`#${cfg.id}`, container)
			if (input) input.checked = isHidden

			applyToggle(cfg, isHidden)
		}
	} catch (e) {
		Notify.error('Failed to load toggle states')
		console.error('Failed to load toggle states', e)
	}

	container.addEventListener('change', handleToggleChange)
}

function handleToggleChange(e) {
	if (!e.target.matches('input[type="checkbox"]')) return
	const { id, checked } = e.target
	const cfg = ELEMENTS_MAP.get(id)
	if (cfg) applyToggle(cfg, checked)
}

/* Toggles a CSS variable state, typically between '1' (hidden) and removed (default) */
function applyToggle(config, isHidden) {
	const varName = String(config.cssVar || '')
	if (!varName) return

	// 1. Direct and Clean Logic
	if (isHidden) {
		setVar(varName, '1') // State 1: Set variable to '1' (or whatever value signifies the active state)
	} else {
		removeVar(varName) // State 0: Remove the inline variable, letting CSS (e.g., :root defaults) take over.
	}

	// 2. Persist state
	saveState(config.id, isHidden)
}

async function saveState(key, value) {
	try {
		await setItem(key, value)
	} catch (e) {
		Notify.error(`Failed to save ${key} toggle state`)
		console.error('Failed to save toggle state', key, e)
	}
}

export { renderCustomHides, handleCustomHidesListeners }
