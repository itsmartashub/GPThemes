import { renderButton } from '../components/renderButtons'
import { renderSeparator } from '../components/renderUtils'
import { renderUserAccentBgToggle, handleUserAccentBgListeners } from './accentUserBubble'
import { accentColorManager } from './accentColorManager'
import { textColorManager } from './textColorManager'
import { SELECTORS } from '../config/selectors'

// --- HTML GENERATION ---
let cachedHTML = null
const generateColorsTabHTML = () => {
	if (cachedHTML) return cachedHTML

	cachedHTML = `
    <section>
      <div>
        ${accentColorManager.generateHTML()}
        ${renderSeparator}
        ${textColorManager.generateHTML()}
        ${renderSeparator}
        ${renderUserAccentBgToggle()}
        ${renderSeparator}
      </div>
      <footer class="flex justify-center mt-8">
        ${renderButton({ id: SELECTORS.ACCENT.RESET_BTN_ID, content: 'Reset Colors', className: 'btn-primary' })}
      </footer>
    </section>`

	return cachedHTML
}

// --- RESET ---
const resetAllColors = async () => {
	await accentColorManager.resetAll()
	await textColorManager.resetAll()
}

// --- INIT ---
const init = async () => {
	await accentColorManager.init()
	await textColorManager.init()
	handleUserAccentBgListeners()
}

// --- CLEANUP ---
const destroy = () => {
	accentColorManager.destroy()
	textColorManager.destroy()
}

export { generateColorsTabHTML as renderColorsTab, resetAllColors as resetAllAccents, init, destroy }
