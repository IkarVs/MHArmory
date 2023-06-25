import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ArmorListView = ({navigation}) => {
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

  const handleArmorPress = armor => {
    navigation.navigate('ArmorDetails', {armor});
  };
  // les images n'apparaissant pas sont dûs à l'api qui renvoie des images vides...
  const renderArmorItem = ({item}) => (
    <TouchableOpacity
      style={styles.armorContainer}
      onPress={() => handleArmorPress(item)}>
      {item.assets.imageMale == null ? (
        <Image
          source={require('../../src/assets/icons/weapon.png')}
          style={styles.armorImage}
        />
      ) : (
        <Image
          source={{uri: item.assets && item.assets.imageMale}}
          style={styles.armorImage}
        />
      )}

      <View style={styles.armorInfoContainer}>
        <Text style={styles.armorName}>{item.name}</Text>
        <Text style={styles.armorType}>{item.type}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monster Hunter Armors</Text>
      {armors && armors.length > 0 ? (
        <FlatList
          data={armors}
          renderItem={renderArmorItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      ) : (
        <>
          <Image
            style={styles.gif}
            source={require('../../src/assets/icons/13273.gif')}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#2C2C2C',
  },
  gif: {
    direction: 'rtl',
    width: 500,
    height: 250,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  armorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    padding: 8,
    backgroundColor: '#424242',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  armorImage: {
    width: 120,
    height: 120,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  armorInfoContainer: {
    alignItems: 'center',
  },
  armorName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
    color: '#FFFFFF',
  },
  armorType: {
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default ArmorListView;
