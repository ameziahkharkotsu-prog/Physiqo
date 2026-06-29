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

export interface AppButtonProps extends Omit<PressableProps, 'style' | 'children'> {
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
 * Primary call-to-action button.
 * Uses accent background with inverse text and supports press and disabled states.
 */
export function AppButton({
  children,
  disabled = false,
  style,
  textStyle,
  ...rest
}: AppButtonProps) {
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
        color={colors.text.inverse}
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
    backgroundColor: colors.accent,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  pressed: {
    opacity: PRESS_OPACITY,
  },
  disabled: {
    backgroundColor: colors.state.disabled,
    opacity: DISABLED_OPACITY,
  },
  disabledText: {
    color: colors.text.inverse,
  },
});
