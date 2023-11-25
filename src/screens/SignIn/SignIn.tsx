import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { useTranslation } from "react-i18next";
import BackButton from "@components/BackButton";
import Button from "@components/Button";
import TextInput from "@components/TextInput";
import User from "@assets/icons/user.svg";
import Lock from "@assets/icons/lock.svg";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState("WPROWADZONE DANE SĄ NIEPRAWIDŁOWE");

  const handlePress = () => {
    Keyboard.dismiss();
  };
  const gotoRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <SafeAreaView className="flex-1 items-center bg-primary">
      <LinearGradient
        colors={["#FC595A", "#FFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1, width: "100%", alignItems: "center" }}
      >
        <BackButton />
        <TouchableWithoutFeedback onPress={handlePress}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{
              alignItems: "center",
              width: "100%",
              height: "100%",
              flex: 1,
            }}
          >
            <Text
              style={{ fontFamily: "BakbakOne" }}
              className="text-white text-4xl py-14"
            >
              {t("signIn.header")}
            </Text>
            <View className="flex-1 h-full bg-white rounded-t-xl w-full">
              <View className="flex w-full h-full flex-1 items-center justify-between p-6">
                <Image
                  source={require("@assets/BloodDrop.png")}
                  style={{ width: 40, height: 75 }}
                />
                <View className="flex-1 w-full justify-center h-full mt-6">
                  <TextInput
                    className="mb-6"
                    value={email}
                    setValue={setEmail}
                    label={t("signIn.email")}
                    leftIcon={<User width={24} />}
                    keyboardType="email-address"
                    placeholder={t("signIn.enterEmail")}
                  />
                  <TextInput
                    value={password}
                    setValue={setPassword}
                    label={t("signIn.password")}
                    password
                    leftIcon={<Lock width={24} />}
                    placeholder={t("signIn.enterPassword")}
                  />
                  <Text
                    style={{ fontFamily: "BarlowCondensed-Regular" }}
                    className="text-primary text-base text-center mt-2"
                  >
                    {validate}
                  </Text>
                </View>
                <View className="w-full h-full mt-5 flex-1">
                  <TouchableOpacity>
                    <Text
                      className="text-2xl text-primary text-center"
                      style={{ fontFamily: "BarlowCondensed-Regular" }}
                    >
                      {t("signIn.forgotPassword")}
                    </Text>
                  </TouchableOpacity>
                  <Button
                    className="my-4"
                    text={t("home.logIn").toUpperCase()}
                    onPress={() => console.log("Pressed")}
                  />
                  <View>
                    <Text
                      className="text-2xl text-black text-center"
                      style={{ fontFamily: "BarlowCondensed-Medium" }}
                    >
                      {t("signIn.doNotHaveAccount")}
                    </Text>
                    <TouchableOpacity onPress={gotoRegister}>
                      <Text
                        className="text-2xl text-primary text-center"
                        style={{ fontFamily: "BarlowCondensed-Medium" }}
                      >
                        {t("signIn.register")}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignIn;
