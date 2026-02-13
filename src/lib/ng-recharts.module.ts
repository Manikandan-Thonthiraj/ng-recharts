import { NgModule } from '@angular/core';
import { NgRechartsLineChartComponent } from './line-chart.component';
import { NgRechartsBarChartComponent } from './bar-chart.component';
import { NgRechartsPieChartComponent } from './pie-chart.component';
import { NgRechartsAreaChartComponent } from './area-chart.component';
import { NgRechartsComposedChartComponent } from './composed-chart.component';
import { NgRechartsRadarChartComponent } from './radar-chart.component';
import { NgRechartsScatterChartComponent } from './scatter-chart.component';
import { NgRechartsRadialBarChartComponent } from './radial-bar-chart.component';
import { NgRechartsTreeMapChartComponent } from './treemap-chart.component';
import { ReactBridgeService } from './react-bridge.service';

/**
 * NgRechartsModule - Angular module for Recharts
 * 
 * This module provides Angular wrapper components for Recharts chart library.
 * 
 * **Note**: All components are standalone and can be imported directly in Angular 14+ projects.
 * This module is provided for compatibility with NgModule-based applications.
 * 
 * For Angular 14+ projects, importing standalone components directly is recommended:
 * ```typescript
 * import { NgRechartsLineChartComponent } from 'ng-recharts';
 * ```
 */
@NgModule({
  imports: [
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
  exports: [
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
  providers: [ReactBridgeService]
})
export class NgRechartsModule {}
