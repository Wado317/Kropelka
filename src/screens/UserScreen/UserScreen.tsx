import React from 'react'
import styled from 'styled-components/native';
import Share from 'react-native-share';
import { colors } from '../../const/colors'

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;

const Main = styled.View`
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

const Title = styled.Text`
  font-family: Megrim;
  font-size: 65px;
  color: ${colors.red};
  margin-top: 15px;
`;

const ButtonTitle = styled.Text`
  font-family: Rajdhani;
  font-size: 25px;
  color: ${colors.red};
`;

const Container = styled.View`
  margin-top: 30px;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  border-bottom-color: ${colors.darkGrey};
  border-bottom-width: 1px;
  width: 80%;
  margin-bottom: 30px;
`;

const UserScreen = () => {
  const shareApp = async () => {
    const shareOptions = {
      message: 'Kropelka to aplikacja dla honorowych dawców krwii w Krakowie. Wszystkie informacje w jednym miejscu!',
    };
    try {
      Share.open(shareOptions);
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  return (
    <SafeAreaContainer>
      <Main>
        <Logo
          source={require('../../../assets/images/Settings.png')}
          />
        <Title>
          Ustawienia
        </Title>
      </Main> 
      <Container>
        <Button>
          <ButtonTitle>
            Moje dane
          </ButtonTitle>
        </Button>
        <Button>
          <ButtonTitle>
            Zmiana hasła
          </ButtonTitle>
        </Button>
        <Button
          onPress={shareApp}
        >
          <ButtonTitle>
            Poleć nas znajomym
          </ButtonTitle>
        </Button>
        <Button>
          <ButtonTitle>
            Wyloguj się
          </ButtonTitle>
        </Button>
      </Container>
    </SafeAreaContainer>
  )
}

export default UserScreen

