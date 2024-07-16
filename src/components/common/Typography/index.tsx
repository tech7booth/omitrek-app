import {PropsWithChildren} from 'react';
import {Text, TextStyle} from 'react-native';

type Props = {
  size?: number;
  color?: string;
  align?: TextStyle['textAlign'];
  bold?: TextStyle['fontWeight'];
  customStyle?: TextStyle;
} & PropsWithChildren;

function Typography({size, children, color, align, bold, customStyle}: Props) {
  return (
    <Text
      style={[
        {fontSize: size, color, textAlign: align, fontWeight: bold},
        customStyle,
      ]}>
      {children}
    </Text>
  );
}

export default Typography;
