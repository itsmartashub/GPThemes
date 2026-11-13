/* The hide engine owns storage, the data attrs and the page availability check. The panel only decides when to call in */

import { $, ROOT_HTML } from '../../utils/dom.js'
import { getItems, setItem } from '../../utils/storage.js'
import { Notify } from '../components/renderNotify.js'


// =====================================================
// STORAGE
// =====================================================

// Load saved state for every element in one storage call
async function loadState(elements) {
	const keys = elements.map(({ storageKey }) => storageKey).filter(Boolean)
	if (!keys.length) return {}

	try {
		return await getItems(keys)
	} catch (error) {
		Notify.error('Failed to load hide settings')
		console.error('Failed to load hide states', error)
		return {}
	}
}

// Save one toggle state to storage
async function saveState({ storageKey }, isHidden) {
	if (!storageKey) return true

	try {
		await setItem(storageKey, isHidden)
		return true
	} catch (error) {
		Notify.error('Failed to hide element')
		console.error('Failed to save toggle state', storageKey, error)
		return false
	}
}

// =====================================================
// UPDATE CSS/DOM
// =====================================================

// Apply the state to <html>. The SCSS reads this attribute, nothing else does
function updateDataAttr({ dataAttr }, isHidden) {
	if (!dataAttr || !ROOT_HTML) return

	if (isHidden) ROOT_HTML.setAttribute(dataAttr, '')
	else ROOT_HTML.removeAttribute(dataAttr)
}

// The target element does not exist on every ChatGPT page or build
function isElementAvailable({ selector }) {
	return Boolean(selector) && Boolean($(selector))
}

// =====================================================
// EXPORTS
// =====================================================

export { isElementAvailable, loadState, saveState, updateDataAttr }
