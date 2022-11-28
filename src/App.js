import React from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import productsData from './data/db';
import Card from './components/card';
import Search from './components/search';

const App = () => {
  const getProducts = ({item}) => <Card products={item} />;
  const productSearch = () => <Search />;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.appHeader}>Patika Store</Text>
      <FlatList
        ListHeaderComponent={productSearch}
        data={productsData}
        renderItem={getProducts}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
  },
  appHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginVertical: 3,
    padding: 5,
    paddingLeft: 9,
    color: 'purple',
  },
});

export default App;
