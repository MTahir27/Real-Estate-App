import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import ImgContainer from '../../../components/ImgContainer';
import SingleProperty from '../../../components/SingleProperty';
import {useAuthContext} from '../../../context/AuthContext';

export default function Home() {
  const {user} = useAuthContext();

  const property = [
    {
      id: 1,
      name: 'Property Name',
      descripton:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: 'https://source.unsplash.com/random/?property,house,apartment',
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
      img: 'https://source.unsplash.com/random/?property,house,apartment',
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
      img: 'https://source.unsplash.com/random/?property,house,apartment',
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
      img: 'https://source.unsplash.com/random/?property,house,apartment',
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
