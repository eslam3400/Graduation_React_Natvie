import React from 'react'
import { View, Text } from 'react-native'
import AnswerCard from './AnswerCard'
import Avatar from './Avatar'

function QuestionCard({ question, user, ask_time, answers }) {
  return (
    <View style={{ borderBottomWidth: 1, padding: 10, borderRadius: 10, marginVertical: 5 }}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Avatar user={user} />
        <View style={{ width: "85%", paddingStart: 10 }}>
          <Text style={{ fontSize: 12 }}>{user.name}</Text>
          <Text style={{ fontSize: 9, fontStyle: "italic", color: "gray" }}>{user.email} - {ask_time}</Text>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{question}</Text>
        </View>
      </View>
      {answers.map(e => <AnswerCard key={e.id} answer={e.answer} user={e.user} answer_time={e.answer_time} />)}
    </View>
  )
}

export default QuestionCard