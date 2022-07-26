import React from 'react'
import { Layout, Input, Button, Spinner } from '@ui-kitten/components'
import Api from '../../Api'
import MyStyles from '../../Styles'

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
      return navigation.navigate("Login")
    }
    alert("There is something went wrong please contact support!")
  }

  const spinner = () => <Spinner size='large' status="info" />

  return (
    <Layout style={[MyStyles.container, MyStyles.containerPadding]}>
      <Input label='Email'
        onChangeText={onEmailChange}
        autoCapitalize='none'
        textContentType='emailAddress'
        autoComplete='email'
        keyboardType='email-address'
        autoFocus={true}
        placeholder="email@example.com" />
      <Button style={[MyStyles.fullWidth, MyStyles.marginVertical2]} onPress={forgetPassword} accessoryLeft={loading ? spinner : null}>
        Reset Password
      </Button>
    </Layout>
  )
}

export default ForgetPassword