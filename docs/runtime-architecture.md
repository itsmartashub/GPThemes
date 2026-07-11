# GPThemes runtime architecture

GPThemes has two browser content entry points with deliberately different responsibilities.

`src/js/inject-theme.js` runs at `document_start`. It performs one synchronous theme read from `localStorage` and stamps the root element before the page paints. It does not mount controls, read extension storage, or keep observers alive.

`src/js/content.js` runs at `document_idle`. It owns the long-lived runtime lifecycle and mounts the theme manager, the floating theme menu, page markers, and suggested-prompt markers. Every mounted feature must return an idempotent cleanup function.

## Runtime invariants

Only `src/js/runtime/domMutations.js` may own a document-wide child-list `MutationObserver`. Features subscribe to that shared stream and inspect added nodes instead of rescanning the full page. Feature-specific observers must be scoped to a stable local root, such as the document head, the Library page `main` element, or the composer container.

Only `src/js/runtime/routes.js` detects single-page navigation. Page-specific features subscribe to route changes rather than creating their own body observers or history patches.

Async startup is generation guarded. Runtime cleanup invalidates work still in flight, and a feature that resolves after its generation becomes stale must run its disposer immediately instead of attaching itself to the page. Settings initialization is serialized across generations so stale storage reads cannot recreate controls or listeners after teardown.

The settings runtime and the settings interface are separate phases. `initializeSettingsRuntime()` applies stored colors, fonts, widths, visibility preferences, and page markers without creating settings DOM. `createSettings()` renders and mounts controls only after the user opens the panel.

Settings-open actions are also generation guarded. Hiding or destroying the floating menu invalidates pending work before it can create or reveal the settings panel, even if the menu becomes visible again before the asynchronous operation resolves.

The floating menu owns settings interaction. The theme manager only applies themes. Messaging receives a visibility callback instead of importing the floating menu. These boundaries keep the import graph acyclic.

## Adding a feature

A persistent preference should expose `init`, `mount`, and `cleanup` functions. `init` reads storage and applies page state without requiring settings DOM. `mount` synchronizes controls and attaches UI listeners. `cleanup` removes listeners and observers and must be safe to call more than once.

A page tagger should first determine whether it can use route state or added mutation nodes. A new whole-document observer is not an acceptable shortcut. Run `pnpm check:cycles` and `pnpm test:runtime` after changing module boundaries, then run `pnpm validate` before release.
