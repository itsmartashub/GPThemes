import { setItem, getItems, setItems } from '../utils/storage.js'
import { $, $$, getVar, setVar, setVars, bind } from '../utils/dom.js'
import { SELECTORS } from './config/selectors'
import { Notify } from './components/renderNotify.js'
import { closeSettings, $settings } from './settingsManager.js'
import { renderFontSmallCard, renderFontBigCard } from './components/renderFonts'
import { renderButton } from './components/renderButtons'

// ============================================================================
// CONFIG
// ============================================================================

const CONFIG = {
	fontFamily: {
		id: SELECTORS.FONT.FAMILY_ID,
		label: 'Font Family',
		default: getVar('--gpthFontFamilyDefault'),
		storageKey: 'textFontFamily',
		cssVar: 'gpthFontFamily',
		options: [
			{ name: 'Default', label: 'Default' },
			...[
				{ name: 'Inter', label: 'Inter' },
				{ name: 'Roboto', label: 'Roboto' },
				{ name: 'Roboto Mono', label: 'Roboto Mono' },
				{ name: 'Roboto Serif', label: 'Roboto Serif' },
				{ name: 'DM Sans', label: 'DM Sans 🆕' },
				{ name: 'Reddit Mono', label: 'Reddit Mono' },
				{ name: 'Poppins', label: 'Poppins' },
				{ name: 'Raleway', label: 'Raleway' },
				{ name: 'Noto Sans', label: 'Noto Sans' },
				{ name: 'Lato', label: 'Lato' },
				{ name: 'Quicksand', label: 'Quicksand 🆕' },
				{ name: 'Outfit', label: 'Outfit' },
				{ name: 'Share Tech Mono', label: 'Share Tech Mono' },
				{ name: 'JetBrains Mono', label: 'JetBrains Mono' },
				{ name: 'Work Sans', label: 'Work Sans' },
				{ name: 'Lora', label: 'Lora 🆕' },
				{ name: 'Manrope', label: 'Manrope' },
				{ name: 'Libre Baskerville', label: 'Libre Baskervill' },
				{ name: 'Bricolage Grotesque', label: 'Bricolage Grotesque' },
				{ name: 'Hedvig Letters Serif', label: 'Hedvig Letters Serif' },
				{ name: 'Literata', label: 'Literata' },
				{ name: 'Syne', label: 'Syne 🆕' },
				{ name: 'Sora', label: 'Sora 🆕' },
				{ name: 'Golos Text', label: 'Golos Text' },
			].sort((a, b) => a.label.localeCompare(b.label)),
		],
	},
	fontSize: {
		id: SELECTORS.FONT.SIZE_ID,
		label: 'Font Size',
		default: 16,
		storageKey: 'textFontSize',
		cssVar: 'gpthFontSize',
		unit: 'px',
		min: 12,
		max: 24,
	},
	lineHeight: {
		id: SELECTORS.FONT.LINE_HEIGHT_ID,
		label: 'Line Height',
		default: 28,
		storageKey: 'textLineHeight',
		cssVar: 'gpthLineHeight',
		unit: 'px',
		min: 12,
		max: 60,
	},
	letterSpacing: {
		id: SELECTORS.FONT.LETTER_SPACING_ID,
		label: 'Letter Space',
		default: 0,
		storageKey: 'textLetterSpacing',
		cssVar: 'gpthLetterSpacing',
		unit: 'px',
		min: -30,
		max: 30,
	},
}

const GOOGLE_FONT_WEIGHTS = ':ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,100;1,300;1,400;1,500;1,600;1,700'

const focusValues = {}

let cachedElements = null

function getCachedElements() {
	if (cachedElements) return cachedElements

	const container = $('#fontChangerPopover', $settings)
	if (!container) return null

	cachedElements = {
		fontFamily: $(`#${CONFIG.fontFamily.id}`, container),
		fontSize: $(`#${CONFIG.fontSize.id}`, container),
		lineHeight: $(`#${CONFIG.lineHeight.id}`, container),
		letterSpacing: $(`#${CONFIG.letterSpacing.id}`, container),
		resetBtn: $(`#${SELECTORS.FONT.RESET_BTN_ID}`, container),
	}

	return cachedElements
}

