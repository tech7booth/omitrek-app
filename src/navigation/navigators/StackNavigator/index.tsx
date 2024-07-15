import {
  AddressScreen,
  CreateNewAddressScreen,
  SplashScreen,
} from '@app/screens/StackScreens';
import {TStackNavigationRoutes} from '@app/types/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../TabNavigator';
import AppHeaderBackButton from '@app/components/common/AppHederBackButton';
import OrdersScreen from '@app/screens/StackScreens/OrdersScreen';

const Stack = createNativeStackNavigator<TStackNavigationRoutes>();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        contentStyle: {
          backgroundColor: '#FFF',
        },
        headerLeft: () => <AppHeaderBackButton />,
      }}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddressScreen"
        component={AddressScreen}
        options={{headerTitle: 'Address'}}
      />
      <Stack.Screen
        name="CreateNewAddressScreen"
        component={CreateNewAddressScreen}
        options={{headerTitle: 'Add New Address'}}
      />
      <Stack.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{headerTitle: 'Your Orders'}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
