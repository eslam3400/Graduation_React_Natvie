import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

function ChooseDevice({ navigation }) {
  return (
    <View style={style.container}>
      <Button
        onPress={() => navigation.navigate("Chips")}
        title="Buy Device"
        color="blue"
      />
      <Button
        onPress={() => navigation.navigate("LinkShip")}
        title="Access Device"
        color="blue"
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

})

export default ChooseDevice