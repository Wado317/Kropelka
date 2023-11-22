import Button from "@components/Button";
import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import ChangeLanguageIcon from "@language/components/ChangeLanguageIcon";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Routes } from "@constans/routes";

const Home = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const goToChangeLanguageScreen = () => {
    navigation.navigate(Routes.ChangeLanguageScreen);
  };

  const goToSignInScreen = () => {
    navigation.navigate(Routes.SignInScreen);
  };
  return (
    <SafeAreaView className="flex bg-white h-full">
      <View className="flex h-full px-8 pt-6 items-center justify-between">
        <View className="flex justify-center items-center gap-12">
          <Text
            className="text-primary text-4xl w-full"
            style={{ fontFamily: "BakbakOne" }}
          >
            {t("home.welcome")}
          </Text>
          <Image source={require("@assets/HeartLogo.png")} />
          <Text
            className="text-4xl text-black text-center"
            style={{ fontFamily: "BarlowCondensed-Medium" }}
          >
            {t("home.title")}
          </Text>
        </View>

        <Text
          className="text-2xl text-black text-center"
          style={{ fontFamily: "BarlowCondensed-Regular" }}
        >
          {t("home.subtitle")}
        </Text>

        <ChangeLanguageIcon onPress={goToChangeLanguageScreen} />

        <View className="w-full">
          <Button
            text={t("home.logIn").toUpperCase()}
            onPress={goToSignInScreen}
          />
          <View className="flex items-center mt-2">
            <Text
              className="text-2xl text-black text-center"
              style={{ fontFamily: "BarlowCondensed-Medium" }}
            >
              {t("home.doNotHaveAccount")}
            </Text>
            <Text
              className="text-2xl text-primary"
              style={{ fontFamily: "BarlowCondensed-Medium" }}
            >
              {t("home.register")}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
