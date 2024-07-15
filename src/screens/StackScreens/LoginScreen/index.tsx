import AppLogo from '@app/components/common/AppLogo';
import LoginHandler from '@app/components/screens/StackScreens/LoginScreen/LoginHandler';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {View} from 'react-native';

function LoginScreen() {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.logoContainer}>
        <AppLogo height={70} width={140} />
      </View>
      <LoginHandler />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    marginVertical: 40,
    alignItems: 'center',
  },
});
export default LoginScreen;
