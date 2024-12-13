import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PhotoGallery from '../components/PhotoGallery';

const GalleryScreen = ({ route }) => {
  const { category } = route.params;
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = () => {
      let imageList = [];
      switch (category) {
        case 'humans':
          imageList = [
            require('../assets/humans/dayak.jpg'),
            require('../assets/humans/bali.jpg'),
            require('../assets/humans/batak.jpg'),
            require('../assets/humans/jawa.jpg'),
            require('../assets/humans/melayu.jpg'),
            require('../assets/humans/minang.jpg'),
          ];
          break;
        case 'animals':
          imageList = [
            require('../assets/animals/beruang.jpg'),
            require('../assets/animals/kelinci.jpg'),
            require('../assets/animals/kucing.jpg'),
            require('../assets/animals/turtle.jpg'),
            require('../assets/animals/bee.jpg'),
            require('../assets/animals/berang.jpg'),
            require('../assets/animals/enggang.jpg'),
            require('../assets/animals/jeracing.jpg'),
            require('../assets/animals/kulut.jpg'),
            require('../assets/animals/lumba.jpg'),
            require('../assets/animals/wasih.jpg'),
            require('../assets/animals/paus.jpg'),
          ];
          break;
        case 'plants':
          imageList = [
            require('../assets/plants/anggrek.jpg'),
            require('../assets/plants/bangkai.jpg'),
            require('../assets/plants/bugen.jpg'),
            require('../assets/plants/lidah.jpg'),
            require('../assets/plants/mawar.jpg'),
            require('../assets/plants/sepatu.jpg'),
          ];
          break;
        default:
          imageList = [];
      }
      setImages(imageList);
    };

    fetchImages();
  }, [category]);

  return (
    <View style={styles.container}>
      {images.length > 0 ? (
        <PhotoGallery images={images} />
      ) : (
        <Text style={styles.emptyText}>No images available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default GalleryScreen;
