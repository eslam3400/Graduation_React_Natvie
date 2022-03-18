import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableHighlight, StyleSheet } from 'react-native';
import TaskCard from './TaskCard';

const tasks = [
  { id: 1, name: "Task 1", description: "Description 1" },
  { id: 2, name: "Task 2", description: "Description 2" },
  { id: 3, name: "Task 3", description: "Description 3" },
  { id: 4, name: "Test Task", description: "Description Description Description Description asdsad" },
]

const Tasks = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <View style={styles.header}>
        <TouchableHighlight style={activeTab == 1 ? [styles.headerTab, styles.headerTabActive] : styles.headerTab} activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => setActiveTab(1)}>
          <Text style={styles.headerTabText}>My Tasks</Text>
        </TouchableHighlight>
        <TouchableHighlight style={activeTab == 2 ? [styles.headerTab, styles.headerTabActive] : styles.headerTab} activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => setActiveTab(2)}>
          <Text style={styles.headerTabText}>Other Tasks</Text>
        </TouchableHighlight>
      </View>
      <ScrollView>
        <View style={styles.tasksContainer}>
          {tasks.map(e => <TaskCard key={e.id} name={e.name} description={e.description} />)}
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center"
  },
  headerTab: {
    width: "50%",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "gray"
  },
  headerTabActive: {
    borderBottomWidth: 4,
    borderBottomColor: "green"
  },
  headerTabText: {
    textAlign: "center",
  },
  tasksContainer: {
    paddingHorizontal: 20,
  }
})

export default Tasks;