import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    // backgroundColor:'gray',
  },

  heading: {
    fontSize: moderateScale(22),
    color: '#000000',
    marginBottom: moderateScale(10),
    fontFamily: 'Nunito-SemiBold',
  },

  subContainer: {
    padding: moderateScale(15),
  },

  itemData: {
    padding: moderateScale(15),
    elevation: moderateScale(5),
    shadowRadius: moderateScale(0),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(10),
    borderWidth: moderateScale(0.4),
    shadowColor: 'black',
    backgroundColor: '#ffffff',
    shadowOffset: {width: 0, height: 2},
    borderColor: 'rgba(0, 0, 0, 0.25)',
  },

  name: {
    fontSize: moderateScale(20),
    marginLeft: moderateScale(10),
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
  },

  text: {
    fontSize: moderateScale(16),
    marginLeft: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  details: {
    fontSize: moderateScale(14),
    color: '#000000C4',
    fontFamily: 'Nunito-Regular',
  },

  txt: {
    fontSize: moderateScale(14),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },

  agendaData: {
    margin: moderateScale(1),
    padding: moderateScale(15),
    flexDirection: 'row',
    borderBottomWidth: 0.15,
    backgroundColor: '#ffffff',
  },

  dateMonthContainer: {
    width: moderateScale(69),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    borderColor: '#0A4975',
    justifyContent: 'center',
  },

  dM: {
    fontSize: moderateScale(16),
    color: '#0A4975',
    fontFamily: 'Nunito-Medium',
  },

  eventTitle: {
    fontSize: moderateScale(16),
    marginLeft: moderateScale(10),
    marginBottom: moderateScale(2),
    color: '#000000',
    marginRight: '10%',
    fontFamily: 'Nunito-Medium',
    textDecorationLine: 'underline',
  },

  eventAgenda: {
    fontSize: moderateScale(16),
    marginLeft: moderateScale(10),
    marginBottom: moderateScale(2),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  eventImgContainer: {
    marginLeft: moderateScale(10),
    flexDirection: 'row',
  },

  imgTxt: {
    fontSize: moderateScale(14),
    marginLeft: moderateScale(5),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },
});
