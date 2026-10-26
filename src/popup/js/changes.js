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
			details: `Hey there. ChatGPT rolled out its new UI gradually through A/B testing, so not everyone got it at the same time. Supporting it meant rewriting almost the entire extension to bring every feature back on the new interface. <br>
            ChatGPT ships many UI variants and profiles, so there is no single stable selector that works everywhere. It seems like some features will work in some places and not in others, and mobile support is still incomplete. It won’t be a pixel-perfect replica of the previous UI. <br>
            What still looks off in your variant? Report it on GitHub or by email.`,
		},
	],
	features: [
		{
			description: 'Draggable Floating Action Button:',
			details:
				'The GPThemes button can now be dragged anywhere on screen and remembers its position across sessions',
			prRef: 260,
			issueRef: 176,
		},
		{
			description: 'Per-Slider Reset Buttons:',
			details:
				'Each customization slider now has a reset button to restore its default value in one click',
			prRef: 258,
		},
		{
			description: 'Toggle Badges:',
			details:
				'Toggles now show <code>MOBILE</code>, <code>NEW</code> and <code>EN</code> badges indicating where they apply',
		},
		{
			description: 'AMOLED as Toggle:',
			details:
				'AMOLED is no longer a separate theme, it is a toggle that only takes effect in dark mode',
		},
	],
	improvements: [
		{
			description: 'ChatGPT New UI Support:',
			details:
				"Reworked GPThemes to fully support ChatGPT's new UI: theming, colors, chats, bubbles, sidebars, composer, right panel, image viewer, tooltips, toasts and more. Existing customization features (custom fonts, accent colors, hide toggles, chatbox widths, accent bubble, buttons, sidebar) were restored and updated for the new UI. Theme handling now follows ChatGPT's own.",
			prRef: 259,
		},
		{
			description: 'Accent Surfaces:',
			details:
				'Accent surfaces no longer tint pure black/white, and monochromatic accents stay pure B/W without red-ish shades',
		},
		{
			description: 'Width Sliders Rework:',
			details:
				'Width sliders now use REM instead of %. With %, opening a left or right sidebar shrinks the chats container, so the same percentage no longer matches the intended width and the layout jumps. REM is based on the root font size, so the chosen width stays stable no matter how the container resizes',
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
