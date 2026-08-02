# Career Agent — Resume Rendering Engine

A deterministic, print-ready resume workspace built as the rendering foundation for an AI-powered career platform.

## Architecture

The codebase separates concerns into three layers:

- `src/domain` defines presentation-independent resume and template contracts.
- `src/data` supplies typed document data. It can later be replaced by persisted or AI-generated content without changing a template.
- `src/templates` contains isolated renderers and a registry for selecting them.
- `src/App.tsx` owns workspace state and composes the selected template into the preview shell.
- `src/print` renders the same document through an independent, unscaled print entry point.

Templates receive only a complete `ResumeDocument` and visual options. They should remain deterministic: no data fetching, editor state, or viewport-dependent content belongs inside a template.

## Development

```sh
npm install
npm run dev
```

Quality checks:

```sh
npm run lint
npm test
npm run build
npm run test:pdf
```

## Print rendering

The editor preview and printable document are separate render trees. The preview
may use a fixed A4 canvas and transforms for zooming, but those containers are
never mounted in print mode. Selecting **Export PDF** opens the `?print=1`
document, which renders the active `ResumeDocument` in natural flow and waits
for fonts before opening the browser print dialog.

Print styles use A4 page geometry and allow the resume to flow across as many
pages as its content requires. Run `npm run test:pdf` to exercise the standalone
route and verify three-page pagination with Playwright.

## Adding a template

1. Implement a component that accepts `TemplateProps`.
2. Keep its document styles scoped beneath its template root.
3. Register its metadata and renderer in `src/templates/registry.tsx`.
4. Add a rendering test using representative document data.
