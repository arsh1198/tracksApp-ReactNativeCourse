import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signup':
      return { error: '', token: action.payload }
    case 'add_error':
      return { ...state, error: action.payload }
    default:
      return state
  }
}

const signUp = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signup', payload: response.data.token })
    navigate('TrackList')
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong!' })
  }
}

const signIn = dispatch => {
  return ({ email, password }) => {}
}

const signOut = dispatch => {
  return () => {}
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut },
  { token: null, error: '' }
)
