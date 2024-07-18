import SearchBar from '@app/components/shared/SearchBar';
import {useState} from 'react';

function ShopSearch() {
  const [query, setQuery] = useState('');

  return (
    <>
      <SearchBar
        props={{
          placeholder: 'Search for shops',
          onChangeText: setQuery,
        }}
      />
    </>
  );
}

export default ShopSearch;
