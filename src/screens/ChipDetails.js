import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import Tasks from '../components/Tasks';
import Icon from 'react-native-vector-icons/FontAwesome5'

const ChipDetails = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={{ fontSize: 18 }}>Chip: <Text style={{ color: "black", fontWeight: "bold" }}>Test</Text> </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight style={{ marginRight: 20 }} activeOpacity={0.6} underlayColor="#DDDDDD">
            <Icon name="plus" size={18} />
          </TouchableHighlight>
          <TouchableHighlight style={{ marginRight: 20 }} activeOpacity={0.6} underlayColor="#DDDDDD">
            <Icon name="volume-mute" size={18} />
          </TouchableHighlight>
          <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD">
            <Icon name="edit" size={18} />
          </TouchableHighlight>
        </View>
      </View>
      <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={{ width: "100%", height: 250 }} />
      <Tasks />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10
  }
})

export default ChipDetails;