import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './Header';
import NavBar from './NavBar';

const ContainerWithNavBar = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 8.2 }}>
        <ScrollView>
          {children}
        </ScrollView>
      </View>
      <NavBar />
    </View>
  )
}

export default ContainerWithNavBar;