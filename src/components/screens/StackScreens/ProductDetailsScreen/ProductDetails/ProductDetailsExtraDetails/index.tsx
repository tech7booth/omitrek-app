import Typography from '@app/components/common/Typography';
import {TProductInfo} from '@app/types/api/query';
import {StyleSheet, View} from 'react-native';

type Props = {
  product: TProductInfo['data'];
};

function ProductDetailsExtraDetails({product}: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Typography size={24}>Product Details</Typography>
        <Typography size={18} color="grey">
          Explore product’s Standout features
        </Typography>
      </View>
      <View>
        <Typography size={21}>BEST OFFERS</Typography>
        <Typography>
          Sensitive to the force, Rei grew up on the distant planet of jakka,
          surrounded by sand and ruins. Having met a smaal droid-astromechanic
          BB-8, the girl agreed to help him in search of the Resistant force.
          Brave and brave, Ray is always ready to take risks to help her
          friends. Dispite the fact that it is hass nbeen a long time since Ray
          last saw her family. She does not lose heart and ccontinue ton belive
          that she will able to find her parents and understand wjy htey left
          her. Caught in the captivity of the First Order, the girl discovered
          the power in hjerself .It hwa this that hepled her to out of capacity
          and to give worthy rsisiteanve to kylo Renu.
        </Typography>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    gap: 20,
  },
});

export default ProductDetailsExtraDetails;
