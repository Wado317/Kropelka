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
        activeOpacity={0.9}
        style={styles.tab}
        onPress={() => onPress()}
      >
        {imageSource}
        <Text
          style={{
            paddingTop: 8,
            color: isActive ? colors.white : colors.white,
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
        'Ekran głowny', // TODO: Localizable strings
        8,
        <Heart />,
        () => navigation.navigate(routes[0]),
        index === 0,
      )}
      {renderTab(
        'Raporty', // TODO: Localizable strings
        8,
        <Raport />,
        () => navigation.navigate(routes[1]),
        index === 1,
      )}
      {renderTab(
        'Ustawienia', // TODO: Localizable strings
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
    height: 95,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    backgroundColor: colors.red,
    shadowOffset: {width: 2, height: 2},
    shadowColor: colors.darkGrey,
    shadowOpacity: 0.2,
  },

  tab: {
    flex: 1,
    padding: 8,
    marginTop: 5,
    alignItems: 'center',
    backgroundColor: colors.red,
    flexDirection: 'column',
  },
  activeImage: {},
  inactiveImage: {},
});

export default CustomTabBar;
