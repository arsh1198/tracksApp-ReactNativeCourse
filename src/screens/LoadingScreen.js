import React, { useContext, useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Context as AuthContext } from '../context/authContext'

const LoadingScreen = () => {
  const { tryLocalSignIn } = useContext(AuthContext)

  useEffect(() => {
    tryLocalSignIn()
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    </View>
  )
}

export default LoadingScreen
