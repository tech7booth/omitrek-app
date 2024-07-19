import {DarkTheme as NativeDarkTheme} from '@react-navigation/native';

export const DarkTheme = {
  dark: true,
  colors: {
    ...NativeDarkTheme.colors,
    background: 'hsl(0, 0%, 10.59%)',
  },
};
