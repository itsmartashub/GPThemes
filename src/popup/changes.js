let issue = (hashNumber) =>
	`<a href="https://github.com/itsmartashub/GPThemes/issues/${hashNumber}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">#${hashNumber}</a>`

const RELEASE_CHANGES = `

<h3>🛠️ Improvements</h3>

<ul>
	<li><strong>Search & Maps UI: </strong>Enhanced location markers, review cards, and counter bubbles to match accent theme ${issue(
		99
	)}</li>
	<li><strong>Voice Button: </strong>Restored styles after OpenAI updates ${issue(98)}</li>
	<li><strong>Sidebar Chat List: </strong>Enhanced selected chat appearance and hover interactions ${issue(100)}</li>
	<li><strong>New Customize ChatGPT: </strong>Support the styles for the latest <code>Customize ChatGPT</code> (Instructions)</li>
	<li><strong>Copy code and Edit Buttons: </strong>Refine code snippet button styling</li>
	<li><strong>Temporary Prompt Field: </strong>Added distinct background for <code>Temporary</code> conversations ${issue(
		98
	)}</li>
</ul>

<h3>🐛 Bug Fixes</h3>

<ul>
	<li><strong>Canvas Code Syntax Synchronization: </strong>Fixed Canvas syntax highlighting not syncing with theme changes ${issue(
		97
	)}</li>
	<li><strong>Dialog Display: </strong>Removed unwanted outline below prompt field</li>
	<li><strong>Business Hours: </strong>Fixed inconsistent display in map view ${issue(99)}</li>
	<li><strong>GPThemes Floating Button: </strong>Make floating btn always visible for now due to ${issue(102)}, ${issue(
	103
)}</li>
</ul>

<h3>🚨 Known Issues</h3>
<ul>
	<li><strong>Conversation Scrolling Blocked by Invisible Canvas: </strong>After using the new <code>Edit in Canvas</code> button and closing Canvas, an invisible skeleton element remains in the <code>DOM</code>, blocking conversation scroll ${issue(
		102
	)}</li>
	<li>Note that this behavior is consistent even when the browser extension is turned off, indicating that the issue originates from the original ChatGPT website.</li>
	<li>That being said, I will wait for the OpenAI team to address this.</li>
</ul>
`

export { RELEASE_CHANGES }
