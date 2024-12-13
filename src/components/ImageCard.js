import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

// Mendapatkan lebar layar
const screenWidth = Dimensions.get('window').width;

const ImageCard = ({ image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: screenWidth / 2 - 15, // Dua kolom dengan jarak antar item
    height: 200,                 // Tinggi gambar tetap
    margin: 5,                   // Jarak antar gambar
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageCard;
