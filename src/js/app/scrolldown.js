import browser from 'webextension-polyfill'
import { SELECTORS } from './config/selectors'
import { $, $$ } from '../utils/dom.js'

import { icon_align_left, icon_align_center, icon_align_right } from './components/icons'
import { setCssVars } from '../utils/setCssVar'
import { Notify } from './components/renderNotify.js'

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
			// scrollBtnRight: '1.5rem',
			scrollBtnRight: '2rem',
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
                    class="${SELECTORS.SCROLLDOWN.BTN} flex items-center justify-center gap-1 ${isActive}" 
                    data-position="${position}"
                >
                    ${config.icon} ${config.label}
                </button>
            `
		})
		.join('')

	return `
        <section class="${SELECTORS.SCROLLDOWN.ROOT}">
            <h4 class="${SELECTORS.SUBHEADING}">Scrolldown Button Align</h4>
            <div class="${SELECTORS.SCROLLDOWN.BTN_CONTAINER} flex justify-center rounded-full">
                ${positionBtns}
            </div>
        </section>
    `
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
	const btns = $$(`.${SELECTORS.SCROLLDOWN.BTN}`, btnContainer)
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

function handleScrolldownListeners() {
	// console.log('[🎨GPThemes]: handleScrolldownListeners')

	const btnContainer = $(`.${SELECTORS.SCROLLDOWN.BTN_CONTAINER}`)
	if (!btnContainer) return

	// Use event delegation for better performance
	btnContainer.addEventListener('click', (e) => {
		const btn = e.target.closest(`.${SELECTORS.SCROLLDOWN.BTN}`)
		if (!btn) return

		const scrollBtn = $(SELECTORS.SCROLLDOWN.SCROLL_BTN)
		if (!scrollBtn)
			return Notify.error(
				`🚨 Scrolldown button not found. Possible reasons: missing on this page or OpenAI codebase changes.`,
				5000
			)

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
	handleScrolldownListeners()
	// console.log('[🎨GPThemes]: Scrolldown initialized')
}

export { generateScrollDownHTML as renderCustomScrollDown, init, handleScrolldownListeners }
