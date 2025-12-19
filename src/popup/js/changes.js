import { EXT_REPO_URL } from '../../js/app/config/consts'

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
	previousSeparator: {
		emoji: '📜',
		title: 'From Previous Version',
		priority: 2,
		isSeparator: true,
	},
	features: { emoji: '🆕', title: 'Features', priority: 3 },
	improvements: { emoji: '🚀', title: 'Key Enhancements', priority: 4 },
	fixes: { emoji: '🩹', title: 'Key Fixes', priority: 5 },
	other: { emoji: '🧵', title: 'Other', priority: 6 },
	support: { emoji: '💌', title: 'Support', priority: 7 },
}

/* 

 <a href="https://ko-fi.com/http417" target="_blank" rel="noopener noreferrer">KO-FI</a> 
 <a href="https://github.com/itsmartashub/GPThemes/issues/new?template=feature_request.yml" target="_blank" rel="noopener noreferrer">GitHub issue</a> 
*/
const currentReleaseChanges = {
	features: [
		{
			description: 'New Font:',
			details:
				'Added <code>Google Sans Flex</code>  <br/><i>💡 Technically, almost any font found on the <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">Google Fonts Platform</a> can be added. If you have a favorite, let me know in a <a href="https://github.com/itsmartashub/GPThemes/issues/new?template=feature_request.yml" target="_blank" rel="noopener noreferrer">GitHub issue</a>, <a href="https://ko-fi.com/http417" target="_blank" rel="noopener noreferrer">ko-fi</a>, or review</i>',
		},
		{
			description: 'Group Chat:',
			details: 'Extended toggle chat bubble functionality to the new <code>Group</code> chats layout',
		},
	],
	improvements: [
		{
			description: 'Group UI:',
			details: 'Refined styling for the new <code>Group chats</code> layout',
		},
		{
			description: 'Image UI:',
			details: 'Refined styling for the new <code>Images</code> layout',
		},
	],
	fixes: [
		{
			description: 'Advanced Voice:',
			details: 'Restored the appearance of the voice button and layout',
		},
		{
			description: 'Mobile Optimization:',
			details: 'Fixed edge-spacing issues for GPT messages on mobile devices when bubble is off',
		},
		{
			description: 'UI Consistency:',
			details:
				'Fixed broken sidebar styling, sticky header alignment in GPTs Store, and many other small UI improvements',
		},
	],
	other: [
		{
			details: `<strong>Under the Hood:</strong> General maintenance, system architecture optimizations, and codebase refinements to ensure long-term stability and improved performance`,
		},
	],
	support: [
		{
			details: `🍵 If you find GPThemes valuable, consider supporting its development with a <a href="https://ko-fi.com/http417" target="_blank" rel="noopener noreferrer">contribution on KO-FI</a>`,
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
