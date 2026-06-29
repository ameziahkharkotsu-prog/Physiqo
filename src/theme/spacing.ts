/**
 * Spacing scale based on a 4px grid.
 * Import from `@/theme/spacing` or `@/theme`.
 */

const BASE_UNIT = 4;

export const spacing = {
  /** 0px */
  none: 0,
  /** 2px */
  xxs: BASE_UNIT * 0.5,
  /** 4px */
  xs: BASE_UNIT,
  /** 8px */
  sm: BASE_UNIT * 2,
  /** 12px */
  md: BASE_UNIT * 3,
  /** 16px */
  lg: BASE_UNIT * 4,
  /** 20px */
  xl: BASE_UNIT * 5,
  /** 24px */
  '2xl': BASE_UNIT * 6,
  /** 32px */
  '3xl': BASE_UNIT * 8,
  /** 40px */
  '4xl': BASE_UNIT * 10,
  /** 48px */
  '5xl': BASE_UNIT * 12,
  /** 64px */
  '6xl': BASE_UNIT * 16,
} as const;

export type Spacing = typeof spacing;
export type SpacingKey = keyof Spacing;
