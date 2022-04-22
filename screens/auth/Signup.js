import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import Api from '../../Api'

function Signup() {
  const [email, onEmailChange] = React.useState("")
  const [name, onNameChange] = React.useState("")
  const [password, onPasswordChange] = React.useState("")
  const [phone, onPhoneChange] = React.useState(null)
  const [gender, onGenderChange] = React.useState("")
  const [date_of_birth, onDOBChange] = React.useState("")

  const signup = async () => {
    const response = await Api.signup({ email, name, password, phone, gender, date_of_birth })
    const data = await response.json()
    if (response.ok) alert(`Nice To Have U On Board ^^`)
    else {
      if (data.errors) alert(data.errors[0])
      else alert(data.message)
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.header}>Signup</Text>
      <View style={style.form}>
        <TextInput style={style.input} onChangeText={onEmailChange} autoCapitalize='none' autoComplete='email' placeholder="Email" />
        <TextInput style={style.input} onChangeText={onNameChange} autoCapitalize='words' autoComplete='name' placeholder="Name" />
        <TextInput style={style.input} onChangeText={onPasswordChange} autoCapitalize='none' autoComplete='password' secureTextEntry={true} placeholder="Password" />
        <TextInput style={style.input} onChangeText={onPhoneChange} autoComplete='tel' keyboardType="numeric" placeholder="Phone" />
        <TextInput style={style.input} onChangeText={onGenderChange} autoComplete='gender' placeholder="Gender" />
        <TextInput style={style.input} onChangeText={onDOBChange} autoComplete='birthdate-full' placeholder="Date Of Birth" />
        <View style={{ marginTop: 20 }}>
          <Button onPress={signup} color="green" title="Signup" />
        </View>
        <View style={style.register}>
          <Text>Have Account Already?</Text>
          <Text style={{ color: "blue" }}>Login</Text>
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
    marginTop: 20,
    width: '80%'
  },
  input: {
    height: 35,
    borderWidth: .5,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10
  },
  register: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15
  }
})

export default Signup