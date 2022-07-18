import React from 'react'
import { Layout, Input, Button } from '@ui-kitten/components'
import Api from '../../Api'
import Loading from '../../components/Loading'
import MyStyles from '../../Styles'

function LinkChip({ navigation }) {
  const [key, setKey] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const link = async () => {
    setLoading(true)
    const response = await Api.linkChipToUser({ key, password })
    const data = await response.json()
    setLoading(false)
    if (response.ok) navigation.navigate('Home')
    else alert(data.message)
  }

  return (
    <Layout style={[MyStyles.container, MyStyles.containerPadding]}>
      <Loading visible={loading} />
      <Input label="Chip Key" style={MyStyles.marginVertical2} onChangeText={setKey} placeholder="Key" />
      <Input label="Chip Password" style={MyStyles.marginVertical2} onChangeText={setPassword} placeholder="Password" />
      <Button style={[MyStyles.marginVertical3, MyStyles.fullWidth]} onPress={() => link()}>Link</Button>
      <Button style={MyStyles.fullWidth} appearance="outline" onPress={() => navigation.navigate("Chips")}>Order Device</Button>
    </Layout>
  )
}

export default LinkChip