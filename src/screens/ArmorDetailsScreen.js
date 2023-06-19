import React from 'react';
import { View } from 'react-native';
import ArmorDetailsView from './ArmorDetailsView';

const ArmorDetailsScreen = ({ route, navigation }) => {
  const { armor } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <ArmorDetailsView armor={armor} onGoBack={handleGoBack} />
    </View>
  );
};

export default ArmorDetailsScreen;
