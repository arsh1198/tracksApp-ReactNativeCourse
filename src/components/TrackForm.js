import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext)
  const [saveTrack] = useSaveTrack()

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
        <Button title="Stop" onPress={stopRecording} />
      ) : (
        <Button
          style={styles.Button}
          title="Start Recording"
          onPress={startRecording}
        />
      )}
      {!recording && locations.length ? (
        <View style={styles.Button}>
          <Button
            style={styles.Button}
            title="Save Recording"
            onPress={saveTrack}
          />
        </View>
      ) : null}
    </>
  )
}

const styles = StyleSheet.create({
  Button: {
    marginTop: 25
  }
})

export default TrackForm
