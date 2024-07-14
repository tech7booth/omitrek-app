import UserDetailsFields from '@app/components/screens/StackScreens/CreateNewAddressScreen/UserDetailsFields';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';

function CreateNewAddressScreen() {
  return (
    <KeyboardAvoidingView style={styles.keyboardAvoid} behavior={'height'}>
      <UserDetailsFields />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoid: {
    flex: 1,
  },
});

export default CreateNewAddressScreen;
