import Button from '@app/components/common/Button';
import Typography from '@app/components/common/Typography';
import {StyleSheet, View} from 'react-native';

function BuyDetails() {
  return (
    <View style={styles.priceContainer}>
      <View style={styles.price}>
        <Typography bold={'600'} size={14}>
          Winning Price
        </Typography>
        <Typography bold={'bold'} size={18} color="#000">
          $ 2 Lakhs
        </Typography>
      </View>
      <View>
        <Button variant="contained" size={15}>
          $ 20
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  priceContainer: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    justifyContent: 'space-evenly',
  },
});

export default BuyDetails;
