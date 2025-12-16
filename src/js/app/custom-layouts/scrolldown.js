import { $, $$, setVars } from '../../utils/dom.js'
import { getItem, setItem } from '../../utils/storage.js'
import { icon_align_center, icon_align_left, icon_align_right } from '../components/icons.js'
import { Notify } from '../components/renderNotify.js'
import { SK_SCROLL_BUTTON_POSITION } from '../config/consts-storage.js'
import { SELECTORS } from '../config/selectors.js'

// =====================================================
// STATE
// =====================================================

const CONFIG = {
	left: {
		label: 'Left',
		icon: icon_align_left,
		cssVars: {
			'--scrollBtnLeft': '0%',
			'--scrollBtnRight': 'unset',
		},
	},
	center: {
		label: 'Center',
		icon: icon_align_center,
		cssVars: {
			'--scrollBtnLeft': 'unset',
			'--scrollBtnRight': '50%',
		},
	},
	right: {
		label: 'Right',
		icon: icon_align_right,
		cssVars: {
			'--scrollBtnLeft': 'unset',
			// '--scrollBtnRight': '1.5rem',
			'--scrollBtnRight': '2rem',
		},
	},
}

const STORAGE_KEY = SK_SCROLL_BUTTON_POSITION
const DEFAULT_POSITION = 'center'

// =====================================================
// TEMPLATE
// =====================================================

function templateHTML() {
	const positionBtns = Object.entries(CONFIG)
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

// =====================================================
// STORAGE
// =====================================================

async function saveToStorage(position) {
	try {
		await setItem(STORAGE_KEY, position)
		Notify.success(`Position updated to ${position}`)
	} catch (error) {
		console.error('Failed to save position preference:', error)
		Notify.error('Failed to save position preference')
	}
}
async function getFromStorage() {
	try {
		const result = await getItem(STORAGE_KEY) // returns: 'left' | 'center' | 'right' | null
		return result || DEFAULT_POSITION
	} catch (error) {
		console.error('Failed to load position preference:', error)
		return DEFAULT_POSITION
	}
}

// =====================================================
// UPDATE CSS/DOM & STORAGE
// =====================================================

function applyPosition(position = DEFAULT_POSITION, btnContainer, silent = false) {
	if (!CONFIG[position]) {
		position = DEFAULT_POSITION
	}

	// GUARD: Bail if clicking the same position
	const $currActive = $(`.${SELECTORS.SCROLLDOWN.BTN}.active`, btnContainer)

	if ($currActive?.dataset.position === position) return

	// 1. Update active btn
	const $btns = $$(`.${SELECTORS.SCROLLDOWN.BTN}`, btnContainer)
	$btns.forEach((btn) => {
		btn.classList.toggle('active', btn.dataset.position === position)
	})

	// 2. Apply CSS vars
	setVars(CONFIG[position].cssVars)

	// 3. Save pref in storage
	if (!silent) saveToStorage(position)
}

// =====================================================
// EVENTS
// =====================================================
function onClick(e) {
	const $btn = e.target.closest(`.${SELECTORS.SCROLLDOWN.BTN}`)
	if (!$btn) return

	const $scrollBtn = $(SELECTORS.SCROLLDOWN.SCROLL_BTN)
	if (!$scrollBtn)
		return Notify.error(
			`🚨 Scrolldown button not found. Possible reasons: missing on this page or OpenAI codebase changes.`,
			5000,
		)

	const position = $btn.dataset.position

	applyPosition(position, this)
}

// =====================================================
// Lifecycle: MOUNT
// =====================================================

async function mount() {
	const $btnContainer = $(`.${SELECTORS.SCROLLDOWN.BTN_CONTAINER}`)
	if (!$btnContainer)
		return console.warn(`Element with class ${SELECTORS.SCROLLDOWN.BTN_CONTAINER} not found`)

	// Load and apply saved prefs for btn active state
	const position = await getFromStorage()
	applyPosition(position, $btnContainer, true)

	// Use event delegation for better perf
	$btnContainer.addEventListener('click', onClick)
}
// async function init() {
// 	const position = await getFromStorage()
// 	// Apply CSS vars early without requiring the settings UI to exist
// 	if (CONFIG[position]?.cssVars) setVars(CONFIG[position].cssVars)
// }

// export { templateHTML as renderCustomScrolldown, init, mount }
export { templateHTML as renderCustomScrolldown, mount }
