import React, {createContext, useContext, useReducer, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import axios from 'axios';

const AuthContext = createContext();
const initialState = {isAuthenticated: true, isProcessing: true};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign(
        {},
        {isAuthenticated: true},
        {isProcessing: false},
        {user: action.payload.user},
      );
    case 'Register':
      return Object.assign(
        {},
        {isAuthenticated: true},
        {isProcessing: false},
        {user: action.payload.user},
      );
    case 'LOGOUT':
      return Object.assign({}, {isAuthenticated: false}, {isProcessing: false});
    default:
      return state;
  }
};

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    auth().onAuthStateChanged(async user => {
      if (user) {
        const firebaseId = user.uid;
        axios
          .get(
            `https://mt-real-estate-server.herokuapp.com/getUser/${firebaseId}`,
          )
          .then(response => {
            dispatch({type: 'LOGIN', payload: {user: response.data}});
          })
          .catch(error => {
            console.log('Axios Error', error);
          });
      } else {
        dispatch({type: 'LOGOUT'});
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
