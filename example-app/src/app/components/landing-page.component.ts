import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CodeBlockComponent } from './code-block.component';
import { ChartCardComponent } from './chart-card.component';
import { ApiRowComponent } from './api-row.component';
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
  NgRechartsResponsiveContainerComponent,
  LineChartConfig,
  BarChartConfig,
  AreaChartConfig,
  PieChartConfig,
  RadarChartConfig,
  ScatterChartConfig,
  ComposedChartConfig,
  TreeMapChartConfig,
  RadialBarChartConfig
} from 'ng-recharts';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CodeBlockComponent,
    ChartCardComponent,
    ApiRowComponent,
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
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <!-- Sticky Navbar -->
      <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center gap-3">
              <div class="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-200/50">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span class="text-lg font-extrabold tracking-tight text-slate-900">ng-recharts</span>
              <span class="hidden sm:inline px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">v1.0.0</span>
            </div>

            <!-- Desktop Nav -->
            <div class="hidden md:flex items-center gap-1">
              <a routerLink="/" routerLinkActive="bg-red-50 text-red-700" [routerLinkActiveOptions]="{exact: true}" 
                 class="px-4 py-2 rounded-lg text-sm font-medium transition-all text-slate-600 hover:bg-slate-100 hover:text-slate-900">
                Home
              </a>
              <a (click)="scrollTo('getting-started')" 
                 class="px-4 py-2 rounded-lg text-sm font-medium transition-all text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer">
                Getting Started
              </a>
              <a routerLink="/all-examples" routerLinkActive="bg-red-50 text-red-700"
                 class="px-4 py-2 rounded-lg text-sm font-medium transition-all text-slate-600 hover:bg-slate-100 hover:text-slate-900">
                Chart Examples
              </a>
              <a (click)="scrollTo('api')" 
                 class="px-4 py-2 rounded-lg text-sm font-medium transition-all text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer">
                API Reference
              </a>
              <a (click)="scrollTo('license')" 
                 class="px-4 py-2 rounded-lg text-sm font-medium transition-all text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer">
                License
              </a>
            </div>

            <div class="hidden md:flex items-center gap-3">
              <span class="px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center gap-1.5">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                MIT License
              </span>
            </div>

            <!-- Mobile menu button -->
            <button class="md:hidden p-2 rounded-lg hover:bg-slate-100" (click)="mobileMenuOpen = !mobileMenuOpen">
              <svg *ngIf="!mobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg *ngIf="mobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Nav -->
        <div *ngIf="mobileMenuOpen" class="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-1">
          <a routerLink="/" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100">Home</a>
          <a (click)="scrollTo('getting-started'); mobileMenuOpen = false" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 cursor-pointer">Getting Started</a>
          <a routerLink="/all-examples" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100">Chart Examples</a>
          <a (click)="scrollTo('api'); mobileMenuOpen = false" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 cursor-pointer">API Reference</a>
          <a (click)="scrollTo('license'); mobileMenuOpen = false" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 cursor-pointer">License</a>
        </div>
      </nav>

      <!-- Hero Section -->
      <section id="hero" class="pt-28 pb-16 md:pt-36 md:pb-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-4xl mx-auto">
            <div class="flex items-center justify-center gap-2 mb-6 flex-wrap">
              <span class="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">Angular NPM Package</span>
              <span class="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">MIT Licensed</span>
              <span class="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold">TypeScript</span>
            </div>
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6">
              <span class="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">ng-recharts</span>
            </h1>
            <p class="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              A composable, declarative Angular charting library built on top of
              <strong class="text-slate-800"> Recharts</strong> &
              <strong class="text-slate-800"> D3.js</strong>. Full TypeScript support with Angular-native components, directives, and services.
            </p>

            <!-- Install command -->
            <div class="inline-flex items-center gap-3 bg-slate-900 rounded-2xl px-6 py-3.5 mb-8 shadow-xl shadow-slate-900/20">
              <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <code class="text-sm md:text-base text-slate-200 font-mono">npm install ng-recharts --save</code>
              <button (click)="copyToClipboard('npm install ng-recharts --save')" 
                      class="p-1.5 rounded-lg bg-slate-700/50 hover:bg-slate-600/80 transition-colors text-slate-400 hover:text-white">
                <svg *ngIf="!copied" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <svg *ngIf="copied" class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>

            <div class="flex flex-wrap items-center justify-center gap-4 mb-12">
              <button (click)="scrollTo('getting-started')" 
                      class="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold text-sm shadow-lg shadow-red-200 transition-all hover:shadow-xl hover:shadow-red-300">
                Get Started
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <a routerLink="/all-examples" 
                 class="flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 rounded-xl font-semibold text-sm border border-slate-200 shadow-sm transition-all">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Examples
              </a>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div *ngFor="let stat of stats" class="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                <svg class="w-5 h-5 text-red-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="stat.iconPath" />
                </svg>
                <div class="text-2xl font-black text-slate-900">{{ stat.value }}</div>
                <div class="text-xs text-slate-500 font-medium">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-16 bg-white border-y border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div *ngFor="let feature of features" class="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 group">
              <div [class]="'w-12 h-12 rounded-xl ' + feature.color + ' flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="feature.iconPath" />
                </svg>
              </div>
              <h3 class="text-lg font-bold text-slate-900 mb-2">{{ feature.title }}</h3>
              <p class="text-sm text-slate-500 leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Getting Started Section -->
      <section id="getting-started" class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="pt-20 -mt-20 mb-8">
            <div class="flex items-center gap-3 mb-2">
              <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-200">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900">Getting Started</h2>
                <p class="text-sm text-slate-500">Install and set up ng-recharts in your Angular project</p>
              </div>
            </div>
            <div class="h-1 w-16 bg-gradient-to-r from-red-500 to-red-300 rounded-full mt-3"></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Step 1 -->
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">1</div>
                <h3 class="text-lg font-bold text-slate-900">Install the Package</h3>
              </div>
              <app-code-block code="npm install ng-recharts --save" language="bash"></app-code-block>
            </div>

            <!-- Step 2 -->
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">2</div>
                <h3 class="text-lg font-bold text-slate-900">Import the Module</h3>
              </div>
              <app-code-block [code]="importModuleCode" language="typescript"></app-code-block>
            </div>

            <!-- Step 3 -->
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">3</div>
                <h3 class="text-lg font-bold text-slate-900">Standalone Components (Angular 14+)</h3>
              </div>
              <app-code-block [code]="standaloneComponentCode" language="typescript"></app-code-block>
            </div>

            <!-- Step 4 -->
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">4</div>
                <h3 class="text-lg font-bold text-slate-900">Use with Services & RxJS</h3>
              </div>
              <app-code-block [code]="rxjsCode" language="typescript"></app-code-block>
            </div>
          </div>

          <!-- Compatibility -->
          <div class="mt-10 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 mb-4">Angular Version Compatibility</h3>
            <div class="flex flex-wrap gap-3">
              <span *ngFor="let version of angularVersions" 
                    class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-50 text-green-700 text-sm font-semibold border border-green-200">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ version }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Chart Examples Section -->
      <section id="charts" class="py-16 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="pt-20 -mt-20 mb-8">
            <div class="flex items-center gap-3 mb-2">
              <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-200">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900">Chart Examples</h2>
                <p class="text-sm text-slate-500">Interactive chart demos with Angular template syntax</p>
              </div>
            </div>
            <div class="h-1 w-16 bg-gradient-to-r from-red-500 to-red-300 rounded-full mt-3"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <app-chart-card *ngFor="let example of chartExamples; let i = index"
                           [title]="example.title"
                           [angularCode]="example.angularCode"
                           [chartComponent]="example.chartComponent"
                           [chartConfig]="example.chartConfig"
                           [chartData]="example.chartData"
                           class="w-full">
            </app-chart-card>
          </div>
        </div>
      </section>

      <!-- API Reference Section -->
      <section id="api" class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="pt-20 -mt-20 mb-8">
            <div class="flex items-center gap-3 mb-2">
              <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-200">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900">API Reference</h2>
                <p class="text-sm text-slate-500">Complete list of components, inputs, and outputs</p>
              </div>
            </div>
            <div class="h-1 w-16 bg-gradient-to-r from-red-500 to-red-300 rounded-full mt-3"></div>
          </div>

          <div class="space-y-3 mb-10">
            <app-api-row *ngFor="let api of apiComponents; let i = index"
                        [expanded]="expandedApi === i"
                        (toggle)="expandedApi = expandedApi === i ? null : i"
                        [component]="api.component"
                        [inputs]="api.inputs"
                        [outputs]="api.outputs"
                        [description]="api.description">
            </app-api-row>
          </div>

          <!-- Event Handling Examples -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 class="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Event Handling
              </h3>
              <app-code-block [code]="eventHandlingCode" language="typescript"></app-code-block>
            </div>

            <div>
              <h3 class="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Custom Tooltip
              </h3>
              <app-code-block [code]="customTooltipCode" language="html"></app-code-block>
            </div>
          </div>
        </div>
      </section>

      <!-- License Section -->
      <section id="license" class="py-16 bg-gradient-to-br from-green-50 to-emerald-50 border-y border-green-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="pt-20 -mt-20 mb-8">
            <div class="flex items-center gap-3 mb-2">
              <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-700 shadow-lg shadow-green-200">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900">License & Compliance</h2>
                <p class="text-sm text-slate-500">No license conflicts — safe for any use</p>
              </div>
            </div>
            <div class="h-1 w-16 bg-gradient-to-r from-green-500 to-green-300 rounded-full mt-3"></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- License Flow -->
            <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 class="text-lg font-bold text-slate-900 mb-6">Dependency License Chain</h3>
              <div class="space-y-4">
                <div *ngFor="let dep of licenseDeps; let i = index">
                  <div [class]="dep.bg + ' border rounded-xl p-4'">
                    <div class="flex items-center justify-between mb-1">
                      <span class="font-bold text-slate-800">{{ dep.name }}</span>
                      <span [class]="'px-2.5 py-0.5 rounded-full bg-gradient-to-r ' + dep.color + ' text-white text-xs font-bold'">
                        {{ dep.license }}
                      </span>
                    </div>
                    <span class="text-xs text-slate-500">{{ dep.desc }}</span>
                  </div>
                  <div *ngIf="i < licenseDeps.length - 1" class="flex justify-center py-1">
                    <svg class="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Compliance Points -->
            <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 class="text-lg font-bold text-slate-900 mb-6">Why No License Issues?</h3>
              <div class="space-y-4">
                <div *ngFor="let point of compliancePoints" class="flex items-start gap-3">
                  <svg class="w-4 h-4 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div class="text-sm font-bold text-slate-800">{{ point.title }}</div>
                    <div class="text-xs text-slate-500 leading-relaxed">{{ point.desc }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Package.json -->
            <div class="space-y-6">
              <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 class="text-lg font-bold text-slate-900 mb-4">Package Configuration</h3>
                <app-code-block [code]="packageJsonCode" language="json"></app-code-block>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-slate-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div class="font-bold text-lg">ng-recharts</div>
                  <div class="text-xs text-slate-400">Angular Charting Library</div>
                </div>
              </div>
              <p class="text-sm text-slate-400 leading-relaxed">
                A composable, declarative Angular charting library built on top of Recharts and D3.js. MIT Licensed.
              </p>
            </div>
            <div>
              <h4 class="font-bold text-sm mb-4 text-slate-300 uppercase tracking-wider">Quick Links</h4>
              <div class="space-y-2">
                <a (click)="scrollTo('hero')" class="block text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">Home</a>
                <a (click)="scrollTo('getting-started')" class="block text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">Getting Started</a>
                <a routerLink="/all-examples" class="block text-sm text-slate-400 hover:text-white transition-colors">Chart Examples</a>
                <a (click)="scrollTo('api')" class="block text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">API Reference</a>
                <a (click)="scrollTo('license')" class="block text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">License</a>
              </div>
            </div>
            <div>
              <h4 class="font-bold text-sm mb-4 text-slate-300 uppercase tracking-wider">Install</h4>
              <div class="bg-slate-800 rounded-xl px-4 py-3 flex items-center gap-2 mb-4">
                <svg class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <code class="text-sm text-slate-300 font-mono">npm install ng-recharts</code>
              </div>
              <div class="flex items-center gap-4">
                <span class="flex items-center gap-1.5 text-xs text-slate-400">
                  <svg class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  MIT License
                </span>
                <span class="flex items-center gap-1.5 text-xs text-slate-400">
                  <svg class="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Open Source
                </span>
              </div>
            </div>
          </div>
          <div class="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-xs text-slate-500">© 2024 ng-recharts contributors. Built with Recharts (MIT) and D3.js (ISC).</p>
            <div class="flex items-center gap-4">
              <span class="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 cursor-pointer transition-colors">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                GitHub
              </span>
              <span class="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 cursor-pointer transition-colors">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                NPM
              </span>
              <span class="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 cursor-pointer transition-colors">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Documentation
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: []
})
export class LandingPageComponent implements OnInit, OnDestroy {
  mobileMenuOpen = false;
  copied = false;
  activeSection = 'hero';
  expandedApi: number | null = 0;

