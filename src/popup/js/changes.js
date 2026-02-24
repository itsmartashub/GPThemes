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
	critical: { emoji: '🚨', title: 'Critical Fixes', priority: 1 },
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
	// features: [],
	// improvements: [],
	// fixes: [],
	// other: [],
	// support: [],
	critical: [
		{
			description: 'Project Loading:',
			details:
				'Fixed a critical bug where project threads would stop loading during scroll. Sorry for gaslighting you with the <code>Project</code> chats disapearing :( Many thanks to <strong>@Fredisland</strong> for mentioning this major bug 🤝',
			issueRef: 197,
		},
	],
	improvements: [
		{
			description: 'Group Chats:',
			details: 'Custom chat widths and GPT bubble toggles now fully support <code>Group Chat</code> layouts',
			prRef: 202,
			issueRef: 203,
		},
		{
			description: 'Map Interactivity:',
			details: 'Refined markers and semi-transparent sidebars for the new map interface',
			prRef: 205,
		},
		{
			description: 'Source Sidebars:',
			details: 'Unified hover states for all source-link sidebars',
		},
		{
			description: 'Code Snippets:',
			details: "Reverted custom code block styles to align with OpenAI's latest native defaults",
			prRef: 206,
		},
		{
			description: 'Pin Icon:',
			details: "Improved the pin icon's color contrast in sidebar chatlists",
		},
	],
	fixes: [
		{
			description: 'Hide Footer:',
			details: 'Fixed <code>Hide Footer</code> toogle',
			prRef: 200,
		},
		{
			description: 'Lag Reduction:',
			details: 'Optimized hover animations to eliminate micro-stuttering during interaction with some elements',
		},
	],
	other: [
		{
			description: 'Google Fonts:',
			details:
				'Technically, almost any font found on the <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">Google Fonts Platform</a> can be added. If you have a favorite, let me know in a <a href="https://github.com/itsmartashub/GPThemes/issues/new?template=feature_request.yml" target="_blank" rel="noopener noreferrer">Github issue</a>, <a href="https://ko-fi.com/http417" target="_blank" rel="noopener noreferrer">ko-fi</a>, or review',
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
