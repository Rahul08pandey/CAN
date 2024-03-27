import * as yup from 'yup';

const RegisterForm = yup.object().shape({
  name: yup.string().min(5, 'Name is too short').required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone no. is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&]{1,})[A-Za-z\d@$!#%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
    ),

  organization: yup.string().required('Organization is required'),
  state: yup.string().required('State is required'),
  city: yup.string().required('City is required'),
});

export default RegisterForm;
