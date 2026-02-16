import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="chart-container">
      <h2>Welcome to Ng-Recharts Examples</h2>
      <p>This example application demonstrates how to use ng-recharts in your Angular 14+ projects.</p>
      
      <h3>Available Chart Examples:</h3>
      <ul style="margin-left: 20px; margin-top: 10px;">
        <li><strong>Line Chart</strong> - Display trends over time</li>
        <li><strong>Bar Chart</strong> - Compare categories</li>
        <li><strong>Pie Chart</strong> - Show proportions</li>
        <li><strong>Area Chart</strong> - Display cumulative data</li>
        <li><strong>Composed Chart</strong> - Combine multiple chart types</li>
        <li><strong>Radar Chart</strong> - Show multi-dimensional data</li>
      </ul>

      <h3>Getting Started:</h3>
      <pre style="background: #f4f4f4; padding: 15px; border-radius: 4px; overflow-x: auto;"><code>npm install ng-recharts recharts react react-dom react-is

import {{ '{' }} NgRechartsLineChartComponent {{ '}' }} from 'ng-recharts';

&#64;Component({{ '{' }}
  standalone: true,
  imports: [NgRechartsLineChartComponent],
  template: '&lt;ng-recharts-line-chart [data]="data" [config]="config"&gt;&lt;/ng-recharts-line-chart&gt;'
{{ '}' }})</code></pre>
    </div>
  `,
  styles: []
})
export class HomeComponent {}
