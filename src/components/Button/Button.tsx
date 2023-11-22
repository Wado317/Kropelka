import classNames from "classnames";
import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  disabled?: boolean;
  text: string;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  disabled,
  text,
  ...rest
}) => {
  return (
    <TouchableOpacity
      className={classNames(
        "flex items-center bg-primary rounded-lg py-4 w-full",
        {
          "opacity-50": disabled,
        }
      )}
      onPress={onPress}
      disabled={disabled}
      {...rest}
    >
      <Text className="text-2xl text-white" style={{ fontFamily: "BakbakOne" }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
