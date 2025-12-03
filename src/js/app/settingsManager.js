import { SELECTORS } from './config/selectors.js'
import { PFX } from './config/consts.js'
import { renderColorsTab, init as initColors, mount as mountColors } from './custom-colors/index.js'
import { renderFontsTab, init as initFonts, mount as mountFonts } from './custom-fonts/index.js'
import { renderLayoutsTab, init as initWidths, mount as mountWidths } from './custom-layouts/index.js'

// =====================================================
// STATE - global state (cached refs, constants)
// =====================================================
let $settings = null
let $tabButtons = []
let $tabPanes = []

const ACTIVE_CLASS = 'active'
const HIDDEN_CLASS = 'hidden'

const TABS_CONFIG = [
	{ id: 'colors', label: 'Color', render: renderColorsTab, init: initColors, mount: mountColors },
	{ id: 'fonts', label: 'Font', render: renderFontsTab, init: initFonts, mount: mountFonts },
	{ id: 'layout', label: 'Layout', render: renderLayoutsTab, init: initWidths, mount: mountWidths },
]

// =====================================================
// TEMPLATE - UI rendergn
// =====================================================
function templateHTML() {
	const buttons = TABS_CONFIG.map(
		({ label }, i) => `
			<button class="${SELECTORS.SETTINGS.TABS.BUTTON} py-2 px-4 focus:outline-none text-center ${
			i === 0 ? ACTIVE_CLASS : ''
		}" data-tab="${i}">
				${label}
			</button>`
	).join('')

	const panes = TABS_CONFIG.map(
		({ id, render }, i) => `
			<div id="${PFX}-tab-${id}"
				class="${SELECTORS.SETTINGS.TABS.PANE} ${i === 0 ? ACTIVE_CLASS : HIDDEN_CLASS}">
				${render()}
			</div>`
	).join('')

	return `
		<header class="mb-5">
			<h2 class="text-center font-medium gpth-settings__title">
				<span class="font-semibold">GPThemes</span> Customization
			</h2>
		</header>
		<main>
			<div class="${SELECTORS.SETTINGS.TABS.ROOT}">
				<div class="${SELECTORS.SETTINGS.TABS.BUTTONS} p-1 font-semibold mb-5">
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
	el.className = `${SELECTORS.SETTINGS.ROOT} fixed flex flex-col`
	el.innerHTML = templateHTML()

	// 2. Append to DOM FIRST
	document.body.appendChild(el)

	// 3. Cache elements AFTER they're in DOM
	setElements(el)

	// 4. Init modules in parallel, mount sequentially after DOM ready
	await Promise.allSettled(TABS_CONFIG.map(({ init }) => init()))

	//  Wait for next tick to ensure DOM is fully ready
	requestAnimationFrame(() => {
		// 5. Mount modules
		TABS_CONFIG.forEach(({ mount }) => mount(el))
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
function addListeners() {
	$settings.querySelector(`.${SELECTORS.SETTINGS.TABS.BUTTONS}`).addEventListener('click', onTabsSwitching)
	// handleTabsSwitching()
}

function onClickOutside(e) {
	const isClickInside = $settings.contains(e.target)
	const isToggleBtn = e.target.id === SELECTORS.SETTINGS.OPEN_BTN

	if (!isClickInside && !isToggleBtn) onCloseSettings()
}

function onTabsSwitching(e) {
	// Event delegation for tabs - single listener instead of N
	const btn = e.target.closest(`.${SELECTORS.SETTINGS.TABS.BUTTON}`)
	if (!btn) return

	const newIndex = parseInt(btn.dataset.tab)
	const activeIndex = $tabButtons.findIndex((t) => t.classList.contains(ACTIVE_CLASS))

	// console.log(activeIndex, newIndex)

	if (activeIndex === newIndex) return

	// Swap states
	$tabButtons[activeIndex].classList.remove(ACTIVE_CLASS)
	$tabButtons[newIndex].classList.add(ACTIVE_CLASS)
	$tabPanes[activeIndex].classList.add(HIDDEN_CLASS)
	$tabPanes[newIndex].classList.remove(HIDDEN_CLASS)
}

function onOpenSettings() {
	if (!$settings) return

	$settings.classList.add(SELECTORS.SETTINGS.OPEN_STATE)

	// Small delay to allow reflow before attaching listener
	requestAnimationFrame(() => {
		document.addEventListener('click', onClickOutside, true)
	})
}

function onCloseSettings() {
	if (!$settings) return

	$settings.classList.remove(SELECTORS.SETTINGS.OPEN_STATE)
	document.removeEventListener('click', onClickOutside, true)
}

// =====================================================
// Exports
// =====================================================
export { createSettings, onOpenSettings, onCloseSettings }
