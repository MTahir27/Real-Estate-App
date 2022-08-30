import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff'}}>Loading</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f77d2b',
  },
});
