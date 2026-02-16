import { Component, Input, forwardRef } from '@angular/core';
import * as React from 'react';
import * as Recharts from 'recharts';
import { BaseChartComponent } from './base-chart.component';
import { LineChartConfig, ChartMargin } from './chart-config.interface';

/**
 * Angular wrapper for Recharts LineChart component
 * 
 * @example
 * ```html
 * <ng-recharts-line-chart
 *   [width]="400"
 *   [height]="300"
 *   [data]="chartData"
 *   [config]="chartConfig">
 * </ng-recharts-line-chart>
 * ```
 */
@Component({
  selector: 'ng-recharts-line-chart',
  template: '<div #chartContainer></div>',
  standalone: true,
  providers: [
    { provide: BaseChartComponent, useExisting: forwardRef(() => NgRechartsLineChartComponent) }
  ]
})
export class NgRechartsLineChartComponent extends BaseChartComponent {
  @Input() width?: number = 500;
  @Input() height?: number = 300;
  @Input() data?: any[] = [];
  @Input() margin?: ChartMargin;
  @Input() config?: LineChartConfig;

  public getReactComponent(): React.ReactElement {
    const children: React.ReactNode[] = [];
    const chartProps: any = {
      width: this.width,
      height: this.height,
      data: this.data,
      margin: this.margin
    };

    // Add onClick handler if chartClick is observed
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
      if (this.config.tooltip !== undefined) {
        // If tooltip is explicitly set to null/false, don't render it
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
        // Default tooltip if not specified
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
      if (this.config.lines) {
        this.config.lines.forEach((lineConfig, index) => {
          const lineProps: any = { ...lineConfig };
          if (this.lineClick.observed) {
            lineProps.onClick = (data: any, idx: number) => {
              this.lineClick.emit({ data, index: idx, lineIndex: index, type: 'line' });
            };
          }
          children.push(React.createElement(Recharts.Line, lineProps));
        });
      }
    }

    return React.createElement(
      Recharts.LineChart,
      chartProps,
      ...children
    );
  }
}
