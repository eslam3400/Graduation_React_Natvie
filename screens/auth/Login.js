import React from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { Layout, Text, Input, Button, Spinner } from '@ui-kitten/components'
import { Entypo } from '@expo/vector-icons';
import Api from '../../Api'
import MyStyles from '../../Styles'
import Local from '../../Locals'

function Login({ navigation }) {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(true);

  const login = async () => {
    setLoading(true)
    const response = await Api.login({ email, password })
    const data = await response.json()
    setLoading(false)
    if (response.ok) {
      Local.setToken(data.user_token)
      return navigation.navigate('Home')
    }
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
      <View style={MyStyles.fullWidth}>
        <Input label='Email'
          style={MyStyles.marginVertical}
          onChangeText={setEmail}
          autoCapitalize='none'
          textContentType='emailAddress'
          autoFocus={true}
          placeholder="email@example.com" />
        <Input label='Password'
          style={MyStyles.marginVertical}
          accessoryRight={showPasswordIcon}
          secureTextEntry={showPassword}
          onChangeText={setPassword}
          placeholder='Place your Text' />
        <Button style={[MyStyles.marginVertical2]} onPress={login} accessoryLeft={loading ? spinner : null}>
          Login
        </Button>
        <View style={[MyStyles.row, MyStyles.marginVertical]}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('ForgetPassword')}>
            <Text status="primary">Forget Password?</Text>
          </TouchableWithoutFeedback>
          <Text>  /  </Text>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Signup')}>
            <Text status="primary">Signup</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Layout>
  )
}

export default Login