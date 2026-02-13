import {
  Component,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
  AfterViewInit
} from '@angular/core';
import { ReactBridgeService } from './react-bridge.service';
import * as React from 'react';

/**
 * Base component for all Recharts components
 * Provides common functionality for rendering React components in Angular
 */
@Component({
  selector: 'ng-recharts-base',
  template: '<div #chartContainer [style.display]="getContainerDisplay()" style="display: block;"></div>',
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export abstract class BaseChartComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef<HTMLDivElement>;

  @Output() chartClick = new EventEmitter<any>();
  @Output() barClick = new EventEmitter<any>();
  @Output() lineClick = new EventEmitter<any>();
  @Output() areaClick = new EventEmitter<any>();
  @Output() cellClick = new EventEmitter<any>();
  @Output() radarClick = new EventEmitter<any>();

  public abstract getReactComponent(): any;

  // Flag to track if this component is inside a ResponsiveContainer
  // When true, the component won't render itself (ResponsiveContainer will handle it)
  private _isInsideResponsiveContainer = false;
  private _hasRendered = false;

  constructor(protected reactBridge: ReactBridgeService) { }

  /**
   * Get display style for container div
   * Hides the container when inside ResponsiveContainer to prevent empty div
   */
  getContainerDisplay(): string {
    return this._isInsideResponsiveContainer ? 'none' : 'block';
  }

  /**
   * Check if this component is inside a ResponsiveContainer
   * This prevents double rendering
   */
  public checkIfInsideResponsiveContainer(): void {
    // Mark as inside ResponsiveContainer - this is called by ResponsiveContainer itself
    this._isInsideResponsiveContainer = true;
    // If already rendered, unmount it since ResponsiveContainer will handle rendering
    if (this._hasRendered && this.chartContainer?.nativeElement) {
      this.reactBridge.unmountReactComponent(this.chartContainer.nativeElement);
      this._hasRendered = false;
    }
  }

  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    // Always ensure the container div is rendered (needed for ContentChild to find it)
    // But only render React component if NOT inside ResponsiveContainer
    // Wait to give ResponsiveContainer time to detect and mark us
    setTimeout(() => {
      if (!this._isInsideResponsiveContainer) {
        this.renderChart();
      }
    }, 300);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chartContainer?.nativeElement) {
      // Use setTimeout to ensure DOM updates are complete
      setTimeout(() => {
        // Only render if NOT inside ResponsiveContainer
        // If inside ResponsiveContainer, trigger ResponsiveContainer to re-render
        if (!this._isInsideResponsiveContainer) {
          this.renderChart();
        } else {
          // Notify ResponsiveContainer that inputs changed (it will re-render)
          // This is handled by ResponsiveContainer's ngOnChanges
        }
      }, 0);
    }
  }

  ngOnDestroy(): void {
    if (this.chartContainer?.nativeElement) {
      this.reactBridge.unmountReactComponent(this.chartContainer.nativeElement);
    }
  }

  protected renderChart(): void {
    // Don't render if inside ResponsiveContainer
    if (this._isInsideResponsiveContainer) {
      console.log('[BaseChart] Skipping render - inside ResponsiveContainer', {
        component: this.constructor.name
      });
      return;
    }

    if (this.chartContainer?.nativeElement) {
      const reactElement = this.getReactComponent();
      if (!reactElement) {
        console.error('[BaseChart] getReactComponent() returned null/undefined', {
          component: this.constructor.name
        });
        return;
      }
      const elementWithEvents = this.addEventHandlers(reactElement);
      console.log('[BaseChart] Rendering chart', {
        component: this.constructor.name,
        elementType: (reactElement.type as any)?.displayName || reactElement.type,
        container: this.chartContainer.nativeElement
      });
      this.reactBridge.renderReactComponent(this.chartContainer.nativeElement, elementWithEvents);
      this._hasRendered = true;
    } else {
      console.warn('[BaseChart] chartContainer not available', {
        component: this.constructor.name
      });
    }
  }

  protected addEventHandlers(element: any): any {
    if (!element || !element.props) {
      return element;
    }

    const props: any = { ...element.props };

    // Add chart-level click handler
    if (this.chartClick.observed) {
      props.onClick = (data: any, index: number) => {
        this.chartClick.emit({ data, index, type: 'chart' });
      };
    }

    // Clone children with event handlers
    if (element.props.children) {
      const children = Array.isArray(element.props.children)
        ? element.props.children
        : [element.props.children];

      const processedChildren = children.map((child: any) => {
        if (!child || typeof child !== 'object' || !child.type) {
          return child;
        }

        const childProps: any = { ...child.props };
        const childType = child.type;

        // Check if it's a Recharts component by checking if it has displayName or comparing
        // We'll add onClick handlers based on component type
        if (this.barClick.observed && (childType?.displayName === 'Bar' || child.props.dataKey)) {
          childProps.onClick = (data: any, index: number) => {
            this.barClick.emit({ data, index, type: 'bar', config: child.props });
          };
        }

        if (this.lineClick.observed && (childType?.displayName === 'Line' || child.props.type === 'monotone')) {
          childProps.onClick = (data: any, index: number) => {
            this.lineClick.emit({ data, index, type: 'line', config: child.props });
          };
        }

        if (this.areaClick.observed && (childType?.displayName === 'Area')) {
          childProps.onClick = (data: any, index: number) => {
            this.areaClick.emit({ data, index, type: 'area', config: child.props });
          };
        }

        if (this.cellClick.observed && (childType?.displayName === 'Cell')) {
          childProps.onClick = (data: any, index: number) => {
            this.cellClick.emit({ data, index, type: 'cell', config: child.props });
          };
        }

        if (this.radarClick.observed && (childType?.displayName === 'Radar')) {
          childProps.onClick = (data: any, index: number) => {
            this.radarClick.emit({ data, index, type: 'radar', config: child.props });
          };
        }

        return React.cloneElement(child, childProps);
      });

      return React.cloneElement(element, props, ...processedChildren);
    }

    return React.cloneElement(element, props);
  }
}
