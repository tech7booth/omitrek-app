import {NavigatorScreenParams} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type TStackNavigationRoutes = {
  SplashScreen: undefined;
  AddressScreen: undefined;
  CreateNewAddressScreen: undefined;
  OrdersScreen: undefined;
  HomeScreen: NavigatorScreenParams<TTabNavigationRoutes>;
};

export type TTabNavigationRoutes = {
  HomeTab: undefined;
  GiftsTab: undefined;
  FavouritesTab: undefined;
  ShoppingBagTab: undefined;
  AccountTab: undefined;
};

export type TStackNavigationScreenProps<
  T extends keyof TStackNavigationRoutes,
> = NativeStackScreenProps<TStackNavigationRoutes, T>;

export type TUseNavigation = NativeStackNavigationProp<TStackNavigationRoutes>;
