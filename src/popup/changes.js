let issue = (hashNumber) =>
	`<a href="https://github.com/itsmartashub/GPThemes/issues/${hashNumber}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">#${hashNumber}</a>`

const RELEASE_CHANGES = `
<h1>🆕 Features </h1>
<ul>
	<li>
		<strong>Add Canvas Code and Text support</strong> ${issue(84)}
	</li>
</ul>
<h3>🪄 Key Highlights</h3>
<ul>
	<li>
		Complete theme integration across Canvas components ${issue(86)}
	</li>
	<li>
		Enhanced Canvas <code>code</code> and <code>text</code> editor experiences ${issue(89)}
	</li>
	<li>
		Improved interactive controls and editing tools  ${issue(88)}
	</li>
	<li>
		Refined Canvas dev environment and <code>console</code> ${issue(91)}
	</li>
	<li>
		Optimized chat interface for Canvas integration ${issue(92)}
	</li>
	<li>
		Add styling to <code>Use a tool</code> and <code>Open in canvas</code> button to match the theme ${issue(87)}
	</li>
	<li>
		Hide the GPThemes floating btn when Canvas is opened ${issue(86)}
	</li>
	<li>
		Fix overlay over chats when Canvas opened only in <code>Light</code> theme for <code>Firefox</code> ${issue(93)}
	</li>
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
