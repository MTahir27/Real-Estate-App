import React, {useState} from 'react';
import {useAuthContext} from '../context/AuthContext';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import {IconButton} from 'react-native-paper';
import Loading from '../screens/Frontend/Loading';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import Home from '../screens/Frontend/Home';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const {isAuthenticated, dispatch} = useAuthContext();
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(false);
    auth()
      .signOut()
      .then(() => {
        dispatch({type: 'LOGOUT'});
        console.log('User signed out!');
      })
      .catch(error => {
        console.log('Logout Error', error.message);
        alert(error.message);
      })
      .finally(() => {
        setLoading(true);
      });
  };
  return (
    <Stack.Navigator>
      {isAuthenticated === false ? (
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Group>
      ) : (
        <>
          {loading ? (
            <Loading />
          ) : (
            <Stack.Group
              screenOptions={{
                headerRight: () => (
                  <IconButton
                    icon="logout-variant"
                    size={20}
                    onPress={handleLogout}
                  />
                ),
              }}>
              <Stack.Screen name="Home" component={Home} />
            </Stack.Group>
          )}
        </>
      )}
    </Stack.Navigator>
  );
}
