import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from './src/const/colors';
import { Routes } from './src/const/routes';

import { navigationRef } from './src/helpers/navigation';

import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import IntroScreen from './src/screens/IntroScreen/IntroScreen'
import LoginScreen from './src/screens/LoginScreen/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen'
import RegisterInfoScreen from './src/screens/RegisterScreen/RegisterInfoScreen'
import RaportsScreen from './src/screens/RaportsScreen/RaportsScreen'
import LoggedInStack from './src/screens/LoggedInStack/LoggedInstack'

import { StatusBar } from 'react-native';

const AppStack = createStackNavigator();

const LoginStack = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <AppStack.Navigator>
        <AppStack.Screen
          component={HomeScreen}
          name={Routes.HomeScreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          component={IntroScreen}
          name={Routes.IntroScreen}
          options={{ 
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <AppStack.Screen
          component={LoginScreen}
          name={Routes.LoginScreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          component={RegisterScreen}
          name={Routes.RegisterScreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          component={RegisterInfoScreen}
          name={Routes.RegisterInfoScreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          component={RaportsScreen}
          name={Routes.RaportsScreen}
          options={{ headerShown: false }}
        />
      </AppStack.Navigator>
    </>
  );
};

const AppConnected = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack.Navigator>
        {/* <AppStack.Screen
          component={SplashScreen}
          name={Routes.SplashScreen}
          options={{ headerShown: false }}
        /> */}
        <AppStack.Screen
          component={LoginStack}
          name={Routes.LoginStack}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          component={LoggedInStack}
          name={Routes.LoggedInStack}
          options={{ headerShown: false }}
        />        
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default AppConnected;
