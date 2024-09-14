import browser from 'webextension-polyfill'
import { elements, closeSettings } from './floatingBtn.js'
import { hexToHSL } from '../utils/hexToHSL.js'

const DEFAULT_COLORS = {
	LIGHT: '#7e3e47',
	DARK: '#ca93fb',
}

const STORAGE_KEYS = {
	ACCENT_LIGHT: 'accent_light',
	ACCENT_DARK: 'accent_dark',
}

const state = {
	styleElement: null,
}

const renderColorsTab = `
    <section>
      <div class="colorpicker-container">
        <div class="colorpicker">
          <input type="color" id="accentLight" value="${DEFAULT_COLORS.LIGHT}" />
          <label for="accentLight">Accent <span>Light</span></label>
        </div>
        <div class="colorpicker">
          <input type="color" id="accentDark" value="${DEFAULT_COLORS.DARK}" />
          <label for="accentDark">Accent <span>Dark</span></label>
        </div>
      </div>
      <footer class="grid mt-10">
        <button id="resetAllAccents" class="btn block relative btn-primary text-center" as="button">Reset Accents</button>
      </footer>
    </section>
`
function handleColorInput() {
	const accentLight = elements.settings.querySelector('#accentLight')
	const accentDark = elements.settings.querySelector('#accentDark')

	accentLight.addEventListener('input', (e) => updateCSSVars(e.target.value, null))
	accentLight.addEventListener('change', (e) => {
		setAccentToStorage(STORAGE_KEYS.ACCENT_LIGHT, e.target.value)
		closeSettings()
	})

	accentDark.addEventListener('input', (e) => updateCSSVars(null, e.target.value))
	accentDark.addEventListener('change', (e) => {
		setAccentToStorage(STORAGE_KEYS.ACCENT_DARK, e.target.value)
		closeSettings()
	})
}

function updateCSSVars(lightColor, darkColor) {
	if (!state.styleElement) injectStyleElement()

	const lightHSL = hexToHSL(lightColor || elements.settings.querySelector('#accentLight').value)
	const darkHSL = hexToHSL(darkColor || elements.settings.querySelector('#accentDark').value)

	const cssVars = `
    html.light {
      --accent-h: ${lightHSL[0]} !important;
      --accent-s: ${lightHSL[1]}% !important;
      --accent-l: ${lightHSL[2]}% !important;
    }
    html.dark {
      --accent-h: ${darkHSL[0]} !important;
      --accent-s: ${darkHSL[1]}% !important;
      --accent-l: ${darkHSL[2]}% !important;
    }
  `

	state.styleElement.textContent = cssVars
}

function injectStyleElement() {
	state.styleElement = document.createElement('style')
	state.styleElement.type = 'text/css'
	document.head.appendChild(state.styleElement)
}

// Storage management
async function setAccentToStorage(storageColorProperty, accentValue) {
	try {
		await browser.storage.sync.set({ [storageColorProperty]: accentValue })
	} catch (e) {
		console.error('Error setting the accent colors in storage:', e)
	}
}

function setColorInputValue({ accentLight, accentDark }) {
	elements.settings.querySelector('#accentLight').value = accentLight
	elements.settings.querySelector('#accentDark').value = accentDark
}

async function handleAccentsStorage() {
	try {
		const { [STORAGE_KEYS.ACCENT_LIGHT]: accentLight, [STORAGE_KEYS.ACCENT_DARK]: accentDark } =
			await browser.storage.sync.get([STORAGE_KEYS.ACCENT_LIGHT, STORAGE_KEYS.ACCENT_DARK])

		if (!accentLight || !accentDark) {
			await browser.storage.sync.set({
				[STORAGE_KEYS.ACCENT_LIGHT]: DEFAULT_COLORS.LIGHT,
				[STORAGE_KEYS.ACCENT_DARK]: DEFAULT_COLORS.DARK,
			})
		}

		const accentColorLight = accentLight || DEFAULT_COLORS.LIGHT
		const accentColorDark = accentDark || DEFAULT_COLORS.DARK

		updateCSSVars(accentColorLight, accentColorDark)
		setColorInputValue({ accentLight: accentColorLight, accentDark: accentColorDark })
	} catch (error) {
		console.error('Error handling accent colors:', error)
	}
}

async function resetAllAccents() {
	if (!state.styleElement) injectStyleElement()

	const accentLight = hexToHSL(DEFAULT_COLORS.LIGHT)
	const accentDark = hexToHSL(DEFAULT_COLORS.DARK)

	const cssVars = `
    html.light {
      --accent-h: ${accentLight[0]} !important;
      --accent-s: ${accentLight[1]}% !important;
      --accent-l: ${accentLight[2]}% !important;
    }
    html.dark {
      --accent-h: ${accentDark[0]} !important;
      --accent-s: ${accentDark[1]}% !important;
      --accent-l: ${accentDark[2]}% !important;
    }
  `

	state.styleElement.textContent = cssVars

	setColorInputValue({ accentLight: DEFAULT_COLORS.LIGHT, accentDark: DEFAULT_COLORS.DARK })

	await browser.storage.sync.set({
		[STORAGE_KEYS.ACCENT_LIGHT]: DEFAULT_COLORS.LIGHT,
		[STORAGE_KEYS.ACCENT_DARK]: DEFAULT_COLORS.DARK,
	})
}

const init = async () => {
	try {
		await handleAccentsStorage()
		handleColorInput()
	} catch (error) {
		console.error('Initialization error:', error)
	}
}

export { renderColorsTab, resetAllAccents, init }
