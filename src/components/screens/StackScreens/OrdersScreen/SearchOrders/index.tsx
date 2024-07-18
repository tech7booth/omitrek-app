import SearchBar from '@app/components/shared/SearchBar';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

function SearchOrders() {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar
        variant="outline"
        showFilterButton={false}
        props={{
          placeholder: 'Search your orders',
          onChangeText: setQuery,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
});

export default SearchOrders;
