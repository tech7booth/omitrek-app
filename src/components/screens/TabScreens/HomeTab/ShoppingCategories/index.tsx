import {categoryList} from '@app/assets/dummyData/categoryList';
import {StyleSheet, View} from 'react-native';
import CategoryBox from './CategoryBox';
import Typography from '@app/components/common/Typography';

function ShoppingCategories() {
  return (
    <>
      <Typography size={20} bold={'bold'} customStyle={styles.textStyle}>
        Shop by Categories
      </Typography>
      <View style={styles.container}>
        {categoryList.map(item => {
          return <CategoryBox key={item.name} {...item} />;
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 16,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
export default ShoppingCategories;
