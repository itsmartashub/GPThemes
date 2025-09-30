import ColorPicker from '../../libs/jscolorpicker/colorpicker.js'
import browser from 'webextension-polyfill'
import { SELECTORS } from './config/selectors.js'
import { q } from '../utils/dom.js'
import { setCssVars } from '../utils/setCssVar.js'
import { closeSettings, $settings } from './settingsManager.js'
import { renderButton } from './components/renderButtons.js'
import { renderSeparator } from './components/renderUtils.js'
import { renderUserAccentBgToggle, handleUserAccentBgListeners } from './custom-colors/accentUserBubble.js'

// Single source of truth
const COLOR_CONFIG = {
	light: {
		id: SELECTORS.ACCENT.LIGHT_ID,
		label: 'Accent <span>Light</span>',
		default: '#6c4756',
		storageKey: 'accent_light',
	},
	dark: {
		id: SELECTORS.ACCENT.DARK_ID,
		label: 'Accent <span>Dark</span>',
		default: '#bfa8ff',
		storageKey: 'accent_dark',
	},
}

// Pre-computed lookups
const entries = Object.entries(COLOR_CONFIG)
const configs = Object.values(COLOR_CONFIG)
const storageKeys = configs.map((c) => c.storageKey)
const idToConfig = new Map(configs.map((c) => [c.id, c]))

// Store picker instances for cleanup
const accentPickers = new Map()

// Helper: get config by id
const getConfigById = (id) => idToConfig.get(id)

// Memoized HTML generation
let cachedHTML = null
const generateColorsTabHTML = () => {
	if (cachedHTML) return cachedHTML

	const colorPickers = configs
		.map(
			(c) => `
      <div class="colorpicker">
        <button id="${c.id}" data-theme-key="${c.storageKey}"></button>
        <label for="${c.id}">${c.label}</label>
      </div>`
		)
		.join('')

	cachedHTML = `
    <section>
      <div class="colorpicker-container">${colorPickers}</div>
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

// Update CSS vars (only update provided themes, preserve others)
// const updateCSSVars = (colors) => {
// 	const vars = Object.fromEntries(Object.entries(colors).map(([theme, color]) => [`user-accent-${theme}`, color]))
// 	setCssVars(vars)
// }
// Update a single CSS variable
const updateCSSVar = (theme, color) => {
	document.documentElement.style.setProperty(`--user-accent-${theme}`, color)
}

// Remove all custom CSS vars
const removeCSSVars = () => {
	const style = document.documentElement.style
	entries.forEach(([theme]) => style.removeProperty(`--user-accent-${theme}`))
}

// Reset to defaults
const resetAllAccents = async () => {
	// Update pickers
	configs.forEach((c) => {
		const picker = accentPickers.get(c.id)
		if (picker) picker.setColor(c.default, false)
	})

	removeCSSVars()

	const defaults = Object.fromEntries(configs.map((c) => [c.storageKey, c.default]))
	await browser.storage.sync.set(defaults)
}

// Save single color to storage
const saveColor = async (key, value) =>
	await browser.storage.sync.set({ [key]: value }).catch((err) => console.error('Save error:', err))

// Load colors from storage with defaults as fallback
const loadColors = async () => {
	const stored = await browser.storage.sync.get(storageKeys)
	return Object.fromEntries(entries.map(([theme, cfg]) => [theme, stored[cfg.storageKey] ?? cfg.default]))
}

// Ensure all storage keys exist
const ensureStorage = async () => {
	const stored = await browser.storage.sync.get(storageKeys)
	const missing = Object.fromEntries(
		configs.filter((c) => !(c.storageKey in stored)).map((c) => [c.storageKey, c.default])
	)
	if (Object.keys(missing).length) await browser.storage.sync.set(missing)
}

// Debounce helper for performance
const debounce = (fn, ms = 16) => {
	let timeoutId
	return (...args) => {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => fn(...args), ms)
	}
}

// RAF-based throttle for smoother updates
const rafThrottle = (fn) => {
	let rafId = null
	return (...args) => {
		if (rafId) return
		rafId = requestAnimationFrame(() => {
			fn(...args)
			rafId = null
		})
	}
}

// Initialize color pickers
const initColorPickers = (colors) => {
	configs.forEach((cfg) => {
		const btn = q(`#${cfg.id}`, $settings)
		if (!btn) return

		const theme = cfg.id === SELECTORS.ACCENT.LIGHT_ID ? 'light' : 'dark'
		const initialColor = colors[theme] ?? cfg.default

		const picker = new ColorPicker(btn, {
			toggleStyle: 'button',
			color: initialColor,
			submitMode: 'instant',
			enableAlpha: false,
			formats: false,
			defaultFormat: 'hex',
			dialogPlacement: 'bottom',
			dismissOnOutsideClick: true,
			dismissOnEscape: true,
		})

		// Throttled live preview using RAF for 60fps smoothness
		// const throttledUpdate = rafThrottle((hexColor) => {
		// 	// updateCSSVars({ [theme]: hexColor })
		// 	updateCSSVar(theme, hexColor)
		// })

		let lastColor = null
		const throttledUpdate = rafThrottle((hexColor) => {
			if (hexColor !== lastColor) {
				lastColor = hexColor
				updateCSSVar(theme, hexColor)
			}
		})

		// Live preview - update CSS vars with RAF throttle
		picker.on('pick', (color) => {
			if (!color) return
			throttledUpdate(color.string('hex'))
		})

		// Save to storage ONLY when picker closes
		picker.on('close', async () => {
			const finalColor = picker.color?.string('hex')
			if (finalColor) {
				await saveColor(cfg.storageKey, finalColor)
			}
		})

		accentPickers.set(cfg.id, picker)
	})
}

// Cleanup pickers
const destroyPickers = () => {
	accentPickers.forEach((picker) => picker.destroy())
	accentPickers.clear()
}

const init = async () => {
	destroyPickers() // Clean up any previous pickers before creating new ones!

	await ensureStorage()
	const colors = await loadColors()
	// updateCSSVars(colors)
	// Apply loaded colors immediately
	entries.forEach(([theme, cfg]) => {
		updateCSSVar(theme, colors[theme])
	})
	initColorPickers(colors)
	handleUserAccentBgListeners()
}

export { generateColorsTabHTML as renderColorsTab, resetAllAccents, init, destroyPickers }
