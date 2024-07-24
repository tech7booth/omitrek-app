import Typography from '@app/components/common/Typography';
import {TProductInfo} from '@app/types/api/query';
import {Pressable, ScrollView, StyleSheet} from 'react-native';

type Props = {
  variants: TProductInfo['data']['variants'];
  onChange?: (index: number) => void;
  currentIndex?: number;
};

function ProductColorVariant({variants, onChange, currentIndex}: Props) {
  return (
    <ScrollView horizontal>
      {variants.map((item, index) => (
        <Pressable
          onPress={() => onChange && onChange(index)}
          style={styles.colors}
          key={item._id}>
          <Typography
            size={22}
            bold={'bold'}
            color={currentIndex === index ? item.color.code : 'grey'}>
            {item.color.name}
          </Typography>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  colors: {
    marginRight: 10,
  },
});

export default ProductColorVariant;
