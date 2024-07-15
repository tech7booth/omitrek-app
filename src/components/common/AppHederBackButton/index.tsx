import {lightTheme} from '@app/constants/colors';
import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function AppHeaderBackButton() {
  const navigation = useNavigation<TUseNavigation>();

  return (
    <Pressable onPress={() => navigation.goBack()} style={styles.container}>
      <MaterialIcons name="arrow-back-ios" size={18} style={styles.icon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightTheme.grey,
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
