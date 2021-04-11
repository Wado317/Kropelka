import React from 'react';
import * as Progress from 'react-native-progress';
import styled from 'styled-components/native';
import { colors } from '../../const/colors';
import Plus from '../../components/Icons/Plus'
import BloodDropsCarousel from '../../components/BloodDropsCarousel/BloodDropsCarousel'

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
  margin-top: 100px;
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
  padding-vertical: 15px;
  `;
  
const PlusContainer = styled.View`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
`;

const InviteContainer = styled.View`
  background-color: ${colors.red};
  margin-top: 50px;
  align-items: center;
  padding-vertical: 20px
`;

const InviteText = styled.Text`
  color: ${colors.white}
  font-family: Rajdhani;
  font-size: 25px;
`;
  
const DaysLeft = styled.Text`
  color: ${colors.white}
  font-family: Rajdhani;
  font-size: 35px;
  padding-top: 15px;
`;

const Date = styled.Text`
  color: ${colors.white}
  font-family: Rajdhani;
  font-size: 15px;
`;

const StorageContainer = styled.View`
  margin-top: 40px;
  align-items: center;
  padding-vertical: 20px
`;

const StorageText = styled.Text`
  color: ${colors.red}
  font-family: Rajdhani;
  font-size: 25px;
`;

const StorageDate = styled.Text`
  color: ${colors.red}
  font-family: Rajdhani;
  font-size: 15px;
`;

const Thanks = styled.Text`
  color: ${colors.red};
  text-align: center;
  font-family: Rajdhani;
  font-size: 42px;
  width: 70%
`;

const TextContainer = styled.View`
  align-items: center;
  padding-vertical: 20px
`;

const BarContainer = styled.View`
  align-items: center;
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
      <BarContainer>
        <Progress.Bar 
          progress={0.3} 
          width={200} 
          height={10}
          color={colors.green}
        />
      </BarContainer>
      <InviteContainer>
        <InviteText>
          Zapraszamy ponownie za:
        </InviteText>
        <DaysLeft>
          42 dni
        </DaysLeft>
        <Date>
          (20-05-2021)
        </Date>
      </InviteContainer>
      <StorageContainer>
        <StorageText>
          Zapasy krwii:
        </StorageText>
        <StorageDate>
          Stan na dzień: 31-03-2021
        </StorageDate>
      </StorageContainer>
      <BloodDropsCarousel />
      {/* <TextContainer>
        <Thanks>
          Dziękujemy, że jesteś!
        </Thanks>
      </TextContainer> */}
    </SafeAreaContainer>
  )
}

export default MainScreen
