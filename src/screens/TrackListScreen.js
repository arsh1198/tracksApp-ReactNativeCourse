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
    <View>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text>TrackListScreen</Text>
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
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default TrackListScreen
