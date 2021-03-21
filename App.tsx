import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { StatusBar } from 'react-native';
import AppConnected from './AppConnected';
import { colors } from './src/const/colors';
import ToastConfig from './src/helpers/toast';

const App = () => {
  StatusBar.setBarStyle('dark-content', true);

  return (
    <>
      <SafeAreaProvider>
        <ThemeProvider theme={colors}>
          <AppConnected />
        </ThemeProvider>
        <ToastConfig />
      </SafeAreaProvider>
    </>
  );
};

export default App;
