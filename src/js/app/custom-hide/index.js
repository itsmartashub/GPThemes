import { $ } from '../../utils/dom.js'
import { icon_chevron_down } from '../components/icons.js'
import { Notify } from '../components/renderNotify.js'
import { renderToggle } from '../components/renderToggles.js'
import { ELEMENTS, GROUPS } from '../config/consts-hides.js'
import { SELECTORS } from '../config/selectors.js'
import { isElementAvailable, loadState, saveState, updateDataAttr } from './hideState.js'

// Derived once. The catalog is static, so regrouping it on every render would be waste
const ELEMENTS_BY_ID = new Map(ELEMENTS.map((cfg) => [cfg.id, cfg]))
const ELEMENTS_BY_GROUP = new Map(
	GROUPS.map(({ key }) => [key, ELEMENTS.filter((cfg) => cfg.group === key)]),
)

// =====================================================
// TEMPLATE
// =====================================================

function renderGroup({ key, label, icon }) {
	const items = ELEMENTS_BY_GROUP.get(key) ?? []
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
				disabled: cfg.disabled,
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
// GROUP COUNTS
// =====================================================

/* Recount active toggles in a group and update its badge. Called after mount and on every change */
function updateGroupCount(groupKey, container) {
	const items = ELEMENTS_BY_GROUP.get(groupKey) ?? []
	const activeCount = items.filter(
		(cfg) => !cfg.disabled && $(`#${cfg.id}`, container)?.checked,
	).length

	const badge = $(`[data-count-for="${groupKey}"]`, container)
	if (!badge) return

	badge.textContent = activeCount > 0 ? String(activeCount) : ''
	badge.toggleAttribute('hidden', activeCount === 0)
}

function updateAllGroupCounts(container) {
	for (const { key } of GROUPS) updateGroupCount(key, container)
}

// =====================================================
// EVENTS
// =====================================================

function onChange(event) {
	const target = event.target
	if (!target.matches('input[type="checkbox"]')) return

	const cfg = ELEMENTS_BY_ID.get(target.id)
	if (!cfg) return

	// The el has to exist on the current page, otherwise the toggle would only lie to the user
	if (!isElementAvailable(cfg)) {
		Notify.error(`${cfg.label} not found on this page`)
		target.checked = !target.checked
		return
	}

	const isHidden = target.checked
	updateDataAttr(cfg, isHidden)
	saveState(cfg, isHidden).then((saved) => {
		if (!saved) return

		const element = cfg.label ? cfg.label.replace('Hide ', '') : 'Element'
		if (isHidden) Notify.info(`😶‍🌫️ ${element} hidden`)
		else Notify.success(`👁️ ${element} shown`)
	})
	updateGroupCount(cfg.group, event.currentTarget)
}

// =====================================================
// LIFECYCLE: MOUNT
// =====================================================

// Hydrate and wire events after render
async function mount() {
	const container = document.getElementById(SELECTORS.HIDE.CONTAINER_ID)
	if (!container) {
		console.warn(`Element with ID ${SELECTORS.HIDE.CONTAINER_ID} not found`)
		return
	}

	const savedStates = await loadState(ELEMENTS)

	for (const cfg of ELEMENTS) {
		const saved = savedStates?.[cfg.storageKey]
		const isHidden = typeof saved === 'boolean' ? saved : cfg.isHidden

		const input = $(`#${cfg.id}`, container)
		if (input) input.checked = isHidden
		updateDataAttr(cfg, isHidden)
	}

	updateAllGroupCounts(container)

	// Remove first so a repeated mount cannot stack listeners
	container.removeEventListener('change', onChange)
	container.addEventListener('change', onChange)
}

// --- EXPORTS ---
export { mount, templateHTML as renderCustomHides }
