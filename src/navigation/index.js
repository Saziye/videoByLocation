import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapScreen from '../screens/MapScreen';
import VideosScreen from '../screens/VideosScreen';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Videos"
          component={VideosScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
