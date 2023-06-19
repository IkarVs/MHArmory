// Exemple de navigation vers la vue des détails d'une instance d'armure
import React from 'react';
import { View, TouchableOpacity, Text } from "react-native";

const ArmorDetailsView = ({ armors, navigation }) => {
  const handleArmorPress = (armor) => {
    navigation.navigate('ArmorDetailsView', { armor });
  };

  return (
    <View>
      {armors.map((armor) => (
        <TouchableOpacity key={armor.id} onPress={() => handleArmorPress(armor)}>
          {/* Affichage des détails d'une instance d'armure */}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ArmorDetailsView;
