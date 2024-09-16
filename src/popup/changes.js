const RELEASE_CHANGES = `
<h3>🛠️ Improvements</h3>
<ul>
    <li>Theme changes made in GPT settings are now reflected in the GPThemes theme, and vice versa, to maintain consistency across the board.</li>
    <li>The application of themes across the extension has been enhanced to ensure consistency, which was previously broken due to new OpenAI's code loading techniques.</li>
</ul>

<h3>🐛 Bug Fixes</h3>
<ul>
    <li>Scrollbar styling issues caused by recent OpenAI changes have been resolved.</li>
    <li>The OLED theme display has been fixed in dialogs and GPT Stores.</li>
</ul>

<h3>🔧 Under the Hood</h3>
<ul>
    <li>Storage management has been optimized for better efficiency.</li>
    <li>Significant code improvements have been made to enhance maintanability.</li>
</ul>

<h3>⚠️ Known Issue</h3>
<ul>
    <li>A minor theme inconsistency remains on shared chat pages due to recent ChatGPT updates. Custom accent colors are not applied due to OpenAI's new dynamic code loading, which overrides some extension code.</li>
</ul>
`

export { RELEASE_CHANGES }
