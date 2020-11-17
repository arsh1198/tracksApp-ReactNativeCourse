import React, { useContext } from 'react'
import { Context as AuthContext, Context } from '../context/authContext'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = () => {
  const { state, signIn, clearError } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearError} />
      <AuthForm
        headerText="Sign In"
        error={state.error}
        onSubmit={signIn}
        buttonText="Sign In"
      />
      <NavLink
        linkText="Dont have an account? Sign Up here"
        destination="Signup"
      />
    </View>
  )
}

SigninScreen.navigationOptions = {
  headerShown: false
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50
  }
})

export default SigninScreen
