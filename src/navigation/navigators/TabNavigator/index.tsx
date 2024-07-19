import AppHeader from '@app/components/shared/AppHeader';
import {lightTheme} from '@app/constants/colors';
import {
  AccountTab,
  FavouritesTab,
  CouponsTab,
  HomeTab,
  ShoppingBagTab,
} from '@app/screens/TabScreens';
import useStore from '@app/store/store';
import {TTabNavigationRoutes} from '@app/types/navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator<TTabNavigationRoutes>();

function TabNavigator() {
  const isAuthenticated = useStore(state => state.user.isAuthenticated);
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName = '';

          switch (route.name) {
            case 'HomeTab':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'FavouritesTab':
              iconName = focused ? 'cards-heart' : 'cards-heart-outline';
              break;
            case 'AccountTab':
              iconName = focused ? 'account' : 'account-outline';
              break;
            case 'CouponsTab':
              iconName = focused ? 'gift' : 'gift-outline';
              break;
            case 'ShoppingBagTab':
              iconName = focused ? 'shopping' : 'shopping-outline';
              break;
          }

          return (
            <MaterialCommunityIcons
              name={iconName}
              size={30}
              color={focused ? lightTheme.primaryGreen : color}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 81,
          backgroundColor: theme.colors.background,
        },
        headerShown: false,
      })}>
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          header: () => <AppHeader />,
          headerShown: true,
        }}
      />
      {isAuthenticated && (
        <Tab.Screen name="CouponsTab" component={CouponsTab} />
      )}
      <Tab.Screen
        name="FavouritesTab"
        component={FavouritesTab}
        options={{
          header: () => <AppHeader />,
          headerShown: true,
        }}
      />
      <Tab.Screen name="ShoppingBagTab" component={ShoppingBagTab} />
      <Tab.Screen
        name="AccountTab"
        component={AccountTab}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
