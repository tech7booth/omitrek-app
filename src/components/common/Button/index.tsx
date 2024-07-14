import React, {PropsWithChildren} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Typography from '../Typography';
import {lightTheme} from '@app/constants/colors';

type Props = {
  variant?: 'contained' | 'text';
  titleColor?: string;
  onPress?: () => void;
} & Required<PropsWithChildren>;

function Button({children, onPress, variant = 'text', titleColor}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={variant === 'contained' && styles.containedButton}>
      <Typography
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
  containedButton: {
    backgroundColor: lightTheme.primaryGreen,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
});

export default Button;
