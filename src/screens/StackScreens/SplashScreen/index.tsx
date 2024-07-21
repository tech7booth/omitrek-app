import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {useCallback, useEffect} from 'react';
import {TStackNavigationScreenProps} from '@app/types/navigation';
import AppLogo from '@app/components/common/AppLogo';
import authService from '@app/api/AuthService';
import useStore from '@app/store/store';
import EncryptedStorage from 'react-native-encrypted-storage';
import {AUTH_TOKENS_KEY} from '@app/constants/keys';

function SplashScreen({
  navigation,
}: TStackNavigationScreenProps<'SplashScreen'>) {
  const setUser = useStore(state => state.setUser);

  /** Fetch Currently Logged In User */
  const fetchUser = useCallback(async () => {
    try {
      const authKeys = await EncryptedStorage.getItem(AUTH_TOKENS_KEY);
      if (!authKeys) {
        return;
      }
      const user = await authService.getLoggedInUserInfo();

      const {name, phone, _id, balance} = user.data;
      setUser({
        name,
        phoneNo: phone,
        userId: _id,
        balance,
      });
    } catch (e) {
      // ...ignore
    } finally {
      navigation.replace('HomeScreen', {screen: 'HomeTab'});
    }
  }, [navigation, setUser]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <SafeAreaView style={styles.container}>
      <AppLogo width={284} height={142} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
