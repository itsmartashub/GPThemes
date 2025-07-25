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
	// Critical hotfix section - will appear first if present
	critical: { emoji: '🚨', title: 'Critical Fixes', priority: 0 },
	newFixes: { emoji: '🔧', title: 'New Fixes', priority: 1 },
	// Separator for previous version content
	previousSeparator: { emoji: '📜', title: 'From Previous Version', priority: 2, isSeparator: true },
	features: { emoji: '🆕', title: 'Features', priority: 3 },
	improvements: { emoji: '🚀', title: 'Key Enhancements', priority: 4 },
	fixes: { emoji: '🩹', title: 'Key Fixes', priority: 5 },
	other: { emoji: '🧵', title: 'Other', priority: 6 },
}

const currentReleaseChanges = {
	// New fixes specific to this release
	newFixes: [
		{
			description: 'User Chat Bubbles:',
			details:
				'Fixed user chat bubble display issues, restored <code>USER</code> bubble toggle functionality, and fixed user widths for full-width chats.',
			issueRef: 156,
		},
	],

	// This acts as a visual separator
	previousSeparator: [
		{
			details: '',
		},
	],

	// All the regular features and improvements from the previous planned release
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
				'Hey, there 👋 Thanks for using the <code>GPTHEMES</code> <br/> This is a follow-up release that includes some additional fixes plus all the great features from our previous update. For all the details, check out the full release notes on GitHub.',
		},
	],
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
	// Get only sections that have content and sort by priority
	const sectionsWithContent = Object.entries(currentReleaseChanges)
		.filter(([_, items]) => items && items.length > 0)
		.sort(([a], [b]) => (SECTION_TYPES[a]?.priority || 999) - (SECTION_TYPES[b]?.priority || 999))

	if (sectionsWithContent.length === 0) {
		return '<p>No changes in this release.</p>'
	}

	return sectionsWithContent
		.map(([sectionKey, items]) => {
			const section = SECTION_TYPES[sectionKey]
			const sectionClass = ['critical', 'newFixes'].includes(sectionKey)
				? `changelog__${sectionKey.replace(/([A-Z])/g, '-$1').toLowerCase()}-section`
				: sectionKey === 'previousSeparator'
				? 'changelog__previous-separator'
				: ''

			// Special handling for separator section
			if (section.isSeparator) {
				return `
          <div class="${sectionClass}">
            <h3>${section.emoji} ${section.title}</h3>
            <p class="changelog__separator-text">${items[0].details}</p>
          </div>
        `
			}

			return `
          <div class="${sectionClass}">
            <h3>${section.emoji} ${section.title}</h3>
            <ul>
              ${items.map(generateChangelogItem).join('')}
            </ul>
          </div>
        `
		})
		.join('\n')
}

// Generate the final changelog HTML
const RELEASE_CHANGES = generateChangelog()

export { RELEASE_CHANGES, links }
