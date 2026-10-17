import { $, ROOT_HTML, bind, setVars } from '../../utils/dom.js'
import { getItems, removeItems, setItems } from '../../utils/storage.js'
import { icon_full_width, icon_sync } from '../components/icons.js'
import { renderButton } from '../components/renderButtons.js'
import { renderSliderCard } from '../components/renderSliderCard.js'
import { renderToggle } from '../components/renderToggles.js'
import { ATTR_WIDTH_CHAT_FULL, ATTR_WIDTH_PROMPT_SYNC } from '../config/consts-attr.js'
import { SK_WIDTH_IS_FULL_ENABLED, SK_WIDTH_IS_SYNC_ENABLED, SK_WIDTH_SETTINGS } from '../config/consts-storage.js'
import { SELECTORS } from '../config/selectors.js'
import { renderCustomUserBubbleFullWidth, resetUserBubbleFullWidth } from './toggleUserBubbleFullWidth.js'

// ==========================================
// CONSTANTS
// ==========================================

// CSS custom property names - kebab-case, uniform with rest of GPTH vars
const CSS_VAR = {
	CHAT: '--gpth-width-chat',
	PROMPT: '--gpth-width-prompt',
	USER: '--gpth-width-user',
	USER_MAX: '--gpth-width-user-max',
}

// Slider config - rem units are viewport-stable (% shifts when sidebars open/close)
const SLIDER = {
	MIN: 0,
	MAX: 150,
	DEFAULT_CHAT: 48,
	DEFAULT_PROMPT: 48,
	UNIT: 'rem',
}

// Storage keys
const SK = {
	settings: SK_WIDTH_SETTINGS,
	fullWidth: SK_WIDTH_IS_FULL_ENABLED,
	sync: SK_WIDTH_IS_SYNC_ENABLED,
}

// ==========================================
// STATE
// ==========================================
let state = {
	chatRem: SLIDER.DEFAULT_CHAT,
	promptRem: SLIDER.DEFAULT_PROMPT,
	fullWidth: false,
	sync: false,
}

// ==========================================
// HELPERS
// ==========================================

/* Clamp a raw input value to the slider range */
const clamp = (v) => Math.max(SLIDER.MIN, Math.min(SLIDER.MAX, Number(v) || 0))

/* Set or remove a boolean data-attribute on <html> */
const setAttr = (attr, on) => (on ? ROOT_HTML.setAttribute(attr, '') : ROOT_HTML.removeAttribute(attr))

/* Push slider CSS vars to :root inline style.
When sync is active, the prompt var mirrors the chat value but we still write it so external reads are always correct */
function applyCssVars() {
	const promptRem = state.sync ? state.chatRem : state.promptRem
	setVars({
		[CSS_VAR.CHAT]: `${state.chatRem}${SLIDER.UNIT}`,
		[CSS_VAR.PROMPT]: `${promptRem}${SLIDER.UNIT}`,
	})
}

/* Push toggle state as data-attributes on <html>. 
CSS rules keyed on these attrs handle the actual visual overrides. The same pattern used by toggleUserBubbleFullWidth, toggleChatBubbles, etc */
function applyAttrs() {
	setAttr(ATTR_WIDTH_CHAT_FULL, state.fullWidth)
	setAttr(ATTR_WIDTH_PROMPT_SYNC, state.sync)
}

function applyAll() {
	applyCssVars()
	applyAttrs()
}

// ==========================================
// UI
// ==========================================

function updateSliderEl({ sliderId, outputId, value, disabled }) {
	const slider = $(sliderId)
	const output = $(outputId)
	if (slider) {
		slider.value = value
		slider.disabled = disabled
	}
	if (output) output.textContent = value
}

function updateUI() {
	// When full-width is active the chat slider is decorative. show MAX so it reads "full"
	const chatDisplayVal = state.fullWidth ? SLIDER.MAX : state.chatRem
	const promptDisplayVal = state.sync ? state.chatRem : state.promptRem

	updateSliderEl({
		sliderId: `#${SELECTORS.WIDTH.SLIDER_CHAT_ID}`,
		outputId: `#${SELECTORS.WIDTH.DISPLAY_CHAT_VALUE_ID}`,
		value: chatDisplayVal,
		disabled: state.fullWidth,
	})

	updateSliderEl({
		sliderId: `#${SELECTORS.WIDTH.SLIDER_TEXTAREA_ID}`,
		outputId: `#${SELECTORS.WIDTH.DISPLAY_TEXTAREA_VALUE_ID}`,
		value: promptDisplayVal,
		disabled: state.sync,
	})

	const elFull = $(`#${SELECTORS.WIDTH.TOGGLE_FULL_ID}`)
	const elSync = $(`#${SELECTORS.WIDTH.TOGGLE_SYNC_ID}`)
	if (elFull) elFull.checked = state.fullWidth
	if (elSync) elSync.checked = state.sync

	// Defer class toggle to avoid fighting the paint that just happened
	requestAnimationFrame(() => {
		$(`#${SELECTORS.WIDTH.SLIDER_CHAT_ID}`)?.closest('.card')?.classList.toggle('is-locked', state.fullWidth)
		$(`#${SELECTORS.WIDTH.SLIDER_TEXTAREA_ID}`)?.closest('.card')?.classList.toggle('is-locked', state.sync)
	})
}

// ==========================================
// STORAGE
// ==========================================

async function saveState() {
	try {
		await setItems({
			[SK.settings]: { chatRem: state.chatRem, promptRem: state.promptRem },
			[SK.fullWidth]: state.fullWidth,
			[SK.sync]: state.sync,
		})
	} catch (err) {
		console.error('[↔️ GPThemes] Save failed:', err)
	}
}

