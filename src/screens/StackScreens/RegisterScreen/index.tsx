import AppLogo from '@app/components/common/AppLogo';
import RegisterHandler from '@app/components/screens/StackScreens/RegisterScreen/RegisterHandler';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';

function RegisterScreen() {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.logoContainer}>
        <AppLogo height={70} width={140} />
      </View>
      <RegisterHandler />
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

export default RegisterScreen;
