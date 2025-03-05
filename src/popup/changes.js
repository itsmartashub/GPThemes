let issue = (hashNumber) =>
	`<a href="https://github.com/itsmartashub/GPThemes/issues/${hashNumber}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">#${hashNumber}</a>`

const RELEASE_CHANGES = `
<h3>✨ Improvements</h3>
<ul>
	<li>
		<strong>Typing Lag: </strong>Fix laggy typing experience in prompt field for longer chats ${issue(108)}
	</li>
	<li>
		<strong>User Chat Edit Button: </strong>Moved back to the original top-left position to fix overlap and disappearing issues
	</li>
	<li>
		<strong>General Improvements: </strong>Many minor styling and performance improvements.
	</li>
</ul>
`

export { RELEASE_CHANGES }
