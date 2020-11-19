import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import MapView, { Circle, Polyline } from 'react-native-maps'
import { ActivityIndicator } from 'react-native-paper'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
  const {
    state: { currentLocation }
  } = useContext(LocationContext)

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
  }

  return (
    <MapView
      style={styles.MapView}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 225, 0.3)"
      />
    </MapView>
  )
}

const styles = StyleSheet.create({
  MapView: {
    height: 350
  }
})

export default Map
