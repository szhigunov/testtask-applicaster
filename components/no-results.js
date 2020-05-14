import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const NoResults = () => (
  <View style={styles.preloaderView}>
    <View>
      <Text style={styles.loadingMsg}>No Results Found</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  preloaderView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  loadingMsg: {paddingTop: 10},
});
