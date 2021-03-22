import React, { useState, useCallback } from 'react';
import { Dimensions } from 'react-native';
import { colors } from '../../const/colors';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Routes } from '../../const/routes';
import { RoundButton } from '../../components/Button/Button';
import { Picker } from '@react-native-picker/picker';
import { UniversalRedInput } from '../../components/UniversalInput/UniversalRedInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

const { height: screenHeight } = Dimensions.get('window');

const Screen = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
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

const PickerContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
`;

const PickerTitle = styled.Text`
  font-family: 'Rajdhani';
  font-size: 20px;
  margin-top: 30px;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center
`;

const Header = styled.Text`
  font-family: 'Megrim';
  font-size: 54px;
  color: ${colors.red};
  margin-top: 30px
`;

const ButtonContainer = styled.View`
  margin-top: 10px
`;

const RegisterInfoScreen = () => {
  const [selectedSex, setSelectedSex] = useState<string>('');
  const [name, setName] = useState<string>('');

  const navigation = useNavigation();

  const goToLoggedInStackScreen = () => {
    navigation.navigate(Routes.LoggedInStack)
  };

  const inputHandler = useCallback(
    (handler: any) => (value: string): void => {
      handler(value);
    },
    [],
  );

  return (
    <Screen> 
      <KeyboardAwareScrollView>
        <TopBar>
          <Logo
            source={require('../../components/kropelka/kropelka.png')}
          />
          <Header>
            Rejestracja
          </Header>
        </TopBar>
        <Container>
          <PickerContainer>
            <UniversalRedInput 
              label={'Twoje imie'}
              secure={false}
              value={name}
              onChangeText={inputHandler(setName)}
              placeholder={'Wpisz imie...'}
              placeholderTextColor={colors.darkGrey}
            />
            <PickerTitle>Wybierz swoją płeć:</PickerTitle>
            <Picker
              style = {{width: 300 }}
              selectedValue={selectedSex}
              onValueChange={(itemValue, itemIndex) =>
              setSelectedSex(itemValue)
            }>
              <Picker.Item label="Kobieta" value="female" />
              <Picker.Item label="Mężczyzna" value="male" />
            </Picker>
          </PickerContainer>
          <ButtonContainer>
            <RoundButton 
              label={'Stwórz konto'}
              onPress={goToLoggedInStackScreen}
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

export default RegisterInfoScreen
