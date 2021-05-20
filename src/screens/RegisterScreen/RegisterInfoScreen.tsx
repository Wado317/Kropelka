import React, {useState, useCallback} from 'react';
import {Dimensions} from 'react-native';
import {colors} from '../../const/colors';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {Routes} from '../../const/routes';
import {RoundButton} from '../../components/Button/Button';
import {UniversalRedInput} from '../../components/UniversalInput/UniversalRedInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import BackButton from '../../components/BackButton/BackButton';
import SwitchSelector from 'react-native-switch-selector';

const {height: screenHeight} = Dimensions.get('window');

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

const PickerContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  margin-horizontal: 30px;
`;

const PickerTitle = styled.Text`
  font-family: 'Rajdhani';
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Header = styled.Text`
  font-family: 'Megrim';
  font-size: 54px;
  color: ${colors.red};
  margin-top: 30px;
`;

const ButtonContainer = styled.View`
  margin-top: 60px;
`;

const RegisterInfoScreen = () => {
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [donatedBeforeRegistration, setDonatedBeforeRegistration] = useState<string>('');

  const navigation = useNavigation();

  const goToRegisterScreen = () => {
    navigation.navigate(Routes.RegisterScreen, {
      name: name,
      gender: gender,
      donatedBeforeRegistration: donatedBeforeRegistration,
    });
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
          <BackButton />
          <Logo source={require('../../components/kropelka/kropelka.png')} />
          <Header>Rejestracja</Header>
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
              autoCapitalize={'words'}
              keyboardType={'default'}
            />
            <PickerTitle>Wybierz płeć:</PickerTitle>
            <SwitchSelector
              options={[
                {label: 'Kobieta', value: 'Kobieta'},
                {label: 'Mężczyzna', value: 'Mężczyzna'},
              ]}
              initial={0}
              textColor={colors.red}
              selectedColor={colors.white}
              buttonColor={colors.red}
              backgroundColor={colors.lightGrey}
              onPress={setGender}
            />
            <PickerTitle>Ile ml krwi oddałaś/eś dotychczas?</PickerTitle>
            <UniversalRedInput
              label={false}
              secure={false}
              value={donatedBeforeRegistration}
              onChangeText={inputHandler(setDonatedBeforeRegistration)}
              placeholder={'Wpisz liczbę..'}
              placeholderTextColor={colors.darkGrey}
              autoCapitalize={'none'}
              keyboardType={'numeric'}
            />
          </PickerContainer>
          <ButtonContainer>
            <RoundButton
              label={'Przejdź dalej'}
              onPress={goToRegisterScreen}
              background={colors.red}
              textColor={colors.white}
              border={colors.white}
            />
          </ButtonContainer>
        </Container>
      </KeyboardAwareScrollView>
      <LeftScreen source={require('../../../assets/images/LeftScreen.png')} />
      <RightScreen source={require('../../../assets/images/RightScreen.png')} />
    </Screen>
  );
};

export default RegisterInfoScreen;
