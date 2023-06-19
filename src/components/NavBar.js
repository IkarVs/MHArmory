import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CatsScreen from '../screens/CatsScreen';
import HomeScreen from '../screens/HomeScreen';
import DogsScreen from '../screens/DogsScreen';
import ArmorListView from '../screens/ArmorListView';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArmorDetailsView from '../screens/ArmorDetailsView';
import ArmorDetailsScreen from "../screens/ArmorDetailsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  image:{
    height:25,
    width :25,
  },
});
function NavBar() {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name={'home'}
          component={HomeScreen}
          options={{
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
        <Tab.Screen name="Armor" component={ArmorListView}
        options={{
          tabBarIcon:({})=>(
            <View>
              <Image
                style={styles.image}
                source = {require('../../src/assets/icons/armor.png')}
              />
            </View>
          )
        }}
        />
      </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={NavBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ArmorListView"
          component={ArmorListView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ArmorDetailsView"
          component={ArmorDetailsView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dogs"
          component={DogsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cats"
          component={CatsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ArmorDetails"
          component={ArmorDetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
export default App;
