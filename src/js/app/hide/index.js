import { ELEMENTS } from '../config/hidden-els.js'
import { createToggleCard as renderToggle } from '../components/renderToggles.js'
import { Notify } from '../components/renderNotify.js'
import { q } from '../utils/dom.js'
import browser from 'webextension-polyfill'
import { setCssVars } from '../../utils/setCssVar.js'

// hydrate all toggles on load
export function initToggles(container) {
	ELEMENTS.forEach((cfg) => {
		const card = renderToggle({
			id: cfg.id,
			label: cfg.label,
			subtitle: cfg.subtitle,
			checked: cfg.isHidden,
			onToggle: (visible) => applyToggle(cfg, visible),
		})
		container.appendChild(card)

		// ensure CSS var is set on load (after storage retrieval)
		browser.storage.sync.get([cfg.id], (result) => {
			const visible = result[cfg.id] ?? cfg.isHidden
			applyToggle(cfg, visible)
		})
	})
}

function applyToggle(cfg, visible) {
	const el = q(cfg.selector)
	if (!el) {
		Notify(`Element "${cfg.selector}" not found`, 'error')
		return
	}

	// update element visibility
	el.style.display = visible ? 'initial' : 'none'

	// update CSS var on :root
	// document.documentElement.style.setProperty(cfg.cssVar, visible ? '1' : '0')
	setCssVars({ [cfg.cssVar]: visible ? '1' : '0' })

	// persist state
	browser.storage.sync.set({ [cfg.id]: visible })
}
