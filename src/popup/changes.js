let issue = (hashNumber) =>
	`<a href="https://github.com/itsmartashub/GPThemes/issues/${hashNumber}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">#${hashNumber}</a>`

const RELEASE_CHANGES = `

<h3>🪄 Improvements</h3>
<ul>
    <li><strong>Web Search Feature: </strong>Redesigned search experience with improved sources display and all related to web search feature ${issue(
		96
	)}</li>
    <li><strong>Pop-up and Dialog Boxes: </strong>Added consistent backgrounds and hover effects to dialogs ${issue(
		95
	)}</li>
</ul>

<h3>🐛 Bug Fixes</h3>
<ul>
    <li><strong>Pop-up and Dialog Boxes: </strong>Fixed various styling issues including empty dialogs which caused random circles and double spacing in menu ${issue(
		95
	)}</li>
	<li><strong>Autocomplete Suggestions: </strong>Restored proper styling for autocomplete suggestion lists ${issue(
		95
	)}</li>
	<li><strong>Tools Menu and GPTs Mentions: </strong>Restored proper styling for tools menus whhen typed <code>/</code> and GPTs mentions when typed <code>@</code> ${issue(
		95
	)}</li>
    <li><strong>Text Canvas: </strong>Fixed code blocks appearance in edit history view</li>
</ul>

<h3>🚨 Known Issues</h3>
<ul>
	<li><strong>Canvas Code Syntax Synchronization ${issue(94)}: </strong></br></br> 
	When changing themes using the <code>GPThemes floating button</code>, the Canvas <code>CodeMirror</code> editor's syntax highlighting doesn't update immediately, remaining in the previous theme's syntax style, while the app theme changes. This creates a temporary visual inconsistency that can be resolved by <code>refreshing the page</code>.
	<li>Note that changing themes through <code>ChatGPT Settings</code> works correctly without need for page refresh.</li>
	<li>I'm working on a solution to avoid the need for page refresh.</li>
</ul>
`

export { RELEASE_CHANGES }
