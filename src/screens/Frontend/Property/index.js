import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Searchbar, Text} from 'react-native-paper';
import SingleProperty from '../../../components/SingleProperty';

export default function Property() {
  const property = [
    {
      id: 1,
      name: 'Property Name',
      descripton:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: 'https://picsum.photos/700',
      createdAt: '',
      rooms: 2,
      address: {
        city: 'Faislabad',
        province: 'Punjab',
        country: 'Pakistan',
      },
      area: '',
      info: {
        bedrooms: 4,
        bathRoomd: 4,
        livingRooms: 4,
        kitchen: 2,
        diningRooms: 1,
      },
      brand: 'Propert Brand',
      price: 120000,
    },
    {
      id: 1,
      name: 'Property Name',
      descripton:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: 'https://picsum.photos/700',
      createdAt: '',
      rooms: 2,
      address: {
        city: 'Faislabad',
        province: 'Punjab',
        country: 'Pakistan',
      },
      area: '',
      info: {
        bedrooms: 4,
        bathRoomd: 4,
        livingRooms: 4,
        kitchen: 2,
        diningRooms: 1,
      },
      brand: 'Propert Brand',
      price: 120000,
    },
    {
      id: 1,
      name: 'Property Name',
      descripton:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: 'https://picsum.photos/700',
      createdAt: '',
      rooms: 2,
      address: {
        city: 'Faislabad',
        province: 'Punjab',
        country: 'Pakistan',
      },
      area: '',
      info: {
        bedrooms: 4,
        bathRoomd: 4,
        livingRooms: 4,
        kitchen: 2,
        diningRooms: 1,
      },
      brand: 'Propert Brand',
      price: 120000,
    },
    {
      id: 1,
      name: 'Property Name',
      descripton:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: 'https://picsum.photos/700',
      createdAt: '',
      rooms: 2,
      address: {
        city: 'Faislabad',
        province: 'Punjab',
        country: 'Pakistan',
      },
      area: '',
      info: {
        bedrooms: 4,
        bathRoomd: 4,
        livingRooms: 4,
        kitchen: 2,
        diningRooms: 1,
      },
      brand: 'Propert Brand',
      price: 120000,
    },
  ];

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
            {property.length > 0 &&
              property.map((data, index) => {
                return (
                  <View key={index} style={styles.card}>
                    <SingleProperty {...data} />
                  </View>
                );
              })}
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
