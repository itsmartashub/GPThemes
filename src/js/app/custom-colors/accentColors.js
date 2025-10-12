import ColorPicker from '../../../libs/jscolorpicker/colorpicker.min.js'
import { getItems, setItem, removeItems } from '../../utils/storage.js'
import { SELECTORS } from '../config/selectors.js'
import { SK_COLOR_ACCENT_LIGHT, SK_COLOR_ACCENT_DARK } from '../config/consts-storage.js'
import { $, getVar, setVar, setVars, removeVar } from '../../utils/dom.js'
import { Notify } from '../components/renderNotify.js'

// let $rootSettings = null
let $resetBtn = null
let storedColors = null // ← Cache the loaded data

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
const accentPickers = new Map()

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
		const result = await getItems(STORAGE_KEYS)
		return result || {}
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

// --- LOGIC ---
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
	// console.log(storageColors)
	// console.log('[CREATE COLOR PICKERS]')

	CONFIG.forEach((cfg) => {
		const btn = document.getElementById(cfg.id)
		if (!btn) return

		const initialColor = storageColors[cfg.storageKey] ?? cfg.default

		// console.log(initialColor)

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

		let currHex = initialColor
		let hasChanged = false

		picker.on('pick', (color) => {
			if (color) {
				const newHex = color.string('hex')
				if (newHex !== currHex) {
					currHex = newHex
					setVar(cfg.cssVar, newHex)
					hasChanged = true
				}
			} else {
				if (currHex !== cfg.default) {
					// console.log('Resetting color to default', color)
					currHex = cfg.default
					removeVar(cfg.cssVar)
					removeItems(cfg.storageKey)
					hasChanged = true
					Notify.success(`Accent color for ${cfg.theme} theme has been reset to default`)
				}
				picker.setColor(cfg.default, false)
			}
		})

		picker.on('close', async () => {
			if (hasChanged) {
				if (currHex !== cfg.default) {
					await saveToStorage(cfg.storageKey, currHex)
				}
				updateResetButton() // ONLY update on close, not during drag
				hasChanged = false
			}
		})

		accentPickers.set(cfg.id, picker)
	})
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

// ============================================================================
// INIT: Load data + update CSS (runs early)
// ============================================================================
async function init() {
	// Load once and cache
	storedColors = await getFromStorage()

	// Update CSS vars immediately (visible change)
	updateCss(storedColors)

	return storedColors // ← Return for parent if needed
}

// ============================================================================
// MOUNT: Setup DOM with cached data
// ============================================================================
function mount(resetBtn) {
	$resetBtn = resetBtn

	// Use the cached data from init()
	createPickers(storedColors)
	updateResetButton()
}

// --- EXPORTS ---
export { templateHTML as renderAccentsColors, resetAll as resetAllAccents, mount, init }
