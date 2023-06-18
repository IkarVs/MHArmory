import React, {Fragment} from "react";
import {
  Button,
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
import { StackActions } from "@react-navigation/native";
export default function CatsScreen({navigation, route}) {
  return (
    <Fragment>
      <View>
        <Text>Jkiff les chats</Text>
      </View>
      <DisplayACatImage></DisplayACatImage>
    </Fragment>
  );
}
