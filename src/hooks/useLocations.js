import { useEffect, useState } from 'react'
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from 'expo-location'

const useLocation = (shouldTrack, callback) => {
  const [err, setErr] = useState(null)

  useEffect(() => {
    let subscriber
    const startWatching = async () => {
      try {
        const { granted } = await requestPermissionsAsync()
        if (!granted) {
          throw new Error('Location Permission not granted!')
        }
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          },
          callback
        )
      } catch (err) {
        setErr(err)
      }
    }

    if (shouldTrack) {
      startWatching()
    } else {
      if (subscriber) {
        subscriber.remove()
      }
      subscriber = null
    }
    return () => {
      if (subscriber) {
        subscriber.remove()
      }
    }
  }, [shouldTrack, callback])

  return [err]
}

export default useLocation
