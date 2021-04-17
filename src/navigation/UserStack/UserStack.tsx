import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Routes } from '../../const/routes';
import Heart from '../../components/Icons/Heart'
import Raport from '../../components/Icons/Raport'
import User from '../../components/Icons/User'


import CustomTabBar from '../../components/CustomTabBar/CustomTabBar'
import MainScreen from '../../screens/MainScreen/MainScreen';
import RaportsScreen from '../../screens/RaportsScreen/RaportsScreen';
import UserScreen from '../../screens/UserScreen/UserScreen';
import { colors } from '../../const/colors';
import { NavigationContainer } from '@react-navigation/native';

interface ILoggedInStack {
  route: {
    params?: {
      fromLogin?: boolean;
    };
  };
}
const LoggedInStack = ({ route }: ILoggedInStack) => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen
          component={MainScreen}
          name={Routes.MainScreen}
          initialParams={route.params}
          options={{
            tabBarLabel: 'Ekran główny',
            tabBarIcon: () => (
              <Heart />
            ),
          }}        
        />
        <Tab.Screen
          component={RaportsScreen}
          name={Routes.RaportsScreen}
          initialParams={route.params}
          options={{
            tabBarLabel: 'Raporty',
            tabBarIcon: () => (
              <Raport />
            ),
          }}  
        />
        <Tab.Screen
          component={UserScreen}
          name={Routes.UserScreen}
          initialParams={route.params}
          options={{
            tabBarLabel: 'Użytkownik',
            tabBarIcon: () => (
              <User />
            ),
          }}  
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default LoggedInStack
