import React from 'react'
import { Layout, Input, Button } from '@ui-kitten/components'
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
    if (response.ok) return alert(data.message)
    alert("There is something went wrong please contact support!")
  }

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
      <Button style={[MyStyles.fullWidth, MyStyles.marginVertical4]} onPress={forgetPassword}>
        Reset
      </Button>
    </Layout>
  )
}

export default ForgetPassword