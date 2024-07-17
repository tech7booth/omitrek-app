import AppLogo from '@app/components/common/AppLogo';
import AccountOptions from '@app/components/screens/TabScreens/AccountTab/AccoutOptions';
import LogInButton from '@app/components/screens/TabScreens/AccountTab/LogInButton';
import LogOutButton from '@app/components/screens/TabScreens/AccountTab/LogOutButton';
import UserProfile from '@app/components/screens/TabScreens/AccountTab/UserProfile';
import useStore from '@app/store/store';
import {StyleSheet, View} from 'react-native';

function AccountTab() {
  const isAuthenticated = useStore(state => state.user.isAuthenticated);

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <UserProfile />
      ) : (
        <AppLogo containerStyle={styles.logoStyle} width={180} height={90} />
      )}
      <AccountOptions />
      {isAuthenticated ? <LogOutButton /> : <LogInButton />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 24,
    gap: 24,
  },
  logoStyle: {
    alignItems: 'center',
  },
});

export default AccountTab;
