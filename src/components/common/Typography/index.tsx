import {PropsWithChildren} from 'react';
import {Text, TextStyle} from 'react-native';

type Props = {
  size?: number;
  color?: string;
  align?: TextStyle['textAlign'];
  bold?: TextStyle['fontWeight'];
} & PropsWithChildren;

function Typography({size, children, color, align, bold}: Props) {
  return (
    <Text style={{fontSize: size, color, textAlign: align, fontWeight: bold}}>
      {children}
    </Text>
  );
}

export default Typography;
