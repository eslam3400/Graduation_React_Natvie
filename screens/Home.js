import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps';
import DropDownPicker from 'react-native-dropdown-picker';
import Loading from '../components/Loading';
import Api from '../Api';

function Home() {
  React.useEffect(async () => {
    setLoading(true)
    const response = await Api.getMyChips()
    const data = await response.json()
    setLoading(false)
    if (response.ok) {
      data.forEach(e => myChips.push({ label: e.name, value: e.id }));
      setItems(myChips)
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
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <MapView style={{ width: "100%", height: "92%", marginTop: 5 }} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Home