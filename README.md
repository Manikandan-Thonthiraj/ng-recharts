# ng-recharts

**The Ultimate Angular Wrapper for Recharts.**

Bring the power, flexibility, and beauty of [Recharts](https://recharts.org/) to your Angular applications. `ng-recharts` provides a seamless, lightweight, and type-safe wrapper around Recharts, allowing you to use React's most popular charting library directly within your Angular templates.

## 🚀 Key Features

- **Component-Based**: Use charts as standard Angular components (e.g., `<ng-recharts-line-chart>`).
- **Type-Safe**: Full TypeScript support for chart configurations.
- **Responsive**: Built-in responsive containers that adapt to parent dimensions.
- **Standalone**: Fully compatible with Angular's standalone components.
- **Lightweight**: Zero bloat, just a thin wrapper around Recharts.
- **No React Knowledge Required**: Write Angular code, get React charts.

## 📦 Installation

```bash
npm install ng-recharts recharts react react-dom react-is
```

## Example Application

A complete example application is included in the `example-app` directory. To run it:

```bash
cd example-app
npm install
npm start
```

The example app demonstrates all chart types with working code examples. See [example-app/README.md](./example-app/README.md) for details.

## Requirements

**Angular Version**: This package requires **Angular 14.0.0 or higher**.

## Peer Dependencies

This package requires the following peer dependencies:

- `@angular/common` ^14.0.0 || ^15.0.0 || ^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^20.0.0 || ^21.0.0
- `@angular/core` ^14.0.0 || ^15.0.0 || ^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^20.0.0 || ^21.0.0
- `recharts` ^2.0.0 || ^3.0.0
- `react` ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
- `react-dom` ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
- `react-is` ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0

## Angular Version Compatibility

This package is designed and tested for **Angular 14+** projects. It fully supports:

- ✅ **Angular 14** - Standalone components, modern build system
- ✅ **Angular 15** - All Angular 14 features plus improvements
- ✅ **Angular 16** - Signals support (when used in your app)
- ✅ **Angular 17** - New control flow syntax compatible
- ✅ **Angular 18** - Latest Angular features
- ✅ **Angular 19** - Enhanced features support
- ✅ **Angular 20** - Latest improvements
- ✅ **Angular 21** - Latest version support

### Standalone Components (Recommended)

All components are **standalone** and can be imported directly in Angular 14+ projects without requiring a module.

## Usage

### Import Standalone Components (Angular 14+ - Recommended)

```typescript
import { NgRechartsLineChartComponent } from 'ng-recharts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgRechartsLineChartComponent],
  template: `
    <ng-recharts-line-chart
      [width]="400"
      [height]="300"
      [data]="chartData"
      [config]="chartConfig">
    </ng-recharts-line-chart>
  `
})
export class ChartComponent {
  chartData = [
    { name: 'Page A', uv: 400, pv: 2400 },
    { name: 'Page B', uv: 300, pv: 1398 },
    { name: 'Page C', uv: 200, pv: 9800 },
  ];

  chartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: {},
    tooltip: {},
    legend: {},
    lines: [
      { type: 'monotone', dataKey: 'pv', stroke: '#8884d8' },
      { type: 'monotone', dataKey: 'uv', stroke: '#82ca9d' }
    ]
  };
}
```

## Available Components

### LineChart

```typescript
import { NgRechartsLineChartComponent, LineChartConfig } from 'ng-recharts';

chartConfig: LineChartConfig = {
  cartesianGrid: { strokeDasharray: '3 3' },
  xAxis: { dataKey: 'name' },
  yAxis: {},
  tooltip: {},
  legend: {},
  lines: [
    { type: 'monotone', dataKey: 'pv', stroke: '#8884d8' }
  ]
};
```

### BarChart

```typescript
import { NgRechartsBarChartComponent, BarChartConfig } from 'ng-recharts';

chartConfig: BarChartConfig = {
  cartesianGrid: { strokeDasharray: '3 3' },
  xAxis: { dataKey: 'name' },
  yAxis: {},
  tooltip: {},
  legend: {},
  bars: [
    { dataKey: 'pv', fill: '#8884d8' }
  ]
};
```

### PieChart

```typescript
import { NgRechartsPieChartComponent, PieChartConfig } from 'ng-recharts';

chartConfig: PieChartConfig = {
  tooltip: {},
  legend: {},
  pie: {
    dataKey: 'value',
    cx: '50%',
    cy: '50%',
    outerRadius: 80
  },
  cells: [
    { fill: '#8884d8' },
    { fill: '#83a6ed' },
    { fill: '#8dd1e1' }
  ]
};
```

### AreaChart

```typescript
import { NgRechartsAreaChartComponent, AreaChartConfig } from 'ng-recharts';

chartConfig: AreaChartConfig = {
  cartesianGrid: { strokeDasharray: '3 3' },
  xAxis: { dataKey: 'name' },
  yAxis: {},
  tooltip: {},
  legend: {},
  areas: [
    { type: 'monotone', dataKey: 'uv', stroke: '#8884d8', fill: '#8884d8' }
  ]
};
```

### ComposedChart

```typescript
import { NgRechartsComposedChartComponent, ComposedChartConfig } from 'ng-recharts';

chartConfig: ComposedChartConfig = {
  cartesianGrid: { strokeDasharray: '3 3' },
  xAxis: { dataKey: 'name' },
  yAxis: {},
  tooltip: {},
  legend: {},
  lines: [
    { type: 'monotone', dataKey: 'uv', stroke: '#8884d8' }
  ],
  bars: [
    { dataKey: 'pv', fill: '#82ca9d' }
  ]
};
```

## Configuration

All chart components accept a `config` object that maps to Recharts component props. The configuration structure follows the Recharts component hierarchy:

- `cartesianGrid` → `CartesianGrid` props
- `xAxis` → `XAxis` props
- `yAxis` → `YAxis` props
- `tooltip` → `Tooltip` props
- `legend` → `Legend` props
- `lines` → Array of `Line` props
- `bars` → Array of `Bar` props
- `areas` → Array of `Area` props
- `pie` → `Pie` props
- `cells` → Array of `Cell` props (for PieChart)

## Angular Version Support

This package requires **Angular 14.0.0 or higher** and supports:
- Angular 14.x ✅
- Angular 15.x ✅
- Angular 16.x ✅
- Angular 17.x ✅
- Angular 18.x ✅
- Angular 19.x ✅
- Angular 20.x ✅
- Angular 21.x ✅ (Latest)

See [COMPATIBILITY.md](./COMPATIBILITY.md) for detailed compatibility information.

## License

MIT

This package wraps Recharts, which is also licensed under MIT. See the [Recharts license](https://github.com/recharts/recharts/blob/main/LICENSE) for details.

## Testing

### Unit Tests
```bash
npm test
```

### E2E Tests
End-to-end tests are available using Playwright:

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

The e2e tests verify that all chart components render correctly in the example app. See [e2e/README.md](./e2e/README.md) for details.

## Credits

This package is a wrapper around [Recharts](https://github.com/recharts/recharts), created to bring Recharts functionality to Angular 14+ applications.
