let issue = (hashNumber) =>
	`<a href="https://github.com/itsmartashub/GPThemes/issues/${hashNumber}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">#${hashNumber}</a>`

const RELEASE_CHANGES = `
<h3>🚀 New Features</h3>
<ul>
    <li><strong>New Fonts: </strong>Added 7 font families ${issue(109)}</li>
    <li><strong>Font Sorting: </strong>Alphabetical order with <code>Default</code> always first</li>
</ul>

<h3>🛠️ Improvements</h3>
<ul>
    <li><strong>Prompt Textarea: </strong>Inversed background colors for basic/temporary modes</li>
    <li><strong>Accent Colors: </strong>Softened default colors for better visual harmony</li>
    <li><strong>DALL·E Layout: </strong>Supported latest UI with image editing ${issue(112)}</li>
    <li><strong>Markdown: </strong>Refined code-block styles for light/dark modes ${issue(111)}</li>
    <li><strong>Markdown Buttons: </strong>Invert <code>Copy/Edit</code> colors ${issue(111)}</li>
    <li><strong>Custom Settings UI: </strong>Reduced spacing in <code>GPThemes Settings</code></li>
    <li><strong>Custom Instructions: </strong>Improved error textarea styling</li>
</ul>

<h3>🐛 Bug Fixes</h3>
<ul>
    <li><strong>Prompt Textarea Width: </strong>Fixed custom width application</li>
    <li><strong>Prompt Textarea Selector: </strong>Streamlined element targeting</li>
    <li><strong>Autocomplete: </strong>Fixed across different profiles ${issue(110)}</li>
    <li><strong>Voice Button: </strong>Restored styles after OpenAI changes ${issue(110)}</li>
    <li><strong>Chat Footer Icons: </strong>Fixed <code>Copy/Edit/Like</code> buttons (3x fixes)</li>
    <li><strong>Source Links Balloons: </strong>Improved visibility to match accent theme</li>
    <li><strong>Reply Quotes: </strong>Fixed broken styling above user messages</li>
    <li><strong>Advanced Data Analysis: </strong>Fixed design in chat bubbles/dialogs</li>
    <li><strong>ADA Results: </strong>Repaired <code>&lt;pre&gt;</code> formatting</li>
    <li><strong>Sticky Header: </strong>Removed box-shadow (border bottom alike)</li>
</ul>
`

export { RELEASE_CHANGES }
