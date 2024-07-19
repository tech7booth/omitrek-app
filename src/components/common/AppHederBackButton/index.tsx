import {lightTheme} from '@app/constants/colors';
import {TUseNavigation} from '@app/types/navigation';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Pressable, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function AppHeaderBackButton() {
  const navigation = useNavigation<TUseNavigation>();
  const theme = useTheme();

  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={[
        styles.container,
        {backgroundColor: theme.dark ? undefined : lightTheme.grey},
      ]}>
      <MaterialIcons name="arrow-back-ios" size={18} style={styles.icon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 35,
    width: 35,
    marginRight: 12,
  },
  icon: {
    transform: [{translateX: 4}],
  },
});

export default AppHeaderBackButton;
