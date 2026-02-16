import { Component } from '@angular/core';
import { NgRechartsPieChartComponent, PieChartConfig } from 'ng-recharts';

@Component({
  selector: 'app-pie-chart-example',
  standalone: true,
  imports: [NgRechartsPieChartComponent],
  template: `
    <div class="chart-container">
      <h2>Pie Chart Example</h2>
      <p>This example demonstrates a pie chart showing data distribution.</p>
      
      <div class="chart-title">Market Share Distribution</div>
      <ng-recharts-pie-chart
        [width]="600"
        [height]="400"
        [data]="data"
        [config]="config">
      </ng-recharts-pie-chart>

      <h3>Code Example:</h3>
      <pre style="background: #f4f4f4; padding: 15px; border-radius: 4px; overflow-x: auto;"><code>{{ codeExample }}</code></pre>
    </div>
  `,
  styles: []
})
export class PieChartExampleComponent {
  data = [
    { name: 'Product A', value: 400 },
    { name: 'Product B', value: 300 },
    { name: 'Product C', value: 300 },
    { name: 'Product D', value: 200 },
    { name: 'Product E', value: 150 },
  ];

  config: PieChartConfig = {
    tooltip: {},
    legend: {},
    pie: {
      dataKey: 'value',
      cx: '50%',
      cy: '50%',
      outerRadius: 120,
      label: true
    },
    cells: [
      { fill: '#8884d8' },
      { fill: '#83a6ed' },
      { fill: '#8dd1e1' },
      { fill: '#82ca9d' },
      { fill: '#a4de6c' }
    ]
  };

  codeExample = `import { NgRechartsPieChartComponent, PieChartConfig } from 'ng-recharts';

config: PieChartConfig = {
  tooltip: {},
  legend: {},
  pie: {
    dataKey: 'value',
    cx: '50%',
    cy: '50%',
    outerRadius: 120,
    label: true
  },
  cells: [
    { fill: '#8884d8' },
    { fill: '#83a6ed' },
    { fill: '#8dd1e1' }
  ]
};`;
}
