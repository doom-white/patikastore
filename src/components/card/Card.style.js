import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f2f6',
    width: Dimensions.get('window').width / 2.1,
    marginHorizontal: 3,
    marginBottom: 7,
    borderRadius: 5,
    alignItems: 'center',
    padding: 5,
  },

  imgContainer: {
    width: '90%',
    height: Dimensions.get('window').height / 4,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 5,
  },

  image: {
    width: '100%',
    flex: 1,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  stock: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#ff5252',
    padding: 5,
    paddingHorizontal: 11,
    borderRadius: 25,
    textAlign: 'center',
  },
  titleContainer: {
    width: Dimensions.get('window').width / 2.3,
    height: 45,
    overflow: 'hidden',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  priceContainer: {
    width: Dimensions.get('window').width / 2.3,
    height: 45,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stockContainer: {
    width: Dimensions.get('window').width / 2.3,
    height: 45,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
