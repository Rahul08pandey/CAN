import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  forgotContainer: {
    margin: moderateScale(15),
    padding: moderateScale(20),
    marginTop: '-12%',
    backgroundColor: '#fff',
    shadowColor: '#00000040',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: moderateScale(0.8),
    shadowRadius: moderateScale(2),
    borderRadius: moderateScale(20),
    elevation: moderateScale(5),
  },

  txtInputHeading: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  txtInput: {
    width: '100%',
    color: '#000000',
    borderRadius: moderateScale(8),
    borderWidth: moderateScale(0.2),
    paddingLeft: moderateScale(10),
  },
});
