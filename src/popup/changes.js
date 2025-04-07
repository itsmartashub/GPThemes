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
			description: 'Custom Scrolldown Align:',
			details:
				'Added options to position the scroll down button to the <code>left</code>, <code>center</code>, or <code>right</code> of the screen',
			issueRef: 113,
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
