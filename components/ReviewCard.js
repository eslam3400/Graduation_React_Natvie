import React from 'react'
import { View, Text } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons';
import Avatar from './Avatar'

function ReviewCard({ headline, comment, rating, user, review_time }) {
  return (
    <View style={{ borderWidth: 1, padding: 10, borderRadius: 10, marginVertical: 5, flexDirection: "row", justifyContent: "center" }}>
      <Avatar user={user} />
      <View style={{ width: "80%", paddingStart: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 12 }}>{user.name}</Text>
          <Text><AntDesign name="star" size={14} color="black" /> {rating}</Text>
        </View>
        <Text style={{ fontSize: 9, fontStyle: "italic", color: "gray" }}>{user.email} - {review_time}</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{headline}</Text>
        <Text style={{ fontStyle: "italic" }}>{comment}</Text>
      </View>
    </View>
  )
}

export default ReviewCard