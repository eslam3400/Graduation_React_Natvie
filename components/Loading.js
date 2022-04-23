import React from "react";
import { Modal, StyleSheet, Text, View, Dimensions } from "react-native";
import { Chase } from 'react-native-animated-spinkit'

const phoneWidth = Dimensions.get('window').width / 100;
const phoneHeight = Dimensions.get('window').height / 100;

const Loading = ({ visible }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Loading...</Text>
        <Chase size={70} color="gray" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    width: phoneWidth * 80,
    height: phoneHeight * 20,
    position: "absolute",
    left: phoneWidth * 10,
    top: phoneHeight * 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Loading;