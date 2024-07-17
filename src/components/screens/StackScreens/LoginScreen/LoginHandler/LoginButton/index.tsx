import Button from '@app/components/common/Button';
import {TLoginUserData} from '..';
import {useNavigation} from '@react-navigation/native';
import {TUseNavigation} from '@app/types/navigation';
import authService from '@app/api/AuthService';
import useStore from '@app/store/store';
import {ToastAndroid} from 'react-native';
import {useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {lightTheme} from '@app/constants/colors';

type Props = {
  getUserData: () => Partial<TLoginUserData>;
};

function LoginButton({getUserData}: Props) {
  const [loading, setLoading] = useState(false);

  const setUser = useStore(state => state.setUser);
  const navigation = useNavigation<TUseNavigation>();

  async function handleLogin() {
    const {phoneNo, password} = getUserData();

    if (!phoneNo || !password) {
      return;
    }

    setLoading(true);
    try {
      const user = await authService.loginWithPhoneAndPassword(
        phoneNo,
        password,
      );

      const {name, phone, _id, balance} = user.data;
      setUser({name, phoneNo: phone, userId: _id, balance});
      navigation.goBack();
    } catch (e) {
      if (e instanceof Error) {
        ToastAndroid.show(e.message, ToastAndroid.SHORT);
      } else {
        ToastAndroid.show(
          'Something Went Wrong! Try again later.',
          ToastAndroid.SHORT,
        );
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <Button onPress={handleLogin} variant="contained" align="center">
        Log In
      </Button>
      <Spinner visible={loading} color={lightTheme.primaryGreen} />
    </>
  );
}

export default LoginButton;
