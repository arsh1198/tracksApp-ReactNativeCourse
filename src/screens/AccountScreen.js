import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { Context as AuthContext } from '../context/authContext'
import { MaterialIcons } from '@expo/vector-icons'

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext)
  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={{ margin: 150 }}>
      <Button onPress={signOut} title="Logout"></Button>
    </SafeAreaView>
  )
}

AccountScreen.navigationOptions = {
  tabBarIcon: <MaterialIcons name="account-box" size={24} color="black" />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50
  }
})

export default AccountScreen
