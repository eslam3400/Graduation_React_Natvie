import React from 'react'
import { ScrollView, TouchableWithoutFeedback } from 'react-native'
import { Layout, Input, Button, Spinner, Radio, RadioGroup, Datepicker } from '@ui-kitten/components'
import { Entypo } from '@expo/vector-icons';
import Api from '../../Api'
import MyStyles from '../../Styles'

function Signup({ navigation }) {
  const [email, setEmail] = React.useState(``)
  const [name, setName] = React.useState(``)
  const [password, setPassword] = React.useState(``)
  const [phone, setPhone] = React.useState(null)
  const [gender, setGender] = React.useState(0)
  const [date_of_birth, setDOB] = React.useState(``)
  const [loading, setLoading] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(true);

  const signup = async () => {
    setLoading(true)
    const response = await Api.signup({ email, name, password, phone, gender, date_of_birth })
    const data = await response.json()
    setLoading(false)
    if (response.ok) return alert(`Nice To Have U On Board ^^ \n Please Check Ur Email For Verification`)
    if (data.errors) return alert(data.errors[0])
    alert(data.message)
  }

  const spinner = () => <Spinner size='large' status="info" />

  const showPasswordIcon = () => (
    <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
      <Entypo name={showPassword ? "eye" : "eye-with-line"} size={24} color="black" />
    </TouchableWithoutFeedback>
  );

  return (
    <Layout style={[MyStyles.container, MyStyles.containerPadding]}>
      <Input label='Email'
        style={MyStyles.marginVertical}
        onChangeText={setEmail}
        autoCapitalize='none'
        placeholder="email@example.com" />
      <Input label='Name'
        style={MyStyles.marginVertical}
        onChangeText={setName}
        autoCapitalize='words'
        placeholder="John Dow" />
      <Input label='Password'
        style={MyStyles.marginVertical}
        accessoryRight={showPasswordIcon}
        secureTextEntry={showPassword}
        onChangeText={setPassword}
        placeholder='Place your Text' />
      <Input label='Phone'
        style={MyStyles.marginVertical}
        onChangeText={setPhone}
        autoComplete='tel'
        keyboardType="numeric"
        placeholder="01223456789" />
      <Datepicker label='Birthday'
        style={[MyStyles.fullWidth, MyStyles.marginVertical]}
        date={date_of_birth}
        onSelect={setDOB}
        accessoryRight={<Entypo name="calendar" size={24} color="black" />}
        placeholder='Pick Your Birthday Date' />
      <RadioGroup style={[MyStyles.row, MyStyles.marginVertical]} selectedIndex={gender} onChange={setGender}>
        <Radio>Male</Radio>
        <Radio>Female</Radio>
      </RadioGroup>
      <Button style={[MyStyles.fullWidth, MyStyles.marginVertical2]} onPress={signup} accessoryLeft={loading ? spinner : null}>
        Signup
      </Button>
    </Layout>
  )
}

export default Signup