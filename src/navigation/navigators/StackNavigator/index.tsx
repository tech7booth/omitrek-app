import {SplashScreen} from '@app/screens/StackScreens';
import {TStackNavigationRoutes} from '@app/types/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../TabNavigator';

const Stack = createNativeStackNavigator<TStackNavigationRoutes>();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={TabNavigator} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
