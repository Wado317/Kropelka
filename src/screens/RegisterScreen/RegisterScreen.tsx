import React from 'react'
import { Dimensions } from 'react-native'
import { colors } from '../../const/colors'
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Routes } from '../../const/routes';
import { RoundButton } from '../../components/Button/Button'
import { UniversalRedInput } from '../../components/UniversalInput/UniversalRedInput'

const { height: screenHeight } = Dimensions.get('window');

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

const LeftScreen = styled.Image`
  position: absolute;
  height: ${screenHeight};
  left: 0;
`;

const RightScreen = styled.Image`
  position: absolute;
  height: ${screenHeight};
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
  align-items: center
`;

const ButtonContainer = styled.View`
  margin-top: 25px;
`;

const RegisterScreen = () => {
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
      <LeftScreen
        source={require('../../../assets/images/LeftScreen.png')}
      />
      <RightScreen
        source={require('../../../assets/images/RightScreen.png')}
      />
      <Header>
        Rejestracja
      </Header>
      <Container>
        <UniversalRedInput 
          label={'Adres email'}
          secure={false}
          value={handleUserValue}
          placeholder={'Wpisz email...'}
          placeholderTextColor={colors.darkGrey}
        />
        <UniversalRedInput 
          label={'Hasło'}
          secure={true}
          value={handlePasswordValue}
          placeholder={'Wpisz hasło...'}
          placeholderTextColor={colors.darkGrey}
        />
        <UniversalRedInput 
          label={'Powtórz hasło'}
          secure={true}
          value={handlePasswordValue}
          placeholder={'Wpisz hasło...'}
          placeholderTextColor={colors.darkGrey}
        />
        <ButtonContainer>
          <RoundButton 
            label={'Przejdź dalej'}
            onPress={goToLoggedInStackScreen}
            background={colors.red}
            textColor={colors.white}
            border={colors.white}
          />
        </ButtonContainer>
      </Container>
    </Screen>
  )
}

export default RegisterScreen
