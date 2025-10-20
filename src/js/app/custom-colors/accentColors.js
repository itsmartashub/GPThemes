import ColorPicker from '../../../libs/jscolorpicker/colorpicker.min.js'
// import ColorPicker from '../../../libs/jscolorpicker/colorpicker.js'
import { getItems, setItem, removeItems } from '../../utils/storage.js'
import { SELECTORS } from '../config/selectors.js'
import { SK_COLOR_ACCENT_LIGHT, SK_COLOR_ACCENT_DARK } from '../config/consts-storage.js'
import { getVar, setVar, setVars, removeVar } from '../../utils/dom.js'
import { Notify } from '../components/renderNotify.js'

let $resetBtn = null
let storedColors = null
const accentPickers = new Map()

// --- CONFIG ---
const CONFIG = [
	{
		theme: 'light',
		id: SELECTORS.ACCENT.LIGHT_ID,
		label: 'Accent <span>Light</span>',
		default: getVar('--c-default-accent-light', '#6c4756'),
		storageKey: SK_COLOR_ACCENT_LIGHT,
		cssVar: '--user-accent-light',
	},
	{
		theme: 'dark',
		id: SELECTORS.ACCENT.DARK_ID,
		label: 'Accent <span>Dark</span>',
		default: getVar('--c-default-accent-dark', '#bfa8ff'),
		storageKey: SK_COLOR_ACCENT_DARK,
		cssVar: '--user-accent-dark',
	},
]

const STORAGE_KEYS = CONFIG.map((cfg) => cfg.storageKey)

// --- TEMPLATE ---
function templateHTML() {
	const colorPickersHTML = CONFIG.map(
		(cfg) => `
      <div class="colorpicker">
        <button id="${cfg.id}" data-theme-key="${cfg.storageKey}"></button>
        <label for="${cfg.id}">${cfg.label}</label>
      </div>
    `
	).join('')

	return `<div class="colorpicker-container">${colorPickersHTML}</div>`
}

// --- STORAGE ---
async function getFromStorage() {
	try {
		return (await getItems(STORAGE_KEYS)) || {}
	} catch (err) {
		console.error('Failed to load colors from storage:', err)
		Notify.warning('Using default colors')
		return {}
	}
}

async function saveToStorage(key, value) {
	try {
		await setItem(key, value)
		Notify.success('Color updated successfully')
	} catch (err) {
		Notify.error('Failed to save color')
		console.error('Save error:', err)
	}
}

// --- CSS LOGIC ---
function updateCss(stored) {
	const cssVars = {}
	for (const cfg of CONFIG) {
		const color = stored[cfg.storageKey]
		if (color) cssVars[cfg.cssVar] = color
	}
	if (Object.keys(cssVars).length) setVars(cssVars)
}

function hasCustomColors() {
	return CONFIG.some((cfg) => {
		const current = getVar(cfg.cssVar)
		return current && current !== cfg.default
	})
}

function updateResetButton() {
	if ($resetBtn) $resetBtn.disabled = !hasCustomColors()
}

// --- PICKERS ---
function createPickers(storageColors) {
	CONFIG.forEach((cfg) => {
		const btn = document.getElementById(cfg.id)
		if (!btn) return

		const initialColor = storageColors[cfg.storageKey] ?? cfg.default

		const picker = new ColorPicker(btn, {
			toggleStyle: 'button',
			container: `.${SELECTORS.SETTINGS.ROOT}`,
			color: initialColor,
			submitMode: 'instant',
			enableAlpha: false,
			formats: false,
			dialogPlacement: 'bottom',
			dismissOnOutsideClick: true,
			dismissOnEscape: true,
			showClearButton: true,
		})

		let currentValidColor = initialColor
		let hasChanged = false

		picker.on('pick', (color) => {
			// Handle clear button - reset to default
			if (!color) {
				handleColorReset()
				return
			}

			const colorString = color.string('hex')

			// Skip if color contains NaN (invalid state during typing/deletion)
			if (colorString.includes('NaN')) {
				return // Silently ignore - user is still typing
			}

			// Validate it's a proper hex color
			if (!isValidCompleteColor(colorString)) {
				return // Invalid color, don't update
			}

			// Only update if color actually changed
			if (colorString !== currentValidColor) {
				currentValidColor = colorString
				setVar(cfg.cssVar, colorString)
				hasChanged = true
			}
		})

		picker.on('close', async () => {
			if (hasChanged) {
				// Save if different from default, otherwise clean up
				if (currentValidColor !== cfg.default) {
					await saveToStorage(cfg.storageKey, currentValidColor)
				} else {
					removeVar(cfg.cssVar)
					await removeItems(cfg.storageKey)
				}

				updateResetButton()
				hasChanged = false
			}
		})

		function handleColorReset() {
			currentValidColor = cfg.default
			hasChanged = true
			setVar(cfg.cssVar, cfg.default)
			picker.setColor(cfg.default, false)
			Notify.success(`Accent color for ${cfg.theme} theme reset to default`)
		}

		accentPickers.set(cfg.id, picker)
	})
}

// --- SIMPLIFIED VALIDATION ---
function isValidCompleteColor(colorStr) {
	if (!colorStr || typeof colorStr !== 'string') return false

	// Skip colors with NaN (invalid state)
	if (colorStr.includes('NaN')) return false

	const trimmed = colorStr.trim().toLowerCase()

	// Only accept complete hex colors (3 or 6 digits)
	if (trimmed.startsWith('#')) {
		const hex = trimmed.slice(1)
		return /^[0-9a-f]{3}$|^[0-9a-f]{6}$/i.test(hex)
	}

	return false
}
// --- RESET ---
async function resetAll() {
	if (!hasCustomColors()) {
		Notify.info('Colors are already at default values')
		return
	}

	CONFIG.forEach((cfg) => {
		const picker = accentPickers.get(cfg.id)
		if (picker) picker.setColor(cfg.default, false)
		removeVar(cfg.cssVar)
	})

	await removeItems(STORAGE_KEYS)
	Notify.success('All colors reset to default')
	updateResetButton()
}

// --- INIT & MOUNT ---
async function init() {
	storedColors = await getFromStorage()
	updateCss(storedColors)
	return storedColors
}

function mount(resetBtn) {
	$resetBtn = resetBtn
	createPickers(storedColors)
	updateResetButton()
}

// --- EXPORTS ---
export { templateHTML as renderAccentsColors, resetAll as resetAllAccents, mount, init }
