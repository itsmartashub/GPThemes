import { rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const targetsByScope = {
	dev: ['.parcel-cache', 'build/dev'],
	prod: ['.parcel-cache', 'build/prod'],
	releases: ['build/releases'],
	all: ['.parcel-cache', 'build'],
}

const scope = process.argv[2]
const targets = targetsByScope[scope]

if (!targets) {
	console.error(`Unknown clean scope: ${scope || '(missing)'}`)
	console.error(`Expected one of: ${Object.keys(targetsByScope).join(', ')}`)
	process.exitCode = 1
} else {
	for (const target of targets) {
		const absolutePath = path.resolve(projectRoot, target)
		const relativePath = path.relative(projectRoot, absolutePath)
		const isInsideProject = relativePath && !relativePath.startsWith('..') && !path.isAbsolute(relativePath)

		if (!isInsideProject) {
			throw new Error(`Refusing to remove path outside the project: ${absolutePath}`)
		}

		await rm(absolutePath, { force: true, recursive: true })
	}
}
