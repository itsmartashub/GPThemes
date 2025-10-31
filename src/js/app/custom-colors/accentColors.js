/* import ColorPicker from '../../../libs/jscolorpicker/colorpicker.min.js'
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
		if (color && isValidHexColor(color)) {
			cssVars[cfg.cssVar] = color
		}
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

// --- INITIALIZATION ---
function getValidInitialColor(storageColors, cfg) {
	const storedColor = storageColors[cfg.storageKey]

	// Use stored color if valid, otherwise use default
	if (storedColor && isValidHexColor(storedColor)) {
		return storedColor
	}

	return cfg.default
}

// --- PICKER INITIALIZATION ---
function initializeColorPicker(btn, cfg, initialColor) {
	const picker = new ColorPicker(btn, {
		toggleStyle: 'button',
		container: `.${SELECTORS.SETTINGS.ROOT}`,
		color: initialColor,
		submitMode: 'instant',
		enableAlpha: false,
		formats: ['hex'],
		defaultFormat: 'hex',
		dialogPlacement: 'bottom',
		dismissOnOutsideClick: true,
		dismissOnEscape: true,
		showClearButton: true,
	})

	// Defensive check: ensure picker displays correct color
	requestAnimationFrame(() => {
		const currentColor = picker.color?.string('hex')
		if (!currentColor || currentColor.includes('NaN') || currentColor !== initialColor) {
			picker.setColor(initialColor, false)
		}
	})

	return picker
}

// --- PICKER EVENT HANDLERS ---
function createPickerHandlers(picker, cfg, initialColor) {
	let currentValidColor = initialColor
	let hasChanged = false

	const handlers = {
		onPick: (color) => {
			// Clear button clicked - reset to default
			if (!color) {
				handlers.onClear()
				return
			}

			// Validate color object (silently fail during typing)
			if (!isColorValid(color)) {
				return
			}

			const colorString = color.string('hex')

			// Valid complete hex color - update immediately for live preview
			if (isValidHexColor(colorString)) {
				if (colorString !== currentValidColor) {
					currentValidColor = colorString
					setVar(cfg.cssVar, colorString)
					hasChanged = true
				}
			}
		},

		onOpen: () => {
			Notify.info('Enter # followed by 3 or 6 hex digits. E.g. #543 or #5b5e4c')
		},

		onClose: async () => {
			// User explicitly cleared to default - save this state
			if (currentValidColor === cfg.default && hasChanged) {
				try {
					removeVar(cfg.cssVar)
					await removeItems(cfg.storageKey)
					Notify.success(`Reset to default ${cfg.theme} accent`)
					updateResetButton()
					hasChanged = false
					return
				} catch (error) {
					Notify.error('Failed to reset color')
					console.error('Reset error:', error)
					return
				}
			}

			// Validate final color state
			const finalColor = picker.color
			if (!finalColor || !isColorValid(finalColor) || !isValidHexColor(currentValidColor)) {
				Notify.error('Invalid color - reverted')
				handlers.revertToLastValid()
				return
			}

			// Save if changed
			if (hasChanged) {
				try {
					if (currentValidColor !== cfg.default) {
						await saveToStorage(cfg.storageKey, currentValidColor)
					} else {
						removeVar(cfg.cssVar)
						await removeItems(cfg.storageKey)
						Notify.success(`Reset to default ${cfg.theme} accent`)
					}
					updateResetButton()
					hasChanged = false
				} catch (error) {
					Notify.error('Failed to save color')
					console.error('Save error:', error)
				}
			}
		},

		onClear: () => {
			// Reset to default color with immediate visual feedback
			currentValidColor = cfg.default
			hasChanged = true
			setVar(cfg.cssVar, cfg.default)
			picker.setColor(cfg.default, false)
			Notify.success(`Reset to default ${cfg.theme} accent`)
		},

		revertToLastValid: () => {
			const revertColor = currentValidColor || cfg.default
			setVar(cfg.cssVar, revertColor)
			picker.setColor(revertColor, false)
			hasChanged = false
		},
	}

	return handlers
}

// --- PICKERS ---
function createPickers(storageColors) {
	CONFIG.forEach((cfg) => {
		const btn = document.getElementById(cfg.id)
		if (!btn) return

		// Get validated initial color
		const initialColor = getValidInitialColor(storageColors, cfg)

		// Initialize picker
		const picker = initializeColorPicker(btn, cfg, initialColor)

		// Create event handlers
		const handlers = createPickerHandlers(picker, cfg, initialColor)

		// Bind events
		picker.on('pick', handlers.onPick)
		picker.on('open', handlers.onOpen)
		picker.on('close', handlers.onClose)

		accentPickers.set(cfg.id, { picker, handlers })
	})
}

// --- RESET ---
async function resetAll() {
	if (!hasCustomColors()) {
		Notify.info('Colors are already at defaults')
		return
	}

	try {
		CONFIG.forEach((cfg) => {
			const pickerData = accentPickers.get(cfg.id)
			if (pickerData) {
				pickerData.handlers.onClear()
			} else {
				removeVar(cfg.cssVar)
			}
		})

		await removeItems(STORAGE_KEYS)
		Notify.success('All accents reset to defaults')
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
	// Prevent accidental double-mounting
	if (accentPickers.size > 0) {
		console.warn('Color pickers already mounted')
		return
	}

	$resetBtn = resetBtn
	createPickers(storedColors)
	updateResetButton()
}

// --- EXPORTS ---
export { templateHTML as renderAccentsColors, resetAll as resetAllAccents, mount, init }
 */

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

// --- TEMPLATE ---
function templateHTML() {
	return `<div class="colorpicker-container">${CONFIG.map(
		(cfg) => `
		<div class="colorpicker">
			<button id="${cfg.id}" data-theme-key="${cfg.storageKey}"></button>
			<label for="${cfg.id}">${cfg.label}</label>
		</div>
	`
	).join('')}</div>`
}

