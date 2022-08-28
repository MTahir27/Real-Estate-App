import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../../../components/Button';
import {useAuthContext} from '../../../context/AuthContext';

export default function Profile() {
  const {user} = useAuthContext();

  return user ? (
    <View>
      <Text>Profile</Text>
    </View>
  ) : (
    <View style={[styles.container]}>
      <CustomButton icon="login-variant">Login Account</CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  text: {
    fontSize: 20,
  },
});