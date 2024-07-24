import Button from '@app/components/common/Button';
import Typography from '@app/components/common/Typography';
import {TSearchProductResponse} from '@app/types/api/query';
import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, Image, Pressable, StyleSheet, View} from 'react-native';
import ProductPrice from './ProductPrice';

type Props = {
  data: TSearchProductResponse['data'][number];
};

const {width: SCREEN_WIDTH} = Dimensions.get('screen');
function ProductsItem({data}: Props) {
  const navigation = useNavigation<TUseNavigation>();

  function handlePress() {
    navigation.push('ProductDetialsScreen', {productId: data._id});
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: data.image}}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Typography
          bold={'light'}
          customProps={{numberOfLines: 1}}
          customStyle={styles.title}>
          {data.name}
        </Typography>
      </Pressable>
      <ProductPrice originalPrice={data.mrp} discountPrice={data.sp} />
      <Button variant="contained" align="center">
        Add To Cart
      </Button>
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
