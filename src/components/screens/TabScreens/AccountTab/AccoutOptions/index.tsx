import {useNavigation} from '@react-navigation/native';
import Option from './Option';
import {TUseNavigation} from '@app/types/navigation';

function AccountOptions() {
  const navigation = useNavigation<TUseNavigation>();

  return (
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
        onPress={() => navigation.navigate('HomeScreen', {screen: 'GiftsTab'})}
      />
      <Option icon="settings" type="Material" title="Setting" />
      <Option icon="information-outline" title="About Us" />
    </>
  );
}

export default AccountOptions;
