// main.js
import browser from 'webextension-polyfill'
import { renderFontSmallCard, renderFontBigCard } from './components/renderFonts'
import { renderButton } from './components/renderButtons'

// Constants
const DEFAULTS = {
	fontFamily: getComputedStyle(document.documentElement).getPropertyValue('--fontFamilyDefault'),
	fontSize: 16,
	letterSpacing: 0,
	lineHeight: 28,
}

const FONT_NAMES = [
	'Default',
	'Inter',
	'Roboto',
	'Roboto Mono',
	'DM Sans',
	'Reddit Mono',
	'Poppins',
	'Noto Sans',
	'Lato',
	'Quicksand',
	'Outfit',
]

// If using Google Fonts
const GOOGLE_FONT_WEIGHTS = `:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,100;1,300;1,400;1,500;1,600;1,700`

let onFocusValFontSize = null,
	onFocusValLineHeight = null,
	onFocusValLetterSpacing = null

const fontSizeData = {
	name: 'Font Size',
	className: 'fonts__size',
	inputId: 'fontSize',
	inputType: 'number',
	inputValue: DEFAULTS.fontSize,
	inputPlaceholder: DEFAULTS.fontSize,
	unit: 'px',
	min: 12,
	max: 24,
}

const lineHeightData = {
	name: 'Line Height',
	className: 'fonts__lineHeight',
	inputId: 'lineHeight',
	inputType: 'number',
	inputValue: DEFAULTS.lineHeight,
	inputPlaceholder: DEFAULTS.lineHeight,
	unit: 'px',
	min: 12,
	max: 60,
}

const letterSpacingData = {
	name: 'Letter Space',
	className: 'fonts__letterSpacing',
	inputId: 'letterSpacing',
	inputType: 'number',
	inputValue: DEFAULTS.letterSpacing,
	inputPlaceholder: DEFAULTS.letterSpacing,
	unit: 'px',
	min: -30,
	max: 30,
}

// HTML template for font changer popover, now with a custom font uploader card
let renderFontsTab = `
  <section id="fontChangerPopover" class="fonts">
    <div class="fonts__props">
      <div class="fonts__bigcards-wrapper">
        <div class="fonts__family fonts__group card card--big h-full">
          <label for="fontFamily" class="grid gap-1 h-full w-full">
            <div>
              <p class="card__unit card__icon">F</p>
              <p class="card__name uppercase font-semibold">FONT FAMILY</p>
            </div>
            <select id="fontFamily" class="border-none outline-none font-bold">
              ${FONT_NAMES.map(
					(name) => `<option value="${name === 'Default' ? DEFAULTS.fontFamily : name}">${name}</option>`
				).join('')}
            </select>
          </label>
        </div>
        ${renderFontBigCard(fontSizeData)}
      </div>
      <div class="fonts__smallcards-wrapper">
        ${renderFontSmallCard(lineHeightData)}
        ${renderFontSmallCard(letterSpacingData)}
      </div>    
	</div>

      <div class="fonts__custom-upload border-dashed border-2 w-full h-full">
        <label for="customFontFile" class="grid gap-1 h-full w-full">
          <div>
            <p class=" ">P</p>
            <p class="uppercase font-semibold">UPLOAD CUSTOM FONT</p>
          </div>
          <input type="file" id="customFontFile" accept=".ttf,.otf,.woff,.woff2" class="border-none outline-none" />
        </label>
      </div>	

    <footer class="flex justify-center mt-10">
      ${renderButton({ id: 'resetFont', content: 'Reset Fonts', disabled: false, className: 'btn-primary' })}
    </footer>
  </section>
`

// Set input field value
function setInputFieldValue(inputSelector, inputVal) {
	const inputEl = document.querySelector(`.gpth-settings #${inputSelector}`)
	if (inputEl) inputEl.value = inputVal
}

// Apply settings by updating CSS variables and input fields
function applySettings(settings) {
	Object.entries(settings).forEach(([key, value]) => {
		document.documentElement.style.setProperty(`--${key}`, value)
		setInputFieldValue(key, value)
	})
}

// Save settings using storage.sync
async function saveSettings(settings) {
	try {
		await browser.storage.sync.set(settings)
	} catch (error) {
		console.error('Failed to save settings:', error)
	}
}

// Load settings and initialize custom font if available
async function loadSettings() {
	try {
		// Get both our DEFAULT keys and any customFont object
		const keys = Object.keys(DEFAULTS).concat('customFont')
		const settings = await browser.storage.sync.get(keys)

		if (settings.customFont) {
			loadCustomFont(settings.customFont)
		} else if (settings.fontFamily && settings.fontFamily !== DEFAULTS.fontFamily) {
			loadGoogleFont(settings.fontFamily)
		}
		applySettings(settings)
	} catch (error) {
		console.error('Failed to load settings:', error)
	}
}

