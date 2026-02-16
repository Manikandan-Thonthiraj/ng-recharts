import { Component } from '@angular/core';
import { NgRechartsRadarChartComponent, RadarChartConfig } from 'ng-recharts';

@Component({
  selector: 'app-radar-chart-example',
  standalone: true,
  imports: [NgRechartsRadarChartComponent],
  template: `
    <div class="chart-container">
      <h2>Radar Chart Example</h2>
      <p>This example demonstrates a radar chart showing multiple data dimensions.</p>
      
      <div class="chart-title">Performance Metrics</div>
      <ng-recharts-radar-chart
        [width]="600"
        [height]="400"
        [data]="data"
        [config]="config">
      </ng-recharts-radar-chart>

      <h3>Code Example:</h3>
      <pre style="background: #f4f4f4; padding: 15px; border-radius: 4px; overflow-x: auto;"><code>{{ codeExample }}</code></pre>
    </div>
  `,
  styles: []
})
export class RadarChartExampleComponent {
  data = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
    { subject: 'English', A: 86, B: 130, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
    { subject: 'History', A: 65, B: 85, fullMark: 150 },
  ];

  config: RadarChartConfig = {
    polarGrid: {},
    polarAngleAxis: { dataKey: 'subject' },
    polarRadiusAxis: { angle: 90, domain: [0, 150] },
    tooltip: {
      cursor: { stroke: '#8884d8', strokeWidth: 1 },
      contentStyle: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }
    },
    legend: {},
    radars: [
      { 
        name: 'Student A', 
        dataKey: 'A', 
        stroke: '#8884d8', 
        fill: '#8884d8', 
        fillOpacity: 0.6 
      },
      { 
        name: 'Student B', 
        dataKey: 'B', 
        stroke: '#82ca9d', 
        fill: '#82ca9d', 
        fillOpacity: 0.6 
      }
    ]
  };

  codeExample = `import { NgRechartsRadarChartComponent, RadarChartConfig } from 'ng-recharts';

config: RadarChartConfig = {
  polarGrid: {},
  polarAngleAxis: { dataKey: 'subject' },
  polarRadiusAxis: { angle: 90, domain: [0, 150] },
  tooltip: {
    cursor: { stroke: '#8884d8', strokeWidth: 1 }
  },
  legend: {},
  radars: [
    { 
      name: 'Student A', 
      dataKey: 'A', 
      stroke: '#8884d8', 
      fill: '#8884d8', 
      fillOpacity: 0.6 
    }
  ]
};`;
}
