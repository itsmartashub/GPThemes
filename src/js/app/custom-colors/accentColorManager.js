import browser from 'webextension-polyfill'
import ColorPicker from '../../../libs/jscolorpicker/colorpicker.min.js'
import { SELECTORS } from '../config/selectors'
import { $, getVar, rafThrottle } from '../../utils/dom'
import { $settings } from '../settingsManager'

// --- CONSTANTS ---
const COLOR_CONFIG = [
	{
		theme: 'light',
		id: SELECTORS.ACCENT.LIGHT_ID,
		label: 'Accent <span>Light</span>',
		default: getVar('--c-default-accent-light', '#6c4756'),
		storageKey: 'accent_light',
	},
	{
		theme: 'dark',
		id: SELECTORS.ACCENT.DARK_ID,
		label: 'Accent <span>Dark</span>',
		default: getVar('--c-default-accent-dark', '#bfa8ff'),
		storageKey: 'accent_dark',
	},
]

const STORAGE_KEYS = COLOR_CONFIG.map((c) => c.storageKey)
const ROOT_STYLE = document.documentElement.style

// --- STATE ---
const accentPickers = new Map()

// --- CORE COLOR FUNCTIONS ---
const updateCSSVar = (theme, color) => ROOT_STYLE.setProperty(`--user-accent-${theme}`, color)

const removeCSSVars = () => {
	COLOR_CONFIG.forEach((c) => ROOT_STYLE.removeProperty(`--user-accent-${c.theme}`))
}

const saveColor = async (key, value) => {
	try {
		await browser.storage.sync.set({ [key]: value })
	} catch (err) {
		console.error('Save error:', err)
	}
}

const loadColors = async () => {
	const stored = await browser.storage.sync.get(STORAGE_KEYS)
	return Object.fromEntries(COLOR_CONFIG.map((c) => [c.theme, stored[c.storageKey] ?? c.default]))
}

const initColorPickers = (colors) => {
	COLOR_CONFIG.forEach((cfg) => {
		const btn = $(`#${cfg.id}`, $settings)
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
			if (color) {
				throttledUpdate(color.string('hex'))
			} else {
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

const applyCSSColors = (colors) => {
	COLOR_CONFIG.forEach((c) => updateCSSVar(c.theme, colors[c.theme]))
}

// --- PUBLIC API ---
export { loadColors, initColorPickers, resetAllAccents, applyCSSColors, COLOR_CONFIG }
