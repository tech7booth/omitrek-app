import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, StyleSheet} from 'react-native';
import {assets} from '@app/constants/assets';
import {useEffect} from 'react';
import {TStackNavigationScreenProps} from '@app/types/navigation';

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
      <Image
        source={assets.image.logo}
        resizeMode="cover"
        style={styles.splashImage}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: 284,
    height: 142,
  },
});

export default SplashScreen;
