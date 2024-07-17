import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {useEffect} from 'react';
import {TStackNavigationScreenProps} from '@app/types/navigation';
import AppLogo from '@app/components/common/AppLogo';
import authService from '@app/api/AuthService';
import useStore from '@app/store/store';

function SplashScreen({
  navigation,
}: TStackNavigationScreenProps<'SplashScreen'>) {
  const setUser = useStore(state => state.setUser);

  useEffect(() => {
    const fetchUser = async () => {
      try {
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
    };

    fetchUser();
  }, [navigation, setUser]);

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
