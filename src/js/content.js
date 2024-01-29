// Use a cross-browser storage API:
// const storage = chrome.storage.sync || browser.storage.sync
import browser from 'webextension-polyfill'

browser.storage.sync.get('gptheme').then((data) => {
	const theme = data.gptheme || 'light'
	applyTheme(theme)
})

createAndAppendSVGStickyBtn()

let isOptionsShown = false

const $options = document.querySelector('.gpth__options')
const $svgIcon = document.querySelector('.gpth__svg-icon')
const $themeButtons = document.querySelectorAll('.gpth__themes-btns button')

$svgIcon.addEventListener('click', toggleOptions)
document.body.addEventListener('click', hideOptions)

$themeButtons.forEach((btn) => {
	btn.addEventListener('click', function (event) {
		const theme = event.target.id
		browser.storage.sync.set({ gptheme: theme })
		applyTheme(theme)
		toggleOptions()
	})
})

function createAndAppendSVGStickyBtn() {
	const gpthFloatingBtn = document.createElement('div')
	gpthFloatingBtn.id = 'gpthCustomizerContainer'
	gpthFloatingBtn.className = 'gpth__svg'

	gpthFloatingBtn.innerHTML = `
        <div class="gpth__svg-icon">🎨</div>
        <div class="gpth__options">
            <div class="gpth__themes">
                <h5>THEMES</h5>
                <div class="gpth__themes-btns">
                    <button id="light" data-gpth-theme="light">☀️</button>
                    <button id="dark" data-gpth-theme="dark">🌙</button>
                    <button id="oled" data-gpth-theme="black">🌖</button>
                </div>
            </div>
        </div>
    `

	document.body.appendChild(gpthFloatingBtn)
}

function applyTheme(theme) {
	console.log(theme)
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

function toggleOptions() {
	isOptionsShown = !isOptionsShown
	$options.classList.toggle('gpth-options-shown', isOptionsShown)

	if (isOptionsShown) document.body.addEventListener('click', hideOptions)
	else document.body.removeEventListener('click', hideOptions)
}

function hideOptions(event) {
	console.log(event.target)

	if (!$svgIcon.contains(event.target) && !$options.contains(event.target)) {
		toggleOptions()
	}
}
