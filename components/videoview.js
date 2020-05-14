import React from 'react';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';

export const VideoView = ({onLoad, onError, uri}) => {
  return (
    <View style={styles.videoView}>
      <Video
        style={styles.video}
        source={{
          uri,
        }}
        rate={1.0}
        volume={0}
        muted={false}
        paused={false}
        resizeMode="contain"
        repeat={false}
        controls={true}
        playInBackground={false}
        playWhenInactive={false}
        progressUpdateInterval={250.0}
        onLoad={() => {
          onLoad(true);
        }}
        onError={err => {
          onError(false);
          console.warn(err);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  videoView: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    flex: 1,
  },
});
