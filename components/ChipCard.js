import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons';

function ChipCard({ imgSrc, name, price, description, rate, rateCount }) {
  return (
    <View style={style.card}>
      <Image style={style.cardImage} source={{ uri: imgSrc }} />
      <View style={style.cardBody}>
        <Text style={style.cardBodyLabel}>Name: <Text style={style.cardBodyText}> {name}</Text></Text>
        <Text style={style.cardBodyLabel}>Price: <Text style={style.cardBodyText}> ${price}</Text></Text>
        <Text style={style.cardBodyText}>{description}</Text>
        <Text style={style.cardBodyLabel}><AntDesign name="star" size={14} color="black" /> {rate} / <Entypo name="users" size={14} color="black" /> {rateCount}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  card: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: .5,
    borderRadius: 20,
    padding: 8
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 20
  },
  cardBody: {
    paddingLeft: 15
  },
  cardBodyLabel: {
    fontStyle: "italic",
    padding: 1.5
  },
  cardBodyText: {
    fontStyle: "normal",
    fontWeight: "bold"
  },
})

export default ChipCard