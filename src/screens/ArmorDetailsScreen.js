import React from 'react';
import { StyleSheet, View } from "react-native";
import ArmorDetailsView from './ArmorDetailsView';

const ArmorDetailsScreen = ({ route, navigation }) => {
  const { armor } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ArmorDetailsView armor={armor} onGoBack={handleGoBack} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ArmorDetailsScreen;
