import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'
import { Context as TrackContext } from '../context/TrackContext'

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext)
  const id = navigation.getParam('id')

  const track = state.find(t => t._id == id)
  const initialCoords = track.locations[0].coords

  return (
    <View>
      <Text>{track.name}</Text>
      <MapView
        style={styles.MapView}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }}
      >
        <Polyline
          coordinates={track.locations.map(location => location.coords)}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  MapView: {
    height: 300
  }
})

export default TrackDetailScreen
