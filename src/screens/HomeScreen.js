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
import DisplayACatImage from '../components/Cat';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

function GoogleSignIn() {
  GoogleSignin.configure({
    webClientId:
      '432126369602-8fbkntp5p15lefulln4f5b5j985bs89t.apps.googleusercontent.com',
  });
  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
  return (
    <Button
      title="Google Sign-In"
      onPress={() =>
        onGoogleButtonPress().then(() => console.log('Signed in with Google!'))
      }
    />
  );
}
export default function HomeScreen({navigation}) {
  return (
    <View>
      <Test />
    </View>
  );
}
function Test() {
  GoogleSignin.configure({
    webClientId:
      '432126369602-8fbkntp5p15lefulln4f5b5j985bs89t.apps.googleusercontent.com',
  });
  const SignInWithGoogleAsync = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in
      .then(user => {
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View>
      <Button title="Sign in With Google" onPress={SignInWithGoogleAsync} />
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
