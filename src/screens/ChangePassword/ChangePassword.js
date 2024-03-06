import {Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/common/CustomButton';
import CustomAlert from '../../components/common/CustomAlert/CustomAlert';

const ChangePassword = ({navigation}) => {
  const [currPassword, setCurrPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

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
            value={currPassword}
            style={styles.txtInput}
            placeholder="Enter your current password"
            onChangeText={text => setCurrPassword(text)}
          />
          <Text style={styles.passTxt}>Confirm Current Password</Text>
          <TextInput
            value={newPassword}
            style={styles.txtInput}
            placeholder="Enter current password again"
            onChangeText={text => setNewPassword(text)}
          />
          <Text style={styles.passTxt}>New Password</Text>
          <TextInput placeholder="Enter new password" style={styles.txtInput} />
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
