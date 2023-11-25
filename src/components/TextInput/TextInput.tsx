import React, { useState } from "react";
import {
  View,
  TextInput as RNTextInput,
  TouchableOpacity,
  Text,
  ViewProps,
  KeyboardTypeOptions,
} from "react-native";
import Eye from "@assets/icons/eye.svg";
import classNames from "classnames";

interface TextInputProps extends ViewProps {
  label: string;
  password?: boolean;
  value: string;
  setValue: (text: string) => void;
  leftIcon?: React.ReactNode;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  password,
  value,
  setValue,
  leftIcon,
  keyboardType,
  placeholder,
  ...rest
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View
      className="items-center justify-between p-3 pr-8 flex-row w-full border-gray border-2 rounded-lg"
      {...rest}
    >
      <View className="flex-row gap-2 w-full">
        {leftIcon && (
          <View className="pr-2 border-r-gray border-r-2">{leftIcon}</View>
        )}
        <RNTextInput
          className={classNames("w-full", {
            "w-11/12": password,
            "w-10/12": leftIcon,
            "w-9/12": leftIcon && password,
          })}
          value={value}
          onChangeText={setValue}
          secureTextEntry={password && !passwordVisible}
          keyboardType={keyboardType}
          placeholder={placeholder}
        />
      </View>
      <Text
        className="absolute top-[-18] left-4 bg-white px-1 text-lg text-gray"
        style={{ fontFamily: "BarlowCondensed-Medium" }}
      >
        {label}
      </Text>
      {password && (
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Eye width={20} height={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInput;
