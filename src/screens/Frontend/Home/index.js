import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import ImgContainer from '../../../components/ImgContainer';
import SingleProperty from '../../../components/SingleProperty';
import {usePropertyContext} from '../../../context/propertyContext';

export default function Home() {
  const {property} = usePropertyContext();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.padding12}>
        <View>
          <Text
            variant="headlineSmall"
            style={[styles.mainHeading, styles.pimaryColor]}>
            Wellcome to Real Estate
          </Text>
        </View>
        <View>
          <ImgContainer property={property} />
        </View>
        <View>
          {property.length > 0 ? (
            property.reverse().map((data, index) => {
              return (
                <View key={index} style={styles.card}>
                  <SingleProperty {...data} />
                </View>
              );
            })
          ) : (
            <Text style={{textAlign: 'center'}}>No Property Found</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  padding12: {
    padding: 12,
  },
  pimaryColor: {
    color: '#f77d2b',
  },
  mainHeading: {
    fontWeight: '900',
    marginBottom: 16,
  },
  text: {
    fontSize: 20,
  },
  imgContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  card: {
    marginBottom: 16,
  },
});
