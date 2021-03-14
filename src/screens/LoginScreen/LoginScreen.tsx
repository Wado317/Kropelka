import React from 'react'
import { colors } from '../../const/colors'
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Routes } from '../../const/routes';
import { RoundButton } from '../../components/Button/Button'
import { UniversalInput } from '../../components/UniversalInput/UniversalInput'

const Screen = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
`;

const Logo = styled.Image`
  width: 80px;
  height: 106px;
  margin-top: 30px;
`;

const LeftBackground = styled.View`
  width: 502px;
  height: 502px;
  background-color: ${colors.red};
  border-radius: 99999;
  position: absolute;
  bottom: 60px;
  left: -200px;
  z-index: -9999;
`;

const RightBackground = styled.View`
  width: 548px;
  height: 548px;
  background-color: ${colors.darkRed};
  border-radius: 99999;
  position: absolute;
  bottom: 10px;
  right: -250px;
  z-index: -9998;
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
`;

const ButtonContainer = styled.View`
  margin-top: 25px;
`;

const LoginScreen = () => {
  const navigation = useNavigation();

  const goToLoggedInStackScreen = () => {
    navigation.navigate(Routes.LoggedInStack)
  };

  const handleUserValue = (value) => {
    console.log(value);
  };

  const handlePasswordValue = (value) => {
    console.log(value);
  };

  return (
    <Screen>  
      <Logo
        source={require('../../components/kropelka/kropelka.png')}
      />
      <Header>
        Logowanie
      </Header>
      <Container>
        <UniversalInput 
          label={'Nazwa użytkownika'}
          secure={false}
          value={handleUserValue}
          placeholder={'Wpisz nazwę...'}
          placeholderTextColor={colors.lightGrey}
        />
        <UniversalInput 
          label={'Hasło'}
          secure={true}
          value={handlePasswordValue}
          placeholder={'Wpisz hasło...'}
          placeholderTextColor={colors.lightGrey}
        />
        <ButtonContainer>
          <RoundButton 
            label={'Zaloguj się'}
            onPress={goToLoggedInStackScreen}
            background={colors.white}
            textColor={colors.red}
            border={colors.white}
          />
        </ButtonContainer>
      </Container>
      <LeftBackground />
      <RightBackground />
    </Screen>
  )
}

export default LoginScreen
