import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { firebase } from "@react-native-firebase/auth";
import { Button } from "react-native";
import React from "react";

function GoogleSignOut() {
  const signOutUser = async () => {
    await GoogleSignin.signOut();
    try {
      await firebase.auth().signOut();
    } catch (e) {
      console.log(e);
    }
  };
  return <Button title="SignOut" onPress={signOutUser} />;
}
export default GoogleSignOut;
