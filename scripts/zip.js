const fs = require('fs/promises')
const AdmZip = require('adm-zip')
const { join } = require('path')

const version = '2.0.4'
const filenameInputFolder = 'extension-prod'
const filenameOutputFolder = 'extension-zips'
const filenamePrefix = 'gpthemes-'
const filenameChromium = 'chromium'
const filenameFirefox = 'firefox-mv2'

async function createZipFiles() {
	try {
		// Check if the output directory exists
		try {
			await fs.access(filenameOutputFolder)
		} catch (error) {
			// If the directory doesn't exist, create it
			await fs.mkdir(filenameOutputFolder, { recursive: true })
		}

		const zipChromium = new AdmZip()
		const zipFirefox = new AdmZip()

		// Add files to the zips without filtering
		zipChromium.addLocalFolder(`${filenameInputFolder}/${filenamePrefix}${filenameChromium}`)
		zipFirefox.addLocalFolder(`${filenameInputFolder}/${filenamePrefix}${filenameFirefox}`)

		// Explicitly create zipPath strings for clarity
		const chromiumZipPath = join(filenameOutputFolder, `${filenamePrefix}${filenameChromium}-v${version}.zip`)
		const firefoxZipPath = join(filenameOutputFolder, `${filenamePrefix}${filenameFirefox}-v${version}.zip`)

		// Delete existing zip files if they already exist
		await Promise.all([deleteExistingFile(chromiumZipPath), deleteExistingFile(firefoxZipPath)])

		// Save the zip files
		zipChromium.writeZip(chromiumZipPath)
		zipFirefox.writeZip(firefoxZipPath)

		console.log('Zip files created successfully!')
	} catch (error) {
		console.error('Error creating zip files:', error)
	}
}

async function deleteExistingFile(filePath) {
	try {
		// Check if the file exists before attempting to delete
		await fs.access(filePath)
		// If the file exists, delete it
		await fs.unlink(filePath)
	} catch (error) {
		// Ignore errors if the file doesn't exist
	}
}

createZipFiles()
