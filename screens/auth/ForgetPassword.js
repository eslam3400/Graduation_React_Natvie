import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import Api from '../../Api'
import Loading from '../../components/Loading'

function ForgetPassword({ navigation }) {
  const [email, onEmailChange] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const forgetPassword = async () => {
    setLoading(true)
    const response = await Api.forgetPassword({ user_email: email })
    const data = await response.json()
    setLoading(false)
    if (response.ok) {
      alert(data.message)
      navigation.navigate('Login')
    } else
      alert("There is something went wrong please contact support!")
  }

  return (
    <View style={style.container}>
      <Loading visible={loading} />
      <TextInput style={style.input} onChangeText={onEmailChange} autoCapitalize='none' textContentType='emailAddress' autoFocus={true} placeholder="email@example.com" />
      <Button title='Reset' color="blue" onPress={forgetPassword} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    height: 35,
    borderWidth: .5,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 15
  }
})

export default ForgetPassword