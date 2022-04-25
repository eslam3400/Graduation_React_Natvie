import React, { useState, useEffect } from 'react'
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Api from '../../Api'
import Loading from '../../components/Loading'
import ChipCard from '../../components/ChipCard'

function ChipsVersion({ navigation }) {
  const chips = []

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    await getChips("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhc2RAYXNkLmNvbSIsImV4cCI6MTY1MTcxNzIxOX0.m9RXdX9t4Fi84CEHWfo5S7QWLGt2HggDS-PSd4KpXX6N1rOuI3Pupg2v3DgaHKn4h9pPnj7CkGUeivzRQ1oOhw")
  }, [])


  const getChips = async (token) => {
    setLoading(true)
    const response = await Api.getChipsVersion(token)
    setLoading(false)
    if (response.ok) setData(await response.json())
    else alert("Something Wrong Went :(")
  }

  data.forEach(chip =>
    chips.push(<ChipCard
      key={chip.id}
      imgSrc="https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png"
      name={chip.name}
      price={chip.price}
      description={chip.short_description}
      rate={chip.average_rating}
      rateCount={chip.review_count}
    />)
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