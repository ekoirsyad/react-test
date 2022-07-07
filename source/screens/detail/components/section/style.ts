import {StyleSheet} from 'react-native';
import {colorPalette} from '../../../../utilities/styles/colors';

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colorPalette.tertiary,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colorPalette.border,
  },
  toggle: {
    position: 'absolute',
    end: 20,
  },
  copyButton: {
    flexDirection: 'row',
  },
});

export default styles;
