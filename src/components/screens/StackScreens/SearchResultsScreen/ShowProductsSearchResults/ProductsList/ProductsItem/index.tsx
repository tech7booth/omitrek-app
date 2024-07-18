import Button from '@app/components/common/Button';
import Typography from '@app/components/common/Typography';
import {TSearchProductsResponse} from '@app/types/api/query';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

type Props = {
  data: TSearchProductsResponse['data'][number];
};

const {width: SCREEN_WIDTH} = Dimensions.get('screen');
function ProductsItem({data}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: data?.image?.url ?? undefined}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Typography
        bold={'light'}
        customProps={{numberOfLines: 1}}
        customStyle={styles.title}
        color="#000">
        {data.name}
      </Typography>
      <View style={styles.priceContainer}>
        <Typography>₹ {(data.price || 0).toLocaleString()}</Typography>
        <Button variant="contained" align="center">
          Add To Cart
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: SCREEN_WIDTH / 2 - 24,
  },
  imageContainer: {
    borderRadius: 18,
    padding: 12,
    alignItems: 'center',
    // backgroundColor: lightTheme.grey,
  },
  image: {
    width: '95%',
    height: 150,
  },
  title: {
    marginVertical: 12,
  },
  priceContainer: {
    gap: 8,
  },
});

export default ProductsItem;
