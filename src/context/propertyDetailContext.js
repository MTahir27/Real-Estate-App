import React, {createContext, useContext, useState} from 'react';

const PropertyDetailContext = createContext();

export const PropertyDetailContextProvider = ({children}) => {
  const [propertyDetail, setPropertyDetail] = useState({});

  return (
    <PropertyDetailContext.Provider value={{propertyDetail, setPropertyDetail}}>
      {children}
    </PropertyDetailContext.Provider>
  );
};

export const usePropertyDetailContext = () => {
  return useContext(PropertyDetailContext);
};
