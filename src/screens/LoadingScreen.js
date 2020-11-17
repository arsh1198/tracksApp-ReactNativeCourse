import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
import * as Progress from 'react-native-progress'
import { Context as AuthContext } from '../context/authContext'

const LoadingScreen = () => {
  const { tryLocalSignIn } = useContext(AuthContext)

  useEffect(() => {
    tryLocalSignIn()
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Progress.Circle size={30} indeterminate={true} /> */}
    </View>
  )
}

export default LoadingScreen
