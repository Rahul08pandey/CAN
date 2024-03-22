import {Image, ScrollView, Text, TextInput, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/common/CustomButton';
import IMAGES from '../../assets/images/index';
import {useSelector} from 'react-redux';
import {
  useLazyFetchReferralByIdQuery,
  useAddReferralsMutation,
} from '../../redux/services/authServices';

const Referrals = () => {
  const [referralData, setReferralData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
  });
  const [referrals, setReferrals] = useState([]);
  const id = useSelector(state => state.auth.user.result._id);
  const [data, error] = useLazyFetchReferralByIdQuery();
  const [addReferral] = useAddReferralsMutation();

  const getReferrals = async () => {
    try {
      const response = await data(id);
      const referral = response.data.result;
      console.log(referral);
      setReferrals(referral);
    } catch (error) {
      console.error('Error fetching referrals:', error);
    }
  };

  useEffect(() => {
    getReferrals();
  }, []);

  const handleSubmit = async () => {
    try {
      const updatedReferralData = {...referralData};
      await addReferral(updatedReferralData);
      getReferrals();
      setReferralData({name: '', email: '', phone: ''});
    } catch (error) {
      console.error('Error during referrals data:', error);
    }
  };

  const handleInputChange = (field, value) => {
    setReferralData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <Header renderImage={true} back={true} drawer={false} />

      <View style={styles.subContainer}>
        <Text style={styles.heading}>
          Refer someone whom you think can be part of CAN
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Name</Text>
          <TextInput
            value={referralData.name}
            style={styles.txtInput}
            placeholder="Enter Name"
            placeholderTextColor="rgba(0, 0, 0, 0.27)"
            onChangeText={text => handleInputChange('name', text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Email</Text>
          <TextInput
            value={referralData.email}
            style={styles.txtInput}
            placeholder="Enter Email"
            placeholderTextColor="rgba(0, 0, 0, 0.27)"
            onChangeText={text => handleInputChange('email', text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Phone</Text>
          <TextInput
            value={referralData.phone}
            style={styles.txtInput}
            placeholder="Enter Phone"
            placeholderTextColor="rgba(0, 0, 0, 0.27)"
            onChangeText={text => handleInputChange('phone', text)}
          />
        </View>
        <CustomButton title="Submit" onPress={handleSubmit} />
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.referralHeading}>My Referrals</Text>

        {referrals.map((item, index) => (
          <View key={index} style={styles.dataContainer}>
            <View
              style={{
                marginBottom: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // backgroundColor: 'green',
              }}>
              <Text style={styles.name}>{item.name}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={IMAGES.calendarSmall} />
                <Text style={styles.referralData}>
                  {new Date(item.createdAt).toLocaleDateString()}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={IMAGES.email} />
                <Text style={styles.referralData}>{item.email}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={IMAGES.contact} />
                <Text style={styles.referralData}>{item.phone}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Referrals;
