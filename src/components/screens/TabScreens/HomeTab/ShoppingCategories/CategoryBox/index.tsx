import Typography from '@app/components/common/Typography';
import {lightTheme} from '@app/constants/colors';
import {Image, StyleSheet, Text, View} from 'react-native';

type Props = {
  name: string;
  url: string;
  slug: string;
  imageUrl: string;
};

function CategoryBox({name, url, slug, imageUrl}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.productImage}
          source={{
            uri: imageUrl,
          }}
          resizeMode="cover"
        />
      </View>
      <Typography align="center">{name}</Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    marginVertical: 18,
  },
  innerContainer: {
    height: 65,
    width: 65,
    borderRadius: 12,
    backgroundColor: lightTheme.grey,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  productImage: {
    height: 50,
    width: 50,
  },
});

export default CategoryBox;
