import Input, {InputRef} from '@app/components/common/Input';
import {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import LoginButton from './LoginButton';

export type TLoginUserData = {
  phoneNo: string;
  password: string;
};

function LoginHandler() {
  const phoneNoRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);

  function getData(): Partial<TLoginUserData> {
    return {
      phoneNo: phoneNoRef.current?.getValue(),
      password: passwordRef.current?.getValue(),
    };
  }

  return (
    <View style={styles.container}>
      <Input
        ref={phoneNoRef}
        placeholder="Enter Phone Number*"
        inputMode="tel"
      />
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
