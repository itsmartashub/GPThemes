const fs = require('fs/promises')
const AdmZip = require('adm-zip')
const path = require('path')

const CONFIG = {
	manifestPaths: {
		chrome: 'src/manifests/chromium-mv3/manifest.json',
		firefox: 'src/manifests/firefox-mv2/manifest.json',
	},
	inputDir: 'build/prod',
	outputDir: 'build/releases',
	filenamePrefix: 'gpthemes-',
	folders: {
		chrome: 'chromium-mv3',
		firefox: 'firefox-mv2',
	},
}

async function readExtVersionFromManifest(manifestPath) {
	try {
		const manifestContent = await fs.readFile(manifestPath, 'utf8')
		const manifest = JSON.parse(manifestContent)
		return manifest.version
	} catch (error) {
		throw new Error(`Failed to read version from manifest: ${error.message}`)
	}
}

async function ensureDirExists(dir) {
	await fs.mkdir(dir, { recursive: true })
}

async function deleteExistingFile(filePath) {
	try {
		await fs.unlink(filePath)
	} catch (error) {
		if (error.code !== 'ENOENT') throw error
	}
}

async function createZip(inputPath, zipPath) {
	const zip = new AdmZip()
	zip.addLocalFolder(inputPath)
	zip.writeZip(zipPath)
}

async function createZipFile(browser) {
	const version = await readExtVersionFromManifest(CONFIG.manifestPaths[browser])
	const inputPath = path.join(CONFIG.inputDir, `${CONFIG.filenamePrefix}${CONFIG.folders[browser]}`)
	const zipPath = path.join(CONFIG.outputDir, `${CONFIG.filenamePrefix}${CONFIG.folders[browser]}-v${version}.zip`)

	await ensureDirExists(inputPath)
	await deleteExistingFile(zipPath)
	await createZip(inputPath, zipPath)

	console.log(`Created ${browser} zip file: ${zipPath}`)
}

async function createZipFiles() {
	try {
		await ensureDirExists(CONFIG.outputDir)
		await Promise.all([createZipFile('chrome'), createZipFile('firefox')])
		console.log('Zip files created successfully!')
	} catch (error) {
		console.error('Error creating zip files:', error)
	}
}

createZipFiles()
