import { renderButton } from '../components/renderButtons.js'
import { renderInfo } from '../components/renderInfo.js'
import { renderSeparator } from '../components/renderUtils.js'
import { SELECTORS } from '../config/selectors.js'
import {
	init as initAccentColors,
	mount as mountAccentColors,
	renderAccentsColors,
	resetAllAccents,
} from './accentColors.js'
import { mount as mountAllTextAccent, renderAllTextAccent } from './toggleAccentAllText.js'
import { mount as mountUserBubbleAccent, renderUserAccentBgToggle } from './toggleAccentUserBubble.js'

// =====================================================
// TEMPLATE
// =====================================================
function templateHTML() {
	return `
		<section id="sectionColors">
			<div>
				${renderAccentsColors()}
			</div>

			${renderInfo({
				text: `Supported formats: <strong>#RGB</strong> and <strong>#RRGGBB</strong>. Other color formats (<strong>RGB</strong>, <strong>HSV</strong>, <strong>HSL</strong>) can technically be entered, but they will be automatically converted to <strong>HEX</strong>.`,
				classNames: 'm-6',
			})}
				
			${renderSeparator}

			<div>
				${renderUserAccentBgToggle()}
				${renderAllTextAccent()}
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

// =====================================================
// LISTENERS - RESET
// =====================================================
function resetAll() {
	resetAllAccents()
}

// =====================================================
// Lifecycle: INIT
// =====================================================
async function init() {
	// console.log('[INIT COLORS]')
	await initAccentColors()
}

// =====================================================
// Lifecycle: MOUNT
// =====================================================
function mount() {
	// console.log('[MOUNT COLORS]')
	// Setup elements
	const $resetBtn = document.getElementById(SELECTORS.ACCENT.RESET_BTN_ID)

	// Attach listeners
	$resetBtn.addEventListener('click', resetAll)

	// Mount other child modules
	mountAccentColors($resetBtn)
	mountUserBubbleAccent()
	mountAllTextAccent()
}

// --- EXPORTS ---
export { templateHTML as renderColorsTab, init, mount }
