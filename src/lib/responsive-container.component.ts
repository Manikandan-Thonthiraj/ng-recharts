import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, ContentChild, ContentChildren, QueryList, OnChanges, SimpleChanges, OnDestroy, AfterViewInit, AfterContentInit, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReactBridgeService } from './react-bridge.service';
import { BaseChartComponent } from './base-chart.component';
import * as React from 'react';
import * as Recharts from 'recharts';

/**
 * Angular wrapper for Recharts ResponsiveContainer component
 * Wraps chart components and makes them responsive
 * 
 * @example
 * ```html
 * <ng-recharts-responsive-container [width]="'100%'" [height]="400">
 *   <ng-recharts-line-chart [data]="data" [config]="config"></ng-recharts-line-chart>
 * </ng-recharts-responsive-container>
 * ```
 */
@Component({
  selector: 'ng-recharts-responsive-container',
  template: `
    <div #wrapperRef [style.position]="'relative'" [style.width]="getContainerStyle(width)" [style.height]="getContainerStyle(height)" [style.min-height.px]="minHeight || 200">
      <!-- Hidden div for ContentChildren detection - chart components are rendered here but hidden -->
      <div style="position: absolute; top: 0; left: 0; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0); pointer-events: none;">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  standalone: true
})
export class NgRechartsResponsiveContainerComponent implements OnChanges, OnDestroy, AfterViewInit, AfterContentInit, OnInit {
  @ViewChild('wrapperRef', { static: true }) wrapperRef!: ElementRef<HTMLDivElement>;
  @ContentChild(BaseChartComponent) chartComponent!: BaseChartComponent;
  @ContentChildren(BaseChartComponent, { descendants: true }) chartComponents!: QueryList<BaseChartComponent>;

  @Input() width?: string | number = '100%';
  @Input() height?: string | number = '100%';
  @Input() aspect?: number;
  @Input() minHeight?: number;
  @Input() minWidth?: number;
  @Input() debounce?: number;

  @Output() resize = new EventEmitter<{ width: number; height: number }>();

  private isRendered = false;
  private resizeObserver?: ResizeObserver;

  constructor(
    private reactBridge: ReactBridgeService,
    private cdr: ChangeDetectorRef
  ) { }

  /**
   * Helper to ensure style values have units if they are numbers
   */
  getContainerStyle(prop: string | number | undefined): string {
    if (prop === undefined || prop === null) {
      return '100%';
    }
    if (typeof prop === 'number') {
      return `${prop}px`;
    }
    // If it's a string but looks like a number (e.g. "300") and doesn't already have %, px, etc.
    const num = Number(prop);
    if (!isNaN(num) && prop.trim() !== '') {
      return `${prop}px`;
    }
    return String(prop);
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    // Mark chart component early to prevent self-rendering
    setTimeout(() => {
      this.markChartComponent();
    }, 0);
  }

  private markChartComponent(): void {
    let chartComp = this.chartComponent;
    if (!chartComp && this.chartComponents && this.chartComponents.length > 0) {
      chartComp = this.chartComponents.first;
    }

    if (chartComp && (chartComp as any).checkIfInsideResponsiveContainer) {
      (chartComp as any).checkIfInsideResponsiveContainer();
      this.chartComponent = chartComp;
    }
  }

  ngAfterViewInit(): void {
    if (!this.wrapperRef?.nativeElement) {
      console.warn('[ResponsiveContainer] wrapperRef not available');
      return;
    }

    // Subscribe to ContentChildren changes
    if (this.chartComponents) {
      this.chartComponents.changes.subscribe(() => {
        setTimeout(() => {
          this.tryRenderChart();
        }, 50);
      });
    }

    // Initial render attempt
    setTimeout(() => {
      this.tryRenderChart();
    }, 100);

    // Setup resize observer for responsive behavior
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        if (this.isRendered) {
          setTimeout(() => {
            this.renderResponsiveChart();
          }, 50);
        }
      });
      this.resizeObserver.observe(this.wrapperRef.nativeElement);
    }
  }

  private tryRenderChart(): void {
    let chartComp = this.chartComponent;
    if (!chartComp && this.chartComponents && this.chartComponents.length > 0) {
      chartComp = this.chartComponents.first;
    }

    if (chartComp && this.wrapperRef?.nativeElement) {
      this.chartComponent = chartComp;

      // Mark chart component to prevent self-rendering
      if ((chartComp as any).checkIfInsideResponsiveContainer) {
        (chartComp as any).checkIfInsideResponsiveContainer();
      }

      this.cdr.detectChanges();

      setTimeout(() => {
        this.renderResponsiveChart();
      }, 50);
    } else {
      // Retry if not found yet
      const retryCount = (this as any)._retryCount || 0;
      if (retryCount < 10 && !this.isRendered) {
        (this as any)._retryCount = retryCount + 1;
        setTimeout(() => {
          this.tryRenderChart();
        }, 100);
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isRendered && this.chartComponent) {
      const containerInputsChanged = changes['width'] || changes['height'] || changes['aspect'];
      if (containerInputsChanged) {
        setTimeout(() => {
          this.renderResponsiveChart();
        }, 0);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.wrapperRef?.nativeElement) {
      this.reactBridge.unmountReactComponent(this.wrapperRef.nativeElement);
    }
  }

  private renderResponsiveChart(): void {
    if (!this.chartComponent && this.chartComponents && this.chartComponents.length > 0) {
      this.chartComponent = this.chartComponents.first;
    }

    if (!this.wrapperRef?.nativeElement || !this.chartComponent) {
      console.warn('[ResponsiveContainer] Cannot render - missing wrapper or chart component', {
        hasWrapper: !!this.wrapperRef?.nativeElement,
        hasChartComponent: !!this.chartComponent,
        contentChildrenLength: this.chartComponents?.length || 0
      });
      return;
    }

    // Ensure chart component container is hidden
    const chartContainerElement = (this.chartComponent as any).chartContainer?.nativeElement;
    if (chartContainerElement) {
      chartContainerElement.style.display = 'none';
    }

    // React and Recharts are imported statically, so they should be available
    // But let's verify they're actually loaded
    try {
      if (typeof React === 'undefined' || !React.createElement) {
        console.error('[ResponsiveContainer] React is not available. Make sure react is installed.');
        return;
      }

      if (typeof Recharts === 'undefined' || !Recharts.ResponsiveContainer) {
        console.error('[ResponsiveContainer] Recharts is not available. Make sure recharts is installed.');
        return;
      }
    } catch (error) {
      console.error('[ResponsiveContainer] Error checking React/Recharts availability:', error);
      return;
    }

    // Get React element from chart component
    const reactElement = this.chartComponent.getReactComponent();
    if (!reactElement) {
      console.error('[ResponsiveContainer] getReactComponent() returned null', {
        chartComponent: this.chartComponent.constructor.name,
        hasData: !!(this.chartComponent as any).data,
        hasConfig: !!(this.chartComponent as any).config
      });
      return;
    }

    console.log('[ResponsiveContainer] Got React element', {
      type: (reactElement.type as any)?.displayName || reactElement.type,
      hasProps: !!reactElement.props,
      hasData: !!reactElement.props?.data,
      hasChildren: !!reactElement.props?.children
    });

    // Clone element and remove width/height (ResponsiveContainer handles sizing)
    const chartProps: any = { ...reactElement.props };
    delete chartProps.width;
    delete chartProps.height;

    const children = reactElement.props.children;
    let chartElement;
    try {
      chartElement = children
        ? React.cloneElement(reactElement, chartProps, children)
        : React.cloneElement(reactElement, chartProps);
    } catch (error) {
      console.error('[ResponsiveContainer] Failed to clone React element:', error);
      return;
    }

    // Get wrapper dimensions - wait a bit for layout to settle
    const wrapperElement = this.wrapperRef.nativeElement;
    let wrapperWidth = wrapperElement.offsetWidth || 0;
    let wrapperHeight = wrapperElement.offsetHeight || 0;

    // If wrapper has no dimensions, try getBoundingClientRect
    if (wrapperWidth === 0 || wrapperHeight === 0) {
      const rect = wrapperElement.getBoundingClientRect();
      wrapperWidth = rect.width || 0;
      wrapperHeight = rect.height || 0;
    }

    // If still no dimensions, use input props or defaults
    const finalWidth = wrapperWidth > 0
      ? wrapperWidth
      : (typeof this.width === 'number'
        ? this.width
        : (this.width === '100%' || !this.width
          ? '100%'
          : this.width));

    const finalHeight = wrapperHeight > 0
      ? wrapperHeight
      : (typeof this.height === 'number'
        ? this.height
        : (this.height || 300)); // Default to 300px if no height specified

    console.log('[ResponsiveContainer] Wrapper dimensions', {
      offsetWidth: wrapperElement.offsetWidth,
      offsetHeight: wrapperElement.offsetHeight,
      boundingRect: wrapperElement.getBoundingClientRect(),
      finalWidth,
      finalHeight,
      inputWidth: this.width,
      inputHeight: this.height
    });

    const responsiveContainerProps: any = {
      width: finalWidth,
      height: finalHeight
    };

    if (this.aspect !== undefined) {
      responsiveContainerProps.aspect = this.aspect;
    }
    if (this.minHeight !== undefined) {
      responsiveContainerProps.minHeight = this.minHeight;
    }
    if (this.minWidth !== undefined) {
      responsiveContainerProps.minWidth = this.minWidth;
    }
    if (this.debounce !== undefined) {
      responsiveContainerProps.debounce = this.debounce;
    }

    responsiveContainerProps.onResize = (width: number, height: number) => {
      this.resize.emit({ width, height });
    };

    let responsiveContainer;
    try {
      responsiveContainer = React.createElement(
        Recharts.ResponsiveContainer,
        responsiveContainerProps,
        chartElement
      );
      console.log('[ResponsiveContainer] Created ResponsiveContainer element', {
        props: responsiveContainerProps,
        hasChildren: !!chartElement
      });
    } catch (error) {
      console.error('[ResponsiveContainer] Failed to create ResponsiveContainer element:', error);
      return;
    }

    // Unmount previous render if exists
    if (this.isRendered) {
      this.reactBridge.unmountReactComponent(this.wrapperRef.nativeElement);
    }

    // Render directly into wrapper element
    try {
      console.log('[ResponsiveContainer] Rendering into wrapper', {
        wrapper: wrapperElement,
        wrapperSize: { width: wrapperWidth, height: wrapperHeight }
      });
      this.reactBridge.renderReactComponent(
        this.wrapperRef.nativeElement,
        responsiveContainer
      );
      this.isRendered = true;
      console.log('[ResponsiveContainer] Render completed successfully');
    } catch (error) {
      console.error('[ResponsiveContainer] Render failed:', error);
      console.error('[ResponsiveContainer] Error details:', {
        message: (error as Error).message,
        stack: (error as Error).stack
      });
    }
  }
}
