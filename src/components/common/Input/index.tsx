import {Ref, forwardRef, useImperativeHandle, useState} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import Typography from '../Typography';

export type InputRef = {
  getValue: () => string;
  setError: (showError: boolean, message?: string) => void;
};

function Input(props: TextInputProps, ref: Ref<InputRef>) {
  const [value, setValue] = useState(props.defaultValue ?? '');
  const [error, setError] = useState('');

  useImperativeHandle(ref, () => ({
    getValue: () => value,
    setError: (showError, message) => {
      if (showError && message) {
        setError(message);
      } else {
        setError('');
      }
    },
  }));

  return (
    <>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        onFocus={() => setError('')}
        {...props}
      />
      {error.length > 0 && (
        <Typography size={12} color="red">
          *{error}
        </Typography>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingHorizontal: 12,
    borderColor: 'rgba(0, 0, 0, 0.14)',
    borderRadius: 6,
  },
});

export default forwardRef(Input);
