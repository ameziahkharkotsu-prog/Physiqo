/**
 * Border radius tokens.
 * Import from `@/theme/radius` or `@/theme`.
 */

export const radius = {
  /** 0px */
  none: 0,
  /** 4px */
  xs: 4,
  /** 8px */
  sm: 8,
  /** 12px */
  md: 12,
  /** 16px */
  lg: 16,
  /** 20px */
  xl: 20,
  /** 24px */
  '2xl': 24,
  /** 9999px — pills and fully rounded elements */
  full: 9999,
} as const;

export type Radius = typeof radius;
export type RadiusKey = keyof Radius;
