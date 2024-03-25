import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './Pages/StartPage'; // Import your StartPage component
import HomePage from './Pages/HomePage'; // Import your StartPage component
import MapPage from './Pages/MapPage'; // Import your StartPage component
import SettingsPage from './Pages/SettingsPage'; // Import your StartPage component

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={StartPage} /> 
        <Stack.Screen name="Home" component={HomePage} /> 
        <Stack.Screen name="Map" component={MapPage} /> 
        <Stack.Screen name="Settings" component={SettingsPage} /> 
        {/* Other screens if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
