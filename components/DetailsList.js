import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function DetailsList({ list, weight }) {
  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginVertical: 10 }}>Details</Text>
      {weight ? <Text>weight: {weight}</Text> : null}
      {
        list.map(e => <Text key={e.id}>{e.name}: {e.value}</Text>)
      }
    </View>
  )
}

export default DetailsList