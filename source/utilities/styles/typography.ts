import {StyleSheet} from 'react-native';
import {colorPalette} from './colors';
/**
 * styles for the typography component.
 */
const typography = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: colorPalette.fontPrimary,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: colorPalette.fontPrimary,
  },
  content: {
    fontWeight: '500',
    color: colorPalette.fontPrimary,
  },
  contentBold: {
    fontWeight: 'bold',
    color: colorPalette.fontPrimary,
  },
  button: {
    fontWeight: 'bold',
    color: colorPalette.primary,
  },
});

export {typography};
