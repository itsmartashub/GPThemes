import {
	icon_footer,
	icon_header,
	icon_header_btns,
	icon_header_model,
	icon_header_new_chat,
	icon_header_share,
	icon_sidebar,
    icon_upgrade,
	icon_ads
} from '../components/icons'

/* Prefixes: single place to rename if the ext ever rebrands */
const ATTR_PFX = 'data-gpth-hide-'
const ID_PFX = 'gpth-hide-'

function defineHide({
	slug,
	storageKey,
	label,
	subtitle,
	icon,
	selector,
	group,
	badge,
	isHidden = false,
}) {
	return {
		id: `${ID_PFX}${slug}`,
		dataAttr: `${ATTR_PFX}${slug}`,
		storageKey,
		label,
		subtitle,
		icon,
		selector,
		group,
		badge,
		isHidden,
	}
}

export const ELEMENTS = [
	// HEADER
	defineHide({
		slug: 'header',
		storageKey: 'hideHeader',
		label: 'Header',
		subtitle: 'Hide the top header to maximize screen space.',
		icon: icon_header,
		selector: 'header#page-header, header[data-pip-obstacle="app-shell-header"]',
		group: 'header',
	}),
	defineHide({
		slug: 'header-upgrade-chip',
		storageKey: 'hideHeaderUpgradeChip',
		label: 'Upgrade Chip',
		subtitle: 'Hide the upgrade chip in the header',
		icon: icon_upgrade,
		selector: '.text-text-header-upgrade',
		group: 'header',
	}),
	defineHide({
		slug: 'header-model-btn',
		storageKey: 'hideHeaderModelBtn',
		label: 'ChatGPT Button',
		subtitle: 'Hide the ChatGPT model button. More useful on mobile.',
		icon: icon_header_model,
		badge: 'mobile',
		selector: '[data-testid="model-switcher-dropdown-button"]',
		group: 'header',
	}),
	defineHide({
		slug: 'header-actions-btn',
		storageKey: 'hideHeaderActionsBtn',
		label: 'Action Buttons',
		subtitle: 'Hide the top-right action buttons (Share, Open canvas, etc.)',
		icon: icon_header_btns,
		badge: 'mobile',
		selector: '#conversation-header-actions',
		group: 'header',
	}),
	defineHide({
		slug: 'header-share-btn',
		storageKey: 'hideHeaderShareBtn',
		label: 'Share Button',
		subtitle: 'Hide the Share button from the header. English only.',
		icon: icon_header_share,
		badge: 'en',
		selector:
			'[data-testid="share-chat-button"], header button.button-toolbar[aria-label="Share"]',
		group: 'header',
	}),
	defineHide({
		slug: 'header-new-chat-btn',
		storageKey: 'hideHeaderNewChatBtn',
		label: 'New Chat Button',
		subtitle: 'Hide the new chat button in the header (mobile). English only.',
		icon: icon_header_new_chat,
		badge: 'en',
		selector:
			'#conversation-header-actions a[aria-label][href="/"],header[data-pip-obstacle="app-shell-header"] .gap-toolbar-action button[aria-label="New chat"]',
		group: 'header',
	}),

	// SIDEBAR
	defineHide({
		slug: 'sidebar-images',
		storageKey: 'hideSidebarImages',
		label: 'Images',
		subtitle: 'Hide the Images from the sidebar',
		icon: icon_sidebar,
		selector: '[data-sidebar-destination="builtin:images"]',
		group: 'sidebar',
	}),
	defineHide({
		slug: 'sidebar-scheduled',
		storageKey: 'hideSidebarScheduled',
		label: 'Scheduled',
		subtitle: 'Hide the Scheduled from the sidebar',
		icon: icon_sidebar,
		selector: '[data-sidebar-destination="builtin:automations"]',
		group: 'sidebar',
	}),
	defineHide({
		slug: 'sidebar-library',
		storageKey: 'hideSidebarLibrary',
		label: 'Library',
		subtitle: 'Hide the Scheduled from the sidebar',
		icon: icon_sidebar,
		selector: '[data-sidebar-destination="builtin:library"]',
		group: 'sidebar',
	}),
	defineHide({
		slug: 'sidebar-plugins',
		storageKey: 'hideSidebarPlugins',
		label: 'Plugins',
		subtitle: 'Hide the Plugins from the sidebar',
		icon: icon_sidebar,
		selector: '[data-sidebar-destination="builtin:skills"]',
		group: 'sidebar',
	}),
	defineHide({
		slug: 'sidebar-pinned',
		storageKey: 'hideSidebarPinned',
		label: 'Pinned',
		subtitle: 'Hide the Pinned section from the sidebar',
		icon: icon_sidebar,
		selector: '[data-sidebar-project-container-id="pinned"]',
		group: 'sidebar',
	}),
	defineHide({
		slug: 'sidebar-project',
		storageKey: 'hideSidebarProject',
		label: 'Project',
		subtitle: 'Hide the Project section from the sidebar',
		icon: icon_sidebar,
		selector: '[data-app-action-sidebar-section-heading="Projects"]',
		group: 'sidebar',
	}),
	defineHide({
		slug: 'sidebar-recents',
		storageKey: 'hideSidebarRecents',
		label: 'Recents',
		subtitle: 'Hide the Recents section from the sidebar',
		icon: icon_sidebar,
		selector: '[data-app-action-sidebar-section-heading="Recents"]',
		group: 'sidebar',
	}),

	// OTHER
	defineHide({
		slug: 'footer',
		storageKey: 'hideFooter',
		label: 'AI Disclaimer',
		subtitle: 'Hide the disclaimer text above the chatbox',
		icon: icon_footer,
		selector: '[data-testid="thread-disclaimer"], .sticky.bottom-0 .text-codex-description',
		group: 'other',
    }),

	// EXPERIMENTAL
	defineHide({
		slug: 'chat-ads',
		storageKey: 'hideChatAds',
		label: 'Chat Ads',
		subtitle: 'Hide the chats ads (very unstable)',
		icon: icon_ads,
		selector: '.QdG_CWCs',
        group: 'experimental',
		badge: 'unstable'
    }),
]

/* Flat key list consumed by EXPORT_CONFIG in consts-storage.js. Avoids maintaining a second list */
export const HIDE_STORAGE_KEYS = ELEMENTS.map((el) => el.storageKey)
