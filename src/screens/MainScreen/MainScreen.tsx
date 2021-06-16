import React, {useState} from 'react';
import * as Progress from 'react-native-progress';
import styled from 'styled-components/native';
import {colors} from '../../const/colors';
import BloodDropsCarousel from '../../components/BloodDropsCarousel/BloodDropsCarousel';
import {Animated, StyleSheet} from 'react-native';
import {CountUp} from 'use-count-up';
import DonationModal from '../../components/Modals/DonationModal/DonationModal';

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
  padding-horizontal: 15px;
`;

const Logo = styled.Image`
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: 20;
  top: -80px;
`;

const InviteContainer = styled.View`
  background-color: ${colors.red};
  margin-top: 50px;
  align-items: center;
  padding-vertical: 20px;
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
  padding-vertical: 20px;
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

const BarContainer = styled.View`
  align-items: center;
`;

const MainScreen = () => {
  const [donation, setDonation] = useState(14950);

  return (
    <SafeAreaContainer>
      <Container>
        <Logo source={require('../../../assets/images/BloodDonation.png')} />
        <Animated.Text style={styles.bloodContainer}>
          <CountUp
            isCounting
            end={donation}
            duration={3.2}
            easing={'easeOutCubic'}
          />
          ml
        </Animated.Text>
        <DonationModal onPress={() => setDonation(donation + 500)} />
      </Container>
      <BarContainer>
        <Progress.Bar
          progress={donation / 18000}
          width={200}
          height={10}
          color={colors.green}
        />
      </BarContainer>
      <InviteContainer>
        <InviteText>Zapraszamy ponownie za:</InviteText>
        <DaysLeft>42 dni</DaysLeft>
        <Date>(20-05-2021)</Date>
      </InviteContainer>
      <StorageContainer>
        <StorageText>Zapasy krwii:</StorageText>
        <StorageDate>Stan na dzień: 31-03-2021</StorageDate>
      </StorageContainer>
      <BloodDropsCarousel />
      {/* <TextContainer>
        <Thanks>
          Dziękujemy, że jesteś!
        </Thanks>
      </TextContainer> */}
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  bloodContainer: {
    fontFamily: 'Megrim',
    fontSize: 60,
    color: colors.red,
    paddingVertical: 10,
    width: 230,
  },
});

export default MainScreen;
