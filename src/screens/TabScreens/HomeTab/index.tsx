import ProductsSearchBar from '@app/components/screens/TabScreens/HomeTab/ProductsSearchBar';
import {StyleSheet, View} from 'react-native';

function HomeTab() {
  return (
    <View style={styles.container}>
      <ProductsSearchBar />
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
