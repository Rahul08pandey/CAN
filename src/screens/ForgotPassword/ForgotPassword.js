import {Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CustomButton from '../../components/common/CustomButton';
import CustomHeader from '../../components/common/CustomHeader';
import CustomAlert from '../../components/common/CustomAlert/CustomAlert';

const ForgotPassword = ({navigation}) => {
  const [dbButton, setdbButton] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const handleCancel = () => {
    navigation.navigate('Login');
  };

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainContainer}>
      <CustomHeader />

      <View style={styles.forgotContainer}>
        <Text
          style={{
            fontFamily: 'Nunito-SemiBold',
            fontSize: 30,
            color: '#000000',
            marginBottom: 20,
          }}>
          Reset Password
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Email</Text>
          <TextInput
            placeholder="Enter Email"
            placeholderTextColor="#00000045"
            style={styles.txtInput}
          />
        </View>
        <CustomButton
          title="Reset"
          twoButton={dbButton}
          onPress={openModal}
          cancelPress={handleCancel}
        />
      </View>

      <CustomAlert
        visible={isVisible}
        title="Reset Password"
        message="If that email address is in our database, we wil send you an email to reset your password."
        btnTxt="Continue"
        onPress={closeModal}
      />
    </View>
  );
};

export default ForgotPassword;
