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
import ChevronDown from "@assets/icons/chevron-down.svg";

import { LinearGradient } from "expo-linear-gradient";
import RNPickerSelect from "react-native-picker-select";

const Register: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(true);
  const [repeatPassword, setRepeatPassowrd] = useState("");
  const [repeatPasswordValidation, setRepeatPasswordValidation] =
    useState(true);
  const [gender, setGender] = useState("");
  const [genderValidation, setGenderValidation] = useState(true);
  const values = [
    { label: t("register.female"), value: "female" },
    { label: t("register.male"), value: "male" },
  ];
  const handlePress = () => {
    Keyboard.dismiss();
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    const hasOneDigit = /\d/.test(password);
    const hasOneUpperCaseLetter = /[A-Z]/.test(password);
    const isPasswordValid =
      password.length >= 8 && hasOneDigit && hasOneUpperCaseLetter;

    const isRepeatPasswordValid = repeatPassword === password;

    const isGenderValid =
      gender !== "" && gender !== null && gender !== undefined;

    setEmailValidation(isEmailValid);
    setPasswordValidation(isPasswordValid);
    setRepeatPasswordValidation(isRepeatPasswordValid);
    setGenderValidation(isGenderValid);

    const isFormValid =
      isEmailValid && isPasswordValid && isRepeatPasswordValid && isGenderValid;

    return isFormValid;
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
            }}
          >
            <Text
              style={{ fontFamily: "BakbakOne" }}
              className="text-white text-4xl py-14"
            >
              {t("register.header")}
            </Text>
            <ScrollView
              horizontal={false}
              className="bg-white rounded-t-xl h-full w-full"
              keyboardShouldPersistTaps="handled"
            >
              <View className="flex flex-1 flex-col w-full h-full items-center justify-between px-8 py-2">
                <View className="flex-1 w-full my-8 justify-between">
                  <TextInput
                    value={email}
                    setValue={setEmail}
                    label={t("signIn.email")}
                    leftIcon={<User width={24} />}
                    keyboardType="email-address"
                  />
                  <Text
                    style={{ fontFamily: "BarlowCondensed-Regular" }}
                    className="text-primary text-base text-center mb-6"
                  >
                    {emailValidation
                      ? ""
                      : t("register.emailValidation").toUpperCase()}
                  </Text>
                  <TextInput
                    value={password}
                    setValue={setPassword}
                    label={t("signIn.password")}
                    password
                    leftIcon={<Lock width={24} />}
                  />
                  <Text
                    style={{ fontFamily: "BarlowCondensed-Regular" }}
                    className="text-primary text-base text-center mb-6"
                  >
                    {passwordValidation
                      ? ""
                      : t("register.passwordValidation").toUpperCase()}
                  </Text>
                  <TextInput
                    value={repeatPassword}
                    setValue={setRepeatPassowrd}
                    label={t("signIn.password")}
                    password
                    leftIcon={<Lock width={24} />}
                  />
                  <Text
                    style={{ fontFamily: "BarlowCondensed-Regular" }}
                    className="text-primary text-base text-center mb-6"
                  >
                    {repeatPasswordValidation
                      ? ""
                      : t("register.repeatPasswordValidation").toUpperCase()}
                  </Text>
                  <View>
                    <Text
                      className="absolute top-[-16] z-10 left-4 bg-white px-1 text-lg text-gray"
                      style={{ fontFamily: "BarlowCondensed-Medium" }}
                    >
                      {t("register.gender")}
                    </Text>
                    <RNPickerSelect
                      useNativeAndroidPickerStyle={false}
                      style={{
                        inputIOS: {
                          borderColor: "#C4C4C4",
                          borderWidth: 2,
                          borderRadius: 10,
                          paddingHorizontal: 20,
                          fontSize: 16,
                          paddingVertical: 18,
                          width: "100%",
                        },
                        inputAndroid: {
                          borderColor: "#C4C4C4",
                          borderWidth: 2,
                          borderRadius: 10,
                          paddingHorizontal: 20,
                          fontSize: 16,
                          paddingVertical: 12,
                          width: "100%",
                        },
                      }}
                      onValueChange={(value) => setGender(value)}
                      items={values}
                      Icon={() => {
                        return <ChevronDown width={24} />;
                      }}
                    />
                  </View>

                  <Text
                    style={{ fontFamily: "BarlowCondensed-Regular" }}
                    className="text-primary text-base text-center"
                  >
                    {genderValidation
                      ? ""
                      : t("register.genderValidation").toUpperCase()}
                  </Text>
                </View>
                <View className="w-full">
                  <Button
                    text={t("register.createAccount").toUpperCase()}
                    onPress={validateForm}
                  />
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Register;
