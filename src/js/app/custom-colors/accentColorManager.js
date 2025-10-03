import browser from 'webextension-polyfill'
import ColorPicker from '../../../libs/jscolorpicker/colorpicker.min.js'
import { SELECTORS } from '../config/selectors'
import { q } from '../../utils/dom'
import { $settings } from '../settingsManager'
import { rafThrottle, getVar } from '../../utils/dom'

const ACCENT_COLOR_CONFIG = [
	{
		theme: 'light',
		id: SELECTORS.ACCENT.LIGHT_ID,
		label: 'Accent <span>Light</span>',
		default: getVar('--c-default-accent-light', '#6c4756'),
		storageKey: 'accent_light',
		cssVar: '--user-accent-light',
	},
	{
		theme: 'dark',
		id: SELECTORS.ACCENT.DARK_ID,
		label: 'Accent <span>Dark</span>',
		default: getVar('--c-default-accent-dark', '#bfa8ff'),
		storageKey: 'accent_dark',
		cssVar: '--user-accent-dark',
	},
]

const createAccentColorManager = (config) => {
	const pickers = new Map()
	const rootStyle = document.documentElement.style
	const storageKeys = config.map((c) => c.storageKey)

	const updateCSSVar = (theme, color) => rootStyle.setProperty(`--user-accent-${theme}`, color)
	const removeCSSVars = () => config.forEach((c) => rootStyle.removeProperty(`--user-accent-${c.theme}`))

	const saveColor = async (key, value) => {
		try {
			await browser.storage.sync.set({ [key]: value })
		} catch (err) {
			console.error('Save error:', err)
		}
	}

	const loadColors = async () => {
		const stored = await browser.storage.sync.get(storageKeys)
		return Object.fromEntries(config.map((c) => [c.theme, stored[c.storageKey] ?? c.default]))
	}

	const initPickers = (colors) => {
		config.forEach((cfg) => {
			const btn = q(`#${cfg.id}`, $settings)
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

			let lastColor = null
			const throttledUpdate = rafThrottle((hex) => {
				if (hex !== lastColor) {
					lastColor = hex
					updateCSSVar(cfg.theme, hex)
				}
			})

			picker.on('pick', (color) => {
				if (color) {
					throttledUpdate(color.string('hex'))
				} else {
					throttledUpdate(cfg.default)
					picker.setColor(cfg.default, false)
				}
			})
			picker.on('close', async () => {
				const finalColor = picker.color?.string('hex')
				if (finalColor) await saveColor(cfg.storageKey, finalColor)
			})

			pickers.set(cfg.id, picker)
		})
	}

	const destroy = () => {
		pickers.forEach((p) => p.destroy())
		pickers.clear()
	}

	const resetAll = async () => {
		config.forEach((c) => {
			const picker = pickers.get(c.id)
			if (picker) picker.setColor(c.default, false)
		})
		removeCSSVars()
		const defaults = Object.fromEntries(config.map((c) => [c.storageKey, c.default]))
		await browser.storage.sync.set(defaults)
	}

	const generateHTML = () => {
		const accentPickersHTML = config
			.map(
				(c) => `
					<div class="colorpicker">
						<button id="${c.id}" data-theme-key="${c.storageKey}"></button>
						<label for="${c.id}">${c.label}</label>
					</div>
				`
			)
			.join('')

		return `
			<div class="colorpicker-container">${accentPickersHTML}</div>
		`
	}

	const init = async () => {
		destroy()
		const colors = await loadColors()
		config.forEach((c) => updateCSSVar(c.theme, colors[c.theme]))
		initPickers(colors)
	}

	return { init, destroy, resetAll, generateHTML }
}

const accentColorManager = createAccentColorManager(ACCENT_COLOR_CONFIG)

export { accentColorManager }
