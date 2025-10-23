import ColorPicker from '../../../libs/jscolorpicker/colorpicker.min.js'
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
		Notify.success('Color saved successfully')
	} catch (err) {
		Notify.error('Failed to save color to storage')
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

// --- VALIDATION ---
function isValidHexColor(colorStr) {
	if (!colorStr || typeof colorStr !== 'string') return false
	if (colorStr.includes('NaN')) return false

	const trimmed = colorStr.trim().toLowerCase()
	if (!trimmed.startsWith('#')) return false

	const hex = trimmed.slice(1)
	return /^[0-9a-f]{3}$|^[0-9a-f]{6}$/i.test(hex)
}

function isColorValid(color) {
	if (!color || !color.color) return false
	const [h, s, v, a] = color.color
	return !isNaN(h) && !isNaN(s) && !isNaN(v) && a === 1
}

// --- PICKER EVENT HANDLERS ---
function createPickerHandlers(picker, cfg, initialColor) {
	let currentValidColor = initialColor
	let hasChanged = false

	const handlers = {
		onPick: (color) => {
			console.log(color.color)

			// This fires on every color change (dragging, typing, etc.)
			if (!color) {
				handlers.onClear()
				return
			}

			// Validate the color
			if (!isColorValid(color)) {
				// Don't show error for every invalid state during typing
				// Only show error if it's clearly invalid and user might be stuck
				const colorString = color.string('hex')
				if (colorString.includes('NaN') && colorString.length > 1) {
					Notify.error('Invalid color format')
				}
				return
			}

			const colorString = color.string('hex')

			// Only update if we have a valid complete hex color
			if (isValidHexColor(colorString)) {
				if (colorString !== currentValidColor) {
					currentValidColor = colorString
					setVar(cfg.cssVar, colorString)
					hasChanged = true
					// Notify.info('Color updated')
				}
			} else {
				// User is typing partial hex - provide guidance at key points
				if (colorString.startsWith('#') && (colorString.length === 4 || colorString.length === 7)) {
					Notify.info('Complete the color code', { timeout: 2000 })
				}
			}
		},

		onOpen: () => {
			Notify.info('Enter # followed by 3 or 6 hex digits')
		},

		onClose: async () => {
			const finalColor = picker.color

			// Final validation before saving
			if (!finalColor || !isColorValid(finalColor) || !isValidHexColor(currentValidColor)) {
				Notify.error('Invalid color - reverted to previous value')
				handlers.revertToLastValid()
				return
			}

			if (hasChanged) {
				try {
					if (currentValidColor !== cfg.default) {
						await saveToStorage(cfg.storageKey, currentValidColor)
					} else {
						removeVar(cfg.cssVar)
						await removeItems(cfg.storageKey)
						Notify.success(`Accent color for ${cfg.theme} theme reset to default`)
					}
					updateResetButton()
					hasChanged = false
				} catch (error) {
					Notify.error('Failed to save color changes')
				}
			}
		},

		onClear: () => {
			currentValidColor = cfg.default
			hasChanged = true
			setVar(cfg.cssVar, cfg.default)
			picker.setColor(cfg.default, false)
			Notify.success(`Accent color for ${cfg.theme} theme reset to default`)
		},

		revertToLastValid: () => {
			const revertColor = currentValidColor || cfg.default
			setVar(cfg.cssVar, revertColor)
			picker.setColor(revertColor, false)
			hasChanged = false
		},

		getCurrentColor: () => currentValidColor,
	}

	return handlers
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
			submitMode: 'instant', // This makes 'pick' fire on every change
			enableAlpha: false,
			formats: ['hex'],
			defaultFormat: 'hex',
			dialogPlacement: 'bottom',
			dismissOnOutsideClick: true,
			dismissOnEscape: true,
			showClearButton: true,
		})

		const handlers = createPickerHandlers(picker, cfg, initialColor)

		// Only bind documented events
		picker.on('pick', handlers.onPick)
		picker.on('open', handlers.onOpen)
		picker.on('close', handlers.onClose)

		accentPickers.set(cfg.id, { picker, handlers })
	})
}
// --- RESET ---
async function resetAll() {
	if (!hasCustomColors()) {
		Notify.info('Colors are already at default values')
		return
	}

	try {
		CONFIG.forEach((cfg) => {
			const pickerData = accentPickers.get(cfg.id)
			if (pickerData) {
				const { picker, handlers } = pickerData
				handlers.onClear() // Use the clear handler
			} else {
				// Fallback if picker not initialized
				removeVar(cfg.cssVar)
			}
		})

		await removeItems(STORAGE_KEYS)
		Notify.success('All accent colors reset to default')
		updateResetButton()
	} catch (error) {
		Notify.error('Failed to reset colors')
		console.error('Reset error:', error)
	}
}

// --- INIT & MOUNT ---
async function init() {
	try {
		storedColors = await getFromStorage()
		updateCss(storedColors)
		return storedColors
	} catch (error) {
		Notify.error('Failed to initialize color settings')
		console.error('Init error:', error)
		return {}
	}
}

function mount(resetBtn) {
	$resetBtn = resetBtn
	createPickers(storedColors)
	updateResetButton()
}

// --- EXPORTS ---
export { templateHTML as renderAccentsColors, resetAll as resetAllAccents, mount, init }
