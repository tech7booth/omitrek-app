import Input, {InputRef} from '@app/components/common/Input';
import {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import SignUpButton from './SignUpButton';

export type TSignUpUserData = {
  name: string;
  email: string;
  password: string;
};

function RegisterHandler() {
  const nameRef = useRef<InputRef>(null);
  const emailRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);

  function getData(): Partial<TSignUpUserData> {
    return {
      name: nameRef.current?.getValue(),
      email: emailRef.current?.getValue(),
      password: passwordRef.current?.getValue(),
    };
  }

  return (
    <View style={styles.container}>
      <Input ref={nameRef} placeholder="Enter Name*" />
      <Input ref={emailRef} placeholder="Enter Email*" />
      <Input ref={passwordRef} placeholder="Enter Password*" />
      <SignUpButton getUserData={getData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    gap: 10,
  },
});
export default RegisterHandler;
