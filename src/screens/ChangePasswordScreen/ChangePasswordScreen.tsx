import React, {useState, useCallback} from 'react';
import {colors} from '../../const/colors';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {Routes} from '../../const/routes';
import {RoundButton} from '../../components/Button/Button';
import {UniversalRedInput} from '../../components/UniversalInput/UniversalRedInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import TextValidator from '../../helpers/validators';
import FirebaseAuthService from '../../services/FirebaseAuthService';
import BackButton from '../../components/BackButton/BackButton';

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

const Header = styled.Text`
  font-family: 'Megrim';
  font-size: 54px;
  color: ${colors.red};
  margin-top: 30px;
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

const ChangePasswordScreen = () => {
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newPassword2, setNewPassword2] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [password2Error, setPassword2Error] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState(false);

  const navigation = useNavigation();

  // dodanie loader-a na isLoading
  const inputHandler = useCallback(
    (handler: any) => (value: string): void => {
      handler(value);
    },
    [],
  );

  const validate = useCallback((): boolean => {
    let isValid = true;

    if (!TextValidator.isCorrectPassword(newPassword)) {
      isValid = false;
      setPasswordError('Wymagane 6 znaków, wielka litera oraz cyfra.');
    } else {
      passwordError && setPasswordError('');
    }

    if (newPassword !== newPassword2) {
      setPassword2Error('Błędnie powtórzone hasło.');
      isValid = false;
    } else {
      setPassword2Error('');
    }

    setIsFormValid(isValid);
    return isValid;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newPassword, newPassword2]);

  const handlePasswordChange = async () => {
    if (!validate()) {
      return;
    }
    try {
      await FirebaseAuthService.changePassword(newPassword, oldPassword);
    } catch (error) {
      console.warn(error);
    }
    navigation.navigate(Routes.UserScreen);
  };

  return (
    <Screen>
      <KeyboardAwareScrollView style={{width: '100%', height: 100}}>
        <TopBar>
          <BackButton />
          <Logo source={require('../../components/kropelka/kropelka.png')} />
          <Header>Zmiana hasła</Header>
        </TopBar>
        <Container>
          <UniversalRedInput
            label={'Stare hasło'}
            secure={true}
            value={oldPassword}
            onChangeText={inputHandler(setOldPassword)}
            placeholder={'Wpisz stare hasło...'}
            placeholderTextColor={colors.darkGrey}
            autoCapitalize={'none'}
            keyboardType={'none'}
          />
          <UniversalRedInput
            label={'Nowe hasło'}
            secure={true}
            value={newPassword}
            onChangeText={inputHandler(setNewPassword)}
            placeholder={'Wpisz nowe hasło...'}
            placeholderTextColor={colors.darkGrey}
            autoCapitalize={'none'}
            keyboardType={'none'}
          />
          <ValidationInfo>{passwordError}</ValidationInfo>
          <UniversalRedInput
            label={'Powtórz nowe hasło'}
            secure={true}
            value={newPassword2}
            onChangeText={inputHandler(setNewPassword2)}
            placeholder={'Wpisz nowe hasło...'}
            placeholderTextColor={colors.darkGrey}
            autoCapitalize={'none'}
            keyboardType={'none'}
          />
          <ValidationInfo>{password2Error}</ValidationInfo>
          <ButtonContainer>
            <RoundButton
              label={'Zmień hasło'}
              onPress={handlePasswordChange}
              background={colors.red}
              textColor={colors.white}
              border={colors.white}
            />
          </ButtonContainer>
        </Container>
      </KeyboardAwareScrollView>
    </Screen>
  );
};

export default ChangePasswordScreen;
