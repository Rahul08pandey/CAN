import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  subContainer: {
    padding: moderateScale(15),
  },

  profileTxt: {
    color: '#000000',
    fontSize: moderateScale(22),
    fontFamily: 'Nunito-SemiBold',
  },

  profileContainer: {
    width: moderateScale(90),
    height: moderateScale(90),
    marginTop: moderateScale(10),
    borderRadius: moderateScale(50),
    borderWidth: moderateScale(0.2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
  },

  inputContainer: {
    marginTop: moderateScale(10),
  },

  txtInputHeading: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  txtInput: {
    color: '#000000',
    borderRadius: moderateScale(8),
    paddingLeft: moderateScale(10),
    borderWidth: moderateScale(0.2),
    marginBottom: moderateScale(10),
  },

  txtInput1: {
    color: '#000000',
  },

  dobView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: moderateScale(8),
    paddingLeft: moderateScale(5),
    marginBottom: moderateScale(10),
    borderWidth: moderateScale(0.2),
  },

  img: {
    marginRight: moderateScale(10),
  },

  updateBtn: {
    marginTop: moderateScale(20),
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(10),
    backgroundColor: '#FFBD59',
  },

  updateBtnTxt: {
    fontSize: moderateScale(16),
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
  },
});