// ============================================================================
// UTILS
// ============================================================================

const formatNum = (val) => {
	if (val === null || val === undefined || val === '') return null
	const num = parseFloat(val)
	if (isNaN(num)) return null
	return num % 1 === 0 ? String(Math.round(num)) : num.toFixed(2).replace(/\.?0+$/, '')
}

const validate = (val, min, max) => {
	const num = parseFloat(val)
	if (isNaN(num) || val === null) {
		Notify.error('🚨 Invalid number')
		return false
	}
	if (num < min || num > max) {
		Notify.warning(`⚠️ Must be between ${min} and ${max}`)
		return false
	}
	return true
}

// const updateCSS = (key, val) => {
// 	const cfg = FONT_CONFIG[key]
// 	setVar(cfg.cssVar, cfg.unit ? `${val}${cfg.unit}` : val)
// }

function loadGoogleFont(font) {
	if (font === CONFIG.fontFamily.default) return

	const links = [
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
		{
			rel: 'stylesheet',
			href: `https://fonts.googleapis.com/css2?family=${font.replace(
				/ /g,
				'+'
			)}${GOOGLE_FONT_WEIGHTS}&display=swap`,
		},
	]

	links.forEach(({ rel, href, crossorigin }) => {
		const link = document.createElement('link')
		link.rel = rel
		link.href = href
		if (crossorigin !== undefined) link.crossOrigin = crossorigin
		document.head.appendChild(link)
	})
}

function removeGoogleFontLinks() {
	$$("link[href*='fonts.googleapis.com'], link[href*='fonts.gstatic.com']").forEach((link) => link.remove())
}

// ============================================================================
// HANDLERS
// ============================================================================

async function handleNumeric(e, key) {
	// console.log('[🎨GPThemes]: handleNumeric', key, e.target.value)

	const cfg = CONFIG[key]
	const newVal = formatNum(e.target.value)
	const oldVal = focusValues[key]

	if (newVal === oldVal) return

	if (!validate(newVal, cfg.min, cfg.max)) {
		e.target.value = oldVal
		return
	}

	console.log(cfg.cssVar, newVal)
	// updateCSS(key, newVal)
	setVar(cfg.cssVar, newVal)
	await setItem(cfg.storageKey, newVal)
}

async function handleFontFamily(e) {
	const selectedFontFamily = e.target.value

	removeGoogleFontLinks()

	if (selectedFontFamily !== CONFIG.fontFamily.default) loadGoogleFont(selectedFontFamily)

	// updateCSS('fontFamily', font)
	setVar(CONFIG.fontFamily.cssVar, selectedFontFamily)

	await setItem(CONFIG.fontFamily.storageKey, selectedFontFamily)
}

async function resetAll() {
	// 1. Reset input DOM values
	$(`#${CONFIG.fontFamily.id}`, $settings).value = CONFIG.fontFamily.default
	$(`#${CONFIG.fontSize.id}`, $settings).value = CONFIG.fontSize.default
	$(`#${CONFIG.lineHeight.id}`, $settings).value = CONFIG.lineHeight.default
	$(`#${CONFIG.letterSpacing.id}`, $settings).value = CONFIG.letterSpacing.default

	// 2. Reset DOM styles (CSS vars)
	setVars({
		[CONFIG.fontFamily.cssVar]: CONFIG.fontFamily.default,
		[CONFIG.fontSize.cssVar]: CONFIG.fontSize.default,
		[CONFIG.lineHeight.cssVar]: CONFIG.lineHeight.default,
		[CONFIG.letterSpacing.cssVar]: CONFIG.letterSpacing.default,
	})

	// 3. Close settings
	closeSettings()

	// 4. Reset storage
	const defaults = {
		[CONFIG.fontFamily.storageKey]: CONFIG.fontFamily.default,
		[CONFIG.fontSize.storageKey]: CONFIG.fontSize.default,
		[CONFIG.lineHeight.storageKey]: CONFIG.lineHeight.default,
		[CONFIG.letterSpacing.storageKey]: CONFIG.letterSpacing.default,
	}

	await setItems(defaults)

	// 5. Remove injected Google Font links from DOM (<head>)
	removeGoogleFontLinks()

	Notify.success('✅ All fonts have been reset')
}

