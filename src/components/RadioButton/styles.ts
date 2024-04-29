import { StyleSheet } from 'react-native';
import { colors } from '../../contants'

export const styles = StyleSheet.create({
  wrapperRadioButton: {
    width: 24,
    height: 24,
    backgroundColor: 'transparent',
  },
  radioButtonUnChecked: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.productBlueDark,
    borderRadius: 20,
  },
  radioButtonChecked: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.productBlueDark,
    borderRadius: 20,
    backgroundColor: colors.productBlueDark,
    justifyContent: 'center',
    alignItems: 'center'
  },
  radioButtonCheckedImg: {
    width: 10,
    height: 7,
  }
});