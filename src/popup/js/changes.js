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
	note: { emoji: '👋', title: 'Note', priority: 1 },
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
	// note: [],
	// critical: [],
	// newFixes: [],
	// features: [],
	// improvements: [],
	// fixes: [],
	// other: [],
	// support: [],
	note: [
		{
			// details:
			// 	'Temporarily deactivated the <code>Scrolldown alignment</code> feature to focus on maintenance and ensure overall extension stability <a href="https://github.com/itsmartashub/GPThemes/issues/208" target="_blank" rel="noopener noreferrer">See more</a>',
			// issueRef: 208,
			details: `Hey there, it's been a while. <br>
					A few things were broken, and I only just found out. Sorry about that.
					I've moved on to other AI workflows, so I rarely visit the site this was built for anymore.<br>
					If something's off, I probably won't know unless you tell me :(`,
		},
	],
	features: [
		{
			description: 'Hide Upgrade Chips:',
			details: 'Hide the upgrade chip from the sidebar also when <code>Hide Upgrade Chips</code> is enabled',
		},
	],
	improvements: [
		{
			description: 'Text Editing:',
			details:
				'Enhanced styling for new markdown edit blocks, including theme-consistent backgrounds, improved selected text menu dropdowns, and custom accent colors for buttons and text selection',
			issueRef: 214,
		},
		{
			description: 'UI/UX:',
			details: 'Improved styling for tooltips, settings & upgrade dialogs, and pricing cards',
		},
	],
	fixes: [
		{
			description: 'Fonts:',
			details: 'Fixed custom font family application and fallback logic',
			issueRef: 210,
		},
		{
			description: 'Expand Chatbox:',
			details: 'Fixed <code>Expand chatbox</code> feature',
			issueRef: 209,
		},
		{
			description: 'Chatbox:',
			details:
				'Fixed chatbox background to match accent theme with blur, and differentiate it with temporary chatbox',
			issueRef: 211,
		},
		{
			description: 'Chatbox Section:',
			details: 'Replaced the grey background with a modern backdrop blur for better readability',
			issueRef: 211,
		},
		{
			description: 'Chat Bubble:',
			details: 'Fixed user bubble alignment and custom width feature',
			issueRef: 213,
		},
		{
			description: 'Sidebar:',
			details:
				'Fixed background theme consistency, corrected pin icon colors, and improved upgrade chip hiding selectors',
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
			details: `Some tools just become part of how you work. If this is one of them, <a href="https://ko-fi.com/http417" target="_blank" rel="noopener noreferrer">Ko-fi</a> is there`,
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
