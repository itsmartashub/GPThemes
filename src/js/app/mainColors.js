import ColorPicker from '../../libs/jscolorpicker/colorpicker.min.js'
import browser from 'webextension-polyfill'
import { SELECTORS } from './config/selectors.js'
import { $, getVar, ROOT_STYLE } from '../utils/dom.js'
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
		default: getVar('--c-default-accent-light', '#6c4756'),
		storageKey: 'accent_light',
		cssVar: '--user-accent-light',
	},
	{
		theme: 'dark',
		id: SELECTORS.ACCENT.DARK_ID,
		label: 'Accent <span>Dark</span>',
		default: getVar('--c-default-accent-dark', '#bfa8ff'),
		storageKey: 'accent_dark',
		cssVar: '--user-accent-dark',
	},
]

const accentPickers = new Map()
const storageKeys = COLOR_CONFIG.map((c) => c.storageKey)

// --- DIRECT CSS UPDATE ---
const updateCSSVar = (cssVar, color) => ROOT_STYLE.setProperty(cssVar, color)
const removeCSSVars = () => COLOR_CONFIG.forEach((c) => ROOT_STYLE.removeProperty(c.cssVar))

// --- STORAGE ---
const saveColor = async (key, value) => {
	console.log('[🎨GPThemes]: Saving color:', key, value)
	try {
		await browser.storage.sync.set({ [key]: value })
	} catch (err) {
		console.error('Save error:', err)
	}
}

const loadColors = async () => {
	const stored = await browser.storage.sync.get(storageKeys)
	return Object.fromEntries(COLOR_CONFIG.map((c) => [c.theme, stored[c.storageKey] ?? c.default]))
}

// --- COLOR PICKERS ---
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

		// Track changes to avoid unnecessary saves
		let cachedHex = initialColor
		let hasChanged = false

		picker.on('pick', (color) => {
			if (color) {
				const newHex = color.string('hex')
				if (newHex !== cachedHex) {
					cachedHex = newHex
					hasChanged = true
					updateCSSVar(cfg.cssVar, newHex)
				}
			} else {
				// Clear/reset to default
				if (cachedHex !== cfg.default) {
					cachedHex = cfg.default
					hasChanged = true
					updateCSSVar(cfg.cssVar, cfg.default)
				}
				picker.setColor(cfg.default, false)
			}
		})

		// Save ONLY on close AND only if changed
		picker.on('close', async () => {
			if (hasChanged) {
				await saveColor(cfg.storageKey, cachedHex)
				hasChanged = false
			}
		})

		accentPickers.set(cfg.id, picker)
	})
}

// --- RESET ---
const resetAllAccents = async () => {
	COLOR_CONFIG.forEach((c) => {
		const picker = accentPickers.get(c.id)
		if (picker) picker.setColor(c.default, false)
		ROOT_STYLE.setProperty(c.cssVar, c.default)
	})
	removeCSSVars()
	const defaults = Object.fromEntries(COLOR_CONFIG.map((c) => [c.storageKey, c.default]))
	await browser.storage.sync.set(defaults)
}

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
				${renderButton({ id: SELECTORS.ACCENT.RESET_BTN_ID, content: 'Reset Colors', className: 'btn-primary' })}
			</footer>
		</section>`

	return cachedHTML
}

// --- INIT ---
const init = async () => {
	const colors = await loadColors()

	COLOR_CONFIG.forEach((c) => ROOT_STYLE.setProperty(c.cssVar, colors[c.theme]))
	initColorPickers(colors)
	handleUserAccentBgListeners()
}

export { generateColorsTabHTML as renderColorsTab, resetAllAccents, init }
