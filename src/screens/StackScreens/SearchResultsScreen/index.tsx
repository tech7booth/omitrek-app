import ShowProductsSearchResults from '@app/components/screens/StackScreens/SearchResultsScreen/ShowProductsSearchResults';
import {TStackNavigationScreenProps} from '@app/types/navigation';

function SearchResultsScreen({
  route,
}: TStackNavigationScreenProps<'SearchResultsScreen'>) {
  const query = route.params.query;

  return <ShowProductsSearchResults query={query} />;
}

export default SearchResultsScreen;
