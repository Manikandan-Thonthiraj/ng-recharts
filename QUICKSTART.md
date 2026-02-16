# Quick Start Guide

## Requirements

- **Angular 14.0.0 or higher**
- Node.js 18+ recommended

## Installation

```bash
npm install ng-recharts recharts react react-dom react-is
```

## Basic Usage

### 1. Import the Component

For Angular 14+ (Standalone):

```typescript
import { Component } from '@angular/core';
import { NgRechartsLineChartComponent, LineChartConfig } from 'ng-recharts';

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
}
```

### 2. Using NgModule (Angular 14+)

```typescript
import { NgModule } from '@angular/core';
import { NgRechartsModule } from 'ng-recharts';

@NgModule({
  imports: [NgRechartsModule],
  // ...
})
export class AppModule {}
```

Then use in your component:

```html
<ng-recharts-line-chart
  [width]="400"
  [height]="300"
  [data]="chartData"
  [config]="chartConfig">
</ng-recharts-line-chart>
```

## Available Chart Types

- `ng-recharts-line-chart` - Line charts
- `ng-recharts-bar-chart` - Bar charts
- `ng-recharts-pie-chart` - Pie charts
- `ng-recharts-area-chart` - Area charts
- `ng-recharts-composed-chart` - Combined charts

## Configuration

Each chart accepts a `config` object that maps to Recharts component props. See `USAGE.md` for detailed examples.

## Angular Version Support

This package requires **Angular 14.0.0 or higher**. It fully supports:
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

MIT - This package wraps Recharts (also MIT licensed).
