import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

export const Preloader = ({title}) => (
  <View style={styles.preloaderView}>
    <View>
      <ActivityIndicator />
      <Text style={styles.loadingMsg}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  preloaderView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  loadingMsg: {paddingTop: 10},
});
