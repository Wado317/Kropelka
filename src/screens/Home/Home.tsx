import Button from "@components/Button";
import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView className="flex bg-white h-full">
      <View className="flex h-full px-8 pt-6 items-center justify-between">
        <View className="flex justify-center items-center gap-12">
          <Text
            className="text-primary text-5xl"
            style={{ fontFamily: "BakbakOne" }}
          >
            Dzień dobry
          </Text>
          <Image source={require("@assets/HeartLogo.png")} />
          <Text
            className="text-4xl text-black"
            style={{ fontFamily: "BarlowCondensed-Medium" }}
          >
            Twoja krew ratuje życie!
          </Text>
        </View>

        <Text
          className="text-2xl text-black text-center"
          style={{ fontFamily: "BarlowCondensed-Regular" }}
        >
          Dziękujemy, że jesteś. Kropelka ułatwi Ci wizyty w centrum
          krwiodawstwa.
        </Text>

        <Image source={require("@assets/poland.png")} className="w-6 h-6" />

        <View className="w-full">
          <Button text="ZALOGUJ SIĘ" onPress={() => console.warn("pressed")} />
          <View className="flex items-center mt-2">
            <Text
              className="text-2xl text-black"
              style={{ fontFamily: "BarlowCondensed-Medium" }}
            >
              Nie masz jeszcze konta?
            </Text>
            <Text
              className="text-2xl text-primary"
              style={{ fontFamily: "BarlowCondensed-Medium" }}
            >
              Zarejestruj się
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
