import { Component } from '@angular/core';
import { NgRechartsAreaChartComponent, AreaChartConfig } from 'ng-recharts';

@Component({
  selector: 'app-area-chart-example',
  standalone: true,
  imports: [NgRechartsAreaChartComponent],
  template: `
    <div class="chart-container">
      <h2>Area Chart Example</h2>
      <p>This example demonstrates an area chart showing cumulative data over time.</p>
      
      <div class="chart-title">Website Traffic Over Time</div>
      <ng-recharts-area-chart
        [width]="800"
        [height]="400"
        [data]="data"
        [config]="config">
      </ng-recharts-area-chart>

      <h3>Code Example:</h3>
      <pre style="background: #f4f4f4; padding: 15px; border-radius: 4px; overflow-x: auto;"><code>{{ codeExample }}</code></pre>
    </div>
  `,
  styles: []
})
export class AreaChartExampleComponent {
  data = [
    { name: 'Mon', visitors: 4000, pageViews: 2400 },
    { name: 'Tue', visitors: 3000, pageViews: 1398 },
    { name: 'Wed', visitors: 2000, pageViews: 9800 },
    { name: 'Thu', visitors: 2780, pageViews: 3908 },
    { name: 'Fri', visitors: 1890, pageViews: 4800 },
    { name: 'Sat', visitors: 2390, pageViews: 3800 },
    { name: 'Sun', visitors: 3490, pageViews: 4300 },
  ];

  config: AreaChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: {},
    tooltip: {},
    legend: {},
    areas: [
      { type: 'monotone', dataKey: 'visitors', stroke: '#8884d8', fill: '#8884d8', fillOpacity: 0.6, name: 'Visitors' },
      { type: 'monotone', dataKey: 'pageViews', stroke: '#82ca9d', fill: '#82ca9d', fillOpacity: 0.6, name: 'Page Views' }
    ]
  };

  codeExample = `import { NgRechartsAreaChartComponent, AreaChartConfig } from 'ng-recharts';

config: AreaChartConfig = {
  cartesianGrid: { strokeDasharray: '3 3' },
  xAxis: { dataKey: 'name' },
  yAxis: {},
  tooltip: {},
  legend: {},
  areas: [
    { 
      type: 'monotone', 
      dataKey: 'visitors', 
      stroke: '#8884d8', 
      fill: '#8884d8',
      fillOpacity: 0.6 
    }
  ]
};`;
}
