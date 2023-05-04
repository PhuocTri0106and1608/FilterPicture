import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/homeScreen/homeScreen';
import ResultScreen from '../screens/resultScreen/resultScreen';

const Stack = createNativeStackNavigator();

export const RootStackScreen = props => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
};

const RootNavigator = props => {

    return (
      <NavigationContainer>
        <RootStackScreen {...props} />      
      </NavigationContainer>
    );
  };
  
  export default RootNavigator;