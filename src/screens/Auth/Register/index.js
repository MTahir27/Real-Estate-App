import React, {useState} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import bgImg from '../../../assets/images/bg-img.jpg';
import CustomButton from '../../../components/Button';
import InputField from '../../../components/InputFiled';
import {useAuthContext} from '../../../context/AuthContext';

const initalState = {
  email: '',
  password: '',
};

const initalError = {
  email: false,
  password: false,
};
export default function Register({navigation}) {
  const {dispatch} = useAuthContext();
  const [state, setState] = useState(initalState);
  const [error, setError] = useState(initalError);
  const [loading, setLoading] = useState(false);

  const handleChange = prop => value => {
    setState(s => ({...s, [prop]: value}));
    setError(e => ({...e, [prop]: false}));
  };

  const handleSubmit = () => {
    const {email, password} = state;
    if (email && password) {
      if (password.length >= 6) {
        setLoading(true);
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            dispatch({type: 'REGISTER'});
            console.log('User account created & signed in!');
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
  return (
    <ImageBackground
      source={bgImg}
      resizeMode="cover"
      style={styles.fullScreen}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text variant="headlineLarge" style={styles.heading}>
            Register
          </Text>
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
              label="Password"
              error={error.password}
              value={state.password}
              onChangeText={handleChange('password')}
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
  },
});
