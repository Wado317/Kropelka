import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Dimensions, Vibration, TextInput } from 'react-native';
import { colors } from '../../const/colors';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Routes } from '../../const/routes';
import { RoundButton } from '../../components/Button/Button';
import { UniversalRedInput } from '../../components/UniversalInput/UniversalRedInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import TextValidator from '../../helpers/validators';
import FirebaseAuthService from '../../services/FirebaseAuthService';
import Toast from 'react-native-toast-message';
import BackButton from '../../components/BackButton/BackButton'
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

const Screen = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;

const TopBar = styled.View`
  align-items: center;
  margin-top: 20px;
`;

const Logo = styled.Image`
  width: 80px;
  height: 106px;
`;

const Header = styled.Text`
  font-family: 'Megrim';
  font-size: 54px;
  text-align: center;
  color: ${colors.red};
  margin-top: 30px
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 100px;
`;

const ButtonContainer = styled.View`
  position: absolute;
  bottom: 50px;
`;

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');

  const inputHandler = useCallback(
    (handler: any) => (value: string): void => {
      handler(value);
    },
    [],
  );

  const handleForgotPassword = () => {
    try {
      FirebaseAuthService.forgotPassword(email);
    } catch (error) {
      console.warn(error);
    };
    navigation.navigate(Routes.LoginScreen);
  };

  return (
    <Screen>
      <TopBar>
        <BackButton />
        <Logo
          source={require('../../components/kropelka/kropelka.png')}
        />
        <Header>
          Przypomnienie hasła
          </Header>
      </TopBar>
      <Container>
        <UniversalRedInput
          label={'Twój adres email'}
          secure={false}
          value={email}
          onChangeText={inputHandler(setEmail)}
          placeholder={'Wpisz swój email...'}
          placeholderTextColor={colors.darkGrey}
        />
        <ButtonContainer>
          <RoundButton
            label={'Przypomnij hasło'}
            onPress={handleForgotPassword}
            background={colors.red}
            textColor={colors.white}
            border={colors.white}
          />
        </ButtonContainer>
      </Container>
    </Screen>
  )
}

export default ForgotPasswordScreen
