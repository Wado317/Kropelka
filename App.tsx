import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { StatusBar } from 'react-native';
import AppConnected from './AppConnected';
import { colors } from './src/const/colors';
import Toast from 'react-native-toast-message';
// modal toast --

const App = () => {
  StatusBar.setBarStyle('dark-content', true);

  return (
    <>
      <SafeAreaProvider>
        <ThemeProvider theme={colors}>
          <AppConnected />
        </ThemeProvider>
        <Toast ref={(ref) => Toast.setRef(ref)} topOffset={50} />
      </SafeAreaProvider>
    </>
  );
};

export default App;
