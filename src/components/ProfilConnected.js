import auth from '@react-native-firebase/auth';
import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from 'react';

function WhosConnected() {
  const user = auth().currentUser;
  const LogConnected = async () => {
    console.log(user);
  };
  return (
    <View>
      {user !== null ? (
        <View>
          <Image style={styles.image} source={{uri : user.photoURL}}></Image>
          <Text>{user.photoURL}</Text>
          <Text>{user.email}</Text>
        </View>
      ) : (
        <Text>Personne n'est connecté !</Text>
      )}
      <Button title="who's connected  " onPress={LogConnected} />
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 360,
    width: 360,
  },
});
export default WhosConnected;
