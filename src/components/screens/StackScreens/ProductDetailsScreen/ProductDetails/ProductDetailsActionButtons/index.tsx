import cartService from '@app/api/CartService';
import Button from '@app/components/common/Button';
import {TProductInfo} from '@app/types/api/query';
import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {AxiosError} from 'axios';
import {StyleSheet, ToastAndroid, View} from 'react-native';

type Props = {
  data: TProductInfo['data'];
  activeItemIndex: number;
};

function ProductDetailsActionButtons({data, activeItemIndex}: Props) {
  const navigation = useNavigation<TUseNavigation>();

  async function addToCart() {
    try {
      //const response = await cartService.addToCart(
      //  data._id,
      //  data.variants[activeItemIndex].size,
      //);
      //
      navigation.push('CartScreen');
      ToastAndroid.show('Item Added to Cart', ToastAndroid.SHORT);
    } catch (e) {
      if (e instanceof AxiosError) {
        ToastAndroid.show(
          e.response?.data.msg || 'Something Went Wrong!!',
          ToastAndroid.SHORT,
        );
      }
    }
  }

  return (
    <View style={styles.btnContainer}>
      <Button variant="contained" buttonColor="grey" onPress={addToCart}>
        Add To Cart
      </Button>
      <Button variant="contained">Add To Bag</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default ProductDetailsActionButtons;
