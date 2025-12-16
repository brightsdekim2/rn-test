import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourtListScreen from './CourtListScreen';
import CourtDetailScreen from './CourtDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [reviews, setReviews] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CourtList" component={CourtListScreen} />
        <Stack.Screen name="CourtDetail">
          {props => (
            <CourtDetailScreen
              {...props}
              reviews={reviews}
              setReviews={setReviews}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
