import React, { useState, useEffect } from 'react'
import { Layout, Input, Button, Spinner } from '@ui-kitten/components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Api from '../../Api'
import Loading from '../../components/Loading'
import MyStyles from '../../Styles'

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
  const [btnLoading, setBtnLoading] = useState(false)

  let id

  const getProfileData = async () => {
    setLoading(true)
    const token = await AsyncStorage.getItem('token')
    const response = await Api.profile(token)
    const data = await response.json()
    setLoading(false)
    if (response.ok) {
      id = data.id
      setName(data.name ?? "")
      setAbout(data.about ?? "")
      setPhone(data.phone ?? "")
      setAddress(data.address ?? "")
      setFb(data.facebook_url ?? "")
      setTwitter(data.twitter_url ?? "")
      setInstagram(data.instagram_url ?? "")
      return navigation.navigate("Profile")
    }
    alert("Something Wrong Went :(")
  }

  const updateProfileData = async () => {
    setBtnLoading(true)
    const response = await Api.editProfile({ id, name, about, phone, address, facebook_url, twitter_url, instagram_url })
    setBtnLoading(false)
    if (response.ok) return navigation.navigate("Profile")
    alert("Error happened please try again later")
  }

  const spinner = () => <Spinner size='large' status="info" />

  return (
    <Layout style={[MyStyles.container, MyStyles.containerPadding]}>
      <Loading visible={loading} />
      <Input label="Name" style={MyStyles.marginVertical} onChangeText={setName} value={name} placeholder="Name" />
      <Input label="About" style={MyStyles.marginVertical} onChangeText={setAbout} value={about} placeholder="About" />
      <Input label="Phone" keyboardType='decimal-pad' style={MyStyles.marginVertical} onChangeText={setPhone} value={phone} placeholder="Phone" />
      <Input label="Address" style={MyStyles.marginVertical} onChangeText={setAddress} value={address} placeholder="Address" />
      <Input label="Facebook" style={MyStyles.marginVertical} onChangeText={setFb} value={facebook_url} placeholder="Facebook URL" />
      <Input label="Twitter" style={MyStyles.marginVertical} onChangeText={setTwitter} value={twitter_url} placeholder="Twitter URL" />
      <Input label="Instagram" style={MyStyles.marginVertical} onChangeText={setInstagram} value={instagram_url} placeholder="Instagram URL" />
      <Button style={[MyStyles.fullWidth, MyStyles.marginVertical3]} onPress={updateProfileData} accessoryLeft={btnLoading ? spinner : null}>Update</Button>
    </Layout>
  )
}

export default EditProfile