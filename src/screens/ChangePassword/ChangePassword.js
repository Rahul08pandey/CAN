import {Text, View, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/common/CustomButton';
import CustomAlert from '../../components/common/CustomAlert/CustomAlert';
import {useChangePasswordMutation} from '../../redux/services/authServices';
import {useSelector} from 'react-redux';

const ChangePassword = ({navigation}) => {
  const [currPassword, setCurrPassword] = useState('');
  const [confirmCurrPassword, setConfirmCurrPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [updatePassword] = useChangePasswordMutation();
  const id = useSelector(state => state.auth.user.result._id);

  const params = {
    _id: id,
    current_password: currPassword,
    new_password: newPassword,
  };

  const handleUpdate = async () => {
    if (currPassword !== confirmCurrPassword) {
      Alert.alert(
        'Update Failed!',
        'Current password and confirm password does not match.',
      );
      return;
    }

    try {
      const response = await updatePassword(params);
      if ((response.data.status = true)) {
        setShowAlert(true);
      } else {
        Alert.alert(data.data.message);
      }
    } catch (error) {
      console.log('Error in changing password:', error);
    }
  };

  const openModal = () => {
    handleUpdate();
  };

  const closeModal = () => {
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
            value={newPassword}
            onChangeText={text => setNewPassword(text)}
          />
        </View>

        <CustomButton title="Update" onPress={openModal} />
        {showAlert && (
          <CustomAlert
            title="Thank You!"
            message="Your password has been successfully updated."
            btnTxt="OK"
            onPress={closeModal}
          />
        )}
      </View>
    </View>
  );
};

export default ChangePassword;
