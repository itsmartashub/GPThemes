// Using a CDN URL for fflate, which is compatible with Deno's ES module import syste
// zipSync is used for synchronous, high-perf compression
import { zipSync } from 'https://cdn.jsdelivr.net/npm/fflate/esm/browser.js'

const CONFIG = {
	// Paths to the manifest files to read the extension version from
	manifestPaths: {
		chrome: 'src/manifests/chromium-mv3/manifest.json',
		firefox: 'src/manifests/firefox-mv2/manifest.json',
	},
	// Directory containing the built extension files
	inputDir: 'build/prod',
	// Directory where the final zip files will be placed
	outputDir: 'build/releases',
	// Prefix for the output filenames
	filenamePrefix: 'gpthemes-',
	// Subfolders within inputDir for each browser build
	folders: {
		chrome: 'chromium-mv3',
		firefox: 'firefox-mv2',
	},
}

// Reads the version string from a manifest file.
async function readExtVersionFromManifest(manifestPath) {
	const manifestContent = await Deno.readTextFile(manifestPath)
	const manifest = JSON.parse(manifestContent)
	return manifest.version
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

// Recursively traverses a folder and collects all files into a map
// compatible with fflate's zipSync, using relative paths as keys
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
	const version = await readExtVersionFromManifest(CONFIG.manifestPaths[browser])

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

// Execute the main function
createZipFiles()
