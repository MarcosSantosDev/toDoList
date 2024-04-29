import { StyleSheet } from 'react-native';
import { colors } from '../../contants'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.baseGray500,
    borderWidth: 1,
    borderColor: colors.baseGray400,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 10,
    padding: 20,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapperText: {
    flex: 1
  },
  normalText: {
    color: colors.baseGray100,
    fontSize: 14
  },
  textWithCompletedProgress: {
    color: colors.baseGray300,
    textDecorationLine: 'line-through'
  },
  wrapperRemoveButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  removeButtonCheckedImg: {
    width: 14,
    height: 16,
  },
  divider: {
    marginTop: 10
  }
});