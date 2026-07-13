import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

async function source(path) {
	return readFile(new URL(`../${path}`, import.meta.url), 'utf8')
}

function uncommentedLines(value) {
	return value
		.split('\n')
		.filter((line) => !line.trimStart().startsWith('//'))
		.join('\n')
}

test('root tokens preserve chat surfaces and tertiary icon contrast', async () => {
	const variables = await source('src/sass/abstract/_vars-gpt.scss')
	assert.match(variables, /--black:\s*var\(--c-bg-chats-container\)\s*!important;/)
	assert.match(variables, /--icon-tertiary:\s*var\(--c-subtext-2\)\s*!important;/)
	assert.doesNotMatch(variables, /--black:\s*var\(--c-accent\)\s*!important;/)
})

test('composer styling and Expand Chatbox share the current surface contract', async () => {
	const textarea = await source('src/sass/elements/_right--textarea.scss')
	const customTextarea = await source('src/sass/customs/_custom--textarea.scss')
	const selectors = await source('src/js/app/config/selectors.js')

	for (const value of [textarea, customTextarea, selectors]) {
		assert.match(value, /\.contain-inline-size\[data-composer-surface\]/)
		assert.doesNotMatch(value, /\.contain-inline-size\.bg-token-bg-primary/)
	}

	assert.match(textarea, /background:\s*var\(--c-bg-textarea\)\s*!important;/)
	assert.doesNotMatch(textarea, /#composer-background/)
	assert.doesNotMatch(textarea, /dark\\:bg-token-bg-elevated-primary/)
})

test('obsolete global sidebar surface overrides stay removed', async () => {
	const sidebar = uncommentedLines(await source('src/sass/elements/_sidebar.scss'))
	const backgrounds = uncommentedLines(await source('src/sass/global/_colors-bgs.scss'))
	assert.doesNotMatch(sidebar, /--sidebar-surface-primary:\s*var\(--c-bg-sidebar\)/)
	assert.doesNotMatch(backgrounds, /\.bg-token-sidebar-surface-primary\s*\{/)
})

test('current writing and collapsible-message controls inherit themed surfaces', async () => {
	const chats = await source('src/sass/elements/_right--chats.scss')
	assert.match(chats, /\.writing-block-editor\s*\{/)
	assert.match(
		chats,
		/\[data-testid="collapsible-user-message-toggle"\]\s*\{[^}]*color:\s*currentColor\s*!important;/s,
	)
})

test('Hide Footer targets the current disclaimer without relying on a generic utility', async () => {
	const selectors = await source('src/js/app/config/selectors.js')
	const hides = await source('src/sass/customs/_custom--hides.scss')
	const currentFooter = /#main #thread-bottom-container > \[data-testid=["']thread-disclaimer["']\]/
	const broadFooter = /#main #thread-bottom-container > \.mt-auto/

	for (const value of [selectors, hides]) {
		assert.match(value, currentFooter)
		assert.doesNotMatch(value, broadFooter)
	}
})

test('full theme CSS waits until document idle in every extension manifest', async () => {
	for (const path of [
		'src/manifests/chromium-mv3/manifest.json',
		'src/manifests/firefox-mv2/manifest.json',
	]) {
		const manifest = JSON.parse(await source(path))
		const startScript = manifest.content_scripts.find(({ run_at }) => run_at === 'document_start')
		const idleScript = manifest.content_scripts.find(({ run_at }) => run_at === 'document_idle')

		assert.deepEqual(startScript.js, ['../../js/inject-theme.js'])
		assert.equal(startScript.css, undefined)
		assert.deepEqual(idleScript.css, ['../../sass/index.scss'])
	}
})

test('suggested prompts use stable runtime markers without relational host fallbacks', async () => {
	const textarea = await source('src/sass/elements/_right--textarea.scss')

	assert.match(textarea, /\[data-gpth-suggested-prompts-panel\]/)
	assert.match(textarea, /\[data-gpth-suggested-prompt-button\]/)
	assert.doesNotMatch(textarea, /body:has\(#prompt-textarea\)/)
})

test('activity panel mutation processing does not force computed-style resolution', async () => {
	const activityPanel = await source('src/js/app/custom-layouts/activityPanel.js')

	assert.doesNotMatch(activityPanel, /getComputedStyle/)
	assert.doesNotMatch(activityPanel, /data-gpth-activity-surface/)
})
