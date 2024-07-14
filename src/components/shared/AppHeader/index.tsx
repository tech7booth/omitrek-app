import AppLogo from '@app/components/common/AppLogo';
import {StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function AppHeader() {
  return (
    <View style={styles.container}>
      <AppLogo height={41} width={82} />
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
  actions: {
    flexDirection: 'row',
    gap: 14,
  },
});

export default AppHeader;
