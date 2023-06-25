import React from 'react';
import { View, Text, Button, Image, StyleSheet } from "react-native";

const ArmorDetailsView = ({ armor, onGoBack }) => {
  return (
    <View>
      <Image style={styles.image} source={{uri:  armor.assets.imageMale}} />
      <Text style={styles.armorName}>{armor.name}</Text>
      <Text>Armor Rank : {armor.rank}</Text>
      <Text>Rarity : {armor.rarity}</Text>
      <Text>ArmorType : {armor.type}</Text>
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
