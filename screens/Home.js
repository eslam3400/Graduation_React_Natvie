import React from 'react'
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components'
import MapView from 'react-native-maps';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { FloatingAction } from "react-native-floating-action";
import Api from '../Api';
import MyStyles from '../Styles'
import Loading from '../components/Loading'

function Home({ navigation }) {

  React.useEffect(async () => {
    setLoading(true)
    const response = await Api.getMyChips()
    const data = await response.json()
    setLoading(false)
    if (response.ok) {
      if (data.length === 0) return navigation.navigate("LinkShip")
      return setChips(data)
    }
    alert("some thing went wrong please try again later")
  }, [])

  const [loading, setLoading] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [chips, setChips] = React.useState([]);

  const actions = [
    {
      text: "Settings",
      icon: <Ionicons name="settings-outline" size={26} color="black" />,
      name: "btnSettings",
      position: 3,
      color: "white"
    },
    {
      text: "Tasks",
      icon: <FontAwesome5 name="tasks" size={26} color="black" />,
      name: "btnTasks",
      position: 1,
      color: "white"
    },
    {
      text: "Users",
      icon: <FontAwesome5 name="users" size={26} color="black" />,
      name: "btnUsers",
      position: 2,
      color: "white"
    }
  ];

  const onActionClick = (name) => {
    switch (name) {
      case 'btnTasks':
        navigation.navigate('Tasks', { id: chips[selectedIndex.row].chip_id })
        break;
      case 'btnUsers':
        navigation.navigate('ChipUsers', { id: chips[selectedIndex.row].chip_id })
        break;
      case 'btnSettings':
        navigation.navigate('ChipSettings', { id: chips[selectedIndex.row].id })
        break;
    }
  }

  return (
    <Layout style={MyStyles.container}>
      <Loading visible={loading} />
      <FloatingAction actions={actions}
        onPressItem={onActionClick}
        distanceToEdge={15}
        floatingIcon={<Ionicons name="menu" size={24} color="black" />}
        color="white" />
      <Select style={MyStyles.fullWidth} selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
        {chips.map(e => <SelectItem key={e.id} title={e.name} />)}
      </Select>
      <MapView style={{ width: "100%", height: "93%", zIndex: -1 }} />
    </Layout >
  )
}

export default Home