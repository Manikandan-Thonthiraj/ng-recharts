# E2E Testing for Ng-Recharts

This directory contains end-to-end tests for the ng-recharts library using Playwright.

## Prerequisites

- Node.js 18+
- npm or yarn
- Example app dependencies installed

## Running Tests

### From the root directory (recommended)

The root `playwright.config.ts` automatically starts the example app and runs tests:

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run all e2e tests
npm run e2e

# Run tests in UI mode (interactive)
npm run e2e:ui

# Run tests in headed mode (see browser)
npm run e2e:headed
```

### From example-app directory

You can also run tests from the example-app directory:

```bash
cd example-app
npm run e2e
```

## Test Structure

- `charts.spec.ts` - Tests for all chart components (Line, Bar, Pie, Area, Composed)
- `example.spec.ts` - Tests for example app functionality and navigation

## What Tests Cover

### Chart Component Tests
- ✅ Chart rendering and visibility
- ✅ SVG element presence and dimensions
- ✅ Navigation between chart pages
- ✅ Chart titles and descriptions
- ✅ Responsive behavior

### Example App Tests
- ✅ Application loading
- ✅ Navigation functionality
- ✅ Code examples display
- ✅ Page structure and layout
- ✅ Responsive design

## Configuration

The `playwright.config.ts` file configures:
- Test directory: `./e2e`
- Base URL: `http://localhost:4200`
- Browsers: Chromium, Firefox, WebKit
- Auto-start of example app server
- Screenshots on failure
- Trace on retry

## CI/CD Integration

Tests are configured to run in CI environments:
- Retries: 2 attempts
- Single worker in CI
- HTML reporter for results
- Screenshots and traces for debugging

## Debugging

To debug failing tests:

1. Run in UI mode: `npm run e2e:ui`
2. Run in headed mode: `npm run e2e:headed`
3. Check screenshots in `test-results/` directory
4. View trace files in Playwright trace viewer

## Writing New Tests

When adding new chart components or features:

1. Add test cases to `charts.spec.ts` for chart-specific tests
2. Add test cases to `example.spec.ts` for app functionality
3. Follow the existing test patterns
4. Use descriptive test names
5. Include assertions for both visual and functional aspects
