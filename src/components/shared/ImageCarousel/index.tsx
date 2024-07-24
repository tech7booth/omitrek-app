import {Image, StyleSheet, View} from 'react-native';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

type Props = {
  images: string[];
};

function ImageCarousel({images}: Props) {
  return (
    <Carousel
      loop={false}
      width={SCREEN_WIDTH}
      height={SCREEN_WIDTH}
      data={images}
      mode="parallax"
      renderItem={({item}) => (
        <View style={{width: SCREEN_WIDTH, height: SCREEN_WIDTH}}>
          <Image
            source={{uri: item}}
            resizeMode="cover"
            style={[StyleSheet.absoluteFill, styles.image]}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
  },
});

export default ImageCarousel;
