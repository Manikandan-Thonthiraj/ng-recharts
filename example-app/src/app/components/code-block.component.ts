import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative group">
      <button (click)="copyCode()" 
              class="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-700/50 hover:bg-slate-600/80 transition-colors text-slate-400 hover:text-white z-10">
        <svg *ngIf="!copied" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <svg *ngIf="copied" class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </button>
      <div class="bg-slate-900 rounded-xl p-4 overflow-x-auto border border-slate-800">
        <div class="flex items-center gap-2 mb-3">
          <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span class="text-[10px] text-slate-500 ml-2 uppercase font-mono">{{ language }}</span>
        </div>
        <pre class="text-sm font-mono leading-relaxed text-slate-300 whitespace-pre-wrap">{{ code }}</pre>
      </div>
    </div>
  `,
  styles: []
})
export class CodeBlockComponent {
  @Input() code = '';
  @Input() language = 'typescript';
  copied = false;

  copyCode(): void {
    navigator.clipboard.writeText(this.code).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }
}
