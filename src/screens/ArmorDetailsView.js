import React from 'react';
import { View, Text, Button } from 'react-native';

const ArmorDetailsView = ({ armor, onGoBack }) => {
  return (
    <View>
      <Text>{armor.name}</Text>
      <Button title="Retour" onPress={onGoBack} />
    </View>
  );
};

export default ArmorDetailsView;
