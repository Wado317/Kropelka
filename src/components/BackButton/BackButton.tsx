import React from "react";
import { TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

export const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="absolute top-11 left-6 p-2 z-10"
      onPress={navigation.goBack}
    >
      <Svg width="15" height="20" viewBox="0 0 15 20">
        <Path
          fill="none"
          stroke="#000"
          strokeWidth="2"
          d="M14.17 18.915L1.702 9.862 14.17.809"
        />
      </Svg>
    </TouchableOpacity>
  );
};
