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

## 📖 Usage Guide

`ng-recharts` is designed to be intuitive for Angular developers while offering the full power of Recharts.

### 1. Import Standalone Components

Import the specific chart component you need into your Angular component.

```typescript
import { Component } from '@angular/core';
import { NgRechartsLineChartComponent, LineChartConfig } from 'ng-recharts';

@Component({
  selector: 'app-my-chart',
  standalone: true,
  imports: [NgRechartsLineChartComponent],
  template: `
    <ng-recharts-line-chart
      [width]="500"
      [height]="300"
      [data]="data"
      [config]="config"
      (chartClick)="onChartClick($event)"
      (lineClick)="onLineClick($event)">
    </ng-recharts-line-chart>
  `
})
export class MyChartComponent {
  data = [
    { name: 'Jan', uv: 400, pv: 2400 },
    { name: 'Feb', uv: 300, pv: 1398 },
    { name: 'Mar', uv: 200, pv: 9800 },
  ];

  config: LineChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: {},
    tooltip: { trigger: 'hover' },
    legend: {},
    lines: [
      { type: 'monotone', dataKey: 'pv', stroke: '#8884d8', strokeWidth: 2 },
      { type: 'monotone', dataKey: 'uv', stroke: '#82ca9d' }
    ]
  };

  onChartClick(event: any) {
    console.log('Chart clicked:', event);
  }

  onLineClick(event: any) {
    console.log('Line clicked:', event);
  }
}
```

## 📚 API Reference

### Common Inputs

All chart components accept the following input properties:

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `width` | `number` | `500` | Width of the chart in pixels. |
| `height` | `number` | `300` | Height of the chart in pixels. |
| `data` | `any[]` | `[]` | Array of data objects to visualize. |
| `margin` | `ChartMargin` | `undefined` | Margin around the chart (`{ top, right, bottom, left }`). |
| `config` | `ChartConfig` | `undefined` | Configuration object for chart elements (axes, grid, tooltip, etc.). |

### Common Outputs (Events)

| Output | Event Payload | Description |
|--------|---------------|-------------|
| `chartClick` | `{ data, index, type: 'chart' }` | Emitted when the chart background is clicked. |
| `lineClick` | `{ data, index, type: 'line', config }` | Emitted when a line element is clicked. |
| `barClick` | `{ data, index, type: 'bar', config }` | Emitted when a bar element is clicked. |
| `areaClick` | `{ data, index, type: 'area', config }` | Emitted when an area element is clicked. |
| `cellClick` | `{ data, index, type: 'cell', config }` | Emitted when a specific cell (e.g., inside Pie) is clicked. |
| `radarClick` | `{ data, index, type: 'radar', config }` | Emitted when a radar element is clicked. |

## 🛠️ Configuration Object

The `config` input is the heart of `ng-recharts`. It allows you to define the structure and styling of your chart. It roughly maps to the Recharts component structure.

### Structure

```typescript
interface ChartConfig {
  cartesianGrid?: CartesianGridConfig; // Grid lines
  xAxis?: AxisConfig;                  // X-Axis configuration
  yAxis?: AxisConfig;                  // Y-Axis configuration
  tooltip?: TooltipConfig;             // Tooltip on hover
  legend?: LegendConfig;               // Chart legend
  // Component specific:
  lines?: LineConfig[];                // for LineChart
  bars?: BarConfig[];                  // for BarChart
  areas?: AreaConfig[];                // for AreaChart
  pie?: PieConfig;                     // for PieChart
  // ... and others
}
```

### Detailed Configuration Examples

#### Axes (`xAxis`, `yAxis`)
```typescript
xAxis: {
  dataKey: 'name',      // Key in data object
  type: 'category',     // 'number' | 'category'
  orientation: 'bottom',
  tick: { fill: 'red' } // Custom tick styles
}
```

#### Tooltip (`tooltip`)
```typescript
tooltip: {
  trigger: 'hover',     // 'hover' | 'click'
  formatter: (value) => [`$${value}`, 'Amount'],
  contentStyle: { backgroundColor: '#333', color: '#fff' } // Custom styles
}
```
*Note: To disable tooltip, set `tooltip: false` or `tooltip: null`.*

#### Grid (`cartesianGrid`)
```typescript
cartesianGrid: {
  strokeDasharray: '3 3',
  stroke: '#ccc'
}
```

## 📦 Available Components

### `NgRechartsResponsiveContainerComponent`
Wraps a chart to make it responsive to its parent container's dimensions.

**Inputs:**
- `width` (number | string): Percentage (e.g., '100%') or pixels. Default '100%'.
- `height` (number | string): Percentage or pixels. Default '100%'.
- `minHeight` (number): Minimum height in pixels. Default `200`.
- `aspect` (number): Width / Height ratio.

**Usage:**
```html
<div style="width: 100%; height: 400px;">
  <ng-recharts-responsive-container>
    <ng-recharts-line-chart [data]="data" [config]="config"></ng-recharts-line-chart>
  </ng-recharts-responsive-container>
</div>
```

### Chart Components
- `<ng-recharts-line-chart>`
- `<ng-recharts-bar-chart>`
- `<ng-recharts-area-chart>`
- `<ng-recharts-pie-chart>`
- `<ng-recharts-composed-chart>`
- `<ng-recharts-scatter-chart>`
- `<ng-recharts-radar-chart>`
- `<ng-recharts-radial-bar-chart>`
- `<ng-recharts-treemap-chart>`

## 🎨 Styling & Customization

Recharts relies heavily on SVG properties. You can pass standard SVG styles like `stroke`, `fill`, `strokeWidth`, `opacity` directly in the configuration objects for lines, bars, areas, etc.

**Example: Custom styled Line**
```typescript
lines: [
  {
    type: 'natural',
    dataKey: 'uv',
    stroke: '#FF0000',
    strokeWidth: 4,
    dot: { stroke: 'blue', strokeWidth: 2 }
  }
]
```

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

## Credits

This package is a wrapper around [Recharts](https://github.com/recharts/recharts), created to bring Recharts functionality to Angular 14+ applications.
