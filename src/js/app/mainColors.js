import browser from 'webextension-polyfill'
import { SELECTORS } from './config/selectors'
import { q } from '../utils/dom.js'
import { setCssVars } from '../utils/setCssVar.js'
import { closeSettings, $settings } from './settingsManager.js'
import { renderButton } from './components/renderButtons'
import { renderSeparator } from './components/renderUtils'
import { renderUserAccentBgToggle, handleUserAccentBgListeners } from './custom-colors/accentUserBubble'

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

// Pre-computed lookups (build once at module load)
const entries = Object.entries(COLOR_CONFIG)
const configs = Object.values(COLOR_CONFIG)
const storageKeys = configs.map((c) => c.storageKey)
const idToTheme = new Map(entries.map(([theme, cfg]) => [cfg.id, theme]))
// const keyToTheme = new Map(entries.map(([theme, cfg]) => [cfg.storageKey, theme]))

// Helper: get theme's config value by key path
const getThemeValue = (theme, key) => COLOR_CONFIG[theme]?.[key]

// Helper: get input element for theme
const getThemeInput = (theme) => q(`#${getThemeValue(theme, 'id')}`, $settings)

// Helper: get current value (from input or default)
const getCurrentValue = (theme) => getThemeInput(theme)?.value ?? getThemeValue(theme, 'default')

// Memoized HTML generation
let cachedHTML = null
const generateColorsTabHTML = () => {
	if (cachedHTML) return cachedHTML

	const colorPickers = configs
		.map(
			(c) => `
      <div class="colorpicker">
        <input type="color" id="${c.id}" value="${c.default}" data-theme-key="${c.storageKey}" />
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

// Update CSS vars for given themes (or all if not specified)
const updateCSSVars = (colors = {}) => {
	const vars = Object.fromEntries(
		entries.map(([theme]) => {
			const val = colors[theme] ?? getCurrentValue(theme)
			return [`user-accent-${theme}`, val]
		})
	)
	setCssVars(vars)
}

// Sync input values with color data
const setInputValues = (colors) => {
	entries.forEach(([theme]) => {
		const input = getThemeInput(theme)
		if (input && colors[theme]) input.value = colors[theme]
	})
}

// Remove all custom CSS vars
const removeCSSVars = () => {
	const style = document.documentElement.style
	entries.forEach(([theme]) => style.removeProperty(`--user-accent-${theme}`))
}

// Reset to defaults
const resetAllAccents = async () => {
	const defaults = Object.fromEntries(configs.map((c) => [c.storageKey, c.default]))
	await browser.storage.sync.set(defaults)

	const colorsByTheme = Object.fromEntries(entries.map(([theme, cfg]) => [theme, cfg.default]))
	setInputValues(colorsByTheme)
	removeCSSVars()
}

// Save single color to storage
const saveColor = (key, value) =>
	browser.storage.sync.set({ [key]: value }).catch((err) => console.error('Save error:', err))

// Load colors from storage with defaults as fallback
const loadColors = async () => {
	const stored = await browser.storage.sync.get(storageKeys)
	return Object.fromEntries(entries.map(([theme, cfg]) => [theme, stored[cfg.storageKey] ?? cfg.default]))
}

// Ensure all storage keys exist (init missing ones)
const ensureStorage = async () => {
	const stored = await browser.storage.sync.get(storageKeys)
	const missing = Object.fromEntries(
		configs.filter((c) => !(c.storageKey in stored)).map((c) => [c.storageKey, c.default])
	)
	if (Object.keys(missing).length) await browser.storage.sync.set(missing)
}

// Event delegation for color pickers
const attachColorListeners = () => {
	const container = q('.colorpicker-container', $settings)
	if (!container) return

	// Live preview on input
	container.addEventListener('input', (e) => {
		if (e.target.type !== 'color') return
		const theme = idToTheme.get(e.target.id)
		if (theme) updateCSSVars({ [theme]: e.target.value })
	})

	// Save on change (when picker closes)
	container.addEventListener('change', async (e) => {
		if (e.target.type !== 'color') return
		const key = e.target.dataset.themeKey
		if (key) {
			await saveColor(key, e.target.value)
			closeSettings()
		}
	})
}

const init = async () => {
	await ensureStorage()
	const colors = await loadColors()
	updateCSSVars(colors)
	setInputValues(colors)
	attachColorListeners()
	handleUserAccentBgListeners()
}

export { generateColorsTabHTML as renderColorsTab, resetAllAccents, init }
