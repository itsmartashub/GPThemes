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
	previousSeparator: { emoji: '📜', title: 'From Previous Version', priority: 2, isSeparator: true },
	features: { emoji: '🆕', title: 'Features', priority: 3 },
	improvements: { emoji: '🚀', title: 'Key Enhancements', priority: 4 },
	fixes: { emoji: '🩹', title: 'Key Fixes', priority: 5 },
	other: { emoji: '🧵', title: 'Other', priority: 6 },
	support: { emoji: '💌', title: 'Support', priority: 7 },
}

const currentReleaseChanges = {
	features: [
		{
			description: 'OKLCH Color System:',
			details:
				'Completely rebuilt color management from HSL to OKLCH for better color accuracy, perceptual uniformity, and better lightness handling on modern displays',
			prRef: 171,
		},
		{
			description: 'New Color Picker:',
			details:
				'Replaced native browser input with colorpicker library featuring manual HEX input, eyedropper tool, individual color reset, and consistent cross-browser behavior. (Please read <code>Other</code> section for performance info)',
			prRef: 173,
		},
		{
			description: 'All Text Accented Toggle:',
			details: 'Added toggle to apply accent color to main text on the page',
			prRef: 175,
			issueRef: 109,
		},
		{
			description: 'Storage Version Control:',
			details:
				'Implemented automatic storage clearing when extension version is outdated, ensuring clean upgrades. <br/> ⚠️ Your settings will be reset on first launch',
		},
		{
			description: 'Accent Colors:',
			details: 'Change default accent colors',
		},
	],
	improvements: [
		{
			description: 'Theme Improvements:',
			details:
				'Tweaked Dark/OLED theme to be more monochromatic-friendly. Brightened light theme. Enhanced bubble contrast, and many more',
		},
		{
			description: 'Updated Colors:',
			details:
				'Refined surface and menu colors across all themes (light, dark, OLED) for better visual hierarchy',
		},
		{
			description: 'Project Interface:',
			details: 'Improve list chats style',
		},
		{
			description: 'Modals Dialogs:',
			details: 'Added better style to back button and improve sharing dialog',
		},
	],
	fixes: [
		{
			description: 'Expand Chatbox Height:',
			details: 'Updated selectors to prevent targeting chatbox in <code>New Chat</code> layout',
		},
		{
			description: 'Project & Sidebar:',
			details: 'Fixed hover styles and pill-style dates broken due to OpenAI updates',
		},
	],
	other: [
		{
			details: `Hey there 👋 This is a <strong>MAJOR</strong> <code>v6.0.0</code> release with complete color system overhaul and massive codebase refactor.<br/><br/> 

			⚠️ <strong>Important:</strong> Your settings will be reset on first launch due to extension storage version update. <br/><br/>

			💡 <strong>Note on color picker:</strong> For the smoothest experience, change colors on lighter pages (like blank <code>New Chat</code> screen). Live preview regenerates the entire theme during dragging, which can lag on heavy pages. <br/><br/>

			For full technical details and maintenance notes, check out the complete release notes on GitHub.`,
		},
	],
	support: [
		{
			details: ` <strong>Keep it alive:</strong> This extension is free so everyone can use it. But maintaining it through constant platform updates takes real time and effort. Many great tools end up behind paywalls just to survive. I'm trying to avoid that.<br/><br/> 
			
			🍵 If you can afford it and find GPThemes valuable, you can support its development with a <a href="https://ko-fi.com/http417" target="_blank" rel="noopener noreferrer"> <code>pay-what-you-want</code> contribution on KO-FI. </a> Even small contributions help keep it alive and accessible.`,
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
