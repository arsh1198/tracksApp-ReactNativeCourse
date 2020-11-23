import '../_mockLocation'
import React, { useCallback, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import useLocation from '../hooks/useLocations'
import { AntDesign } from '@expo/vector-icons'

import { Context as LocationContext } from '../context/LocationContext'
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext)
  const callback = useCallback(
    location => {
      addLocation(location, recording)
    },
    [recording]
  )
  const [err] = useLocation(isFocused || recording, callback)

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={styles.Container}>
      <Text h2 style={styles.Heading}>
        Start Tracking
      </Text>
      <View style={styles.Map}>
        <Map />
      </View>
      {err ? <Text>Permission not Granted!</Text> : null}
      <TrackForm />
    </SafeAreaView>
  )
}

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <AntDesign name="plussquare" size={24} color="black" />
}

const styles = StyleSheet.create({
  Container: {
    padding: 20,
    flex: 1
  },
  Map: {
    marginVertical: 25
  },
  Heading: {
    paddingVertical: 25
  }
})

export default withNavigationFocus(TrackCreateScreen)
