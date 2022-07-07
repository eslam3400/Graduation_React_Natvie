import React from 'react'
import { View, Text } from 'react-native'
import Avatar from './Avatar'

function AnswerCard({ answer, user, answer_time }) {
  return (
    <View style={{ borderLeftWidth: 1, width: "100%", marginLeft: 23, borderColor: "blue", padding: 15, marginVertical: 5, flexDirection: "row", justifyContent: "center" }}>
      <Avatar user={user} />
      <View style={{ width: "80%", paddingStart: 10 }}>
        <Text style={{ fontSize: 12 }}>{user.name}</Text>
        <Text style={{ fontSize: 9, fontStyle: "italic", color: "gray" }}>{user.email} - {answer_time}</Text>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{answer}</Text>
      </View>
    </View>
  )
}

export default AnswerCard