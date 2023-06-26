import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const WeaponDetailsView = ({ weapon, onGoBack }) => {
  const currentUser = auth().currentUser;

  const addFavorite = async () => {
    try {
      const collectionRef = firestore().collection('FavoriteByAccount');
      const documentData = {
        name: weapon.name,
        User: currentUser.uid,
        ItemType: 'Weapon',
      };
      const docRef = await collectionRef.add(documentData);
      console.log('Document ajouté avec l ID :', docRef.id);
    } catch (error) {
      console.error('Erreur lors de l ajout du document :', error);
    }
  };

  return (
    <View>
      <Image
        style={styles.image}
        source={{ uri: weapon.assets && weapon.assets.image }}
      />
      <Text style={styles.weaponName}>{weapon.name}</Text>
      <Text>Weapon Rank: {weapon.rank}</Text>
      <Text>Rarity: {weapon.rarity}</Text>
      <Text>Weapon Type: {weapon.type}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Retour" onPress={onGoBack} />
      </View>
      {currentUser ? (
        <View style={styles.buttonContainer}>
          <Button title="Ajouter aux favoris" onPress={addFavorite} />
        </View>
      ) : (
        <Text>Connectez-vous pour ajouter aux favoris</Text>
      )}
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
