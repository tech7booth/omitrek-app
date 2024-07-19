import {useNavigation} from '@react-navigation/native';
import Option from './Option';
import {TUseNavigation} from '@app/types/navigation';
import useStore from '@app/store/store';

function AccountOptions() {
  const isAuthenticated = useStore(state => state.user.isAuthenticated);
  const navigation = useNavigation<TUseNavigation>();

  return (
    <>
      {isAuthenticated && (
        <>
          <Option
            icon="purse-outline"
            title="Your Order"
            onPress={() => navigation.navigate('OrdersScreen')}
          />
          <Option
            icon="book-open-page-variant-outline"
            title="Address Book"
            onPress={() => navigation.navigate('AddressScreen')}
          />
          <Option
            icon="heart-outline"
            title="Your Wishlist"
            onPress={() =>
              navigation.navigate('HomeScreen', {screen: 'FavouritesTab'})
            }
          />
          <Option
            icon="gift-outline"
            title="Your Coupon"
            onPress={() =>
              navigation.navigate('HomeScreen', {screen: 'CouponsTab'})
            }
          />
        </>
      )}
      <Option
        icon="settings"
        type="Material"
        title="Setting"
        onPress={() => navigation.push('SettingsScreen')}
      />
      <Option icon="information-outline" title="About Us" />
    </>
  );
}

export default AccountOptions;
