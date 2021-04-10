import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Routes } from '../../const/routes';
import Heart from '../../components/Icons/Heart'
import Raport from '../../components/Icons/Raport'
import User from '../../components/Icons/User'


import TabBar from '../../components/TabBar/TabBar'
import MainScreen from '../MainScreen/MainScreen';
import RaportsScreen from '../RaportsScreen/RaportsScreen';
import UserScreen from '../UserScreen/UserScreen';
import { colors } from '../../const/colors';

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
    <>
      <Tab.Navigator tabBar={TabBar}>
        <Tab.Screen
          component={MainScreen}
          name={Routes.MainScreen}
          initialParams={route.params}
        />
        <Tab.Screen
          component={RaportsScreen}
          name={Routes.RaportsScreen}
          initialParams={route.params}
        />
        <Tab.Screen
          component={UserScreen}
          name={Routes.UserScreen}
          initialParams={route.params}
        />
      </Tab.Navigator>
    </>
  )
}

export default LoggedInStack
