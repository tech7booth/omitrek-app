import {lightTheme} from '@app/constants/colors';
import {useTheme} from '@react-navigation/native';
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  variant?: 'outline';
  showFilterButton?: boolean;
  props?: TextInputProps;
};

function SearchBar({variant, showFilterButton = true, props}: Props) {
  const theme = useTheme();

  return (
    <View style={styles.rootContainer}>
      <View
        style={[
          styles.container,
          theme.dark
            ? styles.outline
            : variant === 'outline'
            ? styles.outline
            : styles.contained,
          {
            borderColor: theme.dark
              ? 'hsl(204.26, 100%, 90.78%)'
              : 'hsla(0, 0%, 0%, 0.14)',
          },
        ]}>
        <MaterialCommunityIcons name="magnify" size={24} />
        <TextInput style={styles.textInput} {...props} />
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
