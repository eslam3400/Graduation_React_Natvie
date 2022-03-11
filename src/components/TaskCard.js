import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const TaskCard = ({ name, description }) => {
  return (
    <View style={{ borderWidth: .7, borderRadius: 10, padding: 15, marginBottom: 15 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{name}</Text>
        <Icon name="ellipsis-v" size={15} />
      </View>
      <Text style={{ fontStyle: "italic" }}>{description}</Text>
    </View>
  )
}

export default TaskCard