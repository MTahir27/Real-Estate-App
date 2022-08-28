import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import CustomButton from '../../../components/Button';
import InputField from '../../../components/InputFiled';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import {useAuthContext} from '../../../context/AuthContext';

const initalValue = {
  id: '',
  name: '',
  descrition: '',
  img: 'https://source.unsplash.com/random/?property,house,apartment',
  price: '',
  rooms: '',
  bedrooms: '',
  bathRoom: '',
  livingRooms: '',
  kitchen: '',
  diningRooms: '',
  area: '',
  city: '',
  province: '',
  country: '',
  createdAt: '',
};

const initalError = {
  id: false,
  name: false,
  descrition: false,
  img: false,
  price: false,
  rooms: false,
  bedrooms: false,
  bathRoom: false,
  livingRooms: false,
  kitchen: false,
  diningRooms: false,
  area: false,
  city: false,
  province: false,
  country: false,
  createdAt: false,
};
export default function AddProperty() {
  const {user} = useAuthContext();
  const [state, setState] = useState(initalValue);
  const [error, setError] = useState(initalError);
  const [loading, setLoading] = useState(false);

  const handleChange = prop => value => {
    setState(s => ({...s, [prop]: value}));
    setError(e => ({...e, [prop]: false}));
  };

  const handleSubmit = () => {
    if (
      state.name &&
      state.img &&
      state.descrition &&
      state.price &&
      state.rooms &&
      state.bedrooms &&
      state.bathRoom &&
      state.livingRooms &&
      state.kitchen &&
      state.diningRooms &&
      state.area &&
      state.city &&
      state.province &&
      state.country
    ) {
      addProperty();
    } else {
      const errorArr = [];
      for (const key in state) {
        if (Object.hasOwnProperty.call(state, key)) {
          if (!state[key]) {
            errorArr.push(key);
            setError(e => ({...e, [key]: true}));
          }
        }
      }
      console.log(errorArr.join(', ') + ' field Required');
      alert('Fill All Fields');
    }
  };

  const addProperty = async () => {
    setLoading(true);
    const propertyData = {
      ...state,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      userId: user.uid,
    };
    console.log(propertyData);
    firestore()
      .collection('property')
      .doc(Math.floor(Date.now() / 1000))
      .set(propertyData)
      .then(() => {
        console.log('Property Added');
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.constainer}>
      <ScrollView style={styles.padding12}>
        <View style={styles.inputContainer}>
          <View>
            <Text variant="titleLarge" style={{marginBottom: 8}}>
              Basic Info
            </Text>
            <View style={styles.inputField}>
              <InputField
                label="Name"
                error={error.name}
                value={state.name}
                mode="outlined"
                onChangeText={handleChange('name')}
              />
            </View>
          </View>
          <View>
            <Text variant="titleLarge" style={{marginBottom: 8}}>
              Artitecture
            </Text>
            <View style={styles.inputField}>
              <InputField
                label="Rooms"
                error={error.rooms}
                value={state.rooms}
                mode="outlined"
                onChangeText={handleChange('rooms')}
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.inputField}>
              <InputField
                label="Bed Rooms"
                error={error.bedrooms}
                value={state.bedrooms}
                mode="outlined"
                onChangeText={handleChange('bedrooms')}
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.inputField}>
              <InputField
                label="Bath Rooms"
                error={error.bathRoom}
                value={state.bathRoom}
                mode="outlined"
                onChangeText={handleChange('bathRoom')}
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.inputField}>
              <InputField
                label="Living Rooms"
                error={error.livingRooms}
                value={state.livingRooms}
                mode="outlined"
                onChangeText={handleChange('livingRooms')}
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.inputField}>
              <InputField
                label="kitchen"
                error={error.kitchen}
                value={state.kitchen}
                mode="outlined"
                onChangeText={handleChange('kitchen')}
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.inputField}>
              <InputField
                label="Dining Rooms"
                error={error.diningRooms}
                value={state.diningRooms}
                mode="outlined"
                onChangeText={handleChange('diningRooms')}
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.inputField}>
              <InputField
                label="Square Ft"
                error={error.area}
                value={state.area}
                mode="outlined"
                onChangeText={handleChange('area')}
                keyboardType="number-pad"
              />
            </View>
          </View>
          <View>
            <Text variant="titleLarge" style={{marginBottom: 8}}>
              Address
            </Text>
            <View style={styles.inputField}>
              <InputField
                label="Country"
                error={error.country}
                value={state.country}
                mode="outlined"
                onChangeText={handleChange('country')}
              />
            </View>
            <View style={styles.inputField}>
              <InputField
                label="Province"
                error={error.province}
                value={state.province}
                mode="outlined"
                onChangeText={handleChange('province')}
              />
            </View>
            <View style={styles.inputField}>
              <InputField
                label="City"
                error={error.city}
                value={state.city}
                mode="outlined"
                onChangeText={handleChange('city')}
              />
            </View>
          </View>
          <View>
            <Text variant="titleLarge" style={{marginBottom: 8}}>
              Description
            </Text>

            <View style={styles.inputField}>
              <InputField
                label="Price"
                error={error.price}
                value={state.price}
                mode="outlined"
                onChangeText={handleChange('price')}
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.inputField}>
              <InputField
                label="Description"
                error={error.descrition}
                value={state.descrition}
                mode="outlined"
                multiline={true}
                numberOfLines={4}
                onChangeText={handleChange('descrition')}
              />
            </View>
          </View>
          <View>
            <CustomButton
              disabled={loading}
              loading={loading}
              onPress={handleSubmit}>
              Add Property
            </CustomButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  padding12: {
    padding: 12,
  },
  inputField: {
    marginBottom: 12,
  },
  inputContainer: {
    marginVertical: 40,
  },
});
