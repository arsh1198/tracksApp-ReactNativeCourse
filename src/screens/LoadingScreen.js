import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
import { Context as AuthContext } from '../context/authContext'
import { ActivityIndicator, Colors } from 'react-native-paper'

const LoadingScreen = () => {
  const { tryLocalSignIn } = useContext(AuthContext)

  useEffect(() => {
    tryLocalSignIn()
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator animating={true} color={Colors.blue800} size="large" />
    </View>
  )
}

export default LoadingScreen
