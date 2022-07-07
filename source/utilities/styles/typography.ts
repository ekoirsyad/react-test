import {StyleSheet} from 'react-native';
import {colorPalette} from './colors';

const typography = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: colorPalette.fontPrimary,
  },
  content: {
    // fontSize: 18,
    fontWeight: '500',
    color: colorPalette.fontPrimary,
  },
});

export {typography};
