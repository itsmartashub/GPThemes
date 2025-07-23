const links = {
	issue: (issueNumber) =>
		`<a href="https://github.com/itsmartashub/GPThemes/issues/${issueNumber}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="changelog__issue-link">
        #${issueNumber}
      </a>`,
	pr: (prNumber) =>
		`<a href="https://github.com/itsmartashub/GPThemes/pull/${prNumber}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="changelog__pr-link">
        PR #${prNumber}
      </a>`,
}

const SECTION_TYPES = {
	features: { emoji: '🆕', title: 'Features' },
	improvements: { emoji: '🚀', title: 'Key Enhancements' },
	fixes: { emoji: '🩹', title: 'Key Fixes' },
	other: { emoji: '🧵', title: 'Other' },
	// Can easily add more section types as needed
}

const currentReleaseChanges = {
	// Example data - in a real scenario, you'd only include sections with actual content
	features: [
		{
			description: 'Hide GPThemes Floating Button:',
			details: `You can now easily toggle the GPThemes floating button directly from the extension popup (here) using the <code>HIDE GPTHEMES</code> switch at the top right.`,
			issueRef: 146,
		},
		{
			description: 'New Fonts Types:',
			details: `Added new fonts and 🆕 label in the font selection list for improving discoverability of recent font additions. <br/>Which Google font would you like to see?`,
			issueRef: 154,
		},
	],
	improvements: [
		{
			description: 'Chat Bubbles Spacing:',
			details:
				'Both, assistant and user chat bubbles now should have same spacing, making them more visually aligned.',
			issueRef: 143,
		},
		{
			description: 'Created Images Animations:',
			details: 'Created images now have smooth hover animations for a more dynamic feel.',
			issueRef: 143,
		},
		{
			description: 'Created Images Carousel:',
			details: 'Enhanced the vertical carousel for created images.',
			issueRef: 143,
		},
		{
			description: 'Settings Dialog Styles:',
			details: 'Improved GPT settings dialog, new sidebar and tab content styles.',
			issueRef: 143,
		},
		{
			description: 'Mobile Chat Adjustments:',
			details:
				'Chat bubbles on mobile devices have improved padding, spacing, and edge margins for a better look.',
			issueRef: 143,
		},
	],
	fixes: [
		{
			description: 'Assistant Chat Bubbles:',
			details: 'Fixed toggle GPT chat bubble feature and missing background due to recent OpenAI changes.',
			issueRef: 150,
		},
		{
			description: 'Prompt Custom Width:',
			details: 'Fixed custom prompt textarea width feature',
			issueRef: 152,
		},
		{
			description: 'Scroll Down Button Alignment:',
			details: 'Fixed custom scrolldown button alignment feature',
			issueRef: 148,
		},
		{
			description: 'Font Family Select Width:',
			details: "Fixed font family select list's width increasing on in/out hover spams.",
			issueRef: 142,
		},
		{
			description: 'Canvas & Chat Styling:',
			details:
				'Addressed numerous broken styles in Canvas components, chat footers, Maps, and Markdown code blocks.',
			issueRef: 143,
		},
		{
			description: 'Tooltip & Prompt Textarea:',
			details:
				'Fixed tooltip text visibility. Resolved styling for search autocomplete and command menus: <code>/</code> & <code>@</code>. Restore different prompt textarea styles for temporary vs basic state.',
			issueRef: 143,
		},
	],
	other: [
		{
			details:
				'Hey, there 👋 Thanks for using the <code>GPTHEMES</code> <br/> This release brings a range of additional improvements and bug fixes to enhance your experience. For all the details, check out the full release notes on GitHub.',
		},
	],
	// Add other sections as needed for each release
	// Omit sections that don't have changes
}

const generateChangelogItem = (item) => {
	const issueLink = item.issueRef ? ` ${links.issue(item.issueRef)}` : ''
	const prLink = item.prRef ? ` ${links.pr(item.prRef)}` : ''

	return `
      <li>
        ${item.description ? `<strong>${item.description}</strong> ` : ''}
        ${item.details}
        ${issueLink}${prLink}
      </li>
    `
}

const generateChangelog = () => {
	// Get only sections that have content
	const sectionsWithContent = Object.entries(currentReleaseChanges).filter(([_, items]) => items && items.length > 0)

	if (sectionsWithContent.length === 0) {
		return '<p>No changes in this release.</p>'
	}

	return sectionsWithContent
		.map(([sectionKey, items]) => {
			const section = SECTION_TYPES[sectionKey]
			return `
          <h3>${section.emoji} ${section.title}</h3>
          <ul>
            ${items.map(generateChangelogItem).join('')}
          </ul>
        `
		})
		.join('\n')
}

// Generate the final changelog HTML
const RELEASE_CHANGES = generateChangelog()

export { RELEASE_CHANGES, links }
