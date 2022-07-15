import React from 'react'
import { Layout, Input, Button, Spinner } from '@ui-kitten/components'
import Api from '../../Api'
import MyStyles from '../../Styles'

function AddUser({ navigation, route }) {

  const [loading, setLoading] = React.useState(false)
  const [userID, setUserID] = React.useState(null)

  async function addUserToChip() {
    setLoading(true)
    const response = await Api.addUserToChip({ user_id: userID, chip_id: route.params.id });
    const data = await response.json();
    setLoading(false)
    return alert(data.message)
  }

  const spinner = () => <Spinner size='large' status="info" />

  return (
    <Layout style={[MyStyles.container, MyStyles.containerPadding]}>
      <Input label='User ID'
        style={MyStyles.marginVertical2}
        onChangeText={setUserID}
        keyboardType="decimal-pad"
        placeholder='1' />
      <Button
        style={[MyStyles.marginVertical2, MyStyles.fullWidth]}
        onPress={addUserToChip}
        accessoryLeft={loading ? spinner : null}>
        Add User
      </Button>
    </Layout>
  )
}

export default AddUser