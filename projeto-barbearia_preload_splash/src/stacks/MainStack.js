import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Preload from '../screens/Preload/index';
import SignIn from '../screens/SignIn/index';


const Stack = createNativeStackNavigator();

export default function MainsStack() {
  return (
  <NavigationContainer>
  <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false
      }}
  >
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SignIn" component={SignIn} />
    
  </Stack.Navigator>
  </NavigationContainer>
)}
