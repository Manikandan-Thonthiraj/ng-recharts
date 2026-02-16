import { Component } from '@angular/core';
import { NgRechartsComposedChartComponent, ComposedChartConfig } from 'ng-recharts';

@Component({
  selector: 'app-composed-chart-example',
  standalone: true,
  imports: [NgRechartsComposedChartComponent],
  template: `
    <div class="chart-container">
      <h2>Composed Chart Example</h2>
      <p>This example demonstrates a composed chart combining bars and lines.</p>
      
      <div class="chart-title">Sales and Revenue Comparison</div>
      <ng-recharts-composed-chart
        [width]="800"
        [height]="400"
        [data]="data"
        [config]="config">
      </ng-recharts-composed-chart>

      <h3>Code Example:</h3>
      <pre style="background: #f4f4f4; padding: 15px; border-radius: 4px; overflow-x: auto;"><code>{{ codeExample }}</code></pre>
    </div>
  `,
  styles: []
})
export class ComposedChartExampleComponent {
  data = [
    { name: 'Jan', sales: 4000, revenue: 2400, target: 3500 },
    { name: 'Feb', sales: 3000, revenue: 1398, target: 3500 },
    { name: 'Mar', sales: 2000, revenue: 9800, target: 3500 },
    { name: 'Apr', sales: 2780, revenue: 3908, target: 3500 },
    { name: 'May', sales: 1890, revenue: 4800, target: 3500 },
    { name: 'Jun', sales: 2390, revenue: 3800, target: 3500 },
  ];

  config: ComposedChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: {},
    tooltip: {},
    legend: {},
    bars: [
      { dataKey: 'sales', fill: '#8884d8', name: 'Sales' },
      { dataKey: 'revenue', fill: '#82ca9d', name: 'Revenue' }
    ],
    lines: [
      { type: 'monotone', dataKey: 'target', stroke: '#ff7300', strokeWidth: 2, name: 'Target', strokeDasharray: '5 5' }
    ]
  };

  codeExample = `import { NgRechartsComposedChartComponent, ComposedChartConfig } from 'ng-recharts';

config: ComposedChartConfig = {
  cartesianGrid: { strokeDasharray: '3 3' },
  xAxis: { dataKey: 'name' },
  yAxis: {},
  tooltip: {},
  legend: {},
  bars: [
    { dataKey: 'sales', fill: '#8884d8', name: 'Sales' }
  ],
  lines: [
    { type: 'monotone', dataKey: 'target', stroke: '#ff7300', name: 'Target' }
  ]
};`;
}
