import { debounce } from '../utils/dom.js'
import { icon_kofi_cup } from './components/icons.js'
import { renderHeaderAction } from './components/renderHeaderActions.js'
import { PFX } from './config/consts.js'
import { SELECTORS } from './config/selectors.js'
import { init as initColors, mount as mountColors, renderColorsTab } from './custom-colors/index.js'
import { init as initFonts, mount as mountFonts, renderFontsTab } from './custom-fonts/index.js'
import {
	init as initWidths,
	mount as mountWidths,
	renderLayoutsTab,
} from './custom-layouts/index.js'

// =====================================================
// STATE - global state (cached refs, constants)
// =====================================================
let $settings = null
let $tabButtons = []
let $tabPanes = []
let $fab = null

const ACTIVE_CLASS = 'active'
const HIDDEN_CLASS = 'hidden'

const TABS_CONFIG = [
	{ id: 'colors', label: 'Color', render: renderColorsTab, init: initColors, mount: mountColors },
	{ id: 'fonts', label: 'Font', render: renderFontsTab, init: initFonts, mount: mountFonts },
	{
		id: 'layout',
		label: 'Layout',
		render: renderLayoutsTab,
		init: initWidths,
		mount: mountWidths,
	},
]

// Small round actions in the header: Ko-fi now, import/export will join here. href renders a link, id renders a button
const HEADER_ACTIONS = [
	{ href: 'https://ko-fi.com/http417', label: 'Support on Ko-fi', icon: icon_kofi_cup },
]

// =====================================================
// TEMPLATE - UI rendergn
// =====================================================

function templateHTML() {
	const buttons = TABS_CONFIG.map(
		({ label }, i) => `
			<button class="${SELECTORS.SETTINGS.TABS.BUTTON} ${i === 0 ? ACTIVE_CLASS : ''}" data-tab="${i}">
				${label}
			</button>`,
	).join('')

	const panes = TABS_CONFIG.map(
		({ id, render }, i) => `
			<div id="${PFX}-tab-${id}"
				class="${SELECTORS.SETTINGS.TABS.PANE} ${i === 0 ? ACTIVE_CLASS : HIDDEN_CLASS}">
				${render()}
			</div>`,
	).join('')

	const actions = HEADER_ACTIONS.map(renderHeaderAction).join('')

	return `
		<header class="gpth-settings__header">
			<div class="${SELECTORS.SETTINGS.HEADER_ACTIONS}">
				${actions}
			</div>
			<h2 class="gpth-settings__title">
				<span>GPThemes</span> Customization
			</h2>
		</header>
		<main>
			<div class="${SELECTORS.SETTINGS.TABS.ROOT}">
				<div class="${SELECTORS.SETTINGS.TABS.BUTTONS}">
					${buttons}
				</div>
				<div class="${SELECTORS.SETTINGS.TABS.CONTENT}">
					${panes}
				</div>
			</div>
		</main>`
}

// =====================================================
// Lifecycle: CREATE (build DOM, init modules, mount)
// =====================================================
async function createSettings() {
	// console.log('[CREATE SETTINGS]')

	// 1. Create root container
	const el = document.createElement('div')
	el.className = SELECTORS.SETTINGS.ROOT
	el.innerHTML = templateHTML()

	// 2. Append to DOM FIRST
	document.body.appendChild(el)

	// 3. Cache elements AFTER they're in DOM
	setElements(el)

	// 4. Init modules in parallel, mount sequentially after DOM ready
	/* await Promise.allSettled(TABS_CONFIG.map(({ init }) => init()))

	//  Wait for next tick to ensure DOM is fully ready
	requestAnimationFrame(() => {
		// 5. Mount modules
		TABS_CONFIG.forEach(({ mount }) => {
			mount(el)
		})
		// 6. Attach global listeners
		addListeners()
	}) */

	// Check results of each init
	const results = await Promise.allSettled(TABS_CONFIG.map(({ init }) => init()))

	results.forEach((result, index) => {
		if (result.status === 'rejected') {
			console.error(`[Settings] ${TABS_CONFIG[index].id} init failed:`, result.reason)
		}
	})
	//  Wait for next tick to ensure DOM is fully ready
	requestAnimationFrame(() => {
		// 5. Mount modules
		TABS_CONFIG.forEach(({ mount }) => {
			mount(el)
		})
		// 6. Attach global listeners
		addListeners()
	})

	return el
}

// =====================================================
// ELEMENTS - cache DOM elemnt references
// =====================================================
function setElements(root) {
	$settings = root
	$tabButtons = [...$settings.querySelectorAll(`.${SELECTORS.SETTINGS.TABS.BUTTON}`)]
	$tabPanes = [...$settings.querySelectorAll(`.${SELECTORS.SETTINGS.TABS.PANE}`)]
}

// =====================================================
// LISTENERS
// =====================================================
const onWindowResizeDebounced = debounce(onWindowResize, 150)

function onWindowResize() {
	if (isSettingsOpen() && $fab) {
		positionPanel($fab, $settings)
	}
}

