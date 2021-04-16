import React from 'react'
import styled from 'styled-components/native';
import { Text } from "react-native";


import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import Heart from '../Icons/Heart';
import Raport from '../Icons/Raport';
import User from '../Icons/User';

import { colors } from '../../const/colors';
import { Routes } from '../../const/routes';

const SafeAreaContainer = styled.SafeAreaView`
  background-color: ${colors.red};
`;

const Container = styled.View`
  background-color: ${colors.red};
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  padding-horizontal: 20px;
  width: 100%;
`;

const Tab = styled.TouchableOpacity`
  padding-vertical: 18px;
  padding-horizontal: 24px;
`;

const tabBarIcons = {
  [Routes.RaportsScreen]: <Raport />,
  [Routes.MainScreen]: <Heart />,
  [Routes.UserScreen]: <User />,
};

const TabBar = ({
  state,
  descriptors,
  navigation,
  tabBarLabel,
}: BottomTabBarProps) => {
  console.warn(tabBarLabel);
  
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <SafeAreaContainer>
      <Container>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <Tab
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
          >

          </Tab>
          );
        })}
      </Container>
    </SafeAreaContainer>
  )
}

export default TabBar
