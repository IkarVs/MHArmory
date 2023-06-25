import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';

const WeaponDetailsView = ({weapon, onGoBack}) => {
  return (
    <View>
      <Image style={styles.image} source={{uri: weapon.assets && weapon.assets.image}} />
      <Text style={styles.weaponName}>{weapon.name}</Text>
      <Text>Weapon Rank : {weapon.rank}</Text>
      <Text>Rarity : {weapon.rarity}</Text>
      <Text>Weapon Type : {weapon.type}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Retour" onPress={onGoBack} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
  weaponName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  buttonContainer: {
    marginBottom: 16,
  },
});

export default WeaponDetailsView;
