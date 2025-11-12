import { SELECTORS } from '../config/selectors.js'
import { renderButton } from '../components/renderButtons.js'
import { renderSeparator } from '../components/renderUtils.js'
import { icon_full_width, icon_sync } from '../components/icons.js'
import { renderSliderCard } from '../components/renderSlider.js'
import { renderToggle } from '../components/renderToggles.js'

// Import child modules
import { renderCustomScrolldown, mount as mountScrolldown } from './scrolldown.js'
import { renderCustomChatBubbles, mount as mountChatBubbles } from './toggleChatBubbles.js'
import { renderCustomChatboxHeight, mount as mountCustomChatboxHeight } from './toggleChatboxHeight.js'
import { renderCustomHides, mount as mountCustomHides } from '../custom-hide/index.js'
import {
	init as initWidths,
	mount as mountWidths,
	resetAll as resetWidths,
	templateHTML as renderWidthsSection,
} from './widths.js'

// --- TEMPLATE ---
function templateHTML() {
	return `
    <section id="sectionLayouts" class="gpth-layouts">
      ${renderWidthsSection()}
      
      ${renderSeparator}
      ${renderCustomHides()}
      ${renderSeparator}
      ${renderCustomChatboxHeight()}
      ${renderSeparator}
      ${renderCustomChatBubbles()}
      ${renderSeparator}
      ${renderCustomScrolldown()}
    </section>`
}

// --- LISTENERS ---
function resetAll() {
	resetWidths()
}

// --- INIT ---
async function init() {
	// console.log('[INIT LAYOUT]')
	await initWidths()
}

// --- MOUNT ---
function mount() {
	// console.log('[MOUNT LAYOUT]')

	// Mount width management
	mountWidths()

	// Mount other child modules
	mountCustomChatboxHeight()
	mountChatBubbles()
	mountScrolldown()
	mountCustomHides()
}

// --- EXPORTS ---
export { templateHTML as renderLayoutsTab, init, mount }
