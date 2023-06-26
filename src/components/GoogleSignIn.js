import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from "@react-native-firebase/auth";
import {Button, View} from 'react-native';
import React from 'react';

function GoogleSignIn() {
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
    console.log('Google credentials : ' + googleCredential);
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

  return <Button title="Sign in With Google" onPress={SignInWithGoogleAsync} />;
}
export default GoogleSignIn;
