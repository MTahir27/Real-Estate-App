import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAuthContext} from '../../../context/AuthContext';

export default function Profile({navigation}) {
  const {user} = useAuthContext();

  return (
    <View>
      <Text>Profile</Text>
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
