import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Loading from '../../components/Loading'
import Api from '../../Api'

const phoneWidth = Dimensions.get('window').width / 100;
const phoneHeight = Dimensions.get('window').height / 100;

function ChipDetails({ route, navigation }) {
  const [data, setData] = React.useState({})
  const [loading, setLoading] = React.useState(false)

  React.useEffect(async () => {
    setLoading(true)
    const response = await Api.getChipVersionDetails(route.params.id)
    setLoading(false)
    if (response.ok) setData(await response.json())
    else alert("Something Wrong Went :(")
  }, [])

  return (
    <View style={style.container}>
      <Loading visible={loading} />
      <View style={style.topSection}>
        <Text style={style.topSectionText}>{data.name}</Text>
      </View>
      <ScrollView style={{ marginVertical: 30 }} horizontal={true}>
        <Image style={style.galleryImage} source={{ uri: "https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png" }} />
        <Image style={style.galleryImage} source={{ uri: "https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png" }} />
      </ScrollView>
      <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "right" }}>300$</Text>
      {/* <Text style={{ textAlign: "right" }}><AntDesign name="star" size={14} color="black" /></Text> */}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center"
  },
  topSectionText: {
    paddingLeft: 15,
    fontSize: 25,
    fontWeight: "bold"
  },
  galleryImage: {
    width: phoneWidth * 85,
    height: phoneHeight * 30,
    borderRadius: 25,
    marginHorizontal: 10
  }
})

export default ChipDetails