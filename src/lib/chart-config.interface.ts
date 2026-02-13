/**
 * Common interfaces for chart configuration
 */

export interface ChartMargin {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface CartesianGridConfig {
  strokeDasharray?: string;
  stroke?: string;
  [key: string]: any;
}

export interface AxisConfig {
  dataKey?: string;
  type?: 'number' | 'category';
  domain?: [number | string, number | string] | ['dataMin', 'dataMax'] | ['auto', 'auto'];
  [key: string]: any;
}

export type TooltipConfig = {
  active?: boolean;
  allowEscapeViewBox?: { x?: boolean; y?: boolean };
  animationDuration?: number;
  animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
  content?: React.ReactElement | ((props: any) => React.ReactElement);
  coordinate?: { x: number; y: number };
  cursor?: boolean | React.ReactElement | { stroke?: string; strokeWidth?: number };
  filterNull?: boolean;
  formatter?: (value: any, name: any, props: any) => [React.ReactNode, string];
  isAnimationActive?: boolean;
  itemStyle?: React.CSSProperties;
  label?: string | React.ReactElement | ((props: any) => React.ReactElement);
  labelFormatter?: (label: any, payload: any[]) => React.ReactNode;
  labelStyle?: React.CSSProperties;
  offset?: number;
  position?: { x?: number; y?: number };
  separator?: string;
  trigger?: 'hover' | 'click';
  useTranslate3d?: boolean;
  viewBox?: { x?: number; y?: number; width?: number; height?: number };
  wrapperStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  [key: string]: any;
} | null | false;

export interface LegendConfig {
  [key: string]: any;
}

export interface LineConfig {
  type?: 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | 'cardinal' | 'cardinalClosed';
  dataKey?: string;
  stroke?: string;
  strokeWidth?: number;
  dot?: boolean | any;
  [key: string]: any;
}

export interface BarConfig {
  dataKey?: string;
  fill?: string;
  [key: string]: any;
}

export interface AreaConfig {
  type?: 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | 'cardinal' | 'cardinalClosed';
  dataKey?: string;
  stroke?: string;
  fill?: string;
  fillOpacity?: number;
  [key: string]: any;
}

export interface PieConfig {
  dataKey?: string;
  nameKey?: string;
  cx?: string | number;
  cy?: string | number;
  outerRadius?: number;
  innerRadius?: number;
  [key: string]: any;
}

export interface LineChartConfig {
  cartesianGrid?: CartesianGridConfig;
  xAxis?: AxisConfig;
  yAxis?: AxisConfig;
  tooltip?: TooltipConfig;
  legend?: LegendConfig;
  lines?: LineConfig[];
}

export interface BarChartConfig {
  cartesianGrid?: CartesianGridConfig;
  xAxis?: AxisConfig;
  yAxis?: AxisConfig;
  tooltip?: TooltipConfig;
  legend?: LegendConfig;
  bars?: BarConfig[];
}

export interface AreaChartConfig {
  cartesianGrid?: CartesianGridConfig;
  xAxis?: AxisConfig;
  yAxis?: AxisConfig;
  tooltip?: TooltipConfig;
  legend?: LegendConfig;
  areas?: AreaConfig[];
}

export interface PieChartConfig {
  tooltip?: TooltipConfig;
  legend?: LegendConfig;
  pie?: PieConfig;
  cells?: Array<{ fill?: string; [key: string]: any }>;
}

export interface ComposedChartConfig {
  cartesianGrid?: CartesianGridConfig;
  xAxis?: AxisConfig;
  yAxis?: AxisConfig;
  tooltip?: TooltipConfig;
  legend?: LegendConfig;
  lines?: LineConfig[];
  bars?: BarConfig[];
  areas?: AreaConfig[];
}

export interface PolarGridConfig {
  [key: string]: any;
}

export interface PolarAngleAxisConfig {
  dataKey?: string;
  [key: string]: any;
}

export interface PolarRadiusAxisConfig {
  [key: string]: any;
}

export interface RadarConfig {
  dataKey?: string;
  stroke?: string;
  fill?: string;
  fillOpacity?: number;
  [key: string]: any;
}

export interface RadarChartConfig {
  polarGrid?: PolarGridConfig;
  polarAngleAxis?: PolarAngleAxisConfig;
  polarRadiusAxis?: PolarRadiusAxisConfig;
  tooltip?: TooltipConfig;
  legend?: LegendConfig;
  radars?: RadarConfig[];
}

export interface ScatterConfig {
  dataKey?: string;
  name?: string;
  fill?: string;
  [key: string]: any;
}

export interface ScatterChartConfig {
  cartesianGrid?: CartesianGridConfig;
  xAxis?: AxisConfig;
  yAxis?: AxisConfig;
  zAxis?: { dataKey?: string; range?: number[]; [key: string]: any };
  tooltip?: TooltipConfig;
  legend?: LegendConfig;
  scatters?: ScatterConfig[];
}

export interface RadialBarConfig {
  dataKey?: string;
  cornerRadius?: number;
  fill?: string;
  [key: string]: any;
}

export interface RadialBarChartConfig {
  polarGrid?: PolarGridConfig;
  polarAngleAxis?: PolarAngleAxisConfig;
  polarRadiusAxis?: PolarRadiusAxisConfig;
  tooltip?: TooltipConfig;
  legend?: LegendConfig;
  radialBars?: RadialBarConfig[];
}

export interface TreeMapChartConfig {
  tooltip?: TooltipConfig;
  cells?: Array<{ fill?: string; [key: string]: any }>;
}
