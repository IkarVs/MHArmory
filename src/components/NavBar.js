import * as React from 'react';
import { Text, View, Image, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CatsScreen from '../screens/CatsScreen';
import HomeScreen from '../screens/HomeScreen';
import DogsScreen from '../screens/DogsScreen';
import ArmorView from "../screens/ArmorView";

const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  image:{
    height:25,
    width :25,
  },
});
export default function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={'home'}
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({}) => (
              <View>
                <Image
                  style={styles.image}
                  source={require('../../src/assets/icons/home.png')}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen name="Cats" component={CatsScreen} />
        <Tab.Screen name="Dogs" component={DogsScreen}/>
        <Tab.Screen name="Armor" component={ArmorView}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
