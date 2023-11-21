import React from "react";
import { View, Text } from "react-native";

const Home = () => {
  return (
    <View className="bg-whiteflex-1 justify-center items-center h-full">
      <Text className="text-2xl font-bold mb-4">
        Welcome to the Home Screen!
      </Text>
      <Text className="text-lg text-gray-500">
        This is a template for the Home screen using React Native and Tailwind
        CSS.
      </Text>
    </View>
  );
};

export default Home;
