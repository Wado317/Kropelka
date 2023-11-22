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

const ChangeLanguage: React.FC = () => {
  const { t } = useTranslation();
  const { currentLanguage, setAppLanguage } = useLanguage();

  return (
    <SafeAreaView className="flex items-center bg-primary">
      <BackButton />
      <Text
        style={{ fontFamily: "BakbakOne" }}
        className="text-white text-4xl py-14"
      >
        {t("changeLanguageScreen.header")}
      </Text>
      <View className="flex bg-white h-full w-full rounded-t-xl p-8">
        {Object.values(LANGUAGES).map((l) => (
          <TouchableOpacity
            key={l.label}
            className={classNames(
              "flex flex-row mb-8 bg-white shadow-md border-white border-2 rounded-xl p-4 items-center",
              {
                "border-primary border-2": currentLanguage === l.value,
              }
            )}
            onPress={() => setAppLanguage(l.value)}
          >
            <View className="mr-8">
              <Image source={l.icon} />
            </View>
            <Text className="text-lg" key={l.value}>
              {t(l.label)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default ChangeLanguage;
