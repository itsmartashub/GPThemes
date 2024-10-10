let issue = (hashNumber) =>
	`<a href="https://github.com/itsmartashub/GPThemes/issues/${hashNumber}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">#${hashNumber}</a>`

const RELEASE_CHANGES = `
<h3>🛠️ Improvements</h3>
<ul>
	<li>
		<strong>New Chat Layout Enhancements: </strong>Added style to autocomplete prompt suggestions and new prompt action cards to match GPThemes design patterns ${issue(
			59
		)}
	</li>
	<li>
		<strong>Response Comparison UI: </strong>Enhanced <code>Which response do you prefer?</code> latest layout ${issue(45)}
	</li>
</ul>
`

export { RELEASE_CHANGES }
