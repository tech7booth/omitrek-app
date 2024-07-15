import AccountOptions from '@app/components/screens/TabScreens/AccountTab/AccoutOptions';
import LogOutButton from '@app/components/screens/TabScreens/AccountTab/LogOutButton';
import UserProfile from '@app/components/screens/TabScreens/AccountTab/UserProfile';
import {StyleSheet, View} from 'react-native';

function AccountTab() {
  return (
    <View style={styles.container}>
      <UserProfile />
      <AccountOptions />
      <LogOutButton />
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
