import React from 'react';
import { StyleSheet, View } from "react-native";
import WeaponDetailsView from "./WeaponDetailsView";

const WeaponDetailsScreen = ({ route, navigation }) => {
  const { weapon } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <WeaponDetailsView weapon={weapon} onGoBack={handleGoBack} />
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

export default WeaponDetailsScreen;
