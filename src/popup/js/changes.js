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

const currentReleaseChanges = {
	features: [
		{
			description: 'Backup & Restore:',
			details:
				'Export your setup to a file, import it on another browser, or reset everything (check out the "Other" section)',
			prRef: 274,
		},
		{
			description: 'Sidebar Hide Toggles:',
			details:
				'New toggles to hide <code>Images</code>, <code>Scheduled</code>, <code>Library</code>, <code>Plugins</code>, <code>Pinned</code>, <code>Project</code> and <code>Recents</code> from the sidebar',
			prRef: 267,
			issueRef: 266,
		},
		{
			description: 'Compact Hide Settings:',
			details:
				'Hide toggles are grouped into collapsible <code>Header</code>, <code>Sidebar</code>, <code>Other</code> and <code>Experimental</code> sections with compact rows',
			prRef: 265,
		},
		{
			description: 'Hide Chat Ads:',
			details: 'Experimental toggle that hides in-chat ad cards. Expect occasional breakage',
			prRef: 271,
			issueRef: 270,
		},
	],
	improvements: [
		{
			description: 'Better Theme Coverage:',
			details: 'Text styles, accent and surface colors now reach more parts of ChatGPT',
		},
		{
			description: 'Button That Comes Back:',
			details:
				'If ChatGPT removes the GPThemes button during a page update, it is now restored on its own',
		},
		{
			description: 'No Slowdown Over Time:',
			details:
				'Opening the settings many times no longer stacks hidden work in the background',
			prRef: 275,
		},
	],
	fixes: [
		{
			description: 'Custom Fonts:',
			details: 'Your chosen font applies to user and assistant messages again',
			issueRef: 263,
		},
		{
			description: 'GPT Bubble Toggle:',
			details: 'The toggle works again on assistant messages',
			issueRef: 268,
		},
		{
			description: 'Hide Upgrade Chip:',
			details: 'The <code>Upgrade</code> chip hides on desktop and mobile again',
		},
		{
			description: 'Header Toggles:',
			details:
				'<code>New chat</code> and the full header hide follow the current ChatGPT header',
		},
	],
	other: [
		{
			description: 'Removed Toggles:',
			details:
				'<code>Hide Header ChatGPT</code> and <code>Hide Header Actions</code> are gone. ChatGPT keeps changing that part of the header, so the toggles had nothing stable left to target',
		},
		{
			description: 'FAB Position:',
			details:
				"Exports don't include the GPThemes drag button position. It's tied to your screen size, so it would end up in the wrong place on another device or screen preferences",
		},
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
		.sort(
			([a], [b]) => (SECTION_TYPES[a]?.priority || 999) - (SECTION_TYPES[b]?.priority || 999),
		)

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

export { links, RELEASE_CHANGES }
