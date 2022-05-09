import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import Api from '../../Api'
import Loading from '../../components/Loading'

function LinkChip({ navigation }) {
  const [id, setID] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const link = async () => {
    setLoading(true)
    const response = await Api.linkChipToUser({ id, password })
    const data = await response.json()
    setLoading(false)
    if (response.ok) navigation.navigate('Home')
    else alert(data.message)
  }

  return (
    <View style={style.container}>
      <Loading visible={loading} />
      <TextInput style={style.textBox} onChangeText={setID} placeholder="ID" />
      <TextInput style={style.textBox} onChangeText={setPassword} placeholder="Password" />
      <Button
        onPress={() => link()}
        title="Add"
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
  textBox: {
    width: "85%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10
  }
})

export default LinkChip