// --- STORAGE ---
async function getFromStorage() {
	try {
		return (await getItems(CONFIG.map((cfg) => cfg.storageKey))) || {}
	} catch (err) {
		console.error('Failed to load colors:', err)
		Notify.warning('Using default colors')
		return {}
	}
}

async function saveToStorage(key, value) {
	try {
		await setItem(key, value)
		Notify.success('Color saved')
	} catch (err) {
		Notify.error('Failed to save color')
		console.error('Save error:', err)
	}
}

// --- CSS LOGIC ---
function updateCss(stored) {
	const cssVars = {}
	CONFIG.forEach((cfg) => {
		const color = stored[cfg.storageKey]
		if (color && isValidHexColor(color)) cssVars[cfg.cssVar] = color
	})
	if (Object.keys(cssVars).length) {
		try {
			setVars(cssVars)
		} catch (err) {
			console.error('Failed to update CSS variables:', err)
		}
	}
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
	return (
		colorStr &&
		typeof colorStr === 'string' &&
		!colorStr.includes('NaN') &&
		/^#[0-9a-f]{3}$|^#[0-9a-f]{6}$/i.test(colorStr.trim())
	)
}

function isColorValid(color) {
	return color?.color && color.color.every((val) => !isNaN(val)) && color.color[3] === 1
}

// --- PICKER MANAGEMENT ---
function createPickerHandlers(picker, cfg, initialColor) {
	let currentColor = initialColor
	let lastValidColor = initialColor // Track last valid color for reverts
	let hasChanged = false

	const handlers = {
		onPick: (color) => {
			if (!color) return handlers.onClear()
			if (!isColorValid(color)) return

			const colorStr = color.string('hex')
			if (isValidHexColor(colorStr) && colorStr !== currentColor) {
				lastValidColor = currentColor // Update last valid before changing
				currentColor = colorStr
				setVar(cfg.cssVar, colorStr)
				hasChanged = true
			}
		},

		onOpen: () => Notify.info('Enter # followed by 3 or 6 hex digits'),

		onClose: async () => {
			if (currentColor === cfg.default && hasChanged) {
				await handlers.saveColor(true)
				return
			}

			if (!picker.color || !isColorValid(picker.color) || !isValidHexColor(currentColor)) {
				Notify.error('Invalid color - reverted')
				handlers.revertToLastValid()
				return
			}

			if (hasChanged) await handlers.saveColor()
		},

		onClear: () => {
			lastValidColor = currentColor // Remember current before clearing
			currentColor = cfg.default
			hasChanged = true
			setVar(cfg.cssVar, cfg.default)
			picker.setColor(cfg.default, false)
			Notify.success(`Reset to default ${cfg.theme} accent`)
		},

		saveColor: async (isReset = false) => {
			try {
				if (currentColor !== cfg.default) {
					await saveToStorage(cfg.storageKey, currentColor)
				} else {
					removeVar(cfg.cssVar)
					await removeItems(cfg.storageKey)
					if (isReset) Notify.success(`Reset to default ${cfg.theme} accent`)
				}
				updateResetButton()
				hasChanged = false
			} catch (error) {
				Notify.error('Failed to save color')
				console.error('Save error:', error)
			}
		},

		revertToLastValid: () => {
			// revert to the last valid color, not the current invalid one
			currentColor = lastValidColor
			setVar(cfg.cssVar, lastValidColor)
			picker.setColor(lastValidColor, false)
			hasChanged = false
		},

		getCurrentColor: () => currentColor,
	}

	return handlers
}

function createPickers(storageColors) {
	CONFIG.forEach((cfg) => {
		const btn = document.getElementById(cfg.id)
		if (!btn) return

		const storedColor = storageColors[cfg.storageKey]
		const initialColor = storedColor && isValidHexColor(storedColor) ? storedColor : cfg.default

		const picker = new ColorPicker(btn, {
			toggleStyle: 'button',
			container: `.${SELECTORS.SETTINGS.ROOT}`,
			color: initialColor,
			submitMode: 'instant',
			enableAlpha: false,
			formats: ['hex'],
			defaultFormat: 'hex',
			dialogPlacement: 'bottom',
			dismissOnOutsideClick: true,
			dismissOnEscape: true,
			showClearButton: true,
		})

		// Ensure correct color display
		requestAnimationFrame(() => {
			if (picker.color?.string('hex') !== initialColor) {
				picker.setColor(initialColor, false)
			}
		})

		const handlers = createPickerHandlers(picker, cfg, initialColor)

		picker.on('pick', handlers.onPick)
		picker.on('open', handlers.onOpen)
		picker.on('close', handlers.onClose)

		accentPickers.set(cfg.id, { picker, handlers })
	})
}

// --- RESET ---
async function resetAll() {
	if (!hasCustomColors()) {
		Notify.info('Colors are already at defaults')
		return
	}

	try {
		CONFIG.forEach((cfg) => {
			const pickerData = accentPickers.get(cfg.id)
			pickerData ? pickerData.handlers.onClear() : removeVar(cfg.cssVar)
		})

		await removeItems(CONFIG.map((cfg) => cfg.storageKey))
		Notify.success('All accents reset to defaults')
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
		Notify.error('Failed to initialize colors')
		console.error('Init error:', error)
		return {}
	}
}

function mount(resetBtn) {
	if (accentPickers.size > 0) return
	$resetBtn = resetBtn
	createPickers(storedColors)
	updateResetButton()
}

// --- EXPORTS ---
export { templateHTML as renderAccentsColors, resetAll as resetAllAccents, mount, init }
