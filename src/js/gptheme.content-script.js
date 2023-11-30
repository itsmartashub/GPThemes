// Get the URL

const url = window.location.hostname
// alert(url)

let myStyleHead = `
html, body {
    --text-primary: var(--c-txt) !important;
    color: var(--c-txt) !important;

    background-color: var(--c-bg-chats-container) !important;
    font-family: var(--f-fm) !important;
}

button {
    --text-primary: var(--c-txt) !important;
}

/* --------- btn scroll down u conversations i kad se stisne na Upgrade ---------*/
.bg-token-surface-primary {
    /*  --surface-primary: var(--c-bg-msg-user) !important; */
    /* --surface-primary: var(--c-surface-1) !important; */
    /* --surface-primary: red !important; */
    --surface-primary: var(--c-surface-1) !important;
}
/* --------- bg when clicked on rename list item name ---------*/
/* .bg-token-surface-tertiary {
    background-color: var(--c-surface-3) !important;
    padding: inherit !important;
    border-radius: inherit !important;
    color: var(--c-txt) !important;
    left: 0 !important;
    right: 0 !important;
} */

.h-px {
    display: none !important;
}
.border-gray-100 {
    border-color: var(--c-surface-1) !important;
}
.bg-white,
.bg-gray-100 {
    background-color: var(--c-surface-1) !important;
}

.markdown a {
    color: var(--c-accent) !important;
}
.markdown a:hover {
    text-decoration: underline !important;
}

/* .rounded-lg, ne moze, ovo je i za Theme btn, i sa contextmenu */
/* .rounded-md {
    border-radius: var(--border-radius-msg) !important;
} */

/* --------- recimo gap izmedju new chat example buttons ---------*/
.gap-2 {
    gap: .8rem !important;
}

/* svg path {
    fill: var(--c-svg) !important;
} */

.btn {
    background-color: var(--c-bg-btn) !important;
    color: var(--c-btn) !important;
    border: none !important;

    border-radius: var(--border-radius-btn) !important;
}
button.btn-danger {
    background-color: var(--c-btn-danger) !important;
    color: var(--c-bg-chats-container) !important;
}

/* --------- SIDEBAR ---------*/
.flex-shrink-0.overflow-x-hidden,
.bg-gray-900[data-headlessui-state="open"] {
    color: var(--c-txt) !important;
    --surface-primary: var(--c-surface-2) !important;
    background-color: var(--c-bg-sidebar) !important;
}
.flex-shrink-0.overflow-x-hidden nav a > *,
.bg-gray-900[data-headlessui-state="open"] nav a > * {
    color: var(--c-txt) !important;
}
/* --------- SIDEBAR NAV ---------*/
.scrollbar-trigger:has(nav[aria-label="Chat history"]) nav {
    padding: var(--p-sidebar-nav) !important;
}

/* --------- SIDEBAR NAV A LINKS ---------*/
.scrollbar-trigger:has(nav[aria-label="Chat history"]) nav a {
    font-family: var(--f-fm) !important;
    padding: var(--p-sidebar-nav-a) !important;
    border-radius: var(--border-radius-btn) !important;
    
    transition: background-color .3s ease-in-out;
}
/* .scrollbar-trigger:has(nav[aria-label="Chat history"]) nav a div {
    color: var(--c-txt) !important;
}
 */
/* --------- SIDEBAR ACTIVE LINK AND HOVER STATE ---------*/
.scrollbar-trigger:has(nav[aria-label="Chat history"]) .bg-gradient-to-l,
.scrollbar-trigger:has(nav[aria-label="Chat history"]) li .bg-token-surface-primary {
    --surface-primary: var(--c-surface-2) !important;
    --tw-gradient-from: var(--surface-primary) var(--tw-gradient-from-position) !important;
}

/* --------- SIDEBAR ACTIVE LINK - RENAME ITEM - bg when clicked on rename list item name ---------*/
.scrollbar-trigger:has(nav[aria-label="Chat history"]) li .bg-token-surface-tertiary {
    padding: var(--p-sidebar-nav-a) !important;
    border-radius: var(--border-radius-btn) !important;
    color: var(--c-txt) !important;
    background-color: var(--c-surface-3) !important;
    left: 0 !important;
    right: 0 !important;
}

/* --------- SIDEBAR LINK ... BTN BG-GRADIENT ---------*/
.scrollbar-trigger:has(nav[aria-label="Chat history"]) li .bg-gradient-to-l {
   opacity: 0 !important;
}
.scrollbar-trigger:has(nav[aria-label="Chat history"]) li:has(a.bg-token-surface-primary) .bg-gradient-to-l {
    opacity: 1 !important;
}



/* --------- SIDEBAR TIME HEADING ---------*/
.scrollbar-trigger:has(nav[aria-label="Chat history"]) h3 {
    color: var(--c-accent) !important;
    background-color: transparent !important;
    text-transform: uppercase;
    font-weight: bold;
}

/* ------- SIDEBAR - PIH, vidim samo kad otvorim sidebar bottom, klik na username -------*/
[role="menu"] {
    background-color: var(--c-surface-3) !important;
    border-radius: var(--border-radius-contextmenu) !important;
    border: none !important;
    padding: .3rem !important;
    box-shadow: var(--box-shadow-contextmenu) !important;
    transition: all .3s ease-in-out;
}
[role="menuitem"] {
    border-radius: var(--border-radius-btn) !important;
    transition: all .3s ease-in-out;
}

/* --------- SIDEBAR BOTTOM USERNAME CLICKED CONTEXT MENU ---------*/
[data-headlessui-state="open"] {
    background-color: var(--c-surface-3) !important;
    border-radius: var(--border-radius-contextmenu) !important;
    transition: all .3s ease-in-out;
}
[data-headlessui-state] > *,
[data-headlessui-state] nav a {
    color: var(--c-txt) !important;
}
[data-headlessui-state="open"] nav a[data-headlessui-state="active"],
[data-headlessui-state="open"] nav a:hover {
    background-color: var(--c-surface-2) !important;
}
[data-headlessui-state="open"] nav a {
    font-size: 14px !important;
}
/* --------- SIDEBAR BOTTOM - Log Out ---------*/
.scrollbar-trigger:has(nav[aria-label="Chat history"]) nav [data-headlessui-state="open"]:has(button[data-headlessui-state="open"]) nav a:last-child {
    color: var(--c-btn-danger) !important;
}

/* --------- STICKY ChatGPT NOTE ---------*/
main .sticky {
    background-color: var(--c-bg-chats-sticky) !important;
    backdrop-filter: blur(var(--blur-sticky)) !important;
}
main .sticky [aria-haspopup="menu"]:hover,
main .sticky [aria-haspopup="menu"][data-state="open"] {
    background-color: var(--c-surface-1) !important;
}
/* --------- STICKY ChatGPT NOTE SV ICON ---------*/
main .sticky button svg.icon-md > path {
    fill: var(--c-on-accent) !important;
}


/* --------- RIGHT - CONVERSATION CONTAINER --------- */
main [role="presentation"] {
    background-color: var(--c-bg-chats-container) !important;
}

/* --------- RIGHT - SCROLL DOWN BTN BG --------- */
html.light main [role="presentation"] button.absolute.rounded-full {
    background-color: var(--c-txt) !important;
}
html.dark main [role="presentation"] button.absolute.rounded-full {
    background-color: var(--c-accent) !important;
}
/* --------- RIGHT - SCROLL DOWN BTN SVG COLOR --------- */
main [role="presentation"] button.absolute.rounded-full svg  {
/*     color: var(--c-white) !important; */
    color: var(--c-on-accent) !important;
}

/* ---------RIGHT - Chats - User/Assistend margin-bottom and top. Gap from heading and svg icons ---------*/
main [data-message-author-role="user"],
main [data-message-author-role="assistant"] {
    margin-top: var(--mt-chat-txt) !important;
    margin-bottom: var(--mb-chat-txt) !important;
}

/* --------- RIGHT - ALL THE CONVERSATION CHATS BUBBLES ---------*/
main [data-testid^="conversation-turn-"] .group {
    padding: var(--p-msg) !important;
    border-radius: var(--border-radius-msg) !important;
}

/* --------- RIGHT - ALL THE CONVERSATION CHATS BUBBLES - USER ---------*/
main [data-testid^="conversation-turn-"]:nth-child(even) .group {
    background-color: var(--c-bg-msg-user);
}
/* --------- RIGHT - ALL THE CONVERSATION CHATS BUBBLES - GPT ---------*/
main [data-testid^="conversation-turn-"]:nth-child(odd) .group {
    background-color: var(--c-bg-msg-gpt);
}

/* --------- RIGHT - ALL THE CONVERSATION CHATS ACC NAMES ---------*/
main [data-testid^="conversation-turn-"] .font-semibold.select-none {
    text-transform: uppercase;
}

/* --------- RIGHT - ALL THE CONVERSATION CHATS ACC NAMES - USER ---------*/
main [data-testid^="conversation-turn-"]:nth-child(even) .font-semibold.select-none {
    color: var(--c-msg-name-user);
}
/* --------- RIGHT - ALL THE CONVERSATION CHATS ACC NAMES - GPT ---------*/
main [data-testid^="conversation-turn-"]:nth-child(odd) .font-semibold.select-none {
    color: var(--c-msg-name-gpt);
}

/* --------- RIGHT - ALL THE CONVERSATION CHATS - USER SVG ---------*/
main [data-testid^="conversation-turn-"]:nth-child(even) svg > path {
    fill: var(--c-msg-name-user) !important;
}

/* --------- RIGHT - ALL THE CONVERSATION CHATS - GPT SVG ---------*/
main [data-testid^="conversation-turn-"]:nth-child(odd) svg > path {
    fill: var(--c-msg-name-gpt) !important;
}

main [data-testid^="conversation-turn-"] button:has(svg.icon-md) div {
    border: 1px solid red !mportant;
}

/* --------- RIGHT - <pre> - MARKDOWN CODE IN CHATS ---------*/
main [data-testid^="conversation-turn-"] pre {
    border-radius: var(--border-radius-pre) !important;
    margin: var(--my-pre) auto !important;
}
/* --------- RIGHT - <pre> - header ---------*/
main [data-testid^="conversation-turn-"] pre .bg-black > div {
    background-color: var(--c-pre-header) !important;
}
/* --------- RIGHT - <pre> - COPY BTN ---------*/
main [data-testid^="conversation-turn-"] pre button {
    background-color: var(--c-bg-pre-header-btn);
    padding: var(--py-btn) var(--px-btn);
    border-radius: 10px;
}
/* --------- RIGHT - <pre> - COPY BTN HOVER STATE ---------*/
main [data-testid^="conversation-turn-"] pre button:hover {
    color: var(-c-msg-name-gpt) !important;
}

/* --------- RIGHT - TEXTAREA ---------*/
main form .overflow-hidden:has(textarea#prompt-textarea) {
    padding: var(--p-textarea) !important;
    background-color: var(--c-bg-textarea);
    border: 3px solid var(--c-border-textarea);
}
/* --------- RIGHT - TEXTAREA part wrapper, margin-top ---------*/
main div[role="presentation"] div.w-full:has(form) {
   margin-top: .5rem !important;
}
/* --------- RIGHT - TEXTAREA PARENT ---------*/
main div.flex.w-full.items-center > div {
    box-shadow: none;
    border: none;
}

/* --------- RIGHT - NEW CHAT - 4 BIG BTNS --------- */
main form button.btn {
    padding: 1.5rem !important;
    /* background-color: var(--c-bg-msg-gpt) !important; */
    background-color: var(--c-surface-2) !important;
    color: var(--c-txt) !important;
    border-radius: var(--border-radius-btn-big) !important;
    overflow: hidden;
}
/* --------- RIGHT - NEW CHAT - 4 BIG BTNS - HOVER STATE --------- */
main form button.btn:hover {
   /*  background-color: var(--c-bg-msg-user) !important; */
    background-color: var(--c-surface-3) !important;
}
/* --------- RIGHT - NEW CHAT - 4 BIG BTNS - SVG desno BG --------- */
main form button.btn .bg-gradient-to-l {
    /* --tw-gradient-from: var(--c-bg-msg-user) var(--tw-gradient-from-position); */
    --tw-gradient-from: var(--c-surface-3) var(--tw-gradient-from-position);
}
/* --------- RIGHT - NEW CHAT - 4 BIG BTNS - SVG desno ikonica --------- */
main form button.btn:hover .bg-gradient-to-l span div {
    /* --surface-secondary: var(--c-bg-msg-gpt) !important; */
    --surface-secondary: var(--c-surface-2) !important;
    padding: .5rem !important;
}


/* --------- MODAL - BG ---------*/
.absolute.inset-0 .fixed.inset-0 {
    background-color: var(--c-bg-modalbg) !important;
    backdrop-filter: blur(var(--blur-modalbg)) !important;
}

/* --------- MODAL - DIALOG SETTINGS ---------*/
div[role="dialog"] {
    padding: var(--p-dialog) !important;
    background-color: var(--c-bg-dialog) !important;
    border-radius: var(--border-radius-dialog);
    box-shadow: var(--box-shadow);
}
/* --------- MODAL - DIALOG TEXTAREA ---------*/
div[role="dialog"] textarea {
    border-radius: var(--border-radius-contextmenu) !important;
    /* border-color: var(--c-surface-3) !important; */
    border-color: transparent !important;
    background-color: var(--c-surface-1);
}
/* --------- MODAL - DIALOG BUTTONS where is dialog that containes textarea ---------*/
div[role="dialog"]:has(textarea) .btn-primary {
    padding: var(--py-btn) var(--px-btn) !important;
    border: 2px solid red !important;
}
/* --------- MODAL - DIALOG TEXTAREA ---------*/

/* --------- MODAL - DIALOG Share Chat White preview div ---------*/
div[role="dialog"]:has(main div[data-radix-aspect-ratio-wrapper]) .w-full.rounded-lg  {
    border-radius: var(--border-radius-msg) !important;
    background-color: var(--c-bg-chats-container) !important;
}

/* --------- MODAL - DIALOG SETTINGS TABS --------- */
[role="tablist"] button {
    border-radius: var(--border-radius-btn) !important;
    padding: var(--py-btn) var(--px-btn) !important;
}
[role="tablist"] button[data-state="active"],
[role="tablist"] button:hover {
    background-color: var(--c-surface-3) !important;
}

/* ---- MODAL - DIALOG SETTINGS - SWITCH BTN (UN)CHECKED BG (Chat history & Training) ---- */
button:has([data-state="checked"]),
button:has([data-state="unchecked"]) span  {
    background-color: var(--c-bg-btn) !important;
}

/* --------- MODAL - THEME BTN --------- */
button[role="combobox"],
button[role="combobox"]:hover {
    background-color: var(--surface-tertiary) !important;
}
/* --------- MODAL - THEME - CONTEXT MENU I TOOLTIPS--------- */
div[data-radix-popper-content-wrapper] > * {
    background-color: var(--c-surface-1) !important;
    padding: var(--p-contextmenu) !important;
    border-radius: var(--border-radius-contextmenu) !important;
    box-shadow: var(--box-shadow-contextmenu) !important;
}

/* --------- MODAL - THEME - CONTEXT MENU ITEMS HOVER --------- */
div[data-radix-popper-content-wrapper] [data-radix-collection-item][data-state="unchecked"]:hover {
    background-color: var(--c-surface-2) !important;
}
/* --------- MODAL - THEME - CONTEXT MENU ITEMS --------- */
div[data-radix-popper-content-wrapper] [data-radix-collection-item] {
    border-radius: var(--border-radius-btn);
    padding: 15px !important;
    height: auto !important;
}
/* --------- MODAL - THEME - CONTEXT MENU ITEM HOVER ACTIVE --------- */
div[data-radix-popper-content-wrapper] [data-state="checked"] {
    background-color: var(--c-bg-btn) !important;
    color: var(--c-on-accent) !important;
}

/* --------- TOOLTIPS text color --------- */
/* div[data-radix-popper-content-wrapper]:not([data-radix-collection-item][data-state="unchecked"]) span {
    color: var(--c-txt) !important;
} */
html.light div[data-radix-popper-content-wrapper]:has([role="tooltip"]) span {
    color: var(--c-txt) !important;
}
html.dark div[data-radix-popper-content-wrapper]:has([role="tooltip"]) span {
    color: var(--c-on-accent) !important;
}
/* --------- TOOLTIPS arrow div bg color --------- */
div[data-radix-popper-content-wrapper]:has([role="tooltip"]) div {
    /* border: 2px solid red !important; */
    background-color :var(--c-bg-tooltip) !important;
    box-shadow: var(--box-shadow-contextmenu) !important;
    backdrop-filter: blur(var(--blur-contextmenu)) !important;
}

/* --------- MODAL - Shared links - TABLE --------- */
div[role="dialog"] table {
    padding: var(--p-contextmenu) !important;
    border-radius: var(--border-radius-contextmenu);
}
/* --------- MODAL - Shared links - TABLE THEAD BG --------- */
div[role="dialog"] table thead tr {
    border-radius: var(--border-radius-btn) !important;
    padding: var(--py-btn) var(--px-btn) !important;
}
div[role="dialog"] table thead th {
    text-transform: uppercase;
    background-color: var(--c-surface-3) !important;
    margin-bottom: 1rem !important;
}
div[role="dialog"] table thead th:first-child {
    padding-left: var(--px-btn) !important;
    border-radius: var(--border-radius-btn) 0 0 var(--border-radius-btn) !important;
}
div[role="dialog"] table thead th:last-child {
    padding-right: var(--px-btn) !important;
    border-radius: 0 var(--border-radius-btn) var(--border-radius-btn) 0 !important;
}
div[role="dialog"] table th,
div[role="dialog"] table td  {
    padding-top: var(--py-btn) !important;
    padding-bottom: var(--py-btn) !important;
}
`

const addCustomStyle = (css) => (document.head.appendChild(document.createElement('style')).innerHTML = css)

if (url.includes('chat.openai.com')) {
	// alert('DOMContentLoaded ✅')
	addCustomStyle(myStyleHead)
}
