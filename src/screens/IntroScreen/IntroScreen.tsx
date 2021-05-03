import React from 'react'
import { Dimensions } from 'react-native'
import { colors } from '../../const/colors'
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Routes } from '../../const/routes';
import { RoundButton } from '../../components/Button/Button'

const { width: screenWidth } = Dimensions.get('window');

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

const BottomImage = styled.Image`
  position: absolute;
  width: ${screenWidth}px;
  bottom: 0;
`;

const Main = styled.View`
  justify-content: space-around;
  align-items: center;
`;

const Header = styled.View`
  background-color: ${colors.lightGrey};
  padding-horizontal: 30px;
  padding-vertical: 20px;
  margin-horizontal: 50px;
  border-radius: 40px;
  margin-top: 30px;
`;

const Title = styled.Text`
  color: ${colors.danger};
  font-family: 'Rajdhani';
  font-size: 30px;
`;

const Welcoming = styled.Text`
  font-family: 'Rajdhani';
  font-size: 26px;
  margin-top: 10px;
`;

const ButtonsContainer = styled.View`
  margin-top: 40px;
`;

const IntroScreen = () => {
  const navigation = useNavigation();

  const goToLoginScreen = () => {
    navigation.navigate(Routes.LoginScreen);
  };

  const goToRegisterScreen = () => {
    navigation.navigate(Routes.RegisterInfoScreen);
  };

  return (
    <Screen>  
      <Main>
        <Logo
          source={require('../../components/kropelka/kropelka.png')}
        />
        <Header>
          <Title>
            Cześć!
          </Title>
          <Welcoming>
            Kropelka jest aplikacją stworzoną dla honorowych dawców krwii w Krakowie. Jesteś już z nami, czy dopiero dołączasz do grona bohaterów?
          </Welcoming>
        </Header>
      </Main>
      <ButtonsContainer>
        <RoundButton 
          label={'Załóż konto'}
          onPress={goToRegisterScreen}
          background={colors.white}
          textColor={colors.red}
          border={colors.red}
        />
        <RoundButton 
          label={'Zaloguj się'}
          onPress={goToLoginScreen}
          background={colors.red}
          textColor={colors.white}
          border={colors.red}
        />
      </ButtonsContainer>
      <BottomImage
        source={require('../../../assets/images/Bottom.png')}
      />
    </Screen>
  )
}

export default IntroScreen;
