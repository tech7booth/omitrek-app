import {
  AddressScreen,
  CreateNewAddressScreen,
  LoginScreen,
  RegisterScreen,
  SplashScreen,
} from '@app/screens/StackScreens';
import {TStackNavigationRoutes} from '@app/types/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../TabNavigator';
import AppHeaderBackButton from '@app/components/common/AppHederBackButton';
import OrdersScreen from '@app/screens/StackScreens/OrdersScreen';
import SearchResultsScreen from '@app/screens/StackScreens/SearchResultsScreen';
import {useTheme} from '@react-navigation/native';
import SettingsScreen from '@app/screens/StackScreens/SettingsScreen';
import ProductDetailsScreen from '@app/screens/StackScreens/ProductDetailsScreen';

const Stack = createNativeStackNavigator<TStackNavigationRoutes>();

function StackNavigator() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerLeft: () => <AppHeaderBackButton />,
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
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
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerTitle: 'Create New Account'}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerTitle: 'Login'}}
      />
      <Stack.Screen
        name="SearchResultsScreen"
        component={SearchResultsScreen}
        options={{headerTitle: 'Results'}}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{headerTitle: 'Settings'}}
      />
      <Stack.Screen
        name="ProductDetialsScreen"
        component={ProductDetailsScreen}
        options={{headerTitle: 'Product'}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
