import React from 'react'
import { View, Text, TextInput, Button, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const EditChipDetails = () => {
  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Text style={{ fontSize: 18 }}>Chip: <Text style={{ color: "black", fontWeight: "bold" }}>Test</Text> </Text>
      </View>
      {/* Body */}
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <Text>Name: </Text>
          <TextInput style={styles.input} placeholder="Please Enter Chip Name" />
        </View>
        <View style={styles.inputContainer}>
          <Text>Age: </Text>
          <TextInput style={styles.input} placeholder="Please Enter Child Age" />
        </View>
        <View style={styles.inputContainer}>
          <Text>Phone: </Text>
          <TextInput style={styles.input} placeholder="Please Enter Child Phone" keyboardType="numeric" />
        </View>
        <View style={styles.inputContainer}>
          <Text>Image: </Text>
          <Button title="Take Image" onPress={() => launchCamera({ mediaType: "photo" })} />
          <Button title="Pick Image" onPress={() => launchImageLibrary({ mediaType: "photo" })} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DDDDDD",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  body: {
    paddingHorizontal: 20
  },
  inputContainer: {
    marginTop: 30,
  },
  input: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20
  },
})

export default EditChipDetails