// ==========================================
// TEMPLATE
// ==========================================
function templateHTML() {
	return `
		<div class="gpth-layouts__widthSliders">
			${renderSliderCard({
				name: 'Chats Width',
				inputType: 'range',
				inputId: SELECTORS.WIDTH.SLIDER_CHAT_ID,
				inputValue: state.chatRem,
				displayValue: SELECTORS.WIDTH.DISPLAY_CHAT_VALUE_ID,
				displayUnit: SELECTORS.WIDTH.DISPLAY_CHAT_UNIT_ID,
				min: SLIDER.MIN,
				max: SLIDER.MAX,
				unit: SLIDER.UNIT,
			})}
			${renderSliderCard({
				name: 'Prompt Width',
				inputType: 'range',
				inputId: SELECTORS.WIDTH.SLIDER_TEXTAREA_ID,
				inputValue: state.promptRem,
				displayValue: SELECTORS.WIDTH.DISPLAY_TEXTAREA_VALUE_ID,
				displayUnit: SELECTORS.WIDTH.DISPLAY_TEXTAREA_UNIT_ID,
				min: SLIDER.MIN,
				max: SLIDER.MAX,
				unit: SLIDER.UNIT,
			})}
		</div>

		<div class="gpth-layouts__widthToggles">
			${renderToggle({
				id: SELECTORS.WIDTH.TOGGLE_FULL_ID,
				checked: false,
				label: 'Chat Full Width',
				subtitle: "Expand chats to screen's edge for a wider conversation view",
				icon: icon_full_width,
				card: true,
				className: '',
			})}
			${renderCustomUserBubbleFullWidth()}
			${renderToggle({
				id: SELECTORS.WIDTH.TOGGLE_SYNC_ID,
				checked: false,
				label: 'Sync Prompt Width',
				subtitle: 'Keep the prompt field width in sync with the chat width',
				icon: icon_sync,
				card: true,
				className: '',
			})}
		</div>
		<div class="gpth-layouts__widthResetBtn">
			${renderButton({
				id: SELECTORS.WIDTH.RESET_BTN_ID,
				content: 'Reset Widths',
				className: 'btn-primary',
			})}
		</div>`
}

// ==========================================
// EVENT HANDLERS
// ==========================================

function onChatSliderInput(e) {
	state.chatRem = clamp(e.target.value)
	// Moving the slider means the user wants a specific value. Disable full-width mode
	if (state.fullWidth) {
		state.fullWidth = false
		setAttr(ATTR_WIDTH_CHAT_FULL, false)
	}
	applyCssVars()
	updateUI()
}

function onPromptSliderInput(e) {
	state.promptRem = clamp(e.target.value)
	// Manually moving the prompt slider breaks sync with chat
	if (state.sync) {
		state.sync = false
		setAttr(ATTR_WIDTH_PROMPT_SYNC, false)
	}
	applyCssVars()
	updateUI()
}

/* CSS rule `html[data-gpth-width-chat-full] $CHATS_CONTENT { max-width: 100% }` does the work. JS only sets the attribute and keeps state consistent */
function onToggleFullWidth() {
	state.fullWidth = !state.fullWidth
	setAttr(ATTR_WIDTH_CHAT_FULL, state.fullWidth)
	updateUI()
	saveState()
}

/* CSS rule `html[data-gpth-width-prompt-sync] $CHATBOX_WRAPPER { max-width: var(--gpth-width-chat) }`. We also write the prompt CSS var so it's always correct for non-attr consumer */
function onToggleSyncWidths() {
	state.sync = !state.sync
	applyCssVars()
	setAttr(ATTR_WIDTH_PROMPT_SYNC, state.sync)
	updateUI()
	saveState()
}

// ==========================================
// RESET
// ==========================================

async function resetAll() {
	state = { chatRem: SLIDER.DEFAULT_CHAT, promptRem: SLIDER.DEFAULT_PROMPT, fullWidth: false, sync: false }
	applyAll()
	updateUI()
	await Promise.all([removeItems(Object.values(SK)), resetUserBubbleFullWidth()])
}

// ==========================================
// Lifecycle: INIT  (runs once on extension start, before the panel is in DOM)
// ==========================================
async function init() {
	try {
		const result = await getItems(Object.values(SK))
		const saved = result[SK.settings] || {}

		state = {
			chatRem: clamp(saved.chatRem ?? SLIDER.DEFAULT_CHAT),
			promptRem: clamp(saved.promptRem ?? SLIDER.DEFAULT_PROMPT),
			fullWidth: !!result[SK.fullWidth],
			sync: !!result[SK.sync],
		}

		// Apply CSS vars + data-attrs so the page renders correctly before the panel opens
		applyAll()
	} catch (err) {
		console.error('[↔️ GPThemes] Init error:', err)
	}
}

// ==========================================
// Lifecycle: MOUNT  (runs after templateHTML() is injected into the DOM)
// ==========================================
function mount() {
	bind($(`#${SELECTORS.WIDTH.SLIDER_CHAT_ID}`), { input: onChatSliderInput, change: saveState })
	bind($(`#${SELECTORS.WIDTH.SLIDER_TEXTAREA_ID}`), { input: onPromptSliderInput, change: saveState })
	bind($(`#${SELECTORS.WIDTH.TOGGLE_FULL_ID}`), { change: onToggleFullWidth })
	bind($(`#${SELECTORS.WIDTH.TOGGLE_SYNC_ID}`), { change: onToggleSyncWidths })
	bind($(`#${SELECTORS.WIDTH.RESET_BTN_ID}`), { click: resetAll })

	// Hydrate the panel UI from live state (template renders with plain defaults)
	updateUI()
}

// ==========================================
// Exports
// ==========================================
export { templateHTML, init, mount, resetAll }
