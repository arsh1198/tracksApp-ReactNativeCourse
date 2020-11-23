import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import MapView, { Polyline } from 'react-native-maps'
import { Context as TrackContext } from '../context/TrackContext'

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext)
  const id = navigation.getParam('id')

  const track = state.find(t => t._id == id)
  const initialCoords = track.locations[0].coords

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <Text h2 style={{ padding: 20 }}>
        {track.name}
      </Text>
      <View style={{ padding: 20 }}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  MapView: {
    height: 300
  }
})

export default TrackDetailScreen
