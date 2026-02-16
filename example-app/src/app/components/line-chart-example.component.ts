import { Component } from '@angular/core';
import { NgRechartsLineChartComponent, LineChartConfig } from 'ng-recharts';

@Component({
  selector: 'app-line-chart-example',
  standalone: true,
  imports: [NgRechartsLineChartComponent],
  template: `
    <div class="chart-container">
      <h2>Line Chart Example</h2>
      <p>This example demonstrates a line chart with multiple data series.</p>
      
      <div class="chart-title">Monthly Sales Data</div>
      <ng-recharts-line-chart
        [width]="800"
        [height]="400"
        [data]="data"
        [config]="config">
      </ng-recharts-line-chart>

      <h3>Code Example:</h3>
      <pre style="background: #f4f4f4; padding: 15px; border-radius: 4px; overflow-x: auto;"><code>{{ codeExample }}</code></pre>
    </div>
  `,
  styles: []
})
export class LineChartExampleComponent {
  data = [
    { name: 'Jan', sales: 4000, revenue: 2400, profit: 2400 },
    { name: 'Feb', sales: 3000, revenue: 1398, profit: 2210 },
    { name: 'Mar', sales: 2000, revenue: 9800, profit: 2290 },
    { name: 'Apr', sales: 2780, revenue: 3908, profit: 2000 },
    { name: 'May', sales: 1890, revenue: 4800, profit: 2181 },
    { name: 'Jun', sales: 2390, revenue: 3800, profit: 2500 },
    { name: 'Jul', sales: 3490, revenue: 4300, profit: 2100 },
  ];

  config: LineChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: {},
    tooltip: {},
    legend: {},
    lines: [
      { type: 'monotone', dataKey: 'sales', stroke: '#8884d8', name: 'Sales', strokeWidth: 2 },
      { type: 'monotone', dataKey: 'revenue', stroke: '#82ca9d', name: 'Revenue', strokeWidth: 2 },
      { type: 'monotone', dataKey: 'profit', stroke: '#ffc658', name: 'Profit', strokeWidth: 2 }
    ]
  };

  codeExample = `import { NgRechartsLineChartComponent, LineChartConfig } from 'ng-recharts';

@Component({
  standalone: true,
  imports: [NgRechartsLineChartComponent],
  template: \`
    <ng-recharts-line-chart
      [width]="800"
      [height]="400"
      [data]="data"
      [config]="config">
    </ng-recharts-line-chart>
  \`
})
export class MyComponent {
  data = [
    { name: 'Jan', sales: 4000, revenue: 2400 },
    { name: 'Feb', sales: 3000, revenue: 1398 }
  ];

  config: LineChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: {},
    tooltip: {},
    legend: {},
    lines: [
      { type: 'monotone', dataKey: 'sales', stroke: '#8884d8' },
      { type: 'monotone', dataKey: 'revenue', stroke: '#82ca9d' }
    ]
  };
}`;
}
