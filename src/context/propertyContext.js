import axios from 'axios';
import React, {createContext, useContext, useEffect, useState} from 'react';

const PropertyContext = createContext();
export const PropertyContextProvider = ({children}) => {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    axios
      .get(`https://mt-real-estate-server.herokuapp.com/getProperty`)
      .then(response => {
        setProperty(response.data);
      })
      .catch(error => {
        console.log('Axios Error', error);
      });
  }, [property.length > 0]);

  return (
    <PropertyContext.Provider value={{property, setProperty}}>
      {children}
    </PropertyContext.Provider>
  );
};

export const usePropertyContext = () => {
  return useContext(PropertyContext);
};
