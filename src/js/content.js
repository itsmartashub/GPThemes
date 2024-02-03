// Use a cross-browser storage API:
// const storage = chrome.storage.sync || browser.storage.sync
import browser from 'webextension-polyfill'
import gpthToggleImg from '../img/gpth-toggle-circled.webp'

let isOptionsShown = false

browser.storage.sync.get('gptheme').then((data) => {
	const theme = data.gptheme || 'light'
	applyTheme(theme)
})

createAndAppendSVGStickyBtn()
// trackHtmlClassChanges()

const $htmlTag = document.documentElement
const $options = document.querySelector('.gpth__options')
const $svgIcon = document.querySelector('.gpth__svg-icon')
const $themeButtonsContainer = document.querySelector('.gpth__themes-btns')
// const $themeButtons = document.querySelectorAll('.gpth__themes-btns button')

$svgIcon.addEventListener('click', toggleOptions)

/* $themeButtons.forEach((btn) => {
	btn.addEventListener('click', ({ target }) => {
		const theme = target.id
		browser.storage.sync.set({ gptheme: theme })
		applyTheme(theme)
		toggleOptions()
	})
}) */
$themeButtonsContainer.addEventListener('click', (event) => {
	const themeButton = event.target.closest('button')
	if (!themeButton) return

	const theme = themeButton.id
	browser.storage.sync.set({ gptheme: theme })
	applyTheme(theme)
	toggleOptions()
})

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

	gpthFloatingBtn.innerHTML = htmlCode
	document.body.appendChild(gpthFloatingBtn)
}

/* function applyTheme(theme) {
	let htmlTag = document.documentElement

	// document.documentElement.className = theme === 'oled' ? 'oled dark' : theme
	if (theme === 'oled') {
		htmlTag.dataset.gptheme = theme
		htmlTag.style.colorScheme = 'dark'
		htmlTag.className = 'dark'
	} else {
		htmlTag.style.colorScheme = theme
		htmlTag.className = theme
		htmlTag.hasAttribute('data-gptheme') && htmlTag.removeAttribute('data-gptheme')
	}
}
 */
function applyTheme(theme) {
	$htmlTag.dataset.gptheme = theme
	$htmlTag.style.colorScheme = theme === 'oled' ? 'dark' : theme
	$htmlTag.className = theme === 'oled' ? 'dark' : theme
	if (theme !== 'oled') $htmlTag.removeAttribute('data-gptheme')
}

function toggleOptions() {
	isOptionsShown = !isOptionsShown
	$options.classList.toggle('gpth-options-shown', isOptionsShown)

	if (isOptionsShown) document.body.addEventListener('click', hideOptions)
	else document.body.removeEventListener('click', hideOptions)
}

function hideOptions(event) {
	if (!$svgIcon.contains(event.target) && !$options.contains(event.target)) {
		toggleOptions()
	}
}

/* function trackHtmlClassChanges() {
	// Select the target element
	const target = document.documentElement

	// Create an observer instance
	const observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
				// Do something when the class attribute changes
				// console.log('Class attribute has changed')
				// alert('Class attribute has changed')
				// alert(target.className)
				browser.storage.sync.set({ gptheme: target.className })
				applyTheme(target.className)
			}
		})
	})

	// Configuration of the observer:
	const config = { attributes: true, attributeFilter: ['class'] }

	// Pass in the target node, as well as the observer options
	observer.observe(target, config)
} */
