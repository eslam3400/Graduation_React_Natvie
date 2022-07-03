import React, { useState, useEffect } from 'react'
import { View, Pressable, StyleSheet } from 'react-native'
import Api from '../../Api'
import Loading from '../../components/Loading'
import ChipCard from '../../components/ChipCard'

function ChipsVersion({ navigation }) {
  const chips = []

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    await getChips()
  }, [])


  const getChips = async () => {
    setLoading(true)
    const response = await Api.getChipsVersion()
    setLoading(false)
    if (response.ok) setData(await response.json())
    else alert("Something Wrong Went :(")
  }

  data.forEach(chip =>
    chips.push(
      <Pressable
        onPress={() => { navigation.navigate('ChipVersionDetails', { id: chip.id }) }}
        style={{ width: "90%", marginVertical: 10 }}
        key={chip.id}>
        <ChipCard
          imgSrc={/*chip.main_image ||*/ "https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png"}
          name={chip.name}
          price={chip.price}
          description={chip.short_description}
          rate={chip.average_rating}
          rateCount={chip.review_count}
        />
      </Pressable>
    )
  )

  return (
    <View style={style.container}>
      <Loading visible={loading} />
      {chips}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }
})

export default ChipsVersion