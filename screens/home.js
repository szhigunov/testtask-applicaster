import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {FeedItem} from '../components/feed-item';
import {Preloader} from '../components/preloader';

export const HomeScreen = ({navigation: {navigate}}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Promise.all([
      fetch(
        'http://assets-production.applicaster.com/applicaster-employees/israel_team/Elad/assignment/link_json.json',
      ).then(res => res.json()),
      fetch(
        'http://assets-production.applicaster.com/applicaster-employees/israel_team/Elad/assignment/video_json.json',
      ).then(res => res.json()),
    ]).then(([links, videos]) => setData([...links.entry, ...videos.entry]));
  }, []);

  return data.length === 0 ? (
    <Preloader title="Loading..." />
  ) : (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => <FeedItem onPress={navigate} item={item} />}
        keyExtractor={({id}) => id}
      />
    </View>
  );
};
