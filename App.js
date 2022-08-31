import React from 'react';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation';
import {AuthContextProvider} from './src/context/AuthContext';
import {PropertyContextProvider} from './src/context/propertyContext';
import {PropertyDetailContextProvider} from './src/context/propertyDetailContext';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#f77d2b',
    secondary: 'yellow',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <PropertyContextProvider>
          <PropertyDetailContextProvider>
            <PaperProvider theme={theme}>
              <AppNavigation />
            </PaperProvider>
          </PropertyDetailContextProvider>
        </PropertyContextProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}
