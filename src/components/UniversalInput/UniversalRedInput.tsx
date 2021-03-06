import React from 'react'
import styled from 'styled-components/native';
import { colors } from '../../const/colors'

const Container = styled.View`
`;

const ChooseInput = styled.TextInput`
  height: 40px;
  color: ${colors.black};
  z-index: 20;
`;

const InputBottom = styled.Image`
  margin-top: -40px;
  z-index: 10;
`;

const InputTitle = styled.Text`
  font-family: 'Rajdhani'
  font-size: 18px;
  color: ${colors.red};
  margin-bottom: 10px;
`;

export const UniversalRedInput = ({
  label,
  secure,
  value,
  placeholder,
  placeholderTextColor,
  onChangeText,
  autoCapitalize,
  keyboardType,
}) => {
  return (
    <Container>
      <InputTitle>{label}</InputTitle>
      <ChooseInput 
        secureTextEntry={secure}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
      />
      <InputBottom source={require('../../../assets/images/InputRed.png')} />
    </Container>
  )
}

export default UniversalRedInput