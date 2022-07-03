import React from 'react'
import { View, Text, TextInput, Modal, Pressable, StyleSheet } from 'react-native'
import Api from '../Api'

function AddReviewModal({ chipID, visible, setVisible }) {
  const [rate, setRate] = React.useState("")
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")

  const addReview = async () => {
    const response = await Api.addChipVersionReview({
      headline: title,
      comment: description,
      rating: rate,
      chip_version_id: chipID
    })
    if (response.ok) {
      const data = await response.json()
      setVisible(!visible)
      alert(data.message)
    }
    else alert("Something went wrong please try again later!")
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(!visible)}
      style={{ width: "100%" }}
    >
      <View style={[styles.centeredView, { width: "100%" }]}>
        <View style={[styles.modalView, { width: "90%" }]}>
          <Text style={styles.modalText}>Leave Your Review!</Text>
          <TextInput
            style={{ width: "90%", borderWidth: 1, borderRadius: 10, borderColor: "gray", paddingHorizontal: 10, paddingVertical: 2, marginVertical: 10 }}
            placeholder="Rate"
            keyboardType='decimal-pad'
            onChangeText={setRate}
          />
          <TextInput
            style={{ width: "90%", borderWidth: 1, borderRadius: 10, borderColor: "gray", paddingHorizontal: 10, paddingVertical: 2, marginVertical: 10 }}
            placeholder="Title"
            onChangeText={setTitle}
          />
          <TextInput
            style={{ width: "90%", borderWidth: 1, borderRadius: 10, borderColor: "gray", paddingHorizontal: 10, paddingVertical: 40, marginVertical: 10 }}
            placeholder="Description"
            onChangeText={setDescription}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={addReview}
          >
            <Text style={styles.textStyle}>Submit!</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
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
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default AddReviewModal