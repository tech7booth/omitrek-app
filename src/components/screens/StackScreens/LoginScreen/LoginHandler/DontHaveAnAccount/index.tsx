import Typography from '@app/components/common/Typography';
import {lightTheme} from '@app/constants/colors';
import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet, View} from 'react-native';

function DontHaveAnAccount() {
  const navigation = useNavigation<TUseNavigation>();

  function handlePress() {
    navigation.push('RegisterScreen');
  }

  return (
    <View style={styles.container}>
      <Typography>Don't have an account?</Typography>
      <Pressable onPress={handlePress}>
        <Typography
          color={lightTheme.primaryGreen}
          customStyle={styles.createAccountLink}>
          Create Now
        </Typography>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
  },
  createAccountLink: {
    textDecorationLine: 'underline',
  },
});

export default DontHaveAnAccount;
