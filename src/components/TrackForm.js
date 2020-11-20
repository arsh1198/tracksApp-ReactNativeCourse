import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext)
  console.log(locations.length)
  return (
    <>
      <Input
        label="Enter a Title"
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={changeName}
      />
      {recording ? (
        <Button style={styles.Button} title="Stop" onPress={stopRecording} />
      ) : (
        <Button
          style={styles.Button}
          title="Start Recording"
          onPress={startRecording}
        />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  Button: {
    marginTop: 25
  }
})

export default TrackForm
