import ColorPicker from '../../libs/jscolorpicker/colorpicker.js'
import browser from 'webextension-polyfill'
import { SELECTORS } from './config/selectors.js'
import { q } from '../utils/dom.js'
import { getCssVar } from '../utils/getCssVar.js'
import { $settings } from './settingsManager.js'
import { renderButton } from './components/renderButtons.js'
import { renderSeparator } from './components/renderUtils.js'
import { renderUserAccentBgToggle, handleUserAccentBgListeners } from './custom-colors/accentUserBubble.js'

// --- CONFIG WITH THEME ---

const COLOR_CONFIG = [
	{
		theme: 'light',
		id: SELECTORS.ACCENT.LIGHT_ID,
		label: 'Accent <span>Light</span>',
		default: getCssVar('--c-default-accent-light', '#6c4756'),
		storageKey: 'accent_light',
	},
	{
		theme: 'dark',
		id: SELECTORS.ACCENT.DARK_ID,
		label: 'Accent <span>Dark</span>',
		default: getCssVar('--c-default-accent-dark', '#bfa8ff'),
		storageKey: 'accent_dark',
	},
]

const accentPickers = new Map()
const rootStyle = document.documentElement.style
const storageKeys = COLOR_CONFIG.map((c) => c.storageKey)

// --- CSS VARS ---
const updateCSSVar = (theme, color) => rootStyle.setProperty(`--user-accent-${theme}`, color)
const removeCSSVars = () => COLOR_CONFIG.forEach((c) => rootStyle.removeProperty(`--user-accent-${c.theme}`))

// RAF throttle for smooth drag updates
const rafThrottle = (fn) => {
	let rafId = null
	return (...args) => {
		if (rafId) return
		rafId = requestAnimationFrame(() => {
			fn(...args)
			rafId = null
		})
	}
}

// --- STORAGE ---
const saveColor = async (key, value) => {
	try {
		await browser.storage.sync.set({ [key]: value })
	} catch (err) {
		console.error('Save error:', err)
	}
}

// Lazy defaults: just return stored color or fallback
const loadColors = async () => {
	const stored = await browser.storage.sync.get(storageKeys)
	return Object.fromEntries(COLOR_CONFIG.map((c) => [c.theme, stored[c.storageKey] ?? c.default]))
}

// --- COLOR PICKERS ---
const initColorPickers = (colors) => {
	COLOR_CONFIG.forEach((cfg) => {
		const btn = q(`#${cfg.id}`, $settings)
		if (!btn) return

		const initialColor = colors[cfg.theme] ?? cfg.default
		const picker = new ColorPicker(btn, {
			toggleStyle: 'button',
			container: `.${SELECTORS.SETTINGS.ROOT}`,
			color: initialColor,
			submitMode: 'instant',
			enableAlpha: false,
			formats: false,
			defaultFormat: 'hex',
			dialogPlacement: 'bottom',
			dismissOnOutsideClick: true,
			dismissOnEscape: true,
			showClearButton: true,
		})

		let lastColor = null
		const throttledUpdate = rafThrottle((hex) => {
			if (hex !== lastColor) {
				lastColor = hex
				updateCSSVar(cfg.theme, hex)
			}
		})

		picker.on('pick', (color) => {
			color && throttledUpdate(color.string('hex'))

			/* Reset to default if cancelled or if trigger clear event */
			if (!color) {
				throttledUpdate(cfg.default)
				picker.setColor(cfg.default, false)
			}
		})
		picker.on('close', async () => {
			const finalColor = picker.color?.string('hex')
			if (finalColor) await saveColor(cfg.storageKey, finalColor)
		})

		accentPickers.set(cfg.id, picker)
	})
}

// --- RESET / CLEANUP ---
const destroyPickers = () => {
	accentPickers.forEach((p) => p.destroy())
	accentPickers.clear()
}

const resetAllAccents = async () => {
	COLOR_CONFIG.forEach((c) => {
		const picker = accentPickers.get(c.id)
		if (picker) picker.setColor(c.default, false)
	})
	removeCSSVars()
	const defaults = Object.fromEntries(COLOR_CONFIG.map((c) => [c.storageKey, c.default]))
	await browser.storage.sync.set(defaults)
}

// --- HTML GENERATION (cached) ---
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
        ${renderButton({ id: SELECTORS.ACCENT.RESET_BTN_ID, content: 'Reset Colors', className: 'btn-primary' })}
      </footer>
    </section>`

	return cachedHTML
}

// --- INIT ---
const init = async () => {
	destroyPickers()
	const colors = await loadColors()

	// Apply vars immediately for first paint
	COLOR_CONFIG.forEach((c) => updateCSSVar(c.theme, colors[c.theme]))

	initColorPickers(colors)
	handleUserAccentBgListeners()
}

export { generateColorsTabHTML as renderColorsTab, resetAllAccents, init, destroyPickers }
