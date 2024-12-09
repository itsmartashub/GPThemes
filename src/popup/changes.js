let issue = (hashNumber) =>
	`<a href="https://github.com/itsmartashub/GPThemes/issues/${hashNumber}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">#${hashNumber}</a>`

const RELEASE_CHANGES = `
<h3>🛠️ Improvements</h3>
<ul>
	<li>
		<strong>Prompt Field Voice Icon: </strong>Enhanced <code>Advanced Voice</code> button design ${issue(80)}
	</li>
	<li>
		<strong>Prompt Field Reply: </strong>Improve <code>Reply</code> ballons, and adjust edge radius ${issue(80)}
	</li>
	<li>
		<strong>Voice & Feedback: </strong>Refreshed mic and close buttons, improved <code>Voice</code>layout overall and voice chat ended feedback UI ${issue(
			79
		)}
	</li>
	<li><strong>Search Sources Dialog: </strong>Update sticky category subheaders and main header <code>Links</code> to match theme for <code>/Search</code> prompts ${issue(
		83
	)}</li>
	<li><strong>Chat With Sources: </strong>Improved <code>Source</code> button styling and searched links list ${issue(
		83
	)}</li>
	<li><strong>Chat Bubbles Gap: </strong>Decreise spacing between chats ${issue(82)}</li>
	<li><strong>Analysis & Code: </strong>Improved <code>Result</code> design in bubbles and dialogs</li>
	<li>
		<strong>Sidebar Elements: </strong>
		Updated unread GPT message indicators and ChatGPT logo color to match theme. Make date pills more compact ${issue(80)}
	</li>
</ul>

<h3>🐛 Bug Fixes</h3>
<ul>
	<li><strong>Chat Bubbles Flashing: </strong>Fixed flash bubble on first User prompt, finally</li>
	<li><strong>Prompt Field Full Width Flash: </strong>Fix width issues like full width flash on page refresh ${issue(
		84
	)}</li>
	<li><strong>Prompt Field Misalignment: </strong>Resolved misalignment with chats caused by empty element ${issue(
		81
	)}</li>
	<li><strong>Prompt Field Command Menus: </strong>Fixed styling issues when typing <code>/</code> or <code>@</code> in prompt ${issue(
		80
	)}</li>
	<li><strong>Upgrade Plus Dialog: </strong>Fixed styling issues in <code>Plus</code> upgrade pricing plan card ${issue(
		80
	)}</li>
	<li><strong>Analysis & Code: Fixed <code>Always show details</code> transparency with <code>Copy code</code> wrapper</li>
	<li><strong>DALLE: </strong>Fixed styling of action buttons within chat bubble's generated image hover states</li>
</ul>
`

export { RELEASE_CHANGES }
