# Usage Examples

## Basic Line Chart

```typescript
import { Component } from '@angular/core';
import { NgRechartsLineChartComponent, LineChartConfig } from 'ng-recharts';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgRechartsLineChartComponent],
  template: `
    <ng-recharts-line-chart
      [width]="400"
      [height]="300"
      [data]="data"
      [config]="config">
    </ng-recharts-line-chart>
  `
})
export class LineChartComponent {
  data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  config: LineChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: {},
    tooltip: {},
    legend: {},
    lines: [
      { type: 'monotone', dataKey: 'pv', stroke: '#8884d8', name: 'Page Views' },
      { type: 'monotone', dataKey: 'uv', stroke: '#82ca9d', name: 'Unique Visitors' }
    ]
  };
}
```

## Bar Chart

```typescript
import { Component } from '@angular/core';
import { NgRechartsBarChartComponent, BarChartConfig } from 'ng-recharts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgRechartsBarChartComponent],
  template: `
    <ng-recharts-bar-chart
      [width]="500"
      [height]="300"
      [data]="data"
      [config]="config">
    </ng-recharts-bar-chart>
  `
})
export class BarChartComponent {
  data = [
    { name: 'Page A', uv: 4000, pv: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398 },
    { name: 'Page C', uv: 2000, pv: 9800 },
  ];

  config: BarChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: {},
    tooltip: {},
    legend: {},
    bars: [
      { dataKey: 'pv', fill: '#8884d8', name: 'Page Views' },
      { dataKey: 'uv', fill: '#82ca9d', name: 'Unique Visitors' }
    ]
  };
}
```

## Pie Chart

```typescript
import { Component } from '@angular/core';
import { NgRechartsPieChartComponent, PieChartConfig } from 'ng-recharts';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [NgRechartsPieChartComponent],
  template: `
    <ng-recharts-pie-chart
      [width]="400"
      [height]="400"
      [data]="data"
      [config]="config">
    </ng-recharts-pie-chart>
  `
})
export class PieChartComponent {
  data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  config: PieChartConfig = {
    tooltip: {},
    legend: {},
    pie: {
      dataKey: 'value',
      cx: '50%',
      cy: '50%',
      outerRadius: 80,
      label: true
    },
    cells: [
      { fill: '#8884d8' },
      { fill: '#83a6ed' },
      { fill: '#8dd1e1' },
      { fill: '#82ca9d' }
    ]
  };
}
```

## Using with NgModule (Angular 14+)

If you prefer using NgModule approach in Angular 14+ projects:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgRechartsModule } from 'ng-recharts';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgRechartsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**Note**: Standalone components are recommended for Angular 14+ projects.

## Responsive Charts

For responsive charts, you can use CSS or Angular's responsive features:

```typescript
@Component({
  template: `
    <div style="width: 100%; height: 400px;">
      <ng-recharts-line-chart
        [width]="chartWidth"
        [height]="400"
        [data]="data"
        [config]="config">
      </ng-recharts-line-chart>
    </div>
  `
})
export class ResponsiveChartComponent {
  chartWidth = window.innerWidth * 0.9; // Adjust based on container

  // Or use HostListener for window resize
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.chartWidth = window.innerWidth * 0.9;
  }
}
```
