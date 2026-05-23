import { renderSeparator } from '../components/renderUtils.js'
import { mount as mountCustomHides, renderCustomHides } from '../custom-hide/index.js'
import { mount as mountActivityPanel } from './activityPanel.js'
import { mount as mountIntelligenceDialog } from './intelligenceDialog.js'
// Import child modules
// import { mount as mountScrolldown, renderCustomScrolldown } from './scrolldown.js'
import { mount as mountChatBubbles, renderCustomChatBubbles } from './toggleChatBubbles.js'
import {
	mount as mountCustomChatboxHeight,
	renderCustomChatboxHeight,
} from './toggleChatboxHeight.js'
import { mount as mountPulseCards, renderExpandPulseCards } from './togglePulseCards.js'
import {
	init as initWidths,
	mount as mountWidths,
	templateHTML as renderWidthsSection,
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
			${renderExpandPulseCards()}
			${renderSeparator}
			${renderCustomChatBubbles()}
			</section>`
}
// ${renderSeparator}
// ${renderCustomScrolldown()}

// =====================================================
// LISTENERS - RESET
// =====================================================

// function onResetAll() {
// 	resetWidths()
// }

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
	mountPulseCards()
	mountChatBubbles()
	mountIntelligenceDialog()
	mountActivityPanel()

	// mountScrolldown()
	mountCustomHides()
}

// =====================================================
// Exports
// =====================================================
export { init, mount, templateHTML as renderLayoutsTab }
