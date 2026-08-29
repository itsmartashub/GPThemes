import { createToggleSetting } from '../components/createToggleSetting.js'
import { icon_bubble_full_width } from '../components/icons.js'
import { ATTR_BUBBLE_USER_FULLWIDTH } from '../config/consts-attr.js'
import { SK_TOGGLE_USER_BUBBLE_FULLWIDTH } from '../config/consts-storage.js'
import { SELECTORS } from '../config/selectors.js'

const userBubbleFullWidthToggle = createToggleSetting({
	id: SELECTORS.CHATS.TOGGLE_USER_BUBBLE_FULLWIDTH_ID,
	storageKey: SK_TOGGLE_USER_BUBBLE_FULLWIDTH,
	dataAttr: ATTR_BUBBLE_USER_FULLWIDTH,
	label: 'User Bubble Full Width',
	notifyLabel: 'Full width user chat',
	subtitle: 'Expands the user message width from the default 70% to 100% to match the assistant message width',
	icon: icon_bubble_full_width,
	selector: SELECTORS?.CHATS?.USER_WIDTH,
	notFoundMessage: 'User chat not found on this page.',
})

export const renderCustomUserBubbleFullWidth = userBubbleFullWidthToggle.templateHTML
export const mount = userBubbleFullWidthToggle.mount
export const resetUserBubbleFullWidth = userBubbleFullWidthToggle.reset
