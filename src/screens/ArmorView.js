import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ArmorView = () => {
  const [armors, setArmors] = useState([]);

  useEffect(() => {
    fetch('https://mhw-db.com/armor')
      .then(response => response.json())
      .then(data => {
        setArmors(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const renderArmorItem = ({ item }) => (
    <TouchableOpacity style={styles.armorContainer}>
      {item.assets && item.assets.imageMale ? (
        <Image source={{ uri: item.assets.imageMale }} style={styles.armorImage} />
      ) : (
        <View style={styles.emptyImage} />
      )}
      <Text style={styles.armorName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monster Hunter Armors</Text>
      <FlatList
        data={armors}
        renderItem={renderArmorItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  armorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  armorImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  emptyImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
    backgroundColor: 'white',
  },
  armorName: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ArmorView;
