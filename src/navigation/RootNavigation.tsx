import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigators/StackNavigator';
import {StatusBar, useColorScheme} from 'react-native';
import {DarkTheme} from '@app/theme/DarkTheme';
import {LightTheme} from '@app/theme/LightTheme';

function RootNavigation() {
  const scheme = useColorScheme();

  StatusBar.setBackgroundColor(
    scheme === 'dark'
      ? DarkTheme.colors.background
      : LightTheme.colors.background,
  );

  StatusBar.setBarStyle(scheme === 'dark' ? 'light-content' : 'dark-content');

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default RootNavigation;
