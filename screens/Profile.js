import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Api from '../Api'
import Loading from '../components/Loading'

function Profile() {
  useEffect(async () => {
    getProfileData(await AsyncStorage.getItem('token'))
  }, [])

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  const getProfileData = async (token) => {
    setLoading(true)
    const response = await Api.profile(token)
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
    <View style={style.container}>
      <Loading visible={loading} />
      <Image style={style.avatar} source={{ uri: data.avatar }} />
      <Text style={style.name}>{data.name}</Text>
      <View style={style.row}>
        <Text style={style.email}>{data.email}</Text>
        <Text style={style.email}> / {data.gender}</Text>
      </View>
      <View style={style.about}>
        <Text style={style.sectionHeader}>About</Text>
        <Text style={style.aboutText}>{data.about}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  row: {
    flexDirection: "row",
    marginTop: 3
  },
  sectionHeader: {
    paddingLeft: 12,
    color: "#6495ed",
    fontSize: 20,
    marginTop: -27
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  name: {
    marginTop: 10,
    fontSize: 25
  },
  email: {
    fontSize: 14,
    color: "gray",
    fontStyle: "italic"
  },
  about: {
    width: "90%",
    marginTop: 20,
    borderColor: "gray",
    borderWidth: .5,
    borderRadius: 10,
    paddingVertical: 10
  },
  aboutText: {
    fontSize: 14,
    color: "white",
    paddingHorizontal: 20
  }
})

export default Profile