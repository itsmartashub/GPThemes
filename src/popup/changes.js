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
	improvements: { emoji: '⚡', title: 'Improvements' },
	fixes: { emoji: '🩹', title: 'Fixes' },
	other: { emoji: '🧵', title: 'Other' },
	// Can easily add more section types as needed
}

const currentReleaseChanges = {
	// Example data - in a real scenario, you'd only include sections with actual content
	features: [
		{
			description: 'Toggle Chat Bubbles:',
			details: 'Added a new setting to turn on and off chat bubbles for both, user and assistant',
			issueRef: 129,
		},
	],
	improvements: [
		{
			description: 'Revamp Light Theme:',
			details: 'Replace harsh gray shades with subtle accent-inspired colors in the light theme',
			issueRef: 119,
		},
	],
	fixes: [
		{
			description: 'Custom Width:',
			details:
				"Updated selectors to address OpenAI's changes, restoring the functionality of custom widths for chats and prompt fields",
			issueRef: 120,
		},
		{
			description: 'Custom Scrolldown Position:',
			details:
				"Updated the selector for the custom scroll down button to fix alignment issues caused by recent changes to OpenAI's classes.",
			issueRef: 121,
		},
		{
			description: 'Chats and Prompt Fields Overlapping:',
			details: 'Resolved visual overlap with chats behind the message input field.',
			issueRef: 127,
		},
		{
			description: 'First User Message:',
			details: 'Prevent the first user message from being half cut from top on some screen sizes and zooms',
		},
	],
	other: [
		{
			details:
				'Thanks for using GPThemes! This release brings many other improvements and bug fixes to enhance your experience. For all the details, check out the full release notes on GitHub.',
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
