import {lightTheme} from '@app/constants/colors';
import {useDebounce} from '@app/hooks/useDebounce';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  placeholder?: string;
  setValue: Dispatch<SetStateAction<string>>;
};

function SearchBar({placeholder, setValue}: Props) {
  const [query, setQuery] = useState('');
  const debouncedValue = useDebounce(query);

  useEffect(() => {
    console.log('Effect render');

    setValue(debouncedValue);
  }, [debouncedValue, setValue]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="magnify" size={24} />
        <TextInput
          onChangeText={e => setQuery(e)}
          placeholder={placeholder}
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

export default SearchBar;
