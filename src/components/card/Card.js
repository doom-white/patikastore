import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.style';

const Card = ({products}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{uri: products.imgURL}} style={styles.image} />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{products.title}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{products.price}</Text>
        </View>
        {!products.inStock && (
          <View style={styles.stockContainer}>
            <Text style={styles.stock}>Stokta yok!</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Card;
