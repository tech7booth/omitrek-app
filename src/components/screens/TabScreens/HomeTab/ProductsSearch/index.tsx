import SearchBar from '@app/components/shared/SearchBar';
import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

function ProductsSearch() {
  const [query, setQuery] = useState('');

  const navigation = useNavigation<TUseNavigation>();

  function handleSubmit() {
    navigation.navigate('SearchResultsScreen', {query});
  }

  return (
    <SearchBar
      props={{
        placeholder: 'Search for products',
        onChangeText: setQuery,
        onSubmitEditing: handleSubmit,
      }}
    />
  );
}

export default ProductsSearch;
