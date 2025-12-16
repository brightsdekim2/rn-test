import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CourtListScreen from './CourtListScreen';
import CourtDetailScreen from './CourtDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Courts"
          component={CourtListScreen}
        />
        <Stack.Screen
          name="Court"
          component={CourtDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
