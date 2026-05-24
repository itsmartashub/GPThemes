/**
 * Tagger for the Activity sidebar (Memory, Web, etc.)
 * Stamps data-gpth-activity-panel on the right sidebar container
 * so CSS can reliably target it regardless of ChatGPT's class names.
 */

const PANEL_ATTR = 'data-gpth-activity-panel'
const SURFACE_ATTR = 'data-gpth-activity-surface'
const CANDIDATE_SELECTOR =
	'aside, [role="complementary"], [data-testid*="flyout" i], [data-testid*="activity" i], [class*="flyout" i]'
const SURFACE_SELECTOR = [
	'[class*="bg-neutral-"]',
	'[class*="bg-gray-"]',
	'[class*="bg-white"]',
	'[class*="bg-[#f"]',
	'[class*="bg-[#e"]',
	'[class*="bg-[#d"]',
	'[class*="bg-[#F"]',
	'[class*="bg-[#E"]',
	'[class*="bg-[#D"]',
	'[style*="background"]',
].join(',')

let active = false
let observer = null
let scanTimeout = null

/** Check if an element looks like the activity/thread flyout sidebar */
function isActivityPanel(el) {
	// Check for common right-sidebar indicators
	if (el.matches('aside, [role="complementary"]')) return true
	if (el.getAttribute('data-testid')?.match(/flyout|activity/i)) return true
	if (
		el.className?.match?.(/flyout|activity|sidebar/i) &&
		!el.matches('#stage-slideover-sidebar, #stage-popover-sidebar, nav')
	)
		return true
	return false
}

/** Mark light backgrounds so CSS can theme them without repeated inline writes. */
function markChildSurfaces(panel) {
	const children = panel.querySelectorAll(SURFACE_SELECTOR)
	for (const child of children) {
		if (!(child instanceof HTMLElement)) continue

		const style = window.getComputedStyle(child)
		const bg = style.backgroundColor
		if (!bg || bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)') continue

		// Parse rgb values
		const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
		if (!match) continue

		const [, r, g, b] = match.map(Number)
		// If the background is light (high luminance), it needs to be overridden
		const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
		if (luminance > 0.7) {
			child.setAttribute(SURFACE_ATTR, '')
		}
	}
}

function scan() {
	const root = document.querySelector('main') || document.body
	if (!root) return

	// Tag any activity panel elements
	const candidates = [
		...(root.matches(CANDIDATE_SELECTOR) ? [root] : []),
		...root.querySelectorAll(CANDIDATE_SELECTOR),
	]

	for (const el of candidates) {
		if (!el.hasAttribute(PANEL_ATTR) && isActivityPanel(el)) {
			el.setAttribute(PANEL_ATTR, '')
			markChildSurfaces(el)
		}
	}

	// Also force backgrounds on already-tagged panels when DOM changes
	for (const panel of root.querySelectorAll(`[${PANEL_ATTR}]`)) {
		markChildSurfaces(panel)
	}
}

function mount() {
	if (active) return
	active = true

	// Initial scan
	scan()

	observer = new MutationObserver(() => {
		if (scanTimeout) clearTimeout(scanTimeout)
		scanTimeout = setTimeout(scan, 150)
	})

	observer.observe(document.body, { childList: true, subtree: true })
	return cleanup
}

function cleanup() {
	if (scanTimeout) {
		clearTimeout(scanTimeout)
		scanTimeout = null
	}
	observer?.disconnect()
	observer = null
	active = false
	document.querySelectorAll(`[${PANEL_ATTR}], [${SURFACE_ATTR}]`).forEach((el) => {
		el.removeAttribute(PANEL_ATTR)
		el.removeAttribute(SURFACE_ATTR)
	})
}

export { cleanup, mount }