// Dynamically load Google Fonts (for non-custom fonts)
function loadGoogleFont(fontFamily) {
	const links = [
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
		{
			rel: 'stylesheet',
			href: `https://fonts.googleapis.com/css2?family=${fontFamily.replace(
				' ',
				'+'
			)}${GOOGLE_FONT_WEIGHTS}&display=swap`,
		},
	]

	links.forEach(({ rel, href, crossorigin }) => {
		const link = document.createElement('link')
		link.rel = rel
		link.href = href
		if (crossorigin !== undefined) {
			link.crossOrigin = crossorigin
		}
		document.head.appendChild(link)
	})
}

// Inject the custom font CSS (with a unique style tag id)
function loadCustomFont(customFontObj) {
	const { dataUrl, format, fontFamily } = customFontObj
	const customFontCSS = `
    @font-face {
      font-family: '${fontFamily}';
      src: url('${dataUrl}') format('${format}');
    }
  `
	let styleEl = document.getElementById('customFontStyle')
	if (!styleEl) {
		styleEl = document.createElement('style')
		styleEl.id = 'customFontStyle'
		document.head.appendChild(styleEl)
	}
	styleEl.textContent = customFontCSS
	applySettings({ fontFamily })
}

// Remove all Google Font links from the head
function getAllHeadFontsLinks() {
	return Array.from(document.querySelectorAll("head link[href*='fonts.']"))
}
function removeAllGoogleFontsLinks() {
	const links = getAllHeadFontsLinks()
	links.forEach((link) => {
		if (link.href.includes('fonts.googleapis.com') || link.href.includes('fonts.gstatic.com')) {
			link.remove()
		}
	})
}

// Validate numeric input fields
function validateInputField(inputValue, min, max = 24) {
	if (isNaN(inputValue)) {
		displayError('Empty or invalid value')
		return false
	} else if (inputValue < min || inputValue > max) {
		displayError(`Number must be between ${min} and ${max}`)
		return false
	}
	return true
}

// Display error messages (removing previous messages first)
function displayError(message) {
	const existingError = document.querySelector('.gpth-error-msg')
	if (existingError) existingError.remove()

	const errorMessage = document.createElement('div')
	errorMessage.className = 'gpth-error-msg fixed rounded-xl bg-red-500 red-500 p-3 font-semibold text-center'
	errorMessage.textContent = message
	document.body.appendChild(errorMessage)
	setTimeout(() => {
		errorMessage.remove()
	}, 4000)
}

// Format numbers to a fixed number of decimals
function formatNumber(inputVal, toFixedNum = 2) {
	inputVal = inputVal.replace(/^0+(?=\d*\.)/, '')
	let formatted = parseFloat(inputVal).toFixed(toFixedNum)
	formatted = formatted.replace(/\.?0+$/, '')
	return formatted
}

// Font size change handler
function changeFontSize(e) {
	const newVal = formatNumber(e.target.value)
	onFocusValFontSize = formatNumber(onFocusValFontSize, 4)
	if (onFocusValFontSize === newVal) return
	if (!validateInputField(newVal, fontSizeData.min, fontSizeData.max)) {
		setInputFieldValue('fontSize', onFocusValFontSize)
		applySettings({ fontSize: onFocusValFontSize })
		saveSettings({ fontSize: onFocusValFontSize })
		return
	}
	applySettings({ fontSize: newVal })
	saveSettings({ fontSize: newVal })
}

// Line height change handler
function changeLineHeight(e) {
	const newVal = formatNumber(e.target.value)
	onFocusValLineHeight = formatNumber(onFocusValLineHeight, 4)
	if (onFocusValLineHeight === newVal) return
	if (!validateInputField(newVal, lineHeightData.min, lineHeightData.max)) {
		setInputFieldValue('lineHeight', onFocusValLineHeight)
		applySettings({ lineHeight: onFocusValLineHeight })
		saveSettings({ lineHeight: onFocusValLineHeight })
		return
	}
	applySettings({ lineHeight: newVal })
	saveSettings({ lineHeight: newVal })
}

