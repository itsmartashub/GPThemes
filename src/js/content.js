// Use a cross-browser storage API:
import browser from 'webextension-polyfill'
import gpthToggleImg from '../img/gpth-toggle-circled.webp'

// let isOptionsShown = false

// Global Variables
let isOptionsShown = false
let $htmlTag
let $floatingBtn
let $floatingThemeOptions
let $floatingThemesBtnsContainer

// Initialization
initializeTheme()
createAndAppendSVGStickyBtn()

// const $htmlTag = document.documentElement
// const $floatingBtn = document.querySelector('.gpth__svg-icon')
// const $floatingThemeOptions = document.querySelector('.gpth__options')
// const $floatingThemesBtnsContainer = document.querySelector('.gpth__themes-btns')

// $floatingBtn.addEventListener('click', toggleOptions)
// $floatingThemesBtnsContainer.addEventListener('click', handleChangeTheme)

async function initializeTheme() {
	try {
		const { gptheme: storedTheme } = await browser.storage.sync.get('gptheme')
		const theme = storedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
		applyTheme(theme)
	} catch (error) {
		console.error('Error initializing theme:', error)
	}
}

async function setTheme(theme) {
	try {
		await browser.storage.sync.set({ gptheme: theme })
		applyTheme(theme)
		toggleOptions()
	} catch (error) {
		console.error('Error setting theme:', error)
	}
}

function createAndAppendSVGStickyBtn() {
	const gpthFloatingBtn = document.createElement('div')
	gpthFloatingBtn.className = 'gpth__svg'

	let htmlCode = `
		<div class="gpth__svg-icon">
			<img src="${gpthToggleImg}" alt="gpth-toggle"/>
		</div>
		<div class="gpth__options">
			<div class="gpth__themes">
				<div class="gpth__themes-btns">
					<button id="light" data-gpth-theme="light">☀️</button>
					<button id="dark" data-gpth-theme="dark">🌙</button>
					<button id="oled" data-gpth-theme="black">🌖</button>
				</div>
			</div>
		</div>
	`

	// gpthFloatingBtn.innerHTML = htmlCode
	gpthFloatingBtn.insertAdjacentHTML('beforeend', htmlCode)
	document.body.appendChild(gpthFloatingBtn)

	// Cache DOM elements after appending
	$htmlTag = document.documentElement
	$floatingBtn = document.querySelector('.gpth__svg-icon')
	$floatingThemeOptions = document.querySelector('.gpth__options')
	$floatingThemesBtnsContainer = document.querySelector('.gpth__themes-btns')

	// Add event listeners after DOM elements are appended
	$floatingBtn.addEventListener('click', toggleOptions)
	$floatingThemesBtnsContainer.addEventListener('click', handleChangeTheme)
}

function handleChangeTheme(e) {
	const themeButton = e.target.closest('button')
	if (!themeButton) return

	const theme = themeButton.id
	setTheme(theme)
}

function applyTheme(theme) {
	$htmlTag.dataset.gptheme = theme
	$htmlTag.style.colorScheme = theme === 'oled' ? 'dark' : theme
	$htmlTag.className = theme === 'oled' ? 'dark' : theme
	if (theme !== 'oled') $htmlTag.removeAttribute('data-gptheme')
}

function toggleOptions() {
	isOptionsShown = !isOptionsShown
	$floatingThemeOptions.classList.toggle('gpth-options-shown', isOptionsShown)

	if (isOptionsShown) document.body.addEventListener('click', hideOptions)
	else document.body.removeEventListener('click', hideOptions)
}

function hideOptions(e) {
	const isClickInsideFloatingBtn = $floatingBtn.contains(e.target)
	const isClickInsideFloatingOptions = $floatingThemeOptions.contains(e.target)

	if (!isClickInsideFloatingBtn && !isClickInsideFloatingOptions) toggleOptions()

	// if (!$floatingBtn.contains(e.target) && !$floatingThemeOptions.contains(e.target)) toggleOptions()
}

setTimeout(() => {
	$floatingBtn.classList.add('gpth__svg--small')
}, 3000)
