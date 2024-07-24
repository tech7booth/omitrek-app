import Typography from '@app/components/common/Typography';
import {View} from 'react-native';
import {Pressable, StyleSheet} from 'react-native';

type Props = {
  size: string;
};

function ProductDetailsSelectSize({size}: Props) {
  return (
    <View style={styles.container}>
      <Typography size={24}>Select Sizes</Typography>
      <Pressable style={styles.pressable}>
        <Typography size={40}>{size}</Typography>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  pressable: {
    borderWidth: 1,
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 14,
  },
});

export default ProductDetailsSelectSize;
