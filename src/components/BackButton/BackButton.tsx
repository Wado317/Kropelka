import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../const/colors';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Container = styled.View`
  position: absolute;
  left: 25px;
  top: 15px;
`;

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity onPress={navigation.goBack}>
        <Svg width="23" height="30" viewBox="0 0 15 20">
          <Path
            fill="none"
            stroke={colors.black}
            strokeWidth="2"
            d="M14.17 18.915L1.702 9.862 14.17.809"
            />
        </Svg>
      </TouchableOpacity>
    </Container>
        )
  };

export default BackButton;