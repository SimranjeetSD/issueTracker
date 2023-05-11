import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Issues from '../pages/Issues';


const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Issues}/>
        </Stack.Navigator>
    </NavigationContainer>
    
  )
}