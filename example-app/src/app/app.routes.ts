import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page.component';
import { HomeComponent } from './components/home.component';
import { LineChartExampleComponent } from './components/line-chart-example.component';
import { BarChartExampleComponent } from './components/bar-chart-example.component';
import { PieChartExampleComponent } from './components/pie-chart-example.component';
import { AreaChartExampleComponent } from './components/area-chart-example.component';
import { ComposedChartExampleComponent } from './components/composed-chart-example.component';
import { RadarChartExampleComponent } from './components/radar-chart-example.component';
import { MultiChartDashboardComponent } from './components/multi-chart-dashboard.component';
import { AllExamplesComponent } from './components/all-examples.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'line-chart', component: LineChartExampleComponent },
  { path: 'bar-chart', component: BarChartExampleComponent },
  { path: 'pie-chart', component: PieChartExampleComponent },
  { path: 'area-chart', component: AreaChartExampleComponent },
  { path: 'composed-chart', component: ComposedChartExampleComponent },
  { path: 'radar-chart', component: RadarChartExampleComponent },
  { path: 'dashboard', component: MultiChartDashboardComponent },
  { path: 'all-examples', component: AllExamplesComponent },
  { path: '**', redirectTo: '' }
];
