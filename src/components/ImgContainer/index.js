import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function ImgContainer(props) {
  return (
    <View>
      <Text
        variant="titleLarge"
        style={[styles.pimaryColor, {marginBottom: 16}]}>
        Popular Properties
      </Text>
      <View style={styles.imgContainer}>
        {props.property &&
          props.property.length > 0 &&
          props.property.map((data, index) => {
            return (
              <View key={img}>
                <Image
                  source={{uri: data.img}}
                  key={index}
                  style={styles.img}
                />
              </View>
            );
          })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pimaryColor: {
    color: '#f77d2b',
  },

  imgContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  img: {
    width: 150,
    height: 150,
  },
});
