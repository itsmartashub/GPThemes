import { createToggleSetting } from '../components/createToggleSetting.js'
import { icon_accent } from '../components/icons.js'
import { ATTR_BUBBLE_USER_ACCENT } from '../config/consts-attr.js'
import { SK_TOGGLE_USER_BUBBLE_ACCENT } from '../config/consts-storage.js'
import { SELECTORS } from '../config/selectors.js'

const userBubbleAccentToggle = createToggleSetting({
	id: SELECTORS.CHATS.TOGGLE_USER_BUBBLE_ACCENT_ID,
	storageKey: SK_TOGGLE_USER_BUBBLE_ACCENT,
	dataAttr: ATTR_BUBBLE_USER_ACCENT,
	label: 'Accent User Bubble',
	notifyLabel: 'User bubble accent',
	subtitle: 'Make the user bubble fully accented for higher contrast',
	icon: icon_accent,
	selector: SELECTORS?.CHATS?.USER,
	notFoundMessage: 'User bubble not found on this page.',
})

export const renderUserAccentBgToggle = userBubbleAccentToggle.templateHTML
export const mount = userBubbleAccentToggle.mount
