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

function addScrollDownListeners() {
	const btnContainer = document.querySelector('.gpth-scrolldown__tabs')
	if (!btnContainer) return

	// Use event delegation for better performance
	btnContainer.addEventListener('click', (e) => {
		const button = e.target.closest('.gpth-scrolldown__tab')
		if (!button) return

		const position = button.dataset.position

		console.log('position: ', position)
	})
}

function init() {
	addScrollDownListeners()
}

export { generateScrollDownHTML as renderCustomScrollDown, init }
