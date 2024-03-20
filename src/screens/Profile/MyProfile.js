import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/common/CustomButton';
import {Calendar} from 'react-native-calendars';
import IMAGES from '../../assets/images';
import CustomAlert from '../../components/common/CustomAlert/CustomAlert';

const MyProfile = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [isCalendar, setIsCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = () => {
    setShowAlert(false);
    navigation.navigate('Login');
  };

  const handleUpdate = () => {
    setShowAlert(true);
  };

  const handleCalendarPress = () => {
    setIsCalendar(!isCalendar);
  };

  const onDayPress = day => {
    const formattedDate = `${day.day}-${day.month}-${day.year}`;
    setSelectedDate(formattedDate);
    setIsCalendar(false);
    console.log('Selected date:', day);
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <Header back={true} drawer={false} />

      <View style={styles.subContainer}>
        <Text style={styles.profileTxt}>My Profile</Text>
        <View style={styles.profileContainer}>
          <TouchableOpacity>
            <Image source={IMAGES.camera} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Name</Text>
          <TextInput
            value={name}
            placeholder="Enter Name"
            style={styles.txtInput}
            onChangeText={text => setName(text)}
          />
          <Text style={styles.txtInputHeading}>Email</Text>
          <TextInput
            value={email}
            placeholder="Enter Email"
            style={styles.txtInput}
            onChangeText={text => setEmail(text)}
          />
          <Text style={styles.txtInputHeading}>Date of birth</Text>
          <View style={styles.dobView}>
            <TextInput
              placeholder="Select Date"
              value={selectedDate}
              editable={false}
              style={styles.txtInput1}
            />
            <TouchableOpacity onPress={handleCalendarPress}>
              <Image source={IMAGES.calendar} style={styles.img} />
            </TouchableOpacity>
          </View>
          {isCalendar && <Calendar onDayPress={onDayPress} />}
          <Text style={styles.txtInputHeading}>Phone</Text>
          <TextInput
            value={phone}
            placeholder="Enter Phone"
            style={styles.txtInput}
            onChangeText={text => setPhone(text)}
          />
          <Text style={styles.txtInputHeading}>Organization</Text>
          <TextInput
            value={organization}
            style={styles.txtInput}
            placeholder="Enter Organization"
            onChangeText={text => setOrganization(text)}
          />
          <Text style={styles.txtInputHeading}>State</Text>
          <TextInput
            value={state}
            style={styles.txtInput}
            placeholder="Enter State"
            onChangeText={text => setState(text)}
          />
          <Text style={styles.txtInputHeading}>City</Text>
          <TextInput
            value={city}
            placeholder="Enter City"
            style={styles.txtInput}
            onChangeText={text => setCity(text)}
          />
        </View>
        <CustomButton title="Update" onPress={handleUpdate} />
        {showAlert && (
          <CustomAlert
            noTitle
            message="Your profile has been updated successfully!!"
            btnTxt="OK"
            onPress={handleLogin}
            onClose={() => setShowAlert(false)}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default MyProfile;
