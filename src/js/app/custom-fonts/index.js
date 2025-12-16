import { $, $$, bind, getVar, setVar, setVars } from '../../utils/dom.js'
import { getItems, setItem, setItems } from '../../utils/storage.js'
import { renderButton } from '../components/renderButtons'
import { renderFontBigCard, renderFontSmallCard } from '../components/renderFonts'
import { Notify } from '../components/renderNotify.js'
import {
	SK_TEXT_FONT_FAMILY,
	SK_TEXT_FONT_SIZE,
	SK_TEXT_LETTER_SPACING,
	SK_TEXT_LINE_HEIGHT,
} from '../config/consts-storage.js'
import { SELECTORS } from '../config/selectors'

// let $rootSettings = null
let currentFontLink = null
let preconnectLinksAdded = false
let cachedElements = null
let storedValues = null

const focusValues = {}
const GOOGLE_FONT_BASE = 'https://fonts.googleapis.com/css2?family='
const GOOGLE_FONT_WEIGHTS =
	':ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,300;1,400;1,500;1,600;1,700;1,900'

// =====================================================
// CONFIG
// =====================================================
const FONT_FAMILIES = {
	Inter: '',
	Roboto: '',
	'Roboto Mono': '',
	'Roboto Serif': '',
	'DM Sans': '',
	'Reddit Mono': '',
	Poppins: '',
	Raleway: '',
	'Noto Sans': '',
	Lato: '',
	Quicksand: '',
	Outfit: '',
	'Share Tech Mono': '',
	'JetBrains Mono': '',
	'Work Sans': '',
	Lora: '',
	Manrope: '',
	'Libre Baskerville': '',
	'Bricolage Grotesque': '',
	'Hedvig Letters Serif': '',
	Literata: '',
	Syne: '',
	Sora: '',
	'Golos Text': '',
	'Google Sans Flex': '🆕',
}
const CONFIG = {
	fontFamily: {
		id: SELECTORS.FONT.FAMILY_ID,
		label: 'Font Family',
		default: getVar('--gpthFontFamilyDefault'),
		storageKey: SK_TEXT_FONT_FAMILY,
		cssVar: '--gpthFontFamily',
		options: [
			{ name: 'Default', label: 'Default' },
			...Object.entries(FONT_FAMILIES)
				.map(([name, badge]) => ({
					name,
					label: badge ? `${name} ${badge}` : name,
				}))
				.sort((a, b) => a.label.localeCompare(b.label)),
		],
	},
	fontSize: {
		id: SELECTORS.FONT.SIZE_ID,
		label: 'Font Size',
		default: 16,
		storageKey: SK_TEXT_FONT_SIZE,
		cssVar: '--gpthFontSize',
		unit: 'px',
		min: 12,
		max: 24,
	},
	lineHeight: {
		id: SELECTORS.FONT.LINE_HEIGHT_ID,
		label: 'Line Height',
		default: 28,
		storageKey: SK_TEXT_LINE_HEIGHT,
		cssVar: '--gpthLineHeight',
		unit: 'px',
		min: 12,
		max: 60,
	},
	letterSpacing: {
		id: SELECTORS.FONT.LETTER_SPACING_ID,
		label: 'Letter Space',
		default: 0,
		storageKey: SK_TEXT_LETTER_SPACING,
		cssVar: '--gpthLetterSpacing',
		unit: 'px',
		min: -30,
		max: 30,
	},
}

// =====================================================
// RENDER
// =====================================================

