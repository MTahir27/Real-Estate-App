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
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Property from '../screens/Frontend/Property';
import Favorite from '../screens/Frontend/Fovorite';

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
  return isProcessing ? (
    <Loading />
  ) : (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerRight: isAuthenticated
          ? () => <IconButton icon="logout" size={20} onPress={handleLogout} />
          : '',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size}) => <Ionicons name="home-outline" size={size} />,
        }}
      />
      <Tab.Screen
        name="Properties"
        component={Property}
        options={{
          tabBarIcon: ({size}) => <FontAwesome name="building-o" size={size} />,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({size}) => <Ionicons name="star-outline" size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: user ? true : false,
          tabBarIcon: ({size}) => <FontAwesome name="user-o" size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
