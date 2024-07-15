import SearchBar from '@app/components/shared/SearchBar';
import {useState} from 'react';

function ShopSearch() {
  const [query, setQuery] = useState('');

  return (
    <>
      <SearchBar setValue={setQuery} placeholder="Search for Shops" />
    </>
  );
}

export default ShopSearch;
