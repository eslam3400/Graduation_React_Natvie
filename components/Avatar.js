import React from 'react'
import { Image } from 'react-native'

function Avatar({ img }) {
  return (
    <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={{ uri: img ?? "https://www.w3schools.com/howto/img_avatar.png" }} />
  )
}

export default Avatar