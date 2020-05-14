import React, {useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableNativeFeedback,
} from 'react-native';

const getImageUri = item =>
  item.media_group.find(({media_item}) => media_item[0].key === 'image_base')
    .media_item[0].src;
const getVideoUri = item => item.content.src;
const getHref = item => item.link.href;

export const FeedItem = ({onPress, item}) => {
  let type = item.type.value;

  const openLink = useCallback(() => {
    onPress('WebView', {
      name: item.title,
      data: {
        href: getHref(item),
      },
    });
  }, [item, onPress]);

  const openVideo = useCallback(() => {
    onPress('Video', {
      name: item.title,
      data: {
        uri: getVideoUri(item),
      },
    });
  }, [item, onPress]);

  return (
    <View style={styles.feedItem}>
      <TouchableNativeFeedback
        onPress={() => {
          if (type === 'video') {
            openVideo();
          } else {
            openLink();
          }
        }}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Image style={styles.image} source={{uri: getImageUri(item)}} />
          <Text style={styles.summary}>{item.summary}</Text>
          {type === 'video' && <Button title="PLAY" onPress={openVideo} />}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  feedItem: {backgroundColor: '#fff', margin: 10},
  title: {
    writingDirection: 'rtl',
    fontWeight: '600',
    fontSize: 16,
    padding: 10,
  },
  summary: {
    writingDirection: 'rtl',
    fontSize: 12,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  image: {
    width: '100%',
    height: 200,
  },
});
