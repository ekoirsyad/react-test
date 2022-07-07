import {StyleSheet} from 'react-native';
import {colorPalette} from '../../../../utilities/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.transparent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '85%',
    backgroundColor: colorPalette.tertiary,
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 20,
    borderRadius: 8,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    tintColor: colorPalette.primary,
    marginRight: 10,
  },
});

export default styles;
