import Button from '@app/components/common/Button';
import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

function LogInButton() {
  const navigation = useNavigation<TUseNavigation>();

  async function navigateToLoginPage() {
    navigation.push('LoginScreen');
  }

  return (
    <Button variant="contained" align="center" onPress={navigateToLoginPage}>
      Log In
    </Button>
  );
}

export default LogInButton;
