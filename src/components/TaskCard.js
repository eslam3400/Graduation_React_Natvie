import React from 'react'
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const TaskCard = ({ name, description }) => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskHeader}>
        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.taskHeaderImage} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>Eslam Magdy</Text>
          <Text style={{ fontSize: 12, fontStyle: "italic" }}>Bla Bla Bla Bla</Text>
        </View>
      </View>
      <Pressable onPress={() => { alert("task body clicked") }}>
        <View style={styles.taskBody}>
          <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.taskBodyImage} />
          <View style={{ marginLeft: 10 }}>
            <Text><Icon name="map-marker" /> Test</Text>
            <Text><Icon name="calendar" /> Test</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  taskContainer: {
    borderBottomWidth: .7,
    paddingVertical: 10,
  },
  taskHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  taskHeaderImage: {
    width: 40,
    height: 40,
    borderRadius: 25
  },
  taskBody: {
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  taskBodyImage: {
    width: 100,
    height: 50,
    borderRadius: 10
  }
})

export default TaskCard