import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}><Icon name="shield" size={18} /> Live Guard.</Text>
      <Icon name="gear" size={30} ></Icon>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: .8,
    backgroundColor: "#9effc3",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  header: { fontWeight: "bold", fontSize: 20 }
});

export default Header;