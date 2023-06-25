import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const WeaponsTypes = {
  GreatSword: 'great-sword',
  LongSword: 'long-sword',
  SwordShield: 'sword-and-shield',
  DualBlades: 'dual-blades',
  Hammer: 'hammer',
  HuntingHorn: 'hunting-horn',
  Lance: 'lance',
  GunLance: 'gunlance',
  SwitchAxe: 'switch-axe',
  ChargeBlade: 'charge-blade',
  InsectGlave: 'insect-glaive',
  LightBowGun: 'light-bowgun',
  HeavyBowGun: 'heavy-bowgun',
  Bow: 'bow',
};

const WeaponListView = ({navigation}) => {
  const [weapons, setWeapons] = useState([]);
  useEffect(() => {
    fetch('https://mhw-db.com/weapons')
      .then(response => response.json())
      .then(data => {
        setWeapons(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleWeaponPress = weapon => {
    navigation.navigate('WeaponDetails', {weapon});
  };

  const renderWeaponItem = ({item}) => (
    <TouchableOpacity
      style={styles.weaponContainer}
      onPress={() => handleWeaponPress(item)}>
      <Image
        source={{uri: item.assets && item.assets.image}}
        style={styles.weaponImage}
      />
      <View style={styles.weaponInfoContainer}>
        <Text style={styles.weaponName}>{item.name}</Text>
        <Text style={styles.weaponType}>{item.type}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monster Hunter Weapons</Text>
      {weapons && weapons.length > 0 ? (
        <FlatList
          data={weapons}
          renderItem={renderWeaponItem}
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  weaponContainer: {
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
  weaponImage: {
    width: 120,
    height: 120,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  weaponInfoContainer: {
    alignItems: 'center',
  },
  gif: {
    direction: 'rtl',
    width: 500,
    height: 250,

  },
  weaponName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
    color: '#FFFFFF',
  },
  weaponType: {
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default WeaponListView;
