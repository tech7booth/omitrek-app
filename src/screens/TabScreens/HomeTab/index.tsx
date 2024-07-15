import ProductsSearch from '@app/components/screens/TabScreens/HomeTab/ProductsSearch';
import ShopSections from '@app/components/screens/TabScreens/HomeTab/ShopSections';
import {StyleSheet, View} from 'react-native';

function HomeTab() {
  return (
    <View style={styles.container}>
      <ProductsSearch />
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
