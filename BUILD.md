# Building ng-recharts

This guide explains how to build and publish the ng-recharts package.

## Prerequisites

- Node.js >= 18
- npm or yarn
- Angular CLI (for building)

## Development Setup

1. Install dependencies:

```bash
npm install
```

2. Install peer dependencies (for development):

```bash
npm install --save-peer @angular/common@^18.0.0 @angular/core@^18.0.0 recharts react react-dom react-is
```

3. Install build dependencies:

```bash
npm install --save-dev @angular-devkit/build-angular ng-packagr typescript@~5.4.5
```

## Building

Build the library:

```bash
npm run build
```

This will create the distributable files in the `dist/ng-recharts` directory.

## Testing Locally

To test the package locally before publishing:

1. Build the package:
```bash
npm run build
```

2. In your test Angular project, install the local package:
```bash
npm install /path/to/ng-recharts
```

Or use `npm link`:
```bash
cd /path/to/ng-recharts
npm link
cd /path/to/test-project
npm link ng-recharts
```

## Publishing

Before publishing:

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Build the package: `npm run build`
4. Test the build output
5. Publish to npm:

```bash
npm publish
```

## Package Structure

After building, the `dist/ng-recharts` directory will contain:

- `bundles/` - UMD bundle
- `esm2022/` - ES2022 modules
- `fesm2022/` - Flattened ES2022 modules
- `index.d.ts` - TypeScript definitions
- `package.json` - Package metadata
- `README.md` - Documentation
