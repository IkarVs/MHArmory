import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ArmorDetailsView = ({ armor, onGoBack }) => {
  const currentUser = auth().currentUser;

  const addFavorite = async () => {
    try {
      const collectionRef = firestore().collection('FavoriteByAccount');
      const documentData = {
        name: armor.name,
        User: currentUser.uid,
        ItemType: 'Armor',
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
        source={{ uri: armor.assets.imageMale }}
      />
      <Text style={styles.armorName}>{armor.name}</Text>
      <Text>Armor Rank: {armor.rank}</Text>
      <Text>Rarity: {armor.rarity}</Text>
      <Text>Armor Type: {armor.type}</Text>
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
  armorName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  buttonContainer: {
    marginBottom: 16,
  },
});

export default ArmorDetailsView;
