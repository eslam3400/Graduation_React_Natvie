import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ContainerWithNavBar from '../../components/ContainerWithNavBar';
import TaskCard from '../../components/TaskCard';

const tasks = [
  { id: 1, name: "Task 1", description: "Description 1" },
  { id: 2, name: "Task 2", description: "Description 2" },
  { id: 3, name: "Task 3", description: "Description 3" },
  { id: 4, name: "Test Task", description: "Description Description Description Description asdsad" },
]

const Tasks = () => {
  return (
    <ContainerWithNavBar>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ paddingVertical: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Tasks</Text>
          <Icon name="plus" size={25} />
        </View>
        <View>
          {tasks.map(e => <TaskCard key={e.id} name={e.name} description={e.description} />)}
        </View>
      </View>
    </ContainerWithNavBar>
  )
}

export default Tasks;