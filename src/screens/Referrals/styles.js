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

  heading: {
    fontSize: moderateScale(20),
    color: '#000000',
    fontFamily: 'Nunito-Regular',
  },

  inputContainer: {
    marginTop: moderateScale(20),
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
  },

  referralHeading: {
    color: '#000000',
    fontSize: moderateScale(20),
    fontFamily: 'Nunito-Regular',
    marginBottom: moderateScale(10),
  },

  dataContainer: {
    padding: moderateScale(10),
    elevation: moderateScale(5),
    shadowRadius: moderateScale(2),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(10),
    shadowOpacity: moderateScale(0.8),
    shadowColor: '#00000040',
    backgroundColor: '#ffffff',
    // backgroundColor:'green',
    shadowOffset: {width: 0, height: 2},
  },

  name: {
    fontSize: moderateScale(18),
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
  },

  referralData: {
    fontSize: moderateScale(16),
    marginLeft: moderateScale(5),
    color: '#00000080',
    fontFamily: 'Nunito-Regular',
  },
});
