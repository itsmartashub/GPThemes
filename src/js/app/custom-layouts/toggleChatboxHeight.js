import { createToggleSetting } from '../components/createToggleSetting.js'
import { icon_taller_height } from '../components/icons.js'
import { ATTR_CHATBOX_HEIGHT } from '../config/consts-attr.js'
import { SK_TOGGLE_CHATBOX_HEIGHT } from '../config/consts-storage.js'
import { SELECTORS } from '../config/selectors.js'

const chatboxHeightToggle = createToggleSetting({
	id: SELECTORS.CHATBOX.TOGGLE_MAX_HEIGHT_ID,
	storageKey: SK_TOGGLE_CHATBOX_HEIGHT,
	dataAttr: ATTR_CHATBOX_HEIGHT,
	label: 'Expand Chatbox',
	notifyLabel: 'Chatbox height preference',
	subtitle:
		'Increase the height of the message box to fit more content. Warning: Always disabled on "Library", "Images" and "Projects" pages.',
	icon: icon_taller_height,
	selector: SELECTORS?.CHATBOX?.HEIGHT,
	notFoundMessage: 'Chatbox not found on this page.',
})

export const renderCustomChatboxHeight = () => `
	<h4 class="${SELECTORS.SUBHEADING}">Other</h4>
	${chatboxHeightToggle.templateHTML()}
`
export const mount = chatboxHeightToggle.mount
