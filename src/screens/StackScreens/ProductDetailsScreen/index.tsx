import queryService from '@app/api/QueryService';
import ProductDetails from '@app/components/screens/StackScreens/ProductDetailsScreen/ProductDetails';
import {TStackNavigationScreenProps} from '@app/types/navigation';
import {useQuery} from '@tanstack/react-query';
import {ActivityIndicator} from 'react-native';

function ProductDetailsScreen({
  route,
}: TStackNavigationScreenProps<'ProductDetialsScreen'>) {
  const productId = route.params.productId;

  const productDetailsQuery = useQuery({
    queryKey: ['productsDetails', productId],
    queryFn: () => queryService.getProductDetilsById(productId),
  });

  if (productDetailsQuery.isError) {
    return null;
  }
  return productDetailsQuery.isLoading ? (
    <ActivityIndicator animating />
  ) : (
    <ProductDetails data={productDetailsQuery.data!.data} />
  );
}

export default ProductDetailsScreen;
