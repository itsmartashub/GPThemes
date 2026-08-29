import { createToggleSetting } from '../components/createToggleSetting.js'
import { icon_text_color } from '../components/icons.js'
import { ATTR_ACCENT_TEXT } from '../config/consts-attr.js'
import { SK_TOGGLE_ACCENT_TEXT } from '../config/consts-storage.js'
import { SELECTORS } from '../config/selectors.js'

const accentAllTextToggle = createToggleSetting({
	id: SELECTORS.CHATS.TOGGLE_ACCENT_TEXT_ID,
	storageKey: SK_TOGGLE_ACCENT_TEXT,
	dataAttr: ATTR_ACCENT_TEXT,
	label: 'Accent All Text',
	notifyLabel: 'All text accent',
	subtitle: 'Make all the text on the page accented',
	icon: icon_text_color,
	selector: SELECTORS?.CHATS?.USER,
	notFoundMessage: 'User chat not found on this page.',
})

export const renderAllTextAccent = accentAllTextToggle.templateHTML
export const mount = accentAllTextToggle.mount
