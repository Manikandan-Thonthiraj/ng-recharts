import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-row',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border border-slate-200 rounded-xl overflow-hidden">
      <button (click)="toggle.emit()" 
              class="w-full flex items-center gap-3 px-5 py-4 bg-white hover:bg-slate-50 transition-colors text-left">
        <svg *ngIf="expanded" class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
        <svg *ngIf="!expanded" class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <code class="text-sm font-mono text-red-600 bg-red-50 px-2 py-0.5 rounded-lg">&lt;{{ component }}&gt;</code>
        <span class="text-sm text-slate-500 hidden sm:inline">{{ description }}</span>
      </button>
      <div *ngIf="expanded" class="px-5 pb-4 bg-slate-50 border-t border-slate-100">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div>
            <h4 class="text-xs font-bold text-slate-500 uppercase mb-2">Inputs (&#64;Input)</h4>
            <div class="space-y-1">
              <div *ngFor="let inp of inputs" class="flex items-center gap-2 text-xs">
                <code class="text-cyan-600 font-mono bg-cyan-50 px-1.5 py-0.5 rounded">[{{ inp }}]</code>
              </div>
            </div>
          </div>
          <div>
            <h4 class="text-xs font-bold text-slate-500 uppercase mb-2">Outputs (&#64;Output)</h4>
            <div class="space-y-1">
              <div *ngFor="let out of outputs" class="flex items-center gap-2 text-xs">
                <code class="text-violet-600 font-mono bg-violet-50 px-1.5 py-0.5 rounded">({{ out }})</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ApiRowComponent {
  @Input() expanded = false;
  @Input() component = '';
  @Input() inputs: string[] = [];
  @Input() outputs: string[] = [];
  @Input() description = '';
  @Output() toggle = new EventEmitter<void>();
}
