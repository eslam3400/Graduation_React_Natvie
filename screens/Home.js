import React from 'react'
import { View, Button, Pressable, StyleSheet } from 'react-native'
import MapView from 'react-native-maps';
import DropDownPicker from 'react-native-dropdown-picker';
import { Ionicons } from '@expo/vector-icons';
import Loading from '../components/Loading';
import Api from '../Api';

function Home({ navigation }) {
  React.useEffect(async () => {
    setLoading(true)
    const response = await Api.getMyChips()
    const data = await response.json()
    setLoading(false)
    if (response.ok) {
      if (data.length === 0) navigation.navigate("LinkShip")
      else {
        data.forEach(e => myChips.push({ label: e.name, value: e.id, chipID: e.chip_id }));
        setItems(myChips)
      }
    }
    else alert("some thing went wrong please try again later")
  }, [])

  const myChips = []
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([]);

  return (
    <View style={style.container}>
      <Loading visible={loading} />
      <View style={style.rowContainer}>
        <View style={{ width: "85%" }}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
        <Pressable onPress={() => navigation.navigate("ChipSettings", { id: value })}>
          <Ionicons name="settings-outline" size={30} color="black" />
        </Pressable>
      </View>
      <MapView style={{ width: "100%", height: "80%", marginTop: 5 }} />
      <View style={[style.rowContainer, { paddingVertical: 10 }]}>
        <Button onPress={() => { }} title="Tasks"></Button>
        <Button onPress={() => navigation.navigate("ChipUsers", { id: 2 })} title="Users"></Button>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  rowContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10
  }
})

export default Home