import { StyleSheet } from 'react-native';
import { colors } from '../../contants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.baseGray700
  },
  wrapperLogo: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImg: {
    height: 32,
    width: 110,
  },
  wrapperMain: {
    position: 'relative',
    paddingHorizontal: 20,
    flex: 1,
    gap: 10,
    width: '100%',
    maxHeight: '75%',
    backgroundColor: colors.baseGray600,
  },
  wrapperForm: {
    position: 'absolute',
    top: -36,
    left: 20,
    right: 20,
    flexDirection: 'row',
    gap: 8
  },
  input: {
    flex: 1,
    height: 52,
    paddingHorizontal: 16,
    backgroundColor: colors.baseGray500,
    color: colors.baseGray100,
    borderRadius: 6,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.baseGray700
  },
  inputActive: {
    borderColor: colors.productBlue
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: 52,
    height: 52,
    backgroundColor: colors.productBlueDark,
    color: colors.baseGray100
  },
  plusImg: {
    width: 16,
    height: 16
  },
  wrapperProgress: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center'
  },
  progressContent: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    color: colors.productPurple
  },
  wrapperCount: {
    borderRadius: 10,
    paddingHorizontal: 6,
    backgroundColor: colors.baseGray300,
    textAlign: 'center'
  },
  countText: {
    color: colors.baseGray100,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  progressText: {
    fontSize: 14,
    fontWeight: 'bold'
  },

  wrapperEmptyList: {
    borderTopWidth: 1,
    borderTopColor: colors.baseGray300,
    height: 208,
    paddingVertical: 48,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clipboardImg: {
    width: 56,
    height: 56
  },
  emptyWrapperInfo: {},
  emptyInfoText: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.baseGray300
  },
});