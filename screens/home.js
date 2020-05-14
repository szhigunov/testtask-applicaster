import React, {useState, useEffect, useMemo} from 'react';
import {View, FlatList} from 'react-native';
import {FeedItem} from '../components/feed-item';
import {Preloader} from '../components/preloader';
import {NoResults} from '../components/no-results';
import {SearchInput} from '../components/search-input';

export const HomeScreen = ({navigation: {navigate}}) => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const filteredData = useMemo(() => {
    if (searchInput.length === 0) {
      return data;
    } else {
      let newData = data.filter(({title}) => title.includes(searchInput));
      return newData;
    }
  }, [data, searchInput]);

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
      <SearchInput onChangeText={setSearchInput} value={searchInput} />
      {filteredData.length === 0 && <NoResults />}
      <FlatList
        data={filteredData}
        renderItem={({item}) => <FeedItem onPress={navigate} item={item} />}
        keyExtractor={({id}) => id}
      />
    </View>
  );
};
