import Typography from '@app/components/common/Typography';
import ImageCarousel from '@app/components/shared/ImageCarousel';
import {TProductInfo} from '@app/types/api/query';
import {useState} from 'react';
import {Image} from 'react-native';
import {Pressable, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native';
import ProductColorVariant from './ProductColorVariant';
import ProductDetailsSelectSize from './ProductDetailsSelectSize';
import ProductDetailsExtraDetails from './ProductDetailsExtraDetails';
import ProductDetailsActionButtons from './ProductDetailsActionButtons';

type Props = {
  data: TProductInfo['data'];
};

function ProductDetails({data}: Props) {
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);

  return (
    <>
      <ScrollView>
        <ImageCarousel images={data.variants[activeVariantIndex].images} />

        <View style={styles.container}>
          <View style={styles.variantContainer}>
            <Typography size={24} bold={'light'}>
              Colour
            </Typography>
            <ProductColorVariant
              variants={data.variants}
              onChange={setActiveVariantIndex}
              currentIndex={activeVariantIndex}
            />
          </View>

          {/* Multiple Image Variants */}
          <ScrollView horizontal>
            {data.variants[activeVariantIndex].images.map((item, index) => (
              <Pressable key={index}>
                <Image width={60} height={60} source={{uri: item}} />
              </Pressable>
            ))}
          </ScrollView>

          <View>
            <Typography size={22}>{data.name}</Typography>
            <Typography color="grey">{data.description}</Typography>

            <View style={styles.priceContainer}>
              <Typography size={24} customStyle={styles.orgPrice}>
                MRP {data.variants[activeVariantIndex].mrp}
              </Typography>
              <Typography size={24}>
                ₹{data.variants[activeVariantIndex].sp}
              </Typography>
            </View>
          </View>

          {/* Product Sizes */}
          <ProductDetailsSelectSize
            size={data.variants[activeVariantIndex].size}
          />

          {/* Extra Product Details */}
          <ProductDetailsExtraDetails product={data} />
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <ProductDetailsActionButtons
        data={data}
        activeItemIndex={activeVariantIndex}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    gap: 15,
  },
  priceContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    gap: 10,
  },
  orgPrice: {
    textDecorationLine: 'line-through',
    color: 'grey',
  },
  variantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  colorVariantBtn: {
    marginRight: 8,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 12,
  },
});
export default ProductDetails;
