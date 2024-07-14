import {
  AddressScreen,
  CreateNewAddressScreen,
  SplashScreen,
} from '@app/screens/StackScreens';
import {TStackNavigationRoutes} from '@app/types/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../TabNavigator';

const Stack = createNativeStackNavigator<TStackNavigationRoutes>();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#FFF',
        },
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={TabNavigator} />
      <Stack.Screen name="AddressScreen" component={AddressScreen} />
      <Stack.Screen
        name="CreateNewAddressScreen"
        component={CreateNewAddressScreen}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
