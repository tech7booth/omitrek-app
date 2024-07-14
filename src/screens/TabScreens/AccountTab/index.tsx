import AccountOptions from '@app/components/screens/TabScreens/AccountTab/AccoutOptions';
import UserProfile from '@app/components/screens/TabScreens/AccountTab/UserProfile';
import {StyleSheet, View} from 'react-native';

function AccountTab() {
  return (
    <View style={styles.container}>
      <UserProfile />
      <AccountOptions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 24,
    gap: 24,
  },
});

export default AccountTab;
