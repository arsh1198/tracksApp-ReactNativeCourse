import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SignupScreen</Text>
      <Button title="SignIn" onPress={() => navigation.navigate('Signin')} />
      <Button
        title="Main Flow"
        onPress={() => navigation.navigate('mainFlow')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SignupScreen
