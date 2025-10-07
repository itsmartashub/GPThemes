import ColorPicker from '../../../libs/jscolorpicker/colorpicker.min.js'
import { getItems, setItem, removeItems } from '../../utils/storage.js'
import { SELECTORS } from '../config/selectors.js'
import { $, getVar, setVar, setVars, removeVar } from '../../utils/dom.js'
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

let $resetBtn = null

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
		const result = await getItems(STORAGE_KEYS)
		return result
	} catch (err) {
		console.error('Failed to load colors from storage:', err)
		Notify.warning('Using default colors')
		return {}
	}
}

// --- COLOR PICKERS ---
function initColorPickers(storageColors) {
	// console.log(storageColors)

	CONFIG.forEach((cfg) => {
		// const btn = document.getElementById(cfg.id)
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
					console.log('Resetting color to default', color)
					currHex = cfg.default
					removeVar(cfg.cssVar)
					removeItems(cfg.storageKey)
					hasChanged = true
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

function hasCustomColors() {
	return CONFIG.some((cfg) => {
		const current = getVar(cfg.cssVar)
		return current && current !== cfg.default
	})
}

function updateResetButton() {
	if ($resetBtn) {
		$resetBtn.disabled = !hasCustomColors()
		// console.log('Reset button updated:', !hasCustomColors() ? 'disabled' : 'enabled')
	}
}
// --- RESET ---
async function resetAllAccents() {
	if (!hasCustomColors()) {
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

	// Only set elements AFTER injection into DOM: Run this code on the next animation frame - after the DOM has been painted.
	requestAnimationFrame(() => {
		setElements()
		setListeners()
		updateResetButton() // Set initial state
	})

	return cachedHTML
}

function setElements() {
	// $resetBtn = document.getElementById(SELECTORS.ACCENT.RESET_BTN_ID)
	$resetBtn = $(`#${SELECTORS.ACCENT.RESET_BTN_ID}`, $settings)
}

function setListeners() {
	$resetBtn?.addEventListener('click', resetAllAccents)
	handleUserAccentBgListeners()
}

// --- INIT ---
async function init() {
	const stored = await getFromStorage()
	// console.log('[🎨GPThemes] Stored colors:', stored) // Return: {} or {colorAccentLight: '#...', colorAccentDark: '#...}

	if (!stored || Object.keys(stored).length === 0) {
		initColorPickers({})
		return
	}

	const cssVarsObj = {}
	for (const cfg of CONFIG) {
		const color = stored[cfg.storageKey]
		if (color) cssVarsObj[cfg.cssVar] = color
	}

	if (Object.keys(cssVarsObj).length) {
		setVars(cssVarsObj)
	}

	initColorPickers(stored)
}

export { generateHTML as renderColorsTab, init, setListeners as handleColorsListeners }
