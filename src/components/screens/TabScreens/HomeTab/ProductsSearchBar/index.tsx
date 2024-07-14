import {lightTheme} from '@app/constants/colors';
import {useState} from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function ProductsSearchBar() {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="magnify" size={24} />
        <TextInput
          onChangeText={e => setQuery(e)}
          placeholder="Search for Products"
          style={styles.textInput}
        />
      </View>
      <Pressable style={styles.filterButton}>
        <MaterialCommunityIcons name="text" size={37} color={'white'} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: lightTheme.grey,
    borderRadius: 12,
  },
  textInput: {
    marginLeft: 12,
    marginRight: 24,
  },
  filterButton: {
    width: 54,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lightTheme.primaryGreen,
    borderRadius: 12,
    marginLeft: 12,
  },
});

export default ProductsSearchBar;
