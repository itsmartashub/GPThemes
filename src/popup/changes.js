let issue = (hashNumber) =>
	`<a href="https://github.com/itsmartashub/GPThemes/issues/${hashNumber}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">#${hashNumber}</a>`

const RELEASE_CHANGES = `
<h3>🛠️ Improvements</h3>
<ul>
    <li><strong>Markdown & Analysis: </strong>Improve <code>Analysis</code> UI and code snippets overall</li>
	<li><strong>Hint Pills: </strong>Update the blue color of <code>Search</code> and <code>Picture</code> hint pills to match the theme accent</li>
	<li><strong>Archived Chats & Share Links: </strong>Add hover background for better UX in tables</li>
	<li><strong>ChatGPT Model Menu: </strong>Add better styling for icons in sticky header ChatGPT models dropdown</li>
</ul>

<h3>🐛 Bug Fixes</h3>
<ul>
    <li><strong>Chat Bubbles: </strong>Fix user bubble styles and width customization ${issue(70)}</li>
    <li><strong>Prompt Field Delay: </strong>Fix delayed styles application on page load ${issue(74)}</li>
    <li><strong>Prompt Attach Files Icon: </strong>Fix positioning and background of the 📎 icon in prompt fields ${issue(
		66
	)}</li>
    <li><strong>Prompt Popover Menu: </strong>Fix broken styling of the menu that appears when typing <code>/</code> in prompt field ${issue(
		69
	)}</li>
    <li><strong>Prompt GPTs @mentions: </strong>Fix broken styling for GPTs that appears when typing <code>@</code> in prompt field</li>
    <li><strong>Language Dropdown: </strong>Fix language dropdown accessibility and styling in <code>Settings</code> ${issue(
		72
	)}</code></li>
    <li><strong>Archived Chats & Share Links: </strong>Fix table sticky heading background color being transparent in scrollable tables</li>
</ul>
`

export { RELEASE_CHANGES }
