import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ImageCard from './ImageCard';

const PhotoGallery = ({ images }) => {
  return (
    <FlatList
      data={images}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <ImageCard image={item} />}
      numColumns={2}
      contentContainerStyle={styles.gallery}
    />
  );
};

const styles = StyleSheet.create({
  gallery: {
    paddingHorizontal: 10, // Menambahkan padding horizontal agar lebih rapi
    paddingVertical: 10,
  },
});

export default PhotoGallery;
