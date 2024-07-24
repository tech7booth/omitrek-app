import Typography from '@app/components/common/Typography';
import {StyleSheet, View} from 'react-native';

type Props = {
  originalPrice: number;
  discountPrice: number;
};

function ProductPrice({originalPrice, discountPrice}: Props) {
  return (
    <View style={styles.container}>
      <Typography>₹{discountPrice}</Typography>
      <Typography customStyle={styles.orgPrice}>₹{originalPrice}</Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'row',
    gap: 10,
  },
  orgPrice: {
    textDecorationLine: 'line-through',
    color: 'grey',
  },
});

export default ProductPrice;
