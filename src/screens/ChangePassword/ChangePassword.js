import {Text, View, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/common/CustomButton';
import CustomAlert from '../../components/common/CustomAlert/CustomAlert';
import {useChangePasswordMutation} from '../../redux/services/authServices';
import {useSelector} from 'react-redux';

const ChangePassword = ({navigation}) => {
  const [currPassword, setCurrPassword] = useState('');
  const [confirmCurrPassword, setConfirmCurrPassword] = useState('');
  const [new_password, setNewPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [changeUserPassword] = useChangePasswordMutation();
  const id = useSelector(state => state.auth.user.result._id);
  console.log(id, 'IDD');

  const params = {
    id: id,
    current_password: currPassword,
    new_password: new_password,
  };

  const handleUpdate = async () => {
    console.log(params, 'PARAMS');
    try {
      const response = await changeUserPassword(params);
      console.log(response.data.status, 'RESPONSE///');
      setShowAlert(false);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error in changing password:', error);
    }
  };

  const openModal = () => {
    setShowAlert(true);
  };

  return (
    <View style={styles.mainContainer}>
      <Header renderImage={true} back={true} drawer={false} />
      <View style={styles.subContainer}>
        <Text style={styles.changePassTxt}>Change Password</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.passTxt}>Current Password</Text>
          <TextInput
            value={currPassword}
            style={styles.txtInput}
            placeholder="Enter your current password"
            onChangeText={text => setCurrPassword(text)}
          />
          <Text style={styles.passTxt}>Confirm Current Password</Text>
          <TextInput
            value={confirmCurrPassword}
            style={styles.txtInput}
            placeholder="Enter current password again"
            onChangeText={text => setConfirmCurrPassword(text)}
          />
          <Text style={styles.passTxt}>New Password</Text>
          <TextInput
            placeholder="Enter new password"
            style={styles.txtInput}
            value={new_password}
            onChangeText={text => setNewPassword(text)}
          />
        </View>

        <CustomButton title="Update" onPress={openModal} />
        {showAlert && (
          <CustomAlert
            title="Thank You!"
            message="Your password has been successfully updated."
            btnTxt="OK"
            onPress={handleUpdate}
          />
        )}
      </View>
    </View>
  );
};

export default ChangePassword;
