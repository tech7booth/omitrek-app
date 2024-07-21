import Input from '@app/components/common/Input';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import {Formik} from 'formik';
import Button from '@app/components/common/Button';
import {useState} from 'react';
import authService from '@app/api/AuthService';
import {AxiosError} from 'axios';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {lightTheme} from '@app/constants/colors';
import useStore from '@app/store/store';
import {useNavigation} from '@react-navigation/native';
import {TUseNavigation} from '@app/types/navigation';

type TRegisterValues = {
  name: string;
  phone: string;
  password: string;
  referCode: string;
};

function RegisterHandler() {
  const [loading, setLoading] = useState(false);
  const setUser = useStore(state => state.setUser);
  const navigation = useNavigation<TUseNavigation>();

  async function handleRegister(values: TRegisterValues) {
    setLoading(true);
    try {
      await authService.createNewAccount(
        values.name,
        values.phone,
        values.password,
        values.referCode,
      );
      const loginResp = await authService.loginWithPhoneAndPassword(
        values.phone,
        values.password,
      );
      setUser({
        name: loginResp.data.name,
        userId: loginResp.data._id,
        balance: loginResp.data.balance,
        phoneNo: loginResp.data.phone,
      });
      navigation.popToTop();
    } catch (e) {
      if (e instanceof AxiosError) {
        ToastAndroid.show(
          e.response?.data?.msg || 'Something Went Wrong!',
          ToastAndroid.SHORT,
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Formik
          initialValues={{
            name: '',
            phone: '',
            password: '',
            referCode: '',
          }}
          onSubmit={handleRegister}>
          {({handleChange, values, handleSubmit}) => (
            <>
              <Input
                value={values.name}
                placeholder="Enter Name*"
                onChangeText={handleChange('name')}
              />
              <Input
                value={values.phone}
                placeholder="Enter Phone No*"
                inputMode="tel"
                onChangeText={handleChange('phone')}
              />
              <Input
                value={values.password}
                placeholder="Enter Password*"
                onChangeText={handleChange('password')}
              />
              <Input
                value={values.referCode}
                placeholder="Refer Code (Optional)"
                onChangeText={handleChange('referCode')}
              />

              <Button variant="contained" align="center" onPress={handleSubmit}>
                Create New Account
              </Button>
            </>
          )}
        </Formik>
      </View>
      <Spinner visible={loading} color={lightTheme.primaryGreen} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    gap: 10,
  },
});
export default RegisterHandler;
