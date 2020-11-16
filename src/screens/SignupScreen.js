import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/spacer'
import { Context as AuthContext } from '../context/authContext'

const SignupScreen = ({ navigation }) => {
  const { state, signUp } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log(state)

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h1>Sign Up</Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      {state.error ? (
        <Text style={styles.SignUpError}>{state.error}</Text>
      ) : null}
      <Spacer>
        <Button
          title="SignUp"
          onPress={() => {
            signUp({ email, password })
          }}
        />
      </Spacer>
    </View>
  )
}

SignupScreen.navigationOptions = {
  headerShown: false
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50
  },
  SignUpError: {
    color: '#f00',
    marginStart: 20
  }
})

export default SignupScreen
