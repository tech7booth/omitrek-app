import ProductsSearch from '@app/components/screens/TabScreens/HomeTab/ProductsSearch';
import ShopSections from '@app/components/screens/TabScreens/HomeTab/ShopSections';
import ShoppingCategories from '@app/components/screens/TabScreens/HomeTab/ShoppingCategories';
import {StyleSheet, View} from 'react-native';

function HomeTab() {
  return (
    <View style={styles.container}>
      <ProductsSearch />
      <ShoppingCategories />
      <ShopSections />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
});

export default HomeTab;
