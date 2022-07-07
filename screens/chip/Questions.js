import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import Api from '../../Api'
import Loading from '../../components/Loading'
import QuestionCard from '../../components/QuestionCard'

function Questions({ navigation, route }) {
  const [questions, setQuestions] = React.useState([])
  const [loading, setLoading] = React.useState([])

  React.useEffect(async () => {
    setLoading(true)
    const response = await Api.getChipVersionQuestion(route.params.chipID)
    const data = await response.json()
    setLoading(false)
    if (!response.ok) return alert("Please wait we are working on solve this problem")
    setQuestions(data.content)
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
      <Loading visible={loading} />
      <View style={{ marginVertical: 10, width: "90%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Questions</Text>
        <Button title='Add' onPress={() => { }} />
      </View>
      <ScrollView style={{ width: "90%" }}>
        {questions.map(e => <QuestionCard key={e.id} answers={e.answers} user={e.user} question={e.question} ask_time={e.ask_time} />)}
      </ScrollView>
    </View>
  )
}

export default Questions