import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  NgRechartsLineChartComponent, 
  NgRechartsBarChartComponent, 
  NgRechartsPieChartComponent,
  NgRechartsAreaChartComponent,
  NgRechartsComposedChartComponent,
  NgRechartsRadarChartComponent,
  LineChartConfig,
  BarChartConfig,
  PieChartConfig,
  AreaChartConfig,
  ComposedChartConfig,
  RadarChartConfig
} from 'ng-recharts';

@Component({
  selector: 'app-multi-chart-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    NgRechartsLineChartComponent,
    NgRechartsBarChartComponent,
    NgRechartsPieChartComponent,
    NgRechartsAreaChartComponent,
    NgRechartsComposedChartComponent,
    NgRechartsRadarChartComponent
  ],
  template: `
    <div class="dashboard-container">
      <h1>Multi-Chart Dashboard</h1>
      <p>This dashboard demonstrates multiple chart types with responsive containers and click events.</p>
      
      <div class="click-info" *ngIf="lastClickEvent">
        <strong>Last Click:</strong> {{ lastClickEvent.type }} - Index: {{ lastClickEvent.index }}
        <pre>{{ lastClickEvent | json }}</pre>
      </div>

      <div class="charts-grid">
        <!-- Line Chart with Responsive Container -->
        <div class="chart-card">
          <h3>Sales Trend (Responsive)</h3>
          <div style="width: 100%; height: 300px;">
            <ng-recharts-line-chart
              [width]="500"
              [height]="300"
              [data]="salesData"
              [config]="lineConfig"
              (chartClick)="onChartClick($event)"
              (lineClick)="onLineClick($event)">
            </ng-recharts-line-chart>
          </div>
        </div>

        <!-- Bar Chart with Responsive Container -->
        <div class="chart-card">
          <h3>Revenue by Category (Responsive)</h3>
          <div style="width: 100%; height: 300px;">
            <ng-recharts-bar-chart
              [width]="500"
              [height]="300"
              [data]="revenueData"
              [config]="barConfig"
              (barClick)="onBarClick($event)">
            </ng-recharts-bar-chart>
          </div>
        </div>

        <!-- Pie Chart -->
        <div class="chart-card">
          <h3>Market Share</h3>
          <div style="width: 100%; height: 300px;">
            <ng-recharts-pie-chart
              [width]="400"
              [height]="300"
              [data]="marketShareData"
              [config]="pieConfig"
              (cellClick)="onCellClick($event)">
            </ng-recharts-pie-chart>
          </div>
        </div>

        <!-- Area Chart -->
        <div class="chart-card">
          <h3>Growth Over Time</h3>
          <div style="width: 100%; height: 300px;">
            <ng-recharts-area-chart
              [width]="500"
              [height]="300"
              [data]="growthData"
              [config]="areaConfig"
              (areaClick)="onAreaClick($event)">
            </ng-recharts-area-chart>
          </div>
        </div>

        <!-- Composed Chart -->
        <div class="chart-card full-width">
          <h3>Sales & Profit Analysis</h3>
          <div style="width: 100%; height: 400px;">
            <ng-recharts-composed-chart
              [width]="800"
              [height]="400"
              [data]="composedData"
              [config]="composedConfig"
              (barClick)="onBarClick($event)"
              (lineClick)="onLineClick($event)">
            </ng-recharts-composed-chart>
          </div>
        </div>

        <!-- Radar Chart -->
        <div class="chart-card">
          <h3>Performance Metrics</h3>
          <div style="width: 100%; height: 300px;">
            <ng-recharts-radar-chart
              [width]="500"
              [height]="300"
              [data]="performanceData"
              [config]="radarConfig"
              (radarClick)="onRadarClick($event)">
            </ng-recharts-radar-chart>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 20px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .click-info {
      background: #f0f0f0;
      padding: 15px;
      border-radius: 4px;
      margin-bottom: 20px;
      border-left: 4px solid #8884d8;
    }

    .click-info pre {
      margin-top: 10px;
      background: white;
      padding: 10px;
      border-radius: 4px;
      overflow-x: auto;
    }

    .charts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .chart-card {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .chart-card.full-width {
      grid-column: 1 / -1;
    }

    .chart-card h3 {
      margin-top: 0;
      color: #333;
    }

    @media (max-width: 768px) {
      .charts-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class MultiChartDashboardComponent {
  lastClickEvent: any = null;

  // Sales Trend Data
  salesData = [
    { month: 'Jan', sales: 4000, profit: 2400 },
    { month: 'Feb', sales: 3000, profit: 1398 },
    { month: 'Mar', sales: 5000, profit: 2800 },
    { month: 'Apr', sales: 2780, profit: 1908 },
    { month: 'May', sales: 1890, profit: 1200 },
    { month: 'Jun', sales: 2390, profit: 1500 }
  ];

  lineConfig: LineChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'month' },
    yAxis: {},
    tooltip: {},
    legend: {},
    lines: [
      { dataKey: 'sales', stroke: '#8884d8', strokeWidth: 2 },
      { dataKey: 'profit', stroke: '#82ca9d', strokeWidth: 2 }
    ]
  };

  // Revenue Data
  revenueData = [
    { category: 'Electronics', revenue: 4000 },
    { category: 'Clothing', revenue: 3000 },
    { category: 'Food', revenue: 2000 },
    { category: 'Books', revenue: 2780 },
    { category: 'Toys', revenue: 1890 }
  ];

  barConfig: BarChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'category' },
    yAxis: {},
    tooltip: {},
    legend: {},
    bars: [
      { dataKey: 'revenue', fill: '#8884d8' }
    ]
  };

  // Market Share Data
  marketShareData = [
    { name: 'Product A', value: 400 },
    { name: 'Product B', value: 300 },
    { name: 'Product C', value: 200 },
    { name: 'Product D', value: 100 }
  ];

  pieConfig: PieChartConfig = {
    tooltip: {},
    legend: {},
    pie: {
      dataKey: 'value',
      nameKey: 'name',
      cx: '50%',
      cy: '50%',
      outerRadius: 80
    },
    cells: [
      { fill: '#8884d8' },
      { fill: '#82ca9d' },
      { fill: '#ffc658' },
      { fill: '#ff7300' }
    ]
  };

  // Growth Data
  growthData = [
    { quarter: 'Q1', growth: 4000 },
    { quarter: 'Q2', growth: 3000 },
    { quarter: 'Q3', growth: 5000 },
    { quarter: 'Q4', growth: 4500 }
  ];

  areaConfig: AreaChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'quarter' },
    yAxis: {},
    tooltip: {},
    legend: {},
    areas: [
      { dataKey: 'growth', stroke: '#8884d8', fill: '#8884d8', fillOpacity: 0.6 }
    ]
  };

  // Composed Data
  composedData = [
    { month: 'Jan', sales: 4000, profit: 2400, target: 3500 },
    { month: 'Feb', sales: 3000, profit: 1398, target: 3500 },
    { month: 'Mar', sales: 5000, profit: 2800, target: 3500 },
    { month: 'Apr', sales: 2780, profit: 1908, target: 3500 }
  ];

  composedConfig: ComposedChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'month' },
    yAxis: {},
    tooltip: {},
    legend: {},
    bars: [
      { dataKey: 'sales', fill: '#8884d8' }
    ],
    lines: [
      { dataKey: 'profit', stroke: '#82ca9d', strokeWidth: 2 },
      { dataKey: 'target', stroke: '#ffc658', strokeWidth: 2, strokeDasharray: '5 5' }
    ]
  };

  // Performance Data
  performanceData = [
    { subject: 'Speed', A: 120, B: 110, fullMark: 150 },
    { subject: 'Quality', A: 98, B: 130, fullMark: 150 },
    { subject: 'Service', A: 86, B: 130, fullMark: 150 },
    { subject: 'Price', A: 99, B: 100, fullMark: 150 },
    { subject: 'Support', A: 85, B: 90, fullMark: 150 }
  ];

  radarConfig: RadarChartConfig = {
    polarGrid: {},
    polarAngleAxis: { dataKey: 'subject' },
    polarRadiusAxis: { angle: 90, domain: [0, 150] },
    tooltip: {},
    legend: {},
    radars: [
      { name: 'Team A', dataKey: 'A', stroke: '#8884d8', fill: '#8884d8', fillOpacity: 0.6 },
      { name: 'Team B', dataKey: 'B', stroke: '#82ca9d', fill: '#82ca9d', fillOpacity: 0.6 }
    ]
  };

  onChartClick(event: any): void {
    this.lastClickEvent = event;
    console.log('Chart clicked:', event);
  }

  onBarClick(event: any): void {
    this.lastClickEvent = event;
    console.log('Bar clicked:', event);
  }

  onLineClick(event: any): void {
    this.lastClickEvent = event;
    console.log('Line clicked:', event);
  }

  onAreaClick(event: any): void {
    this.lastClickEvent = { ...event, message: 'Area clicked!' };
    console.log('Area clicked:', event);
  }

  onCellClick(event: any): void {
    this.lastClickEvent = event;
    console.log('Cell clicked:', event);
  }

  onRadarClick(event: any): void {
    this.lastClickEvent = event;
    console.log('Radar clicked:', event);
  }
}
