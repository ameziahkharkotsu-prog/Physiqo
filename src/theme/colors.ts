/**
 * Brand palette and semantic color tokens.
 * Import from `@/theme/colors` or `@/theme`.
 */

export const palette = {
  white: '#FFFFFF',
  black: '#080808',
  emerald: '#00C676',
} as const;

export const colors = {
  primary: palette.white,
  secondary: palette.black,
  accent: palette.emerald,

  background: {
    primary: palette.white,
    secondary: palette.black,
    inverse: palette.black,
  },

  text: {
    primary: palette.black,
    secondary: 'rgba(8, 8, 8, 0.64)',
    tertiary: 'rgba(8, 8, 8, 0.40)',
    inverse: palette.white,
    accent: palette.emerald,
  },

  border: {
    default: 'rgba(8, 8, 8, 0.12)',
    strong: 'rgba(8, 8, 8, 0.24)',
    inverse: 'rgba(255, 255, 255, 0.24)',
  },

  icon: {
    primary: palette.black,
    secondary: 'rgba(8, 8, 8, 0.64)',
    inverse: palette.white,
    accent: palette.emerald,
  },

  state: {
    disabled: 'rgba(8, 8, 8, 0.32)',
    overlay: 'rgba(8, 8, 8, 0.48)',
  },
} as const;

export type Palette = typeof palette;
export type Colors = typeof colors;
