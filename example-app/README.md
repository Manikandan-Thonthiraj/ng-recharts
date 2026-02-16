# Ng-Recharts Example Application

This is an example Angular application demonstrating how to use `ng-recharts` in your projects.

## Features

This example app includes demonstrations of:

- ✅ **Line Chart** - Multiple data series with different colors
- ✅ **Bar Chart** - Comparing categories with grouped bars
- ✅ **Pie Chart** - Showing data distribution
- ✅ **Area Chart** - Cumulative data visualization
- ✅ **Composed Chart** - Combining bars and lines

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Angular CLI 18+

## Installation

1. Navigate to the example app directory:
```bash
cd example-app
```

2. Install dependencies:
```bash
npm install
```

**Note**: The `ng-recharts` package is linked from the parent directory using `file:..` in package.json. Make sure you've built the parent package first:

```bash
cd ..
npm run build
cd example-app
npm install
```

## Running the Example

Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:4200`

## Project Structure

```
example-app/
├── src/
│   ├── app/
│   │   ├── components/          # Example chart components
│   │   │   ├── home.component.ts
│   │   │   ├── line-chart-example.component.ts
│   │   │   ├── bar-chart-example.component.ts
│   │   │   ├── pie-chart-example.component.ts
│   │   │   ├── area-chart-example.component.ts
│   │   │   └── composed-chart-example.component.ts
│   │   ├── app.component.ts      # Main app component
│   │   └── app.routes.ts         # Routing configuration
│   ├── index.html
│   ├── main.ts                   # Bootstrap
│   └── styles.css                # Global styles
├── angular.json                  # Angular configuration
├── package.json                  # Dependencies
└── tsconfig.json                 # TypeScript configuration
```

## Usage Examples

Each example component demonstrates:

1. **Importing the component** - How to import ng-recharts components
2. **Data structure** - Example data format
3. **Configuration** - How to configure charts
4. **Code snippets** - Copy-paste ready code examples

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/ng-recharts-example` directory.

## E2E Testing

The example app includes end-to-end tests using Playwright:

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run e2e tests
npm run e2e

# Run in UI mode (interactive)
npm run e2e:ui

# Run in headed mode (see browser)
npm run e2e:headed
```

See [e2e/README.md](./e2e/README.md) for more details.

## Learn More

- See the main [README.md](../README.md) for ng-recharts documentation
- Check [USAGE.md](../USAGE.md) for detailed usage examples
- Visit [COMPATIBILITY.md](../COMPATIBILITY.md) for version compatibility
