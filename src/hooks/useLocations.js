import React, { useEffect, useState, useContext } from 'react'
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from 'expo-location'

const useLocation = callback => {
  const [err, setErr] = useState(null)

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync()
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        callback
      )
      if (!granted) {
        throw new Error('Location Permission not granted!')
      }
    } catch (err) {
      setErr(err)
    }
  }
  useEffect(() => {
    startWatching()
  }, [])

  return [err]
}

export default useLocation
