import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Input, Button, Spinner } from '@ui-kitten/components'
import Api from '../../Api'
import Loading from '../../components/Loading'
import * as DocumentPicker from 'expo-document-picker';
import MyStyles from '../../Styles'


function ChipSettings({ route, navigation }) {
  const [name, setName] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [btnLoading, setBtnLoading] = React.useState(false)
  const [document, setDocument] = React.useState(null)

  React.useEffect(async () => {
    setLoading(true)
    const response = await Api.getChipSetting(route.params.id)
    setLoading(false)
    if (response.ok) {
      const data = await response.json()
      setName(data.name)
    }
    else alert("Something Wrong Went :(")
  }, [])

  const spinner = () => <Spinner size='large' status="info" />

  return (
    <Layout style={[MyStyles.container, MyStyles.containerPadding]}>
      <Loading visible={loading} />
      <Input label='Name'
        style={MyStyles.marginVertical}
        onChangeText={setName}
        value={name}
        placeholder='Test' />
      <Button onPress={async () => {
        const document = await DocumentPicker.getDocumentAsync()
        setDocument(document)
      }} style={[MyStyles.marginVertical3, MyStyles.fullWidth]} appearance="outline">Choose Photo</Button>
      <Button style={MyStyles.fullWidth} onPress={() => {
        setBtnLoading(true)
        setTimeout(() => {
          alert("Data Updated Successfully")
          setBtnLoading(false)
          navigation.goBack()
        }, 1000)
      }} accessoryLeft={btnLoading ? spinner : null}>Update</Button>
      {/* <Layout style={{ marginTop: 20 }}>
        <Button onPress={async () => {
          // setLoading(true)
          // var data = new FormData()
          // data.append('id', route.params.id)
          // data.append('name', name)
          // data.append("photoFile", document);
          // console.log(data)
          // try {
          //   const response = await Api.updateChipSettings(data)
          //   setLoading(false)
          //   if (response.ok) alert("Update Done :D")
          //   else alert("Something Wrong Went :(")
          // } catch (e) {
          //   console.log(e)
          // }
          var myHeaders = new Headers();
          myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhc2RAYXNkLmNvbSIsImV4cCI6MTY1NDc5ODMzMH0.HcnBq1rQ9ufRfahB_12AxG-yt7crimuliJNmnZgDjaUuRpn60SAtv68TcgGLHeuPl7ECb_XcIk8p1WDI5udrWQ");

          var formdata = new FormData();
          formdata.append("id", "7");
          formdata.append("name", "Test00");
          formdata.append("photoFile", document);

          var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
          };

          fetch("https://live-guard.herokuapp.com/api/chip-user/info", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }} title="update" /> */}
      {/* </Layout> */}
    </Layout >
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    borderRadius: 15,
    borderWidth: .5,
    width: "85%",
    paddingVertical: 5,
    textAlign: 'center',
    marginBottom: 20
  }
})

export default ChipSettings