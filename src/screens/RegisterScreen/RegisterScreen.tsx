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

const { height: screenHeight } = Dimensions.get('window');

const Screen = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;

const TopBar = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 20px;
`;

const Logo = styled.Image`
  width: 80px;
  height: 106px;
`;

const LeftScreen = styled.Image`
  position: absolute;
  height: ${screenHeight}px;
  left: 0;
`;

const RightScreen = styled.Image`
  position: absolute;
  height: ${screenHeight}px;
  right: 0;
`;

const Header = styled.Text`
  font-family: 'Megrim';
  font-size: 54px;
  color: ${colors.red};
  margin-top: 30px
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const ButtonContainer = styled.View`
  margin-top: 60px;
`;

const ValidationInfo = styled.Text`
  color: ${colors.black};
  font-family: 'Rajdhani';
  font-size: 16px;
  margin-horizontal: 35px;
  margin-vertical: 5px;
`;

const RegisterScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [password2Error, setPassword2Error] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState(false);

  const navigation = useNavigation();

  const ref_input1 = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();

  const goToRegisterInfoScreenScreen = () => {
    navigation.navigate(Routes.RegisterInfoScreen)
  };
// dodanie loader-a na isLoading
  const inputHandler = useCallback(
    (handler: any) => (value: string): void => {
      handler(value);
    },
    [],
  );

  const validate = useCallback((): boolean => {
    let isValid = true;

    if (!TextValidator.isEmail(email)) {
      setEmailError('Błędny adres email');
      isValid = false;
      Vibration.vibrate()
    } else {
      setEmailError('');
    }

    if (!TextValidator.isCorrectPassword(password)) {
      isValid = false;
      setPasswordError('Wymagane 6 znaków, wielka litera oraz cyfra.');
    } else {
      passwordError && setPasswordError('');
    }

    if (password !== password2) {
      setPassword2Error('Błędnie powtórzone hasło.');
      isValid = false;
    } else {
      setPassword2Error('');
    }

    setIsFormValid(isValid);
    return isValid;
  }, [email, password, password2]);

  const handleRegister = async () => {
    if (!validate()) {
      return;
    }
    try {
      await FirebaseAuthService.signUpWithEmailAndPassword( email, password )
      Toast.show({
        type: 'success',
        text1: 'Udało się!',
        text2: 'Twoje konto zostało utworzone!',
        topOffset: 50,
      });
    } catch (error) {
    };
  };

  return (
    <Screen>  
      <KeyboardAwareScrollView style= {{ width: '100%', height: 100 }}>
        <TopBar>
          <BackButton />
          <Logo
            source={require('../../components/kropelka/kropelka.png')}
          />
          <Header>
            Rejestracja
          </Header>
        </TopBar>
        <Container>
          <UniversalRedInput 
            label={'Adres email'}
            secure={false}
            value={email}
            onChangeText={inputHandler(setEmail)}
            // REF!! przeskoki miedzy inputami, przed funkcja focus "?" wrazie wywalenia sie refa (ominiecie crash-a apki)
            // inputy bez styled components
            // animacja oddanej krwii
            
            placeholder={'Wpisz email...'}
            placeholderTextColor={colors.darkGrey}
            />
          <ValidationInfo>{emailError}</ValidationInfo>
          <UniversalRedInput 
            label={'Hasło'}
            secure={true}
            value={password}
            onChangeText={inputHandler(setPassword)}
            placeholder={'Wpisz hasło...'}
            placeholderTextColor={colors.darkGrey}
            />
          <ValidationInfo>{passwordError}</ValidationInfo>
          <UniversalRedInput 
            label={'Powtórz hasło'}
            secure={true}
            value={password2}
            onChangeText={inputHandler(setPassword2)}
            placeholder={'Wpisz hasło...'}
            placeholderTextColor={colors.darkGrey}
            />
          <ValidationInfo>{password2Error}</ValidationInfo>
          <ButtonContainer>
            <RoundButton 
              label={'Przejdź dalej'}
              onPress={handleRegister}
              background={colors.red}
              textColor={colors.white}
              border={colors.white}
            />
          </ButtonContainer>
        </Container>
      </KeyboardAwareScrollView>
      <LeftScreen
        source={require('../../../assets/images/LeftScreen.png')}
      />
      <RightScreen
        source={require('../../../assets/images/RightScreen.png')}
      />
    </Screen>
  )
}

export default RegisterScreen
