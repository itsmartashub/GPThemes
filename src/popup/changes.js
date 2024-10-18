let issue = (hashNumber) =>
	`<a href="https://github.com/itsmartashub/GPThemes/issues/${hashNumber}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">#${hashNumber}</a>`

const RELEASE_CHANGES = `
<h3>🛠️ Improvements</h3>
<ul>
	<li><strong>Search Links: </strong>Enhanced pill-like links with improved accessibility ${issue(63)}</li>
	<li><strong>Unread Indicator: </strong>Updated sidebar unread bubble to match chosen theme ${issue(62)}</li>
	<li><strong>GPThemes Settings: </strong>Adjusted <code>Reset All</code> button width in <code>GPThemes Customization</code></li>
</ul>

<h3>🐛 Bug Fixes</h3>
<ul>
    <li><strong>New Chat Autocomplete: </strong>Fixed issues caused by recent OpenAI changes ${issue(61)}</li>
    <li><strong>Markdown Snippets: </strong>Restored correct styling for code blocks ${issue(64)}</li>
</ul>
`

export { RELEASE_CHANGES }
