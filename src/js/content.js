// Use a cross-browser storage API:
import browser from 'webextension-polyfill'
import gpthToggleImg from '../img/gpth-toggle-circled.webp'

let isOptionsShown = false

browser.storage.sync.get('gptheme').then((data) => {
	let theme = ''
	const storedTheme = data.gptheme

	if (storedTheme) {
		theme = storedTheme
		applyTheme(theme)

		return
	}

	// Check if the dark or light theme preference is set
	const lightThemeQuery = window.matchMedia('(prefers-color-scheme: light)')

	lightThemeQuery.matches ? (theme = 'light') : (theme = 'dark') // Fallback theme

	applyTheme(theme)
})

createAndAppendSVGStickyBtn()

const $htmlTag = document.documentElement
const $floatingBtn = document.querySelector('.gpth__svg')
const $floatingOptions = document.querySelector('.gpth__options')
const $floatingSvgIcon = document.querySelector('.gpth__svg-icon')
const $floatingThemeBtnsContainer = document.querySelector('.gpth__themes-btns')

$floatingSvgIcon.addEventListener('click', toggleOptions)

// Check if the device supports touch
if ('ontouchstart' in window) {
	$floatingSvgIcon.addEventListener('touchstart', toggleOptions)
}

$floatingThemeBtnsContainer.addEventListener('click', (event) => {
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

	gpthFloatingBtn.insertAdjacentHTML('beforeend', htmlCode)
	document.body.appendChild(gpthFloatingBtn)
}

function applyTheme(theme) {
	$htmlTag.dataset.gptheme = theme
	$htmlTag.style.colorScheme = theme === 'oled' ? 'dark' : theme
	$htmlTag.className = theme === 'oled' ? 'dark' : theme
	if (theme !== 'oled') $htmlTag.removeAttribute('data-gptheme')
}

function toggleOptions() {
	isOptionsShown = !isOptionsShown
	$floatingOptions.classList.toggle('gpth-options-shown', isOptionsShown)

	if (isOptionsShown) document.body.addEventListener('click', hideOptions)
	else document.body.removeEventListener('click', hideOptions)
}

function hideOptions(event) {
	if (!$floatingSvgIcon.contains(event.target) && !$floatingOptions.contains(event.target)) {
		toggleOptions()
	}
}

let initialX, initialY, diffX, diffY // Variables to store drag offsets

$floatingBtn.addEventListener('mousedown', startDrag)

// Check if the device supports touch
if ('ontouchstart' in window) {
	$floatingBtn.addEventListener('touchstart', startDrag)
}

window.addEventListener('mouseup', stopDrag)

// Check if the device supports touch
if ('ontouchstart' in window) {
	window.addEventListener('touchend', stopDrag)
}

function startDrag(event) {
	event.preventDefault() // Prevent default dragging behavior on touch devices

	if (event.type === 'mousedown') {
		initialX = $floatingBtn.offsetLeft - event.clientX
		initialY = $floatingBtn.offsetTop - event.clientY
		window.addEventListener('mousemove', dragButton)
	} else if (event.type === 'touchstart') {
		const touch = event.touches[0]
		initialX = $floatingBtn.offsetLeft - touch.clientX
		initialY = $floatingBtn.offsetTop - touch.clientY
		window.addEventListener('touchmove', dragButton)
	}
}

function dragButton(event) {
	event.preventDefault() // Prevent default scrolling behavior on touch devices

	if (event.type === 'mousemove') {
		diffX = event.clientX + initialX
		diffY = event.clientY + initialY
	} else if (event.type === 'touchmove') {
		const touch = event.touches[0]
		diffX = touch.clientX + initialX
		diffY = touch.clientY + initialY
	}

	// Restrict movement within viewport (optional)
	diffX = Math.min(document.documentElement.clientWidth - $floatingBtn.clientWidth, diffX)
	diffY = Math.min(document.documentElement.clientHeight - $floatingBtn.clientHeight, diffY)

	$floatingBtn.style.left = `${diffX}px`
	$floatingBtn.style.top = `${diffY}px`

	// Adjust options position relative to the button
	$floatingOptions.style.top = 'calc(100% + 2rem)' // Adjust as needed
	$floatingOptions.style.left = '-2.5rem'
}

function stopDrag() {
	window.removeEventListener('mousemove', dragButton)
	window.removeEventListener('touchmove', dragButton)
}
