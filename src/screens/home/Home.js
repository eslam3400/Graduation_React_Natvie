import React from 'react';
import { View, Text } from 'react-native';
import ContainerWithNavBar from '../../components/ContainerWithNavBar';

const Home = () => {
  return (
    <ContainerWithNavBar>
      <Text style={{ textAlign: "center", fontSize: 20, padding: 10 }}> Tracking</Text >
      <View style={{ backgroundColor: "#562354", width: "100%", height: 495 }}></View>
    </ContainerWithNavBar >
  );
};

export default Home;