const fs = require('fs/promises')
const AdmZip = require('adm-zip')
const { join } = require('path')

const manifestPathChrome = 'src/manifests/chrome/manifest.json'
const manifestPathFirefox = 'src/manifests/firefox-mv2/manifest.json'
// let version = ''
const inputDir = 'build/prod'
const outputDir = 'build/releases'
const filenamePrefix = 'gpthemes-'
const chromiumFolder = 'chromium-mv3'
const firefoxFolder = 'firefox-mv2'

// readExtVersionFromManifest()
async function readExtVersionFromManifest(manifestPath) {
	try {
		const manifestContent = await fs.readFile(manifestPath, 'utf8')
		const manifest = JSON.parse(manifestContent)
		version = manifest.version
		// console.log(`Version: ${version}`)
		return version
	} catch (error) {
		throw new Error(`Failed to read version from manifest: ${error.message}`)
	}
}
// console.log(version)

async function createZipFiles() {
	try {
		// Read the version from the manifest
		const versionChrome = await readExtVersionFromManifest(manifestPathChrome)
		const versionFirefox = await readExtVersionFromManifest(manifestPathFirefox)

		// Check if the output directory exists
		await ensureDirExists(outputDir)

		const chromiumInputPath = join(inputDir, `${filenamePrefix}${chromiumFolder}`)
		const firefoxInputPath = join(inputDir, `${filenamePrefix}${firefoxFolder}`)

		// Ensure the input directories exist
		await ensureDirExists(chromiumInputPath)
		await ensureDirExists(firefoxInputPath)

		const chromiumZipPath = join(outputDir, `${filenamePrefix}${chromiumFolder}-v${versionChrome}.zip`)
		const firefoxZipPath = join(outputDir, `${filenamePrefix}${firefoxFolder}-v${versionFirefox}.zip`)

		// Delete existing zip files if they already exist
		await Promise.all([deleteExistingFile(chromiumZipPath), deleteExistingFile(firefoxZipPath)])

		// Create zip files
		await createZip(chromiumInputPath, chromiumZipPath)
		await createZip(firefoxInputPath, firefoxZipPath)

		console.log('Zip files created successfully!')
	} catch (error) {
		console.error('Error creating zip files:', error)
	}
}

async function ensureDirExists(dir) {
	try {
		await fs.access(dir)
	} catch (error) {
		// If the directory doesn't exist, create it
		if (error.code === 'ENOENT') {
			await fs.mkdir(dir, { recursive: true })
		} else {
			throw error
		}
	}
}

async function deleteExistingFile(filePath) {
	try {
		await fs.access(filePath)
		await fs.unlink(filePath)
	} catch (error) {
		// Ignore errors if the file doesn't exist
		if (error.code !== 'ENOENT') {
			throw error
		}
	}
}

async function createZip(inputPath, zipPath) {
	try {
		const zip = new AdmZip()
		zip.addLocalFolder(inputPath)
		zip.writeZip(zipPath)
	} catch (error) {
		throw new Error(`Failed to create zip file at ${zipPath}: ${error.message}`)
	}
}

createZipFiles()
