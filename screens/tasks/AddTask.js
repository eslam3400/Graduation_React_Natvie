import React, { useState } from 'react'
import { Layout, Input, Button, CheckBox, Text, Spinner } from '@ui-kitten/components'
import { TouchableWithoutFeedback } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import DateTimePicker from '@react-native-community/datetimepicker';
import MyStyles from '../../Styles'
import Api from '../../Api'

function AddTask({ navigation, route }) {

  const [loading, setLoading] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [area, setArea] = useState(0)
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("24:00")
  const [region, setRegion] = useState({ latitude: 31.2565102, longitude: 30.0087259, latitudeDelta: 0.04, longitudeDelta: 0.05 });
  const [marker, setMarker] = useState({ latitude: 0, longitude: 0 });
  const [sa, setSa] = useState(false);
  const [su, setSu] = useState(false);
  const [mo, setMo] = useState(false);
  const [tu, setTu] = useState(false);
  const [we, setWe] = useState(false);
  const [th, setTh] = useState(false);
  const [fr, setFr] = useState(false);
  const [showFrom, setShowFrom] = useState(false);
  const [showTO, setShowTO] = useState(false);

  const onChangeFrom = (event, selectedDate) => {
    const selectedTime = new Date(selectedDate).toLocaleTimeString("it");
    setFrom(selectedTime);
    setShowFrom(false)
  };

  const onChangeTo = (event, selectedDate) => {
    const selectedTime = new Date(selectedDate).toLocaleTimeString("it");
    setTo(selectedTime);
    setShowTO(false)
  };

  const addTask = async () => {
    setLoading(true)
    const repeat_id = []
    sa ? repeat_id.push(1) : null
    su ? repeat_id.push(2) : null
    mo ? repeat_id.push(3) : null
    tu ? repeat_id.push(4) : null
    we ? repeat_id.push(5) : null
    th ? repeat_id.push(6) : null
    fr ? repeat_id.push(7) : null
    const lat = marker.latitude
    const lng = marker.longitude
    const start_time = from
    const end_time = to
    const chip_id = route.params.id
    const response = await Api.addTask({ name, description, lat, lng, area, start_time, end_time, repeat_id, chip_id })
    setLoading(false)
    if (response.ok) return navigation.navigate('Home')
    alert("something wrong happened!")
  }

  const spinner = () => <Spinner size='large' status="info" />

  return (
    <Layout style={MyStyles.container}>
      <MapView style={{ width: "100%", height: "30%" }} initialRegion={region} onRegionChange={setRegion} onPress={e => setMarker(e.nativeEvent.coordinate)}>
        <Marker coordinate={marker} pinColor="blue" />
      </MapView>
      <Layout style={[MyStyles.containerPadding, MyStyles.fullWidth]}>
        <Input label='Name'
          style={MyStyles.marginVertical}
          onChangeText={setName}
          placeholder='Test' />
        <Input label='Description'
          style={MyStyles.marginVertical}
          onChangeText={setDescription}
          placeholder='Test' />
        <Input label='Area'
          style={MyStyles.marginVertical}
          onChangeText={setArea}
          placeholder='Test'
          keyboardType='decimal-pad' />
        <Layout style={[MyStyles.row, MyStyles.marginVertical2, { justifyContent: "space-between" }]}>
          <TouchableWithoutFeedback onPress={() => setShowFrom(true)}>
            <Text style={{ width: "48%", borderWidth: .5, paddingHorizontal: 13, paddingVertical: 8, borderRadius: 3, borderColor: "gray" }}>From {from}</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => setShowTO(true)}>
            <Text style={{ width: "48%", borderWidth: .5, paddingHorizontal: 13, paddingVertical: 8, borderRadius: 3, borderColor: "gray" }}>To {to}</Text>
          </TouchableWithoutFeedback>
        </Layout>
        <Text>Repeat Days</Text>
        <Layout style={[MyStyles.row, MyStyles.fullWidth, MyStyles.marginVertical]}>
          <CheckBox style={MyStyles.marginVertical} checked={sa} onChange={setSa}>Sat</CheckBox>
          <CheckBox style={MyStyles.marginVertical} checked={su} onChange={setSu}>Sun</CheckBox>
          <CheckBox style={MyStyles.marginVertical} checked={mo} onChange={setMo}>Mon</CheckBox>
          <CheckBox style={MyStyles.marginVertical} checked={tu} onChange={setTu}>Tu</CheckBox>
          <CheckBox style={MyStyles.marginVertical} checked={we} onChange={setWe}>Wen</CheckBox>
          <CheckBox style={MyStyles.marginVertical} checked={th} onChange={setTh}>Thu</CheckBox>
          <CheckBox style={MyStyles.marginVertical} checked={fr} onChange={setFr}>Fri</CheckBox>
        </Layout>
        <Button style={[MyStyles.fullWidth, MyStyles.marginVertical2]} onPress={addTask} accessoryLeft={loading ? spinner : null}>Add Task</Button>
      </Layout>
      {showFrom && (
        <DateTimePicker
          testID="dateTimePicker"
          mode="time"
          value={new Date()}
          is24Hour={true}
          onChange={onChangeFrom}
        />
      )}
      {showTO && (
        <DateTimePicker
          testID="dateTimePicker"
          mode="time"
          value={new Date()}
          is24Hour={true}
          onChange={onChangeTo}
        />
      )}
    </Layout>
  )
}

export default AddTask