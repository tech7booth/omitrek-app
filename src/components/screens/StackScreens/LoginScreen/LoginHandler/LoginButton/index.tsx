import Button from '@app/components/common/Button';
import {TLoginUserData} from '..';
import {useNavigation} from '@react-navigation/native';
import {TUseNavigation} from '@app/types/navigation';

type Props = {
  getUserData: () => Partial<TLoginUserData>;
};

function LoginButton({getUserData}: Props) {
  const navigation = useNavigation<TUseNavigation>();

  function handleLogin() {
    navigation.goBack();
  }
  return (
    <Button onPress={handleLogin} variant="contained" align="center">
      Log In
    </Button>
  );
}

export default LoginButton;
