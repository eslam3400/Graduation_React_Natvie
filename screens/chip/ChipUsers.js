import React from 'react'
import { Layout, List, ListItem, Button, Avatar } from '@ui-kitten/components'
import { FloatingAction } from "react-native-floating-action";
import { AntDesign } from '@expo/vector-icons';
import Api from '../../Api'
import Loading from '../../components/Loading'
import MyStyles from '../../Styles'

const ChipUsers = ({ navigation, route }) => {

  const [users, setUsers] = React.useState([{ name: "", description: "" }])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(async () => {
    setLoading(true)
    const response = await Api.getChipUsers(route.params.id)
    const data = await response.json()
    setLoading(false)
    if (response.ok) return setUsers(data)
    alert("Something Wrong Went :(")
  }, [])

  const avatar = () => <Avatar size="medium" source={{ uri: "https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png" }} />

  const removeUser = (userID) => {
    const newUsers = users.filter(e => e.id != userID)
    console.log(newUsers)
    setUsers(newUsers)
  }

  const button = (id) => (
    <Button onPress={() => removeUser(id)} size='small' status='danger'>Remove</Button>
  )

  const renderItem = ({ item, index }) => (
    <ListItem
      title={item.name}
      description={item.name}
      accessoryLeft={avatar}
      accessoryRight={item.role !== "Controller" ? () => button(item.id) : null}
    />
  );

  return (
    <Layout style={MyStyles.container}>
      <Loading visible={loading} />
      <FloatingAction
        position='center'
        onPressMain={() => navigation.navigate("AddUserToChip", { id: route.params.id })}
        floatingIcon={<AntDesign name="adduser" size={24} color="white" />} />
      <List
        style={[MyStyles.fullWidth, { zIndex: -1 }]}
        data={users}
        renderItem={renderItem}
      />
    </Layout>
  )
}

export default ChipUsers