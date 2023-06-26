import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';

function WhosConnected() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => unsubscribe(); // Nettoyage de l'effet lors du démontage du composant
  }, []);

  const LogConnected = () => {
    console.log(currentUser);
    console.log(currentUser.uid);
  };

  return (
    <View style={styles.container}>
      {currentUser ? (
        <View style={styles.userInfoContainer}>
          <Image style={styles.image} source={{ uri: currentUser.photoURL }} />
          <Text style={styles.welcomeText}>
            Bienvenue {currentUser.displayName}, dans MHArmory!
          </Text>
        </View>
      ) : (
        <Text>Personne n'est connecté !</Text>
      )}
      <Button title="who's connected" onPress={LogConnected} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WhosConnected;