// ============================================================================
// RENDER
// ============================================================================

function generateHTML() {
	return `
    <section id="fontChangerPopover" class="fonts">
      <div class="fonts__props">
        <div class="fonts__bigcards-wrapper">
          <div class="fonts__family fonts__group card card--big h-full">
            <label for="${CONFIG.fontFamily.id}" class="flex flex-col gap-1 h-full w-full">
              <div>
                <p class="card__unit card__icon">T</p>
                <p class="card__name uppercase font-semibold">FONT FAMILY</p>
              </div>
              <select id="${
					CONFIG.fontFamily.id
				}" class="flex-1 border-none outline-none focus:none font-bold" role="listbox">
                ${CONFIG.fontFamily.options
					.map((f) => {
						const val = f.name === 'Default' ? CONFIG.fontFamily.default : f.name
						return `<option value="${val}">${f.label}</option>`
					})
					.join('')}
              </select>
            </label>
          </div>
          ${renderFontBigCard({
				name: CONFIG.fontSize.label,
				className: SELECTORS.FONT.SIZE_CLASS,
				inputId: CONFIG.fontSize.id,
				inputType: 'number',
				inputValue: CONFIG.fontSize.default,
				inputPlaceholder: CONFIG.fontSize.default,
				unit: CONFIG.fontSize.unit,
				min: CONFIG.fontSize.min,
				max: CONFIG.fontSize.max,
			})}
        </div>
        <div class="fonts__smallcards-wrapper">
          ${renderFontSmallCard({
				name: CONFIG.lineHeight.label,
				className: SELECTORS.FONT.LINE_HEIGHT_CLASS,
				inputId: CONFIG.lineHeight.id,
				inputType: 'number',
				inputValue: CONFIG.lineHeight.default,
				inputPlaceholder: CONFIG.lineHeight.default,
				unit: CONFIG.lineHeight.unit,
				min: CONFIG.lineHeight.min,
				max: CONFIG.lineHeight.max,
			})}
          ${renderFontSmallCard({
				name: CONFIG.letterSpacing.label,
				className: SELECTORS.FONT.LETTER_SPACING_CLASS,
				inputId: CONFIG.letterSpacing.id,
				inputType: 'number',
				inputValue: CONFIG.letterSpacing.default,
				inputPlaceholder: CONFIG.letterSpacing.default,
				unit: CONFIG.letterSpacing.unit,
				min: CONFIG.letterSpacing.min,
				max: CONFIG.letterSpacing.max,
			})}
        </div>
      </div>
      <footer class="flex justify-center mt-8">
        ${renderButton({
			id: SELECTORS.FONT.RESET_BTN_ID,
			content: 'Reset Fonts',
			disabled: false,
			className: 'btn-primary',
		})}
      </footer>
    </section>
  `
}

// ============================================================================
// EVENTS
// ============================================================================

function addListeners() {
	// const container = $('#fontChangerPopover', $settings)
	// if (!container) return

	// // Cache all elements at once
	// const elements = {
	// 	fontFamily: $(`#${CONFIG.fontFamily.id}`, container),
	// 	fontSize: $(`#${CONFIG.fontSize.id}`, container),
	// 	lineHeight: $(`#${CONFIG.lineHeight.id}`, container),
	// 	letterSpacing: $(`#${CONFIG.letterSpacing.id}`, container),
	// 	resetBtn: $(`#${SELECTORS.FONT.RESET_BTN_ID}`, container),
	// }

	const elements = getCachedElements()
	if (!elements) return

	const onEnter = (fn) => (e) => e.key === 'Enter' && (e.preventDefault(), fn(e), e.target.blur())
	const track = (key) => (e) => (focusValues[key] = formatNum(e.target.value))

	bind(elements.fontFamily, { change: handleFontFamily })

	bind(elements.fontSize, {
		focus: track('fontSize'),
		blur: (e) => handleNumeric(e, 'fontSize'),
		keypress: onEnter((e) => handleNumeric(e, 'fontSize')),
	})

	bind(elements.lineHeight, {
		focus: track('lineHeight'),
		blur: (e) => handleNumeric(e, 'lineHeight'),
		keypress: onEnter((e) => handleNumeric(e, 'lineHeight')),
	})

	bind(elements.letterSpacing, {
		focus: track('letterSpacing'),
		blur: (e) => handleNumeric(e, 'letterSpacing'),
		keypress: onEnter((e) => handleNumeric(e, 'letterSpacing')),
	})

	bind(elements.resetBtn, { click: resetAll })
}

