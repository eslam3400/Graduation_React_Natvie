import React from 'react'
import { Text } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons';

function RatingInfo({ users, rate }) {
  return (
    <Text style={{ fontSize: 14 }}><Entypo name="users" size={14} color="black" /> {users} / <AntDesign name="star" size={14} color="black" /> {rate}</Text>
  )
}

export default RatingInfo