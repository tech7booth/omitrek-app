import {useTheme} from '@react-navigation/native';
import {PropsWithChildren} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';

type Props = {
  size?: number;
  color?: string;
  align?: TextStyle['textAlign'];
  bold?: TextStyle['fontWeight'];
  customStyle?: TextStyle;
  customProps?: TextProps;
} & PropsWithChildren;

function Typography({
  size,
  children,
  color,
  align,
  bold,
  customStyle,
  customProps,
}: Props) {
  const theme = useTheme();

  const textColor = color !== undefined ? color : theme.colors.text;
  return (
    <Text
      style={[
        {fontSize: size, color: textColor, textAlign: align, fontWeight: bold},
        customStyle,
      ]}
      {...customProps}>
      {children}
    </Text>
  );
}

export default Typography;
