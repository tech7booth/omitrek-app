import ProductsSearchBar from '@app/components/screens/TabScreens/HomeTab/ProductsSearchBar';
import ShopSections from '@app/components/screens/TabScreens/HomeTab/ShopSections';
import {StyleSheet, View} from 'react-native';

function HomeTab() {
  return (
    <View style={styles.container}>
      <ProductsSearchBar />
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
