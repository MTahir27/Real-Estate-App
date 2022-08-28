import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';

export default function Property() {
  //   const property = [
  //     {
  //       id: 1,
  //       name: 'Property Name',
  //       descripton:
  //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //       img: 'https://picsum.photos/700',
  //       createdAt: '',
  //       rooms: 2,
  //       address: {
  //         city: 'Faislabad',
  //         province: 'Punjab',
  //         country: 'Pakistan',
  //       },
  //       area: '',
  //       info: {
  //         bedrooms: 4,
  //         bathRoomd: 4,
  //         livingRooms: 4,
  //         kitchen: 2,
  //         diningRooms: 1,
  //       },
  //       brand: 'Propert Brand',
  //       price: 120000,
  //     },
  //     {
  //       id: 1,
  //       name: 'Property Name',
  //       descripton:
  //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //       img: 'https://picsum.photos/700',
  //       createdAt: '',
  //       rooms: 2,
  //       address: {
  //         city: 'Faislabad',
  //         province: 'Punjab',
  //         country: 'Pakistan',
  //       },
  //       area: '',
  //       info: {
  //         bedrooms: 4,
  //         bathRoomd: 4,
  //         livingRooms: 4,
  //         kitchen: 2,
  //         diningRooms: 1,
  //       },
  //       brand: 'Propert Brand',
  //       price: 120000,
  //     },
  //     {
  //       id: 1,
  //       name: 'Property Name',
  //       descripton:
  //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //       img: 'https://picsum.photos/700',
  //       createdAt: '',
  //       rooms: 2,
  //       address: {
  //         city: 'Faislabad',
  //         province: 'Punjab',
  //         country: 'Pakistan',
  //       },
  //       area: '',
  //       info: {
  //         bedrooms: 4,
  //         bathRoomd: 4,
  //         livingRooms: 4,
  //         kitchen: 2,
  //         diningRooms: 1,
  //       },
  //       brand: 'Propert Brand',
  //       price: 120000,
  //     },
  //     {
  //       id: 1,
  //       name: 'Property Name',
  //       descripton:
  //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //       img: 'https://picsum.photos/700',
  //       createdAt: '',
  //       rooms: 2,
  //       address: {
  //         city: 'Faislabad',
  //         province: 'Punjab',
  //         country: 'Pakistan',
  //       },
  //       area: '',
  //       info: {
  //         bedrooms: 4,
  //         bathRoomd: 4,
  //         livingRooms: 4,
  //         kitchen: 2,
  //         diningRooms: 1,
  //       },
  //       brand: 'Propert Brand',
  //       price: 120000,
  //     },
  //   ];

  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <ScrollView>
        {/* <View>
          {property.length > 0 &&
            property.map((data, index) => {
              return (
                <View key={index} style={styles.card}>
                  <Property {...data} />
                </View>
              );
            })}
        </View> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  img: {},
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