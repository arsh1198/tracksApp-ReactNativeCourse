import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import MapView, { Polyline } from 'react-native-maps'

const Map = () => {
  return (
    <>
      <MapView style={styles.MapView} />
    </>
  )
}

const styles = StyleSheet.create({
  MapView: {
    height: 350
  }
})

export default Map
