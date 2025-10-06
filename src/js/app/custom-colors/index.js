import ColorPicker from '../../../libs/jscolorpicker/colorpicker.min.js'
import { getItems, setItem, removeItems } from '../../utils/storage.js'
import { SELECTORS } from '../config/selectors.js'
import { $, getVar, ROOT_STYLE } from '../../utils/dom.js'
import { $settings } from '../settingsManager.js'
import { renderButton } from '../components/renderButtons.js'
import { renderSeparator } from '../components/renderUtils.js'
import { renderUserAccentBgToggle, handleUserAccentBgListeners } from './toggleAccentUserBubble.js'

// --- CONFIG WITH THEME ---
const CONFIG = [
	{
		theme: 'light',
		id: SELECTORS.ACCENT.LIGHT_ID,
		label: 'Accent <span>Light</span>',
		default: getVar('--c-default-accent-light', '#6c4756'),
		storageKey: 'gpthColorAccentLight',
		cssVar: '--user-accent-light',
	},
	{
		theme: 'dark',
		id: SELECTORS.ACCENT.DARK_ID,
		label: 'Accent <span>Dark</span>',
		default: getVar('--c-default-accent-dark', '#bfa8ff'),
		storageKey: 'gpthColorAccentDark',
		cssVar: '--user-accent-dark',
	},
]

const accentPickers = new Map()
const STORAGE_KEYS = CONFIG.map((c) => c.storageKey)

// --- DIRECT CSS UPDATE ---
const updateCSSVar = (cssVar, color) => ROOT_STYLE.setProperty(cssVar, color)
const removeCSSVars = () => CONFIG.forEach((c) => ROOT_STYLE.removeProperty(c.cssVar))

// --- STORAGE ---
const saveColor = async (key, value) => {
	console.log('[🎨GPThemes]: Saving color:', key, value)
	try {
		await setItem(key, value)
	} catch (err) {
		console.error('Save error:', err)
	}
}

const loadColors = async () => {
	const stored = await getItems(STORAGE_KEYS)
	return Object.fromEntries(CONFIG.map((c) => [c.theme, stored[c.storageKey] ?? c.default]))
}

// --- COLOR PICKERS ---
const initColorPickers = (colors) => {
	CONFIG.forEach((cfg) => {
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
				console.log('NO PICKER COLOR')
				// Clear/reset to default
				if (cachedHex !== cfg.default) {
					console.log('Resetting color to default')

					cachedHex = cfg.default
					hasChanged = true
					updateCSSVar(cfg.cssVar, cfg.default)
					removeItems(cfg.storageKey)
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
	CONFIG.forEach((c) => {
		const picker = accentPickers.get(c.id)
		if (picker) picker.setColor(c.default, false)
		ROOT_STYLE.setProperty(c.cssVar, c.default)
	})
	removeCSSVars()
	// const defaults = Object.fromEntries(COLOR_CONFIG.map((c) => [c.storageKey, c.default]))
	// console.log(defaults)
	// await setItems(defaults)
	await removeItems(STORAGE_KEYS)
}

// --- HTML GENERATION ---
let cachedHTML = null
const generateColorsTabHTML = () => {
	if (cachedHTML) return cachedHTML

	const colorPickersHTML = CONFIG.map(
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

// --- INIT ---
const init = async () => {
	const colors = await loadColors()

	CONFIG.forEach((c) => ROOT_STYLE.setProperty(c.cssVar, colors[c.theme]))
	initColorPickers(colors)
	handleUserAccentBgListeners()
}

export { generateColorsTabHTML as renderColorsTab, resetAllAccents, init }
