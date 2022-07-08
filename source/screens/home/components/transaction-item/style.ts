import {StyleSheet} from 'react-native';
import {colorPalette} from '~utilities/styles/colors';

const styles = StyleSheet.create({
  statusContainerPending: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: colorPalette.primary,
  },
  statusContainerSuccess: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 6,
    borderColor: colorPalette.secondary,
    backgroundColor: colorPalette.secondary,
  },
  statusLabelSuccess: {
    color: colorPalette.tertiary,
    fontWeight: 'bold',
  },
  statusLabelPending: {
    color: colorPalette.fontPrimary,
    fontWeight: 'bold',
  },
  itemContainer: {
    alignSelf: 'center',
    marginBottom: 10,
    width: '95%',
    padding: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colorPalette.tertiary,
    borderStartColor: colorPalette.primary,
    borderStartWidth: 10,
  },
  labelTitle: {
    marginBottom: 5,
  },
});

export default styles;
