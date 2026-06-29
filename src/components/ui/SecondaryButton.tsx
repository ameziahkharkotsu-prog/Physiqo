import {
  Pressable,
  StyleSheet,
  type PressableProps,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import { colors, radius, spacing } from '../../theme';

import { AppText } from './AppText';

const PRESS_OPACITY = 0.85;
const DISABLED_OPACITY = 0.5;
const BORDER_WIDTH = 1;

export interface SecondaryButtonProps extends Omit<PressableProps, 'style' | 'children'> {
  /** Button label text. */
  children: string;
  /** Disables interaction and applies the disabled visual state. */
  disabled?: boolean;
  /** Additional container styles merged after base button styles. */
  style?: StyleProp<ViewStyle>;
  /** Additional label styles merged after default label styles. */
  textStyle?: StyleProp<TextStyle>;
}

/**
 * Secondary outline button.
 * Uses a white background with a secondary-color border and primary text.
 */
export function SecondaryButton({
  children,
  disabled = false,
  style,
  textStyle,
  ...rest
}: SecondaryButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style,
      ]}
      {...rest}
    >
      <AppText
        variant="label"
        color={colors.text.primary}
        style={[disabled && styles.disabledText, textStyle]}
      >
        {children}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    borderWidth: BORDER_WIDTH,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  pressed: {
    opacity: PRESS_OPACITY,
  },
  disabled: {
    borderColor: colors.state.disabled,
    opacity: DISABLED_OPACITY,
  },
  disabledText: {
    color: colors.state.disabled,
  },
});
