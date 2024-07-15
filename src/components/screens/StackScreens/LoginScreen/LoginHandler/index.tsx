import Input, {InputRef} from '@app/components/common/Input';
import {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import LoginButton from './LoginButton';

export type TLoginUserData = {
  email: string;
  password: string;
};

function LoginHandler() {
  const emailRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);

  function getData(): Partial<TLoginUserData> {
    return {
      email: emailRef.current?.getValue(),
      password: passwordRef.current?.getValue(),
    };
  }

  return (
    <View style={styles.container}>
      <Input ref={emailRef} placeholder="Enter Email*" />
      <Input ref={passwordRef} placeholder="Enter Password*" />
      <LoginButton getUserData={getData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    gap: 10,
  },
});
export default LoginHandler;
