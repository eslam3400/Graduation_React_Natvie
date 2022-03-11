import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ContainerWithNavBar from '../../components/ContainerWithNavBar';
import TaskCard from '../../components/TaskCard';

const devices = [
  { id: 1, name: "Device 1", description: "Description 1" },
  { id: 2, name: "Device 2", description: "Description 2" },
  { id: 3, name: "Device 3", description: "Description 3" },
  { id: 4, name: "Test Device", description: "Description Description Description Description asdsad" },
]

const Devices = () => {
  return (
    <ContainerWithNavBar>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ paddingVertical: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Devices</Text>
          <Icon name="plus" size={25} />
        </View>
        <View>
          {devices.map(e => <TaskCard key={e.id} name={e.name} description={e.description} />)}
        </View>
      </View>
    </ContainerWithNavBar>
  )
}

export default Devices;