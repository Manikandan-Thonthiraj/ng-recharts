import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Service that bridges React components to Angular
 * Handles React component rendering and lifecycle management
 */
@Injectable({
  providedIn: 'root'
})
export class ReactBridgeService implements OnDestroy {
  private destroy$ = new Subject<void>();
  private reactRoots = new Map<HTMLElement, any>();
  private reactDOMClientModule: any = null;
  private reactDOMLegacyModule: any = null;

  constructor(private ngZone: NgZone) {}

  /**
   * Lazy load React DOM modules using dynamic imports
   */
  private async loadReactDOM(): Promise<void> {
    if (!this.reactDOMClientModule && !this.reactDOMLegacyModule) {
      try {
        // Try React 18+ first
        this.reactDOMClientModule = await import('react-dom/client');
        console.log('[ReactBridge] Loaded react-dom/client', {
          hasCreateRoot: typeof this.reactDOMClientModule.createRoot === 'function'
        });
      } catch (e) {
        console.warn('[ReactBridge] Failed to load react-dom/client', e);
        // React 18+ not available, will use legacy
      }
      
      try {
        // Import legacy React DOM
        this.reactDOMLegacyModule = await import('react-dom');
        console.log('[ReactBridge] Loaded react-dom (legacy)', {
          hasRender: typeof this.reactDOMLegacyModule.render === 'function'
        });
      } catch (e) {
        console.error('[ReactBridge] Failed to load react-dom', e);
      }

      // Verify React is available
      try {
        const reactModule = await import('react');
        console.log('[ReactBridge] React module loaded', {
          hasCreateElement: typeof reactModule.createElement === 'function',
          version: (reactModule as any).version
        });
      } catch (e) {
        console.error('[ReactBridge] Failed to verify React module', e);
      }
    }
  }

  /**
   * Renders a React component into an Angular component's view container
   * @param containerElement The DOM element to render into
   * @param reactElement The React element to render
   */
  renderReactComponent(containerElement: HTMLElement, reactElement: any): void {
    if (!containerElement) {
      console.error('[ReactBridge] Container element is null or undefined');
      return;
    }
    
    if (!reactElement) {
      console.error('[ReactBridge] React element is null or undefined');
      return;
    }

    // Validate React element structure
    if (!reactElement.type) {
      console.error('[ReactBridge] React element missing type property', reactElement);
      return;
    }

    this.ngZone.runOutsideAngular(async () => {
      try {
        // Ensure React DOM is loaded
        await this.loadReactDOM();

        // Validate React DOM is available
        if (!this.reactDOMClientModule && !this.reactDOMLegacyModule) {
          console.error('[ReactBridge] React DOM modules failed to load. Check browser console for import errors.');
          return;
        }

        // Clean up existing root if present
        if (this.reactRoots.has(containerElement)) {
          this.unmountReactComponent(containerElement);
        }

        // Ensure container is empty before rendering
        // But preserve the container element itself (don't remove it)
        while (containerElement.firstChild) {
          containerElement.removeChild(containerElement.firstChild);
        }

        // Ensure container has dimensions
        const containerRect = containerElement.getBoundingClientRect();
        if (containerRect.width === 0 && containerRect.height === 0) {
          console.warn('[ReactBridge] Container has zero dimensions', {
            width: containerRect.width,
            height: containerRect.height,
            element: containerElement
          });
        }

        // Try React 18+ createRoot API first
        if (this.reactDOMClientModule && typeof this.reactDOMClientModule.createRoot === 'function') {
          const root = this.reactDOMClientModule.createRoot(containerElement);
          root.render(reactElement);
          this.reactRoots.set(containerElement, root);
          console.log('[ReactBridge] React 18+ render successful', {
            container: containerElement,
            elementType: (reactElement?.type as any)?.displayName || reactElement?.type,
            hasChildren: !!reactElement?.props?.children,
            containerSize: { width: containerRect.width, height: containerRect.height }
          });
        } else if (this.reactDOMLegacyModule && typeof this.reactDOMLegacyModule.render === 'function') {
          // Fallback for older React versions (React 17 and below)
          this.reactDOMLegacyModule.render(reactElement, containerElement);
          // Store a marker for legacy React so we know to use unmountComponentAtNode
          this.reactRoots.set(containerElement, { legacy: true });
          console.log('[ReactBridge] React legacy render successful', {
            container: containerElement,
            elementType: (reactElement?.type as any)?.displayName || reactElement?.type,
            containerSize: { width: containerRect.width, height: containerRect.height }
          });
        } else {
          console.error('[ReactBridge] React DOM is not available. Make sure react-dom is installed.', {
            hasClientModule: !!this.reactDOMClientModule,
            hasLegacyModule: !!this.reactDOMLegacyModule,
            clientModuleMethods: this.reactDOMClientModule ? Object.keys(this.reactDOMClientModule) : [],
            legacyModuleMethods: this.reactDOMLegacyModule ? Object.keys(this.reactDOMLegacyModule) : []
          });
        }
      } catch (error) {
        console.error('[ReactBridge] Failed to render React component:', error);
        console.error('[ReactBridge] Error details:', {
          message: (error as Error).message,
          stack: (error as Error).stack,
          container: containerElement,
          reactElement: reactElement,
          elementType: reactElement?.type
        });
      }
    });
  }