// ============================================================================
// INIT
// ============================================================================

async function init() {
	const keys = [
		CONFIG.fontFamily.storageKey,
		CONFIG.fontSize.storageKey,
		CONFIG.lineHeight.storageKey,
		CONFIG.letterSpacing.storageKey,
	]

	const stored = await getItems(keys)

	// // Init missing values
	// const missing = {}
	// if (!stored[CONFIG.fontFamily.storageKey]) missing[CONFIG.fontFamily.storageKey] = CONFIG.fontFamily.default
	// if (!stored[CONFIG.fontSize.storageKey]) missing[CONFIG.fontSize.storageKey] = CONFIG.fontSize.default
	// if (!stored[CONFIG.lineHeight.storageKey]) missing[CONFIG.lineHeight.storageKey] = CONFIG.lineHeight.default
	// if (!stored[CONFIG.letterSpacing.storageKey])
	// 	missing[CONFIG.letterSpacing.storageKey] = CONFIG.letterSpacing.default

	// if (Object.keys(missing).length) await setItems(missing)

	// const fontFamily = stored[CONFIG.fontFamily.storageKey] || CONFIG.fontFamily.default
	// const fontSize = stored[CONFIG.fontSize.storageKey] || CONFIG.fontSize.default
	// const lineHeight = stored[CONFIG.lineHeight.storageKey] || CONFIG.lineHeight.default
	// const letterSpacing = stored[CONFIG.letterSpacing.storageKey] || CONFIG.letterSpacing.default

	// Extract the pattern into a helper
	const getStoredOrDefault = (configKey) => stored[CONFIG[configKey].storageKey] ?? CONFIG[configKey].default

	// Then use it (still explicit, less repetition)
	// Load values
	const fontFamily = getStoredOrDefault('fontFamily')
	const fontSize = getStoredOrDefault('fontSize')
	const lineHeight = getStoredOrDefault('lineHeight')
	const letterSpacing = getStoredOrDefault('letterSpacing')

	// Load Google Font
	if (fontFamily !== CONFIG.fontFamily.default) loadGoogleFont(fontFamily)

	// Set CSS vars
	setVars({
		[CONFIG.fontFamily.cssVar]: fontFamily,
		[CONFIG.fontSize.cssVar]: fontSize,
		[CONFIG.lineHeight.cssVar]: lineHeight,
		[CONFIG.letterSpacing.cssVar]: letterSpacing,
	})

	// Update inputs
	const elements = getCachedElements()
	if (!elements) return

	elements.fontFamily.value = fontFamily
	elements.fontSize.value = fontSize
	elements.lineHeight.value = lineHeight
	elements.letterSpacing.value = letterSpacing
	// const $fontFamily = $(`#${CONFIG.fontFamily.id}`, $settings)
	// const $fontSize = $(`#${CONFIG.fontSize.id}`, $settings)
	// const $lineHeight = $(`#${CONFIG.lineHeight.id}`, $settings)
	// const $letterSpacing = $(`#${CONFIG.letterSpacing.id}`, $settings)

	// if ($fontFamily) $fontFamily.value = fontFamily
	// if ($fontSize) $fontSize.value = fontSize
	// if ($lineHeight) $lineHeight.value = lineHeight
	// if ($letterSpacing) $letterSpacing.value = letterSpacing
}

export { generateHTML as renderFontsTab, resetAll as resetAllFonts, addListeners as handleFontsListeners, init }
