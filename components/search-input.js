import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export const SearchInput = ({onChangeText, value}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder="Search"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    paddingLeft: 10,
    height: 40,
    backgroundColor: '#fff',
  },
});
