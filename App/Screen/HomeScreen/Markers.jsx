import { View, Text } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'

export default function Markers({index,place}) {
  return (
    <Marker
          coordinate={{
            latitude: place.location?.latitude,
            longitude: place.location?.longitude
          }}

          onPress={()=>{
            console.log("marker index",index)
          }}
        />
  )
}