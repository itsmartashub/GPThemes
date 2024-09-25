let issue = (hashNumber) =>
	`<a href="https://github.com/itsmartashub/GPThemes/issues/${hashNumber}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">#${hashNumber}</a>`

const RELEASE_CHANGES = `
<h3>🛠️ Improvements</h3>
<ul>
    <li><strong>Chat Bubble Fonts: </strong>Limit font adjustments <code>font-size</code> and <code>line-height</code> to chat bubbles only ${issue(
		56
	)}</li>
	<li><strong>GPThemes Settings Enhancement: </strong>Improved layout and scrolling behavior ${issue(54)}</li>
</ul>

<h3>🐛 Bug Fixes</h3>
<ul>
	<li><strong>Font Tab Fixed: </strong>Resolved broken styling in the <code>Font</code> tab section of GPThemes settings ${issue(
		53
	)}</li>
    <li><strong>Mobile Layout Improved: </strong>Fixed GPThemes Customization tabs overlapping issues on very small mobile screens ${issue(
		53
	)}</li>
    <li><strong>Share Link Page: </strong>Fixed chat bubble styles not being applied, ensuring consistent styling across all pages. ${issue(
		57
	)}</li>
    <li><strong>Prompt Textarea: </strong>Removed extra padding from the <code>Reply</code> element in the prompt textarea</li>
</ul>
`

export { RELEASE_CHANGES }
