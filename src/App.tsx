import React from 'react';
import {Text, View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CatsScreen from "./screens/CatsScreen";
import DogsScreen from "./screens/DogsScreen";
import NavBar from "./components/NavBar";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavBar></NavBar>
  );
}

export default App;
