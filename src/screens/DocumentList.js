import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, Text, View } from 'react-native';
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
    <View>
      <Text>{item.name}</Text>
      {/* Afficher les autres données du document */}
    </View>
  );

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!currentUser) {
    return (
      <View>
        <Text>Connectez-vous pour accéder aux documents</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={documents}
        renderItem={renderDocumentItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default DocumentList;
