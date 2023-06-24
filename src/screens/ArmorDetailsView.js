import React from 'react';
import { View, Text, Button, Image, StyleSheet } from "react-native";

const ArmorDetailsView = ({ armor, onGoBack }) => {
  return (
    <View>
      <Image style={styles.image} source={{uri: armor.assets && armor.assets.imageMale}} />
      <Text>{armor.name}</Text>
      <Button title="Retour" onPress={onGoBack} />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 360,
    width: 360,
  },
});

export default ArmorDetailsView;
