import AppLogo from '@app/components/common/AppLogo';
import useStore from '@app/store/store';
import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function AppHeader() {
  const isAuthenticated = useStore(state => state.user.isAuthenticated);
  const navigation = useNavigation<TUseNavigation>();

  return (
    <View style={styles.container}>
      <AppLogo height={41} width={82} />
      <View style={styles.actions}>
        {isAuthenticated && (
          <>
            {/*<MaterialCommunityIcons name="bell-outline" size={20} />*/}
            <MaterialCommunityIcons
              name="cart"
              size={20}
              onPress={() => navigation.push('CartScreen')}
            />
            <MaterialCommunityIcons
              name="gift-outline"
              size={20}
              onPress={() =>
                navigation.navigate('HomeScreen', {screen: 'CouponsTab'})
              }
            />
          </>
        )}
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
