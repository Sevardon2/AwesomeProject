import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './navigasi/Home';
import About from './navigasi/About';
import Image from './navigasi/Image';
import Profile from './navigasi/Profile';
import Project from './navigasi/Project';

const Stack = createNativeStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Image" component={Image} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Project" component={Project} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;