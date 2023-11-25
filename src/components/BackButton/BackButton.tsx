import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import classNames from "classnames";

export const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className={classNames("absolute top-0 left-6 p-2 z-10", {
        "top-8 left-6": Platform.OS === "android",
      })}
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
