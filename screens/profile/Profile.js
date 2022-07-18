import React, { useState, useEffect } from 'react'
import { Image, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Layout, Text, Input } from '@ui-kitten/components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Api from '../../Api'
import Loading from '../../components/Loading'
import { Feather, MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import MyStyles from '../../Styles'

function Profile({ navigation }) {
  useEffect(async () => {
    getProfileData(await AsyncStorage.getItem('token'))
  }, [])

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  const getProfileData = async (token) => {
    setLoading(true)
    const response = await Api.profile()
    const data = await response.json()
    if (response.ok) {
      setLoading(false)
      if (!data.avatar) data.avatar = "https://www.w3schools.com/howto/img_avatar.png"
      setData(data)
    }
    else {
      setLoading(false)
      alert("Something Wrong Went :(")
    }
  }

  return (
    <Layout style={[MyStyles.container, MyStyles.containerPadding]}>
      <Loading visible={loading} />
      <Image style={style.avatar} source={{ uri: data.avatar }} />
      <Text style={{ marginTop: 20 }} category="h4">{data.name} <TouchableWithoutFeedback style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('Update Profile')}><Feather name="edit" size={24} color="black" /></TouchableWithoutFeedback></Text>
      <Layout style={MyStyles.row}>
        <Text style={style.email}>{data.email}</Text>
        <Text style={style.email}> / {data.gender}</Text>
      </Layout>
      <Input
        style={[MyStyles.marginVertical, { backgroundColor: "transparent", marginTop: 20 }]}
        accessoryLeft={<MaterialIcons name="description" size={24} color="black" />}
        value={data.about} />
      <Input
        style={[MyStyles.marginVertical, { backgroundColor: "transparent" }]}
        accessoryLeft={<Feather name="phone" size={24} color="black" />}
        value={data.phone} />
      <Input
        style={[MyStyles.marginVertical, { backgroundColor: "transparent" }]}
        accessoryLeft={<Entypo name="address" size={24} color="black" />}
        value={data.address} />
      <Input
        style={[MyStyles.marginVertical, { backgroundColor: "transparent" }]}
        accessoryLeft={<FontAwesome name="birthday-cake" size={24} color="black" />}
        value={data.date_of_birth} />
      <Input
        style={[MyStyles.marginVertical, { backgroundColor: "transparent" }]}
        accessoryLeft={<Entypo name="facebook" size={24} color="black" />}
        value={data.facebook_url} />
      <Input
        style={[MyStyles.marginVertical, { backgroundColor: "transparent" }]}
        accessoryLeft={<Entypo name="twitter" size={24} color="black" />}
        value={data.twitter_url} />
      <Input
        style={[MyStyles.marginVertical, { backgroundColor: "transparent" }]}
        accessoryLeft={<Entypo name="instagram" size={24} color="black" />}
        value={data.instagram_url} />
    </Layout>
  )
}

const style = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  email: {
    fontSize: 14,
    color: "gray",
    fontStyle: "italic"
  }
})

export default Profile