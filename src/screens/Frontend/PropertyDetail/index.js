import React, {useEffect, useState} from 'react';
import {Text, DataTable} from 'react-native-paper';
import {usePropertyDetailContext} from '../../../context/propertyDetailContext';
import {View, ScrollView, Image, StyleSheet, Linking} from 'react-native';
import Loading from '../Loading';
import CustomButton from '../../../components/Button';

export default function PropertyDetail() {
  const {propertyDetail} = usePropertyDetailContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (propertyDetail) {
      setLoading(false);
      console.log(propertyDetail);
    }
  }, [propertyDetail]);

  return loading ? (
    <Loading />
  ) : (
    <ScrollView style={{flex: 1}}>
      <View>
        <Image source={{uri: propertyDetail.img}} style={styles.img} />
      </View>
      <View style={styles.container}>
        <View style={styles.mb16}>
          <Text
            variant="titleLarge"
            style={[styles.textPrimaryColor, styles.fw700, styles.mb8]}>
            {propertyDetail.name}
          </Text>
          <Text style={[styles.mb8]}>{propertyDetail.description}</Text>
        </View>
        <View style={styles.mb16}>
          <Text variant="titleMedium" style={styles.textPrimaryColor}>
            Artitecture
          </Text>
          <DataTable>
            <DataTable.Row>
              <DataTable.Cell>Rooms</DataTable.Cell>
              <DataTable.Cell>{propertyDetail.rooms || '-'}</DataTable.Cell>
              <DataTable.Cell>Bed Rooms</DataTable.Cell>
              <DataTable.Cell>{propertyDetail.bedRooms || '-'}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Bath Rooms</DataTable.Cell>
              <DataTable.Cell>{propertyDetail.bathRooms || '-'}</DataTable.Cell>
              <DataTable.Cell>Living Rooms</DataTable.Cell>
              <DataTable.Cell>
                {propertyDetail.livingRooms || '-'}
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Dining Rooms</DataTable.Cell>
              <DataTable.Cell>
                {propertyDetail.diningRooms || '-'}
              </DataTable.Cell>
              <DataTable.Cell>Kitchen</DataTable.Cell>
              <DataTable.Cell>{propertyDetail.kitchen || '-'}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>

        <View>
          <Text style={[styles.mb8]}>
            <Text variant="titleMedium" style={[styles.textPrimaryColor]}>
              Area:{' '}
            </Text>{' '}
            {propertyDetail.area} square Ft.
          </Text>
        </View>
        <View>
          <Text style={[styles.mb8]}>
            <Text variant="titleMedium" style={[styles.textPrimaryColor]}>
              {' '}
              Location:{' '}
            </Text>{' '}
            {propertyDetail.country}, {propertyDetail.province},{' '}
            {propertyDetail.city}.
          </Text>
        </View>
        <View style={[styles.bgPrimary, {marginVertical: 24}]}>
          <Text
            variant="titleLarge"
            style={{margin: 12, textAlign: 'center', color: '#ffffff'}}>
            <Text style={styles.fw700}>Price:</Text> ${' '}
            {propertyDetail.price.$numberDecimal}
          </Text>
        </View>
        <View style={styles.mb16}>
          <Text
            variant="titleLarge"
            style={[styles.textPrimaryColor, styles.fw700, styles.mb8]}>
            Property Dealer Info
          </Text>
          <View>
            <View>
              <Text style={[styles.mb8]}>
                <Text variant="titleMedium">Name:</Text>{' '}
                {propertyDetail.user ? propertyDetail.user.firstName : ''}{' '}
                {propertyDetail.user ? propertyDetail.user.lastName : ''}
              </Text>
              <Text style={[styles.mb8]}>
                <Text variant="titleMedium">User Name:</Text>{' '}
                {propertyDetail.user ? propertyDetail.user.userName : ''}
              </Text>
              <Text style={[styles.mb8]}>
                <Text variant="titleMedium">Phone Number:</Text>{' '}
                {propertyDetail.user ? propertyDetail.user.phoneNumber : ''}
              </Text>
              <CustomButton
                icon="phone-classic"
                onPress={() => {
                  Linking.openURL(
                    `tel: ${
                      propertyDetail.user ? propertyDetail.user.phoneNumber : ''
                    }`,
                  );
                }}>
                Call Dealer
              </CustomButton>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
  },
  img: {
    width: '100%',
    aspectRatio: 3 / 2,
  },
  textPrimaryColor: {
    color: '#f77d2b',
  },
  bgPrimary: {
    backgroundColor: '#f77d2b',
  },
  fw700: {
    fontWeight: '700',
  },
  mb8: {
    marginBottom: 8,
  },
  mb16: {
    marginBottom: 16,
  },
});
