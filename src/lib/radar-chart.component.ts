import { Component, Input, forwardRef } from '@angular/core';
import * as React from 'react';
import * as Recharts from 'recharts';
import { BaseChartComponent } from './base-chart.component';
import { RadarChartConfig, ChartMargin } from './chart-config.interface';

/**
 * Angular wrapper for Recharts RadarChart component
 */
@Component({
  selector: 'ng-recharts-radar-chart',
  template: '<div #chartContainer></div>',
  standalone: true,
  providers: [
    { provide: BaseChartComponent, useExisting: forwardRef(() => NgRechartsRadarChartComponent) }
  ]
})
export class NgRechartsRadarChartComponent extends BaseChartComponent {
  @Input() width?: number = 500;
  @Input() height?: number = 300;
  @Input() data?: any[] = [];
  @Input() margin?: ChartMargin;
  @Input() config?: RadarChartConfig;

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
      if (this.config.polarGrid) {
        children.push(React.createElement(Recharts.PolarGrid, this.config.polarGrid));
      }
      if (this.config.polarAngleAxis) {
        children.push(React.createElement(Recharts.PolarAngleAxis, this.config.polarAngleAxis));
      }
      if (this.config.polarRadiusAxis) {
        children.push(React.createElement(Recharts.PolarRadiusAxis, this.config.polarRadiusAxis));
      }
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
      if (this.config.radars) {
        this.config.radars.forEach((radarConfig, index) => {
          const radarProps: any = { ...radarConfig };
          if (this.radarClick.observed) {
            radarProps.onClick = (data: any, idx: number) => {
              this.radarClick.emit({ data, index: idx, radarIndex: index, type: 'radar' });
            };
          }
          children.push(React.createElement(Recharts.Radar, radarProps as any));
        });
      }
    }

    return React.createElement(
      Recharts.RadarChart,
      chartProps,
      ...children
    );
  }
}
