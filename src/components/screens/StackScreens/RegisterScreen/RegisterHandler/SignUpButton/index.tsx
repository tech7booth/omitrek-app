import Button from '@app/components/common/Button';
import Typography from '@app/components/common/Typography';
import {lightTheme} from '@app/constants/colors';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import {TSignUpUserData} from '..';
import {useNavigation} from '@react-navigation/native';
import {TUseNavigation} from '@app/types/navigation';
import authService from '@app/api/AuthService';
import useStore from '@app/store/store';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {AxiosError} from 'axios';

type Props = {
  getUserData: () => Partial<TSignUpUserData>;
};

function SignUpButton({getUserData}: Props) {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<TUseNavigation>();
  const setUser = useStore(state => state.setUser);

  async function handleSignUp() {
    const {referCode, name, phoneNo, password} = getUserData();

    if (!name || !phoneNo || !password) {
      return;
    }
    setLoading(true);
    try {
      await authService.createNewAccount(name, phoneNo, password, referCode);
      const loginResponse = await authService.loginWithPhoneAndPassword(
        phoneNo,
        password,
      );
      setUser({
        phoneNo: loginResponse.data.phone,
        name: loginResponse.data.name,
        userId: loginResponse.data._id,
        balance: loginResponse.data.balance,
      });
      navigation.popToTop();
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
      <View style={styles.checkboxContainer}>
        <CheckBox
          tintColors={{true: lightTheme.primaryGreen}}
          value={checkboxChecked}
          onValueChange={setCheckboxChecked}
        />
        <Typography>Accept terms and conditions</Typography>
      </View>
      {checkboxChecked && (
        <Button onPress={handleSignUp} variant="contained" align="center">
          Sign Up
        </Button>
      )}
      <Spinner visible={loading} color={lightTheme.primaryGreen} />
    </>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SignUpButton;
