import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigators/StackNavigator';

function RootNavigation() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default RootNavigation;
