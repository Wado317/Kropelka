import React, {useState, useCallback} from 'react';
import {colors} from '../../const/colors';
import styled from 'styled-components/native';
import {RoundButton} from '../../components/Button/Button';
import {UniversalInput} from '../../components/UniversalInput/UniversalInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import TextValidator from '../../helpers/validators';
import BackButton from '../../components/BackButton/BackButton';
import FirebaseAuthService from '../../services/FirebaseAuthService';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../const/routes';

const Screen = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
  justify-content: space-between;
  height: 850px;
  width: 100%;
`;

const Logo = styled.Image`
  width: 80px;
  height: 106px;
`;

const LeftBackground = styled.View`
  width: 502px;
  height: 502px;
  background-color: ${colors.red};
  border-radius: 99999px;
  position: absolute;
  bottom: 80px;
  left: -200px;
  z-index: -9999;
`;

const RightBackground = styled.View`
  width: 548px;
  height: 548px;
  background-color: ${colors.darkRed};
  border-radius: 99999px;
  position: absolute;
  bottom: 60px;
  right: -250px;
  z-index: -9998;
`;

const Header = styled.Text`
  font-family: 'Megrim';
  font-size: 54px;
  color: ${colors.red};
  margin-top: 30px;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 150px
  justify-content: center;
  align-items: center;
`;

const TopBar = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 20px;
`;

const ButtonContainer = styled.View`
  margin-top: 55px;
`;

const ValidationInfo = styled.Text`
  color: ${colors.white};
  font-family: 'Rajdhani';
  font-size: 16px;
  margin-horizontal: 35px;
  margin-vertical: 5px;
`;
const ForgotPasswordContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

const ForgotPassword = styled.Text`
  color: ${colors.white};
`;

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const navigation = useNavigation();

  const goToForgotPasswordScreen = () => {
    navigation.navigate(Routes.ForgotPasswordScreen);
  };
  const inputHandler = useCallback(
    (handler: any) => (value: string): void => {
      handler(value);
    },
    [],
  );
  // niepoprawny adres email i/lub haslo
  //      Vibration.vibrate()

  const validate = useCallback((): any => {
    if (!TextValidator.isEmail(email)) {
      setEmailError('Niepoprawny adres email');
    } else {
      setEmailError('');
    }
    return;
  }, [email, password]);

  const handleLogin = async () => {
    if (!validate()) {
      return;
    }
    try {
      await FirebaseAuthService.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <Screen>
      <KeyboardAwareScrollView style={{flex: 1, height: 100, width: '100%'}}>
        <TopBar>
          <BackButton />
          <Logo source={require('../../components/kropelka/kropelka.png')} />
          <Header>Logowanie</Header>
        </TopBar>
        <Container>
          <UniversalInput
            label={'Adres email'}
            secure={false}
            value={email}
            onChangeText={inputHandler(setEmail)}
            placeholder={'Wpisz nazwę...'}
            placeholderTextColor={colors.lightGrey}
          />
          <ValidationInfo>{emailError}</ValidationInfo>
          <UniversalInput
            label={'Hasło'}
            secure={true}
            value={password}
            onChangeText={inputHandler(setPassword)}
            placeholder={'Wpisz hasło...'}
            placeholderTextColor={colors.lightGrey}
          />
          <ForgotPasswordContainer onPress={goToForgotPasswordScreen}>
            <ForgotPassword>Zapomniałeś hasła?</ForgotPassword>
          </ForgotPasswordContainer>
          <ButtonContainer>
            <RoundButton
              label={'Zaloguj się'}
              onPress={handleLogin}
              background={colors.white}
              textColor={colors.red}
              border={colors.white}
            />
          </ButtonContainer>
        </Container>
      </KeyboardAwareScrollView>
      <LeftBackground />
      <RightBackground />
    </Screen>
  );
};

export default LoginScreen;
