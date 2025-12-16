import { icon_full_width, icon_sync } from '../components/icons.js'
import { renderButton } from '../components/renderButtons.js'
import { renderSliderCard } from '../components/renderSlider.js'
import { renderToggle } from '../components/renderToggles.js'
import { renderSeparator } from '../components/renderUtils.js'
import { SELECTORS } from '../config/selectors.js'
import { mount as mountCustomHides, renderCustomHides } from '../custom-hide/index.js'
// Import child modules
import { mount as mountScrolldown, renderCustomScrolldown } from './scrolldown.js'
import { mount as mountChatBubbles, renderCustomChatBubbles } from './toggleChatBubbles.js'
import {
	mount as mountCustomChatboxHeight,
	renderCustomChatboxHeight,
} from './toggleChatboxHeight.js'
import {
	init as initWidths,
	mount as mountWidths,
	templateHTML as renderWidthsSection,
	resetAll as resetWidths,
} from './widths.js'

// =====================================================
// TEMPLATE
// =====================================================

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

// =====================================================
// LISTENERS - RESET
// =====================================================

function onResetAll() {
	resetWidths()
}

// =====================================================
// Lifecycle: INIT
// =====================================================

async function init() {
	// console.log('[INIT LAYOUT]')
	await initWidths()
}

// =====================================================
// Lifecycle: MOUNT
// =====================================================

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

// =====================================================
// Exports
// =====================================================
export { templateHTML as renderLayoutsTab, init, mount }
