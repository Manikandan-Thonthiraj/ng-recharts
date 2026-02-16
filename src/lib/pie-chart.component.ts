import { Component, Input, forwardRef } from '@angular/core';
import * as React from 'react';
import * as Recharts from 'recharts';
import { BaseChartComponent } from './base-chart.component';
import { PieChartConfig } from './chart-config.interface';

/**
 * Angular wrapper for Recharts PieChart component
 */
@Component({
  selector: 'ng-recharts-pie-chart',
  template: '<div #chartContainer></div>',
  standalone: true,
  providers: [
    { provide: BaseChartComponent, useExisting: forwardRef(() => NgRechartsPieChartComponent) }
  ]
})
export class NgRechartsPieChartComponent extends BaseChartComponent {
  @Input() width?: number = 400;
  @Input() height?: number = 400;
  @Input() data?: any[] = [];
  @Input() config?: PieChartConfig;

  public getReactComponent(): React.ReactElement {
    const children: React.ReactNode[] = [];
    const chartProps: any = {
      width: this.width,
      height: this.height,
      data: this.data
    };

    if (this.chartClick.observed) {
      chartProps.onClick = (data: any, index: number) => {
        this.chartClick.emit({ data, index, type: 'chart' });
      };
    }

    if (this.config) {
      if (this.config.tooltip !== undefined) {
        if (this.config.tooltip === null || this.config.tooltip === false) {
          // Skip tooltip
        } else {
          const tooltip = this.config.tooltip;
          const tooltipProps: any = {
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
      if (this.config.pie) {
        const pieProps: any = { ...this.config.pie };
        if (this.chartClick.observed) {
          pieProps.onClick = (data: any, index: number) => {
            this.chartClick.emit({ data, index, type: 'pie' });
          };
        }
        const pieChildren: React.ReactNode[] = [];
        if (this.config.cells) {
          this.config.cells.forEach((cellConfig, index) => {
            const cellProps: any = { ...cellConfig };
            if (this.cellClick.observed) {
              cellProps.onClick = (data: any, idx: number) => {
                this.cellClick.emit({ data, index: idx, cellIndex: index, type: 'cell' });
              };
            }
            pieChildren.push(React.createElement(Recharts.Cell, cellProps));
          });
        }
        children.push(React.createElement(Recharts.Pie, pieProps, ...pieChildren));
      }
    }

    return React.createElement(
      Recharts.PieChart,
      chartProps,
      ...children
    );
  }
}
