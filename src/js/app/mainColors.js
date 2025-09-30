import ColorPicker from '../../libs/jscolorpicker/colorpicker.js'
import { storage } from 'webextension-polyfill'
import { SELECTORS } from './config/selectors.js'
import { q } from '../utils/dom.js'
import { $settings } from './settingsManager.js'
import { renderButton } from './components/renderButtons.js'
import { renderSeparator } from './components/renderUtils.js'
import { renderUserAccentBgToggle, handleUserAccentBgListeners } from './custom-colors/accentUserBubble.js'

// --- CONFIG ---
const COLOR_CONFIG = {
	light: {
		id: SELECTORS.ACCENT.LIGHT_ID,
		label: 'Accent <span>Light</span>',
		default: '#6c4756',
		storageKey: 'accent_light',
	},
	dark: {
		id: SELECTORS.ACCENT.DARK_ID,
		label: 'Accent <span>Dark</span>',
		default: '#bfa8ff',
		storageKey: 'accent_dark',
	},
}

const configs = Object.values(COLOR_CONFIG)
const storageKeys = configs.map((c) => c.storageKey)
const accentPickers = new Map()

// Cache root style to minimize DOM access
const rootStyle = document.documentElement.style

// --- CSS VARS ---
const updateCSSVar = (theme, color) => rootStyle.setProperty(`--user-accent-${theme}`, color)
const removeCSSVars = () =>
	Object.keys(COLOR_CONFIG).forEach((theme) => rootStyle.removeProperty(`--user-accent-${theme}`))

// RAF throttle for hot-path updates (drag / mousemove)
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
		await storage.sync.set({ [key]: value })
	} catch (err) {
		console.error('Save error:', err)
	}
}

const loadColors = async () => {
	const stored = await storage.sync.get(storageKeys)
	return Object.fromEntries(
		configs.map((c) => [c.id === COLOR_CONFIG.light.id ? 'light' : 'dark', stored[c.storageKey] ?? c.default])
	)
}

/* On first install / first run, all defaults are written to storage.sync. Every device sees the same default colors from the start. Makes debugging or future features (like showing saved colors in a settings UI) predictable. */
/* const ensureStorage = async () => {
	const stored = await storage.sync.get(storageKeys)
	const missing = Object.fromEntries(
		configs.filter((c) => !(c.storageKey in stored)).map((c) => [c.storageKey, c.default])
	)
	if (Object.keys(missing).length) await storage.sync.set(missing)
} */

// --- COLOR PICKERS ---
const initColorPickers = (colors) => {
	configs.forEach((cfg) => {
		const btn = q(`#${cfg.id}`, $settings)
		if (!btn) return

		const theme = cfg.id === COLOR_CONFIG.light.id ? 'light' : 'dark'
		const initialColor = colors[theme] ?? cfg.default

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
		})

		// 🔥 HOT PATH: drag updates
		let lastColor = null
		const throttledUpdate = rafThrottle((hex) => {
			if (hex !== lastColor) {
				lastColor = hex
				updateCSSVar(theme, hex)
			}
		})

		picker.on('pick', (color) => color && throttledUpdate(color.string('hex')))
		picker.on('close', async () => {
			const finalColor = picker.color?.string('hex')
			if (finalColor) {
				try {
					await saveColor(cfg.storageKey, finalColor)
				} catch (error) {
					console.error('Error during saving the accent color:' + error)
				}
			}
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
	configs.forEach((c) => {
		const picker = accentPickers.get(c.id)
		if (picker) picker.setColor(c.default, false)
	})
	removeCSSVars()
	const defaults = Object.fromEntries(configs.map((c) => [c.storageKey, c.default]))
	await storage.sync.set(defaults)
}

// --- HTML GENERATION (cached) ---
let cachedHTML = null
const generateColorsTabHTML = () => {
	if (cachedHTML) return cachedHTML

	const colorPickersHTML = configs
		.map(
			(c) => `
    <div class="colorpicker">
      <button id="${c.id}" data-theme-key="${c.storageKey}"></button>
      <label for="${c.id}">${c.label}</label>
    </div>
  `
		)
		.join('')

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
	// await ensureStorage()
	const colors = await loadColors()

	// Apply vars synchronously for instant first load
	Object.keys(COLOR_CONFIG).forEach((theme) => {
		const key = theme === COLOR_CONFIG.light.id ? 'light' : 'dark'
		updateCSSVar(key, colors[key])
	})

	initColorPickers(colors)
	handleUserAccentBgListeners()
}

export { generateColorsTabHTML as renderColorsTab, resetAllAccents, init, destroyPickers }
