/**
 * Helper utilities for tooltip configuration
 */

export interface TooltipFormatter {
  (value: any, name: any, props: any): [React.ReactNode, string];
}

export interface TooltipLabelFormatter {
  (label: any, payload: any[]): React.ReactNode;
}

/**
 * Creates a custom tooltip formatter
 */
export function createTooltipFormatter(
  valueFormatter?: (value: any) => string,
  nameFormatter?: (name: any) => string
): TooltipFormatter {
  return (value: any, name: any, props: any) => {
    const formattedValue = valueFormatter ? valueFormatter(value) : value;
    const formattedName = nameFormatter ? nameFormatter(name) : name;
    return [formattedValue, formattedName];
  };
}

/**
 * Creates a custom label formatter for tooltips
 */
export function createTooltipLabelFormatter(
  formatter: (label: any) => string
): TooltipLabelFormatter {
  return (label: any, payload: any[]) => {
    return formatter(label);
  };
}

/**
 * Default tooltip configuration with common settings
 */
export const defaultTooltipConfig = {
  cursor: { stroke: '#8884d8', strokeWidth: 1 },
  contentStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px'
  },
  labelStyle: {
    fontWeight: 'bold'
  }
};