function addListeners() {
	$settings
		.querySelector(`.${SELECTORS.SETTINGS.TABS.BUTTONS}`)
		?.addEventListener('click', onTabsSwitching)
	window.addEventListener('resize', onWindowResizeDebounced)
}

function onClickOutside(e) {
	// The FAB is the settings trigger, so clicking it must not count as "outside" (it toggles on its own)
	const isTrigger = e.target.closest(`.${SELECTORS.FAB.ROOT}`)

	if (!$settings.contains(e.target) && !isTrigger) onCloseSettings()
}

function onTabsSwitching(e) {
	// Event delegation for tabs - single listener instead of N
	const btn = e.target.closest(`.${SELECTORS.SETTINGS.TABS.BUTTON}`)
	if (!btn) return

	const newIndex = +btn.dataset.tab
	const activeIndex = $tabButtons.findIndex((t) => t.classList.contains(ACTIVE_CLASS))

	if (activeIndex === newIndex) return

	// Swap states
	$tabButtons[activeIndex].classList.remove(ACTIVE_CLASS)
	$tabButtons[newIndex].classList.add(ACTIVE_CLASS)
	$tabPanes[activeIndex].classList.add(HIDDEN_CLASS)
	$tabPanes[newIndex].classList.remove(HIDDEN_CLASS)
}

// =====================================================
// PANEL POSITIONING
// =====================================================

// SMALL_SCREEN_PX must match the $sm breakpoint (640px) in _bp.scss
const SMALL_SCREEN_PX = 640

/* Gap in pixels between the FAB and the panel edge. */
const PANEL_GAP = 10

/* Position the settings panel relative to $fab, choosing the side with the most room.
Order of preference: right → left → below → above.
On screens ≤ SMALL_SCREEN_PX the panel is a centered sheet — CSS handles it, JS stays out. */
function positionPanel($fabEl, $panel) {
	if (!$fabEl || !$panel) return
	if (window.innerWidth <= SMALL_SCREEN_PX) {
		// Reset any JS-set position so the CSS sheet layout takes over
		$panel.style.left = ''
		$panel.style.top = ''
		$panel.style.right = ''
		$panel.style.bottom = ''
		return
	}

	const vw = window.innerWidth
	const vh = window.innerHeight
	const fab = $fabEl.getBoundingClientRect()
	const pw = $panel.offsetWidth
	const ph = $panel.offsetHeight

	const spaceRight = vw - fab.right - PANEL_GAP
	const spaceLeft = fab.left - PANEL_GAP
	const spaceBelow = vh - fab.bottom - PANEL_GAP

	const maxTop = Math.max(PANEL_GAP, vh - ph - PANEL_GAP)
	const maxLeft = Math.max(PANEL_GAP, vw - pw - PANEL_GAP)

	let left, top

	if (spaceRight >= pw) {
		// Right of FAB
		left = fab.right + PANEL_GAP
		top = Math.min(Math.max(fab.top, PANEL_GAP), maxTop)
	} else if (spaceLeft >= pw) {
		// Left of FAB
		left = fab.left - pw - PANEL_GAP
		top = Math.min(Math.max(fab.top, PANEL_GAP), maxTop)
	} else if (spaceBelow >= ph) {
		// Below FAB
		top = fab.bottom + PANEL_GAP
		left = Math.min(Math.max(fab.left, PANEL_GAP), maxLeft)
	} else {
		// Above FAB (fallback)
		top = Math.max(fab.top - ph - PANEL_GAP, PANEL_GAP)
		left = Math.min(Math.max(fab.left, PANEL_GAP), maxLeft)
	}

	$panel.style.left = `${Math.round(left)}px`
	$panel.style.top = `${Math.round(top)}px`
	$panel.style.right = 'auto'
	$panel.style.bottom = 'auto'
}

function isSettingsOpen() {
	return Boolean($settings?.classList.contains(SELECTORS.SETTINGS.OPEN_STATE))
}

function toggleSettings($fabEl) {
	if (isSettingsOpen()) {
		onCloseSettings()
	} else {
		onOpenSettings($fabEl)
	}
}

function onOpenSettings($fabEl) {
	if (!$settings) return console.warn('[GPThemes] $settings not found')

	// Cache the triggering FAB element so positionPanel can re-use it
	$fab = $fabEl ?? $fab

	positionPanel($fab, $settings)
	$settings.classList.add(SELECTORS.SETTINGS.OPEN_STATE)

	// Small delay to allow reflow before attaching listener
	requestAnimationFrame(() => {
		document.addEventListener('click', onClickOutside, true)
	})
}

function onCloseSettings() {
	if (!$settings) return console.warn('[GPThemes] $settings not found')

	$settings.classList.remove(SELECTORS.SETTINGS.OPEN_STATE)
	document.removeEventListener('click', onClickOutside, true)
}

// =====================================================
// Exports
// =====================================================
export {
	createSettings,
	onOpenSettings,
	onCloseSettings,
	toggleSettings,
	isSettingsOpen,
	positionPanel,
}
