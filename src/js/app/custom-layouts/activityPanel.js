/**
 * Tagger for the Activity sidebar (Memory, Web, etc.)
 * Stamps data-gpth-activity-panel on the right sidebar container
 * so CSS can reliably target it regardless of ChatGPT's class names.
 */

let active = false
let observer = null

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

/** Force dark backgrounds on light-colored child elements */
function forceChildBackgrounds(panel) {
	const children = panel.querySelectorAll('*')
	for (const child of children) {
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
			child.style.setProperty('background-color', 'var(--c-surface-2)', 'important')
		}
	}
}

function scan() {
	// Tag any activity panel elements
	const candidates = document.querySelectorAll(
		'aside, [role="complementary"], [data-testid*="flyout" i], [data-testid*="activity" i], [class*="flyout" i]',
	)

	for (const el of candidates) {
		if (!el.hasAttribute('data-gpth-activity-panel') && isActivityPanel(el)) {
			el.setAttribute('data-gpth-activity-panel', '')
			// Force backgrounds on initial discovery
			forceChildBackgrounds(el)
		}
	}

	// Also force backgrounds on already-tagged panels when DOM changes
	for (const panel of document.querySelectorAll('[data-gpth-activity-panel]')) {
		forceChildBackgrounds(panel)
	}
}

function mount() {
	if (active) return
	active = true

	// Initial scan
	scan()

	// Debounced observer
	let scanTimeout = null
	observer = new MutationObserver(() => {
		if (scanTimeout) clearTimeout(scanTimeout)
		scanTimeout = setTimeout(scan, 150)
	})

	observer.observe(document.body, { childList: true, subtree: true })
}

export { mount }
