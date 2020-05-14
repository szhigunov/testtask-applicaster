import React, {useState} from 'react';
import {VideoView} from '../components/videoview';
import {Preloader} from '../components/preloader';

export const VideoScreen = ({route}) => {
  const [loaded, setLoaded] = useState(false);
  let data = route.params.data;

  return (
    <>
      {!loaded && <Preloader title="Loading..." />}
      <VideoView
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        uri={data.uri}
      />
    </>
  );
};
