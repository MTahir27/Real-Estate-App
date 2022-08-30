import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Searchbar, Text} from 'react-native-paper';
import SingleProperty from '../../../components/SingleProperty';
import {usePropertyContext} from '../../../context/propertyContext';

export default function Property() {
  const {property} = usePropertyContext();

  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View>
        <Text variant="titleLarge" style={[styles.pimaryColor, styles.heading]}>
          All Properties {property.length}
        </Text>
      </View>
      <View>
        <ScrollView style={styles.padding12}>
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

  heading: {
    fontWeight: '900',
    margin: 16,
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
