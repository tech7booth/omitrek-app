import Button from '@app/components/common/Button';
import Typography from '@app/components/common/Typography';
import {lightTheme} from '@app/constants/colors';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TSignUpUserData} from '..';
import {useNavigation} from '@react-navigation/native';
import {TUseNavigation} from '@app/types/navigation';

type Props = {
  getUserData: () => Partial<TSignUpUserData>;
};

function SignUpButton({getUserData}: Props) {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const navigation = useNavigation<TUseNavigation>();

  function handleSignUp() {
    navigation.goBack();
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
