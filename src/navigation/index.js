import React from 'react';
import {useAuthContext} from '../context/AuthContext';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import {IconButton} from 'react-native-paper';
import Loading from '../screens/Frontend/Loading';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import Home from '../screens/Frontend/Home';
import Profile from '../screens/Frontend/Profile';
import Property from '../screens/Frontend/Property';
import Favorite from '../screens/Frontend/Fovorite';
import PropertyDetail from '../screens/Frontend/PropertyDetail';
import {NavigationContainer} from '@react-navigation/native';
import AddProperty from '../screens/Frontend/AddProperty';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  const {isAuthenticated, isProcessing, user, dispatch} = useAuthContext();
  const handleLogout = () => {
    dispatch({isProcessing: true});
    auth()
      .signOut()
      .then(() => {
        dispatch({type: 'LOGOUT'});
      })
      .catch(error => {
        console.log('Logout Error', error.message);
        alert(error.message);
      })
      .finally(() => {
        dispatch({isProcessing: false});
      });
  };

  const AuthScreens = () => {
    return (
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  };

  return isProcessing ? (
    <Loading />
  ) : (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#f77d2b',
        },
        tabBarStyle: {
          backgroundColor: '#f77d2b',
        },

        tabBarInactiveTintColor: '#000',
        tabBarActiveTintColor: '#fff',

        headerRight: isAuthenticated
          ? () => (
              <IconButton
                icon="logout"
                size={20}
                iconColor="#fff"
                onPress={handleLogout}
              />
            )
          : '',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size}) => <IconButton icon="home" size={size} />,
        }}
      />
      <Tab.Screen
        name="Properties"
        component={Property}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({size}) => (
            <IconButton icon="office-building" size={size} />
          ),
        }}
      />
      {isAuthenticated && (
        <Tab.Screen
          name="AddProperty"
          component={AddProperty}
          options={{
            title: 'Add Property',
            tabBarIcon: ({size}) => (
              <IconButton icon="plus-circle" size={size} />
            ),
          }}
        />
      )}

      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({size}) => <IconButton icon="star" size={size} />,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={AuthScreens}
        options={{
          headerShown: user ? true : false,
          tabBarIcon: ({size}) => (
            <IconButton icon="account" active size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
