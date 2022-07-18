import React from 'react'
import { Layout, Button } from '@ui-kitten/components'
import MyStyles from '../../Styles'

function ChooseDevice({ navigation }) {
  return (
    <Layout style={[MyStyles.container, MyStyles.containerPadding]}>
      <Button style={[MyStyles.fullWidth, MyStyles.marginVertical4]} size="giant" onPress={() => navigation.navigate("LinkShip")} >Link Device</Button>
      <Button style={MyStyles.fullWidth} size="giant" appearance='outline' onPress={() => navigation.navigate("Chips")}>Order Device</Button>
    </Layout>
  )
}

export default ChooseDevice