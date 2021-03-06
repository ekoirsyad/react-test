import {StyleSheet} from 'react-native';
import {colorPalette} from '~utilities/styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colorPalette.tertiary,
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  textInputContainer: {
    flex: 1,
    fontSize: 16,
  },
  labelFilter: {
    color: colorPalette.primary,
  },
  buttonFilter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
