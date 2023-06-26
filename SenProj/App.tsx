//run using 'npx react-native run-android'
import React from 'react';
import {Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';

import AppNavigator from './app/appNavigator';

const App = () => 
{
  return(
    <PaperProvider>
      <AppNavigator/>
    </PaperProvider>
  );
};

export default App;