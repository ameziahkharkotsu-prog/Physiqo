export { colors, palette, type Colors, type Palette } from './colors';
export { spacing, type Spacing, type SpacingKey } from './spacing';
export {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  typography,
  type FontFamily,
  type FontSize,
  type Typography,
  type TypographyVariant,
} from './typography';
export { radius, type Radius, type RadiusKey } from './radius';
export { shadows, type Shadows, type ShadowKey } from './shadows';

import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';
import { radius } from './radius';
import { shadows } from './shadows';

/** Aggregated theme object for convenient single import. */
export const theme = {
  colors,
  spacing,
  typography,
  radius,
  shadows,
} as const;

export type Theme = typeof theme;
