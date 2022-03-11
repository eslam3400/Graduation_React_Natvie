import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <View style={styles.navBarElement}><Icon name="sitemap" size={25} /></View>
      <View style={styles.centerNavBarElement}><Icon name="home" size={30} /></View>
      <View style={styles.navBarElement}><Icon name="tasks" size={25} /></View>
    </View>
  )
}

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    backgroundColor: "#00de64",
    flexDirection: "row"
  },
  navBarElement: {
    width: `41%`,
    alignItems: "center",
    justifyContent: "center",
  },
  centerNavBarElement: {
    backgroundColor: "white",
    width: `18%`,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  }
})

export default NavBar;