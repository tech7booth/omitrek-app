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

function Button(props: Props) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={props.onPress}
        style={[
          styles.button,
          props.variant === 'contained'
            ? styles.containedButton
            : styles.textButton,
        ]}
        android_ripple={{borderless: false}}>
        <Typography
          size={props.size}
          align={props.align}
          color={
            props.titleColor
              ? props.titleColor
              : props.variant === 'text'
              ? lightTheme.primaryGreen
              : '#FFF'
          }
          bold={'700'}>
          {props.children}
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