  /**
   * Updates an existing React component
   * @param containerElement The DOM element containing the React component
   * @param reactElement The updated React element
   */
  updateReactComponent(containerElement: HTMLElement, reactElement: any): void {
    if (this.reactRoots.has(containerElement)) {
      const root = this.reactRoots.get(containerElement)!;
      this.ngZone.runOutsideAngular(() => {
        root.render(reactElement);
      });
    } else {
      this.renderReactComponent(containerElement, reactElement);
    }
  }

  /**
   * Unmounts a React component from the DOM
   * @param containerElement The DOM element containing the React component
   */
  unmountReactComponent(containerElement: HTMLElement): void {
    const root = this.reactRoots.get(containerElement);
    if (root) {
      this.ngZone.runOutsideAngular(() => {
        // Check if it's a React 18+ root with unmount method
        if (root && typeof root.unmount === 'function') {
          root.unmount();
        } else if (root && root.legacy) {
          // Legacy React - use unmountComponentAtNode (only for React 17 and below)
          if (this.reactDOMLegacyModule && typeof this.reactDOMLegacyModule.unmountComponentAtNode === 'function') {
            this.reactDOMLegacyModule.unmountComponentAtNode(containerElement);
          }
        }
      });
      this.reactRoots.delete(containerElement);
    } else {
      // Try to unmount even if root is not tracked (legacy React fallback)
      this.ngZone.runOutsideAngular(async () => {
        await this.loadReactDOM();
        // Only use unmountComponentAtNode if createRoot is not available
        if (!this.reactDOMClientModule && this.reactDOMLegacyModule && typeof this.reactDOMLegacyModule.unmountComponentAtNode === 'function') {
          this.reactDOMLegacyModule.unmountComponentAtNode(containerElement);
        }
      });
    }
  }

  ngOnDestroy(): void {
    // Clean up all React roots
    this.reactRoots.forEach((root, element) => {
      this.ngZone.runOutsideAngular(() => {
        // Use React 18+ unmount if available
        if (root && typeof root.unmount === 'function') {
          root.unmount();
        } else if (root && root.legacy) {
          // Legacy React - use unmountComponentAtNode (only for React 17 and below)
          if (this.reactDOMLegacyModule && typeof this.reactDOMLegacyModule.unmountComponentAtNode === 'function') {
            this.reactDOMLegacyModule.unmountComponentAtNode(element);
          }
        }
      });
    });
    this.reactRoots.clear();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
