import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {useEffect} from 'react';
import {TStackNavigationScreenProps} from '@app/types/navigation';
import AppLogo from '@app/components/common/AppLogo';

function SplashScreen({
  navigation,
}: TStackNavigationScreenProps<'SplashScreen'>) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('HomeScreen', {screen: 'HomeTab'});
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

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
