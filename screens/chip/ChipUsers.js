import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Api from '../../Api'
import Loading from '../../components/Loading'
import UserCard from '../../components/UserCard'

const ChipUsers = ({ navigation, route }) => {
  const [users, setUsers] = React.useState([])
  const [usersCard, setUsersCard] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(async () => {
    setLoading(true)
    const response = await Api.getChipUsers(route.params.id)
    setLoading(false)
    if (response.ok) {
      const temp = []
      const data = await response.json()
      setUsers(data)
      data.forEach(({ name, role, id }) => temp.push(<View style={{ marginVertical: 5 }} key={id}><UserCard name={name} role={role} /></View>));
      setUsersCard(temp)
    } else {
      alert("Something Wrong Went :(")
    }
  }, [])

  return (
    <View style={style.container}>
      <Loading visible={loading} />
      <Button onPress={() => navigation.navigate("AddUserToChip", { chipID: route.params.id })} title="Add User" />
      {usersCard}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "5%"
  }
})

export default ChipUsers