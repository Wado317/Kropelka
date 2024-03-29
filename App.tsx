import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { Platform, StyleSheet, View } from "react-native";
import Home from "@screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import ChangeLanguage from "@screens/ChangeLanguage";
import SignIn from "@screens/SignIn";
import Register from "@screens/Register";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded, fontError] = useFonts({
    BakbakOne: require("@assets/fonts/BakbakOne-Regular.ttf"),
    "BarlowCondensed-Regular": require("@assets/fonts/BarlowCondensed-Regular.ttf"),
    "BarlowCondensed-Medium": require("@assets/fonts/BarlowCondensed-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ChangeLanguage" component={ChangeLanguage} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}
