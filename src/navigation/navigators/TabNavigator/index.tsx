import AppHeader from '@app/components/shared/AppHeader';
import {lightTheme} from '@app/constants/colors';
import {
  AccountTab,
  FavouritesTab,
  GiftsTab,
  HomeTab,
  ShoppingBagTab,
} from '@app/screens/TabScreens';
import {TTabNavigationRoutes} from '@app/types/navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator<TTabNavigationRoutes>();

function TabNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#FFF',
      }}
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
            case 'GiftsTab':
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
        },
        header: () => <AppHeader />,
      })}>
      <Tab.Screen name="HomeTab" component={HomeTab} />
      <Tab.Screen name="GiftsTab" component={GiftsTab} />
      <Tab.Screen name="FavouritesTab" component={FavouritesTab} />
      <Tab.Screen name="ShoppingBagTab" component={ShoppingBagTab} />
      <Tab.Screen name="AccountTab" component={AccountTab} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
