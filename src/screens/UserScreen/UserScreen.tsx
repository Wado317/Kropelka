import React from 'react';
import styled from 'styled-components/native';
import Share from 'react-native-share';
import {colors} from '../../const/colors';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../const/routes';
import LogoutModal from '../../components/Modals/LogoutModal/LogoutModal';

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;

const Main = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Logo = styled.Image`
  width: 60px;
  height: 60px;
  margin-top: 20px;
`;

const Title = styled.Text`
  font-family: Megrim;
  font-size: 55px;
  color: ${colors.red};
  margin-top: 15px;
`;

const Container = styled.View`
  margin-top: 60px;
  align-items: center;
`;

const ButtonTitle = styled.Text`
  font-family: Rajdhani;
  font-size: 25px;
  color: ${colors.red};
`;

const Button = styled.TouchableOpacity`
  border-bottom-color: ${colors.darkGrey};
  border-bottom-width: 1px;
  width: 80%;
  margin-bottom: 30px;
`;

const UserScreen = () => {
  const navigation = useNavigation();

  const goToChangePasswordScreen = () => {
    navigation.navigate(Routes.ChangePasswordScreen);
  };

  const shareApp = async () => {
    const shareOptions = {
      message:
        'Kropelka to aplikacja dla honorowych dawców krwii w Krakowie. Wszystkie informacje w jednym miejscu!',
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
        <Logo source={require('../../../assets/images/Settings.png')} />
        <Title>Ustawienia</Title>
      </Main>
      <Container>
        <Button>
          <ButtonTitle>Moje dane</ButtonTitle>
        </Button>
        <Button>
          <ButtonTitle onPress={goToChangePasswordScreen}>
            Zmiana hasła
          </ButtonTitle>
        </Button>
        <Button onPress={shareApp}>
          <ButtonTitle>Poleć nas znajomym</ButtonTitle>
        </Button>
      </Container>
      <LogoutModal />
    </SafeAreaContainer>
  );
};

export default UserScreen;
