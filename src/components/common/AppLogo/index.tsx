import {assets} from '@app/constants/assets';
import {Image, StyleProp, View, ViewStyle} from 'react-native';

type Props = {
  height: number;
  width: number;
  containerStyle?: StyleProp<ViewStyle>;
};

function AppLogo({height, width, containerStyle}: Props) {
  return (
    <View style={containerStyle}>
      <Image source={assets.image.logo} style={{width, height}} />
    </View>
  );
}

export default AppLogo;
