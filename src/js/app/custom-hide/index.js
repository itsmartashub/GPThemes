import { $, ROOT_HTML } from '../../utils/dom.js'
import { getItems, setItem } from '../../utils/storage.js'
import { Notify } from '../components/renderNotify.js'
import { renderToggle } from '../components/renderToggles.js'
import {
	icon_chevron_down,
	icon_dots_circle,
	icon_header,
    icon_sidebar,
    icon_experimental
} from '../components/icons.js'
import { ELEMENTS } from '../config/consts-hidden-els.js'
import { SELECTORS } from '../config/selectors'

// =====================================================
// STATE
// =====================================================

const ELEMENTS_MAP = new Map(ELEMENTS.map((cfg) => [cfg.id, cfg]))

const GROUPS = [
	{ key: 'header', label: 'Header', icon: icon_header },
	{ key: 'sidebar', label: 'Sidebar', icon: icon_sidebar },
	{ key: 'other', label: 'Other', icon: icon_dots_circle },
	{ key: 'experimental', label: 'Experimental', icon: icon_experimental },
]

function renderGroup({ key, label, icon }) {
	const items = ELEMENTS.filter((el) => el.group === key)
	if (!items.length) return ''

	const rows = items
		.map((cfg) =>
			renderToggle({
				id: cfg.id,
				checked: cfg.isHidden,
				label: cfg.label,
				subtitle: cfg.subtitle,
				icon: cfg.icon,
				badge: cfg.badge,
				disabled: cfg.disabled ?? false,
				card: true,
				compact: true,
			}),
		)
		.join('')

	/* All groups start collapsed so the user explicitly opens what they need. The inner wrapper div is required by the CSS grid-trick anim */
	return `
		<details class="gpth-hide-group" id="gpth-hide-group-${key}">
			<summary class="gpth-hide-group__summary">
				<span class="gpth-hide-group__icon" aria-hidden="true">${icon}</span>
				<span class="gpth-hide-group__label">${label}</span>
				<span class="gpth-hide-group__count" data-count-for="${key}" hidden></span>
				<span class="gpth-hide-group__chevron" aria-hidden="true">${icon_chevron_down}</span>
			</summary>
			<div class="gpth-hide-group__body">
				<div class="gpth-hide-group__body-inner">
					${rows}
				</div>
			</div>
		</details>
	`
}

// =====================================================
// TEMPLATE
// =====================================================
function templateHTML() {
	if (!Array.isArray(ELEMENTS) || ELEMENTS.length === 0) {
		console.warn('ELEMENTS array is empty or invalid')
		return ''
	}

	return `
		<section id="${SELECTORS.HIDE.CONTAINER_ID}">
			<h4 class="${SELECTORS.SUBHEADING}">Visibility</h4>

			${GROUPS.map(renderGroup).join('')}
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
	} catch (e) {
		Notify.error(`Failed to hide element`)
		console.error('Failed to save toggle state', key, e)
	}
}
// Load saved state from storage
async function loadState() {
	try {
		return await getItems(ELEMENTS.map((cfg) => cfg.storageKey).filter(Boolean))
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

/* Recount active toggles in a group and update the badge. Called after mount and on every change */
function updateGroupCount(groupKey) {
	const items = ELEMENTS.filter((cfg) => cfg.group === groupKey && !cfg.disabled && cfg.id)
	const activeCount = items.filter((cfg) => document.getElementById(cfg.id)?.checked).length

	const badge = document.querySelector(`[data-count-for="${groupKey}"]`)
	if (!badge) return
	badge.textContent = activeCount > 0 ? String(activeCount) : ''
	badge.toggleAttribute('hidden', activeCount === 0)
}
function updateAllGroupCounts() {
	GROUPS.forEach(({ key }) => updateGroupCount(key))
}

// Handle toggle change - check element existence ON EVERY TOGGLE
function onChange({ target }) {
	if (!target.matches('input[type="checkbox"]')) return

	const cfg = ELEMENTS_MAP.get(target.id)
	if (!cfg) return

	// Check if element exists RIGHT NOW
	const element = $(cfg.selector)
	if (!element) {
		Notify.error(`${cfg.label} not found on this page`)
		target.checked = !target.checked // Revert toggle
		return
	}

	const isHidden = target.checked
	updateDataAttr(cfg.dataAttr, isHidden)
	saveState(cfg.storageKey, isHidden, cfg.label)
	updateGroupCount(cfg.group)
}

// =====================================================
// Lifecycle: MOUNT
// =====================================================
// Hydrate and wire events after render
async function mount() {
	const container = document.getElementById(SELECTORS.HIDE.CONTAINER_ID)
	if (!container) {
		console.warn(`Element with ID ${SELECTORS.HIDE.CONTAINER_ID} not found`)
		return
	}

	try {
		// Load all states in parallel
		const savedStates = await loadState()

		// Apply saved states
		for (const cfg of ELEMENTS) {
			const saved = savedStates?.[cfg.storageKey]
			const isHidden = typeof saved === 'boolean' ? saved : cfg.isHidden

			const input = $(`#${cfg.id}`, container)
			if (input) input.checked = isHidden
			updateDataAttr(cfg.dataAttr, isHidden)
		}

		updateAllGroupCounts()
	} catch (e) {
		Notify.error('Failed to load hide settings')
		console.error('Failed to load hide controls: ', e)
	} finally {
		// ALWAYS attach the listener, even if loading state failed
		container.addEventListener('change', onChange)
	}
}

export { mount, templateHTML as renderCustomHides }
