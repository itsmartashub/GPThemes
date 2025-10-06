import ColorPicker from '../../../libs/jscolorpicker/colorpicker.min.js'
import { getItems, setItem, removeItems } from '../../utils/storage.js'
import { SELECTORS } from '../config/selectors.js'
import { $, getVar, setVar, setVars, removeVar, ROOT_STYLE } from '../../utils/dom.js'
import { $settings } from '../settingsManager.js'
import { renderButton } from '../components/renderButtons.js'
import { renderSeparator } from '../components/renderUtils.js'
import { renderUserAccentBgToggle, handleUserAccentBgListeners } from './toggleAccentUserBubble.js'
import { Notify } from '../components/renderNotify.js'

// --- CONFIG WITH THEME ---
const CONFIG = [
	{
		theme: 'light',
		id: SELECTORS.ACCENT.LIGHT_ID,
		label: 'Accent <span>Light</span>',
		default: getVar('--c-default-accent-light', '#6c4756'),
		storageKey: 'colorAccentLight',
		cssVar: '--user-accent-light',
	},
	{
		theme: 'dark',
		id: SELECTORS.ACCENT.DARK_ID,
		label: 'Accent <span>Dark</span>',
		default: getVar('--c-default-accent-dark', '#bfa8ff'),
		storageKey: 'colorAccentDark',
		cssVar: '--user-accent-dark',
	},
]

const accentPickers = new Map()
const STORAGE_KEYS = CONFIG.map((c) => c.storageKey)

// --- STORAGE ---
async function saveToStorage(key, value) {
	try {
		await setItem(key, value)
		Notify.success('Color updated successfully')
	} catch (err) {
		Notify.error('Failed to save color')
		console.error('Save error:', err)
	}
}

async function getFromStorage() {
	try {
		return await getItems(STORAGE_KEYS) // Returns: { colorAccentLight: '#...', colorAccentDark: '#...' }
	} catch (err) {
		console.error('Failed to load colors from storage:', err)
		Notify.warning('Using default colors')
		return {}
	}
}

// --- COLOR PICKERS ---
function initColorPickers(storageColors) {
	console.log(storageColors)

	CONFIG.forEach((cfg) => {
		const btn = $(`#${cfg.id}`, $settings)
		if (!btn) return

		const initialColor = storageColors[cfg.storageKey] ?? cfg.default

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

		let cachedHex = initialColor
		let hasChanged = false

		picker.on('pick', (color) => {
			if (color) {
				const newHex = color.string('hex')
				if (newHex !== cachedHex) {
					cachedHex = newHex
					hasChanged = true
					setVar(cfg.cssVar, newHex)
				}
			} else {
				console.log('NO PICKER COLOR')
				if (cachedHex !== cfg.default) {
					console.log('Resetting color to default')
					cachedHex = cfg.default
					hasChanged = true
					setVar(cfg.cssVar, cfg.default)
					removeItems(cfg.storageKey)
				}
				picker.setColor(cfg.default, false)
			}
		})

		picker.on('close', async () => {
			if (hasChanged) {
				await saveToStorage(cfg.storageKey, cachedHex)
				hasChanged = false
			}
		})

		accentPickers.set(cfg.id, picker)
	})
}

// --- RESET ---
async function resetAllAccents() {
	// Check if any colors are actually different from default before resetting
	const needsReset = CONFIG.some((cfg) => {
		const currentValue = getVar(cfg.cssVar)
		return currentValue && currentValue !== cfg.default
	})

	// Guard: Only reset if colors are not already at default
	if (!needsReset) {
		console.log('Colors already at default, skipping reset')
		Notify.info('Colors are already at default values')
		return
	}

	CONFIG.forEach(function (c) {
		const picker = accentPickers.get(c.id)
		if (picker) picker.setColor(c.default, false)
		removeVar(c.cssVar)
	})

	await removeItems(STORAGE_KEYS)
	Notify.success('All colors reset to default')
}

// --- HTML GENERATION ---
let cachedHTML = null
function generateHTML() {
	if (cachedHTML) return cachedHTML

	const colorPickersHTML = CONFIG.map(function (c) {
		return `
            <div class="colorpicker">
                <button id="${c.id}" data-theme-key="${c.storageKey}"></button>
                <label for="${c.id}">${c.label}</label>
            </div>
        `
	}).join('')

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
async function init() {
	const stored = await getFromStorage()
	const cssVarsObj = {}

	CONFIG.forEach((c) => {
		cssVarsObj[c.cssVar] = stored[c.storageKey] ?? c.default
	})

	setVars(cssVarsObj)
	initColorPickers(stored)
	handleUserAccentBgListeners()
}

export { generateHTML as renderColorsTab, resetAllAccents, init }
