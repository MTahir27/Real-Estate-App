import React, {createContext, useContext, useReducer, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

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
        const userData = (
          await firestore().collection('users').doc(user.uid).get()
        ).data();
        dispatch({type: 'LOGIN', payload: {user: userData}});
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
