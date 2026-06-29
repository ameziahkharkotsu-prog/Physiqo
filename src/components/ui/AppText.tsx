import type { ReactNode } from 'react';
import { Text, type TextProps, type TextStyle, type StyleProp } from 'react-native';

import { colors, typography } from '../../theme';

/** Typography variants exposed by the design system. */
export type AppTextVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'label'
  | 'caption';

export interface AppTextProps extends TextProps {
  /** Typography preset from the global theme. Defaults to `body`. */
  variant?: AppTextVariant;
  /** Text color override. Defaults to `colors.text.primary`. */
  color?: string;
  /** Additional text styles merged after variant and color styles. */
  style?: StyleProp<TextStyle>;
  /** Text content. */
  children: ReactNode;
}

/**
 * Primary text primitive for Physiqo.
 * Applies typography tokens and supports semantic variants across the app.
 */
export function AppText({
  variant = 'body',
  color = colors.text.primary,
  style,
  children,
  ...rest
}: AppTextProps) {
  return (
    <Text style={[typography[variant], { color }, style]} {...rest}>
      {children}
    </Text>
  );
}
