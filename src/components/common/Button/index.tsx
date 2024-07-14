import React, {PropsWithChildren} from 'react';
import {Pressable, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Typography from '../Typography';
import {lightTheme} from '@app/constants/colors';

type Props = {
  variant?: 'contained' | 'text';
  titleColor?: string;
  size?: number;
  onPress?: () => void;
  align?: TextStyle['textAlign'];
} & Required<PropsWithChildren>;

function Button({
  children,
  onPress,
  variant = 'text',
  titleColor,
  size,
  align,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        variant === 'contained' ? styles.containedButton : styles.textButton,
      ]}>
      <Typography
        size={size}
        align={align}
        color={
          titleColor
            ? titleColor
            : variant === 'text'
            ? lightTheme.primaryGreen
            : '#FFF'
        }
        bold={'700'}>
        {children}
      </Typography>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  containedButton: {
    backgroundColor: lightTheme.primaryGreen,
  },
  textButton: {
    paddingHorizontal: 10,
  },
});

export default Button;
