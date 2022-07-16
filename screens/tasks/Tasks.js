import React from 'react'
import { Layout, Divider, List, ListItem, ButtonGroup, Button } from '@ui-kitten/components'
import { FloatingAction } from 'react-native-floating-action'
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import MyStyles from '../../Styles'
import Api from '../../Api';
import Loading from '../../components/Loading';

function Tasks({ navigation, route }) {

  const [tasks, setTasks] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(async () => {
    const response = await Api.getTasks(route.params.id)
    const data = await response.json()
    setLoading(false)
    if (response.ok) return setTasks(data)
    alert("Something wrong happened!")
  }, [loading])

  const deleteTask = async (id) => {
    const response = await Api.deleteTask(id)
    if (response.ok) return setLoading(true)
    alert("Something Wrong happened!")
  }

  const controllers = (id) => (<ButtonGroup>
    <Button style={{ backgroundColor: "#FF3D71" }} onPress={() => deleteTask(id)}><MaterialIcons name="delete" size={24} color="black" /></Button>
    <Button style={{ backgroundColor: "#FFAA00" }}><Octicons name="mute" size={24} color="black" /></Button>
  </ButtonGroup>)

  const renderItem = ({ item, index }) => (
    <ListItem
      title={item.name}
      description={item.description}
      accessoryRight={() => controllers(item.id)}
      onPress={() => navigation.navigate("TaskDetails", { id: item.id })}
    />
  );

  return (
    <Layout style={MyStyles.container}>
      <Loading visible={loading} />
      <FloatingAction
        position='center'
        onPressMain={() => navigation.navigate("AddTask", { id: route.params.id })}
        floatingIcon={<MaterialIcons name="playlist-add" size={24} color="white" />} />
      <List
        style={[MyStyles.fullWidth, { zIndex: -1 }]}
        data={tasks}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
    </Layout>
  )
}

export default Tasks