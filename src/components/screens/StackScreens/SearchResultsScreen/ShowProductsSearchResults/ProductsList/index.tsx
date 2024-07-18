import {TSearchProductsResponse} from '@app/types/api/query';
import {FlatList, StyleSheet} from 'react-native';
import ProductsItem from './ProductsItem';

type Props = {
  data: TSearchProductsResponse['data'];
};

function ProductsList({data}: Props) {
  return (
    <FlatList
      data={data}
      numColumns={2}
      style={styles.flatlist}
      columnWrapperStyle={styles.columnWrapper}
      renderItem={({item}) => <ProductsItem data={item} />}
      keyExtractor={item => item._id}
    />
  );
}

const styles = StyleSheet.create({
  flatlist: {
    paddingHorizontal: 15,
    paddingTop: 5,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default ProductsList;
