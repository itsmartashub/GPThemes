import ColorPicker from '../../../libs/jscolorpicker/colorpicker.min.js'
import { getItems, setItem, removeItems } from '../../utils/storage.js'
import { SELECTORS } from '../config/selectors.js'
import { SK_COLOR_ACCENT_LIGHT, SK_COLOR_ACCENT_DARK } from '../config/consts-storage.js'
import { getVar, setVar, setVars, removeVar } from '../../utils/dom.js'
import { Notify } from '../components/renderNotify.js'

// =====================================================
// STATE
// =====================================================

let $resetBtn = null
let storedColors = null
const accentPickers = new Map()

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

// =====================================================
// TEMPLATE
// =====================================================

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

// =====================================================
// STORAGE
// =====================================================

// Save state to storage
async function saveToStorage(key, value) {
	try {
		await setItem(key, value)
		Notify.success('Color saved')
	} catch (err) {
		Notify.error('Failed to save color')
		console.error('Save error:', err)
	}
}
// Load saved state from storage
async function getFromStorage() {
	try {
		return (await getItems(CONFIG.map((cfg) => cfg.storageKey))) || {}
	} catch (err) {
		console.error('Failed to load colors:', err)
		Notify.warning('Using default colors')
		return {}
	}
}

// =====================================================
// UPDATE CSS/DOM
// =====================================================

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

// =====================================================
// VALIDATION
// =====================================================

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

// =====================================================
// CREATE - PICKER MANAGEMRNT
// =====================================================

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

		// onOpen: () =>
		// 	Notify.info(
		// 		'Enter # followed by 3 or 6 hex digits. \n\nIf you are using copy-paste, advice is to select the whole color code, with hexa character.'
		// 	),

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
		// picker.on('open', handlers.onOpen)
		picker.on('close', handlers.onClose)

		accentPickers.set(cfg.id, { picker, handlers })
	})
}

// =====================================================
// LISTENERS - RESET
// =====================================================

async function onResetAll() {
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

// =====================================================
// Lifecycle: INIT
// =====================================================

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

// =====================================================
// Lifecycle: MOUNT
// =====================================================

function mount(resetBtn) {
	if (accentPickers.size > 0) return
	$resetBtn = resetBtn
	createPickers(storedColors)
	updateResetButton()
}

// =====================================================
// Exports
// =====================================================
export { templateHTML as renderAccentsColors, onResetAll as resetAllAccents, mount, init }