function templateHTML() {
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
				<select id="${CONFIG.fontFamily.id}" class="flex-1 border-none outline-none focus:none font-bold" role="listbox">
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

function getElements() {
	if (cachedElements) return cachedElements

	// const container = $('#fontChangerPopover', $rootSettings)
	const container = document.getElementById('fontChangerPopover')
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

function updateInputs(values) {
	// console.log('[🎨GPThemes]: updateInputs', values) // Object: { fontFamily: 'Lora', fontSize: 16, lineHeight: 28, letterSpacing: 0 }

	const elements = getElements()

	if (!elements) return

	if (values.fontFamily !== undefined) elements.fontFamily.value = values.fontFamily
	if (values.fontSize !== undefined) elements.fontSize.value = values.fontSize
	if (values.lineHeight !== undefined) elements.lineHeight.value = values.lineHeight
	if (values.letterSpacing !== undefined) elements.letterSpacing.value = values.letterSpacing
}

// =====================================================
// HANDLERS
// =====================================================

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

	setVar(cfg.cssVar, newVal)
	await setItem(cfg.storageKey, newVal)
}

// =====================================================
// GOOGLE FONTS
// =====================================================
function addPreconnectLinks() {
	if (preconnectLinksAdded) return

	document.head.insertAdjacentHTML(
		'beforeend',
		`
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        `,
	)
	preconnectLinksAdded = true
}
function removeCurrGoogleFontLink() {
	if (currentFontLink && currentFontLink.parentNode) {
		currentFontLink.remove()
	}
	currentFontLink = null
}
function removeAllGoogleFontLinks() {
	// Remove current font link
	removeCurrGoogleFontLink()

	// Remove all Google Fonts related links (including preconnect)
	$$("link[href*='fonts.googleapis.com'], link[href*='fonts.gstatic.com']").forEach((link) =>
		link.remove(),
	)
	preconnectLinksAdded = false
}
function setGoogleFont(font) {
	// If it's the default font, remove only the font stylesheet
	if (font === CONFIG.fontFamily.default) {
		removeCurrGoogleFontLink()
		return
	}

	// Ensure preconnect links are there
	addPreconnectLinks()

	// Remove previous font link if exists
	removeCurrGoogleFontLink()

	// Create and insert only the font-specific stylesheet
	currentFontLink = document.createElement('link')
	currentFontLink.rel = 'stylesheet'

	// Added &display=swap for immediate text visibility
	currentFontLink.href = `${GOOGLE_FONT_BASE}${encodeURIComponent(font)}${GOOGLE_FONT_WEIGHTS}&display=swap`

	document.head.appendChild(currentFontLink)
}

// Update your handleFontFamily function:
async function handleFontFamily(e) {
	const selectedFontFamily = e.target.value

	try {
		// Set CSS variable immediately for instant visual feedback
		setVar(CONFIG.fontFamily.cssVar, selectedFontFamily)

		// Load font with display=swap for faster perceived performance
		setGoogleFont(selectedFontFamily)

		// Save to storage (non-blocking)
		await setItem(CONFIG.fontFamily.storageKey, selectedFontFamily)
		Notify.success('Font updated successfully')
	} catch (error) {
		console.error('Font change failed:', error)
		// Revert on error
		e.target.value = storedValues.fontFamily
		setVar(CONFIG.fontFamily.cssVar, storedValues.fontFamily)
		Notify.error('Failed to update font')
	}
}

async function resetAll() {
	// 1. Reset input DOM values
	updateInputs({
		fontFamily: CONFIG.fontFamily.default,
		fontSize: CONFIG.fontSize.default,
		lineHeight: CONFIG.lineHeight.default,
		letterSpacing: CONFIG.letterSpacing.default,
	})

	// 2. Reset DOM styles (CSS vars)
	setVars({
		[CONFIG.fontFamily.cssVar]: CONFIG.fontFamily.default,
		[CONFIG.fontSize.cssVar]: CONFIG.fontSize.default,
		[CONFIG.lineHeight.cssVar]: CONFIG.lineHeight.default,
		[CONFIG.letterSpacing.cssVar]: CONFIG.letterSpacing.default,
	})

	// 3. Reset storage
	const defaultsValues = {
		[CONFIG.fontFamily.storageKey]: CONFIG.fontFamily.default,
		[CONFIG.fontSize.storageKey]: CONFIG.fontSize.default,
		[CONFIG.lineHeight.storageKey]: CONFIG.lineHeight.default,
		[CONFIG.letterSpacing.storageKey]: CONFIG.letterSpacing.default,
	}
	await setItems(defaultsValues)

	// 4. Remove ALL Google Font links (including preconnect)
	removeAllGoogleFontLinks()

	Notify.success('✅ All fonts have been reset')
}

// =====================================================
// EVENTS
// =====================================================

function addListeners() {
	const elements = getElements()
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

// =====================================================
// UTILS
// =====================================================

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

// =====================================================
// INIT
// =====================================================

async function init() {
	// console.log('[INIT FONTS]')

	// 1. Get stored values from storage
	const keys = [
		CONFIG.fontFamily.storageKey,
		CONFIG.fontSize.storageKey,
		CONFIG.lineHeight.storageKey,
		CONFIG.letterSpacing.storageKey,
	]

	const stored = await getItems(keys)
	const getStoredOrDefault = (configKey) =>
		stored[CONFIG[configKey].storageKey] ?? CONFIG[configKey].default

	const fontFamily = getStoredOrDefault('fontFamily')
	const fontSize = getStoredOrDefault('fontSize')
	const lineHeight = getStoredOrDefault('lineHeight')
	const letterSpacing = getStoredOrDefault('letterSpacing')

	// 2. Load Google Font if not font family isnt default
	if (fontFamily !== CONFIG.fontFamily.default) setGoogleFont(fontFamily)

	// 3. Update DOM (CSS vars)
	setVars({
		[CONFIG.fontFamily.cssVar]: fontFamily,
		[CONFIG.fontSize.cssVar]: fontSize,
		[CONFIG.lineHeight.cssVar]: lineHeight,
		[CONFIG.letterSpacing.cssVar]: letterSpacing,
	})

	storedValues = { fontFamily, fontSize, lineHeight, letterSpacing }

	// 4. Update inputs using helper -> moved in MOUNT since its DOM dependent
	// updateInputs({ fontFamily, fontSize, lineHeight, letterSpacing })
}

function mount(rootSettings) {
	// console.log('[MOUNT FONTS]')

	// Update inputs using helper
	updateInputs(storedValues)
	// $rootSettings = rootSettings
	addListeners()
}

export {
	templateHTML as renderFontsTab,
	resetAll as resetAllFonts,
	addListeners as handleFontsListeners,
	init,
	mount,
}
