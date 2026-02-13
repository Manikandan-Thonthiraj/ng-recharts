/**
 * Type declarations for React and Recharts
 */

declare module 'react' {
  export = React;
  export as namespace React;
}

declare module 'react-dom' {
  export = ReactDOM;
  export as namespace ReactDOM;
}

declare module 'react-dom/client' {
  export function createRoot(container: Element | DocumentFragment): Root;
  export interface Root {
    render(children: React.ReactNode): void;
    unmount(): void;
  }
}

declare module 'recharts' {
  export const LineChart: any;
  export const BarChart: any;
  export const PieChart: any;
  export const AreaChart: any;
  export const ComposedChart: any;
  export const CartesianGrid: any;
  export const XAxis: any;
  export const YAxis: any;
  export const Tooltip: any;
  export const Legend: any;
  export const Line: any;
  export const Bar: any;
  export const Area: any;
  export const Pie: any;
  export const Cell: any;
}
