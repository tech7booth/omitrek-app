import cartService from '@app/api/CartService';
import queryService from '@app/api/QueryService';
import Button from '@app/components/common/Button';
import Typography from '@app/components/common/Typography';
import {TCartItmesResponse} from '@app/types/api/cart';
import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {
  View,
  ActivityIndicator,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';

type Props = {
  data: TCartItmesResponse['data'][number];
};

function CartItem({data}: Props) {
  const queryClient = useQueryClient();
  const cartItemQuery = useQuery({
    queryKey: ['cartItem', data.product],
    queryFn: () => queryService.getProductDetilsById(data.product),
  });
  const cartMutation = useMutation({
    mutationFn: () => cartService.deleteItemFromCart(data._id),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ['cartList']}),
  });
  const navigation = useNavigation<TUseNavigation>();

  if (cartItemQuery.isLoading) {
    return <ActivityIndicator animating />;
  }

  return !cartItemQuery.isError ? (
    <View style={{marginVertical: 15}}>
      <Pressable
        onPress={() =>
          navigation.push('ProductDetialsScreen', {productId: data.product})
        }
        style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={StyleSheet.absoluteFill}
            source={{uri: cartItemQuery.data?.data.images[0]}}
          />
        </View>
        <View style={styles.details}>
          <Typography size={20}>{cartItemQuery.data?.data.name}</Typography>
          <Typography size={12} color="grey" customProps={{numberOfLines: 1}}>
            {cartItemQuery.data?.data.description}
          </Typography>
          <Typography size={18}>₹{cartItemQuery.data?.data.mrp}</Typography>
        </View>
      </Pressable>
      <View style={styles.btnContainer}>
        {cartMutation.isPending ? (
          <ActivityIndicator animating color={'#CD5C5C'} />
        ) : (
          <Button
            variant="contained"
            align="center"
            buttonColor="#CD5C5C"
            onPress={() => {
              cartMutation.mutate();
            }}>
            Delete from Cart
          </Button>
        )}
      </View>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
    overflow: 'hidden',
    borderRadius: 12,
  },
  details: {
    gap: 4,
  },
  btnContainer: {
    marginHorizontal: 30,
  },
});

export default CartItem;
