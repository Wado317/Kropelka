import React, { useState } from 'react'
import styled from 'styled-components/native';
import { colors } from '../../const/colors';
import { TouchableOpacity, StyleSheet} from "react-native";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 75%;
  background-color: ${colors.lightGrey}
  border-radius: 99999px;
  `;
  
  const LeftSelection = styled.TouchableOpacity`
  flex: 1;
  border-radius: 99999px;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: ${colors.red}
`;

const RightSelection = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 99999px;
  height: 40px;
  background-color: ${colors.lightGrey}
`;

const LeftText = styled.Text`
  color: ${colors.white}
`;

const RightText = styled.Text`
  color: ${colors.red}
`;

export const Selector = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Container>
      <LeftSelection>
        <LeftText>
          Mężczyzna
        </LeftText>
      </LeftSelection>
      <RightSelection>
        <RightText>
          Kobieta
        </RightText>
      </RightSelection>
    </Container>
  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    width: "90%",
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "65%"
  },

});

export default Selector
