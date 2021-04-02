import React from 'react'
import styled from 'styled-components/native';
import { colors } from '../../const/colors'

const Container = styled.View`
`;

const ChooseInput = styled.TextInput`
  height: 40px;
  color: ${colors.white};
  z-index: 20;
`;

const InputBottom = styled.Image`
  margin-top: -40px;
  z-index: 10;
`;

const InputTitle = styled.Text`
  font-family: 'Rajdhani'
  font-size: 18px;
  color: ${colors.white};
  margin-bottom: 10px;
`;

export const UniversalInput = ({ label, secure, value, placeholder, placeholderTextColor, onChangeText }) => {
  return (
    <Container>
      <InputTitle>
        {label}
      </InputTitle>
      <ChooseInput 
       secureTextEntry={secure}
       value={value}
       placeholder={placeholder}
       placeholderTextColor={placeholderTextColor}
       onChangeText={onChangeText}
       autoCapitalize="none"
      />
      <InputBottom 
        source={require('../../../assets/images/Input.png')}
      />
    </Container>
  )
}

export default UniversalInput

