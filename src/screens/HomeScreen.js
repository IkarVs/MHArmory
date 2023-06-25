import React from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth, { firebase } from '@react-native-firebase/auth';
import GoogleSignIn from '../components/GoogleSignIn';
import GoogleSignOut from '../components/GoogleSignOut';
import WhosConnected from '../components/ProfilConnected';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <WhosConnected />
      <GoogleSignIn style={styles.bottomView} />
      <GoogleSignOut style={styles.bottomView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    width: 200,
    height: 50,
    marginVertical: 16,
    marginHorizontal: 16,
  },
});
