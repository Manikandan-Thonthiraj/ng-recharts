import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgRechartsLineChartComponent,
  NgRechartsBarChartComponent,
  NgRechartsAreaChartComponent,
  NgRechartsPieChartComponent,
  NgRechartsRadarChartComponent,
  NgRechartsScatterChartComponent,
  NgRechartsComposedChartComponent,
  NgRechartsTreeMapChartComponent,
  NgRechartsRadialBarChartComponent,
  NgRechartsResponsiveContainerComponent
} from 'ng-recharts';

@Component({
  selector: 'app-chart-card',
  standalone: true,
  imports: [
    CommonModule,
    NgRechartsResponsiveContainerComponent,
    NgRechartsLineChartComponent,
    NgRechartsBarChartComponent,
    NgRechartsAreaChartComponent,
    NgRechartsPieChartComponent,
    NgRechartsRadarChartComponent,
    NgRechartsScatterChartComponent,
    NgRechartsComposedChartComponent,
    NgRechartsTreeMapChartComponent,
    NgRechartsRadialBarChartComponent
  ],
  template: `
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full">
      <div class="flex items-center justify-between px-5 py-3 border-b border-slate-100">
        <div class="flex items-center gap-2">
          <div class="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-red-500 to-red-600"></div>
          <span class="text-sm font-bold text-slate-700">{{ title }}</span>
        </div>
        <button
          (click)="showCode = !showCode"
          class="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors">
          <svg *ngIf="showCode" class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <svg *ngIf="!showCode" class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          {{ showCode ? 'Preview' : 'Angular Code' }}
        </button>
      </div>
      <div class="p-4 w-full">
        <div *ngIf="showCode" class="relative w-full">
          <button (click)="copyCode()" 
                  class="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-700/50 hover:bg-slate-600/80 transition-colors text-slate-400 hover:text-white z-10">
            <svg *ngIf="!copied" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <svg *ngIf="copied" class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
          <pre class="bg-slate-900 rounded-xl p-4 text-xs font-mono text-slate-300 leading-relaxed overflow-x-auto whitespace-pre-wrap w-full">{{ angularCode }}</pre>
        </div>
        <div *ngIf="!showCode" class="h-[280px] w-full" style="min-width: 0; position: relative;">
          <ng-recharts-responsive-container [width]="'100%'" [height]="280">
            <ng-container [ngSwitch]="chartComponent">
              <ng-recharts-line-chart *ngSwitchCase="'line'"
                [data]="chartData"
                [config]="chartConfig">
              </ng-recharts-line-chart>
              <ng-recharts-bar-chart *ngSwitchCase="'bar'"
                [data]="chartData"
                [config]="chartConfig">
              </ng-recharts-bar-chart>
              <ng-recharts-area-chart *ngSwitchCase="'area'"
                [data]="chartData"
                [config]="chartConfig">
              </ng-recharts-area-chart>
              <ng-recharts-pie-chart *ngSwitchCase="'pie'"
                [data]="chartData"
                [config]="chartConfig">
              </ng-recharts-pie-chart>
              <ng-recharts-radar-chart *ngSwitchCase="'radar'"
                [data]="chartData"
                [config]="chartConfig">
              </ng-recharts-radar-chart>
              <ng-recharts-scatter-chart *ngSwitchCase="'scatter'"
                [data]="chartData"
                [config]="chartConfig">
              </ng-recharts-scatter-chart>
              <ng-recharts-composed-chart *ngSwitchCase="'composed'"
                [data]="chartData"
                [config]="chartConfig">
              </ng-recharts-composed-chart>
              <ng-recharts-treemap-chart *ngSwitchCase="'treemap'"
                [data]="chartData"
                [config]="chartConfig">
              </ng-recharts-treemap-chart>
              <ng-recharts-radial-bar-chart *ngSwitchCase="'radialBar'"
                [data]="chartData"
                [config]="chartConfig">
              </ng-recharts-radial-bar-chart>
            </ng-container>
          </ng-recharts-responsive-container>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ChartCardComponent {
  @Input() title = '';
  @Input() angularCode = '';
  @Input() chartComponent: string = '';
  @Input() chartConfig: any;
  @Input() chartData: any[] = [];
  showCode = false;
  copied = false;

  copyCode(): void {
    navigator.clipboard.writeText(this.angularCode).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }
}
