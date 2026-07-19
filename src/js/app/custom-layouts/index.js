import { renderSeparator } from '../components/renderUtils.js'
import { mount as mountCustomHides, renderCustomHides } from '../custom-hide/index.js'
/* Import child modules */
// import { mount as mountScrolldown, renderCustomScrolldown } from './scrolldown.js'
import { mount as mountChatBubbles, renderCustomChatBubbles } from './toggleChatBubbles.js'
import { mount as mountCustomChatboxHeight, renderCustomChatboxHeight } from './toggleChatboxHeight.js'
import { init as initWidths, mount as mountWidths, templateHTML as renderWidthsSection } from './widths.js'

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
		</section>`
}
// ${renderSeparator}
// ${renderCustomScrolldown()}

async function init() {
	// console.log('[INIT LAYOUT]')
	await initWidths()
}

function mount() {
	// console.log('[MOUNT LAYOUT]')

	// Mount width management
	mountWidths()

	// Mount other child modules
	mountCustomChatboxHeight()
	mountChatBubbles()
	// mountScrolldown()
	mountCustomHides()
}

export { init, mount, templateHTML as renderLayoutsTab }
