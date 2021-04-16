import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import styled from 'styled-components/native';
import { colors } from '../../../const/colors';
import Plus from '../../Icons/Plus'

const PlusContainer = styled.TouchableOpacity`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
`;

const DonationModal = ({ onPress }) => {
  const [modalVisible, setModalVisible] = useState(false);
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
            <Text style={styles.modalText}>Oddałeś krew?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onPress}
              onPressOut={() => setModalVisible(!modalVisible)}
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
      <PlusContainer
        onPress={() => setModalVisible(true)}
      >
        <Plus />
      </PlusContainer>
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
    width: 200
  },
  button2: {
    borderRadius: 20,
    padding: 9,
    elevation: 2,
    marginTop: 10,
    width: 200
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

export default DonationModal;