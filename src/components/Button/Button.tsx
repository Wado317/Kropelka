import React, { useMemo } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native';
import { colors } from '../../const/colors'


const Button = styled.TouchableOpacity`
  margin-bottom: 20px;
  align-items: center;
  background-color: ${props => props.background || colors.white};
  padding-horizontal: 105px;
  padding-vertical: 20px;
  border-radius: 50px;
  border: 1px solid ${props => props.border || ''};
`;

const ButtonText = styled.Text`
  font-family: 'Rajdhani';
  color: ${props => props.textColor || colors.red};
  font-size: 19px;
`;

export const RoundButton = ( { onPress, label, background, textColor, border } ) => {
  return (
    <View>
      <Button 
        onPress={onPress}
        label={label}
        background={background}
        border={border}
      > 
        <ButtonText
          textColor={textColor}
        >
          {label}
        </ButtonText>
      </Button>
    </View>
  )
}

export default Button
