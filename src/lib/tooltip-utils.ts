/**
 * Utility functions for tooltip configuration
 */

export interface TooltipStyle {
  backgroundColor?: string;
  border?: string;
  borderRadius?: string | number;
  padding?: string | number;
  [key: string]: any;
}

export interface TooltipCursor {
  stroke?: string;
  strokeWidth?: number;
  [key: string]: any;
}

/**
 * Creates a default tooltip configuration with sensible defaults
 */
export function createDefaultTooltipConfig(overrides?: any): any {
  return {
    cursor: { stroke: '#8884d8', strokeWidth: 1 },
    contentStyle: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '10px'
    },
    labelStyle: {
      fontWeight: 'bold'
    },
    ...overrides
  };
}

/**
 * Merges tooltip configuration with defaults
 */
export function mergeTooltipConfig(userConfig?: any, defaults?: any): any {
  if (!userConfig) {
    return defaults || createDefaultTooltipConfig();
  }

  return {
    ...createDefaultTooltipConfig(),
    ...userConfig,
    cursor: userConfig.cursor !== undefined 
      ? { ...createDefaultTooltipConfig().cursor, ...userConfig.cursor }
      : createDefaultTooltipConfig().cursor,
    contentStyle: userConfig.contentStyle 
      ? { ...createDefaultTooltipConfig().contentStyle, ...userConfig.contentStyle }
      : createDefaultTooltipConfig().contentStyle,
    labelStyle: userConfig.labelStyle
      ? { ...createDefaultTooltipConfig().labelStyle, ...userConfig.labelStyle }
      : createDefaultTooltipConfig().labelStyle
  };
}
