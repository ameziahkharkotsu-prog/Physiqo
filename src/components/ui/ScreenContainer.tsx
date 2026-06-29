import type { ReactNode } from 'react';
import {
  StyleSheet,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import {
  SafeAreaView,
  type Edge,
} from 'react-native-safe-area-context';

import { colors, spacing } from '../../theme';

export interface ScreenContainerProps {
  /** Screen content. */
  children: ReactNode;
  /** Safe area edges to respect. Defaults to all edges. */
  edges?: Edge[];
  /** Additional container styles merged after base layout styles. */
  style?: StyleProp<ViewStyle>;
}

/**
 * Standard screen wrapper with safe area insets, primary background,
 * and consistent horizontal padding from the spacing scale.
 */
export function ScreenContainer({
  children,
  edges,
  style,
}: ScreenContainerProps) {
  return (
    <SafeAreaView edges={edges} style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    paddingHorizontal: spacing.lg,
  },
});
