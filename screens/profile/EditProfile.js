import React, { useState, useEffect } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Api from '../../Api'
import Loading from '../../components/Loading'

function EditProfile({ navigation }) {
  useEffect(() => getProfileData(), [])

  const [name, setName] = useState("")
  const [about, setAbout] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [facebook_url, setFb] = useState("")
  const [twitter_url, setTwitter] = useState("")
  const [instagram_url, setInstagram] = useState("")
  const [loading, setLoading] = useState(false)

  let id

  const getProfileData = async () => {
    setLoading(true)
    const token = await AsyncStorage.getItem('token')
    const response = await Api.profile(token)
    const data = await response.json()
    if (response.ok) {
      setLoading(false)
      id = data.id
      setName(data.name ?? "")
      setAbout(data.about ?? "")
      setPhone(data.phone ?? "")
      setAddress(data.address ?? "")
      setFb(data.facebook_url ?? "")
      setTwitter(data.twitter_url ?? "")
      setInstagram(data.instagram_url ?? "")
    }
    else {
      setLoading(false)
      alert("Something Wrong Went :(")
    }
  }

  const updateProfileData = async () => {
    setLoading(true)
    const response = await Api.editProfile({ id, name, about, phone, address, facebook_url, twitter_url, instagram_url })
    if (response.ok) {
      setLoading(false)
      navigation.navigate("Profile")
    } else {
      setLoading(false)
      alert("Error happened please try again later")
    }
  }

  return (
    <View style={style.container}>
      <Loading visible={loading} />
      <TextInput style={style.input} onChangeText={setName} value={name} placeholder="Name" />
      <TextInput style={style.input} onChangeText={setAbout} value={about} placeholder="About" />
      <TextInput style={style.input} onChangeText={setPhone} value={phone} placeholder="Phone" />
      <TextInput style={style.input} onChangeText={setAddress} value={address} placeholder="Address" />
      <TextInput style={style.input} onChangeText={setFb} value={facebook_url} placeholder="Facebook URL" />
      <TextInput style={style.input} onChangeText={setTwitter} value={twitter_url} placeholder="Twitter URL" />
      <TextInput style={style.input} onChangeText={setInstagram} value={instagram_url} placeholder="Instagram URL" />
      <View style={{ marginTop: 20 }}>
        <Button onPress={updateProfileData} color="blue" title="Update" />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 35,
    borderWidth: .5,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: "80%"
  },
})

export default EditProfile