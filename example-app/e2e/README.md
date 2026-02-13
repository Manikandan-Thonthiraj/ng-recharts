# Example App E2E Tests

End-to-end tests for the ng-recharts example application.

## Running Tests

```bash
# Install Playwright browsers (first time)
npx playwright install

# Run all tests
npm run e2e

# Run in UI mode
npm run e2e:ui

# Run in headed mode
npm run e2e:headed
```

## Test Coverage

- Application loading and initialization
- Navigation between chart pages
- Chart component rendering
- SVG rendering verification
- Code examples display
- Responsive layout testing

## Configuration

Tests use the `playwright.config.ts` in this directory, which:
- Starts the dev server automatically
- Tests on Chromium, Firefox, and WebKit
- Captures screenshots on failure
- Generates HTML reports
