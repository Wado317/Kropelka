import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native'

import { BottomTabBarOptions, BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Routes } from '../../const/routes';

import CustomTabBar from '../../components/CustomTabBar/CustomTabBar'
import MainScreen from '../../screens/MainScreen/MainScreen';
import RaportsScreen from '../../screens/RaportsScreen/RaportsScreen';
import UserScreen from '../../screens/UserScreen/UserScreen';
import { colors } from '../../const/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChangePasswordScreen from '../../screens/ChangePasswordScreen/ChangePasswordScreen';

interface IUserStack {
  route: {
    params?: {
      fromLogin?: boolean;
    };
  };
}

const SettingsNavigator = createStackNavigator();

const HomeTabs = ({ route }: IUserStack) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator 
      tabBar={(props: BottomTabBarProps<BottomTabBarOptions>) => <CustomTabBar props={props}/>}
    >
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
  );
};

const UserStack = ({ route }: IUserStack) => {
  return (
    <NavigationContainer>
      <SettingsNavigator.Navigator>
        <SettingsNavigator.Screen
          component={HomeTabs}
          name={Routes.UserScreen}
          initialParams={route.params}
          options={{ headerShown: false }}
        />
        <SettingsNavigator.Screen
          component={ChangePasswordScreen}
          name={Routes.ChangePasswordScreen}
          initialParams={route.params}
          options={{ headerShown: false }}
        />
      </SettingsNavigator.Navigator>
    </NavigationContainer>
  )
}

export default UserStack
