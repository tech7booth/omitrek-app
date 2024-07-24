import cartService from '@app/api/CartService';
import Button from '@app/components/common/Button';
import {TProductInfo} from '@app/types/api/query';
import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import {ActivityIndicator, StyleSheet, ToastAndroid, View} from 'react-native';

type Props = {
  data: TProductInfo['data'];
  activeItemIndex: number;
};

function ProductDetailsActionButtons({data, activeItemIndex}: Props) {
  const navigation = useNavigation<TUseNavigation>();
  const addToCartMutation = useMutation({
    mutationFn: () =>
      cartService.addToCart(data._id, data.variants[activeItemIndex].size),
    onSuccess: () => {
      ToastAndroid.show('Item Added to Cart', ToastAndroid.SHORT);
      navigation.push('CartScreen');
    },
    onError: () => {
      ToastAndroid.show('Something Went Wrong!!', ToastAndroid.SHORT);
    },
  });

  return (
    <View style={styles.btnContainer}>
      {addToCartMutation.isPending ? (
        <ActivityIndicator color={'grey'} />
      ) : (
        <Button
          variant="contained"
          buttonColor="grey"
          onPress={() => addToCartMutation.mutate()}>
          Add To Cart
        </Button>
      )}
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
