import React, { useContext } from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'
import { ListItem } from 'react-native-elements'

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext)
  console.log(state)
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TrackDetail', { id: item._id })
              }
            >
              <ListItem chevron title={item.name} style={{ marginTop: 10 }} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

TrackListScreen.navigationOptions = {
  title: 'Tracks'
}

export default TrackListScreen
