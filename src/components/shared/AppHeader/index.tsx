import {assets} from '@app/constants/assets';
import {Image, StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function AppHeader() {
  return (
    <View style={styles.container}>
      <Image source={assets.image.logo} style={styles.logoImage} />
      <View style={styles.actions}>
        <MaterialCommunityIcons name="gift-outline" size={20} />
        <MaterialCommunityIcons name="bell-outline" size={20} />
        <MaterialCommunityIcons name="cart" size={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImage: {
    height: 41,
    width: 82,
  },
  actions: {
    flexDirection: 'row',
    gap: 14,
  },
});

export default AppHeader;
