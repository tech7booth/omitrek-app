import React, {PropsWithChildren} from 'react';
import {Pressable, StyleSheet, TextStyle, View} from 'react-native';
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
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={[
          styles.button,
          variant === 'contained' ? styles.containedButton : styles.textButton,
        ]}
        android_ripple={{borderless: false}}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  containedButton: {
    backgroundColor: lightTheme.primaryGreen,
  },
  textButton: {
    paddingHorizontal: 10,
  },
});

export default Button;
