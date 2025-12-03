import { SELECTORS } from '../config/selectors.js'
import { renderButton } from '../components/renderButtons.js'
import { renderSeparator } from '../components/renderUtils.js'
import { renderUserAccentBgToggle, mount as mountUserBubbleAccent } from './toggleAccentUserBubble.js'
import { renderAllTextAccent, mount as mountAllTextAccent } from './toggleAccentAllText.js'
import {
	renderAccentsColors,
	mount as mountAccentColors,
	init as initAccentColors,
	resetAllAccents,
} from './accentColors.js'

// =====================================================
// TEMPLATE
// =====================================================
function templateHTML() {
	return `
		<section id="sectionColors">
			<div>
				${renderAccentsColors()}
			</div>

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
	let $resetBtn = document.getElementById(SELECTORS.ACCENT.RESET_BTN_ID)

	// Attach listeners
	$resetBtn.addEventListener('click', resetAll)

	// Mount other child modules
	mountAccentColors($resetBtn)
	mountUserBubbleAccent()
	mountAllTextAccent()
}

// --- EXPORTS ---
export { templateHTML as renderColorsTab, init, mount }
