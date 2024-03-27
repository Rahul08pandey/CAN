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
import {useUpdateProfileMutation} from '../../redux/services/authServices';
import {useSelector} from 'react-redux';

const MyProfile = () => {
  const userData = useSelector(state => state.auth.user.result);
  const [name, setName] = useState(userData.name.toString());
  const [email, setEmail] = useState(userData.email.toString());
  const [phone, setPhone] = useState(userData.phone.toString());
  const [organization, setOrganization] = useState(
    userData.organization.toString(),
  );
  const [state, setState] = useState(userData.state.toString());
  const [city, setCity] = useState(userData.city.toString());
  const [isCalendar, setIsCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const [profileData] = useUpdateProfileMutation();

  const params = {
    id: userData._id,
    name,
    email,
    phone,
    organization,
    state,
    city,
  };
  console.log(params, 'PARAMS>>>>>>>');

  const handleUpdate = async () => {
    try {
      const response = await profileData(params);
      console.log(params, 'params/////');
      console.log(response, 'RESPONSE');
      setShowAlert(true);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleLogin = () => {
    setShowAlert(false);
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
            editable={isEmailEditable}
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
