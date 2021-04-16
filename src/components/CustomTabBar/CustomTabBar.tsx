import React, {FC, useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Platform,
  Keyboard,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {colors} from '../../const/colors';

import Heart from '../Icons/Heart';
import Raport from '../Icons/Raport';
import User from '../Icons/User';

import {
  BottomTabBarOptions,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

interface CustomTabBarProps {
  props: BottomTabBarProps<BottomTabBarOptions>;
}

const CustomTabBar: FC<CustomTabBarProps> = ({props}) => {
  const {
    navigation,
    state: {routes, index},
  } = props;

  /* -------------------- State -------------------- */
  const [
    shouldShowBottomCompartment,
    setShouldShowBottomCompartment,
  ] = useState(true);

  /* -------------------- View lifecycle -------------------- */
  useEffect(() => {
    if (Platform.OS != 'android') return;
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setShouldShowBottomCompartment(false),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setShouldShowBottomCompartment(true),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  /* -------------------- Rendering -------------------- */
  function renderTab(
    title: string,
    fontSize: number,
    imageSource: JSX.Element,
    onPress: () => void,
    isActive: boolean,
  ): JSX.Element {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.tab}
        onPress={() => onPress()}>
        <View
          style={{
            height: '80%',
            aspectRatio: 1,
          }}>

        </View>

        <Text
          style={{
            paddingTop: 8,
            color: isActive ? colors.white : colors.darkGrey,
            fontWeight: '500',
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }

  if (!shouldShowBottomCompartment) return <></>;

  return (
    <SafeAreaView style={styles.mainContainer}>
      {renderTab(
        'Ustawienia', // TODO: Localizable strings
        8,
        <Heart />,
        () => navigation.navigate(routes[0]),
        index === 0,
      )}
      {renderTab(
        'Ciocio Klub', // TODO: Localizable strings
        8,
        <Raport />,
        () => navigation.navigate(routes[1]),
        index === 1,
      )}
      {renderTab(
        'Przedmioty', // TODO: Localizable strings
        8,
        <User />,
        () => navigation.navigate(routes[2]),
        index === 2,
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: 85,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    backgroundColor: colors.red,
    borderTopColor: colors.red,
    borderTopWidth: 0.5,
    shadowOffset: {width: 2, height: 2},
    shadowColor: colors.darkGrey,
    shadowOpacity: 0.2,
  },

  tab: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    backgroundColor: colors.red,
    flexDirection: 'column',
  },
  activeImage: {},
  inactiveImage: {},
});

export default CustomTabBar;
