import { SELECTORS } from '../config/selectors.js'
import { $ } from '../../utils/dom.js'
import { renderButton } from '../components/renderButtons.js'
import { renderSeparator } from '../components/renderUtils.js'
import { renderUserAccentBgToggle, mount as mountUserBubbleAccent } from './toggleAccentUserBubble.js'
import {
	renderAccentsColors,
	mount as mountAccentColors,
	init as initAccentColors,
	resetAllAccents,
} from './accentColors.js'

// --- STATE ---
// let $rootSettings = null
// let $resetBtn = null

// --- TEMPLATE ---
function templateHTML() {
	return `
		<section id="sectionColors">
			<div>
				${renderAccentsColors()}
			</div>
			<div>
				${renderSeparator}
				${renderUserAccentBgToggle()}
				${renderSeparator}
			</div>
			<footer class="flex justify-center mt-8">
				${renderButton({
					id: SELECTORS.ACCENT.RESET_BTN_ID,
					content: 'Reset Colors',
					className: 'btn-primary',
				})}
			</footer>
		</section>`
}

// --- LISTENERS ---
function resetAll() {
	resetAllAccents()
}

// --- INIT ---
async function init() {
	console.log('[INIT COLORS]')
	await initAccentColors()
}

// --- MOUNT ---
function mount(rootSettings) {
	console.log('[MOUNT COLORS]')
	// Setup elements
	let $rootSettings = rootSettings
	let $resetBtn = $(`#${SELECTORS.ACCENT.RESET_BTN_ID}`, rootSettings)
	// setElements(rootSettings)

	// Attach listeners
	$resetBtn.addEventListener('click', resetAll)
	// setListeners()

	// Mount other child modules
	mountAccentColors($rootSettings, $resetBtn)
	mountUserBubbleAccent()
}

// --- EXPORTS ---
export { templateHTML as renderColorsTab, init, mount }
