import React from 'react'
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';

function UserCard({ imgSrc, name, role, id }) {
  return (
    <View style={style.card}>
      <Image style={style.cardImage} source={{ uri: imgSrc }} />
      <View style={style.cardBody}>
        <Text style={style.cardBodyLabel}>Name: <Text style={style.cardBodyText}> {name}</Text></Text>
        <Text style={style.cardBodyLabel}>Role: <Text style={style.cardBodyText}> {role}</Text></Text>
        {
          role == "Normal" ?
            <View style={style.cardRemove}>
              <Entypo name="remove-user" size={24} color="black" />
            </View>
            : null
        }
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: .5,
    borderRadius: 20,
    padding: 8
  },
  cardImage: {
    width: "25%",
    height: 80,
    borderRadius: 20
  },
  cardBody: {
    width: "75%",
    paddingLeft: 15
  },
  cardBodyLabel: {
    fontStyle: "italic",
    fontSize: 16,
    padding: 1.5
  },
  cardBodyText: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16
  },
  cardRemove: {
    width: "95%",
    flexDirection: "row-reverse",
    paddingVertical: 3
  }
})

export default UserCard