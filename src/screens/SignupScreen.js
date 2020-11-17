import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../context/authContext'
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import Navlink from '../components/NavLink'

const SignupScreen = () => {
  const { state, signUp, clearError } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearError} />
      <AuthForm
        headerText="Sign Up"
        error={state.error}
        buttonText="Sign Up"
        onSubmit={signUp}
      />
      <Navlink
        linkText="Already have an account? Sign In Instead"
        destination="Signin"
      />
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
  }
})

export default SignupScreen
