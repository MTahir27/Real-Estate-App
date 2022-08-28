import React from 'react';
import {View, Text} from 'react-native';
import {useAuthContext} from '../../../context/AuthContext';

export default function Home() {
  const {user} = useAuthContext();
  console.log('Home User', user);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
