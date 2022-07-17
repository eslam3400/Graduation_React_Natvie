import React from 'react'
import { Layout, Text, Button } from '@ui-kitten/components'
import { Feather } from '@expo/vector-icons';
import MyStyles from '../../Styles'

function Intro({ navigation }) {
  return (
    <Layout style={MyStyles.container}>
      <Layout style={{ height: "70%", justifyContent: "center" }}>
        <Text category='h4'>Welcome To</Text>
        <Text style={{ fontSize: 55, marginVertical: 10 }} status="primary">
          <Feather name="shield" size={50} color="#3366FF" /> Live Guard
        </Text>
        <Text style={{ textAlign: "center" }}>Some bla bla about us :D</Text>
      </Layout>
      <Button style={{ marginTop: 20, width: '80%' }} size="large" onPress={() => navigation.navigate("Login")} >Login</Button>
      <Button style={{ marginTop: 10, width: '80%' }} size="large" appearance="outline" onPress={() => navigation.navigate("Signup")}>Signup</Button>
    </Layout >
  )
}


export default Intro