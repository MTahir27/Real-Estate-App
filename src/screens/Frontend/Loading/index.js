import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'asset:/images/logo/favicon.svg'}}
        style={{width: 100, height: 100}}
      />
      <Text>Loading</Text>
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
});
