import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

const NavLink = ({ navigation, linkText, destination }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(destination)}>
        <Text style={styles.SwitchSignin}>{linkText}</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  SwitchSignin: {
    color: 'darkblue',
    marginStart: 20
  }
})

export default withNavigation(NavLink)
