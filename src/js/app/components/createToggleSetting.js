import { $, ROOT_HTML } from '../../utils/dom.js'
import { getItem, setItem } from '../../utils/storage.js'
import { Notify } from './renderNotify.js'
import { renderToggle } from './renderToggles.js'

export function createToggleSetting(config) {
	const {
		id,
		storageKey,
		dataAttr,
		label,
		notifyLabel = label,
		subtitle,
		icon,
		defaultValue = false,
		selector,
		notFoundMessage = `${notifyLabel} not found on this page.`,
		card = true,
		className = '',
		onStateChange,
	} = config

	function templateHTML(options = {}) {
		return renderToggle({
			id,
			checked: defaultValue,
			label,
			subtitle,
			icon,
			card,
			className,
			...options,
		})
	}

	async function saveState(state = defaultValue) {
		try {
			await setItem(storageKey, state)
			state ? Notify.success(`${notifyLabel} enabled`) : Notify.info(`${notifyLabel} disabled`)
			return true
		} catch (error) {
			Notify.error(`Failed to save ${notifyLabel} preference`)
			console.error(`Failed to save "${storageKey}":`, error)
			return false
		}
	}

	async function loadState() {
		try {
			const result = await getItem(storageKey)
			return result == null ? defaultValue : !!result
		} catch (error) {
			Notify.error(`Failed to load ${notifyLabel} preference`)
			console.error(`Failed to load "${storageKey}":`, error)
			return defaultValue
		}
	}

	function updateDataAttr(state) {
		if (!dataAttr || !ROOT_HTML) return

		if (state) {
			ROOT_HTML.setAttribute(dataAttr, '')
			return
		}

		ROOT_HTML.removeAttribute(dataAttr)
	}

	function updateInputs(state) {
		const input = document.getElementById(id)
		if (input) input.checked = !!state
	}

	async function onChange({ target }) {
		if (selector && !$(selector)) {
			Notify.error(notFoundMessage)
			target.checked = !target.checked
			return
		}

		const isEnabled = target.checked
		updateDataAttr(isEnabled)
		await saveState(isEnabled)
		onStateChange?.(isEnabled)
	}

	async function mount() {
		const input = document.getElementById(id)
		if (!input) {
			console.warn(`createToggleSetting: element with ID "${id}" not found`)
			return
		}

		const state = await loadState()
		updateInputs(state)
		updateDataAttr(state)
		input.addEventListener('change', onChange)
	}

	async function reset() {
		updateInputs(defaultValue)
		updateDataAttr(defaultValue)
		try {
			await setItem(storageKey, defaultValue)
		} catch (error) {
			console.error(`Failed to reset "${storageKey}":`, error)
		}
	}

	return {
		id,
		templateHTML,
		mount,
		reset,
		loadState,
		saveState,
		updateDataAttr,
		updateInputs,
	}
}
