import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { Context as AuthContext } from '../context/authContext'

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext)
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Button onPress={signOut} title="Logout"></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50
  }
})

export default AccountScreen
