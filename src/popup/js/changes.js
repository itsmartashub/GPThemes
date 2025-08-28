import { EXT_REPO_URL } from '../../js/app/config/constants'

const links = {
	issue: (issueNumber) =>
		`<a href="${EXT_REPO_URL}/issues/${issueNumber}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="changelog__issue-link">
        #${issueNumber}
      </a>`,
	pr: (prNumber) =>
		`<a href="${EXT_REPO_URL}/pull/${prNumber}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="changelog__pr-link">
        PR #${prNumber}
      </a>`,
}

const SECTION_TYPES = {
	// Critical hotfix section - will appear first if present
	critical: { emoji: '🚨', title: 'Critical Fixes', priority: 0 },
	newFixes: { emoji: '🔧', title: 'New Key Fixes', priority: 1 },
	// Separator for previous version content
	previousSeparator: { emoji: '📜', title: 'From Previous Version', priority: 2, isSeparator: true },
	features: { emoji: '🆕', title: 'Features', priority: 3 },
	improvements: { emoji: '🚀', title: 'Key Enhancements', priority: 4 },
	fixes: { emoji: '🩹', title: 'Key Fixes', priority: 5 },
	other: { emoji: '🧵', title: 'Other', priority: 6 },
}

const currentReleaseChanges = {
	// New fixes specific to this release
	features: [
		{
			description: 'Taller Chatbox:',
			details: `You can now toggle a taller chatbox layout to give yourself more room to type. <br/> 
			⚠️ Always disabled on the <code>Library</code> and the intial <code>New chat</code> pages`,
			prRef: 163,
		},
		{
			description: 'Hide Elements:',
			details: `Added new toggles to hide the header and footer, giving you more control over the UI. <br/>
			⚠️ If you encounter a bug or unexpected behavior, please let me know. Thanks 🙏`,
			prRef: 165,
		},
		{
			description: 'Full Accent Bubbles:',
			details: 'You can now toggle a full accent-colored background for your user chat bubbles.',
			prRef: 167,
		},
	],
	// New improvements specific to this release
	improvements: [
		{
			description: 'User Bubble Text:',
			details: "Overrode the OpenAI's new accent text color for user bubbles to ensure proper contrast.",
		},
		{
			description: 'Chatbox Autosuggestions',
			details:
				'Introduced a hover animation for the autosuggestion list in the prompt-textarea for enhanced visual feedback',
		},
		{
			description: 'Chat Footer Icons:',
			details: 'Fixed icon styles and added a scale-up hover animation.',
		},
		{
			description: 'Text Selection:',
			details:
				'Adjusted the styling of selected text to ensure proper contrast and readability against the accent background.',
		},
		{
			description: 'Chatbox:',
			details:
				'Removed the attach file functionality and simplified the GPTs list by removing the input search field.',
		},
		{
			description: 'Reasoning Elements:',
			details:
				'Applied minor styling improvements to all reasoning elements for better consistency and readability.',
		},
	],
	other: [
		{
			details:
				'Hey, there 👋 Thanks for using the <code>GPTHEMES</code> <br/> If you encounter a bug or unexpected behavior, please let me know. Thanks 🙏 <br> For all the details, check out the full release notes on GitHub.',
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
