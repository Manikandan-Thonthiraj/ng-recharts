import { Component, Input, forwardRef } from '@angular/core';
import * as React from 'react';
import * as Recharts from 'recharts';
import { BaseChartComponent } from './base-chart.component';
import { ScatterChartConfig, ChartMargin } from './chart-config.interface';

/**
 * Angular wrapper for Recharts ScatterChart component
 */
@Component({
  selector: 'ng-recharts-scatter-chart',
  template: '<div #chartContainer></div>',
  standalone: true,
  providers: [
    { provide: BaseChartComponent, useExisting: forwardRef(() => NgRechartsScatterChartComponent) }
  ]
})
export class NgRechartsScatterChartComponent extends BaseChartComponent {
  @Input() width?: number = 500;
  @Input() height?: number = 300;
  @Input() data?: any[] = [];
  @Input() margin?: ChartMargin;
  @Input() config?: ScatterChartConfig;

  public getReactComponent(): React.ReactElement {
    const children: React.ReactNode[] = [];
    const chartProps: any = {
      width: this.width,
      height: this.height,
      data: this.data,
      margin: this.margin
    };

    if (this.chartClick.observed) {
      chartProps.onClick = (data: any, index: number) => {
        this.chartClick.emit({ data, index, type: 'chart' });
      };
    }

    if (this.config) {
      if (this.config.cartesianGrid) {
        children.push(React.createElement(Recharts.CartesianGrid, this.config.cartesianGrid));
      }
      if (this.config.xAxis) {
        children.push(React.createElement(Recharts.XAxis, this.config.xAxis));
      }
      if (this.config.yAxis) {
        children.push(React.createElement(Recharts.YAxis, this.config.yAxis));
      }
      if (this.config.zAxis) {
        children.push(React.createElement(Recharts.ZAxis as any, this.config.zAxis));
      }
      if (this.config.tooltip !== undefined) {
        if (this.config.tooltip === null || this.config.tooltip === false) {
          // Skip tooltip
        } else {
          const tooltip = this.config.tooltip;
          const tooltipProps: any = {
            cursor: tooltip.cursor !== undefined
              ? tooltip.cursor
              : { stroke: '#8884d8', strokeWidth: 1 },
            contentStyle: tooltip['contentStyle'] || {
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '10px'
            },
            ...tooltip
          };
          children.push(React.createElement(Recharts.Tooltip, tooltipProps));
        }
      } else {
        children.push(React.createElement(Recharts.Tooltip, {
          cursor: { stroke: '#8884d8', strokeWidth: 1 },
          contentStyle: {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '10px'
          }
        }));
      }
      if (this.config.legend) {
        children.push(React.createElement(Recharts.Legend, this.config.legend));
      }
      if (this.config.scatters) {
        this.config.scatters.forEach((scatterConfig, index) => {
          const scatterProps: any = { ...scatterConfig };
          if (this.chartClick.observed) {
            scatterProps.onClick = (data: any, idx: number) => {
              this.chartClick.emit({ data, index: idx, scatterIndex: index, type: 'scatter' });
            };
          }
          children.push(React.createElement(Recharts.Scatter, scatterProps as any));
        });
      }
    }

    return React.createElement(
      Recharts.ScatterChart,
      chartProps,
      ...children
    );
  }
}
