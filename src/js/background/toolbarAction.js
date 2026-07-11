function resolveToolbarAction(browserApi) {
	const toolbarAction = browserApi?.action || browserApi?.browserAction
	if (!toolbarAction) {
		throw new Error('This browser does not expose a toolbar action API')
	}

	return toolbarAction
}

export { resolveToolbarAction }
