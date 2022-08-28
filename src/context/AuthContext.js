import React, {createContext, useContext, useReducer, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

const AuthContext = createContext();
const initialState = {isAuthenticated: true};

const reducer = (state = initialState, {type}) => {
  switch (type) {
    case 'LOGIN':
      return Object.assign({}, {isAuthenticated: true});
    case 'Register':
      return Object.assign({}, {isAuthenticated: true});
    case 'LOGOUT':
      return Object.assign({}, {isAuthenticated: false});
    default:
      return state;
  }
};

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    auth().onAuthStateChanged(function onAuthStateChanged(user) {
      if (user) {
        dispatch({type: 'LOGIN'});
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