// Letter spacing change handler
function changeLetterSpacing(e) {
	const newVal = formatNumber(e.target.value)
	onFocusValLetterSpacing = formatNumber(onFocusValLetterSpacing, 4)
	if (onFocusValLetterSpacing === newVal) return
	if (!validateInputField(newVal, letterSpacingData.min, letterSpacingData.max)) {
		setInputFieldValue('letterSpacing', onFocusValLetterSpacing)
		applySettings({ letterSpacing: onFocusValLetterSpacing })
		saveSettings({ letterSpacing: onFocusValLetterSpacing })
		return
	}
	applySettings({ letterSpacing: newVal })
	saveSettings({ letterSpacing: newVal })
}

// Font family change handler (for Google Fonts)
async function changeFontFamily(e) {
	const selectedFont = e.target.value
	// Remove Google Fonts links when selecting a new font
	removeAllGoogleFontsLinks()
	if (selectedFont !== DEFAULTS.fontFamily) {
		loadGoogleFont(selectedFont)
		applySettings({ fontFamily: selectedFont })
		try {
			await saveSettings({ fontFamily: selectedFont, customFont: null })
		} catch (error) {
			console.error('Failed to save font family:', error)
		}
	} else {
		applySettings({ fontFamily: selectedFont })
		try {
			await saveSettings({ fontFamily: selectedFont, customFont: null })
		} catch (error) {
			console.error('Failed to reset font family:', error)
		}
	}
}

// Custom font file upload handler
function handleCustomFontUpload(e) {
	const file = e.target.files[0]
	if (!file) return

	const reader = new FileReader()
	reader.onload = function (event) {
		const dataUrl = event.target.result
		const extension = file.name.split('.').pop().toLowerCase()
		const formatMapping = { ttf: 'truetype', otf: 'opentype', woff: 'woff', woff2: 'woff2' }
		const format = formatMapping[extension] || 'truetype'
		// Use a fixed custom font name (could be dynamic)
		const customFontName = 'CustomFont'
		const customFontCSS = `
      @font-face {
        font-family: '${customFontName}';
        src: url('${dataUrl}') format('${format}');
      }
    `
		let styleEl = document.getElementById('customFontStyle')
		if (!styleEl) {
			styleEl = document.createElement('style')
			styleEl.id = 'customFontStyle'
			document.head.appendChild(styleEl)
		}
		styleEl.textContent = customFontCSS
		applySettings({ fontFamily: customFontName })
		saveSettings({ fontFamily: customFontName, customFont: { dataUrl, format, fontFamily: customFontName } })
	}
	reader.readAsDataURL(file)
}

// Reset fonts to default settings
function resetFonts() {
	applySettings(DEFAULTS)
	saveSettings(DEFAULTS)
	// Remove any custom font style element if present
	const customStyleEl = document.getElementById('customFontStyle')
	if (customStyleEl) customStyleEl.remove()
	removeAllGoogleFontsLinks()
}

// Add all event listeners
function handleFontsListeners() {
	const selectors = {
		selectFontFamily: document.querySelector('.gpth-settings #fontFamily'),
		inputFontSize: document.querySelector('.gpth-settings #fontSize'),
		inputLineHeight: document.querySelector('.gpth-settings #lineHeight'),
		inputLetterSpacing: document.querySelector('.gpth-settings #letterSpacing'),
		btnResetFont: document.querySelector('.gpth-settings #resetFont'),
		customFontFile: document.querySelector('.gpth-settings #customFontFile'),
	}

	selectors.selectFontFamily?.addEventListener('change', changeFontFamily)
	selectors.inputFontSize?.addEventListener('blur', changeFontSize)
	selectors.inputLineHeight?.addEventListener('blur', changeLineHeight)
	selectors.inputLetterSpacing?.addEventListener('blur', changeLetterSpacing)

	selectors.inputFontSize?.addEventListener('focus', (e) => {
		onFocusValFontSize = e.target.value
	})
	selectors.inputLineHeight?.addEventListener('focus', (e) => {
		onFocusValLineHeight = e.target.value
	})
	selectors.inputLetterSpacing?.addEventListener('focus', (e) => {
		onFocusValLetterSpacing = e.target.value
	})

	selectors.inputFontSize?.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			changeFontSize(e)
			e.target.blur()
		}
	})
	selectors.inputLineHeight?.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			changeLineHeight(e)
			e.target.blur()
		}
	})
	selectors.inputLetterSpacing?.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			changeLetterSpacing(e)
			e.target.blur()
		}
	})

	selectors.btnResetFont?.addEventListener('click', resetFonts)
	// Attach custom font file listener
	selectors.customFontFile?.addEventListener('change', handleCustomFontUpload)
}

// Initialization function
function init() {
	loadSettings()
}

export { init, renderFontsTab, handleFontsListeners }
