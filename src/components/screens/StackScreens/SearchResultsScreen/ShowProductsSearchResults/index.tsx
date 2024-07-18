import queryService from '@app/api/QueryService';
import SearchResultsError from '@app/components/shared/SearchResultsError';
import {lightTheme} from '@app/constants/colors';
import {useQuery} from '@tanstack/react-query';
import {ActivityIndicator} from 'react-native';
import ProductsList from './ProductsList';

type Props = {
  query: string;
};

function ShowProductsSearchResults({query}: Props) {
  const {isLoading, isError, data} = useQuery({
    queryKey: ['productResults', query],
    queryFn: () => queryService.searchProducts(query),
  });

  return (
    <>
      {isLoading && (
        <ActivityIndicator
          animating
          size={'large'}
          color={lightTheme.primaryGreen}
        />
      )}

      {isError && <SearchResultsError />}
      {data && <ProductsList data={data.data} />}
    </>
  );
}

export default ShowProductsSearchResults;
