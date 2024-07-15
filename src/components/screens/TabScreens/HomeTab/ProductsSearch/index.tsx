import SearchBar from '@app/components/shared/SearchBar';
import {useState} from 'react';

function ProductsSearch() {
  const [query, setQuery] = useState('');

  return <SearchBar setValue={setQuery} placeholder="Search for Products" />;
}

export default ProductsSearch;
