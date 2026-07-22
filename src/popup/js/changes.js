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
			details: `Hey there. I just wanted to let you know that I rarely visit the site this extension was built for anymore.<br>
			That means if something breaks or stops working, I probably won't notice unless you let me know :(`,
		},
	],
	features: [
		{
			description: 'Custom Sidebar Width:',
			details: 'New slider to adjust sidebar width (original is 260px)',
			issueRef: 218,
		},
		{
			description: 'Hide Profile Button:',
			details: 'Toggle to hide the Account Profile button from the sidebar',
			issueRef: 233,
		},
		{
			description: 'Hide Header ChatGPT Button:',
			details: 'New toggle to hide the top header ChatGPT button',
			issueRef: 228,
		},
		{
			description: 'Hide Header Actions:',
			details: 'Hide top-right header buttons including Share, Open Canvas, and options menu',
			issueRef: 230,
		},
	],
	improvements: [
		{
			description: 'Header Styling:',
			details: 'Improved translucent backgrounds for header action buttons',
		},
		{
			description: 'Code Blocks:',
			details: 'Improved styling consistency for code block backgrounds and markdown edit blocks',
		},
		{
			description: 'Codex/Cloud:',
			details: 'Enhanced style support for Codex Cloud page',
		},
	],
	fixes: [
		{
			description: 'Message Bubble:',
			details: 'Fixed selectors to ensure message bubble padding is properly applied',
			issueRef: 224,
		},
		{
			description: 'Custom Chatbox Width:',
			details: 'Fixed feature functionality and improved performance',
			issueRef: 235,
		},
		{
			description: 'Hide Footer:',
			details: 'Updated selectors to fix broken <code>Hide Footer</code> toggle',
			issueRef: 226,
		},
		{
			description: 'Expand Chatbox:',
			details: 'Fixed and enhanced support for New Chat page',
			issueRef: 219,
		},
		{
			description: 'Upgrade Chips:',
			details: 'Fixed selectors to properly hide new Upgrade chip in header for desktop and mobile',
			issueRef: 237,
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
