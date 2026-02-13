import { Component } from '@angular/core';
import { NgRechartsBarChartComponent, BarChartConfig } from 'ng-recharts';

@Component({
  selector: 'app-bar-chart-example',
  standalone: true,
  imports: [NgRechartsBarChartComponent],
  template: `
    <div class="chart-container">
      <h2>Bar Chart Example</h2>
      <p>This example demonstrates a bar chart comparing different categories.</p>
      
      <div class="chart-title">Product Sales by Category</div>
      <ng-recharts-bar-chart
        [width]="800"
        [height]="400"
        [data]="data"
        [config]="config">
      </ng-recharts-bar-chart>

      <h3>Code Example:</h3>
      <pre style="background: #f4f4f4; padding: 15px; border-radius: 4px; overflow-x: auto;"><code>{{ codeExample }}</code></pre>
    </div>
  `,
  styles: []
})
export class BarChartExampleComponent {
  data = [
    { name: 'Electronics', q1: 4000, q2: 2400, q3: 2400 },
    { name: 'Clothing', q1: 3000, q2: 1398, q3: 2210 },
    { name: 'Food', q1: 2000, q2: 9800, q3: 2290 },
    { name: 'Books', q1: 2780, q2: 3908, q3: 2000 },
    { name: 'Toys', q1: 1890, q2: 4800, q3: 2181 },
  ];

  config: BarChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: {},
    tooltip: {},
    legend: {},
    bars: [
      { dataKey: 'q1', fill: '#8884d8', name: 'Q1' },
      { dataKey: 'q2', fill: '#82ca9d', name: 'Q2' },
      { dataKey: 'q3', fill: '#ffc658', name: 'Q3' }
    ]
  };

  codeExample = `import { NgRechartsBarChartComponent, BarChartConfig } from 'ng-recharts';

config: BarChartConfig = {
  cartesianGrid: { strokeDasharray: '3 3' },
  xAxis: { dataKey: 'name' },
  yAxis: {},
  tooltip: {},
  legend: {},
  bars: [
    { dataKey: 'q1', fill: '#8884d8', name: 'Q1' },
    { dataKey: 'q2', fill: '#82ca9d', name: 'Q2' }
  ]
};`;
}