  stats = [
    { value: '10+', label: 'Chart Types', iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { value: 'MIT', label: 'License', iconPath: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
    { value: '14+', label: 'Angular Support', iconPath: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' },
    { value: '100%', label: 'TypeScript', iconPath: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' }
  ];

  features = [
    {
      title: 'Angular Native',
      description: 'Built with Angular components, directives, and dependency injection. No React runtime required.',
      color: 'bg-gradient-to-br from-red-500 to-red-700',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'MIT Licensed',
      description: 'Fully compatible MIT license. No copyleft restrictions. Safe for commercial & enterprise use.',
      color: 'bg-gradient-to-br from-green-500 to-green-700',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      title: 'Composable API',
      description: 'Mix and match chart components declaratively in your Angular templates with data binding.',
      color: 'bg-gradient-to-br from-violet-500 to-violet-700',
      iconPath: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v9a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM3 16a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z'
    },
    {
      title: 'Responsive',
      description: 'Charts automatically resize to fit their container. Works beautifully on all screen sizes.',
      color: 'bg-gradient-to-br from-cyan-500 to-cyan-700',
      iconPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ];

  angularVersions = ['Angular 14', 'Angular 15', 'Angular 16', 'Angular 17', 'Angular 18', 'Angular 19', 'Angular 20', 'Angular 21'];

  importModuleCode = `import { NgRechartsModule } from 'ng-recharts';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgRechartsModule  // <-- Add here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }`;

  standaloneComponentCode = `import { Component } from '@angular/core';
import {
  NgRechartsLineChartComponent,
  NgRechartsLineComponent,
  NgRechartsXAxisComponent,
  NgRechartsYAxisComponent,
  NgRechartsCartesianGridComponent,
  NgRechartsTooltipComponent,
  NgRechartsLegendComponent,
  NgRechartsResponsiveContainerComponent
} from 'ng-recharts';

@Component({
  standalone: true,
  imports: [
    NgRechartsLineChartComponent,
    NgRechartsLineComponent,
    NgRechartsXAxisComponent,
    NgRechartsYAxisComponent,
    NgRechartsCartesianGridComponent,
    NgRechartsTooltipComponent,
    NgRechartsLegendComponent,
    NgRechartsResponsiveContainerComponent
  ],
  template: \`
    <ng-recharts-responsive-container
      [width]="'100%'" [height]="300">
      <ng-recharts-line-chart [data]="data">
        <ng-recharts-cartesian-grid
          strokeDasharray="3 3" />
        <ng-recharts-x-axis dataKey="name" />
        <ng-recharts-y-axis />
        <ng-recharts-tooltip />
        <ng-recharts-legend />
        <ng-recharts-line type="monotone"
          dataKey="value"
          stroke="#dd0031" />
      </ng-recharts-line-chart>
    </ng-recharts-responsive-container>
  \`
})
export class ChartComponent {
  data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
  ];
}`;

  rxjsCode = `import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgRechartsBarChartComponent } from 'ng-recharts';

@Component({
  selector: 'app-dashboard',
  template: \`
    <ng-recharts-responsive-container
      [width]="'100%'" [height]="400">
      <ng-recharts-bar-chart [data]="chartData$ | async">
        <ng-recharts-cartesian-grid
          strokeDasharray="3 3" />
        <ng-recharts-x-axis dataKey="month" />
        <ng-recharts-y-axis />
        <ng-recharts-tooltip />
        <ng-recharts-bar dataKey="revenue"
          fill="#dd0031"
          [radius]="[4, 4, 0, 0]" />
      </ng-recharts-bar-chart>
    </ng-recharts-responsive-container>
  \`
})
export class DashboardComponent implements OnInit {
  chartData$!: Observable<any[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.chartData$ = this.http
      .get<any[]>('/api/revenue');
  }
}`;

  eventHandlingCode = `<ng-recharts-line-chart [data]="data"
  (chartClick)="onChartClick($event)"
  (chartMouseMove)="onMouseMove($event)">
  <ng-recharts-line dataKey="value"
    stroke="#dd0031"
    (lineClick)="onLineClick($event)"
    (lineMouseEnter)="onLineEnter($event)" />
</ng-recharts-line-chart>

// Component
export class MyChart {
  onChartClick(event: any) {
    console.log('Clicked:', event);
  }

  onLineClick(event: any) {
    console.log('Line point:', event.payload);
  }
}`;

  customTooltipCode = `<ng-recharts-line-chart [data]="data">
  <ng-recharts-tooltip
    [content]="customTooltip" />
  <ng-recharts-line dataKey="value"
    stroke="#dd0031" />
</ng-recharts-line-chart>

<ng-template #customTooltip
  let-active="active"
  let-payload="payload"
  let-label="label">
  <div *ngIf="active"
    class="custom-tooltip">
    <p class="label">
      {{ label }}
    </p>
    <p class="value">
      {{ payload[0]?.value | number }}
    </p>
  </div>
</ng-template>`;

  packageJsonCode = `{
  "name": "ng-recharts",
  "version": "1.0.0",
  "license": "MIT",
  "description": "Angular charting library built on Recharts",
  "peerDependencies": {
    "@angular/core": ">=14.0.0",
    "@angular/common": ">=14.0.0",
    "recharts": "^2.0.0"
  }
}`;

  licenseDeps = [
    { name: 'ng-recharts', license: 'MIT', desc: 'Your Angular wrapper', color: 'from-red-500 to-red-600', bg: 'bg-red-50 border-red-200' },
    { name: 'Recharts', license: 'MIT', desc: 'React charting library', color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50 border-blue-200' },
    { name: 'D3.js', license: 'ISC', desc: 'Data visualization engine', color: 'from-orange-500 to-orange-600', bg: 'bg-orange-50 border-orange-200' }
  ];

  compliancePoints = [
    { title: 'MIT ↔ MIT Compatible', desc: 'ng-recharts (MIT) wrapping Recharts (MIT) is fully permissive and compatible.' },
    { title: 'ISC ↔ MIT Compatible', desc: 'D3.js uses ISC license, which is functionally equivalent to MIT.' },
    { title: 'Wrapper, Not a Fork', desc: 'ng-recharts wraps Recharts via peer dependency — it doesn\'t copy or modify source code.' },
    { title: 'Attribution Included', desc: 'Original copyright notices are preserved in the distributed package.' },
    { title: 'No Copyleft', desc: 'None of the dependencies use GPL or LGPL. No viral licensing restrictions.' },
    { title: 'Commercial Use', desc: 'MIT and ISC both explicitly permit commercial use, modification, and distribution.' }
  ];

  chartExamples = [
    {
      title: 'Line Chart',
      angularCode: `<ng-recharts-responsive-container [width]="'100%'" [height]="300">
  <ng-recharts-line-chart [data]="salesData">
    <ng-recharts-cartesian-grid strokeDasharray="3 3" />
    <ng-recharts-x-axis dataKey="name" />
    <ng-recharts-y-axis />
    <ng-recharts-tooltip />
    <ng-recharts-legend />
    <ng-recharts-line type="monotone"
      dataKey="pv" stroke="#8b5cf6"
      [activeDot]="{ r: 8 }" />
    <ng-recharts-line type="monotone"
      dataKey="uv" stroke="#06b6d4" />
  </ng-recharts-line-chart>
</ng-recharts-responsive-container>`,
      chartComponent: 'line',
      chartConfig: {
        cartesianGrid: { strokeDasharray: '3 3' },
        xAxis: { dataKey: 'name' },
        yAxis: {},
        tooltip: {},
        legend: {},
        lines: [
          { dataKey: 'pv', stroke: '#8b5cf6', strokeWidth: 2 },
          { dataKey: 'uv', stroke: '#06b6d4', strokeWidth: 2 }
        ]
      } as LineChartConfig,
      chartData: [
        { name: 'Jan', uv: 4000, pv: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398 },
        { name: 'Mar', uv: 2000, pv: 9800 },
        { name: 'Apr', uv: 2780, pv: 3908 },
        { name: 'May', uv: 1890, pv: 4800 },
        { name: 'Jun', uv: 2390, pv: 3800 },
        { name: 'Jul', uv: 3490, pv: 4300 }
      ]
    },
    {
      title: 'Bar Chart',
      angularCode: `<ng-recharts-responsive-container [width]="'100%'" [height]="300">
  <ng-recharts-bar-chart [data]="pageData">
    <ng-recharts-cartesian-grid strokeDasharray="3 3" />
    <ng-recharts-x-axis dataKey="name" />
    <ng-recharts-y-axis />
    <ng-recharts-tooltip />
    <ng-recharts-legend />
    <ng-recharts-bar dataKey="pv" fill="#06b6d4"
      [radius]="[4, 4, 0, 0]" />
    <ng-recharts-bar dataKey="uv" fill="#8b5cf6"
      [radius]="[4, 4, 0, 0]" />
  </ng-recharts-bar-chart>
</ng-recharts-responsive-container>`,
      chartComponent: 'bar',
      chartConfig: {
        cartesianGrid: { strokeDasharray: '3 3' },
        xAxis: { dataKey: 'name' },
        yAxis: {},
        tooltip: {},
        legend: {},
        bars: [
          { dataKey: 'pv', fill: '#06b6d4' },
          { dataKey: 'uv', fill: '#8b5cf6' }
        ]
      } as BarChartConfig,
      chartData: [
        { name: 'Page A', uv: 4000, pv: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398 },
        { name: 'Page C', uv: 2000, pv: 9800 },
        { name: 'Page D', uv: 2780, pv: 3908 },
        { name: 'Page E', uv: 1890, pv: 4800 },
        { name: 'Page F', uv: 2390, pv: 3800 }
      ]
    },
    {
      title: 'Area Chart',
      angularCode: `<ng-recharts-responsive-container [width]="'100%'" [height]="300">
  <ng-recharts-area-chart [data]="trendData">
    <ng-recharts-cartesian-grid strokeDasharray="3 3" />
    <ng-recharts-x-axis dataKey="name" />
    <ng-recharts-y-axis />
    <ng-recharts-tooltip />
    <ng-recharts-area type="monotone" dataKey="uv"
      stroke="#10b981" fill="url(#colorUv2)" />
    <ng-recharts-area type="monotone" dataKey="pv"
      stroke="#8b5cf6" fill="url(#colorPv2)" />
  </ng-recharts-area-chart>
</ng-recharts-responsive-container>`,
      chartComponent: 'area',
      chartConfig: {
        defs: {
          linearGradients: [
            {
              id: 'colorUv2',
              x1: '0',
              y1: '0',
              x2: '0',
              y2: '1',
              stops: [
                { offset: '5%', stopColor: '#10b981', stopOpacity: 0.6 },
                { offset: '95%', stopColor: '#10b981', stopOpacity: 0 }
              ]
            },
            {
              id: 'colorPv2',
              x1: '0',
              y1: '0',
              x2: '0',
              y2: '1',
              stops: [
                { offset: '5%', stopColor: '#8b5cf6', stopOpacity: 0.6 },
                { offset: '95%', stopColor: '#8b5cf6', stopOpacity: 0 }
              ]
            }
          ]
        },
        cartesianGrid: { strokeDasharray: '3 3', stroke: '#f1f5f9' },
        xAxis: { dataKey: 'name' },
        yAxis: {},
        tooltip: {},
        legend: {},
        areas: [
          { dataKey: 'uv', stroke: '#10b981', fill: 'url(#colorUv2)', strokeWidth: 2 },
          { dataKey: 'pv', stroke: '#8b5cf6', fill: 'url(#colorPv2)', strokeWidth: 2 }
        ]
      } as AreaChartConfig,
      chartData: [
        { name: 'Jan', uv: 4000, pv: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398 },
        { name: 'Mar', uv: 2000, pv: 9800 },
        { name: 'Apr', uv: 2780, pv: 3908 },
        { name: 'May', uv: 1890, pv: 4800 },
        { name: 'Jun', uv: 2390, pv: 3800 },
        { name: 'Jul', uv: 3490, pv: 4300 }
      ]
    },
    {
      title: 'Pie / Donut Chart',
      angularCode: `<ng-recharts-responsive-container [width]="'100%'" [height]="300">
  <ng-recharts-pie-chart>
    <ng-recharts-pie [data]="distribution"
      cx="50%" cy="50%"
      [innerRadius]="60"
      [outerRadius]="100"
      dataKey="value">
      <ng-recharts-cell *ngFor="let entry of distribution;
        let i = index"
        [fill]="COLORS[i % COLORS.length]" />
    </ng-recharts-pie>
    <ng-recharts-tooltip />
    <ng-recharts-legend />
  </ng-recharts-pie-chart>
</ng-recharts-responsive-container>`,
      chartComponent: 'pie',
      chartConfig: {
        tooltip: {},
        legend: {},
        pie: {
          dataKey: 'value',
          nameKey: 'name',
          cx: '50%',
          cy: '50%',
          outerRadius: 100,
          innerRadius: 60
        },
        cells: [
          { fill: '#8b5cf6' },
          { fill: '#06b6d4' },
          { fill: '#f59e0b' },
          { fill: '#ef4444' },
          { fill: '#10b981' }
        ]
      } as PieChartConfig,
      chartData: [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 }
      ]
    },
    {
      title: 'Radar Chart',
      angularCode: `<ng-recharts-responsive-container [width]="'100%'" [height]="300">
  <ng-recharts-radar-chart [data]="skillData">
    <ng-recharts-polar-grid />
    <ng-recharts-polar-angle-axis dataKey="subject" />
    <ng-recharts-polar-radius-axis />
    <ng-recharts-radar name="Mike" dataKey="A"
      stroke="#8b5cf6" fill="#8b5cf6"
      [fillOpacity]="0.5" />
    <ng-recharts-radar name="Lily" dataKey="B"
      stroke="#06b6d4" fill="#06b6d4"
      [fillOpacity]="0.3" />
    <ng-recharts-legend />
  </ng-recharts-radar-chart>
</ng-recharts-responsive-container>`,
      chartComponent: 'radar',
      chartConfig: {
        polarGrid: {},
        polarAngleAxis: { dataKey: 'subject' },
        polarRadiusAxis: { angle: 90, domain: [0, 150] },
        tooltip: {},
        legend: {},
        radars: [
          { name: 'Mike', dataKey: 'A', stroke: '#8b5cf6', fill: '#8b5cf6', fillOpacity: 0.5 },
          { name: 'Lily', dataKey: 'B', stroke: '#06b6d4', fill: '#06b6d4', fillOpacity: 0.3 }
        ]
      } as RadarChartConfig,
      chartData: [
        { subject: 'Math', A: 120, B: 110, fullMark: 150 },
        { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
        { subject: 'English', A: 86, B: 130, fullMark: 150 },
        { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
        { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
        { subject: 'History', A: 65, B: 85, fullMark: 150 }
      ]
    },
    {
      title: 'Scatter Chart',
      angularCode: `<ng-recharts-responsive-container [width]="'100%'" [height]="300">
  <ng-recharts-scatter-chart>
    <ng-recharts-cartesian-grid />
    <ng-recharts-x-axis type="number" dataKey="x" name="width" unit="cm" />
    <ng-recharts-y-axis type="number" dataKey="y" name="height" unit="kg" />
    <ng-recharts-tooltip cursor="{ strokeDasharray: '3 3' }" />
    <ng-recharts-scatter name="Sample" [data]="measurements" fill="#8b5cf6" />
  </ng-recharts-scatter-chart>
</ng-recharts-responsive-container>`,
      chartComponent: 'scatter',
      chartConfig: {
        cartesianGrid: { strokeDasharray: '3 3' },
        xAxis: { dataKey: 'x', type: 'number', name: 'width', unit: 'cm' },
        yAxis: { dataKey: 'y', type: 'number', name: 'height', unit: 'kg' },
        tooltip: { cursor: { strokeDasharray: '3 3' } },
        legend: {},
        scatters: [
          { dataKey: 'z', name: 'Sample', fill: '#8b5cf6' }
        ]
      } as ScatterChartConfig,
      chartData: [
        { x: 100, y: 200, z: 200 },
        { x: 120, y: 100, z: 260 },
        { x: 170, y: 300, z: 400 },
        { x: 140, y: 250, z: 280 },
        { x: 150, y: 400, z: 500 },
        { x: 110, y: 280, z: 200 }
      ]
    }
  ];

  apiComponents = [
    { component: 'ng-recharts-line-chart', description: 'Line chart with multi-series support', inputs: ['data', 'width', 'height', 'margin', 'syncId', 'layout'], outputs: ['chartClick', 'chartMouseEnter', 'chartMouseLeave', 'chartMouseMove'] },
    { component: 'ng-recharts-bar-chart', description: 'Grouped and stacked bar charts', inputs: ['data', 'width', 'height', 'margin', 'barCategoryGap', 'barGap', 'layout', 'stackOffset'], outputs: ['chartClick', 'chartMouseEnter', 'chartMouseLeave'] },
    { component: 'ng-recharts-area-chart', description: 'Area chart with gradient fills', inputs: ['data', 'width', 'height', 'margin', 'baseValue', 'layout', 'stackOffset'], outputs: ['chartClick', 'chartMouseEnter', 'chartMouseLeave'] },
    { component: 'ng-recharts-pie-chart', description: 'Pie and donut charts with labels', inputs: ['width', 'height', 'margin'], outputs: ['chartClick', 'chartMouseEnter', 'chartMouseLeave'] },
    { component: 'ng-recharts-radar-chart', description: 'Radar / spider chart for comparison', inputs: ['data', 'width', 'height', 'cx', 'cy', 'outerRadius', 'innerRadius', 'startAngle'], outputs: ['chartClick', 'chartMouseEnter', 'chartMouseLeave'] },
    { component: 'ng-recharts-responsive-container', description: 'Auto-resizing wrapper container', inputs: ['width', 'height', 'minWidth', 'minHeight', 'aspect', 'debounce'], outputs: ['resize'] }
  ];

  ngOnInit(): void {
    // Scroll tracking
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      this.mobileMenuOpen = false;
    }
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }

  private handleScroll(): void {
    const sections = ['hero', 'getting-started', 'charts', 'api', 'license'];
    let current = sections[0];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 100) {
        current = id;
      }
    }
    this.activeSection = current;
  }
}
