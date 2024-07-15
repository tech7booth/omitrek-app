import {StyleSheet, View} from 'react-native';
import BuyDetails from './BuyDetails';
import TotalPrize from './TotalPrize';
import CouponsLeft from './CouponsLeft';

function CouponCard() {
  return (
    <View style={styles.container}>
      <BuyDetails />
      <TotalPrize />
      <CouponsLeft />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    gap: 10,
    overflow: 'hidden',
    borderColor: 'hsla(0, 0%, 17%, 0.6)',
  },
});

export default CouponCard;
