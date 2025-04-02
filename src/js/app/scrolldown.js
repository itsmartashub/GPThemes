import browser from 'webextension-polyfill'
import { icon_align_left, icon_align_center, icon_align_right } from './components/icons'

// Configuration object - single source of truth
const POSITION_CONFIG = {
	left: {
		label: 'Left',
		icon: icon_align_left,
		cssVars: {
			scrollBtnLeft: '0%',
			scrollBtnRight: 'unset',
		},
	},
	center: {
		label: 'Center',
		icon: icon_align_center,
		cssVars: {
			scrollBtnLeft: 'unset',
			scrollBtnRight: '50%',
		},
	},
	right: {
		label: 'Right',
		icon: icon_align_right,
		cssVars: {
			scrollBtnLeft: 'unset',
			scrollBtnRight: '3%',
		},
	},
}

const DEFAULT_POSITION = 'center'

function generateScrollDownHTML() {
	const positionBtns = Object.entries(POSITION_CONFIG)
		.map(([position, config]) => {
			const isActive = position === DEFAULT_POSITION ? 'active' : ''

			return `
                <button 
                    id="scroll-btn-${position}" 
                    class="gpth-scrolldown__tab flex items-center justify-center gap-1 ${isActive}" 
                    data-position="${position}"
                >
                    ${config.icon} ${config.label}
                </button>
            `
		})
		.join('')

	return `
        <section class="gpth-scrolldown">
            <h4 class="mb-3 ml-2">Scrolldown Button Align</h4>
            <div class="gpth-scrolldown__tabs flex justify-center rounded-full">
                ${positionBtns}
            </div>
        </section>
    `
}

function setCssVars(cssVars) {
	const root = document.documentElement

	Object.entries(cssVars).forEach(([key, value]) => {
		root.style.setProperty(`--${key}`, value)
	})
}
async function savePositionPreference(position) {
	try {
		await browser.storage.sync.set({ scrollButtonPosition: position })
	} catch (error) {
		console.error('Failed to save position preference:', error)
	}
}

function applyPosition(position = DEFAULT_POSITION, btnContainer) {
	if (!POSITION_CONFIG[position]) {
		position = DEFAULT_POSITION
	}

	// 1. Update active button
	const btns = btnContainer.querySelectorAll('.gpth-scrolldown__tab')
	btns.forEach((btn) => {
		btn.classList.toggle('active', btn.dataset.position === position)
	})

	// 2. Apply CSS variables
	setCssVars(POSITION_CONFIG[position].cssVars)

	// 3. Save preference in storage
	savePositionPreference(position)
}

async function loadPositionPreference() {
	try {
		const result = await browser.storage.sync.get('scrollButtonPosition')
		return result.scrollButtonPosition || DEFAULT_POSITION
	} catch (error) {
		console.error('Failed to load position preference:', error)
		return DEFAULT_POSITION
	}
}

function addScrollDownListeners() {
	const btnContainer = document.querySelector('.gpth-scrolldown__tabs')
	if (!btnContainer) return

	// Use event delegation for better performance
	btnContainer.addEventListener('click', (e) => {
		const btn = e.target.closest('.gpth-scrolldown__tab')
		if (!btn) return

		const position = btn.dataset.position

		// console.log('position: ', position)
		applyPosition(position, btnContainer)
	})

	// Load and apply saved preferences
	loadPositionPreference().then((position) => {
		applyPosition(position, btnContainer)
	})
}

function init() {
	addScrollDownListeners()
}

export { generateScrollDownHTML as renderCustomScrollDown, init }
