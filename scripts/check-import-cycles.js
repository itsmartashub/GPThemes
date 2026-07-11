import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const sourceRoots = ['src/js', 'src/popup/js'].map((root) => path.join(projectRoot, root))
const importPattern = /(?:import|export)\s+(?:[^'";]+?\s+from\s+)?['"]([^'"]+)['"]/g

async function collectJavaScriptFiles(directory) {
	const entries = await readdir(directory, { withFileTypes: true })
	const files = await Promise.all(
		entries.map(async (entry) => {
			const absolutePath = path.join(directory, entry.name)
			if (entry.isDirectory()) return collectJavaScriptFiles(absolutePath)
			return entry.isFile() && entry.name.endsWith('.js') ? [absolutePath] : []
		}),
	)
	return files.flat()
}

function resolveImport(importer, specifier, sourceFiles) {
	if (!specifier.startsWith('.')) return null

	const base = path.resolve(path.dirname(importer), specifier)
	const candidates = [base, `${base}.js`, path.join(base, 'index.js')]
	return candidates.find((candidate) => sourceFiles.has(candidate)) || null
}

async function buildImportGraph(files) {
	const sourceFiles = new Set(files)
	const graph = new Map(files.map((file) => [file, []]))

	await Promise.all(
		files.map(async (file) => {
			const source = await readFile(file, 'utf8')
			for (const match of source.matchAll(importPattern)) {
				const dependency = resolveImport(file, match[1], sourceFiles)
				if (dependency) graph.get(file).push(dependency)
			}
		}),
	)

	return graph
}

function findCycles(graph) {
	const visited = new Set()
	const active = new Set()
	const stack = []
	const cycles = []

	function visit(file) {
		visited.add(file)
		active.add(file)
		stack.push(file)

		for (const dependency of graph.get(file)) {
			if (!visited.has(dependency)) {
				visit(dependency)
			} else if (active.has(dependency)) {
				const cycleStart = stack.indexOf(dependency)
				cycles.push([...stack.slice(cycleStart), dependency])
			}
		}

		stack.pop()
		active.delete(file)
	}

	for (const file of graph.keys()) {
		if (!visited.has(file)) visit(file)
	}

	return cycles
}

const files = (await Promise.all(sourceRoots.map(collectJavaScriptFiles))).flat()
const cycles = findCycles(await buildImportGraph(files))

if (cycles.length > 0) {
	console.error('Circular imports detected:')
	for (const cycle of cycles) {
		console.error(cycle.map((file) => path.relative(projectRoot, file)).join(' -> '))
	}
	process.exitCode = 1
} else {
	console.log(`Import graph is acyclic across ${files.length} JavaScript modules.`)
}
