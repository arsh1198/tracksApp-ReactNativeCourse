import '../_mockLocation'
import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { SafeAreaView } from 'react-navigation'
import useLocation from '../hooks/useLocations'

import { Context as LocationContext } from '../context/LocationContext'

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext)

  const [err] = useLocation(addLocation)

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h1>TrackCreateScreen</Text>
      <Map />
      {err ? <Text>Permission not Granted!</Text> : null}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default TrackCreateScreen
