import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import Api from '../../Api'
import Loading from '../../components/Loading';

function AddUser({ navigation, route }) {
  const [loading, setLoading] = React.useState(false)
  const [userID, setUserID] = React.useState(null)

  async function addUserToChip(data) {
    setLoading(true)
    const response = await Api.addUserToChip(data);
    setLoading(false)
    if (response.ok) {
      navigation.goBack()
    } else {
      alert("Something Went Wrong :(")
    }
  }

  return (
    <View style={style.container}>
      <Loading visible={loading} />
      <TextInput style={style.input} editable={false} placeholder='Chip ID' value={route.params.chipID.toString()} />
      <TextInput style={style.input} placeholder='User ID' onChange={setUserID} />
      <Button onPress={() => navigation.goBack()} title="Add" />
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
    borderWidth: 1,
    borderRadius: 10,
    width: "80%",
    paddingVertical: 8,
    marginVertical: 10,
    textAlign: "center"
  }
})

export default AddUser