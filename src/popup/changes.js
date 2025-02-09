let issue = (hashNumber) =>
	`<a href="https://github.com/itsmartashub/GPThemes/issues/${hashNumber}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">#${hashNumber}</a>`

const RELEASE_CHANGES = `
<h3>✨ Improvements</h3>
<ul>
	<li>
		<strong>Markdown Blockquotes: </strong>Enhanced blockquotes with background, rounded edges, and thicker borders for better highlighting
	</li>
	<li>
		<strong>Sidebar Links Animation: </strong>Added a vertical slide animation to sidebar links for a more dynamic experience
	</li>
</ul>

<h3>🐛 Bug Fixes</h3>
<ul>
    <li>
        <strong>Markdown Code Blocks: </strong>Removed background color from syntax highlighting for improved readability ${issue(
			105
		)}
    </li>
    <li>
        <strong>Chat Bubble Extra Spacing: </strong>Adjusted right padding in GPT chat bubbles to fix spacing inconsistencies after removing the GPT logo ${issue(
			106
		)}
    </li>
	<li>
		<strong>Sidebar Editing Mode: </strong>Improved background appearance of sidebar links when editing chat names
	</li>
    <li>
        <strong>Thinking Process Line: </strong>Made the vertical line in chat bubbles visible for better clarity
    </li>
    <li>
        <strong>Temporary Prompt Field: </strong> Update broken background color and <code>attach</code> icon color to differentiate temp mode from the classic
    </li>
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
