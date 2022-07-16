import React, { useState } from 'react'
import { Layout, Input, Button, CheckBox, Text } from '@ui-kitten/components'
import MapView, { Marker } from 'react-native-maps';
import MyStyles from '../../Styles'
import Api from '../../Api'

function TaskDetails({ navigation, route }) {

  const [details, setDetails] = useState({});

  React.useEffect(() => getTaskDetails(), [])

  const getTaskDetails = async () => {
    const response = await Api.getTaskByID(route.params.id)
    const data = await response.json()
    if (response.ok) {
      data.region = { latitude: data.lat, longitude: data.lng, latitudeDelta: 0.04, longitudeDelta: 0.05 }
      return setDetails(data)
    }
    alert("something wrong happened!")
    navigation.goBack()
  }

  return (
    <Layout style={MyStyles.container}>
      <MapView style={{ width: "100%", height: "25%" }} initialRegion={details.region}>
        <Marker coordinate={details.region} pinColor="blue" />
      </MapView>
      <Layout style={[MyStyles.containerPadding, MyStyles.fullWidth]}>
        <Input label='Name'
          style={MyStyles.marginVertical}
          value={details.name}
          disabled={true} />
        <Input label='Description'
          style={MyStyles.marginVertical}
          value={details.description}
          disabled={true} />
        <Input label='Area'
          style={MyStyles.marginVertical}
          value={details.area.toString()}
          disabled={true} />
        <Layout style={[MyStyles.row, MyStyles.marginVertical, { justifyContent: "space-between" }]}>
          <Input label='From'
            style={{ width: "48%" }}
            value={details.start_time}
            disabled={true} />
          <Input label='To'
            style={{ width: "48%" }}
            value={details.end_time}
            disabled={true} />
        </Layout>
        <Text style={{ fontWeight: "bold", fontStyle: "italic", marginTop: 10 }}>Repeat Days</Text>
        <Layout style={[MyStyles.row, MyStyles.fullWidth, MyStyles.marginVertical]}>
          {details.repeat.map(e => <Text key={e.id} style={MyStyles.marginVertical}> {e.day} </Text>)}
        </Layout>
        <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>Added By</Text>
        <Text style={[MyStyles.marginVertical, { textAlign: "center" }]}>{details.add_by_user.name} @ {details.create_date}</Text>
      </Layout>
    </Layout>
  )
}

export default TaskDetails