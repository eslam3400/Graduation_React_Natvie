import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Intro() {
  return (
    <View style={style.container}>
      <Text>Intro Page</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Intro