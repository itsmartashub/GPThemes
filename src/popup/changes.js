let issue = (hashNumber) =>
	`<a href="https://github.com/itsmartashub/GPThemes/issues/${hashNumber}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">#${hashNumber}</a>`

const RELEASE_CHANGES = `
<h3>🛠️ Improvements</h3>
<ul>
	<li><strong>Hint Pills: </strong>Updated the color of <code>Search</code> and <code>Picture</code> hint pills to match the theme accent</li>
	<li><strong>Archived Chats & Share Links: </strong>Added hover background for better UX in tables</li>
</ul>

<h3>🐛 Bug Fixes</h3>
<ul>
    <li><strong>Attach Files Icon: </strong>Fixed positioning and background of the 📎 icon in prompt fields</li>
    <li><strong>Popover Menu: </strong>Corrected the background of the menu that appears when typing <code>/</code> in prompt field</li>
    <li><strong>GPTs @mentions: </strong>Fix broken styling for GPTs that appears when typing <code>@</code> in prompt field</li>
    <li><strong>Chat Bubbles: </strong>Restored proper styles and width customization for user chat bubbles</li>
    <li><strong>Language Dropdown: </strong>Fix language dropdown accessibility and styling in <code>Settings</code></li>
    <li><strong>Archived Chats & Share Links: </strong>Fix table sticky heading background color being transparent in scrollable tables</li>
</ul>
`

export { RELEASE_CHANGES }
