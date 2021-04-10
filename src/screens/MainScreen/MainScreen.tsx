import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../const/colors';
import Plus from '../../components/Icons/Plus'

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  border: 2px solid ${colors.red};
  border-radius: 40px;
  margin-horizontal: 50px;
  margin-top: 90px;
  flex-direction: row;
`;

const Logo = styled.Image`
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: 20;
  top: -80px
`;

const BloodCounter = styled.Text`
  font-family: Megrim;
  font-size: 65px;
  color: ${colors.red};
  padding-top: 15px;
  padding-bottom: 15px;
  `;
  
  const PlusContainer = styled.View`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
`;


const MainScreen = () => {
  return (
    <SafeAreaContainer>
      <Container>
          <Logo
            source={require('../../../assets/images/BloodDonation.png')}
          />
          <BloodCounter>
            4,950ml
          </BloodCounter>
          <PlusContainer>
            <Plus />
          </PlusContainer>
      </Container>
    </SafeAreaContainer>
  )
}

export default MainScreen
