import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import styled from 'styled-components/native';
import { colors } from '../../../const/colors';
import FirebaseAuthService from "../../../services/FirebaseAuthService";

const ButtonTitle = styled.Text`
  font-family: Rajdhani;
  font-size: 25px;
  color: ${colors.red};
`;

const Button = styled.TouchableOpacity`
  margin-bottom: 30px;
`;

const LogoutModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Czy na pewno chcesz się wylogować?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => FirebaseAuthService.signOut()}
            >
              
              <Text style={styles.textStyle}>Potwierdź</Text>
            </Pressable>
            <Pressable
              style={[styles.button2, styles.buttonClose2]}
              onPressOut={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle2}>Anuluj</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Button
        onPress={() => setModalVisible(true)}
      >
        <ButtonTitle>
          Wyloguj się
        </ButtonTitle>
      </Button>
    </View>
  );
};

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
  button2: {
    borderRadius: 20,
    padding: 9,
    elevation: 2,
    marginTop: 10,
    width: "65%"
  },
  buttonClose: {
    backgroundColor: colors.red,
  },
  buttonClose2: {
    backgroundColor: colors.white,
    borderColor: colors.red,
    borderWidth: 1
  },
  textStyle: {
    color: colors.white,
    fontFamily: "Rajdhani",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
  },
  textStyle2: {
    color: colors.red,
    fontFamily: "Rajdhani",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
  },
  modalText: {
    marginBottom: 15,
    fontFamily: "Rajdhani",
    textAlign: "center",
    fontSize: 20
  }
});

export default LogoutModal;