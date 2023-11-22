import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { LANGUAGES } from "../../language/constants";
import { useTranslation } from "react-i18next";
import useLanguage from "../../language/hooks/useLanguage";
import BackButton from "@components/BackButton";
import classNames from "classnames";
import Button from "@components/Button";

const SignIn: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView className="flex items-center bg-primary">
      <BackButton />
      <Text
        style={{ fontFamily: "BakbakOne" }}
        className="text-white text-4xl py-14"
      >
        {t("signIn.header")}
      </Text>
      <View className="flex bg-white h-full w-full items-center rounded-t-xl p-8">
        <Image source={require("@assets/BloodDrop.png")} />
        <TouchableOpacity>
          <Text
            className="text-2xl text-primary text-center"
            style={{ fontFamily: "BarlowCondensed-Regular" }}
          >
            {t("signIn.forgotPassword")}
          </Text>
        </TouchableOpacity>
        <Button
          text={t("home.logIn").toUpperCase()}
          onPress={() => console.log("Pressed")}
        />
        <Text
          className="text-2xl text-black text-center"
          style={{ fontFamily: "BarlowCondensed-Medium" }}
        >
          {t("signIn.doNotHaveAccount")}
        </Text>
        <TouchableOpacity>
          <Text
            className="text-2xl text-primary text-center"
            style={{ fontFamily: "BarlowCondensed-Medium" }}
          >
            {t("signIn.register")}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
