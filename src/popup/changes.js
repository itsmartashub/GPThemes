let issue = (hashNumber) =>
	`<a href="https://github.com/itsmartashub/GPThemes/issues/${hashNumber}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">#${hashNumber}</a>`

const RELEASE_CHANGES = `
<h3>🛠️ Improvements</h3>
<ul>
    <li><strong>Theme Sync Fixed: </strong> Theme changes made in GPT settings are now reflected in the GPThemes theme, and vice versa, to maintain consistency across the board ${issue(
		48
	)}</li>
    <li><strong>Consistency Enhanced: </strong>The application of themes across the extension has been enhanced to ensure consistency, which was previously broken due to new OpenAI's code loading techniques ${issue(
		48
	)}</li>
</ul>

<h3>🐛 Bug Fixes</h3>
<ul>
    <li><strong>Scrollbar Fixed: </strong>Scrollbar styling issues caused by recent OpenAI changes have been resolved ${issue(
		50
	)}</li>
    <li><strong>OLED Theme Fix: </strong>The OLED theme display has been fixed in dialogs and GPT Stores.</li>
    <li><strong>Temporary Chat Text Color: </strong>Fix the text color in the prompt textarea for temporary chats in light themes.</li>
</ul>

<h3>🔧 Under the Hood</h3>
<ul>
    <li><strong>Storage Optimized: </strong>Storage management has been optimized for better efficiency ${issue(
		49
	)}</li>
    <li><strong>DRY: </strong>Significant code improvements have been made to enhance maintanability ${issue(49)}</li>
</ul>

<h3>⚠️ Known Issue</h3>
<ul>
    <li><strong>Share Page Theme Inconsistency: </strong>A minor theme inconsistency remains on shared chat pages due to recent ChatGPT updates. Custom accent colors are not applied due to OpenAI's new dynamic code loading, which overrides some extension code.</li>
</ul>
`

export { RELEASE_CHANGES }
