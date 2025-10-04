import { renderButton } from '../components/renderButtons'
import { renderSeparator } from '../components/renderUtils'
import { renderUserAccentBgToggle, handleUserAccentBgListeners } from './accentUserBubble'
import { loadColors, initColorPickers, destroyPickers, resetAllAccents, applyCSSColors } from './accentColorManager'
import { SELECTORS } from '../config/selectors'
import { COLOR_CONFIG } from './accentColorManager'

// --- HTML GENERATION ---
let cachedHTML = null

const generateColorsTabHTML = () => {
	if (cachedHTML) return cachedHTML

	const colorPickersHTML = COLOR_CONFIG.map(
		(c) => `
        <div class="colorpicker">
            <button id="${c.id}" data-theme-key="${c.storageKey}"></button>
            <label for="${c.id}">${c.label}</label>
        </div>
        `
	).join('')

	cachedHTML = `
        <section>
            <div class="colorpicker-container">${colorPickersHTML}</div>
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

	return cachedHTML
}

// --- INITIALIZATION ---
const init = async () => {
	const colors = await loadColors()
	applyCSSColors(colors)
	initColorPickers(colors)
	handleUserAccentBgListeners()
}

// --- PUBLIC API ---
export { generateColorsTabHTML as renderColorsTab, resetAllAccents, init, destroyPickers }
