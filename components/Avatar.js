import React from 'react'
import { Image } from 'react-native'

function Avatar({ img }) {
  return (
    <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={{ uri: img ?? "https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png" }} />
  )
}

export default Avatar