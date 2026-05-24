import { renderSeparator } from '../components/renderUtils.js'
import {
	cleanup as cleanupCustomHides,
	mount as mountCustomHides,
	renderCustomHides,
} from '../custom-hide/index.js'
import { cleanup as cleanupActivityPanel, mount as mountActivityPanel } from './activityPanel.js'
import {
	cleanup as cleanupIntelligenceDialog,
	mount as mountIntelligenceDialog,
} from './intelligenceDialog.js'
import {
	cleanup as cleanupChatBubbles,
	mount as mountChatBubbles,
	renderCustomChatBubbles,
} from './toggleChatBubbles.js'
// Import child modules
// import { mount as mountScrolldown, renderCustomScrolldown } from './scrolldown.js'
import {
	cleanup as cleanupCustomChatboxHeight,
	mount as mountCustomChatboxHeight,
	renderCustomChatboxHeight,
} from './toggleChatboxHeight.js'
import {
	cleanup as cleanupPulseCards,
	mount as mountPulseCards,
	renderExpandPulseCards,
} from './togglePulseCards.js'
import {
	cleanup as cleanupWidths,
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
	cleanup()

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

function cleanup() {
	cleanupWidths()
	cleanupIntelligenceDialog()
	cleanupActivityPanel()
	cleanupPulseCards()
	cleanupCustomChatboxHeight()
	cleanupChatBubbles()
	cleanupCustomHides()
}

// =====================================================
// Exports
// =====================================================
export { cleanup, init, mount, templateHTML as renderLayoutsTab }
