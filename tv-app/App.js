import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/screens/Home';
import ShowsScreen from './src/screens/Shows';
import GenresScreen from './src/screens/Genres';
import ActorsScreen from './src/screens/Actors';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer styles={styles.container}>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={HomeScreen} options={{ title: 'ShowSpace' }} />
        <Drawer.Screen name='Shows' component={ShowsScreen} options={{ title: 'Shows' }} />
        <Drawer.Screen name='Genres' component={GenresScreen} options={{ title: 'Genres' }} />
        <Drawer.Screen name='Actors' component={ActorsScreen} options={{ title: 'Actors' }} />
      </Drawer.Navigator>
      <StatusBar style="auto" hidden={true} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
