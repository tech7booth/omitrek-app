import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {useTheme} from '@react-navigation/native';

function Input(props: TextInputProps) {
  const theme = useTheme();

  const textInputBorderColor = theme.dark
    ? 'hsl(204.26, 100%, 90.78%)'
    : 'hsla(0, 0%, 0%, 0.14)';

  return (
    <TextInput
      style={[styles.input, {borderColor: textInputBorderColor}]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
});

export default Input;
