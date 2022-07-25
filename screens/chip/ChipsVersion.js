import React, { useState, useEffect } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Layout } from '@ui-kitten/components'
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
          imgSrc={"https://live-guard-app.herokuapp.com/img/chip.9a0dd998.png"}
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
    <Layout style={style.container}>
      <Loading visible={loading} />
      {chips}
    </Layout>
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