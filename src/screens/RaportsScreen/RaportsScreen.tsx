import React, {useState} from 'react'
import { colors } from '../../const/colors'
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Routes } from '../../const/routes';
import { data } from '../../helpers/data';


const Screen = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
`;

const Logo = styled.Image`
  width: 110px;
  height: 110px;
  margin-top: 30px;
`;

const Header = styled.Text`
  font-family: 'Rajdhani';
  font-size: 28px;
  color: ${colors.red};
  margin-top: 30px;
  text-align: center
`;

const Main = styled.View`
  justify-content: space-around;
  align-items: center;
`;

const Container = styled.View`
  width: 80%;
  margin-top: 30px
`;

const Data = styled.View`
  flex-direction: row;
  justify-content: space-between
  border-bottom-color: ${colors.darkGrey};
  border-bottom-width: 1px;
  padding-horizontal: 10px;
`;

const DataText = styled.Text`
  font-family: 'Rajdhani';
  font-size: 22px;
  color: ${colors.darkGrey};
`;

const DataInfo = styled.Text`
  font-family: 'Rajdhani';
  font-size: 22px;
  color: ${colors.red};
  margin-top: 15px;
`;

const RaportsScreen = () => {
  const [visits, setVisits] = useState(data)
  const List = ({ visits }) => {
    return <>
      {visits.map((blood) => {
        return (
          <SingleVisit 
            key={blood.date} 
            {...blood}
          />
        );
      })}
    </>
  };

  const SingleVisit = ({ date, name }) => {
    return (
      <Data>
        <DataInfo>
          {date}
        </DataInfo>
        <DataInfo>
          {name}
        </DataInfo>
      </Data>
    )
  }
  return (
    <Screen>  
      <Main>
        <Logo
          source={require('../../../assets/images/BloodBank.png')}
        />
        <Header>
          Twoje wizyty w Centrum Krwiodawstwa w Krakowie:
        </Header>
      </Main>
      <Container>
        <Data>
          <DataText>
            Data
          </DataText>
          <DataText>
            Cel wizyty
          </DataText>
        </Data>
        <List visits={visits} />
      </Container>
    </Screen>
    )
  }

export default RaportsScreen;