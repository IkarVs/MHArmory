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
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth, {firebase} from '@react-native-firebase/auth';
import GoogleSignIn from '../components/GoogleSignIn';
import GoogleSignOut from '../components/GoogleSignOut';
import WhosConnected from '../components/ProfilConnected';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <GoogleSignIn />
      <GoogleSignOut />
      <WhosConnected />
    </View>
  );
}

const styles = StyleSheet.create({
  button_cat: {
    position: 'relative',
    top: 200,
    left: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    width: 200,
    height: 50,
  },
  button_dog: {
    position: 'relative',
    top: 400,
    left: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    width: 200,
    height: 50,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
