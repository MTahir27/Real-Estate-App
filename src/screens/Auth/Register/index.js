import React, {useState} from 'react';
import {View, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import bgImg from '../../../assets/images/bg-img.jpg';
import CustomButton from '../../../components/Button';
import InputField from '../../../components/InputFiled';
import {useAuthContext} from '../../../context/AuthContext';
import axios from 'axios';

const initalState = {
  firstName: '',
  lastName: '',
  userName: '',
  phoneNumber: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const initalError = {
  firstName: false,
  lastName: false,
  userName: false,
  phoneNumber: false,
  email: false,
  password: false,
  confirmPassword: false,
};

export default function Register({navigation}) {
  const {isProcessing, user, dispatch} = useAuthContext();
  const [state, setState] = useState(initalState);
  const [error, setError] = useState(initalError);
  const [loading, setLoading] = useState(false);

  const handleChange = prop => value => {
    setState(s => ({...s, [prop]: value}));
    setError(e => ({...e, [prop]: false}));
  };

  const handleSubmit = () => {
    const {
      firstName,
      lastName,
      userName,
      phoneNumber,
      email,
      password,
      confirmPassword,
    } = state;
    if (
      firstName &&
      lastName &&
      phoneNumber &&
      userName &&
      email &&
      password &&
      confirmPassword
    ) {
      if (password.length >= 6) {
        if (password === confirmPassword) {
          setLoading(true);
          auth()
            .createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
              if (userCredential.user) {
                updateProfile(userCredential.user);
              } else {
                console.log('User Not Found Register');
              }
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                alert('That email address is already in use!');
              } else if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                alert('That email address is invalid!');
                setError(e => ({...e, email: true}));
              } else {
                console.error(error);
                alert(error);
              }
            })
            .finally(() => {
              setLoading(false);
            });
        } else {
          console.log('Password Not Match');
          alert('Password Not Match');
        }
      }
    } else {
      const errorArr = [];
      for (const key in state) {
        if (Object.hasOwnProperty.call(state, key)) {
          if (!state[key]) {
            errorArr.push(key);
            setError(e => ({...e, [key]: true}));
          }
        }
      }
      console.log(errorArr.join(', ') + ' field Required');
      alert(errorArr.join(', ') + ' field Required');
    }
  };

  const updateProfile = user => {
    setLoading(true);
    let profileData = {
      firstName: state.firstName,
      lastName: state.lastName,
      userName: state.userName,
      email: user.email,
      phoneNumber: state.phoneNumber,
      firebaseId: user.uid,
    };
    axios
      .post(
        'https://mt-real-estate-server.herokuapp.com/registerUser',
        profileData,
      )
      .then(response => {
        dispatch({
          type: 'Register',
          isProcessing: false,
          payload: {user: response.data},
        });
        console.log('After Register Data', user);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        dispatch({isProcessing: false});
      });
  };
  return (
    <ImageBackground
      source={bgImg}
      resizeMode="cover"
      style={styles.fullScreen}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.section}>
            <Text variant="headlineLarge" style={styles.heading}>
              Register
            </Text>
            <View style={styles.mb16}>
              <InputField
                label="First Name"
                error={error.firstName}
                value={state.firstName}
                onChangeText={handleChange('firstName')}
              />
            </View>
            <View style={styles.mb16}>
              <InputField
                label="Last Name"
                error={error.lastName}
                value={state.lastName}
                onChangeText={handleChange('lastName')}
              />
            </View>
            <View style={styles.mb16}>
              <InputField
                label="User Name"
                error={error.userName}
                value={state.userName}
                onChangeText={handleChange('userName')}
              />
            </View>
            <View style={styles.mb16}>
              <InputField
                label="Email"
                error={error.email}
                value={state.email}
                onChangeText={handleChange('email')}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.mb16}>
              <InputField
                label="Contact Number"
                error={error.phoneNumber}
                value={state.phoneNumber}
                onChangeText={handleChange('phoneNumber')}
                keyboardType="phone-pad"
              />
            </View>
            <View style={styles.mb16}>
              <InputField
                label="Password"
                error={error.password}
                value={state.password}
                onChangeText={handleChange('password')}
              />
            </View>
            <View style={styles.mb16}>
              <InputField
                label="Confirm Password"
                error={error.confirmPassword}
                value={state.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
              />
            </View>
            <View>
              <CustomButton
                icon="login-variant"
                loading={loading}
                disabled={loading}
                onPress={handleSubmit}>
                Register
              </CustomButton>
            </View>
          </View>
          <View>
            <CustomButton
              mode="text"
              onPress={() => navigation.navigate('Login')}>
              Login Account
            </CustomButton>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  heading: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  mb16: {
    marginBottom: 16,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 50,
  },
});
