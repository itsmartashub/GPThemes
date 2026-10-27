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
	note: [
		{
			details: `<strong>Hey there :)</strong> ChatGPT rolled out its new UI gradually through A/B testing, so not everyone got it at the same time. Supporting it meant rewriting almost the entire extension. <br> There are many UI variants and no single stable selector that works everywhere, so some features may work in some places and not in others, and mobile support is still incomplete. It won't be a pixel-perfect replica of the previous UI. <br><br> Thanks for your patience while things were broken, and especially to those who left a kind review anyway. Genuinely glad there are people who get what goes on behind the scenes. <br> <strong>What still looks off in your variant? Report it on GitHub or by email.</strong>`,
		},
	],
	features: [
		{
			description: 'ChatGPT New UI Support:',
			details:
				'Reworked GPThemes for ChatGPT’s new UI. There were too many changes to list here',
			prRef: 259,
		},
		{
			description: 'Light/Dark Mode & AMOLED:',
			details:
				"Because of ChatGPT's new theme logic, light/dark mode now follows ChatGPT's own settings instead of the old dock buttons, so the dock with the 3 theme buttons were removed. AMOLED moved to the <code>Colors</code> section as a toggle and only takes effect in dark mode",
		},
		{
			description: 'Draggable Floating Action Button:',
			details:
				'The GPThemes button can now be dragged anywhere on screen and remembers its position across sessions, and the settings panel opens relative to it',
			prRef: 260,
			issueRef: 176,
		},
		{
			description: 'Per-Slider Reset Buttons:',
			details:
				'Each customization slider now has a reset button that restores only that slider to its default value',
			prRef: 258,
		},
		{
			description: 'Toggle Badges:',
			details:
				'Toggles now show <code>MOBILE</code>, <code>NEW</code> and <code>EN</code> badges indicating where they apply',
		},
		{
			description: 'Stacked Notifications:',
			details:
				'Notifications got a cleaner look and a smoother animation, and no longer lag. They now stack neatly at the top center, so they stay noticeable without getting in your way',
		},
	],
	fixes: [
		{
			description: 'Hide Toggles:',
			details:
				'Fixed broken <code>Hide header</code>, <code>Hide share button</code> and <code>Hide new chat</code> after the UI update (the last two work in English only due to selector limitations), and restored the swapped <code>Hide header actions</code> / <code>Hide header share</code> selectors',
		},
		{
			description: 'Accent Surfaces:',
			details:
				'Accent surfaces no longer tint pure black/white, and monochromatic accents stay pure B/W without red-ish shades',
		},
		{
			description: 'Accent Toggles:',
			details:
				'Updated <code>Accent user bubble</code> and <code>Accent all text</code> to work on the new UI',
		},
		{
			description: 'Custom Fonts:',
			details:
				'Fixed custom fonts not applying to chat messages and other elements, and added support for the Codex browser window theme',
		},
		{
			description: 'Width Sliders:',
			details:
				'Chats and chatbox widths now work on the new UI composer and use <code>rem</code> instead of <code>%</code>, so the width stays stable when sidebars open',
		},
	],
	other: [
		{
			description: 'Removed Features:',
			details:
				'Dropped <code>Expand Chatbox</code> toggle, custom sidebar width, <code>Hide Profile Button</code> toggle, the theme manager and the FAB dock, since ChatGPT now ships native equivalents',
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
