import Input from '@app/components/common/Input';
import {StyleSheet, View} from 'react-native';
import DontHaveAnAccount from './DontHaveAnAccount';
import {useState} from 'react';
import LoginButton from './LoginButton';

function LoginHandler() {
  const [userDetails, setUserDetails] = useState({phone: '', password: ''});

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter Phone Number*"
        inputMode="tel"
        onChangeText={e => setUserDetails(prev => ({...prev, phone: e}))}
      />
      <Input
        placeholder="Enter Password*"
        onChangeText={e => setUserDetails(prev => ({...prev, password: e}))}
      />
      <DontHaveAnAccount />
      <LoginButton {...userDetails} />
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
