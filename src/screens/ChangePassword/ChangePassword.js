import {Text, View, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/common/CustomButton';
import CustomAlert from '../../components/common/CustomAlert/CustomAlert';
import {useChangePasswordMutation} from '../../redux/services/authServices';

const ChangePassword = ({navigation}) => {
  const [current_password, setCurrPassword] = useState('');
  const [new_password, setNewPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [changePassword, setChangePassword] = useState([]);
  const [changeUserPassword] = useChangePasswordMutation();

  useEffect(() => {
    const changePass = async () => {
      try {
        const body = {current_password, new_password};
        const response = await changeUserPassword(body);
        const changePassResponse = response.data;
        console.log(changePassResponse, 'CHANGE_PASSWORD');
        setChangePassword(changePassResponse);
      } catch (error) {
        console.error('Error in changing password:', error);
      }
    };
    changePass();
  }, []);

  const openModal = () => {
    setShowAlert(true);
  };

  const handleUpdate = () => {
    setShowAlert(false);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainContainer}>
      <Header renderImage={true} back={true} drawer={false} />
      <View style={styles.subContainer}>
        <Text style={styles.changePassTxt}>Change Password</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.passTxt}>Current Password</Text>
          <TextInput
            value={current_password}
            style={styles.txtInput}
            placeholder="Enter your current password"
            onChangeText={text => setCurrPassword(text)}
          />
          <Text style={styles.passTxt}>Confirm Current Password</Text>
          <TextInput
            value={current_password}
            style={styles.txtInput}
            placeholder="Enter current password again"
            onChangeText={text => setCurrPassword(text)}
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
