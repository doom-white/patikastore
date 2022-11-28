import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Search.style';

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Ara..."
        placeholderTextColor={'#a4b0be'}
      />
    </View>
  );
};

export default Search;
