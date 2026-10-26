// Using a CDN urlURL for fflate, which is compatible with Deno's ES module import. zipSync is used for synchronous, high-perf compression
import { zipSync } from 'npm:fflate@0.8.2'

const ROOT = new URL('..', import.meta.url)

const CONFIG = {
	// Directory containing the built extension files
	inputDir: new URL('build/prod', ROOT).pathname,
	// Directory where the final zip files will be placed
	outputDir: new URL('build/releases', ROOT).pathname,
	// Prefix for the output filenames
	filenamePrefix: 'gpthemes-',
	// Subfolders within inputDir for each browser build
	folders: {
		chrome: 'chromium-mv3',
		firefox: 'firefox-mv3',
	},
}

createZipFiles()

// Reads the single source-of-truth version from package.json.
async function readExtVersion() {
	const pkg = JSON.parse(await Deno.readTextFile(new URL('package.json', ROOT)))
	return pkg.version
}

// Ensures a directory exists, creating it recursively if necessary
async function ensureDirExists(dir) {
	await Deno.mkdir(dir, { recursive: true })
}

// Deletes a file if it exists, ignoring 'NotFound' errors
async function deleteExistingFile(filePath) {
	try {
		await Deno.remove(filePath)
	} catch (error) {
		// Only throw if the error is not 'NotFound'
		if (!(error instanceof Deno.errors.NotFound)) throw error
	}
}

// Recursively traverses a folder and collects all files into a map compatible with fflate's zipSync, using relative paths as keys
async function collectFiles(folderPath, basePath = '') {
	const files = {}

	for await (const entry of Deno.readDir(folderPath)) {
		const fullPath = `${folderPath}/${entry.name}`
		const zipPath = basePath ? `${basePath}/${entry.name}` : entry.name

		if (entry.isDirectory) {
			// Recursively collect files in subdirectories
			const subFiles = await collectFiles(fullPath, zipPath)
			Object.assign(files, subFiles)
		} else {
			// Read file content as a Uint8Array
			const content = await Deno.readFile(fullPath)
			files[zipPath] = content
		}
	}

	return files
}

// Collects files, compresses them using fflate, and writes the resulting zip file
async function createZip(inputPath, zipPath) {
	const files = await collectFiles(inputPath)

	// Use zipSync for synch zipping. Level 9 is max compression
	const zipped = zipSync(files, { level: 9 })

	await Deno.writeFile(zipPath, zipped)
}

// Zipping process for a specific browser
async function createZipFile(browser) {
	const version = await readExtVersion()

	// Construct paths
	const inputPath = `${CONFIG.inputDir}/${CONFIG.filenamePrefix}${CONFIG.folders[browser]}`
	const zipPath = `${CONFIG.outputDir}/${CONFIG.filenamePrefix}${CONFIG.folders[browser]}-v${version}.zip`

	// Pre-flight checks and cleanup
	await ensureDirExists(CONFIG.outputDir)
	await deleteExistingFile(zipPath)

	// Create the zip file
	await createZip(inputPath, zipPath)

	console.log(`✅ Created ${browser} zip file: ${zipPath}`)
}

// Main fn to start the zipping process for all defined browsers
async function createZipFiles() {
	try {
		// Run the zipping process for Chromium and Firefox concurrently
		await Promise.all([createZipFile('chrome'), createZipFile('firefox')])
		console.log('🎉 Zip files created successfully!')
	} catch (error) {
		console.error('❌ Error creating zip files:', error)
		Deno.exit(1) // Exit with a non-zero code on failure
	}
}
