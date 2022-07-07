import {StyleSheet} from 'react-native';
import {colorPalette} from '../../../../utilities/styles/colors';

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: colorPalette.tertiary,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colorPalette.border,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    width: '50%',
    marginTop: 15,
  },
});

export default styles;
