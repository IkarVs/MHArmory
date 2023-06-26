import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const DocumentList = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDocuments = useCallback(async () => {
    try {
      if (currentUser) {
        const querySnapshot = await firestore()
          .collection('FavoriteByAccount')
          .where('User', '==', currentUser.uid)
          .get();

        if (!querySnapshot.empty) {
          const fetchedDocuments = querySnapshot.docs.map(documentSnapshot => ({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          }));

          setDocuments(fetchedDocuments);
        }
      }

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching documents:', error);
      setIsLoading(false);
    }
  }, [currentUser]);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setIsLoading(true);
      fetchDocuments();
    }, [fetchDocuments])
  );

  const renderDocumentItem = ({ item }) => (
    <View style={styles.documentItem}>
      <Text style={styles.documentName}>{item.name}</Text>
      <Text style={styles.documentType}>{item.ItemType}</Text>
      {/* Afficher les autres données du document */}
    </View>
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!currentUser) {
    return (
      <View style={styles.container}>
        <Text style={styles.loginText}>Connectez-vous pour accéder aux documents</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items Favoris</Text>
      <FlatList
        data={documents}
        renderItem={renderDocumentItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  documentItem: {
    marginBottom: 16,
  },
  documentName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  documentType: {
    fontSize: 16,
  },
  loginText: {
    fontSize: 16,
    marginTop: 16,
  },
});

export default DocumentList;
