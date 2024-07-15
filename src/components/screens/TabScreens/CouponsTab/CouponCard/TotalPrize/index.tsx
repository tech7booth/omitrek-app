import Typography from '@app/components/common/Typography';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function TotalPrize() {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.rootContainer}
      colors={['hsla(144, 67%, 41%, 0.3)', 'hsla(0, 0%, 45%, 0)']}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="trophy-outline" size={24} />
        <Typography>Price</Typography>
        <Typography bold={'bold'}>50,000</Typography>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    alignSelf: 'flex-start',
    paddingVertical: 7,
    paddingRight: 25,
    paddingLeft: 15,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default TotalPrize;
