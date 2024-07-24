import cartService from '@app/api/CartService';
import Typography from '@app/components/common/Typography';
import {useQuery} from '@tanstack/react-query';
import {ActivityIndicator, FlatList} from 'react-native';
import CartItem from './CartItem';

function CartList() {
  const cartListQuery = useQuery({
    queryKey: ['cartList'],
    queryFn: () => cartService.getCartProducts(),
  });

  if (cartListQuery.isError) {
    return <Typography>Something Went Wrong!!</Typography>;
  }

  if (cartListQuery.isLoading) {
    return <ActivityIndicator animating size={'large'} />;
  }

  return (
    <FlatList
      data={cartListQuery.data?.data}
      renderItem={({item}) => <CartItem data={item} />}
    />
  );
}

export default CartList;
