import {lightTheme} from '@app/constants/colors';
import {useDebounce} from '@app/hooks/useDebounce';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  placeholder?: string;
  variant?: 'outline';
  showFilterButton?: boolean;
  setValue: Dispatch<SetStateAction<string>>;
};

function SearchBar({
  placeholder,
  setValue,
  variant,
  showFilterButton = true,
}: Props) {
  const [query, setQuery] = useState('');
  const debouncedValue = useDebounce(query);

  useEffect(() => {
    setValue(debouncedValue);
  }, [debouncedValue, setValue]);

  return (
    <View style={styles.rootContainer}>
      <View
        style={[
          styles.container,
          variant === 'outline' ? styles.outline : styles.contained,
        ]}>
        <MaterialCommunityIcons name="magnify" size={24} />
        <TextInput
          onChangeText={e => setQuery(e)}
          placeholder={placeholder}
          style={styles.textInput}
        />
      </View>
      {showFilterButton && (
        <Pressable style={styles.filterButton}>
          <MaterialCommunityIcons name="text" size={37} color={'white'} />
        </Pressable>
      )}
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
    paddingLeft: 10,
    borderRadius: 12,
  },
  outline: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, 0.14)',
  },
  contained: {
    backgroundColor: lightTheme.grey,
  },
  textInput: {
    marginLeft: 12,
    flex: 1,
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
