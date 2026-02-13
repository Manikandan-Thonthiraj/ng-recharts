import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  NgRechartsLineChartComponent, 
  NgRechartsBarChartComponent, 
  NgRechartsPieChartComponent,
  NgRechartsAreaChartComponent,
  NgRechartsComposedChartComponent,
  NgRechartsRadarChartComponent,
  NgRechartsScatterChartComponent,
  NgRechartsRadialBarChartComponent,
  NgRechartsTreeMapChartComponent,
  NgRechartsResponsiveContainerComponent,
  LineChartConfig,
  BarChartConfig,
  PieChartConfig,
  AreaChartConfig,
  ComposedChartConfig,
  RadarChartConfig,
  ScatterChartConfig,
  RadialBarChartConfig,
  TreeMapChartConfig
} from 'ng-recharts';

/**
 * Comprehensive examples component showcasing all Recharts examples
 * Based on https://recharts.github.io/en-US/examples/
 */
@Component({
  selector: 'app-all-examples',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgRechartsResponsiveContainerComponent,
    NgRechartsLineChartComponent,
    NgRechartsBarChartComponent,
    NgRechartsPieChartComponent,
    NgRechartsAreaChartComponent,
    NgRechartsComposedChartComponent,
    NgRechartsRadarChartComponent,
    NgRechartsScatterChartComponent,
    NgRechartsRadialBarChartComponent,
    NgRechartsTreeMapChartComponent
  ],
  template: `
    <div class="all-examples-page">
      <!-- Header with Back Button -->
      <header class="examples-header">
        <div class="header-content">
          <button routerLink="/" class="back-button">
            <svg class="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </button>
          <div class="header-title-section">
            <h1>All Recharts Examples</h1>
            <p>Comprehensive examples based on <a href="https://recharts.github.io/en-US/examples/" target="_blank">Recharts Examples</a></p>
          </div>
        </div>
      </header>

      <div class="examples-container">

      <!-- Line Chart Examples -->
      <section class="examples-section">
        <h2>Line Chart Examples</h2>
        
        <div class="example-card">
          <h3>Simple Line Chart</h3>
          <div class="chart-wrapper">
            <ng-recharts-responsive-container [width]="'100%'" [height]="300">
              <ng-recharts-line-chart
                [data]="simpleLineData"
                [config]="simpleLineConfig">
              </ng-recharts-line-chart>
            </ng-recharts-responsive-container>
          </div>
        </div>

        <div class="example-card">
          <h3>Dashed Line Chart</h3>
          <div class="chart-wrapper">
            <ng-recharts-responsive-container [width]="'100%'" [height]="300">
              <ng-recharts-line-chart
                [data]="simpleLineData"
                [config]="dashedLineConfig">
              </ng-recharts-line-chart>
            </ng-recharts-responsive-container>
          </div>
        </div>

        <div class="example-card">
          <h3>Biaxial Line Chart</h3>
          <div class="chart-wrapper">
            <ng-recharts-responsive-container [width]="'100%'" [height]="300">
              <ng-recharts-line-chart
                [data]="biaxialLineData"
                [config]="biaxialLineConfig">
              </ng-recharts-line-chart>
            </ng-recharts-responsive-container>
          </div>
        </div>
      </section>

      <!-- Bar Chart Examples -->
      <section class="examples-section">
        <h2>Bar Chart Examples</h2>
        
        <div class="example-card">
          <h3>Simple Bar Chart</h3>
          <div class="chart-wrapper">
            <ng-recharts-responsive-container [width]="'100%'" [height]="300">
              <ng-recharts-bar-chart
                [data]="simpleBarData"
                [config]="simpleBarConfig">
              </ng-recharts-bar-chart>
            </ng-recharts-responsive-container>
          </div>
        </div>

        <div class="example-card">
          <h3>Stacked Bar Chart</h3>
          <div class="chart-wrapper">
            <ng-recharts-responsive-container [width]="'100%'" [height]="300">
              <ng-recharts-bar-chart
                [data]="stackedBarData"
                [config]="stackedBarConfig">
              </ng-recharts-bar-chart>
            </ng-recharts-responsive-container>
          </div>
        </div>

        <div class="example-card">
          <h3>Mix Bar Chart</h3>
          <div class="chart-wrapper">
            <ng-recharts-responsive-container [width]="'100%'" [height]="300">
              <ng-recharts-bar-chart
                [data]="mixBarData"
                [config]="mixBarConfig">
              </ng-recharts-bar-chart>
            </ng-recharts-responsive-container>
          </div>
        </div>
      </section>

      <!-- Area Chart Examples -->
      <section class="examples-section">
        <h2>Area Chart Examples</h2>
        
        <div class="example-card">
          <h3>Simple Area Chart</h3>
          <div class="chart-wrapper">
            <ng-recharts-responsive-container [width]="'100%'" [height]="300">
              <ng-recharts-area-chart
                [data]="simpleAreaData"
                [config]="simpleAreaConfig">
              </ng-recharts-area-chart>
            </ng-recharts-responsive-container>
          </div>
        </div>

        <div class="example-card">
          <h3>Stacked Area Chart</h3>
          <div class="chart-wrapper">
            <ng-recharts-responsive-container [width]="'100%'" [height]="300">
              <ng-recharts-area-chart
                [data]="stackedAreaData"
                [config]="stackedAreaConfig">
              </ng-recharts-area-chart>
            </ng-recharts-responsive-container>
          </div>
        </div>

        <div class="example-card">
          <h3>Cardinal Area Chart</h3>
          <div class="chart-wrapper">
            <ng-recharts-responsive-container [width]="'100%'" [height]="300">
              <ng-recharts-area-chart
                [data]="simpleAreaData"
                [config]="cardinalAreaConfig">
              </ng-recharts-area-chart>
            </ng-recharts-responsive-container>
          </div>
        </div>
      </section>

      <!-- Pie Chart Examples -->
      <section class="examples-section">
        <h2>Pie Chart Examples</h2>
        
        <div class="example-card">
          <h3>Simple Pie Chart</h3>
          <div class="chart-wrapper">
            <ng-recharts-responsive-container [width]="'100%'" [height]="300">
              <ng-recharts-pie-chart
                [data]="simplePieData"
                [config]="simplePieConfig">
              </ng-recharts-pie-chart>
            </ng-recharts-responsive-container>
          </div>
        </div>

        <div class="example-card">
          <h3>Two Level Pie Chart</h3>
          <div class="chart-wrapper" style="display: flex; gap: 20px; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 250px;">
              <ng-recharts-responsive-container [width]="'100%'" [height]="300">
                <ng-recharts-pie-chart
                  [data]="simplePieData"
                  [config]="twoLevelPieConfig1">
                </ng-recharts-pie-chart>
              </ng-recharts-responsive-container>
            </div>
            <div style="flex: 1; min-width: 250px;">
              <ng-recharts-responsive-container [width]="'100%'" [height]="300">
                <ng-recharts-pie-chart
                  [data]="simplePieData"
                  [config]="twoLevelPieConfig2">
                </ng-recharts-pie-chart>
              </ng-recharts-responsive-container>
            </div>
          </div>
        </div>
      </section>

      <!-- Scatter Chart Examples -->
      <section class="examples-section">
        <h2>Scatter Chart Examples</h2>
        
        <div class="example-card">
          <h3>Simple Scatter Chart</h3>
          <div class="chart-wrapper">
            <ng-recharts-responsive-container [width]="'100%'" [height]="300">
              <ng-recharts-scatter-chart
                [data]="scatterData"
                [config]="scatterConfig">
              </ng-recharts-scatter-chart>
            </ng-recharts-responsive-container>
          </div>
        </div>

        <div class="example-card">
          <h3>Three Dim Scatter Chart</h3>
          <div class="chart-wrapper">
            <ng-recharts-responsive-container [width]="'100%'" [height]="300">
              <ng-recharts-scatter-chart
                [data]="scatterData"
                [config]="threeDimScatterConfig">
              </ng-recharts-scatter-chart>
            </ng-recharts-responsive-container>
          </div>
        </div>
      </section>

      <!-- Radial Bar Chart Examples -->
      <section class="examples-section">
        <h2>Radial Bar Chart Examples</h2>
        
        <div class="example-card">
          <h3>Simple Radial Bar Chart</h3>
          <div class="chart-wrapper">
            <ng-recharts-responsive-container [width]="'100%'" [height]="300">
              <ng-recharts-radial-bar-chart
                [data]="radialBarData"
                [config]="radialBarConfig">
              </ng-recharts-radial-bar-chart>
            </ng-recharts-responsive-container>
          </div>
        </div>
      </section>

      <!-- TreeMap Examples -->
      <section class="examples-section">
        <h2>TreeMap Examples</h2>
        
        <div class="example-card">
          <h3>Simple TreeMap</h3>
          <div class="chart-wrapper">
            <ng-recharts-responsive-container [width]="'100%'" [height]="300">
              <ng-recharts-treemap-chart
                [data]="treemapData"
                [config]="treemapConfig">
              </ng-recharts-treemap-chart>
            </ng-recharts-responsive-container>
          </div>
        </div>
      </section>

      <!-- Composed Chart Examples -->
      <section class="examples-section">
        <h2>Composed Chart Examples</h2>
        
        <div class="example-card">
          <h3>Line Bar Area Composed Chart</h3>
          <div class="chart-wrapper">
            <ng-recharts-responsive-container [width]="'100%'" [height]="300">
              <ng-recharts-composed-chart
                [data]="composedData"
                [config]="composedConfig">
              </ng-recharts-composed-chart>
            </ng-recharts-responsive-container>
          </div>
        </div>
      </section>

      <!-- Radar Chart Examples -->
      <section class="examples-section">
        <h2>Radar Chart Examples</h2>
        
        <div class="example-card">
          <h3>Simple Radar Chart</h3>
          <div class="chart-wrapper">
            <ng-recharts-responsive-container [width]="'100%'" [height]="300">
              <ng-recharts-radar-chart
                [data]="radarData"
                [config]="radarConfig">
              </ng-recharts-radar-chart>
            </ng-recharts-responsive-container>
          </div>
        </div>
      </section>
      </div>
    </div>
  `,
  styles: [`
    .all-examples-page {
      min-height: 100vh;
      background: #f8f9fa;
      padding-top: 0;
    }

    .examples-header {
      background: white;
      border-bottom: 1px solid #e0e0e0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      position: sticky;
      top: 0;
      z-index: 100;
      padding: 16px 0;
    }

    .header-content {
      max-width: 1600px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .back-button {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: #f1f5f9;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      color: #475569;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      text-decoration: none;
    }

    .back-button:hover {
      background: #e2e8f0;
      color: #334155;
      border-color: #cbd5e1;
    }

    .back-icon {
      width: 18px;
      height: 18px;
    }

    .header-title-section {
      flex: 1;
    }

    .header-title-section h1 {
      margin: 0 0 4px 0;
      color: #1e293b;
      font-size: 24px;
      font-weight: 700;
    }

    .header-title-section p {
      margin: 0;
      color: #64748b;
      font-size: 14px;
    }

    .header-title-section a {
      color: #3b82f6;
      text-decoration: none;
    }

    .header-title-section a:hover {
      text-decoration: underline;
    }

    .examples-container {
      padding: 20px;
      max-width: 1600px;
      margin: 0 auto;
      padding-top: 20px;
    }

    .examples-section {
      margin-bottom: 40px;
      padding-bottom: 30px;
      border-bottom: 2px solid #e0e0e0;
    }

    .examples-section h2 {
      color: #333;
      margin-bottom: 20px;
      font-size: 28px;
    }

    .example-card {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .example-card h3 {
      margin-top: 0;
      color: #555;
      font-size: 18px;
    }

    .chart-wrapper {
      width: 100%;
      min-width: 0;
      overflow: hidden;
    }

    @media (max-width: 768px) {
      .header-content {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }

      .back-button {
        width: 100%;
        justify-content: center;
      }

      .examples-container {
        padding: 16px;
      }

      .charts-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AllExamplesComponent {
  // Line Chart Data
  simpleLineData = [
    { name: 'Page A', uv: 4000, pv: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398 },
    { name: 'Page C', uv: 2000, pv: 9800 },
    { name: 'Page D', uv: 2780, pv: 3908 },
    { name: 'Page E', uv: 1890, pv: 4800 },
    { name: 'Page F', uv: 2390, pv: 3800 },
    { name: 'Page G', uv: 3490, pv: 4300 }
  ];

  simpleLineConfig: LineChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: {},
    tooltip: {},
    legend: {},
    lines: [
      { dataKey: 'pv', stroke: '#8884d8' },
      { dataKey: 'uv', stroke: '#82ca9d' }
    ]
  };

  dashedLineConfig: LineChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: {},
    tooltip: {},
    legend: {},
    lines: [
      { dataKey: 'pv', stroke: '#8884d8', strokeDasharray: '5 5' },
      { dataKey: 'uv', stroke: '#82ca9d', strokeDasharray: '3 3' }
    ]
  };

  biaxialLineData = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 }
  ];

  biaxialLineConfig: LineChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: { yAxisId: 'left' },
    tooltip: {},
    legend: {},
    lines: [
      { dataKey: 'pv', stroke: '#8884d8', yAxisId: 'left' },
      { dataKey: 'uv', stroke: '#82ca9d', yAxisId: 'right' }
    ]
  };

  // Bar Chart Data
  simpleBarData = [
    { name: 'Page A', uv: 4000, pv: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398 },
    { name: 'Page C', uv: 2000, pv: 9800 },
    { name: 'Page D', uv: 2780, pv: 3908 },
    { name: 'Page E', uv: 1890, pv: 4800 }
  ];

  simpleBarConfig: BarChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: {},
    tooltip: {},
    legend: {},
    bars: [
      { dataKey: 'pv', fill: '#8884d8' },
      { dataKey: 'uv', fill: '#82ca9d' }
    ]
  };

  stackedBarData = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 }
  ];

  stackedBarConfig: BarChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: {},
    tooltip: {},
    legend: {},
    bars: [
      { dataKey: 'pv', fill: '#8884d8', stackId: 'a' },
      { dataKey: 'uv', fill: '#82ca9d', stackId: 'a' },
      { dataKey: 'amt', fill: '#ffc658', stackId: 'a' }
    ]
  };

  mixBarData = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 }
  ];

  mixBarConfig: BarChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: {},
    tooltip: {},
    legend: {},
    bars: [
      { dataKey: 'pv', fill: '#8884d8' },
      { dataKey: 'uv', fill: '#82ca9d' }
    ]
  };

  // Area Chart Data
  simpleAreaData = [
    { name: 'Page A', uv: 4000, pv: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398 },
    { name: 'Page C', uv: 2000, pv: 9800 },
    { name: 'Page D', uv: 2780, pv: 3908 },
    { name: 'Page E', uv: 1890, pv: 4800 }
  ];

  simpleAreaConfig: AreaChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: {},
    tooltip: {},
    legend: {},
    areas: [
      { dataKey: 'uv', stroke: '#8884d8', fill: '#8884d8', fillOpacity: 0.6 },
      { dataKey: 'pv', stroke: '#82ca9d', fill: '#82ca9d', fillOpacity: 0.6 }
    ]
  };

  stackedAreaData = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 }
  ];

  stackedAreaConfig: AreaChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: {},
    tooltip: {},
    legend: {},
    areas: [
      { dataKey: 'uv', stroke: '#8884d8', fill: '#8884d8', fillOpacity: 0.6, stackId: '1' },
      { dataKey: 'pv', stroke: '#82ca9d', fill: '#82ca9d', fillOpacity: 0.6, stackId: '1' },
      { dataKey: 'amt', stroke: '#ffc658', fill: '#ffc658', fillOpacity: 0.6, stackId: '1' }
    ]
  };

  cardinalAreaConfig: AreaChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: {},
    tooltip: {},
    legend: {},
    areas: [
      { dataKey: 'uv', stroke: '#8884d8', fill: '#8884d8', fillOpacity: 0.6, type: 'cardinal' },
      { dataKey: 'pv', stroke: '#82ca9d', fill: '#82ca9d', fillOpacity: 0.6, type: 'cardinal' }
    ]
  };

  // Pie Chart Data
  simplePieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 }
  ];

  simplePieConfig: PieChartConfig = {
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

  twoLevelPieConfig1: PieChartConfig = {
    tooltip: {},
    legend: {},
    pie: {
      dataKey: 'value',
      nameKey: 'name',
      cx: '50%',
      cy: '50%',
      outerRadius: 80,
      innerRadius: 40
    },
    cells: [
      { fill: '#8884d8' },
      { fill: '#82ca9d' },
      { fill: '#ffc658' },
      { fill: '#ff7300' }
    ]
  };

  twoLevelPieConfig2: PieChartConfig = {
    tooltip: {},
    legend: {},
    pie: {
      dataKey: 'value',
      nameKey: 'name',
      cx: '50%',
      cy: '50%',
      outerRadius: 60
    },
    cells: [
      { fill: '#8884d8' },
      { fill: '#82ca9d' },
      { fill: '#ffc658' },
      { fill: '#ff7300' }
    ]
  };

  // Scatter Chart Data
  scatterData = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 }
  ];

  scatterConfig: ScatterChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'x', type: 'number', name: 'X' },
    yAxis: { dataKey: 'y', type: 'number', name: 'Y' },
    tooltip: {},
    legend: {},
    scatters: [
      { dataKey: 'z', name: 'Z', fill: '#8884d8' }
    ]
  };

  threeDimScatterConfig: ScatterChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'x', type: 'number', name: 'X' },
    yAxis: { dataKey: 'y', type: 'number', name: 'Y' },
    zAxis: { dataKey: 'z', range: [50, 500] },
    tooltip: {},
    legend: {},
    scatters: [
      { dataKey: 'z', name: 'Z', fill: '#8884d8' }
    ]
  };

  // Radial Bar Chart Data
  radialBarData = [
    { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
    { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed' },
    { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1' },
    { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d' },
    { name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c' },
    { name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57' }
  ];

  radialBarConfig: RadialBarChartConfig = {
    polarGrid: {},
    polarAngleAxis: { dataKey: 'name', type: 'category' },
    polarRadiusAxis: {},
    tooltip: {},
    legend: {},
    radialBars: [
      { dataKey: 'uv', cornerRadius: 10, fill: '#8884d8' }
    ]
  };

  // TreeMap Data
  treemapData = [
    { name: 'A', size: 400 },
    { name: 'B', size: 300 },
    { name: 'C', size: 300 },
    { name: 'D', size: 200 },
    { name: 'E', size: 278 },
    { name: 'F', size: 189 }
  ];

  treemapConfig: TreeMapChartConfig = {
    tooltip: {},
    cells: [
      { fill: '#8884d8' },
      { fill: '#82ca9d' },
      { fill: '#ffc658' },
      { fill: '#ff7300' },
      { fill: '#00ff00' },
      { fill: '#0000ff' }
    ]
  };

  // Composed Chart Data
  composedData = [
    { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
    { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
    { name: 'Page C', uv: 1397, pv: 1098, amt: 989 },
    { name: 'Page D', uv: 1480, pv: 1200, amt: 1228 },
    { name: 'Page E', uv: 1520, pv: 1108, amt: 1100 },
    { name: 'Page F', uv: 1400, pv: 680, amt: 1700 }
  ];

  composedConfig: ComposedChartConfig = {
    cartesianGrid: { strokeDasharray: '3 3' },
    xAxis: { dataKey: 'name' },
    yAxis: {},
    tooltip: {},
    legend: {},
    bars: [
      { dataKey: 'uv', fill: '#8884d8' }
    ],
    lines: [
      { dataKey: 'pv', stroke: '#82ca9d', strokeWidth: 2 }
    ],
    areas: [
      { dataKey: 'amt', stroke: '#ffc658', fill: '#ffc658', fillOpacity: 0.6 }
    ]
  };

  // Radar Chart Data
  radarData = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
    { subject: 'English', A: 86, B: 130, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
    { subject: 'History', A: 65, B: 85, fullMark: 150 }
  ];

  radarConfig: RadarChartConfig = {
    polarGrid: {},
    polarAngleAxis: { dataKey: 'subject' },
    polarRadiusAxis: { angle: 90, domain: [0, 150] },
    tooltip: {},
    legend: {},
    radars: [
      { name: 'A', dataKey: 'A', stroke: '#8884d8', fill: '#8884d8', fillOpacity: 0.6 },
      { name: 'B', dataKey: 'B', stroke: '#82ca9d', fill: '#82ca9d', fillOpacity: 0.6 }
    ]
  };
}
