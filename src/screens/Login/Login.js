import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CustomButton from '../../components/common/CustomButton';
import CustomHeader from '../../components/common/CustomHeader';
import IMAGES from '../../assets/images';
import {useDispatch, useSelector} from 'react-redux';
import {loginSuccess} from '../../redux/actions/actions';
import {useLoginUserMutation} from '../../redux/services/authServices';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const loginData = useSelector(state => state.auth.user);
  console.log('loginData:', loginData);
  const [loginUserMutation] = useLoginUserMutation();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const credentials = {email, password};
      const response = await loginUserMutation(credentials);
      setLoading(false);
      if (response.data.status) {
        const userData = response.data;
        dispatch(loginSuccess(userData));
        navigation.navigate('Home');
      } else {
        Alert.alert('Login Failed', 'Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setLoading(false);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleReset = () => {
    navigation.navigate('ForgotPassword');
    console.log('first');
  };

  return (
    <View style={styles.mainContainer}>
      <CustomHeader />

      <View style={styles.loginContainer}>
        <Text style={styles.loginHeading}>Login</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Email</Text>
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="rgba(0, 0, 0, 0.27)"
            style={styles.txtInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Password</Text>
          <View style={styles.inputTxt}>
            <TextInput
              placeholder="Enter Password"
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="rgba(0, 0, 0, 0.27)"
              style={styles.txtInput1}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}>
              <Image source={IMAGES.eye} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity onPress={handleReset}>
            <Text style={styles.btnTxt}>Forgot Password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.btnTxt}>Become an Investor</Text>
          </TouchableOpacity>
        </View>

        <CustomButton title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default Login;
