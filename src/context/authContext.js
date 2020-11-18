import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return { error: '', token: action.payload }
    case 'signout':
      return { error: '', token: null }
    case 'add_error':
      return { ...state, error: action.payload }
    case 'clear_error':
      return { ...state, error: '' }
    default:
      return state
  }
}

const clearError = dispatch => () => {
  dispatch({ type: 'clear_error' })
}

const tryLocalSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    dispatch({ type: 'signin', payload: token })
    navigate('TrackList')
  } else {
    navigate('Signup')
  }
}

const signUp = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signin', payload: response.data.token })
    navigate('TrackList')
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong!' })
  }
}

const signIn = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('signin', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signin', payload: response.data.token })
    navigate('TrackList')
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went Wrong!' })
  }
}

const signOut = dispatch => async () => {
  await AsyncStorage.removeItem('token')
  dispatch({ type: 'signout' })
  navigate('loginFlow')
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut, clearError, tryLocalSignIn, signOut },
  { token: null, error: '' }
)
