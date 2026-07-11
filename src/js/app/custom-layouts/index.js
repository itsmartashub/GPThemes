import { renderSeparator } from '../components/renderUtils.js'
import {
	cleanup as cleanupCustomHides,
	init as initCustomHides,
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
	init as initChatBubbles,
	mount as mountChatBubbles,
	renderCustomChatBubbles,
} from './toggleChatBubbles.js'
import {
	cleanup as cleanupCustomChatboxHeight,
	init as initCustomChatboxHeight,
	mount as mountCustomChatboxHeight,
	renderCustomChatboxHeight,
} from './toggleChatboxHeight.js'
import {
	cleanup as cleanupPulseCards,
	init as initPulseCards,
	mount as mountPulseCards,
	renderExpandPulseCards,
} from './togglePulseCards.js'
import {
	cleanup as cleanupWidths,
	init as initWidths,
	mount as mountWidths,
	templateHTML as renderWidthsSection,
} from './widths.js'

let runtimeMarkersMounted = false

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
		</section>
	`
}

async function init() {
	await Promise.all([
		initWidths(),
		initCustomHides(),
		initCustomChatboxHeight(),
		initPulseCards(),
		initChatBubbles(),
	])

	if (!runtimeMarkersMounted) {
		mountIntelligenceDialog()
		mountActivityPanel()
		runtimeMarkersMounted = true
	}
}

async function mount() {
	await Promise.all([
		mountWidths(),
		mountCustomHides(),
		mountCustomChatboxHeight(),
		mountPulseCards(),
		mountChatBubbles(),
	])
}

function cleanup() {
	cleanupWidths()
	cleanupCustomHides()
	cleanupCustomChatboxHeight()
	cleanupPulseCards()
	cleanupChatBubbles()
	cleanupIntelligenceDialog()
	cleanupActivityPanel()
	runtimeMarkersMounted = false
}

export { cleanup, init, mount, templateHTML as renderLayoutsTab }
