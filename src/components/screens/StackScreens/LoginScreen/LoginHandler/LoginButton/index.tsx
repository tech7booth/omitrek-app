import Button from '@app/components/common/Button';
import {useNavigation} from '@react-navigation/native';
import {TUseNavigation} from '@app/types/navigation';
import authService from '@app/api/AuthService';
import useStore from '@app/store/store';
import {ToastAndroid} from 'react-native';
import {useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {lightTheme} from '@app/constants/colors';
import {AxiosError} from 'axios';

type Props = {
  phone: string;
  password: string;
};

function LoginButton({phone, password}: Props) {
  const [loading, setLoading] = useState(false);

  const setUser = useStore(state => state.setUser);
  const navigation = useNavigation<TUseNavigation>();

  async function handleLogin() {
    if (!phone || !password) {
      return;
    }

    setLoading(true);
    try {
      const user = await authService.loginWithPhoneAndPassword(phone, password);

      const {name, phone: mobileNumber, _id, balance} = user.data;
      setUser({name, phoneNo: mobileNumber, userId: _id, balance});
      navigation.goBack();
    } catch (e) {
      if (e instanceof AxiosError) {
        ToastAndroid.show(
          e.response?.data.msg ?? 'Something Went Wrong',
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
