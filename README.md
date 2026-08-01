# Career Agent — Resume Rendering Engine

A deterministic, print-ready resume workspace built as the rendering foundation for an AI-powered career platform.

## Architecture

The codebase separates concerns into three layers:

- `src/domain` defines presentation-independent resume and template contracts.
- `src/data` supplies typed document data. It can later be replaced by persisted or AI-generated content without changing a template.
- `src/templates` contains isolated renderers and a registry for selecting them.
- `src/App.tsx` owns workspace state and composes the selected template into the preview shell.

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
```

## Print rendering

The document is an exact A4 page (`210mm × 297mm`). Screen zoom transforms the entire page while print styles remove the application shell and restore a 1:1 page. Browser PDF automation should wait for the document to render, emulate print media, and print with background graphics enabled.

## Adding a template

1. Implement a component that accepts `TemplateProps`.
2. Keep its document styles scoped beneath its template root.
3. Register its metadata and renderer in `src/templates/registry.tsx`.
4. Add a rendering test using representative document data.
