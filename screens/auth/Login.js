import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Api from '../../Api'

function Login() {
  const [email, onEmailChange] = React.useState("")
  const [password, onPasswordChange] = React.useState("")

  const login = async () => {
    const response = await Api.login({ email, password })
    const data = await response.json()
    if (response.ok) {
      await AsyncStorage.setItem(`token`, data.user_token)
      alert(`Welcome Back ^^`)
    } else {
      if (data.errors) alert(data.errors[0])
      else alert(data.message)
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.header}>Login</Text>
      <View style={style.form}>
        <TextInput style={style.input} onChangeText={onEmailChange} autoCapitalize='none' textContentType='emailAddress' autoFocus={true} placeholder="email@example.com" />
        <TextInput style={style.input} onChangeText={onPasswordChange} autoCapitalize='none' textContentType='password' secureTextEntry={true} placeholder="*********" />
        <View style={{ marginTop: 20 }}>
          <Button onPress={login} color="green" title="Login" />
        </View>
        <View style={style.register}>
          <Text>Don't Have Account?</Text>
          <Text style={{ color: "blue" }}>Signup</Text>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
  },
  form: {
    width: "80%",
    marginTop: 20
  },
  input: {
    height: 35,
    borderWidth: .5,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 15
  },
  register: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15
  }
})

export default Login