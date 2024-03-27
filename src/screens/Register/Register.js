import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import CustomAlert from '../../components/common/CustomAlert/CustomAlert';
import CustomButton from '../../components/common/CustomButton';
import CustomHeader from '../../components/common/CustomHeader';
import IMAGES from '../../assets/images';
import {moderateScale} from '../../utils/Metrics';
import {Dropdown} from 'react-native-element-dropdown';
import {Formik} from 'formik';
import RegisterForm from './RegisterForm';
import {useSelector, useDispatch} from 'react-redux';
import {setStates} from '../../redux/actions/actions';
import {
  useFetchStatesQuery,
  useRegisterUserMutation,
} from '../../redux/services/authServices';

const Register = ({navigation, onSubmit}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const statesData = useSelector(state => state.auth.states);
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
    organization: '',
    state: '',
    city: '',
  };

  const [registerUserMutation] = useRegisterUserMutation();
  const {data, error} = useFetchStatesQuery();

  const handleRegister = async values => {
    try {
      setLoading(true);
      const response = await registerUserMutation(values);
      console.log(response);
      setLoading(false);
      if (response.data) {
        const registerData = response.data;
        console.log(registerData, 'REGISTER');
        setShowAlert(true);
      } else {
        Alert.alert(
          'Email is already registered.',
          'Please enter another email',
        );
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setLoading(false);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  useEffect(() => {
    const fetchStatesData = async () => {
      try {
        setLoading(true);
        if (data && data.result) {
          const response = data.result;
          dispatch(setStates(response));
        } else {
          console.error('Error fetching states');
        }
      } catch (err) {
        console.error('Error fetching states:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchStatesData();
  }, []);

  const openLogin = () => {
    navigation.navigate('Login');
  };

  const handleLogin = () => {
    setShowAlert(false);
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <CustomHeader height={246} />

      <Formik
        initialValues={initialValues}
        validationSchema={RegisterForm}
        onSubmit={handleRegister}>
        {({handleChange, handleSubmit, errors, values}) => (
          <View style={styles.registerContainer}>
            <Text
              style={{
                color: '#000000',
                fontSize: moderateScale(30),
                fontFamily: 'Nunito-SemiBold',
                marginBottom: moderateScale(10),
              }}>
              Become an Investor
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.txtInputHeading}>Name</Text>
              <TextInput
                value={values.name}
                placeholder="Enter Name"
                style={styles.txtInput}
                placeholderTextColor="rgba(0, 0, 0, 0.27)"
                onChangeText={handleChange('name')}
              />
              {errors.name && <Text style={styles.errTxt}>{errors.name}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.txtInputHeading}>Email</Text>
              <TextInput
                value={values.email}
                style={styles.txtInput}
                placeholder="Enter Email"
                placeholderTextColor="rgba(0, 0, 0, 0.27)"
                onChangeText={handleChange('email')}
              />
              {errors.email && (
                <Text style={styles.errTxt}>{errors.email}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.txtInputHeading}>Phone</Text>
              <TextInput
                value={values.phone}
                style={styles.txtInput}
                placeholder="Enter Phone No."
                placeholderTextColor="rgba(0, 0, 0, 0.27)"
                onChangeText={handleChange('phone')}
                keyboardType="phone-pad"
              />
              {errors.phone && (
                <Text style={styles.errTxt}>{errors.phone}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.txtInputHeading}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  value={values.password}
                  placeholder="Enter Password"
                  placeholderTextColor="rgba(0, 0, 0, 0.27)"
                  style={styles.passwordTxtInput}
                  onChangeText={handleChange('password')}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}>
                  <Image source={IMAGES.eye} />
                </TouchableOpacity>
              </View>
              {errors.password && (
                <Text style={styles.errTxt}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.txtInputHeading}>Organization</Text>
              <TextInput
                value={values.organization}
                style={styles.txtInput}
                placeholderTextColor="rgba(0, 0, 0, 0.27)"
                placeholder="Enter Organization"
                onChangeText={handleChange('organization')}
              />
              {errors.organization && (
                <Text style={styles.errTxt}>{errors.organization}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.txtInputHeading}>State</Text>
              <Dropdown
                data={statesData}
                labelField="state"
                valueField="_id"
                onChange={item => handleChange('state')(item.state)}
                activeColor="#e3f2fd"
                style={styles.dropDown}
                placeholder="Select State"
                placeholderTextColor="rgba(0, 0, 0, 0.27)"
              />
              {errors.state && (
                <Text style={styles.errTxt}>{errors.state}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.txtInputHeading}>City</Text>
              <TextInput
                value={values.city}
                style={styles.txtInput}
                placeholder="Enter City"
                placeholderTextColor="#00000045"
                onChangeText={handleChange('city')}
              />
              {errors.city && <Text style={styles.errTxt}>{errors.city}</Text>}
            </View>
            <CustomButton title="Register" onPress={handleSubmit} />
            <TouchableOpacity style={styles.alreadyBtn} onPress={openLogin}>
              <Text style={styles.alreadyTxt}>Already have an account?</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      {showAlert && (
        <CustomAlert
          noTitle
          onPress={handleLogin}
          btnTxt="Continue"
          message="Thanks for sharing your interest to become an investor with CAN. We’ll reach out to you within next 24-72 hours to assess whether you meet our criteria to become an investor."
          onClose={() => setShowAlert(false)}
        />
      )}
    </ScrollView>
  );
};

export default Register;
